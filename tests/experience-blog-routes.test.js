const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {createRequire} = require('node:module');
const test = require('node:test');

test('experience routes have one catalog and retain articles without parallel listing pages', async () => {
  const filename = path.resolve(__dirname, '../plugins/experience-blog/index.cjs');
  const nativeRequire = createRequire(filename);
  const catalog = {schools: [], programs: [], entries: []};
  const options = {
    routeBasePath: 'blog',
    blogPostComponent: '@theme/BlogPostPage',
    blogListComponent: '@theme/BlogListPage',
  };
  const articleRoute = {path: '/blog/story', component: options.blogPostComponent};
  const upstream = {
    default: async () => ({
      async contentLoaded({actions}) {
        for (const route of [
          articleRoute,
          {path: '/blog', component: options.blogListComponent},
          {path: '/blog/page/2', component: options.blogListComponent},
          {path: '/blog/tags', component: '@theme/BlogTagsListPage'},
          {path: '/blog/tags/example', component: '@theme/BlogTagsPostsPage'},
          {path: '/blog/authors', component: '@theme/BlogAuthorsListPage'},
          {path: '/blog/authors/example', component: '@theme/BlogAuthorsPostsPage'},
          {path: '/blog/archive', component: '@theme/BlogArchivePage'},
        ]) actions.addRoute(route);
      },
    }),
    validateOptions: () => {},
  };
  const mocks = {
    '@docusaurus/plugin-content-blog': upstream,
    './catalog.cjs': {buildCatalog: () => catalog},
    '../../src/data/experiences/external.cjs': {readExternalExperiences: () => []},
    '../../scripts/generate-universities': {generateUniversities: () => []},
  };
  const loaded = {exports: {}};
  Function('module', 'exports', 'require', fs.readFileSync(filename, 'utf8'))(
    loaded, loaded.exports, (name) => mocks[name] || nativeRequire(name),
  );
  const plugin = await loaded.exports({
    siteDir: path.resolve(__dirname, '..'),
    siteConfig: {baseUrl: '/', url: 'https://runjp.com'},
  }, options);
  const routes = [];
  const data = [];
  await plugin.contentLoaded({
    content: {blogPosts: []},
    actions: {
      addRoute: (route) => routes.push(route),
      createData: async (name, value) => {
        data.push({name, value});
        return `/generated/${name}`;
      },
    },
  });

  assert.equal(plugin.name, 'docusaurus-plugin-content-blog');
  assert.deepEqual(routes, [articleRoute, {
    path: '/blog',
    component: '@site/src/components/ExperienceCatalog/index.jsx',
    exact: true,
    modules: {catalog: '/generated/experience-catalog.json'},
  }]);
  assert.deepEqual(data, [{name: 'experience-catalog.json', value: catalog}]);
});
