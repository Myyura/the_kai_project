/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/Tag';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {getTagLabel, getTagDescription, resolveTagBrowseTarget} from '@site/src/utils/tags';

import styles from './styles.module.css';

export default function Tag({
  permalink,
  label,
  count,
  description,
}: Props): ReactNode {
  const language = useCurrentLanguage();
  const browseTarget = resolveTagBrowseTarget(label, permalink);
  return (
    <Link
      rel="tag"
      href={browseTarget.href}
      title={browseTarget.kind === 'unknown' ? description : getTagDescription(label, language)}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular,
      )}>
      {browseTarget.kind === 'unknown' ? label : getTagLabel(label, language)}
      {count && <span>{count}</span>}
    </Link>
  );
}
