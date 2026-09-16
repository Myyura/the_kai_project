const assert = require('node:assert/strict');
const test = require('node:test');
const nodeCrypto = require('node:crypto');
const createSourceLoader = require('./helpers/load-source.cjs');

const policies = [
  ['agent-context', null, 'GET, POST, OPTIONS', ', x-kai-agent-session'],
  ['agent-session', 'AGENT_ALLOWED_ORIGINS', 'GET, POST, OPTIONS', ''],
  ['developer-api-keys', 'DEVELOPER_API_ALLOWED_ORIGINS', 'GET, POST, DELETE, OPTIONS', ''],
  ['content-submissions', 'CONTENT_SUBMISSIONS_ALLOWED_ORIGINS', 'GET, POST, OPTIONS', ', x-kai-submission-callback-secret'],
  ['kai-api', null, 'GET, OPTIONS', ''],
];
const request = (origin) => new Request('https://api.example.test/', {headers: origin ? {Origin: origin} : {}});

for (const [name, envName, methods, extraHeaders] of policies) {
  test(`${name} retains its response shape, CORS methods, headers, and origin policy`, async () => {
    const env = new Map();
    const load = createSourceLoader({Deno: {env: {get: (key) => env.get(key)}}});
    const http = load(`supabase/functions/${name}/http.ts`);
    const check = async (req, allowedOrigin) => {
      const initial = http.jsonResponse({ok: '日本語'}, 201);
      const response = http.withCors ? http.withCors(req, initial) : initial;
      assert.equal(response.status, 201);
      assert.equal(response.headers.get('Access-Control-Allow-Origin'), allowedOrigin);
      assert.equal(response.headers.get('Vary'), envName ? 'Origin' : null);
      assert.equal(response.headers.get('Access-Control-Allow-Methods'), methods);
      assert.equal(response.headers.get('Access-Control-Allow-Headers'), 'authorization, x-client-info, apikey, content-type' + extraHeaders);
      assert.equal(response.headers.get('Content-Type'), 'application/json; charset=utf-8');
      assert.deepEqual(await response.json(), {ok: '日本語'});
    };
    await check(request(), envName ? 'https://runjp.com' : '*');
    await check(request('https://attacker.test'), envName ? 'https://runjp.com' : '*');
    const error = http.errorResponse(401, 'unauthorized', 'Login required.');
    assert.equal(error.status, 401);
    assert.deepEqual(await error.json(), {error: {code: 'unauthorized', message: 'Login required.'}});
    if (envName) {
      assert.equal(http.isAllowedOrigin(request()), true);
      assert.equal(http.isAllowedOrigin(request('null')), false);
      assert.equal(http.isAllowedOrigin(request('https://attacker.test')), false);
      for (const origin of ['https://runjp.com', 'http://localhost:3000', 'http://127.0.0.1:3000']) {
        assert.equal(http.isAllowedOrigin(request(origin)), true);
        await check(request(origin), origin);
      }
      env.set(envName, ' https://custom.test , https://second.test ');
      assert.equal(http.isAllowedOrigin(request('https://runjp.com')), false);
      assert.equal(http.isAllowedOrigin(request('https://custom.test')), true);
      await check(request('https://custom.test'), 'https://custom.test');
      const wrapped = http.withCors(request('https://custom.test'), new Response('body', {status: 202, statusText: 'Pending', headers: {'X-Request-ID': '123'}}));
      assert.equal(wrapped.statusText, 'Pending');
      assert.equal(wrapped.headers.get('X-Request-ID'), '123');
      assert.equal(await wrapped.text(), 'body');
    }
  });
}

test('shared request parsing preserves bearer handling and malformed JSON fallback', async () => {
  const {getBearerToken, readJsonBody} = createSourceLoader()('supabase/functions/_shared/http.ts');
  for (const [header, expected] of [['Bearer abc', 'abc'], ['bearer   abc  ', 'abc'], ['Basic abc', null], ['', null]]) {
    assert.equal(getBearerToken(new Request('https://api.test', {headers: {authorization: header}})), expected);
  }
  assert.deepEqual(await readJsonBody(new Request('https://api.test', {method: 'POST', body: '{invalid'})), {});
  assert.deepEqual(await readJsonBody(new Request('https://api.test', {method: 'POST', body: '{"ok":1}'})), {ok: 1});
});

test('shared hashing, signing, and random token generation preserve wire formats', async () => {
  const {sha256Hex, hmacSha256Hex, randomBase64Url} = createSourceLoader()('supabase/functions/_shared/crypto.ts');
  assert.equal(await sha256Hex('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  for (const value of ['', '日本語と中文 😀', 'a'.repeat(1000)]) {
    assert.equal(await sha256Hex(value), nodeCrypto.createHash('sha256').update(value).digest('hex'));
    assert.equal(await hmacSha256Hex('secret', value), nodeCrypto.createHmac('sha256', 'secret').update(value).digest('hex'));
  }
  for (const length of [16, 32, 64]) {
    const token = randomBase64Url(length);
    assert.match(token, /^[A-Za-z0-9_-]+$/);
    assert.equal(Buffer.from(token, 'base64url').length, length);
    assert.notEqual(token, randomBase64Url(length));
  }
});

test('shared ES256 JWT implementation signs, verifies, and rejects invalid credentials', async () => {
  const {signJwt, verifyJwt, parsePrivateJwk, parsePublicJwk, publicJwkFromPrivate} = createSourceLoader()('supabase/functions/_shared/jwt.ts');
  const key = await crypto.subtle.generateKey({name: 'ECDSA', namedCurve: 'P-256'}, true, ['sign', 'verify']);
  const privateJwk = parsePrivateJwk(JSON.stringify(await crypto.subtle.exportKey('jwk', key.privateKey)));
  const publicJwk = publicJwkFromPrivate(privateJwk);
  assert.equal(publicJwk.d, undefined);
  assert.deepEqual(parsePublicJwk(JSON.stringify(publicJwk)), JSON.parse(JSON.stringify(publicJwk)));
  const payload = {sub: 'test-user', iss: 'kai', aud: 'agent', exp: Math.floor(Date.now() / 1000) + 60};
  const token = await signJwt(payload, privateJwk);
  assert.deepEqual(await verifyJwt(token, publicJwk, {issuer: 'kai', audience: 'agent'}), payload);
  await assert.rejects(verifyJwt(token, publicJwk, {issuer: 'wrong'}), /issuer/);
  await assert.rejects(verifyJwt(token, publicJwk, {audience: 'wrong'}), /audience/);
  await assert.rejects(verifyJwt(await signJwt({...payload, exp: 1}, privateJwk), publicJwk), /expired/);
  const parts = token.split('.');
  parts[1] = Buffer.from(JSON.stringify({...payload, sub: 'another-user'})).toString('base64url');
  await assert.rejects(verifyJwt(parts.join('.'), publicJwk), /signature/);
  parts[0] = Buffer.from('{"alg":"none"}').toString('base64url');
  await assert.rejects(verifyJwt(parts.join('.'), publicJwk), /algorithm/);
  await assert.rejects(verifyJwt('invalid', publicJwk), /format/);
  assert.throws(() => parsePrivateJwk('{}'), /private d/);
  assert.throws(() => parsePublicJwk('{}'), /public x\/y/);
  assert.throws(() => parsePrivateJwk(''), /not configured/);
  assert.throws(() => parsePublicJwk('invalid'), /JSON Web Key/);
});
