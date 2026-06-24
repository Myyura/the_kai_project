import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.48.1';
import {
  errorResponse,
  getBearerToken,
  isAllowedOrigin,
  jsonResponse,
  readJsonBody,
  withCors,
} from './http.ts';
import { parsePrivateJwk, signJwt } from './jwt.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const AGENT_BASE_URL = Deno.env.get('AGENT_BASE_URL') || '';
const AGENT_SESSION_PRIVATE_JWK = Deno.env.get('AGENT_SESSION_PRIVATE_JWK') || '';
const SITE_URL = Deno.env.get('SITE_URL') || 'https://runjp.com';
const SESSION_TTL_SECONDS = Math.max(
  60,
  Number(Deno.env.get('AGENT_SESSION_TTL_SECONDS') || 900) || 900,
);

let supabaseClient: ReturnType<typeof createClient> | null = null;
let privateJwk: JsonWebKey | null = null;

type User = {
  id: string;
  email?: string;
};

type ConsentRow = {
  allow_progress_context: boolean;
  allow_notes_context: boolean;
  allow_chat_history_context: boolean;
  updated_at: string;
};

type EntitlementRow = {
  plan: string;
  status: string;
  monthly_message_limit: number;
  monthly_token_limit: number;
  enabled_models: string[];
  current_period_start: string;
  current_period_end: string;
  updated_at: string;
};

function getSupabase() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) return null;
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseClient;
}

function getPrivateJwk() {
  if (!privateJwk) privateJwk = parsePrivateJwk(AGENT_SESSION_PRIVATE_JWK);
  return privateJwk;
}

function isAgentConfigured() {
  return Boolean(SUPABASE_URL && SERVICE_ROLE_KEY && AGENT_BASE_URL && AGENT_SESSION_PRIVATE_JWK);
}

async function requireUser(req: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return { response: errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.') };
  }

  const token = getBearerToken(req);
  if (!token) {
    return { response: errorResponse(401, 'missing_auth', 'Login is required.') };
  }

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) {
    return { response: errorResponse(401, 'invalid_auth', 'Invalid or expired login session.') };
  }

  return { user: data.user as User };
}

async function ensureAgentLink(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const existing = await supabase
    .from('agent_user_links')
    .select('agent_user_id,user_id')
    .eq('user_id', userId)
    .maybeSingle();

  if (existing.error) throw existing.error;
  if (existing.data) return existing.data as { agent_user_id: string; user_id: string };

  const inserted = await supabase
    .from('agent_user_links')
    .insert({ user_id: userId })
    .select('agent_user_id,user_id')
    .single();

  if (!inserted.error && inserted.data) {
    return inserted.data as { agent_user_id: string; user_id: string };
  }

  const retry = await supabase
    .from('agent_user_links')
    .select('agent_user_id,user_id')
    .eq('user_id', userId)
    .maybeSingle();

  if (retry.error) throw retry.error;
  if (!retry.data) throw inserted.error || new Error('Failed to create agent user link.');
  return retry.data as { agent_user_id: string; user_id: string };
}

async function ensureConsents(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const insert = await supabase
    .from('user_ai_consents')
    .upsert({ user_id: userId }, { onConflict: 'user_id', ignoreDuplicates: true });
  if (insert.error) throw insert.error;

  const { data, error } = await supabase
    .from('user_ai_consents')
    .select('allow_progress_context,allow_notes_context,allow_chat_history_context,updated_at')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data as ConsentRow;
}

async function ensureEntitlement(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const insert = await supabase
    .from('ai_entitlements')
    .upsert({ user_id: userId }, { onConflict: 'user_id', ignoreDuplicates: true });
  if (insert.error) throw insert.error;

  const { data, error } = await supabase
    .from('ai_entitlements')
    .select('plan,status,monthly_message_limit,monthly_token_limit,enabled_models,current_period_start,current_period_end,updated_at')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data as EntitlementRow;
}

function currentPeriodStart() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString().slice(0, 10);
}

function currentPeriodEnd() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)).toISOString().slice(0, 10);
}

async function getUsageSummary(userId: string, entitlement: EntitlementRow) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const periodStart = currentPeriodStart();
  const periodEnd = currentPeriodEnd();

  const { data, error } = await supabase
    .from('ai_usage_months')
    .select('messages_used,messages_reserved,input_tokens,output_tokens,total_tokens,cost_micros,period_start,period_end')
    .eq('user_id', userId)
    .eq('period_start', periodStart)
    .maybeSingle();

  if (error) throw error;
  return {
    periodStart,
    periodEnd,
    messagesUsed: Number(data?.messages_used || 0),
    messagesReserved: Number(data?.messages_reserved || 0),
    messageLimit: Number(entitlement.monthly_message_limit || 0),
    inputTokens: Number(data?.input_tokens || 0),
    outputTokens: Number(data?.output_tokens || 0),
    totalTokens: Number(data?.total_tokens || 0),
    tokenLimit: Number(entitlement.monthly_token_limit || 0),
    costMicros: Number(data?.cost_micros || 0),
  };
}

