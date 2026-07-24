import React from 'react';
import Link from '@docusaurus/Link';
import { FaCheckCircle, FaRedo, FaTimes, FaSyncAlt } from 'react-icons/fa';
import { useDocProgress, STATUS, getReviewInfo } from '@site/src/hooks/useProgress';
import { useAuth } from '@site/src/hooks/useAuth';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './styles.module.css';

const BUTTONS = [
  { key: STATUS.COMPLETED, Icon: FaCheckCircle },
  { key: STATUS.REVIEWING, Icon: FaRedo },
];

function ProgressGate({ t, type = 'login', embedded = false }) {
  const unavailable = type === 'unavailable';
  return (
    <div className={`${styles.tracker} ${styles.trackerGate} ${embedded ? styles.trackerEmbedded : ''}`}>
      <div className={styles.trackerHeader}>
        <span className={styles.trackerLabel}>{t.heading}</span>
        <span className={`${styles.statusBadge} ${styles.badge_not_started}`}>
          {unavailable ? t.unavailableBadge : t.loginBadge}
        </span>
      </div>
      <p className={styles.trackerGateText}>
        {unavailable ? t.unavailableText : t.loginRequired}
      </p>
      {!unavailable && (
        <Link to="/login" className={styles.trackerGateBtn}>
          {t.loginCta}
        </Link>
      )}
    </div>
  );
}

function ProgressTrackerContent({ docId, title, permalink, tags, embedded = false }) {
  const [status, setStatus, refreshReview, updatedAt, reviewCount] = useDocProgress(docId, title, permalink, tags);
  const [justRefreshed, setJustRefreshed] = React.useState(false);
  const [refreshLocked, setRefreshLocked] = React.useState(false);
  const refreshLockedRef = React.useRef(false);
  const unlockTimerRef = React.useRef(null);
  const t = useUiText('progressTracker');

  React.useEffect(() => () => {
    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
  }, []);

  const handleClick = (newStatus) => {
    setStatus(newStatus === status ? STATUS.NOT_STARTED : newStatus);
  };

  const handleRefresh = () => {
    if (refreshLockedRef.current) return;
    refreshLockedRef.current = true;
    setRefreshLocked(true);
    refreshReview();
    setJustRefreshed(true);
    unlockTimerRef.current = setTimeout(() => {
      refreshLockedRef.current = false;
      setRefreshLocked(false);
      setJustRefreshed(false);
    }, 2000);
  };

  return (
    <div className={`${styles.tracker} ${embedded ? styles.trackerEmbedded : ''}`}>
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
              disabled={refreshLocked}
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
        <Link to="/me">{t.hint}</Link>
      </p>
    </div>
  );
}

export default function ProgressTracker(props) {
  const { isConfigured, isLoggedIn, authReady } = useAuth();
  const t = useUiText('progressTracker');

  if (!isConfigured) return <ProgressGate t={t} type="unavailable" embedded={props.embedded} />;
  if (!authReady && !isLoggedIn) return null;
  if (!isLoggedIn) return <ProgressGate t={t} embedded={props.embedded} />;
  return <ProgressTrackerContent {...props} />;
}
