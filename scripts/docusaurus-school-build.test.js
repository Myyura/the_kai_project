const assert = require('node:assert/strict');
const test = require('node:test');
const v8 = require('node:v8');

const {
  createSchoolBuildCommands,
  getSchoolBuildArtifacts,
  runSchoolBuild,
} = require('./docusaurus-school-build');
const {
  SCHOOL_SHARD_DATA_VERSION,
  SCHOOL_SHARD_ENVIRONMENT_NAMES,
  SCHOOL_SHARD_ID_ENV,
  SCHOOL_SHARD_SCHOOLS_ENV,
  SCHOOL_SHARD_SHARED_ENV,
} = require('./docusaurus-school-shards');
const {
  assertCollectedDataMatchesRoutes,
  runSchoolShardSsg,
  writeSerializedShardData,
} = require('./docusaurus-ssg-school-shard');
const {
  finalizeSchoolShards,
  mergeShardPayloads,
} = require('./docusaurus-finalize-school-shards');

function plannedShard(id, schools, includeShared = false) {
  return {
    id,
    schools,
    includeShared,
    documentCount: schools.length,
    sourceBytes: 100,
    mathExpressions: 2,
    weight: 200,
  };
}

function pageData(marker) {
  return {
    anchors: [`anchor-${marker}`],
    links: [`/link-${marker}`],
    metadata: {
      public: {marker},
      helmet: {title: marker},
    },
  };
}

function shardPayload(specification) {
  return {
    version: SCHOOL_SHARD_DATA_VERSION,
    shard: {
      id: specification.shard.id,
      schools: [...specification.shard.schools],
      includeShared: specification.shard.includeShared,
    },
    routePaths: [...specification.routePaths],
    collectedData: Object.fromEntries(
      specification.routePaths.map((routePath) => [routePath, pageData(routePath)]),
    ),
  };
}

test('school build coordinator runs client, server, and SSG serially per shard', () => {
  const shards = [
    plannedShard('school-group-01', ['alpha']),
    plannedShard('school-group-02', ['beta'], true),
  ];
  const sourceEnvironment = {KEEP: 'yes'};
  const commands = createSchoolBuildCommands({
    shards,
    sourceEnvironment,
    nodePath: '/node',
    bundleTargetPath: '/bundle-target.js',
    ssgPath: '/school-ssg.js',
    finalizerPath: '/finalize.js',
  });

  assert.deepEqual(commands.map(({id}) => id), [
    'school-group-01:client',
    'school-group-01:server',
    'school-group-01:ssg',
    'school-group-02:client',
    'school-group-02:server',
    'school-group-02:ssg',
    'finalize',
  ]);
  assert.deepEqual(commands.map(({args}) => args), [
    ['/bundle-target.js', 'client'],
    ['/bundle-target.js', 'server'],
    ['/school-ssg.js'],
    ['/bundle-target.js', 'client'],
    ['/bundle-target.js', 'server'],
    ['/school-ssg.js'],
    ['/finalize.js'],
  ]);

  for (const [index, command] of commands.slice(0, -1).entries()) {
    const shard = shards[Math.floor(index / 3)];
    assert.equal(command.env.KEEP, 'yes');
    assert.equal(command.env[SCHOOL_SHARD_ID_ENV], shard.id);
    assert.equal(command.env[SCHOOL_SHARD_SCHOOLS_ENV], shard.schools.join(','));
    assert.equal(
      command.env[SCHOOL_SHARD_SHARED_ENV],
      shard.includeShared ? 'true' : 'false',
    );
    assert.notStrictEqual(command.env, commands[index + 1]?.env);
  }
  assert.equal(commands.at(-1).env.KEEP, 'yes');
  for (const name of SCHOOL_SHARD_ENVIRONMENT_NAMES) {
    assert.equal(commands.at(-1).env[name], undefined);
    assert.equal(sourceEnvironment[name], undefined);
  }

  const spawned = [];
  const verified = [];
  const removed = [];
  const result = runSchoolBuild({
    siteDir: '/repo',
    sourceEnvironment,
    artifacts: getSchoolBuildArtifacts('/repo'),
    assertProfile() {},
    assertVersion() {},
    discoverUnits() {
      return [{id: 'ignored-by-injected-plan'}];
    },
    planShards() {
      return shards;
    },
    commands,
    removeOutput(directory, options) {
      removed.push({directory, options});
    },
    spawnSyncImpl(_command, args, options) {
      spawned.push({args, options});
      return {status: 0};
    },
    verifyStage(command) {
      verified.push(command.id);
    },
    logger: {log() {}},
  });

  assert.deepEqual(result.shards, shards);
  assert.deepEqual(verified, commands.map(({id}) => id));
  assert.deepEqual(spawned.map(({args}) => args), commands.map(({args}) => args));
  assert.ok(spawned.every(({options}) => (
    options.cwd === '/repo'
      && options.shell === false
      && options.stdio === 'inherit'
  )));
  assert.deepEqual(removed, [{
    directory: '/repo/build',
    options: {recursive: true, force: true},
  }]);
});

