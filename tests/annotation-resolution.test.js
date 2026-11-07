const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');

function loadResolver(document) {
  const filename = path.resolve(__dirname, '../src/components/DocumentAnnotations/InlineController.jsx');
  const load = (filename, extra = '') => {
    const {code} = babel.transformSync(fs.readFileSync(filename, 'utf8') + extra, {
      filename,
      babelrc: false,
      configFile: false,
      plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-transform-modules-commonjs'],
    });
    const module = {exports: {}};
    const mockedRequire = (name) => {
      if (name === '@site/src/services/annotationTextMatch') {
        return load(path.resolve(__dirname, '../src/services/annotationTextMatch.js'));
      }
      // The controller is not mounted; exercise its DOM resolution helpers directly.
      return {};
    };
    Function('module', 'exports', 'require', 'document', 'NodeFilter', code)(
      module, module.exports, mockedRequire, document, {SHOW_TEXT: 4},
    );
    return module.exports;
  };
  return load(filename, '\nexport {resolveDocumentAnnotations, getRenderableSelectionText};');
}

function fixture() {
  let walks = 0;
  const document = {
    createTreeWalker(block) {
      walks += 1;
      let index = 0;
      return {nextNode: () => block.nodes[index++] || null};
    },
    createRange() {
      return {
        setStart(node, offset) { this.startContainer = node; this.startOffset = offset; },
        setEnd(node, offset) { this.endContainer = node; this.endOffset = offset; },
        getClientRects() { return this.startContainer.visible ? [{width: 20, height: 10}] : []; },
      };
    },
  };
  const block = (line, texts) => ({
    getAttribute: () => String(line),
    nodes: texts.map((text) => ({
      nodeValue: typeof text === 'string' ? text : text.value,
      visible: text.visible !== false,
      parentElement: {closest: () => Boolean(text.ignored)},
    })),
  });
  const container = (blocks) => ({querySelectorAll: () => blocks});
  return {document, block, container, walks: () => walks, ...loadResolver(document)};
}

test('annotation relocation reuses one DOM text scan per block and retains line/length priority', () => {
  const f = fixture();
  const distant = f.block(30, ['target']);
  const broad = f.block(12, ['prefix target suffix']);
  const narrow = f.block(12, ['tar', 'get']);
  const container = f.container([distant, broad, narrow]);
  const annotations = Array.from({length: 40}, (_, id) => ({id: String(id), exact: 'target', line: 10}));
  const {resolved, documentHash} = f.resolveDocumentAnnotations(container, annotations);
  assert.equal(f.walks(), 3);
  assert.equal(documentHash, 'v1-z0x97a', 'saved annotations retain the existing document hash format');
  for (const item of Object.values(resolved)) {
    assert.equal(item.block, narrow);
    assert.equal(item.currentLine, 12);
    assert.equal(item.moved, true);
    assert.equal(item.range.startContainer, narrow.nodes[0]);
    assert.equal(item.range.endContainer, narrow.nodes[1]);
    assert.equal(item.range.endOffset, 3);
  }
  assert.equal(f.resolveDocumentAnnotations(container, []).documentHash, documentHash);
  narrow.nodes[1].nodeValue = 'get updated';
  assert.notEqual(f.resolveDocumentAnnotations(container, []).documentHash, documentHash);
});

test('annotation resolution preserves hidden-text exclusion, visible occurrence selection and formula whitespace', () => {
  const f = fixture();
  const block = f.block(8, [
    {value: 'ignored formula', ignored: true},
    {value: 'target ', visible: false},
    'target',
    ' x ',
    ' + y',
  ]);
  const {resolved} = f.resolveDocumentAnnotations(f.container([block]), [
    {id: 'visible', exact: 'target', line: 8},
    {id: 'math', exact: 'x+y', line: 8},
    {id: 'hidden', exact: 'ignored formula', line: 8},
    {id: 'missing', exact: 'not here', line: 8},
  ]);
  assert.equal(resolved.visible.range.startContainer, block.nodes[2]);
  assert.equal(resolved.visible.moved, false);
  assert.equal(resolved.math.found, true);
  assert.equal(resolved.math.range.startContainer, block.nodes[3]);
  assert.equal(resolved.math.range.startOffset, 1);
  assert.equal(resolved.math.range.endContainer, block.nodes[4]);
  assert.equal(resolved.math.range.endOffset, 4);
  for (const id of ['hidden', 'missing']) {
    assert.deepEqual(resolved[id], {found: false, block: null, range: null, currentLine: null, moved: false});
  }
  assert.equal(f.walks(), 1);
});

test('selection capture reads current text and tolerates detached selection nodes', () => {
  const f = fixture();
  const block = f.block(1, ['first ', {value: 'hidden', ignored: true}, 'second']);
  const range = {
    startContainer: block.nodes[0], startOffset: 3,
    endContainer: block.nodes[2], endOffset: 3,
    intersectsNode: () => true,
  };
  assert.equal(f.getRenderableSelectionText(block, range), 'st sec');
  range.intersectsNode = (node) => {
    if (node === block.nodes[0]) throw new Error('Detached node');
    return true;
  };
  assert.equal(f.getRenderableSelectionText(block, range), 'sec');
});
