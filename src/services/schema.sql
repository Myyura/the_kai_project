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
--   5. 下列表启用 RLS，前端 anon/authenticated 客户端不可直接读写，由 Edge Function service role 访问。

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
  constraint exam_documents_tags_is_array check (jsonb_typeof(tags) = 'array')
);

create index if not exists idx_exam_documents_catalog
  on exam_documents(type, university_id, department_id, program_id, year);
create index if not exists idx_exam_documents_year
  on exam_documents(year);
create index if not exists idx_exam_documents_tags
  on exam_documents using gin(tags);

drop trigger if exists update_exam_documents_updated_at on exam_documents;
create trigger update_exam_documents_updated_at
  before update on exam_documents
  for each row
  execute function update_updated_at_column();

alter table exam_documents enable row level security;
revoke all on table exam_documents from anon, authenticated;

-- ── 开发者 API Key ────────────────────────────────────────
create table if not exists api_keys (
  id                      uuid primary key default uuid_generate_v4(),
  user_id                 uuid not null references auth.users(id) on delete cascade,
  name                    text not null,
  key_prefix              text not null,
  key_hash                text not null unique,
  status                  text not null default 'active',
  rate_limit_per_minute   integer not null default 60,
  request_count           bigint not null default 0,
  last_used_at            timestamptz,
  revoked_at              timestamptz,
  updated_at              timestamptz not null default now(),
  created_at              timestamptz not null default now(),

  constraint api_keys_name_length check (char_length(name) between 1 and 80),
  constraint api_keys_status_check check (status in ('active', 'revoked')),
  constraint api_keys_rate_limit_check check (rate_limit_per_minute between 1 and 600)
);

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

-- 原子递增限流窗口，并在允许请求时更新 API Key 总调用量。
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
  next_count integer;
begin
  insert into public.api_usage_windows (api_key_id, window_start, request_count)
  values (p_api_key_id, p_window_start, 1)
  on conflict (api_key_id, window_start)
  do update set
    request_count = public.api_usage_windows.request_count + 1,
    updated_at = now()
  returning request_count into next_count;

  if next_count <= p_limit then
    update public.api_keys
    set request_count = request_count + 1,
        last_used_at = now()
    where id = p_api_key_id;
  end if;

  return query select (next_count <= p_limit), next_count;
end;
$$ language plpgsql security definer
set search_path = '';

revoke execute on function register_api_request(uuid, timestamptz, integer) from public, anon, authenticated;
grant execute on function register_api_request(uuid, timestamptz, integer) to service_role;
