export const defaultCorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-kai-agent-session',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

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
