const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

function recoveryAsset(siteDir = path.resolve(__dirname, '..')) {
  const source = fs.readFileSync(path.join(siteDir, 'src/clientModules/chunkRecoveryBootstrap.js'), 'utf8');
  const hash = crypto.createHash('sha256').update(source).digest('hex').slice(0, 16);
  // A cached page must still find the recovery script after its next update.
  // Keep the file path stable and put the cache version in the query string.
  const assetPath = '/assets/js/kai-chunk-recovery.js';
  return {source, path: assetPath, url: `${assetPath}?v=${hash}`};
}

function mathStyleAsset(siteDir = path.resolve(__dirname, '..')) {
  const source = fs.readFileSync(path.join(siteDir, 'src/css/katex-shared.generated.css'), 'utf8');
  const hash = crypto.createHash('sha256').update(source).digest('hex').slice(0, 16);
  return {source, path: `/assets/css/kai-math-layout.${hash}.css`};
}

// Emit through Docusaurus so both the local and school-sharded builds retain
// the shared assets without copying stale versions.
function sharedBrowserAssetsPlugin(context) {
  const assets = [recoveryAsset(context.siteDir), mathStyleAsset(context.siteDir)];
  return {
    name: 'kai-shared-browser-assets',
    configureWebpack(_config, isServer) {
      if (isServer) return {};
      return {plugins: [{
        apply(compiler) {
          compiler.hooks.thisCompilation.tap('KaiSharedBrowserAssets', (compilation) => {
            compilation.hooks.processAssets.tap({
              name: 'KaiSharedBrowserAssets',
              stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
            }, () => {
              for (const asset of assets) compilation.emitAsset(
                asset.path.slice(1), new compiler.webpack.sources.RawSource(asset.source),
              );
            });
          });
        },
      }]};
    },
  };
}

module.exports = {recoveryAsset, mathStyleAsset, sharedBrowserAssetsPlugin};
