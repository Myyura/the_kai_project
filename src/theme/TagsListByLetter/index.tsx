/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import {listTagsByLetters, type TagLetterEntry} from '@docusaurus/theme-common';
import Tag from '@theme/Tag';
import type {Props} from '@theme/TagsListByLetter';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function TagLetterEntryItem({letterEntry}: {letterEntry: TagLetterEntry}) {
  return (
    <article className={styles.letterSection}>
      <Heading as="h3" id={letterEntry.letter} className={styles.letterHeading}>
        {letterEntry.letter}
      </Heading>
      <ul className={styles.tagList}>
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </article>
  );
}

interface TagType {
  label: string;
  permalink: string;
  count: number;
  description?: string;
}

function TagSection({
  title,
  icon,
  tags,
  className,
}: {
  title: string;
  icon: string;
  tags: readonly TagType[];
  className?: string;
}) {
  const letterList = listTagsByLetters(tags);
  
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.sectionCard} ${className || ''}`}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon}>{icon}</span>
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
        <span className={styles.tagCount}>{tags.length} tags</span>
      </div>
      <div className={styles.sectionContent}>
        {letterList.map((letterEntry) => (
          <TagLetterEntryItem
            key={letterEntry.letter}
            letterEntry={letterEntry}
          />
        ))}
      </div>
    </div>
  );
}

export default function TagsListByLetter({tags}: Props): ReactNode {
  // 分离 University tags 和其他 tags
  const universityTags = tags.filter((tag) => 
    tag.label.endsWith('University')
  );
  const otherTags = tags.filter((tag) => 
    !tag.label.endsWith('University')
  );

  return (
    <section className={styles.tagsContainer}>
      <TagSection
        title="Universities"
        icon="🏛️"
        tags={universityTags}
        className={styles.universitySection}
      />
      <TagSection
        title="Topics"
        icon="📚"
        tags={otherTags}
        className={styles.topicsSection}
      />
    </section>
  );
}
