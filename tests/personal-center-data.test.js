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
    path.dirname(resolvedFilename)
  );
  return loaded.exports;
}

const repoRoot = path.resolve(__dirname, '..');
const documentTitles = require('../src/data/documentTitles.json');
const tagTaxonomy = require('../src/data/tagTaxonomy');
const {buildPermalink} = require('../scripts/generate-docusaurus-tags');
const {
  getDocumentTitle,
  resolveDocumentMetadata,
} = loadSourceModule(
  path.join(repoRoot, 'src/services/documentMetadata.js')
);
const {buildPersonalCenterData, getLearningTagPermalink} = loadSourceModule(
  path.join(repoRoot, 'src/services/personalCenterData.js')
);
const {serializeNoteDocument, stripAnnotationMetadata} = loadSourceModule(
  path.join(repoRoot, 'src/services/noteAnnotations.js')
);

test('canonical metadata replaces a stored file-path title', () => {
  const [docId, title] = Object.entries(documentTitles)
    .find(([id]) => id.split('/')[0].endsWith('-university'));
  const metadata = resolveDocumentMetadata(docId, {
    title: docId,
    permalink: `/legacy/${docId}`,
  });

  assert.equal(getDocumentTitle(docId), title);
  assert.equal(metadata.title, title);
  assert.equal(metadata.permalink, `/docs/${docId}`);
  assert.notEqual(metadata.university, docId.split('/')[0]);
  assert.equal(getDocumentTitle('unknown/doc', 'Imported title'), 'Imported title');
});

test('notes and progress share one document identity and both count as activity', () => {
  const [docId, title] = Object.entries(documentTitles)[0];
  const result = buildPersonalCenterData({
    progressEntries: [{
      id: docId,
      status: 'completed',
      title: docId,
      tags: ['Mathematics.Calculus'],
      updatedAt: 1000,
    }],
    noteEntries: [{id: docId, content: '关键思路', updatedAt: 2000}],
  });

  assert.equal(result.documents.length, 1);
  assert.equal(result.progressItems[0].title, title);
  assert.equal(result.noteItems[0].title, title);
  assert.equal(result.noteItems[0].excerpt, '关键思路');
  assert.equal(result.stats.notes, 1);
  assert.equal(result.activityItems.length, 2);
});

test('note-only documents remain visible and malformed progress is ignored', () => {
  const [docId] = Object.entries(documentTitles)[0];
  const result = buildPersonalCenterData({
    progressEntries: [{id: 'bad/doc', status: 'not_started', updatedAt: 3000}],
    noteEntries: [{id: docId, content: '只写笔记也应出现', updatedAt: 4000}],
  });

  assert.equal(result.progressItems.length, 0);
  assert.equal(result.noteItems.length, 1);
  assert.equal(result.hasAnyData, true);
});

test('note cards summarize Markdown as readable text without changing stored content or counts', () => {
  const content = '# 关键思路\n\n> **分部积分**，参考[原题](https://example.com/paper)。\n\n- 第一步\n- 第二步\n\n![积分区域](https://example.com/figure.png)';
  const {noteItems} = buildPersonalCenterData({noteEntries: [{id: 'test/note', content}]});

  assert.equal(noteItems[0].excerpt, '关键思路 分部积分，参考原题。 第一步 第二步 积分区域');
  assert.equal(noteItems[0].content, content);
  assert.equal(noteItems[0].charCount, content.length);
});

test('annotation-only notes retain annotation titles, quotations and explanations without metadata', () => {
  const content = serializeNoteDocument({annotations: [{
    id: 'ann-1', title: '注释 1', exact: '型構造を安定に保つ',
    bodyMarkdown: '**重要**：先考虑边界条件。', createdAt: 1000, updatedAt: 2000,
  }]});
  const {noteItems} = buildPersonalCenterData({noteEntries: [{id: 'test/note', content}]});

  assert.equal(noteItems[0].excerpt, '文中注释 注释 1 型構造を安定に保つ 重要：先考虑边界条件。');
  assert.equal(noteItems[0].annotationCount, 1);
  assert.equal(noteItems[0].charCount, stripAnnotationMetadata(content).length);
});

test('plain-text summaries preserve TeX, literal code, escaped punctuation and comparison signs', () => {
  const content = String.raw`公式 $a_b+c_d$，\(\{x_i\}_{i=1}^n\)，以及

$$
\sum_{i=1}^n a_i
$$

\[x_i + y_j\]

文字 \*不是强调\*，5 < 7。

\`\`\`text
const a_b = "$not_math$";
\`\`\`
`.replaceAll('\\`', '`');
  const {noteItems} = buildPersonalCenterData({noteEntries: [{id: 'test/note', content}]});

  assert.equal(noteItems[0].excerpt, String.raw`公式 $a_b+c_d$，\(\{x_i\}_{i=1}^n\)，以及 $$ \sum_{i=1}^n a_i $$ \[x_i + y_j\] 文字 *不是强调*，5 < 7。 const a_b = "$not_math$";`);
});

test('note excerpt truncation applies to visible text after removing Markdown decoration', () => {
  const content = `# ${'**内容** '.repeat(100)}`;
  const {noteItems} = buildPersonalCenterData({noteEntries: [{id: 'test/note', content}]});

  assert.equal(noteItems[0].excerpt, '内容 '.repeat(100).trim().slice(0, 180));
  assert.equal(noteItems[0].excerpt.length, 180);
});

test('namespaced learning tags use the canonical in-site browse targets', () => {
  assert.equal(
    getLearningTagPermalink('Mathematics.Calculus'),
    '/docs/tags/subsubject/mathematics/calculus'
  );
  assert.equal(
    getLearningTagPermalink('Bioinformatics.Bioinformatics.Sequence-Alignment'),
    '/docs/tags/subsubject/bioinformatics/bioinformatics#topic-sequence-alignment'
  );

  for (const tag of Object.keys(tagTaxonomy.subsubjects)) {
    assert.equal(
      getLearningTagPermalink(tag),
      `/docs/tags${buildPermalink('subsubject', tag, tagTaxonomy)}`
    );
  }
  for (const tag of Object.keys(tagTaxonomy.topics)) {
    const topic = tagTaxonomy.topics[tag];
    const parentPath = `/docs/tags${buildPermalink('subsubject', topic.subsubject, tagTaxonomy)}`;
    const target = getLearningTagPermalink(tag);
    assert.ok(target.startsWith(`${parentPath}#topic-`), `${tag} -> ${target}`);
    assert.equal(target.includes('/docs/tags/topic/'), false);
  }
});
