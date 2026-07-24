import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import IconArrow from '@theme/Icon/Arrow';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/DocSidebar/Desktop/CollapseButton';
import styles from './styles.module.css';

export default function CollapseButton({onClick}: Props): ReactNode {
  const t = useUiText('framework');
  return (
    <button
      type="button"
      title={t.collapseSidebar}
      aria-label={t.collapseSidebar}
      className={clsx(
        'button button--secondary button--outline',
        styles.collapseSidebarButton,
      )}
      onClick={onClick}>
      <IconArrow className={styles.collapseSidebarButtonIcon} />
    </button>
  );
}
