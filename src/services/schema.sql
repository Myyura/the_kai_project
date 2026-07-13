-- ============================================================
-- Kai Project 云同步所需的 Supabase 数据库表结构
-- 在 Supabase SQL Editor 中执行此脚本即可
-- ============================================================
--
-- ⚠️ 重要：还需在 Supabase Dashboard 中手动配置以下服务端安全项（不可被前端绕过）：
--
--   1. Authentication → Rate Limits
--      → 设置每 IP / 每邮箱的登录尝试频率上限（推荐：10 次/小时）
--
--   2. Authentication → Providers → Email
--      → Min password length = 8
--
--   3. Authentication → Bot and Abuse Protection
--      → 启用 hCaptcha 或 Cloudflare Turnstile（防自动化暴力破解）
--
--   4. Authentication → URL Configuration
--      → 将站点的 /auth/callback 和 /reset-password 加入允许的 Redirect URLs
--
-- ============================================================

-- 启用 UUID 扩展
create extension if not exists "uuid-ossp";

-- ============================================================
-- V2：按 docId 分表存储（避免整行 JSONB 覆盖冲突）
-- ============================================================

-- ── 进度表（每条记录对应一个 doc_id） ───────────────────────
create table if not exists user_progress_items (
  id                uuid primary key default uuid_generate_v4(),
  user_id           uuid not null references auth.users(id) on delete cascade,
  doc_id            text not null,
  status            text,
  title             text,
  permalink         text,
  tags              jsonb not null default '[]'::jsonb,
  review_count      integer not null default 0,
  client_updated_at bigint not null default (extract(epoch from now()) * 1000)::bigint,
  deleted_at        timestamptz,
  updated_at        timestamptz not null default now(),
  created_at        timestamptz not null default now(),

  constraint user_progress_items_user_doc_unique unique (user_id, doc_id),
  constraint user_progress_items_status_check check (
    status in ('completed', 'reviewing') or status is null
  ),
  constraint user_progress_items_review_count_check check (review_count >= 0),
  constraint user_progress_items_tags_is_array check (jsonb_typeof(tags) = 'array')
);

create index if not exists idx_upi_user_updated_at
  on user_progress_items(user_id, updated_at);
create index if not exists idx_upi_user_client_updated_at
  on user_progress_items(user_id, client_updated_at);
create index if not exists idx_upi_user_deleted_at
  on user_progress_items(user_id, deleted_at);

-- ── 笔记表（每条记录对应一个 doc_id） ───────────────────────
create table if not exists user_note_items (
  id                uuid primary key default uuid_generate_v4(),
  user_id           uuid not null references auth.users(id) on delete cascade,
  doc_id            text not null,
  content           text,
  client_updated_at bigint not null default (extract(epoch from now()) * 1000)::bigint,
  deleted_at        timestamptz,
  updated_at        timestamptz not null default now(),
  created_at        timestamptz not null default now(),

  constraint user_note_items_user_doc_unique unique (user_id, doc_id)
);

create index if not exists idx_uni_user_updated_at
  on user_note_items(user_id, updated_at);
create index if not exists idx_uni_user_client_updated_at
  on user_note_items(user_id, client_updated_at);
create index if not exists idx_uni_user_deleted_at
  on user_note_items(user_id, deleted_at);

-- ── RLS 策略（progress） ───────────────────────────────────
alter table user_progress_items enable row level security;

drop policy if exists "Users can view own progress items" on user_progress_items;
create policy "Users can view own progress items"
  on user_progress_items for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own progress items" on user_progress_items;
create policy "Users can insert own progress items"
  on user_progress_items for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own progress items" on user_progress_items;
create policy "Users can update own progress items"
  on user_progress_items for update
  using (auth.uid() = user_id);

drop policy if exists "Users can delete own progress items" on user_progress_items;
create policy "Users can delete own progress items"
  on user_progress_items for delete
  using (auth.uid() = user_id);

-- ── RLS 策略（notes） ──────────────────────────────────────
alter table user_note_items enable row level security;

drop policy if exists "Users can view own note items" on user_note_items;
create policy "Users can view own note items"
  on user_note_items for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own note items" on user_note_items;
create policy "Users can insert own note items"
  on user_note_items for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own note items" on user_note_items;
create policy "Users can update own note items"
  on user_note_items for update
  using (auth.uid() = user_id);

drop policy if exists "Users can delete own note items" on user_note_items;
create policy "Users can delete own note items"
  on user_note_items for delete
  using (auth.uid() = user_id);

-- ── 自动更新 updated_at 触发器 ─────────────────────────────
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists update_user_progress_items_updated_at on user_progress_items;
create trigger update_user_progress_items_updated_at
  before update on user_progress_items
  for each row
  execute function update_updated_at_column();

drop trigger if exists update_user_note_items_updated_at on user_note_items;
create trigger update_user_note_items_updated_at
  before update on user_note_items
  for each row
  execute function update_updated_at_column();

-- ============================================================
-- Migration：从旧版 user_data(progress+notes JSONB 整行) 迁移到 V2 分表
-- ============================================================
-- 可重复执行：通过 ON CONFLICT + client_updated_at 比较保证幂等。
-- 建议在低峰期执行，并先备份数据库。

do $$
begin
  if to_regclass('public.user_data') is null then
    raise notice 'Legacy table public.user_data not found, skip migration.';
    return;
  end if;

  -- 迁移 progress
  execute $sql_progress$
    insert into public.user_progress_items (
      user_id,
      doc_id,
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
      kv.key as doc_id,
      case
        when (kv.value->>'status') in ('completed', 'reviewing') then kv.value->>'status'
        else null
      end as status,
      nullif(trim(kv.value->>'title'), '') as title,
      nullif(trim(kv.value->>'permalink'), '') as permalink,
      case
        when jsonb_typeof(kv.value->'tags') = 'array' then kv.value->'tags'
        else '[]'::jsonb
      end as tags,
      greatest(
        0,
        case
          when coalesce(kv.value->>'reviewCount', '') ~ '^[0-9]+$' then (kv.value->>'reviewCount')::int
          else 0
        end
      ) as review_count,
      case
        when coalesce(kv.value->>'updatedAt', '') ~ '^[0-9]+$' then (kv.value->>'updatedAt')::bigint
        else (extract(epoch from coalesce(ud.updated_at, now())) * 1000)::bigint
      end as client_updated_at,
      null::timestamptz as deleted_at,
      coalesce(ud.created_at, now()) as created_at,
      coalesce(ud.updated_at, now()) as updated_at
    from public.user_data ud
    cross join lateral jsonb_each(coalesce(ud.progress, '{}'::jsonb)) kv
    where jsonb_typeof(kv.value) = 'object'
      and (kv.value->>'status') in ('completed', 'reviewing')
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

  -- 迁移 notes
  execute $sql_notes$
    insert into public.user_note_items (
      user_id,
      doc_id,
      content,
      client_updated_at,
      deleted_at,
      created_at,
      updated_at
    )
    select
      ud.user_id,
      kv.key as doc_id,
      kv.value->>'content' as content,
      case
        when coalesce(kv.value->>'updatedAt', '') ~ '^[0-9]+$' then (kv.value->>'updatedAt')::bigint
        else (extract(epoch from coalesce(ud.updated_at, now())) * 1000)::bigint
      end as client_updated_at,
      null::timestamptz as deleted_at,
      coalesce(ud.created_at, now()) as created_at,
      coalesce(ud.updated_at, now()) as updated_at
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

  raise notice 'Migration from public.user_data to V2 tables completed.';
end;
$$;

-- 迁移后可手动验证：
-- select count(*) from public.user_progress_items;
-- select count(*) from public.user_note_items;
--
-- 若确认迁移无误，可选操作（谨慎）：
-- alter table public.user_data rename to user_data_legacy_backup;
-- 或在冷静期后 drop table public.user_data;

-- ── 服务端时间 RPC ──────────────────────────────────────────
-- 供客户端校准本地时钟偏移量（返回 ISO 8601 字符串）
create or replace function get_server_time()
returns timestamptz as $$
begin
  return now();
end;
$$ language plpgsql security definer;

-- ── 刷题排行榜 ─────────────────────────────────────────────
--
-- 排行榜使用不可变练习事件统计周期内练习过的不同题目，避免进度快照同步、
-- 状态反复切换或同一事件重试导致榜单数字失真。所有周期按日本时间计算。

create table if not exists user_practice_events (
  event_id     uuid not null,
  user_id      uuid not null references auth.users(id) on delete cascade,
  doc_id       text not null,
  event_type   text not null,
  occurred_at  timestamptz not null,
  recorded_at  timestamptz not null default now(),

  constraint user_practice_events_pkey primary key (user_id, event_id),
  constraint user_practice_events_doc_id_check
    check (char_length(trim(doc_id)) between 1 and 500),
  constraint user_practice_events_type_check
    check (event_type in ('practice', 'review'))
);

create index if not exists idx_user_practice_events_period
  on user_practice_events(occurred_at desc, user_id, doc_id);

alter table user_practice_events enable row level security;
revoke all on table user_practice_events from public, anon, authenticated;

-- 客户端仅能通过受控 RPC 批量写入自己的事件；事件 ID 保证重试幂等。
create or replace function record_practice_events(p_events jsonb)
returns integer as $$
declare
  v_user_id uuid := auth.uid();
  v_event jsonb;
  v_event_id uuid;
  v_doc_id text;
  v_event_type text;
  v_occurred_at timestamptz;
  v_occurred_ms bigint;
  v_inserted integer := 0;
  v_row_count integer := 0;
begin
  if v_user_id is null then
    raise exception 'Authentication required';
  end if;
  if p_events is null or jsonb_typeof(p_events) <> 'array' then
    raise exception 'Practice events must be an array';
  end if;
  if jsonb_array_length(p_events) > 500 then
    raise exception 'Practice events must be an array of at most 500 items';
  end if;

  for v_event in select value from jsonb_array_elements(p_events)
  loop
    if coalesce(v_event->>'id', '') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$' then
      continue;
    end if;
    v_event_id := (v_event->>'id')::uuid;
    v_doc_id := left(trim(coalesce(v_event->>'docId', '')), 500);
    v_event_type := coalesce(v_event->>'eventType', 'practice');
    begin
      v_occurred_ms := (v_event->>'occurredAt')::bigint;
      v_occurred_at := to_timestamp(v_occurred_ms / 1000.0);
    exception when others then
      v_occurred_at := now();
    end;
    if v_occurred_at is null then
      v_occurred_at := now();
    end if;

    if v_doc_id = '' or v_event_type not in ('practice', 'review') then
      continue;
    end if;
    if v_occurred_at > now() + interval '5 minutes' then
      v_occurred_at := now();
    elsif v_occurred_at < now() - interval '210 days' then
      v_occurred_at := now() - interval '210 days';
    end if;

    insert into public.user_practice_events (
      event_id, user_id, doc_id, event_type, occurred_at
    ) values (
      v_event_id, v_user_id, v_doc_id, v_event_type, v_occurred_at
    ) on conflict (user_id, event_id) do nothing;
    get diagnostics v_row_count = row_count;
    v_inserted := v_inserted + v_row_count;
  end loop;

  return v_inserted;
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function record_practice_events(jsonb) from public, anon;
grant execute on function record_practice_events(jsonb) to authenticated;

-- 初次升级时保留最近半年的现有进度作为一次兼容事件。之后全部使用事件账本。
insert into public.user_practice_events (
  event_id, user_id, doc_id, event_type, occurred_at
)
select
  uuid_generate_v5(
    uuid_ns_url(),
    'kai-progress:' || upi.user_id::text || ':' || upi.doc_id || ':' || upi.client_updated_at::text
  ),
  upi.user_id,
  upi.doc_id,
  'practice',
  to_timestamp(upi.client_updated_at / 1000.0)
from public.user_progress_items upi
where upi.deleted_at is null
  and upi.status in ('completed', 'reviewing')
  and upi.client_updated_at >= (extract(epoch from now() - interval '6 months') * 1000)::bigint
on conflict (user_id, event_id) do nothing;

-- 排行榜昵称资料。默认公开账号昵称，用户可覆盖昵称或切换为匿名 Kai友。
create table if not exists user_leaderboard_profiles (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  display_name  text,
  is_anonymous  boolean not null default false,
  updated_at    timestamptz not null default now(),
  created_at    timestamptz not null default now(),

  constraint user_leaderboard_profiles_name_check
    check (display_name is null or char_length(trim(display_name)) between 2 and 32)
);

drop trigger if exists update_user_leaderboard_profiles_updated_at on user_leaderboard_profiles;
create trigger update_user_leaderboard_profiles_updated_at
  before update on user_leaderboard_profiles
  for each row execute function update_updated_at_column();

alter table user_leaderboard_profiles enable row level security;
revoke all on table user_leaderboard_profiles from public, anon, authenticated;

create or replace function leaderboard_default_display_name(p_user_id uuid)
returns text as $$
  select left(regexp_replace(coalesce(
    nullif(trim(u.raw_user_meta_data->>'user_name'), ''),
    nullif(trim(u.raw_user_meta_data->>'preferred_username'), ''),
    nullif(trim(u.raw_user_meta_data->>'full_name'), ''),
    nullif(trim(u.raw_user_meta_data->>'name'), ''),
    'Kai友 ' || upper(substr(md5(p_user_id::text), 1, 4))
  ), '[[:space:]]+', ' ', 'g'), 32)
  from auth.users u
  where u.id = p_user_id;
$$ language sql stable security definer
set search_path = '';

revoke execute on function leaderboard_default_display_name(uuid) from public, anon, authenticated;

create or replace function get_my_leaderboard_profile()
returns table (display_name text, is_anonymous boolean, anonymous_name text) as $$
begin
  if auth.uid() is null then
    return;
  end if;
  return query
  select
    coalesce(p.display_name, public.leaderboard_default_display_name(auth.uid())),
    coalesce(p.is_anonymous, false),
    'Kai友 ' || upper(substr(md5(auth.uid()::text), 1, 4))
  from (select 1) seed
  left join public.user_leaderboard_profiles p on p.user_id = auth.uid();
end;
$$ language plpgsql stable security definer
set search_path = '';

revoke execute on function get_my_leaderboard_profile() from public, anon;
grant execute on function get_my_leaderboard_profile() to authenticated;

create or replace function set_my_leaderboard_profile(
  p_display_name text,
  p_is_anonymous boolean
)
returns table (display_name text, is_anonymous boolean, anonymous_name text) as $$
declare
  v_name text := left(regexp_replace(trim(coalesce(p_display_name, '')), '[[:space:]]+', ' ', 'g'), 32);
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;
  if char_length(v_name) < 2 then
    raise exception 'Display name must contain at least 2 characters';
  end if;

  insert into public.user_leaderboard_profiles (user_id, display_name, is_anonymous)
  values (auth.uid(), v_name, coalesce(p_is_anonymous, false))
  on conflict (user_id) do update set
    display_name = excluded.display_name,
    is_anonymous = excluded.is_anonymous;

  return query select * from public.get_my_leaderboard_profile();
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function set_my_leaderboard_profile(text, boolean) from public, anon;
grant execute on function set_my_leaderboard_profile(text, boolean) to authenticated;

drop function if exists get_weekly_leaderboard();
drop function if exists get_practice_leaderboard(text);

create function get_practice_leaderboard(p_period text default 'half_month')
returns table (
  rank_position bigint,
  display_name text,
  problem_count bigint,
  is_current_user boolean,
  is_anonymous boolean,
  is_top_ten boolean,
  participant_count bigint,
  gap_to_previous bigint,
  percentile integer,
  period_start date,
  period_end date
) as $$
declare
  v_user_id uuid := auth.uid();
  v_today date := (now() at time zone 'Asia/Tokyo')::date;
  v_start_date date;
  v_end_date date;
  v_start_at timestamptz;
  v_end_at timestamptz;
begin
  if v_user_id is null then
    return;
  end if;
  if p_period not in ('half_month', 'six_months') then
    raise exception 'Unsupported leaderboard period';
  end if;

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
    select
      e.user_id,
      count(distinct e.doc_id)::bigint as practiced
    from public.user_practice_events e
    where e.occurred_at >= v_start_at
      and e.occurred_at < v_end_at
    group by e.user_id
  ), ranked as (
    select
      c.user_id,
      c.practiced,
      dense_rank() over (order by c.practiced desc) as place,
      row_number() over (order by c.practiced desc, c.user_id) as list_position,
      count(*) over () as participants
    from counts c
  )
  select
    r.place,
    case
      when coalesce(p.is_anonymous, false)
        then 'Kai友 ' || upper(substr(md5(r.user_id::text), 1, 4))
      else coalesce(p.display_name, public.leaderboard_default_display_name(r.user_id))
    end,
    r.practiced,
    r.user_id = v_user_id,
    coalesce(p.is_anonymous, false),
    r.list_position <= 10,
    r.participants,
    case when r.user_id = v_user_id then coalesce((
      select min(c2.practiced) - r.practiced
      from counts c2
      where c2.practiced > r.practiced
    ), 0) else 0 end,
    case
      when r.participants <= 1 then 0
      else floor(100.0 * (
        select count(*) from counts c3 where c3.practiced < r.practiced
      ) / (r.participants - 1))::integer
    end,
    v_start_date,
    v_end_date - 1
  from ranked r
  left join public.user_leaderboard_profiles p on p.user_id = r.user_id
  where r.list_position <= 10 or r.user_id = v_user_id
  order by r.list_position;

  if not exists (
    select 1
    from public.user_practice_events own_event
    where own_event.user_id = v_user_id
      and own_event.occurred_at >= v_start_at
      and own_event.occurred_at < v_end_at
  ) then
    rank_position := null;
    problem_count := 0;
    is_current_user := true;
    is_top_ten := false;
    gap_to_previous := 0;
    percentile := 0;
    period_start := v_start_date;
    period_end := v_end_date - 1;

    select
      coalesce(profile.is_anonymous, false),
      case
        when coalesce(profile.is_anonymous, false)
          then 'Kai友 ' || upper(substr(md5(v_user_id::text), 1, 4))
        else coalesce(profile.display_name, public.leaderboard_default_display_name(v_user_id))
      end
    into is_anonymous, display_name
    from (select 1) seed
    left join public.user_leaderboard_profiles profile on profile.user_id = v_user_id;

    select count(distinct event_user.user_id)
    into participant_count
    from public.user_practice_events event_user
    where event_user.occurred_at >= v_start_at
      and event_user.occurred_at < v_end_at;

    return next;
  end if;
