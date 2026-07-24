import React, {useCallback, useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {FaArrowRight, FaSearch} from 'react-icons/fa';
import NoIndex from '@site/src/components/NoIndex';
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
  const [searchResults, setSearchResults] = useState();
  const [searchWorkerReady, setSearchWorkerReady] = useState(false);
  const versionUrl = `${baseUrl}${searchVersion}`;
  const pageTitle = useMemo(
    () => searchQuery ? t.resultsTitle(searchQuery) : t.title,
    [searchQuery, t],
  );

  useEffect(() => {
    updateSearchPath(searchQuery);
    if (!searchQuery) {
      setSearchResults(undefined);
      return;
    }

    let active = true;
    searchByWorker(versionUrl, searchContext, searchQuery, 100)
      .then((results) => {
        if (active) setSearchResults(results);
      });
    return () => {
      active = false;
    };
  }, [searchQuery, versionUrl, searchContext]);

  useEffect(() => {
    if (searchValue && searchValue !== searchQuery) {
      setSearchQuery(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    let active = true;
    fetchIndexesByWorker(versionUrl, searchContext).then(() => {
      if (active) setSearchWorkerReady(true);
    });
    return () => {
      active = false;
    };
  }, [searchContext, versionUrl]);

  const handleSearchInputChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

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
          <label className={styles.searchField}>
            <FaSearch aria-hidden="true" />
            <span className="sr-only">{t.inputLabel}</span>
            <input
              type="search"
              name="q"
              aria-label={t.inputLabel}
              placeholder={t.placeholder}
              onChange={handleSearchInputChange}
              value={searchQuery}
              autoComplete="off"
              autoFocus
            />
          </label>
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

        {!searchQuery && (
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

        {!searchWorkerReady && searchQuery && (
          <p className={styles.status} role="status">{t.loading}</p>
        )}

        {searchResults && (
          <section className={styles.results} aria-live="polite">
            {searchResults.length > 0 ? (
              <>
                <p className={styles.resultCount}>{t.resultCount(searchResults.length)}</p>
                {searchResults.map((item) => (
                  <SearchResultItem key={item.document.i} searchResult={item} />
                ))}
              </>
            ) : (
              <p className={styles.emptyState}>{t.noResults}</p>
            )}
          </section>
        )}
      </main>
    </Layout>
  );
}
