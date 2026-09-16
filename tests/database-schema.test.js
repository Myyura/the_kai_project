const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {PGlite} = require('@electric-sql/pglite');
const {uuid_ossp} = require('@electric-sql/pglite/contrib/uuid_ossp');

const schema = fs.readFileSync(path.resolve(__dirname, '../src/services/schema.sql'), 'utf8');
const alice = '10000000-0000-4000-8000-000000000001';
const bob = '10000000-0000-4000-8000-000000000002';
const documentUuid = '20000000-0000-4000-8000-000000000001';

test('the current baseline initializes a working Supabase application from an empty database', async t => {
  const db = new PGlite({extensions: {uuid_ossp}});
  t.after(() => db.close());
  // Supabase owns these roles and auth objects. Deliberately omit its default
  // public-table grants: the application baseline must provide its own grants.
  await db.exec(`
    create role anon;
    create role authenticated;
    create role service_role bypassrls;
    create schema auth;
    create table auth.users (id uuid primary key, created_at timestamptz not null default now());
    create function auth.uid() returns uuid language sql stable as $$
      select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid
    $$;
    grant usage on schema public to anon, authenticated, service_role;
    grant usage on schema auth to authenticated, service_role;
  `);
  await db.exec(schema);
  await db.query('insert into auth.users (id) values ($1), ($2)', [alice, bob]);
  const asRole = async (role, userId, action) => {
    assert.ok(['anon', 'authenticated', 'service_role'].includes(role));
    await db.exec(`set role ${role}`);
    await db.query("select set_config('request.jwt.claim.sub', $1, false)", [userId || '']);
    try {return await action();} finally {
      await db.exec('reset role');
      await db.query("select set_config('request.jwt.claim.sub', '', false)");
    }
  };

  await t.test('creates the current submission protocol', async () => {
    const columns = (await db.query("select column_name from information_schema.columns where table_schema='public' and table_name='content_submissions'")).rows.map(row => row.column_name);
    for (const column of ['experience_data', 'admission_data', 'correction_base_sha', 'correction_patch', 'target_document_uuid']) assert.ok(columns.includes(column));
  });

  await t.test('initial model pricing covers both credit pools', async () => {
    const prices = (await db.query(`select model, credit_pool,
      input_micro_usd_per_mtok::int as input, cached_input_micro_usd_per_mtok::int as cached,
      output_micro_usd_per_mtok::int as output from public.ai_model_prices order by model`)).rows;
    assert.deepEqual(prices, [
      {model: 'gpt-5.3-codex-spark', credit_pool: 'standard', input: 1750000, cached: 175000, output: 14000000},
      {model: 'gpt-5.5', credit_pool: 'premium', input: 5000000, cached: 500000, output: 30000000},
    ]);
  });

  await t.test('new accounts can confirm a nickname and read their public profile', async () => {
    await asRole('authenticated', alice, async () => {
      const result = await db.query("select * from public.confirm_or_change_my_nickname('Kai Tester')");
      assert.equal(result.rows[0].nickname, 'Kai Tester');
      assert.equal(result.rows[0].nickname_confirmed, true);
      assert.match(result.rows[0].display_name, /^Kai Tester #[0-9]{5}$/);
    });
  });

  await t.test('aliases share a stable UUID and note revisions remain private', async () => {
    await db.query('insert into public.document_registry(document_uuid,current_doc_id) values ($1,$2)', [documentUuid, 'school/current']);
    await db.query('insert into public.document_aliases(doc_id,document_uuid,is_current) values ($1,$2,true),($3,$2,false)', ['school/current', documentUuid, 'school/old']);
    await db.query(`insert into public.document_catalog(doc_id,document_uuid,source_path,title,permalink,content_hash,content_path)
      values ('school/current',$1,'docs/school/current.md','Test exam','/docs/school/current','hash',$2)`, [documentUuid, `/api-content/v1/documents/${documentUuid}.json`]);
    await asRole('authenticated', alice, async () => {
      const inserted = await db.query('insert into public.user_note_items(user_id,doc_id,content) values ($1,$2,$3) returning document_uuid,version', [alice, 'school/old', 'First note']);
      assert.equal(inserted.rows[0].document_uuid, documentUuid);
      await db.query('update public.user_note_items set content=$1 where document_uuid=$2', ['Updated note', documentUuid]);
      const revisions = await db.query('select content from public.user_note_revisions order by version');
      assert.deepEqual(revisions.rows.map(row => row.content), ['First note']);
      const current = (await db.query('select content,version from public.user_note_items')).rows[0];
      assert.equal(current.content, 'Updated note');
      assert.equal(Number(current.version), 2);
    });
    await asRole('authenticated', bob, async () => {
      assert.equal((await db.query('select * from public.user_note_items')).rows.length, 0);
      assert.equal((await db.query('select * from public.user_note_revisions')).rows.length, 0);
      await assert.rejects(db.query('insert into public.user_note_items(user_id,doc_id,content) values ($1,$2,$3)', [alice, 'school/current', 'Forbidden']), error => error.code === '42501');
    });
  });

  await t.test('private problem sets resolve old and current paths to one saved item', async () => {
    await asRole('authenticated', alice, async () => {
      const setId = (await db.query("select public.create_my_problem_set('Study plan') as id")).rows[0].id;
      await db.query('select public.set_doc_problem_set_memberships($1,$2)', ['school/old', [setId]]);
      await db.query('select public.set_doc_problem_set_memberships($1,$2)', ['school/current', [setId]]);
      const sets = (await db.query('select * from public.get_my_problem_sets($1)', ['school/current'])).rows;
      assert.equal(sets.find(row => row.id === setId).contains_doc, true);
      assert.equal(Number(sets.find(row => row.id === setId).item_count), 1);
      assert.equal((await db.query('select * from public.get_my_problem_set($1)', [setId])).rows.length, 1);
    });
  });

  await t.test('service-role submissions support all types and experience acceptance does not earn solution points', async () => {
    await asRole('service_role', null, async () => {
      for (const kind of ['external', 'internal']) {
        await db.query(`insert into public.content_submissions(user_id,submission_type,status,title,cla_accepted_at,experience_data)
          values ($1,'experience','converted','Test story',now(),$2)`, [alice, {kind, title: 'Test story'}]);
      }
      await db.query(`insert into public.content_submissions(user_id,submission_type,status,title,cla_accepted_at,admission_data)
        values ($1,'admission_data','review_created','Admission review',now(),$2)`, [alice, {admissionYear: 2027}]);
      await db.query(`insert into public.content_submissions(user_id,submission_type,status,title,cla_accepted_at)
        values ($1,'new_solution','converted','Solution',now())`, [alice]);
      await db.query(`insert into public.content_submissions(user_id,submission_type,status,title,cla_accepted_at,correction_base_sha)
        values ($1,'correction','issue_created','Correction',now(),$2)`, [alice, 'a'.repeat(40)]);
      const reputation = (await db.query('select * from public.refresh_user_reputation($1)', [alice])).rows[0];
      assert.equal(reputation.accepted_solution_count, 1);
      assert.equal(reputation.converted_submission_count, 1);
      assert.equal(reputation.submitted_correction_issue_count, 1);
      await assert.rejects(db.query("update public.content_submissions set status='converted' where submission_type='admission_data'"), error => error.code === '23514');
      await assert.rejects(db.query(`insert into public.content_submissions(user_id,submission_type,title,cla_accepted_at) values ($1,'experience','Empty story',now())`, [alice]), error => error.code === '23514');
    });
  });

  await t.test('frontend roles cannot read the private submission inbox or invoke server-only RPCs', async () => {
    for (const role of ['anon', 'authenticated']) {
      await asRole(role, role === 'authenticated' ? alice : null, async () => {
        await assert.rejects(db.query('select * from public.content_submissions'), error => error.code === '42501');
        await assert.rejects(db.query('select * from public.api_keys'), error => error.code === '42501');
      });
    }
    const permissions = (await db.query(`select
      has_function_privilege('anon','public.get_practice_leaderboard(text)','execute') as anonymous_leaderboard,
      has_function_privilege('authenticated','public.register_api_request(uuid,timestamptz,integer)','execute') as user_rate_limit,
      has_function_privilege('service_role','public.register_api_request(uuid,timestamptz,integer)','execute') as server_rate_limit`)).rows[0];
    assert.deepEqual(permissions, {anonymous_leaderboard: false, user_rate_limit: false, server_rate_limit: true});
  });

  await t.test('accidentally rerunning the fresh-install baseline cannot overwrite existing data', async () => {
    const count = (await db.query('select count(*)::int as count from public.content_submissions')).rows[0].count;
    await assert.rejects(db.exec(schema), error => error.code === '42P07');
    await db.exec('rollback');
    assert.equal((await db.query('select count(*)::int as count from public.content_submissions')).rows[0].count, count);
  });
});
