const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const {pathToFileURL} = require('node:url');

const recoveryReadyModuleUrl = pathToFileURL(path.resolve(
  __dirname,
  '..',
  'src',
  'clientModules',
  'routeRecoveryReady.mjs',
)).href;

const bootstrap = fs.readFileSync(
  path.resolve(__dirname, '..', 'src', 'clientModules', 'chunkRecoveryBootstrap.js'),
  'utf8',
);

function installRecovery({
  href = 'https://runjp.com/docs/intro',
  now = 1722510000000,
  storage = new Map(),
} = {}) {
  const listeners = new Map();
  const replacements = [];
  const historyReplacements = [];
  const timers = new Map();
  let nextTimerId = 1;
  const window = {
    location: {
      href,
      replace(url) {
        replacements.push(url);
      },
    },
    sessionStorage: {
      getItem(key) {
        return storage.get(key) || null;
      },
      setItem(key, value) {
        storage.set(key, value);
      },
      removeItem(key) {
        storage.delete(key);
      },
    },
    history: {
      state: null,
      replaceState(_state, _title, url) {
        historyReplacements.push(String(url));
        window.location.href = String(url);
      },
    },
    addEventListener(type, listener) {
      const entries = listeners.get(type) || [];
      entries.push(listener);
      listeners.set(type, entries);
    },
    setTimeout(callback, delay) {
      const timerId = nextTimerId;
      nextTimerId += 1;
      timers.set(timerId, {callback, delay});
      return timerId;
    },
    clearTimeout(timerId) {
      timers.delete(timerId);
    },
  };

  vm.runInNewContext(bootstrap, {window, URL, Date: {now: () => now}});

  return {
    window,
    storage,
    replacements,
    historyReplacements,
    runTimers() {
      const pending = [...timers.values()];
      timers.clear();
      pending.forEach(({callback}) => callback());
    },
    dispatch(type, event) {
      for (const listener of listeners.get(type) || []) listener(event);
    },
  };
}

test('reloads with a cache-busting URL after a JavaScript chunk fails', () => {
  const runtime = installRecovery();

  runtime.dispatch('error', {
    target: {
      tagName: 'SCRIPT',
      src: 'https://runjp.com/assets/js/52339.364b11ee.js',
    },
  });

  assert.equal(runtime.replacements.length, 1);
  const replacement = new URL(runtime.replacements[0]);
  assert.equal(replacement.pathname, '/docs/intro');
  assert.equal(replacement.searchParams.get('__kai_reload'), '1722510000000');
});

test('ignores unrelated resource errors', () => {
  const runtime = installRecovery();

  runtime.dispatch('error', {
    target: {
      tagName: 'IMG',
      src: 'https://runjp.com/img/missing.png',
    },
  });

  assert.deepEqual(runtime.replacements, []);
});

test('upgrades the production site from HTTP to HTTPS before the app starts', () => {
  const runtime = installRecovery({href: 'http://runjp.com/?source=bookmark'});

  assert.equal(runtime.replacements.length, 1);
  const replacement = new URL(runtime.replacements[0]);
  assert.equal(replacement.protocol, 'https:');
  assert.equal(replacement.searchParams.get('source'), 'bookmark');
  assert.equal(replacement.searchParams.get('__kai_reload'), '1722510000000');
});

test('never repeats an automatic reload after the first retry fails', () => {
  const storage = new Map();
  const firstAttempt = installRecovery({storage});
  firstAttempt.dispatch('unhandledrejection', {
    reason: new Error('Loading chunk 52339 failed.'),
  });

  assert.equal(firstAttempt.replacements.length, 1);
  firstAttempt.window.__kaiChunkRecovery.markStartupSuccessful();
  assert.equal(storage.has('kai_chunk_reload_at_v1'), true);

  const failedRetry = installRecovery({
    href: firstAttempt.replacements[0],
    now: 1722510060000,
    storage,
  });

  failedRetry.dispatch('unhandledrejection', {
    reason: new Error('Loading chunk 52339 failed.'),
  });

  assert.deepEqual(failedRetry.replacements, []);
  assert.equal(failedRetry.window.__kaiChunkRecovery.reloadWithFreshAssets(true), true);
  assert.equal(failedRetry.replacements.length, 1);
});

test('a successful startup clears the retry guard for a future deployment', () => {
  const storage = new Map([['kai_chunk_reload_at_v1', '1722510000000']]);
  const runtime = installRecovery({
    href: 'https://runjp.com/docs/intro?lang=zh&__kai_reload=1722510000000#overview',
    now: 1722510060000,
    storage,
  });

  runtime.window.__kaiChunkRecovery.markStartupSuccessful();

  assert.equal(storage.has('kai_chunk_reload_at_v1'), false);
  assert.equal(runtime.historyReplacements.length, 1);
  const cleanedUrl = new URL(runtime.window.location.href);
  assert.equal(cleanedUrl.searchParams.has('__kai_reload'), false);
  assert.equal(cleanedUrl.searchParams.get('lang'), 'zh');
  assert.equal(cleanedUrl.hash, '#overview');

  runtime.dispatch('unhandledrejection', {
    reason: new Error('Loading chunk 88888 failed.'),
  });

  assert.equal(runtime.replacements.length, 1);
  assert.equal(
    new URL(runtime.replacements[0]).searchParams.get('__kai_reload'),
    '1722510060000',
  );
});

test('a late chunk failure during the stability window cannot start a reload loop', async () => {
  const {scheduleRouteRecoveryReady} = await import(recoveryReadyModuleUrl);
  const storage = new Map();
  const firstAttempt = installRecovery({storage});
  firstAttempt.dispatch('unhandledrejection', {
    reason: new Error('Loading chunk 52339 failed.'),
  });
  assert.equal(firstAttempt.replacements.length, 1);

  const retryAttempt = installRecovery({
    href: firstAttempt.replacements[0],
    now: 1722510060000,
    storage,
  });
  scheduleRouteRecoveryReady(
    retryAttempt.window,
    {querySelector() { return null; }},
    15000,
  );

  assert.equal(storage.has('kai_chunk_reload_at_v1'), true);
  retryAttempt.dispatch('unhandledrejection', {
    reason: new Error('Loading chunk 52339 failed.'),
  });
  assert.deepEqual(retryAttempt.replacements, []);

  retryAttempt.runTimers();
  assert.equal(storage.has('kai_chunk_reload_at_v1'), false);
  assert.equal(
    new URL(retryAttempt.window.location.href).searchParams.has('__kai_reload'),
    false,
  );
});
