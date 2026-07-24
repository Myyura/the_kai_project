import React, {type ReactNode} from 'react';
import {SkipToContentLink} from '@docusaurus/theme-common';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

export default function SkipToContent(): ReactNode {
  const t = useUiText('framework');
  return (
    <SkipToContentLink className={styles.skipToContent}>
      {t.skipToContent}
    </SkipToContentLink>
  );
}
