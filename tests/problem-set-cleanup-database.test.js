const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {PGlite} = require('@electric-sql/pglite');
const {uuid_ossp} = require('@electric-sql/pglite/contrib/uuid_ossp');

const schema = fs.readFileSync(path.resolve(__dirname, '../src/services/schema.sql'), 'utf8');
const alice = '10000000-0000-4000-8000-000000000001';
const bob = '10000000-0000-4000-8000-000000000002';
const documents = ['removed-first', 'available', 'removed-last'].map((name, index) => ({
  id: `school/${name}`,
  uuid: `20000000-0000-4000-8000-${String(index + 1).padStart(12, '0')}`,
}));

test('unavailable problem-set entries can be removed without losing learning data', async t => {
  const db = new PGlite({extensions: {uuid_ossp}});
  t.after(() => db.close());
  await db.exec(`
    create role anon;
    create role authenticated;
    create role service_role bypassrls;
    create schema auth;
    create table auth.users(id uuid primary key, created_at timestamptz not null default now());
    create function auth.uid() returns uuid language sql stable as $$
      select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid
    $$;
    grant usage on schema public to anon, authenticated, service_role;
    grant usage on schema auth to authenticated, service_role;
  `);
  await db.exec(schema);
  await db.query('insert into auth.users(id) values ($1), ($2)', [alice, bob]);
  const asUser = async (userId, action) => {
    await db.exec('set role authenticated');
    await db.query("select set_config('request.jwt.claim.sub', $1, false)", [userId]);
    try {return await action();} finally {
      await db.exec('reset role');
      await db.query("select set_config('request.jwt.claim.sub', '', false)");
    }
  };
  const getItems = async setId => (await db.query('select * from public.get_my_problem_set($1)', [setId])).rows.filter(row => row.item_id);
  const remove = (setId, ids) => db.query('select public.remove_problem_set_items($1, $2)', [setId, ids]);
  for (const doc of documents) {
    await db.query('insert into public.document_registry(document_uuid,current_doc_id) values ($1,$2)', [doc.uuid, doc.id]);
    await db.query('insert into public.document_aliases(doc_id,document_uuid,is_current) values ($1,$2,true)', [doc.id, doc.uuid]);
    await db.query(`insert into public.document_catalog(doc_id,document_uuid,source_path,title,permalink,content_hash,content_path)
      values ($1,$2,$3,$1,$4,'hash',$5)`, [doc.id, doc.uuid, `docs/${doc.id}.md`, `/docs/${doc.id}`, `/api-content/v1/documents/${doc.uuid}.json`]);
  }
  let sourceId;
  let otherId;
  let systemSets;
  await asUser(alice, async () => {
    sourceId = (await db.query("select public.create_my_problem_set('Cleanup target') as id")).rows[0].id;
    otherId = (await db.query("select public.create_my_problem_set('Keep this collection') as id")).rows[0].id;
    systemSets = (await db.query("select id, kind from public.get_my_problem_sets() where kind <> 'custom' order by kind")).rows;
    for (const doc of documents) {
      await db.query('select public.set_doc_problem_set_memberships($1,$2)', [doc.id, [sourceId, otherId, ...systemSets.map(set => set.id)]]);
    }
    await db.query("insert into public.user_progress_items(user_id,doc_id,status,review_count) values ($1,$2,'completed',3)", [alice, documents[0].id]);
    await db.query('insert into public.user_note_items(user_id,doc_id,content) values ($1,$2,$3)', [alice, documents[0].id, 'Keep my private notes']);
  });
  // The source documents disappear from the published catalog after collection.
  await db.query('delete from public.document_catalog where doc_id = any($1)', [[documents[0].id, documents[2].id]]);
  const progressBefore = (await db.query('select * from public.user_progress_items')).rows;
  const notesBefore = (await db.query('select * from public.user_note_items')).rows;
  const otherBefore = (await db.query('select * from public.problem_set_items where set_id=$1 order by position', [otherId])).rows;

  await t.test('single removal works when the document no longer exists in the catalog', async () => {
    await asUser(alice, async () => {
      const before = await getItems(sourceId);
      assert.deepEqual(before.map(row => row.content_available), [false, true, false]);
      await remove(sourceId, [before[0].item_id]);
      const after = await getItems(sourceId);
      assert.deepEqual(after.map(row => row.doc_id), [documents[1].id, documents[2].id]);
      assert.deepEqual(after.map(row => row.position), [0, 1]);
    });
  });

  await t.test('cleanup works in both system collections and keeps available entries', async () => {
    assert.deepEqual(systemSets.map(set => set.kind), ['system_later', 'system_mistakes']);
    await asUser(alice, async () => {
      for (const set of systemSets) {
        const before = await getItems(set.id);
        const unavailable = before.filter(row => !row.content_available);
        assert.equal(unavailable.length, 2);
        await remove(set.id, unavailable.map(row => row.item_id));
        const after = await getItems(set.id);
        assert.deepEqual(after.map(row => row.doc_id), [documents[1].id]);
        assert.equal(after[0].position, 0);
      }
    });
  });

  await t.test('requests cannot remove another owner’s set or mix IDs from different sets', async () => {
    const source = await asUser(alice, () => getItems(sourceId));
    await asUser(bob, async () => {
      await assert.rejects(remove(sourceId, [source[0].item_id]), /problem_set_not_found/);
    });
    await asUser(alice, async () => {
      await assert.rejects(remove(sourceId, [source[0].item_id, otherBefore[0].id]), /problem_set_item_not_found/);
      assert.deepEqual((await getItems(sourceId)).map(row => row.item_id), source.map(row => row.item_id));
    });
  });

  await t.test('archived collections require restoring before cleanup', async () => {
    await asUser(alice, async () => {
      await db.query('select public.archive_my_problem_set($1,true)', [sourceId]);
      const item = (await getItems(sourceId)).find(row => !row.content_available);
      await assert.rejects(remove(sourceId, [item.item_id]), /problem_set_not_found/);
      await db.query('select public.archive_my_problem_set($1,false)', [sourceId]);
      await remove(sourceId, [item.item_id]);
      assert.deepEqual((await getItems(sourceId)).map(row => row.doc_id), [documents[1].id]);
    });
  });

  await t.test('cleanup leaves private progress, notes, and other collections unchanged', async () => {
    assert.deepEqual((await db.query('select * from public.user_progress_items')).rows, progressBefore);
    assert.deepEqual((await db.query('select * from public.user_note_items')).rows, notesBefore);
    assert.deepEqual((await db.query('select * from public.problem_set_items where set_id=$1 order by position', [otherId])).rows, otherBefore);
  });
});
