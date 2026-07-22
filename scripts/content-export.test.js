const assert = require('node:assert/strict');
const test = require('node:test');

const {
  FORMAT,
  SCHEMA_VERSION,
  buildContentExport,
  validateContentExport,
} = require('./generate-content-export');

const FIXED_OPTIONS = {
  generatedAt: '2026-07-22T00:00:00.000Z',
  source: {
    repository: 'https://github.com/Myyura/the_kai_project',
    commit: '0123456789abcdef',
    ref: 'main',
  },
};
let cachedExport;

function getExport() {
  if (!cachedExport) cachedExport = buildContentExport(FIXED_OPTIONS);
  return cachedExport;
}

test('content export is a complete versioned snapshot', () => {
  const value = getExport();
  assert.equal(value.format, FORMAT);
  assert.equal(value.schemaVersion, SCHEMA_VERSION);
  assert.equal(value.generatedAt, FIXED_OPTIONS.generatedAt);
  assert.deepEqual(value.source, FIXED_OPTIONS.source);
  assert.equal(value.counts.directories, value.directories.length);
  assert.equal(value.counts.documents, value.documents.length);
  assert.equal(value.counts.assets, value.assets.length);
  assert.match(value.contentHash, /^[0-9a-f]{64}$/);
  assert.deepEqual(validateContentExport(value), []);
});

test('content export includes directory metadata and every Markdown source body', () => {
  const value = getExport();
  const intro = value.documents.find((document) => document.docId === 'intro');
  assert.ok(intro, 'docs/intro.mdx was not exported');
  assert.equal(intro.sourcePath, 'docs/intro.mdx');
  assert.equal(intro.directoryPath, null);
  assert.equal(typeof intro.markdown, 'string');
  assert.ok(intro.markdown.length > 0);

  const categorizedDirectory = value.directories.find((directory) => (
    directory.category && typeof directory.category.label === 'string'
  ));
  assert.ok(categorizedDirectory, 'No _category_.json metadata was exported');
  assert.equal(categorizedDirectory.label, categorizedDirectory.category.label.trim());
});

test('exported documents keep stable identity, parsed metadata, frontmatter, and Markdown', () => {
  const document = getExport().documents.find((item) => item.docId !== 'intro');
  assert.ok(document);
  assert.match(document.documentUuid, /^[0-9a-f-]{36}$/i);
  assert.match(document.contentHash, /^[0-9a-f]{64}$/i);
  assert.equal(typeof document.frontmatter, 'object');
  assert.equal(typeof document.metadata, 'object');
  assert.equal(typeof document.tags, 'object');
  assert.equal(typeof document.markdown, 'string');
  assert.equal(typeof document.sections, 'object');
});

test('relative document images are embedded as content-addressed assets', () => {
  const value = getExport();
  const asset = value.assets.find((item) => item.path.endsWith('.jpeg'));
  assert.ok(asset, 'No document image asset was exported');
  assert.equal(asset.encoding, 'base64');
  assert.equal(asset.sourcePath, `docs/${asset.path}`);
  assert.match(asset.contentHash, /^[0-9a-f]{64}$/);
  assert.ok(Buffer.from(asset.data, 'base64').length > 0);
});

test('content export validation rejects duplicate document identities', () => {
  const value = structuredClone(getExport());
  value.documents.push(structuredClone(value.documents[0]));
  value.counts.documents = value.documents.length;
  const issues = validateContentExport(value);
  assert.ok(issues.some((issue) => issue.startsWith('Duplicate document docId:')));
  assert.ok(issues.some((issue) => issue.startsWith('Duplicate document UUID:')));
});
