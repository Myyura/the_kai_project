import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.48.1';
import {
  defaultCorsHeaders,
  errorResponse,
  getBearerToken,
  jsonResponse,
  readJsonBody,
} from './http.ts';
import {
  parsePrivateJwk,
  parsePublicJwk,
  publicJwkFromPrivate,
  verifyJwt,
} from './jwt.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const AGENT_SERVICE_PUBLIC_JWK = Deno.env.get('AGENT_SERVICE_PUBLIC_JWK') || '';
const AGENT_SESSION_PRIVATE_JWK = Deno.env.get('AGENT_SESSION_PRIVATE_JWK') || '';
const AGENT_SESSION_PUBLIC_JWK = Deno.env.get('AGENT_SESSION_PUBLIC_JWK') || '';
const SITE_URL = Deno.env.get('SITE_URL') || 'https://runjp.com';

let supabaseClient: ReturnType<typeof createClient> | null = null;
let servicePublicJwk: JsonWebKey | null = null;
let sessionPublicJwk: JsonWebKey | null = null;

type AgentContext = {
  userId: string;
  agentUserId: string;
  sessionId: string;
  scopes: string[];
  plan: string;
  consent: Record<string, unknown>;
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

function getServicePublicJwk() {
  if (!servicePublicJwk) {
    servicePublicJwk = parsePublicJwk(AGENT_SERVICE_PUBLIC_JWK, 'AGENT_SERVICE_PUBLIC_JWK');
  }
  return servicePublicJwk;
}

function getSessionPublicJwk() {
  if (!sessionPublicJwk) {
    sessionPublicJwk = AGENT_SESSION_PUBLIC_JWK
      ? parsePublicJwk(AGENT_SESSION_PUBLIC_JWK, 'AGENT_SESSION_PUBLIC_JWK')
      : publicJwkFromPrivate(parsePrivateJwk(AGENT_SESSION_PRIVATE_JWK));
  }
  return sessionPublicJwk;
}

function getApiPath(req: Request) {
  const url = new URL(req.url);
  const marker = '/agent-context';
  const markerIndex = url.pathname.indexOf(marker);
  const path = markerIndex >= 0
    ? url.pathname.slice(markerIndex + marker.length)
    : url.pathname;
  return path || '/';
}

function parsePositiveInt(value: string | null, fallback: number, max: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(Math.floor(parsed), max);
}

function hasScope(ctx: AgentContext, scope: string) {
  return ctx.scopes.includes(scope);
}

async function authenticateAgentRequest(req: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return { response: errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.') };
  }

  if (!AGENT_SERVICE_PUBLIC_JWK || (!AGENT_SESSION_PUBLIC_JWK && !AGENT_SESSION_PRIVATE_JWK)) {
    return { response: errorResponse(500, 'agent_context_not_configured', 'Agent context verification keys are not configured.') };
  }

  const serviceToken = getBearerToken(req);
  if (!serviceToken) {
    return { response: errorResponse(401, 'missing_service_token', 'Agent service token is required.') };
  }

  try {
    await verifyJwt(serviceToken, getServicePublicJwk(), {
      issuer: 'kai-agent',
      audience: 'kai-agent-context',
    });
  } catch {
    return { response: errorResponse(403, 'invalid_service_token', 'Invalid agent service token.') };
  }

  const sessionToken = req.headers.get('x-kai-agent-session')?.trim() || '';
  if (!sessionToken) {
    return { response: errorResponse(401, 'missing_agent_session', 'Agent session token is required.') };
  }

  let payload: Record<string, unknown>;
  try {
    payload = await verifyJwt(sessionToken, getSessionPublicJwk(), {
      issuer: SITE_URL,
      audience: 'kai-agent',
    });
  } catch {
    return { response: errorResponse(403, 'invalid_agent_session', 'Invalid or expired agent session token.') };
  }

  const sessionId = typeof payload.sid === 'string' ? payload.sid : '';
  const agentUserId = typeof payload.sub === 'string' ? payload.sub : '';
  const scopes = Array.isArray(payload.scope)
    ? payload.scope.filter((scope) => typeof scope === 'string') as string[]
    : [];

  if (!sessionId || !agentUserId) {
    return { response: errorResponse(403, 'invalid_agent_session', 'Agent session token is missing required claims.') };
  }

  const { data: session, error: sessionError } = await supabase
    .from('agent_sessions')
    .select('id,agent_user_id,status,expires_at,scopes')
    .eq('id', sessionId)
    .maybeSingle();

  if (sessionError) throw sessionError;
  if (
    !session ||
    session.agent_user_id !== agentUserId ||
    session.status !== 'active' ||
    new Date(session.expires_at).getTime() <= Date.now()
  ) {
    return { response: errorResponse(403, 'agent_session_inactive', 'Agent session is not active.') };
  }

  const { data: link, error: linkError } = await supabase
    .from('agent_user_links')
    .select('user_id,agent_user_id')
    .eq('agent_user_id', agentUserId)
    .maybeSingle();

  if (linkError) throw linkError;
  if (!link) {
    return { response: errorResponse(403, 'agent_user_not_found', 'Agent user mapping was not found.') };
  }

  return {
    ctx: {
      userId: link.user_id,
      agentUserId,
      sessionId,
      scopes,
      plan: typeof payload.plan === 'string' ? payload.plan : 'free',
      consent: payload.consent && typeof payload.consent === 'object'
        ? payload.consent as Record<string, unknown>
        : {},
    } as AgentContext,
  };
}

async function getEntitlement(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const { data, error } = await supabase
    .from('ai_entitlements')
    .select('plan,status,monthly_message_limit,monthly_token_limit,enabled_models,current_period_start,current_period_end')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function getConsents(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const { data, error } = await supabase
    .from('user_ai_consents')
    .select('allow_progress_context,allow_notes_context,allow_chat_history_context,updated_at')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

function currentPeriodStart() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString().slice(0, 10);
}

async function getUsage(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const { data, error } = await supabase
    .from('ai_usage_months')
    .select('period_start,period_end,messages_used,messages_reserved,input_tokens,output_tokens,total_tokens,cost_micros')
    .eq('user_id', userId)
    .eq('period_start', currentPeriodStart())
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function handleProfile(ctx: AgentContext) {
  const [entitlement, consents, usage] = await Promise.all([
    getEntitlement(ctx.userId),
    getConsents(ctx.userId),
    getUsage(ctx.userId),
  ]);

  return jsonResponse({
    agentUserId: ctx.agentUserId,
    sessionId: ctx.sessionId,
    plan: ctx.plan,
    scopes: ctx.scopes,
    consent: ctx.consent,
    entitlements: entitlement,
    consents,
    usage: usage || null,
  });
}

async function handleStudySummary(ctx: AgentContext) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const canReadProgress = hasScope(ctx, 'context:progress');
  const canReadNotes = hasScope(ctx, 'context:notes');

  const [progressResult, notesResult] = await Promise.all([
    canReadProgress ? supabase
      .from('user_progress_items')
      .select('status,tags,client_updated_at,updated_at')
      .eq('user_id', ctx.userId)
      .is('deleted_at', null)
      .limit(1000) : Promise.resolve({ data: [], error: null }),
    canReadNotes ? supabase
      .from('user_note_items')
      .select('doc_id,client_updated_at,updated_at')
      .eq('user_id', ctx.userId)
      .is('deleted_at', null)
      .limit(1000) : Promise.resolve({ data: [], error: null }),
  ]);

  if (progressResult.error) throw progressResult.error;
  if (notesResult.error) throw notesResult.error;

  const progressRows = progressResult.data || [];
  const noteRows = notesResult.data || [];
  const tagCounts = new Map<string, number>();
  let completed = 0;
  let reviewing = 0;
  let latestActivityMs = 0;

  for (const row of progressRows) {
    if (row.status === 'completed') completed += 1;
    if (row.status === 'reviewing') reviewing += 1;
    const updatedMs = Math.max(Number(row.client_updated_at || 0), new Date(row.updated_at || 0).getTime() || 0);
    latestActivityMs = Math.max(latestActivityMs, updatedMs);
    for (const tag of Array.isArray(row.tags) ? row.tags : []) {
      if (typeof tag === 'string' && tag.trim()) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      }
    }
  }

  for (const row of noteRows) {
    const updatedMs = Math.max(Number(row.client_updated_at || 0), new Date(row.updated_at || 0).getTime() || 0);
    latestActivityMs = Math.max(latestActivityMs, updatedMs);
  }

  const topTags = Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([tag, count]) => ({ tag, count }));

  return jsonResponse({
    progress: {
      authorized: canReadProgress,
      total: progressRows.length,
      completed,
      reviewing,
      topTags,
    },
    notes: {
      authorized: canReadNotes,
      total: noteRows.length,
    },
    latestActivityAt: latestActivityMs ? new Date(latestActivityMs).toISOString() : null,
  });
}

