/** Formatting checks and conservative repairs for Markdown $$ display math. */
let parserPromise;
async function getParser() {
  parserPromise ||= Promise.all([
    import('unified'), import('remark-parse'), import('remark-frontmatter'), import('remark-gfm'), import('remark-math'),
  ]).then(([{unified}, {default: parse}, {default: frontmatter}, {default: gfm}, {default: math}]) => ({
    examples: unified().use(parse).use(frontmatter).use(gfm),
    math: unified().use(parse).use(frontmatter).use(gfm).use(math),
  }));
  return parserPromise;
}

// Replace list markers with their continuation indentation; retain quote markers.
function containerPrefix(line) {
  let rest = line;
  let prefix = '';
  while (rest) {
    const whitespace = rest.match(/^[ \t]+/);
    if (whitespace) {
      prefix += whitespace[0];
      rest = rest.slice(whitespace[0].length);
    }
    if (rest.startsWith('>')) {
      prefix += '>';
      rest = rest.slice(1);
      continue;
    }
    const list = rest.match(/^(?:[-+*]|\d+[.)])[ \t]+/);
    if (list) {
      prefix += ' '.repeat(list[0].length);
      rest = rest.slice(list[0].length);
      continue;
    }
    break;
  }
  return {prefix, remainder: rest};
}

function isBlank(line) {
  return line !== undefined && /^[ \t>]*$/.test(line);
}

/**
 * Return one-based issues and non-destructive repairs. Code examples and YAML
 * are excluded by Markdown parsing. Only exact, unescaped $$ delimiters are
 * considered; single-dollar inline math and longer fences remain untouched.
 * A final unmatched delimiter is reported, never automatically closed.
 */
