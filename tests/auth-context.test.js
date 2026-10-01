const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');

const deferred = () => {
  let resolve;
  const promise = new Promise((done) => {resolve = done;});
  return {promise, resolve};
};

function fixture({stored = null, blocked = false, verify} = {}) {
  const window = new EventTarget();
  window.localStorage = {getItem() {if (blocked) throw Error('blocked'); return stored;}};
  const listeners = new Set();
  let currentUser = null;
  let imports = 0;
  const emit = (event, session) => listeners.forEach((listener) => listener(event, session));
  const service = {
    getVerifiedUser: verify || (async () => currentUser),
    onAuthStateChange(callback) {listeners.add(callback); return () => listeners.delete(callback);},
    async signInWithEmail() {
      currentUser = {id: 'signed-in'};
      const session = {user: currentUser};
      emit('SIGNED_IN', session);
      return {user: currentUser, session};
    },
    async signUpWithEmail() {return {user: {id: 'pending-confirmation'}, session: null};},
    async signOut() {currentUser = null; emit('SIGNED_OUT', null);},
  };
  const dependencies = {
    '@docusaurus/useDocusaurusContext': () => ({siteConfig: {}}),
    '../services/runtimeConfig': {AUTH_STORAGE_KEY: 'auth', initSiteConfig() {}, isSupabaseConfigured: () => true},
    get '../services/authService'() {imports += 1; return service;},
  };
  const runtime = createHookRuntime(dependencies, {window});
  const {AuthProvider} = runtime.load('src/context/AuthContext.js');
  runtime.mount(() => AuthProvider({children: null}).props.value);
  return {runtime, service, window, emit, listeners, imports: () => imports};
}

test('anonymous pages skip the SDK, and the first login activates ongoing auth updates', async () => {
  const {runtime, imports, listeners, emit} = fixture();
  await runtime.flush();
  assert.equal(imports(), 0);
  assert.equal(runtime.current.authReady, true);
  await runtime.current.loginWithEmail('test@example.com', 'password');
  await runtime.flush();
  assert.equal(runtime.current.isLoggedIn, true);
  assert.equal(listeners.size, 1);
  emit('TOKEN_REFRESHED', null);
  await runtime.flush();
  assert.equal(runtime.current.isLoggedIn, false);
  assert.match(runtime.current.error, /会话已过期/);
  runtime.unmount();
  assert.equal(listeners.size, 0);
});

test('registration without a session waits for email confirmation instead of reporting a login', async () => {
  const {runtime} = fixture();
  await runtime.flush();
  const result = await runtime.current.registerWithEmail('test@example.com', 'password');
  await runtime.flush();
  assert.equal(result.user.id, 'pending-confirmation');
  assert.equal(runtime.current.user, null);
  assert.equal(runtime.current.isLoggedIn, false);
  runtime.unmount();
});

test('a delayed stored-session check cannot restore a signed-out user', async () => {
  const check = deferred();
  const {runtime, emit} = fixture({stored: 'session', verify: () => check.promise});
  await runtime.flush();
  emit('SIGNED_OUT', null);
  check.resolve({id: 'old-user'});
  await runtime.flush();
  assert.equal(runtime.current.user, null);
  assert.equal(runtime.current.authReady, true);
  runtime.unmount();
});

test('a delayed initial check cannot overwrite an explicit login result', async () => {
  const check = deferred();
  const {runtime, service} = fixture({verify: () => check.promise});
  service.signInWithEmail = async () => ({session: {user: {id: 'new-user'}}});
  await runtime.flush();
  await runtime.current.loginWithEmail('test@example.com', 'password');
  check.resolve(null);
  await runtime.flush();
  assert.equal(runtime.current.user.id, 'new-user');
  runtime.unmount();
});

test('blocked storage keeps anonymous browsing usable and still allows explicit authentication', async () => {
  const {runtime, imports} = fixture({blocked: true});
  await runtime.flush();
  assert.equal(imports(), 0);
  await runtime.current.loginWithEmail('test@example.com', 'password');
  await runtime.flush();
  assert.equal(runtime.current.isLoggedIn, true);
  runtime.unmount();
});

test('cross-tab login initializes verification and the same persistent subscription', async () => {
  const {runtime, window, listeners} = fixture({verify: async () => ({id: 'other-tab'})});
  await runtime.flush();
  window.dispatchEvent(Object.assign(new Event('storage'), {key: 'auth', newValue: 'session'}));
  await runtime.flush();
  assert.equal(runtime.current.user.id, 'other-tab');
  assert.equal(listeners.size, 1);
  window.dispatchEvent(Object.assign(new Event('storage'), {key: 'auth', newValue: null}));
  await runtime.flush();
  assert.equal(runtime.current.user, null);
  runtime.unmount();
});
