#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const v8 = require('node:v8');

const {
  PAGES_BUILD_PROFILE,
  assertPagesBuildEnvironment,
} = require('./build-for-pages');
const {
  BUILD_LOCALE,
  SITE_DIR,
  assertSupportedDocusaurusVersion,
} = require('./docusaurus-build-phases');
const {assertSingleLocale} = require('./docusaurus-bundle-target');
const {
  SCHOOL_SHARD_COUNT_ENV,
  SCHOOL_SHARD_DATA_VERSION,
  SCHOOL_SHARD_ENVIRONMENT_NAMES,
  discoverSchoolBuildUnits,
  filterRoutePathsForSchoolShard,
  getSchoolShardDataDirectory,
  getSchoolShardDataPath,
  planSchoolShards,
} = require('./docusaurus-school-shards');
const {buildRouteOwnership} = require('./docusaurus-school-route-ownership');

const SERVER_BUNDLE_DIRECTORY = '__server';
const MAX_REPORTED_ROUTES = 10;

function getDocusaurusInternals() {
  const {PerfLogger} = require('@docusaurus/logger');
  const {handleBrokenLinks} = require('@docusaurus/core/lib/server/brokenLinks');
  const {loadSite} = require('@docusaurus/core/lib/server/site');
  return {PerfLogger, handleBrokenLinks, loadSite};
}

function prepareFinalizeEnvironment(environment = process.env) {
  for (const name of SCHOOL_SHARD_ENVIRONMENT_NAMES) delete environment[name];
  environment.BABEL_ENV = 'production';
  environment.NODE_ENV = 'production';
  environment.DOCUSAURUS_CURRENT_LOCALE = BUILD_LOCALE;
  return environment;
}

