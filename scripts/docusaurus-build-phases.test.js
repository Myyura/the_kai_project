const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {getBuildEnvironment} = require('./build-with-memory-limit');
const {
  PAGES_BUILD_ENV,
  getPagesBuildEnvironment,
} = require('./build-for-pages');
const {
  BUILD_LOCALE,
  BUNDLING_CONTROL_ENV,
  SUPPORTED_DOCUS_VERSION,
  assertActiveMemoryGuard,
  assertMemoryProfile,
  assertPhasedBuildProfile,
  assertSupportedDocusaurusVersion,
  createPhaseCommands,
  getPhaseEnvironment,
  runPhasedBuild,
  verifyPhaseArtifacts,
} = require('./docusaurus-build-phases');
const {
  assertSafeOutputDirectory,
  assertSingleLocale,
  createTargetConfig,
  prepareProcessEnvironment,
  withoutCompilerDependencies,
} = require('./docusaurus-bundle-target');
const {getCommandInvocation} = require('./run-docusaurus');
const {MEMORY_GUARD_ACTIVE_ENV} = require('./process-memory-guard');

test('build commands use three independent Node processes', () => {
  const environment = getBuildEnvironment({
    [MEMORY_GUARD_ACTIVE_ENV]: 'guard:42',
  });
  const commands = createPhaseCommands({
    sourceEnvironment: environment,
    nodePath: '/node',
    bundleTargetPath: '/bundle-target.js',
    docusaurusCliPath: '/docusaurus.mjs',
  });

  assert.deepEqual(commands.map(({id, command, args}) => ({id, command, args})), [
    {id: 'server', command: '/node', args: ['/bundle-target.js', 'server']},
    {id: 'client', command: '/node', args: ['/bundle-target.js', 'client']},
    {
      id: 'ssg',
      command: '/node',
      args: ['/docusaurus.mjs', 'build', '--locale', BUILD_LOCALE],
    },
  ]);
  for (const command of commands) {
    assert.equal(command.env[MEMORY_GUARD_ACTIVE_ENV], 'guard:42');
  }
});

test('Pages phases preserve the exact Pages profile and isolate SSG bundling', () => {
  const environment = getPagesBuildEnvironment({CUSTOM_VALUE: 'preserved'});
  const commands = createPhaseCommands({
    sourceEnvironment: environment,
    nodePath: '/node',
    bundleTargetPath: '/bundle-target.js',
    docusaurusCliPath: '/docusaurus.mjs',
  });

  for (const command of commands) {
    for (const [name, value] of Object.entries(PAGES_BUILD_ENV)) {
      assert.equal(command.env[name], value, `${command.id} must preserve ${name}`);
    }
    assert.equal(command.env.NODE_OPTIONS, '--max-old-space-size=6144');
    assert.equal(command.env.CUSTOM_VALUE, 'preserved');
  }
  assert.equal(commands[0].env.DOCUSAURUS_SKIP_BUNDLING, undefined);
  assert.equal(commands[1].env.DOCUSAURUS_SKIP_BUNDLING, undefined);
  assert.equal(commands[2].env.DOCUSAURUS_SKIP_BUNDLING, 'true');
});

test('phase environments cannot inherit a Docusaurus early-exit mode', () => {
  const source = Object.fromEntries(
    BUNDLING_CONTROL_ENV.map((name) => [name, 'true']),
  );
  const serverEnvironment = getPhaseEnvironment(source, 'server');
  const ssgEnvironment = getPhaseEnvironment(source, 'ssg');

  for (const name of BUNDLING_CONTROL_ENV) {
    assert.equal(serverEnvironment[name], undefined);
  }
  assert.equal(ssgEnvironment.DOCUSAURUS_SKIP_BUNDLING, 'true');
  assert.equal(ssgEnvironment.DOCUSAURUS_EXIT_AFTER_LOADING, undefined);
  assert.equal(ssgEnvironment.DOCUSAURUS_EXIT_AFTER_BUNDLING, undefined);
  assert.equal(ssgEnvironment.DOCUSAURUS_KEEP_SERVER_BUNDLE, undefined);
  assert.equal(ssgEnvironment.NODE_ENV, 'production');
  assert.equal(ssgEnvironment.DOCUSAURUS_CURRENT_LOCALE, BUILD_LOCALE);
});

