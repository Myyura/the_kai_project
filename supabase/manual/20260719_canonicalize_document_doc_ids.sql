-- Kai Project document doc_id canonicalization (manual, repeatable)
--
-- Purpose:
--   Rewrite legacy path snapshots in application tables to each document's
--   current `document_registry.current_doc_id`, while preserving immutable
--   document UUIDs and every user-owned row.
--
-- Before running in Supabase Dashboard > SQL Editor:
--   1. take a database backup;
--   2. deploy the current application;
--   3. run `yarn catalog:sync` so document_registry and document_catalog know
--      the latest current paths and historical aliases;
--   4. choose a low-traffic maintenance window.
--
-- This script never deletes aliases. Old paths remain permanent redirects in
-- document_aliases even after application rows are normalized.

begin;

set local lock_timeout = '5s';
set local statement_timeout = '10min';

do $$
declare
  v_table text;
  v_conflicts text;
begin
  foreach v_table in array array[
    'document_registry',
    'document_aliases',
    'document_catalog',
    'user_progress_items',
    'user_note_items',
    'user_note_revisions',
    'user_practice_events',
    'exam_difficulty_votes',
    'exam_difficulty_stats',
    'problem_set_items',
    'content_submissions'
  ] loop
    if to_regclass('public.' || v_table) is null then
      raise exception 'Required table public.% is missing; no changes were applied.', v_table;
    end if;
  end loop;

  if exists (
    select 1
    from public.document_catalog catalog
    join public.document_registry registry using (document_uuid)
    where registry.current_doc_id is not null
      and catalog.doc_id is distinct from registry.current_doc_id
  ) then
    raise exception 'document_catalog is not synchronized; run yarn catalog:sync first.';
  end if;

  if exists (
    select 1
    from public.document_registry registry
    join public.document_aliases alias
      on alias.doc_id = registry.current_doc_id
     and alias.document_uuid <> registry.document_uuid
    where registry.current_doc_id is not null
  ) then
    raise exception 'A current doc_id belongs to a different UUID in document_aliases.';
  end if;

  select string_agg(check_name, ', ' order by check_name)
  into v_conflicts
  from (
    select 'exam_difficulty_stats' as check_name where exists (
      select 1
      from public.exam_difficulty_stats source
      join public.document_registry registry using (document_uuid)
      join public.exam_difficulty_stats conflicting
        on conflicting.doc_id = registry.current_doc_id
       and conflicting.document_uuid <> source.document_uuid
      where registry.current_doc_id is not null
        and source.doc_id is distinct from registry.current_doc_id
    )
    union all
    select 'exam_difficulty_votes' where exists (
      select 1
      from public.exam_difficulty_votes source
      join public.document_registry registry using (document_uuid)
      join public.exam_difficulty_votes conflicting
        on conflicting.user_id = source.user_id
       and conflicting.doc_id = registry.current_doc_id
       and conflicting.document_uuid <> source.document_uuid
      where registry.current_doc_id is not null
        and source.doc_id is distinct from registry.current_doc_id
    )
    union all
    select 'problem_set_items' where exists (
      select 1
      from public.problem_set_items source
      join public.document_registry registry using (document_uuid)
      join public.problem_set_items conflicting
        on conflicting.set_id = source.set_id
       and conflicting.doc_id = registry.current_doc_id
       and conflicting.document_uuid <> source.document_uuid
      where registry.current_doc_id is not null
        and source.doc_id is distinct from registry.current_doc_id
    )
    union all
    select 'user_note_items' where exists (
      select 1
      from public.user_note_items source
      join public.document_registry registry using (document_uuid)
      join public.user_note_items conflicting
        on conflicting.user_id = source.user_id
       and conflicting.doc_id = registry.current_doc_id
       and conflicting.document_uuid <> source.document_uuid
      where registry.current_doc_id is not null
        and source.doc_id is distinct from registry.current_doc_id
    )
    union all
    select 'user_progress_items' where exists (
      select 1
      from public.user_progress_items source
      join public.document_registry registry using (document_uuid)
      join public.user_progress_items conflicting
        on conflicting.user_id = source.user_id
       and conflicting.doc_id = registry.current_doc_id
       and conflicting.document_uuid <> source.document_uuid
      where registry.current_doc_id is not null
        and source.doc_id is distinct from registry.current_doc_id
    )
  ) checks;

  if v_conflicts is not null then
    raise exception 'Canonical doc_id conflicts detected in: %. No rows were changed.', v_conflicts;
  end if;
end;
$$;

-- Trigger changes and data updates are protected by one transaction and
-- ACCESS EXCLUSIVE locks. A timeout or error rolls every change back, including
-- trigger state.
lock table
  public.document_registry,
  public.document_aliases,
  public.document_catalog,
  public.user_progress_items,
  public.user_note_items,
  public.user_note_revisions,
  public.user_practice_events,
  public.exam_difficulty_votes,
  public.exam_difficulty_stats,
  public.problem_set_items,
  public.content_submissions
in access exclusive mode;

-- Normalize which alias is current without deleting any historical path.
update public.document_aliases alias
set is_current = false
from public.document_registry registry
where alias.document_uuid = registry.document_uuid
  and alias.is_current
  and alias.doc_id is distinct from registry.current_doc_id;