function assertRecord(value, description) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${description} must be an object.`);
  }
  return value;
}

function assertStringArray(value, description) {
  if (!Array.isArray(value) || value.some((entry) => typeof entry !== 'string')) {
    throw new Error(`${description} must be an array of strings.`);
  }
  return value;
}

function formatRouteList(routes) {
  const shown = routes.slice(0, MAX_REPORTED_ROUTES);
  const suffix = routes.length > shown.length
    ? ` (and ${routes.length - shown.length} more)`
    : '';
  return `${shown.map((route) => JSON.stringify(route)).join(', ')}${suffix}`;
}

function findDuplicateStrings(values) {
  const seen = new Set();
  const duplicates = new Set();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates].sort((left, right) => left.localeCompare(right, 'en'));
}

function compareRouteSets(actualRoutes, expectedRoutes) {
  const actual = new Set(actualRoutes);
  const expected = new Set(expectedRoutes);
  return {
    missing: [...expected]
      .filter((route) => !actual.has(route))
      .sort((left, right) => left.localeCompare(right, 'en')),
    extra: [...actual]
      .filter((route) => !expected.has(route))
      .sort((left, right) => left.localeCompare(right, 'en')),
  };
}

function assertRouteSetEqual(actualRoutes, expectedRoutes, description) {
  assertStringArray(actualRoutes, `${description} routes`);
  assertStringArray(expectedRoutes, `${description} expected routes`);
  const duplicates = findDuplicateStrings(actualRoutes);
  if (duplicates.length > 0) {
    throw new Error(
      `${description} contains duplicate routes: ${formatRouteList(duplicates)}.`,
    );
  }
  const {missing, extra} = compareRouteSets(actualRoutes, expectedRoutes);
  if (missing.length > 0 || extra.length > 0) {
    const details = [];
    if (missing.length > 0) {
      details.push(`missing ${formatRouteList(missing)}`);
    }
    if (extra.length > 0) {
      details.push(`extra ${formatRouteList(extra)}`);
    }
    throw new Error(`${description} route set mismatch: ${details.join('; ')}.`);
  }
}

function createExpectedShardSpecifications({
  routePaths,
  schoolUnits,
  requestedShardCount,
  ownershipByPath = new Map(),
}) {
  assertStringArray(routePaths, 'Full site route paths');
  const fullRoutePaths = [...new Set(routePaths)];
  const allSchoolIds = schoolUnits.map((unit) => unit.id);
  const shards = planSchoolShards(schoolUnits, requestedShardCount);
  const specifications = shards.map((shard) => ({
    shard,
    routePaths: filterRoutePathsForSchoolShard(
      fullRoutePaths,
      shard,
      allSchoolIds,
      ownershipByPath,
    ),
  }));

  const plannedOwners = new Map();
  for (const specification of specifications) {
    if (specification.routePaths.length === 0) {
      throw new Error(
        `Deterministic school shard ${specification.shard.id} owns no routes.`,
      );
    }
    for (const routePath of specification.routePaths) {
      const previousOwner = plannedOwners.get(routePath);
      if (previousOwner) {
        throw new Error(
          `Deterministic school shard plan assigns ${JSON.stringify(routePath)} `
            + `to both ${previousOwner} and ${specification.shard.id}.`,
        );
      }
      plannedOwners.set(routePath, specification.shard.id);
    }
  }
  assertRouteSetEqual(
    [...plannedOwners.keys()],
    fullRoutePaths,
    'Deterministic school shard plan',
  );
  return {fullRoutePaths, specifications};
}

function assertShardMetadata(actual, expected, description) {
  assertRecord(actual, `${description} shard metadata`);
  if (actual.id !== expected.id) {
    throw new Error(
      `${description} declares shard id ${JSON.stringify(actual.id)}; `
        + `expected ${JSON.stringify(expected.id)}.`,
    );
  }
  assertStringArray(actual.schools, `${description} shard schools`);
  if (
    actual.schools.length !== expected.schools.length
    || actual.schools.some((school, index) => school !== expected.schools[index])
  ) {
    throw new Error(
      `${description} declares schools ${JSON.stringify(actual.schools)}; `
        + `expected ${JSON.stringify(expected.schools)}.`,
    );
  }
  if (actual.includeShared !== expected.includeShared) {
    throw new Error(
      `${description} declares includeShared=${JSON.stringify(actual.includeShared)}; `
        + `expected ${expected.includeShared}.`,
    );
  }
}

function validateShardPayload(payload, specification) {
  const description = `School shard ${specification.shard.id}`;
  assertRecord(payload, `${description} payload`);
  if (payload.version !== SCHOOL_SHARD_DATA_VERSION) {
    throw new Error(
      `${description} payload version must be ${SCHOOL_SHARD_DATA_VERSION}; `
        + `received ${JSON.stringify(payload.version)}.`,
    );
  }
  assertShardMetadata(payload.shard, specification.shard, description);
  assertStringArray(payload.routePaths, `${description} payload routePaths`);
  const collectedData = assertRecord(
    payload.collectedData,
    `${description} collectedData`,
  );
  const collectedRoutes = Object.keys(collectedData);

  assertRouteSetEqual(
    payload.routePaths,
    collectedRoutes,
    `${description} routePaths and collectedData`,
  );
  assertRouteSetEqual(
    payload.routePaths,
    specification.routePaths,
    `${description} planned routes`,
  );

  for (const routePath of collectedRoutes) {
    const pageData = assertRecord(
      collectedData[routePath],
      `${description} collectedData for ${JSON.stringify(routePath)}`,
    );
    assertRecord(
      pageData.metadata,
      `${description} metadata for ${JSON.stringify(routePath)}`,
    );
    if (!Array.isArray(pageData.links) || !Array.isArray(pageData.anchors)) {
      throw new Error(
        `${description} collectedData for ${JSON.stringify(routePath)} `
          + 'must contain links and anchors arrays.',
      );
    }
  }
  return payload;
}

function mergeShardPayloads(payloads, specifications, fullRoutePaths) {
  if (!Array.isArray(payloads) || payloads.length !== specifications.length) {
    throw new Error(
      `Expected ${specifications.length} school shard payloads; `
        + `received ${Array.isArray(payloads) ? payloads.length : 'a non-array value'}.`,
    );
  }
  const mergedEntries = [];
  const routeOwners = new Map();
  for (let index = 0; index < specifications.length; index += 1) {
    const specification = specifications[index];
    const payload = validateShardPayload(payloads[index], specification);
    for (const routePath of payload.routePaths) {
      const previousOwner = routeOwners.get(routePath);
      if (previousOwner) {
        throw new Error(
          `Duplicate collected route ${JSON.stringify(routePath)} in school shards `
            + `${previousOwner} and ${specification.shard.id}.`,
        );
      }
      routeOwners.set(routePath, specification.shard.id);
      mergedEntries.push([routePath, payload.collectedData[routePath]]);
    }
  }
  assertRouteSetEqual(
    [...routeOwners.keys()],
    fullRoutePaths,
    'Merged school shard output',
  );
  return Object.fromEntries(mergedEntries);
}

async function readShardPayload(filePath, specification, {
  readFile = fs.promises.readFile,
  deserialize = v8.deserialize,
} = {}) {
  let serialized;
  try {
    serialized = await readFile(filePath);
  } catch (error) {
    throw new Error(
      `Unable to read school shard ${specification.shard.id} at ${filePath}.`,
      {cause: error},
    );
  }
  try {
    return validateShardPayload(deserialize(serialized), specification);
  } catch (error) {
    throw new Error(
      `Invalid serialized school shard ${specification.shard.id} at ${filePath}.`,
      {cause: error},
    );
  }
}

async function readExpectedShardPayloads(siteDir, specifications, {
  readdir = fs.promises.readdir,
  readPayload = readShardPayload,
} = {}) {
  const dataDirectory = getSchoolShardDataDirectory(siteDir);
  let entries;
  try {
    entries = await readdir(dataDirectory, {withFileTypes: true});
  } catch (error) {
    throw new Error(
      `Unable to read school shard output directory ${dataDirectory}.`,
      {cause: error},
    );
  }
  const expectedNames = new Set(
    specifications.map(({shard}) => `${shard.id}.bin`),
  );
  const actualNames = entries.map((entry) => entry.name);
  const missing = [...expectedNames].filter((name) => !actualNames.includes(name));
  const extra = actualNames.filter((name) => !expectedNames.has(name));
  if (missing.length > 0 || extra.length > 0) {
    const details = [];
    if (missing.length > 0) details.push(`missing ${missing.sort().join(', ')}`);
    if (extra.length > 0) details.push(`unexpected ${extra.sort().join(', ')}`);
    throw new Error(`School shard output file set mismatch: ${details.join('; ')}.`);
  }
  for (const entry of entries) {
    if (!entry.isFile()) {
      throw new Error(
        `School shard output ${path.join(dataDirectory, entry.name)} is not a file.`,
      );
    }
  }
  return Promise.all(specifications.map((specification) => readPayload(
    getSchoolShardDataPath(siteDir, specification.shard.id),
    specification,
  )));
}

function mapCollectedData(collectedData, select) {
  return Object.fromEntries(
    Object.entries(collectedData).map(([routePath, pageData]) => [
      routePath,
      select(pageData),
    ]),
  );
}

async function executePluginsPostBuild({plugins, props, collectedData}) {
  const head = props.siteConfig.future.v4.removeLegacyPostBuildHeadAttribute
    ? {}
    : mapCollectedData(collectedData, (data) => data.metadata.helmet);
  const routesBuildMetadata = mapCollectedData(
    collectedData,
    (data) => data.metadata.public,
  );
  await Promise.all(plugins.map(async (plugin) => {
    if (!plugin.postBuild) return;
    await plugin.postBuild({
      ...props,
      head,
      routesBuildMetadata,
      content: plugin.content,
    });
  }));
}

async function executeBrokenLinksCheck({props, collectedData, handleBrokenLinks}) {
  const collectedLinks = mapCollectedData(collectedData, (data) => ({
    links: data.links,
    anchors: data.anchors,
  }));
  await handleBrokenLinks({
    collectedLinks,
    routes: props.routes,
    onBrokenLinks: props.siteConfig.onBrokenLinks,
    onBrokenAnchors: props.siteConfig.onBrokenAnchors,
  });
}

function getTemporaryDirectories(siteDir) {
  return [
    getSchoolShardDataDirectory(siteDir),
    path.join(siteDir, 'build', SERVER_BUNDLE_DIRECTORY),
  ];
}

async function removeTemporaryDirectories(siteDir, {
  remove = fs.promises.rm,
} = {}) {
  await Promise.all(getTemporaryDirectories(siteDir).map((directory) => (
    remove(directory, {recursive: true, force: true})
  )));
}

async function finalizeSchoolShards({
  siteDir = SITE_DIR,
  environment = process.env,
  internals = getDocusaurusInternals(),
  assertProfile = assertPagesBuildEnvironment,
  assertVersion = assertSupportedDocusaurusVersion,
  discoverUnits = discoverSchoolBuildUnits,
  readPayloads = readExpectedShardPayloads,
  cleanup = removeTemporaryDirectories,
  requestedShardCount = environment[SCHOOL_SHARD_COUNT_ENV],
} = {}) {
  assertProfile(environment);
  assertVersion();
  prepareFinalizeEnvironment(environment);

  const site = await internals.PerfLogger.async('Load full site for shard finalization', () => (
    internals.loadSite({
      siteDir,
      locale: BUILD_LOCALE,
      automaticBaseUrlLocalizationDisabled: true,
    })
  ));
  const {props} = site;
  assertSingleLocale(props.i18n);
  if (props.siteConfig.future.experimental_router === 'hash') {
    throw new Error('School-sharded SSG finalization requires the browser router.');
  }

  const schoolUnits = discoverUnits(siteDir);
  const ownershipByPath = buildRouteOwnership(
    props,
    new Set(schoolUnits.map((unit) => unit.id)),
  );
  const {fullRoutePaths, specifications} = createExpectedShardSpecifications({
    routePaths: props.routesPaths,
    schoolUnits,
    requestedShardCount,
    ownershipByPath,
  });
  const payloads = await readPayloads(siteDir, specifications);
  const collectedData = mergeShardPayloads(
    payloads,
    specifications,
    fullRoutePaths,
  );

  await internals.PerfLogger.async('postBuild()', () => executePluginsPostBuild({
    plugins: props.plugins,
    props,
    collectedData,
  }));
  await internals.PerfLogger.async('Broken links checker', () => (
    executeBrokenLinksCheck({
      props,
      collectedData,
      handleBrokenLinks: internals.handleBrokenLinks,
    })
  ));
  await cleanup(siteDir);
  return {collectedData, specifications};
}

async function main(args = process.argv.slice(2)) {
  if (args.length > 0) {
    throw new Error(`Unexpected shard finalizer arguments: ${args.join(' ')}`);
  }
  const result = await finalizeSchoolShards();
  console.log(
    `[school shards] Finalized ${result.specifications.length} shards with `
      + `${Object.keys(result.collectedData).length} routes under the exact `
      + `${PAGES_BUILD_PROFILE} profile.`,
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  SERVER_BUNDLE_DIRECTORY,
  assertRouteSetEqual,
  assertShardMetadata,
  compareRouteSets,
  createExpectedShardSpecifications,
  executeBrokenLinksCheck,
  executePluginsPostBuild,
  finalizeSchoolShards,
  findDuplicateStrings,
  formatRouteList,
  getDocusaurusInternals,
  getTemporaryDirectories,
  main,
  mapCollectedData,
  mergeShardPayloads,
  prepareFinalizeEnvironment,
  readExpectedShardPayloads,
  readShardPayload,
  removeTemporaryDirectories,
  validateShardPayload,
};
