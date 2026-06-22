const textEncoder = new TextEncoder();

type JwtPayload = Record<string, unknown> & {
  iss?: string;
  aud?: string;
  exp?: number;
  iat?: number;
};

function base64UrlEncode(input: Uint8Array | string) {
  const bytes = typeof input === 'string' ? textEncoder.encode(input) : input;
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function parseJwk(raw: string, name: string) {
  if (!raw) throw new Error(`${name} is not configured.`);
  try {
    return JSON.parse(raw) as JsonWebKey;
  } catch {
    throw new Error(`${name} must be a JSON Web Key.`);
  }
}

export function parsePrivateJwk(raw: string) {
  const jwk = parseJwk(raw, 'AGENT_SESSION_PRIVATE_JWK');
  if (!jwk.d) throw new Error('AGENT_SESSION_PRIVATE_JWK must include a private d parameter.');
  return jwk;
}

async function importPrivateKey(jwk: JsonWebKey) {
  return await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'ECDSA', namedCurve: 'P-256' },
    false,
    ['sign'],
  );
}

export async function signJwt(payload: JwtPayload, privateJwk: JsonWebKey) {
  const header = {
    alg: 'ES256',
    typ: 'JWT',
    ...(privateJwk.kid ? { kid: privateJwk.kid } : {}),
  };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;
  const key = await importPrivateKey(privateJwk);
  const signature = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    key,
    textEncoder.encode(signingInput),
  );
  return `${signingInput}.${base64UrlEncode(new Uint8Array(signature))}`;
}
