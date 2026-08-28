const MATH_CLASSES = new Set([
  'language-math',
  'math-display',
  'math-inline',
]);

const classNames = (node) => {
  const value = node?.properties?.className;
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string') return value.split(/\s+/).filter(Boolean);
  return [];
};

const nodeText = (node) => {
  if (!node || typeof node !== 'object') return '';
  if (node.type === 'text' || node.type === 'raw') return node.value || '';
  return Array.isArray(node.children) ? node.children.map(nodeText).join('') : '';
};

const isMathElement = (node) => {
  if (node?.type !== 'element') return false;
  return classNames(node).some((name) => MATH_CLASSES.has(name));
};

/**
 * Replace the large KaTeX HAST expansion with a compact MDX component call.
 * The original TeX is retained in the `source` prop. Validation and fallback
 * happen in the synchronous component render used by SSG and the browser, so
 * client/server MDX compilation never expands or renders the formula tree.
 */
export default function rehypeRuntimeKatex() {
  return (tree) => {
    const visit = (node, ancestors = []) => {
      if (!Array.isArray(node?.children)) return;

      for (let index = 0; index < node.children.length; index += 1) {
        const child = node.children[index];

        if (!isMathElement(child)) {
          visit(child, [...ancestors, node]);
          continue;
        }

        const classes = classNames(child);
        const languageMath = classes.includes('language-math');
        const mathDisplay = classes.includes('math-display');
        const parent = node;
        const parentIsPre = parent.type === 'element' && parent.tagName === 'pre';
        const replacePre = (
          child.tagName === 'code' && languageMath && parentIsPre
        );
        const scope = replacePre ? parent : child;
        const displayMode = mathDisplay || replacePre;
        const source = nodeText(scope);
        const replacement = {
          type: displayMode ? 'mdxJsxFlowElement' : 'mdxJsxTextElement',
          name: 'KaiMath',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'source',
              value: source,
            },
            ...(displayMode ? [{
              type: 'mdxJsxAttribute',
              name: 'displayMode',
              value: null,
            }] : []),
          ],
          children: [],
          position: scope.position || child.position,
        };

        if (replacePre) {
          const container = ancestors[ancestors.length - 1];
          if (!Array.isArray(container?.children)) continue;
          const scopeIndex = container.children.indexOf(scope);
          if (scopeIndex >= 0) container.children.splice(scopeIndex, 1, replacement);
          return;
        }

        node.children.splice(index, 1, replacement);
      }
    };

    visit(tree);
  };
}
