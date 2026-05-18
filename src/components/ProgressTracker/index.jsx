import React from 'react';
import { FaCheckCircle, FaRedo, FaTimes, FaSyncAlt } from 'react-icons/fa';
import { useDocProgress, STATUS, getReviewInfo } from '@site/src/hooks/useProgress';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

const BUTTONS = [
  { key: STATUS.COMPLETED, Icon: FaCheckCircle },
  { key: STATUS.REVIEWING, Icon: FaRedo },
];

export default function ProgressTracker({ docId, title, permalink, tags }) {
  const [status, setStatus, refreshReview, updatedAt, reviewCount] = useDocProgress(docId, title, permalink, tags);
  const [justRefreshed, setJustRefreshed] = React.useState(false);
  const t = useUiText('progressTracker');

  const handleClick = (newStatus) => {
    setStatus(newStatus === status ? STATUS.NOT_STARTED : newStatus);
  };

  const handleRefresh = () => {
    refreshReview();
    setJustRefreshed(true);
    setTimeout(() => setJustRefreshed(false), 2000);
  };

  return (
    <div className={styles.tracker}>
      <div className={styles.trackerHeader}>
        <span className={styles.trackerLabel}>{t.heading}</span>
        <span className={`${styles.statusBadge} ${styles[`badge_${status}`]}`}>
          {t[status]}
        </span>
      </div>
      <div className={styles.trackerButtons}>
        {BUTTONS.map(({ key, Icon }) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className={`${styles.btn} ${status === key ? styles[`btn_${key}_active`] : styles.btnDefault}`}
            title={t[key]}
          >
            <Icon className={styles.btnIcon} />
            <span className={styles.btnText}>{t[key]}</span>
          </button>
        ))}
        {status === STATUS.REVIEWING && (() => {
          const info = getReviewInfo(updatedAt, reviewCount);
          const isLastRound = info && (reviewCount + 1 >= info.totalRounds);
          return (
            <button
              onClick={handleRefresh}
              className={`${styles.btn} ${justRefreshed ? styles.btnRefreshed : isLastRound ? styles.btnFinal : styles.btnRefresh}`}
              title={isLastRound ? t.reviewedFinalTitle : t.reviewedTitle}
            >
              <FaSyncAlt className={`${styles.btnIcon} ${justRefreshed ? styles.spinOnce : ''}`} />
              <span className={styles.btnText}>{isLastRound ? t.reviewedFinal : t.reviewed}</span>
            </button>
          );
        })()}
        {status !== STATUS.NOT_STARTED && (
          <button
            onClick={() => setStatus(STATUS.NOT_STARTED)}
            className={`${styles.btn} ${styles.btnReset}`}
            title={t[STATUS.NOT_STARTED]}
          >
            <FaTimes className={styles.btnIcon} />
            <span className={styles.btnText}>{t[STATUS.NOT_STARTED]}</span>
          </button>
        )}
      </div>
      {status === STATUS.REVIEWING && (() => {
        const info = getReviewInfo(updatedAt, reviewCount);
        if (!info) return null;
        let text, cls;
        if (info.urgency === 'critical') {
          text = t.nextReviewOverdue(info.overdueDays);
          cls = styles.nextReviewOverdue;
        } else if (info.urgency === 'urgent') {
          text = t.nextReviewToday;
          cls = styles.nextReviewUrgent;
        } else {
          text = t.nextReviewIn(info.daysUntil);
          cls = styles.nextReviewSoon;
        }
        return (
          <p className={`${styles.nextReviewLine} ${cls}`}>
            📅 {t.nextReview}: <strong>{text}</strong>
            <span className={styles.reviewRound}>{t.round(reviewCount, info.totalRounds)}</span>
          </p>
        );
      })()}
      <p className={styles.trackerHint}>
        <a href="/progress">{t.hint}</a>
      </p>
    </div>
  );
}
