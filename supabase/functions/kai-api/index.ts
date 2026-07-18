import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.98.0';
import {
  corsHeaders,
  errorResponse,
  getBearerToken,
  jsonResponse,
} from './http.ts';
import { sha256Hex } from './crypto.ts';
import {
  DOCUMENT_CATALOG_SELECT,
  fetchPublishedDocument,
  type PublishedDocument,
} from '../_shared/published-content.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const API_LOG_SALT = Deno.env.get('API_LOG_SALT') || '';
const API_VERSION = 'v1';
const SITE_URL = Deno.env.get('SITE_URL') || 'https://runjp.com';
const CONTENT_NOTICE = 'Core public content remains openly accessible on The Kai Project. API access, bulk reuse, redistribution, commercial integration, and other uses beyond ordinary browsing and personal study are subject to the project content/API terms and any applicable third-party rights.';
const CATALOG_CACHE_TTL_MS = 10 * 60 * 1000;
const DEFAULT_PAGE_LIMIT = 100;
const MAX_PAGE_LIMIT = 500;
const CONTENT_PAGE_LIMIT = 50;

let supabaseClient: ReturnType<typeof createClient<any, 'public'>> | null = null;
let catalogCache: { expiresAt: number; body: Record<string, unknown>; resultCount: number } | null = null;

