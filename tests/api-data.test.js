const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/core');
const filename = path.resolve(__dirname, '../supabase/functions/_shared/published-content.ts');
const loaded = {exports: {}};
Function('module', 'exports', babel.transformSync(fs.readFileSync(filename, 'utf8'), {
  filename,
  plugins: [require('@babel/plugin-transform-typescript'), require('@babel/plugin-transform-modules-commonjs')],
}).code)(loaded, loaded.exports);
const {validatePublishedDocument, fetchPublishedDocument} = loaded.exports;

const {
  PUBLISHED_CONTENT_SCHEMA_VERSION,
  buildApiData,
  getPublishedContentPath,
  stripMarkdownDecorations,
  toDocumentCatalogRow,
  toPublishedDocument,
} = require('../scripts/api-data');

test('Markdown labels are parsed to plain text without regex HTML sanitization', () => {
  assert.equal(
    stripMarkdownDecorations('<span>Title</span> **bold** [link](https://example.com)'),
    'Title bold link',
  );
  assert.equal(stripMarkdownDecorations('<<script>alert(1)</script>'), 'alert(1)');
});

test('database catalog rows contain metadata but no Markdown body', () => {
  const document = buildApiData().documents[0];
  const row = toDocumentCatalogRow(document);
  assert.equal(row.document_uuid, document.document_uuid);
  assert.equal(row.content_path, getPublishedContentPath(document.document_uuid));
  assert.equal(row.content_hash, document.content_hash);
  for (const field of [
    'author_markdown',
    'description_markdown',
    'kai_markdown',
    'full_markdown',
  ]) {
    assert.equal(Object.hasOwn(row, field), false, `${field} leaked into the database catalog`);
  }
});

test('published document artifacts retain Agent and JSON API content', () => {
  const documents = buildApiData().documents;
  const document = documents.find((item) => item.full_markdown) || documents[0];
  const published = toPublishedDocument(document);
  const decoded = validatePublishedDocument(published, document.document_uuid, document.content_hash);
  assert.equal(published.schemaVersion, PUBLISHED_CONTENT_SCHEMA_VERSION);
  assert.equal(published.documentUuid, document.document_uuid);
  assert.equal(published.contentHash, document.content_hash);
  assert.equal(published.fullMarkdown, document.full_markdown);
  assert.equal(Object.hasOwn(published, 'sections'), false);
  assert.deepEqual(decoded.sections, {
    authorMarkdown: document.author_markdown,
    descriptionMarkdown: document.description_markdown,
    kaiMarkdown: document.kai_markdown,
  });
  for (const field of ['title', 'tags', 'permalink', 'sourcePath', 'university', 'department']) {
    assert.equal(Object.hasOwn(published, field), false, `${field} duplicated catalog metadata in a body artifact`);
  }
});

test('compact sections preserve CRLF, Unicode offsets, repeated headings and unrelated sections', () => {
  const fullMarkdown = '# 題名 😀\r\n\r\n## **Author**\r\n祭音\r\n\r\n## Description\r\n問題 🧮\r\n\r\n## Other\r\n除外\r\n## Description 日本語\r\n二つ目\r\n## Kai\r\n答え\r\n';
  const published = toPublishedDocument({full_markdown: fullMarkdown, document_uuid: 'example', content_hash: 'hash', doc_id: 'id'});
  const decoded = validatePublishedDocument(published, 'example', 'hash');
  assert.equal(decoded.fullMarkdown, fullMarkdown);
  assert.deepEqual(decoded.sections, {
    authorMarkdown: '祭音', descriptionMarkdown: '問題 🧮\n\n二つ目', kaiMarkdown: '答え',
  });
});

test('the reader accepts legacy v1 bodies and rejects malformed v2 ranges', () => {
  const legacy = {schemaVersion: 1, documentUuid: 'example', contentHash: 'hash', docId: 'id',
    fullMarkdown: 'abc', sections: {authorMarkdown: '', descriptionMarkdown: 'abc', kaiMarkdown: ''}};
  assert.deepEqual(validatePublishedDocument(legacy, 'example', 'hash'), legacy);
  const compact = {...legacy, schemaVersion: 2, sectionRanges: {authorMarkdown: [], descriptionMarkdown: [[0, 3]], kaiMarkdown: []}};
  delete compact.sections;
  assert.deepEqual(validatePublishedDocument(compact, 'example', 'hash').sections, legacy.sections);
  for (const bad of [[[0, 4]], [[-1, 2]], [[1.5, 2]], [[2, 1]], [[1, 2], [0, 1]], [[0]], 'abc']) {
    assert.throws(() => validatePublishedDocument({...compact, sectionRanges: {...compact.sectionRanges, descriptionMarkdown: bad}}, 'example', 'hash'), /range/i);
  }
  assert.throws(() => validatePublishedDocument(compact, 'different', 'hash'), /UUID/);
  assert.throws(() => validatePublishedDocument(compact, 'example', 'different'), /hash/);
});

test('all archive artifacts decode to their exact API body and avoid duplicate text', () => {
  for (const document of buildApiData().documents) {
    const stored = toPublishedDocument(document);
    const decoded = validatePublishedDocument(stored, document.document_uuid, document.content_hash);
    assert.equal(decoded.fullMarkdown, document.full_markdown, document.doc_id);
    assert.deepEqual(decoded.sections, {
      authorMarkdown: document.author_markdown,
      descriptionMarkdown: document.description_markdown,
      kaiMarkdown: document.kai_markdown,
    }, document.doc_id);
  }
});

test('fetch normalizes a compact body and caches the same API representation', async (t) => {
  const document = buildApiData().documents[0];
  const pointer = toDocumentCatalogRow(document);
  const originalFetch = global.fetch;
  let requests = 0;
  global.fetch = async (url) => {
    requests += 1;
    assert.equal(url.pathname, pointer.content_path);
    assert.equal(url.searchParams.get('v'), document.content_hash);
    return {ok: true, json: async () => toPublishedDocument(document)};
  };
  t.after(() => {global.fetch = originalFetch;});
  const first = await fetchPublishedDocument(pointer, 'https://runjp.com');
  const second = await fetchPublishedDocument(pointer, 'https://runjp.com');
  assert.equal(first, second);
  assert.equal(requests, 1);
  assert.equal(first.sections.kaiMarkdown, document.kai_markdown);
});

test('production deploys the compatible reader before publishing compact bodies', () => {
  const workflow = fs.readFileSync(path.resolve(__dirname, '../.github/workflows/deploy.yml'), 'utf8');
  assert.match(workflow, /\n  deploy:\n[\s\S]*?needs: \[build, backend\]/);
  assert.match(workflow, /\n  backend:\n[^]*?needs: build/);
});

test('published content paths are UUID-only and reject invalid identities', () => {
  const uuid = '72dc6d93-df21-5bbe-b808-359a254e5ad9';
  assert.equal(getPublishedContentPath(uuid), `/api-content/v1/documents/${uuid}.json`);
  assert.throws(() => getPublishedContentPath('../unsafe'), /Invalid document UUID/);
});
