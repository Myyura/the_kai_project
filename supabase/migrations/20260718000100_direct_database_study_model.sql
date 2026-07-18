-- Direct-database study model and stable document identity.
--
-- This migration is deliberately additive. Existing doc_id columns and every
-- user row are preserved; UUID columns are backfilled before constraints are
-- attached. The old path remains available as an alias after future renames.

create extension if not exists "uuid-ossp";

create table if not exists document_registry (
  document_uuid uuid primary key,
  current_doc_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint document_registry_current_doc_id_check check (
    current_doc_id is null or char_length(trim(current_doc_id)) between 1 and 500
  )
);

create table if not exists document_aliases (
  doc_id text primary key,
  document_uuid uuid not null references document_registry(document_uuid) on delete cascade,
  is_current boolean not null default false,
  created_at timestamptz not null default now(),
  constraint document_aliases_doc_id_check check (char_length(trim(doc_id)) between 1 and 500)
);

create index if not exists idx_document_aliases_uuid
  on document_aliases(document_uuid);
create unique index if not exists idx_document_aliases_one_current
  on document_aliases(document_uuid) where is_current;

alter table document_registry enable row level security;
alter table document_aliases enable row level security;
revoke all on table document_registry from public, anon, authenticated;
revoke all on table document_aliases from public, anon, authenticated;

-- Collect all historical paths before adding UUID columns. Orphaned paths are
-- intentionally registered too so that no user-owned row loses its identity.
with all_doc_ids as (
  select doc_id from exam_documents
  union select doc_id from user_progress_items
  union select doc_id from user_note_items
  union select doc_id from user_practice_events
  union select doc_id from exam_difficulty_votes
  union select doc_id from exam_difficulty_stats
  union select doc_id from problem_set_items
  union select target_doc_id from content_submissions where trim(target_doc_id) <> ''
)
insert into document_registry(document_uuid, current_doc_id)
select
  uuid_generate_v5('ad4a6e2e-1c93-5b0c-91e4-98fb44fa87cd'::uuid, trim(doc_id)),
  trim(doc_id)
from all_doc_ids
where nullif(trim(doc_id), '') is not null
on conflict do nothing;

insert into document_aliases(doc_id, document_uuid, is_current)
select
  registry.current_doc_id,
  registry.document_uuid,
  exists (
    select 1 from exam_documents document
    where document.doc_id = registry.current_doc_id
  )
from document_registry registry
where registry.current_doc_id is not null
on conflict (doc_id) do update
set document_uuid = excluded.document_uuid,
    is_current = excluded.is_current;

alter table exam_documents add column if not exists document_uuid uuid;
alter table user_progress_items add column if not exists document_uuid uuid;
alter table user_note_items add column if not exists document_uuid uuid;
alter table user_practice_events add column if not exists document_uuid uuid;
alter table exam_difficulty_votes add column if not exists document_uuid uuid;
alter table exam_difficulty_stats add column if not exists document_uuid uuid;
alter table problem_set_items add column if not exists document_uuid uuid;
alter table content_submissions add column if not exists target_document_uuid uuid;

update exam_documents target
set document_uuid = alias.document_uuid
from document_aliases alias
where target.document_uuid is null and alias.doc_id = target.doc_id;

update user_progress_items target
set document_uuid = alias.document_uuid
from document_aliases alias
where target.document_uuid is null and alias.doc_id = target.doc_id;

update user_note_items target
set document_uuid = alias.document_uuid
from document_aliases alias
where target.document_uuid is null and alias.doc_id = target.doc_id;

update user_practice_events target
set document_uuid = alias.document_uuid
from document_aliases alias
where target.document_uuid is null and alias.doc_id = target.doc_id;

update exam_difficulty_votes target
set document_uuid = alias.document_uuid
from document_aliases alias
where target.document_uuid is null and alias.doc_id = target.doc_id;

update exam_difficulty_stats target
set document_uuid = alias.document_uuid
from document_aliases alias
where target.document_uuid is null and alias.doc_id = target.doc_id;

update problem_set_items target
set document_uuid = alias.document_uuid
from document_aliases alias
where target.document_uuid is null and alias.doc_id = target.doc_id;

update content_submissions target
set target_document_uuid = alias.document_uuid
from document_aliases alias
where target.target_document_uuid is null and alias.doc_id = target.target_doc_id;

