const DOCS_PLUGIN_NAME = 'docusaurus-plugin-content-docs';
const SHARED_ROUTE_OWNER = null;

function normalizeSchoolIds(schoolIds) {
  if (
    schoolIds == null
    || typeof schoolIds === 'string'
    || typeof schoolIds[Symbol.iterator] !== 'function'
  ) {
    throw new TypeError('schoolIds must be an iterable of docs top-level directory names.');
  }

  const values = [...schoolIds];
  if (values.length === 0) {
    throw new Error('At least one known school id is required.');
  }
  const normalized = new Set();
  for (const value of values) {
    if (
      typeof value !== 'string'
      || value.length === 0
      || value === '.'
      || value === '..'
      || /[/\\]/.test(value)
    ) {
      throw new Error(
        `School id must be a single docs directory name: ${JSON.stringify(value)}.`,
      );
    }
    if (normalized.has(value)) {
      throw new Error(`Duplicate school id ${JSON.stringify(value)}.`);
    }
    normalized.add(value);
  }
  return normalized;
}

function assertPathname(pathname, description = 'route pathname') {
  if (typeof pathname !== 'string' || !pathname.startsWith('/')) {
    throw new Error(`${description} must start with "/": ${JSON.stringify(pathname)}.`);
  }
  return pathname;
}

function extractModulePath(moduleValue) {
  if (typeof moduleValue === 'string') return moduleValue;
  if (
    moduleValue
    && typeof moduleValue === 'object'
    && typeof moduleValue.path === 'string'
  ) {
    return moduleValue.path;
  }
  return null;
}

