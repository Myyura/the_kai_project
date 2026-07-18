-- Replace the PostgreSQL Markdown mirror with a lightweight document catalog.
--
-- Git remains the only source of document bodies. Published builds expose one
-- static JSON artifact per immutable document UUID for the JSON API and Agent.
-- Only non-user Markdown columns are dropped; user-owned rows are untouched.

do $$
begin
  if to_regclass('public.document_catalog') is null then
    if to_regclass('public.exam_documents') is null then
      raise exception 'Expected public.exam_documents before catalog cutover';
    end if;
    alter table public.exam_documents rename to document_catalog;
  end if;
end $$;

alter table public.document_catalog
  add column if not exists content_path text;

update public.document_catalog
set content_path = '/api-content/v1/documents/' || document_uuid::text || '.json'
where content_path is null or trim(content_path) = '';

alter table public.document_catalog
  alter column content_path set not null;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conrelid = 'public.document_catalog'::regclass
      and conname = 'document_catalog_content_path_check'
  ) then
    alter table public.document_catalog
      add constraint document_catalog_content_path_check
      check (content_path = '/api-content/v1/documents/' || document_uuid::text || '.json');
  end if;
end $$;

alter table public.document_catalog
  drop column if exists author_markdown,
  drop column if exists description_markdown,
  drop column if exists kai_markdown,
  drop column if exists full_markdown;

comment on table public.document_catalog is
  'Lightweight document identity and discovery metadata. Markdown bodies are published as static build artifacts.';
comment on column public.document_catalog.content_path is
  'Same-origin static JSON path keyed by immutable document UUID.';

-- Return current catalog metadata when available while retaining the snapshots
-- already stored in user-owned problem-set rows.
create or replace function get_my_problem_set(p_set_id uuid)
returns table (
  set_id uuid,
  kind text,
  set_title text,
  set_description text,
  archived_at timestamptz,
  item_id uuid,
  doc_id text,
  document_uuid uuid,
  "position" integer,
  annotation_markdown text,
  title text,
  permalink text,
  tags jsonb,
  content_available boolean,
  progress_status text,
  review_count integer,
  item_updated_at timestamptz,
  item_created_at timestamptz
) as $$
declare
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not exists (
    select 1 from public.problem_sets problem_set
    where problem_set.id = p_set_id
      and problem_set.owner_user_id = v_user_id
      and problem_set.deleted_at is null
  ) then
    raise exception 'problem_set_not_found' using errcode = 'P0002';
  end if;

  return query
  select
    problem_set.id,
    problem_set.kind,
    problem_set.title,
    problem_set.description,
    problem_set.archived_at,
    item.id,
    coalesce(document.doc_id, item.doc_id),
    item.document_uuid,
    item.position,
    item.annotation_markdown,
    coalesce(document.title, item.title_snapshot),
    coalesce(document.permalink, item.permalink_snapshot),
    coalesce(document.tags, item.tags_snapshot),
    document.document_uuid is not null,
    coalesce(progress.status, 'not_started'),
    coalesce(progress.review_count, 0),
    item.updated_at,
    item.created_at
  from public.problem_sets problem_set
  left join public.problem_set_items item on item.set_id = problem_set.id
  left join public.document_catalog document on document.document_uuid = item.document_uuid
  left join public.user_progress_items progress
    on progress.user_id = v_user_id
    and progress.document_uuid = item.document_uuid
    and progress.deleted_at is null
  where problem_set.id = p_set_id
  order by
    case when problem_set.kind = 'custom' then item.position end asc nulls last,
    case when problem_set.kind <> 'custom' then item.created_at end desc nulls last,
    item.created_at;
end;
$$ language plpgsql security definer
set search_path = '';

-- Validate new memberships against the lightweight catalog and snapshot only
-- metadata required to render a private set. No Markdown is copied.
create or replace function set_doc_problem_set_memberships(
  p_doc_id text,
  p_set_ids uuid[] default '{}'::uuid[]
)
returns void as $$
declare
  v_user_id uuid := auth.uid();
  v_requested_doc_id text := nullif(trim(p_doc_id), '');
  v_document_uuid uuid;
  v_set_ids uuid[] := coalesce(p_set_ids, '{}'::uuid[]);
  v_set_id uuid;
  v_doc public.document_catalog%rowtype;
  v_position integer;
  v_touched_set_ids uuid[];
begin
  if v_user_id is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  if v_requested_doc_id is null then raise exception 'invalid_doc_id' using errcode = '22023'; end if;
  perform public.ensure_my_problem_sets();
  perform 1 from public.problem_sets problem_set
  where problem_set.owner_user_id = v_user_id
    and problem_set.deleted_at is null
    and problem_set.archived_at is null
  order by problem_set.id for update;

  select document.* into v_doc
  from public.document_aliases alias
  join public.document_catalog document on document.document_uuid = alias.document_uuid
  where alias.doc_id = v_requested_doc_id;
  if not found then raise exception 'invalid_doc_id' using errcode = '22023'; end if;
  v_document_uuid := v_doc.document_uuid;

  if exists (
    select 1 from unnest(v_set_ids) requested(id)
    left join public.problem_sets problem_set
      on problem_set.id = requested.id
      and problem_set.owner_user_id = v_user_id
      and problem_set.deleted_at is null
      and problem_set.archived_at is null
    where problem_set.id is null
  ) then
    raise exception 'invalid_problem_set' using errcode = '22023';
  end if;

  select coalesce(array_agg(distinct item.set_id), '{}'::uuid[]) into v_touched_set_ids
  from public.problem_set_items item
  join public.problem_sets problem_set on problem_set.id = item.set_id
  where item.document_uuid = v_document_uuid
    and problem_set.owner_user_id = v_user_id
    and problem_set.deleted_at is null
    and problem_set.archived_at is null;

  delete from public.problem_set_items item
  using public.problem_sets problem_set
  where item.set_id = problem_set.id
    and item.document_uuid = v_document_uuid
    and problem_set.owner_user_id = v_user_id
    and problem_set.deleted_at is null
    and problem_set.archived_at is null
    and not (problem_set.id = any(v_set_ids));

  foreach v_set_id in array v_touched_set_ids loop
    perform public.compact_problem_set_positions(v_set_id);
  end loop;

  foreach v_set_id in array v_set_ids loop
    if (select count(*) from public.problem_set_items item where item.set_id = v_set_id) >= 2000
      and not exists (
        select 1 from public.problem_set_items item
        where item.set_id = v_set_id and item.document_uuid = v_document_uuid
      ) then
      raise exception 'problem_set_item_limit_reached' using errcode = '54000';
    end if;
    select coalesce(max(item.position), -1) + 1 into v_position
    from public.problem_set_items item where item.set_id = v_set_id;
    insert into public.problem_set_items (
      set_id, doc_id, document_uuid, position,
      title_snapshot, permalink_snapshot, tags_snapshot
    ) values (
      v_set_id, v_doc.doc_id, v_document_uuid, v_position,
      v_doc.title, v_doc.permalink, v_doc.tags
    ) on conflict (set_id, document_uuid) do nothing;
  end loop;

  update public.problem_sets problem_set set updated_at = now()
  where problem_set.owner_user_id = v_user_id
    and problem_set.deleted_at is null
    and (problem_set.id = any(v_set_ids) or problem_set.id = any(v_touched_set_ids));
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function get_my_problem_set(uuid) from public, anon;
revoke execute on function set_doc_problem_set_memberships(text, uuid[]) from public, anon;
grant execute on function get_my_problem_set(uuid) to authenticated;
grant execute on function set_doc_problem_set_memberships(text, uuid[]) to authenticated;
