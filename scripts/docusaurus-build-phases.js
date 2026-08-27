#!/usr/bin/env node

const {spawnSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const {
  LOW_MEMORY_ENV,
  MAX_OLD_SPACE_MB,
  withHeapLimit,
} = require('./build-with-memory-limit');
const {
  PAGES_BUILD_PROFILE,
  assertPagesBuildEnvironment,
} = require('./build-for-pages');
const {hasActiveParentMemoryGuard} = require('./process-memory-guard');

const SITE_DIR = path.resolve(__dirname, '..');
const BUILD_LOCALE = 'zh-Hans';
const SUPPORTED_DOCUS_VERSION = '3.9.2';
const BUNDLING_CONTROL_ENV = Object.freeze([
  'DOCUSAURUS_SKIP_BUNDLING',
  'DOCUSAURUS_EXIT_AFTER_LOADING',
  'DOCUSAURUS_EXIT_AFTER_BUNDLING',
  'DOCUSAURUS_KEEP_SERVER_BUNDLE',
]);
const DEFAULT_ARTIFACTS = Object.freeze({
  buildDir: path.join(SITE_DIR, 'build'),
  serverBundle: path.join(SITE_DIR, 'build', '__server', 'server.bundle.js'),
  clientManifest: path.join(SITE_DIR, '.docusaurus', 'client-manifest.json'),
  homePage: path.join(SITE_DIR, 'build', 'index.html'),
});

function assertSupportedDocusaurusVersion(
  version = require('@docusaurus/core/package.json').version,
) {
  if (version !== SUPPORTED_DOCUS_VERSION) {
    throw new Error(
      `The phased build supports @docusaurus/core ${SUPPORTED_DOCUS_VERSION}, `
        + `but ${version} is installed. Review Docusaurus build internals before `
        + 'updating this adapter.',
    );
  }
}

function assertMemoryProfile(source = process.env) {
  const mismatches = Object.entries(LOW_MEMORY_ENV)
    .filter(([name, value]) => source[name] !== value)
    .map(([name, value]) => `${name}=${value}`);

  if (source.KAI_BUILD_PROFILE !== undefined) {
    mismatches.push('KAI_BUILD_PROFILE must be unset');
  }

  const expectedNodeOptions = withHeapLimit(source.NODE_OPTIONS);
  if (source.NODE_OPTIONS !== expectedNodeOptions) {
    mismatches.push(`NODE_OPTIONS must enforce --max-old-space-size=${MAX_OLD_SPACE_MB}`);
  }

  if (mismatches.length > 0) {
    throw new Error(
      'The phased Docusaurus build must run inside the enforced 16 GiB profile. '
        + `Missing or overridden settings: ${[...new Set(mismatches)].join(', ')}.`,
    );
  }
}

function assertActiveMemoryGuard(
  source = process.env,
  guardOptions,
) {
  if (!hasActiveParentMemoryGuard(source, guardOptions)) {
    throw new Error(
      'The phased Docusaurus build must remain under the shared 14 GiB '
        + 'parent memory guard. Start it with `yarn build` or '
        + '`yarn docusaurus build`.',
    );
  }
}

function assertPhasedBuildProfile(source = process.env, {
  assertGuard = assertActiveMemoryGuard,
} = {}) {
  if (source.KAI_BUILD_PROFILE === PAGES_BUILD_PROFILE) {
    assertPagesBuildEnvironment(source);
    return 'pages';
  }

  assertMemoryProfile(source);
  assertGuard(source);
  return 'local';
}

function getPhaseEnvironment(source, phase) {
  const environment = {
    ...source,
    BABEL_ENV: 'production',
    NODE_ENV: 'production',
    DOCUSAURUS_CURRENT_LOCALE: BUILD_LOCALE,
  };

  for (const name of BUNDLING_CONTROL_ENV) {
    delete environment[name];
  }
  if (phase === 'ssg') {
    environment.DOCUSAURUS_SKIP_BUNDLING = 'true';
  }
  return environment;
}

function createPhaseCommands({
  sourceEnvironment = process.env,
  nodePath = process.execPath,
  bundleTargetPath = path.join(__dirname, 'docusaurus-bundle-target.js'),
  docusaurusCliPath = require.resolve('@docusaurus/core/bin/docusaurus.mjs'),
} = {}) {
  return [
    {
      id: 'server',
      label: 'server bundle',
      command: nodePath,
      args: [bundleTargetPath, 'server'],
      env: getPhaseEnvironment(sourceEnvironment, 'server'),
    },
    {
      id: 'client',
      label: 'client bundle',
      command: nodePath,
      args: [bundleTargetPath, 'client'],
      env: getPhaseEnvironment(sourceEnvironment, 'client'),
    },
    {
      id: 'ssg',
      label: 'SSG and post-build',
      command: nodePath,
      args: [docusaurusCliPath, 'build', '--locale', BUILD_LOCALE],
      env: getPhaseEnvironment(sourceEnvironment, 'ssg'),
    },
  ];
}

function assertNonEmptyFile(filePath, description, fsImpl = fs) {
  let stat;
  try {
    stat = fsImpl.statSync(filePath);
  } catch (error) {
    throw new Error(`${description} was not produced at ${filePath}.`, {cause: error});
  }
  if (!stat.isFile() || stat.size === 0) {
    throw new Error(`${description} is not a non-empty file at ${filePath}.`);
  }
}

function assertValidJsonFile(filePath, description, fsImpl = fs) {
  assertNonEmptyFile(filePath, description, fsImpl);
  try {
    const parsed = JSON.parse(fsImpl.readFileSync(filePath, 'utf8'));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('expected a JSON object');
    }
  } catch (error) {
    throw new Error(`${description} is not valid JSON at ${filePath}.`, {cause: error});
  }
}

