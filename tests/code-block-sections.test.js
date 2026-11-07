const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');

const filename = path.resolve(__dirname, '../src/theme/MDXComponents/Pre.tsx');
const {code} = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
  filename,
  babelrc: false,
  configFile: false,
  plugins: [
    ['@babel/plugin-transform-typescript', {isTSX: true}],
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-modules-commonjs',
  ],
});
const loaded = {exports: {}};
Function('module', 'exports', 'require', code)(loaded, loaded.exports, require);
const MDXPre = loaded.exports.default;

test('fenced code retains its study section outside its remounting content', () => {
  for (const section of ['problem', 'solution']) {
    const properties = {
      'data-kai-study-section': section,
      'data-kai-annotatable': 'true',
      'data-kai-source-line': '42',
    };
    const frames = [false, true].map(isBrowser => {
      const children = React.createElement('div', {key: String(isBrowser)},
        React.createElement('pre', null, '#include <stdio.h>'));
      const host = MDXPre({...properties, children});
      assert.equal(host.type, 'div');
      assert.equal(host.key, null, 'only the highlighted child may remount');
      assert.equal(host.props.children, children);
      assert.equal(host.props['data-kai-study-section'], section);
      // The stock Pre discarded annotation markers. Adding them here would
      // change existing document hashes and mark saved annotations as stale.
      assert.equal(host.props['data-kai-annotatable'], undefined);
      assert.equal(host.props['data-kai-source-line'], undefined);
      return renderToStaticMarkup(host);
    });
    assert.equal(frames[0], frames[1]);
    assert.match(frames[0], /data-kai-code-slot=""/);
    assert.match(frames[0], /<pre>#include &lt;stdio.h&gt;<\/pre>/);
  }
});

test('ordinary fences and asynchronous molecule content retain the original child without an extra pre', () => {
  const children = React.createElement('figure', {'data-smiles-state': 'loading'}, 'CCO');
  const html = renderToStaticMarkup(React.createElement(MDXPre, null, children));
  assert.equal(html, '<div data-kai-code-slot=""><figure data-smiles-state="loading">CCO</figure></div>');
});
