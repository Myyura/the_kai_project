/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/DocTagDocListPage';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
          description:
            'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One doc tagged|{count} docs tagged',
        },
        {count},
      ),
    );
}

function usePageTitle(props: Props): string {
  const nDocsTaggedPlural = useNDocsTaggedPlural();
  return translate(
    {
      id: 'theme.docs.tagDocListPageTitle',
      description: 'The title of the page for a docs tag',
      message: '{nDocsTagged} with "{tagName}"',
    },
    {nDocsTagged: nDocsTaggedPlural(props.tag.count), tagName: props.tag.label},
  );
}

function DocItem({doc}: {doc: Props['tag']['items'][number]}): ReactNode {
  return (
    <Link to={doc.permalink} className={styles.docItem}>
      <span className={styles.docItemTitle}>{doc.title}</span>
    </Link>
  );
}

function DocTagDocListPageMetadata({
  title,
  tag,
}: Props & {title: string}): ReactNode {
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="doc_tag_doc_list" />
    </>
  );
}

function DocTagDocListPageContent({
  tag,
  title,
}: Props & {title: string}): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagDocListPage)}>
      <div className={clsx('container', styles.pageContainer)}>
        <div className="row">
          <main className="col col--10 col--offset-1">
            {tag.unlisted && <Unlisted />}
            <header className={styles.pageHeader}>
              <Heading as="h1" className={styles.pageTitle}>{tag.label}</Heading>
              {tag.description && <p className={styles.pageDescription}>{tag.description}</p>}
              <div className={styles.headerActions}>
                <span className={styles.tagCount}>{tag.count} 件のドキュメント</span>
                <Link href={tag.allTagsPath} className={styles.allTagsLink}>
                  <Translate
                    id="theme.tags.tagsPageLink"
                    description="The label of the link targeting the tag list page">
                    View all tags
                  </Translate>
                  →
                </Link>
              </div>
            </header>
            <section className={styles.docList}>
              {tag.items.map((doc) => (
                <DocItem key={doc.id} doc={doc} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function DocTagDocListPage(props: Props): ReactNode {
  const title = usePageTitle(props);
  return (
    <>
      <DocTagDocListPageMetadata {...props} title={title} />
      <DocTagDocListPageContent {...props} title={title} />
    </>
  );
}
