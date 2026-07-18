-- Require authenticated, named participation and finish the UUID query cutover.
--
-- No table rows are deleted or rewritten here. Historical leaderboard settings
-- remain stored for audit/recovery, but the obsolete anonymous/hidden controls
-- and RPCs are no longer callable.

drop function if exists set_my_leaderboard_profile(text, boolean);
drop function if exists get_my_leaderboard_profile();
drop function if exists set_my_leaderboard_visibility(boolean);

drop function if exists get_practice_leaderboard(text);
create function get_practice_leaderboard(p_period text default 'half_month')
returns table (
  rank_position bigint,
  display_name text,
  problem_count bigint,
  is_current_user boolean,
  is_top_ten boolean,
  participant_count bigint,
  gap_to_previous bigint,
  percentile integer,
  period_start date,
  period_end date
) as $$
declare
  v_user_id uuid := auth.uid();
  v_profile public.user_public_profiles%rowtype;
  v_today date := (now() at time zone 'Asia/Tokyo')::date;
  v_start_date date;
  v_end_date date;
  v_start_at timestamptz;
  v_end_at timestamptz;
  v_has_activity boolean;
begin
  if v_user_id is null then return; end if;
  if p_period not in ('half_month', 'six_months') then
    raise exception 'Unsupported leaderboard period';
  end if;
  v_profile := public.ensure_user_public_profile(v_user_id);

  if p_period = 'half_month' then
    if extract(day from v_today) <= 15 then
      v_start_date := date_trunc('month', v_today)::date;
      v_end_date := v_start_date + 15;
    else
      v_start_date := date_trunc('month', v_today)::date + 15;
      v_end_date := (date_trunc('month', v_today) + interval '1 month')::date;
    end if;
  else
    v_start_date := (v_today - interval '6 months')::date;
    v_end_date := v_today + 1;
  end if;
  v_start_at := v_start_date::timestamp at time zone 'Asia/Tokyo';
  v_end_at := v_end_date::timestamp at time zone 'Asia/Tokyo';

  return query
  with counts as (
    select event.user_id, count(distinct event.document_uuid)::bigint as practiced
    from public.user_practice_events event
    join public.user_public_profiles profile on profile.user_id = event.user_id
    where event.occurred_at >= v_start_at and event.occurred_at < v_end_at
    group by event.user_id
  ), ranked as (
    select
      counts.user_id,
      counts.practiced,
      dense_rank() over (order by counts.practiced desc) as place,
      row_number() over (order by counts.practiced desc, counts.user_id) as list_position,
      count(*) over () as participants
    from counts
  )
  select
    ranked.place,
    public.format_public_nickname(profile.nickname, profile.discriminator),
    ranked.practiced,
    ranked.user_id = v_user_id,
    ranked.list_position <= 10,
    ranked.participants,
    case when ranked.user_id = v_user_id then coalesce((
      select min(other.practiced) - ranked.practiced
      from counts other where other.practiced > ranked.practiced
    ), 0) else 0 end,
    case when ranked.participants <= 1 then 0 else floor(100.0 * (
      select count(*) from counts other where other.practiced < ranked.practiced
    ) / (ranked.participants - 1))::integer end,
    v_start_date,
    v_end_date - 1
  from ranked
  join public.user_public_profiles profile on profile.user_id = ranked.user_id
  where ranked.list_position <= 10 or ranked.user_id = v_user_id
  order by ranked.list_position;

  select exists (
    select 1 from public.user_practice_events event
    where event.user_id = v_user_id
      and event.occurred_at >= v_start_at and event.occurred_at < v_end_at
  ) into v_has_activity;

  if not v_has_activity then
    rank_position := null;
    display_name := public.format_public_nickname(v_profile.nickname, v_profile.discriminator);
    problem_count := 0;
    is_current_user := true;
    is_top_ten := false;
    select count(distinct event.user_id)::bigint into participant_count
    from public.user_practice_events event
    join public.user_public_profiles profile on profile.user_id = event.user_id
    where event.occurred_at >= v_start_at and event.occurred_at < v_end_at;
    gap_to_previous := 0;
    percentile := 0;
    period_start := v_start_date;
    period_end := v_end_date - 1;
    return next;
  end if;
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function get_practice_leaderboard(text) from public, anon;
grant execute on function get_practice_leaderboard(text) to authenticated;