function publicConsents(row: ConsentRow) {
  return {
    progress: Boolean(row.allow_progress_context),
    notes: Boolean(row.allow_notes_context),
    history: Boolean(row.allow_chat_history_context),
    updatedAt: row.updated_at,
  };
}

function publicEntitlement(row: EntitlementRow) {
  return {
    plan: row.plan,
    status: row.status,
    monthlyMessageLimit: Number(row.monthly_message_limit || 0),
    monthlyTokenLimit: Number(row.monthly_token_limit || 0),
    enabledModels: Array.isArray(row.enabled_models) ? row.enabled_models : [],
    currentPeriodStart: row.current_period_start,
    currentPeriodEnd: row.current_period_end,
    updatedAt: row.updated_at,
  };
}

async function loadState(userId: string) {
  const [link, consents, entitlement] = await Promise.all([
    ensureAgentLink(userId),
    ensureConsents(userId),
    ensureEntitlement(userId),
  ]);
  const usage = await getUsageSummary(userId, entitlement);

  return {
    link,
    consents,
    entitlement,
    usage,
  };
}

async function getStatus(user: User) {
  const state = await loadState(user.id);
  return jsonResponse({
    configured: isAgentConfigured(),
    agentUserId: state.link.agent_user_id,
    consents: publicConsents(state.consents),
    entitlements: publicEntitlement(state.entitlement),
    usage: state.usage,
  });
}

async function updateConsents(user: User, body: Record<string, unknown>) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const consents = body?.consents && typeof body.consents === 'object'
    ? body.consents as Record<string, unknown>
    : body;

  const { data, error } = await supabase
    .from('user_ai_consents')
    .upsert({
      user_id: user.id,
      allow_progress_context: Boolean(consents?.progress),
      allow_notes_context: Boolean(consents?.notes),
      allow_chat_history_context: Boolean(consents?.history),
    }, { onConflict: 'user_id' })
    .select('allow_progress_context,allow_notes_context,allow_chat_history_context,updated_at')
    .single();

  if (error) throw error;
  return jsonResponse({ consents: publicConsents(data as ConsentRow) });
}

function buildScopes(consents: ConsentRow) {
  const scopes = ['chat', 'context:documents'];
  if (consents.allow_progress_context) scopes.push('context:progress');
  if (consents.allow_notes_context) scopes.push('context:notes');
  if (consents.allow_chat_history_context) scopes.push('context:history');
  return scopes;
}

async function ensureActiveState(
  user: User,
): Promise<{ error: Response } | { state: Awaited<ReturnType<typeof loadState>> }> {
  const state = await loadState(user.id);
  if (!['active', 'trialing'].includes(state.entitlement.status)) {
    return { error: errorResponse(403, 'ai_entitlement_inactive', 'AI tutor access is not active for this account.') };
  }
  return { state };
}

// 签发一个短期 session token（ES256，aud=kai-agent，sub=agent_user_id），仅用于本服务端 → amaterasu 的内部调用，绝不下发给浏览器。
async function mintSessionToken(state: Awaited<ReturnType<typeof loadState>>) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const now = Math.floor(Date.now() / 1000);
  const exp = now + SESSION_TTL_SECONDS;
  const expiresAt = new Date(exp * 1000).toISOString();
  const scopes = buildScopes(state.consents);

  const { data, error } = await supabase
    .from('agent_sessions')
    .insert({ agent_user_id: state.link.agent_user_id, scopes, expires_at: expiresAt })
    .select('id,expires_at')
    .single();
  if (error) throw error;

  const payload = {
    iss: SITE_URL,
    aud: 'kai-agent',
    sub: state.link.agent_user_id,
    sid: data.id,
    jti: crypto.randomUUID(),
    scope: scopes,
    plan: state.entitlement.plan || 'free',
    consent: {
      progress: Boolean(state.consents.allow_progress_context),
      notes: Boolean(state.consents.allow_notes_context),
      history: Boolean(state.consents.allow_chat_history_context),
    },
    iat: now,
    exp,
  };
  return await signJwt(payload, getPrivateJwk());
}

