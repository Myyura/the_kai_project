import React, {useCallback, useEffect} from 'react';

import NoIndex from '@site/src/components/NoIndex';
import {useUiText} from '@site/src/i18n/useUiText';
import Layout from './Layout';

function currentQuery() {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('q') || '';
}

export default function SearchPage() {
  const t = useUiText('searchPage');

  const openSearch = useCallback(() => {
    const trigger = document.querySelector(
      '.rp-search-button:not(.rp-search-button--mobile), .rp-search-button--mobile',
    );
    trigger?.click();

    const query = currentQuery();
    if (!query) return;
    let attempts = 0;
    const populate = () => {
      const input = document.querySelector('.rp-search-panel__input');
      if (!input && attempts++ < 20) {
        window.requestAnimationFrame(populate);
        return;
      }
      if (!(input instanceof HTMLInputElement)) return;
      const setter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value',
      )?.set;
      setter?.call(input, query);
      input.dispatchEvent(new Event('input', {bubbles: true}));
    };
    window.requestAnimationFrame(populate);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(openSearch, 0);
    return () => window.clearTimeout(timer);
  }, [openSearch]);

  return (
    <Layout title={t.title} description={t.subtitle}>
      <NoIndex />
      <main className="kai-search-page">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <button type="button" onClick={openSearch}>
          {t.inputLabel}
        </button>
      </main>
    </Layout>
  );
}