async function handleProgress(req: Request, ctx: AgentContext) {
  if (!hasScope(ctx, 'context:progress')) {
    return errorResponse(403, 'scope_missing', 'Progress context is not authorized.');
  }

  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const url = new URL(req.url);
  const limit = parsePositiveInt(url.searchParams.get('limit'), 50, 100);

  let query = supabase
    .from('user_progress_items')
    .select('doc_id,status,title,permalink,tags,review_count,client_updated_at,updated_at')
    .eq('user_id', ctx.userId)
    .is('deleted_at', null)
    .order('updated_at', { ascending: false })
    .limit(limit);

  const docId = url.searchParams.get('docId');
  if (docId) query = query.eq('doc_id', docId);
  const updatedAfter = url.searchParams.get('updatedAfter');
  if (updatedAfter) query = query.gte('updated_at', updatedAfter);

  const { data, error } = await query;
  if (error) throw error;

  return jsonResponse({
    items: (data || []).map((row) => ({
      docId: row.doc_id,
      status: row.status,
      title: row.title,
      permalink: row.permalink,
      tags: row.tags || [],
      reviewCount: row.review_count,
      clientUpdatedAt: row.client_updated_at,
      updatedAt: row.updated_at,
    })),
  });
}

async function handleNotes(req: Request, ctx: AgentContext) {
  if (!hasScope(ctx, 'context:notes')) {
    return errorResponse(403, 'scope_missing', 'Notes context is not authorized.');
  }

  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const url = new URL(req.url);
  const limit = parsePositiveInt(url.searchParams.get('limit'), 25, 50);

  let query = supabase
    .from('user_note_items')
    .select('doc_id,content,client_updated_at,updated_at')
    .eq('user_id', ctx.userId)
    .is('deleted_at', null)
    .order('updated_at', { ascending: false })
    .limit(limit);

  const docId = url.searchParams.get('docId');
  if (docId) query = query.eq('doc_id', docId);
  const updatedAfter = url.searchParams.get('updatedAfter');
  if (updatedAfter) query = query.gte('updated_at', updatedAfter);

  const { data, error } = await query;
  if (error) throw error;

  return jsonResponse({
    items: (data || []).map((row) => ({
      docId: row.doc_id,
      content: row.content || '',
      clientUpdatedAt: row.client_updated_at,
      updatedAt: row.updated_at,
    })),
  });
}

