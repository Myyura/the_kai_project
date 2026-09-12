import React, {useRef} from 'react';
import {FiSearch, FiX} from 'react-icons/fi';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

/** Shared keyword filter for browse lists. */
export default function BrowseSearchField({
  value,
  onChange,
  label,
  placeholder = label,
  className = '',
  resultsId,
  ...inputProps
}) {
  const t = useUiText('framework');
  const inputRef = useRef(null);
  const clear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className={`${styles.field} ${className}`}>
      <FiSearch className={styles.icon} aria-hidden="true" />
      <input
        {...inputProps}
        ref={inputRef}
        type="search"
        value={value}
        aria-label={label}
        aria-controls={resultsId}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && !event.nativeEvent.isComposing && value) {
            event.preventDefault();
            clear();
          }
        }}
      />
      {value && (
        <button type="button" className={styles.clear} onClick={clear} aria-label={t.clearSearch} title={t.clearSearch}>
          <FiX aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
