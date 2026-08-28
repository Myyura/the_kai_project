#!/usr/bin/env node

const {spawnSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const {assertPagesBuildEnvironment} = require('./build-for-pages');
const {
  SITE_DIR,
  assertNonEmptyFile,
  assertSupportedDocusaurusVersion,
  assertValidJsonFile,
} = require('./docusaurus-build-phases');
const {assertSafeOutputDirectory} = require('./docusaurus-bundle-target');
const {
  SCHOOL_SHARD_COUNT_ENV,
  SCHOOL_SHARD_ENVIRONMENT_NAMES,
  clearSchoolShardEnvironment,
  createSchoolShardEnvironment,
  discoverSchoolBuildUnits,
  getSchoolShardDataDirectory,
  getSchoolShardDataPath,
  planSchoolShards,
} = require('./docusaurus-school-shards');

const SCHOOL_BUILD_STAGES = Object.freeze([
  'client',
  'server',
  'ssg',
  'finalize',
]);

function assertNoTransientSchoolShardEnvironment(source = process.env) {
  const inherited = SCHOOL_SHARD_ENVIRONMENT_NAMES.filter(
    (name) => source[name] !== undefined,
  );
  if (inherited.length > 0) {
    throw new Error(
      'The school build coordinator must start without transient shard state: '
        + `${inherited.map((name) => `${name} must be unset`).join(', ')}.`,
    );
  }
}

function getSchoolBuildArtifacts(siteDir = SITE_DIR) {
  const buildDir = path.join(siteDir, 'build');
  const serverDir = path.join(buildDir, '__server');
  return {
    buildDir,
    clientManifest: path.join(siteDir, '.docusaurus', 'client-manifest.json'),
    homePage: path.join(buildDir, 'index.html'),
    serverBundle: path.join(serverDir, 'server.bundle.js'),
    serverDir,
    shardDataDir: getSchoolShardDataDirectory(siteDir),
  };
}

function assertExpectedBuildDirectory(buildDir, siteDir = SITE_DIR) {
  const actual = path.resolve(buildDir);
  const expected = path.resolve(siteDir, 'build');
  if (actual !== expected) {
    throw new Error(
      `Refusing to clear unexpected school build directory ${actual}; `
        + `expected ${expected}.`,
    );
  }
  assertSafeOutputDirectory(actual, siteDir);
  return actual;
}

function createSchoolBuildCommands({
  shards,
  sourceEnvironment = process.env,
  nodePath = process.execPath,
  bundleTargetPath = path.join(__dirname, 'docusaurus-bundle-target.js'),
  ssgPath = path.join(__dirname, 'docusaurus-ssg-school-shard.js'),
  finalizerPath = path.join(__dirname, 'docusaurus-finalize-school-shards.js'),
} = {}) {
  if (!Array.isArray(shards) || shards.length === 0) {
    throw new Error('At least one planned school shard is required.');
  }
  const commands = [];
  for (const shard of shards) {
    const environment = createSchoolShardEnvironment(sourceEnvironment, shard);
    commands.push(
      {
        id: `${shard.id}:client`,
        stage: 'client',
        label: `${shard.id} client bundle`,
        shard,
        command: nodePath,
        args: [bundleTargetPath, 'client'],
        env: {...environment},
      },
      {
        id: `${shard.id}:server`,
        stage: 'server',
        label: `${shard.id} server bundle`,
        shard,
        command: nodePath,
        args: [bundleTargetPath, 'server'],
        env: {...environment},
      },
      {
        id: `${shard.id}:ssg`,
        stage: 'ssg',
        label: `${shard.id} SSG`,
        shard,
        command: nodePath,
        args: [ssgPath],
        env: {...environment},
      },
    );
  }
  commands.push({
    id: 'finalize',
    stage: 'finalize',
    label: 'school shard finalization',
    shard: null,
    command: nodePath,
    args: [finalizerPath],
    env: clearSchoolShardEnvironment(sourceEnvironment),
  });
  return commands;
}

function formatByteSize(value) {
  const bytes = Number(value);
  if (!Number.isFinite(bytes) || bytes < 0) return 'unknown weight';
  if (bytes < 1024) return `${Math.round(bytes)} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KiB`;
  if (bytes < 1024 ** 3) return `${(bytes / (1024 ** 2)).toFixed(1)} MiB`;
  return `${(bytes / (1024 ** 3)).toFixed(2)} GiB`;
}

function formatShardSummary(shard) {
  const sharedLabel = shard.includeShared ? ', includes shared routes' : '';
  return `${shard.id}: ${shard.schools.length} school(s), `
    + `${shard.documentCount} document(s), ${formatByteSize(shard.weight)} `
    + `estimated weight${sharedLabel}\n`
    + `  schools: ${shard.schools.join(', ')}`;
}

function assertDirectoryMissing(directory, description, fsImpl = fs) {
  if (fsImpl.existsSync(directory)) {
    throw new Error(`${description} was not cleaned at ${directory}.`);
  }
}

function verifySchoolBuildStage(
  buildCommand,
  artifacts = getSchoolBuildArtifacts(),
  fsImpl = fs,
) {
  if (!SCHOOL_BUILD_STAGES.includes(buildCommand.stage)) {
    throw new Error(`Unknown school build stage ${JSON.stringify(buildCommand.stage)}.`);
  }
  if (buildCommand.stage === 'client') {
    assertValidJsonFile(
      artifacts.clientManifest,
      `${buildCommand.shard.id} client manifest`,
      fsImpl,
    );
    return;
  }
  if (buildCommand.stage === 'server') {
    assertNonEmptyFile(
      artifacts.serverBundle,
      `${buildCommand.shard.id} server bundle`,
      fsImpl,
    );
    return;
  }
  if (buildCommand.stage === 'ssg') {
    assertNonEmptyFile(
      getSchoolShardDataPath(
        path.dirname(artifacts.buildDir),
        buildCommand.shard.id,
      ),
      `${buildCommand.shard.id} serialized SSG data`,
      fsImpl,
    );
    assertDirectoryMissing(
      artifacts.serverDir,
      `${buildCommand.shard.id} temporary server bundle directory`,
      fsImpl,
    );
    return;
  }
  assertNonEmptyFile(artifacts.homePage, 'Generated home page', fsImpl);
  assertDirectoryMissing(
    artifacts.shardDataDir,
    'Temporary school shard data directory',
    fsImpl,
  );
  assertDirectoryMissing(
    artifacts.serverDir,
    'Temporary server bundle directory',
    fsImpl,
  );
}

function runSchoolBuildCommand(buildCommand, {
  siteDir = SITE_DIR,
  spawnSyncImpl = spawnSync,
} = {}) {
  const result = spawnSyncImpl(buildCommand.command, buildCommand.args, {
    cwd: siteDir,
    env: buildCommand.env,
    shell: false,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.signal) {
    throw new Error(`${buildCommand.label} stopped by signal ${result.signal}.`);
  }
  if (result.status !== 0) {
    throw new Error(
      `${buildCommand.label} failed with exit code ${result.status ?? 'unknown'}.`,
    );
  }
  return result;
}

function runSchoolBuild({
  siteDir = SITE_DIR,
  sourceEnvironment = process.env,
  assertProfile = assertPagesBuildEnvironment,
  assertVersion = assertSupportedDocusaurusVersion,
  discoverUnits = discoverSchoolBuildUnits,
  planShards = planSchoolShards,
  removeOutput = fs.rmSync,
  spawnSyncImpl = spawnSync,
  verifyStage = verifySchoolBuildStage,
  logger = console,
  artifacts = getSchoolBuildArtifacts(siteDir),
  commands,
} = {}) {
  assertProfile(sourceEnvironment);
  assertVersion();
  assertNoTransientSchoolShardEnvironment(sourceEnvironment);

  const units = discoverUnits(siteDir);
  const shards = planShards(
    units,
    sourceEnvironment[SCHOOL_SHARD_COUNT_ENV],
  );
  const phaseCommands = commands || createSchoolBuildCommands({
    shards,
    sourceEnvironment,
  });

  logger.log(
    `[school shards] Planned ${shards.length} sequential school shard(s):`,
  );
  for (const shard of shards) logger.log(formatShardSummary(shard));

  const buildDir = assertExpectedBuildDirectory(artifacts.buildDir, siteDir);
  removeOutput(buildDir, {recursive: true, force: true});

  for (const buildCommand of phaseCommands) {
    logger.log(`\n[school shards] Starting ${buildCommand.label}...`);
    runSchoolBuildCommand(buildCommand, {siteDir, spawnSyncImpl});
    verifyStage(buildCommand, artifacts);
    logger.log(`[school shards] Completed ${buildCommand.label}.`);
  }
  return {shards, commands: phaseCommands};
}

function main(args = process.argv.slice(2)) {
  if (args.length > 0) {
    throw new Error(`Unexpected school build arguments: ${args.join(' ')}`);
  }
  const {shards} = runSchoolBuild();
  console.log(`[school shards] Completed ${shards.length} school shard(s).`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  SCHOOL_BUILD_STAGES,
  assertDirectoryMissing,
  assertExpectedBuildDirectory,
  assertNoTransientSchoolShardEnvironment,
  createSchoolBuildCommands,
  formatByteSize,
  formatShardSummary,
  getSchoolBuildArtifacts,
  main,
  runSchoolBuild,
  runSchoolBuildCommand,
  verifySchoolBuildStage,
};
