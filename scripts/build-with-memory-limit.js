#!/usr/bin/env node

const {
  describeMeasurementSource,
  runWithMemoryGuard,
} = require('./process-memory-guard');

// Keep routine local builds inside a predictable 16 GiB machine profile.
// Bundles run in isolated sequential processes because they have the highest
// RSS, while SSG uses one renderer to avoid retaining multiple page heaps at
// the same time. GitHub Pages has a separate known-good build entry point.
// Leave native headroom for Rspack: the client compiler allocates substantial
// memory outside V8's managed heap.
const MAX_OLD_SPACE_MB = 6144;

const LOW_MEMORY_ENV = Object.freeze({
  KAI_ENFORCED_BUILD_PROFILE: '16gb',
  DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
  // A fresh Rspack cache for this site can exceed the runner's disk/cache
  // allowance, so prefer a predictable cold build over disk pressure.
  DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  // One renderer is deliberately slower but prevents multiple page heaps from
  // growing at the same time on a developer machine.
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '1',
  // A single renderer still processes 32 routes concurrently by default.
  // Bound the in-thread fan-out as well as the worker count.
  DOCUSAURUS_SSR_CONCURRENCY: '4',
  DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
  // Limit Rspack's native-memory peak while retaining a small amount of
  // blocking-I/O parallelism. The client and server bundles still compile in
  // sequence, so one Rayon thread is sufficient on the hosted runner.
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '1',
});

function withHeapLimit(nodeOptions = '') {
  const withoutExistingLimit = String(nodeOptions)
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

  return [withoutExistingLimit, `--max-old-space-size=${MAX_OLD_SPACE_MB}`]
    .filter(Boolean)
    .join(' ');
}

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