end;
$$ language plpgsql stable security definer
set search_path = '';

revoke execute on function get_practice_leaderboard(text) from public, anon;
grant execute on function get_practice_leaderboard(text) to authenticated;

-- ============================================================
-- Public API：题库 JSON API 所需表结构
-- ============================================================
--
-- 安全模型：
--   1. auth.users 继续作为网站用户/开发者账号体系。
--   2. 前端登录 JWT 只用于调用 developer-api-keys Edge Function 管理 API Key。
--   3. 第三方内容 API 只接受 kai_live_* API Key，不接受匿名访问或登录 JWT。
--   4. API Key 明文只在创建时返回一次，数据库仅保存 SHA-256 hash。
--   5. API 访问采用申请制，管理员在 Supabase Dashboard 中将申请状态改为 approved 后才能创建 key。
--   6. 下列表启用 RLS，前端 anon/authenticated 客户端不可直接读写，由 Edge Function service role 访问。

-- ── 结构化题库文档 ────────────────────────────────────────
create table if not exists exam_documents (
  doc_id                text primary key,
  type                  text not null default 'exam',
  source_path           text not null,
  title                 text not null,
  sidebar_label         text,
  university_id         text,
  university_name       text,
  department_id         text,
  department_name       text,
  program_id            text,
  program_name          text,
  year                  integer,
  year_label            text,
  file_slug             text,
  tags                  jsonb not null default '[]'::jsonb,
  school_tags           jsonb not null default '[]'::jsonb,
  learning_tags         jsonb not null default '[]'::jsonb,
  subject_ids           jsonb not null default '[]'::jsonb,
  subsubject_ids        jsonb not null default '[]'::jsonb,
  topic_ids             jsonb not null default '[]'::jsonb,
  author_markdown       text not null default '',
  description_markdown  text not null default '',
  kai_markdown          text not null default '',
  full_markdown         text not null default '',
  permalink             text not null,
  content_hash          text not null,
  synced_at             timestamptz not null default now(),
  updated_at            timestamptz not null default now(),
  created_at            timestamptz not null default now(),

  constraint exam_documents_type_check check (type in ('exam', 'guide')),
  constraint exam_documents_year_check check (year is null or (year >= 1900 and year <= 2100)),
  constraint exam_documents_tags_is_array check (jsonb_typeof(tags) = 'array'),
  constraint exam_documents_school_tags_is_array check (jsonb_typeof(school_tags) = 'array'),
  constraint exam_documents_learning_tags_is_array check (jsonb_typeof(learning_tags) = 'array'),
  constraint exam_documents_subject_ids_is_array check (jsonb_typeof(subject_ids) = 'array'),
  constraint exam_documents_subsubject_ids_is_array check (jsonb_typeof(subsubject_ids) = 'array'),
  constraint exam_documents_topic_ids_is_array check (jsonb_typeof(topic_ids) = 'array')
);

alter table exam_documents
  add column if not exists school_tags jsonb not null default '[]'::jsonb,
  add column if not exists learning_tags jsonb not null default '[]'::jsonb,
  add column if not exists subject_ids jsonb not null default '[]'::jsonb,
  add column if not exists subsubject_ids jsonb not null default '[]'::jsonb,
  add column if not exists topic_ids jsonb not null default '[]'::jsonb;

create index if not exists idx_exam_documents_catalog
  on exam_documents(type, university_id, department_id, program_id, year);
create index if not exists idx_exam_documents_year
  on exam_documents(year);
create index if not exists idx_exam_documents_tags
  on exam_documents using gin(tags);
create index if not exists idx_exam_documents_school_tags
  on exam_documents using gin(school_tags);
create index if not exists idx_exam_documents_subject_ids
  on exam_documents using gin(subject_ids);
create index if not exists idx_exam_documents_subsubject_ids
  on exam_documents using gin(subsubject_ids);
create index if not exists idx_exam_documents_topic_ids
  on exam_documents using gin(topic_ids);

drop trigger if exists update_exam_documents_updated_at on exam_documents;
create trigger update_exam_documents_updated_at
  before update on exam_documents
  for each row
  execute function update_updated_at_column();

alter table exam_documents enable row level security;
revoke all on table exam_documents from anon, authenticated;

-- ── 用户社区信誉 ───────────────────────────────────────────
--
-- 设计：
--   1. profile 是当前快照，用于个人中心展示与难度评价加权。
--   2. events 是可重算的贡献事件账本，便于以后加入 PR merged/closed 等 GitHub 状态。
--   3. 前端只展示等级与贡献次数；积分、升级距离和评价权重不直接展示。

create table if not exists user_reputation_profiles (
  user_id                    uuid primary key references auth.users(id) on delete cascade,
  level                      integer not null default 0,
  level_key                  text not null default 'newcomer',
  reputation_points          integer not null default 0,
  rating_weight              numeric(4, 2) not null default 1.00,
  account_age_score          integer not null default 0,
  contribution_score         integer not null default 0,
  accepted_solution_count    integer not null default 0,
  accepted_correction_count  integer not null default 0,
  submitted_solution_issue_count integer not null default 0,
  submitted_correction_issue_count integer not null default 0,
  issue_submission_count     integer not null default 0,
  converted_submission_count integer not null default 0,
  last_contribution_at       timestamptz,
  recalculated_at            timestamptz not null default now(),
  updated_at                 timestamptz not null default now(),
  created_at                 timestamptz not null default now(),

  constraint user_reputation_profiles_level_check
    check (level between 0 and 4),
  constraint user_reputation_profiles_level_key_check
    check (level_key in ('newcomer', 'learner', 'contributor', 'trusted_contributor', 'core_contributor')),
  constraint user_reputation_profiles_points_check
    check (reputation_points >= 0),
  constraint user_reputation_profiles_rating_weight_check
    check (rating_weight between 1.00 and 1.50),
  constraint user_reputation_profiles_scores_check
    check (
      account_age_score >= 0
      and contribution_score >= 0
      and accepted_solution_count >= 0
      and accepted_correction_count >= 0
      and submitted_solution_issue_count >= 0
      and submitted_correction_issue_count >= 0
      and issue_submission_count >= 0
      and converted_submission_count >= 0
    )
);

alter table user_reputation_profiles
  add column if not exists level integer not null default 0,
  add column if not exists level_key text not null default 'newcomer',
  add column if not exists reputation_points integer not null default 0,
  add column if not exists rating_weight numeric(4, 2) not null default 1.00,
  add column if not exists account_age_score integer not null default 0,
  add column if not exists contribution_score integer not null default 0,
  add column if not exists accepted_solution_count integer not null default 0,
  add column if not exists accepted_correction_count integer not null default 0,
  add column if not exists submitted_solution_issue_count integer not null default 0,
  add column if not exists submitted_correction_issue_count integer not null default 0,
  add column if not exists issue_submission_count integer not null default 0,
  add column if not exists converted_submission_count integer not null default 0,
  add column if not exists last_contribution_at timestamptz,
  add column if not exists recalculated_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now(),
  add column if not exists created_at timestamptz not null default now();

alter table user_reputation_profiles drop constraint if exists user_reputation_profiles_scores_check;
alter table user_reputation_profiles
  add constraint user_reputation_profiles_scores_check
  check (
    account_age_score >= 0
    and contribution_score >= 0
    and accepted_solution_count >= 0
    and accepted_correction_count >= 0
    and submitted_solution_issue_count >= 0
    and submitted_correction_issue_count >= 0
    and issue_submission_count >= 0
    and converted_submission_count >= 0
  );

