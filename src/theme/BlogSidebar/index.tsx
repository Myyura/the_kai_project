import React, {type ReactNode} from 'react';
import BlogSidebarOriginal from '@theme-original/BlogSidebar';
import Link from '@docusaurus/Link';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/BlogSidebar';
import styles from './styles.module.css';

export default function BlogSidebar(props: Props): ReactNode {
  const t = useUiText('blogPage');
  const sidebar = props.sidebar
    ? {...props.sidebar, title: t.sidebarTitle}
    : props.sidebar;
  return <>
    <Link to="/blog" className={styles.backLink}>{t.backToCatalog}</Link>
    <BlogSidebarOriginal {...props} sidebar={sidebar} />
  </>;
}
