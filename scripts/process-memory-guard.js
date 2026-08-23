#!/usr/bin/env node

const {spawn, spawnSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const GIB = 1024 * 1024 * 1024;
// Stop well before the requested 16 GiB ceiling so sampling latency and the
// desktop itself still have headroom.
const HARD_MEMORY_LIMIT_BYTES = 14 * GIB;
// Retain the original export for callers that adopted the first guard version.
const HARD_RSS_LIMIT_BYTES = HARD_MEMORY_LIMIT_BYTES;
const SAMPLE_INTERVAL_MS = 500;
const MEMORY_GUARD_ACTIVE_ENV = 'KAI_INTERNAL_MEMORY_GUARD_ACTIVE';

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

function sampleProcessTable() {
  if (process.platform === 'win32') {
    return {available: false, rows: []};
  }
  const result = spawnSync('ps', ['-axo', 'pid=,ppid=,rss='], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  if (result.status !== 0) return {available: false, rows: []};
  return {available: true, rows: parseProcessTable(result.stdout)};
}

function sampleProcessTreeRss(rootPid) {
  const table = sampleProcessTable();
  if (!table.available) return {available: false, rssBytes: 0};
  return {
    available: true,
    rssBytes: getProcessTreeRss(table.rows, rootPid),
  };
}

function isProcessAncestor(rows, ancestorPid, descendantPid) {
  if (!Number.isInteger(ancestorPid) || ancestorPid <= 1 || ancestorPid === descendantPid) {
    return false;
  }
  const parentByPid = new Map(rows.map(({pid, ppid}) => [pid, ppid]));
  const visited = new Set();
  let currentPid = descendantPid;
  while (parentByPid.has(currentPid) && !visited.has(currentPid)) {
    visited.add(currentPid);
    currentPid = parentByPid.get(currentPid);
    if (currentPid === ancestorPid) return true;
  }
  return false;
}

function parseCgroupV2Path(output) {
  for (const line of String(output || '').split('\n')) {
    const match = line.trim().match(/^0::(\/.*)$/);
    if (match) return path.posix.normalize(match[1]);
  }
  return null;
}

function decodeMountInfoPath(value) {
  return String(value || '').replace(/\\([0-7]{3})/g, (_match, octal) => (
    String.fromCharCode(Number.parseInt(octal, 8))
  ));
}

function parseCgroup2Mounts(output) {
  return String(output || '').split('\n').flatMap((line) => {
    const fields = line.trim().split(/\s+/);
    const separatorIndex = fields.indexOf('-');
    if (separatorIndex < 6 || fields[separatorIndex + 1] !== 'cgroup2') return [];
    return [{
      root: path.posix.normalize(decodeMountInfoPath(fields[3])),
      mountPoint: path.posix.normalize(decodeMountInfoPath(fields[4])),
    }];
  });
}

function isPathInside(root, target) {
  return root === '/'
    || target === root
    || target.startsWith(`${root}/`);
}

function resolveCgroupMemoryCurrentPath(cgroupOutput, mountInfoOutput) {
  const cgroupPath = parseCgroupV2Path(cgroupOutput);
  if (!cgroupPath) return null;

  const mount = parseCgroup2Mounts(mountInfoOutput)
    .filter(({root}) => isPathInside(root, cgroupPath))
    .sort((left, right) => right.root.length - left.root.length)[0];
  if (!mount) return null;

  const relativePath = path.posix.relative(mount.root, cgroupPath);
  return path.posix.join(mount.mountPoint, relativePath, 'memory.current');
}

function getCgroupMemoryCurrentPath({
  platform = process.platform,
  readFileSync = fs.readFileSync,
} = {}) {
  if (platform !== 'linux') return null;
  try {
    return resolveCgroupMemoryCurrentPath(
      readFileSync('/proc/self/cgroup', 'utf8'),
      readFileSync('/proc/self/mountinfo', 'utf8'),
    );
  } catch (_error) {
    return null;
  }
}

function sampleCgroupMemoryCurrent(memoryCurrentPath, readFileSync = fs.readFileSync) {
  if (!memoryCurrentPath) return {available: false, usageBytes: 0, source: null};
  try {
    const rawValue = String(readFileSync(memoryCurrentPath, 'utf8')).trim();
    if (!/^\d+$/.test(rawValue)) {
      return {available: false, usageBytes: 0, source: null};
    }
    const usageBytes = Number(rawValue);
    if (!Number.isSafeInteger(usageBytes)) {
      return {available: false, usageBytes: 0, source: null};
    }
    return {available: true, usageBytes, source: 'cgroup-v2'};
  } catch (_error) {
    return {available: false, usageBytes: 0, source: null};
  }
}

function sampleMemoryUsage(rootPid, {
  memoryCurrentPath = getCgroupMemoryCurrentPath(),
  readFileSync = fs.readFileSync,
  processTreeSampler = sampleProcessTreeRss,
} = {}) {
  const cgroup = sampleCgroupMemoryCurrent(memoryCurrentPath, readFileSync);
  if (cgroup.available) return cgroup;

  const processTree = processTreeSampler(rootPid);
  return {
    available: processTree.available,
    usageBytes: processTree.rssBytes,
    source: processTree.available ? 'process-tree-rss' : null,
  };
}

function describeMeasurementSource(source) {
  return source === 'cgroup-v2' ? 'cgroup memory usage' : 'process tree RSS';
}

function getGuardedEnvironment(env = process.env, guardPid = process.pid) {
  return {...env, [MEMORY_GUARD_ACTIVE_ENV]: `guard:${guardPid}`};
}

function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (_error) {
    return false;
  }
}

function hasActiveParentMemoryGuard(source = process.env, {
  currentPid = process.pid,
  processExists = isProcessRunning,
  processTableSampler = sampleProcessTable,
} = {}) {
  const match = String(source[MEMORY_GUARD_ACTIVE_ENV] || '').match(/^guard:(\d+)$/);
  if (!match) return false;
  const guardPid = Number(match[1]);
  if (!Number.isInteger(guardPid) || guardPid <= 1 || guardPid === currentPid) return false;
  const table = processTableSampler();
  return table.available
    ? isProcessAncestor(table.rows, guardPid, currentPid)
    : processExists(guardPid);
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
  limitBytes = HARD_MEMORY_LIMIT_BYTES,
  forceKillDelayMs = 2000,
  logger = console,
  memorySampler = sampleMemoryUsage,
  terminateProcess = terminateProcessGroup,
} = {}) {
  const child = spawn(command, args, {
    cwd,
    // Descendant entry points still enforce the build profile, but this
    // internal marker prevents them from creating a second detached watchdog.
    env: getGuardedEnvironment(env),
    stdio: 'inherit',
    detached: process.platform !== 'win32',
  });
  const memoryCurrentPath = getCgroupMemoryCurrentPath();
  let exceeded = false;
  let maxUsageBytes = 0;
  let measurementSource = null;
  let watchdogAvailable = null;
  let warnedUnavailable = false;
  let forceKillTimer = null;
  let forceKillPromise = null;

  const sample = () => {
    if (!child.pid || child.exitCode !== null || child.signalCode !== null) return;
    const current = memorySampler(child.pid, {memoryCurrentPath});
    watchdogAvailable = current.available;
    if (!current.available) {
      if (!warnedUnavailable) {
        warnedUnavailable = true;
        logger.warn(
          `${label} memory watchdog is unavailable in this environment; `
            + 'heap and concurrency limits remain enforced.',
        );
      }
      return;
    }
    if (current.usageBytes >= maxUsageBytes) {
      maxUsageBytes = current.usageBytes;
      measurementSource = current.source;
    }
    if (!exceeded && current.usageBytes > limitBytes) {
      exceeded = true;
      logger.error(
        `${label} stopped after its ${describeMeasurementSource(current.source)} reached `
          + `${(current.usageBytes / GIB).toFixed(2)} GiB; the safety cutoff is `
          + `${(limitBytes / GIB).toFixed(0)} GiB for the 16 GiB profile.`,
      );
      terminateProcess(child);
      // The group leader may exit before a descendant that ignores SIGTERM.
      // Keep the guard alive through the grace period, then target the original
      // process group even if the leader has already closed.
      forceKillPromise = new Promise((resolve, reject) => {
        forceKillTimer = setTimeout(() => {
          try {
            terminateProcess(child, 'SIGKILL');
            resolve();
          } catch (error) {
            reject(error);
          }
        }, forceKillDelayMs);
      });
    }
  };

  sample();
  const interval = setInterval(sample, SAMPLE_INTERVAL_MS);
  const onSigint = () => terminateProcess(child, 'SIGINT');
  const onSigterm = () => terminateProcess(child, 'SIGTERM');
  process.once('SIGINT', onSigint);
  process.once('SIGTERM', onSigterm);

  let result;
  try {
    result = await new Promise((resolve, reject) => {
      child.once('error', reject);
      child.once('close', (status, signal) => resolve({status, signal}));
    });
    if (forceKillPromise) await forceKillPromise;
  } finally {
    clearInterval(interval);
    if (forceKillTimer) clearTimeout(forceKillTimer);
    process.removeListener('SIGINT', onSigint);
    process.removeListener('SIGTERM', onSigterm);
  }

  return {
    ...result,
    exceeded,
    maxUsageBytes,
    // Backward-compatible alias. New callers should use maxUsageBytes because
    // cgroup memory.current is broader than RSS.
    maxRssBytes: maxUsageBytes,
    measurementSource,
    watchdogAvailable: Boolean(watchdogAvailable),
  };
}

module.exports = {
  HARD_MEMORY_LIMIT_BYTES,
  HARD_RSS_LIMIT_BYTES,
  MEMORY_GUARD_ACTIVE_ENV,
  SAMPLE_INTERVAL_MS,
  decodeMountInfoPath,
  describeMeasurementSource,
  getCgroupMemoryCurrentPath,
  getGuardedEnvironment,
  getProcessTreeRss,
  hasActiveParentMemoryGuard,
  isProcessAncestor,
  isProcessRunning,
  parseCgroup2Mounts,
  parseCgroupV2Path,
  parseProcessTable,
  resolveCgroupMemoryCurrentPath,
  runWithMemoryGuard,
  sampleCgroupMemoryCurrent,
  sampleMemoryUsage,
  sampleProcessTable,
  sampleProcessTreeRss,
};
