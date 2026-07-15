const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');
const transformTypescript = require('@babel/plugin-transform-typescript');
const { applyLineChanges } = require('./submission-utils');

function loadModule(relativePath, typescript = false) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const plugins = typescript ? [transformTypescript, transformModules] : [transformModules];
  const transformed = babel.transformSync(source, { filename, plugins }).code;
  const loaded = { exports: {} };
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, require);
  return loaded.exports;
}

const serverDiff = loadModule('supabase/functions/content-submissions/diff.ts', true);
const clientDiff = loadModule('src/services/correctionDiff.js');

test('server line changes reconstruct replacements, insertions, and deletions', () => {
  const cases = [
    ['one\nwrong\nthree\n', 'one\ncorrect\nthree\n'],
    ['one\nthree\n', 'zero\none\ntwo\nthree\nfour\n'],
    ['one\ntwo\nthree\n', 'one\nthree'],
    ['same line', 'same line\n'],
  ];

  for (const [original, proposed] of cases) {
    const changes = serverDiff.buildLineChanges(original, proposed);
    assert.ok(changes.length > 0);
    assert.equal(applyLineChanges(original, changes), proposed);
  }
});

test('server unified diff and client preview report the same changed-line totals', () => {
  const original = 'alpha\nbeta\ngamma\n';
  const proposed = 'alpha\nBETA\ngamma\ndelta\n';
  const preview = clientDiff.buildDiffPreview(original, proposed);
  const unified = serverDiff.formatUnifiedDiff(original, proposed, 'docs/sample.md');

  assert.equal(preview.additions, 2);
  assert.equal(preview.deletions, 1);
  assert.equal(preview.hunks.length, 1);
  assert.match(unified, /^--- a\/docs\/sample\.md/m);
  assert.match(unified, /^-beta$/m);
  assert.match(unified, /^\+BETA$/m);
  assert.match(unified, /^\+delta$/m);
});

test('no-op edits produce no patch or preview hunks', () => {
  const markdown = 'unchanged\n';
  assert.deepEqual(serverDiff.buildLineChanges(markdown, markdown), []);
  assert.deepEqual(clientDiff.buildDiffPreview(markdown, markdown), {
    additions: 0,
    deletions: 0,
    hunks: [],
  });
  assert.equal(clientDiff.markdownHasChanges('a\r\n', 'a\n'), false);
});
