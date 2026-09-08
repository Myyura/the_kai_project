import React from 'react';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

export default function BrowseEmptyState({message, onReset, resetLabel, focusTargetId, children}) {
  const t = useUiText('framework');
  const reset = () => {
    onReset();
    if (focusTargetId) {
      // Resetting a filter can unmount this button; move focus after React updates.
      window.requestAnimationFrame(() => document.getElementById(focusTargetId)?.focus());
    }
  };
  return (
    <div className={styles.empty}>
      <p role="status">{message}</p>
      {onReset && (
        <button type="button" className={styles.action} onClick={reset}>
          {resetLabel || t.clearSearch}
        </button>
      )}
      {children}
    </div>
  );
}
