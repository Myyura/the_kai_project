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
