const fs = require('node:fs');
const path = require('node:path');

const {generateRouteFiles} = require(
  '@docusaurus/core/lib/server/codegen/codegenRoutes',
);

const SCHOOL_SHARD_COUNT_ENV = 'KAI_DOCS_SCHOOL_SHARD_COUNT';
const SCHOOL_SHARD_ID_ENV = 'KAI_DOCS_BUILD_SHARD_ID';
const SCHOOL_SHARD_SCHOOLS_ENV = 'KAI_DOCS_BUILD_SHARD_SCHOOLS';
const SCHOOL_SHARD_SHARED_ENV = 'KAI_DOCS_BUILD_SHARD_SHARED';
const SCHOOL_SHARD_ENVIRONMENT_NAMES = Object.freeze([
  SCHOOL_SHARD_ID_ENV,
  SCHOOL_SHARD_SCHOOLS_ENV,
  SCHOOL_SHARD_SHARED_ENV,
]);
const SCHOOL_SHARD_DATA_VERSION = 1;
const SCHOOL_SHARD_DATA_DIRECTORY = '__school-shards';
const DEFAULT_SCHOOL_SHARD_COUNT = 4;
const DEFAULT_SCHOOL_SHARD_MODE = 'auto';
const SCHOOL_SHARD_TARGET_WEIGHT = 256 * 1024 * 1024;
const HARD_RELOAD_ROUTE_COMPONENT = '@site/src/theme/SchoolShardReload/index.jsx';

function assertSafeShardId(value, description = 'school shard id') {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(value)) {
    throw new Error(
      `${description} must contain only lowercase letters, digits, and hyphens: `
        + `${JSON.stringify(value)}.`,
    );
  }
  return value;
}

function assertSafeSchoolId(value) {
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(value)) {
    throw new Error(
      `School build unit must match a top-level docs directory: ${JSON.stringify(value)}.`,
    );
  }
  return value;
}

function listMarkdownFiles(directory) {
  const files = [];
  const pending = [directory];
  while (pending.length > 0) {
    const current = pending.pop();
    const entries = fs.readdirSync(current, {withFileTypes: true})
      .sort((left, right) => left.name.localeCompare(right.name, 'en'));
    for (const entry of entries) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) pending.push(entryPath);
      if (entry.isFile() && /\.mdx?$/i.test(entry.name)) files.push(entryPath);
    }
  }
  return files.sort((left, right) => left.localeCompare(right, 'en'));
}

