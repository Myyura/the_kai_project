// These expressions only process KaTeX's serialized span tags, never TeX input.
const SPAN = /<span\b(?:[^>"']|"[^"]*"|'[^']*')*>/g;
const STYLE = / style="([^"]*)"/;
const CLASS = / class="([^"]*)"/;

export function visitMathStyles(html, visit) {
  for (const match of html.matchAll(SPAN)) {
    const style = STYLE.exec(match[0]);
    if (style && CLASS.test(match[0])) visit(style[1]);
  }
}

/** Unknown styles retain their inline declarations, including newly edited TeX. */
export function compactMathStyles(html, styles) {
  return html.replace(SPAN, (tag) => {
    const style = STYLE.exec(tag);
    const className = style && Object.prototype.hasOwnProperty.call(styles, style[1]) && styles[style[1]];
    if (!className || !CLASS.test(tag)) return tag;
    return tag.replace(STYLE, '').replace(CLASS, (_match, classes) => (
      ` class="${classes} ${className}"`
    ));
  });
}