alter table exam_documents alter column document_uuid set not null;
alter table user_progress_items alter column document_uuid set not null;
alter table user_note_items alter column document_uuid set not null;
alter table user_practice_events alter column document_uuid set not null;
alter table exam_difficulty_votes alter column document_uuid set not null;
alter table exam_difficulty_stats alter column document_uuid set not null;
alter table problem_set_items alter column document_uuid set not null;

create unique index if not exists idx_exam_documents_uuid
  on exam_documents(document_uuid);
create index if not exists idx_upi_user_document_uuid
  on user_progress_items(user_id, document_uuid);
create unique index if not exists idx_upi_user_document_uuid_unique
  on user_progress_items(user_id, document_uuid);
create index if not exists idx_uni_user_document_uuid
  on user_note_items(user_id, document_uuid);
create unique index if not exists idx_uni_user_document_uuid_unique
  on user_note_items(user_id, document_uuid);
create index if not exists idx_practice_events_document_uuid
  on user_practice_events(document_uuid, occurred_at desc);
create index if not exists idx_difficulty_votes_document_uuid
  on exam_difficulty_votes(document_uuid);
create unique index if not exists idx_difficulty_votes_user_document_uuid
  on exam_difficulty_votes(user_id, document_uuid);
create unique index if not exists idx_difficulty_stats_document_uuid
  on exam_difficulty_stats(document_uuid);
create index if not exists idx_problem_set_items_document_uuid
  on problem_set_items(set_id, document_uuid);
create unique index if not exists idx_problem_set_items_set_document_uuid
  on problem_set_items(set_id, document_uuid);

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'exam_documents_document_uuid_fkey') then
    alter table exam_documents add constraint exam_documents_document_uuid_fkey
      foreign key (document_uuid) references document_registry(document_uuid) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'user_progress_items_document_uuid_fkey') then
    alter table user_progress_items add constraint user_progress_items_document_uuid_fkey
      foreign key (document_uuid) references document_registry(document_uuid) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'user_note_items_document_uuid_fkey') then
    alter table user_note_items add constraint user_note_items_document_uuid_fkey
      foreign key (document_uuid) references document_registry(document_uuid) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'user_practice_events_document_uuid_fkey') then
    alter table user_practice_events add constraint user_practice_events_document_uuid_fkey
      foreign key (document_uuid) references document_registry(document_uuid) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'exam_difficulty_votes_document_uuid_fkey') then
    alter table exam_difficulty_votes add constraint exam_difficulty_votes_document_uuid_fkey
      foreign key (document_uuid) references document_registry(document_uuid) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'exam_difficulty_stats_document_uuid_fkey') then
    alter table exam_difficulty_stats add constraint exam_difficulty_stats_document_uuid_fkey
      foreign key (document_uuid) references document_registry(document_uuid) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'problem_set_items_document_uuid_fkey') then
    alter table problem_set_items add constraint problem_set_items_document_uuid_fkey
      foreign key (document_uuid) references document_registry(document_uuid) not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'content_submissions_target_document_uuid_fkey') then
    alter table content_submissions add constraint content_submissions_target_document_uuid_fkey
      foreign key (target_document_uuid) references document_registry(document_uuid) not valid;
  end if;
end $$;

alter table exam_documents validate constraint exam_documents_document_uuid_fkey;
alter table user_progress_items validate constraint user_progress_items_document_uuid_fkey;
alter table user_note_items validate constraint user_note_items_document_uuid_fkey;
alter table user_practice_events validate constraint user_practice_events_document_uuid_fkey;
alter table exam_difficulty_votes validate constraint exam_difficulty_votes_document_uuid_fkey;
alter table exam_difficulty_stats validate constraint exam_difficulty_stats_document_uuid_fkey;
alter table problem_set_items validate constraint problem_set_items_document_uuid_fkey;
alter table content_submissions validate constraint content_submissions_target_document_uuid_fkey;

