const LANGUAGE_ALIASES = new Map([
  ['assembly', 'asm'],
  ['c++', 'cpp'],
  ['pseudocode', 'text'],
]);

function transformChildren(node) {
  if (!node || !Array.isArray(node.children)) return;

  node.children = node.children.map((child) => {
    if (child?.type === 'code') {
      const language = String(child.lang || '').toLocaleLowerCase();
      if (language === 'smiles') {
        return {
          type: 'mdxJsxFlowElement',
          name: 'MoleculeFigure',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'smiles',
              value: String(child.value || '').trim(),
            },
            ...(child.meta ? [{
              type: 'mdxJsxAttribute',
              name: 'title',
              value: String(child.meta),
            }] : []),
          ],
          children: [],
          position: child.position,
        };
      }

      if (LANGUAGE_ALIASES.has(language)) {
        return {...child, lang: LANGUAGE_ALIASES.get(language)};
      }
    }

    transformChildren(child);
    return child;
  });
}

/**
 * Keeps the site's chemistry diagrams and legacy code-fence language aliases
 * working before Rspress hands code blocks to Shiki.
 */
export default function remarkKaiCodeBlocks() {
  return transformChildren;
}
