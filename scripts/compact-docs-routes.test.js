const assert = require('node:assert/strict');
const test = require('node:test');
const taxonomy = require('../src/data/tagTaxonomy');
const {buildApiData} = require('./api-data');
const {
  buildVersionParentPages,
  rewriteCapturedRoutes,
} = require('../plugins/compact-docs/tagRoutes.cjs');

function doc(id, tags, {unlisted = false} = {}) {
  return {
    id,
    title: id,
    description: `${id} description`,
    permalink: `/docs/${id}`,
    unlisted,
    tags,
  };
}

function apiDoc(id, {subsubjects, topics = [], learningTags = []}) {
  return {
    doc_id: id,
    sidebar_label: `${id} short`,
    permalink: `/docs/${id}`,
    university_id: 'waseda-university',
    university_name: '早稲田大学',
    department_id: 'CSE',
    department_name: '創造理工学研究科',
    program_id: 'keieisystem',
    program_name: '経営システム工学専攻',
    year: 2025,
    subsubject_ids: subsubjects,
    topic_ids: topics,
    learning_tags: learningTags,
  };
}

test('parent page unions topic and direct-parent documents without duplicates', () => {
  const parent = 'Mathematics.Calculus';
  const integration = 'Mathematics.Calculus.Integration';
  const limit = 'Mathematics.Calculus.Limit';
  const version = {
    tagsPath: '/docs/tags',
    docs: [doc('a', []), doc('b', []), doc('guide', [])],
  };
  const pages = buildVersionParentPages({
    version,
    taxonomy,
    apiDocuments: [
      apiDoc('a', {
        subsubjects: [parent],
        topics: [integration, limit],
        learningTags: [
          {kind: 'topic', id: integration},
          {kind: 'topic', id: limit},
        ],
      }),
      apiDoc('b', {
        subsubjects: [parent],
        learningTags: [{kind: 'subsubject', id: parent}],
      }),
    ],
  });

  assert.equal(pages.length, 1);
  assert.deepEqual(pages[0].tag.browse.docIds, ['a', 'b']);
  assert.deepEqual(pages[0].tag.browse.directDocIds, ['b']);
  assert.equal(pages[0].tag.count, 2);
  assert.deepEqual(
    Object.fromEntries(pages[0].tag.browse.topics.map((topic) => [topic.id, topic.docIds])),
    {[integration]: ['a'], [limit]: ['a']},
  );
});

test('source paths retain docs whose Docusaurus IDs lose a numeric prefix', () => {
  const parent = 'Mathematics.Calculus';
  const topic = 'Mathematics.Calculus.Taylor-Series';
  const loadedDocument = {
    ...doc('kyoto-university/management/2023/math_1', []),
    source: '@site/docs/kyoto-university/management/2023/202208_math_1.md',
  };
  const apiDocument = {
    ...apiDoc('kyoto-university/management/2023/202208_math_1', {
      subsubjects: [parent],
      topics: [topic],
      learningTags: [{kind: 'topic', id: topic}],
    }),
    source_path: 'docs/kyoto-university/management/2023/202208_math_1.md',
  };

  const [page] = buildVersionParentPages({
    version: {tagsPath: '/docs/tags', docs: [loadedDocument]},
    taxonomy,
    apiDocuments: [apiDocument],
  });

  assert.deepEqual(page.tag.browse.docIds, [loadedDocument.id]);
  assert.equal(page.tag.browse.documents[loadedDocument.id].permalink, loadedDocument.permalink);
  assert.deepEqual(page.tag.browse.topics[0].docIds, [loadedDocument.id]);
});

test('route rewrite removes topics and replaces all parent routes', () => {
  const parentPage = {
    path: '/docs/tags/subsubject/mathematics/calculus',
    tag: {label: 'Mathematics.Calculus', browse: {docIds: ['a']}},
  };
  const captured = [{
    path: '/docs',
    routes: [{
      path: '/docs',
      routes: [
        {path: '/docs/sidebar'},
        {path: '/docs/tags', props: {tags: []}},
        {path: '/docs/tags/school/waseda-university'},
        {path: '/docs/tags/subsubject/mathematics/calculus'},
        {path: '/docs/tags/topic/mathematics/calculus/integration'},
      ],
    }],
  }];

  const rewritten = rewriteCapturedRoutes(captured, {
    pagesByTagsPath: new Map([['/docs/tags', [parentPage]]]),
    docTagDocListComponent: '@theme/DocTagDocListPage',
  });
  const tagRoutes = rewritten[0].routes[0].routes;

  assert.equal(tagRoutes.some((route) => route.path.includes('/tags/topic/')), false);
  assert.equal(tagRoutes.filter((route) => route.path.includes('/tags/subsubject/')).length, 1);
  const parentRoute = tagRoutes.find((route) => route.path === parentPage.path);
  assert.equal(parentRoute.component, '@theme/DocTagDocListPage');
  assert.deepEqual(parentRoute.props.tag, parentPage.tag);
});

test('real content projects every active subsubject and topic onto parent pages', () => {
  const apiDocuments = buildApiData().documents;
  const version = {
    tagsPath: '/docs/tags',
    docs: apiDocuments.map((document) => ({
      id: document.doc_id,
      title: document.title,
      description: '',
      permalink: `/docs/${document.doc_id}`,
      unlisted: false,
    })),
  };
  const pages = buildVersionParentPages({version, apiDocuments, taxonomy});
  const pagesById = new Map(pages.map((page) => [page.id, page]));
  const expectedParentIds = new Set(
    apiDocuments.flatMap((document) => document.subsubject_ids || []),
  );

  assert.equal(pages.length, expectedParentIds.size);
  assert.deepEqual(new Set(pagesById.keys()), expectedParentIds);

  for (const parentId of expectedParentIds) {
    const page = pagesById.get(parentId);
    const expectedDocIds = apiDocuments
      .filter((document) => (document.subsubject_ids || []).includes(parentId))
      .map((document) => document.doc_id);
    const expectedDirectIds = apiDocuments
      .filter((document) => (
        expectedDocIds.includes(document.doc_id)
        && (document.learning_tags || []).some((tag) => (
          tag.kind === 'subsubject' && tag.id === parentId
        ))
      ))
      .map((document) => document.doc_id);

    assert.equal(page.tag.browse.docIds.length, new Set(page.tag.browse.docIds).size);
    assert.deepEqual(new Set(page.tag.browse.docIds), new Set(expectedDocIds));
    assert.deepEqual(new Set(page.tag.browse.directDocIds), new Set(expectedDirectIds));

    for (const topic of page.tag.browse.topics) {
      const expectedTopicDocIds = apiDocuments
        .filter((document) => (document.topic_ids || []).includes(topic.id))
        .map((document) => document.doc_id);
      assert.deepEqual(new Set(topic.docIds), new Set(expectedTopicDocIds));
      assert.equal(topic.count, expectedTopicDocIds.length);
      assert.match(topic.anchor, /^topic-[a-z0-9-]+$/);
    }
  }
});
