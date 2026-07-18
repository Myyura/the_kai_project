const assert = require('node:assert/strict');
const test = require('node:test');

const {
  PUBLISHED_CONTENT_SCHEMA_VERSION,
  buildApiData,
  getPublishedContentPath,
  toDocumentCatalogRow,
  toPublishedDocument,
} = require('./api-data');

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
  assert.equal(published.schemaVersion, PUBLISHED_CONTENT_SCHEMA_VERSION);
  assert.equal(published.documentUuid, document.document_uuid);
  assert.equal(published.contentHash, document.content_hash);
  assert.equal(published.fullMarkdown, document.full_markdown);
  assert.deepEqual(published.sections, {
    authorMarkdown: document.author_markdown,
    descriptionMarkdown: document.description_markdown,
    kaiMarkdown: document.kai_markdown,
  });
  for (const field of ['title', 'tags', 'permalink', 'sourcePath', 'university', 'department']) {
    assert.equal(Object.hasOwn(published, field), false, `${field} duplicated catalog metadata in a body artifact`);
  }
});

test('published content paths are UUID-only and reject invalid identities', () => {
  const uuid = '72dc6d93-df21-5bbe-b808-359a254e5ad9';
  assert.equal(getPublishedContentPath(uuid), `/api-content/v1/documents/${uuid}.json`);
  assert.throws(() => getPublishedContentPath('../unsafe'), /Invalid document UUID/);
});
