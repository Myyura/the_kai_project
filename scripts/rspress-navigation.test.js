const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const PROJECT_ROOT = path.resolve(__dirname, '..');

test('client navigation reserves a stable scrollbar gutter', () => {
  const themeCss = fs.readFileSync(
    path.join(PROJECT_ROOT, 'theme/index.css'),
    'utf8',
  );

  assert.match(
    themeCss,
    /html\s*\{[^}]*scrollbar-gutter:\s*stable\s*;/s,
  );
  assert.match(
    themeCss,
    /@supports\s+not\s*\(scrollbar-gutter:\s*stable\)\s*\{[\s\S]*?html\s*\{[^}]*overflow-y:\s*scroll\s*;/,
  );
});
