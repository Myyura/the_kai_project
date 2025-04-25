/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/BlogPostItem/Footer/ReadMoreLink';
import styles from './styles.module.css';

function ReadMoreLabel() {
  return (
    <span className={styles.readMoreLabel}>
      <Translate
        id="theme.blog.post.readMore"
        description="The label used in blog post item excerpts to link to full blog posts">
        Read more
      </Translate>
      <svg className={styles.readMoreIcon} viewBox="0 0 24 24" width="1em" height="1em">
        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </svg>
    </span>
  );
}

export default function BlogPostItemFooterReadMoreLink(
  props: Props,
): ReactNode {
  const {blogPostTitle, ...linkProps} = props;
  return (
    <Link
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description:
            'The ARIA label for the link to full blog posts from excerpts',
        },
        {title: blogPostTitle},
      )}
      className={styles.readMoreLink}
      {...linkProps}>
      <ReadMoreLabel />
    </Link>
  );
}
