begin;

drop function if exists public.get_site_contributors(integer);

create or replace function public.get_site_contributors()
returns table (
  display_name text,
  contribution_count integer,
  solution_count integer,
  correction_count integer,
  last_contribution_at timestamptz
) as $$
  with contributor_totals as (
    select
      (array_agg(
        s.public_author
        order by coalesce(s.updated_at, s.created_at) desc, s.id desc
      ))[1]::text as display_name,
      count(*)::integer as contribution_count,
      count(*) filter (where s.submission_type = 'new_solution')::integer as solution_count,
      count(*) filter (where s.submission_type = 'correction')::integer as correction_count,
      max(coalesce(s.updated_at, s.created_at)) as last_contribution_at
    from public.content_submissions s
    where s.status = 'converted'
      and trim(s.public_author) <> ''
    group by s.user_id
  )
  select
    c.display_name,
    c.contribution_count,
    c.solution_count,
    c.correction_count,
    c.last_contribution_at
  from contributor_totals c
  order by c.contribution_count desc, c.last_contribution_at desc, c.display_name asc;
$$ language sql stable security definer
set search_path = '';

revoke execute on function public.get_site_contributors() from public;
grant execute on function public.get_site_contributors() to anon, authenticated;

commit;
