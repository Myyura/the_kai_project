const assert = require('node:assert/strict');
const test = require('node:test');

const {
  buildRouteOwnership,
  inspectDocsSourcePath,
} = require('../scripts/docusaurus-school-route-ownership');

const schools = new Set([
  'kanazawa-university',
  'institute-of-science-tokyo',
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
      'institute-of-science-tokyo/doc',
      'institute-of-science-tokyo',
      '/docs/institute-of-science-tokyo-custom',
      '/docs/tags/school/institute-of-science-tokyo',
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
      {path: '/docs/tags/subsubject/shared-topic', component: 'SharedTag'},
    ],
  }];
  const routesPaths = [
    ...docs.map((doc) => doc.permalink),
    categoryPath,
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

test('route ownership follows sources and sidebar descendants without generating school tag pages', () => {
  const ownership = buildRouteOwnership(createSyntheticSiteProps(), schools);
  assert.equal(ownership.get('/docs/a-custom-kanazawa-slug'), 'kanazawa-university');
  assert.equal(
    ownership.get('/docs/category/keio-university-nst-historical-name'),
    'kanazawa-university',
  );
  assert.equal(ownership.get('/docs/institute-of-science-tokyo-custom'), 'institute-of-science-tokyo');
  assert.equal(ownership.get('/docs/tuat-custom'), 'TUAT');
  assert.equal(ownership.get('/docs/uec-custom'), 'UEC');
  assert.equal([...ownership.keys()].some((pathname) => pathname.includes('/tags/school/')), false);
  assert.equal(ownership.get('/docs/tags/subsubject/shared-topic'), null);
  assert.equal(ownership.get('/404.html'), null);
});

test('unknown docs directories fail instead of silently entering shared output', () => {
  assert.throws(
    () => inspectDocsSourcePath('@site/docs/unknown-school/doc.md', schools),
    /unknown school/,
  );
});
