-- Apply before deploying the updated content-submissions Edge Function.
-- Experiences use the existing signed Issue review flow and do not earn solution/correction points.
begin;

alter table public.content_submissions
  add column if not exists experience_data jsonb not null default '{}'::jsonb;

alter table public.content_submissions
  drop constraint if exists content_submissions_type_check,
  drop constraint if exists content_submissions_experience_data_check,
  drop constraint if exists content_submissions_experience_length;

alter table public.content_submissions
  add constraint content_submissions_type_check
    check (submission_type in ('new_solution', 'correction', 'admission_data', 'experience')),
  add constraint content_submissions_experience_data_check
    check (jsonb_typeof(experience_data) = 'object'
      and ((submission_type = 'experience' and experience_data <> '{}'::jsonb)
        or (submission_type <> 'experience' and experience_data = '{}'::jsonb))),
  add constraint content_submissions_experience_length
    check (submission_type <> 'experience' or char_length(coalesce(experience_data->>'markdown', '')) <= 50000);

create or replace function refresh_user_reputation(p_user_id uuid)
returns table (
  user_id uuid,
  level integer,
  level_key text,
  reputation_points integer,
  rating_weight numeric,
  account_age_score integer,
  contribution_score integer,
  accepted_solution_count integer,
  accepted_correction_count integer,
  submitted_solution_issue_count integer,
  submitted_correction_issue_count integer,
  issue_submission_count integer,
  converted_submission_count integer,
  last_contribution_at timestamptz,
  recalculated_at timestamptz
) as $$
declare
  v_target_user_id uuid := coalesce(p_user_id, auth.uid());
  v_registered_at timestamptz;
  v_account_age_days integer;
  v_account_age_score integer;
  v_accepted_solution_count integer;
  v_accepted_correction_count integer;
  v_submitted_solution_issue_count integer;
  v_submitted_correction_issue_count integer;
  v_issue_submission_count integer;
  v_issue_submission_score integer;
  v_converted_submission_count integer;
  v_last_issue_at timestamptz;
  v_last_contribution_at timestamptz;
  v_contribution_score integer;
  v_reputation_points integer;
  v_level integer;
  v_level_key text;
  v_rating_weight numeric(4, 2);
  v_vote_doc_id text;
