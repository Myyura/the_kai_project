const MarkdownIt = require('markdown-it');

function readQuotedValue(source, start, javascript = false) {
  const quote = source[start];
  let end = start + 1;
  while (end < source.length) {
    if (javascript && source[end] === '\\') {
      end += 2;
    } else if (source[end] === quote) {
      return end + 1;
    } else {
      end += 1;
    }
  }
  return source.length;
}

function readExpression(source, start) {
  let depth = 1;
  let end = start + 1;
  while (end < source.length && depth > 0) {
    if (source[end] === '"' || source[end] === "'" || source[end] === '`') {
      end = readQuotedValue(source, end, true);
    } else {
      if (source[end] === '{') depth += 1;
      if (source[end] === '}') depth -= 1;
      end += 1;
    }
  }
  return end;
}

function readImageTag(source, start) {
  if (!/^<img(?=[\s/>])/i.test(source.slice(start))) return null;
  let end = start + 4;
  while (end < source.length) {
    if (source[end] === '"' || source[end] === "'") {
      end = readQuotedValue(source, end);
    } else if (source[end] === '{') {
      end = readExpression(source, end);
    } else if (source[end] === '>') {
      return source.slice(start, end + 1);
    } else {
      end += 1;
    }
  }
  return null;
}

function decodeStringExpression(expression) {
  const value = expression.slice(1, -1).trim();
  if (!/^(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')$/s.test(value)) return null;
  // Static string literals only: never evaluate MDX expressions or imports.
  return value.slice(1, -1).replace(
    /\\(?:u\{([\da-f]+)\}|u([\da-f]{4})|x([\da-f]{2})|([\s\S]))/gi,
    (match, codePoint, unicode, hex, escaped) => {
      if (codePoint || unicode || hex) {
        const code = Number.parseInt(codePoint || unicode || hex, 16);
        return code <= 0x10ffff ? String.fromCodePoint(code) : match;
      }
      const replacements = {n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', v: '\v', '0': '\0'};
      return replacements[escaped] ?? escaped;
    },
  );
}

function getImageTagSource(tag) {
  let position = 4;
  while (position < tag.length) {
    const attribute = /^[\s/]*([^\s"'<>/=]+)\s*/.exec(tag.slice(position));
    if (!attribute) break;
    position += attribute[0].length;
    if (tag[position] !== '=') continue;
    position += 1;
    while (/\s/.test(tag[position] || '') && position < tag.length) position += 1;

    const start = position;
    let value;
    if (tag[position] === '"' || tag[position] === "'") {
      position = readQuotedValue(tag, position);
      value = tag.slice(start + 1, position - 1);
    } else if (tag[position] === '{') {
      position = readExpression(tag, position);
      value = decodeStringExpression(tag.slice(start, position));
    } else {
      while (position < tag.length && !/[\s>]/.test(tag[position]) && tag.slice(position, position + 2) !== '/>') {
        position += 1;
      }
      value = tag.slice(start, position);
    }
    if (attribute[1].toLowerCase() === 'src') return value;
  }
  return null;
}

function addImageRule(parser) {
  parser.inline.ruler.before('html_inline', 'export_image', (state, silent) => {
    if (state.src[state.pos] !== '<') return false;
    const tag = readImageTag(state.src, state.pos);
    if (!tag) return false;
    if (!silent) {
      const token = state.push('export_image', 'img', 0);
      token.attrSet('src', getImageTagSource(tag));
    }
    state.pos += tag.length;
    return true;
  });
  return parser;
}

const markdownParser = addImageRule(new MarkdownIt({html: true}));
// MDX renders Markdown inside HTML containers. Reparse HTML blocks to discover
// those images, while keeping inline and fenced code as opaque parser tokens.
const htmlContentParser = addImageRule(new MarkdownIt({html: true}).disable('html_block'));

function decodeHtmlEntities(value) {
  return value.replace(/&(?:#[\da-fx]+|[a-z][\da-z]+);/gi, (entity) => (
    markdownParser.utils.unescapeAll(entity)
  ));
}

function extractImageSources(markdown) {
  const sources = new Set();
  const environment = {};
  let commentOpen = false;
  function removeComments(content) {
    let position = 0;
    let result = '';
    while (position < content.length) {
      if (commentOpen) {
        const end = content.indexOf('-->', position);
        if (end < 0) break;
        position = end + 3;
        commentOpen = false;
      } else {
        const start = content.indexOf('<!--', position);
        if (start < 0) return result + content.slice(position);
        result += content.slice(position, start);
        position = start + 4;
        commentOpen = true;
      }
    }
    return result;
  }
  function visit(tokens) {
    for (const token of tokens) {
      if (commentOpen) {
        const remaining = removeComments(token.content);
        const continuesComment = commentOpen;
        commentOpen = false;
        if (remaining) visit(htmlContentParser.parse(remaining, environment));
        commentOpen = continuesComment;
      } else if (token.type === 'image' || token.type === 'export_image') {
        const source = token.attrGet('src');
        if (typeof source === 'string' && source.trim()) {
          // Markdown-it already decodes Markdown destinations. A second decode
          // would change literal entity text in URLs such as &amp;amp;.
          sources.add(token.type === 'image' ? source : decodeHtmlEntities(source.trim()));
        }
      } else if (token.type === 'html_block') {
        if (/^\s*<(?:script|style|pre|textarea)(?=[\s>])/i.test(token.content)) continue;
        const content = removeComments(token.content);
        const continuesComment = commentOpen;
        commentOpen = false;
        visit(htmlContentParser.parse(content, environment));
        commentOpen = continuesComment;
      } else if (token.type === 'text' && token.content.includes('<!--')) {
        // An inline comment containing a blank line can span several block
        // tokens, so keep its state until the closing delimiter appears.
        removeComments(token.content);
      } else if (token.children) {
        visit(token.children);
      }
    }
  }
  visit(markdownParser.parse(String(markdown || ''), environment));
  return [...sources];
}

module.exports = {extractImageSources};
