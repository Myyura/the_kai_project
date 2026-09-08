import React, {useCallback, useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {FaArrowRight} from 'react-icons/fa';
import NoIndex from '@site/src/components/NoIndex';
import BrowseSearchField from '@site/src/components/BrowseSearchField';
import BrowseEmptyState from '@site/src/components/BrowseEmptyState';
import {useUiText} from '@site/src/i18n/useUiText';
import useSearchQuery from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery';
import {
  fetchIndexesByWorker,
  searchByWorker,
} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker';
import {SearchDocumentType} from '@easyops-cn/docusaurus-search-local/dist/client/shared/interfaces';
import {highlight} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight';
import {highlightStemmed} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed';
import {getStemmedPositions} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions';
import {concatDocumentPath} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath';
import {
  Mark,
  searchContextByPaths,
  useAllContextsWithNoSearchContext,
} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated';
import {normalizeContextByPath} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/normalizeContextByPath';
import styles from './styles.module.css';

function SearchResultItem({
  searchResult: {document, type, page, tokens, metadata},
}) {
  const isTitle = type === SearchDocumentType.Title;
  const isKeywords = type === SearchDocumentType.Keywords;
  const isDescription = type === SearchDocumentType.Description;
  const isDescriptionOrKeywords = isDescription || isKeywords;
  const isContent = type === SearchDocumentType.Content;
  const pathItems = (isTitle ? document.b : page.b).slice();
  const articleTitle = isContent || isDescriptionOrKeywords
    ? document.s
    : document.t;

  if (!isTitle && !isDescriptionOrKeywords) {
    pathItems.push(page.t);
  }

  let search = '';
  if (Mark && tokens.length > 0) {
    const params = new URLSearchParams();
    tokens.forEach((token) => params.append('_highlight', token));
    search = `?${params.toString()}`;
  }

  return (
    <article className={styles.resultCard}>
      <h2>
        <Link
          to={document.u + search + (document.h || '')}
          dangerouslySetInnerHTML={{
            __html: isContent || isDescriptionOrKeywords
              ? highlight(articleTitle, tokens)
              : highlightStemmed(
                articleTitle,
                getStemmedPositions(metadata, 't'),
                tokens,
                100,
              ),
          }}
        />
      </h2>
      {pathItems.length > 0 && (
        <p className={styles.resultPath}>{concatDocumentPath(pathItems)}</p>
      )}
      {(isContent || isDescription) && (
        <p
          className={styles.resultSummary}
          dangerouslySetInnerHTML={{
            __html: highlightStemmed(
              document.t,
              getStemmedPositions(metadata, 't'),
              tokens,
              100,
            ),
          }}
        />
      )}
    </article>
  );
}

export default function SearchPage() {
  const t = useUiText('searchPage');
  const {
    siteConfig: {baseUrl},
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const {
    searchValue,
    searchContext,
    searchVersion,
    updateSearchPath,
    updateSearchContext,
  } = useSearchQuery();
  const [searchQuery, setSearchQuery] = useState(searchValue);
  const [resultState, setResultState] = useState(null);
  const versionUrl = `${baseUrl}${searchVersion}`;
  const query = searchQuery.trim();
  const currentResult = resultState?.query === query
    && resultState.context === searchContext
    && resultState.versionUrl === versionUrl
    ? resultState
    : null;
  const searchResults = currentResult?.results;
  const isSearching = Boolean(query && (!currentResult || ['loading', 'searching'].includes(currentResult.status)));
  const pageTitle = useMemo(
    () => query ? t.resultsTitle(query) : t.title,
    [query, t],
  );

  useEffect(() => {
    if (!query) {
      setResultState(null);
      return;
    }

    let active = true;
    const state = {query, context: searchContext, versionUrl};
    setResultState({...state, status: 'loading'});
    // Avoid queueing a worker request for every keystroke or IME update.
    const timer = window.setTimeout(async () => {
      try {
        await fetchIndexesByWorker(versionUrl, searchContext);
        if (!active) return;
        setResultState({...state, status: 'searching'});
        const results = await searchByWorker(versionUrl, searchContext, query, 100);
        if (active) setResultState({...state, status: 'ready', results});
      } catch {
        if (active) setResultState({...state, status: 'error'});
      }
    }, 180);
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [query, versionUrl, searchContext]);

  useEffect(() => {
    setSearchQuery(searchValue);
  }, [searchValue]);

  const handleSearchInputChange = useCallback((value) => {
    setSearchQuery(value);
    updateSearchPath(value);
  }, [updateSearchPath]);

  return (
    <Layout title={pageTitle}>
      <NoIndex />
      <Head>
        <meta property="robots" content="noindex, follow" />
      </Head>
      <main className={styles.page}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>Kai Search</span>
          <h1>{pageTitle}</h1>
          <p>{t.subtitle}</p>
        </header>

        <div className={styles.searchRow}>
          <BrowseSearchField
            id="site-search-input"
            className={styles.searchField}
            name="q"
            label={t.inputLabel}
            placeholder={t.placeholder}
            onChange={handleSearchInputChange}
            value={searchQuery}
            resultsId="search-results"
            autoComplete="off"
            autoFocus
          />
          {Array.isArray(searchContextByPaths) && (
            <select
              name="search-context"
              className={styles.contextSelect}
              value={searchContext}
              aria-label={t.everywhere}
              onChange={(event) => updateSearchContext(event.target.value)}>
              {useAllContextsWithNoSearchContext && (
                <option value="">{t.everywhere}</option>
              )}
              {searchContextByPaths.map((context) => {
                const {label, path} = normalizeContextByPath(context, currentLocale);
                return <option key={path} value={path}>{label}</option>;
              })}
            </select>
          )}
        </div>

        <section id="search-results" className={styles.results} aria-busy={isSearching}>
          {isSearching && (
            <p className={styles.status} role="status">
              {currentResult?.status === 'searching' ? t.searching : t.loading}
            </p>
          )}
          {currentResult?.status === 'error' && (
            <BrowseEmptyState
              message={t.failed}
              resetLabel={t.retry}
              // The search worker caches rejected index promises; reload resets it.
              onReset={() => window.location.reload()}
            />
          )}
          {searchResults && (searchResults.length > 0 ? (
              <>
                <p className={styles.resultCount} role="status">{t.resultCount(searchResults.length)}</p>
                {searchResults.map((item) => (
                  <SearchResultItem key={item.document.i} searchResult={item} />
                ))}
              </>
            ) : (
              <BrowseEmptyState
                message={t.noResults}
                onReset={() => handleSearchInputChange('')}
                focusTargetId="site-search-input"
              />
            ))}
        </section>
        {(!query || currentResult?.status === 'error' || searchResults?.length === 0) && (
          <section className={styles.suggestions} aria-labelledby="search-suggestions-title">
            <h2 id="search-suggestions-title">{t.suggestionsTitle}</h2>
            <div className={styles.suggestionGrid}>
              {t.suggestions.map((suggestion) => (
                <Link key={suggestion.to} to={suggestion.to} className={styles.suggestionCard}>
                  <span>{suggestion.label}</span>
                  <FaArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
    </Layout>
  );
}