-- Resolve problem-set contents and progress through immutable document UUIDs,
-- so a source path rename cannot orphan a saved item.
create or replace function get_my_problem_sets(p_doc_id text default null)
returns table (
  id uuid,
  kind text,
  title text,
  description text,
  item_count bigint,
  completed_count bigint,
  reviewing_count bigint,
  contains_doc boolean,
  archived_at timestamptz,
  updated_at timestamptz,
  created_at timestamptz
) as $$
declare
  v_user_id uuid := auth.uid();
  v_document_uuid uuid;
begin
  perform public.ensure_my_problem_sets();
  select alias.document_uuid into v_document_uuid
  from public.document_aliases alias
  where alias.doc_id = nullif(trim(p_doc_id), '');

  return query
  select
    problem_set.id,
    problem_set.kind,
    problem_set.title,
    problem_set.description,
    count(item.id)::bigint,
    count(item.id) filter (where progress.status = 'completed' and progress.deleted_at is null)::bigint,
    count(item.id) filter (where progress.status = 'reviewing' and progress.deleted_at is null)::bigint,
    case when v_document_uuid is null then false
      else coalesce(bool_or(item.document_uuid = v_document_uuid), false) end,
    problem_set.archived_at,
    problem_set.updated_at,
    problem_set.created_at
  from public.problem_sets problem_set
  left join public.problem_set_items item on item.set_id = problem_set.id
  left join public.user_progress_items progress
    on progress.user_id = v_user_id and progress.document_uuid = item.document_uuid
  where problem_set.owner_user_id = v_user_id and problem_set.deleted_at is null
  group by problem_set.id
  order by
    case problem_set.kind when 'system_later' then 0 when 'system_mistakes' then 1 else 2 end,
    problem_set.updated_at desc;
end;
$$ language plpgsql security definer
set search_path = '';

drop function if exists get_my_problem_set(uuid);
create function get_my_problem_set(p_set_id uuid)
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
  left join public.exam_documents document on document.document_uuid = item.document_uuid
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

revoke execute on function get_my_problem_sets(text) from public, anon;
revoke execute on function get_my_problem_set(uuid) from public, anon;
grant execute on function get_my_problem_sets(text) to authenticated;
grant execute on function get_my_problem_set(uuid) to authenticated;

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
  v_doc public.exam_documents%rowtype;
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
  join public.exam_documents document on document.document_uuid = alias.document_uuid
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

create or replace function transfer_problem_set_items(
  p_source_set_id uuid,
  p_target_set_id uuid,
  p_item_ids uuid[],
  p_copy boolean default false
)
returns void as $$
declare
  v_user_id uuid := auth.uid();
  v_target_count integer;
  v_new_count integer;
  v_offset integer;
