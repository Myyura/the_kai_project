const assert = require('node:assert/strict');
const test = require('node:test');
const {
  HARD_MEMORY_LIMIT_BYTES,
  HARD_RSS_LIMIT_BYTES,
  MEMORY_GUARD_ACTIVE_ENV,
  getGuardedEnvironment,
  getProcessTreeRss,
  hasActiveParentMemoryGuard,
  isProcessAncestor,
  parseCgroup2Mounts,
  parseCgroupV2Path,
  parseProcessTable,
  resolveCgroupMemoryCurrentPath,
  runWithMemoryGuard,
  sampleCgroupMemoryCurrent,
  sampleMemoryUsage,
} = require('./process-memory-guard');

test('the process-tree cutoff leaves headroom below 16 GiB', () => {
  assert.equal(HARD_MEMORY_LIMIT_BYTES, 14 * 1024 * 1024 * 1024);
  assert.equal(HARD_RSS_LIMIT_BYTES, 14 * 1024 * 1024 * 1024);
  assert.ok(HARD_RSS_LIMIT_BYTES < 16 * 1024 * 1024 * 1024);
});

test('process-tree RSS includes descendants but not unrelated processes', () => {
  const rows = parseProcessTable(`
    10 1 100
    11 10 200
    12 11 300
    20 1 900
  `);
  assert.deepEqual(rows, [
    {pid: 10, ppid: 1, rssBytes: 100 * 1024},
    {pid: 11, ppid: 10, rssBytes: 200 * 1024},
    {pid: 12, ppid: 11, rssBytes: 300 * 1024},
    {pid: 20, ppid: 1, rssBytes: 900 * 1024},
  ]);
  assert.equal(getProcessTreeRss(rows, 10), 600 * 1024);
});

test('cgroup v2 paths resolve through the matching mount root', () => {
  const cgroupOutput = '0::/user.slice/actions/job-123\n';
  const mountInfoOutput = [
    '20 1 0:18 / /proc rw - proc proc rw',
    '30 1 0:29 /user.slice /runner/cgroup rw - cgroup2 cgroup rw',
  ].join('\n');

  assert.equal(parseCgroupV2Path(cgroupOutput), '/user.slice/actions/job-123');
  assert.deepEqual(parseCgroup2Mounts(mountInfoOutput), [{
    root: '/user.slice',
    mountPoint: '/runner/cgroup',
  }]);
  assert.equal(
    resolveCgroupMemoryCurrentPath(cgroupOutput, mountInfoOutput),
    '/runner/cgroup/actions/job-123/memory.current',
  );
});

test('cgroup v2 resolves a mount whose root is the current cgroup', () => {
  assert.equal(
    resolveCgroupMemoryCurrentPath(
      '0::/actions/job-123\n',
      '30 1 0:29 /actions/job-123 /sys/fs/cgroup rw - cgroup2 cgroup rw\n',
    ),
    '/sys/fs/cgroup/memory.current',
  );
});

test('cgroup memory is preferred and invalid values fall back to process RSS', () => {
  const cgroupSample = sampleCgroupMemoryCurrent(
    '/cgroup/memory.current',
    () => '123456\n',
  );
  assert.deepEqual(cgroupSample, {
    available: true,
    usageBytes: 123456,
    source: 'cgroup-v2',
  });

  let processSamples = 0;
  assert.deepEqual(sampleMemoryUsage(10, {
    memoryCurrentPath: '/cgroup/memory.current',
    readFileSync: () => '654321\n',
    processTreeSampler: () => {
      throw new Error('process RSS should not be sampled');
    },
  }), {
    available: true,
    usageBytes: 654321,
    source: 'cgroup-v2',
  });

  assert.deepEqual(sampleMemoryUsage(10, {
    memoryCurrentPath: '/cgroup/memory.current',
    readFileSync: () => 'not-a-number',
    processTreeSampler: () => {
      processSamples += 1;
      return {available: true, rssBytes: 789};
    },
  }), {
    available: true,
    usageBytes: 789,
    source: 'process-tree-rss',
  });
  assert.equal(processSamples, 1);
});

test('the watchdog marks children so descendants do not create nested guards', () => {
  const source = Object.freeze({
    [MEMORY_GUARD_ACTIVE_ENV]: 'untrusted-value',
    CUSTOM_VALUE: 'preserved',
  });
  assert.deepEqual(getGuardedEnvironment(source, 42), {
    [MEMORY_GUARD_ACTIVE_ENV]: 'guard:42',
    CUSTOM_VALUE: 'preserved',
  });
  assert.equal(source[MEMORY_GUARD_ACTIVE_ENV], 'untrusted-value');
});

test('only a live ancestor watchdog marker is trusted', () => {
  const rows = [
    {pid: 10, ppid: 1, rssBytes: 1},
    {pid: 20, ppid: 10, rssBytes: 1},
    {pid: 30, ppid: 20, rssBytes: 1},
    {pid: 40, ppid: 1, rssBytes: 1},
  ];
  assert.equal(isProcessAncestor(rows, 10, 30), true);
  assert.equal(isProcessAncestor(rows, 1, 30), false);
  assert.equal(hasActiveParentMemoryGuard({
    [MEMORY_GUARD_ACTIVE_ENV]: 'guard:10',
  }, {
    currentPid: 30,
    processTableSampler: () => ({available: true, rows}),
  }), true);
  assert.equal(hasActiveParentMemoryGuard({
    [MEMORY_GUARD_ACTIVE_ENV]: '1',
  }, {
    currentPid: 30,
    processTableSampler: () => ({available: true, rows}),
  }), false);
  assert.equal(hasActiveParentMemoryGuard({
    [MEMORY_GUARD_ACTIVE_ENV]: 'guard:40',
  }, {
    currentPid: 30,
    processTableSampler: () => ({available: true, rows}),
  }), false);
  assert.equal(hasActiveParentMemoryGuard({
    [MEMORY_GUARD_ACTIVE_ENV]: 'guard:10',
  }, {
    currentPid: 30,
    processExists: (pid) => pid === 10,
    processTableSampler: () => ({available: false, rows: []}),
  }), true);
});

test('the watchdog force-cleans the group after its leader exits on SIGTERM', {
  skip: process.platform === 'win32',
}, async () => {
  const signals = [];
  const result = await runWithMemoryGuard(process.execPath, [
    '-e',
    'setInterval(() => {}, 1000)',
  ], {
    env: {},
    forceKillDelayMs: 20,
    logger: {error() {}, warn() {}},
    limitBytes: 1,
    memorySampler: () => ({
      available: true,
      usageBytes: 2,
      source: 'process-tree-rss',
    }),
    terminateProcess: (child, signal = 'SIGTERM') => {
      signals.push(signal);
      try {
        process.kill(-child.pid, signal);
      } catch (error) {
        if (error?.code !== 'ESRCH') throw error;
      }
    },
  });

  assert.equal(result.exceeded, true);
  assert.deepEqual(signals, ['SIGTERM', 'SIGKILL']);
});
