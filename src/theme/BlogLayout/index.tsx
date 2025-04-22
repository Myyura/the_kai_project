/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import { useColorMode } from '@docusaurus/theme-common';

import type {Props} from '@theme/BlogLayout';
import styles from './styles.module.css'; // 我们需要创建这个样式文件

export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const { colorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 添加滚动监听，用于实现滚动时的效果
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout {...layoutProps}>
      <div 
        className={clsx(
          'container margin-vert--lg',
          styles.blogContainer,
          {
            [styles.blogContainerScrolled]: isScrolled,
            [styles.blogContainerDark]: colorMode === 'dark'
          }
        )}
      >
        <div className={clsx('row', styles.blogRow)}>
          {hasSidebar && (
            <div className={clsx('col col--3', styles.sidebarContainer)}>
              <div className={styles.sidebarInner}>
                <BlogSidebar sidebar={sidebar} />
              </div>
            </div>
          )}
          <main
            className={clsx('col', styles.blogMainContent, {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}>
            <div className={styles.blogContentCard}>
              {children}
            </div>
          </main>
          {toc && (
            <div className={clsx('col col--2', styles.tocContainer)}>
              <div className={styles.tocInner}>
                {toc}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}