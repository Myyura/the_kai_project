const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {createRequire} = require('node:module');
const test = require('node:test');
const babel = require('@babel/core');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const {parseFragment} = require('parse5');

let language = 'zh';
const cache = new Map();
const repoRoot = path.resolve(__dirname, '..');
const empty = () => null;
const mocks = {
  '@docusaurus/Link': ({to, href, children, ...props}) => React.createElement('a', {...props, href: to || href}, children),
  '@docusaurus/theme-common': {
    PageMetadata: empty,
    HtmlClassNameProvider: ({children}) => children,
    ThemeClassNames: {page: {docsTagDocListPage: 'docs-tag-list'}},
  },
  '@theme/SearchMetadata': empty,
  '@theme/ContentVisibility/Unlisted': empty,
  '@theme/Heading': ({as, children, ...props}) => React.createElement(as, props, children),
  '@site/src/context/LanguageContext': {useCurrentLanguage: () => language},
  '@site/src/components/ContentBrowseModes': empty,
  '@site/src/components/BrowseEmptyState': empty,
  '@site/src/components/BrowseSearchField': ({id, value, label}) => React.createElement('input', {id, value, 'aria-label': label, readOnly: true}),
};

function loadModule(filename) {
  const resolved = require.resolve(filename);
  if (cache.has(resolved)) return cache.get(resolved).exports;
  const loaded = {exports: {}};
  cache.set(resolved, loaded);
  const nativeRequire = createRequire(resolved);
  const localRequire = (request) => {
    if (Object.hasOwn(mocks, request)) return mocks[request];
    if (request.endsWith('.css')) return {__esModule: true, default: new Proxy({}, {get: (_, key) => key})};
    const target = request.startsWith('@site/')
      ? path.join(repoRoot, request.slice('@site/'.length))
      : nativeRequire.resolve(request);
    const resolvedTarget = require.resolve(target);
    if (resolvedTarget.startsWith(path.join(repoRoot, 'src')) && /\.[jt]sx?$/.test(resolvedTarget)) return loadModule(resolvedTarget);
    return nativeRequire(target);
  };
  const {code} = babel.transformSync(fs.readFileSync(resolved, 'utf8'), {
    filename: resolved,
    presets: ['@babel/preset-typescript', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  });
  Function('module', 'exports', 'require', '__filename', '__dirname', code)(loaded, loaded.exports, localRequire, resolved, path.dirname(resolved));
  return loaded.exports;
}

const Tag = loadModule(path.join(repoRoot, 'src/theme/Tag/index.tsx')).default;
const TagDirectory = loadModule(path.join(repoRoot, 'src/theme/TagsListByLetter/index.tsx')).default;
const DocTagPage = loadModule(path.join(repoRoot, 'src/theme/DocTagDocListPage/index.tsx')).default;
const {getTagLabel, resolveTagBrowseTarget, getTopicAnchorId} = loadModule(path.join(repoRoot, 'src/utils/tags.js'));
const textContent = (node) => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(textContent).join('');
function links(html) {
  const result = [];
  const visit = (node) => {
    if (node.tagName === 'a') result.push({href: node.attrs.find((attr) => attr.name === 'href')?.value, text: textContent(node)});
    (node.childNodes || []).forEach(visit);
  };
  visit(parseFragment(html));
  return result;
}

test('inline school, subsubject, and topic tags translate while keeping one destination', () => {
  for (const id of ['Tokyo-University', 'Mathematics.Linear-Algebra', 'Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors']) {
    const href = resolveTagBrowseTarget(id).href;
    for (language of ['zh', 'ja', 'en']) {
      const html = renderToStaticMarkup(React.createElement(Tag, {label: id, permalink: href}));
      assert.deepEqual(links(html), [{href, text: getTagLabel(id, language)}]);
    }
  }
  const html = renderToStaticMarkup(React.createElement(Tag, {
    label: 'Tokyo-University', permalink: '/blog/tags/tokyo-university', description: 'Blog category',
  }));
  assert.deepEqual(links(html), [{href: '/blog/tags/tokyo-university', text: 'Tokyo-University'}]);
  assert.ok(html.includes('title="Blog category"'));
});

test('aggregate topic sidebar and exam-row chips use the same localized labels and anchors', () => {
  const subsubjectId = 'Mathematics.Linear-Algebra';
  const topicIds = ['Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors', 'Mathematics.Linear-Algebra.Matrix-Diagonalization'];
  const permalink = resolveTagBrowseTarget(subsubjectId).href;
  const tag = {
    label: subsubjectId, permalink, count: 1, allTagsPath: '/docs/tags',
    browse: {
      directDocIds: [], docIds: ['example'],
      topics: topicIds.map((id) => ({id, shortId: id.split('.').pop(), count: 1, anchor: getTopicAnchorId(id), docIds: ['example']})),
      documents: {example: {id: 'example', title: '2025年 線形代数', permalink: '/docs/example', universityId: 'tokyo-university', topicIds}},
    },
  };
  for (language of ['zh', 'ja', 'en']) {
    const html = renderToStaticMarkup(React.createElement(DocTagPage, {tag}));
    for (const id of topicIds) {
      const topicLinks = links(html).filter(({href}) => href === `${permalink}#${getTopicAnchorId(id)}`);
      assert.ok(topicLinks.length >= 2, 'sidebar and document row must both link to the topic');
      assert.ok(topicLinks.every(({text}) => text.startsWith(getTagLabel(id, language))));
    }
    assert.ok(textContent(parseFragment(html)).includes(getTagLabel('Tokyo-University', language)));
  }
});


test('subject directory translates its hierarchy and excludes the separate school directory', () => {
  const ids = ['Mathematics.Linear-Algebra', 'Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors', 'Tokyo-University'];
  const tags = ids.map((label) => ({label, permalink: resolveTagBrowseTarget(label).href, count: 1}));
  for (language of ['zh', 'ja', 'en']) {
    const html = renderToStaticMarkup(React.createElement(TagDirectory, {tags}));
    const text = textContent(parseFragment(html));
    for (const id of ['Mathematics', ...ids.slice(0, 2)]) assert.ok(text.includes(getTagLabel(id, language)), id);
    assert.equal(text.includes(getTagLabel('Tokyo-University', language)), false);
    assert.equal(html.includes('role="tablist"'), false);
  }
});