function getSupabase() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) return null;
  if (!supabaseClient) {
    supabaseClient = createClient<any, 'public'>(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseClient;
}

type ApiKey = {
  id: string;
  user_id: string;
  status: string;
  rate_limit_per_minute: number;
};

type ApiAccess = {
  status: string;
  expires_at: string | null;
};

type ApiKeyAuthResult =
  | { response: Response }
  | { apiKey: ApiKey };

type RateLimitResult =
  | { response: Response }
  | { allowed: true };

type RequestContext = {
  apiKey: ApiKey | null;
  path: string;
  queryParams: Record<string, string>;
  startedAt: number;
  resultCount: number | null;
};

function withEnvelope(payload: Record<string, unknown>) {
  return {
    apiVersion: API_VERSION,
    sourceUrl: SITE_URL,
    license: {
      code: 'AGPL-3.0',
      content: 'See The Kai Project content/API terms and third-party rights notices.',
    },
    contentNotice: CONTENT_NOTICE,
    ...payload,
  };
}

function getApiPath(req: Request) {
  const url = new URL(req.url);
  const marker = '/kai-api';
  const markerIndex = url.pathname.indexOf(marker);
  const path = markerIndex >= 0
    ? url.pathname.slice(markerIndex + marker.length)
    : url.pathname;
  return path || '/';
}

function getQueryParams(req: Request) {
  const params: Record<string, string> = {};
  const url = new URL(req.url);
  for (const [key, value] of url.searchParams.entries()) {
    params[key] = value;
  }
  return params;
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get('x-forwarded-for') || '';
  return forwardedFor.split(',')[0]?.trim()
    || req.headers.get('cf-connecting-ip')
    || req.headers.get('x-real-ip')
    || '';
}

async function hashIp(req: Request) {
  const ip = getClientIp(req);
  if (!ip || !API_LOG_SALT) return null;
  return await sha256Hex(`${API_LOG_SALT}:${ip}`);
}

async function logRequest(req: Request, ctx: RequestContext, statusCode: number) {
  const supabase = getSupabase();
  if (!supabase || !API_LOG_SALT) return;

  try {
    await supabase.from('api_request_logs').insert({
      api_key_id: ctx.apiKey?.id ?? null,
      user_id: ctx.apiKey?.user_id ?? null,
      method: req.method,
      path: ctx.path,
      query_params: ctx.queryParams,
      status_code: statusCode,
      result_count: ctx.resultCount,
      duration_ms: Date.now() - ctx.startedAt,
      ip_hash: await hashIp(req),
      user_agent: req.headers.get('user-agent'),
    });
  } catch (error) {
    console.error('Failed to write API request log', error);
  }
}

function scheduleLogRequest(req: Request, ctx: RequestContext, statusCode: number) {
  const task = logRequest(req, ctx, statusCode);
  const runtime = globalThis as typeof globalThis & {
    EdgeRuntime?: { waitUntil?: (promise: Promise<unknown>) => void };
  };

  if (runtime.EdgeRuntime?.waitUntil) {
    runtime.EdgeRuntime.waitUntil(task);
  }
}

async function authenticateApiKey(req: Request): Promise<ApiKeyAuthResult> {
  const supabase = getSupabase();
  if (!supabase) {
    return { response: errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.') };
  }

  const token = getBearerToken(req);
  if (!token) {
    return { response: errorResponse(401, 'missing_api_key', 'Use Authorization: Bearer kai_live_...') };
  }
  if (!token.startsWith('kai_live_')) {
    return { response: errorResponse(403, 'invalid_api_key', 'Invalid API key.') };
  }

  const keyHash = await sha256Hex(token);
  const { data, error } = await supabase
    .from('api_keys')
    .select('id,user_id,status,rate_limit_per_minute')
    .eq('key_hash', keyHash)
    .maybeSingle();

  if (error) throw error;
  if (!data || data.status !== 'active') {
    return { response: errorResponse(403, 'invalid_api_key', 'Invalid or revoked API key.') };
  }

  const { data: accessData, error: accessError } = await supabase
    .from('api_access_requests')
    .select('status,expires_at')
    .eq('user_id', data.user_id)
    .maybeSingle();

  if (accessError) throw accessError;
  const access = accessData as ApiAccess | null;
  const isExpired = access?.expires_at ? new Date(access.expires_at).getTime() < Date.now() : false;
  if (!access || access.status !== 'approved' || isExpired) {
    return { response: errorResponse(403, 'api_access_not_approved', 'API access is not approved or has been revoked.') };
  }

  return { apiKey: data as ApiKey };
}

async function enforceRateLimit(apiKey: ApiKey): Promise<RateLimitResult> {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const now = new Date();
  now.setSeconds(0, 0);

  const { data, error } = await supabase.rpc('register_api_request', {
    p_api_key_id: apiKey.id,
    p_window_start: now.toISOString(),
    p_limit: apiKey.rate_limit_per_minute || 60,
  });

  if (error) throw error;
  const result = Array.isArray(data) ? data[0] : data;
  if (!result?.allowed) {
    return {
      response: jsonResponse(withEnvelope({
        error: {
          code: 'rate_limit_exceeded',
          message: 'API rate limit exceeded.',
        },
        rateLimit: {
          limitPerMinute: apiKey.rate_limit_per_minute || 60,
          currentCount: result?.current_count ?? null,
        },
      }), 429),
    };
  }

  return { allowed: true };
}

function parsePositiveInt(value: string | null, fallback: number, max: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(Math.floor(parsed), max);
}

function publicExamRow(row: Record<string, unknown>, content: PublishedDocument | null = null) {
  const item: Record<string, unknown> = {
    documentUuid: row.document_uuid,
    docId: row.doc_id,
    type: row.type,
    title: row.title,
    sidebarLabel: row.sidebar_label,
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
    fileSlug: row.file_slug,
    tags: row.tags || [],
    schoolTags: row.school_tags || [],
    learningTags: row.learning_tags || [],
    subjectIds: row.subject_ids || [],
    subsubjectIds: row.subsubject_ids || [],
    topicIds: row.topic_ids || [],
    permalink: row.permalink,
    sourcePath: row.source_path,
    updatedAt: row.updated_at,
  };

  if (content) {
    item.contentHash = content.contentHash;
    item.sections = content.sections;
    item.fullMarkdown = content.fullMarkdown;
  }

  return item;
}

async function fetchCatalog(ctx: RequestContext) {
  if (catalogCache && catalogCache.expiresAt > Date.now()) {
    ctx.resultCount = catalogCache.resultCount;
    return jsonResponse(catalogCache.body);
  }

  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const rows: Record<string, unknown>[] = [];
  const pageSize = 1000;

  for (let from = 0; ; from += pageSize) {
    const { data, error } = await supabase
      .from('document_catalog')
      .select('doc_id,university_id,university_name,department_id,department_name,program_id,program_name,year')
      .eq('type', 'exam')
      .order('university_id', { ascending: true })
      .range(from, from + pageSize - 1);

    if (error) throw error;
    rows.push(...(data || []));
    if (!data || data.length < pageSize) break;
  }

  const universities = new Map<string, Record<string, unknown>>();

  for (const row of rows) {
    const universityId = String(row.university_id || '');
    const departmentId = String(row.department_id || '');
    const programId = row.program_id ? String(row.program_id) : '';
    const year = Number(row.year);
    if (!universityId || !departmentId || !year) continue;

    if (!universities.has(universityId)) {
      universities.set(universityId, {
        id: universityId,
        name: row.university_name,
        departments: new Map<string, Record<string, unknown>>(),
      });
    }

    const university = universities.get(universityId)!;
    const departments = university.departments as Map<string, Record<string, unknown>>;
    if (!departments.has(departmentId)) {
      departments.set(departmentId, {
        id: departmentId,
        name: row.department_name,
        programs: new Map<string, Record<string, unknown>>(),
        years: new Map<number, number>(),
      });
    }

    const department = departments.get(departmentId)!;
    const yearMap = department.years as Map<number, number>;
    yearMap.set(year, (yearMap.get(year) || 0) + 1);

    if (programId) {
      const programs = department.programs as Map<string, Record<string, unknown>>;
      if (!programs.has(programId)) {
        programs.set(programId, {
          id: programId,
          name: row.program_name,
          years: new Map<number, number>(),
        });
      }
      const program = programs.get(programId)!;
      const programYears = program.years as Map<number, number>;
      programYears.set(year, (programYears.get(year) || 0) + 1);
    }
  }

  const catalog = Array.from(universities.values()).map((university) => {
    const departments = university.departments as Map<string, Record<string, unknown>>;
    return {
      id: university.id,
      name: university.name,
      departments: Array.from(departments.values()).map((department) => {
        const programs = department.programs as Map<string, Record<string, unknown>>;
        const years = department.years as Map<number, number>;
        return {
          id: department.id,
          name: department.name,
          years: Array.from(years.entries())
            .map(([year, count]) => ({ year, count }))
            .sort((a, b) => a.year - b.year),
          programs: Array.from(programs.values()).map((program) => {
            const programYears = program.years as Map<number, number>;
            return {
              id: program.id,
              name: program.name,
              years: Array.from(programYears.entries())
                .map(([year, count]) => ({ year, count }))
                .sort((a, b) => a.year - b.year),
            };
          }),
        };
      }),
    };
  });

  ctx.resultCount = rows.length;
  const body = withEnvelope({ count: rows.length, universities: catalog });
  catalogCache = {
    expiresAt: Date.now() + CATALOG_CACHE_TTL_MS,
    body,
    resultCount: rows.length,
  };
  return jsonResponse(body);
}

async function fetchExams(req: Request, ctx: RequestContext) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const url = new URL(req.url);
  const includeContent = url.searchParams.get('include') === 'content';
  const limit = parsePositiveInt(
    url.searchParams.get('limit'),
    includeContent ? CONTENT_PAGE_LIMIT : DEFAULT_PAGE_LIMIT,
    includeContent ? CONTENT_PAGE_LIMIT : MAX_PAGE_LIMIT,
  );
  const offset = Math.max(0, Number(url.searchParams.get('offset') || 0) || 0);
  const type = url.searchParams.get('type') || 'exam';

  let query = supabase
    .from('document_catalog')
    .select(DOCUMENT_CATALOG_SELECT, { count: 'exact' })
    .eq('type', type)
    .order('doc_id', { ascending: true })
    .range(offset, offset + limit - 1);

  for (const [param, column] of [
    ['university', 'university_id'],
    ['department', 'department_id'],
    ['program', 'program_id'],
  ] as const) {
    const value = url.searchParams.get(param);
    if (value) query = query.eq(column, value);
  }

  const year = url.searchParams.get('year');
  if (year) {
    const parsedYear = Number(year);
    if (!Number.isInteger(parsedYear)) {
      return errorResponse(400, 'invalid_year', 'year must be a four digit number.');
    }
    query = query.eq('year', parsedYear);
  }

  for (const [param, column] of [
    ['tag', 'tags'],
    ['schoolTag', 'school_tags'],
    ['subject', 'subject_ids'],
    ['subsubject', 'subsubject_ids'],
    ['topic', 'topic_ids'],
  ] as const) {
    const value = url.searchParams.get(param);
    if (value) query = query.contains(column, [value]);
  }

  const { data, error, count } = await query;
  if (error) throw error;

  const rows = (data || []) as unknown as Record<string, unknown>[];
  const items: Record<string, unknown>[] = [];
  for (let start = 0; start < rows.length; start += 8) {
    const batch = rows.slice(start, start + 8);
    const content = includeContent
      ? await Promise.all(batch.map((row) => fetchPublishedDocument(row, SITE_URL)))
      : batch.map(() => null);
    items.push(...batch.map((row, index) => publicExamRow(row, content[index])));
  }
  ctx.resultCount = items.length;
  return jsonResponse(withEnvelope({
    count: items.length,
    total: count ?? items.length,
    offset,
    limit,
    items,
  }));
}

async function fetchExamDetail(docId: string, ctx: RequestContext) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const initial = await supabase
    .from('document_catalog')
    .select(DOCUMENT_CATALOG_SELECT)
    .eq('doc_id', docId)
    .maybeSingle();

  if (initial.error) throw initial.error;
  let data = initial.data as unknown as Record<string, unknown> | null;
  if (!data) {
    const {data: alias, error: aliasError} = await supabase
      .from('document_aliases')
      .select('document_uuid')
      .eq('doc_id', docId)
      .maybeSingle();
    if (aliasError) throw aliasError;
    if (alias?.document_uuid) {
      const current = await supabase
        .from('document_catalog')
        .select(DOCUMENT_CATALOG_SELECT)
        .eq('document_uuid', alias.document_uuid)
        .maybeSingle();
      if (current.error) throw current.error;
      data = current.data as unknown as Record<string, unknown> | null;
    }
  }
  if (!data) {
    ctx.resultCount = 0;
    return jsonResponse(withEnvelope({
      error: {
        code: 'not_found',
        message: 'Exam document not found.',
      },
    }), 404);
  }

  ctx.resultCount = 1;
  const content = await fetchPublishedDocument(data, SITE_URL);
  return jsonResponse(withEnvelope({ item: publicExamRow(data, content) }));
}

