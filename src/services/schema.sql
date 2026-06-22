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

-- ── 本周刷题排行榜 RPC ─────────────────────────────────────
--
-- 安全模型：
--   使用 security definer 在服务端完成跨用户聚合，客户端无法访问原始数据。
--   函数内部强制要求已登录（auth.uid() IS NOT NULL），未登录调用直接返回空。
--   返回值仅包含刷题数量 + 是否为当前用户，不暴露任何用户身份信息。
--   通过 REVOKE/GRANT 限制仅 authenticated 角色可调用。
--
create or replace function get_weekly_leaderboard()
returns table (
  weekly_count bigint,
  is_current_user boolean
) as $$
declare
  week_start_ms bigint;
begin
  -- 仅已登录用户可调用
  if auth.uid() is null then
    return;
  end if;

  -- 毫秒级时间戳（与前端 Date.now() 对齐）
  week_start_ms := (extract(epoch from date_trunc('week', now())) * 1000)::bigint;

  return query
  select
    sub.cnt::bigint as weekly_count,
    (sub.uid = auth.uid()) as is_current_user
  from (
    select
      upi.user_id as uid,
      count(*) as cnt
    from public.user_progress_items upi
    where upi.deleted_at is null
      and upi.status in ('completed', 'reviewing')
      and upi.client_updated_at >= week_start_ms
    group by upi.user_id
  ) sub
  where sub.cnt > 0
  order by sub.cnt desc
  limit 10;
end;
$$ language plpgsql security definer
set search_path = '';

-- 仅允许已登录用户调用排行榜函数
revoke execute on function get_weekly_leaderboard() from public, anon;
grant execute on function get_weekly_leaderboard() to authenticated;

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

-- 清理旧版字段，当前只保留每分钟限流。
alter table api_access_requests drop constraint if exists api_access_requests_expected_monthly_check;
alter table api_access_requests drop column if exists expected_monthly_requests;

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

-- 清理旧版字段，当前只保留每分钟限流。
alter table api_keys drop constraint if exists api_keys_monthly_quota_check;
alter table api_keys drop column if exists monthly_quota;

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
drop table if exists api_usage_months;

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
      and output_tokens >= 0
      and total_tokens >= 0
      and cost_micros >= 0
    )
);

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
      and output_tokens >= 0
      and total_tokens >= 0
      and cost_micros >= 0
      and (latency_ms is null or latency_ms >= 0)
    )
);

create index if not exists idx_ai_usage_events_user_created
  on ai_usage_events(user_id, created_at desc);
create index if not exists idx_ai_usage_events_session_created
  on ai_usage_events(session_id, created_at desc);

alter table ai_usage_events enable row level security;
revoke all on table ai_usage_events from anon, authenticated;

drop function if exists reserve_ai_message(uuid, text);
create or replace function reserve_ai_message(
  p_session_id uuid,
  p_idempotency_key text
)
returns table (
  allowed boolean,
  code text,
  reservation_id uuid,
  current_messages integer,
  message_limit integer,
  period_start date
) as $$
declare
  v_session public.agent_sessions%rowtype;
  v_link public.agent_user_links%rowtype;
  v_entitlement public.ai_entitlements%rowtype;
  v_reservation public.ai_usage_reservations%rowtype;
  v_period_start date;
  v_period_end date;
  v_used integer;
  v_reserved integer;
  v_key text;
