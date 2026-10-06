/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useCurrentSidebarCategory} from '@docusaurus/plugin-content-docs/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocCardList from '@theme/DocCardList';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Heading from '@theme/Heading';
import AdmissionTrendCard from '@site/src/components/AdmissionTrendCard';
import SchoolRank from '@site/src/components/SchoolRank';
import SchoolDepartmentCards from '@site/src/components/SchoolDepartmentCards';
import {universities} from '@site/src/data/universities';
import type {Props} from '@theme/DocCategoryGeneratedIndexPage';

import styles from './styles.module.css';

function DocCategoryGeneratedIndexPageMetadata({
  categoryGeneratedIndex,
}: Props): ReactNode {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}

function DocCategoryGeneratedIndexPageContent({
  categoryGeneratedIndex,
}: Props): ReactNode {
  const category = useCurrentSidebarCategory();
  // Match the school root exactly; graduate-school and year pages share this template.
  const university = universities.find(
    (school) => school.archiveUrl === categoryGeneratedIndex.permalink,
  );
  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <header>
        <Heading as="h1" className={styles.title}>
          {categoryGeneratedIndex.title}
        </Heading>
        {categoryGeneratedIndex.description && (
          <p>{categoryGeneratedIndex.description}</p>
        )}
      </header>
      {university && <SchoolRank key={university.id} university={university} />}
      <AdmissionTrendCard
        key={categoryGeneratedIndex.slug}
        slug={categoryGeneratedIndex.slug}
      />
      <article className="margin-top--lg">
        {university ? (
          <SchoolDepartmentCards university={university} items={category.items} />
        ) : (
          <DocCardList items={category.items} />
        )}
      </article>
      <footer className="margin-top--md">
        <DocPaginator
          previous={categoryGeneratedIndex.navigation.previous}
          next={categoryGeneratedIndex.navigation.next}
        />
      </footer>
    </div>
  );
}

export default function DocCategoryGeneratedIndexPage(props: Props): ReactNode {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
