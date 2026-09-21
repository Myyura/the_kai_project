const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

const filename = path.resolve(__dirname, '../src/components/ShareAsImage/pagination.js');
const loaded = {exports: {}};
Function('module', 'exports', 'require', babel.transformSync(fs.readFileSync(filename, 'utf8'), {
  filename, plugins: [transformModules],
}).code)(loaded, loaded.exports, require);
const {paginateContent, ShareImageLimitError, MAX_SHARE_PAGES} = loaded.exports;

// Only layout measurements are simulated. The fixture preserves DOM ownership,
// shallow/deep cloning, attributes and node order to exercise page assembly.
function createDocument() {
  const document = {
    clones: [],
    createDocumentFragment: () => new Node(11),
    createRange: () => ({
      selectNodeContents(node) { this.node = node; },
      getBoundingClientRect() { return this.node.rect; },
    }),
  };
  class Node {
    constructor(type, tag = '', text = '', rect = {top: 0, bottom: 0}) {
      this.nodeType = type;
      this.tagName = tag.toUpperCase();
      this.data = text;
      this.rect = rect;
      this.childNodes = [];
      this.attributes = new Map();
      this.ownerDocument = document;
      this.classList = {contains: value => (this.getAttribute('class') || '').split(/\s+/).includes(value)};
    }
    appendChild(node) { this.childNodes.push(node); node.parentNode = this; return node; }
    get textContent() { return this.data + this.childNodes.map(node => node.textContent).join(''); }
    getAttribute(name) { return this.attributes.get(name) ?? null; }
    setAttribute(name, value) { this.attributes.set(name, String(value)); }
    hasAttribute(name) { return this.attributes.has(name); }
    getBoundingClientRect() { return this.rect; }
    cloneNode(deep) {
      document.clones.push({source: this, deep});
      const copy = new Node(this.nodeType, this.tagName, this.data, this.rect);
      copy.attributes = new Map(this.attributes);
      if (deep) for (const child of this.childNodes) copy.appendChild(child.cloneNode(true));
      return copy;
    }
  }
  document.element = (tag, top, bottom, children = [], attrs = {}) => {
    const node = new Node(1, tag, '', {top, bottom});
    for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
    for (const child of children) node.appendChild(typeof child === 'string' ? new Node(3, '', child, {top, bottom}) : child);
    return node;
  };
  document.text = (text, top, bottom) => new Node(3, '', text, {top, bottom});
  return document;
}

const noWait = async () => {};
const allNodes = node => [node, ...node.childNodes.flatMap(allNodes)];
const elements = (root, tag) => allNodes(root).filter(node => node.tagName === tag);

test('splits long nested articles while preserving wrappers, attributes and all text', async () => {
  const doc = createDocument();
  const paragraphs = Array.from({length: 6}, (_, index) => doc.element('p', index * 600, (index + 1) * 600, [`paragraph ${index};`]));
  const section = doc.element('section', 0, 3600, paragraphs, {'data-section': 'solution'});
  const wrapper = doc.element('div', 0, 3600, [section], {class: 'markdown'});
  const root = doc.element('article', 0, 3600, [wrapper]);
  const pages = await paginateContent(root, {yieldToMain: noWait});

  assert.equal(pages.length, 2);
  assert.deepEqual(pages.map(page => elements(page, 'P').length), [3, 3]);
  assert.equal(pages.map(page => page.textContent).join(''), root.textContent);
  for (const page of pages) {
    assert.equal(page.childNodes[0].getAttribute('class'), 'markdown');
    assert.equal(elements(page, 'SECTION')[0].getAttribute('data-section'), 'solution');
    assert.notStrictEqual(page.childNodes[0], wrapper);
  }
  assert.equal(section.childNodes.length, 6);
  assert.equal(elements(pages[0], 'SECTION')[0].getAttribute('data-share-continued-before'), null);
  assert.equal(elements(pages[0], 'SECTION')[0].getAttribute('data-share-continued-after'), 'true');
  assert.equal(elements(pages[1], 'SECTION')[0].getAttribute('data-share-continued-before'), 'true');
  assert.equal(elements(pages[1], 'SECTION')[0].getAttribute('data-share-continued-after'), null);
  assert.equal(section.getAttribute('data-share-continued-after'), null);
  assert.equal(doc.clones.some(({source, deep}) => deep && [root, wrapper, section].includes(source)), false);
});

test('node budgets include repeated ancestor wrappers on every page', async () => {
  const doc = createDocument();
  const root = doc.element('article', 0, 10, [doc.element('section', 0, 10,
    Array.from({length: 8}, (_, i) => doc.element('p', i, i + 1, [`${i};`])),
  )]);
  const pages = await paginateContent(root, {maxNodes: 7, yieldToMain: noWait});
  assert.equal(pages.length, 3);
  assert.equal(pages.map(page => page.textContent).join(''), root.textContent);
  assert.ok(pages.every(page => allNodes(page).length - 1 <= 7));
});