create or replace function resolve_document_uuid(p_doc_id text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_doc_id text := nullif(trim(p_doc_id), '');
  v_document_uuid uuid;
begin
  if v_doc_id is null then
    raise exception 'Document ID is required';
  end if;
  select alias.document_uuid into v_document_uuid
  from document_aliases alias
  where alias.doc_id = v_doc_id;
  if v_document_uuid is not null then return v_document_uuid; end if;

  v_document_uuid := uuid_generate_v5(
    'ad4a6e2e-1c93-5b0c-91e4-98fb44fa87cd'::uuid,
    v_doc_id
  );
  insert into document_registry(document_uuid, current_doc_id)
  values (v_document_uuid, v_doc_id)
  on conflict do nothing;
  insert into document_aliases(doc_id, document_uuid, is_current)
  values (v_doc_id, v_document_uuid, false)
  on conflict (doc_id) do update set document_uuid = excluded.document_uuid;
  return v_document_uuid;
end;
$$;

revoke execute on function resolve_document_uuid(text) from public, anon, authenticated;

create or replace function assign_document_uuid_from_doc_id()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.document_uuid is null then
    new.document_uuid := resolve_document_uuid(new.doc_id);
  end if;
  return new;
end;
$$;

create or replace function assign_target_document_uuid()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.target_document_uuid is null and nullif(trim(new.target_doc_id), '') is not null then
    new.target_document_uuid := resolve_document_uuid(new.target_doc_id);
  end if;
  return new;
end;
$$;

do $$
declare
  v_table text;
begin
  foreach v_table in array array[
    'exam_documents',
    'user_progress_items',
    'user_note_items',
    'user_practice_events',
    'exam_difficulty_votes',
    'exam_difficulty_stats',
    'problem_set_items'
  ] loop
    execute format('drop trigger if exists assign_document_uuid on %I', v_table);
    execute format(
      'create trigger assign_document_uuid before insert or update of doc_id on %I for each row execute function assign_document_uuid_from_doc_id()',
      v_table
    );
  end loop;
end $$;

drop trigger if exists assign_target_document_uuid on content_submissions;
create trigger assign_target_document_uuid
  before insert or update of target_doc_id on content_submissions
  for each row execute function assign_target_document_uuid();

-- Preserve every note version before allowing direct database writes.
alter table user_note_items add column if not exists version bigint not null default 1;

create table if not exists user_note_revisions (
  id uuid primary key default uuid_generate_v4(),
  note_id uuid not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  document_uuid uuid not null references document_registry(document_uuid),
  doc_id text not null,
  version bigint not null,
  content text,
  archived_reason text not null,
  archived_at timestamptz not null default now(),
  constraint user_note_revisions_note_version_unique unique (note_id, version),
  constraint user_note_revisions_reason_check check (
    archived_reason in ('migration_baseline', 'update', 'delete')
  )
);

insert into user_note_revisions(
  note_id, user_id, document_uuid, doc_id, version, content, archived_reason, archived_at
)
select id, user_id, document_uuid, doc_id, version, content, 'migration_baseline', now()
from user_note_items
on conflict (note_id, version) do nothing;

alter table user_note_revisions enable row level security;
drop policy if exists "Users can view own note revisions" on user_note_revisions;
create policy "Users can view own note revisions"
  on user_note_revisions for select using (auth.uid() = user_id);
revoke all on table user_note_revisions from public, anon, authenticated;
grant select on table user_note_revisions to authenticated;

create or replace function archive_user_note_revision()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into user_note_revisions(
    note_id, user_id, document_uuid, doc_id, version, content, archived_reason, archived_at
  ) values (
    old.id,
    old.user_id,
    old.document_uuid,
    old.doc_id,
    old.version,
    old.content,
    case when tg_op = 'DELETE' then 'delete' else 'update' end,
    now()
  ) on conflict (note_id, version) do nothing;

  if tg_op = 'DELETE' then return old; end if;
  new.version := old.version + 1;
  return new;
end;
$$;

drop trigger if exists archive_user_note_revision on user_note_items;
create trigger archive_user_note_revision
  before update or delete on user_note_items
  for each row execute function archive_user_note_revision();

-- Store enough scheduling state to evolve beyond a hard-coded review counter.
alter table user_progress_items add column if not exists last_reviewed_at timestamptz;
alter table user_progress_items add column if not exists next_review_at timestamptz;
alter table user_progress_items add column if not exists review_algorithm_version integer not null default 1;
alter table user_progress_items add column if not exists review_lapses integer not null default 0;
alter table user_progress_items add column if not exists review_stability numeric;
alter table user_progress_items add column if not exists review_difficulty numeric;

update user_progress_items
set last_reviewed_at = coalesce(last_reviewed_at, updated_at),
    next_review_at = coalesce(
      next_review_at,
      updated_at + make_interval(days => case least(review_count, 5)
        when 0 then 1 when 1 then 3 when 2 then 7
        when 3 then 14 when 4 then 30 else 60 end)
    )
where status = 'reviewing';

create index if not exists idx_upi_user_next_review
  on user_progress_items(user_id, next_review_at)
  where status = 'reviewing' and deleted_at is null;
