#!/usr/bin/env node

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const v8 = require('node:v8');

const {
  PAGES_BUILD_PROFILE,
  assertPagesBuildEnvironment,
} = require('./build-for-pages');
const {
  BUILD_LOCALE,
  DEFAULT_ARTIFACTS,
  SITE_DIR,
  assertNonEmptyFile,
  assertSupportedDocusaurusVersion,
  assertValidJsonFile,
} = require('./docusaurus-build-phases');
const {
  SCHOOL_SHARD_DATA_VERSION,
  applySchoolShardToSite,
  discoverSchoolIds,
  getSchoolShardDataPath,
  parseSchoolShardEnvironment,
} = require('./docusaurus-school-shards');

const MAX_REPORTED_ROUTES = 10;
const SERVER_BUNDLE_DIRECTORY = '__server';

function getDocusaurusInternals() {
  const {PerfLogger} = require('@docusaurus/logger');
  const {executeSSG} = require('@docusaurus/core/lib/ssg/ssgExecutor');
  const {loadSite} = require('@docusaurus/core/lib/server/site');
  return {PerfLogger, executeSSG, loadSite};
}

function getRouteOwnershipBuilder() {
  return require('./docusaurus-school-route-ownership').buildRouteOwnership;
}

function prepareSsgEnvironment(environment = process.env) {
  environment.BABEL_ENV = 'production';
  environment.NODE_ENV = 'production';
  environment.DOCUSAURUS_CURRENT_LOCALE = BUILD_LOCALE;
  return environment;
}

function assertSingleLocale(i18n, locale = BUILD_LOCALE) {
  if (
    i18n.defaultLocale !== locale
    || i18n.currentLocale !== locale
    || i18n.locales.length !== 1
    || i18n.locales[0] !== locale
  ) {
    throw new Error(
      `School-sharded SSG requires exactly one ${locale} locale. Received `
        + `${JSON.stringify({
          currentLocale: i18n.currentLocale,
          defaultLocale: i18n.defaultLocale,
          locales: i18n.locales,
        })}.`,
    );
  }
}

