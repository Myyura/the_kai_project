import React, {useEffect, useRef} from 'react';
import SearchBarOriginal from '@theme-original/SearchBar';
import {useUiText} from '@site/src/i18n/useUiText';

export default function SearchBar(props) {
  const rootRef = useRef(null);
  const t = useUiText('framework');

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const translateControls = () => {
      const input = root.querySelector('input[type="search"], input.navbar__search-input');
      if (input) {
        input.setAttribute('placeholder', t.searchLabel);
        input.setAttribute('aria-label', t.searchLabel);
      }
      const clearButton = root.querySelector('button');
      if (clearButton && !clearButton.getAttribute('aria-label')) {
        clearButton.setAttribute('aria-label', t.clearSearch);
      }
    };

    translateControls();
    const observer = new MutationObserver(translateControls);
    observer.observe(root, {childList: true, subtree: true});
    return () => observer.disconnect();
  }, [t]);

  return (
    <span ref={rootRef} style={{display: 'contents'}}>
      <SearchBarOriginal {...props} />
    </span>
  );
}