begin
  if v_target_user_id is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if auth.uid() is not null and auth.uid() <> v_target_user_id then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select u.created_at
    into v_registered_at
    from auth.users u
    where u.id = v_target_user_id;

  if v_registered_at is null then
    raise exception 'user_not_found' using errcode = 'P0002';
  end if;

  v_account_age_days := greatest(
    0,
    floor(extract(epoch from (now() - v_registered_at)) / 86400)::integer
  );
  v_account_age_score := least(100, floor(v_account_age_days::numeric / 7)::integer * 4);

  select
    count(*) filter (where s.submission_type = 'new_solution')::integer,
    count(*) filter (where s.submission_type = 'correction')::integer,
    count(*)::integer,
    max(coalesce(s.updated_at, s.created_at))
  into
    v_accepted_solution_count,
    v_accepted_correction_count,
    v_converted_submission_count,
    v_last_contribution_at
  from public.content_submissions s
  where s.user_id = v_target_user_id
    and s.status = 'converted'
    and s.submission_type in ('new_solution', 'correction');

  v_accepted_solution_count := coalesce(v_accepted_solution_count, 0);
  v_accepted_correction_count := coalesce(v_accepted_correction_count, 0);
  v_converted_submission_count := coalesce(v_converted_submission_count, 0);

  select
    count(*) filter (where s.submission_type = 'new_solution')::integer,
    count(*) filter (where s.submission_type = 'correction')::integer,
    count(*)::integer,
    max(coalesce(s.updated_at, s.created_at))
  into
    v_submitted_solution_issue_count,
    v_submitted_correction_issue_count,
    v_issue_submission_count,
    v_last_issue_at
  from public.content_submissions s
  where s.user_id = v_target_user_id
    and s.status = 'issue_created'
    and s.submission_type in ('new_solution', 'correction');

  v_submitted_solution_issue_count := coalesce(v_submitted_solution_issue_count, 0);
  v_submitted_correction_issue_count := coalesce(v_submitted_correction_issue_count, 0);
  v_issue_submission_count := coalesce(v_issue_submission_count, 0);
  v_issue_submission_score := v_submitted_solution_issue_count * 40 + v_submitted_correction_issue_count * 13;
  v_contribution_score :=
    v_accepted_solution_count * 80
    + v_accepted_correction_count * 25
    + v_issue_submission_score;
  if v_last_issue_at is not null then
    v_last_contribution_at := case
      when v_last_contribution_at is null then v_last_issue_at
      else greatest(v_last_contribution_at, v_last_issue_at)
    end;
  end if;
  v_reputation_points := v_account_age_score + v_contribution_score;

  if v_reputation_points >= 800 then
    v_level := 4;
    v_level_key := 'core_contributor';
    v_rating_weight := 1.50;
  elsif v_reputation_points >= 350 then
    v_level := 3;
    v_level_key := 'trusted_contributor';
    v_rating_weight := 1.30;
  elsif v_reputation_points >= 150 then
    v_level := 2;
    v_level_key := 'contributor';
    v_rating_weight := 1.15;
  elsif v_reputation_points >= 50 then
    v_level := 1;
    v_level_key := 'learner';
    v_rating_weight := 1.05;
  else
    v_level := 0;
    v_level_key := 'newcomer';
    v_rating_weight := 1.00;
  end if;

  delete from public.user_reputation_events e
  where e.user_id = v_target_user_id
    and e.event_type in (
      'account_age',
      'submitted_solution_issue',
      'submitted_correction_issue',
      'accepted_solution',
      'accepted_correction'
    )
    and e.source_type in ('auth_user', 'content_submission');

  if v_account_age_score > 0 then
    insert into public.user_reputation_events (
      user_id,
      event_type,
      source_type,
      source_id,
      points,
      occurred_at,
      metadata
    )
    values (
      v_target_user_id,
      'account_age',
      'auth_user',
      v_target_user_id::text,
      v_account_age_score,
      v_registered_at,
      jsonb_build_object(
        'registeredAt', v_registered_at,
        'accountAgeDays', v_account_age_days
      )
    )
    on conflict on constraint user_reputation_events_user_source_unique
    do update set
      points = excluded.points,
      occurred_at = excluded.occurred_at,
      metadata = excluded.metadata;
  end if;

  insert into public.user_reputation_events (
    user_id,
    event_type,
    source_type,
    source_id,
    points,
    occurred_at,
    metadata
  )
  select
    v_target_user_id,
    case
      when s.submission_type = 'new_solution' then 'submitted_solution_issue'
      else 'submitted_correction_issue'
    end,
    'content_submission',
    s.id::text,
    case
      when s.submission_type = 'new_solution' then 40
      else 13
    end,
    coalesce(s.updated_at, s.created_at, now()),
    jsonb_strip_nulls(jsonb_build_object(
      'submissionType', s.submission_type,
      'status', s.status,
      'title', s.title,
      'targetDocId', s.target_doc_id,
      'issueNumber', s.issue_number,
      'issueUrl', s.issue_url
    ))
  from public.content_submissions s
  where s.user_id = v_target_user_id
    and s.status = 'issue_created'
    and s.submission_type in ('new_solution', 'correction')
  on conflict on constraint user_reputation_events_user_source_unique
  do update set
    points = excluded.points,
    occurred_at = excluded.occurred_at,
    metadata = excluded.metadata;

  insert into public.user_reputation_events (
    user_id,
    event_type,
    source_type,
    source_id,
    points,
    occurred_at,
    metadata
  )
  select
    v_target_user_id,
    case
      when s.submission_type = 'new_solution' then 'accepted_solution'
      else 'accepted_correction'
    end,
    'content_submission',
    s.id::text,
    case
      when s.submission_type = 'new_solution' then 80
      else 25
    end,
    coalesce(s.updated_at, s.created_at, now()),
    jsonb_strip_nulls(jsonb_build_object(
      'submissionType', s.submission_type,
      'title', s.title,
      'targetDocId', s.target_doc_id,
      'issueNumber', s.issue_number,
      'prNumber', s.pr_number,
      'prUrl', s.pr_url
    ))
  from public.content_submissions s
  where s.user_id = v_target_user_id
    and s.status = 'converted'
    and s.submission_type in ('new_solution', 'correction')
  on conflict on constraint user_reputation_events_user_source_unique
  do update set
    points = excluded.points,
    occurred_at = excluded.occurred_at,
    metadata = excluded.metadata;

  insert into public.user_reputation_profiles (
    user_id,
    level,
    level_key,
    reputation_points,
    rating_weight,
    account_age_score,
    contribution_score,
    accepted_solution_count,
    accepted_correction_count,
    submitted_solution_issue_count,
    submitted_correction_issue_count,
    issue_submission_count,
    converted_submission_count,
    last_contribution_at,
    recalculated_at,
    updated_at
  )
  values (
    v_target_user_id,
    v_level,
    v_level_key,
    v_reputation_points,
    v_rating_weight,
    v_account_age_score,
    v_contribution_score,
    v_accepted_solution_count,
    v_accepted_correction_count,
    v_submitted_solution_issue_count,
    v_submitted_correction_issue_count,
    v_issue_submission_count,
    v_converted_submission_count,
    v_last_contribution_at,
    now(),
    now()
  )
  on conflict on constraint user_reputation_profiles_pkey
  do update set
    level = excluded.level,
    level_key = excluded.level_key,
    reputation_points = excluded.reputation_points,
    rating_weight = excluded.rating_weight,
    account_age_score = excluded.account_age_score,
    contribution_score = excluded.contribution_score,
    accepted_solution_count = excluded.accepted_solution_count,
    accepted_correction_count = excluded.accepted_correction_count,
    submitted_solution_issue_count = excluded.submitted_solution_issue_count,
    submitted_correction_issue_count = excluded.submitted_correction_issue_count,
    issue_submission_count = excluded.issue_submission_count,
    converted_submission_count = excluded.converted_submission_count,
    last_contribution_at = excluded.last_contribution_at,
    recalculated_at = now(),
    updated_at = now();

  for v_vote_doc_id in
    select distinct v.doc_id
    from public.exam_difficulty_votes v
    where v.user_id = v_target_user_id
  loop
    perform public.refresh_exam_difficulty_stats(v_vote_doc_id);
  end loop;

  return query
  select
    p.user_id,
    p.level,
    p.level_key,
    p.reputation_points,
    p.rating_weight,
    p.account_age_score,
    p.contribution_score,
    p.accepted_solution_count,
    p.accepted_correction_count,
    p.submitted_solution_issue_count,
    p.submitted_correction_issue_count,
    p.issue_submission_count,
    p.converted_submission_count,
    p.last_contribution_at,
    p.recalculated_at
  from public.user_reputation_profiles p
  where p.user_id = v_target_user_id;
end;
$$ language plpgsql security definer
set search_path = '';

commit;
