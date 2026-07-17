const ANNOTATABLE_TAGS = new Set([
  'p',
  'li',
  'blockquote',
  'pre',
  'table',
  'figure',
]);

const hasClass = (node, className) => {
  const value = node?.properties?.className;
  return Array.isArray(value)
    ? value.includes(className)
    : typeof value === 'string' && value.split(/\s+/).includes(className);
};

const shouldAnnotate = (node) => (
  node?.type === 'element'
  && (
    ANNOTATABLE_TAGS.has(node.tagName)
    || hasClass(node, 'katex-display')
    || hasClass(node, 'theme-code-block')
  )
);

const isDisplayMathSource = (node) => (
  node?.type === 'element'
  && node.tagName === 'pre'
  && !node.properties?.['data-kai-math-source']
  && Array.isArray(node.children)
  && node.children.some((child) => (
    child?.type === 'element'
    && child.tagName === 'code'
    && hasClass(child, 'math-display')
  ))
);

/**
 * Adds the original Markdown source line to blocks that can receive a note.
 * The client only uses this line together with the exact selected text; it is
 * deliberately not a permanent paragraph identifier.
 */
export default function rehypeAnnotationSourceLines() {
  return (tree) => {
    const visit = (node, parent = null, index = -1) => {
      if (!node || typeof node !== 'object') return;

      if (isDisplayMathSource(node) && parent && index >= 0) {
        const line = Number(node.position?.start?.line);
        node.properties = {
          ...(node.properties || {}),
          'data-kai-math-source': 'true',
        };
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: Number.isFinite(line) && line > 0 ? {
            'data-kai-annotatable': 'true',
            'data-kai-source-line': String(line),
            'data-kai-math-block': 'true',
          } : {},
          children: [node],
          position: node.position,
        };
        parent.children[index] = wrapper;
        node = wrapper;
      }

      if (shouldAnnotate(node)) {
        const line = Number(node.position?.start?.line);
        if (Number.isFinite(line) && line > 0) {
          node.properties = {
            ...(node.properties || {}),
            'data-kai-annotatable': 'true',
            'data-kai-source-line': String(line),
          };
        }
      }

      if (Array.isArray(node.children)) {
        node.children.forEach((child, childIndex) => visit(child, node, childIndex));
      }
    };

    visit(tree);
  };
}
