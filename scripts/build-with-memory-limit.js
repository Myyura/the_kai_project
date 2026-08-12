#!/usr/bin/env node

const {spawnSync} = require('node:child_process');

// Keep the local build on the same conservative profile as GitHub Pages.
// A 6 GiB V8 heap plus serialized native work leaves substantial headroom
// below the 16 GiB target. NODE_OPTIONS alone is not a hard RSS/cgroup cap.
const MAX_OLD_SPACE_MB = 6144;

const LOW_MEMORY_ENV = Object.freeze({
  DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
  DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '1',
  DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '250000000',
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '1',
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
    ...source,
    ...LOW_MEMORY_ENV,
    NODE_OPTIONS: withHeapLimit(source.NODE_OPTIONS),
  };
}

function main() {
  const yarnCommand = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
  console.log(
    `Building with the low-memory profile: ${MAX_OLD_SPACE_MB} MiB V8 heap, `
      + 'sequential bundles, and one SSG worker.',
  );

  const result = spawnSync(yarnCommand, ['run', 'build:site'], {
    env: getBuildEnvironment(),
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
