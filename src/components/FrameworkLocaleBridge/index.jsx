import {useEffect} from 'react';
import {useUiText} from '@site/src/i18n/useUiText';

export default function FrameworkLocaleBridge() {
  const t = useUiText('framework');

  useEffect(() => {
    const updateFrameworkLabels = () => {
      document.querySelectorAll('button.menu__caret').forEach((button) => {
        const row = button.closest('.menu__list-item-collapsible');
        const label = row?.querySelector('.menu__link')?.textContent?.trim();
        if (!label) return;
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute(
          'aria-label',
          expanded ? t.collapseCategory(label) : t.expandCategory(label),
        );
      });

      const skipLink = document.querySelector(
        'a[href="#__docusaurus_skipToContent_fallback"]',
      );
      skipLink?.parentElement?.setAttribute('aria-label', t.skipToContent);
    };

    updateFrameworkLabels();
    const observer = new MutationObserver(updateFrameworkLabels);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['aria-expanded'],
      childList: true,
      subtree: true,
    });
    return () => observer.disconnect();
  }, [t]);

  return null;
}
