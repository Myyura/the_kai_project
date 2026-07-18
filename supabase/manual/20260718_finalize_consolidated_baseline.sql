-- Kai Project consolidated-baseline production cleanup (manual, one-time)
--
-- Run in Supabase Dashboard > SQL Editor after the successful deployment that
-- applied migrations 20260718000100 through 20260718000300.
--
-- This script does not delete study data, notes, progress, practice events,
-- problem sets, submissions, accounts, or document catalog rows. It only:
--   1. removes the retired leaderboard visibility setting;
--   2. removes an unused operational-advice table;
--   3. renames catalog constraints/indexes/triggers left with legacy names;
--   4. removes the three squashed versions from Supabase's migration ledger.

begin;

set local lock_timeout = '5s';
set local statement_timeout = '10min';

do $$
declare
  v_body_column_count integer;
begin
  if to_regclass('public.document_catalog') is null then
    raise exception 'public.document_catalog is missing; stop and verify the production migration.';
  end if;
  if to_regclass('public.exam_documents') is not null then
    raise exception 'public.exam_documents still exists; stop and verify the catalog cutover.';
  end if;
  if to_regclass('public.document_registry') is null
    or to_regclass('public.document_aliases') is null
    or to_regclass('public.user_note_revisions') is null then
    raise exception 'The UUID study model is incomplete; stop without cleaning anything.';
  end if;

  select count(*)::integer into v_body_column_count
  from information_schema.columns
  where table_schema = 'public'
    and table_name = 'document_catalog'
    and column_name in (
      'author_markdown',
      'description_markdown',
      'kai_markdown',
      'full_markdown'
    );
  if v_body_column_count <> 0 then
    raise exception 'Markdown body columns still exist in document_catalog; stop and verify the cutover.';
  end if;
end;
$$;

-- Remove the retired per-user leaderboard visibility control while preserving
-- all profile identities and nickname history.
drop function if exists public.confirm_or_change_my_nickname(text);
drop function if exists public.get_my_public_profile();

drop index if exists public.idx_user_public_profiles_leaderboard;
alter table public.user_public_profiles
  drop column if exists leaderboard_visible;

create function public.get_my_public_profile()
returns table (
  public_id uuid,
  nickname text,
  discriminator integer,
  display_name text,
  nickname_confirmed boolean,
  nickname_changed_at timestamptz,
  next_nickname_change_at timestamptz
) as $$
declare
  v_profile public.user_public_profiles%rowtype;
begin
  v_profile := public.ensure_user_public_profile(auth.uid());
  return query select
    v_profile.public_id,
    v_profile.nickname,
    v_profile.discriminator,
    public.format_public_nickname(v_profile.nickname, v_profile.discriminator),
    v_profile.nickname_confirmed_at is not null,
    v_profile.nickname_changed_at,
    case
      when v_profile.nickname_changed_at is null then null
      else v_profile.nickname_changed_at + interval '30 days'
    end;
end;
$$ language plpgsql security definer
set search_path = '';

create function public.confirm_or_change_my_nickname(p_nickname text)
returns table (
  public_id uuid,
  nickname text,
  discriminator integer,
  display_name text,
  nickname_confirmed boolean,
  nickname_changed_at timestamptz,
  next_nickname_change_at timestamptz
) as $$
declare
  v_user_id uuid := auth.uid();
  v_profile public.user_public_profiles%rowtype;
  v_name text := public.validate_public_nickname(p_nickname);
  v_normalized text := public.normalize_public_nickname(p_nickname);
  v_discriminator integer;
  v_attempt integer := 0;
  v_is_change boolean;
begin
  v_profile := public.ensure_user_public_profile(v_user_id);
  v_is_change := v_name <> v_profile.nickname or v_normalized <> v_profile.nickname_normalized;

  if v_is_change
    and v_profile.nickname_confirmed_at is not null
    and v_profile.nickname_changed_at is not null
    and v_profile.nickname_changed_at + interval '30 days' > now() then
    raise exception 'nickname_change_cooldown' using errcode = '55000';
  end if;

  v_discriminator := v_profile.discriminator;
  if v_is_change and exists (
    select 1 from public.user_public_profiles profile
    where profile.nickname_normalized = v_normalized
      and profile.discriminator = v_discriminator
      and profile.user_id <> v_user_id
  ) then
    loop
      v_discriminator := floor(random() * 100000)::integer;
      exit when not exists (
        select 1 from public.user_public_profiles profile
        where profile.nickname_normalized = v_normalized
          and profile.discriminator = v_discriminator
      );
      v_attempt := v_attempt + 1;
      if v_attempt >= 200 then
        raise exception 'nickname_discriminator_exhausted' using errcode = '54000';
      end if;
    end loop;
  end if;

  update public.user_public_profiles profile set
    nickname = v_name,
    nickname_normalized = v_normalized,
    discriminator = v_discriminator,
    nickname_confirmed_at = coalesce(profile.nickname_confirmed_at, now()),
    nickname_changed_at = case
      when profile.nickname_confirmed_at is null or v_is_change then now()
      else profile.nickname_changed_at
    end
  where profile.user_id = v_user_id;

  return query select * from public.get_my_public_profile();
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function public.get_my_public_profile() from public, anon;
revoke execute on function public.confirm_or_change_my_nickname(text) from public, anon;
grant execute on function public.get_my_public_profile() to authenticated;
grant execute on function public.confirm_or_change_my_nickname(text) to authenticated;