function publicDocument(row: Record<string, unknown>) {
  return {
    docId: row.doc_id,
    type: row.type,
    title: row.title,
    university: {
      id: row.university_id,
      name: row.university_name,
    },
    department: {
      id: row.department_id,
      name: row.department_name,
    },
    program: row.program_id ? {
      id: row.program_id,
      name: row.program_name,
    } : null,
    year: row.year,
    yearLabel: row.year_label,
    tags: row.tags || [],
    schoolTags: row.school_tags || [],
    learningTags: row.learning_tags || [],
    subjectIds: row.subject_ids || [],
    subsubjectIds: row.subsubject_ids || [],
    topicIds: row.topic_ids || [],
    permalink: row.permalink,
    sourcePath: row.source_path,
    sections: {
      authorMarkdown: row.author_markdown || '',
      descriptionMarkdown: row.description_markdown || '',
      kaiMarkdown: row.kai_markdown || '',
    },
    fullMarkdown: row.full_markdown || '',
    updatedAt: row.updated_at,
  };
}

async function handleDocument(docId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const { data, error } = await supabase
    .from('exam_documents')
    .select([
      'doc_id',
      'type',
      'title',
      'university_id',
      'university_name',
      'department_id',
      'department_name',
      'program_id',
      'program_name',
      'year',
      'year_label',
      'tags',
      'school_tags',
      'learning_tags',
      'subject_ids',
      'subsubject_ids',
      'topic_ids',
      'permalink',
      'source_path',
      'author_markdown',
      'description_markdown',
      'kai_markdown',
      'full_markdown',
      'updated_at',
    ].join(','))
    .eq('doc_id', docId)
    .maybeSingle();

  if (error) throw error;
  if (!data) return errorResponse(404, 'document_not_found', 'Document was not found.');
  return jsonResponse({ item: publicDocument(data) });
}

async function handleReserve(body: Record<string, unknown>, ctx: AgentContext) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const idempotencyKey = typeof body?.idempotencyKey === 'string' ? body.idempotencyKey.trim() : '';
  if (!idempotencyKey) {
    return errorResponse(400, 'invalid_idempotency_key', 'A non-empty idempotency key is required.');
  }

  const model = typeof body?.model === 'string' ? body.model : '';
  const { data, error } = await supabase.rpc('reserve_ai_message', {
    p_session_id: ctx.sessionId,
    p_idempotency_key: idempotencyKey,
    p_model: model,
  });

  if (error) throw error;
  const result = Array.isArray(data) ? data[0] : data;
  const allowed = Boolean(result?.allowed);
  const code = result?.code || (allowed ? 'reserved' : 'rejected');
  // 余额不足（任一池）→ 402；其余拒绝 → 403
  const insufficient = code === 'insufficient_credit' || code === 'insufficient_premium_credit';
  const status = allowed ? 200 : insufficient ? 402 : 403;
  return jsonResponse({
    allowed,
    code,
    reservationId: result?.reservation_id || null,
    creditPool: result?.credit_pool ?? null,
    creditBalanceMicros: result?.credit_balance_micros ?? null,
    periodStart: result?.period_start ?? null,
  }, status);
}

