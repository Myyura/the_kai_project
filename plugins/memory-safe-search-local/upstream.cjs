const searchLocalPackage = require('@easyops-cn/docusaurus-search-local/package.json');
const searchLocalModule = require('@easyops-cn/docusaurus-search-local');

const SUPPORTED_SEARCH_LOCAL_VERSION = '0.55.1';

if (searchLocalPackage.version !== SUPPORTED_SEARCH_LOCAL_VERSION) {
  throw new Error(
    'The memory-safe search adapter supports '
      + `@easyops-cn/docusaurus-search-local@${SUPPORTED_SEARCH_LOCAL_VERSION}, `
      + `but ${searchLocalPackage.version} is installed. Review the upstream private `
      + 'APIs before updating SUPPORTED_SEARCH_LOCAL_VERSION.',
  );
}

function requireNamedExport(modulePath, exportName) {
  const loaded = require(modulePath);
  const value = loaded[exportName];
  if (typeof value !== 'function') {
    throw new Error(
      `Expected ${modulePath} to export a ${exportName} function. `
        + 'The search plugin private API may have changed.',
    );
  }
  return value;
}

const pluginFactory = searchLocalModule.default;
if (typeof pluginFactory !== 'function') {
  throw new Error(
    'Expected @easyops-cn/docusaurus-search-local to have a default plugin factory.',
  );
}

module.exports = {
  SUPPORTED_SEARCH_LOCAL_VERSION,
  buildIndex: requireNamedExport(
    '@easyops-cn/docusaurus-search-local/dist/server/server/utils/buildIndex',
    'buildIndex',
  ),
  debugVerbose: requireNamedExport(
    '@easyops-cn/docusaurus-search-local/dist/server/server/utils/debug',
    'debugVerbose',
  ),
  getIndexHash: requireNamedExport(
    '@easyops-cn/docusaurus-search-local/dist/server/server/utils/getIndexHash',
    'getIndexHash',
  ),
  parse: requireNamedExport(
    '@easyops-cn/docusaurus-search-local/dist/server/server/utils/parse',
    'parse',
  ),
  pluginFactory,
  processDocInfos: requireNamedExport(
    '@easyops-cn/docusaurus-search-local/dist/server/server/utils/processDocInfos',
    'processDocInfos',
  ),
  processPluginOptions: requireNamedExport(
    '@easyops-cn/docusaurus-search-local/dist/server/server/utils/processPluginOptions',
    'processPluginOptions',
  ),
  validateOptions: searchLocalModule.validateOptions,
};
