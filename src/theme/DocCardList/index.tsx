/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ComponentProps, type ReactNode} from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';
import type {Props} from '@theme/DocCardList';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';
import styles from './styles.module.css';

function getYearCategory(item: PropSidebarItem): number | null {
  if (item.type !== 'category') {
    return null;
  }

  const match = item.label.match(/^(\d{4})年度$/);
  return match ? Number(match[1]) : null;
}

function sortYearCategoriesDesc(items: PropSidebarItem[]): PropSidebarItem[] {
  const yearCategories = items
    .filter((item) => getYearCategory(item) !== null)
    .sort((a, b) => getYearCategory(b)! - getYearCategory(a)!);

  let yearIndex = 0;
  return items.map((item) =>
    getYearCategory(item) === null ? item : yearCategories[yearIndex++],
  );
}

function DocCardListForCurrentSidebarCategory({className}: Props) {
  const items = useCurrentSidebarSiblings();
  return <DocCardList items={items} className={className} />;
}

function DocCardListItem({
  item,
}: {
  item: ComponentProps<typeof DocCard>['item'];
}) {
  return (
    <article className={clsx(styles.docCardListItem, 'col col--6')}>
      <DocCard item={item} />
    </article>
  );
}

export default function DocCardList(props: Props): ReactNode {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = sortYearCategoriesDesc(filterDocCardListItems(items));
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map((item, index) => (
        <DocCardListItem key={index} item={item} />
      ))}
    </section>
  );
}
