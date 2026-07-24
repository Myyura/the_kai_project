import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/DocPaginator';

export default function DocPaginator({
  className,
  previous,
  next,
}: Props): ReactNode {
  const t = useUiText('framework');
  return (
    <nav
      className={clsx(className, 'pagination-nav')}
      aria-label={t.docsPagination}>
      {previous && <PaginatorNavLink {...previous} subLabel={t.previous} />}
      {next && <PaginatorNavLink {...next} subLabel={t.next} isNext />}
    </nav>
  );
}
