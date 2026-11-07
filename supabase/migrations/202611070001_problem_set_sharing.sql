-- Cloud share codes publish an explicit snapshot of a private custom set.
-- Run once on an existing installation; schema.sql includes the same objects
-- for a fresh installation. No existing problem sets or progress are changed.
begin;

create table if not exists public.problem_set_shares (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  set_id uuid not null unique references public.problem_sets(id) on delete cascade,
  code text not null unique,
  version integer not null default 1 check (version >= 1),
  title text not null check (char_length(trim(title)) between 1 and 80),
  description text not null default '' check (char_length(description) <= 2000),
  author_snapshot jsonb not null check (jsonb_typeof(author_snapshot) = 'object'),
  items_snapshot jsonb not null check (
    jsonb_typeof(items_snapshot) = 'array'
    and jsonb_array_length(items_snapshot) between 1 and 2000
  ),
  include_annotations boolean not null default false,
  is_active boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  constraint problem_set_shares_code_check check (
    code ~ '^KAI-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$'
  )
);

-- Independent copies retain attribution even if the original share is removed.
create table if not exists public.problem_set_imports (
  set_id uuid primary key references public.problem_sets(id) on delete cascade,
  owner_user_id uuid not null references auth.users(id) on delete cascade,
  share_id uuid references public.problem_set_shares(id) on delete set null,
  share_code text not null,
  share_version integer not null check (share_version >= 1),
  source_title text not null,
  author_snapshot jsonb not null,
  imported_at timestamptz not null default now()
);

alter table public.problem_set_shares enable row level security;
alter table public.problem_set_imports enable row level security;
-- Shares are accessible exclusively through the bounded RPCs, never enumerable.
revoke all on public.problem_set_shares from public, anon, authenticated;
revoke all on public.problem_set_imports from public, anon, authenticated;
grant all on public.problem_set_shares, public.problem_set_imports to service_role;
grant select on public.problem_set_imports to authenticated;
drop policy if exists problem_set_imports_select_own on public.problem_set_imports;
create policy problem_set_imports_select_own on public.problem_set_imports
  for select to authenticated using (owner_user_id = auth.uid());

create or replace function public.normalize_problem_set_share_code(p_code text)
returns text language sql immutable set search_path = ''
as $function$
  select case when value ~ '^KAI[A-HJ-NP-Z2-9]{12}$' then
    'KAI-' || substr(value, 4, 4) || '-' || substr(value, 8, 4) || '-' || substr(value, 12, 4)
    else null end
  from (select regexp_replace(upper(trim(p_code)), '[[:space:]—–-]', '', 'g') as value
    where char_length(coalesce(p_code, '')) <= 100) normalized;
$function$;

create or replace function public.generate_problem_set_share_code()
returns text language plpgsql volatile set search_path = ''
as $function$
declare
  -- The last 60 UUID v4 bits exclude the fixed version and variant bits.
  v_bits bigint := ('x' || right(replace(pg_catalog.gen_random_uuid()::text, '-', ''), 15))::bit(60)::bigint;
  v_alphabet text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  v_code text := '';
  i integer;
begin
  for i in 0..11 loop
    v_code := v_code || substr(v_alphabet, ((v_bits >> (i * 5)) & 31)::integer + 1, 1);
  end loop;
  return 'KAI-' || substr(v_code, 1, 4) || '-' || substr(v_code, 5, 4) || '-' || substr(v_code, 9, 4);
end;
$function$;

create or replace function public.problem_set_share_payload(p_share public.problem_set_shares)
returns jsonb language sql stable security definer set search_path = ''
as $function$
  select jsonb_build_object(
    'code', p_share.code, 'version', p_share.version,
    'title', p_share.title, 'description', p_share.description,
    'author', p_share.author_snapshot, 'isActive', p_share.is_active,
    'includeAnnotations', p_share.include_annotations, 'publishedAt', p_share.published_at,
    'items', coalesce((
      select jsonb_agg(jsonb_build_object(
        'documentUuid', entry.value->>'documentUuid',
        'docId', coalesce(document.doc_id, registry.current_doc_id, entry.value->>'docId'),
        'title', entry.value->>'title',
        'permalink', coalesce(document.permalink, entry.value->>'permalink'),
        'tags', entry.value->'tags',
        'annotation', entry.value->>'annotation',
        'contentAvailable', document.document_uuid is not null,
        'progressStatus', coalesce(progress.status, 'not_started')
      ) order by entry.ordinality)
      from jsonb_array_elements(p_share.items_snapshot) with ordinality entry(value, ordinality)
      left join public.document_registry registry on registry.document_uuid = (entry.value->>'documentUuid')::uuid
      left join public.document_catalog document on document.document_uuid = registry.document_uuid
      left join public.user_progress_items progress
        on progress.document_uuid = registry.document_uuid and progress.user_id = auth.uid()
        and progress.deleted_at is null
    ), '[]'::jsonb)
  );
