const assert = require('node:assert/strict');
const test = require('node:test');

const {
  MAX_OLD_SPACE_MB,
  getBuildEnvironment,
  withHeapLimit,
} = require('./build-with-memory-limit');

test('the balanced build profile fits the 16 GiB GitHub runner', () => {
  const environment = getBuildEnvironment({});

  assert.equal(MAX_OLD_SPACE_MB, 6144);
  assert.ok(MAX_OLD_SPACE_MB < 16 * 1024);
  assert.equal(environment.NODE_OPTIONS, '--max-old-space-size=6144');
  assert.equal(environment.KAI_ENFORCED_BUILD_PROFILE, '16gb');
  assert.equal(environment.DOCUSAURUS_SEQUENTIAL_BUNDLES, 'true');
  assert.equal(environment.DOCUSAURUS_NO_PERSISTENT_CACHE, 'true');
  assert.equal(environment.DISABLE_RSPACK_INCREMENTAL, 'true');
  assert.equal(environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT, '1');
  assert.equal(environment.DOCUSAURUS_SSR_CONCURRENCY, '4');
  assert.equal(
    environment.DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY,
    '300000000',
  );
  assert.equal(environment.RAYON_NUM_THREADS, '1');
  assert.equal(environment.RSPACK_BLOCKING_THREADS, '1');
});

test('inherited tuning cannot override the enforced profile', () => {
  const options = withHeapLimit(
    '--trace-warnings --max-old-space-size=32768 '
      + '--max-semi-space-size=16384 --initial_old_space_size 8192 '
      + '--huge-max-old-generation-size',
  );
  assert.equal(options, '--trace-warnings --max-old-space-size=6144');

  const source = Object.freeze({
    NODE_OPTIONS: '--max_old_space_size 24576',
    DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '3',
    DOCUSAURUS_SSR_CONCURRENCY: '32',
    DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '750000000',
    RAYON_NUM_THREADS: '3',
    RSPACK_BLOCKING_THREADS: '2',
    CUSTOM_VALUE: 'preserved',
  });
  const environment = getBuildEnvironment(source);

  assert.equal(environment.NODE_OPTIONS, '--max-old-space-size=6144');
  assert.equal(environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT, '1');
  assert.equal(environment.DOCUSAURUS_SSR_CONCURRENCY, '4');
  assert.equal(
    environment.DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY,
    '300000000',
  );
  assert.equal(environment.RAYON_NUM_THREADS, '1');
  assert.equal(environment.RSPACK_BLOCKING_THREADS, '1');
  assert.equal(environment.CUSTOM_VALUE, 'preserved');
  assert.equal(source.NODE_OPTIONS, '--max_old_space_size 24576');
});

test('inherited empty values cannot enable cache and incremental mode', () => {
  const environment = getBuildEnvironment({
    DOCUSAURUS_NO_PERSISTENT_CACHE: '',
    DISABLE_RSPACK_INCREMENTAL: '',
  });

  assert.equal(environment.DOCUSAURUS_NO_PERSISTENT_CACHE, 'true');
  assert.equal(environment.DISABLE_RSPACK_INCREMENTAL, 'true');
});