test('keeps formulas and tables intact and places a tall figure on its own page', async () => {
  const doc = createDocument();
  const formula = doc.element('span', 200, 300, [doc.element('span', 200, 300, ['x + y'])], {class: 'katex'});
  const table = doc.element('table', 350, 550, [doc.element('tr', 350, 550, [doc.element('td', 350, 550, ['cell'])])]);
  const image = doc.element('img', 600, 5000, [], {src: '/figure.png'});
  const root = doc.element('article', 0, 5200, [
    doc.element('p', 0, 100, ['before']), formula, table, image, doc.element('p', 5050, 5200, ['after']),
  ]);
  const pages = await paginateContent(root, {maxHeight: 600, yieldToMain: noWait});
  assert.equal(pages.length, 3);
  assert.equal(pages[0].textContent, 'beforex + ycell');
  assert.equal(elements(pages[0], 'TABLE').length, 1);
  assert.equal(pages[1].childNodes.length, 1);
  assert.equal(pages[1].childNodes[0].tagName, 'IMG');
  assert.equal(pages[2].textContent, 'after');
});

test('rejects an indivisible formula before cloning an oversized subtree', async () => {
  const doc = createDocument();
  const root = doc.element('article', 0, 10, [doc.element('span', 0, 10,
    Array.from({length: 20}, () => doc.element('span', 0, 10, ['x'])), {class: 'katex'},
  )]);
  await assert.rejects(paginateContent(root, {maxNodes: 20, maxAtomicNodes: 20, yieldToMain: noWait}), ShareImageLimitError);
  assert.equal(doc.clones.length, 0);
});

test('allows a bounded large formula on a separate page and clones it incrementally', async () => {
  const doc = createDocument();
  const formula = doc.element('span', 20, 30,
    Array.from({length: 700}, () => doc.element('span', 20, 30, ['x'])), {class: 'katex'},
  );
  const root = doc.element('article', 0, 50, [
    doc.element('p', 0, 10, ['before']), formula, doc.element('p', 40, 50, ['after']),
  ]);
  let yieldsWhileCloning = 0;
  const pages = await paginateContent(root, {yieldToMain: async () => {
    if (doc.clones.length) yieldsWhileCloning++;
  }});
  assert.equal(pages.length, 3);
  assert.equal(pages[0].textContent, 'before');
  assert.equal(pages[1].textContent, 'x'.repeat(700));
  assert.equal(pages[2].textContent, 'after');
  assert.ok(yieldsWhileCloning >= 7);
  assert.ok(doc.clones.every(({deep}) => !deep));
});

test('continues ordered list numbering including explicit values and reversed lists', async () => {
  for (const [attrs, expected] of [
    [{start: 4}, ['4', '9', '10']],
    [{reversed: ''}, ['3', '9', '8']],
    [{reversed: '', start: 0}, ['0', '9', '8']],
  ]) {
    const doc = createDocument();
    const items = Array.from({length: 3}, (_, index) => doc.element('li', index * 100, (index + 1) * 100, [`item ${index}`], index === 1 ? {value: 9} : {}));
    const root = doc.element('article', 0, 300, [doc.element('ol', 0, 300, items, attrs)]);
    const pages = await paginateContent(root, {maxHeight: 100, yieldToMain: noWait});
    assert.deepEqual(pages.map(page => elements(page, 'LI')[0].getAttribute('value')), expected);
    assert.equal(items[0].getAttribute('value'), null);
  }
});

test('preserves inline text and whitespace when a large paragraph needs to split', async () => {
  const doc = createDocument();
  const paragraph = doc.element('p', 0, 20, [
    doc.text('Before ', 0, 10), doc.element('strong', 0, 10, ['bold']),
    doc.text(' ', 0, 10), doc.element('em', 10, 20, ['after']), doc.text('.', 10, 20),
  ]);
  const root = doc.element('article', 0, 20, [paragraph]);
  const pages = await paginateContent(root, {maxNodes: 5, yieldToMain: noWait});
  assert.equal(pages.map(page => page.textContent).join(''), 'Before bold after.');
  assert.ok(pages.every(page => page.childNodes[0].tagName === 'P'));
});

test('yields during traversal and honors cancellation before making clones', async () => {
  const doc = createDocument();
  const root = doc.element('article', 0, 100, Array.from({length: 500}, (_, i) => doc.element('p', i, i + 1, ['text'])));
  const controller = new AbortController();
  let yields = 0;
  await assert.rejects(paginateContent(root, {
    signal: controller.signal,
    yieldToMain: async () => { if (++yields === 2) controller.abort(); },
  }), {name: 'AbortError'});
  assert.equal(yields, 2);
  assert.equal(doc.clones.length, 0);
  await assert.rejects(paginateContent(root, {signal: controller.signal}), {name: 'AbortError'});
});

test('caps page count when geometry requires too many images', async () => {
  const doc = createDocument();
  const root = doc.element('article', 0, 100000, Array.from({length: MAX_SHARE_PAGES + 1}, (_, i) => doc.element('p', i * 100, i * 100 + 50, ['x'])));
  await assert.rejects(paginateContent(root, {maxHeight: 50, yieldToMain: noWait}), ShareImageLimitError);
});

test('handles empty content and rejects invalid budgets', async () => {
  const doc = createDocument();
  const root = doc.element('article', 0, 0);
  assert.deepEqual(await paginateContent(root, {yieldToMain: noWait}), []);
  await assert.rejects(paginateContent(root, {maxNodes: 0}), RangeError);
  await assert.rejects(paginateContent(root, {maxHeight: Infinity}), RangeError);
});
