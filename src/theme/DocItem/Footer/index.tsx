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
import {FaEdit} from 'react-icons/fa';
import shareStyles from '@site/src/components/ShareAsImage/styles.module.css';

const ProgressTracker = lazy(() => import('@site/src/components/ProgressTracker'));
const NoteEditor = lazy(() => import('@site/src/components/NoteEditor'));
const ShareAsImage = lazy(() => import('@site/src/components/ShareAsImage'));

export default function DocItemFooter(): ReactNode {
  const {metadata, frontMatter} = useDoc();
  const {tags, id, title, permalink} = metadata;
  const contributionUrl = `/me?tab=contribute&type=correction&docId=${encodeURIComponent(id)}&title=${encodeURIComponent(title)}`;
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
              <div className={shareStyles.docActionBar}>
                <ShareAsImage docId={id} title={title} compact />
                <Link className={shareStyles.triggerBtn} to={contributionUrl}>
                  <FaEdit className={shareStyles.triggerIcon} />
                  <span>纠错/补充</span>
                </Link>
              </div>
              <ProgressTracker
                docId={id}
                title={title}
                permalink={permalink}
                tags={tags.map((t) => t.label)}
              />
              <NoteEditor docId={id} />
            </Suspense>
          )}
        </BrowserOnly>
      </footer>
    </>
  );
}