create index if not exists idx_user_reputation_profiles_level
  on user_reputation_profiles(level desc, reputation_points desc);

drop trigger if exists update_user_reputation_profiles_updated_at on user_reputation_profiles;
create trigger update_user_reputation_profiles_updated_at
  before update on user_reputation_profiles
  for each row
  execute function update_updated_at_column();

alter table user_reputation_profiles enable row level security;

drop policy if exists "Users can view own reputation profile" on user_reputation_profiles;
create policy "Users can view own reputation profile"
  on user_reputation_profiles for select
  using (auth.uid() = user_id);

revoke all on table user_reputation_profiles from anon, authenticated;
grant select on table user_reputation_profiles to authenticated;

create table if not exists user_reputation_events (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  event_type    text not null,
  source_type   text not null,
  source_id     text not null,
  points        integer not null default 0,
  occurred_at   timestamptz not null default now(),
  metadata      jsonb not null default '{}'::jsonb,
  created_at    timestamptz not null default now(),

  constraint user_reputation_events_points_check
    check (points >= 0),
  constraint user_reputation_events_event_type_check
    check (event_type in (
      'account_age',
      'submitted_solution_issue',
      'submitted_correction_issue',
      'accepted_solution',
      'accepted_correction',
      'pr_merged',
      'manual_adjustment'
    )),
  constraint user_reputation_events_source_not_blank
    check (char_length(trim(source_type)) > 0 and char_length(trim(source_id)) > 0),
  constraint user_reputation_events_user_source_unique
    unique (user_id, event_type, source_type, source_id)
);

alter table user_reputation_events drop constraint if exists user_reputation_events_event_type_check;
alter table user_reputation_events
  add constraint user_reputation_events_event_type_check
  check (event_type in (
    'account_age',
    'submitted_solution_issue',
    'submitted_correction_issue',
    'accepted_solution',
    'accepted_correction',
    'pr_merged',
    'manual_adjustment'
  ));

create index if not exists idx_user_reputation_events_user_occurred
  on user_reputation_events(user_id, occurred_at desc);
create index if not exists idx_user_reputation_events_source
  on user_reputation_events(source_type, source_id);

alter table user_reputation_events enable row level security;

drop policy if exists "Users can view own reputation events" on user_reputation_events;
create policy "Users can view own reputation events"
  on user_reputation_events for select
  using (auth.uid() = user_id);

revoke all on table user_reputation_events from anon, authenticated;
grant select on table user_reputation_events to authenticated;

-- ── 社区难度评价 ─────────────────────────────────────────
--
-- 设计：
--   1. 前端仅展示 easy / medium / hard 三档。
--   2. 数据库存储为 1 / 2 / 3，并维护普通分与信誉加权分，方便后续相似题推荐排序。
--   3. 每个用户对每道题只能保留一个评价，可随时改票。
--   4. 聚合表只暴露匿名统计，不暴露任何用户身份。

create table if not exists exam_difficulty_votes (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  doc_id      text not null,
  difficulty  smallint not null,
  updated_at  timestamptz not null default now(),
  created_at  timestamptz not null default now(),

  constraint exam_difficulty_votes_user_doc_unique unique (user_id, doc_id),
  constraint exam_difficulty_votes_difficulty_check check (difficulty in (1, 2, 3)),
  constraint exam_difficulty_votes_doc_id_not_blank check (char_length(trim(doc_id)) > 0)
);

create index if not exists idx_exam_difficulty_votes_doc_id
  on exam_difficulty_votes(doc_id);
create index if not exists idx_exam_difficulty_votes_user_updated
  on exam_difficulty_votes(user_id, updated_at desc);

drop trigger if exists update_exam_difficulty_votes_updated_at on exam_difficulty_votes;
create trigger update_exam_difficulty_votes_updated_at
  before update on exam_difficulty_votes
  for each row
  execute function update_updated_at_column();

alter table exam_difficulty_votes enable row level security;

drop policy if exists "Users can view own difficulty votes" on exam_difficulty_votes;
create policy "Users can view own difficulty votes"
  on exam_difficulty_votes for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own difficulty votes" on exam_difficulty_votes;
create policy "Users can insert own difficulty votes"
  on exam_difficulty_votes for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own difficulty votes" on exam_difficulty_votes;
create policy "Users can update own difficulty votes"
  on exam_difficulty_votes for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete own difficulty votes" on exam_difficulty_votes;
create policy "Users can delete own difficulty votes"
  on exam_difficulty_votes for delete
  using (auth.uid() = user_id);

revoke all on table exam_difficulty_votes from anon, authenticated;
grant select on table exam_difficulty_votes to authenticated;

create table if not exists exam_difficulty_stats (
  doc_id                 text primary key,
  vote_count             integer not null default 0,
  easy_count             integer not null default 0,
  medium_count           integer not null default 0,
  hard_count             integer not null default 0,
  average_score          numeric(4, 2),
  bayesian_score         numeric(4, 2),
  effective_vote_weight  numeric(8, 2) not null default 0,
  weighted_average_score numeric(4, 2),
  weighted_bayesian_score numeric(4, 2),
  suggested_difficulty   text,
  assigned_difficulty    text,
  confidence             text not null default 'collecting',
  updated_at             timestamptz not null default now(),
  created_at             timestamptz not null default now(),

  constraint exam_difficulty_stats_vote_count_check check (vote_count >= 0),
  constraint exam_difficulty_stats_easy_count_check check (easy_count >= 0),
  constraint exam_difficulty_stats_medium_count_check check (medium_count >= 0),
  constraint exam_difficulty_stats_hard_count_check check (hard_count >= 0),
  constraint exam_difficulty_stats_effective_vote_weight_check check (effective_vote_weight >= 0),
  constraint exam_difficulty_stats_suggested_check
    check (suggested_difficulty in ('easy', 'medium', 'hard') or suggested_difficulty is null),
  constraint exam_difficulty_stats_assigned_check
    check (assigned_difficulty in ('easy', 'medium', 'hard') or assigned_difficulty is null),
  constraint exam_difficulty_stats_confidence_check
    check (confidence in ('collecting', 'provisional', 'stable'))
);

alter table exam_difficulty_stats
  add column if not exists effective_vote_weight numeric(8, 2) not null default 0,
  add column if not exists weighted_average_score numeric(4, 2),
  add column if not exists weighted_bayesian_score numeric(4, 2);

create index if not exists idx_exam_difficulty_stats_assigned
  on exam_difficulty_stats(assigned_difficulty, vote_count desc);
create index if not exists idx_exam_difficulty_stats_bayesian
  on exam_difficulty_stats(bayesian_score);
create index if not exists idx_exam_difficulty_stats_weighted_bayesian
  on exam_difficulty_stats(weighted_bayesian_score);

drop trigger if exists update_exam_difficulty_stats_updated_at on exam_difficulty_stats;
create trigger update_exam_difficulty_stats_updated_at
  before update on exam_difficulty_stats
  for each row
  execute function update_updated_at_column();

alter table exam_difficulty_stats enable row level security;

drop policy if exists "Anyone can view difficulty stats" on exam_difficulty_stats;
create policy "Anyone can view difficulty stats"
  on exam_difficulty_stats for select
  using (true);

revoke all on table exam_difficulty_stats from anon, authenticated;
grant select on table exam_difficulty_stats to anon, authenticated;

create or replace function difficulty_label_from_score(p_score numeric)
returns text as $$
begin
  if p_score is null then
    return null;
  end if;

  if p_score < 1.67 then
    return 'easy';
  end if;

  if p_score < 2.34 then
    return 'medium';
  end if;

  return 'hard';
end;
$$ language plpgsql immutable;

create or replace function refresh_exam_difficulty_stats(p_doc_id text)
returns void as $$
declare
  v_doc_id text := nullif(trim(p_doc_id), '');
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
  if v_doc_id is null then
    return;
  end if;

  select
    count(*)::integer,
    count(*) filter (where difficulty = 1)::integer,
    count(*) filter (where difficulty = 2)::integer,
    count(*) filter (where difficulty = 3)::integer,
    coalesce(sum(v.difficulty), 0)::integer,
    round(coalesce(sum(v.difficulty * coalesce(p.rating_weight, 1.00)), 0), 2),
    round(coalesce(sum(coalesce(p.rating_weight, 1.00)), 0), 2)
  into
    v_vote_count,
    v_easy_count,
    v_medium_count,
    v_hard_count,
    v_sum,
    v_weighted_sum,
    v_effective_vote_weight
  from public.exam_difficulty_votes v
  left join public.user_reputation_profiles p on p.user_id = v.user_id
  where v.doc_id = v_doc_id;

  if v_vote_count = 0 then
    delete from public.exam_difficulty_stats where doc_id = v_doc_id;
    return;
  end if;

  -- Bayesian 平滑：以 medium(2) 作为 5 票先验；最终标签使用信誉加权分。
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
    doc_id,
    vote_count,
    easy_count,
    medium_count,
    hard_count,
    average_score,
    bayesian_score,
    effective_vote_weight,
    weighted_average_score,
    weighted_bayesian_score,
    suggested_difficulty,
    assigned_difficulty,
    confidence,
    updated_at
  )
  values (
    v_doc_id,
    v_vote_count,
    v_easy_count,
    v_medium_count,
    v_hard_count,
    v_average,
    v_bayesian,
    v_effective_vote_weight,
    v_weighted_average,
    v_weighted_bayesian,
    v_suggested,
    v_assigned,
    v_confidence,
    now()
  )
  on conflict (doc_id)
  do update set
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

create or replace function refresh_exam_difficulty_stats_after_vote()
returns trigger as $$
begin
  if tg_op = 'DELETE' then
    perform public.refresh_exam_difficulty_stats(old.doc_id);
    return old;
  end if;

  if tg_op = 'UPDATE' and old.doc_id <> new.doc_id then
    perform public.refresh_exam_difficulty_stats(old.doc_id);
    perform public.refresh_exam_difficulty_stats(new.doc_id);
    return new;
  end if;

  perform public.refresh_exam_difficulty_stats(new.doc_id);
  return new;
end;
$$ language plpgsql security definer
set search_path = '';

drop trigger if exists refresh_exam_difficulty_stats_after_vote on exam_difficulty_votes;
create trigger refresh_exam_difficulty_stats_after_vote
  after insert or update or delete on exam_difficulty_votes
  for each row
  execute function refresh_exam_difficulty_stats_after_vote();

drop function if exists set_exam_difficulty_vote(text, smallint);
drop function if exists get_exam_difficulty(text);

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
  v_doc_id text := nullif(trim(p_doc_id), '');
begin
  if v_doc_id is null then
    return;
  end if;

  return query
  select
    v_doc_id,
    (
      select v.difficulty
      from public.exam_difficulty_votes v
      where v.doc_id = v_doc_id
        and v.user_id = auth.uid()
      limit 1
    ) as user_difficulty,
    coalesce(s.vote_count, 0)::integer,
    coalesce(s.easy_count, 0)::integer,
    coalesce(s.medium_count, 0)::integer,
    coalesce(s.hard_count, 0)::integer,
    s.average_score,
    s.bayesian_score,
    coalesce(s.effective_vote_weight, 0)::numeric,
    s.weighted_average_score,
    s.weighted_bayesian_score,
    s.suggested_difficulty,
    s.assigned_difficulty,
    coalesce(s.confidence, 'collecting')::text,
    10::integer,
    s.updated_at
  from (select 1) seed
  left join public.exam_difficulty_stats s on s.doc_id = v_doc_id;
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
  v_doc_id text := nullif(trim(p_doc_id), '');
begin
  if v_user_id is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if v_doc_id is null then
    raise exception 'invalid_doc_id' using errcode = '22023';
  end if;

  if p_difficulty not in (1, 2, 3) then
    raise exception 'invalid_difficulty' using errcode = '22023';
  end if;

  insert into public.exam_difficulty_votes (user_id, doc_id, difficulty)
  values (v_user_id, v_doc_id, p_difficulty)
  on conflict on constraint exam_difficulty_votes_user_doc_unique
  do update set
    difficulty = excluded.difficulty,
    updated_at = now();

  return query select * from public.get_exam_difficulty(v_doc_id);
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function difficulty_label_from_score(numeric) from public, anon, authenticated;
revoke execute on function refresh_exam_difficulty_stats(text) from public, anon, authenticated;
revoke execute on function refresh_exam_difficulty_stats_after_vote() from public, anon, authenticated;
revoke execute on function get_exam_difficulty(text) from public, anon, authenticated;
revoke execute on function set_exam_difficulty_vote(text, smallint) from public, anon, authenticated;
grant execute on function get_exam_difficulty(text) to anon, authenticated;
grant execute on function set_exam_difficulty_vote(text, smallint) to authenticated;

