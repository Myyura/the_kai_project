const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

function loadModule(relativePath) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename,
    plugins: [transformModules],
  }).code;
  const loaded = {exports: {}};
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, require);
  return loaded.exports;
}

const {
  getContainedSelectionRange,
} = loadModule('src/services/annotationSelection.js');

test('collapsed or missing selections do not keep an annotation action open', () => {
  const container = {contains: () => true};

  assert.equal(getContainedSelectionRange(null, container), null);
  assert.equal(getContainedSelectionRange({
    isCollapsed: true,
    rangeCount: 1,
    getRangeAt: () => ({commonAncestorContainer: {}}),
  }, container), null);
  assert.equal(getContainedSelectionRange({
    isCollapsed: false,
    rangeCount: 0,
  }, container), null);
});

test('only a non-collapsed selection inside the article is retained', () => {
  const insideNode = {};
  const outsideNode = {};
  const insideRange = {commonAncestorContainer: insideNode};
  const insideSelection = {
    isCollapsed: false,
    rangeCount: 1,
    getRangeAt: () => insideRange,
  };
  const outsideSelection = {
    isCollapsed: false,
    rangeCount: 1,
    getRangeAt: () => ({commonAncestorContainer: outsideNode}),
  };
  const container = {contains: (node) => node === insideNode};

  assert.strictEqual(
    getContainedSelectionRange(insideSelection, container),
    insideRange,
  );
  assert.equal(getContainedSelectionRange(outsideSelection, container), null);
});