function inspectDocsSourcePath(sourcePath, schoolIds) {
  const knownSchoolIds = schoolIds instanceof Set
    ? schoolIds
    : normalizeSchoolIds(schoolIds);
  if (typeof sourcePath !== 'string' || sourcePath.length === 0) {
    return {matched: false, owner: SHARED_ROUTE_OWNER, relativePath: null};
  }

  const normalized = sourcePath
    .replace(/\\/g, '/')
    .replace(/[?#].*$/, '');
  let relativePath;
  if (normalized.startsWith('docs/')) {
    relativePath = normalized.slice('docs/'.length);
  } else {
    const markerIndex = normalized.lastIndexOf('/docs/');
    if (markerIndex < 0) {
      return {matched: false, owner: SHARED_ROUTE_OWNER, relativePath: null};
    }
    relativePath = normalized.slice(markerIndex + '/docs/'.length);
  }

  const segments = relativePath.split('/').filter(Boolean);
  // Files directly inside docs/ (for example docs/intro.mdx) are shared.
  if (segments.length < 2) {
    return {matched: true, owner: SHARED_ROUTE_OWNER, relativePath};
  }

  const owner = segments[0];
  if (!knownSchoolIds.has(owner)) {
    throw new Error(
      `Docs source ${JSON.stringify(sourcePath)} belongs to unknown school `
        + `${JSON.stringify(owner)}.`,
    );
  }
  return {matched: true, owner, relativePath};
}

function getDocSourceSchoolId(sourcePath, schoolIds) {
  return inspectDocsSourcePath(sourcePath, schoolIds).owner;
}

function getRouteDocSourceOwnership(route, schoolIds) {
  const moduleSource = extractModulePath(route?.modules?.content);
  const metadataSource = route?.metadata?.sourceFilePath;
  const moduleOwnership = inspectDocsSourcePath(moduleSource, schoolIds);
  const metadataOwnership = inspectDocsSourcePath(metadataSource, schoolIds);

  if (
    moduleOwnership.matched
    && metadataOwnership.matched
    && moduleOwnership.owner !== metadataOwnership.owner
  ) {
    throw new Error(
      `Route ${JSON.stringify(route?.path)} has conflicting docs sources: `
        + `${JSON.stringify(moduleSource)} resolves to ${formatOwner(moduleOwnership.owner)}, `
        + `but ${JSON.stringify(metadataSource)} resolves to `
        + `${formatOwner(metadataOwnership.owner)}.`,
    );
  }

  // modules.content is the canonical DocItem source. Metadata is its fallback.
  if (moduleOwnership.matched) return moduleOwnership;
  return metadataOwnership;
}

function formatOwner(owner) {
  return owner === SHARED_ROUTE_OWNER ? 'shared' : JSON.stringify(owner);
}

function assertKnownOwner(owner, schoolIds, description) {
  if (owner === SHARED_ROUTE_OWNER) return owner;
  if (!schoolIds.has(owner)) {
    throw new Error(`${description} references unknown school ${JSON.stringify(owner)}.`);
  }
  return owner;
}

function registerOwnership(ownership, pathname, owner, schoolIds, description) {
  assertPathname(pathname, description);
  assertKnownOwner(owner, schoolIds, description);
  if (ownership.has(pathname) && ownership.get(pathname) !== owner) {
    throw new Error(
      `Conflicting ownership for ${JSON.stringify(pathname)}: `
        + `${formatOwner(ownership.get(pathname))} versus ${formatOwner(owner)} `
        + `(${description}).`,
    );
  }
  ownership.set(pathname, owner);
}

function resolveSingleSchoolOwner(owners) {
  if (!(owners instanceof Set)) {
    throw new TypeError('owners must be a Set.');
  }
  if (owners.size !== 1) return SHARED_ROUTE_OWNER;
  const [owner] = owners;
  return owner === SHARED_ROUTE_OWNER ? SHARED_ROUTE_OWNER : owner;
}

function mergeOwners(destination, source) {
  for (const owner of source) destination.add(owner);
  return destination;
}

function getSidebarDocOwner(docId, docsById, description) {
  if (typeof docId !== 'string' || docId.length === 0) {
    throw new Error(`${description} has an invalid doc id ${JSON.stringify(docId)}.`);
  }
  if (!docsById.has(docId)) {
    throw new Error(`${description} references unknown doc id ${JSON.stringify(docId)}.`);
  }
  return docsById.get(docId);
}

function collectSidebarItemOwners(
  item,
  docsById,
  categoryOwnersByPath,
  schoolIds,
  description,
) {
  if (typeof item === 'string') {
    return new Set([getSidebarDocOwner(item, docsById, description)]);
  }
  if (!item || typeof item !== 'object') {
    throw new Error(`${description} contains an invalid sidebar item.`);
  }

  if (item.type === 'doc' || item.type === 'ref') {
    return new Set([getSidebarDocOwner(item.id, docsById, description)]);
  }
  if (item.type === 'link') {
    return item.docId
      ? new Set([getSidebarDocOwner(item.docId, docsById, description)])
      : new Set();
  }
  if (item.type === 'html') return new Set();
  if (item.type !== 'category') {
    throw new Error(`${description} contains unsupported sidebar item type ${item.type}.`);
  }
  if (!Array.isArray(item.items)) {
    throw new Error(`${description} category ${JSON.stringify(item.label)} has invalid items.`);
  }

  const categoryDescription = `${description} category ${JSON.stringify(item.label)}`;
  const owners = new Set();
  if (item.link?.type === 'doc') {
    owners.add(getSidebarDocOwner(item.link.id, docsById, categoryDescription));
  }
  for (const child of item.items) {
    mergeOwners(
      owners,
      collectSidebarItemOwners(
        child,
        docsById,
        categoryOwnersByPath,
        schoolIds,
        categoryDescription,
      ),
    );
  }

  const generatedIndex = item.link?.type === 'generated-index'
    ? item.link.permalink
    : item.href;
  if (item.link?.type === 'generated-index' && !generatedIndex) {
    throw new Error(`${categoryDescription} is missing its generated-index permalink.`);
  }
  if (generatedIndex) {
    registerOwnership(
      categoryOwnersByPath,
      generatedIndex,
      resolveSingleSchoolOwner(owners),
      schoolIds,
      categoryDescription,
    );
  }
  return owners;
}

function getSidebarCategoryOwnership(sidebars, docsById, schoolIds, description) {
  if (!sidebars || typeof sidebars !== 'object' || Array.isArray(sidebars)) {
    throw new Error(`${description} has invalid sidebars.`);
  }
  const categoryOwnersByPath = new Map();
  for (const [sidebarId, items] of Object.entries(sidebars)) {
    if (!Array.isArray(items)) {
      throw new Error(`${description} sidebar ${JSON.stringify(sidebarId)} must be an array.`);
    }
    for (const item of items) {
      collectSidebarItemOwners(
        item,
        docsById,
        categoryOwnersByPath,
        schoolIds,
        `${description} sidebar ${JSON.stringify(sidebarId)}`,
      );
    }
  }
  return categoryOwnersByPath;
}

function getSchoolTagPrefix(tagsPath) {
  assertPathname(tagsPath, 'docs tagsPath');
  return `${tagsPath.replace(/\/+$/, '')}/school/`;
}

function getVersionDescription(version, index) {
  const name = version?.versionName ?? version?.label ?? index;
  return `docs version ${JSON.stringify(name)}`;
}

function buildVersionOwnership(version, schoolIds, index = 0) {
  const knownSchoolIds = schoolIds instanceof Set
    ? schoolIds
    : normalizeSchoolIds(schoolIds);
  const description = getVersionDescription(version, index);
  if (!version || !Array.isArray(version.docs)) {
    throw new Error(`${description} has invalid docs metadata.`);
  }

  const schoolTagPrefix = getSchoolTagPrefix(version.tagsPath);
  const docsById = new Map();
  const docOwnersByPath = new Map();
  const schoolTagOwnerSets = new Map();

  for (const doc of version.docs) {
    if (!doc || typeof doc.id !== 'string' || doc.id.length === 0) {
      throw new Error(`${description} contains a doc with an invalid id.`);
    }
    if (docsById.has(doc.id)) {
      throw new Error(`${description} contains duplicate doc id ${JSON.stringify(doc.id)}.`);
    }

    const sourceOwnership = inspectDocsSourcePath(doc.source, knownSchoolIds);
    if (!sourceOwnership.matched) {
      throw new Error(
        `${description} doc ${JSON.stringify(doc.id)} has no source inside docs/: `
          + `${JSON.stringify(doc.source)}.`,
      );
    }
    const owner = sourceOwnership.owner;
    docsById.set(doc.id, owner);
    if (docOwnersByPath.has(doc.permalink)) {
      throw new Error(
        `${description} contains duplicate doc permalink ${JSON.stringify(doc.permalink)}.`,
      );
    }
    registerOwnership(
      docOwnersByPath,
      doc.permalink,
      owner,
      knownSchoolIds,
      `${description} doc ${JSON.stringify(doc.id)}`,
    );

    for (const tag of doc.tags || []) {
      const permalink = tag?.permalink;
      if (typeof permalink !== 'string' || !permalink.startsWith(schoolTagPrefix)) {
        continue;
      }
      assertPathname(permalink, `${description} school tag permalink`);
      if (!schoolTagOwnerSets.has(permalink)) schoolTagOwnerSets.set(permalink, new Set());
      schoolTagOwnerSets.get(permalink).add(owner);
    }
  }

  const categoryOwnersByPath = getSidebarCategoryOwnership(
    version.sidebars,
    docsById,
    knownSchoolIds,
    description,
  );
  const schoolTagOwnersByPath = new Map(
    [...schoolTagOwnerSets].map(([pathname, owners]) => [
      pathname,
      resolveSingleSchoolOwner(owners),
    ]),
  );

  return {
    categoryOwnersByPath,
    docOwnersById: docsById,
    docOwnersByPath,
    schoolTagOwnersByPath,
    schoolTagPrefix,
  };
}

function getDocsLoadedVersions(siteProps) {
  if (!siteProps || !Array.isArray(siteProps.plugins)) {
    throw new Error('site.props.plugins must be an array.');
  }
  const docsPlugins = siteProps.plugins.filter((plugin) => (
    plugin?.name === DOCS_PLUGIN_NAME
  ));
  if (docsPlugins.length === 0) {
    throw new Error(`No ${DOCS_PLUGIN_NAME} plugin was loaded.`);
  }

  return docsPlugins.flatMap((plugin) => {
    if (!Array.isArray(plugin.content?.loadedVersions)) {
      throw new Error(
        `${DOCS_PLUGIN_NAME}@${plugin.options?.id || 'default'} has no loadedVersions.`,
      );
    }
    return plugin.content.loadedVersions;
  });
}

function buildDocsOwnershipIndex(loadedVersions, schoolIds) {
  if (!Array.isArray(loadedVersions) || loadedVersions.length === 0) {
    throw new Error('At least one loaded docs version is required.');
  }
  const knownSchoolIds = normalizeSchoolIds(schoolIds);
  const index = {
    categoryOwnersByPath: new Map(),
    docOwnersByPath: new Map(),
    schoolIds: knownSchoolIds,
    schoolTagOwnersByPath: new Map(),
    schoolTagPrefixes: new Set(),
  };

  loadedVersions.forEach((version, versionIndex) => {
    const versionOwnership = buildVersionOwnership(
      version,
      knownSchoolIds,
      versionIndex,
    );
    index.schoolTagPrefixes.add(versionOwnership.schoolTagPrefix);
    for (const [pathname, owner] of versionOwnership.docOwnersByPath) {
      if (index.docOwnersByPath.has(pathname)) {
        throw new Error(`Duplicate loaded doc permalink ${JSON.stringify(pathname)}.`);
      }
      registerOwnership(
        index.docOwnersByPath,
        pathname,
        owner,
        knownSchoolIds,
        'loaded docs metadata',
      );
    }
    for (const [pathname, owner] of versionOwnership.categoryOwnersByPath) {
      registerOwnership(
        index.categoryOwnersByPath,
        pathname,
        owner,
        knownSchoolIds,
        'loaded docs sidebars',
      );
    }
    for (const [pathname, owner] of versionOwnership.schoolTagOwnersByPath) {
      registerOwnership(
        index.schoolTagOwnersByPath,
        pathname,
        owner,
        knownSchoolIds,
        'loaded docs school tags',
      );
    }
  });
  return index;
}

function isSchoolTagPath(pathname, schoolTagPrefixes) {
  return [...schoolTagPrefixes].some((prefix) => pathname.startsWith(prefix));
}

function isCategoryRoute(route) {
  return Boolean(
    route?.props
    && Object.prototype.hasOwnProperty.call(route.props, 'categoryGeneratedIndex'),
  );
}

function classifyRoute(route, ownershipIndex) {
  if (!route || typeof route !== 'object') {
    throw new TypeError('route must be an object.');
  }
  assertPathname(route.path);
  if (!ownershipIndex?.schoolIds) {
    throw new TypeError('ownershipIndex must come from buildDocsOwnershipIndex().');
  }
  // Layout routes do not render a pathname by themselves; their leaf children do.
  if (Array.isArray(route.routes)) return SHARED_ROUTE_OWNER;

  const evidence = [];
  const sourceOwnership = getRouteDocSourceOwnership(route, ownershipIndex.schoolIds);
  if (sourceOwnership.matched) evidence.push(['DocItem source', sourceOwnership.owner]);

  for (const [label, ownership] of [
    ['doc permalink', ownershipIndex.docOwnersByPath],
    ['sidebar category', ownershipIndex.categoryOwnersByPath],
    ['school tag', ownershipIndex.schoolTagOwnersByPath],
  ]) {
    if (ownership.has(route.path)) evidence.push([label, ownership.get(route.path)]);
  }

  if (evidence.length > 0) {
    const owner = evidence[0][1];
    const conflict = evidence.find((entry) => entry[1] !== owner);
    if (conflict) {
      throw new Error(
        `Route ${JSON.stringify(route.path)} has conflicting ownership evidence: `
          + evidence.map(([label, value]) => `${label}=${formatOwner(value)}`).join(', ')
          + '.',
      );
    }
    return assertKnownOwner(owner, ownershipIndex.schoolIds, `Route ${route.path}`);
  }

  if (isSchoolTagPath(route.path, ownershipIndex.schoolTagPrefixes)) {
    throw new Error(
      `School tag route ${JSON.stringify(route.path)} is absent from docs tag metadata.`,
    );
  }
  if (isCategoryRoute(route)) {
    throw new Error(
      `Category route ${JSON.stringify(route.path)} is absent from loaded sidebars.`,
    );
  }
  return SHARED_ROUTE_OWNER;
}

function flattenLeafRoutes(routes) {
  if (!Array.isArray(routes)) throw new TypeError('routes must be an array.');
  function flatten(route) {
    if (!route || typeof route !== 'object') {
      throw new TypeError('Every route must be an object.');
    }
    if (route.routes !== undefined) {
      if (!Array.isArray(route.routes)) {
        throw new TypeError(`Route ${JSON.stringify(route.path)} has invalid child routes.`);
      }
      return route.routes.flatMap(flatten);
    }
    return [route];
  }
  return routes.flatMap(flatten);
}

function assertExpectedRoutesPresent(ownership, expected, description) {
  for (const [pathname, owner] of expected) {
    if (!ownership.has(pathname)) {
      throw new Error(
        `${description} ${JSON.stringify(pathname)} is missing from site.props.routes.`,
      );
    }
    if (ownership.get(pathname) !== owner) {
      throw new Error(
        `${description} ${JSON.stringify(pathname)} was classified as `
          + `${formatOwner(ownership.get(pathname))}, expected ${formatOwner(owner)}.`,
      );
    }
  }
}

function buildRouteOwnership(siteProps, schoolIds) {
  if (!siteProps || !Array.isArray(siteProps.routes)) {
    throw new Error('site.props.routes must be an array.');
  }
  const ownershipIndex = buildDocsOwnershipIndex(
    getDocsLoadedVersions(siteProps),
    schoolIds,
  );
  const ownership = new Map();
  for (const route of flattenLeafRoutes(siteProps.routes)) {
    if (ownership.has(route.path)) {
      throw new Error(`Duplicate leaf route pathname ${JSON.stringify(route.path)}.`);
    }
    registerOwnership(
      ownership,
      route.path,
      classifyRoute(route, ownershipIndex),
      ownershipIndex.schoolIds,
      'site.props.routes',
    );
  }

  assertExpectedRoutesPresent(
    ownership,
    ownershipIndex.docOwnersByPath,
    'Loaded doc route',
  );
  assertExpectedRoutesPresent(
    ownership,
    ownershipIndex.categoryOwnersByPath,
    'Loaded category route',
  );
  assertExpectedRoutesPresent(
    ownership,
    ownershipIndex.schoolTagOwnersByPath,
    'Loaded school tag route',
  );

  if (siteProps.routesPaths !== undefined) {
    if (!Array.isArray(siteProps.routesPaths)) {
      throw new Error('site.props.routesPaths must be an array.');
    }
    const seenRoutePaths = new Set();
    for (const pathname of siteProps.routesPaths) {
      assertPathname(pathname, 'site.props.routesPaths entry');
      if (seenRoutePaths.has(pathname)) {
        throw new Error(`Duplicate site.props.routesPaths entry ${JSON.stringify(pathname)}.`);
      }
      seenRoutePaths.add(pathname);
      if (!ownership.has(pathname)) ownership.set(pathname, SHARED_ROUTE_OWNER);
    }
    for (const pathname of ownership.keys()) {
      if (!seenRoutePaths.has(pathname)) {
        throw new Error(
          `Leaf route ${JSON.stringify(pathname)} is missing from site.props.routesPaths.`,
        );
      }
    }
  }
  return ownership;
}

function classifyRoutePath(pathname, ownership) {
  assertPathname(pathname);
  if (!(ownership instanceof Map)) {
    throw new TypeError('ownership must be a Map returned by buildRouteOwnership().');
  }
  if (!ownership.has(pathname)) {
    throw new Error(`Route pathname ${JSON.stringify(pathname)} has no ownership entry.`);
  }
  return ownership.get(pathname);
}

module.exports = {
  DOCS_PLUGIN_NAME,
  SHARED_ROUTE_OWNER,
  assertExpectedRoutesPresent,
  buildDocsOwnershipIndex,
  buildRouteOwnership,
  buildVersionOwnership,
  classifyRoute,
  classifyRoutePath,
  collectSidebarItemOwners,
  extractModulePath,
  flattenLeafRoutes,
  getDocSourceSchoolId,
  getDocsLoadedVersions,
  getRouteDocSourceOwnership,
  getSchoolTagPrefix,
  getSidebarCategoryOwnership,
  inspectDocsSourcePath,
  isSchoolTagPath,
  normalizeSchoolIds,
  registerOwnership,
  resolveSingleSchoolOwner,
};
