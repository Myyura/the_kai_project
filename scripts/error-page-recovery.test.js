const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const test = require('node:test');

const recoveryModuleUrl = pathToFileURL(path.resolve(
  __dirname,
  '..',
  'src',
  'theme',
  'ErrorPageContent',
  'requestFreshAssetReload.mjs',
)).href;

function createWindow(href, recovery, storedRetryAt = null) {
  const replacements = [];
  const storage = new Map();
  if (storedRetryAt !== null) storage.set('kai_chunk_reload_at_v1', String(storedRetryAt));
  return {
    replacements,
    storage,
    window: {
      __kaiChunkRecovery: recovery,
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
      },
    },
  };
}

test('does not bypass the bootstrap when a guarded reload is suppressed', async () => {
  const {requestFreshAssetReload} = await import(recoveryModuleUrl);
  const calls = [];
  const runtime = createWindow('https://runjp.com/?__kai_reload=1722509999000', {
    reloadWithFreshAssets(force) {
      calls.push(force);
      return false;
    },
  });

  requestFreshAssetReload(runtime.window, false, 1722510000000);

  assert.deepEqual(calls, [false]);
  assert.deepEqual(runtime.replacements, []);
});

test('fallback also honors the session guard when a redirect removed the URL marker', async () => {
  const {requestFreshAssetReload} = await import(recoveryModuleUrl);
  const runtime = createWindow('https://runjp.com/docs/intro', undefined, 1722509999000);

  requestFreshAssetReload(runtime.window, false, 1722510000000);

  assert.deepEqual(runtime.replacements, []);
});

test('fallback suppresses a second automatic reload during the cooldown', async () => {
  const {requestFreshAssetReload} = await import(recoveryModuleUrl);
  const runtime = createWindow('https://runjp.com/docs/intro?__kai_reload=1722509999000');

  requestFreshAssetReload(runtime.window, false, 1722510000000);

  assert.deepEqual(runtime.replacements, []);
});

test('fallback adds a cache-busting marker when the bootstrap is unavailable', async () => {
  const {requestFreshAssetReload} = await import(recoveryModuleUrl);
  const runtime = createWindow('http://runjp.com/docs/intro?lang=zh#overview');

  requestFreshAssetReload(runtime.window, false, 1722510000000);

  assert.equal(runtime.replacements.length, 1);
  const replacement = new URL(runtime.replacements[0]);
  assert.equal(replacement.protocol, 'https:');
  assert.equal(replacement.pathname, '/docs/intro');
  assert.equal(replacement.searchParams.get('lang'), 'zh');
  assert.equal(replacement.searchParams.get('__kai_reload'), '1722510000000');
  assert.equal(replacement.hash, '#overview');
  assert.equal(runtime.storage.get('kai_chunk_reload_at_v1'), '1722510000000');
});

test('manual retry delegates with force even while an automatic retry is guarded', async () => {
  const {requestFreshAssetReload} = await import(recoveryModuleUrl);
  const calls = [];
  const runtime = createWindow('https://runjp.com/?__kai_reload=1722509999000', {
    reloadWithFreshAssets(force) {
      calls.push(force);
      return false;
    },
  });

  requestFreshAssetReload(runtime.window, true, 1722510000000);

  assert.deepEqual(calls, [true]);
  assert.deepEqual(runtime.replacements, []);
});

test('manual retry bypasses fallback guards when the bootstrap is unavailable', async () => {
  const {requestFreshAssetReload} = await import(recoveryModuleUrl);
  const runtime = createWindow(
    'https://runjp.com/?__kai_reload=1722509999000',
    undefined,
    1722509999000,
  );

  requestFreshAssetReload(runtime.window, true, 1722510000000);

  assert.equal(runtime.replacements.length, 1);
  assert.equal(
    new URL(runtime.replacements[0]).searchParams.get('__kai_reload'),
    '1722510000000',
  );
});