-- ── 开发者 API 访问申请 ───────────────────────────────────
create table if not exists api_access_requests (
  id                         uuid primary key default uuid_generate_v4(),
  user_id                    uuid not null references auth.users(id) on delete cascade,
  status                     text not null default 'pending',
  applicant_name             text not null default '',
  organization               text not null default '',
  contact_email              text not null default '',
  website                    text not null default '',
  intended_use               text not null default '',
  commercial_use             boolean not null default false,

  -- 合作接入/访问级别预留字段：第一版统一使用基础配置。
  plan                       text not null default 'free',
  rate_limit_per_minute      integer not null default 60,
  max_active_keys            integer not null default 3,
  commercial_allowed         boolean not null default false,
  expires_at                 timestamptz,

  reviewed_by                uuid references auth.users(id) on delete set null,
  reviewed_at                timestamptz,
  review_note                text,
  updated_at                 timestamptz not null default now(),
  created_at                 timestamptz not null default now(),

  constraint api_access_requests_user_unique unique (user_id),
  constraint api_access_requests_status_check check (status in ('pending', 'approved', 'rejected', 'revoked')),
  constraint api_access_requests_plan_check check (plan in ('free', 'research', 'partner', 'commercial')),
  constraint api_access_requests_intended_use_length check (char_length(trim(intended_use)) <= 4000),
  constraint api_access_requests_rate_limit_check check (rate_limit_per_minute between 1 and 600),
  constraint api_access_requests_max_keys_check check (max_active_keys between 1 and 10)
);

create index if not exists idx_api_access_requests_status
  on api_access_requests(status, created_at desc);
create index if not exists idx_api_access_requests_user_id
  on api_access_requests(user_id);

drop trigger if exists update_api_access_requests_updated_at on api_access_requests;
create trigger update_api_access_requests_updated_at
  before update on api_access_requests
  for each row
  execute function update_updated_at_column();

-- 使用目的为选填，只保留最大长度限制。
update api_access_requests set intended_use = '' where intended_use is null;
alter table api_access_requests alter column intended_use set default '';
alter table api_access_requests alter column intended_use set not null;
alter table api_access_requests drop constraint if exists api_access_requests_intended_use_length;
alter table api_access_requests
  add constraint api_access_requests_intended_use_length
  check (char_length(trim(intended_use)) <= 4000);

-- 旧版字段不再由业务读取；repeatable schema 不主动删除数据列。
alter table api_access_requests drop constraint if exists api_access_requests_expected_monthly_check;

alter table api_access_requests enable row level security;
revoke all on table api_access_requests from anon, authenticated;

-- ── 开发者 API Key ────────────────────────────────────────
create table if not exists api_keys (
  id                      uuid primary key default uuid_generate_v4(),
  user_id                 uuid not null references auth.users(id) on delete cascade,
  name                    text not null,
  key_prefix              text not null,
  key_hash                text not null unique,
  status                  text not null default 'active',
  rate_limit_per_minute   integer not null default 60,
  plan                    text not null default 'free',
  request_count           bigint not null default 0,
  last_used_at            timestamptz,
  revoked_at              timestamptz,
  updated_at              timestamptz not null default now(),
  created_at              timestamptz not null default now(),

  constraint api_keys_name_length check (char_length(name) between 1 and 80),
  constraint api_keys_status_check check (status in ('active', 'revoked')),
  constraint api_keys_rate_limit_check check (rate_limit_per_minute between 1 and 600),
  constraint api_keys_plan_check check (plan in ('free', 'research', 'partner', 'commercial'))
);

alter table api_keys add column if not exists plan text not null default 'free';

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'api_keys_plan_check'
  ) then
    alter table api_keys
      add constraint api_keys_plan_check
      check (plan in ('free', 'research', 'partner', 'commercial'));
  end if;
end;
$$;

-- 旧版字段不再由业务读取；repeatable schema 不主动删除数据列。
alter table api_keys drop constraint if exists api_keys_monthly_quota_check;

create index if not exists idx_api_keys_user_id
  on api_keys(user_id, created_at desc);
create index if not exists idx_api_keys_status
  on api_keys(status);

drop trigger if exists update_api_keys_updated_at on api_keys;
create trigger update_api_keys_updated_at
  before update on api_keys
  for each row
  execute function update_updated_at_column();

alter table api_keys enable row level security;
revoke all on table api_keys from anon, authenticated;

-- ── API 调用日志 ──────────────────────────────────────────
create table if not exists api_request_logs (
  id             uuid primary key default uuid_generate_v4(),
  api_key_id     uuid references api_keys(id) on delete set null,
  user_id        uuid references auth.users(id) on delete set null,
  method         text not null,
  path           text not null,
  query_params   jsonb not null default '{}'::jsonb,
  status_code    integer not null,
  result_count   integer,
  duration_ms    integer,
  ip_hash        text,
  user_agent     text,
  created_at     timestamptz not null default now(),

  constraint api_request_logs_query_params_is_object check (jsonb_typeof(query_params) = 'object')
);

create index if not exists idx_api_request_logs_key_created
  on api_request_logs(api_key_id, created_at desc);
create index if not exists idx_api_request_logs_user_created
  on api_request_logs(user_id, created_at desc);
create index if not exists idx_api_request_logs_status
  on api_request_logs(status_code);

alter table api_request_logs enable row level security;
revoke all on table api_request_logs from anon, authenticated;

-- ── API 限流窗口 ──────────────────────────────────────────
-- 旧版 api_usage_months 如已存在则保留，避免重复执行 schema 时删除历史数据。
-- 当前限流逻辑使用 api_usage_windows。

create table if not exists api_usage_windows (
  api_key_id     uuid not null references api_keys(id) on delete cascade,
  window_start   timestamptz not null,
  request_count  integer not null default 0,
  updated_at     timestamptz not null default now(),
  created_at     timestamptz not null default now(),

  primary key (api_key_id, window_start),
  constraint api_usage_windows_request_count_check check (request_count >= 0)
);

create index if not exists idx_api_usage_windows_window_start
  on api_usage_windows(window_start desc);

drop trigger if exists update_api_usage_windows_updated_at on api_usage_windows;
create trigger update_api_usage_windows_updated_at
  before update on api_usage_windows
  for each row
  execute function update_updated_at_column();

alter table api_usage_windows enable row level security;
revoke all on table api_usage_windows from anon, authenticated;

-- 原子递增分钟限流窗口，并在允许请求时更新 API Key 总调用量。
drop function if exists register_api_request(uuid, timestamptz, integer);
drop function if exists register_api_request(uuid, timestamptz, integer, timestamptz, integer);
create or replace function register_api_request(
  p_api_key_id uuid,
  p_window_start timestamptz,
  p_limit integer
)
returns table (
  allowed boolean,
  current_count integer
) as $$
declare
  next_minute_count integer;
begin
  insert into public.api_usage_windows (api_key_id, window_start, request_count)
  values (p_api_key_id, p_window_start, 1)
  on conflict (api_key_id, window_start)
  do update set
    request_count = public.api_usage_windows.request_count + 1,
    updated_at = now()
  returning request_count into next_minute_count;

  if next_minute_count <= p_limit then
    update public.api_keys
    set request_count = request_count + 1,
        last_used_at = now()
    where id = p_api_key_id;
  end if;

  return query select (next_minute_count <= p_limit), next_minute_count;
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function register_api_request(uuid, timestamptz, integer) from public, anon, authenticated;
grant execute on function register_api_request(uuid, timestamptz, integer) to service_role;

-- ============================================================
-- Agent Bridge：私有学习辅导 Agent 接入骨架
-- ============================================================
--
-- 安全模型：
--   1. 开源主站只保存 agent_user_id 映射、授权、套餐与用量账本。
--   2. 私有 Agent 保存 prompt/tools/RAG/模型调用细节。
--   3. 前端只能通过 agent-session Edge Function 创建短期 session。
--   4. 私有 Agent 只能通过 agent-context Edge Function 读取授权后的上下文。
--   5. 下列表启用 RLS，前端 anon/authenticated 客户端不可直接读写。

create table if not exists agent_user_links (
  agent_user_id uuid primary key default uuid_generate_v4(),
  user_id       uuid not null unique references auth.users(id) on delete cascade,
  updated_at    timestamptz not null default now(),
  created_at    timestamptz not null default now()
);

create index if not exists idx_agent_user_links_user_id
  on agent_user_links(user_id);

drop trigger if exists update_agent_user_links_updated_at on agent_user_links;
create trigger update_agent_user_links_updated_at
  before update on agent_user_links
  for each row
  execute function update_updated_at_column();

alter table agent_user_links enable row level security;
revoke all on table agent_user_links from anon, authenticated;

create table if not exists agent_sessions (
  id             uuid primary key default uuid_generate_v4(),
  agent_user_id  uuid not null references agent_user_links(agent_user_id) on delete cascade,
  status         text not null default 'active',
  scopes         jsonb not null default '[]'::jsonb,
  expires_at     timestamptz not null,
  revoked_at     timestamptz,
  updated_at     timestamptz not null default now(),
  created_at     timestamptz not null default now(),

  constraint agent_sessions_status_check
    check (status in ('active', 'revoked', 'expired')),
  constraint agent_sessions_scopes_is_array
    check (jsonb_typeof(scopes) = 'array')
);

create index if not exists idx_agent_sessions_agent_user_created
  on agent_sessions(agent_user_id, created_at desc);
create index if not exists idx_agent_sessions_expires
  on agent_sessions(expires_at);

drop trigger if exists update_agent_sessions_updated_at on agent_sessions;
create trigger update_agent_sessions_updated_at
  before update on agent_sessions
  for each row
  execute function update_updated_at_column();

alter table agent_sessions enable row level security;
revoke all on table agent_sessions from anon, authenticated;

create table if not exists user_ai_consents (
  user_id                    uuid primary key references auth.users(id) on delete cascade,
  allow_progress_context     boolean not null default false,
  allow_notes_context        boolean not null default false,
  allow_chat_history_context boolean not null default false,
  updated_at                 timestamptz not null default now(),
  created_at                 timestamptz not null default now()
);

drop trigger if exists update_user_ai_consents_updated_at on user_ai_consents;
create trigger update_user_ai_consents_updated_at
  before update on user_ai_consents
  for each row
  execute function update_updated_at_column();

alter table user_ai_consents enable row level security;
revoke all on table user_ai_consents from anon, authenticated;

create table if not exists ai_entitlements (
  user_id                 uuid primary key references auth.users(id) on delete cascade,
  plan                    text not null default 'free',
  status                  text not null default 'active',
  monthly_message_limit   integer not null default 50,
  monthly_token_limit     bigint not null default 500000,
  -- 双 credit 池（微美元；1 美元 = 1_000_000）。按 token 实际消耗折算美元后从对应池扣减：
  --   credit_balance_micros          标准池（如 gpt-5.3-codex-spark）
  --   premium_credit_balance_micros  付费池（如 gpt-5.5，付费用户特权；余额 0 即无权使用）
  credit_balance_micros         bigint not null default 0,
  premium_credit_balance_micros bigint not null default 0,
  enabled_models          jsonb not null default '[]'::jsonb,
  current_period_start    date not null default (date_trunc('month', now())::date),
  current_period_end      date not null default ((date_trunc('month', now()) + interval '1 month')::date),
  updated_at              timestamptz not null default now(),
  created_at              timestamptz not null default now(),

  constraint ai_entitlements_plan_check
    check (plan in ('free', 'pro', 'team', 'admin')),
  constraint ai_entitlements_status_check
    check (status in ('active', 'trialing', 'past_due', 'canceled', 'suspended')),
  constraint ai_entitlements_message_limit_check
    check (monthly_message_limit >= 0),
  constraint ai_entitlements_token_limit_check
    check (monthly_token_limit >= 0),
  constraint ai_entitlements_enabled_models_is_array
    check (jsonb_typeof(enabled_models) = 'array')
);

drop trigger if exists update_ai_entitlements_updated_at on ai_entitlements;
create trigger update_ai_entitlements_updated_at
  before update on ai_entitlements
  for each row
  execute function update_updated_at_column();

alter table ai_entitlements enable row level security;
revoke all on table ai_entitlements from anon, authenticated;

create table if not exists ai_usage_months (
  user_id            uuid not null references auth.users(id) on delete cascade,
  period_start       date not null,
  period_end         date not null,
  plan               text not null default 'free',
  messages_used      integer not null default 0,
  messages_reserved  integer not null default 0,
  input_tokens       bigint not null default 0,
  cached_input_tokens bigint not null default 0,
  output_tokens      bigint not null default 0,
  total_tokens       bigint not null default 0,
  cost_micros        bigint not null default 0,
  updated_at         timestamptz not null default now(),
  created_at         timestamptz not null default now(),

  primary key (user_id, period_start),
  constraint ai_usage_months_plan_check
    check (plan in ('free', 'pro', 'team', 'admin')),
  constraint ai_usage_months_nonnegative_check
    check (
      messages_used >= 0
      and messages_reserved >= 0
      and input_tokens >= 0
      and cached_input_tokens >= 0
      and output_tokens >= 0
      and total_tokens >= 0
      and cost_micros >= 0
    )
);

-- 按 token 实际消耗计费：补缓存输入 token（计费更低，单独累计便于按缓存价折算）。
alter table ai_usage_months
  add column if not exists cached_input_tokens bigint not null default 0;

