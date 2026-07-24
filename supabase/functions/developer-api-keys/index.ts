import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.98.0';
import {
  corsHeadersFor,
  errorResponse,
  getBearerToken,
  isAllowedOrigin,
  jsonResponse,
  readJsonBody,
  withCors,
} from './http.ts';
import { randomBase64Url, sha256Hex } from './crypto.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const MAX_ACTIVE_KEYS = 3;
const DEFAULT_RATE_LIMIT_PER_MINUTE = 60;

let supabaseClient: ReturnType<typeof createClient> | null = null;

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

type ApiKeyRow = {
  id: string;
  name: string;
  key_prefix: string;
  status: string;
  rate_limit_per_minute: number;
  plan: string;
  request_count: number;
  last_used_at: string | null;
  revoked_at: string | null;
  created_at: string;
};

type ApiAccessRequestRow = {
  id: string;
  status: string;
  applicant_name: string;
  organization: string;
  contact_email: string;
  website: string;
  intended_use: string;
  commercial_use: boolean;
  plan: string;
  rate_limit_per_minute: number;
  max_active_keys: number;
  commercial_allowed: boolean;
  expires_at: string | null;
  reviewed_at: string | null;
  review_note: string | null;
  updated_at: string;
  created_at: string;
};

function publicKeyRow(row: ApiKeyRow) {
  return {
    id: row.id,
    name: row.name,
    keyPrefix: row.key_prefix,
    status: row.status,
    rateLimitPerMinute: row.rate_limit_per_minute,
    plan: row.plan || 'free',
    requestCount: Number(row.request_count || 0),
    lastUsedAt: row.last_used_at,
    revokedAt: row.revoked_at,
    createdAt: row.created_at,
  };
}

function publicAccessRequest(row: ApiAccessRequestRow | null) {
  if (!row) return null;
  return {
    id: row.id,
    status: row.status,
    applicantName: row.applicant_name,
    organization: row.organization,
    contactEmail: row.contact_email,
    website: row.website,
    intendedUse: row.intended_use,
    commercialUse: row.commercial_use,
    plan: row.plan,
    rateLimitPerMinute: row.rate_limit_per_minute,
    maxActiveKeys: row.max_active_keys,
    commercialAllowed: row.commercial_allowed,
    expiresAt: row.expires_at,
    reviewedAt: row.reviewed_at,
    reviewNote: row.review_note,
    updatedAt: row.updated_at,
    createdAt: row.created_at,
  };
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
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

  return { user: data.user };
}

async function getAccessRequest(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const { data, error } = await supabase
    .from('api_access_requests')
    .select([
      'id',
      'status',
      'applicant_name',
      'organization',
      'contact_email',
      'website',
      'intended_use',
      'commercial_use',
      'plan',
      'rate_limit_per_minute',
      'max_active_keys',
      'commercial_allowed',
      'expires_at',
      'reviewed_at',
      'review_note',
      'updated_at',
      'created_at',
    ].join(','))
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;
  return (data || null) as ApiAccessRequestRow | null;
}

async function listKeys(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const [accessRequest, keyResult] = await Promise.all([
    getAccessRequest(userId),
    supabase
      .from('api_keys')
      .select('id,name,key_prefix,status,rate_limit_per_minute,plan,request_count,last_used_at,revoked_at,created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false }),
  ]);

  if (keyResult.error) throw keyResult.error;
  return jsonResponse({
    accessRequest: publicAccessRequest(accessRequest),
    keys: (keyResult.data || []).map(publicKeyRow),
  });
}

async function requestAccess(user: { id: string; email?: string }, body: Record<string, unknown>) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const existing = await getAccessRequest(user.id);
  if (existing?.status === 'approved') {
    return errorResponse(409, 'access_already_approved', 'API access is already approved for this account.');
  }
  if (existing?.status === 'revoked') {
    return errorResponse(403, 'access_revoked', 'API access for this account has been revoked.');
  }

  const applicantName = cleanText(body?.applicantName, 120);
  const organization = cleanText(body?.organization, 160);
  const contactEmail = cleanText(body?.contactEmail, 180) || user.email || '';
  const website = cleanText(body?.website, 240);
  const intendedUse = cleanText(body?.intendedUse, 4000);
  const commercialUse = Boolean(body?.commercialUse);

  const payload = {
    user_id: user.id,
    status: 'pending',
    applicant_name: applicantName,
    organization,
    contact_email: contactEmail,
    website,
    intended_use: intendedUse,
    commercial_use: commercialUse,
    plan: 'free',
    rate_limit_per_minute: DEFAULT_RATE_LIMIT_PER_MINUTE,
    max_active_keys: MAX_ACTIVE_KEYS,
    commercial_allowed: false,
    reviewed_by: null,
    reviewed_at: null,
    review_note: null,
  };

  const { data, error } = await supabase
    .from('api_access_requests')
    .upsert(payload, { onConflict: 'user_id' })
    .select([
      'id',
      'status',
      'applicant_name',
      'organization',
      'contact_email',
      'website',
      'intended_use',
      'commercial_use',
      'plan',
      'rate_limit_per_minute',
      'max_active_keys',
      'commercial_allowed',
      'expires_at',
      'reviewed_at',
      'review_note',
      'updated_at',
      'created_at',
    ].join(','))
    .single();

  if (error) throw error;
  return jsonResponse({ accessRequest: publicAccessRequest(data) }, existing ? 200 : 201);
}

