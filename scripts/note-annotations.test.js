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
  createAnnotation,
  deleteAnnotation,
  parseNoteDocument,
  serializeNoteDocument,
  stripAnnotationMetadata,
  updateAnnotation,
  updateFreeNoteContent,
} = loadModule('src/services/noteAnnotations.js');

test('free-form note and annotations round-trip through one content string', () => {
  const initial = {freeContent: '# 思路\n先看边界。', annotations: [], nextNumber: 1};
  const {document, annotation} = createAnnotation(initial, {
    exact: '中间值定理',
    line: 42,
    documentHash: 'hash-a',
    bodyMarkdown: '这里需要补充连续性。',
  }, 1000);
  const serialized = serializeNoteDocument(document);
  const parsed = parseNoteDocument(serialized);

  assert.equal(parsed.freeContent, initial.freeContent);
  assert.equal(parsed.nextNumber, 2);
  assert.deepEqual(parsed.annotations, [annotation]);
  assert.match(stripAnnotationMetadata(serialized), /这里需要补充连续性/);
});

test('free-form saves preserve managed annotations', () => {
  const {document} = createAnnotation(
    {freeContent: '旧内容', annotations: [], nextNumber: 1},
    {exact: '原文', line: 7, documentHash: 'h', bodyMarkdown: '批注'},
    1000
  );
  const updated = updateFreeNoteContent(serializeNoteDocument(document), '新内容');
  const parsed = parseNoteDocument(updated);

  assert.equal(parsed.freeContent, '新内容');
  assert.equal(parsed.annotations.length, 1);
  assert.equal(parsed.annotations[0].bodyMarkdown, '批注');
});

test('annotation rename, edit, delete, and numbering remain stable', () => {
  const first = createAnnotation(
    {freeContent: '', annotations: [], nextNumber: 1},
    {exact: 'A', line: 1, documentHash: 'h'},
    1000
  );
  const edited = updateAnnotation(first.document, first.annotation.id, {
    title: '关键步骤',
    bodyMarkdown: '更新后的内容',
  }, 2000);
  const without = deleteAnnotation(edited, first.annotation.id);
  const second = createAnnotation(without, {
    exact: 'B', line: 2, documentHash: 'h', defaultTitlePrefix: '注释',
  }, 3000);

  assert.equal(edited.annotations[0].title, '关键步骤');
  assert.equal(edited.annotations[0].updatedAt, 2000);
  assert.equal(second.annotation.title, '注释 2');
});

test('malformed managed marker is preserved as user text', () => {
  const source = '自由内容\n\n<!-- kai-annotations:start:v1:broken -->\n未闭合';
  const parsed = parseNoteDocument(source);
  assert.equal(parsed.freeContent, source);
  assert.deepEqual(parsed.annotations, []);
});

test('rehype plugin exposes Markdown source lines on annotatable blocks', () => {
  const plugin = loadModule('src/markdown/rehypeAnnotationSourceLines.js').default;
  const tree = {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'p',
        properties: {},
        position: {start: {line: 17, column: 1}},
        children: [{type: 'text', value: 'paragraph'}],
      },
      {
        type: 'element',
        tagName: 'span',
        properties: {},
        position: {start: {line: 18, column: 1}},
        children: [{type: 'text', value: 'inline'}],
      },
    ],
  };

  plugin()(tree);

  assert.equal(tree.children[0].properties['data-kai-annotatable'], 'true');
  assert.equal(tree.children[0].properties['data-kai-source-line'], '17');
  assert.equal(tree.children[1].properties['data-kai-source-line'], undefined);
});

test('rehype plugin keeps a line-bearing wrapper around display math', () => {
  const plugin = loadModule('src/markdown/rehypeAnnotationSourceLines.js').default;
  const tree = {
    type: 'root',
    children: [{
      type: 'element',
      tagName: 'pre',
      properties: {},
      position: {start: {line: 24, column: 1}},
      children: [{
        type: 'element',
        tagName: 'code',
        properties: {className: ['language-math', 'math-display']},
        children: [{type: 'text', value: 'x^2'}],
      }],
    }],
  };

  plugin()(tree);

  assert.equal(tree.children[0].tagName, 'div');
  assert.equal(tree.children[0].properties['data-kai-math-block'], 'true');
  assert.equal(tree.children[0].properties['data-kai-source-line'], '24');
  assert.equal(tree.children[0].children[0].tagName, 'pre');
});
