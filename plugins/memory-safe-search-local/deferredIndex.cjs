const fs = require('node:fs');
const path = require('node:path');
const {validateScanConcurrency} = require('./boundedScanDocuments.cjs');
const {buildSearchIndexes} = require('./postBuild.cjs');
const {processDocInfos: upstreamProcessDocInfos} = require('./upstream.cjs');

const DEFERRED_INDEX_MANIFEST_FILENAME = '.kai-search-index-manifest.json';
const DEFERRED_INDEX_MANIFEST_VERSION = 1;
const RUNTIME_CONFIG_KEYS = Object.freeze([
  'forceIgnoreNoIndex',
  'hideSearchBarWithNoSearchContext',
  'ignoreCssSelectors',
  'language',
  'removeDefaultStemmer',
  'removeDefaultStopWordFilter',
  'searchContextByPaths',
  'useAllContextsWithNoSearchContext',
  'zhUserDict',
  'zhUserDictPath',
]);

function getDeferredIndexManifestPath(outDir) {
  return path.join(outDir, DEFERRED_INDEX_MANIFEST_FILENAME);
}

function getRuntimeConfig(config) {
  return Object.fromEntries(
    RUNTIME_CONFIG_KEYS
      .filter((key) => config[key] !== undefined)
      .map((key) => [key, config[key]]),
  );
}

function toManifestRelativePath(buildRoot, targetPath, {allowRoot = false} = {}) {
  const resolvedRoot = path.resolve(buildRoot);
  const resolvedTarget = path.resolve(targetPath);
  const relative = path.relative(resolvedRoot, resolvedTarget);
  if (
    relative === '..'
    || relative.startsWith(`..${path.sep}`)
    || path.isAbsolute(relative)
  ) {
    throw new Error(
      `Deferred search index path escapes the build directory: ${targetPath}`,
    );
  }
  if (relative === '') {
    if (allowRoot) return '.';
    throw new Error(
      `Deferred search index file path cannot be the build directory: ${targetPath}`,
    );
  }
  return relative.split(path.sep).join('/');
}

function validateManifestRelativePath(value, {allowRoot = false} = {}) {
  if (allowRoot && value === '.') return value;
  if (
    typeof value !== 'string'
    || value.length === 0
    || value.includes('\\')
    || path.posix.isAbsolute(value)
    || path.win32.isAbsolute(value)
    || /^[A-Za-z]:/.test(value)
    || value.split('/').some((segment) => (
      segment === '' || segment === '.' || segment === '..'
    ))
  ) {
    throw new TypeError(`Invalid deferred search index relative path: ${String(value)}.`);
  }
  return value;
}

function resolveManifestRelativePath(buildRoot, value, options) {
  const validated = validateManifestRelativePath(value, options);
  const resolved = path.resolve(buildRoot, validated);
  // Resolve first and then check containment again so platform-specific path
  // semantics cannot turn a validated manifest entry into an escape.
  toManifestRelativePath(buildRoot, resolved, options);
  return resolved;
}

function serializeVersionDataList(buildRoot, versionDataList) {
  return versionDataList.map((versionData) => ({
    outDir: toManifestRelativePath(
      buildRoot,
      versionData.outDir,
      {allowRoot: true},
    ),
    paths: versionData.paths.map((document) => ({
      ...document,
      filePath: toManifestRelativePath(buildRoot, document.filePath),
    })),
  }));
}

function resolveVersionDataList(buildRoot, versionDataList) {
  const resolvedRoot = path.resolve(buildRoot);
  return versionDataList.map((versionData) => ({
    outDir: resolveManifestRelativePath(
      resolvedRoot,
      versionData.outDir,
      {allowRoot: true},
    ),
    paths: versionData.paths.map((document) => ({
      ...document,
      filePath: resolveManifestRelativePath(
        resolvedRoot,
        document.filePath,
      ),
    })),
  }));
}

function createDeferredIndexManifest({
  baseUrl,
  buildRoot,
  concurrency,
  config,
  searchIndexFilename,
  versionDataList,
}) {
  return {
    version: DEFERRED_INDEX_MANIFEST_VERSION,
    baseUrl,
    concurrency: validateScanConcurrency(concurrency),
    config: getRuntimeConfig(config),
    searchIndexFilename,
    versionDataList: serializeVersionDataList(buildRoot, versionDataList),
  };
}

