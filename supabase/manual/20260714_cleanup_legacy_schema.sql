-- Kai Project legacy schema cleanup (manual, one-time)
--
-- Run this file in Supabase Dashboard > SQL Editor only after:
--   1. taking a database backup;
--   2. confirming the current production migrations are already applied
--      (do not re-run src/services/schema.sql on an existing database);
--   3. confirming no older application build is still writing legacy tables.
--
-- The transaction intentionally avoids CASCADE. Unexpected dependencies make
-- the script fail and roll back instead of silently deleting dependent objects.

begin;

set local lock_timeout = '5s';
set local statement_timeout = '10min';

-- ── Legacy user_data -> item tables ──────────────────────────

do $$
begin
  if to_regclass('public.user_data') is null then
    raise notice 'Legacy table public.user_data not found; skipping data migration.';
    return;
  end if;

  if to_regclass('public.user_progress_items') is null
    or to_regclass('public.user_note_items') is null
    or to_regclass('public.document_registry') is null
    or to_regclass('public.document_aliases') is null
    or to_regprocedure('public.resolve_document_uuid(text)') is null then
    raise exception 'The current UUID study model is missing. Stop and verify the production migration.';
  end if;

  execute $sql_progress$
    insert into public.user_progress_items (
      user_id,
      doc_id,
      document_uuid,
      status,
      title,
      permalink,
      tags,
      review_count,
      client_updated_at,
      deleted_at,
      created_at,
      updated_at
    )
    select
      ud.user_id,
      kv.key,
      public.resolve_document_uuid(kv.key),
      kv.value->>'status',
      nullif(trim(kv.value->>'title'), ''),
      nullif(trim(kv.value->>'permalink'), ''),
      case
        when jsonb_typeof(kv.value->'tags') = 'array' then kv.value->'tags'
        else '[]'::jsonb
      end,
      greatest(
        0,
        case
          when coalesce(kv.value->>'reviewCount', '') ~ '^[0-9]+$'
            then (kv.value->>'reviewCount')::integer
          else 0
        end
      ),
      case
        when coalesce(kv.value->>'updatedAt', '') ~ '^[0-9]+$'
          then (kv.value->>'updatedAt')::bigint
        else (extract(epoch from coalesce(ud.updated_at, now())) * 1000)::bigint
      end,
      null::timestamptz,
      coalesce(ud.created_at, now()),
      coalesce(ud.updated_at, now())
    from public.user_data ud
    cross join lateral jsonb_each(coalesce(ud.progress, '{}'::jsonb)) kv
    where jsonb_typeof(kv.value) = 'object'
      and kv.value->>'status' in ('completed', 'reviewing')
    on conflict (user_id, doc_id)
    do update set
      status = excluded.status,
      title = excluded.title,
      permalink = excluded.permalink,
      tags = excluded.tags,
      review_count = excluded.review_count,
      client_updated_at = excluded.client_updated_at,
      deleted_at = excluded.deleted_at,
      updated_at = now()
    where excluded.client_updated_at > user_progress_items.client_updated_at;
  $sql_progress$;

  execute $sql_notes$
    insert into public.user_note_items (
      user_id,
      doc_id,
      document_uuid,
      content,
      client_updated_at,
      deleted_at,
      created_at,
      updated_at
    )
    select
      ud.user_id,
      kv.key,
      public.resolve_document_uuid(kv.key),
      kv.value->>'content',
      case
        when coalesce(kv.value->>'updatedAt', '') ~ '^[0-9]+$'
          then (kv.value->>'updatedAt')::bigint
        else (extract(epoch from coalesce(ud.updated_at, now())) * 1000)::bigint
      end,
      null::timestamptz,
      coalesce(ud.created_at, now()),
      coalesce(ud.updated_at, now())
    from public.user_data ud
    cross join lateral jsonb_each(coalesce(ud.notes, '{}'::jsonb)) kv
    where jsonb_typeof(kv.value) = 'object'
      and nullif(trim(kv.value->>'content'), '') is not null
    on conflict (user_id, doc_id)
    do update set
      content = excluded.content,
      client_updated_at = excluded.client_updated_at,
      deleted_at = excluded.deleted_at,
      updated_at = now()
    where excluded.client_updated_at > user_note_items.client_updated_at;
  $sql_notes$;
end;
$$;

-- Abort instead of dropping user_data if any eligible legacy item is missing.
do $$
declare
  v_missing_progress bigint := 0;
  v_missing_notes bigint := 0;