insert into public.document_aliases(doc_id, document_uuid, is_current)
select registry.current_doc_id, registry.document_uuid, true
from public.document_registry registry
where registry.current_doc_id is not null
on conflict (doc_id) do update
set is_current = true;

-- Preserve user-visible timestamps, note revision numbers, and difficulty
-- aggregation state during this administrative path-only rewrite.
alter table public.user_progress_items disable trigger update_user_progress_items_updated_at;
alter table public.user_progress_items disable trigger assign_document_uuid;
alter table public.user_note_items disable trigger update_user_note_items_updated_at;
alter table public.user_note_items disable trigger assign_document_uuid;
alter table public.user_note_items disable trigger archive_user_note_revision;
alter table public.user_practice_events disable trigger assign_document_uuid;
alter table public.exam_difficulty_votes disable trigger update_exam_difficulty_votes_updated_at;
alter table public.exam_difficulty_votes disable trigger refresh_exam_difficulty_stats_after_vote;
alter table public.exam_difficulty_votes disable trigger assign_document_uuid;
alter table public.exam_difficulty_stats disable trigger update_exam_difficulty_stats_updated_at;
alter table public.exam_difficulty_stats disable trigger assign_document_uuid;
alter table public.problem_set_items disable trigger update_problem_set_items_updated_at;
alter table public.problem_set_items disable trigger assign_document_uuid;
alter table public.content_submissions disable trigger update_content_submissions_updated_at;
alter table public.content_submissions disable trigger assign_target_document_uuid;

update public.user_progress_items target
set doc_id = registry.current_doc_id
from public.document_registry registry
where target.document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id;

update public.user_note_items target
set doc_id = registry.current_doc_id
from public.document_registry registry
where target.document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id;

update public.user_note_revisions target
set doc_id = registry.current_doc_id
from public.document_registry registry
where target.document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id;

update public.user_practice_events target
set doc_id = registry.current_doc_id
from public.document_registry registry
where target.document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id;

update public.exam_difficulty_votes target
set doc_id = registry.current_doc_id
from public.document_registry registry
where target.document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id;

update public.exam_difficulty_stats target
set doc_id = registry.current_doc_id
from public.document_registry registry
where target.document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id;

update public.problem_set_items target
set doc_id = registry.current_doc_id
from public.document_registry registry
where target.document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id;

update public.content_submissions target
set target_doc_id = registry.current_doc_id
from public.document_registry registry
where target.target_document_uuid = registry.document_uuid
  and registry.current_doc_id is not null
  and target.target_doc_id is distinct from registry.current_doc_id;

alter table public.user_progress_items enable trigger update_user_progress_items_updated_at;
alter table public.user_progress_items enable trigger assign_document_uuid;
alter table public.user_note_items enable trigger update_user_note_items_updated_at;
alter table public.user_note_items enable trigger assign_document_uuid;
alter table public.user_note_items enable trigger archive_user_note_revision;
alter table public.user_practice_events enable trigger assign_document_uuid;
alter table public.exam_difficulty_votes enable trigger update_exam_difficulty_votes_updated_at;
alter table public.exam_difficulty_votes enable trigger refresh_exam_difficulty_stats_after_vote;
alter table public.exam_difficulty_votes enable trigger assign_document_uuid;
alter table public.exam_difficulty_stats enable trigger update_exam_difficulty_stats_updated_at;
alter table public.exam_difficulty_stats enable trigger assign_document_uuid;
alter table public.problem_set_items enable trigger update_problem_set_items_updated_at;
alter table public.problem_set_items enable trigger assign_document_uuid;
alter table public.content_submissions enable trigger update_content_submissions_updated_at;
alter table public.content_submissions enable trigger assign_target_document_uuid;

commit;

-- Expected result: every stale_row_count is 0. Historical aliases are retained.
select 'content_submissions' as table_name, count(*) as stale_row_count
from public.content_submissions target
join public.document_registry registry
  on target.target_document_uuid = registry.document_uuid
where registry.current_doc_id is not null
  and target.target_doc_id is distinct from registry.current_doc_id
union all
select 'exam_difficulty_stats', count(*)
from public.exam_difficulty_stats target
join public.document_registry registry using (document_uuid)
where registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id
union all
select 'exam_difficulty_votes', count(*)
from public.exam_difficulty_votes target
join public.document_registry registry using (document_uuid)
where registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id
union all
select 'problem_set_items', count(*)
from public.problem_set_items target
join public.document_registry registry using (document_uuid)
where registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id
union all
select 'user_note_items', count(*)
from public.user_note_items target
join public.document_registry registry using (document_uuid)
where registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id
union all
select 'user_note_revisions', count(*)
from public.user_note_revisions target
join public.document_registry registry using (document_uuid)
where registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id
union all
select 'user_practice_events', count(*)
from public.user_practice_events target
join public.document_registry registry using (document_uuid)
where registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id
union all
select 'user_progress_items', count(*)
from public.user_progress_items target
join public.document_registry registry using (document_uuid)
where registry.current_doc_id is not null
  and target.doc_id is distinct from registry.current_doc_id
order by table_name;
