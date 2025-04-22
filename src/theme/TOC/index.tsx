/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode, useState, useEffect} from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';

import styles from './styles.module.css';

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({className, ...props}: Props): ReactNode {
  const [hasTocItems, setHasTocItems] = useState(true);
  
  // 检查是否有TOC项目
  useEffect(() => {
    setHasTocItems(
      props.toc && props.toc.length > 0
    );
  }, [props.toc]);
  
  if (!hasTocItems) {
    return null;
  }
  
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <div className={styles.tocTitle}>目录</div>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
