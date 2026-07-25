/**
 * Return the current non-collapsed selection only when it belongs to the
 * document content that supports inline annotations.
 */
export const getContainedSelectionRange = (selection, container) => {
  if (
    !selection
    || selection.isCollapsed
    || selection.rangeCount === 0
    || !container
  ) {
    return null;
  }

  const range = selection.getRangeAt(0);
  return container.contains(range.commonAncestorContainer) ? range : null;
};
