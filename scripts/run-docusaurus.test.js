const assert = require('node:assert/strict');
const test = require('node:test');
const packageJson = require('../package.json');
const {
  getCommandEnvironment,
  isMemoryIntensiveCommand,
} = require('./run-docusaurus');

test('the repository docusaurus command enforces the build profile', () => {
  const source = {
    NODE_OPTIONS: '--max-old-space-size=65536',
    DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '64',
  };
  const environment = getCommandEnvironment(['build'], source);

  assert.equal(isMemoryIntensiveCommand(['build']), true);
  assert.equal(environment.NODE_OPTIONS, '--max-old-space-size=6144');
  assert.equal(environment.DOCUSAURUS_SSG_WORKER_THREAD_COUNT, '1');
  assert.equal(environment.KAI_ENFORCED_BUILD_PROFILE, '16gb');
});

test('deploy builds are guarded unless Docusaurus is told to skip them', () => {
  assert.equal(isMemoryIntensiveCommand(['deploy']), true);
  assert.equal(isMemoryIntensiveCommand(['deploy', '--skip-build']), false);
  assert.equal(
    getCommandEnvironment(['deploy'], {}).KAI_ENFORCED_BUILD_PROFILE,
    '16gb',
  );
});

test('non-build docusaurus commands preserve their environment', () => {
  const source = {CUSTOM_VALUE: 'kept'};
  assert.deepEqual(getCommandEnvironment(['start'], source), source);
});

test('package build entry points cannot bypass the guarded runner', () => {
  assert.equal(packageJson.scripts.docusaurus, 'node scripts/run-docusaurus.js');
  assert.equal(packageJson.scripts.build, 'node scripts/build-with-memory-limit.js');
  assert.equal(packageJson.scripts.deploy, 'yarn docusaurus deploy');
  assert.match(packageJson.scripts['build:site'], /yarn docusaurus build/);
  assert.doesNotMatch(packageJson.scripts['build:site'], /(^|&&\s*)docusaurus build/);
});
