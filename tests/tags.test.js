const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {createRequire} = require('node:module');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

const moduleCache = new Map();

function loadSourceModule(filename) {
  const resolvedFilename = path.resolve(filename);
  if (moduleCache.has(resolvedFilename)) return moduleCache.get(resolvedFilename).exports;

  const loaded = {exports: {}};
  moduleCache.set(resolvedFilename, loaded);
  const nativeRequire = createRequire(resolvedFilename);
  const localRequire = (request) => {
    const resolved = nativeRequire.resolve(request);
    if (resolved.includes(`${path.sep}src${path.sep}`) && resolved.endsWith('.js')) {
      return loadSourceModule(resolved);
    }
    return nativeRequire(request);
  };
  const source = fs.readFileSync(resolvedFilename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename: resolvedFilename,
    plugins: [transformModules],
  }).code;
  Function('module', 'exports', 'require', '__filename', '__dirname', transformed)(
    loaded,
    loaded.exports,
    localRequire,
    resolvedFilename,
    path.dirname(resolvedFilename),
  );
  return loaded.exports;
}

const repoRoot = path.resolve(__dirname, '..');
const tagTaxonomy = require('../src/data/tagTaxonomy');
const {
  getTopicAnchorId,
  getTagLabel,
  getTagDescription,
  compareTagLabels,
  matchesTagSearch,
  resolveTagBrowseTarget,
} = loadSourceModule(path.join(repoRoot, 'src/utils/tags.js'));

test('topic browse targets use stable IDs and the parent subsubject anchor', () => {
  const target = resolveTagBrowseTarget('Mathematics.Calculus.Integration');

  assert.deepEqual(target, {
    kind: 'topic',
    id: 'Mathematics.Calculus.Integration',
    subjectId: 'Mathematics',
    subsubjectId: 'Mathematics.Calculus',
    pathname: '/docs/tags/subsubject/mathematics/calculus',
    anchorId: 'topic-integration',
    href: '/docs/tags/subsubject/mathematics/calculus#topic-integration',
  });
});

test('subsubject and school targets keep their canonical routes', () => {
  assert.equal(
    resolveTagBrowseTarget('Mathematics.Linear-Algebra').href,
    '/docs/tags/subsubject/mathematics/linear-algebra',
  );
  assert.equal(
    resolveTagBrowseTarget('institute-of-science-tokyo').href,
    '/docs/tags/school/institute-of-science-tokyo',
  );
  assert.equal(
    resolveTagBrowseTarget('Institute of Science Tokyo').href,
    '/docs/tags/school/institute-of-science-tokyo',
  );
});

test('canonical topics and deprecated aliases resolve to the same target', () => {
  const canonical = 'Computer-Science.Computer-Architecture.IEEE-Standard-754-Floating-Point-Arithmetic';
  const alias = 'Computer-Science.Computer-Architecture.IEEE-754';

  assert.deepEqual(
    resolveTagBrowseTarget(alias),
    resolveTagBrowseTarget(canonical),
  );
  assert.equal(getTopicAnchorId(alias), getTopicAnchorId(canonical));
});

test('every taxonomy topic has one unique parent anchor and no legacy topic link', () => {
  const targets = Object.keys(tagTaxonomy.topics).map(resolveTagBrowseTarget);

  assert.equal(new Set(targets.map(({href}) => href)).size, targets.length);
  for (const target of targets) {
    assert.equal(target.kind, 'topic');
    assert.match(target.href, /^\/docs\/tags\/subsubject\/.+#topic-[a-z0-9-]+$/);
    assert.equal(target.href.includes('/docs/tags/topic/'), false);
    assert.equal(target.anchorId, getTopicAnchorId(target.id));
  }
});

test('unknown framework tags retain their supplied permalink', () => {
  assert.equal(
    resolveTagBrowseTarget('Tokyo-University-Blog', '/blog/tags/tokyo-university-blog').href,
    '/blog/tags/tokyo-university-blog',
  );
});

test('blog permalinks win even when a tag name matches the docs taxonomy', () => {
  const target = resolveTagBrowseTarget(
    'Mathematics.Calculus.Integration',
    '/blog/tags/mathematics-calculus-integration',
  );
  assert.equal(target.kind, 'unknown');
  assert.equal(target.href, '/blog/tags/mathematics-calculus-integration');
});

const localizedEntries = Object.entries({
  ...tagTaxonomy.subjects,
  ...tagTaxonomy.subsubjects,
  ...tagTaxonomy.topics,
  ...tagTaxonomy.schoolTags,
});

test('every taxonomy entry has three labels and each label is searchable in every UI language', () => {
  for (const [id, meta] of localizedEntries) {
    for (const [language, suffix] of [['zh', 'Zh'], ['ja', 'Ja'], ['en', 'En']]) {
      const label = meta[`label${suffix}`];
      assert.equal(typeof label, 'string', `${id}: missing ${language}`);
      assert.ok(label.trim(), `${id}: empty ${language}`);
      assert.equal(getTagLabel(id, language), label);
      assert.ok(matchesTagSearch(id, label), `${id}: cannot search ${label}`);
      const description = meta[`description${suffix}`];
      assert.equal(getTagDescription(id, language), description);
    }
    assert.ok(matchesTagSearch(id, id));
    for (const aliases of Object.values(meta.searchAliases || {})) {
      for (const alias of aliases) assert.ok(matchesTagSearch(id, alias), `${id}: ${alias}`);
    }
  }
});

test('multilingual search normalizes width, separators and case, and supports mixed-language terms', () => {
  const id = 'Tokyo-University';
  for (const query of ['东京大学', '東京大学', 'the university of tokyo', 'ＵＴｏｋｙｏ', 'Tokyo-University', '東京大学 tokyo', '东大', '  ']) {
    assert.ok(matchesTagSearch(id, query), query);
  }
  assert.equal(matchesTagSearch(id, '京都大学'), false);
  assert.equal(matchesTagSearch(id, '東京大学 nonexistent'), false);
  assert.equal(getTagLabel(id, 'zh'), '东京大学');
  assert.equal(getTagLabel(id, 'ja'), '東京大学');
  assert.equal(getTagLabel(id, 'en'), 'The University of Tokyo');
  assert.equal(getTagLabel('Untaxonomized-Tag', 'ja'), 'Untaxonomized-Tag');
  assert.equal(getTagDescription('Untaxonomized-Tag', 'ja'), undefined);
});

test('localized ordering uses the selected locale with deterministic ties', () => {
  const ids = Object.keys(tagTaxonomy.schoolTags);
  for (const [language, locale] of [['zh', 'zh-CN'], ['ja', 'ja-JP'], ['en', 'en-US']]) {
    const collator = new Intl.Collator(locale, {numeric: true});
    const sorted = [...ids].sort((a, b) => compareTagLabels(a, b, language));
    for (let i = 1; i < sorted.length; i += 1) {
      assert.ok(collator.compare(getTagLabel(sorted[i - 1], language), getTagLabel(sorted[i], language)) <= 0);
    }
    assert.equal(compareTagLabels(ids[0], ids[0], language), 0);
  }
});


test('parent descriptions do not turn a specific-topic query into an entire subject match', () => {
  assert.equal(matchesTagSearch('Mathematics.Linear-Algebra', '固有値'), false);
  assert.equal(matchesTagSearch('Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors', '固有値'), true);
});
