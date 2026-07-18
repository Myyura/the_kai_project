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

test('the consolidated baseline preserves user-owned database rows', () => {
  const schemaPath = path.resolve(__dirname, '..', 'src/services/schema.sql');
  const sql = fs.readFileSync(schemaPath, 'utf8').toLowerCase();
  const topLevelSql = sql.replace(/\$\$[\s\S]*?\$\$/g, '');
  assert.doesNotMatch(sql, /truncate\s+/);
  assert.doesNotMatch(topLevelSql, /drop\s+table\s+(?:if\s+exists\s+)?(?:public\.)?user_/);
  assert.doesNotMatch(topLevelSql, /delete\s+from\s+user_(?:progress|note|practice)/);
  for (const table of [
    'user_progress_items',
    'user_note_items',
    'user_practice_events',
    'problem_set_items',
  ]) {
    assert.match(sql, new RegExp(`update\\s+${table}\\s+target`));
  }
});

test('the current baseline has no pending historical migrations', () => {
  const migrationDirectory = path.resolve(__dirname, '..', 'supabase/migrations');
  const migrations = fs.readdirSync(migrationDirectory).filter((name) => name.endsWith('.sql'));
  assert.deepEqual(migrations, []);
});

test('the one-time baseline finalizer cannot delete user-owned rows', () => {
  const cleanupPath = path.resolve(
    __dirname,
    '..',
    'supabase/manual/20260718_finalize_consolidated_baseline.sql',
  );
  const sql = fs.readFileSync(cleanupPath, 'utf8').toLowerCase();
  const topLevelSql = sql.replace(/\$\$[\s\S]*?\$\$/g, '');

  assert.doesNotMatch(sql, /truncate\s+/);
  assert.doesNotMatch(topLevelSql, /delete\s+from\s+public\./);
  assert.doesNotMatch(topLevelSql, /drop\s+table\s+(?:if\s+exists\s+)?public\.user_/);
  assert.doesNotMatch(topLevelSql, /alter\s+table\s+public\.user_(?!public_profiles\b)/);
  assert.match(sql, /delete\s+from\s+supabase_migrations\.schema_migrations/);
  for (const version of ['20260718000100', '20260718000200', '20260718000300']) {
    assert.match(sql, new RegExp(version));
  }
});

test('legacy cleanup migrates rows with current UUID identities before dropping old tables', () => {
  const cleanupPath = path.resolve(
    __dirname,
    '..',
    'supabase/manual/20260714_cleanup_legacy_schema.sql',
  );
  const sql = fs.readFileSync(cleanupPath, 'utf8').toLowerCase();

  assert.match(sql, /public\.resolve_document_uuid\(kv\.key\)/);
  assert.match(sql, /event_id,\s*user_id,\s*doc_id,\s*document_uuid/);
  assert.match(sql, /legacy user_data verification failed/);
  assert.match(sql, /legacy leaderboard profile verification failed/);
  assert.doesNotMatch(sql, /drop\s+(?:table|function)[^;]+\bcascade\b/);
});

test('the consolidated baseline ends on the lightweight document catalog', () => {
  const schemaPath = path.resolve(__dirname, '..', 'src/services/schema.sql');
  const sql = fs.readFileSync(schemaPath, 'utf8').toLowerCase();
  const topLevelSql = sql.replace(/\$\$[\s\S]*?\$\$/g, '');
  assert.match(sql, /rename\s+to\s+document_catalog/);
  for (const column of [
    'author_markdown',
    'description_markdown',
    'kai_markdown',
    'full_markdown',
  ]) {
    assert.match(sql, new RegExp(`drop\\s+column\\s+if\\s+exists\\s+${column}`));
  }
  assert.doesNotMatch(topLevelSql, /alter\s+table\s+(?:public\.)?user_\w+[\s\S]{0,120}drop\s+column/);
  assert.doesNotMatch(topLevelSql, /delete\s+from\s+(?:public\.)?(?:user_|problem_set)/);
  assert.doesNotMatch(sql, /leaderboard_visible/);
  assert.doesNotMatch(sql, /create\s+table\s+if\s+not\s+exists\s+operational_retention_policies/);
});
