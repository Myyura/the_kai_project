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
const {buildPermalink} = require('./generate-docusaurus-tags');
const {getDocumentTitle, resolveDocumentMetadata} = loadSourceModule(
  path.join(repoRoot, 'src/services/documentMetadata.js')
);
const {buildPersonalCenterData, getLearningTagPermalink} = loadSourceModule(
  path.join(repoRoot, 'src/services/personalCenterData.js')
);

test('canonical metadata replaces a stored file-path title', () => {
  const [docId, title] = Object.entries(documentTitles)[0];
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

test('namespaced learning tags link to the generated Docusaurus routes', () => {
  assert.equal(
    getLearningTagPermalink('Mathematics.Calculus'),
    '/docs/tags/subsubject/mathematics/calculus'
  );
  assert.equal(
    getLearningTagPermalink('Bioinformatics.Bioinformatics.Sequence-Alignment'),
    '/docs/tags/topic/bioinformatics/bioinformatics/sequence-alignment'
  );

  for (const tag of Object.keys(tagTaxonomy.subsubjects)) {
    assert.equal(
      getLearningTagPermalink(tag),
      `/docs/tags${buildPermalink('subsubject', tag, tagTaxonomy)}`
    );
  }
  for (const tag of Object.keys(tagTaxonomy.topics)) {
    assert.equal(
      getLearningTagPermalink(tag),
      `/docs/tags${buildPermalink('topic', tag, tagTaxonomy)}`
    );
  }
});