async function handleApiRequest(req: Request, ctx: RequestContext) {
  if (req.method !== 'GET') {
    return errorResponse(405, 'method_not_allowed', 'Only GET is supported by the content API.');
  }

  if (ctx.path === '/v1/catalog') return await fetchCatalog(ctx);
  if (ctx.path === '/v1/exams') return await fetchExams(req, ctx);

  const detailPrefix = '/v1/exams/';
  if (ctx.path.startsWith(detailPrefix)) {
    const docId = decodeURIComponent(ctx.path.slice(detailPrefix.length));
    return await fetchExamDetail(docId, ctx);
  }

  return jsonResponse(withEnvelope({
    error: {
      code: 'not_found',
      message: 'API route not found.',
    },
  }), 404);
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const ctx: RequestContext = {
    apiKey: null,
    path: getApiPath(req),
    queryParams: getQueryParams(req),
    startedAt: Date.now(),
    resultCount: null,
  };

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !API_LOG_SALT) {
    const response = errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.');
    scheduleLogRequest(req, ctx, response.status);
    return response;
  }

  try {
    const auth = await authenticateApiKey(req);
    if ('response' in auth) {
      scheduleLogRequest(req, ctx, auth.response.status);
      return auth.response;
    }
    const apiKey = auth.apiKey;
    ctx.apiKey = apiKey;

    const rate = await enforceRateLimit(apiKey);
    if ('response' in rate) {
      scheduleLogRequest(req, ctx, rate.response.status);
      return rate.response;
    }

    const response = await handleApiRequest(req, ctx);
    scheduleLogRequest(req, ctx, response.status);
    return response;
  } catch (error) {
    console.error(error);
    const response = errorResponse(500, 'internal_error', 'API request failed.');
    scheduleLogRequest(req, ctx, response.status);
    return response;
  }
});
