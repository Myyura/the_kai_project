import React from 'react';
import {getLocalizedSupportValue} from '../../data/supportConfig';
import styles from './styles.module.css';

export default function PartnerLogo({partner, language, className = ''}) {
  const {logo} = partner;
  const label = getLocalizedSupportValue(logo.alt, language);

  return (
    <span className={`${styles.logo} ${className}`} role="img" aria-label={label}>
      <img
        className={logo.darkSrc ? styles.light : undefined}
        src={logo.src}
        alt=""
        loading="lazy"
      />
      {logo.darkSrc && (
        <img className={styles.dark} src={logo.darkSrc} alt="" loading="lazy" />
      )}
    </span>
  );
}
