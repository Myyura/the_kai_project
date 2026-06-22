const DEFAULT_ALLOWED_ORIGINS = [
  'https://runjp.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const defaultCorsHeaders = {
  'Access-Control-Allow-Origin': DEFAULT_ALLOWED_ORIGINS[0],
  'Vary': 'Origin',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

function allowedOriginsFromEnv(envName: string) {
  return new Set(
    (Deno.env.get(envName) || DEFAULT_ALLOWED_ORIGINS.join(','))
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  );
}

export function isAllowedOrigin(req: Request, envName = 'AGENT_ALLOWED_ORIGINS') {
  const origin = req.headers.get('origin');
  return !origin || allowedOriginsFromEnv(envName).has(origin);
}

function corsHeadersFor(req: Request, envName = 'AGENT_ALLOWED_ORIGINS') {
  const origin = req.headers.get('origin');
  const allowedOrigins = allowedOriginsFromEnv(envName);
  const allowedOrigin = origin && allowedOrigins.has(origin)
    ? origin
    : DEFAULT_ALLOWED_ORIGINS[0];

  return {
    ...defaultCorsHeaders,
    'Access-Control-Allow-Origin': allowedOrigin,
  };
}

export function jsonResponse(body: unknown, status = 200, headers: HeadersInit = defaultCorsHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

export function errorResponse(status: number, code: string, message: string, headers?: HeadersInit) {
  return jsonResponse({ error: { code, message } }, status, headers);
}

export function withCors(req: Request, response: Response, envName = 'AGENT_ALLOWED_ORIGINS') {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(corsHeadersFor(req, envName))) {
    headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function getBearerToken(req: Request) {
  const header = req.headers.get('authorization') || '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

export async function readJsonBody(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}
