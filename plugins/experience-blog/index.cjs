const fs = require('node:fs');
const path = require('node:path');
const upstreamBlog = require('@docusaurus/plugin-content-blog');
const {normalizeUrl} = require('@docusaurus/utils');
const {buildCatalog} = require('./catalog.cjs');
const {generateUniversities} = require('../../scripts/generate-universities');

async function experienceBlogPlugin(context, options) {
  const upstream = await upstreamBlog.default(context, options);
  const dataDirectory = path.join(context.siteDir, 'src/data/experiences');
  return {
    ...upstream,
    // Preserve the upstream identity used by the MDX loader and blog theme.
    name: 'docusaurus-plugin-content-blog',
    getPathsToWatch() {
      return [...upstream.getPathsToWatch(), path.join(dataDirectory, '*.json'), path.join(context.siteDir, 'docs/**/_category_.json'), path.join(context.siteDir, 'src/data/universityMetadata.json')];
    },
    async contentLoaded({content, actions}) {
      const read = (name) => JSON.parse(fs.readFileSync(path.join(dataDirectory, `${name}.json`), 'utf8'));
      const catalog = buildCatalog({
        universities: generateUniversities(),
        external: read('external'),
        blogPosts: content.blogPosts,
        siteUrl: context.siteConfig.url,
      });
      await upstream.contentLoaded({
        content,
        actions: {
          ...actions,
          addRoute(route) {
            // The directory replaces the chronological feed. Do not import
            // truncated article bodies into the directory's browser bundle.
            if (route.component !== options.blogListComponent) actions.addRoute(route);
          },
        },
      });
      const catalogPath = await actions.createData('experience-catalog.json', catalog);
      actions.addRoute({
        path: normalizeUrl([context.siteConfig.baseUrl, options.routeBasePath]),
        component: '@site/src/components/ExperienceCatalog/index.jsx',
        exact: true,
        modules: {catalog: catalogPath},
      });
    },
  };
}

module.exports = experienceBlogPlugin;
module.exports.validateOptions = upstreamBlog.validateOptions;
