const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const zlib = require('node:zlib');
const packageJson = require('../package.json');
const {
  DEPLOY_COMMAND_ARGUMENTS,
  assertExpectedRemote,
  assertDeploymentArtifacts,
  assertRemoteHead,
  assertRepositoryState,
  assertSafeGitAuthentication,
  getDeploymentEnvironment,
  getMissingBuildEnvironment,
  getYarnInvocation,
  parseArguments,
  parseEnvironmentFile,
  parseRemoteHead,
  withoutGitDeploymentCredentials,
} = require('./deploy-pages-local');

test('local Pages deployment has a dedicated package entry point', () => {
  assert.equal(
    packageJson.scripts['deploy:local'],
    'node scripts/deploy-pages-local.js',
  );
  assert.deepEqual(DEPLOY_COMMAND_ARGUMENTS, [
    'run',
    'docusaurus',
    'deploy',
    '--skip-build',
  ]);
});

test('local Pages deployment arguments are explicit and reject unknown flags', () => {
  assert.deepEqual(
    {
      ...parseArguments([
        '--allow-dirty',
        '--allow-non-main',
        '--env-file',
        'secrets/pages.env',
      ]),
      envFile: path.relative(
        process.cwd(),
        parseArguments(['--env-file', 'secrets/pages.env']).envFile,
      ),
    },
    {
      allowDirty: true,
      allowNonMain: true,
      envFile: path.join('secrets', 'pages.env'),
      envFileWasExplicit: true,
      help: false,
    },
  );
  assert.throws(() => parseArguments(['--unknown']), /Unknown option/);
  assert.throws(() => parseArguments(['--env-file']), /requires a path/);
});

test('production environment files support comments, exports, and quoted values', () => {
  assert.deepEqual(parseEnvironmentFile(`
# Local production values
export SUPABASE_URL=https://example.supabase.co
SUPABASE_ANON_KEY='public-token'
HCAPTCHA_SITE_KEY="site\\tkey"
VALUE_WITH_COMMENT=value # comment
`), {
    SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_ANON_KEY: 'public-token',
    HCAPTCHA_SITE_KEY: 'site\tkey',
    VALUE_WITH_COMMENT: 'value',
  });
});

test('shell environment wins and deployment settings match production Pages', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-pages-env-'));
  const envFile = path.join(directory, '.env.production.local');
  fs.writeFileSync(envFile, 'SUPABASE_URL=https://from-file.example\nGIT_USER=file-user\n');

  const environment = getDeploymentEnvironment({
    SUPABASE_URL: 'https://from-shell.example',
    SUPABASE_ANON_KEY: 'anon-key',
    HCAPTCHA_SITE_KEY: 'captcha-key',
  }, {
    envFile,
    remoteUrl: 'https://github.com/Myyura/the_kai_project.git',
  });

  assert.equal(environment.SUPABASE_URL, 'https://from-shell.example');
  assert.equal(environment.GIT_USER, 'file-user');
  assert.equal(environment.CURRENT_BRANCH, 'main');
  assert.equal(environment.DEPLOYMENT_BRANCH, 'gh-pages');
  assert.equal(environment.ORGANIZATION_NAME, 'Myyura');
  assert.equal(environment.PROBLEM_SETS_ENABLED, 'true');
  assert.equal(environment.PROJECT_NAME, 'the_kai_project');
  assert.deepEqual(getMissingBuildEnvironment(environment), []);
});

test('GitHub HTTPS and SSH remotes receive the correct authentication mode', () => {
  const envFile = path.join(os.tmpdir(), 'kai-pages-no-such-env-file');
  const httpsEnvironment = getDeploymentEnvironment({}, {
    envFile,
    remoteUrl: 'https://github.com/Myyura/the_kai_project.git',
  });
  assert.equal(httpsEnvironment.GIT_USER, 'Myyura');

  const sshEnvironment = getDeploymentEnvironment({}, {
    envFile,
    remoteUrl: 'git@github.com:Myyura/the_kai_project.git',
  });
  assert.equal(sshEnvironment.USE_SSH, 'true');
});

test('deployment target cannot be redirected by inherited environment variables', () => {
  const environment = getDeploymentEnvironment({
    CIRCLE_PULL_REQUEST: 'https://example.test/pull/1',
    CI_PULL_REQUEST: 'true',
    DEPLOYMENT_BRANCH: 'main',
    GITHUB_HOST: 'malicious.example',
    GITHUB_PORT: '1234',
    ORGANIZATION_NAME: 'someone-else',
    PROJECT_NAME: 'somewhere-else',
  }, {
    envFile: path.join(os.tmpdir(), 'kai-pages-no-such-env-file'),
    remoteUrl: 'https://github.com/Myyura/the_kai_project.git',
  });

  assert.equal(environment.DEPLOYMENT_BRANCH, 'gh-pages');
  assert.equal(environment.GITHUB_HOST, 'github.com');
  assert.equal(environment.ORGANIZATION_NAME, 'Myyura');
  assert.equal(environment.PROJECT_NAME, 'the_kai_project');
  assert.equal(environment.CI_PULL_REQUEST, undefined);
  assert.equal(environment.CIRCLE_PULL_REQUEST, undefined);
  assert.equal(environment.GITHUB_PORT, undefined);
});