-- This table contains operational recommendations only, never user records.
drop table if exists public.operational_retention_policies;

do $$
declare
  v_old text;
  v_new text;
begin
  for v_old, v_new in
    select * from (values
      ('exam_documents_pkey', 'document_catalog_pkey'),
      ('exam_documents_type_check', 'document_catalog_type_check'),
      ('exam_documents_year_check', 'document_catalog_year_check'),
      ('exam_documents_tags_is_array', 'document_catalog_tags_is_array'),
      ('exam_documents_school_tags_is_array', 'document_catalog_school_tags_is_array'),
      ('exam_documents_learning_tags_is_array', 'document_catalog_learning_tags_is_array'),
      ('exam_documents_subject_ids_is_array', 'document_catalog_subject_ids_is_array'),
      ('exam_documents_subsubject_ids_is_array', 'document_catalog_subsubject_ids_is_array'),
      ('exam_documents_topic_ids_is_array', 'document_catalog_topic_ids_is_array'),
      ('exam_documents_document_uuid_fkey', 'document_catalog_document_uuid_fkey')
    ) as names(old_name, new_name)
  loop
    if exists (
      select 1 from pg_constraint
      where conrelid = 'public.document_catalog'::regclass and conname = v_old
    ) and not exists (
      select 1 from pg_constraint
      where conrelid = 'public.document_catalog'::regclass and conname = v_new
    ) then
      execute format(
        'alter table public.document_catalog rename constraint %I to %I',
        v_old,
        v_new
      );
    end if;
  end loop;

  for v_old, v_new in
    select * from (values
      ('idx_exam_documents_catalog', 'idx_document_catalog_discovery'),
      ('idx_exam_documents_year', 'idx_document_catalog_year'),
      ('idx_exam_documents_tags', 'idx_document_catalog_tags'),
      ('idx_exam_documents_school_tags', 'idx_document_catalog_school_tags'),
      ('idx_exam_documents_subject_ids', 'idx_document_catalog_subject_ids'),
      ('idx_exam_documents_subsubject_ids', 'idx_document_catalog_subsubject_ids'),
      ('idx_exam_documents_topic_ids', 'idx_document_catalog_topic_ids'),
      ('idx_exam_documents_uuid', 'idx_document_catalog_uuid')
    ) as names(old_name, new_name)
  loop
    if to_regclass('public.' || quote_ident(v_old)) is not null
      and to_regclass('public.' || quote_ident(v_new)) is null then
      execute format('alter index public.%I rename to %I', v_old, v_new);
    end if;
  end loop;

  if exists (
    select 1 from pg_trigger
    where tgrelid = 'public.document_catalog'::regclass
      and tgname = 'update_exam_documents_updated_at'
      and not tgisinternal
  ) and not exists (
    select 1 from pg_trigger
    where tgrelid = 'public.document_catalog'::regclass
      and tgname = 'update_document_catalog_updated_at'
      and not tgisinternal
  ) then
    alter trigger update_exam_documents_updated_at
      on public.document_catalog rename to update_document_catalog_updated_at;
  end if;
end;
$$;

-- The migration code is now part of src/services/schema.sql. Removing these
-- ledger entries prevents future `supabase db push` runs from treating the
-- deleted local migration files as a history mismatch. No application table is
-- touched by this operation.
delete from supabase_migrations.schema_migrations
where version in (
  '20260718000100',
  '20260718000200',
  '20260718000300'
);

commit;

-- Expected core result: document_catalog_exists = true,
-- legacy_catalog_exists = false, squashed_migration_count = 0.
-- If legacy_cleanup_needed is true, run the separate 20260714 legacy cleanup
-- after reviewing its backup requirements.
select
  to_regclass('public.document_catalog') is not null as document_catalog_exists,
  to_regclass('public.exam_documents') is not null as legacy_catalog_exists,
  (
    select count(*)
    from supabase_migrations.schema_migrations
    where version in (
      '20260718000100',
      '20260718000200',
      '20260718000300'
    )
  ) as squashed_migration_count,
  (
    to_regclass('public.user_data') is not null
    or to_regclass('public.user_leaderboard_profiles') is not null
    or to_regclass('public.api_usage_months') is not null
    or to_regprocedure('public.get_weekly_leaderboard()') is not null
    or to_regprocedure('public.leaderboard_default_display_name(uuid)') is not null
    or to_regprocedure(
      'public.register_api_request(uuid,timestamp with time zone,integer,timestamp with time zone,integer)'
    ) is not null
    or to_regprocedure('public.reserve_ai_message(uuid,text)') is not null
    or exists (
      select 1 from information_schema.columns
      where table_schema = 'public'
        and (
          (table_name = 'api_access_requests' and column_name = 'expected_monthly_requests')
          or (table_name = 'api_keys' and column_name = 'monthly_quota')
        )
    )
    or to_regclass('public.idx_api_access_requests_user_id') is not null
    or to_regclass('public.idx_agent_user_links_user_id') is not null
    or to_regclass('public.idx_user_public_profiles_public_id') is not null
    or to_regclass('public.idx_ai_usage_reservations_session') is not null
  ) as legacy_cleanup_needed,
  to_regclass('public.user_data') is not null as legacy_user_data_exists,
  to_regclass('public.user_leaderboard_profiles') is not null
    as legacy_leaderboard_profiles_exists,
  to_regclass('public.api_usage_months') is not null
    as legacy_api_usage_months_exists;
