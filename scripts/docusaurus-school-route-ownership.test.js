const assert = require('node:assert/strict');
const test = require('node:test');

const {
  buildRouteOwnership,
  inspectDocsSourcePath,
} = require('./docusaurus-school-route-ownership');

const schools = new Set([
  'kanazawa-university',
  'TITech',
  'TUAT',
  'UEC',
]);

function createDoc(id, school, permalink, tagPermalink) {
  return {
    id,
    source: `@site/docs/${school}/source.md`,
    permalink,
    tags: [{permalink: tagPermalink}],
  };
}

function createSyntheticSiteProps() {
  const docs = [
    createDoc(
      'kanazawa/doc',
      'kanazawa-university',
      '/docs/a-custom-kanazawa-slug',
      '/docs/tags/school/kanazawa-university',
    ),
    createDoc(
      'titech/doc',
      'TITech',
      '/docs/titech-custom',
      '/docs/tags/school/ti-tech',
    ),
    createDoc(
      'tuat/doc',
      'TUAT',
      '/docs/tuat-custom',
      '/docs/tags/school/tokyo-university-of-agriculture-and-technology',
    ),
    createDoc(
      'uec/doc',
      'UEC',
      '/docs/uec-custom',
      '/docs/tags/school/university-of-electro-communications',
    ),
  ];
  const categoryPath = '/docs/category/keio-university-nst-historical-name';
  const schoolTagPaths = docs.map((doc) => doc.tags[0].permalink);
  const routes = [{
    path: '/docs',
    routes: [
      ...docs.map((doc) => ({
        path: doc.permalink,
        component: '@theme/DocItem',
        modules: {content: doc.source},
      })),
      {
        path: categoryPath,
        component: '@theme/DocCategoryGeneratedIndexPage',
        props: {categoryGeneratedIndex: {}},
      },
      ...schoolTagPaths.map((routePath) => ({
        path: routePath,
        component: '@theme/DocTagDocListPage',
      })),
      {path: '/docs/tags/subsubject/shared-topic', component: 'SharedTag'},
    ],
  }];
  const routesPaths = [
    ...docs.map((doc) => doc.permalink),
    categoryPath,
    ...schoolTagPaths,
    '/docs/tags/subsubject/shared-topic',
    '/404.html',
  ];
  return {
    routes,
    routesPaths,
    plugins: [{
      name: 'docusaurus-plugin-content-docs',
      content: {
        loadedVersions: [{
          versionName: 'current',
          tagsPath: '/docs/tags',
          docs,
          sidebars: {
            tutorialSidebar: [
              {
                type: 'category',
                label: '金泽大学',
                items: [{type: 'doc', id: 'kanazawa/doc'}],
                link: {type: 'generated-index', permalink: categoryPath},
              },
              ...docs.slice(1).map((doc) => ({type: 'doc', id: doc.id})),
            ],
          },
        }],
      },
    }],
  };
}

test('route ownership follows sources, sidebar descendants, and school tag metadata', () => {
  const ownership = buildRouteOwnership(createSyntheticSiteProps(), schools);
  assert.equal(ownership.get('/docs/a-custom-kanazawa-slug'), 'kanazawa-university');
  assert.equal(
    ownership.get('/docs/category/keio-university-nst-historical-name'),
    'kanazawa-university',
  );
  assert.equal(ownership.get('/docs/tags/school/ti-tech'), 'TITech');
  assert.equal(
    ownership.get('/docs/tags/school/tokyo-university-of-agriculture-and-technology'),
    'TUAT',
  );
  assert.equal(
    ownership.get('/docs/tags/school/university-of-electro-communications'),
    'UEC',
  );
  assert.equal(ownership.get('/docs/tags/subsubject/shared-topic'), null);
  assert.equal(ownership.get('/404.html'), null);
});

test('unknown docs directories fail instead of silently entering shared output', () => {
  assert.throws(
    () => inspectDocsSourcePath('@site/docs/unknown-school/doc.md', schools),
    /unknown school/,
  );
});

