const DEFAULT_ALLOWED_ORIGINS = [
  'https://runjp.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const getAllowedOrigins = () => new Set(
  (Deno.env.get('CONTENT_SUBMISSIONS_ALLOWED_ORIGINS') || DEFAULT_ALLOWED_ORIGINS.join(','))
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
);

export function isAllowedOrigin(req: Request) {
  const origin = req.headers.get('origin');
  return !origin || getAllowedOrigins().has(origin);
}

export function corsHeadersFor(req: Request) {
  const origin = req.headers.get('origin');
  const allowedOrigins = getAllowedOrigins();
  const allowedOrigin = origin && allowedOrigins.has(origin)
    ? origin
    : DEFAULT_ALLOWED_ORIGINS[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Vary': 'Origin',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };
}

export function withCors(req: Request, response: Response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(corsHeadersFor(req))) {
    headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const corsHeaders = {
  'Access-Control-Allow-Origin': DEFAULT_ALLOWED_ORIGINS[0],
  'Vary': 'Origin',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

export function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

export function errorResponse(status: number, code: string, message: string) {
  return jsonResponse({ error: { code, message } }, status);
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
