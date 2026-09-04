const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const katex = require('katex');
require('katex/contrib/mhchem');

function loadModule(relativePath) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename,
    plugins: [transformModules],
  }).code;
  const loaded = {exports: {}};
  const localRequire = (request) => {
    if (request.startsWith('.')) {
      const target = path.resolve(path.dirname(filename), request);
      const relativeTarget = path.relative(path.resolve(__dirname, '..'), target);
      return loadModule(relativeTarget);
    }
    return require(request);
  };
  Function('module', 'exports', 'require', transformed)(
    loaded,
    loaded.exports,
    localRequire,
  );
  return loaded.exports;
}

const renderer = loadModule('src/components/KaiMath/render.js');
const KaiMath = loadModule('src/components/KaiMath/index.js').default;
const runtimeKatex = loadModule('src/markdown/rehypeRuntimeKatex.js').default;
const annotationSourceLines = loadModule(
  'src/markdown/rehypeAnnotationSourceLines.js',
).default;

const text = (value) => ({type: 'text', value});
const element = (tagName, properties, children, position) => ({
  type: 'element',
  tagName,
  properties,
  children,
  position,
});
const getAttribute = (node, name) => (
  node.attributes.find((attribute) => attribute.name === name)
);

const katexOptions = (displayMode) => ({
  output: 'htmlAndMathml',
  strict: false,
  throwOnError: true,
  trust: false,
  displayMode,
});

test('KaiMath SSR is byte-identical to KaTeX for inline, display, CJK, and mhchem', () => {
  const examples = [
    {source: String.raw`x^2 + \sqrt{y}`, displayMode: false},
    {source: String.raw`\int_0^1 x\,dx`, displayMode: true},
    {source: String.raw`\text{概率} = \frac{1}{2}`, displayMode: false},
    {source: String.raw`\ce{2H2 + O2 -> 2H2O}`, displayMode: false},
  ];

  examples.forEach(({source, displayMode}) => {
    const expected = katex.renderToString(source, katexOptions(displayMode));
    const actual = renderToStaticMarkup(React.createElement(KaiMath, {
      source,
      displayMode,
    }));

    assert.equal(renderer.renderKaiMathToString(source, displayMode), expected);
    assert.equal(actual, expected);
  });
});

test('KaiMath matches KaTeX non-throwing recovery output for malformed source', () => {
  const source = 'x$$';
  let primaryError;
  try {
    katex.renderToString(source, katexOptions(true));
  } catch (error) {
    primaryError = error;
  }
  const expected = katex.renderToString(source, {
    ...katexOptions(true),
    strict: 'ignore',
    throwOnError: false,
  });
  const actual = renderToStaticMarkup(React.createElement(KaiMath, {
    source,
    displayMode: true,
  }));

  assert(primaryError instanceof Error);
  assert.match(expected, /^<span class="katex-error"/);
  assert.equal(actual, expected);
});

test('runtime plugin creates compact inline KaiMath nodes without stale code properties', () => {
  const math = element(
    'code',
    {
      className: ['language-math', 'math-inline', 'custom-math'],
      'data-kai-source-line': '8',
    },
    [text(String.raw`a_1 + \ce{H2O}`)],
    {start: {line: 8, column: 7}, end: {line: 8, column: 24}},
  );
  const paragraph = element('p', {}, [text('before '), math, text(' after')]);
  const tree = {type: 'root', children: [paragraph]};

  runtimeKatex()(tree);

  const transformed = paragraph.children[1];
  assert.equal(transformed.type, 'mdxJsxTextElement');
  assert.equal(transformed.name, 'KaiMath');
  assert.equal(getAttribute(transformed, 'source').value, String.raw`a_1 + \ce{H2O}`);
  assert.equal(getAttribute(transformed, 'displayMode'), undefined);
  assert.equal(getAttribute(transformed, 'className'), undefined);
  assert.equal(getAttribute(transformed, 'data-kai-source-line'), undefined);
  assert.deepEqual(transformed.position, math.position);
  assert.deepEqual(paragraph.children.map((node) => node.type), [
    'text',
    'mdxJsxTextElement',
    'text',
  ]);
});

test('runtime plugin emits resolvable compact component calls through the MDX compiler', async () => {
  const [{compile}, {default: remarkMath}] = await Promise.all([
    import('@mdx-js/mdx'),
    import('remark-math'),
  ]);
  const compiled = String(await compile(
    'before $x^2$ after\n\n$$\n\\ce{H2O}\n$$',
    {
      remarkPlugins: [remarkMath],
      rehypePlugins: [runtimeKatex],
    },
  ));

  assert.match(compiled, /\{KaiMath\} = _components/);
  assert.match(compiled, /source: "x\^2"/);
  assert.match(compiled, /source: "\\\\ce\{H2O\}"/);
  assert.match(compiled, /displayMode: true/);
  assert.doesNotMatch(compiled, /katex-mathml|katex-html/);
});

