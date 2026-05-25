/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ComponentProps, type ReactNode} from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXComponents, {type MDXComponentsObject} from '@theme/MDXComponents';
import TagsListInline from '@theme/TagsListInline';
import type {Props} from '@theme/DocItem/Content';

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle(): string | null {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

function DocItemTags(): ReactNode {
  const {metadata} = useDoc();

  if (metadata.tags.length === 0) {
    return null;
  }

  return (
    <div className="margin-bottom--lg">
      <TagsListInline tags={metadata.tags} />
    </div>
  );
}

function DocTitleHeader(props: ComponentProps<'header'>): ReactNode {
  return (
    <header {...props}>
      {props.children}
      <DocItemTags />
    </header>
  );
}

const DocMDXComponents: MDXComponentsObject = {
  ...MDXComponents,
  header: (props: ComponentProps<'header'>) => <DocTitleHeader {...props} />,
};

export default function DocItemContent({children}: Props): ReactNode {
  const syntheticTitle = useSyntheticTitle();
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <>
          <header>
            <Heading as="h1">{syntheticTitle}</Heading>
          </header>
          <DocItemTags />
        </>
      )}
      <MDXProvider components={DocMDXComponents}>{children}</MDXProvider>
    </div>
  );
}
