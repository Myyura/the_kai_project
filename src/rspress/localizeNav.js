/**
 * Return a translated copy of an Rspress navigation tree.
 *
 * Keeping this transformation independent from React makes the recursive
 * behaviour easy to verify and leaves the original site data untouched.
 */
export function localizeNavItems(items, translate) {
  if (!Array.isArray(items)) return [];

  return items.map((item) => {
    const localizedItem = {
      ...item,
      ...(typeof item.text === 'string' ? {text: translate(item.text)} : {}),
    };

    if (Array.isArray(item.items)) {
      localizedItem.items = localizeNavItems(item.items, translate);
    }

    return localizedItem;
  });
}