function validateDeferredIndexManifest(manifest) {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    throw new TypeError('Deferred search index manifest must be an object.');
  }
  if (manifest.version !== DEFERRED_INDEX_MANIFEST_VERSION) {
    throw new Error(
      `Unsupported deferred search index manifest version: ${String(manifest.version)}.`,
    );
  }
  if (typeof manifest.baseUrl !== 'string') {
    throw new TypeError('Deferred search index manifest baseUrl must be a string.');
  }
  validateScanConcurrency(manifest.concurrency);
  if (!manifest.config || typeof manifest.config !== 'object') {
    throw new TypeError('Deferred search index manifest config must be an object.');
  }
  if (
    typeof manifest.searchIndexFilename !== 'string'
    || !manifest.searchIndexFilename.includes('{dir}')
    || /[/\\]/.test(manifest.searchIndexFilename)
  ) {
    throw new TypeError(
      'Deferred search index filename must be a path-free string containing "{dir}".',
    );
  }
  if (!Array.isArray(manifest.versionDataList)) {
    throw new TypeError('Deferred search index versionDataList must be an array.');
  }
  for (const versionData of manifest.versionDataList) {
    if (
      !versionData
      || typeof versionData.outDir !== 'string'
      || !Array.isArray(versionData.paths)
    ) {
      throw new TypeError('Deferred search index version data is invalid.');
    }
    validateManifestRelativePath(versionData.outDir, {allowRoot: true});
    for (const document of versionData.paths) {
      if (
        !document
        || typeof document.filePath !== 'string'
        || typeof document.url !== 'string'
        || !['blog', 'docs', 'page'].includes(document.type)
      ) {
        throw new TypeError('Deferred search index document data is invalid.');
      }
      validateManifestRelativePath(document.filePath);
    }
  }
  return manifest;
}

function createDeferredSearchIndexPostBuild({
  config,
  searchIndexFilename,
  concurrency,
  logger = console.log,
  processDocInfos = upstreamProcessDocInfos,
  writeFile = fs.promises.writeFile,
}) {
  return async function postBuild(buildData) {
    const manifestPath = getDeferredIndexManifestPath(buildData.outDir);
    const manifest = createDeferredIndexManifest({
      baseUrl: buildData.baseUrl,
      buildRoot: buildData.outDir,
      concurrency,
      config,
      searchIndexFilename,
      versionDataList: processDocInfos(buildData, config),
    });
    await writeFile(manifestPath, JSON.stringify(manifest), {encoding: 'utf8'});
    logger(
      `[search-index] Deferred HTML parsing to a fresh process via ${manifestPath}.`,
    );
  };
}

async function runDeferredSearchIndex(manifestPath, {
  buildIndexes = buildSearchIndexes,
  logger = console.log,
  readFile = fs.promises.readFile,
  unlink = fs.promises.unlink,
} = {}) {
  const resolvedManifestPath = path.resolve(manifestPath);
  const serialized = await readFile(resolvedManifestPath, {encoding: 'utf8'});
  const manifest = validateDeferredIndexManifest(JSON.parse(serialized));
  logger(`[search-index] Resuming deferred indexing from ${resolvedManifestPath}.`);
  await buildIndexes({
    baseUrl: manifest.baseUrl,
    versionDataList: resolveVersionDataList(
      path.dirname(resolvedManifestPath),
      manifest.versionDataList,
    ),
  }, {
    concurrency: manifest.concurrency,
    config: manifest.config,
    logger,
    searchIndexFilename: manifest.searchIndexFilename,
  });
  await unlink(resolvedManifestPath);
  logger(`[search-index] Removed deferred manifest ${resolvedManifestPath}.`);
}

module.exports = {
  DEFERRED_INDEX_MANIFEST_FILENAME,
  DEFERRED_INDEX_MANIFEST_VERSION,
  RUNTIME_CONFIG_KEYS,
  createDeferredIndexManifest,
  createDeferredSearchIndexPostBuild,
  getDeferredIndexManifestPath,
  getRuntimeConfig,
  resolveManifestRelativePath,
  resolveVersionDataList,
  runDeferredSearchIndex,
  serializeVersionDataList,
  toManifestRelativePath,
  validateManifestRelativePath,
  validateDeferredIndexManifest,
};
