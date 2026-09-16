import React, {useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import {FiArrowLeft, FiCheck, FiExternalLink} from 'react-icons/fi';
import styles from './styles.module.css';

export default function SubmissionSuccess({title, kind, issueUrl, t}) {
  const headingRef = useRef(null);
  useEffect(() => { headingRef.current?.focus(); }, []);

  return <section className={styles.successPanel} aria-labelledby="experience-success-title">
    <div className={styles.successHeading}>
      <span className={styles.successIcon} aria-hidden="true"><FiCheck /></span>
      <div>
        <h2 id="experience-success-title" ref={headingRef} tabIndex={-1}>{t.success}</h2>
        <p>{t.successHint}</p>
      </div>
    </div>
    <div className={styles.submissionSummary}>
      <div className={styles.submissionMeta}><span>{t[kind]}</span><span className={styles.pendingBadge}>{t.pendingReview}</span></div>
      <h3>{title}</h3>
    </div>
    <div className={styles.successActions}>
      <div className={styles.successButtons}>
        <Link className={styles.primaryButton} to="/me?tab=contribute">{t.records}</Link>
        <a className={styles.secondaryButton} href={issueUrl} target="_blank" rel="noreferrer">{t.viewIssue}<FiExternalLink aria-hidden="true" /></a>
      </div>
      <Link className={styles.backLink} to="/blog"><FiArrowLeft aria-hidden="true" />{t.back}</Link>
    </div>
  </section>;
}
