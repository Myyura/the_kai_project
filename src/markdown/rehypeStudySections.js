const normalizeHeading = (value) => value
  .normalize('NFKC')
  .replace(/[\u200B-\u200D\uFEFF]/g, '')
  .replace(/\s+/g, ' ')
  .replace(/[：:]+$/g, '')
  .trim()
  .toLocaleLowerCase();

const getNodeText = (node) => {
  if (!node || typeof node !== 'object') return '';
  if (node.type === 'text' || node.type === 'raw') return node.value || '';
  return Array.isArray(node.children)
    ? node.children.map(getNodeText).join('')
    : '';
};

const isHeading = (node, level = 2) => (
  node?.type === 'element' && node.tagName === `h${level}`
);

const isProblemHeading = (value) => {
  const heading = normalizeHeading(value);
  return (
    heading === 'description'
    || heading.startsWith('description ')
    || heading === 'problem'
    || heading === 'question'
    || heading === '题目'
    || heading === '問題'
  );
};

const isAuthorHeading = (value) => normalizeHeading(value) === 'author';

const isSolutionHeading = (value) => {
  const heading = normalizeHeading(value);
  return (
    heading === 'kai'
    || heading.startsWith('kai ')
    || heading.startsWith('kai(')
    || heading === 'solution'
    || heading === 'answer'
    || heading === '题解'
    || heading === '解答'
  );
};

const isSolutionSupplementHeading = (value) => {
  const heading = normalizeHeading(value);
  return (
    heading === 'knowledge'
    || heading.startsWith('knowledge ')
    || heading === 'reference'
    || heading.startsWith('reference ')
  );
};

const getMdxAttribute = (node, name) => (
  Array.isArray(node?.attributes)
    ? node.attributes.find((attribute) => (
      attribute?.type === 'mdxJsxAttribute' && attribute.name === name
    ))
    : null
);

const markStudyNode = (node, name) => {
  if (node?.type === 'element') {
    node.properties = {
      ...(node.properties || {}),
      'data-kai-study-section': name,
    };
    return;
  }

  if (node?.type === 'mdxJsxFlowElement') {
    node.attributes = Array.isArray(node.attributes) ? node.attributes : [];
    const existing = getMdxAttribute(node, 'data-kai-study-section');
    if (existing) existing.value = name;
    else {
      node.attributes.push({
        type: 'mdxJsxAttribute',
        name: 'data-kai-study-section',
        value: name,
      });
    }
  }
};

const hasStudyMarkers = (tree) => (
  Array.isArray(tree?.children)
  && tree.children.some((node) => (
    node?.properties?.['data-kai-study-section']
    || getMdxAttribute(node, 'data-kai-study-section')
  ))
);

/**
 * Marks problem/solution nodes before React renders the MDX tree. The client
 * can then switch the original React-owned nodes without reparenting them or
 * introducing wrapper elements that duplicate records in the search index.
 */
export default function rehypeStudySections() {
  return (tree, file = {}) => {
    if (!Array.isArray(tree?.children) || hasStudyMarkers(tree)) return;

    const children = tree.children;
    const headings = children.map((node) => (
      isHeading(node) ? getNodeText(node) : ''
    ));
    const explicitProblemIndex = children.findIndex((node, index) => (
      isHeading(node) && isProblemHeading(headings[index])
    ));
    const solutionIndex = children.findIndex((node, index) => (
      index > explicitProblemIndex
      && isHeading(node)
      && isSolutionHeading(headings[index])
    ));
    const force = /(?:^|[/\\])\d{4}(?:[/\\]|$)/.test(String(file.path || ''));
    const supplementarySolutionIndex = (
      solutionIndex < 0 && (force || explicitProblemIndex >= 0)
        ? children.findIndex((node, index) => (
          index > explicitProblemIndex
          && isHeading(node)
          && isSolutionSupplementHeading(headings[index])
        ))
        : -1
    );
    const resolvedSolutionIndex = (
      solutionIndex >= 0 ? solutionIndex : supplementarySolutionIndex
    );
    const inferredProblemIndex = (
      explicitProblemIndex < 0 && force
        ? children.findIndex((node, index) => (
          isHeading(node)
          && !isAuthorHeading(headings[index])
          && !isSolutionHeading(headings[index])
          && !isSolutionSupplementHeading(headings[index])
          && (resolvedSolutionIndex < 0 || index < resolvedSolutionIndex)
        ))
        : -1
    );
    const problemIndex = (
      explicitProblemIndex >= 0 ? explicitProblemIndex : inferredProblemIndex
    );

    if (problemIndex < 0 && resolvedSolutionIndex < 0 && !force) return;

    const problemChildren = problemIndex >= 0
      ? children.slice(
        problemIndex,
        resolvedSolutionIndex >= 0 ? resolvedSolutionIndex : children.length,
      )
      : [];
    const solutionChildren = resolvedSolutionIndex >= 0
      ? children.slice(resolvedSolutionIndex)
      : [];

    problemChildren.forEach((node) => markStudyNode(node, 'problem'));
    solutionChildren.forEach((node) => markStudyNode(node, 'solution'));
  };
}
