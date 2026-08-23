const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const PROJECT_ROOT = path.resolve(__dirname, '..');

function read(relativePath) {
  return fs.readFileSync(path.join(PROJECT_ROOT, relativePath), 'utf8');
}

test('site search delegates to Rspress native local search', () => {
  const config = read('rspress.config.mjs');
  const searchPage = read('src/rspress/SearchPage.jsx');

  assert.match(config, /themeConfig:\s*\{[\s\S]*?search:\s*true,/);
  assert.match(config, /search:\s*\{\s*mode:\s*['"]local['"]/);
  assert.match(searchPage, /\.rp-search-button/);
  assert.match(searchPage, /\.rp-search-panel__input/);
  assert.doesNotMatch(searchPage, /<input\b/);
});

test('native search keeps one accessible container-level focus indicator', () => {
  const themeCss = read('theme/index.css');

  assert.match(
    themeCss,
    /\.rp-search-panel__input:focus,[\s\S]*?\.rp-search-panel__input:focus-visible\s*\{[^}]*outline:\s*none\s*;[^}]*outline-offset:\s*0\s*;/,
  );
  assert.match(
    themeCss,
    /\.rp-search-panel__input-form:focus-within\s*\{[^}]*border-color:\s*var\(--rp-c-brand\)\s*;[^}]*box-shadow:/,
  );
  assert.match(
    themeCss,
    /@media\s*\(max-width:\s*639px\)[\s\S]*?\.rp-search-panel__cancel\s*\{[^}]*flex-shrink:\s*0\s*;[^}]*white-space:\s*nowrap\s*;/,
  );
});