async function ensureReservationInSession(reservationId: string, ctx: AgentContext) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const { data, error } = await supabase
    .from('ai_usage_reservations')
    .select('id')
    .eq('id', reservationId)
    .eq('session_id', ctx.sessionId)
    .maybeSingle();

  if (error) throw error;
  return Boolean(data);
}

async function handleCommit(body: Record<string, unknown>, ctx: AgentContext) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const reservationId = typeof body?.reservationId === 'string' ? body.reservationId.trim() : '';
  if (!reservationId) {
    return errorResponse(400, 'missing_reservation_id', 'Missing reservation id.');
  }
  const reservationMatchesSession = await ensureReservationInSession(reservationId, ctx);
  if (!reservationMatchesSession) {
    return errorResponse(403, 'reservation_session_mismatch', 'Reservation does not belong to this agent session.');
  }

  // 成本不再由 agent 传入：本服务按 ai_model_prices 价目表用 token 明细计算并扣 credit。
  const { data, error } = await supabase.rpc('commit_ai_usage', {
    p_reservation_id: reservationId,
    p_provider: typeof body?.provider === 'string' ? body.provider : '',
    p_model: typeof body?.model === 'string' ? body.model : '',
    p_input_tokens: Math.max(0, Number(body?.inputTokens || 0) || 0),
    p_cached_input_tokens: Math.max(0, Number(body?.cachedInputTokens || 0) || 0),
    p_output_tokens: Math.max(0, Number(body?.outputTokens || 0) || 0),
    p_status: typeof body?.status === 'string' ? body.status : 'succeeded',
    p_latency_ms: body?.latencyMs == null ? null : Math.max(0, Number(body.latencyMs || 0) || 0),
    p_error_code: typeof body?.errorCode === 'string' ? body.errorCode : '',
  });

  if (error) throw error;
  const result = Array.isArray(data) ? data[0] : data;
  return jsonResponse({
    accepted: Boolean(result?.accepted),
    code: result?.code || null,
    eventId: result?.event_id || null,
    costMicros: result?.cost_micros ?? null,
  }, result?.accepted ? 200 : 409);
}

async function handleCancel(body: Record<string, unknown>, ctx: AgentContext) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  const reservationId = typeof body?.reservationId === 'string' ? body.reservationId.trim() : '';
  if (!reservationId) {
    return errorResponse(400, 'missing_reservation_id', 'Missing reservation id.');
  }
  const reservationMatchesSession = await ensureReservationInSession(reservationId, ctx);
  if (!reservationMatchesSession) {
    return errorResponse(403, 'reservation_session_mismatch', 'Reservation does not belong to this agent session.');
  }

  const { data, error } = await supabase.rpc('cancel_ai_reservation', {
    p_reservation_id: reservationId,
    p_reason: typeof body?.reason === 'string' ? body.reason : '',
  });

  if (error) throw error;
  const result = Array.isArray(data) ? data[0] : data;
  return jsonResponse({
    accepted: Boolean(result?.accepted),
    code: result?.code || null,
    reservationId: result?.reservation_id || null,
  }, result?.accepted ? 200 : 409);
}

async function handleRequest(req: Request, ctx: AgentContext) {
  const path = getApiPath(req);
  if (req.method === 'GET') {
    if (path === '/v1/context/profile') return await handleProfile(ctx);
    if (path === '/v1/context/study-summary') return await handleStudySummary(ctx);
    if (path === '/v1/context/progress') return await handleProgress(req, ctx);
    if (path === '/v1/context/notes') return await handleNotes(req, ctx);

    const docPrefix = '/v1/content/documents/';
    if (path.startsWith(docPrefix)) {
      if (!hasScope(ctx, 'context:documents')) {
        return errorResponse(403, 'scope_missing', 'Document context is not authorized.');
      }
      return await handleDocument(decodeURIComponent(path.slice(docPrefix.length)));
    }
  }

  if (req.method === 'POST') {
    const body = await readJsonBody(req);
    if (path === '/v1/usage/reserve') return await handleReserve(body, ctx);
    if (path === '/v1/usage/commit') return await handleCommit(body, ctx);
    if (path === '/v1/usage/cancel') return await handleCancel(body, ctx);
  }

  return errorResponse(404, 'not_found', 'Agent context route was not found.');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: defaultCorsHeaders });
  }

  const auth = await authenticateAgentRequest(req);
  if ('response' in auth) return auth.response;

  try {
    return await handleRequest(req, auth.ctx);
  } catch (error) {
    console.error(error);
    return errorResponse(500, 'internal_error', 'Agent context request failed.');
  }
});