test('school build coordinator stops immediately when a shard stage fails', () => {
  const shards = [
    plannedShard('school-group-01', ['alpha']),
    plannedShard('school-group-02', ['beta'], true),
  ];
  const commands = createSchoolBuildCommands({
    shards,
    sourceEnvironment: {},
    nodePath: '/node',
    bundleTargetPath: '/bundle.js',
    ssgPath: '/ssg.js',
    finalizerPath: '/finalize.js',
  });
  const spawned = [];
  const verified = [];

  assert.throws(() => runSchoolBuild({
    siteDir: '/repo',
    sourceEnvironment: {},
    artifacts: getSchoolBuildArtifacts('/repo'),
    assertProfile() {},
    assertVersion() {},
    discoverUnits() {
      return [{id: 'alpha'}, {id: 'beta'}];
    },
    planShards() {
      return shards;
    },
    commands,
    removeOutput() {},
    spawnSyncImpl(_command, _args) {
      const index = spawned.length;
      spawned.push(commands[index].id);
      return {status: index === 1 ? 17 : 0};
    },
    verifyStage(command) {
      verified.push(command.id);
    },
    logger: {log() {}},
  }), /school-group-01 server bundle failed with exit code 17/);

  assert.deepEqual(spawned, [
    'school-group-01:client',
    'school-group-01:server',
  ]);
  assert.deepEqual(verified, ['school-group-01:client']);
});

