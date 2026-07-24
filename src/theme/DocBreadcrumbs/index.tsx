import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

function BreadcrumbLink({
  children,
  href,
  isLast,
}: {
  children: ReactNode;
  href: string | undefined;
  isLast: boolean;
}): ReactNode {
  if (isLast || !href) {
    return <span className="breadcrumbs__link">{children}</span>;
  }
  return (
    <Link className="breadcrumbs__link" href={href}>
      <span>{children}</span>
    </Link>
  );
}

export default function DocBreadcrumbs(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  const t = useUiText('framework');

  if (!breadcrumbs) return null;

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      <nav
        className={clsx(
          ThemeClassNames.docs.docBreadcrumbs,
          styles.breadcrumbsContainer,
        )}
        aria-label={t.breadcrumbs}>
        <ul className="breadcrumbs">
          {homePageRoute && <HomeBreadcrumbItem />}
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const href =
              item.type === 'category' && item.linkUnlisted
                ? undefined
                : item.href;
            return (
              <li
                key={`${item.label}-${index}`}
                className={clsx(
                  'breadcrumbs__item',
                  isLast && 'breadcrumbs__item--active',
                )}>
                <BreadcrumbLink href={href} isLast={isLast}>
                  {item.label}
                </BreadcrumbLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
