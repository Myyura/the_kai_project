import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.48.1';
import {
  corsHeaders,
  errorResponse,
  getBearerToken,
  jsonResponse,
  readJsonBody,
} from './http.ts';
import { randomBase64Url, sha256Hex } from './crypto.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const MAX_ACTIVE_KEYS = 3;

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
  request_count: number;
  last_used_at: string | null;
  revoked_at: string | null;
  created_at: string;
};

function publicKeyRow(row: ApiKeyRow) {
  return {
    id: row.id,
    name: row.name,
    keyPrefix: row.key_prefix,
    status: row.status,
    rateLimitPerMinute: row.rate_limit_per_minute,
    requestCount: Number(row.request_count || 0),
    lastUsedAt: row.last_used_at,
    revokedAt: row.revoked_at,
    createdAt: row.created_at,
  };
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

async function listKeys(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const { data, error } = await supabase
    .from('api_keys')
    .select('id,name,key_prefix,status,rate_limit_per_minute,request_count,last_used_at,revoked_at,created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return jsonResponse({ keys: (data || []).map(publicKeyRow) });
}

async function createKey(userId: string, req: Request) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const body = await readJsonBody(req);
  const rawName = typeof body?.name === 'string' ? body.name.trim() : '';
  const name = rawName.slice(0, 80) || 'Default API key';

  const { count, error: countError } = await supabase
    .from('api_keys')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('status', 'active');

  if (countError) throw countError;
  if ((count || 0) >= MAX_ACTIVE_KEYS) {
    return errorResponse(409, 'active_key_limit', `Each account can have up to ${MAX_ACTIVE_KEYS} active API keys.`);
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
      rate_limit_per_minute: 60,
    })
    .select('id,name,key_prefix,status,rate_limit_per_minute,request_count,last_used_at,revoked_at,created_at')
    .single();

  if (error) throw error;

  return jsonResponse({
    key: plainKey,
    item: publicKeyRow(data),
  }, 201);
}

async function revokeKey(userId: string, req: Request) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const body = await readJsonBody(req);
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
    .select('id,name,key_prefix,status,rate_limit_per_minute,request_count,last_used_at,revoked_at,created_at')
    .maybeSingle();

  if (error) throw error;
  if (!data) {
    return errorResponse(404, 'key_not_found', 'API key not found.');
  }

  return jsonResponse({ item: publicKeyRow(data) });
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.');
  }

  const auth = await requireUser(req);
  if ('response' in auth) return auth.response;

  try {
    if (req.method === 'GET') return await listKeys(auth.user.id);
    if (req.method === 'POST') return await createKey(auth.user.id, req);
    if (req.method === 'DELETE') return await revokeKey(auth.user.id, req);
    return errorResponse(405, 'method_not_allowed', 'Method not allowed.');
  } catch (error) {
    console.error(error);
    return errorResponse(500, 'internal_error', 'Developer API key request failed.');
  }
});
