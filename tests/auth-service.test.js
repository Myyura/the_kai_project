const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

function loadAuthService(supabaseClient) {
  const filename = path.resolve(__dirname, '..', 'src/services/authService.js');
  const transformed = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename,
    plugins: [transformModules],
  }).code;
  const loaded = {exports: {}};
  const localRequire = (request) => (
    request === './supabaseClient' ? supabaseClient : require(request)
  );
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, localRequire);
  return loaded.exports;
}

function installBrowserGlobals() {
  const replacements = [];
  global.window = {
    location: {pathname: '/auth/callback'},
    history: {
      replaceState: (...args) => replacements.push(args),
    },
  };
  global.document = {title: 'Auth callback'};
  return replacements;
}

function callbackClient({session = null, initializeError = null}) {
  return {
    auth: {
      initialize: async () => ({error: initializeError}),
      getSession: async () => ({data: {session}, error: null}),
    },
  };
}

test.afterEach(() => {
  delete global.window;
  delete global.document;
});

test('auth callbacks use SDK-verified PKCE sessions without parsing URL parameters', async () => {
  const replacements = installBrowserGlobals();
  const calls = [];
  const session = {access_token: 'access', refresh_token: 'refresh', user: {id: 'user'}};
  const service = loadAuthService({
    createSupabaseAuthCallbackClient: (options) => {
      calls.push(options);
      return callbackClient({session});
    },
  });

  const result = await service.completeAuthCallbackFromUrl();

  assert.deepEqual(calls, [{flowType: 'pkce', persistSession: true}]);
  assert.equal(result.session, session);
  assert.deepEqual(replacements, [[{}, 'Auth callback', '/auth/callback']]);
});

test('email callbacks fall back to the SDK implicit-flow verifier', async () => {
  installBrowserGlobals();
  const calls = [];
  const session = {access_token: 'access', refresh_token: 'refresh', user: {id: 'user'}};
  const service = loadAuthService({
    createSupabaseAuthCallbackClient: (options) => {
      calls.push(options);
      return options.flowType === 'pkce'
        ? callbackClient({initializeError: new Error('not a PKCE callback')})
        : callbackClient({session});
    },
  });

  const result = await service.completeAuthCallbackFromUrl();

  assert.equal(result.session, session);
  assert.deepEqual(calls.map(({flowType}) => flowType), ['pkce', 'implicit']);
});

test('password recovery requires a fresh non-persistent callback session', async () => {
  installBrowserGlobals();
  window.location.pathname = '/reset-password';
  const session = {access_token: 'access', refresh_token: 'refresh', user: {id: 'user'}};
  const persisted = {session, user: session.user};
  const callbackOptions = [];
  const persistedCredentials = [];
  const service = loadAuthService({
    createSupabaseAuthCallbackClient: (options) => {
      callbackOptions.push(options);
      return callbackClient({session});
    },
    getSupabaseClient: () => ({
      auth: {
        setSession: async (credentials) => {
          persistedCredentials.push(credentials);
          return {data: persisted, error: null};
        },
      },
    }),
  });

  const result = await service.recoverPasswordSessionFromUrl();

  assert.deepEqual(callbackOptions, [{flowType: 'implicit', persistSession: false}]);
  assert.deepEqual(persistedCredentials, [{access_token: 'access', refresh_token: 'refresh'}]);
  assert.equal(result, persisted);
});

test('password recovery rejects an unrelated stored login session', async () => {
  installBrowserGlobals();
  let appClientRequested = false;
  const service = loadAuthService({
    createSupabaseAuthCallbackClient: () => callbackClient({session: null}),
    getSupabaseClient: () => {
      appClientRequested = true;
      return {auth: {}};
    },
  });

  await assert.rejects(
    service.recoverPasswordSessionFromUrl(),
    /认证链接无效或已过期/,
  );
  assert.equal(appClientRequested, false);
});
