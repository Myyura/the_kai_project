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

const plugin = loadModule('src/markdown/rehypeStudySections.js').default;

const text = (value) => ({type: 'text', value});
const element = (tagName, value) => ({
  type: 'element',
  tagName,
  properties: {},
  children: [text(value)],
});
const heading = (value, level = 2) => ({
  type: 'element',
  tagName: `h${level}`,
  properties: {},
  children: [{
    type: 'element',
    tagName: 'strong',
    properties: {},
    children: [text(value)],
  }],
});

test('study sections preserve author content and group qualified Description with Kai', () => {
  const title = heading('Document title', 1);
  const authorHeading = heading('Author');
  const author = element('p', 'author name');
  const description = heading('Description (English)');
  const question = element('p', 'question');
  const kai = heading('Kai');
  const answer = element('p', 'answer');
  const tree = {
    type: 'root',
    children: [title, authorHeading, author, description, question, kai, answer],
  };

  plugin()(tree, {path: '/docs/example/2024/problem.md'});

  assert.deepEqual(
    tree.children,
    [title, authorHeading, author, description, question, kai, answer],
  );
  assert.equal(title.properties['data-kai-study-section'], undefined);
  assert.equal(author.properties['data-kai-study-section'], undefined);
  assert.equal(description.properties['data-kai-study-section'], 'problem');
  assert.equal(question.properties['data-kai-study-section'], 'problem');
  assert.equal(kai.properties['data-kai-study-section'], 'solution');
  assert.equal(answer.properties['data-kai-study-section'], 'solution');
});

test('study sections keep asynchronous diagram nodes at their source position', () => {
  const description = heading('Description');
  const question = element('p', 'question');
  const kai = heading('Kai');
  const step = heading('[1]', 3);
  const before = element('p', 'before diagram');
  const mermaid = {type: 'mdxJsxFlowElement', name: 'Mermaid', attributes: [], children: []};
  const after = element('p', 'after diagram');
  const tree = {
    type: 'root',
    children: [description, question, kai, step, before, mermaid, after],
  };

  plugin()(tree, {path: '/docs/example/2024/problem.mdx'});

  assert.deepEqual(
    tree.children,
    [description, question, kai, step, before, mermaid, after],
  );
  assert.equal(before.properties['data-kai-study-section'], 'solution');
  assert.deepEqual(mermaid.attributes, [{
    type: 'mdxJsxAttribute',
    name: 'data-kai-study-section',
    value: 'solution',
  }]);
  assert.equal(after.properties['data-kai-study-section'], 'solution');
});

test('unstructured exam content stays flat so the client can add empty panels', () => {
  const title = heading('Document title', 1);
  const paragraph = element('p', 'unstructured content');
  const tree = {type: 'root', children: [title, paragraph]};

  plugin()(tree, {path: '/docs/example/2024/problem.md'});

  assert.deepEqual(tree.children, [title, paragraph]);
  assert.equal(title.properties['data-kai-study-section'], undefined);
  assert.equal(paragraph.properties['data-kai-study-section'], undefined);
});

test('Knowledge starts the solution panel when Kai is absent and transform is idempotent', () => {
  const description = heading('Description');
  const question = element('p', 'question');
  const knowledge = heading('Knowledge');
  const reference = element('p', 'reference');
  const tree = {
    type: 'root',
    children: [description, question, knowledge, reference],
  };

  const transform = plugin();
  transform(tree, {path: '/docs/example/2024/problem.md'});
  const firstAttributeCount = tree.children.reduce(
    (count, node) => count + (
      node.properties?.['data-kai-study-section'] ? 1 : 0
    ),
    0,
  );
  transform(tree, {path: '/docs/example/2024/problem.md'});

  assert.equal(firstAttributeCount, 4);
  assert.equal(description.properties['data-kai-study-section'], 'problem');
  assert.equal(question.properties['data-kai-study-section'], 'problem');
  assert.equal(knowledge.properties['data-kai-study-section'], 'solution');
  assert.equal(reference.properties['data-kai-study-section'], 'solution');
});

test('ordinary documents without study headings are left unchanged', () => {
  const children = [heading('Introduction'), element('p', 'body')];
  const tree = {type: 'root', children};

  plugin()(tree, {path: '/docs/intro.md'});

  assert.strictEqual(tree.children, children);
});