begin
  if p_source_set_id = p_target_set_id then return; end if;
  perform 1 from public.problem_sets problem_set
  where problem_set.id in (p_source_set_id, p_target_set_id)
    and problem_set.owner_user_id = v_user_id
  order by problem_set.id for update;
  if not exists (
    select 1 from public.problem_sets problem_set
    where problem_set.id = p_source_set_id
      and problem_set.owner_user_id = v_user_id
      and problem_set.deleted_at is null
      and problem_set.archived_at is null
  ) or not exists (
    select 1 from public.problem_sets problem_set
    where problem_set.id = p_target_set_id
      and problem_set.owner_user_id = v_user_id
      and problem_set.deleted_at is null
      and problem_set.archived_at is null
  ) then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;

  if exists (
    select 1 from unnest(coalesce(p_item_ids, '{}'::uuid[])) requested(id)
    left join public.problem_set_items source
      on source.id = requested.id and source.set_id = p_source_set_id
    where source.id is null
  ) then raise exception 'problem_set_item_not_found' using errcode = 'P0002'; end if;

  select count(*) into v_target_count
  from public.problem_set_items where set_id = p_target_set_id;
  select count(*) into v_new_count
  from public.problem_set_items source
  where source.set_id = p_source_set_id
    and source.id = any(coalesce(p_item_ids, '{}'::uuid[]))
    and not exists (
      select 1 from public.problem_set_items target
      where target.set_id = p_target_set_id
        and target.document_uuid = source.document_uuid
    );
  if v_target_count + v_new_count > 2000 then
    raise exception 'problem_set_item_limit_reached' using errcode = '54000';
  end if;
  select coalesce(max(position), -1) + 1 into v_offset
  from public.problem_set_items where set_id = p_target_set_id;

  insert into public.problem_set_items (
    set_id, doc_id, document_uuid, position, annotation_markdown,
    title_snapshot, permalink_snapshot, tags_snapshot
  )
  select
    p_target_set_id,
    source.doc_id,
    source.document_uuid,
    (v_offset + row_number() over (order by source.position, source.created_at) - 1)::integer,
    source.annotation_markdown,
    source.title_snapshot,
    source.permalink_snapshot,
    source.tags_snapshot
  from public.problem_set_items source
  where source.set_id = p_source_set_id
    and source.id = any(coalesce(p_item_ids, '{}'::uuid[]))
  on conflict (set_id, document_uuid) do nothing;

  if not coalesce(p_copy, false) then
    delete from public.problem_set_items source
    where source.set_id = p_source_set_id
      and source.id = any(coalesce(p_item_ids, '{}'::uuid[]));
    perform public.compact_problem_set_positions(p_source_set_id);
  end if;
  update public.problem_sets set updated_at = now()
  where id in (p_source_set_id, p_target_set_id);
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function set_doc_problem_set_memberships(text, uuid[]) from public, anon;
revoke execute on function transfer_problem_set_items(uuid, uuid, uuid[], boolean) from public, anon;
grant execute on function set_doc_problem_set_memberships(text, uuid[]) to authenticated;
grant execute on function transfer_problem_set_items(uuid, uuid, uuid[], boolean) to authenticated;

-- Difficulty votes and aggregates are also user-linked study data. Resolve
-- aliases to the same UUID so a renamed document cannot split its history.
create or replace function refresh_exam_difficulty_stats(p_doc_id text)
returns void as $$
declare
  v_requested_doc_id text := nullif(trim(p_doc_id), '');
  v_doc_id text;
  v_document_uuid uuid;
  v_vote_count integer;
  v_easy_count integer;
  v_medium_count integer;
  v_hard_count integer;
  v_sum integer;
  v_weighted_sum numeric;
  v_effective_vote_weight numeric(8, 2);
  v_average numeric(4, 2);
  v_bayesian numeric(4, 2);
  v_weighted_average numeric(4, 2);
  v_weighted_bayesian numeric(4, 2);
  v_suggested text;
  v_assigned text;
  v_confidence text;
