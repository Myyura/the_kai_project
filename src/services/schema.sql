-- ============================================================
-- Kai Project Supabase 基线 · 2026-09-16
--
-- 仅供全新 Supabase 项目：在 SQL Editor 完整执行一次。
-- 直接创建当前结构，包含经验贴、招生数据投稿与共享文档 UUID。
-- 已运行到此版本的数据库无需执行；后续增量变更使用 supabase/migrations/。
-- 认证配置、Edge Function 部署与内容目录同步见 CONTRIBUTING.zh.md。
-- ============================================================

begin;

create extension if not exists "uuid-ossp";

-- ── 表、约束与索引 ──────────────────────────────────────────

create table public.agent_user_links (
  agent_user_id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint agent_user_links_pkey PRIMARY KEY (agent_user_id),
  constraint agent_user_links_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  constraint agent_user_links_user_id_key UNIQUE (user_id)
);

create table public.agent_sessions (
  id uuid default uuid_generate_v4() not null,
  agent_user_id uuid not null,
  status text default 'active'::text not null,
  scopes jsonb default '[]'::jsonb not null,
  expires_at timestamp with time zone not null,
  revoked_at timestamp with time zone,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint agent_sessions_agent_user_id_fkey FOREIGN KEY (agent_user_id) REFERENCES agent_user_links(agent_user_id) ON DELETE CASCADE,
  constraint agent_sessions_pkey PRIMARY KEY (id),
  constraint agent_sessions_scopes_is_array CHECK (jsonb_typeof(scopes) = 'array'::text),
  constraint agent_sessions_status_check CHECK (status = ANY (ARRAY['active'::text, 'revoked'::text, 'expired'::text]))
);

CREATE INDEX idx_agent_sessions_agent_user_created ON public.agent_sessions USING btree (agent_user_id, created_at DESC);

CREATE INDEX idx_agent_sessions_expires ON public.agent_sessions USING btree (expires_at);

