import React, {useEffect} from 'react';
import Translate from '@docusaurus/Translate';
import {
  ErrorBoundaryError,
  ErrorBoundaryTryAgainButton,
} from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import {useUiText} from '@site/src/i18n/useUiText';

import {requestFreshAssetReload} from '@site/src/clientModules/freshAssetRecovery.mjs';
import {scheduleRouteRecoveryReady} from '@site/src/clientModules/routeRecoveryReady.mjs';
import styles from './styles.module.css';

const CHUNK_ERROR_PATTERN = /ChunkLoadError|Loading chunk \d+ failed|Failed to fetch dynamically imported module|Importing a module script failed/i;

function isChunkLoadError(error) {
  const recovery = typeof window === 'undefined' ? null : window.__kaiChunkRecovery;
  if (recovery?.isChunkLoadError) return recovery.isChunkLoadError(error);
  return CHUNK_ERROR_PATTERN.test([error?.name, error?.message].filter(Boolean).join(': '));
}

function reloadWithFreshAssets(force = false) {
  if (typeof window === 'undefined') return;
  requestFreshAssetReload(window, force);
}

export default function ErrorPageContent({error, tryAgain}) {
  const t = useUiText('framework');
  const chunkLoadFailed = isChunkLoadError(error);

  const tryAgainAfterRecoveryWindow = () => {
    tryAgain();
    scheduleRouteRecoveryReady(
      typeof window === 'undefined' ? null : window,
      typeof document === 'undefined' ? null : document,
    );
  };

  useEffect(() => {
    if (chunkLoadFailed) reloadWithFreshAssets(false);
  }, [chunkLoadFailed]);

  if (chunkLoadFailed) {
    return (
      <main className={styles.page} data-kai-error-page="">
        <section className={styles.card} aria-live="polite">
          <span className={styles.eyebrow}>Kai Project</span>
          <Heading as="h1" className={styles.title}>{t.updateTitle}</Heading>
          <p className={styles.description}>{t.updateDescription}</p>
          <button
            type="button"
            className="button button--primary button--lg"
            onClick={() => reloadWithFreshAssets(true)}
          >
            {t.updateAction}
          </button>
          <p className={styles.hint}>{t.updateHint}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="container margin-vert--xl" data-kai-error-page="">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.ErrorPageContent.title"
              description="The title of the fallback page when the page crashed"
            >
              This page crashed.
            </Translate>
          </Heading>
          <div className="margin-vert--lg">
            <ErrorBoundaryTryAgainButton
              onClick={tryAgainAfterRecoveryWindow}
              className="button button--primary shadow--lw"
            />
          </div>
          <hr />
          <div className="margin-vert--md">
            <ErrorBoundaryError error={error} />
          </div>
        </div>
      </div>
    </main>
  );
}
