const {
  pluginFactory: upstreamPluginFactory,
  processPluginOptions,
  validateOptions: upstreamValidateOptions,
} = require('./upstream.cjs');
const {
  DEFAULT_SCAN_CONCURRENCY,
  validateScanConcurrency,
} = require('./boundedScanDocuments.cjs');
const {
  createMemorySafePostBuild,
  getSearchIndexFilename,
} = require('./postBuild.cjs');

async function memorySafeSearchLocalPlugin(context, options = {}) {
  const {
    boundedScanConcurrency = DEFAULT_SCAN_CONCURRENCY,
    ...upstreamOptions
  } = options;
  const concurrency = validateScanConcurrency(boundedScanConcurrency);
  const upstreamPlugin = await upstreamPluginFactory(context, upstreamOptions);
  const config = processPluginOptions(upstreamOptions, context);

  return {
    ...upstreamPlugin,
    // The client imports generated data through the upstream plugin name, so
    // retain every upstream hook and replace only its memory-heavy postBuild.
    postBuild: createMemorySafePostBuild({
      config,
      searchIndexFilename: getSearchIndexFilename(config),
      concurrency,
    }),
  };
}

function validateOptions({options = {}, validate}) {
  const {
    boundedScanConcurrency = DEFAULT_SCAN_CONCURRENCY,
    ...upstreamOptions
  } = options;
  const validatedUpstreamOptions = upstreamValidateOptions({
    options: upstreamOptions,
    validate,
  });
  return {
    ...validatedUpstreamOptions,
    boundedScanConcurrency: validateScanConcurrency(boundedScanConcurrency),
  };
}

module.exports = memorySafeSearchLocalPlugin;
module.exports.validateOptions = validateOptions;
