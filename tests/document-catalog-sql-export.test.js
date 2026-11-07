const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {PGlite} = require('@electric-sql/pglite');
const {uuid_ossp} = require('@electric-sql/pglite/contrib/uuid_ossp');
const {buildDocumentCatalogSql} = require('../scripts/export-document-catalog-sql');

const schema = fs.readFileSync(path.resolve(__dirname, '../src/services/schema.sql'), 'utf8');
const owner = '10000000-0000-4000-8000-000000000001';
const existingUuid = '20000000-0000-4000-8000-000000000001';
const missingUuid = '20000000-0000-4000-8000-000000000002';
const retainedUuid = '20000000-0000-4000-8000-000000000003';
const overrides = {current: {}, aliases: {}};
const doc = (id, uuid, title = id) => ({
  doc_id: id, document_uuid: uuid, type: 'guide', source_path: `docs/${id}.md`, title,
  tags: [], school_tags: [], learning_tags: [], subject_ids: [], subsubject_ids: [], topic_ids: [],
  permalink: `/docs/${id}`, content_hash: 'test-hash',
});

test('SQL Editor catalog recovery repairs identities atomically without changing user data', async t => {
  const db = new PGlite({extensions: {uuid_ossp}});
  t.after(() => db.close());
  await db.exec(`
    create role anon; create role authenticated; create role service_role bypassrls;
    create schema auth;
    create table auth.users(id uuid primary key, created_at timestamptz not null default now());
    create function auth.uid() returns uuid language sql stable as $$
      select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid
    $$;
    grant usage on schema public to anon, authenticated, service_role;
    grant usage on schema auth to authenticated, service_role;
  `);
  await db.exec(schema);
  await db.exec(buildDocumentCatalogSql([
    doc('school/old', existingUuid), doc('school/no-longer-published', retainedUuid),
  ], {overrides}));
  await db.query('insert into auth.users(id) values ($1)', [owner]);
  await db.query("select set_config('request.jwt.claim.sub',$1,false)", [owner]);
  const setId = (await db.query("select public.create_my_problem_set('Keep this set') as id")).rows[0].id;
  await db.query("select public.set_doc_problem_set_memberships('school/old',$1)", [[setId]]);
  await db.query("insert into public.user_progress_items(user_id,doc_id,status) values ($1,'school/old','completed')", [owner]);
  await db.query("insert into public.user_note_items(user_id,doc_id,content) values ($1,'school/old','My personal notes')", [owner]);
  const snapshots = {};
  for (const table of ['problem_sets', 'problem_set_items', 'user_progress_items', 'user_note_items']) {
    snapshots[table] = (await db.query(`select * from public.${table} order by id`)).rows;
  }
  const specialTitle = "中文 ' quoted \\ path\n$kai_catalog_0$'); delete from public.problem_sets; --";
  const repaired = [doc('school/current', existingUuid, specialTitle), doc('school/missing', missingUuid)];
  const sql = buildDocumentCatalogSql(repaired, {overrides: {current: {}, aliases: {'school/recorded-legacy': existingUuid}}});

  await t.test('a missing catalog row fails membership until the generated SQL repairs it', async () => {
    await assert.rejects(db.query("select public.set_doc_problem_set_memberships('school/missing',$1)", [[setId]]), /invalid_doc_id/);
    await db.exec(sql);
    const rows = (await db.query(`select alias.doc_id, alias.is_current, catalog.title
      from public.document_aliases alias join public.document_catalog catalog using(document_uuid)
      where alias.document_uuid=$1 order by alias.doc_id`, [existingUuid])).rows;
    assert.deepEqual(rows.map(row => [row.doc_id, row.is_current]), [
      ['school/current', true], ['school/old', false], ['school/recorded-legacy', false],
    ]);
    assert(rows.every(row => row.title === specialTitle));
    assert.equal((await db.query('select current_doc_id from public.document_registry where document_uuid=$1', [existingUuid])).rows[0].current_doc_id, 'school/current');
    const missing = (await db.query(`select alias.doc_id from public.document_aliases alias
      join public.document_catalog catalog using(document_uuid) where alias.doc_id='school/missing'`)).rows;
    assert.equal(missing.length, 1);
  });

  await t.test('repeating the repair keeps user records and unmentioned historic documents intact', async () => {
    await db.exec(sql);
    for (const [table, before] of Object.entries(snapshots)) {
      assert.deepEqual((await db.query(`select * from public.${table} order by id`)).rows, before);
    }
    for (const table of ['document_registry', 'document_aliases', 'document_catalog']) {
      assert.equal((await db.query(`select count(*)::int as count from public.${table} where document_uuid=$1`, [retainedUuid])).rows[0].count, 1);
    }
    const target = (await db.query("select public.create_my_problem_set('New target') as id")).rows[0].id;
    await db.query("select public.set_doc_problem_set_memberships('school/missing',$1)", [[target]]);
    assert.equal((await db.query('select * from public.get_my_problem_set($1)', [target])).rows[0].document_uuid, missingUuid);
  });

  await t.test('an unchanged inventory performs no row updates even when exported again later', async () => {
    const tables = ['document_registry', 'document_aliases', 'document_catalog'];
    await db.exec(`create function public.reject_unchanged_catalog_write() returns trigger language plpgsql as $$
      begin raise exception 'unexpected_catalog_rewrite'; end; $$;`);
    for (const table of tables) {
      await db.exec(`create trigger reject_rewrite before update on public.${table}
        for each row execute function public.reject_unchanged_catalog_write();`);
    }
    try {
      await db.exec(buildDocumentCatalogSql(repaired, {
        overrides: {current: {}, aliases: {'school/recorded-legacy': existingUuid}},
      }));
    } finally {
      await db.exec('rollback;');
      for (const table of tables) await db.exec(`drop trigger reject_rewrite on public.${table};`);
      await db.exec('drop function public.reject_unchanged_catalog_write();');
    }
  });

  await t.test('an edited solution updates title, tags, and content hash without changing its identity or memberships', async () => {
    const edited = {
      ...doc('school/current', existingUuid, 'Revised dynamic programming solution'),
      tags: ['Nagoya-University', 'Computer-Science.Dynamic-Programming.Knapsack-Problem'],
      content_hash: 'revised-solution-content-hash',
    };
    const catalogCount = (await db.query('select count(*)::int as count from public.document_catalog')).rows[0].count;
    await db.exec(buildDocumentCatalogSql([edited], {overrides}));
    const current = (await db.query(`select document_uuid, doc_id, title, tags, content_hash
      from public.document_catalog where document_uuid=$1`, [existingUuid])).rows;
    assert.deepEqual(current, [{
      document_uuid: existingUuid, doc_id: edited.doc_id, title: edited.title,
      tags: edited.tags, content_hash: edited.content_hash,
    }]);
    assert.equal((await db.query('select count(*)::int as count from public.document_catalog')).rows[0].count, catalogCount);
    assert.deepEqual((await db.query(`select document_uuid, is_current from public.document_aliases
      where doc_id='school/current'`)).rows, [{document_uuid: existingUuid, is_current: true}]);
    const member = (await db.query('select * from public.get_my_problem_set($1)', [setId])).rows[0];
    assert.equal(member.document_uuid, existingUuid);
    assert.equal(member.title, edited.title);
    assert.deepEqual(member.tags, edited.tags);
    for (const [table, before] of Object.entries(snapshots)) {
      // The previous recovery check created a second set; compare only the
      // original owner records rather than claiming that set creation vanished.
      if (table === 'problem_sets' || table === 'problem_set_items') {
        for (const record of before) {
          assert.deepEqual((await db.query(`select * from public.${table} where id=$1`, [record.id])).rows[0], record);
        }
      } else {
        assert.deepEqual((await db.query(`select * from public.${table} order by id`)).rows, before);
      }
    }
  });

  await t.test('verification failure after catalog writes rolls back all document and user changes', async () => {
    const before = {};
    const tables = ['document_registry', 'document_aliases', 'document_catalog',
      'problem_sets', 'problem_set_items', 'user_progress_items', 'user_note_items'];
    for (const table of tables) {
      const order = table === 'document_registry' ? 'document_uuid'
        : table === 'document_aliases' || table === 'document_catalog' ? 'doc_id' : 'id';
      before[table] = {order, rows: (await db.query(`select * from public.${table} order by ${order}`)).rows};
    }
    // Simulate a server-side trigger that leaves a newly written catalog row
    // unresolvable. This exercises the final verification after real writes,
    // rather than an injected syntax error or the pre-write identity guard.
    await db.exec(`
      create function public.break_new_catalog_link_for_test() returns trigger language plpgsql as $$
      begin
        if new.doc_id = 'school/failed-sync' then
          delete from public.document_aliases where doc_id = new.doc_id;
        end if;
        return new;
      end;
      $$;
      create trigger break_new_catalog_link_for_test after insert on public.document_catalog
        for each row execute function public.break_new_catalog_link_for_test();
    `);
    const sqlWithBrokenLink = buildDocumentCatalogSql([
      doc('school/current', existingUuid, 'This update must roll back'),
      doc('school/failed-sync', '20000000-0000-4000-8000-000000000004'),
    ], {overrides});
    try {
      await assert.rejects(db.exec(sqlWithBrokenLink), /document_catalog_repair_incomplete/);
      await db.exec('rollback;');
      for (const [table, snapshot] of Object.entries(before)) {
        assert.deepEqual((await db.query(`select * from public.${table} order by ${snapshot.order}`)).rows, snapshot.rows);
      }
    } finally {
      await db.exec('rollback; drop trigger break_new_catalog_link_for_test on public.document_catalog; drop function public.break_new_catalog_link_for_test();');
    }
  });

  await t.test('identity conflicts roll back rather than rebind existing aliases or data', async () => {
    const conflicting = buildDocumentCatalogSql([doc('school/current', missingUuid)], {overrides});
    await assert.rejects(db.exec(conflicting), /document_identity_conflict/);
    await db.exec('rollback;');
    assert.equal((await db.query("select document_uuid from public.document_aliases where doc_id='school/current'")).rows[0].document_uuid, existingUuid);
    assert.equal((await db.query("select document_uuid from public.document_catalog where doc_id='school/current'")).rows[0].document_uuid, existingUuid);
    for (const table of ['user_progress_items', 'user_note_items']) {
      assert.deepEqual((await db.query(`select * from public.${table} order by id`)).rows, snapshots[table]);
    }
  });
});

test('catalog SQL export rejects empty or invalid document inventories', () => {
  assert.throws(() => buildDocumentCatalogSql([], {overrides}), /empty repair/);
  assert.throws(() => buildDocumentCatalogSql([doc('a', existingUuid), doc('a', existingUuid)], {overrides}), /validation errors/);
});