test('Git deployment credentials are not exposed to the long-running build', () => {
  const buildEnvironment = withoutGitDeploymentCredentials({
    GIT_PASS: 'secret-pat',
    GIT_USER: 'Myyura',
    GIT_USER_EMAIL: 'user@example.com',
    GIT_USER_NAME: 'User',
    SUPABASE_URL: 'https://example.supabase.co',
    USE_SSH: 'true',
  });

  assert.deepEqual(buildEnvironment, {
    SUPABASE_URL: 'https://example.supabase.co',
  });
  assert.throws(
    () => assertSafeGitAuthentication({GIT_PASS: 'secret-pat'}),
    /GIT_PASS is intentionally unsupported/,
  );
  assert.doesNotThrow(() => assertSafeGitAuthentication({USE_SSH: 'true'}));
});

test('Yarn uses cmd.exe for Windows command shims', () => {
  assert.deepEqual(getYarnInvocation('darwin'), {
    command: 'yarn',
    prefixArguments: [],
  });
  assert.deepEqual(getYarnInvocation('win32', 'C:\\Windows\\System32\\cmd.exe'), {
    command: 'C:\\Windows\\System32\\cmd.exe',
    prefixArguments: ['/d', '/s', '/c', 'yarn.cmd'],
  });
});

test('deployment requires the expected origin and an exact remote branch match', () => {
  assert.doesNotThrow(() => assertExpectedRemote(
    'https://github.com/Myyura/the_kai_project.git',
  ));
  assert.doesNotThrow(() => assertExpectedRemote(
    'git@github.com:Myyura/the_kai_project.git',
  ));
  assert.throws(
    () => assertExpectedRemote('https://github.com/someone/fork.git'),
    /origin must point/,
  );
  assert.throws(
    () => assertExpectedRemote(
      'https://malicious.example/github.com/Myyura/the_kai_project.git',
    ),
    /origin must point/,
  );

  const head = 'a'.repeat(40);
  assert.equal(parseRemoteHead(`${head}\trefs/heads/main\n`, 'main'), head);
  assert.throws(() => parseRemoteHead('', 'main'), /Unable to resolve/);
  assert.doesNotThrow(() => assertRemoteHead({
    branch: 'main',
    head,
  }, head));
  assert.throws(() => assertRemoteHead({
    branch: 'main',
    head,
  }, 'b'.repeat(40)), /does not exactly match/);
});

test('repository guard rejects dirty and non-main production deploys by default', () => {
  assert.doesNotThrow(() => assertRepositoryState({
    branch: 'main',
    changes: '',
  }, {}));
  assert.throws(() => assertRepositoryState({
    branch: 'feature',
    changes: '',
  }, {}), /Refusing to deploy from feature/);
  assert.throws(() => assertRepositoryState({
    branch: 'main',
    changes: ' M docs/example.md',
  }, {}), /uncommitted working tree/);
});

test('deployment artifacts include Pages control files and match HEAD', () => {
  const buildDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-pages-build-'));
  const exportDirectory = path.join(buildDirectory, 'content-export', 'v1');
  fs.mkdirSync(exportDirectory, {recursive: true});
  fs.writeFileSync(path.join(buildDirectory, 'index.html'), '<!doctype html>');
  fs.writeFileSync(path.join(buildDirectory, '.nojekyll'), '');
  fs.writeFileSync(path.join(buildDirectory, 'CNAME'), 'runjp.com\n');
  fs.writeFileSync(
    path.join(exportDirectory, 'kai-content-v1.json.gz'),
    zlib.gzipSync(JSON.stringify({source: {commit: 'abc123', ref: 'main'}})),
  );

  assert.doesNotThrow(() => assertDeploymentArtifacts(
    buildDirectory,
    {branch: 'main', head: 'abc123'},
  ));
  assert.throws(() => assertDeploymentArtifacts(
    buildDirectory,
    {branch: 'main', head: 'different'},
  ), /build belongs to commit/);
  assert.throws(() => assertDeploymentArtifacts(
    buildDirectory,
    {branch: 'feature', head: 'abc123'},
  ), /build belongs to branch/);
});
