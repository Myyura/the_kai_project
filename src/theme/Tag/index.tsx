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
import tagTaxonomy from '@site/src/data/tagTaxonomy.json';

import styles from './styles.module.css';

interface TopicMeta {
  subsubject?: string;
}

interface SubsubjectMeta {
  subject?: string;
}

const topics = tagTaxonomy.topics as Record<string, TopicMeta>;
const subsubjects = tagTaxonomy.subsubjects as Record<string, SubsubjectMeta>;

function getSubsubjectShortId(subsubjectId: string): string {
  const subjectId = subsubjects[subsubjectId]?.subject;
  const prefix = subjectId ? `${subjectId}.` : '';
  return prefix && subsubjectId.startsWith(prefix)
    ? subsubjectId.slice(prefix.length)
    : subsubjectId;
}

function getTopicShortId(topicId: string): string {
  const subsubjectId = topics[topicId]?.subsubject;
  const prefix = subsubjectId ? `${subsubjectId}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId.split('.').pop() || topicId;
}

function getDisplayLabel(label: string): string {
  if (topics[label]) return getTopicShortId(label);
  if (subsubjects[label]) return getSubsubjectShortId(label);
  return label;
}

export default function Tag({
  permalink,
  label,
  count,
  description,
}: Props): ReactNode {
  return (
    <Link
      rel="tag"
      href={permalink}
      title={description}
      className={clsx(
        styles.tag,
      count ? styles.tagWithCount : styles.tagRegular,
      )}>
      {getDisplayLabel(label)}
      {count && <span>{count}</span>}
    </Link>
  );
}
