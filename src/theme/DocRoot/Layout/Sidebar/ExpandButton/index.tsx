import React, {type ReactNode} from 'react';
import IconArrow from '@theme/Icon/Arrow';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/DocRoot/Layout/Sidebar/ExpandButton';
import styles from './styles.module.css';

export default function DocRootLayoutSidebarExpandButton({
  toggleSidebar,
}: Props): ReactNode {
  const t = useUiText('framework');
  return (
    <button
      type="button"
      className={styles.expandButton}
      title={t.expandSidebar}
      aria-label={t.expandSidebar}
      onClick={toggleSidebar}>
      <IconArrow className={styles.expandButtonIcon} />
    </button>
  );
}