function verifyPhaseArtifacts(
  phase,
  artifacts = DEFAULT_ARTIFACTS,
  fsImpl = fs,
) {
  if (phase === 'server' || phase === 'client') {
    assertNonEmptyFile(artifacts.serverBundle, 'Server bundle', fsImpl);
  }
  if (phase === 'client') {
    assertValidJsonFile(artifacts.clientManifest, 'Client manifest', fsImpl);
  }
  if (phase === 'ssg') {
    assertNonEmptyFile(artifacts.homePage, 'Generated home page', fsImpl);
    if (fsImpl.existsSync(path.dirname(artifacts.serverBundle))) {
      throw new Error(
        `Temporary server bundle directory was not cleaned at `
          + `${path.dirname(artifacts.serverBundle)}.`,
      );
    }
  }
}

function runPhasedBuild({
  sourceEnvironment = process.env,
  spawnSyncImpl = spawnSync,
  verifyArtifacts = verifyPhaseArtifacts,
  logger = console,
  phaseCommands = createPhaseCommands({sourceEnvironment}),
  assertGuard = assertActiveMemoryGuard,
} = {}) {
  assertPhasedBuildProfile(sourceEnvironment, {assertGuard});
  assertSupportedDocusaurusVersion();

  for (const phase of phaseCommands) {
    logger.log(`\n[phased build] Starting ${phase.label} in a fresh process...`);
    const result = spawnSyncImpl(phase.command, phase.args, {
      cwd: SITE_DIR,
      env: phase.env,
      stdio: 'inherit',
    });
    if (result.error) throw result.error;
    if (result.signal) {
      throw new Error(`${phase.label} stopped by signal ${result.signal}.`);
    }
    if (result.status !== 0) {
      throw new Error(
        `${phase.label} failed with exit code ${result.status ?? 'unknown'}.`,
      );
    }
    verifyArtifacts(phase.id);
    logger.log(`[phased build] Completed ${phase.label}.`);
  }
}

function main(args = process.argv.slice(2)) {
  if (args.length > 0) {
    throw new Error(
      'The memory-safe phased build currently supports the repository default '
        + '`docusaurus build` command only; additional CLI options are not supported.',
    );
  }
  runPhasedBuild();
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
  BUILD_LOCALE,
  BUNDLING_CONTROL_ENV,
  DEFAULT_ARTIFACTS,
  SITE_DIR,
  SUPPORTED_DOCUS_VERSION,
  assertActiveMemoryGuard,
  assertMemoryProfile,
  assertNonEmptyFile,
  assertPhasedBuildProfile,
  assertSupportedDocusaurusVersion,
  assertValidJsonFile,
  createPhaseCommands,
  getPhaseEnvironment,
  main,
  runPhasedBuild,
  verifyPhaseArtifacts,
};
