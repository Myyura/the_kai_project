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

-- ── 用户数据表 ─────────────────────────────────────────────
-- 每个用户（匿名或已登录）一行数据，存储完整的 progress + notes JSON
create table if not exists user_data (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  progress    jsonb not null default '{}'::jsonb,
  notes       jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  created_at  timestamptz not null default now(),

  constraint user_data_user_id_unique unique (user_id)
);

-- 索引
create index if not exists idx_user_data_user_id on user_data(user_id);
create index if not exists idx_user_data_updated_at on user_data(updated_at);

-- ── RLS 策略 ───────────────────────────────────────────────
alter table user_data enable row level security;

-- 用户只能读写自己的数据
create policy "Users can view own data"
  on user_data for select
  using (auth.uid() = user_id);

create policy "Users can insert own data"
  on user_data for insert
  with check (auth.uid() = user_id);

create policy "Users can update own data"
  on user_data for update
  using (auth.uid() = user_id);

create policy "Users can delete own data"
  on user_data for delete
  using (auth.uid() = user_id);

-- ── 自动更新 updated_at 触发器 ─────────────────────────────
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_user_data_updated_at
  before update on user_data
  for each row
  execute function update_updated_at_column();

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
  week_start_ts timestamptz;
  week_start_ms bigint;
begin
  -- 仅已登录用户可调用
  if auth.uid() is null then
    return;
  end if;

  week_start_ts := date_trunc('week', now());
  -- 毫秒级时间戳（与前端 Date.now() 对齐）
  week_start_ms := (extract(epoch from week_start_ts) * 1000)::bigint;

  return query
  select
    sub.cnt::bigint as weekly_count,
    (sub.uid = auth.uid()) as is_current_user
  from (
    select
      ud.user_id as uid,
      jsonb_array_length(
        jsonb_path_query_array(
          ud.progress,
          '$.* ? (@.updatedAt >= $ws)',
          jsonb_build_object('ws', week_start_ms)
        )
      ) as cnt
    from public.user_data ud
    -- 利用 idx_user_data_updated_at B-tree 索引快速跳过本周未同步的用户
    where ud.updated_at >= week_start_ts
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