begin
  if to_regclass('public.user_data') is null then
    return;
  end if;

  execute $sql$
    select count(*)
    from public.user_data ud
    cross join lateral jsonb_each(coalesce(ud.progress, '{}'::jsonb)) kv
    where jsonb_typeof(kv.value) = 'object'
      and kv.value->>'status' in ('completed', 'reviewing')
      and not exists (
        select 1
        from public.user_progress_items current_item
        where current_item.user_id = ud.user_id
          and current_item.doc_id = kv.key
      )
  $sql$ into v_missing_progress;

  execute $sql$
    select count(*)
    from public.user_data ud
    cross join lateral jsonb_each(coalesce(ud.notes, '{}'::jsonb)) kv
    where jsonb_typeof(kv.value) = 'object'
      and nullif(trim(kv.value->>'content'), '') is not null
      and not exists (
        select 1
        from public.user_note_items current_item
        where current_item.user_id = ud.user_id
          and current_item.doc_id = kv.key
      )
  $sql$ into v_missing_notes;

  if v_missing_progress > 0 or v_missing_notes > 0 then
    raise exception
      'Legacy user_data verification failed: % progress rows and % note rows are missing.',
      v_missing_progress,
      v_missing_notes;
  end if;
end;
$$;

-- ── One-time compatibility practice events ───────────────────

insert into public.user_practice_events (
  event_id, user_id, doc_id, document_uuid, event_type, occurred_at
)
select
  uuid_generate_v5(
    uuid_ns_url(),
    'kai-progress:' || upi.user_id::text || ':' || upi.doc_id || ':' || upi.client_updated_at::text
  ),
  upi.user_id,
  upi.doc_id,
  upi.document_uuid,
  'practice',
  to_timestamp(upi.client_updated_at / 1000.0)
from public.user_progress_items upi
where upi.deleted_at is null
  and upi.status in ('completed', 'reviewing')
  and upi.client_updated_at >= (extract(epoch from now() - interval '6 months') * 1000)::bigint
on conflict (user_id, event_id) do nothing;

-- ── Legacy leaderboard profiles -> unified public profiles ───

do $$
declare
  v_user record;
  v_profile public.user_public_profiles%rowtype;
  v_name text;
  v_normalized text;
  v_discriminator integer;
begin
  if to_regclass('public.user_leaderboard_profiles') is null then
    raise notice 'Legacy leaderboard profile table not found; skipping migration.';
    return;
  end if;

  if to_regclass('public.user_public_profiles') is null
    or to_regprocedure('public.ensure_user_public_profile(uuid)') is null then
    raise exception 'Current public profile schema is missing. Stop and verify the production migration.';
  end if;

  for v_user in
    select
      lp.user_id as id,
      lp.display_name
    from public.user_leaderboard_profiles lp
  loop
    if exists (
      select 1 from public.user_public_profiles p where p.user_id = v_user.id
    ) then
      continue;
    end if;

    v_profile := public.ensure_user_public_profile(v_user.id);
    if v_user.display_name is null then
      continue;
    end if;

    v_name := regexp_replace(v_user.display_name, '#', '', 'g');
    begin
      v_name := public.validate_public_nickname(v_name);
    exception when others then
      v_name := 'Kai友';
    end;
    v_normalized := public.normalize_public_nickname(v_name);
    v_discriminator := v_profile.discriminator;

    while exists (
      select 1
      from public.user_public_profiles p
      where p.nickname_normalized = v_normalized
        and p.discriminator = v_discriminator
        and p.user_id <> v_user.id
    ) loop
      v_discriminator := floor(random() * 100000)::integer;
    end loop;

    update public.user_public_profiles
    set nickname = v_name,
        nickname_normalized = v_normalized,
        discriminator = v_discriminator,
        nickname_confirmed_at = case
          when position('#' in v_user.display_name) > 0 then null
          else now()
        end,
        nickname_changed_at = null
    where user_id = v_user.id;
  end loop;

  if exists (
    select 1
    from public.user_leaderboard_profiles old_profile
    left join public.user_public_profiles current_profile
      on current_profile.user_id = old_profile.user_id
    where current_profile.user_id is null
  ) then
    raise exception 'Legacy leaderboard profile verification failed.';
  end if;
end;
$$;

-- ── Remove legacy objects ─────────────────────────────────────

drop function if exists public.get_weekly_leaderboard();
drop function if exists public.leaderboard_default_display_name(uuid);
drop function if exists public.register_api_request(uuid, timestamptz, integer, timestamptz, integer);
drop function if exists public.reserve_ai_message(uuid, text);

drop table if exists public.user_data;
drop table if exists public.user_leaderboard_profiles;
drop table if exists public.api_usage_months;

alter table if exists public.api_access_requests
  drop constraint if exists api_access_requests_expected_monthly_check,
  drop column if exists expected_monthly_requests;

alter table if exists public.api_keys
  drop constraint if exists api_keys_monthly_quota_check,
  drop column if exists monthly_quota;

-- These single-column indexes duplicate indexes already created by UNIQUE
-- constraints. The reservation session lookup is covered by the leading
-- column of UNIQUE (session_id, idempotency_key).
drop index if exists public.idx_api_access_requests_user_id;
drop index if exists public.idx_agent_user_links_user_id;
drop index if exists public.idx_user_public_profiles_public_id;
drop index if exists public.idx_ai_usage_reservations_session;

commit;

-- Deliberately retained if present:
--   public.user_data_legacy_backup
-- Delete that backup only after your chosen retention period.