// 浏览器 → 本函数 → amaterasu 的服务端代理：amaterasu 只接受携带本服务签发 token 的服务间调用，用户拿不到直连凭据。
type AgentCall = { method: string; path: string; payload?: unknown };

function enc(value: unknown) {
  return encodeURIComponent(String(value ?? ''));
}

function requireSessionId(body: Record<string, unknown>) {
  const id = typeof body?.sessionId === 'string' ? body.sessionId.trim() : '';
  if (!id) throw new Error('missing_session_id');
  return id;
}

function buildQuery(body: Record<string, unknown>, keys: string[]) {
  const params = new URLSearchParams();
  for (const key of keys) {
    const value = body?.[key];
    if (value !== undefined && value !== null && value !== '') params.set(key, String(value));
  }
  const query = params.toString();
  return query ? `?${query}` : '';
}

const CHAT_ACTIONS: Record<string, (body: Record<string, unknown>) => AgentCall> = {
  chat_start: (b) => ({
    method: 'POST',
    path: '/sessions',
    payload: { prompt: b.prompt, model: b.model, title: b.title, description: b.description, pics: b.pics },
  }),
  chat_continue: (b) => ({
    method: 'POST',
    path: `/sessions/${enc(requireSessionId(b))}/messages`,
    payload: { prompt: b.prompt, model: b.model, pics: b.pics },
  }),
  chat_list: (b) => ({ method: 'GET', path: `/sessions${buildQuery(b, ['search', 'cursor', 'limit'])}` }),
  chat_history: (b) => ({ method: 'GET', path: `/sessions/${enc(requireSessionId(b))}` }),
  chat_rename: (b) => ({ method: 'PATCH', path: `/sessions/${enc(requireSessionId(b))}`, payload: { title: b.title } }),
  chat_delete: (b) => ({ method: 'DELETE', path: `/sessions/${enc(requireSessionId(b))}` }),
};

async function proxyChat(user: User, call: AgentCall, wantStream = false) {
  if (!isAgentConfigured()) {
    return errorResponse(503, 'agent_not_configured', 'Agent bridge is not configured.');
  }
  const result = await ensureActiveState(user);
  if ('error' in result) return result.error;

  const sessionToken = await mintSessionToken(result.state);
  const res = await fetch(`${AGENT_BASE_URL.replace(/\/+$/, '')}${call.path}`, {
    method: call.method,
    headers: {
      Authorization: `Bearer ${sessionToken}`,
      ...(call.payload !== undefined ? { 'Content-Type': 'application/json' } : {}),
      ...(wantStream ? { Accept: 'text/event-stream' } : {}),
    },
    body: call.payload !== undefined ? JSON.stringify(call.payload) : undefined,
  });

  // 流式：把 agent 的 SSE 流原样透传给浏览器（Deno 边收边发，不缓冲）。
  if (wantStream && res.body) {
    return new Response(res.body, {
      status: res.status,
      headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' },
    });
  }

  const text = await res.text();
  return jsonResponse(text ? JSON.parse(text) : {}, res.status);
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    const status = isAllowedOrigin(req) ? 200 : 403;
    return withCors(req, new Response(status === 200 ? 'ok' : 'forbidden', { status }));
  }

  if (!isAllowedOrigin(req)) {
    return withCors(req, errorResponse(403, 'origin_not_allowed', 'Origin is not allowed.'));
  }

  const auth = await requireUser(req);
  if ('response' in auth) return withCors(req, auth.response);

  try {
    if (req.method === 'GET') {
      return withCors(req, await getStatus(auth.user));
    }

    if (req.method === 'POST') {
      const body = await readJsonBody(req);
      const action = typeof body?.action === 'string' ? body.action : '';
      if (action === 'update_consents') {
        return withCors(req, await updateConsents(auth.user, body));
      }
      const chat = CHAT_ACTIONS[action];
      if (chat) {
        try {
          const wantStream = (action === 'chat_start' || action === 'chat_continue')
            && (req.headers.get('accept') || '').includes('text/event-stream');
          return withCors(req, await proxyChat(auth.user, chat(body), wantStream));
        } catch (err) {
          if (err instanceof Error && err.message === 'missing_session_id') {
            return withCors(req, errorResponse(400, 'missing_session_id', 'A session id is required.'));
          }
          throw err;
        }
      }
      return withCors(req, errorResponse(400, 'unknown_action', 'Unknown agent session action.'));
    }

    return withCors(req, errorResponse(405, 'method_not_allowed', 'Method not allowed.'));
  } catch (error) {
    console.error(error);
    return withCors(req, errorResponse(500, 'internal_error', 'Agent session request failed.'));
  }
});
