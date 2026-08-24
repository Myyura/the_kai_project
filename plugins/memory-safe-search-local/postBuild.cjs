const fs = require('node:fs');
const path = require('node:path');
const {
  buildIndex: upstreamBuildIndex,
  getIndexHash,
  processDocInfos: upstreamProcessDocInfos,
} = require('./upstream.cjs');
const {scanDocumentsBounded} = require('./boundedScanDocuments.cjs');

function getSearchIndexFilename(config) {
  if (config.hashed !== 'filename') return 'search-index{dir}.json';
  const indexHash = getIndexHash(config);
  return indexHash
    ? `search-index{dir}-${indexHash}.json`
    : 'search-index{dir}.json';
}

function partitionDocumentsByContext(allDocuments, buildData, config) {
  const docsByDirMap = new Map();
  const {
    searchContextByPaths,
    hideSearchBarWithNoSearchContext,
    useAllContextsWithNoSearchContext,
  } = config;

  if (!searchContextByPaths) {
    docsByDirMap.set('', allDocuments);
    return docsByDirMap;
  }

  const {baseUrl} = buildData;
  const rootAllDocs = [];
  if (!hideSearchBarWithNoSearchContext) docsByDirMap.set('', rootAllDocs);

  let docIndex = 0;
  for (const documents of allDocuments) {
    rootAllDocs[docIndex] = [];
    for (const doc of documents) {
      if (doc.u.startsWith(baseUrl)) {
        const uri = doc.u.substring(baseUrl.length);
        const matchedPaths = [];
        for (const configuredPath of searchContextByPaths) {
          const contextPath = typeof configuredPath === 'string'
            ? configuredPath
            : configuredPath.path;
          if (uri === contextPath || uri.startsWith(`${contextPath}/`)) {
            matchedPaths.push(contextPath);
          }
        }
        for (const matchedPath of matchedPaths) {
          let contextDocuments = docsByDirMap.get(matchedPath);
          if (!contextDocuments) {
            contextDocuments = new Array(allDocuments.length);
            docsByDirMap.set(matchedPath, contextDocuments);
          }
          let documentsOfType = contextDocuments[docIndex];
          if (!documentsOfType) {
            documentsOfType = [];
            contextDocuments[docIndex] = documentsOfType;
          }
          documentsOfType.push(doc);
        }
        if (matchedPaths.length > 0 && !useAllContextsWithNoSearchContext) {
          continue;
        }
      }
      rootAllDocs[docIndex].push(doc);
    }
    docIndex += 1;
  }
  return docsByDirMap;
}

function memoryLabel() {
  return `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MiB RSS`;
}

function createMemorySafePostBuild({
  config,
  searchIndexFilename = getSearchIndexFilename(config),
  concurrency,
  logger = console.log,
  readFile,
  writeFile = fs.promises.writeFile,
  parse,
  processDocInfos = upstreamProcessDocInfos,
  buildIndex = upstreamBuildIndex,
}) {
  return async function postBuild(buildData) {
    const versionDataList = processDocInfos(buildData, config);
    const idState = {next: 0};

    for (const versionData of versionDataList) {
      const total = versionData.paths.length;
      logger(
        `[search-index] Parsing ${total} HTML files with concurrency ${concurrency} `
          + `(${memoryLabel()})`,
      );
      let lastReported = 0;
      const allDocuments = await scanDocumentsBounded(versionData.paths, config, {
        concurrency,
        idState,
        ...(readFile && {readFile}),
        ...(parse && {parse}),
        onProgress({completed}) {
          if (completed === total || completed - lastReported >= 100) {
            lastReported = completed;
            logger(
              `[search-index] Parsed ${completed}/${total} HTML files `
                + `(${memoryLabel()})`,
            );
          }
        },
      });

      const docsByDirMap = partitionDocumentsByContext(
        allDocuments,
        buildData,
        config,
      );
      for (const [contextPath, contextDocuments] of Array.from(
        docsByDirMap.entries(),
      ).sort(([a], [b]) => a.localeCompare(b))) {
        logger(
          `[search-index] Building index for /${contextPath} (${memoryLabel()})`,
        );
        const searchIndex = buildIndex(contextDocuments, config);
        const suffix = contextPath === ''
          ? ''
          : `-${contextPath.replace(/\//g, '-')}`;
        const outputPath = path.join(
          versionData.outDir,
          searchIndexFilename.replace('{dir}', suffix),
        );
        await writeFile(outputPath, JSON.stringify(searchIndex), {encoding: 'utf8'});
        logger(`[search-index] Wrote ${outputPath} (${memoryLabel()})`);
      }
    }
  };
}

module.exports = {
  createMemorySafePostBuild,
  getSearchIndexFilename,
  partitionDocumentsByContext,
};
