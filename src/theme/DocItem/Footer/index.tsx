/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode, lazy, Suspense} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import EditMetaRow from '@theme/EditMetaRow';
import BrowserOnly from '@docusaurus/BrowserOnly';

const ProgressTracker = lazy(() => import('@site/src/components/ProgressTracker'));
const NoteEditor = lazy(() => import('@site/src/components/NoteEditor'));
const ShareAsImage = lazy(() => import('@site/src/components/ShareAsImage'));

export default function DocItemFooter(): ReactNode {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags, id, title, permalink} = metadata;

  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayEditMetaRow && (
        <EditMetaRow
          className={clsx(
            'margin-top--sm',
            ThemeClassNames.docs.docFooterEditMetaRow,
          )}
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
        />
      )}
      <BrowserOnly>
        {() => (
          <Suspense fallback={null}>
            <ShareAsImage docId={id} title={title} />
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
  );
}
