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
const {
  createDeferredSearchIndexPostBuild,
} = require('./deferredIndex.cjs');

function validateDeferSearchIndex(value = false) {
  if (typeof value !== 'boolean') {
    throw new TypeError(
      `deferSearchIndex must be a boolean; received ${String(value)}.`,
    );
  }
  return value;
}

async function memorySafeSearchLocalPlugin(context, options = {}) {
  const {
    boundedScanConcurrency = DEFAULT_SCAN_CONCURRENCY,
    deferSearchIndex = false,
    ...upstreamOptions
  } = options;
  const concurrency = validateScanConcurrency(boundedScanConcurrency);
  const deferIndex = validateDeferSearchIndex(deferSearchIndex);
  const upstreamPlugin = await upstreamPluginFactory(context, upstreamOptions);
  const config = processPluginOptions(upstreamOptions, context);
  const searchIndexFilename = getSearchIndexFilename(config);

  return {
    ...upstreamPlugin,
    // The client imports generated data through the upstream plugin name, so
    // retain every upstream hook and replace only its memory-heavy postBuild.
    postBuild: (deferIndex
      ? createDeferredSearchIndexPostBuild
      : createMemorySafePostBuild)({
      config,
      searchIndexFilename,
      concurrency,
    }),
  };
}

function validateOptions({options = {}, validate}) {
  const {
    boundedScanConcurrency = DEFAULT_SCAN_CONCURRENCY,
    deferSearchIndex = false,
    ...upstreamOptions
  } = options;
  const validatedUpstreamOptions = upstreamValidateOptions({
    options: upstreamOptions,
    validate,
  });
  return {
    ...validatedUpstreamOptions,
    boundedScanConcurrency: validateScanConcurrency(boundedScanConcurrency),
    deferSearchIndex: validateDeferSearchIndex(deferSearchIndex),
  };
}

module.exports = memorySafeSearchLocalPlugin;
module.exports.validateOptions = validateOptions;
module.exports.validateDeferSearchIndex = validateDeferSearchIndex;