test('school shard SSG enforces exact collected routes and writes before cleanup', async () => {
  const environment = {};
  const shard = plannedShard('school-group-01', ['alpha'], true);
  const collectedData = {
    '/shared': pageData('shared'),
    '/docs/alpha/exam': pageData('exam'),
  };
  const events = [];
  let executeArguments;
  let applyArguments;
  let written;
  const routeOwnership = () => new Map();
  const artifacts = {
    clientManifest: '/repo/.docusaurus/client-manifest.json',
    serverBundle: '/repo/build/__server/server.bundle.js',
  };
  const fullSite = {
    props: {
      i18n: {
        currentLocale: 'zh-Hans',
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
      },
      routesPaths: ['/unsharded'],
      siteConfig: {future: {experimental_router: 'browser'}},
    },
  };
  const shardedSite = {
    props: {
      ...fullSite.props,
      routesPaths: ['/docs/alpha/exam', '/shared'],
    },
  };

  const result = await runSchoolShardSsg({
    siteDir: '/repo',
    environment,
    artifacts,
    assertProfile() {},
    assertVersion() {},
    parseShard(source, options) {
      assert.strictEqual(source, environment);
      assert.deepEqual(options, {required: true});
      return shard;
    },
    verifyArtifacts(actual) {
      assert.strictEqual(actual, artifacts);
      events.push('verify');
    },
    discoverSchools() {
      return ['alpha', 'beta'];
    },
    createRouteOwnership: routeOwnership,
    async applyShard(site, actualShard, schoolIds, options) {
      applyArguments = {site, actualShard, schoolIds, options};
      return shardedSite;
    },
    internals: {
      async loadSite(options) {
        assert.deepEqual(options, {
          siteDir: '/repo',
          locale: 'zh-Hans',
          automaticBaseUrlLocalizationDisabled: true,
        });
        events.push('load');
        return fullSite;
      },
      async executeSSG(options) {
        executeArguments = options;
        events.push('execute');
        return {collectedData};
      },
    },
    async writeShardData(filePath, payload) {
      events.push('write');
      written = {filePath, payload};
    },
    async remove(directory, options) {
      events.push('remove');
      assert.equal(directory, '/repo/build/__server');
      assert.deepEqual(options, {recursive: true, force: true});
    },
  });

  assert.deepEqual(events, ['verify', 'load', 'execute', 'write', 'remove']);
  assert.strictEqual(applyArguments.site, fullSite);
  assert.strictEqual(applyArguments.actualShard, shard);
  assert.deepEqual(applyArguments.schoolIds, ['alpha', 'beta']);
  assert.strictEqual(
    applyArguments.options.createRouteOwnership,
    routeOwnership,
  );
  assert.strictEqual(executeArguments.props, shardedSite.props);
  assert.equal(executeArguments.serverBundlePath, artifacts.serverBundle);
  assert.equal(executeArguments.clientManifestPath, artifacts.clientManifest);
  assert.equal(executeArguments.router, 'browser');
  assert.equal(
    written.filePath,
    '/repo/build/__school-shards/school-group-01.bin',
  );
  assert.deepEqual(written.payload, {
    version: SCHOOL_SHARD_DATA_VERSION,
    shard: {
      id: shard.id,
      schools: shard.schools,
      includeShared: true,
    },
    routePaths: ['/docs/alpha/exam', '/shared'],
    collectedData,
  });
  assert.deepEqual(result, {
    dataPath: written.filePath,
    payload: written.payload,
  });
  assert.equal(environment.BABEL_ENV, 'production');
  assert.equal(environment.NODE_ENV, 'production');
  assert.equal(environment.DOCUSAURUS_CURRENT_LOCALE, 'zh-Hans');

  assert.doesNotThrow(() => assertCollectedDataMatchesRoutes(
    ['/a', '/b'],
    {'/b': {}, '/a': {}},
  ));
  assert.throws(
    () => assertCollectedDataMatchesRoutes(['/a'], {'/extra': {}}),
    /missing.*extra/,
  );
  assert.throws(
    () => assertCollectedDataMatchesRoutes(['/a', '/a'], {'/a': {}}),
    /duplicates/,
  );
});

test('school shard payload uses serialize, exclusive temp write, and atomic rename', async () => {
  const payload = {version: 1, routePaths: ['/a']};
  const operations = [];
  let serialized;

  await writeSerializedShardData('/virtual/group.bin', payload, {
    temporaryPath: '/virtual/group.tmp',
    async mkdir(directory, options) {
      operations.push(['mkdir', directory, options]);
    },
    async writeFile(filePath, value, options) {
      operations.push(['write', filePath, options]);
      serialized = value;
    },
    async rename(from, to) {
      operations.push(['rename', from, to]);
    },
    async remove() {
      throw new Error('successful atomic write must not remove its temp path');
    },
  });

  assert.deepEqual(v8.deserialize(serialized), payload);
  assert.deepEqual(operations, [
    ['mkdir', '/virtual', {recursive: true}],
    ['write', '/virtual/group.tmp', {flag: 'wx'}],
    ['rename', '/virtual/group.tmp', '/virtual/group.bin'],
  ]);

  const failedOperations = [];
  await assert.rejects(writeSerializedShardData('/virtual/group.bin', payload, {
    temporaryPath: '/virtual/group.failed.tmp',
    async mkdir() {
      failedOperations.push('mkdir');
    },
    async writeFile() {
      failedOperations.push('write');
    },
    async rename() {
      failedOperations.push('rename');
      throw new Error('rename failed');
    },
    async remove(filePath, options) {
      failedOperations.push(['remove', filePath, options]);
    },
  }), /rename failed/);
  assert.deepEqual(failedOperations, [
    'mkdir',
    'write',
    'rename',
    ['remove', '/virtual/group.failed.tmp', {force: true}],
  ]);
});

