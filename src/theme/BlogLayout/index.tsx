/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

import type {Props} from '@theme/BlogLayout';
import './styles.css'; // 引入自定义样式

export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--xl blog-container">
        <div className="row blog-layout-row">
          {hasSidebar && (
            <aside className="col col--3 blog-sidebar-wrapper">
              <div className="blog-sidebar-container">
                <BlogSidebar sidebar={sidebar} />
              </div>
            </aside>
          )}
          <main
            className={clsx('col blog-main-content', {
              'col--7': hasSidebar && toc,
              'col--9': hasSidebar && !toc,
              'col--8 col--offset-2': !hasSidebar && !toc,
              'col--7 col--offset-1': !hasSidebar && toc,
            })}>
            <div className="blog-content-wrapper">
              {children}
            </div>
          </main>
          {toc && (
            <div className="col col--2 blog-toc-wrapper">
              <div className="blog-toc-container">
                {toc}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}