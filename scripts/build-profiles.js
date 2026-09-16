// One source for the launcher settings and Docusaurus's build guard.
const MAX_OLD_SPACE_MB = 6144;
const PAGES_MAX_OLD_SPACE_MB = 8192;
const PAGES_BUILD_PROFILE = 'github-pages-school-shards-8gb-v1';

// Sequential bundles and bounded native workers keep peak memory predictable.
// Cold builds avoid an oversized persistent Rspack cache.
const COMMON_BUILD_ENV = {
  DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
  DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '1',
};

const LOW_MEMORY_ENV = Object.freeze({
  ...COMMON_BUILD_ENV,
  KAI_ENFORCED_BUILD_PROFILE: '16gb',
  // Bound both renderer count and route fan-out on the developer machine.
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '1',
  DOCUSAURUS_SSR_CONCURRENCY: '4',
});

const PAGES_BUILD_ENV = Object.freeze({
  ...COMMON_BUILD_ENV,
  KAI_BUILD_PROFILE: PAGES_BUILD_PROFILE,
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '2',
  KAI_DOCS_SCHOOL_SHARD_COUNT: 'auto',
});

function withNodeHeapLimit(nodeOptions, megabytes) {
  const withoutExistingLimits = String(nodeOptions || '')
    .replace(/(^|\s)--max[-_]old[-_]space[-_]size(?:=|\s+)\d+(?=\s|$)/g, ' ')
    .replace(/(^|\s)--(?:max[-_]semi[-_]space[-_]size|initial[-_]old[-_]space[-_]size)(?:=|\s+)\d+(?=\s|$)/g, ' ')
    .replace(/(^|\s)--huge[-_]max[-_]old[-_]generation[-_]size(?=\s|$)/g, ' ')
    .replace(/\s+/g, ' ').trim();
  return [withoutExistingLimits, `--max-old-space-size=${megabytes}`].filter(Boolean).join(' ');
}

module.exports = {MAX_OLD_SPACE_MB, PAGES_MAX_OLD_SPACE_MB, PAGES_BUILD_PROFILE, LOW_MEMORY_ENV, PAGES_BUILD_ENV, withNodeHeapLimit};
