const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const test = require('node:test');

const recoveryModuleUrl = pathToFileURL(path.resolve(
  __dirname,
  '..',
  'src',
  'clientModules',
  'freshAssetRecovery.mjs',
)).href;
const recoveryReadyModuleUrl = pathToFileURL(path.resolve(
  __dirname,
  '..',
  'src',
  'clientModules',
  'routeRecoveryReady.mjs',
)).href;

function createWindow(href, recovery) {
  const storage = new Map();
  const historyReplacements = [];
  const timers = new Map();
  let nextTimerId = 1;
  const browserWindow = {
    __kaiChunkRecovery: recovery,
    location: {href},
    history: {
      state: null,
      replaceState(_state, _title, url) {
        historyReplacements.push(String(url));
        browserWindow.location.href = String(url);
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
  return {
    browserWindow,
    historyReplacements,
    storage,
    timers,
    runTimers() {
      const pending = [...timers.values()];
      timers.clear();
      pending.forEach(({callback}) => callback());
    },
  };
}

test('fresh-asset UI delegates automatic and manual retries to the bootstrap', async () => {
  const {requestFreshAssetReload} = await import(recoveryModuleUrl);
  const calls = [];
  const recovery = {
    reloadWithFreshAssets(force) {
      calls.push(force);
      return force;
    },
  };

  assert.equal(requestFreshAssetReload({__kaiChunkRecovery: recovery}), false);
  assert.equal(requestFreshAssetReload({__kaiChunkRecovery: recovery}, true), true);
  assert.deepEqual(calls, [false, true]);
});

test('fresh-asset UI never starts an unguarded fallback state machine', async () => {
  const {
    markFreshAssetStartupSuccessful,
    requestFreshAssetReload,
  } = await import(recoveryModuleUrl);

  assert.equal(requestFreshAssetReload(undefined), false);
  assert.equal(requestFreshAssetReload({}), false);
  assert.equal(markFreshAssetStartupSuccessful(undefined), false);
  assert.equal(markFreshAssetStartupSuccessful({}), false);
});

test('successful route completion delegates fresh-asset cleanup', async () => {
  const {markFreshAssetStartupSuccessful} = await import(recoveryModuleUrl);
  const calls = [];
  const handled = markFreshAssetStartupSuccessful({
    __kaiChunkRecovery: {
      markStartupSuccessful() {
        calls.push('ready');
      },
    },
  });

  assert.equal(handled, true);
  assert.deepEqual(calls, ['ready']);
});

test('recovery pages do not clear either retry guard', async () => {
  const {markRouteRecoveryReady} = await import(recoveryReadyModuleUrl);

  for (const marker of ['error', 'school-shard']) {
    const calls = [];
    const runtime = createWindow(
      'https://runjp.com/docs/intro?__kai_shard_reload=1722510000000',
      {markStartupSuccessful() { calls.push('chunk-ready'); }},
    );
    runtime.storage.set('kai_school_shard_reload_v1', '{}');

    const ready = markRouteRecoveryReady(runtime.browserWindow, {
      querySelector(selector) {
        assert.match(selector, /data-kai-error-page/);
        assert.match(selector, /data-kai-school-shard-reload/);
        return {dataset: {marker}};
      },
    });

    assert.equal(ready, false);
    assert.deepEqual(calls, []);
    assert.equal(runtime.storage.has('kai_school_shard_reload_v1'), true);
    assert.equal(runtime.historyReplacements.length, 0);
  }
});

test('a rendered route clears chunk and school-shard recovery state together', async () => {
  const {markRouteRecoveryReady} = await import(recoveryReadyModuleUrl);
  const calls = [];
  const runtime = createWindow(
    'https://runjp.com/docs/intro?lang=zh&__kai_shard_reload=1722510000000#answer',
    {markStartupSuccessful() { calls.push('chunk-ready'); }},
  );
  runtime.storage.set('kai_school_shard_reload_v1', '{}');

  const ready = markRouteRecoveryReady(runtime.browserWindow, {
    querySelector() {
      return null;
    },
  });

  assert.equal(ready, true);
  assert.deepEqual(calls, ['chunk-ready']);
  assert.equal(runtime.storage.has('kai_school_shard_reload_v1'), false);
  assert.equal(runtime.historyReplacements.length, 1);
  const cleanedUrl = new URL(runtime.browserWindow.location.href);
  assert.equal(cleanedUrl.searchParams.has('__kai_shard_reload'), false);
  assert.equal(cleanedUrl.searchParams.get('lang'), 'zh');
  assert.equal(cleanedUrl.hash, '#answer');
});

test('route completion waits for a lazy-child stability window', async () => {
  const {
    ROUTE_RECOVERY_STABILITY_DELAY_MS,
    scheduleRouteRecoveryReady,
  } = await import(recoveryReadyModuleUrl);
  const calls = [];
  const runtime = createWindow(
    'https://runjp.com/docs/intro?__kai_shard_reload=1722510000000',
    {markStartupSuccessful() { calls.push('chunk-ready'); }},
  );
  runtime.storage.set('kai_school_shard_reload_v1', '{}');
  const browserDocument = {querySelector() { return null; }};

  assert.equal(scheduleRouteRecoveryReady(
    runtime.browserWindow,
    browserDocument,
  ), true);
  assert.deepEqual(calls, []);
  assert.equal(runtime.timers.size, 1);
  assert.equal(
    [...runtime.timers.values()][0].delay,
    ROUTE_RECOVERY_STABILITY_DELAY_MS,
  );

  runtime.runTimers();
  assert.deepEqual(calls, ['chunk-ready']);
  assert.equal(runtime.storage.has('kai_school_shard_reload_v1'), false);
});

test('navigation start cancels the previous route stability check', async () => {
  const {
    onRouteUpdate,
    scheduleRouteRecoveryReady,
  } = await import(recoveryReadyModuleUrl);
  const calls = [];
  const runtime = createWindow(
    'https://runjp.com/docs/intro?__kai_shard_reload=1722510000000',
    {markStartupSuccessful() { calls.push('chunk-ready'); }},
  );
  runtime.storage.set('kai_school_shard_reload_v1', '{}');
  const browserDocument = {querySelector() { return null; }};

  scheduleRouteRecoveryReady(runtime.browserWindow, browserDocument);
  const previousWindow = global.window;
  global.window = runtime.browserWindow;
  try {
    onRouteUpdate();
  } finally {
    if (previousWindow === undefined) delete global.window;
    else global.window = previousWindow;
  }
  runtime.runTimers();

  assert.deepEqual(calls, []);
  assert.equal(runtime.storage.has('kai_school_shard_reload_v1'), true);

  scheduleRouteRecoveryReady(runtime.browserWindow, browserDocument, 0);
  runtime.runTimers();
  assert.deepEqual(calls, ['chunk-ready']);
  assert.equal(runtime.storage.has('kai_school_shard_reload_v1'), false);
});

test('a successful ordinary-error retry starts a fresh stability check', async () => {
  const {scheduleRouteRecoveryReady} = await import(recoveryReadyModuleUrl);
  const calls = [];
  const runtime = createWindow(
    'https://runjp.com/docs/intro?__kai_reload=1722510000000',
    {markStartupSuccessful() { calls.push('chunk-ready'); }},
  );
  let showingError = true;
  const browserDocument = {
    querySelector() {
      return showingError ? {dataset: {marker: 'error'}} : null;
    },
  };

  scheduleRouteRecoveryReady(runtime.browserWindow, browserDocument, 0);
  runtime.runTimers();
  assert.deepEqual(calls, []);

  showingError = false;
  scheduleRouteRecoveryReady(runtime.browserWindow, browserDocument, 0);
  runtime.runTimers();
  assert.deepEqual(calls, ['chunk-ready']);

  const errorPageSource = fs.readFileSync(path.resolve(
    __dirname,
    '..',
    'src',
    'theme',
    'ErrorPageContent',
    'index.jsx',
  ), 'utf8');
  assert.match(
    errorPageSource,
    /tryAgain\(\);\s*scheduleRouteRecoveryReady\(/,
  );
  assert.match(
    errorPageSource,
    /onClick=\{tryAgainAfterRecoveryWindow\}/,
  );
});
