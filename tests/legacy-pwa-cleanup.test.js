const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const cleanupModule = fs.readFileSync(
  path.resolve(__dirname, '..', 'src', 'clientModules', 'removeLegacyPwa.js'),
  'utf8',
);

async function runCleanup({completed = false, storageBlocked = false, registrations = 0} = {}) {
  const calls = {
    deleted: [],
    markedCompleted: 0,
    unregistered: 0,
  };
  const workerRegistrations = Array.from({length: registrations}, () => ({
    unregister() {
      calls.unregistered += 1;
      return Promise.resolve(true);
    },
  }));
  const window = {
    caches: {},
    localStorage: {
      getItem() {
        if (storageBlocked) throw new Error('SecurityError');
        return completed ? '1' : null;
      },
      setItem() {
        if (storageBlocked) throw new Error('SecurityError');
        calls.markedCompleted += 1;
      },
    },
  };
  const context = {
    caches: {
      delete(name) {
        calls.deleted.push(name);
        return Promise.resolve(true);
      },
      keys() {
        return Promise.resolve(['assets-runtime', 'workbox-precache-v2-test', 'unrelated-cache']);
      },
    },
    navigator: {
      serviceWorker: {
        controller: null,
        getRegistrations() {
          return Promise.resolve(workerRegistrations);
        },
      },
    },
    window,
  };

  vm.runInNewContext(cleanupModule, context);
  await new Promise((resolve) => setImmediate(resolve));
  return calls;
}

test('legacy PWA cleanup still runs when iOS browser storage is blocked', async () => {
  const calls = await runCleanup({storageBlocked: true, registrations: 1});

  assert.equal(calls.unregistered, 1);
  assert.deepEqual(calls.deleted, ['assets-runtime', 'workbox-precache-v2-test']);
  assert.equal(calls.markedCompleted, 0);
});

test('a completion marker does not hide a newly discovered worker registration', async () => {
  const calls = await runCleanup({completed: true, registrations: 1});

  assert.equal(calls.unregistered, 1);
  assert.deepEqual(calls.deleted, ['assets-runtime', 'workbox-precache-v2-test']);
  assert.equal(calls.markedCompleted, 1);
});
