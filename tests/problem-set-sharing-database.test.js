const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {PGlite} = require('@electric-sql/pglite');
const {uuid_ossp} = require('@electric-sql/pglite/contrib/uuid_ossp');

const schema = fs.readFileSync(path.resolve(__dirname, '../src/services/schema.sql'), 'utf8');
const migration = fs.readFileSync(path.resolve(__dirname, '../supabase/migrations/202611070001_problem_set_sharing.sql'), 'utf8');
const marker = '-- ── 习题集分享码与独立导入 ──────────────────────────────────\n';
const alice = '10000000-0000-4000-8000-000000000001';
const bob = '10000000-0000-4000-8000-000000000002';
const charlie = '10000000-0000-4000-8000-000000000003';
const uuids = [1, 2, 3, 4].map(n => `20000000-0000-4000-8000-${String(n).padStart(12, '0')}`);
const errorNamed = name => error => error.message.includes(name);

test('cloud share codes preserve private data and create independent, renameable full copies', async t => {
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
  // Exercise the incremental migration against a populated pre-sharing baseline.
  assert.ok(schema.includes(marker));
  const migrationBody = migration.split('begin;\n')[1].split("notify pgrst, 'reload schema';")[0];
  assert.equal(schema.split(marker)[1].split("notify pgrst, 'reload schema';")[0], migrationBody);
  await db.exec(schema.split(marker)[0] + "notify pgrst, 'reload schema';\ncommit;");
  await db.query('insert into auth.users(id) values ($1),($2),($3)', [alice, bob, charlie]);
  const asRole = async (role, userId, action) => {
    assert.ok(['anon', 'authenticated', 'service_role'].includes(role));
    await db.exec(`set role ${role}`);
    await db.query("select set_config('request.jwt.claim.sub',$1,false)", [userId || '']);
    try {return await action();} finally {
      await db.exec('reset role');
      await db.query("select set_config('request.jwt.claim.sub','',false)");
    }
  };
  const rpc = async (name, args = []) => (await db.query(
    `select public.${name}(${args.map((_, i) => `$${i + 1}`).join(',')}) as result`, args,
  )).rows[0].result;
  const owner = fn => asRole('authenticated', alice, fn);
  const recipient = fn => asRole('authenticated', bob, fn);
  const anonymous = fn => asRole('anon', null, fn);
  const createDocument = async (uuid, docId, title) => {
    await db.query('insert into public.document_registry(document_uuid,current_doc_id) values ($1,$2)', [uuid, docId]);
    await db.query('insert into public.document_aliases(doc_id,document_uuid,is_current) values ($1,$2,true)', [docId, uuid]);
    await db.query(`insert into public.document_catalog(document_uuid,doc_id,source_path,title,permalink,content_hash,content_path,tags)
      values ($1,$2,$3,$4,$5,'hash',$6,'["linear-algebra"]')`, [uuid, docId, `docs/${docId}.md`, title, `/docs/${docId}`, `/api-content/v1/documents/${uuid}.json`]);
  };
  for (let i = 0; i < 3; i++) await createDocument(uuids[i], `school/problem-${i + 1}`, `Problem ${i + 1}`);
  let sourceId;
  let sourceItems;
  await owner(async () => {
    await rpc('confirm_or_change_my_nickname', ['Alice']);
    sourceId = await rpc('create_my_problem_set', ['Original plan', 'Start with conditions, then calculation.']);
    for (let i = 0; i < 3; i++) await rpc('set_doc_problem_set_memberships', [`school/problem-${i + 1}`, [sourceId]]);
    sourceItems = (await db.query('select * from public.get_my_problem_set($1)', [sourceId])).rows;
    await rpc('reorder_problem_set_items', [sourceId, [sourceItems[2].item_id, sourceItems[0].item_id, sourceItems[1].item_id]]);
    await rpc('update_problem_set_item_annotation', [sourceItems[0].item_id, 'PRIVATE_ANNOTATION']);
    await db.query('insert into public.user_note_items(user_id,doc_id,content) values ($1,$2,$3)', [alice, 'school/problem-1', 'PRIVATE_NOTE']);
    await db.query("insert into public.user_progress_items(user_id,doc_id,status,review_count) values ($1,'school/problem-1','completed',7)", [alice]);
  });
  await recipient(async () => {
    await db.query("insert into public.user_progress_items(user_id,doc_id,status,review_count) values ($1,'school/problem-2','reviewing',2)", [bob]);
  });
  await db.exec(migration);
  let published;
  let importedId;

  await t.test('owner-only operations cannot expose another user’s private set', async () => {
    assert.equal(await owner(() => rpc('get_my_problem_set_share', [sourceId])), null);
    await recipient(async () => {
      for (const [name, args] of [
        ['get_my_problem_set_share', [sourceId]],
        ['publish_my_problem_set', [sourceId]],
        ['set_my_problem_set_share_active', [sourceId, true]],
      ]) await assert.rejects(rpc(name, args), errorNamed('problem_set_not_found'));
    });
    await anonymous(async () => {
      for (const [name, args] of [
        ['get_my_problem_set_share', [sourceId]], ['publish_my_problem_set', [sourceId]],
        ['set_my_problem_set_share_active', [sourceId, false]], ['import_shared_problem_set', ['KAI-AAAA-AAAA-AAAA']],
        ['generate_problem_set_share_code', []], ['normalize_problem_set_share_code', ['test']],
      ]) await assert.rejects(rpc(name, args), error => error.code === '42501');
    });
  });

  await t.test('publishes every ordered item and defaults to excluding private annotations', async () => {
    published = await owner(() => rpc('publish_my_problem_set', [sourceId]));
    assert.match(published.code, /^KAI-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/);
    assert.equal(published.version, 1);
    assert.equal(published.items.length, 3);
    assert.deepEqual(published.items.map(item => item.documentUuid), [uuids[2], uuids[0], uuids[1]]);
    assert.equal(published.includeAnnotations, false);
    assert.ok(published.items.every(item => item.annotation === ''));
    assert.equal(published.title, 'Original plan');
    assert.match(published.author.displayName, /^Alice #[0-9]{5}$/);
    assert.notEqual(published.author.publicId, alice);
    const raw = JSON.stringify(published);
    for (const secret of [alice, bob, 'PRIVATE_ANNOTATION', 'PRIVATE_NOTE', 'reviewCount']) assert.ok(!raw.includes(secret));
    const stored = (await db.query('select items_snapshot from public.problem_set_shares')).rows[0].items_snapshot;
    assert.ok(stored.every(item => !Object.hasOwn(item, 'progressStatus')));
  });

  await t.test('anonymous code lookups are normalized, not enumerable, and reveal no owner progress', async () => {
    await anonymous(async () => {
      const value = await rpc('get_shared_problem_set', [`  ${published.code.toLowerCase().replaceAll('-', ' – ')}  `]);
      assert.equal(value.code, published.code);
      assert.ok(value.items.every(item => item.progressStatus === 'not_started'));
      await assert.rejects(rpc('get_shared_problem_set', ['unknown']), errorNamed('problem_set_share_not_found'));
      await assert.rejects(rpc('get_shared_problem_set', ['A'.repeat(101)]), errorNamed('problem_set_share_not_found'));
      await assert.rejects(db.query('select * from public.problem_set_shares'), error => error.code === '42501');
      await assert.rejects(db.query('select * from public.problem_set_imports'), error => error.code === '42501');
    });
    await recipient(async () => {
      await assert.rejects(db.query('select * from public.problem_set_shares'), error => error.code === '42501');
    });
  });

  await t.test('import defaults to the original name and permits a separate recipient name', async () => {
    await recipient(async () => {
      importedId = await rpc('import_shared_problem_set', [published.code, null, 1]);
      const rows = (await db.query('select * from public.get_my_problem_set($1)', [importedId])).rows;
      assert.equal(rows[0].set_title, 'Original plan');
      assert.equal(rows[0].set_description, published.description);
      assert.deepEqual(rows.map(row => row.document_uuid), [uuids[2], uuids[0], uuids[1]]);
      assert.deepEqual(rows.map(row => row.progress_status), ['not_started', 'not_started', 'reviewing']);
      assert.equal(rows[2].review_count, 2);
      assert.ok(rows.every(row => row.annotation_markdown === ''));
      const renamedId = await rpc('import_shared_problem_set', [published.code, '  My exam plan  ', 1]);
      assert.notEqual(renamedId, importedId);
      assert.equal((await db.query('select * from public.get_my_problem_set($1)', [renamedId])).rows[0].set_title, 'My exam plan');
      const provenance = (await db.query('select * from public.problem_set_imports where set_id=$1', [importedId])).rows[0];
      assert.equal(provenance.share_code, published.code);
      assert.equal(provenance.share_version, 1);
      assert.equal(provenance.author_snapshot.displayName, published.author.displayName);
      await assert.rejects(db.query('delete from public.problem_set_imports'), error => error.code === '42501');
    });
    await owner(async () => {
      assert.equal((await db.query('select * from public.problem_set_imports')).rows.length, 0);
      assert.equal((await db.query('select * from public.get_my_problem_set($1)', [sourceId])).rows[0].set_title, 'Original plan');
    });
  });

  await t.test('invalid import names cannot leave partial copies', async () => {
    const countBefore = (await db.query('select count(*)::int as count from public.problem_sets')).rows[0].count;
    await recipient(async () => {
      for (const title of ['', '   ', 'x'.repeat(81)]) {
        await assert.rejects(rpc('import_shared_problem_set', [published.code, title, 1]), errorNamed('problem_set_title_invalid'));
      }
    });
    assert.equal((await db.query('select count(*)::int as count from public.problem_sets')).rows[0].count, countBefore);
  });

  await t.test('private edits require explicit republishing and imported copies retain their version', async () => {
    await owner(() => rpc('update_my_problem_set', [sourceId, 'Version two', 'A new public description']));
    assert.equal((await anonymous(() => rpc('get_shared_problem_set', [published.code]))).title, 'Original plan');
    const v2 = await owner(() => rpc('publish_my_problem_set', [sourceId, true]));
    assert.equal(v2.code, published.code);
    assert.equal(v2.version, 2);
    assert.equal(v2.items[1].annotation, 'PRIVATE_ANNOTATION');
    await recipient(async () => {
      await assert.rejects(rpc('import_shared_problem_set', [v2.code, 'Stale import', 1]), errorNamed('problem_set_share_version_changed'));
      const newId = await rpc('import_shared_problem_set', [v2.code, null, 2]);
      const current = (await db.query('select * from public.get_my_problem_set($1)', [newId])).rows;
      assert.equal(current[0].set_title, 'Version two');
      assert.equal(current[1].annotation_markdown, 'PRIVATE_ANNOTATION');
      const original = (await db.query('select * from public.get_my_problem_set($1)', [importedId])).rows;
      assert.equal(original[0].set_title, 'Original plan');
      assert.equal(original[0].set_description, published.description);
      assert.ok(original.every(row => row.annotation_markdown === ''));
    });
    await owner(async () => {
      await rpc('remove_problem_set_items', [sourceId, [sourceItems[0].item_id]]);
      assert.equal((await rpc('get_shared_problem_set', [v2.code])).items.length, 3);
      const v3 = await rpc('publish_my_problem_set', [sourceId]);
      assert.equal(v3.version, 3);
      assert.equal(v3.items.length, 2);
      assert.ok(v3.items.every(item => item.annotation === ''));
    });
  });

  await t.test('revocation stops future previews and imports but not personal copies', async () => {
    const paused = await owner(() => rpc('set_my_problem_set_share_active', [sourceId, false]));
    assert.equal(paused.isActive, false);
    await anonymous(() => assert.rejects(rpc('get_shared_problem_set', [published.code]), errorNamed('problem_set_share_not_found')));
    await recipient(async () => {
      await assert.rejects(rpc('import_shared_problem_set', [published.code]), errorNamed('problem_set_share_not_found'));
      assert.equal((await db.query('select * from public.get_my_problem_set($1)', [importedId])).rows.length, 3);
    });
    const restored = await owner(() => rpc('set_my_problem_set_share_active', [sourceId, true]));
    assert.equal(restored.version, 3);
    assert.equal(restored.code, published.code);
    await owner(() => rpc('archive_my_problem_set', [sourceId, true]));
    assert.equal((await anonymous(() => rpc('get_shared_problem_set', [published.code]))).items.length, 2);
  });

  await t.test('current document locations resolve by UUID and unavailable catalog entries remain in the complete list', async () => {
    await db.query("update public.document_registry set current_doc_id='school/moved' where document_uuid=$1", [uuids[2]]);
    await db.query("update public.document_aliases set is_current=false where document_uuid=$1", [uuids[2]]);
    await db.query("insert into public.document_aliases(doc_id,document_uuid,is_current) values ('school/moved',$1,true)", [uuids[2]]);
    await db.query("update public.document_catalog set doc_id='school/moved',permalink='/docs/school/moved' where document_uuid=$1", [uuids[2]]);
    await db.query('delete from public.document_catalog where document_uuid=$1', [uuids[1]]);
    const share = await anonymous(() => rpc('get_shared_problem_set', [published.code]));
    assert.equal(share.items[0].docId, 'school/moved');
    assert.equal(share.items[0].permalink, '/docs/school/moved');
    assert.equal(share.items[1].contentAvailable, false);
    assert.equal(share.items[1].title, 'Problem 2');
    await recipient(async () => {
      const id = await rpc('import_shared_problem_set', [published.code, null, 3]);
      const imported = (await db.query('select * from public.get_my_problem_set($1)', [id])).rows;
      assert.equal(imported.length, 2);
      assert.equal(imported[1].content_available, false);
      assert.equal(imported[1].progress_status, 'reviewing');
    });
  });

  await t.test('hard-deleted registry entries fail import atomically instead of truncating the set', async () => {
    await createDocument(uuids[3], 'school/temporary', 'Temporary problem');
    let temporaryId;
    let temporaryShare;
    await owner(async () => {
      temporaryId = await rpc('create_my_problem_set', ['Temporary plan']);
      await rpc('set_doc_problem_set_memberships', ['school/temporary', [temporaryId]]);
      temporaryShare = await rpc('publish_my_problem_set', [temporaryId]);
      const row = (await db.query('select * from public.get_my_problem_set($1)', [temporaryId])).rows[0];
      await rpc('remove_problem_set_items', [temporaryId, [row.item_id]]);
    });
    await db.query('delete from public.document_catalog where document_uuid=$1', [uuids[3]]);
    await db.query('delete from public.document_registry where document_uuid=$1', [uuids[3]]);
    const preview = await anonymous(() => rpc('get_shared_problem_set', [temporaryShare.code]));
    assert.equal(preview.items.length, 1);
    assert.equal(preview.items[0].contentAvailable, false);
    const before = (await db.query('select count(*)::int as count from public.problem_sets')).rows[0].count;
    await recipient(() => assert.rejects(rpc('import_shared_problem_set', [temporaryShare.code]), errorNamed('problem_set_share_item_unavailable')));
    assert.equal((await db.query('select count(*)::int as count from public.problem_sets')).rows[0].count, before);
  });

  await t.test('empty/system sets cannot be published, and imports enforce the existing set limit', async () => {
    await owner(async () => {
      const empty = await rpc('create_my_problem_set', ['Empty']);
      await assert.rejects(rpc('publish_my_problem_set', [empty]), errorNamed('problem_set_empty'));
      const system = (await db.query("select * from public.get_my_problem_sets() where kind='system_later'")).rows[0];
      await assert.rejects(rpc('publish_my_problem_set', [system.id]), errorNamed('problem_set_not_found'));
    });
    await db.query(`insert into public.problem_sets(owner_user_id,kind,title)
      select $1,'custom','Set ' || n from generate_series(1,100) n`, [charlie]);
    await asRole('authenticated', charlie, () => assert.rejects(
      rpc('import_shared_problem_set', [published.code]), errorNamed('problem_set_limit_reached'),
    ));
    assert.equal((await db.query('select count(*)::int as count from public.problem_sets where owner_user_id=$1', [charlie])).rows[0].count, 100);
  });

  await t.test('deleting the original stops access and retains imported content and attribution', async () => {
    await owner(() => rpc('delete_my_problem_set', [sourceId]));
    await anonymous(() => assert.rejects(rpc('get_shared_problem_set', [published.code]), errorNamed('problem_set_share_not_found')));
    await recipient(() => assert.rejects(rpc('import_shared_problem_set', [published.code]), errorNamed('problem_set_share_not_found')));
    await db.query('delete from public.problem_sets where id=$1', [sourceId]);
    await recipient(async () => {
      const rows = (await db.query('select * from public.get_my_problem_set($1)', [importedId])).rows;
      assert.equal(rows.length, 3);
      const provenance = (await db.query('select * from public.problem_set_imports where set_id=$1', [importedId])).rows[0];
      assert.equal(provenance.share_id, null);
      assert.equal(provenance.author_snapshot.displayName, published.author.displayName);
    });
  });

  await t.test('replaying the migration preserves published snapshots and imported sets', async () => {
    const before = (await db.query('select * from public.problem_set_shares order by id')).rows;
    const copies = (await db.query('select * from public.problem_set_imports order by set_id')).rows;
    await db.exec(migration);
    assert.deepEqual((await db.query('select * from public.problem_set_shares order by id')).rows, before);
    assert.deepEqual((await db.query('select * from public.problem_set_imports order by set_id')).rows, copies);
    await recipient(async () => {
      assert.equal((await db.query('select * from public.get_my_problem_set($1)', [importedId])).rows.length, 3);
    });
  });
});

test('the sharing migration can be applied after the current fresh-install baseline', async t => {
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
  await db.exec(migration);
  const privileges = (await db.query(`select
    has_function_privilege('anon','public.get_shared_problem_set(text)','execute') as public_read,
    has_function_privilege('anon','public.import_shared_problem_set(text,text,integer)','execute') as anonymous_import,
    has_table_privilege('authenticated','public.problem_set_shares','select') as direct_shares,
    has_function_privilege('authenticated','public.import_shared_problem_set(text,text,integer)','execute') as authenticated_import
  `)).rows[0];
  assert.deepEqual(privileges, {public_read: true, anonymous_import: false, direct_shares: false, authenticated_import: true});
});
