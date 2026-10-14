const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const {analyzeDisplayMath} = require('../scripts/display-math-format');
const {checkFile} = require('../scripts/review-format');

async function assertRepair(source, expected, rules) {
  const result = await analyzeDisplayMath(source);
  assert.equal(result.fixedContent, expected);
  assert.deepEqual(result.issues.map((issue) => issue.rule), rules);
  assert.equal(result.fixedContent.replace(/^[ \t>]+$/gm, '').replace(/\s/g, ''), source.replace(/^[ \t>]+$/gm, '').replace(/\s/g, ''));
  const second = await analyzeDisplayMath(result.fixedContent);
  assert.equal(second.changed, false, 'repair must be idempotent');
  assert.deepEqual(second.issues, []);
  return result;
}

test('requires blank lines outside display math, not between delimiters and formula', async () => {
  const result = await assertRepair(
    '説明\n$$\nx+y\\\\\nz=w\n$$\n次の文',
    '説明\n\n$$\nx+y\\\\\nz=w\n$$\n\n次の文',
    ['math-block-blank-before', 'math-block-blank-after'],
  );
  assert.deepEqual(result.issues.map((issue) => issue.line), [2, 5]);
});

test('document boundaries and already separated blocks need no extra blank lines', async () => {
  for (const source of ['$$\nx\n$$', '$$\nx\n$$\n', 'text\n\n$$\nx\n$$\n\nnext']) {
    await assertRepair(source, source, []);
  }
});

test('adjacent blocks share one new blank line', async () => {
  await assertRepair('$$\nx\n$$\n$$\ny\n$$', '$$\nx\n$$\n\n$$\ny\n$$', [
    'math-block-blank-after', 'math-block-blank-before',
  ]);
});

test('preserves list indentation and quote containers', async () => {
  await assertRepair('- item\n  $$\n  x\n  $$\n  next', '- item\n\n  $$\n  x\n  $$\n\n  next', [
    'math-block-blank-before', 'math-block-blank-after',
  ]);
  await assertRepair('> text\n> $$\n> x\n> $$\n> next', '> text\n>\n> $$\n> x\n> $$\n>\n> next', [
    'math-block-blank-before', 'math-block-blank-after',
  ]);
  await assertRepair('> > text\n> > $$\n> > x\n> > $$\n> > next', '> > text\n> >\n> > $$\n> > x\n> > $$\n> >\n> > next', [
    'math-block-blank-before', 'math-block-blank-after',
  ]);
});

test('splits same-line and partially same-line delimiters without changing TeX', async () => {
  await assertRepair('$$x+y$$', '$$\nx+y\n$$', ['math-block-delimiter-line']);
  await assertRepair('$$x+y\nz=w\n$$', '$$\nx+y\nz=w\n$$', ['math-block-delimiter-line']);
  await assertRepair('$$\nx+y$$', '$$\nx+y\n$$', ['math-block-delimiter-line']);
});

test('ignores frontmatter, fenced and indented code, and inline code examples', async () => {
  const source = [
    '---', 'sample: $$unmatched', '---', '',
    '~~~markdown', 'before', '$$', 'x', '$$', 'after', '~~~', '',
    '````markdown', '```', '$$unmatched', '````', '',
    '    $$unmatched', '',
    '`$$inline$$` and ``a ` $$unmatched``', '',
    'The multiline example `before', '$$', 'x', '$$', 'after` stays code.', '',
    '> ```md', '> $$unmatched', '> ```', '',
    '- item', '', '  ```md', '  $$unmatched', '  ```', '',
    '<!-- $$unmatched -->',
  ].join('\n');
  await assertRepair(source, source, []);
});

test('single-dollar math and escaped dollars do not affect delimiter pairing', async () => {
  const source = String.raw`$x$ and \$\$ literal dollars, \$$ escaped run.`;
  await assertRepair(source, source, []);
});

test('unmatched delimiters are reported without inventing a closing fence', async () => {
  const source = 'text\n$$\nx';
  const result = await analyzeDisplayMath(source);
  assert.deepEqual(result.issues.map((issue) => [issue.rule, issue.line]), [['math-unclosed-block', 2]]);
  assert.equal(result.fixedContent, source);
});

test('double dollars in headings and tables require manual review', async () => {
  for (const source of ['# Exam $$1$$', '| a | b |\n|---|---|\n| $$x$$ | value |']) {
    const result = await analyzeDisplayMath(source);
    assert.equal(result.fixedContent, source);
    assert.equal(result.blocks[0].fixable, false);
    assert.deepEqual(result.issues.map((issue) => issue.rule), ['math-block-inline-context']);
  }
});

test('keeps CRLF and diagnoses original line numbers after YAML', async () => {
  const source = '---\r\ntitle: example\r\n---\r\ntext\r\n$$\r\nx\r\n$$\r\nnext';
  const result = await assertRepair(source, '---\r\ntitle: example\r\n---\r\ntext\r\n\r\n$$\r\nx\r\n$$\r\n\r\nnext', [
    'math-block-blank-before', 'math-block-blank-after',
  ]);
  assert.deepEqual(result.issues.map((issue) => issue.line), [5, 7]);
});

test('format review exposes missing external blank lines as errors', async () => {
  const content = '---\nsidebar_label: Test\ntags: [Physics.Mechanics.Forced-Vibration]\n---\n\n# Test\n\n## **Author**\n\nTest\n\n## **Kai**\n\n説明\n$$\nx\n$$\n次の文';
  const issues = await checkFile(path.resolve('docs/example.md'), content);
  const mathIssues = issues.filter((issue) => issue.rule.startsWith('math-'));
  assert.deepEqual(mathIssues.map((issue) => [issue.rule, issue.severity, issue.line]), [
    ['math-block-blank-before', 'ERROR', 15],
    ['math-block-blank-after', 'ERROR', 17],
  ]);
});

test('formula internals resembling Setext headings and tables stay within the math block', async () => {
  const source = 'before\n$$\na\n=\nb\\\\\n| x | y |\n|---|---|\n$$\nafter';
  await assertRepair(source, 'before\n\n$$\na\n=\nb\\\\\n| x | y |\n|---|---|\n$$\n\nafter', [
    'math-block-blank-before', 'math-block-blank-after',
  ]);
});

test('splitting sentence-level display notation leaves no new trailing whitespace', async () => {
  await assertRepair('before $$ x+y $$ after', 'before\n\n$$\nx+y\n$$\n\nafter', [
    'math-block-delimiter-line',
  ]);
});

test('repaired list and quote math compiles into display nodes in its original container', async () => {
  const [{unified}, {default: parse}, {default: math}] = await Promise.all([
    import('unified'), import('remark-parse'), import('remark-math'),
  ]);
  for (const [source, container] of [
    ['- item\n  $$x+y$$\n  next', 'listItem'],
    ['> item\n> $$x+y$$\n> next', 'blockquote'],
  ]) {
    const {fixedContent} = await analyzeDisplayMath(source);
    const tree = unified().use(parse).use(math).parse(fixedContent);
    const found = [];
    const walk = (node, parents) => {
      if (node.type === 'math') found.push({value: node.value, parents});
      for (const child of node.children || []) walk(child, [...parents, node.type]);
    };
    walk(tree, []);
    assert.equal(found.length, 1);
    assert.equal(found[0].value, 'x+y');
    assert.ok(found[0].parents.includes(container));
  }
});
