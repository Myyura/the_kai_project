import React, {type ReactNode} from 'react';
import BlogSidebarOriginal from '@theme-original/BlogSidebar';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/BlogSidebar';

export default function BlogSidebar(props: Props): ReactNode {
  const t = useUiText('blogPage');
  const sidebar = props.sidebar
    ? {...props.sidebar, title: t.sidebarTitle}
    : props.sidebar;
  return <BlogSidebarOriginal {...props} sidebar={sidebar} />;
}
