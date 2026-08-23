const path = require('node:path');
const upstreamDocs = require('@docusaurus/plugin-content-docs');
const {
  buildVersionParentPages,
  rewriteCapturedRoutes,
} = require('./tagRoutes.cjs');

async function compactDocsPlugin(context, options) {
  const upstreamPlugin = await upstreamDocs.default(context, options);
  const upstreamContentLoaded = upstreamPlugin.contentLoaded;

  return {
    ...upstreamPlugin,
    // Keep the exact upstream name. Docusaurus docs client helpers and themes
    // look up this plugin data by name and id.
    name: 'docusaurus-plugin-content-docs',
    async contentLoaded({content, actions}) {
      const taxonomy = require(path.join(context.siteDir, 'src/data/tagTaxonomy'));
      const {buildApiData} = require(path.join(context.siteDir, 'scripts/api-data'));
      const apiDocuments = buildApiData().documents;
      const pagesByTagsPath = new Map(
        content.loadedVersions.map((version) => [
          version.tagsPath,
          buildVersionParentPages({version, apiDocuments, taxonomy}),
        ]),
      );
      const capturedRoutes = [];

      await upstreamContentLoaded({
        content,
        actions: {
          ...actions,
          addRoute(route) {
            capturedRoutes.push(route);
          },
        },
      });

      const routes = rewriteCapturedRoutes(capturedRoutes, {
        pagesByTagsPath,
        docTagDocListComponent: options.docTagDocListComponent,
      });
      routes.forEach(actions.addRoute);
    },
  };
}

module.exports = compactDocsPlugin;
module.exports.validateOptions = upstreamDocs.validateOptions;