create table public.ai_entitlements (
  user_id uuid not null,
  plan text default 'free'::text not null,
  status text default 'active'::text not null,
  monthly_message_limit integer default 50 not null,
  monthly_token_limit bigint default 500000 not null,
  credit_balance_micros bigint default 0 not null,
  premium_credit_balance_micros bigint default 0 not null,
  enabled_models jsonb default '[]'::jsonb not null,
  current_period_start date default (date_trunc('month'::text, now()))::date not null,
  current_period_end date default ((date_trunc('month'::text, now()) + '1 mon'::interval))::date not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint ai_entitlements_enabled_models_is_array CHECK (jsonb_typeof(enabled_models) = 'array'::text),
  constraint ai_entitlements_message_limit_check CHECK (monthly_message_limit >= 0),
  constraint ai_entitlements_pkey PRIMARY KEY (user_id),
  constraint ai_entitlements_plan_check CHECK (plan = ANY (ARRAY['free'::text, 'pro'::text, 'team'::text, 'admin'::text])),
  constraint ai_entitlements_status_check CHECK (status = ANY (ARRAY['active'::text, 'trialing'::text, 'past_due'::text, 'canceled'::text, 'suspended'::text])),
  constraint ai_entitlements_token_limit_check CHECK (monthly_token_limit >= 0),
  constraint ai_entitlements_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

create table public.ai_model_prices (
  model text not null,
  input_micro_usd_per_mtok bigint not null,
  cached_input_micro_usd_per_mtok bigint default 0 not null,
  output_micro_usd_per_mtok bigint not null,
  credit_pool text default 'standard'::text not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint ai_model_prices_credit_pool_check CHECK (credit_pool = ANY (ARRAY['standard'::text, 'premium'::text])),
  constraint ai_model_prices_nonnegative_check CHECK (input_micro_usd_per_mtok >= 0 AND cached_input_micro_usd_per_mtok >= 0 AND output_micro_usd_per_mtok >= 0),
  constraint ai_model_prices_pkey PRIMARY KEY (model)
);

-- 初始模型计费配置；部署者应按实际供应商配置维护。
insert into public.ai_model_prices
  (model, input_micro_usd_per_mtok, cached_input_micro_usd_per_mtok, output_micro_usd_per_mtok, credit_pool)
values
  ('gpt-5.5', 5000000, 500000, 30000000, 'premium'),
  ('gpt-5.3-codex-spark', 1750000, 175000, 14000000, 'standard');

create table public.ai_usage_months (
  user_id uuid not null,
  period_start date not null,
  period_end date not null,
  plan text default 'free'::text not null,
  messages_used integer default 0 not null,
  messages_reserved integer default 0 not null,
  input_tokens bigint default 0 not null,
  cached_input_tokens bigint default 0 not null,
  output_tokens bigint default 0 not null,
  total_tokens bigint default 0 not null,
  cost_micros bigint default 0 not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint ai_usage_months_nonnegative_check CHECK (messages_used >= 0 AND messages_reserved >= 0 AND input_tokens >= 0 AND cached_input_tokens >= 0 AND output_tokens >= 0 AND total_tokens >= 0 AND cost_micros >= 0),
  constraint ai_usage_months_pkey PRIMARY KEY (user_id, period_start),
  constraint ai_usage_months_plan_check CHECK (plan = ANY (ARRAY['free'::text, 'pro'::text, 'team'::text, 'admin'::text])),
  constraint ai_usage_months_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_ai_usage_months_period ON public.ai_usage_months USING btree (period_start DESC);

create table public.ai_usage_reservations (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  agent_user_id uuid not null,
  session_id uuid not null,
  idempotency_key text not null,
  status text default 'reserved'::text not null,
  period_start date not null,
  reserved_messages integer default 1 not null,
  committed_at timestamp with time zone,
  canceled_at timestamp with time zone,
  cancel_reason text,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint ai_usage_reservations_agent_user_id_fkey FOREIGN KEY (agent_user_id) REFERENCES agent_user_links(agent_user_id) ON DELETE CASCADE,
  constraint ai_usage_reservations_key_length CHECK (char_length(TRIM(BOTH FROM idempotency_key)) >= 1 AND char_length(TRIM(BOTH FROM idempotency_key)) <= 160),
  constraint ai_usage_reservations_pkey PRIMARY KEY (id),
  constraint ai_usage_reservations_reserved_messages_check CHECK (reserved_messages > 0),
  constraint ai_usage_reservations_session_id_fkey FOREIGN KEY (session_id) REFERENCES agent_sessions(id) ON DELETE CASCADE,
  constraint ai_usage_reservations_session_key_unique UNIQUE (session_id, idempotency_key),
  constraint ai_usage_reservations_status_check CHECK (status = ANY (ARRAY['reserved'::text, 'committed'::text, 'canceled'::text, 'expired'::text])),
  constraint ai_usage_reservations_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_ai_usage_reservations_user_created ON public.ai_usage_reservations USING btree (user_id, created_at DESC);

create table public.ai_usage_events (
  id uuid default uuid_generate_v4() not null,
  reservation_id uuid,
  user_id uuid not null,
  agent_user_id uuid not null,
  session_id uuid,
  provider text default ''::text not null,
  model text default ''::text not null,
  input_tokens bigint default 0 not null,
  cached_input_tokens bigint default 0 not null,
  output_tokens bigint default 0 not null,
  total_tokens bigint default 0 not null,
  cost_micros bigint default 0 not null,
  status text default 'succeeded'::text not null,
  latency_ms integer,
  error_code text,
  created_at timestamp with time zone default now() not null,
  constraint ai_usage_events_agent_user_id_fkey FOREIGN KEY (agent_user_id) REFERENCES agent_user_links(agent_user_id) ON DELETE CASCADE,
  constraint ai_usage_events_nonnegative_check CHECK (input_tokens >= 0 AND cached_input_tokens >= 0 AND output_tokens >= 0 AND total_tokens >= 0 AND cost_micros >= 0 AND (latency_ms IS NULL OR latency_ms >= 0)),
  constraint ai_usage_events_pkey PRIMARY KEY (id),
  constraint ai_usage_events_reservation_id_fkey FOREIGN KEY (reservation_id) REFERENCES ai_usage_reservations(id) ON DELETE SET NULL,
  constraint ai_usage_events_reservation_unique UNIQUE (reservation_id),
  constraint ai_usage_events_session_id_fkey FOREIGN KEY (session_id) REFERENCES agent_sessions(id) ON DELETE SET NULL,
  constraint ai_usage_events_status_check CHECK (status = ANY (ARRAY['succeeded'::text, 'failed'::text, 'canceled'::text])),
  constraint ai_usage_events_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_ai_usage_events_session_created ON public.ai_usage_events USING btree (session_id, created_at DESC);

CREATE INDEX idx_ai_usage_events_user_created ON public.ai_usage_events USING btree (user_id, created_at DESC);

create table public.api_access_requests (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  status text default 'pending'::text not null,
  applicant_name text default ''::text not null,
  organization text default ''::text not null,
  contact_email text default ''::text not null,
  website text default ''::text not null,
  intended_use text default ''::text not null,
  commercial_use boolean default false not null,
  plan text default 'free'::text not null,
  rate_limit_per_minute integer default 60 not null,
  max_active_keys integer default 3 not null,
  commercial_allowed boolean default false not null,
  expires_at timestamp with time zone,
  reviewed_by uuid,
  reviewed_at timestamp with time zone,
  review_note text,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint api_access_requests_intended_use_length CHECK (char_length(TRIM(BOTH FROM intended_use)) <= 4000),
  constraint api_access_requests_max_keys_check CHECK (max_active_keys >= 1 AND max_active_keys <= 10),
  constraint api_access_requests_pkey PRIMARY KEY (id),
  constraint api_access_requests_plan_check CHECK (plan = ANY (ARRAY['free'::text, 'research'::text, 'partner'::text, 'commercial'::text])),
  constraint api_access_requests_rate_limit_check CHECK (rate_limit_per_minute >= 1 AND rate_limit_per_minute <= 600),
  constraint api_access_requests_reviewed_by_fkey FOREIGN KEY (reviewed_by) REFERENCES auth.users(id) ON DELETE SET NULL,
  constraint api_access_requests_status_check CHECK (status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text, 'revoked'::text])),
  constraint api_access_requests_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  constraint api_access_requests_user_unique UNIQUE (user_id)
);

CREATE INDEX idx_api_access_requests_status ON public.api_access_requests USING btree (status, created_at DESC);

create table public.api_keys (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  name text not null,
  key_prefix text not null,
  key_hash text not null,
  status text default 'active'::text not null,
  rate_limit_per_minute integer default 60 not null,
  plan text default 'free'::text not null,
  request_count bigint default 0 not null,
  last_used_at timestamp with time zone,
  revoked_at timestamp with time zone,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint api_keys_key_hash_key UNIQUE (key_hash),
  constraint api_keys_name_length CHECK (char_length(name) >= 1 AND char_length(name) <= 80),
  constraint api_keys_pkey PRIMARY KEY (id),
  constraint api_keys_plan_check CHECK (plan = ANY (ARRAY['free'::text, 'research'::text, 'partner'::text, 'commercial'::text])),
  constraint api_keys_rate_limit_check CHECK (rate_limit_per_minute >= 1 AND rate_limit_per_minute <= 600),
  constraint api_keys_status_check CHECK (status = ANY (ARRAY['active'::text, 'revoked'::text])),
  constraint api_keys_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_api_keys_status ON public.api_keys USING btree (status);

CREATE INDEX idx_api_keys_user_id ON public.api_keys USING btree (user_id, created_at DESC);

create table public.api_request_logs (
  id uuid default uuid_generate_v4() not null,
  api_key_id uuid,
  user_id uuid,
  method text not null,
  path text not null,
  query_params jsonb default '{}'::jsonb not null,
  status_code integer not null,
  result_count integer,
  duration_ms integer,
  ip_hash text,
  user_agent text,
  created_at timestamp with time zone default now() not null,
  constraint api_request_logs_api_key_id_fkey FOREIGN KEY (api_key_id) REFERENCES api_keys(id) ON DELETE SET NULL,
  constraint api_request_logs_pkey PRIMARY KEY (id),
  constraint api_request_logs_query_params_is_object CHECK (jsonb_typeof(query_params) = 'object'::text),
  constraint api_request_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL
);

CREATE INDEX idx_api_request_logs_key_created ON public.api_request_logs USING btree (api_key_id, created_at DESC);

CREATE INDEX idx_api_request_logs_status ON public.api_request_logs USING btree (status_code);

CREATE INDEX idx_api_request_logs_user_created ON public.api_request_logs USING btree (user_id, created_at DESC);

create table public.api_usage_windows (
  api_key_id uuid not null,
  window_start timestamp with time zone not null,
  request_count integer default 0 not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint api_usage_windows_api_key_id_fkey FOREIGN KEY (api_key_id) REFERENCES api_keys(id) ON DELETE CASCADE,
  constraint api_usage_windows_pkey PRIMARY KEY (api_key_id, window_start),
  constraint api_usage_windows_request_count_check CHECK (request_count >= 0)
);

CREATE INDEX idx_api_usage_windows_window_start ON public.api_usage_windows USING btree (window_start DESC);

create table public.document_registry (
  document_uuid uuid not null,
  current_doc_id text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null,
  constraint document_registry_current_doc_id_check CHECK (current_doc_id IS NULL OR char_length(TRIM(BOTH FROM current_doc_id)) >= 1 AND char_length(TRIM(BOTH FROM current_doc_id)) <= 500),
  constraint document_registry_current_doc_id_key UNIQUE (current_doc_id),
  constraint document_registry_pkey PRIMARY KEY (document_uuid)
);

create table public.content_submissions (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  submission_type text not null,
  status text default 'pending_issue'::text not null,
  title text default ''::text not null,
  public_author text default ''::text not null,
  university_id text default ''::text not null,
  department_id text default ''::text not null,
  program_id text default ''::text not null,
  year integer,
  file_slug text default ''::text not null,
  target_doc_id text default ''::text not null,
  target_title text default ''::text not null,
  tags jsonb default '[]'::jsonb not null,
  description_markdown text default ''::text not null,
  kai_markdown text default ''::text not null,
  correction_base_sha text default ''::text not null,
  correction_patch jsonb default '[]'::jsonb not null,
  correction_conflict boolean default false not null,
  admission_data jsonb default '{}'::jsonb not null,
  experience_data jsonb default '{}'::jsonb not null,
  cla_accepted_at timestamp with time zone not null,
  payload_hash text,
  payload_signature text,
  issue_number integer,
  issue_url text,
  pr_number integer,
  pr_url text,
  failure_reason text,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  target_document_uuid uuid,
  constraint content_submissions_admission_data_is_object CHECK (jsonb_typeof(admission_data) = 'object'::text),
  constraint content_submissions_admission_data_presence CHECK (submission_type = 'admission_data'::text AND admission_data <> '{}'::jsonb OR submission_type <> 'admission_data'::text AND admission_data = '{}'::jsonb),
  constraint content_submissions_admission_not_converted CHECK (submission_type <> 'admission_data'::text OR status <> 'converted'::text),
  constraint content_submissions_author_length CHECK (char_length(public_author) <= 160),
  constraint content_submissions_correction_sha CHECK (submission_type <> 'correction'::text OR correction_base_sha ~ '^[a-f0-9]{40}$'::text),
  constraint content_submissions_experience_data_check CHECK (jsonb_typeof(experience_data) = 'object'::text AND (submission_type = 'experience'::text AND experience_data <> '{}'::jsonb OR submission_type <> 'experience'::text AND experience_data = '{}'::jsonb)),
  constraint content_submissions_experience_length CHECK (submission_type <> 'experience'::text OR char_length(COALESCE(experience_data ->> 'markdown'::text, ''::text)) <= 50000),
  constraint content_submissions_new_solution_markdown_length CHECK (submission_type <> 'new_solution'::text OR (char_length(description_markdown) + char_length(kai_markdown)) <= 50000),
  constraint content_submissions_patch_is_array CHECK (jsonb_typeof(correction_patch) = 'array'::text),
  constraint content_submissions_pkey PRIMARY KEY (id),
  constraint content_submissions_status_check CHECK (status = ANY (ARRAY['pending_issue'::text, 'issue_created'::text, 'review_created'::text, 'failed'::text, 'converted'::text, 'closed'::text])),
  constraint content_submissions_tags_is_array CHECK (jsonb_typeof(tags) = 'array'::text),
  constraint content_submissions_target_document_uuid_fkey FOREIGN KEY (target_document_uuid) REFERENCES document_registry(document_uuid),
  constraint content_submissions_title_length CHECK (char_length(title) <= 240),
  constraint content_submissions_type_check CHECK (submission_type = ANY (ARRAY['new_solution'::text, 'correction'::text, 'admission_data'::text, 'experience'::text])),
  constraint content_submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  constraint content_submissions_year_check CHECK (year IS NULL OR year >= 1900 AND year <= 2200)
);

CREATE INDEX idx_content_submissions_issue_number ON public.content_submissions USING btree (issue_number);

CREATE INDEX idx_content_submissions_status_created ON public.content_submissions USING btree (status, created_at DESC);

CREATE INDEX idx_content_submissions_user_created ON public.content_submissions USING btree (user_id, created_at DESC);

create table public.document_aliases (
  doc_id text not null,
  document_uuid uuid not null,
  is_current boolean default false not null,
  created_at timestamp with time zone default now() not null,
  constraint document_aliases_doc_id_check CHECK (char_length(TRIM(BOTH FROM doc_id)) >= 1 AND char_length(TRIM(BOTH FROM doc_id)) <= 500),
  constraint document_aliases_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid) ON DELETE CASCADE,
  constraint document_aliases_pkey PRIMARY KEY (doc_id)
);

CREATE UNIQUE INDEX idx_document_aliases_one_current ON public.document_aliases USING btree (document_uuid) WHERE is_current;

CREATE INDEX idx_document_aliases_uuid ON public.document_aliases USING btree (document_uuid);

create table public.document_catalog (
  doc_id text not null,
  type text default 'exam'::text not null,
  source_path text not null,
  title text not null,
  sidebar_label text,
  university_id text,
  university_name text,
  department_id text,
  department_name text,
  program_id text,
  program_name text,
  year integer,
  year_label text,
  file_slug text,
  tags jsonb default '[]'::jsonb not null,
  school_tags jsonb default '[]'::jsonb not null,
  learning_tags jsonb default '[]'::jsonb not null,
  subject_ids jsonb default '[]'::jsonb not null,
  subsubject_ids jsonb default '[]'::jsonb not null,
  topic_ids jsonb default '[]'::jsonb not null,
  permalink text not null,
  content_hash text not null,
  synced_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  document_uuid uuid not null,
  content_path text not null,
  constraint document_catalog_content_path_check CHECK (content_path = (('/api-content/v1/documents/'::text || document_uuid::text) || '.json'::text)),
  constraint document_catalog_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint document_catalog_learning_tags_is_array CHECK (jsonb_typeof(learning_tags) = 'array'::text),
  constraint document_catalog_pkey PRIMARY KEY (doc_id),
  constraint document_catalog_school_tags_is_array CHECK (jsonb_typeof(school_tags) = 'array'::text),
  constraint document_catalog_subject_ids_is_array CHECK (jsonb_typeof(subject_ids) = 'array'::text),
  constraint document_catalog_subsubject_ids_is_array CHECK (jsonb_typeof(subsubject_ids) = 'array'::text),
  constraint document_catalog_tags_is_array CHECK (jsonb_typeof(tags) = 'array'::text),
  constraint document_catalog_topic_ids_is_array CHECK (jsonb_typeof(topic_ids) = 'array'::text),
  constraint document_catalog_type_check CHECK (type = ANY (ARRAY['exam'::text, 'guide'::text])),
  constraint document_catalog_year_check CHECK (year IS NULL OR year >= 1900 AND year <= 2100)
);

CREATE INDEX idx_document_catalog_discovery ON public.document_catalog USING btree (type, university_id, department_id, program_id, year);

CREATE INDEX idx_document_catalog_school_tags ON public.document_catalog USING gin (school_tags);

CREATE INDEX idx_document_catalog_subject_ids ON public.document_catalog USING gin (subject_ids);

CREATE INDEX idx_document_catalog_subsubject_ids ON public.document_catalog USING gin (subsubject_ids);

CREATE INDEX idx_document_catalog_tags ON public.document_catalog USING gin (tags);

CREATE INDEX idx_document_catalog_topic_ids ON public.document_catalog USING gin (topic_ids);

CREATE UNIQUE INDEX idx_document_catalog_uuid ON public.document_catalog USING btree (document_uuid);

CREATE INDEX idx_document_catalog_year ON public.document_catalog USING btree (year);

comment on table public.document_catalog is 'Lightweight document identity and discovery metadata. Markdown bodies are published as static build artifacts.';

comment on column public.document_catalog.content_path is 'Same-origin static JSON path keyed by immutable document UUID.';

create table public.exam_difficulty_stats (
  doc_id text not null,
  vote_count integer default 0 not null,
  easy_count integer default 0 not null,
  medium_count integer default 0 not null,
  hard_count integer default 0 not null,
  average_score numeric(4,2),
  bayesian_score numeric(4,2),
  effective_vote_weight numeric(8,2) default 0 not null,
  weighted_average_score numeric(4,2),
  weighted_bayesian_score numeric(4,2),
  suggested_difficulty text,
  assigned_difficulty text,
  confidence text default 'collecting'::text not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  document_uuid uuid not null,
  constraint exam_difficulty_stats_assigned_check CHECK ((assigned_difficulty = ANY (ARRAY['easy'::text, 'medium'::text, 'hard'::text])) OR assigned_difficulty IS NULL),
  constraint exam_difficulty_stats_confidence_check CHECK (confidence = ANY (ARRAY['collecting'::text, 'provisional'::text, 'stable'::text])),
  constraint exam_difficulty_stats_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint exam_difficulty_stats_easy_count_check CHECK (easy_count >= 0),
  constraint exam_difficulty_stats_effective_vote_weight_check CHECK (effective_vote_weight >= 0::numeric),
  constraint exam_difficulty_stats_hard_count_check CHECK (hard_count >= 0),
  constraint exam_difficulty_stats_medium_count_check CHECK (medium_count >= 0),
  constraint exam_difficulty_stats_pkey PRIMARY KEY (doc_id),
  constraint exam_difficulty_stats_suggested_check CHECK ((suggested_difficulty = ANY (ARRAY['easy'::text, 'medium'::text, 'hard'::text])) OR suggested_difficulty IS NULL),
  constraint exam_difficulty_stats_vote_count_check CHECK (vote_count >= 0)
);

CREATE UNIQUE INDEX idx_difficulty_stats_document_uuid ON public.exam_difficulty_stats USING btree (document_uuid);

CREATE INDEX idx_exam_difficulty_stats_assigned ON public.exam_difficulty_stats USING btree (assigned_difficulty, vote_count DESC);

CREATE INDEX idx_exam_difficulty_stats_bayesian ON public.exam_difficulty_stats USING btree (bayesian_score);

CREATE INDEX idx_exam_difficulty_stats_weighted_bayesian ON public.exam_difficulty_stats USING btree (weighted_bayesian_score);

create table public.exam_difficulty_votes (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  doc_id text not null,
  difficulty smallint not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  document_uuid uuid not null,
  constraint exam_difficulty_votes_difficulty_check CHECK (difficulty = ANY (ARRAY[1, 2, 3])),
  constraint exam_difficulty_votes_doc_id_not_blank CHECK (char_length(TRIM(BOTH FROM doc_id)) > 0),
  constraint exam_difficulty_votes_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint exam_difficulty_votes_pkey PRIMARY KEY (id),
  constraint exam_difficulty_votes_user_doc_unique UNIQUE (user_id, doc_id),
  constraint exam_difficulty_votes_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_difficulty_votes_document_uuid ON public.exam_difficulty_votes USING btree (document_uuid);

CREATE UNIQUE INDEX idx_difficulty_votes_user_document_uuid ON public.exam_difficulty_votes USING btree (user_id, document_uuid);

CREATE INDEX idx_exam_difficulty_votes_doc_id ON public.exam_difficulty_votes USING btree (doc_id);

CREATE INDEX idx_exam_difficulty_votes_user_updated ON public.exam_difficulty_votes USING btree (user_id, updated_at DESC);

create table public.problem_sets (
  id uuid default uuid_generate_v4() not null,
  owner_user_id uuid not null,
  kind text not null,
  title text,
  description text default ''::text not null,
  archived_at timestamp with time zone,
  deleted_at timestamp with time zone,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint problem_sets_description_check CHECK (char_length(description) <= 2000),
  constraint problem_sets_kind_check CHECK (kind = ANY (ARRAY['system_later'::text, 'system_mistakes'::text, 'custom'::text])),
  constraint problem_sets_owner_user_id_fkey FOREIGN KEY (owner_user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  constraint problem_sets_pkey PRIMARY KEY (id),
  constraint problem_sets_system_archive_check CHECK (kind = 'custom'::text OR archived_at IS NULL AND deleted_at IS NULL),
  constraint problem_sets_title_check CHECK (kind <> 'custom'::text AND title IS NULL OR kind = 'custom'::text AND char_length(TRIM(BOTH FROM title)) >= 1 AND char_length(TRIM(BOTH FROM title)) <= 80)
);

CREATE UNIQUE INDEX idx_problem_sets_owner_system_kind ON public.problem_sets USING btree (owner_user_id, kind) WHERE (kind = ANY (ARRAY['system_later'::text, 'system_mistakes'::text]));

CREATE INDEX idx_problem_sets_owner_updated ON public.problem_sets USING btree (owner_user_id, updated_at DESC) WHERE (deleted_at IS NULL);

create table public.problem_set_items (
  id uuid default uuid_generate_v4() not null,
  set_id uuid not null,
  doc_id text not null,
  position integer default 0 not null,
  annotation_markdown text default ''::text not null,
  title_snapshot text default ''::text not null,
  permalink_snapshot text default ''::text not null,
  tags_snapshot jsonb default '[]'::jsonb not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  document_uuid uuid not null,
  constraint problem_set_items_annotation_check CHECK (char_length(annotation_markdown) <= 1000),
  constraint problem_set_items_doc_not_blank CHECK (char_length(TRIM(BOTH FROM doc_id)) > 0),
  constraint problem_set_items_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint problem_set_items_pkey PRIMARY KEY (id),
  constraint problem_set_items_position_check CHECK ("position" >= 0),
  constraint problem_set_items_set_doc_unique UNIQUE (set_id, doc_id),
  constraint problem_set_items_set_id_fkey FOREIGN KEY (set_id) REFERENCES problem_sets(id) ON DELETE CASCADE,
  constraint problem_set_items_tags_check CHECK (jsonb_typeof(tags_snapshot) = 'array'::text)
);

CREATE INDEX idx_problem_set_items_doc ON public.problem_set_items USING btree (doc_id, set_id);

CREATE INDEX idx_problem_set_items_document_uuid ON public.problem_set_items USING btree (set_id, document_uuid);

CREATE INDEX idx_problem_set_items_order ON public.problem_set_items USING btree (set_id, "position", created_at);

CREATE UNIQUE INDEX idx_problem_set_items_set_document_uuid ON public.problem_set_items USING btree (set_id, document_uuid);

create table public.user_ai_consents (
  user_id uuid not null,
  allow_progress_context boolean default false not null,
  allow_notes_context boolean default false not null,
  allow_chat_history_context boolean default false not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint user_ai_consents_pkey PRIMARY KEY (user_id),
  constraint user_ai_consents_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

create table public.user_note_items (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  doc_id text not null,
  content text,
  client_updated_at bigint default ((EXTRACT(epoch FROM now()) * (1000)::numeric))::bigint not null,
  deleted_at timestamp with time zone,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  document_uuid uuid not null,
  version bigint default 1 not null,
  constraint user_note_items_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint user_note_items_pkey PRIMARY KEY (id),
  constraint user_note_items_user_doc_unique UNIQUE (user_id, doc_id),
  constraint user_note_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_uni_user_client_updated_at ON public.user_note_items USING btree (user_id, client_updated_at);

CREATE INDEX idx_uni_user_deleted_at ON public.user_note_items USING btree (user_id, deleted_at);

CREATE INDEX idx_uni_user_document_uuid ON public.user_note_items USING btree (user_id, document_uuid);

CREATE UNIQUE INDEX idx_uni_user_document_uuid_unique ON public.user_note_items USING btree (user_id, document_uuid);

CREATE INDEX idx_uni_user_updated_at ON public.user_note_items USING btree (user_id, updated_at);

create table public.user_note_revisions (
  id uuid default uuid_generate_v4() not null,
  note_id uuid not null,
  user_id uuid not null,
  document_uuid uuid not null,
  doc_id text not null,
  version bigint not null,
  content text,
  archived_reason text not null,
  archived_at timestamp with time zone default now() not null,
  constraint user_note_revisions_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint user_note_revisions_note_version_unique UNIQUE (note_id, version),
  constraint user_note_revisions_pkey PRIMARY KEY (id),
  constraint user_note_revisions_reason_check CHECK (archived_reason = ANY (ARRAY['update'::text, 'delete'::text])),
  constraint user_note_revisions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

create table public.user_practice_events (
  event_id uuid not null,
  user_id uuid not null,
  doc_id text not null,
  event_type text not null,
  occurred_at timestamp with time zone not null,
  recorded_at timestamp with time zone default now() not null,
  document_uuid uuid not null,
  constraint user_practice_events_doc_id_check CHECK (char_length(TRIM(BOTH FROM doc_id)) >= 1 AND char_length(TRIM(BOTH FROM doc_id)) <= 500),
  constraint user_practice_events_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint user_practice_events_pkey PRIMARY KEY (user_id, event_id),
  constraint user_practice_events_type_check CHECK (event_type = ANY (ARRAY['practice'::text, 'review'::text])),
  constraint user_practice_events_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_practice_events_document_uuid ON public.user_practice_events USING btree (document_uuid, occurred_at DESC);

CREATE INDEX idx_user_practice_events_period ON public.user_practice_events USING btree (occurred_at DESC, user_id, doc_id);

create table public.user_progress_items (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  doc_id text not null,
  status text,
  title text,
  permalink text,
  tags jsonb default '[]'::jsonb not null,
  review_count integer default 0 not null,
  client_updated_at bigint default ((EXTRACT(epoch FROM now()) * (1000)::numeric))::bigint not null,
  deleted_at timestamp with time zone,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  document_uuid uuid not null,
  last_reviewed_at timestamp with time zone,
  next_review_at timestamp with time zone,
  review_algorithm_version integer default 1 not null,
  review_lapses integer default 0 not null,
  review_stability numeric,
  review_difficulty numeric,
  constraint user_progress_items_document_uuid_fkey FOREIGN KEY (document_uuid) REFERENCES document_registry(document_uuid),
  constraint user_progress_items_pkey PRIMARY KEY (id),
  constraint user_progress_items_review_count_check CHECK (review_count >= 0),
  constraint user_progress_items_status_check CHECK ((status = ANY (ARRAY['completed'::text, 'reviewing'::text])) OR status IS NULL),
  constraint user_progress_items_tags_is_array CHECK (jsonb_typeof(tags) = 'array'::text),
  constraint user_progress_items_user_doc_unique UNIQUE (user_id, doc_id),
  constraint user_progress_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_upi_user_client_updated_at ON public.user_progress_items USING btree (user_id, client_updated_at);

CREATE INDEX idx_upi_user_deleted_at ON public.user_progress_items USING btree (user_id, deleted_at);

CREATE INDEX idx_upi_user_document_uuid ON public.user_progress_items USING btree (user_id, document_uuid);

CREATE UNIQUE INDEX idx_upi_user_document_uuid_unique ON public.user_progress_items USING btree (user_id, document_uuid);

CREATE INDEX idx_upi_user_next_review ON public.user_progress_items USING btree (user_id, next_review_at) WHERE ((status = 'reviewing'::text) AND (deleted_at IS NULL));

CREATE INDEX idx_upi_user_updated_at ON public.user_progress_items USING btree (user_id, updated_at);

create table public.user_public_profiles (
  user_id uuid not null,
  public_id uuid default uuid_generate_v4() not null,
  nickname text not null,
  nickname_normalized text not null,
  discriminator integer not null,
  nickname_confirmed_at timestamp with time zone,
  nickname_changed_at timestamp with time zone,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint user_public_profiles_discriminator_check CHECK (discriminator >= 0 AND discriminator <= 99999),
  constraint user_public_profiles_nickname_hash_check CHECK (POSITION(('#'::text) IN (nickname)) = 0),
  constraint user_public_profiles_nickname_length_check CHECK (char_length(nickname) >= 2 AND char_length(nickname) <= 24),
  constraint user_public_profiles_nickname_tag_unique UNIQUE (nickname_normalized, discriminator),
  constraint user_public_profiles_pkey PRIMARY KEY (user_id),
  constraint user_public_profiles_public_id_key UNIQUE (public_id),
  constraint user_public_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

create table public.user_reputation_events (
  id uuid default uuid_generate_v4() not null,
  user_id uuid not null,
  event_type text not null,
  source_type text not null,
  source_id text not null,
  points integer default 0 not null,
  occurred_at timestamp with time zone default now() not null,
  metadata jsonb default '{}'::jsonb not null,
  created_at timestamp with time zone default now() not null,
  constraint user_reputation_events_event_type_check CHECK (event_type = ANY (ARRAY['account_age'::text, 'submitted_solution_issue'::text, 'submitted_correction_issue'::text, 'accepted_solution'::text, 'accepted_correction'::text, 'pr_merged'::text, 'manual_adjustment'::text])),
  constraint user_reputation_events_pkey PRIMARY KEY (id),
  constraint user_reputation_events_points_check CHECK (points >= 0),
  constraint user_reputation_events_source_not_blank CHECK (char_length(TRIM(BOTH FROM source_type)) > 0 AND char_length(TRIM(BOTH FROM source_id)) > 0),
  constraint user_reputation_events_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  constraint user_reputation_events_user_source_unique UNIQUE (user_id, event_type, source_type, source_id)
);

CREATE INDEX idx_user_reputation_events_source ON public.user_reputation_events USING btree (source_type, source_id);

CREATE INDEX idx_user_reputation_events_user_occurred ON public.user_reputation_events USING btree (user_id, occurred_at DESC);

create table public.user_reputation_profiles (
  user_id uuid not null,
  level integer default 0 not null,
  level_key text default 'newcomer'::text not null,
  reputation_points integer default 0 not null,
  rating_weight numeric(4,2) default 1.00 not null,
  account_age_score integer default 0 not null,
  contribution_score integer default 0 not null,
  accepted_solution_count integer default 0 not null,
  accepted_correction_count integer default 0 not null,
  submitted_solution_issue_count integer default 0 not null,
  submitted_correction_issue_count integer default 0 not null,
  issue_submission_count integer default 0 not null,
  converted_submission_count integer default 0 not null,
  last_contribution_at timestamp with time zone,
  recalculated_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null,
  created_at timestamp with time zone default now() not null,
  constraint user_reputation_profiles_level_check CHECK (level >= 0 AND level <= 4),
  constraint user_reputation_profiles_level_key_check CHECK (level_key = ANY (ARRAY['newcomer'::text, 'learner'::text, 'contributor'::text, 'trusted_contributor'::text, 'core_contributor'::text])),
  constraint user_reputation_profiles_pkey PRIMARY KEY (user_id),
  constraint user_reputation_profiles_points_check CHECK (reputation_points >= 0),
  constraint user_reputation_profiles_rating_weight_check CHECK (rating_weight >= 1.00 AND rating_weight <= 1.50),
  constraint user_reputation_profiles_scores_check CHECK (account_age_score >= 0 AND contribution_score >= 0 AND accepted_solution_count >= 0 AND accepted_correction_count >= 0 AND submitted_solution_issue_count >= 0 AND submitted_correction_issue_count >= 0 AND issue_submission_count >= 0 AND converted_submission_count >= 0),
  constraint user_reputation_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_reputation_profiles_level ON public.user_reputation_profiles USING btree (level DESC, reputation_points DESC);

-- ── 业务函数：每个函数只保留当前定义 ─────────────────────────

create function public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  new.updated_at = now();
  return new;
end;
$function$;

create function public.get_server_time()
 RETURNS timestamp with time zone
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  return now();
end;
$function$;

create function public.record_practice_events(p_events jsonb)
 RETURNS integer
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.difficulty_label_from_score(p_score numeric)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE
AS $function$
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
$function$;

create function public.refresh_exam_difficulty_stats(p_doc_id text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.refresh_exam_difficulty_stats_after_vote()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.get_exam_difficulty(p_doc_id text)
 RETURNS TABLE(doc_id text, user_difficulty smallint, vote_count integer, easy_count integer, medium_count integer, hard_count integer, average_score numeric, bayesian_score numeric, effective_vote_weight numeric, weighted_average_score numeric, weighted_bayesian_score numeric, suggested_difficulty text, assigned_difficulty text, confidence text, stable_threshold integer, updated_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.set_exam_difficulty_vote(p_doc_id text, p_difficulty smallint)
 RETURNS TABLE(doc_id text, user_difficulty smallint, vote_count integer, easy_count integer, medium_count integer, hard_count integer, average_score numeric, bayesian_score numeric, effective_vote_weight numeric, weighted_average_score numeric, weighted_bayesian_score numeric, suggested_difficulty text, assigned_difficulty text, confidence text, stable_threshold integer, updated_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.register_api_request(p_api_key_id uuid, p_window_start timestamp with time zone, p_limit integer)
 RETURNS TABLE(allowed boolean, current_count integer)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.reserve_ai_message(p_session_id uuid, p_idempotency_key text, p_model text)
 RETURNS TABLE(allowed boolean, code text, reservation_id uuid, credit_pool text, credit_balance_micros bigint, period_start date)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.commit_ai_usage(p_reservation_id uuid, p_provider text, p_model text, p_input_tokens bigint, p_cached_input_tokens bigint, p_output_tokens bigint, p_status text, p_latency_ms integer, p_error_code text)
 RETURNS TABLE(accepted boolean, code text, event_id uuid, cost_micros bigint)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.cancel_ai_reservation(p_reservation_id uuid, p_reason text)
 RETURNS TABLE(accepted boolean, code text, reservation_id uuid)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.get_site_contributors()
 RETURNS TABLE(display_name text, contribution_count integer, solution_count integer, correction_count integer, last_contribution_at timestamp with time zone)
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.refresh_user_reputation(p_user_id uuid)
 RETURNS TABLE(user_id uuid, level integer, level_key text, reputation_points integer, rating_weight numeric, account_age_score integer, contribution_score integer, accepted_solution_count integer, accepted_correction_count integer, submitted_solution_issue_count integer, submitted_correction_issue_count integer, issue_submission_count integer, converted_submission_count integer, last_contribution_at timestamp with time zone, recalculated_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.get_my_reputation()
 RETURNS TABLE(user_id uuid, level integer, level_key text, reputation_points integer, rating_weight numeric, account_age_score integer, contribution_score integer, accepted_solution_count integer, accepted_correction_count integer, submitted_solution_issue_count integer, submitted_correction_issue_count integer, issue_submission_count integer, converted_submission_count integer, last_contribution_at timestamp with time zone, recalculated_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.normalize_public_nickname(p_nickname text)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE
AS $function$
  select lower(regexp_replace(trim(normalize(coalesce(p_nickname, ''), NFKC)), '[[:space:]]+', ' ', 'g'));
$function$;

create function public.validate_public_nickname(p_nickname text)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE
AS $function$
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
$function$;

create function public.format_public_nickname(p_nickname text, p_discriminator integer)
 RETURNS text
 LANGUAGE sql
 IMMUTABLE
AS $function$
  select trim(p_nickname) || ' #' || lpad(p_discriminator::text, 5, '0');
$function$;

create function public.ensure_user_public_profile(p_user_id uuid)
 RETURNS user_public_profiles
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.get_my_public_profile()
 RETURNS TABLE(public_id uuid, nickname text, discriminator integer, display_name text, nickname_confirmed boolean, nickname_changed_at timestamp with time zone, next_nickname_change_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
    end;
end;
$function$;

create function public.confirm_or_change_my_nickname(p_nickname text)
 RETURNS TABLE(public_id uuid, nickname text, discriminator integer, display_name text, nickname_confirmed boolean, nickname_changed_at timestamp with time zone, next_nickname_change_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.ensure_my_problem_sets()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.compact_problem_set_positions(p_set_id uuid)
 RETURNS void
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.get_my_problem_sets(p_doc_id text DEFAULT NULL::text)
 RETURNS TABLE(id uuid, kind text, title text, description text, item_count bigint, completed_count bigint, reviewing_count bigint, contains_doc boolean, archived_at timestamp with time zone, updated_at timestamp with time zone, created_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.create_my_problem_set(p_title text, p_description text DEFAULT ''::text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.update_my_problem_set(p_set_id uuid, p_title text, p_description text DEFAULT ''::text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.archive_my_problem_set(p_set_id uuid, p_archived boolean)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  update public.problem_sets s
  set archived_at = case when coalesce(p_archived, false) then now() else null end
  where s.id = p_set_id and s.owner_user_id = auth.uid()
    and s.kind = 'custom' and s.deleted_at is null;
  if not found then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;
end;
$function$;

create function public.delete_my_problem_set(p_set_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  update public.problem_sets s set deleted_at = now(), archived_at = now()
  where s.id = p_set_id and s.owner_user_id = auth.uid()
    and s.kind = 'custom' and s.deleted_at is null;
  if not found then raise exception 'problem_set_not_found' using errcode = 'P0002'; end if;
end;
$function$;

create function public.set_doc_problem_set_memberships(p_doc_id text, p_set_ids uuid[] DEFAULT '{}'::uuid[])
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare
  v_user_id uuid := auth.uid();
  v_requested_doc_id text := nullif(trim(p_doc_id), '');
  v_document_uuid uuid;
  v_set_ids uuid[] := coalesce(p_set_ids, '{}'::uuid[]);
  v_set_id uuid;
  v_doc public.document_catalog%rowtype;
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
  join public.document_catalog document on document.document_uuid = alias.document_uuid
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
$function$;

create function public.reorder_problem_set_items(p_set_id uuid, p_item_ids uuid[])
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.update_problem_set_item_annotation(p_item_id uuid, p_annotation text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.remove_problem_set_items(p_set_id uuid, p_item_ids uuid[])
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.transfer_problem_set_items(p_source_set_id uuid, p_target_set_id uuid, p_item_ids uuid[], p_copy boolean DEFAULT false)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.resolve_document_uuid(p_doc_id text)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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
$function$;

create function public.assign_document_uuid_from_doc_id()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if new.document_uuid is null then
    new.document_uuid := resolve_document_uuid(new.doc_id);
  end if;
  return new;
end;
$function$;

create function public.assign_target_document_uuid()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if new.target_document_uuid is null and nullif(trim(new.target_doc_id), '') is not null then
    new.target_document_uuid := resolve_document_uuid(new.target_doc_id);
  end if;
  return new;
end;
$function$;

create function public.archive_user_note_revision()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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
$function$;

create function public.get_practice_leaderboard(p_period text DEFAULT 'half_month'::text)
 RETURNS TABLE(rank_position bigint, display_name text, problem_count bigint, is_current_user boolean, is_top_ten boolean, participant_count bigint, gap_to_previous bigint, percentile integer, period_start date, period_end date)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
$function$;

create function public.get_my_problem_set(p_set_id uuid)
 RETURNS TABLE(set_id uuid, kind text, set_title text, set_description text, archived_at timestamp with time zone, item_id uuid, doc_id text, document_uuid uuid, "position" integer, annotation_markdown text, title text, permalink text, tags jsonb, content_available boolean, progress_status text, review_count integer, item_updated_at timestamp with time zone, item_created_at timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
  left join public.document_catalog document on document.document_uuid = item.document_uuid
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
$function$;

-- ── 触发器 ─────────────────────────────────────────────────

CREATE TRIGGER update_agent_sessions_updated_at BEFORE UPDATE ON agent_sessions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agent_user_links_updated_at BEFORE UPDATE ON agent_user_links FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_entitlements_updated_at BEFORE UPDATE ON ai_entitlements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_model_prices_updated_at BEFORE UPDATE ON ai_model_prices FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_usage_months_updated_at BEFORE UPDATE ON ai_usage_months FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_usage_reservations_updated_at BEFORE UPDATE ON ai_usage_reservations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_api_access_requests_updated_at BEFORE UPDATE ON api_access_requests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_api_keys_updated_at BEFORE UPDATE ON api_keys FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_api_usage_windows_updated_at BEFORE UPDATE ON api_usage_windows FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER assign_target_document_uuid BEFORE INSERT OR UPDATE OF target_doc_id ON content_submissions FOR EACH ROW EXECUTE FUNCTION assign_target_document_uuid();

CREATE TRIGGER update_content_submissions_updated_at BEFORE UPDATE ON content_submissions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER assign_document_uuid BEFORE INSERT OR UPDATE OF doc_id ON document_catalog FOR EACH ROW EXECUTE FUNCTION assign_document_uuid_from_doc_id();

CREATE TRIGGER update_document_catalog_updated_at BEFORE UPDATE ON document_catalog FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER assign_document_uuid BEFORE INSERT OR UPDATE OF doc_id ON exam_difficulty_stats FOR EACH ROW EXECUTE FUNCTION assign_document_uuid_from_doc_id();

CREATE TRIGGER update_exam_difficulty_stats_updated_at BEFORE UPDATE ON exam_difficulty_stats FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER assign_document_uuid BEFORE INSERT OR UPDATE OF doc_id ON exam_difficulty_votes FOR EACH ROW EXECUTE FUNCTION assign_document_uuid_from_doc_id();

CREATE TRIGGER refresh_exam_difficulty_stats_after_vote AFTER INSERT OR DELETE OR UPDATE ON exam_difficulty_votes FOR EACH ROW EXECUTE FUNCTION refresh_exam_difficulty_stats_after_vote();

CREATE TRIGGER update_exam_difficulty_votes_updated_at BEFORE UPDATE ON exam_difficulty_votes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER assign_document_uuid BEFORE INSERT OR UPDATE OF doc_id ON problem_set_items FOR EACH ROW EXECUTE FUNCTION assign_document_uuid_from_doc_id();

CREATE TRIGGER update_problem_set_items_updated_at BEFORE UPDATE ON problem_set_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_problem_sets_updated_at BEFORE UPDATE ON problem_sets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_ai_consents_updated_at BEFORE UPDATE ON user_ai_consents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER archive_user_note_revision BEFORE DELETE OR UPDATE ON user_note_items FOR EACH ROW EXECUTE FUNCTION archive_user_note_revision();

CREATE TRIGGER assign_document_uuid BEFORE INSERT OR UPDATE OF doc_id ON user_note_items FOR EACH ROW EXECUTE FUNCTION assign_document_uuid_from_doc_id();

CREATE TRIGGER update_user_note_items_updated_at BEFORE UPDATE ON user_note_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER assign_document_uuid BEFORE INSERT OR UPDATE OF doc_id ON user_practice_events FOR EACH ROW EXECUTE FUNCTION assign_document_uuid_from_doc_id();

CREATE TRIGGER assign_document_uuid BEFORE INSERT OR UPDATE OF doc_id ON user_progress_items FOR EACH ROW EXECUTE FUNCTION assign_document_uuid_from_doc_id();

CREATE TRIGGER update_user_progress_items_updated_at BEFORE UPDATE ON user_progress_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_public_profiles_updated_at BEFORE UPDATE ON user_public_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_reputation_profiles_updated_at BEFORE UPDATE ON user_reputation_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ── 行级安全策略 ───────────────────────────────────────────

alter table public.agent_user_links enable row level security;

alter table public.agent_sessions enable row level security;

alter table public.ai_entitlements enable row level security;

alter table public.ai_model_prices enable row level security;

alter table public.ai_usage_months enable row level security;

alter table public.ai_usage_reservations enable row level security;

alter table public.ai_usage_events enable row level security;

alter table public.api_access_requests enable row level security;

alter table public.api_keys enable row level security;

alter table public.api_request_logs enable row level security;

alter table public.api_usage_windows enable row level security;

alter table public.document_registry enable row level security;

alter table public.content_submissions enable row level security;

alter table public.document_aliases enable row level security;

alter table public.document_catalog enable row level security;

alter table public.exam_difficulty_stats enable row level security;

alter table public.exam_difficulty_votes enable row level security;

alter table public.problem_sets enable row level security;

alter table public.problem_set_items enable row level security;

alter table public.user_ai_consents enable row level security;

alter table public.user_note_items enable row level security;

alter table public.user_note_revisions enable row level security;

alter table public.user_practice_events enable row level security;

alter table public.user_progress_items enable row level security;

alter table public.user_public_profiles enable row level security;

alter table public.user_reputation_events enable row level security;

alter table public.user_reputation_profiles enable row level security;

create policy "Anyone can view difficulty stats" on public.exam_difficulty_stats
  as PERMISSIVE for SELECT to PUBLIC
  using (true);

create policy "Users can delete own difficulty votes" on public.exam_difficulty_votes
  as PERMISSIVE for DELETE to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can insert own difficulty votes" on public.exam_difficulty_votes
  as PERMISSIVE for INSERT to PUBLIC
  with check ((auth.uid() = user_id));

create policy "Users can update own difficulty votes" on public.exam_difficulty_votes
  as PERMISSIVE for UPDATE to PUBLIC
  using ((auth.uid() = user_id))
  with check ((auth.uid() = user_id));

create policy "Users can view own difficulty votes" on public.exam_difficulty_votes
  as PERMISSIVE for SELECT to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can manage own problem set items" on public.problem_set_items
  as PERMISSIVE for ALL to PUBLIC
  using ((EXISTS ( SELECT 1
   FROM problem_sets s
  WHERE ((s.id = problem_set_items.set_id) AND (s.owner_user_id = auth.uid())))))
  with check ((EXISTS ( SELECT 1
   FROM problem_sets s
  WHERE ((s.id = problem_set_items.set_id) AND (s.owner_user_id = auth.uid())))));

create policy "Users can view own problem set items" on public.problem_set_items
  as PERMISSIVE for SELECT to PUBLIC
  using ((EXISTS ( SELECT 1
   FROM problem_sets s
  WHERE ((s.id = problem_set_items.set_id) AND (s.owner_user_id = auth.uid())))));

create policy "Users can manage own problem sets" on public.problem_sets
  as PERMISSIVE for ALL to PUBLIC
  using ((auth.uid() = owner_user_id))
  with check ((auth.uid() = owner_user_id));

create policy "Users can view own problem sets" on public.problem_sets
  as PERMISSIVE for SELECT to PUBLIC
  using ((auth.uid() = owner_user_id));

create policy "Users can delete own note items" on public.user_note_items
  as PERMISSIVE for DELETE to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can insert own note items" on public.user_note_items
  as PERMISSIVE for INSERT to PUBLIC
  with check ((auth.uid() = user_id));

create policy "Users can update own note items" on public.user_note_items
  as PERMISSIVE for UPDATE to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can view own note items" on public.user_note_items
  as PERMISSIVE for SELECT to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can view own note revisions" on public.user_note_revisions
  as PERMISSIVE for SELECT to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can delete own progress items" on public.user_progress_items
  as PERMISSIVE for DELETE to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can insert own progress items" on public.user_progress_items
  as PERMISSIVE for INSERT to PUBLIC
  with check ((auth.uid() = user_id));

create policy "Users can update own progress items" on public.user_progress_items
  as PERMISSIVE for UPDATE to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can view own progress items" on public.user_progress_items
  as PERMISSIVE for SELECT to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can view own reputation events" on public.user_reputation_events
  as PERMISSIVE for SELECT to PUBLIC
  using ((auth.uid() = user_id));

create policy "Users can view own reputation profile" on public.user_reputation_profiles
  as PERMISSIVE for SELECT to PUBLIC
  using ((auth.uid() = user_id));

-- ── 明确授权：不依赖项目的默认表或函数权限 ───────────────────

revoke all on table public.agent_user_links from public, anon, authenticated, service_role;

grant all on table public.agent_user_links to "service_role";

revoke all on table public.agent_sessions from public, anon, authenticated, service_role;

grant all on table public.agent_sessions to "service_role";

revoke all on table public.ai_entitlements from public, anon, authenticated, service_role;

grant all on table public.ai_entitlements to "service_role";

revoke all on table public.ai_model_prices from public, anon, authenticated, service_role;

grant all on table public.ai_model_prices to "service_role";

revoke all on table public.ai_usage_months from public, anon, authenticated, service_role;

grant all on table public.ai_usage_months to "service_role";

revoke all on table public.ai_usage_reservations from public, anon, authenticated, service_role;

grant all on table public.ai_usage_reservations to "service_role";

revoke all on table public.ai_usage_events from public, anon, authenticated, service_role;

grant all on table public.ai_usage_events to "service_role";

revoke all on table public.api_access_requests from public, anon, authenticated, service_role;

grant all on table public.api_access_requests to "service_role";

revoke all on table public.api_keys from public, anon, authenticated, service_role;

grant all on table public.api_keys to "service_role";

revoke all on table public.api_request_logs from public, anon, authenticated, service_role;

grant all on table public.api_request_logs to "service_role";

revoke all on table public.api_usage_windows from public, anon, authenticated, service_role;

grant all on table public.api_usage_windows to "service_role";

revoke all on table public.document_registry from public, anon, authenticated, service_role;

grant all on table public.document_registry to "service_role";

revoke all on table public.content_submissions from public, anon, authenticated, service_role;

grant all on table public.content_submissions to "service_role";

revoke all on table public.document_aliases from public, anon, authenticated, service_role;

grant all on table public.document_aliases to "service_role";

revoke all on table public.document_catalog from public, anon, authenticated, service_role;

grant all on table public.document_catalog to "service_role";

revoke all on table public.exam_difficulty_stats from public, anon, authenticated, service_role;

grant select on table public.exam_difficulty_stats to "anon";

grant select on table public.exam_difficulty_stats to "authenticated";

grant all on table public.exam_difficulty_stats to "service_role";

revoke all on table public.exam_difficulty_votes from public, anon, authenticated, service_role;

grant select on table public.exam_difficulty_votes to "authenticated";

grant all on table public.exam_difficulty_votes to "service_role";

revoke all on table public.problem_sets from public, anon, authenticated, service_role;

grant all on table public.problem_sets to "service_role";

revoke all on table public.problem_set_items from public, anon, authenticated, service_role;

grant all on table public.problem_set_items to "service_role";

revoke all on table public.user_ai_consents from public, anon, authenticated, service_role;

grant all on table public.user_ai_consents to "service_role";

revoke all on table public.user_note_items from public, anon, authenticated, service_role;

grant all on table public.user_note_items to "anon";

grant all on table public.user_note_items to "authenticated";

grant all on table public.user_note_items to "service_role";

revoke all on table public.user_note_revisions from public, anon, authenticated, service_role;

grant select on table public.user_note_revisions to "authenticated";

grant all on table public.user_note_revisions to "service_role";

revoke all on table public.user_practice_events from public, anon, authenticated, service_role;

grant all on table public.user_practice_events to "service_role";

revoke all on table public.user_progress_items from public, anon, authenticated, service_role;

grant all on table public.user_progress_items to "anon";

grant all on table public.user_progress_items to "authenticated";

grant all on table public.user_progress_items to "service_role";

revoke all on table public.user_public_profiles from public, anon, authenticated, service_role;

grant all on table public.user_public_profiles to "service_role";

revoke all on table public.user_reputation_events from public, anon, authenticated, service_role;

grant select on table public.user_reputation_events to "authenticated";

grant all on table public.user_reputation_events to "service_role";

revoke all on table public.user_reputation_profiles from public, anon, authenticated, service_role;

grant select on table public.user_reputation_profiles to "authenticated";

grant all on table public.user_reputation_profiles to "service_role";

revoke all on function public.update_updated_at_column() from public, anon, authenticated, service_role;

grant execute on function public.update_updated_at_column() to PUBLIC;

grant execute on function public.update_updated_at_column() to "anon";

grant execute on function public.update_updated_at_column() to "authenticated";

grant execute on function public.update_updated_at_column() to "service_role";

revoke all on function public.get_server_time() from public, anon, authenticated, service_role;

grant execute on function public.get_server_time() to PUBLIC;

grant execute on function public.get_server_time() to "anon";

grant execute on function public.get_server_time() to "authenticated";

grant execute on function public.get_server_time() to "service_role";

revoke all on function public.record_practice_events(p_events jsonb) from public, anon, authenticated, service_role;

grant execute on function public.record_practice_events(p_events jsonb) to "authenticated";

grant execute on function public.record_practice_events(p_events jsonb) to "service_role";

revoke all on function public.difficulty_label_from_score(p_score numeric) from public, anon, authenticated, service_role;

grant execute on function public.difficulty_label_from_score(p_score numeric) to "service_role";

revoke all on function public.refresh_exam_difficulty_stats(p_doc_id text) from public, anon, authenticated, service_role;

grant execute on function public.refresh_exam_difficulty_stats(p_doc_id text) to "service_role";

revoke all on function public.refresh_exam_difficulty_stats_after_vote() from public, anon, authenticated, service_role;

grant execute on function public.refresh_exam_difficulty_stats_after_vote() to "service_role";

revoke all on function public.get_exam_difficulty(p_doc_id text) from public, anon, authenticated, service_role;

grant execute on function public.get_exam_difficulty(p_doc_id text) to "anon";

grant execute on function public.get_exam_difficulty(p_doc_id text) to "authenticated";

grant execute on function public.get_exam_difficulty(p_doc_id text) to "service_role";

revoke all on function public.set_exam_difficulty_vote(p_doc_id text, p_difficulty smallint) from public, anon, authenticated, service_role;

grant execute on function public.set_exam_difficulty_vote(p_doc_id text, p_difficulty smallint) to "authenticated";

grant execute on function public.set_exam_difficulty_vote(p_doc_id text, p_difficulty smallint) to "service_role";

revoke all on function public.register_api_request(p_api_key_id uuid, p_window_start timestamp with time zone, p_limit integer) from public, anon, authenticated, service_role;

grant execute on function public.register_api_request(p_api_key_id uuid, p_window_start timestamp with time zone, p_limit integer) to "service_role";

revoke all on function public.reserve_ai_message(p_session_id uuid, p_idempotency_key text, p_model text) from public, anon, authenticated, service_role;

grant execute on function public.reserve_ai_message(p_session_id uuid, p_idempotency_key text, p_model text) to "service_role";

revoke all on function public.commit_ai_usage(p_reservation_id uuid, p_provider text, p_model text, p_input_tokens bigint, p_cached_input_tokens bigint, p_output_tokens bigint, p_status text, p_latency_ms integer, p_error_code text) from public, anon, authenticated, service_role;

grant execute on function public.commit_ai_usage(p_reservation_id uuid, p_provider text, p_model text, p_input_tokens bigint, p_cached_input_tokens bigint, p_output_tokens bigint, p_status text, p_latency_ms integer, p_error_code text) to "service_role";

revoke all on function public.cancel_ai_reservation(p_reservation_id uuid, p_reason text) from public, anon, authenticated, service_role;

grant execute on function public.cancel_ai_reservation(p_reservation_id uuid, p_reason text) to "service_role";

revoke all on function public.get_site_contributors() from public, anon, authenticated, service_role;

grant execute on function public.get_site_contributors() to "anon";

grant execute on function public.get_site_contributors() to "authenticated";

grant execute on function public.get_site_contributors() to "service_role";

revoke all on function public.refresh_user_reputation(p_user_id uuid) from public, anon, authenticated, service_role;

grant execute on function public.refresh_user_reputation(p_user_id uuid) to "authenticated";

grant execute on function public.refresh_user_reputation(p_user_id uuid) to "service_role";

revoke all on function public.get_my_reputation() from public, anon, authenticated, service_role;

grant execute on function public.get_my_reputation() to "authenticated";

grant execute on function public.get_my_reputation() to "service_role";

revoke all on function public.normalize_public_nickname(p_nickname text) from public, anon, authenticated, service_role;

grant execute on function public.normalize_public_nickname(p_nickname text) to "service_role";

revoke all on function public.validate_public_nickname(p_nickname text) from public, anon, authenticated, service_role;

grant execute on function public.validate_public_nickname(p_nickname text) to "service_role";

revoke all on function public.format_public_nickname(p_nickname text, p_discriminator integer) from public, anon, authenticated, service_role;

grant execute on function public.format_public_nickname(p_nickname text, p_discriminator integer) to "service_role";

revoke all on function public.ensure_user_public_profile(p_user_id uuid) from public, anon, authenticated, service_role;

grant execute on function public.ensure_user_public_profile(p_user_id uuid) to "service_role";

revoke all on function public.get_my_public_profile() from public, anon, authenticated, service_role;

grant execute on function public.get_my_public_profile() to "authenticated";

grant execute on function public.get_my_public_profile() to "service_role";

revoke all on function public.confirm_or_change_my_nickname(p_nickname text) from public, anon, authenticated, service_role;

grant execute on function public.confirm_or_change_my_nickname(p_nickname text) to "authenticated";

grant execute on function public.confirm_or_change_my_nickname(p_nickname text) to "service_role";

revoke all on function public.ensure_my_problem_sets() from public, anon, authenticated, service_role;

grant execute on function public.ensure_my_problem_sets() to "service_role";

revoke all on function public.compact_problem_set_positions(p_set_id uuid) from public, anon, authenticated, service_role;

grant execute on function public.compact_problem_set_positions(p_set_id uuid) to "service_role";

revoke all on function public.get_my_problem_sets(p_doc_id text) from public, anon, authenticated, service_role;

grant execute on function public.get_my_problem_sets(p_doc_id text) to "authenticated";

grant execute on function public.get_my_problem_sets(p_doc_id text) to "service_role";

revoke all on function public.create_my_problem_set(p_title text, p_description text) from public, anon, authenticated, service_role;

grant execute on function public.create_my_problem_set(p_title text, p_description text) to "authenticated";

grant execute on function public.create_my_problem_set(p_title text, p_description text) to "service_role";

revoke all on function public.update_my_problem_set(p_set_id uuid, p_title text, p_description text) from public, anon, authenticated, service_role;

grant execute on function public.update_my_problem_set(p_set_id uuid, p_title text, p_description text) to "authenticated";

grant execute on function public.update_my_problem_set(p_set_id uuid, p_title text, p_description text) to "service_role";

revoke all on function public.archive_my_problem_set(p_set_id uuid, p_archived boolean) from public, anon, authenticated, service_role;

grant execute on function public.archive_my_problem_set(p_set_id uuid, p_archived boolean) to "authenticated";

grant execute on function public.archive_my_problem_set(p_set_id uuid, p_archived boolean) to "service_role";

revoke all on function public.delete_my_problem_set(p_set_id uuid) from public, anon, authenticated, service_role;

grant execute on function public.delete_my_problem_set(p_set_id uuid) to "authenticated";

grant execute on function public.delete_my_problem_set(p_set_id uuid) to "service_role";

revoke all on function public.set_doc_problem_set_memberships(p_doc_id text, p_set_ids uuid[]) from public, anon, authenticated, service_role;

grant execute on function public.set_doc_problem_set_memberships(p_doc_id text, p_set_ids uuid[]) to "authenticated";

grant execute on function public.set_doc_problem_set_memberships(p_doc_id text, p_set_ids uuid[]) to "service_role";

revoke all on function public.reorder_problem_set_items(p_set_id uuid, p_item_ids uuid[]) from public, anon, authenticated, service_role;

grant execute on function public.reorder_problem_set_items(p_set_id uuid, p_item_ids uuid[]) to "authenticated";

grant execute on function public.reorder_problem_set_items(p_set_id uuid, p_item_ids uuid[]) to "service_role";

revoke all on function public.update_problem_set_item_annotation(p_item_id uuid, p_annotation text) from public, anon, authenticated, service_role;

grant execute on function public.update_problem_set_item_annotation(p_item_id uuid, p_annotation text) to "authenticated";

grant execute on function public.update_problem_set_item_annotation(p_item_id uuid, p_annotation text) to "service_role";

revoke all on function public.remove_problem_set_items(p_set_id uuid, p_item_ids uuid[]) from public, anon, authenticated, service_role;

grant execute on function public.remove_problem_set_items(p_set_id uuid, p_item_ids uuid[]) to "authenticated";

grant execute on function public.remove_problem_set_items(p_set_id uuid, p_item_ids uuid[]) to "service_role";

revoke all on function public.transfer_problem_set_items(p_source_set_id uuid, p_target_set_id uuid, p_item_ids uuid[], p_copy boolean) from public, anon, authenticated, service_role;

grant execute on function public.transfer_problem_set_items(p_source_set_id uuid, p_target_set_id uuid, p_item_ids uuid[], p_copy boolean) to "authenticated";

grant execute on function public.transfer_problem_set_items(p_source_set_id uuid, p_target_set_id uuid, p_item_ids uuid[], p_copy boolean) to "service_role";

revoke all on function public.resolve_document_uuid(p_doc_id text) from public, anon, authenticated, service_role;

grant execute on function public.resolve_document_uuid(p_doc_id text) to "service_role";

revoke all on function public.assign_document_uuid_from_doc_id() from public, anon, authenticated, service_role;

grant execute on function public.assign_document_uuid_from_doc_id() to PUBLIC;

grant execute on function public.assign_document_uuid_from_doc_id() to "anon";

grant execute on function public.assign_document_uuid_from_doc_id() to "authenticated";

grant execute on function public.assign_document_uuid_from_doc_id() to "service_role";

revoke all on function public.assign_target_document_uuid() from public, anon, authenticated, service_role;

grant execute on function public.assign_target_document_uuid() to PUBLIC;

grant execute on function public.assign_target_document_uuid() to "anon";

grant execute on function public.assign_target_document_uuid() to "authenticated";

grant execute on function public.assign_target_document_uuid() to "service_role";

revoke all on function public.archive_user_note_revision() from public, anon, authenticated, service_role;

grant execute on function public.archive_user_note_revision() to PUBLIC;

grant execute on function public.archive_user_note_revision() to "anon";

grant execute on function public.archive_user_note_revision() to "authenticated";

grant execute on function public.archive_user_note_revision() to "service_role";

revoke all on function public.get_practice_leaderboard(p_period text) from public, anon, authenticated, service_role;

grant execute on function public.get_practice_leaderboard(p_period text) to "authenticated";

grant execute on function public.get_practice_leaderboard(p_period text) to "service_role";

revoke all on function public.get_my_problem_set(p_set_id uuid) from public, anon, authenticated, service_role;

grant execute on function public.get_my_problem_set(p_set_id uuid) to "authenticated";

grant execute on function public.get_my_problem_set(p_set_id uuid) to "service_role";

notify pgrst, 'reload schema';

commit;
