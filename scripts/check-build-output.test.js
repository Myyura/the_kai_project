const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const CHECK_BUILD_OUTPUT = path.resolve(__dirname, 'check-build-output.js');

test('build verification reports artifact sizes without enforcing size budgets', () => {
  const source = fs.readFileSync(CHECK_BUILD_OUTPUT, 'utf8');

  assert.doesNotMatch(source, /\b[A-Z][A-Z_]*_BUDGET\b/);
  assert.doesNotMatch(source, /Build budgets passed/);
  assert.match(source, /Build output verified:/);
});
