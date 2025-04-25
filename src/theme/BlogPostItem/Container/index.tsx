/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import type {Props} from '@theme/BlogPostItem/Container';
import styles from './styles.module.css';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function BlogPostItemContainer({
  children,
  className,
}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  return (
    <article 
      className={clsx(
        styles.blogPostContainer, 
        className,
        !isBlogPostPage && styles.blogPostCardView
      )}
    >
      {children}
    </article>
  );
}