test('finalizer merge rejects duplicate, missing, and extra routes', () => {
  const alpha = {
    shard: plannedShard('school-group-01', ['alpha']),
    routePaths: ['/alpha'],
  };
  const beta = {
    shard: plannedShard('school-group-02', ['beta'], true),
    routePaths: ['/beta'],
  };
  const merged = mergeShardPayloads(
    [shardPayload(alpha), shardPayload(beta)],
    [alpha, beta],
    ['/alpha', '/beta'],
  );
  assert.deepEqual(Object.keys(merged), ['/alpha', '/beta']);

  const duplicateBeta = {...beta, routePaths: ['/alpha']};
  assert.throws(() => mergeShardPayloads(
    [shardPayload(alpha), shardPayload(duplicateBeta)],
    [alpha, duplicateBeta],
    ['/alpha'],
  ), /Duplicate collected route.*school-group-01.*school-group-02/);

  assert.throws(() => mergeShardPayloads(
    [shardPayload(alpha), shardPayload(beta)],
    [alpha, beta],
    ['/alpha', '/beta', '/missing'],
  ), /Merged school shard output route set mismatch: missing/);

  assert.throws(() => mergeShardPayloads(
    [shardPayload(alpha), shardPayload(beta)],
    [alpha, beta],
    ['/alpha'],
  ), /Merged school shard output route set mismatch: extra/);
});

test('finalizer invokes postBuild and broken-link checking exactly once', async () => {
  const environment = {};
  const perfLabels = [];
  const postBuildCalls = [];
  const brokenLinkCalls = [];
  const cleanupCalls = [];
  const props = {
    i18n: {
      currentLocale: 'zh-Hans',
      defaultLocale: 'zh-Hans',
      locales: ['zh-Hans'],
    },
    routes: [],
    routesPaths: ['/404.html'],
    siteConfig: {
      future: {
        experimental_router: 'browser',
        v4: {removeLegacyPostBuildHeadAttribute: true},
      },
      onBrokenLinks: 'throw',
      onBrokenAnchors: 'warn',
    },
    plugins: [
      {
        name: 'docusaurus-plugin-content-docs',
        content: {
          loadedVersions: [{
            versionName: 'current',
            tagsPath: '/docs/tags',
            docs: [],
            sidebars: {},
          }],
        },
      },
      {
        name: 'one-post-build-plugin',
        content: {value: 42},
        async postBuild(buildData) {
          postBuildCalls.push(buildData);
        },
      },
    ],
  };

  const result = await finalizeSchoolShards({
    siteDir: '/repo',
    environment,
    assertProfile() {},
    assertVersion() {},
    discoverUnits() {
      return [{
        id: 'alpha',
        documentCount: 1,
        sourceBytes: 10,
        mathExpressions: 0,
        weight: 10,
      }];
    },
    internals: {
      PerfLogger: {
        async async(label, callback) {
          perfLabels.push(label);
          return callback();
        },
      },
      async loadSite(options) {
        assert.deepEqual(options, {
          siteDir: '/repo',
          locale: 'zh-Hans',
          automaticBaseUrlLocalizationDisabled: true,
        });
        return {props};
      },
      async handleBrokenLinks(options) {
        brokenLinkCalls.push(options);
      },
    },
    async readPayloads(_siteDir, specifications) {
      assert.equal(specifications.length, 1);
      return specifications.map(shardPayload);
    },
    async cleanup(siteDir) {
      cleanupCalls.push(siteDir);
    },
  });

  assert.equal(postBuildCalls.length, 1);
  assert.equal(brokenLinkCalls.length, 1);
  assert.deepEqual(cleanupCalls, ['/repo']);
  assert.deepEqual(perfLabels, [
    'Load full site for shard finalization',
    'postBuild()',
    'Broken links checker',
  ]);
  assert.deepEqual(Object.keys(result.collectedData), ['/404.html']);
  assert.equal(result.specifications.length, 1);

  const postBuildData = postBuildCalls[0];
  assert.strictEqual(postBuildData.content, props.plugins[1].content);
  assert.deepEqual(postBuildData.routesBuildMetadata, {
    '/404.html': {marker: '/404.html'},
  });
  const brokenLinkData = brokenLinkCalls[0];
  assert.strictEqual(brokenLinkData.routes, props.routes);
  assert.equal(brokenLinkData.onBrokenLinks, 'throw');
  assert.equal(brokenLinkData.onBrokenAnchors, 'warn');
  assert.deepEqual(brokenLinkData.collectedLinks, {
    '/404.html': {
      links: ['/link-/404.html'],
      anchors: ['anchor-/404.html'],
    },
  });
});
