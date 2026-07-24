import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IconHome from '@theme/Icon/Home';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

export default function HomeBreadcrumbItem(): ReactNode {
  const homeHref = useBaseUrl('/');
  const t = useUiText('framework');
  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={t.homePage}
        className="breadcrumbs__link"
        href={homeHref}>
        <IconHome className={styles.breadcrumbHomeIcon} />
      </Link>
    </li>
  );
}
