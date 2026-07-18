/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {FaListUl} from 'react-icons/fa';
import TOCItems from '@theme/TOCItems';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/TOC';

import styles from './styles.module.css';

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({className, ...props}: Props): ReactNode {
  const t = useUiText('annotations');
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <div className={styles.tocTitle}>
        <FaListUl aria-hidden="true" />
        <strong>{t.contentsTitle}</strong>
      </div>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