async function createKey(userId: string, body: Record<string, unknown>) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const accessRequest = await getAccessRequest(userId);
  if (!accessRequest || accessRequest.status !== 'approved') {
    return errorResponse(403, 'access_not_approved', 'API access must be approved before creating API keys.');
  }
  if (accessRequest.expires_at && new Date(accessRequest.expires_at).getTime() < Date.now()) {
    return errorResponse(403, 'access_expired', 'API access for this account has expired.');
  }

  const rawName = typeof body?.name === 'string' ? body.name.trim() : '';
  const name = rawName.slice(0, 80) || 'Default API key';
  const maxActiveKeys = accessRequest.max_active_keys || MAX_ACTIVE_KEYS;

  const { count, error: countError } = await supabase
    .from('api_keys')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('status', 'active');

  if (countError) throw countError;
  if ((count || 0) >= maxActiveKeys) {
    return errorResponse(409, 'active_key_limit', `Each account can have up to ${maxActiveKeys} active API keys.`);
  }

  const plainKey = `kai_live_${randomBase64Url(32)}`;
  const keyHash = await sha256Hex(plainKey);
  const keyPrefix = plainKey.slice(0, 18);

  const { data, error } = await supabase
    .from('api_keys')
    .insert({
      user_id: userId,
      name,
      key_prefix: keyPrefix,
      key_hash: keyHash,
      status: 'active',
      rate_limit_per_minute: accessRequest.rate_limit_per_minute || DEFAULT_RATE_LIMIT_PER_MINUTE,
      plan: accessRequest.plan || 'free',
    })
    .select('id,name,key_prefix,status,rate_limit_per_minute,plan,request_count,last_used_at,revoked_at,created_at')
    .single();

  if (error) throw error;

  return jsonResponse({
    key: plainKey,
    item: publicKeyRow(data),
  }, 201);
}

async function revokeKey(userId: string, body: Record<string, unknown>) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const id = typeof body?.id === 'string' ? body.id : '';
  if (!id) {
    return errorResponse(400, 'missing_key_id', 'Missing API key id.');
  }

  const { data, error } = await supabase
    .from('api_keys')
    .update({
      status: 'revoked',
      revoked_at: new Date().toISOString(),
    })
    .eq('id', id)
    .eq('user_id', userId)
    .select('id,name,key_prefix,status,rate_limit_per_minute,plan,request_count,last_used_at,revoked_at,created_at')
    .maybeSingle();

  if (error) throw error;
  if (!data) {
    return errorResponse(404, 'key_not_found', 'API key not found.');
  }

  return jsonResponse({ item: publicKeyRow(data) });
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    const status = isAllowedOrigin(req) ? 200 : 403;
    return new Response(status === 200 ? 'ok' : 'forbidden', { status, headers: corsHeadersFor(req) });
  }

  if (!isAllowedOrigin(req)) {
    return withCors(req, errorResponse(403, 'origin_not_allowed', 'Origin is not allowed.'));
  }

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return withCors(req, errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.'));
  }

  const auth = await requireUser(req);
  if ('response' in auth) return withCors(req, auth.response);

  try {
    if (req.method === 'GET') return withCors(req, await listKeys(auth.user.id));
    if (req.method === 'POST') {
      const body = await readJsonBody(req);
      if (body?.action === 'request_access') {
        return withCors(req, await requestAccess(auth.user, body));
      }
      return withCors(req, await createKey(auth.user.id, body));
    }
    if (req.method === 'DELETE') {
      const body = await readJsonBody(req);
      return withCors(req, await revokeKey(auth.user.id, body));
    }
    return withCors(req, errorResponse(405, 'method_not_allowed', 'Method not allowed.'));
  } catch (error) {
    console.error(error);
    return withCors(req, errorResponse(500, 'internal_error', 'Developer API key request failed.'));
  }
});
