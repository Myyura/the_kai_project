const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const test = require('node:test');

const moduleUrl = pathToFileURL(path.resolve(
  __dirname,
  '..',
  'src',
  'theme',
  'SchoolShardReload',
  'requestSchoolShardNavigation.mjs',
)).href;
const componentPath = path.resolve(
  __dirname,
  '..',
  'src',
  'theme',
  'SchoolShardReload',
  'index.jsx',
);

function createWindow(href, storedAttempt = null, storageBlocked = false) {
  const replacements = [];
  const historyReplacements = [];
  const storage = new Map();
  if (storedAttempt) {
    storage.set('kai_school_shard_reload_v1', JSON.stringify(storedAttempt));
  }
  const browserWindow = {
    location: {
      href,
      replace(url) {
        replacements.push(url);
      },
    },
    history: {
      state: null,
      replaceState(_state, _title, url) {
        historyReplacements.push(String(url));
        browserWindow.location.href = String(url);
      },
    },
    sessionStorage: {
      getItem(key) {
        if (storageBlocked) throw new Error('storage blocked');
        return storage.get(key) || null;
      },
      setItem(key, value) {
        if (storageBlocked) throw new Error('storage blocked');
        storage.set(key, value);
      },
      removeItem(key) {
        if (storageBlocked) throw new Error('storage blocked');
        storage.delete(key);
      },
    },
  };
  return {
    historyReplacements,
    replacements,
    storage,
    window: browserWindow,
  };
}

test('cross-shard navigation performs one cache-busted document replacement', async () => {
  const {requestSchoolShardNavigation} = await import(moduleUrl);
  const runtime = createWindow(
    'https://runjp.com/docs/TITech/exam?lang=zh#answer',
  );

  const result = requestSchoolShardNavigation(runtime.window, 1722510000000);

  assert.equal(result.started, true);
  assert.equal(runtime.replacements.length, 1);
  const replacement = new URL(runtime.replacements[0]);
  assert.equal(replacement.pathname, '/docs/TITech/exam');
  assert.equal(replacement.searchParams.get('lang'), 'zh');
  assert.equal(
    replacement.searchParams.get('__kai_shard_reload'),
    '1722510000000',
  );
  assert.equal(replacement.hash, '#answer');
});

test('a returned wrong shard stops after the URL-marked attempt', async () => {
  const {requestSchoolShardNavigation} = await import(moduleUrl);
  const runtime = createWindow(
    'https://runjp.com/docs/TITech/exam?__kai_shard_reload=1722510000000',
  );

  const result = requestSchoolShardNavigation(runtime.window, 1722510001000);

  assert.equal(result.started, false);
  assert.deepEqual(runtime.replacements, []);
  assert.equal(
    new URL(result.retryUrl).searchParams.get('__kai_shard_reload'),
    '1722510001000',
  );
});

test('session state still prevents a loop when a redirect strips the marker', async () => {
  const {requestSchoolShardNavigation} = await import(moduleUrl);
  const runtime = createWindow(
    'https://runjp.com/docs/TITech/exam',
    {target: '/docs/TITech/exam', at: 1722510000000},
  );

  const result = requestSchoolShardNavigation(runtime.window, 1722510001000);

  assert.equal(result.started, false);
  assert.deepEqual(runtime.replacements, []);
});

test('the session cooldown expires and does not block a different target', async () => {
  const {
    SCHOOL_SHARD_RETRY_COOLDOWN_MS,
    requestSchoolShardNavigation,
  } = await import(moduleUrl);
  const expired = createWindow(
    'https://runjp.com/docs/TITech/exam',
    {
      target: '/docs/TITech/exam',
      at: 1722510000000 - SCHOOL_SHARD_RETRY_COOLDOWN_MS,
    },
  );

  const expiredResult = requestSchoolShardNavigation(
    expired.window,
    1722510000000,
  );

  assert.equal(expiredResult.started, true);
  assert.equal(expired.replacements.length, 1);

  const differentTarget = createWindow(
    'https://runjp.com/docs/TUAT/exam',
    {target: '/docs/TITech/exam', at: 1722509999000},
  );

  const differentResult = requestSchoolShardNavigation(
    differentTarget.window,
    1722510000000,
  );

  assert.equal(differentResult.started, true);
  assert.equal(differentTarget.replacements.length, 1);
});

test('the URL marker guards retries even when browser storage is blocked', async () => {
  const {requestSchoolShardNavigation} = await import(moduleUrl);
  const runtime = createWindow(
    'https://runjp.com/docs/TITech/exam?__kai_shard_reload=1',
    null,
    true,
  );

  const result = requestSchoolShardNavigation(runtime.window, 1722510001000);

  assert.equal(result.started, false);
  assert.deepEqual(runtime.replacements, []);
});

test('a successfully rendered destination clears the shard retry state', async () => {
  const {markSchoolShardNavigationSuccessful} = await import(moduleUrl);
  const runtime = createWindow(
    'https://runjp.com/docs/TITech/exam?lang=zh&__kai_shard_reload=1#answer',
    {target: '/docs/TITech/exam?lang=zh', at: 1722510000000},
  );

  assert.equal(markSchoolShardNavigationSuccessful(runtime.window), true);
  assert.equal(runtime.storage.has('kai_school_shard_reload_v1'), false);
  assert.equal(runtime.historyReplacements.length, 1);
  const cleanedUrl = new URL(runtime.window.location.href);
  assert.equal(cleanedUrl.searchParams.has('__kai_shard_reload'), false);
  assert.equal(cleanedUrl.searchParams.get('lang'), 'zh');
  assert.equal(cleanedUrl.hash, '#answer');
});

test('successful shard cleanup tolerates restricted browser storage', async () => {
  const {markSchoolShardNavigationSuccessful} = await import(moduleUrl);
  const runtime = createWindow(
    'https://runjp.com/docs/TITech/exam?__kai_shard_reload=1',
    null,
    true,
  );

  assert.equal(markSchoolShardNavigationSuccessful(runtime.window), true);
  assert.equal(runtime.historyReplacements.length, 1);
  assert.equal(
    new URL(runtime.window.location.href).searchParams.has('__kai_shard_reload'),
    false,
  );
});

test('a suppressed automatic retry renders a localized document navigation link', () => {
  const componentSource = fs.readFileSync(componentPath, 'utf8');

  assert.match(componentSource, /if \(!result\.started\) setRetryUrl\(result\.retryUrl\)/);
  assert.match(componentSource, /useUiText\('framework'\)/);
  assert.match(componentSource, /data-kai-school-shard-reload/);
  assert.match(componentSource, /<a href=\{retryUrl\}>\{t\.updateAction\}<\/a>/);
});
