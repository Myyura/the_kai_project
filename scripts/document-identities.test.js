const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const {buildApiData} = require('./api-data');
const {
  DOCUMENT_NAMESPACE,
  RUNTIME_MANIFEST_PATH,
  loadDocumentIdentities,
  uuidV5,
} = require('./document-identities');

test('every current document has one stable UUID', () => {
  const data = buildApiData();
  const manifest = loadDocumentIdentities();
  const uuids = data.documents.map((document) => document.document_uuid);
  assert.equal(data.documents.length, Object.keys(manifest.current).length);
  assert.equal(new Set(uuids).size, uuids.length);
  for (const document of data.documents) {
    assert.equal(document.document_uuid, manifest.current[document.doc_id]);
  }
});

test('initial document identities use the shared UUIDv5 namespace', () => {
  const manifest = loadDocumentIdentities();
  assert.equal(manifest.namespace, DOCUMENT_NAMESPACE);
  for (const [docId, documentUuid] of Object.entries(manifest.current).slice(0, 25)) {
    assert.equal(documentUuid, uuidV5(docId));
  }
});

test('browser runtime ships only identity exceptions, not the full manifest', () => {
  const runtime = JSON.parse(fs.readFileSync(RUNTIME_MANIFEST_PATH, 'utf8'));
  const manifest = loadDocumentIdentities();
  assert.equal(runtime.namespace, DOCUMENT_NAMESPACE);
  assert.ok(Object.keys(runtime.current).length < Object.keys(manifest.current).length);
  for (const [docId, documentUuid] of Object.entries(runtime.current)) {
    assert.equal(documentUuid, manifest.current[docId]);
    assert.notEqual(documentUuid, uuidV5(docId));
  }
  assert.deepEqual(runtime.aliases, manifest.aliases);
});

test('the identity migration preserves existing user-owned database rows', () => {
  const migrationPath = path.resolve(
    __dirname,
    '..',
    'supabase/migrations/20260718000100_direct_database_study_model.sql',
  );
  const sql = fs.readFileSync(migrationPath, 'utf8').toLowerCase();
  assert.doesNotMatch(sql, /truncate\s+/);
  assert.doesNotMatch(sql, /drop\s+table/);
  assert.doesNotMatch(sql, /delete\s+from\s+user_(?:progress|note|practice)/);
  for (const table of [
    'user_progress_items',
    'user_note_items',
    'user_practice_events',
    'problem_set_items',
  ]) {
    assert.match(sql, new RegExp(`update\\s+${table}\\s+target`));
  }
});

test('ordered migrations contain no top-level destructive row operations', () => {
  const migrationDirectory = path.resolve(__dirname, '..', 'supabase/migrations');
  const migrations = fs.readdirSync(migrationDirectory).filter((name) => name.endsWith('.sql'));
  assert.ok(migrations.length >= 2);
  for (const migration of migrations) {
    const sql = fs.readFileSync(path.join(migrationDirectory, migration), 'utf8');
    assert.equal((sql.match(/\$\$/g) || []).length % 2, 0, `${migration} has unbalanced $$ blocks`);
    const topLevelSql = sql.replace(/\$\$[\s\S]*?\$\$/g, '').toLowerCase();
    assert.doesNotMatch(topLevelSql, /\btruncate\s+/);
    assert.doesNotMatch(topLevelSql, /\bdelete\s+from\s+/);
    assert.doesNotMatch(topLevelSql, /\bdrop\s+table\s+/);
  }
});
