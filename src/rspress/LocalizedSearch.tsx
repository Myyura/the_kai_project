import React, {useEffect, useState} from 'react';
import {NoSSR} from '@rspress/core/runtime';
import {
  IconSearch,
  SearchPanel as RspressSearchPanel,
  SvgWrapper,
} from '@rspress/core/theme-original';

import {useUiText} from '@site/src/i18n/useUiText';

type SetFocused = (focused: boolean) => void;

function LocalizedSearchButton({setFocused}: {setFocused: SetFocused}) {
  const [metaKey, setMetaKey] = useState<string | null>(null);
  const t = useUiText('rspressChrome');

  useEffect(() => {
    setMetaKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl');
  }, []);

  return (
    <>
      <button
        type="button"
        className="rp-search-button"
        aria-label={t.searchPlaceholderText}
        onClick={() => setFocused(true)}
      >
        <span className="rp-search-button__content">
          <SvgWrapper icon={IconSearch} className="rp-search-button__icon" />
          <span className="rp-search-button__word">{t.searchPlaceholderText}</span>
        </span>
        <span
          className="rp-search-button__hotkey"
          style={{opacity: metaKey ? 1 : 0}}
          aria-hidden="true"
        >
          <span>{metaKey}</span>
          <span>K</span>
        </span>
      </button>
      <button
        type="button"
        className="rp-search-button--mobile"
        aria-label={t.searchPlaceholderText}
        onClick={() => setFocused(true)}
      >
        <SvgWrapper icon={IconSearch} />
      </button>
    </>
  );
}

/**
 * Rspress' local-search implementation owns indexing, keyboard navigation and
 * routing. Its text hook is tied to the build-time page locale, though, so a
 * small bridge keeps the native portal's visible strings in sync with the
 * project's live single-path language state.
 */
function LocalizedSearchPanel({
  focused,
  setFocused,
}: {
  focused: boolean;
  setFocused: SetFocused;
}) {
  const t = useUiText('rspressChrome');

  useEffect(() => {
    if (!focused) return undefined;

    const modalRoot = document.getElementById('__rspress_modal_container');
    if (!modalRoot) return undefined;

    const syncText = () => {
      const input = modalRoot.querySelector<HTMLInputElement>('.rp-search-panel__input');
      if (input) {
        input.placeholder = t.searchPlaceholderText;
        input.setAttribute('aria-label', t.searchPlaceholderText);
      }

      const cancel = modalRoot.querySelector<HTMLElement>('.rp-search-panel__cancel');
      if (cancel && cancel.textContent !== t.searchPanelCancelText) {
        cancel.textContent = t.searchPanelCancelText;
      }

      const noResults = modalRoot.querySelector<HTMLElement>('.rp-no-search-result__text');
      const leadingText = noResults?.firstChild;
      const expectedNoResults = `${t.searchNoResultsText} `;
      if (leadingText?.nodeType === Node.TEXT_NODE && leadingText.nodeValue !== expectedNoResults) {
        leadingText.nodeValue = expectedNoResults;
      }

      const suggestion = modalRoot.querySelector<HTMLElement>('.rp-no-search-result__suggestion');
      if (suggestion && suggestion.textContent !== t.searchSuggestedQueryText) {
        suggestion.textContent = t.searchSuggestedQueryText;
      }
    };

    syncText();
    const observer = new MutationObserver(syncText);
    observer.observe(modalRoot, {childList: true, subtree: true});
    return () => observer.disconnect();
  }, [focused, t]);

  return <RspressSearchPanel focused={focused} setFocused={setFocused} />;
}

export function LocalizedSearch() {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <LocalizedSearchButton setFocused={setFocused} />
      <NoSSR>
        <LocalizedSearchPanel focused={focused} setFocused={setFocused} />
      </NoSSR>
    </>
  );
}