begin
  v_key := nullif(trim(coalesce(p_idempotency_key, '')), '');
  if v_key is null then
    return query select false, 'invalid_idempotency_key', null::uuid, 0, 0, null::date;
    return;
  end if;

  select *
    into v_session
    from public.agent_sessions
    where id = p_session_id
      and status = 'active'
      and expires_at > now();

  if not found then
    return query select false, 'invalid_session', null::uuid, 0, 0, null::date;
    return;
  end if;

  select *
    into v_link
    from public.agent_user_links
    where agent_user_id = v_session.agent_user_id;

  if not found then
    return query select false, 'agent_user_not_found', null::uuid, 0, 0, null::date;
    return;
  end if;

  select *
    into v_reservation
    from public.ai_usage_reservations
    where session_id = p_session_id
      and idempotency_key = v_key;

  if found then
    select coalesce(messages_used, 0), coalesce(messages_reserved, 0)
      into v_used, v_reserved
      from public.ai_usage_months
      where user_id = v_reservation.user_id
        and period_start = v_reservation.period_start;

    return query select
      (v_reservation.status in ('reserved', 'committed')),
      v_reservation.status,
      v_reservation.id,
      coalesce(v_used, 0) + coalesce(v_reserved, 0),
      coalesce((select monthly_message_limit from public.ai_entitlements where user_id = v_reservation.user_id), 0),
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
    return query select false, 'entitlement_inactive', null::uuid, 0, v_entitlement.monthly_message_limit, null::date;
    return;
  end if;

  v_period_start := date_trunc('month', now())::date;
  v_period_end := (date_trunc('month', now()) + interval '1 month')::date;

  insert into public.ai_usage_months (user_id, period_start, period_end, plan)
  values (v_link.user_id, v_period_start, v_period_end, v_entitlement.plan)
  on conflict (user_id, period_start) do nothing;

  select messages_used, messages_reserved
    into v_used, v_reserved
    from public.ai_usage_months
    where user_id = v_link.user_id
      and period_start = v_period_start
    for update;

  if coalesce(v_used, 0) + coalesce(v_reserved, 0) >= v_entitlement.monthly_message_limit then
    return query select false, 'quota_exceeded', null::uuid, coalesce(v_used, 0) + coalesce(v_reserved, 0), v_entitlement.monthly_message_limit, v_period_start;
    return;
  end if;

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

  return query select true, 'reserved', v_reservation.id, coalesce(v_used, 0) + coalesce(v_reserved, 0) + 1, v_entitlement.monthly_message_limit, v_period_start;
end;
$$ language plpgsql security definer
set search_path = '';

drop function if exists commit_ai_usage(uuid, text, text, bigint, bigint, bigint, text, integer, text);
create or replace function commit_ai_usage(
  p_reservation_id uuid,
  p_provider text,
  p_model text,
  p_input_tokens bigint,
  p_output_tokens bigint,
  p_cost_micros bigint,
  p_status text,
  p_latency_ms integer,
  p_error_code text
)
returns table (
  accepted boolean,
  code text,
  event_id uuid
) as $$
declare
  v_reservation public.ai_usage_reservations%rowtype;
  v_event_id uuid;
  v_input bigint;
  v_output bigint;
  v_cost bigint;
  v_total bigint;
  v_status text;
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

  select id into v_event_id
    from public.ai_usage_events
    where reservation_id = v_reservation.id;

  if v_reservation.status = 'committed' then
    return query select true, 'already_committed', v_event_id;
    return;
  end if;

  if v_reservation.status <> 'reserved' then
    return query select false, v_reservation.status, v_event_id;
    return;
  end if;

  v_input := greatest(coalesce(p_input_tokens, 0), 0);
  v_output := greatest(coalesce(p_output_tokens, 0), 0);
  v_total := v_input + v_output;
  v_cost := greatest(coalesce(p_cost_micros, 0), 0);
  v_status := case when p_status in ('succeeded', 'failed', 'canceled') then p_status else 'failed' end;

  insert into public.ai_usage_events (
    reservation_id,
    user_id,
    agent_user_id,
    session_id,
    provider,
    model,
    input_tokens,
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
      output_tokens = output_tokens + v_output,
      total_tokens = total_tokens + v_total,
      cost_micros = cost_micros + v_cost
  where user_id = v_reservation.user_id
    and period_start = v_reservation.period_start;

  return query select true, 'committed', v_event_id;
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

revoke execute on function reserve_ai_message(uuid, text) from public, anon, authenticated;
revoke execute on function commit_ai_usage(uuid, text, text, bigint, bigint, bigint, text, integer, text) from public, anon, authenticated;
revoke execute on function cancel_ai_reservation(uuid, text) from public, anon, authenticated;
grant execute on function reserve_ai_message(uuid, text) to service_role;
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
