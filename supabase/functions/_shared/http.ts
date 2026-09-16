const DEFAULT_ALLOWED_ORIGINS = [
  'https://runjp.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

type CorsPolicy = {
  allowedOriginsEnv?: string;
  methods: string;
  extraHeaders?: string[];
};

// Each function declares its own policy; response and origin handling stay shared.
export function createHttpHelpers({allowedOriginsEnv, methods, extraHeaders = []}: CorsPolicy) {
  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Origin': allowedOriginsEnv ? DEFAULT_ALLOWED_ORIGINS[0] : '*',
    ...(allowedOriginsEnv ? {'Vary': 'Origin'} : {}),
    'Access-Control-Allow-Headers': ['authorization', 'x-client-info', 'apikey', 'content-type', ...extraHeaders].join(', '),
    'Access-Control-Allow-Methods': methods,
  };

  function allowedOrigins() {
    return new Set(
      (Deno.env.get(allowedOriginsEnv!) || DEFAULT_ALLOWED_ORIGINS.join(','))
        .split(',').map((origin) => origin.trim()).filter(Boolean),
    );
  }

  function isAllowedOrigin(req: Request) {
    const origin = req.headers.get('origin');
    return !allowedOriginsEnv || !origin || allowedOrigins().has(origin);
  }

  function corsHeadersFor(req: Request) {
    const origin = req.headers.get('origin');
    return {
      ...corsHeaders,
      ...(allowedOriginsEnv && origin && isAllowedOrigin(req)
        ? {'Access-Control-Allow-Origin': origin}
        : {}),
    };
  }

  function jsonResponse(body: unknown, status = 200, headers: HeadersInit = corsHeaders) {
    const responseHeaders = new Headers(headers);
    responseHeaders.set('Content-Type', 'application/json; charset=utf-8');
    return new Response(JSON.stringify(body), {status, headers: responseHeaders});
  }

  function errorResponse(status: number, code: string, message: string, headers?: HeadersInit) {
    return jsonResponse({error: {code, message}}, status, headers);
  }

  function withCors(req: Request, response: Response) {
    const headers = new Headers(response.headers);
    for (const [key, value] of Object.entries(corsHeadersFor(req))) headers.set(key, value);
    return new Response(response.body, {status: response.status, statusText: response.statusText, headers});
  }

  return {corsHeaders, corsHeadersFor, isAllowedOrigin, jsonResponse, errorResponse, withCors};
}

export function getBearerToken(req: Request) {
  const header = req.headers.get('authorization') || '';
  return header.match(/^Bearer\s+(.+)$/i)?.[1]?.trim() || null;
}

export async function readJsonBody(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}
