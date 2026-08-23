const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const packageJson = require('../package.json');
const {
  LOW_MEMORY_ENV,
} = require('./build-with-memory-limit');
const {
  LOCAL_ONLY_ENVIRONMENT_NAMES,
  PAGES_BUILD_ENV,
  PAGES_BUILD_PROFILE,
  PAGES_MAX_OLD_SPACE_MB,
  getPagesBuildEnvironment,
  withPagesHeapLimit,
} = require('./build-for-pages');

test('Pages applies the dedicated Rspress resource profile', () => {
  const environment = getPagesBuildEnvironment({
    NODE_OPTIONS: '--trace-warnings --max-old-space-size=5120',
    KAI_ENFORCED_BUILD_PROFILE: '16gb',
    KAI_INTERNAL_MEMORY_GUARD_ACTIVE: 'guard:42',
    RSPRESS_SSG_CONCURRENCY: '4',
    RSPACK_BLOCKING_THREADS: '1',
  });

  assert.equal(PAGES_BUILD_PROFILE, 'github-pages-rspress');
  assert.equal(PAGES_MAX_OLD_SPACE_MB, 6144);
  assert.equal(environment.NODE_OPTIONS, '--trace-warnings --max-old-space-size=6144');
  assert.equal(environment.KAI_BUILD_PROFILE, PAGES_BUILD_PROFILE);
  assert.equal(environment.RSPRESS_PERSISTENT_CACHE, 'false');
  assert.equal(environment.DISABLE_RSPACK_INCREMENTAL, 'true');
  assert.equal(environment.RSPRESS_SSG_WORKER_THREAD_COUNT, '2');
  assert.equal(environment.RSPRESS_SSG_CONCURRENCY, '4');
  assert.equal(
    environment.RSPRESS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY,
    '300000000',
  );
  assert.equal(environment.RAYON_NUM_THREADS, '1');
  assert.equal(environment.RSPACK_BLOCKING_THREADS, '2');
  for (const name of LOCAL_ONLY_ENVIRONMENT_NAMES) {
    assert.equal(environment[name], undefined, `${name} must not leak into Pages`);
  }
  assert.deepEqual(PAGES_BUILD_ENV, {
    KAI_BUILD_PROFILE: 'github-pages-rspress',
    RSPRESS_PERSISTENT_CACHE: 'false',
    DISABLE_RSPACK_INCREMENTAL: 'true',
    RSPRESS_SSG_WORKER_THREAD_COUNT: '2',
    RSPRESS_SSG_CONCURRENCY: '4',
    RSPRESS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
    RAYON_NUM_THREADS: '1',
    RSPACK_BLOCKING_THREADS: '2',
  });
});

test('Pages heap options cannot inherit a larger or conflicting V8 heap', () => {
  assert.equal(
    withPagesHeapLimit(
      '--max_old_space_size=65536 --max-semi-space-size=8192 '
        + '--initial_old_space_size 32768 --huge-max-old-generation-size',
    ),
    '--max-old-space-size=6144',
  );
});

test('Pages uses the split Rspress runner without entering the local watchdog', () => {
  assert.equal(packageJson.scripts['build:pages'], 'node scripts/build-for-pages.js');
  assert.match(
    packageJson.scripts['build:pages:site'],
    /(?:^|&&\s*)node scripts\/run-rspress-build\.mjs/,
  );
  assert.doesNotMatch(
    packageJson.scripts['build:pages:site'],
    /yarn rspress build|yarn build(?:\s|$)/,
  );
  assert.doesNotMatch(
    packageJson.scripts['build:pages:site'],
    /build-with-memory-limit|rspress-build-phases/,
  );

  const workflow = fs.readFileSync(
    path.resolve(__dirname, '../.github/workflows/deploy.yml'),
    'utf8',
  );
  assert.match(workflow, /\/usr\/bin\/time -v yarn build:pages/);
  assert.doesNotMatch(workflow, /\/usr\/bin\/time -v yarn build\s*(?:\n|$)/);
});

test('build profiles only expose Rspress controls', () => {
  const controlledNames = [
    ...Object.keys(LOW_MEMORY_ENV),
    ...Object.keys(PAGES_BUILD_ENV),
    ...LOCAL_ONLY_ENVIRONMENT_NAMES,
  ];
  assert.deepEqual(
    controlledNames.filter((name) => name.startsWith('DOCUSAURUS_')),
    [],
  );
});
