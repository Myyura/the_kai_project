#!/usr/bin/env node

const {spawnSync} = require('node:child_process');

// Pages gets its own predictable profile, separate from the guarded local
// entry point, while using the same Rspress/Rspack resource controls.
const PAGES_BUILD_PROFILE = 'github-pages-rspress';
const PAGES_MAX_OLD_SPACE_MB = 6144;
const PAGES_BUILD_ENV = Object.freeze({
  KAI_BUILD_PROFILE: PAGES_BUILD_PROFILE,
  RSPRESS_PERSISTENT_CACHE: 'false',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  RSPRESS_SSG_WORKER_THREAD_COUNT: '2',
  RSPRESS_SSG_CONCURRENCY: '4',
  RSPRESS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '2',
});
const LOCAL_ONLY_ENVIRONMENT_NAMES = Object.freeze([
  'KAI_ENFORCED_BUILD_PROFILE',
  'KAI_INTERNAL_MEMORY_GUARD_ACTIVE',
]);

function withPagesHeapLimit(nodeOptions = '') {
  const withoutExistingLimits = String(nodeOptions)
    .replace(
      /(^|\s)--max[-_]old[-_]space[-_]size(?:=|\s+)\d+(?=\s|$)/g,
      ' ',
    )
    .replace(
      /(^|\s)--(?:max[-_]semi[-_]space[-_]size|initial[-_]old[-_]space[-_]size)(?:=|\s+)\d+(?=\s|$)/g,
      ' ',
    )
    .replace(
      /(^|\s)--huge[-_]max[-_]old[-_]generation[-_]size(?=\s|$)/g,
      ' ',
    )
    .replace(/\s+/g, ' ')
    .trim();

  return [
    withoutExistingLimits,
    `--max-old-space-size=${PAGES_MAX_OLD_SPACE_MB}`,
  ].filter(Boolean).join(' ');
}

function getPagesBuildEnvironment(source = process.env) {
  const environment = {...source};
  for (const name of LOCAL_ONLY_ENVIRONMENT_NAMES) {
    delete environment[name];
  }

  return {
    ...environment,
    ...PAGES_BUILD_ENV,
    NODE_OPTIONS: withPagesHeapLimit(source.NODE_OPTIONS),
  };
}

function main() {
  const yarnCommand = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
  const environment = getPagesBuildEnvironment();
  console.log(
    `Building GitHub Pages with the dedicated ${PAGES_BUILD_PROFILE} profile: `
      + `${PAGES_MAX_OLD_SPACE_MB} MiB V8 heap, `
      + `${environment.RSPRESS_SSG_WORKER_THREAD_COUNT} SSG workers with `
      + `${environment.RSPRESS_SSG_CONCURRENCY} concurrent routes each, `
      + `${environment.RAYON_NUM_THREADS} Rayon thread, and `
      + `${environment.RSPACK_BLOCKING_THREADS} Rspack blocking threads.`,
  );

  // Do not call `yarn build` here: it is the local entry point and intentionally
  // carries the memory watchdog.
  const result = spawnSync(yarnCommand, ['run', 'build:pages:site'], {
    env: environment,
    stdio: 'inherit',
  });

  if (result.error) throw result.error;
  if (result.signal) {
    console.error(`GitHub Pages build stopped by signal ${result.signal}.`);
    process.exit(1);
  }
  process.exit(result.status ?? 1);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  LOCAL_ONLY_ENVIRONMENT_NAMES,
  PAGES_BUILD_ENV,
  PAGES_BUILD_PROFILE,
  PAGES_MAX_OLD_SPACE_MB,
  getPagesBuildEnvironment,
  withPagesHeapLimit,
};
