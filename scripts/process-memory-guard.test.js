const assert = require('node:assert/strict');
const test = require('node:test');
const {
  HARD_RSS_LIMIT_BYTES,
  getProcessTreeRss,
  parseProcessTable,
} = require('./process-memory-guard');

test('the process-tree cutoff leaves headroom below 16 GiB', () => {
  assert.equal(HARD_RSS_LIMIT_BYTES, 14 * 1024 * 1024 * 1024);
  assert.ok(HARD_RSS_LIMIT_BYTES < 16 * 1024 * 1024 * 1024);
});

test('process-tree RSS includes descendants but not unrelated processes', () => {
  const rows = parseProcessTable(`
    10 1 100
    11 10 200
    12 11 300
    20 1 900
  `);
  assert.deepEqual(rows, [
    {pid: 10, ppid: 1, rssBytes: 100 * 1024},
    {pid: 11, ppid: 10, rssBytes: 200 * 1024},
    {pid: 12, ppid: 11, rssBytes: 300 * 1024},
    {pid: 20, ppid: 1, rssBytes: 900 * 1024},
  ]);
  assert.equal(getProcessTreeRss(rows, 10), 600 * 1024);
});