function countMathExpressions(source) {
  const unescapedDollars = source.match(/(?<!\\)\$/g)?.length || 0;
  const latexOpeners = source.match(/\\(?:\(|\[)/g)?.length || 0;
  return Math.floor(unescapedDollars / 2) + latexOpeners;
}

function inspectSchoolBuildUnit(directory) {
  const id = assertSafeSchoolId(path.basename(directory));
  const files = listMarkdownFiles(directory);
  let sourceBytes = 0;
  let mathExpressions = 0;
  for (const filePath of files) {
    const source = fs.readFileSync(filePath, 'utf8');
    sourceBytes += Buffer.byteLength(source);
    mathExpressions += countMathExpressions(source);
  }
  return {
    id,
    documentCount: files.length,
    sourceBytes,
    mathExpressions,
    // KaTeX expansion dominates this repository's generated MDX. This is only
    // a relative planning weight; correctness never depends on the estimate.
    weight: sourceBytes + (mathExpressions * 8192),
  };
}

function discoverSchoolIds(siteDir) {
  const docsDirectory = path.join(siteDir, 'docs');
  return fs.readdirSync(docsDirectory, {withFileTypes: true})
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
    .map((entry) => assertSafeSchoolId(entry.name))
    .sort((left, right) => left.localeCompare(right, 'en'));
}

function discoverSchoolBuildUnits(siteDir) {
  const docsDirectory = path.join(siteDir, 'docs');
  return discoverSchoolIds(siteDir)
    .map((id) => inspectSchoolBuildUnit(path.join(docsDirectory, id)))
    .filter((unit) => unit.documentCount > 0)
    .sort((left, right) => left.id.localeCompare(right.id, 'en'));
}

function parseSchoolShardCount(value, schoolCount = Number.POSITIVE_INFINITY) {
  const parsed = Number(value ?? DEFAULT_SCHOOL_SHARD_COUNT);
  if (!Number.isSafeInteger(parsed) || parsed < 1 || parsed > 32) {
    throw new Error(
      `${SCHOOL_SHARD_COUNT_ENV} must be an integer between 1 and 32.`,
    );
  }
  return Math.min(parsed, schoolCount);
}

function resolveSchoolShardCount(
  units,
  requestedCount = DEFAULT_SCHOOL_SHARD_MODE,
) {
  if (requestedCount !== DEFAULT_SCHOOL_SHARD_MODE) {
    return parseSchoolShardCount(requestedCount, units.length);
  }
  const totalWeight = units.reduce((sum, unit) => sum + Number(unit.weight), 0);
  const automaticCount = Math.max(
    DEFAULT_SCHOOL_SHARD_COUNT,
    Math.ceil(totalWeight / SCHOOL_SHARD_TARGET_WEIGHT),
  );
  return Math.min(automaticCount, units.length, 32);
}

function planSchoolShards(units, requestedCount = DEFAULT_SCHOOL_SHARD_MODE) {
  if (!Array.isArray(units) || units.length === 0) {
    throw new Error('At least one school build unit is required.');
  }
  const seen = new Set();
  const normalized = units.map((unit) => {
    const id = assertSafeSchoolId(String(unit.id));
    if (seen.has(id)) throw new Error(`Duplicate school build unit ${id}.`);
    seen.add(id);
    const weight = Number(unit.weight);
    if (!Number.isFinite(weight) || weight < 0) {
      throw new Error(`School build unit ${id} has an invalid weight.`);
    }
    return {
      ...unit,
      id,
      weight,
      documentCount: Number(unit.documentCount) || 0,
      sourceBytes: Number(unit.sourceBytes) || 0,
      mathExpressions: Number(unit.mathExpressions) || 0,
    };
  });
  const shardCount = resolveSchoolShardCount(normalized, requestedCount);
  const shards = Array.from({length: shardCount}, (_unused, index) => ({
    id: `school-group-${String(index + 1).padStart(2, '0')}`,
    schools: [],
    weight: 0,
    documentCount: 0,
    sourceBytes: 0,
    mathExpressions: 0,
    includeShared: false,
  }));

  const byDescendingWeight = [...normalized].sort((left, right) => (
    right.weight - left.weight || left.id.localeCompare(right.id, 'en')
  ));
  for (const unit of byDescendingWeight) {
    const destination = [...shards].sort((left, right) => (
      left.weight - right.weight
        || left.schools.length - right.schools.length
        || left.id.localeCompare(right.id, 'en')
    ))[0];
    destination.schools.push(unit.id);
    destination.weight += unit.weight;
    destination.documentCount += unit.documentCount;
    destination.sourceBytes += unit.sourceBytes;
    destination.mathExpressions += unit.mathExpressions;
  }

  for (const shard of shards) shard.schools.sort((a, b) => a.localeCompare(b, 'en'));
  const sharedShard = [...shards].sort((left, right) => (
    left.weight - right.weight || left.id.localeCompare(right.id, 'en')
  ))[0];
  sharedShard.includeShared = true;
  return shards;
}

function clearSchoolShardEnvironment(source = process.env) {
  const environment = {...source};
  for (const name of SCHOOL_SHARD_ENVIRONMENT_NAMES) delete environment[name];
  return environment;
}

function createSchoolShardEnvironment(source, shard) {
  const environment = clearSchoolShardEnvironment(source);
  return {
    ...environment,
    [SCHOOL_SHARD_ID_ENV]: assertSafeShardId(shard.id),
    [SCHOOL_SHARD_SCHOOLS_ENV]: shard.schools
      .map(assertSafeSchoolId)
      .join(','),
    [SCHOOL_SHARD_SHARED_ENV]: shard.includeShared ? 'true' : 'false',
  };
}

function parseSchoolShardEnvironment(source = process.env, {required = false} = {}) {
  const values = SCHOOL_SHARD_ENVIRONMENT_NAMES.map((name) => source[name]);
  if (values.every((value) => value === undefined)) {
    if (required) throw new Error('A school build shard environment is required.');
    return null;
  }
  if (values.some((value) => value === undefined)) {
    throw new Error('The school build shard environment is incomplete.');
  }
  const id = assertSafeShardId(source[SCHOOL_SHARD_ID_ENV]);
  const schools = source[SCHOOL_SHARD_SCHOOLS_ENV].split(',');
  if (schools.length === 0 || schools.some((school) => school.length === 0)) {
    throw new Error(`${SCHOOL_SHARD_SCHOOLS_ENV} must list at least one school.`);
  }
  schools.forEach(assertSafeSchoolId);
  if (new Set(schools).size !== schools.length) {
    throw new Error(`${SCHOOL_SHARD_SCHOOLS_ENV} must not contain duplicates.`);
  }
  const sharedValue = source[SCHOOL_SHARD_SHARED_ENV];
  if (sharedValue !== 'true' && sharedValue !== 'false') {
    throw new Error(`${SCHOOL_SHARD_SHARED_ENV} must be true or false.`);
  }
  return {id, schools, includeShared: sharedValue === 'true'};
}

function assertRouteOwnershipMap(ownershipByPath) {
  if (!(ownershipByPath instanceof Map)) {
    throw new TypeError(
      'School shard route ownership must be a Map from buildRouteOwnership().',
    );
  }
  return ownershipByPath;
}

function getAuthoritativeRouteOwner(routePath, ownershipByPath) {
  assertRouteOwnershipMap(ownershipByPath);
  if (!ownershipByPath.has(routePath)) {
    throw new Error(
      `Route ${JSON.stringify(routePath)} has no authoritative school ownership entry.`,
    );
  }
  return ownershipByPath.get(routePath);
}

function createHardReloadRoute(route) {
  return Object.fromEntries(Object.entries({
    path: route.path,
    exact: route.exact,
    strict: route.strict,
    sensitive: route.sensitive,
    component: HARD_RELOAD_ROUTE_COMPONENT,
    // Top-level page routes carry the Docusaurus plugin context themselves.
    // Retain only that small provider module; dropping it makes global theme
    // hooks throw before SchoolShardReload can perform the document navigation.
    context: route.context,
  }).filter(([, value]) => value !== undefined));
}

function transformRoutesForSchoolShard(
  routes,
  shard,
  allSchoolIds,
  ownershipByPath,
) {
  assertRouteOwnershipMap(ownershipByPath);
  const selectedSchools = new Set(shard.schools);
  const schoolIds = new Set(allSchoolIds);
  for (const school of selectedSchools) {
    if (!schoolIds.has(school)) {
      throw new Error(`School shard ${shard.id} references unknown school ${school}.`);
    }
  }

  function transformRoute(route) {
    const transformedChildren = route.routes?.map(transformRoute);
    // Structural routes are required by both the server renderer and the
    // browser router, even when only some of their descendants belong here.
    if (transformedChildren) {
      return {...route, routes: transformedChildren};
    }
    const owner = getAuthoritativeRouteOwner(route.path, ownershipByPath);
    const includeSelf = owner
      ? selectedSchools.has(owner)
      : shard.includeShared;
    return includeSelf ? route : createHardReloadRoute(route);
  }

  return routes.map(transformRoute);
}

function filterRoutePathsForSchoolShard(
  routePaths,
  shard,
  allSchoolIds,
  ownershipByPath,
) {
  assertRouteOwnershipMap(ownershipByPath);
  const selectedSchools = new Set(shard.schools);
  const schoolIds = new Set(allSchoolIds);
  for (const school of selectedSchools) {
    if (!schoolIds.has(school)) {
      throw new Error(`School shard ${shard.id} references unknown school ${school}.`);
    }
  }
  return [...new Set(routePaths)].filter((routePath) => {
    const owner = getAuthoritativeRouteOwner(routePath, ownershipByPath);
    return owner ? selectedSchools.has(owner) : shard.includeShared;
  });
}

async function applySchoolShardToSite(
  site,
  shard,
  allSchoolIds,
  {createRouteOwnership} = {},
) {
  if (typeof createRouteOwnership !== 'function') {
    throw new TypeError(
      'applySchoolShardToSite requires the authoritative route ownership builder.',
    );
  }
  const ownershipByPath = assertRouteOwnershipMap(
    createRouteOwnership(site.props, new Set(allSchoolIds)),
  );
  const routes = transformRoutesForSchoolShard(
    site.props.routes,
    shard,
    allSchoolIds,
    ownershipByPath,
  );
  const routesPaths = filterRoutePathsForSchoolShard(
    site.props.routesPaths,
    shard,
    allSchoolIds,
    ownershipByPath,
  );
  if (routesPaths.length === 0) {
    throw new Error(`School shard ${shard.id} does not own any routes.`);
  }
  await generateRouteFiles({
    generatedFilesDir: site.props.generatedFilesDir,
    routes,
  });
  return {
    ...site,
    props: {...site.props, routes, routesPaths},
  };
}

function getSchoolShardDataDirectory(siteDir) {
  return path.join(siteDir, 'build', SCHOOL_SHARD_DATA_DIRECTORY);
}

function getSchoolShardDataPath(siteDir, shardId) {
  return path.join(
    getSchoolShardDataDirectory(siteDir),
    `${assertSafeShardId(shardId)}.bin`,
  );
}

module.exports = {
  DEFAULT_SCHOOL_SHARD_COUNT,
  DEFAULT_SCHOOL_SHARD_MODE,
  HARD_RELOAD_ROUTE_COMPONENT,
  SCHOOL_SHARD_COUNT_ENV,
  SCHOOL_SHARD_DATA_DIRECTORY,
  SCHOOL_SHARD_DATA_VERSION,
  SCHOOL_SHARD_ENVIRONMENT_NAMES,
  SCHOOL_SHARD_ID_ENV,
  SCHOOL_SHARD_SCHOOLS_ENV,
  SCHOOL_SHARD_SHARED_ENV,
  SCHOOL_SHARD_TARGET_WEIGHT,
  applySchoolShardToSite,
  assertSafeSchoolId,
  clearSchoolShardEnvironment,
  countMathExpressions,
  createSchoolShardEnvironment,
  discoverSchoolBuildUnits,
  discoverSchoolIds,
  filterRoutePathsForSchoolShard,
  getSchoolShardDataDirectory,
  getSchoolShardDataPath,
  inspectSchoolBuildUnit,
  listMarkdownFiles,
  parseSchoolShardCount,
  parseSchoolShardEnvironment,
  planSchoolShards,
  resolveSchoolShardCount,
  transformRoutesForSchoolShard,
};
