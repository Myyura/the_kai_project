const assert = require('node:assert/strict');
const {spawnSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const packageJson = require('../package.json');
const {
  LOW_MEMORY_ENV,
  getBuildEnvironment,
} = require('./build-with-memory-limit');
const {
  LOCAL_ONLY_ENVIRONMENT_NAMES,
  PAGES_BUILD_ENV,
  PAGES_BUILD_PROFILE,
  PAGES_MAX_OLD_SPACE_MB,
  getPagesBuildEnvironment,
  withPagesHeapLimit,
} = require('./build-for-pages');

const repoRoot = path.resolve(__dirname, '..');
const loadBuildConfigScript = `
  process.argv = [process.execPath, 'config-profile-test', 'build'];
  const {loadSiteConfig} = require('@docusaurus/core/lib/server/config');
  loadSiteConfig({siteDir: process.cwd()})
    .then(() => {})
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
`;

function withoutBuildProfile(source = process.env) {
  const environment = {...source, NODE_OPTIONS: ''};
  const controlledNames = new Set([
    ...Object.keys(LOW_MEMORY_ENV),
    ...Object.keys(PAGES_BUILD_ENV),
    ...LOCAL_ONLY_ENVIRONMENT_NAMES,
  ]);
  for (const name of controlledNames) delete environment[name];
  return environment;
}

function loadBuildConfig(environment) {
  return spawnSync(process.execPath, ['-e', loadBuildConfigScript], {
    cwd: repoRoot,
    env: environment,
    encoding: 'utf8',
  });
}

test('Pages restores the last successful resource profile', () => {
  const environment = getPagesBuildEnvironment({
    NODE_OPTIONS: '--trace-warnings --max-old-space-size=5120',
    KAI_ENFORCED_BUILD_PROFILE: '16gb',
    KAI_INTERNAL_MEMORY_GUARD_ACTIVE: 'guard:42',
    DOCUSAURUS_SSR_CONCURRENCY: '4',
    RSPACK_BLOCKING_THREADS: '1',
  });

  assert.equal(PAGES_BUILD_PROFILE, 'github-pages-eb8673');
  assert.equal(PAGES_MAX_OLD_SPACE_MB, 6144);
  assert.equal(environment.NODE_OPTIONS, '--trace-warnings --max-old-space-size=6144');
  assert.equal(environment.KAI_BUILD_PROFILE, PAGES_BUILD_PROFILE);
  assert.equal(environment.DOCUSAURUS_SEQUENTIAL_BUNDLES, 'true');
  assert.equal(environment.DOCUSAURUS_NO_PERSISTENT_CACHE, 'true');
  assert.equal(environment.DISABLE_RSPACK_INCREMENTAL, 'true');
  assert.equal(environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT, '2');
  assert.equal(
    environment.DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY,
    '300000000',
  );
  assert.equal(environment.RAYON_NUM_THREADS, '1');
  assert.equal(environment.RSPACK_BLOCKING_THREADS, '2');
  for (const name of LOCAL_ONLY_ENVIRONMENT_NAMES) {
    assert.equal(environment[name], undefined, `${name} must not leak into Pages`);
  }
  assert.deepEqual(PAGES_BUILD_ENV, {
    KAI_BUILD_PROFILE: 'github-pages-eb8673',
    DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
    DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
    DISABLE_RSPACK_INCREMENTAL: 'true',
    DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '2',
    DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
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

test('Pages bypasses every guarded local build entry point', () => {
  assert.equal(packageJson.scripts['build:pages'], 'node scripts/build-for-pages.js');
  assert.match(packageJson.scripts['build:pages:site'], /(?:^|&&\s*)docusaurus build/);
  assert.doesNotMatch(
    packageJson.scripts['build:pages:site'],
    /yarn docusaurus build|yarn build(?:\s|$)/,
  );
  assert.doesNotMatch(
    packageJson.scripts['build:pages:site'],
    /build-with-memory-limit|run-docusaurus|docusaurus-build-phases/,
  );

  const workflow = fs.readFileSync(
    path.resolve(__dirname, '../.github/workflows/deploy.yml'),
    'utf8',
  );
  assert.match(workflow, /\/usr\/bin\/time -v yarn build:pages/);
  assert.doesNotMatch(workflow, /\/usr\/bin\/time -v yarn build\s*(?:\n|$)/);
});

test('Pages resumes search indexing only after Docusaurus exits', () => {
  const pagesScript = packageJson.scripts['build:pages:site'];
  const docusaurusIndex = pagesScript.indexOf('docusaurus build');
  const searchIndex = pagesScript.indexOf('node scripts/build-search-index.js');
  const publishIndex = pagesScript.indexOf('yarn documents:publish');
  const exportIndex = pagesScript.indexOf('yarn content:export');
  const checkIndex = pagesScript.indexOf('yarn build:check');

  assert.ok(docusaurusIndex >= 0);
  assert.ok(searchIndex > docusaurusIndex);
  assert.ok(publishIndex > searchIndex);
  assert.ok(exportIndex > publishIndex);
  assert.ok(checkIndex > exportIndex);
  assert.doesNotMatch(
    packageJson.scripts['build:site'],
    /build-search-index/,
    'local builds must keep their in-process search index lifecycle',
  );

  const configSource = fs.readFileSync(
    path.resolve(__dirname, '../docusaurus.config.js'),
    'utf8',
  );
  assert.match(
    configSource,
    /deferSearchIndex:\s*hasRequiredPagesBuildEnvironment/,
  );

  const outputCheckSource = fs.readFileSync(
    path.resolve(__dirname, './check-build-output.js'),
    'utf8',
  );
  assert.match(outputCheckSource, /\.kai-search-index-manifest\.json/);
});

test('Docusaurus keeps client module concatenation changes local-only', () => {
  const configSource = fs.readFileSync(
    path.resolve(__dirname, '../docusaurus.config.js'),
    'utf8',
  );
  assert.match(configSource, /KAI_BUILD_PROFILE: pagesBuildProfile/);
  assert.match(
    configSource,
    /\.\.\.\(localMemoryProfile && \{[\s\S]{0,150}concatenateModules: false/,
  );
});

test('Docusaurus accepts the explicit local and Pages profiles only', () => {
  const unprofiled = withoutBuildProfile();
  const rejected = loadBuildConfig(unprofiled);
  assert.notEqual(rejected.status, 0);
  assert.match(rejected.stderr, /Unknown Docusaurus build profile/);

  const local = loadBuildConfig(getBuildEnvironment(unprofiled));
  assert.equal(local.status, 0, local.stderr);

  const pages = loadBuildConfig(getPagesBuildEnvironment(unprofiled));
  assert.equal(pages.status, 0, pages.stderr);
});
