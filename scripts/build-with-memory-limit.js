#!/usr/bin/env node

const {spawnSync} = require('node:child_process');

// Keep local and GitHub Pages builds on the same memory-aware profile.
// The standard public Linux runner has 4 CPUs and 16 GB of RAM. Bundles stay
// sequential because they have the highest RSS, while SSG uses a small worker
// pool whose workers can be recycled between batches of pages.
const MAX_OLD_SPACE_MB = 6144;

const LOW_MEMORY_ENV = Object.freeze({
  DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
  // A fresh Rspack cache for this site can exceed the runner's disk/cache
  // allowance, so prefer a predictable cold build over disk pressure.
  DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  // Keep two renderers for throughput, but recycle each worker before its
  // retained heap pushes the 16 GiB runner into swap thrashing.
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '2',
  DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
  // Limit Rspack's native-memory peak while retaining a small amount of
  // blocking-I/O parallelism. The two language bundles still compile in
  // sequence, so one Rayon thread is sufficient on the hosted runner.
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '2',
});

function withHeapLimit(nodeOptions = '') {
  const withoutExistingLimit = String(nodeOptions)
    .replace(
      /(^|\s)--max[-_]old[-_]space[-_]size(?:=|\s+)\d+(?=\s|$)/g,
      ' ',
    )
    .trim();

  return [withoutExistingLimit, `--max-old-space-size=${MAX_OLD_SPACE_MB}`]
    .filter(Boolean)
    .join(' ');
}

function getBuildEnvironment(source = process.env) {
  return {
    ...LOW_MEMORY_ENV,
    // Allow deliberate local/CI experiments while keeping safe defaults.
    ...source,
    NODE_OPTIONS: withHeapLimit(source.NODE_OPTIONS),
  };
}

function main() {
  const yarnCommand = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
  const environment = getBuildEnvironment();
  console.log(
    `Building with the memory-aware profile: ${MAX_OLD_SPACE_MB} MiB V8 heap, `
      + `sequential bundles, ${environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT} `
      + 'SSG workers recycling near '
      + `${Math.round(Number(environment.DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY) / 1000000)} MB, `
      + `${environment.RAYON_NUM_THREADS} Rayon threads, and `
      + `${environment.RSPACK_BLOCKING_THREADS} Rspack blocking threads.`,
  );

  const result = spawnSync(yarnCommand, ['run', 'build:site'], {
    env: environment,
    stdio: 'inherit',
  });

  if (result.error) {
    throw result.error;
  }
  if (result.signal) {
    console.error(`Build stopped by signal ${result.signal}.`);
    process.exit(1);
  }
  process.exit(result.status ?? 1);
}

if (require.main === module) {
  main();
}

module.exports = {
  LOW_MEMORY_ENV,
  MAX_OLD_SPACE_MB,
  getBuildEnvironment,
  withHeapLimit,
};
