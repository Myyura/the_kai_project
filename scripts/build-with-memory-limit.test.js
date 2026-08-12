const assert = require('node:assert/strict');
const test = require('node:test');

const {
  LOW_MEMORY_ENV,
  MAX_OLD_SPACE_MB,
  getBuildEnvironment,
  withHeapLimit,
} = require('./build-with-memory-limit');

test('the build profile keeps the V8 heap well below the 16 GiB target', () => {
  assert.equal(MAX_OLD_SPACE_MB, 6144);
  assert.ok(MAX_OLD_SPACE_MB < 16 * 1024);
  assert.equal(LOW_MEMORY_ENV.DOCUSAURUS_SEQUENTIAL_BUNDLES, 'true');
  assert.equal(LOW_MEMORY_ENV.DOCUSAURUS_SSG_WORKER_THREAD_COUNT, '1');
  assert.equal(LOW_MEMORY_ENV.RSPACK_BLOCKING_THREADS, '1');
});

test('the build profile replaces a larger inherited V8 heap limit', () => {
  const options = withHeapLimit('--trace-warnings --max-old-space-size=32768');
  assert.equal(options, '--trace-warnings --max-old-space-size=6144');

  const environment = getBuildEnvironment({
    NODE_OPTIONS: '--max_old_space_size 24576',
    CUSTOM_VALUE: 'preserved',
  });
  assert.equal(environment.NODE_OPTIONS, '--max-old-space-size=6144');
  assert.equal(environment.CUSTOM_VALUE, 'preserved');
});