begin
  if v_requested_doc_id is null then return; end if;
  select alias.document_uuid, coalesce(registry.current_doc_id, alias.doc_id)
  into v_document_uuid, v_doc_id
  from public.document_aliases alias
  join public.document_registry registry on registry.document_uuid = alias.document_uuid
  where alias.doc_id = v_requested_doc_id;
  if v_document_uuid is null then return; end if;

  select
    count(*)::integer,
    count(*) filter (where vote.difficulty = 1)::integer,
    count(*) filter (where vote.difficulty = 2)::integer,
    count(*) filter (where vote.difficulty = 3)::integer,
    coalesce(sum(vote.difficulty), 0)::integer,
    round(coalesce(sum(vote.difficulty * coalesce(profile.rating_weight, 1.00)), 0), 2),
    round(coalesce(sum(coalesce(profile.rating_weight, 1.00)), 0), 2)
  into
    v_vote_count, v_easy_count, v_medium_count, v_hard_count, v_sum,
    v_weighted_sum, v_effective_vote_weight
  from public.exam_difficulty_votes vote
  left join public.user_reputation_profiles profile on profile.user_id = vote.user_id
  where vote.document_uuid = v_document_uuid;

  if v_vote_count = 0 then
    delete from public.exam_difficulty_stats stats
    where stats.document_uuid = v_document_uuid;
    return;
  end if;

  v_average := round((v_sum::numeric / v_vote_count), 2);
  v_bayesian := round(((v_sum + 10)::numeric / (v_vote_count + 5)), 2);
  v_weighted_average := round((v_weighted_sum / nullif(v_effective_vote_weight, 0)), 2);
  v_weighted_bayesian := round(((v_weighted_sum + 10)::numeric / (v_effective_vote_weight + 5)), 2);
  v_suggested := public.difficulty_label_from_score(v_weighted_bayesian);
  v_assigned := case
    when v_vote_count >= 10 and v_effective_vote_weight >= 10 then v_suggested
    else null
  end;
  v_confidence := case
    when v_vote_count >= 10 and v_effective_vote_weight >= 10 then 'stable'
    when v_vote_count >= 5 then 'provisional'
    else 'collecting'
  end;

  insert into public.exam_difficulty_stats (
    doc_id, document_uuid, vote_count, easy_count, medium_count, hard_count,
    average_score, bayesian_score, effective_vote_weight,
    weighted_average_score, weighted_bayesian_score,
    suggested_difficulty, assigned_difficulty, confidence, updated_at
  ) values (
    v_doc_id, v_document_uuid, v_vote_count, v_easy_count, v_medium_count, v_hard_count,
    v_average, v_bayesian, v_effective_vote_weight,
    v_weighted_average, v_weighted_bayesian,
    v_suggested, v_assigned, v_confidence, now()
  )
  on conflict (document_uuid) do update set
    doc_id = excluded.doc_id,
    vote_count = excluded.vote_count,
    easy_count = excluded.easy_count,
    medium_count = excluded.medium_count,
    hard_count = excluded.hard_count,
    average_score = excluded.average_score,
    bayesian_score = excluded.bayesian_score,
    effective_vote_weight = excluded.effective_vote_weight,
    weighted_average_score = excluded.weighted_average_score,
    weighted_bayesian_score = excluded.weighted_bayesian_score,
    suggested_difficulty = excluded.suggested_difficulty,
    assigned_difficulty = excluded.assigned_difficulty,
    confidence = excluded.confidence,
    updated_at = now();
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function get_exam_difficulty(p_doc_id text)
returns table (
  doc_id text,
  user_difficulty smallint,
  vote_count integer,
  easy_count integer,
  medium_count integer,
  hard_count integer,
  average_score numeric,
  bayesian_score numeric,
  effective_vote_weight numeric,
  weighted_average_score numeric,
  weighted_bayesian_score numeric,
  suggested_difficulty text,
  assigned_difficulty text,
  confidence text,
  stable_threshold integer,
  updated_at timestamptz
) as $$
declare
  v_requested_doc_id text := nullif(trim(p_doc_id), '');
  v_doc_id text;
  v_document_uuid uuid;