create index if not exists idx_ai_usage_months_period
  on ai_usage_months(period_start desc);

drop trigger if exists update_ai_usage_months_updated_at on ai_usage_months;
create trigger update_ai_usage_months_updated_at
  before update on ai_usage_months
  for each row
  execute function update_updated_at_column();

alter table ai_usage_months enable row level security;
revoke all on table ai_usage_months from anon, authenticated;

create table if not exists ai_usage_reservations (
  id                 uuid primary key default uuid_generate_v4(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  agent_user_id      uuid not null references agent_user_links(agent_user_id) on delete cascade,
  session_id         uuid not null references agent_sessions(id) on delete cascade,
  idempotency_key    text not null,
  status             text not null default 'reserved',
  period_start       date not null,
  reserved_messages  integer not null default 1,
  committed_at       timestamptz,
  canceled_at        timestamptz,
  cancel_reason      text,
  updated_at         timestamptz not null default now(),
  created_at         timestamptz not null default now(),

  constraint ai_usage_reservations_session_key_unique unique (session_id, idempotency_key),
  constraint ai_usage_reservations_status_check
    check (status in ('reserved', 'committed', 'canceled', 'expired')),
  constraint ai_usage_reservations_key_length
    check (char_length(trim(idempotency_key)) between 1 and 160),
  constraint ai_usage_reservations_reserved_messages_check
    check (reserved_messages > 0)
);

create index if not exists idx_ai_usage_reservations_user_created
  on ai_usage_reservations(user_id, created_at desc);
create index if not exists idx_ai_usage_reservations_session
  on ai_usage_reservations(session_id);

drop trigger if exists update_ai_usage_reservations_updated_at on ai_usage_reservations;
create trigger update_ai_usage_reservations_updated_at
  before update on ai_usage_reservations
  for each row
  execute function update_updated_at_column();

alter table ai_usage_reservations enable row level security;
revoke all on table ai_usage_reservations from anon, authenticated;

create table if not exists ai_usage_events (
  id             uuid primary key default uuid_generate_v4(),
  reservation_id uuid references ai_usage_reservations(id) on delete set null,
  user_id        uuid not null references auth.users(id) on delete cascade,
  agent_user_id  uuid not null references agent_user_links(agent_user_id) on delete cascade,
  session_id     uuid references agent_sessions(id) on delete set null,
  provider       text not null default '',
  model          text not null default '',
  input_tokens   bigint not null default 0,
  cached_input_tokens bigint not null default 0,
  output_tokens  bigint not null default 0,
  total_tokens   bigint not null default 0,
  cost_micros    bigint not null default 0,
  status         text not null default 'succeeded',
  latency_ms     integer,
  error_code     text,
  created_at     timestamptz not null default now(),

  constraint ai_usage_events_reservation_unique unique (reservation_id),
  constraint ai_usage_events_status_check
    check (status in ('succeeded', 'failed', 'canceled')),
  constraint ai_usage_events_nonnegative_check
    check (
      input_tokens >= 0
      and cached_input_tokens >= 0
      and output_tokens >= 0
      and total_tokens >= 0
      and cost_micros >= 0
      and (latency_ms is null or latency_ms >= 0)
    )
);

alter table ai_usage_events
  add column if not exists cached_input_tokens bigint not null default 0;

create index if not exists idx_ai_usage_events_user_created
  on ai_usage_events(user_id, created_at desc);
create index if not exists idx_ai_usage_events_session_created
  on ai_usage_events(session_id, created_at desc);

alter table ai_usage_events enable row level security;
revoke all on table ai_usage_events from anon, authenticated;

-- ── 模型价目表（按官方 API 价格，每 1M token 的微美元单价；1 美元 = 1_000_000）──
create table if not exists ai_model_prices (
  model                           text primary key,
  input_micro_usd_per_mtok        bigint not null,
  cached_input_micro_usd_per_mtok bigint not null default 0,
  output_micro_usd_per_mtok       bigint not null,
  -- 该模型计费扣减的 credit 池：standard（如 spark）/ premium（如 gpt-5.5，付费特权）。
  credit_pool                     text not null default 'standard',
  updated_at                      timestamptz not null default now(),
  created_at                      timestamptz not null default now(),

  constraint ai_model_prices_nonnegative_check check (
    input_micro_usd_per_mtok >= 0
    and cached_input_micro_usd_per_mtok >= 0
    and output_micro_usd_per_mtok >= 0
  ),
  constraint ai_model_prices_credit_pool_check check (credit_pool in ('standard', 'premium'))
);

alter table ai_model_prices
  add column if not exists credit_pool text not null default 'standard';

drop trigger if exists update_ai_model_prices_updated_at on ai_model_prices;
create trigger update_ai_model_prices_updated_at
  before update on ai_model_prices
  for each row
  execute function update_updated_at_column();

alter table ai_model_prices enable row level security;
revoke all on table ai_model_prices from anon, authenticated;

-- 种子价（官方 https://developers.openai.com/api/docs/pricing，请随官方调价更新）：
--   gpt-5.5             : in $5.00 / cached $0.50 / out $30.00 每 1M（官方确认）
--   gpt-5.3-codex-spark : in $1.75 / cached $0.175 / out $14.00 每 1M
--     注：spark 当前为 research preview（尚未正式上 API），in/out 多方一致，
--     cached 官方未单列、按「约为输入价 1/10」推算；正式上线后请复核。
insert into ai_model_prices (model, input_micro_usd_per_mtok, cached_input_micro_usd_per_mtok, output_micro_usd_per_mtok, credit_pool)
values
  ('gpt-5.5', 5000000, 500000, 30000000, 'premium'),
  ('gpt-5.3-codex-spark', 1750000, 175000, 14000000, 'standard')
on conflict (model) do update set
  input_micro_usd_per_mtok = excluded.input_micro_usd_per_mtok,
  cached_input_micro_usd_per_mtok = excluded.cached_input_micro_usd_per_mtok,
  output_micro_usd_per_mtok = excluded.output_micro_usd_per_mtok,
  credit_pool = excluded.credit_pool,
  updated_at = now();

-- 既有 ai_entitlements 补双 credit 池列（幂等）
alter table ai_entitlements
  add column if not exists credit_balance_micros bigint not null default 0,
  add column if not exists premium_credit_balance_micros bigint not null default 0;

-- ── 预留：按 credit 余额放行（单轮成本未知，余额 > 0 即放行占位，commit 时按实扣）──
drop function if exists reserve_ai_message(uuid, text);
drop function if exists reserve_ai_message(uuid, text, text);
create or replace function reserve_ai_message(
  p_session_id uuid,
  p_idempotency_key text,
  p_model text
)
returns table (
  allowed boolean,
  code text,
  reservation_id uuid,
  credit_pool text,
  credit_balance_micros bigint,
  period_start date
) as $$
declare
  v_session public.agent_sessions%rowtype;
  v_link public.agent_user_links%rowtype;
  v_entitlement public.ai_entitlements%rowtype;
  v_reservation public.ai_usage_reservations%rowtype;
  v_period_start date;
  v_period_end date;
  v_key text;
  v_pool text;
  v_balance bigint;
begin
  v_key := nullif(trim(coalesce(p_idempotency_key, '')), '');
  if v_key is null then
    return query select false, 'invalid_idempotency_key', null::uuid, null::text, 0::bigint, null::date;
    return;
  end if;

  -- 该模型扣减哪个 credit 池（未登记则归 standard）
  v_pool := coalesce((select credit_pool from public.ai_model_prices where model = p_model), 'standard');

  select *
    into v_session
    from public.agent_sessions
    where id = p_session_id
      and status = 'active'
      and expires_at > now();

  if not found then
    return query select false, 'invalid_session', null::uuid, v_pool, 0::bigint, null::date;
    return;
  end if;

  select *
    into v_link
    from public.agent_user_links
    where agent_user_id = v_session.agent_user_id;

  if not found then
    return query select false, 'agent_user_not_found', null::uuid, v_pool, 0::bigint, null::date;
    return;
  end if;

  -- 幂等：同一 (session, key) 已预留则回放
  select *
    into v_reservation
    from public.ai_usage_reservations
    where session_id = p_session_id
      and idempotency_key = v_key;

  if found then
    return query select
      (v_reservation.status in ('reserved', 'committed')),
      v_reservation.status,
      v_reservation.id,
      v_pool,
      coalesce((
        select case when v_pool = 'premium' then premium_credit_balance_micros else credit_balance_micros end
        from public.ai_entitlements where user_id = v_reservation.user_id
      ), 0)::bigint,
      v_reservation.period_start;
    return;
  end if;

  insert into public.ai_entitlements (user_id)
  values (v_link.user_id)
  on conflict (user_id) do nothing;

  select *
    into v_entitlement
    from public.ai_entitlements
    where user_id = v_link.user_id
    for update;

  if v_entitlement.status not in ('active', 'trialing') then
    return query select false, 'entitlement_inactive', null::uuid, v_pool, 0::bigint, null::date;
    return;
  end if;

  -- 对应池余额门槛：用尽即拒（premium 池 = gpt-5.5 付费特权；单轮成本未知，至多透支一轮）
  v_balance := case when v_pool = 'premium'
                    then v_entitlement.premium_credit_balance_micros
                    else v_entitlement.credit_balance_micros end;
  if v_balance <= 0 then
    return query select false,
      case when v_pool = 'premium' then 'insufficient_premium_credit' else 'insufficient_credit' end,
      null::uuid, v_pool, v_balance, null::date;
    return;
  end if;

  v_period_start := date_trunc('month', now())::date;
  v_period_end := (date_trunc('month', now()) + interval '1 month')::date;

  insert into public.ai_usage_months (user_id, period_start, period_end, plan)
  values (v_link.user_id, v_period_start, v_period_end, v_entitlement.plan)
  on conflict (user_id, period_start) do nothing;

  update public.ai_usage_months
  set messages_reserved = messages_reserved + 1,
      plan = v_entitlement.plan
  where user_id = v_link.user_id
    and period_start = v_period_start;

  insert into public.ai_usage_reservations (
    user_id,
    agent_user_id,
    session_id,
    idempotency_key,
    period_start
  )
  values (
    v_link.user_id,
    v_link.agent_user_id,
    v_session.id,
    v_key,
    v_period_start
  )
  returning * into v_reservation;

  return query select true, 'reserved', v_reservation.id, v_pool, v_balance, v_period_start;
end;
$$ language plpgsql security definer
set search_path = '';

-- 注：函数类型签名不变 (uuid,text,text,bigint,bigint,bigint,text,integer,text)，
-- 仅把第 6 个 bigint 从 p_cost_micros 改为 p_cached_input_tokens——成本不再由调用方传入，
-- 改为本函数按 ai_model_prices 价目表计算，并从 credit 余额扣减。
drop function if exists commit_ai_usage(uuid, text, text, bigint, bigint, bigint, text, integer, text);
create or replace function commit_ai_usage(
  p_reservation_id uuid,
  p_provider text,
  p_model text,
  p_input_tokens bigint,
  p_cached_input_tokens bigint,
  p_output_tokens bigint,
  p_status text,
  p_latency_ms integer,
  p_error_code text
)
returns table (
  accepted boolean,
  code text,
  event_id uuid,
  cost_micros bigint
) as $$
declare
  v_reservation public.ai_usage_reservations%rowtype;
  v_event_id uuid;
  v_price public.ai_model_prices%rowtype;
  v_input bigint;
  v_cached bigint;
  v_billable_input bigint;
  v_output bigint;
  v_total bigint;
  v_cost bigint;
  v_status text;
begin
  select *
    into v_reservation
    from public.ai_usage_reservations
    where id = p_reservation_id
    for update;

  if not found then
    return query select false, 'reservation_not_found', null::uuid, 0::bigint;
    return;
  end if;

  select id into v_event_id
    from public.ai_usage_events
    where reservation_id = v_reservation.id;

  if v_reservation.status = 'committed' then
    return query select true, 'already_committed', v_event_id, 0::bigint;
    return;
  end if;

  if v_reservation.status <> 'reserved' then
    return query select false, v_reservation.status, v_event_id, 0::bigint;
    return;
  end if;

  v_input := greatest(coalesce(p_input_tokens, 0), 0);
  v_cached := least(greatest(coalesce(p_cached_input_tokens, 0), 0), v_input);
  v_output := greatest(coalesce(p_output_tokens, 0), 0);
  v_billable_input := greatest(v_input - v_cached, 0);  -- 缓存命中部分按缓存价、其余按正常价
  v_total := v_input + v_output;
  v_status := case when p_status in ('succeeded', 'failed', 'canceled') then p_status else 'failed' end;

  -- 按官方价目算美元成本（微美元）；未命中价目表则计 0 且照常记账，便于排查漏配
  select *
    into v_price
    from public.ai_model_prices
    where model = p_model;

  if found then
    -- 原始成本（微美元）→ 四舍五入到 0.001 美元（1000 微美元）粒度，单次最低 0.001 美元。
    v_cost := greatest(
      round(
        (
          v_billable_input * v_price.input_micro_usd_per_mtok
          + v_cached * v_price.cached_input_micro_usd_per_mtok
          + v_output * v_price.output_micro_usd_per_mtok
        )::numeric / 1000000000
      ) * 1000,
      1000
    )::bigint;
  else
    v_cost := 0;  -- 未登记价目：计 0、不扣费，便于排查漏配
  end if;

  insert into public.ai_usage_events (
    reservation_id,
    user_id,
    agent_user_id,
    session_id,
    provider,
    model,
    input_tokens,
    cached_input_tokens,
    output_tokens,
    total_tokens,
    cost_micros,
    status,
    latency_ms,
    error_code
  )
  values (
    v_reservation.id,
    v_reservation.user_id,
    v_reservation.agent_user_id,
    v_reservation.session_id,
    left(coalesce(p_provider, ''), 80),
    left(coalesce(p_model, ''), 120),
    v_input,
    v_cached,
    v_output,
    v_total,
    v_cost,
    v_status,
    case when p_latency_ms is null then null else greatest(p_latency_ms, 0) end,
    nullif(left(coalesce(p_error_code, ''), 120), '')
  )
  on conflict (reservation_id) do update set
    reservation_id = excluded.reservation_id
  returning id into v_event_id;

  update public.ai_usage_reservations
  set status = 'committed',
      committed_at = now()
  where id = v_reservation.id;

  update public.ai_usage_months
  set messages_reserved = greatest(messages_reserved - v_reservation.reserved_messages, 0),
      messages_used = messages_used + v_reservation.reserved_messages,
      input_tokens = input_tokens + v_input,
      cached_input_tokens = cached_input_tokens + v_cached,
      output_tokens = output_tokens + v_output,
      total_tokens = total_tokens + v_total,
      cost_micros = cost_micros + v_cost
  where user_id = v_reservation.user_id
    and period_start = v_reservation.period_start;

  -- 从对应 credit 池扣减实际美元成本（premium=gpt-5.5；未命中价目时 credit_pool 为 NULL→standard 扣 0，无副作用）
  if v_price.credit_pool = 'premium' then
    update public.ai_entitlements
    set premium_credit_balance_micros = premium_credit_balance_micros - v_cost
    where user_id = v_reservation.user_id;
  else
    update public.ai_entitlements
    set credit_balance_micros = credit_balance_micros - v_cost
    where user_id = v_reservation.user_id;
  end if;

  return query select true, 'committed', v_event_id, v_cost;
end;
$$ language plpgsql security definer
set search_path = '';

drop function if exists cancel_ai_reservation(uuid, text);
create or replace function cancel_ai_reservation(
  p_reservation_id uuid,
  p_reason text
)
returns table (
  accepted boolean,
  code text,
  reservation_id uuid
) as $$
declare
  v_reservation public.ai_usage_reservations%rowtype;
begin
  select *
    into v_reservation
    from public.ai_usage_reservations
    where id = p_reservation_id
    for update;

  if not found then
    return query select false, 'reservation_not_found', null::uuid;
    return;
  end if;

  if v_reservation.status = 'committed' then
    return query select false, 'already_committed', v_reservation.id;
    return;
  end if;

  if v_reservation.status = 'canceled' then
    return query select true, 'already_canceled', v_reservation.id;
    return;
  end if;

  update public.ai_usage_reservations
  set status = 'canceled',
      canceled_at = now(),
      cancel_reason = nullif(left(coalesce(p_reason, ''), 240), '')
  where id = v_reservation.id;

  update public.ai_usage_months
  set messages_reserved = greatest(messages_reserved - v_reservation.reserved_messages, 0)
  where user_id = v_reservation.user_id
    and period_start = v_reservation.period_start;

  return query select true, 'canceled', v_reservation.id;
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function reserve_ai_message(uuid, text, text) from public, anon, authenticated;
revoke execute on function commit_ai_usage(uuid, text, text, bigint, bigint, bigint, text, integer, text) from public, anon, authenticated;
revoke execute on function cancel_ai_reservation(uuid, text) from public, anon, authenticated;
grant execute on function reserve_ai_message(uuid, text, text) to service_role;
grant execute on function commit_ai_usage(uuid, text, text, bigint, bigint, bigint, text, integer, text) to service_role;
grant execute on function cancel_ai_reservation(uuid, text) to service_role;

-- ============================================================
-- Content Submissions：站内投稿 → GitHub Issue 收件箱
-- ============================================================
--
-- 安全模型：
--   1. 用户只能通过 content-submissions Edge Function 创建和查询自己的投稿。
--   2. 前端 anon/authenticated 客户端不可直接读写投稿表。
--   3. 公开 GitHub Issue 不包含用户邮箱或 Supabase user_id，只展示用户填写的公开署名。
--   4. CLA 确认通过 payload_signature 写入 Issue，后续 GitHub Action 转 PR 时验证。

create table if not exists content_submissions (
  id                    uuid primary key default uuid_generate_v4(),
  user_id               uuid not null references auth.users(id) on delete cascade,
  submission_type       text not null,
  status                text not null default 'pending_issue',
  title                 text not null default '',
  public_author         text not null default '',
  university_id         text not null default '',
  department_id         text not null default '',
  program_id            text not null default '',
  year                  integer,
  file_slug             text not null default '',
  target_doc_id         text not null default '',
  target_title          text not null default '',
  tags                  jsonb not null default '[]'::jsonb,
  description_markdown  text not null default '',
  kai_markdown          text not null default '',
  correction_markdown   text not null default '',
  cla_accepted_at       timestamptz not null,
  payload_hash          text,
  payload_signature     text,
  issue_number          integer,
  issue_url             text,
  pr_number             integer,
  pr_url                text,
  failure_reason        text,
  updated_at            timestamptz not null default now(),
  created_at            timestamptz not null default now(),

  constraint content_submissions_type_check
    check (submission_type in ('new_solution', 'correction')),
  constraint content_submissions_status_check
    check (status in ('pending_issue', 'issue_created', 'failed', 'converted', 'closed')),
  constraint content_submissions_year_check
    check (year is null or (year >= 1900 and year <= 2100)),
  constraint content_submissions_tags_is_array
    check (jsonb_typeof(tags) = 'array'),
  constraint content_submissions_title_length
    check (char_length(title) <= 240),
  constraint content_submissions_author_length
    check (char_length(public_author) <= 160)
);

create index if not exists idx_content_submissions_user_created
  on content_submissions(user_id, created_at desc);
create index if not exists idx_content_submissions_status_created
  on content_submissions(status, created_at desc);
create index if not exists idx_content_submissions_issue_number
  on content_submissions(issue_number);

drop trigger if exists update_content_submissions_updated_at on content_submissions;
create trigger update_content_submissions_updated_at
  before update on content_submissions
  for each row
  execute function update_updated_at_column();

alter table content_submissions enable row level security;
revoke all on table content_submissions from anon, authenticated;

drop function if exists get_my_reputation();
drop function if exists refresh_user_reputation(uuid);

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
    and s.status = 'converted';

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
    and s.status = 'issue_created';

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

create or replace function get_my_reputation()
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
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  return query
  select *
  from public.refresh_user_reputation(v_user_id);
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function refresh_user_reputation(uuid) from public, anon, authenticated;
revoke execute on function get_my_reputation() from public, anon, authenticated;
grant execute on function refresh_user_reputation(uuid) to authenticated, service_role;
grant execute on function get_my_reputation() to authenticated;

-- ============================================================
-- V3：统一公开昵称与私人题集
-- ============================================================

-- ── 全站统一公开资料 ────────────────────────────────────────

create table if not exists user_public_profiles (
  user_id                uuid primary key references auth.users(id) on delete cascade,
  public_id              uuid not null default uuid_generate_v4() unique,
  nickname               text not null,
  nickname_normalized    text not null,
  discriminator          integer not null,
  nickname_confirmed_at  timestamptz,
  nickname_changed_at    timestamptz,
  leaderboard_visible    boolean not null default true,
  updated_at              timestamptz not null default now(),
  created_at              timestamptz not null default now(),

  constraint user_public_profiles_nickname_length_check
    check (char_length(nickname) between 2 and 24),
  constraint user_public_profiles_nickname_hash_check
    check (position('#' in nickname) = 0),
  constraint user_public_profiles_discriminator_check
    check (discriminator between 0 and 99999),
  constraint user_public_profiles_nickname_tag_unique
    unique (nickname_normalized, discriminator)
);

create index if not exists idx_user_public_profiles_public_id
  on user_public_profiles(public_id);
create index if not exists idx_user_public_profiles_leaderboard
  on user_public_profiles(leaderboard_visible, user_id);

drop trigger if exists update_user_public_profiles_updated_at on user_public_profiles;
create trigger update_user_public_profiles_updated_at
  before update on user_public_profiles
  for each row execute function update_updated_at_column();

alter table user_public_profiles enable row level security;
revoke all on table user_public_profiles from public, anon, authenticated;
grant select, insert, update, delete on table user_public_profiles to service_role;

create or replace function normalize_public_nickname(p_nickname text)
returns text as $$
  select lower(regexp_replace(trim(normalize(coalesce(p_nickname, ''), NFKC)), '[[:space:]]+', ' ', 'g'));
$$ language sql immutable;

create or replace function validate_public_nickname(p_nickname text)
returns text as $$
declare
  v_name text := regexp_replace(trim(normalize(coalesce(p_nickname, ''), NFKC)), '[[:space:]]+', ' ', 'g');
begin
  if char_length(v_name) < 2 or char_length(v_name) > 24 then
    raise exception 'nickname_length_invalid' using errcode = '22023';
  end if;
  if position('#' in v_name) > 0 or v_name ~ '[[:cntrl:]]' then
    raise exception 'nickname_characters_invalid' using errcode = '22023';
  end if;
  if position(chr(1564) in v_name) > 0
    or position(chr(8206) in v_name) > 0
    or position(chr(8207) in v_name) > 0
    or position(chr(8234) in v_name) > 0
    or position(chr(8235) in v_name) > 0
    or position(chr(8236) in v_name) > 0
    or position(chr(8237) in v_name) > 0
    or position(chr(8238) in v_name) > 0
    or position(chr(8294) in v_name) > 0
    or position(chr(8295) in v_name) > 0
    or position(chr(8296) in v_name) > 0
    or position(chr(8297) in v_name) > 0 then
    raise exception 'nickname_characters_invalid' using errcode = '22023';
  end if;
  return v_name;
end;
$$ language plpgsql immutable;

create or replace function format_public_nickname(p_nickname text, p_discriminator integer)
returns text as $$
  select trim(p_nickname) || ' #' || lpad(p_discriminator::text, 5, '0');
$$ language sql immutable;

create or replace function ensure_user_public_profile(p_user_id uuid)
returns user_public_profiles as $$
declare
  v_profile public.user_public_profiles%rowtype;
  v_candidate integer;
  v_attempt integer := 0;
  v_normalized text := public.normalize_public_nickname('Kai友');
begin
  if p_user_id is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select * into v_profile
  from public.user_public_profiles p
  where p.user_id = p_user_id;
  if found then
    return v_profile;
  end if;

  loop
    v_candidate := floor(random() * 100000)::integer;
    insert into public.user_public_profiles (
      user_id, nickname, nickname_normalized, discriminator
    ) values (
      p_user_id, 'Kai友', v_normalized, v_candidate
    )
    on conflict do nothing
    returning * into v_profile;

    if found then
      return v_profile;
    end if;

    select * into v_profile
    from public.user_public_profiles p
    where p.user_id = p_user_id;
    if found then
      return v_profile;
    end if;

    v_attempt := v_attempt + 1;
    if v_attempt >= 200 then
      raise exception 'nickname_discriminator_exhausted' using errcode = '54000';
    end if;
  end loop;
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function normalize_public_nickname(text) from public, anon, authenticated;
revoke execute on function validate_public_nickname(text) from public, anon, authenticated;
revoke execute on function format_public_nickname(text, integer) from public, anon, authenticated;
revoke execute on function ensure_user_public_profile(uuid) from public, anon, authenticated;

create or replace function get_my_public_profile()
returns table (
  public_id uuid,
  nickname text,
  discriminator integer,
  display_name text,
  nickname_confirmed boolean,
  nickname_changed_at timestamptz,
  next_nickname_change_at timestamptz,
  leaderboard_visible boolean
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
    end,
    v_profile.leaderboard_visible;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function confirm_or_change_my_nickname(p_nickname text)
returns table (
  public_id uuid,
  nickname text,
  discriminator integer,
  display_name text,
  nickname_confirmed boolean,
  nickname_changed_at timestamptz,
  next_nickname_change_at timestamptz,
  leaderboard_visible boolean
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
    select 1 from public.user_public_profiles p
    where p.nickname_normalized = v_normalized
      and p.discriminator = v_discriminator
      and p.user_id <> v_user_id
  ) then
    loop
      v_discriminator := floor(random() * 100000)::integer;
      exit when not exists (
        select 1 from public.user_public_profiles p
        where p.nickname_normalized = v_normalized
          and p.discriminator = v_discriminator
      );
      v_attempt := v_attempt + 1;
      if v_attempt >= 200 then
        raise exception 'nickname_discriminator_exhausted' using errcode = '54000';
      end if;
    end loop;
  end if;

  update public.user_public_profiles p set
    nickname = v_name,
    nickname_normalized = v_normalized,
    discriminator = v_discriminator,
    nickname_confirmed_at = coalesce(p.nickname_confirmed_at, now()),
    nickname_changed_at = case
      when p.nickname_confirmed_at is null or v_is_change then now()
      else p.nickname_changed_at
    end
  where p.user_id = v_user_id;

  return query select * from public.get_my_public_profile();
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function set_my_leaderboard_visibility(p_visible boolean)
returns table (
  public_id uuid,
  nickname text,
  discriminator integer,
  display_name text,
  nickname_confirmed boolean,
  nickname_changed_at timestamptz,
  next_nickname_change_at timestamptz,
  leaderboard_visible boolean
) as $$
declare
  v_user_id uuid := auth.uid();
begin
  perform public.ensure_user_public_profile(v_user_id);
  update public.user_public_profiles p
  set leaderboard_visible = coalesce(p_visible, false)
  where p.user_id = v_user_id;
  return query select * from public.get_my_public_profile();
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function get_my_public_profile() from public, anon;
revoke execute on function confirm_or_change_my_nickname(text) from public, anon;
revoke execute on function set_my_leaderboard_visibility(boolean) from public, anon;
grant execute on function get_my_public_profile() to authenticated;
grant execute on function confirm_or_change_my_nickname(text) to authenticated;
grant execute on function set_my_leaderboard_visibility(boolean) to authenticated;

-- 将旧排行榜资料迁入统一资料。旧昵称含 # 时保留清理后的名称，但要求重新确认。
do $$
declare
  v_user record;
  v_profile public.user_public_profiles%rowtype;
  v_name text;
  v_normalized text;
  v_discriminator integer;
  v_had_profile boolean;
begin
  for v_user in
    select
      u.id,
      lp.display_name,
      coalesce(lp.is_anonymous, false) as was_anonymous
    from auth.users u
    left join public.user_leaderboard_profiles lp on lp.user_id = u.id
  loop
    select exists (
      select 1 from public.user_public_profiles p where p.user_id = v_user.id
    ) into v_had_profile;
    if v_had_profile then
      continue;
    end if;
    v_profile := public.ensure_user_public_profile(v_user.id);
    if v_user.display_name is null then
      update public.user_public_profiles
      set leaderboard_visible = not v_user.was_anonymous
      where user_id = v_user.id;
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
      select 1 from public.user_public_profiles p
      where p.nickname_normalized = v_normalized
        and p.discriminator = v_discriminator
        and p.user_id <> v_user.id
    ) loop
      v_discriminator := floor(random() * 100000)::integer;
    end loop;

    update public.user_public_profiles set
      nickname = v_name,
      nickname_normalized = v_normalized,
      discriminator = v_discriminator,
      nickname_confirmed_at = case
        when position('#' in v_user.display_name) > 0 then null
        else now()
      end,
      nickname_changed_at = null,
      leaderboard_visible = not v_user.was_anonymous
    where user_id = v_user.id;
  end loop;
end;
$$;

-- 旧昵称 RPC 保留为兼容包装器。
create or replace function get_my_leaderboard_profile()
returns table (display_name text, is_anonymous boolean, anonymous_name text) as $$
declare
  v_profile record;
begin
  select * into v_profile from public.get_my_public_profile();
  return query select
    v_profile.nickname,
    not v_profile.leaderboard_visible,
    v_profile.display_name;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function set_my_leaderboard_profile(
  p_display_name text,
  p_is_anonymous boolean
)
returns table (display_name text, is_anonymous boolean, anonymous_name text) as $$
begin
  perform * from public.confirm_or_change_my_nickname(p_display_name);
  perform * from public.set_my_leaderboard_visibility(not coalesce(p_is_anonymous, false));
  return query select * from public.get_my_leaderboard_profile();
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function get_my_leaderboard_profile() from public, anon;
revoke execute on function set_my_leaderboard_profile(text, boolean) from public, anon;
grant execute on function get_my_leaderboard_profile() to authenticated;
grant execute on function set_my_leaderboard_profile(text, boolean) to authenticated;

create or replace function get_practice_leaderboard(p_period text default 'half_month')
returns table (
  rank_position bigint,
  display_name text,
  problem_count bigint,
  is_current_user boolean,
  is_anonymous boolean,
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
  v_has_public_row boolean := false;
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
    select e.user_id, count(distinct e.doc_id)::bigint as practiced
    from public.user_practice_events e
    join public.user_public_profiles profile
      on profile.user_id = e.user_id and profile.leaderboard_visible
    where e.occurred_at >= v_start_at and e.occurred_at < v_end_at
    group by e.user_id
  ), ranked as (
    select
      c.user_id,
      c.practiced,
      dense_rank() over (order by c.practiced desc) as place,
      row_number() over (order by c.practiced desc, c.user_id) as list_position,
      count(*) over () as participants
    from counts c
  )
  select
    r.place,
    public.format_public_nickname(p.nickname, p.discriminator),
    r.practiced,
    r.user_id = v_user_id,
    false,
    r.list_position <= 10,
    r.participants,
    case when r.user_id = v_user_id then coalesce((
      select min(c2.practiced) - r.practiced from counts c2 where c2.practiced > r.practiced
    ), 0) else 0 end,
    case when r.participants <= 1 then 0 else floor(100.0 * (
      select count(*) from counts c3 where c3.practiced < r.practiced
    ) / (r.participants - 1))::integer end,
    v_start_date,
    v_end_date - 1
  from ranked r
  join public.user_public_profiles p on p.user_id = r.user_id
  where r.list_position <= 10 or r.user_id = v_user_id
  order by r.list_position;

  select v_profile.leaderboard_visible and exists (
    select 1 from public.user_practice_events e
    where e.user_id = v_user_id
      and e.occurred_at >= v_start_at and e.occurred_at < v_end_at
  ) into v_has_public_row;

  if not v_has_public_row then
    rank_position := null;
    display_name := public.format_public_nickname(v_profile.nickname, v_profile.discriminator);
    select count(distinct e.doc_id)::bigint into problem_count
    from public.user_practice_events e
    where e.user_id = v_user_id
      and e.occurred_at >= v_start_at and e.occurred_at < v_end_at;
    problem_count := coalesce(problem_count, 0);
    is_current_user := true;
    is_anonymous := not v_profile.leaderboard_visible;
    is_top_ten := false;
    select count(distinct e.user_id)::bigint into participant_count
    from public.user_practice_events e
    join public.user_public_profiles p on p.user_id = e.user_id and p.leaderboard_visible
    where e.occurred_at >= v_start_at and e.occurred_at < v_end_at;
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

-- ── 私人题集 ───────────────────────────────────────────────

create table if not exists problem_sets (
  id             uuid primary key default uuid_generate_v4(),
  owner_user_id  uuid not null references auth.users(id) on delete cascade,
  kind           text not null,
  title          text,
  description    text not null default '',
  archived_at    timestamptz,
  deleted_at     timestamptz,
  updated_at     timestamptz not null default now(),
  created_at     timestamptz not null default now(),

  constraint problem_sets_kind_check
    check (kind in ('system_later', 'system_mistakes', 'custom')),
  constraint problem_sets_title_check
    check (
      (kind <> 'custom' and title is null)
      or (kind = 'custom' and char_length(trim(title)) between 1 and 80)
    ),
  constraint problem_sets_description_check
    check (char_length(description) <= 2000),
  constraint problem_sets_system_archive_check
    check (kind = 'custom' or (archived_at is null and deleted_at is null))
);

create unique index if not exists idx_problem_sets_owner_system_kind
  on problem_sets(owner_user_id, kind)
  where kind in ('system_later', 'system_mistakes');
create index if not exists idx_problem_sets_owner_updated
  on problem_sets(owner_user_id, updated_at desc)
  where deleted_at is null;

create table if not exists problem_set_items (
  id                  uuid primary key default uuid_generate_v4(),
  set_id              uuid not null references problem_sets(id) on delete cascade,
  doc_id              text not null,
  position            integer not null default 0,
  annotation_markdown text not null default '',
  title_snapshot      text not null default '',
  permalink_snapshot  text not null default '',
  tags_snapshot       jsonb not null default '[]'::jsonb,
  updated_at          timestamptz not null default now(),
  created_at          timestamptz not null default now(),

  constraint problem_set_items_set_doc_unique unique (set_id, doc_id),
  constraint problem_set_items_doc_not_blank check (char_length(trim(doc_id)) > 0),
  constraint problem_set_items_position_check check (position >= 0),
  constraint problem_set_items_annotation_check check (char_length(annotation_markdown) <= 1000),
  constraint problem_set_items_tags_check check (jsonb_typeof(tags_snapshot) = 'array')
);

create index if not exists idx_problem_set_items_order
  on problem_set_items(set_id, position, created_at);
create index if not exists idx_problem_set_items_doc
  on problem_set_items(doc_id, set_id);

drop trigger if exists update_problem_sets_updated_at on problem_sets;
create trigger update_problem_sets_updated_at
  before update on problem_sets
  for each row execute function update_updated_at_column();
drop trigger if exists update_problem_set_items_updated_at on problem_set_items;
create trigger update_problem_set_items_updated_at
  before update on problem_set_items
  for each row execute function update_updated_at_column();

alter table problem_sets enable row level security;
alter table problem_set_items enable row level security;

drop policy if exists "Users can view own problem sets" on problem_sets;
create policy "Users can view own problem sets" on problem_sets for select
  using (auth.uid() = owner_user_id);
drop policy if exists "Users can manage own problem sets" on problem_sets;
create policy "Users can manage own problem sets" on problem_sets for all
  using (auth.uid() = owner_user_id)
  with check (auth.uid() = owner_user_id);
drop policy if exists "Users can view own problem set items" on problem_set_items;
create policy "Users can view own problem set items" on problem_set_items for select
  using (exists (
    select 1 from public.problem_sets s
    where s.id = set_id and s.owner_user_id = auth.uid()
  ));
drop policy if exists "Users can manage own problem set items" on problem_set_items;
create policy "Users can manage own problem set items" on problem_set_items for all
  using (exists (
    select 1 from public.problem_sets s
    where s.id = set_id and s.owner_user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.problem_sets s
    where s.id = set_id and s.owner_user_id = auth.uid()
  ));

revoke all on table problem_sets, problem_set_items from public, anon, authenticated;
grant select, insert, update, delete on table problem_sets, problem_set_items to service_role;

create or replace function ensure_my_problem_sets()
returns void as $$
declare
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  insert into public.problem_sets(owner_user_id, kind, title)
  values
    (v_user_id, 'system_later', null),
    (v_user_id, 'system_mistakes', null)
  on conflict do nothing;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function compact_problem_set_positions(p_set_id uuid)
returns void as $$
  update public.problem_set_items i
  set position = ordered.next_position
  from (
    select
      item.id,
      (row_number() over (order by item.position, item.created_at, item.id) - 1)::integer as next_position
    from public.problem_set_items item
    where item.set_id = p_set_id
  ) ordered
  where i.id = ordered.id and i.position <> ordered.next_position;
$$ language sql security definer
set search_path = '';

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
begin
  perform public.ensure_my_problem_sets();
  return query
  select
    s.id,
    s.kind,
    s.title,
    s.description,
    count(i.id)::bigint,
    count(i.id) filter (where p.status = 'completed' and p.deleted_at is null)::bigint,
    count(i.id) filter (where p.status = 'reviewing' and p.deleted_at is null)::bigint,
    case when nullif(trim(p_doc_id), '') is null then false
      else coalesce(bool_or(i.doc_id = trim(p_doc_id)), false) end,
    s.archived_at,
    s.updated_at,
    s.created_at
  from public.problem_sets s
  left join public.problem_set_items i on i.set_id = s.id
  left join public.user_progress_items p
    on p.user_id = v_user_id and p.doc_id = i.doc_id
  where s.owner_user_id = v_user_id and s.deleted_at is null
  group by s.id
  order by
    case s.kind when 'system_later' then 0 when 'system_mistakes' then 1 else 2 end,
    s.updated_at desc;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function get_my_problem_set(p_set_id uuid)
returns table (
  set_id uuid,
  kind text,
  set_title text,
  set_description text,
  archived_at timestamptz,
  item_id uuid,
  doc_id text,
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
    select 1 from public.problem_sets s
    where s.id = p_set_id and s.owner_user_id = v_user_id and s.deleted_at is null
  ) then
    raise exception 'problem_set_not_found' using errcode = 'P0002';
  end if;

  return query
  select
    s.id,
    s.kind,
    s.title,
    s.description,
    s.archived_at,
    i.id,
    i.doc_id,
    i.position,
    i.annotation_markdown,
    coalesce(d.title, i.title_snapshot),
    coalesce(d.permalink, i.permalink_snapshot),
    coalesce(d.tags, i.tags_snapshot),
    d.doc_id is not null,
    coalesce(p.status, 'not_started'),
    coalesce(p.review_count, 0),
    i.updated_at,
    i.created_at
  from public.problem_sets s
  left join public.problem_set_items i on i.set_id = s.id
  left join public.exam_documents d on d.doc_id = i.doc_id
  left join public.user_progress_items p
    on p.user_id = v_user_id and p.doc_id = i.doc_id and p.deleted_at is null
  where s.id = p_set_id
  order by
    case when s.kind = 'custom' then i.position end asc nulls last,
    case when s.kind <> 'custom' then i.created_at end desc nulls last,
    i.created_at;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function create_my_problem_set(p_title text, p_description text default '')
returns uuid as $$
declare
  v_user_id uuid := auth.uid();
  v_id uuid;
  v_title text := trim(coalesce(p_title, ''));
  v_description text := coalesce(p_description, '');
begin
  if v_user_id is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  perform 1 from auth.users u where u.id = v_user_id for update;
  if char_length(v_title) < 1 or char_length(v_title) > 80 then
    raise exception 'problem_set_title_invalid' using errcode = '22023';
  end if;
  if char_length(v_description) > 2000 then
    raise exception 'problem_set_description_too_long' using errcode = '22023';
  end if;
  if (select count(*) from public.problem_sets s
      where s.owner_user_id = v_user_id and s.kind = 'custom' and s.deleted_at is null) >= 100 then
    raise exception 'problem_set_limit_reached' using errcode = '54000';
  end if;
  insert into public.problem_sets(owner_user_id, kind, title, description)
  values (v_user_id, 'custom', v_title, v_description)
  returning id into v_id;
  return v_id;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function update_my_problem_set(p_set_id uuid, p_title text, p_description text default '')
returns void as $$
declare
  v_user_id uuid := auth.uid();
  v_title text := trim(coalesce(p_title, ''));
  v_description text := coalesce(p_description, '');
begin
  if char_length(v_title) < 1 or char_length(v_title) > 80 then
    raise exception 'problem_set_title_invalid' using errcode = '22023';
  end if;
  if char_length(v_description) > 2000 then
    raise exception 'problem_set_description_too_long' using errcode = '22023';
  end if;
  update public.problem_sets s
  set title = v_title, description = v_description
  where s.id = p_set_id and s.owner_user_id = v_user_id
    and s.kind = 'custom' and s.deleted_at is null;
  if not found then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function archive_my_problem_set(p_set_id uuid, p_archived boolean)
returns void as $$
begin
  update public.problem_sets s
  set archived_at = case when coalesce(p_archived, false) then now() else null end
  where s.id = p_set_id and s.owner_user_id = auth.uid()
    and s.kind = 'custom' and s.deleted_at is null;
  if not found then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function delete_my_problem_set(p_set_id uuid)
returns void as $$
begin
  update public.problem_sets s set deleted_at = now(), archived_at = now()
  where s.id = p_set_id and s.owner_user_id = auth.uid()
    and s.kind = 'custom' and s.deleted_at is null;
  if not found then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function set_doc_problem_set_memberships(
  p_doc_id text,
  p_set_ids uuid[] default '{}'::uuid[]
)
returns void as $$
declare
  v_user_id uuid := auth.uid();
  v_doc_id text := nullif(trim(p_doc_id), '');
  v_set_ids uuid[] := coalesce(p_set_ids, '{}'::uuid[]);
  v_set_id uuid;
  v_doc public.exam_documents%rowtype;
  v_position integer;
  v_touched_set_ids uuid[];
begin
  if v_user_id is null then raise exception 'not_authenticated' using errcode = '28000'; end if;
  if v_doc_id is null then raise exception 'invalid_doc_id' using errcode = '22023'; end if;
  perform public.ensure_my_problem_sets();
  perform 1 from public.problem_sets s
  where s.owner_user_id = v_user_id and s.deleted_at is null and s.archived_at is null
  order by s.id for update;

  select * into v_doc from public.exam_documents d where d.doc_id = v_doc_id;
  if not found then raise exception 'invalid_doc_id' using errcode = '22023'; end if;

  if exists (
    select 1 from unnest(v_set_ids) requested(id)
    left join public.problem_sets s
      on s.id = requested.id and s.owner_user_id = v_user_id
      and s.deleted_at is null and s.archived_at is null
    where s.id is null
  ) then
    raise exception 'invalid_problem_set' using errcode = '22023';
  end if;

  select coalesce(array_agg(distinct i.set_id), '{}'::uuid[]) into v_touched_set_ids
  from public.problem_set_items i
  join public.problem_sets s on s.id = i.set_id
  where i.doc_id = v_doc_id and s.owner_user_id = v_user_id
    and s.deleted_at is null and s.archived_at is null;

  delete from public.problem_set_items i
  using public.problem_sets s
  where i.set_id = s.id and i.doc_id = v_doc_id
    and s.owner_user_id = v_user_id and s.deleted_at is null and s.archived_at is null
    and not (s.id = any(v_set_ids));

  foreach v_set_id in array v_touched_set_ids loop
    perform public.compact_problem_set_positions(v_set_id);
  end loop;

  foreach v_set_id in array v_set_ids loop
    if (select count(*) from public.problem_set_items i where i.set_id = v_set_id) >= 2000
      and not exists (select 1 from public.problem_set_items i where i.set_id = v_set_id and i.doc_id = v_doc_id) then
      raise exception 'problem_set_item_limit_reached' using errcode = '54000';
    end if;
    select coalesce(max(i.position), -1) + 1 into v_position
    from public.problem_set_items i where i.set_id = v_set_id;
    insert into public.problem_set_items (
      set_id, doc_id, position, title_snapshot, permalink_snapshot, tags_snapshot
    ) values (
      v_set_id, v_doc_id, v_position, v_doc.title, v_doc.permalink, v_doc.tags
    ) on conflict (set_id, doc_id) do nothing;
  end loop;

  update public.problem_sets s set updated_at = now()
  where s.owner_user_id = v_user_id and s.deleted_at is null
    and (s.id = any(v_set_ids) or s.id = any(v_touched_set_ids));
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function reorder_problem_set_items(p_set_id uuid, p_item_ids uuid[])
returns void as $$
declare
  v_user_id uuid := auth.uid();
  v_total integer;
begin
  if not exists (
    select 1 from public.problem_sets s
    where s.id = p_set_id and s.owner_user_id = v_user_id
      and s.kind = 'custom' and s.deleted_at is null and s.archived_at is null
  ) then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;

  select count(*) into v_total from public.problem_set_items i where i.set_id = p_set_id;
  if coalesce(array_length(p_item_ids, 1), 0) <> v_total
    or (select count(distinct x) from unnest(coalesce(p_item_ids, '{}'::uuid[])) x) <> v_total
    or exists (
      select 1 from unnest(coalesce(p_item_ids, '{}'::uuid[])) x
      left join public.problem_set_items i on i.id = x and i.set_id = p_set_id
      where i.id is null
    ) then
    raise exception 'invalid_problem_set_order' using errcode = '22023';
  end if;

  update public.problem_set_items i set position = (ordered.ordinality - 1)::integer
  from unnest(p_item_ids) with ordinality ordered(id, ordinality)
  where i.id = ordered.id and i.set_id = p_set_id;
  update public.problem_sets set updated_at = now() where id = p_set_id;
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function update_problem_set_item_annotation(p_item_id uuid, p_annotation text)
returns void as $$
declare
  v_annotation text := coalesce(p_annotation, '');
begin
  if char_length(v_annotation) > 1000 then
    raise exception 'problem_set_annotation_too_long' using errcode = '22023';
  end if;
  update public.problem_set_items i set annotation_markdown = v_annotation
  from public.problem_sets s
  where i.id = p_item_id and s.id = i.set_id
    and s.owner_user_id = auth.uid()
    and s.deleted_at is null and s.archived_at is null;
  if not found then raise exception 'problem_set_item_not_found' using errcode = 'P0002'; end if;
  update public.problem_sets s set updated_at = now()
  where s.id = (select i.set_id from public.problem_set_items i where i.id = p_item_id);
end;
$$ language plpgsql security definer
set search_path = '';

create or replace function remove_problem_set_items(p_set_id uuid, p_item_ids uuid[])
returns void as $$
begin
  if not exists (
    select 1 from public.problem_sets s
    where s.id = p_set_id and s.owner_user_id = auth.uid()
      and s.deleted_at is null and s.archived_at is null
  ) then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;
  if exists (
    select 1 from unnest(coalesce(p_item_ids, '{}'::uuid[])) requested(id)
    left join public.problem_set_items i on i.id = requested.id and i.set_id = p_set_id
    where i.id is null
  ) then raise exception 'problem_set_item_not_found' using errcode = 'P0002'; end if;
  delete from public.problem_set_items i
  where i.set_id = p_set_id and i.id = any(coalesce(p_item_ids, '{}'::uuid[]));
  perform public.compact_problem_set_positions(p_set_id);
  update public.problem_sets set updated_at = now() where id = p_set_id;
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
  perform 1 from public.problem_sets s
  where s.id in (p_source_set_id, p_target_set_id)
    and s.owner_user_id = v_user_id
  order by s.id for update;
  if not exists (
    select 1 from public.problem_sets s where s.id = p_source_set_id
      and s.owner_user_id = v_user_id and s.deleted_at is null and s.archived_at is null
  ) or not exists (
    select 1 from public.problem_sets s where s.id = p_target_set_id
      and s.owner_user_id = v_user_id and s.deleted_at is null and s.archived_at is null
  ) then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;

  if exists (
    select 1 from unnest(coalesce(p_item_ids, '{}'::uuid[])) requested(id)
    left join public.problem_set_items source
      on source.id = requested.id and source.set_id = p_source_set_id
    where source.id is null
  ) then raise exception 'problem_set_item_not_found' using errcode = 'P0002'; end if;

  select count(*) into v_target_count from public.problem_set_items where set_id = p_target_set_id;
  select count(*) into v_new_count
  from public.problem_set_items source
  where source.set_id = p_source_set_id
    and source.id = any(coalesce(p_item_ids, '{}'::uuid[]))
    and not exists (
      select 1 from public.problem_set_items target
      where target.set_id = p_target_set_id and target.doc_id = source.doc_id
    );
  if v_target_count + v_new_count > 2000 then
    raise exception 'problem_set_item_limit_reached' using errcode = '54000';
  end if;
  select coalesce(max(position), -1) + 1 into v_offset
  from public.problem_set_items where set_id = p_target_set_id;

  insert into public.problem_set_items (
    set_id, doc_id, position, annotation_markdown,
    title_snapshot, permalink_snapshot, tags_snapshot
  )
  select
    p_target_set_id,
    source.doc_id,
    (v_offset + row_number() over (order by source.position, source.created_at) - 1)::integer,
    source.annotation_markdown,
    source.title_snapshot,
    source.permalink_snapshot,
    source.tags_snapshot
  from public.problem_set_items source
  where source.set_id = p_source_set_id
    and source.id = any(coalesce(p_item_ids, '{}'::uuid[]))
  on conflict (set_id, doc_id) do nothing;

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

revoke execute on function ensure_my_problem_sets() from public, anon, authenticated;
revoke execute on function compact_problem_set_positions(uuid) from public, anon, authenticated;
revoke execute on function get_my_problem_sets(text) from public, anon;
revoke execute on function get_my_problem_set(uuid) from public, anon;
revoke execute on function create_my_problem_set(text, text) from public, anon;
revoke execute on function update_my_problem_set(uuid, text, text) from public, anon;
revoke execute on function archive_my_problem_set(uuid, boolean) from public, anon;
revoke execute on function delete_my_problem_set(uuid) from public, anon;
revoke execute on function set_doc_problem_set_memberships(text, uuid[]) from public, anon;
revoke execute on function reorder_problem_set_items(uuid, uuid[]) from public, anon;
revoke execute on function update_problem_set_item_annotation(uuid, text) from public, anon;
revoke execute on function remove_problem_set_items(uuid, uuid[]) from public, anon;
revoke execute on function transfer_problem_set_items(uuid, uuid, uuid[], boolean) from public, anon;

grant execute on function get_my_problem_sets(text) to authenticated;
grant execute on function get_my_problem_set(uuid) to authenticated;
grant execute on function create_my_problem_set(text, text) to authenticated;
grant execute on function update_my_problem_set(uuid, text, text) to authenticated;
grant execute on function archive_my_problem_set(uuid, boolean) to authenticated;
grant execute on function delete_my_problem_set(uuid) to authenticated;
grant execute on function set_doc_problem_set_memberships(text, uuid[]) to authenticated;
grant execute on function reorder_problem_set_items(uuid, uuid[]) to authenticated;
grant execute on function update_problem_set_item_annotation(uuid, text) to authenticated;
grant execute on function remove_problem_set_items(uuid, uuid[]) to authenticated;
grant execute on function transfer_problem_set_items(uuid, uuid, uuid[], boolean) to authenticated;
