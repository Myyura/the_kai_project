#!/usr/bin/env node

const {
  describeMeasurementSource,
  runWithMemoryGuard,
} = require('./process-memory-guard');

const {MAX_OLD_SPACE_MB, LOW_MEMORY_ENV, withNodeHeapLimit} = require('./build-profiles');

const withHeapLimit = (nodeOptions = '') => withNodeHeapLimit(nodeOptions, MAX_OLD_SPACE_MB);

function getBuildEnvironment(source = process.env) {
  const environment = {...source};
  // A shell left over from `yarn build:pages` must not make a guarded local
  // build look like the Pages profile at the phase dispatcher.
  delete environment.KAI_BUILD_PROFILE;

  return {
    ...environment,
    // These values are enforced, rather than merely defaults: an inherited
    // shell or CI variable must not silently turn a routine build into a
    // machine-wide memory spike.
    ...LOW_MEMORY_ENV,
    NODE_OPTIONS: withHeapLimit(source.NODE_OPTIONS),
  };
}

async function main() {
  const yarnCommand = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
  const environment = getBuildEnvironment();
  console.log(
    `Building with the memory-aware profile: ${MAX_OLD_SPACE_MB} MiB V8 heap, `
      + `isolated sequential bundles, ${environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT} `
      + `SSG worker with ${environment.DOCUSAURUS_SSR_CONCURRENCY} concurrent routes, `
      + `${environment.RAYON_NUM_THREADS} Rayon thread, and `
      + `${environment.RSPACK_BLOCKING_THREADS} Rspack blocking thread.`,
  );

  const result = await runWithMemoryGuard(yarnCommand, ['run', 'build:site'], {
    env: environment,
    label: 'Full build',
  });

  if (result.watchdogAvailable) {
    console.log(
      `Peak sampled build memory (${describeMeasurementSource(result.measurementSource)}): `
        + `${(result.maxUsageBytes / 1024 / 1024 / 1024).toFixed(2)} GiB.`,
    );
  }
  if (result.exceeded) process.exit(1);
  if (result.signal) {
    console.error(`Build stopped by signal ${result.signal}.`);
    process.exit(1);
  }
  process.exit(result.status ?? 1);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  LOW_MEMORY_ENV,
  MAX_OLD_SPACE_MB,
  getBuildEnvironment,
  withHeapLimit,
};
