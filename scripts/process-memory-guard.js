#!/usr/bin/env node

const {spawn, spawnSync} = require('node:child_process');

const GIB = 1024 * 1024 * 1024;
// Stop well before the requested 16 GiB ceiling so sampling latency and the
// desktop itself still have headroom.
const HARD_RSS_LIMIT_BYTES = 14 * GIB;
const SAMPLE_INTERVAL_MS = 500;

function parseProcessTable(output) {
  return String(output || '').split('\n').flatMap((line) => {
    const match = line.trim().match(/^(\d+)\s+(\d+)\s+(\d+)$/);
    if (!match) return [];
    return [{pid: Number(match[1]), ppid: Number(match[2]), rssBytes: Number(match[3]) * 1024}];
  });
}

function getProcessTreeRss(rows, rootPid) {
  const treePids = new Set([rootPid]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const row of rows) {
      if (treePids.has(row.ppid) && !treePids.has(row.pid)) {
        treePids.add(row.pid);
        changed = true;
      }
    }
  }
  return rows
    .filter((row) => treePids.has(row.pid))
    .reduce((total, row) => total + row.rssBytes, 0);
}

function sampleProcessTreeRss(rootPid) {
  if (process.platform === 'win32') {
    return {available: false, rssBytes: 0};
  }
  const result = spawnSync('ps', ['-axo', 'pid=,ppid=,rss='], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  if (result.status !== 0) return {available: false, rssBytes: 0};
  return {
    available: true,
    rssBytes: getProcessTreeRss(parseProcessTable(result.stdout), rootPid),
  };
}

function terminateProcessGroup(child, signal = 'SIGTERM') {
  if (!child?.pid) return;
  try {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], {stdio: 'ignore'});
    } else {
      process.kill(-child.pid, signal);
    }
  } catch (error) {
    if (error?.code !== 'ESRCH') throw error;
  }
}

async function runWithMemoryGuard(command, args, {
  env = process.env,
  cwd = process.cwd(),
  label = 'Build',
  limitBytes = HARD_RSS_LIMIT_BYTES,
} = {}) {
  const child = spawn(command, args, {
    cwd,
    env,
    stdio: 'inherit',
    detached: process.platform !== 'win32',
  });
  let exceeded = false;
  let maxRssBytes = 0;
  let watchdogAvailable = null;
  let warnedUnavailable = false;
  let forceKillTimer = null;

  const sample = () => {
    if (!child.pid || child.exitCode !== null || child.signalCode !== null) return;
    const current = sampleProcessTreeRss(child.pid);
    watchdogAvailable = current.available;
    if (!current.available) {
      if (!warnedUnavailable) {
        warnedUnavailable = true;
        console.warn(
          `${label} RSS watchdog is unavailable in this environment; `
            + 'heap and concurrency limits remain enforced.',
        );
      }
      return;
    }
    maxRssBytes = Math.max(maxRssBytes, current.rssBytes);
    if (!exceeded && current.rssBytes > limitBytes) {
      exceeded = true;
      console.error(
        `${label} stopped after its process tree reached `
          + `${(current.rssBytes / GIB).toFixed(2)} GiB; the safety cutoff is `
          + `${(limitBytes / GIB).toFixed(0)} GiB for the 16 GiB profile.`,
      );
      terminateProcessGroup(child);
      forceKillTimer = setTimeout(() => {
        if (child.exitCode === null && child.signalCode === null) {
          terminateProcessGroup(child, 'SIGKILL');
        }
      }, 2000);
    }
  };

  sample();
  const interval = setInterval(sample, SAMPLE_INTERVAL_MS);
  const onSigint = () => terminateProcessGroup(child, 'SIGINT');
  const onSigterm = () => terminateProcessGroup(child, 'SIGTERM');
  process.once('SIGINT', onSigint);
  process.once('SIGTERM', onSigterm);

  const result = await new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('close', (status, signal) => resolve({status, signal}));
  }).finally(() => {
    clearInterval(interval);
    if (forceKillTimer) clearTimeout(forceKillTimer);
    process.removeListener('SIGINT', onSigint);
    process.removeListener('SIGTERM', onSigterm);
  });

  return {
    ...result,
    exceeded,
    maxRssBytes,
    watchdogAvailable: Boolean(watchdogAvailable),
  };
}

module.exports = {
  HARD_RSS_LIMIT_BYTES,
  SAMPLE_INTERVAL_MS,
  getProcessTreeRss,
  parseProcessTable,
  runWithMemoryGuard,
  sampleProcessTreeRss,
};
