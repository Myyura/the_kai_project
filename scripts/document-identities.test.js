const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const {buildApiData} = require('./api-data');
const {
  DOCUMENT_NAMESPACE,
  OVERRIDES_PATH,
  loadDocumentIdentityOverrides,
  resolveDocumentUuid,
  uuidV5,
} = require('./document-identities');
const {moveDocumentIdentity, validateOverrides} = require('./generate-document-identities');
const {buildDocumentIdentityRows} = require('./sync-document-catalog');

test('every ordinary document derives one stable UUID without a manifest entry', () => {
  const data = buildApiData();
  const overrides = loadDocumentIdentityOverrides();
  const uuids = data.documents.map((document) => document.document_uuid);
  assert.equal(new Set(uuids).size, uuids.length);
  for (const document of data.documents) {
    assert.equal(document.document_uuid, resolveDocumentUuid(document.doc_id, overrides));
    if (!overrides.current[document.doc_id]) {
      assert.equal(document.document_uuid, uuidV5(document.doc_id));
    }
  }
  assert.equal(
    resolveDocumentUuid('osaka-university/IST/ie/02-useful_info', overrides),
    '033e4c27-c818-541e-94ea-fbb2dc2f2113',
  );
});

test('the repository stores only path-change exceptions', () => {
  const overrides = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf8'));
  const fullManifestPath = path.resolve(__dirname, '..', 'src/data/documentIdentities.json');
  assert.equal(overrides.schemaVersion, 2);
  assert.equal(overrides.namespace, DOCUMENT_NAMESPACE);
  assert.equal(fs.existsSync(fullManifestPath), false);
  for (const [docId, documentUuid] of Object.entries(overrides.current)) {
    assert.notEqual(documentUuid, uuidV5(docId));
  }
  assert.deepEqual(validateOverrides(overrides, buildApiData().documents.map((doc) => doc.doc_id)), []);
});

test('repeated moves stay flat and preserve the original UUID', () => {
  const empty = {
    schemaVersion: 2,
    namespace: DOCUMENT_NAMESPACE,
    current: {},
    aliases: {},
  };
  const originalUuid = uuidV5('school/department/old');
  const firstMove = moveDocumentIdentity(
    empty,
    ['school/department/middle'],
    'school/department/old',
    'school/department/middle',
  );
  const secondMove = moveDocumentIdentity(
    firstMove,
    ['school/department/current'],
    'school/department/middle',
    'school/department/current',
  );

  assert.equal(secondMove.current['school/department/current'], originalUuid);
  assert.equal(secondMove.aliases['school/department/old'], originalUuid);
  assert.equal(secondMove.aliases['school/department/middle'], originalUuid);
  assert.equal(Object.values(secondMove.aliases).every((uuid) => uuid === originalUuid), true);

  const movedBack = moveDocumentIdentity(
    secondMove,
    ['school/department/old'],
    'school/department/current',
    'school/department/old',
  );
  assert.equal(movedBack.current['school/department/old'], originalUuid);
  assert.equal(movedBack.aliases['school/department/old'], undefined);
  assert.equal(movedBack.aliases['school/department/current'], originalUuid);
  assert.equal(resolveDocumentUuid('school/department/old', movedBack), originalUuid);
  assert.deepEqual(validateOverrides(movedBack, ['school/department/old']), []);

  const missingReverseMapping = {...movedBack, current: {}};
  assert.match(
    validateOverrides(missingReverseMapping, ['school/department/old']).join('\n'),
    /missing its current path override/,
  );
});

test('catalog sync derives current aliases and retains only recorded historical paths', () => {
  const movedUuid = uuidV5('school/old');
  const overrides = {
    schemaVersion: 2,
    namespace: DOCUMENT_NAMESPACE,
    current: {'school/current': movedUuid},
    aliases: {'school/old': movedUuid},
  };
  const documents = [
    {doc_id: 'school/current', document_uuid: movedUuid},
    {doc_id: 'school/new', document_uuid: uuidV5('school/new')},
  ];
  const {registry, aliases} = buildDocumentIdentityRows(documents, overrides);

  assert.deepEqual(registry, [
    {current_doc_id: 'school/current', document_uuid: movedUuid},
    {current_doc_id: 'school/new', document_uuid: uuidV5('school/new')},
  ]);
  assert.deepEqual(aliases, [
    {doc_id: 'school/current', document_uuid: movedUuid, is_current: true},
    {doc_id: 'school/new', document_uuid: uuidV5('school/new'), is_current: true},
    {doc_id: 'school/old', document_uuid: movedUuid, is_current: false},
  ]);
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

test('doc_id canonicalization preserves rows and historical aliases', () => {
  const cleanupPath = path.resolve(
    __dirname,
    '..',
    'supabase/manual/20260719_canonicalize_document_doc_ids.sql',
  );
  const sql = fs.readFileSync(cleanupPath, 'utf8').toLowerCase();

  assert.doesNotMatch(sql, /\btruncate\s+/);
  assert.doesNotMatch(sql, /\bdelete\s+from\s+/);
  assert.doesNotMatch(sql, /\bdrop\s+(?:table|function|column)\s+/);
  assert.match(sql, /set\s+doc_id\s*=\s*registry\.current_doc_id/);
  assert.match(sql, /set\s+target_doc_id\s*=\s*registry\.current_doc_id/);
  assert.match(sql, /historical aliases are retained/);
  assert.match(sql, /enable trigger archive_user_note_revision/);
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
