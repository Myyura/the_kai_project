/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode, lazy, Suspense} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {FaEdit, FaGraduationCap} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import shareStyles from '@site/src/components/ShareAsImage/styles.module.css';
import styles from './styles.module.css';
import {FooterAnnotationSection} from '@site/src/components/DocumentAnnotations';

const ProgressTracker = lazy(() => import('@site/src/components/ProgressTracker'));
const DifficultyRating = lazy(() => import('@site/src/components/DifficultyRating'));
const NoteEditor = lazy(() => import('@site/src/components/NoteEditor'));
const ShareAsImage = lazy(() => import('@site/src/components/ShareAsImage'));
const AddToProblemSet = lazy(() => import('@site/src/components/AddToProblemSet'));
const ProblemSetNavigator = lazy(() => import('@site/src/components/ProblemSetNavigator'));

export default function DocItemFooter(): ReactNode {
  const {metadata, frontMatter} = useDoc();
  const {tags, id, title, permalink} = metadata;
  const source = typeof metadata.source === 'string' ? metadata.source.replace(/^@site\//, '') : '';
  const canCorrectSource = /\.mdx?$/i.test(source);
  const learningPanelText = useUiText('learningPanel');
  const contributionUrl = `/me?tab=contribute&type=correction&docId=${encodeURIComponent(id)}&title=${encodeURIComponent(title)}&sourcePath=${encodeURIComponent(source)}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title || frontMatter.title || '文档页面',
    author: {
      '@type': 'Organization',
      name: 'The Kai Project Team',
      url: 'https://runjp.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Kai Project',
      logo: {
        '@type': 'ImageObject',
        url: 'https://runjp.com/img/logo-512.png',
      },
    },
    description:
      frontMatter.description ||
      metadata.description ||
      'The Kai Project 文档',
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <footer
        className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
        <BrowserOnly>
          {() => (
            <Suspense fallback={null}>
              <ProblemSetNavigator docId={id} />
              <DifficultyRating docId={id} />
              <section className={styles.learningPanel} aria-labelledby="doc-learning-panel-title">
                <header className={styles.learningPanelHeader}>
                  <div className={styles.learningPanelHeading}>
                    <FaGraduationCap aria-hidden="true" />
                    <div>
                      <h2 id="doc-learning-panel-title">{learningPanelText.title}</h2>
                      <p>{learningPanelText.hint}</p>
                    </div>
                  </div>
                  <AddToProblemSet docId={id} variant="panel" />
                </header>
                <ProgressTracker
                  docId={id}
                  title={title}
                  permalink={permalink}
                  tags={tags.map((t) => t.label)}
                  embedded
                />
                <NoteEditor docId={id} embedded />
                <FooterAnnotationSection />
              </section>
              <div className={shareStyles.docActionBar}>
                <ShareAsImage docId={id} title={title} compact />
                {canCorrectSource && (
                  <Link className={shareStyles.triggerBtn} to={contributionUrl}>
                    <FaEdit className={shareStyles.triggerIcon} />
                    <span>{learningPanelText.correctionAction}</span>
                  </Link>
                )}
              </div>
            </Suspense>
          )}
        </BrowserOnly>
      </footer>
    </>
  );
}
