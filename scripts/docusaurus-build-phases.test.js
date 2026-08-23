const assert = require('node:assert/strict');
const test = require('node:test');
const {getBuildEnvironment} = require('./build-with-memory-limit');
const {
  BUILD_LOCALE,
  BUNDLING_CONTROL_ENV,
  SUPPORTED_DOCUS_VERSION,
  assertActiveMemoryGuard,
  assertMemoryProfile,
  assertSupportedDocusaurusVersion,
  createPhaseCommands,
  getPhaseEnvironment,
  runPhasedBuild,
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