begin
  if v_requested_doc_id is null then return; end if;
  select alias.document_uuid, coalesce(registry.current_doc_id, alias.doc_id)
  into v_document_uuid, v_doc_id
  from public.document_aliases alias
  join public.document_registry registry on registry.document_uuid = alias.document_uuid
  where alias.doc_id = v_requested_doc_id;
  if v_document_uuid is null then return; end if;

  return query
  select
    v_doc_id,
    (
      select vote.difficulty
      from public.exam_difficulty_votes vote
      where vote.document_uuid = v_document_uuid and vote.user_id = auth.uid()
      limit 1
    ),
    coalesce(stats.vote_count, 0)::integer,
    coalesce(stats.easy_count, 0)::integer,
    coalesce(stats.medium_count, 0)::integer,
    coalesce(stats.hard_count, 0)::integer,
    stats.average_score,
    stats.bayesian_score,
    coalesce(stats.effective_vote_weight, 0)::numeric,
    stats.weighted_average_score,
    stats.weighted_bayesian_score,
    stats.suggested_difficulty,
    stats.assigned_difficulty,
    coalesce(stats.confidence, 'collecting')::text,
    10::integer,
    stats.updated_at
  from (select 1) seed
  left join public.exam_difficulty_stats stats
    on stats.document_uuid = v_document_uuid;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function set_exam_difficulty_vote(
  p_doc_id text,
  p_difficulty smallint
)
returns table (
  doc_id text,
  user_difficulty smallint,
  vote_count integer,
  easy_count integer,
  medium_count integer,
  hard_count integer,
  average_score numeric,
  bayesian_score numeric,
  effective_vote_weight numeric,
  weighted_average_score numeric,
  weighted_bayesian_score numeric,
  suggested_difficulty text,
  assigned_difficulty text,
  confidence text,
  stable_threshold integer,
  updated_at timestamptz
) as $$
declare
  v_user_id uuid := auth.uid();
  v_requested_doc_id text := nullif(trim(p_doc_id), '');
  v_doc_id text;
  v_document_uuid uuid;
begin
  if v_user_id is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  if v_requested_doc_id is null then raise exception 'invalid_doc_id' using errcode = '22023'; end if;
  if p_difficulty not in (1, 2, 3) then
    raise exception 'invalid_difficulty' using errcode = '22023';
  end if;

  select alias.document_uuid, coalesce(registry.current_doc_id, alias.doc_id)
  into v_document_uuid, v_doc_id
  from public.document_aliases alias
  join public.document_registry registry on registry.document_uuid = alias.document_uuid
  where alias.doc_id = v_requested_doc_id;
  if v_document_uuid is null then raise exception 'invalid_doc_id' using errcode = '22023'; end if;

  insert into public.exam_difficulty_votes(user_id, doc_id, document_uuid, difficulty)
  values (v_user_id, v_doc_id, v_document_uuid, p_difficulty)
  on conflict (user_id, document_uuid) do update set
    doc_id = excluded.doc_id,
    difficulty = excluded.difficulty,
    updated_at = now();

  return query select * from public.get_exam_difficulty(v_doc_id);
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function refresh_exam_difficulty_stats(text) from public, anon, authenticated;
revoke execute on function get_exam_difficulty(text) from public, anon, authenticated;
revoke execute on function set_exam_difficulty_vote(text, smallint) from public, anon, authenticated;
grant execute on function get_exam_difficulty(text) to anon, authenticated;
grant execute on function set_exam_difficulty_vote(text, smallint) to authenticated;

-- Operational retention is documented as metadata only. It is deliberately
-- disabled: the project owner required that no existing database rows be
-- purged automatically.
create table if not exists operational_retention_policies (
  dataset text primary key,
  recommended_retention interval not null,
  automatic_purge_enabled boolean not null default false,
  rationale text not null,
  updated_at timestamptz not null default now(),
  constraint operational_retention_no_automatic_purge
    check (automatic_purge_enabled = false)
);

insert into operational_retention_policies(
  dataset, recommended_retention, automatic_purge_enabled, rationale
) values
  ('api_request_logs', interval '90 days', false, 'Review manually; existing rows are preserved.'),
  ('api_usage_windows', interval '2 days', false, 'Review manually; existing rows are preserved.')
on conflict (dataset) do update set
  recommended_retention = excluded.recommended_retention,
  automatic_purge_enabled = false,
  rationale = excluded.rationale,
  updated_at = now();

alter table operational_retention_policies enable row level security;
revoke all on table operational_retention_policies from public, anon, authenticated;