function assertRecord(value, description) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${description} must be an object.`);
  }
  return value;
}

function formatRoutes(routes) {
  const shown = routes.slice(0, MAX_REPORTED_ROUTES);
  const suffix = routes.length > shown.length
    ? ` (and ${routes.length - shown.length} more)`
    : '';
  return `${shown.map((route) => JSON.stringify(route)).join(', ')}${suffix}`;
}

function assertCollectedDataMatchesRoutes(routePaths, collectedData) {
  if (!Array.isArray(routePaths) || routePaths.some((route) => typeof route !== 'string')) {
    throw new Error('School shard route paths must be an array of strings.');
  }
  assertRecord(collectedData, 'School shard collectedData');

  const expected = new Set();
  const duplicates = new Set();
  for (const routePath of routePaths) {
    if (expected.has(routePath)) duplicates.add(routePath);
    expected.add(routePath);
  }
  if (duplicates.size > 0) {
    throw new Error(
      `School shard route paths contain duplicates: `
        + `${formatRoutes([...duplicates].sort())}.`,
    );
  }

  const actualRoutes = Object.keys(collectedData);
  const actual = new Set(actualRoutes);
  const missing = [...expected]
    .filter((routePath) => !actual.has(routePath))
    .sort((left, right) => left.localeCompare(right, 'en'));
  const extra = actualRoutes
    .filter((routePath) => !expected.has(routePath))
    .sort((left, right) => left.localeCompare(right, 'en'));
  if (missing.length > 0 || extra.length > 0) {
    const details = [];
    if (missing.length > 0) details.push(`missing ${formatRoutes(missing)}`);
    if (extra.length > 0) details.push(`extra ${formatRoutes(extra)}`);
    throw new Error(`School shard SSG route set mismatch: ${details.join('; ')}.`);
  }
  return collectedData;
}

function assertSsgInputArtifacts(
  artifacts = DEFAULT_ARTIFACTS,
  fsImpl = fs,
) {
  assertValidJsonFile(artifacts.clientManifest, 'Client manifest', fsImpl);
  assertNonEmptyFile(artifacts.serverBundle, 'Server bundle', fsImpl);
}

function assertExpectedServerBundleDirectory(
  serverBundlePath,
  siteDir = SITE_DIR,
) {
  const actual = path.resolve(path.dirname(serverBundlePath));
  const expected = path.resolve(siteDir, 'build', SERVER_BUNDLE_DIRECTORY);
  if (actual !== expected) {
    throw new Error(
      `Refusing to remove unexpected server bundle directory ${actual}; `
        + `expected ${expected}.`,
    );
  }
  return actual;
}

function createAtomicTemporaryPath(filePath, {
  pid = process.pid,
  randomUUID = crypto.randomUUID,
} = {}) {
  return `${filePath}.${pid}-${randomUUID()}.tmp`;
}

async function writeSerializedShardData(filePath, payload, {
  mkdir = fs.promises.mkdir,
  writeFile = fs.promises.writeFile,
  rename = fs.promises.rename,
  remove = fs.promises.rm,
  serialize = v8.serialize,
  temporaryPath = createAtomicTemporaryPath(filePath),
} = {}) {
  await mkdir(path.dirname(filePath), {recursive: true});
  try {
    await writeFile(temporaryPath, serialize(payload), {flag: 'wx'});
    await rename(temporaryPath, filePath);
  } catch (error) {
    try {
      await remove(temporaryPath, {force: true});
    } catch {
      // Preserve the original write/rename error. A fresh build clears shard
      // state before retrying, so a failed best-effort temp cleanup is safe.
    }
    throw error;
  }
  return filePath;
}

async function runSchoolShardSsg({
  siteDir = SITE_DIR,
  environment = process.env,
  artifacts = DEFAULT_ARTIFACTS,
  internals,
  assertProfile = assertPagesBuildEnvironment,
  assertVersion = assertSupportedDocusaurusVersion,
  parseShard = parseSchoolShardEnvironment,
  discoverSchools = discoverSchoolIds,
  applyShard = applySchoolShardToSite,
  createRouteOwnership,
  verifyArtifacts = assertSsgInputArtifacts,
  writeShardData = writeSerializedShardData,
  remove = fs.promises.rm,
} = {}) {
  assertProfile(environment);
  assertVersion();
  const shard = parseShard(environment, {required: true});
  prepareSsgEnvironment(environment);

  verifyArtifacts(artifacts);
  const serverDirectory = assertExpectedServerBundleDirectory(
    artifacts.serverBundle,
    siteDir,
  );
  const docusaurus = internals || getDocusaurusInternals();
  const loadSite = () => docusaurus.loadSite({
    siteDir,
    locale: BUILD_LOCALE,
    automaticBaseUrlLocalizationDisabled: true,
  });
  const fullSite = docusaurus.PerfLogger
    ? await docusaurus.PerfLogger.async(
      `Load full site for school shard ${shard.id}`,
      loadSite,
    )
    : await loadSite();

  assertSingleLocale(fullSite.props.i18n);
  if (fullSite.props.siteConfig.future.experimental_router === 'hash') {
    throw new Error('School-sharded SSG requires the browser router.');
  }

  const schoolIds = discoverSchools(siteDir);
  const site = await applyShard(fullSite, shard, schoolIds, {
    createRouteOwnership: createRouteOwnership || getRouteOwnershipBuilder(),
  });
  const routePaths = [...site.props.routesPaths];
  const execute = () => docusaurus.executeSSG({
    props: site.props,
    serverBundlePath: artifacts.serverBundle,
    clientManifestPath: artifacts.clientManifest,
    router: site.props.siteConfig.future.experimental_router,
  });
  const result = docusaurus.PerfLogger
    ? await docusaurus.PerfLogger.async(
      `SSG school shard ${shard.id}`,
      execute,
    )
    : await execute();
  const collectedData = assertCollectedDataMatchesRoutes(
    routePaths,
    assertRecord(result, 'School shard SSG result').collectedData,
  );
  const payload = {
    version: SCHOOL_SHARD_DATA_VERSION,
    shard: {
      id: shard.id,
      schools: [...shard.schools],
      includeShared: shard.includeShared,
    },
    routePaths,
    collectedData,
  };
  const dataPath = getSchoolShardDataPath(siteDir, shard.id);
  await writeShardData(dataPath, payload);

  // The serialized payload is the durable SSG hand-off. Only after it lands
  // atomically may this shard's temporary server compiler output be removed.
  await remove(serverDirectory, {recursive: true, force: true});
  return {dataPath, payload};
}

async function main(args = process.argv.slice(2)) {
  if (args.length > 0) {
    throw new Error(`Unexpected school shard SSG arguments: ${args.join(' ')}`);
  }
  const {payload} = await runSchoolShardSsg();
  console.log(
    `[school shards] Rendered ${payload.routePaths.length} routes for `
      + `${payload.shard.id} under the exact ${PAGES_BUILD_PROFILE} profile.`,
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  MAX_REPORTED_ROUTES,
  SERVER_BUNDLE_DIRECTORY,
  assertCollectedDataMatchesRoutes,
  assertExpectedServerBundleDirectory,
  assertRecord,
  assertSingleLocale,
  assertSsgInputArtifacts,
  createAtomicTemporaryPath,
  formatRoutes,
  getDocusaurusInternals,
  getRouteOwnershipBuilder,
  main,
  prepareSsgEnvironment,
  runSchoolShardSsg,
  writeSerializedShardData,
};