async function analyzeDisplayMath(content) {
  const parser = await getParser();
  // The math-aware tree keeps TeX internals from becoming Markdown headings,
  // tables, or code. The plain tree additionally protects multiline code-span
  // examples that a math fence would otherwise interrupt.
  const examplesTree = parser.examples.parse(content);
  const mathTree = parser.math.parse(content);
  const protectedRanges = [];
  const restrictedRanges = [];
  function visit(node) {
    if (['code', 'inlineCode', 'yaml', 'html'].includes(node.type)) {
      protectedRanges.push([node.position.start.offset, node.position.end.offset]);
      return;
    }
    for (const child of node.children || []) visit(child);
  }
  visit(mathTree);
  function visitExample(node) {
    if (node.type === 'inlineCode') {
      protectedRanges.push([node.position.start.offset, node.position.end.offset]);
      return;
    }
    for (const child of node.children || []) visitExample(child);
  }
  visitExample(examplesTree);
  function visitMath(node) {
    if (['heading', 'table'].includes(node.type)) {
      restrictedRanges.push([node.position.start.offset, node.position.end.offset]);
    }
    for (const child of node.children || []) visitMath(child);
  }
  visitMath(mathTree);
  protectedRanges.sort((a, b) => a[0] - b[0]);
  for (let i = protectedRanges.length - 1; i > 0; i--) {
    if (protectedRanges[i][0] <= protectedRanges[i - 1][1]) {
      protectedRanges[i - 1][1] = Math.max(protectedRanges[i - 1][1], protectedRanges[i][1]);
      protectedRanges.splice(i, 1);
    }
  }

  const lines = content.split(/\r?\n/);
  const newline = content.includes('\r\n') ? '\r\n' : '\n';
  const starts = [];
  let offset = 0;
  for (const line of lines) {
    starts.push(offset);
    offset += line.length + newline.length;
  }
  const tokens = [];
  let rangeIndex = 0;
  let lineIndex = 0;
  for (const match of content.matchAll(/\${2,}/g)) {
    const start = match.index;
    if (match[0].length !== 2) continue;
    let slashes = 0;
    for (let i = start - 1; i >= 0 && content[i] === '\\'; i--) slashes++;
    if (slashes % 2) continue;
    while (rangeIndex < protectedRanges.length && protectedRanges[rangeIndex][1] <= start) rangeIndex++;
    if (protectedRanges[rangeIndex]?.[0] <= start && start < protectedRanges[rangeIndex][1]) continue;
    while (lineIndex + 1 < starts.length && starts[lineIndex + 1] <= start) lineIndex++;
    tokens.push({offset: start, line: lineIndex, column: start - starts[lineIndex]});
  }

  const issues = [];
  const blocks = [];
  const edits = new Map();
  const insert = (at, text, remove = 0) => {
    // Adjacent blocks share their intervening blank line.
    if (!edits.has(at)) edits.set(at, {text, remove});
  };
  const issue = (line, rule, message) => issues.push({line: line + 1, rule, message});
  for (let i = 0; i + 1 < tokens.length; i += 2) {
    const start = tokens[i];
    const end = tokens[i + 1];
    const startLine = lines[start.line];
    const endLine = lines[end.line];
    const before = startLine.slice(0, start.column);
    const after = endLine.slice(end.column + 2);
    const context = containerPrefix(before);
    const prefix = context.prefix;
    const blank = prefix.replace(/[ \t]+$/, '');
    const startHasText = context.remainder.trim() !== '';
    const openHasBody = startLine.slice(start.column + 2).trim() !== '';
    const closeHasBody = endLine.slice(0, end.column).slice(
      containerPrefix(endLine.slice(0, end.column)).prefix.length,
    ).trim() !== '';
    const endHasText = after.trim() !== '';
    const restricted = restrictedRanges.some(([a, b]) => a <= start.offset && start.offset < b || a <= end.offset && end.offset < b);
    blocks.push({startLine: start.line + 1, endLine: end.line + 1, fixable: !restricted});
    if (restricted) {
      issue(start.line, 'math-block-inline-context', '标题或表格中的 $$ 需要人工确认；行内公式请使用单个 $');
      continue;
    }

    if (startHasText || openHasBody || closeHasBody || endHasText) {
      issue(start.line, 'math-block-delimiter-line', '行间公式的两个 $$ 界定符必须各自独占一行');
    }

    if (startHasText) {
      const trailing = before.match(/[ \t]+$/)?.[0].length || 0;
      insert(start.offset - trailing, newline + blank + newline + prefix, trailing);
    } else if (start.line > 0 && !isBlank(lines[start.line - 1])) {
      issue(start.line, 'math-block-blank-before', '行间公式开始的 $$ 前必须有空行');
      insert(starts[start.line], blank + newline);
    }
    if (openHasBody) {
      const leading = startLine.slice(start.column + 2).match(/^[ \t]+/)?.[0].length || 0;
      insert(start.offset + 2, newline + prefix, leading);
    }
    if (closeHasBody || start.line === end.line) {
      const trailing = endLine.slice(0, end.column).match(/[ \t]+$/)?.[0].length || 0;
      insert(end.offset - trailing, newline + prefix, trailing);
    }
    if (endHasText) {
      const leading = after.match(/^[ \t]+/)?.[0].length || 0;
      insert(end.offset + 2, newline + blank + newline + prefix, leading);
    } else if (end.line < lines.length - 1 && !isBlank(lines[end.line + 1])) {
      issue(end.line, 'math-block-blank-after', '行间公式结束的 $$ 后必须有空行');
      insert(starts[end.line + 1], blank + newline);
    }
  }
  if (tokens.length % 2) {
    issue(tokens.at(-1).line, 'math-unclosed-block', '检测到未配对的 $$；请人工核对并补全公式界定符');
  }

  let fixedContent = content;
  for (const [at, {text, remove}] of [...edits].sort((a, b) => b[0] - a[0])) {
    fixedContent = fixedContent.slice(0, at) + text + fixedContent.slice(at + remove);
  }
  return {issues, blocks, fixedContent, changed: fixedContent !== content};
}

module.exports = {analyzeDisplayMath};