$function$;

create or replace function public.get_my_problem_set_share(p_set_id uuid)
returns jsonb language plpgsql security definer set search_path = ''
as $function$
declare
  v_share public.problem_set_shares%rowtype;
begin
  if auth.uid() is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  if not exists (select 1 from public.problem_sets s where s.id = p_set_id
    and s.owner_user_id = auth.uid() and s.kind = 'custom' and s.deleted_at is null) then
    raise exception 'problem_set_not_found' using errcode = 'P0002';
  end if;
  select * into v_share from public.problem_set_shares where set_id = p_set_id;
  if not found then return null; end if;
  return public.problem_set_share_payload(v_share);
end;
$function$;

create or replace function public.publish_my_problem_set(p_set_id uuid, p_include_annotations boolean default false)
returns jsonb language plpgsql security definer set search_path = ''
as $function$
declare
  v_set public.problem_sets%rowtype;
  v_profile public.user_public_profiles%rowtype;
  v_share public.problem_set_shares%rowtype;
  v_items jsonb;
  v_author jsonb;
  v_attempt integer := 0;
begin
  if auth.uid() is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  select * into v_set from public.problem_sets s where s.id = p_set_id
    and s.owner_user_id = auth.uid() and s.kind = 'custom' and s.deleted_at is null for update;
  if not found then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;

  select coalesce(jsonb_agg(jsonb_build_object(
    'documentUuid', item.document_uuid,
    'docId', coalesce(document.doc_id, item.doc_id),
    'title', coalesce(document.title, nullif(item.title_snapshot, ''), item.doc_id),
    'permalink', coalesce(document.permalink, item.permalink_snapshot),
    'tags', coalesce(document.tags, item.tags_snapshot),
    'annotation', case when coalesce(p_include_annotations, false) then item.annotation_markdown else '' end
  ) order by item.position, item.created_at, item.id), '[]'::jsonb)
  into v_items from public.problem_set_items item
  left join public.document_catalog document on document.document_uuid = item.document_uuid
  where item.set_id = p_set_id;
  if jsonb_array_length(v_items) = 0 then raise exception 'problem_set_empty' using errcode = '22023'; end if;
  if jsonb_array_length(v_items) > 2000 then raise exception 'problem_set_item_limit_reached' using errcode = '54000'; end if;

  v_profile := public.ensure_user_public_profile(auth.uid());
  v_author := jsonb_build_object('publicId', v_profile.public_id,
    'displayName', public.format_public_nickname(v_profile.nickname, v_profile.discriminator));
  update public.problem_set_shares set title = v_set.title, description = v_set.description,
    author_snapshot = v_author, items_snapshot = v_items,
    include_annotations = coalesce(p_include_annotations, false),
    version = version + 1, is_active = true, published_at = now()
    where set_id = p_set_id returning * into v_share;
  if not found then
    loop
      v_attempt := v_attempt + 1;
      insert into public.problem_set_shares(set_id, code, title, description, author_snapshot, items_snapshot, include_annotations)
      values (p_set_id, public.generate_problem_set_share_code(), v_set.title, v_set.description,
        v_author, v_items, coalesce(p_include_annotations, false))
      on conflict (code) do nothing returning * into v_share;
      exit when found;
      if v_attempt >= 10 then raise exception 'problem_set_share_code_unavailable' using errcode = '54000'; end if;
    end loop;
  end if;
  return public.problem_set_share_payload(v_share);
end;
$function$;

create or replace function public.set_my_problem_set_share_active(p_set_id uuid, p_active boolean)
returns jsonb language plpgsql security definer set search_path = ''
as $function$
declare
  v_share public.problem_set_shares%rowtype;
begin
  if auth.uid() is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  perform 1 from public.problem_sets s where s.id = p_set_id and s.owner_user_id = auth.uid()
    and s.kind = 'custom' and s.deleted_at is null for update;
  if not found then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;
  update public.problem_set_shares set is_active = coalesce(p_active, false)
    where set_id = p_set_id returning * into v_share;
  if not found then raise exception 'problem_set_share_not_found' using errcode = 'P0002'; end if;
  return public.problem_set_share_payload(v_share);
