const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const PROJECT_ROOT = path.resolve(__dirname, '..');

test('Rspress bundles KaTeX styles for both development and production', () => {
  const themeSource = fs.readFileSync(
    path.join(PROJECT_ROOT, 'theme/index.tsx'),
    'utf8',
  );
  const configSource = fs.readFileSync(
    path.join(PROJECT_ROOT, 'rspress.config.mjs'),
    'utf8',
  );
  const customCss = fs.readFileSync(
    path.join(PROJECT_ROOT, 'src/css/custom.css'),
    'utf8',
  );

  assert.match(themeSource, /import 'katex\/dist\/katex\.min\.css';/);
  assert.doesNotMatch(configSource, /cdn\.jsdelivr\.net\/npm\/katex/);
  assert.match(customCss, /\.katex-display\s*\{[^}]*overflow-x:\s*auto;/s);
});