test('the phased runner verifies each stage and stops at the first failure', () => {
  const environment = getBuildEnvironment({});
  const phases = createPhaseCommands({
    sourceEnvironment: environment,
    nodePath: '/node',
    bundleTargetPath: '/bundle-target.js',
    docusaurusCliPath: '/docusaurus.mjs',
  });
  const spawned = [];
  const verified = [];

  assert.throws(() => runPhasedBuild({
    sourceEnvironment: environment,
    phaseCommands: phases,
    assertGuard() {},
    logger: {log() {}},
    spawnSyncImpl(_command, args) {
      spawned.push(args.at(-1));
      return args.at(-1) === 'client' ? {status: 7} : {status: 0};
    },
    verifyArtifacts(phase) {
      verified.push(phase);
    },
  }), /client bundle failed with exit code 7/);

  assert.deepEqual(spawned, ['server', 'client']);
  assert.deepEqual(verified, ['server']);
});

test('all successful phases are verified in order', () => {
  const environment = getBuildEnvironment({});
  const verified = [];
  runPhasedBuild({
    sourceEnvironment: environment,
    assertGuard() {},
    logger: {log() {}},
    spawnSyncImpl() {
      return {status: 0};
    },
    verifyArtifacts(phase) {
      verified.push(phase);
    },
  });
  assert.deepEqual(verified, ['server', 'client', 'ssg']);
});

test('Pages runs every phase without invoking the local memory guard', () => {
  const environment = getPagesBuildEnvironment({});
  let guardCalls = 0;
  const verified = [];

  runPhasedBuild({
    sourceEnvironment: environment,
    assertGuard() {
      guardCalls += 1;
    },
    logger: {log() {}},
    spawnSyncImpl() {
      return {status: 0};
    },
    verifyArtifacts(phase) {
      verified.push(phase);
    },
  });

  assert.equal(guardCalls, 0);
  assert.deepEqual(verified, ['server', 'client', 'ssg']);
});

test('the phased profile dispatcher rejects Pages drift before spawning', () => {
  const pages = getPagesBuildEnvironment({});
  assert.equal(assertPhasedBuildProfile(pages), 'pages');
  assert.throws(
    () => assertPhasedBuildProfile({...pages, RAYON_NUM_THREADS: '2'}),
    /RAYON_NUM_THREADS=1/,
  );
  assert.throws(
    () => assertPhasedBuildProfile({
      ...pages,
      DOCUSAURUS_SSR_CONCURRENCY: '4',
    }),
    /DOCUSAURUS_SSR_CONCURRENCY must be unset/,
  );

  let localGuardCalls = 0;
  assert.equal(assertPhasedBuildProfile(getBuildEnvironment({}), {
    assertGuard() {
      localGuardCalls += 1;
    },
  }), 'local');
  assert.equal(localGuardCalls, 1);

  let spawnCalls = 0;
  assert.throws(() => runPhasedBuild({
    sourceEnvironment: {...pages, RSPACK_BLOCKING_THREADS: '1'},
    logger: {log() {}},
    spawnSyncImpl() {
      spawnCalls += 1;
      return {status: 0};
    },
  }), /RSPACK_BLOCKING_THREADS=2/);
  assert.equal(spawnCalls, 0);
});

test('the phased runner rejects an unguarded profile and unknown core version', () => {
  assert.throws(() => assertMemoryProfile({}), /enforced 16 GiB profile/);
  assert.doesNotThrow(() => assertMemoryProfile(getBuildEnvironment({})));
  assert.doesNotThrow(() => assertSupportedDocusaurusVersion(SUPPORTED_DOCUS_VERSION));
  assert.throws(
    () => assertSupportedDocusaurusVersion('4.0.0'),
    /Review Docusaurus build internals/,
  );
});

test('the phased runner requires a live shared parent guard', () => {
  const source = {[MEMORY_GUARD_ACTIVE_ENV]: 'guard:10'};
  assert.doesNotThrow(() => assertActiveMemoryGuard(source, {
    currentPid: 30,
    processTableSampler: () => ({
      available: true,
      rows: [
        {pid: 10, ppid: 1, rssBytes: 1},
        {pid: 20, ppid: 10, rssBytes: 1},
        {pid: 30, ppid: 20, rssBytes: 1},
      ],
    }),
  }));
  assert.throws(
    () => assertActiveMemoryGuard({}, {
      currentPid: 30,
      processTableSampler: () => ({available: true, rows: []}),
    }),
    /shared 14 GiB parent memory guard/,
  );
});

test('the client compiler drops the cross-compiler dependency', async () => {
  const original = {name: 'client', dependencies: ['server'], mode: 'production'};
  const independent = withoutCompilerDependencies(original);
  assert.deepEqual(independent, {name: 'client', mode: 'production'});
  assert.deepEqual(original.dependencies, ['server']);

  const internals = {
    async createConfigureWebpackUtils() {
      return {currentBundler: {name: 'rspack'}};
    },
    async createBuildClientConfig() {
      return {config: original, clientManifestPath: '/client-manifest.json'};
    },
    executePluginsConfigureWebpack({config}) {
      return config;
    },
  };
  const result = await createTargetConfig('client', {
    plugins: [],
    siteConfig: {future: {experimental_faster: {rspackBundler: true}}},
  }, internals);
  assert.equal(result.config.dependencies, undefined);
  assert.equal(result.outputPath, '/client-manifest.json');
});