test('runtime plugin replaces display pre while retaining its annotation wrapper', () => {
  const position = {start: {line: 3, column: 1}, end: {line: 5, column: 3}};
  const code = element(
    'code',
    {className: ['language-math', 'math-display']},
    [text('y^2')],
  );
  const pre = element('pre', {'data-kai-math-source': 'true'}, [code], position);
  const wrapper = element('div', {
    'data-kai-annotatable': 'true',
    'data-kai-source-line': '3',
    'data-kai-math-block': 'true',
  }, [pre], position);
  const tree = {type: 'root', children: [wrapper]};

  runtimeKatex()(tree);

  assert.equal(tree.children[0], wrapper);
  assert.deepEqual(wrapper.properties, {
    'data-kai-annotatable': 'true',
    'data-kai-source-line': '3',
    'data-kai-math-block': 'true',
  });
  assert.equal(wrapper.children.length, 1);
  assert.equal(wrapper.children[0].type, 'mdxJsxFlowElement');
  assert.equal(wrapper.children[0].name, 'KaiMath');
  assert.equal(getAttribute(wrapper.children[0], 'source').value, 'y^2');
  assert.equal(getAttribute(wrapper.children[0], 'displayMode').value, null);
  assert.equal(getAttribute(wrapper.children[0], 'data-kai-math-source'), undefined);
  assert.deepEqual(wrapper.children[0].position, position);
});

test('annotation and runtime plugins leave one annotatable display-math block', () => {
  const position = {start: {line: 12, column: 1}, end: {line: 14, column: 3}};
  const code = element(
    'code',
    {className: ['language-math', 'math-display']},
    [text('q^2')],
  );
  const pre = element('pre', {}, [code], position);
  const tree = {type: 'root', children: [pre]};

  annotationSourceLines()(tree);
  runtimeKatex()(tree);

  const annotatableNodes = [];
  const visit = (node) => {
    if (node?.properties?.['data-kai-annotatable']) annotatableNodes.push(node);
    if (Array.isArray(node?.attributes) && node.attributes.some((attribute) => (
      attribute.name === 'data-kai-annotatable'
    ))) annotatableNodes.push(node);
    node?.children?.forEach(visit);
  };
  visit(tree);

  assert.equal(annotatableNodes.length, 1);
  assert.equal(tree.children[0].type, 'element');
  assert.equal(tree.children[0].tagName, 'div');
  assert.equal(tree.children[0].properties['data-kai-source-line'], '12');
  assert.equal(tree.children[0].children[0].type, 'mdxJsxFlowElement');
  assert.equal(
    getAttribute(tree.children[0].children[0], 'data-kai-source-line'),
    undefined,
  );
});

test('runtime plugin treats fenced math as display and leaves ordinary code untouched', () => {
  const mathCode = element(
    'code',
    {className: ['language-math']},
    [text('z^3\n')],
  );
  const ordinaryCode = element(
    'code',
    {className: ['language-js']},
    [text('const z = 3;')],
  );
  const mathPre = element('pre', {}, [mathCode]);
  const ordinaryPre = element('pre', {}, [ordinaryCode]);
  const tree = {type: 'root', children: [mathPre, ordinaryPre]};

  runtimeKatex()(tree);

  assert.equal(tree.children[0].type, 'mdxJsxFlowElement');
  assert.equal(getAttribute(tree.children[0], 'source').value, 'z^3\n');
  assert.equal(getAttribute(tree.children[0], 'displayMode').value, null);
  assert.equal(tree.children[1], ordinaryPre);
});

test('runtime plugin keeps malformed formulas compact for the synchronous fallback', () => {
  const math = element(
    'code',
    {className: ['language-math', 'math-inline']},
    [text(String.raw`\notARealKaTeXCommand{x}`)],
  );
  const tree = {type: 'root', children: [element('p', {}, [math])]};
  const file = {
    message() {
      throw new Error('The compact transform must not render formulas.');
    },
  };

  runtimeKatex()(tree, file);

  assert.equal(tree.children[0].children[0].type, 'mdxJsxTextElement');
  assert.equal(
    getAttribute(tree.children[0].children[0], 'source').value,
    String.raw`\notARealKaTeXCommand{x}`,
  );
});
