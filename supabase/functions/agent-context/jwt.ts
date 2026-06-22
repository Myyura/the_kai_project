const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

type JwtPayload = Record<string, unknown> & {
  iss?: string;
  aud?: string;
  exp?: number;
  iat?: number;
};

type VerifyOptions = {
  issuer?: string;
  audience?: string;
};

function base64UrlDecode(input: string) {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - normalized.length % 4) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
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

export function parsePublicJwk(raw: string, name = 'AGENT_SERVICE_PUBLIC_JWK') {
  const jwk = parseJwk(raw, name);
  if (!jwk.x || !jwk.y) throw new Error(`${name} must include public x/y parameters.`);
  return jwk;
}

export function publicJwkFromPrivate(jwk: JsonWebKey) {
  const { kty, crv, x, y, alg, kid, ext } = jwk;
  return { kty, crv, x, y, alg, kid, ext } as JsonWebKey;
}

async function importPublicKey(jwk: JsonWebKey) {
  return await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'ECDSA', namedCurve: 'P-256' },
    false,
    ['verify'],
  );
}

export async function verifyJwt(token: string, publicJwk: JsonWebKey, options: VerifyOptions = {}) {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('Invalid JWT format.');

  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  const header = JSON.parse(textDecoder.decode(base64UrlDecode(encodedHeader))) as Record<string, unknown>;
  if (header.alg !== 'ES256') throw new Error('Unsupported JWT algorithm.');

  const key = await importPublicKey(publicJwk);
  const valid = await crypto.subtle.verify(
    { name: 'ECDSA', hash: 'SHA-256' },
    key,
    base64UrlDecode(encodedSignature),
    textEncoder.encode(`${encodedHeader}.${encodedPayload}`),
  );
  if (!valid) throw new Error('Invalid JWT signature.');

  const payload = JSON.parse(textDecoder.decode(base64UrlDecode(encodedPayload))) as JwtPayload;
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp <= now) throw new Error('JWT has expired.');
  if (options.issuer && payload.iss !== options.issuer) throw new Error('Invalid JWT issuer.');
  if (options.audience && payload.aud !== options.audience) throw new Error('Invalid JWT audience.');
  return payload;
}
