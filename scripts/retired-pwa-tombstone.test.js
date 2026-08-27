const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const tombstone = fs.readFileSync(
  path.resolve(__dirname, '..', 'static', 'sw.js'),
  'utf8',
);

function installTombstone() {
  const listeners = new Map();
  const calls = {
    claimed: 0,
    deleted: [],
    skipWaiting: 0,
    unregistered: 0,
  };
  const context = {
    caches: {
      delete(name) {
        calls.deleted.push(name);
        return Promise.resolve(true);
      },
      keys() {
        return Promise.resolve([
          'workbox-precache-v2-https://runjp.com/',
          'assets-runtime',
          'search-index',
          'unrelated-application-cache',
        ]);
      },
    },
    self: {
      addEventListener(type, listener) {
        listeners.set(type, listener);
      },
      clients: {
        claim() {
          calls.claimed += 1;
          return Promise.resolve();
        },
      },
      registration: {
        unregister() {
          calls.unregistered += 1;
          return Promise.resolve(true);
        },
      },
      skipWaiting() {
        calls.skipWaiting += 1;
        return Promise.resolve();
      },
    },
  };

  vm.runInNewContext(tombstone, context);
  return {calls, listeners};
}

async function dispatchLifecycle(listener) {
  let lifetime;
  listener({
    waitUntil(promise) {
      lifetime = promise;
    },
  });
  await lifetime;
}

test('retired PWA worker activates immediately and unregisters itself', async () => {
  const runtime = installTombstone();

  await dispatchLifecycle(runtime.listeners.get('install'));
  await dispatchLifecycle(runtime.listeners.get('activate'));

  assert.equal(runtime.calls.skipWaiting, 1);
  assert.equal(runtime.calls.claimed, 1);
  assert.equal(runtime.calls.unregistered, 1);
});

test('retired PWA worker removes only Kai and Workbox caches', async () => {
  const runtime = installTombstone();

  await dispatchLifecycle(runtime.listeners.get('activate'));

  assert.deepEqual(runtime.calls.deleted, [
    'workbox-precache-v2-https://runjp.com/',
    'assets-runtime',
    'search-index',
  ]);
  assert.equal(runtime.listeners.has('fetch'), false);
});
