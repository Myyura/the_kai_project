#!/usr/bin/env node

const {spawnSync} = require('node:child_process');

// GitHub's standard Linux runner for this public repository has 16 GiB of RAM.
// Keep the Pages build in isolated phases, but give the growing server module
// graph enough V8 headroom beyond the former 6 GiB ceiling.
const PAGES_BUILD_PROFILE = 'github-pages-school-shards-8gb-v1';
const PAGES_MAX_OLD_SPACE_MB = 8192;
const PAGES_BUILD_ENV = Object.freeze({
  KAI_BUILD_PROFILE: PAGES_BUILD_PROFILE,
  DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
  DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '2',
  DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '1',
  KAI_DOCS_SCHOOL_SHARD_COUNT: 'auto',
});
const LOCAL_ONLY_ENVIRONMENT_NAMES = Object.freeze([
  'KAI_ENFORCED_BUILD_PROFILE',
  'KAI_INTERNAL_MEMORY_GUARD_ACTIVE',
  'DOCUSAURUS_SSR_CONCURRENCY',
  'DOCUSAURUS_SKIP_BUNDLING',
  'DOCUSAURUS_EXIT_AFTER_LOADING',
  'DOCUSAURUS_EXIT_AFTER_BUNDLING',
  'DOCUSAURUS_KEEP_SERVER_BUNDLE',
]);
const TRANSIENT_SCHOOL_SHARD_ENVIRONMENT_NAMES = Object.freeze([
  'KAI_DOCS_BUILD_SHARD_ID',
  'KAI_DOCS_BUILD_SHARD_SCHOOLS',
  'KAI_DOCS_BUILD_SHARD_SHARED',
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
  for (const name of TRANSIENT_SCHOOL_SHARD_ENVIRONMENT_NAMES) {
    delete environment[name];
  }

  return {
    ...environment,
    ...PAGES_BUILD_ENV,
    NODE_OPTIONS: withPagesHeapLimit(source.NODE_OPTIONS),
  };
}

function assertPagesBuildEnvironment(source = process.env) {
  const mismatches = Object.entries(PAGES_BUILD_ENV)
    .filter(([name, value]) => source[name] !== value)
    .map(([name, value]) => `${name}=${value}`);

  const expectedNodeOptions = withPagesHeapLimit(source.NODE_OPTIONS);
  if (source.NODE_OPTIONS !== expectedNodeOptions) {
    mismatches.push(
      `NODE_OPTIONS must enforce --max-old-space-size=${PAGES_MAX_OLD_SPACE_MB}`,
    );
  }

  for (const name of LOCAL_ONLY_ENVIRONMENT_NAMES) {
    if (source[name] !== undefined) {
      mismatches.push(`${name} must be unset`);
    }
  }

  if (mismatches.length > 0) {
    throw new Error(
      `The phased GitHub Pages build requires the exact ${PAGES_BUILD_PROFILE} `
        + `profile. Missing or overridden settings: ${[...new Set(mismatches)].join(', ')}.`,
    );
  }
}

function main() {
  const yarnCommand = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
  const environment = getPagesBuildEnvironment();
  console.log(
    `Building GitHub Pages with the memory-aware ${PAGES_BUILD_PROFILE} profile: `
      + `${PAGES_MAX_OLD_SPACE_MB} MiB V8 heap, sequential bundles, `
      + `${environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT} SSG workers, `
      + `${environment.KAI_DOCS_SCHOOL_SHARD_COUNT} school shard planning, `
      + `${environment.RAYON_NUM_THREADS} Rayon thread, and `
      + `${environment.RSPACK_BLOCKING_THREADS} Rspack blocking thread.`,
  );

  // Do not call `yarn build` or `yarn docusaurus build` here: both are local
  // entry points and intentionally carry the 14 GiB guard. The Pages site
  // script invokes the phase adapter directly with this separate profile.
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
  TRANSIENT_SCHOOL_SHARD_ENVIRONMENT_NAMES,
  assertPagesBuildEnvironment,
  getPagesBuildEnvironment,
  withPagesHeapLimit,
};