end;
$function$;

create or replace function public.get_shared_problem_set(p_code text)
returns jsonb language plpgsql stable security definer set search_path = ''
as $function$
declare
  v_share public.problem_set_shares%rowtype;
  v_code text := public.normalize_problem_set_share_code(p_code);
begin
  select share.* into v_share from public.problem_set_shares share
  join public.problem_sets s on s.id = share.set_id
  where share.code = v_code and share.is_active and s.deleted_at is null;
  if not found then raise exception 'problem_set_share_not_found' using errcode = 'P0002'; end if;
  return public.problem_set_share_payload(v_share);
end;
$function$;

create or replace function public.import_shared_problem_set(p_code text, p_title text default null, p_expected_version integer default null)
returns uuid language plpgsql security definer set search_path = ''
as $function$
declare
  v_share public.problem_set_shares%rowtype;
  v_set_id uuid;
  v_code text := public.normalize_problem_set_share_code(p_code);
begin
  if auth.uid() is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  -- Hold the published version and source lifetime until the atomic import ends.
  select share.* into v_share from public.problem_set_shares share
  join public.problem_sets s on s.id = share.set_id
  where share.code = v_code and share.is_active and s.deleted_at is null
  for share of s, share;
  if not found then raise exception 'problem_set_share_not_found' using errcode = 'P0002'; end if;
  if p_expected_version is not null and p_expected_version <> v_share.version then
    raise exception 'problem_set_share_version_changed' using errcode = '40001';
  end if;
  -- Do not silently lose a published item if a registry entry was hard-deleted.
  if exists (
    select 1 from jsonb_array_elements(v_share.items_snapshot) entry
    left join public.document_registry registry on registry.document_uuid = (entry->>'documentUuid')::uuid
    where registry.document_uuid is null
  ) then raise exception 'problem_set_share_item_unavailable' using errcode = 'P0002'; end if;

  v_set_id := public.create_my_problem_set(coalesce(p_title, v_share.title), v_share.description);
  insert into public.problem_set_items(set_id, doc_id, document_uuid, position,
    annotation_markdown, title_snapshot, permalink_snapshot, tags_snapshot)
  select v_set_id, coalesce(document.doc_id, registry.current_doc_id, entry.value->>'docId'),
    registry.document_uuid, (entry.ordinality - 1)::integer,
    entry.value->>'annotation', entry.value->>'title',
    coalesce(document.permalink, entry.value->>'permalink'), entry.value->'tags'
  from jsonb_array_elements(v_share.items_snapshot) with ordinality entry(value, ordinality)
  join public.document_registry registry on registry.document_uuid = (entry.value->>'documentUuid')::uuid
  left join public.document_catalog document on document.document_uuid = registry.document_uuid;
  insert into public.problem_set_imports(set_id, owner_user_id, share_id, share_code, share_version, source_title, author_snapshot)
    values (v_set_id, auth.uid(), v_share.id, v_share.code, v_share.version, v_share.title, v_share.author_snapshot);
  return v_set_id;
end;
$function$;

-- Only the code lookup is public; all mutation endpoints require authentication.
revoke all on function public.normalize_problem_set_share_code(text) from public, anon, authenticated;
revoke all on function public.generate_problem_set_share_code() from public, anon, authenticated;
revoke all on function public.problem_set_share_payload(public.problem_set_shares) from public, anon, authenticated;
revoke all on function public.get_my_problem_set_share(uuid) from public, anon, authenticated;
revoke all on function public.publish_my_problem_set(uuid, boolean) from public, anon, authenticated;
revoke all on function public.set_my_problem_set_share_active(uuid, boolean) from public, anon, authenticated;
revoke all on function public.get_shared_problem_set(text) from public, anon, authenticated;
revoke all on function public.import_shared_problem_set(text, text, integer) from public, anon, authenticated;
grant execute on function public.get_my_problem_set_share(uuid),
  public.publish_my_problem_set(uuid, boolean), public.set_my_problem_set_share_active(uuid, boolean),
  public.import_shared_problem_set(text, text, integer) to authenticated, service_role;
grant execute on function public.get_shared_problem_set(text) to anon, authenticated, service_role;

notify pgrst, 'reload schema';
commit;
