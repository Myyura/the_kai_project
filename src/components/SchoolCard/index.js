import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function SchoolCard({ name, url, description }) {
  return (
    <div className={styles.schoolCard}>
      <Link to={url} className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h3 className={styles.schoolName}>{name}</h3>
          <p className={styles.schoolDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}