test('bundle targets enforce the single configured locale', () => {
  const i18n = {
    currentLocale: BUILD_LOCALE,
    defaultLocale: BUILD_LOCALE,
    locales: [BUILD_LOCALE],
  };
  assert.doesNotThrow(() => assertSingleLocale(i18n));
  assert.throws(
    () => assertSingleLocale({...i18n, locales: [BUILD_LOCALE, 'en']}),
    /requires exactly one/,
  );
});

test('phase artifact hand-offs reject empty, invalid, and stale files', (context) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-phase-artifacts-'));
  context.after(() => fs.rmSync(root, {recursive: true, force: true}));
  const artifacts = {
    buildDir: path.join(root, 'build'),
    serverBundle: path.join(root, 'build', '__server', 'server.bundle.js'),
    clientManifest: path.join(root, '.docusaurus', 'client-manifest.json'),
    homePage: path.join(root, 'build', 'index.html'),
  };

  fs.mkdirSync(path.dirname(artifacts.serverBundle), {recursive: true});
  fs.writeFileSync(artifacts.serverBundle, '');
  assert.throws(
    () => verifyPhaseArtifacts('server', artifacts),
    /not a non-empty file/,
  );

  fs.writeFileSync(artifacts.serverBundle, 'server bundle');
  assert.doesNotThrow(() => verifyPhaseArtifacts('server', artifacts));

  fs.mkdirSync(path.dirname(artifacts.clientManifest), {recursive: true});
  fs.writeFileSync(artifacts.clientManifest, 'not json');
  assert.throws(
    () => verifyPhaseArtifacts('client', artifacts),
    /not valid JSON/,
  );
  fs.writeFileSync(artifacts.clientManifest, '{}');
  assert.doesNotThrow(() => verifyPhaseArtifacts('client', artifacts));

  fs.writeFileSync(artifacts.homePage, '<!doctype html>');
  assert.throws(
    () => verifyPhaseArtifacts('ssg', artifacts),
    /Temporary server bundle directory was not cleaned/,
  );
  fs.rmSync(path.dirname(artifacts.serverBundle), {recursive: true, force: true});
  assert.doesNotThrow(() => verifyPhaseArtifacts('ssg', artifacts));
});

test('the server phase only clears a child build directory', () => {
  assert.doesNotThrow(() => assertSafeOutputDirectory('/repo/build', '/repo'));
  assert.throws(
    () => assertSafeOutputDirectory('/repo', '/repo'),
    /Refusing to clear unsafe/,
  );
  assert.throws(
    () => assertSafeOutputDirectory('/outside/build', '/repo'),
    /Refusing to clear unsafe/,
  );
});

test('bundle target setup scrubs inherited skip flags', () => {
  const environment = {
    DOCUSAURUS_SKIP_BUNDLING: 'true',
    DOCUSAURUS_EXIT_AFTER_BUNDLING: 'true',
  };
  prepareProcessEnvironment('server', environment);
  assert.equal(environment.DOCUSAURUS_SKIP_BUNDLING, undefined);
  assert.equal(environment.DOCUSAURUS_EXIT_AFTER_BUNDLING, undefined);
  assert.equal(environment.NODE_ENV, 'production');
  assert.throws(() => prepareProcessEnvironment('other', {}), /Unknown bundle target/);

  const pagesEnvironment = getPagesBuildEnvironment({
    DOCUSAURUS_SKIP_BUNDLING: 'true',
  });
  pagesEnvironment.DOCUSAURUS_SKIP_BUNDLING = 'true';
  prepareProcessEnvironment('client', pagesEnvironment);
  assert.equal(assertPhasedBuildProfile(pagesEnvironment), 'pages');
});

test('the repository Docusaurus wrapper routes only build through the adapter', () => {
  assert.deepEqual(getCommandInvocation(['build'], {
    nodePath: '/node',
    cliPath: '/docusaurus.mjs',
    phasedBuildPath: '/phased.js',
  }), {
    command: '/node',
    args: ['/phased.js'],
  });
  assert.deepEqual(getCommandInvocation(['start'], {
    nodePath: '/node',
    cliPath: '/docusaurus.mjs',
    phasedBuildPath: '/phased.js',
  }), {
    command: '/node',
    args: ['/docusaurus.mjs', 'start'],
  });
});
