const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const THEME_CSS = fs.readFileSync(
  path.join(PROJECT_ROOT, 'theme/index.css'),
  'utf8',
);

test('viewport and nested surfaces share the immersive scrollbar palette', () => {
  assert.match(THEME_CSS, /--kai-scrollbar-size:\s*8px/);
  assert.match(THEME_CSS, /--kai-scrollbar-track:\s*transparent/);
  assert.match(
    THEME_CSS,
    /\*\s*,[\s\S]*?\.rp-scrollbar[\s\S]*?scrollbar-color:\s*var\(--kai-scrollbar-thumb\)\s+var\(--kai-scrollbar-track\)/,
  );
  assert.match(THEME_CSS, /scrollbar-width:\s*thin/);
  assert.match(
    THEME_CSS,
    /\*::\-webkit-scrollbar[\s\S]*?width:\s*var\(--kai-scrollbar-size\)[\s\S]*?height:\s*var\(--kai-scrollbar-size\)/,
  );
  assert.match(
    THEME_CSS,
    /\*::\-webkit-scrollbar-thumb[\s\S]*?min-width:\s*2\.5rem[\s\S]*?min-height:\s*2\.5rem[\s\S]*?border:\s*2px solid transparent[\s\S]*?background-clip:\s*padding-box/,
  );
});

test('scrollbars retain dark-mode contrast and accessible system fallbacks', () => {
  assert.match(
    THEME_CSS,
    /:is\(\.rp-dark,\s*\[data-theme='dark'\],\s*\.dark\)\s*\{[\s\S]*?--kai-scrollbar-thumb:/,
  );
  assert.match(
    THEME_CSS,
    /:is\(\.rp-dark,\s*\[data-theme='dark'\],\s*\.dark\)\s+:is\(\.rp-scrollbar,\s*\.rp-scrollbar--always\)[\s\S]*?scrollbar-color:\s*var\(--kai-scrollbar-thumb\)/,
  );
  assert.match(
    THEME_CSS,
    /@media\s*\(forced-colors:\s*active\)\s*\{[\s\S]*?scrollbar-color:\s*auto[\s\S]*?scrollbar-width:\s*auto/,
  );
  assert.match(
    THEME_CSS,
    /@media\s*\(forced-colors:\s*active\)\s*\{[\s\S]*?\*::\-webkit-scrollbar[\s\S]*?width:\s*auto[\s\S]*?background-color:\s*ButtonText/,
  );
  assert.match(
    THEME_CSS,
    /html\s*\{[^}]*scrollbar-gutter:\s*stable/s,
  );
});
