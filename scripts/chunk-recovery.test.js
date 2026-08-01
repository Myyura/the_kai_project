const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const bootstrap = fs.readFileSync(
  path.resolve(__dirname, '..', 'src', 'clientModules', 'chunkRecoveryBootstrap.js'),
  'utf8',
);

function installRecovery({href = 'https://runjp.com/docs/intro', now = 1722510000000} = {}) {
  const listeners = new Map();
  const storage = new Map();
  const replacements = [];
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
    },
    addEventListener(type, listener) {
      const entries = listeners.get(type) || [];
      entries.push(listener);
      listeners.set(type, entries);
    },
  };

  vm.runInNewContext(bootstrap, {window, URL, Date: {now: () => now}});

  return {
    window,
    replacements,
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

test('does not loop when a cache-busting retry has just failed', () => {
  const runtime = installRecovery({
    href: 'https://runjp.com/?__kai_reload=1722509999000',
  });

  runtime.dispatch('unhandledrejection', {
    reason: new Error('Loading chunk 52339 failed.'),
  });

  assert.deepEqual(runtime.replacements, []);
});
