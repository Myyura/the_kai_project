import React from 'react';
import { FaCheckCircle, FaRedo, FaTimes, FaSyncAlt } from 'react-icons/fa';
import { useDocProgress, STATUS, getReviewInfo } from '@site/src/hooks/useProgress';
import styles from './styles.module.css';

const LABELS = {
  zh: {
    heading: '做题进度',
    [STATUS.NOT_STARTED]: '未做',
    [STATUS.COMPLETED]: '已完成',
    [STATUS.REVIEWING]: '待复习',
    reviewed: '我已复习',
    reviewedTitle: '复习完成，重置遗忘曲线计时器',
    hint: '标记状态后可在「进度总览」中查看所有进度',
    nextReview: '下次复习',
    nextReviewToday: '今日',
    nextReviewIn: (d) => `${d} 天后`,
    nextReviewOverdue: (d) => `已逾期 ${d} 天`,
  },
  ja: {
    heading: '学習進捗',
    [STATUS.NOT_STARTED]: '未着手',
    [STATUS.COMPLETED]: '完了',
    [STATUS.REVIEWING]: '要復習',
    reviewed: '復習完了',
    reviewedTitle: '復習したことを記録し、忘却曲線をリセット',
    hint: '「進捗一覧」ページで全体の進捗を確認できます',
    nextReview: '次回復習',
    nextReviewToday: '今日',
    nextReviewIn: (d) => `${d}日後`,
    nextReviewOverdue: (d) => `${d}日超過`,
  },
};

const getLanguage = () => {
  if (typeof document === 'undefined') return 'zh';
  return document.documentElement.getAttribute('data-lang') || 'zh';
};

const BUTTONS = [
  { key: STATUS.COMPLETED, Icon: FaCheckCircle },
  { key: STATUS.REVIEWING, Icon: FaRedo },
];

export default function ProgressTracker({ docId, title, permalink, tags }) {
  const [status, setStatus, refreshReview, updatedAt] = useDocProgress(docId, title, permalink, tags);
  const [lang, setLang] = React.useState(getLanguage);
  const [justRefreshed, setJustRefreshed] = React.useState(false);
  const t = LABELS[lang] ?? LABELS.zh;

  React.useEffect(() => {
    const handler = () => setLang(getLanguage());
    window.addEventListener('languageChange', handler);
    return () => window.removeEventListener('languageChange', handler);
  }, []);

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
        {status === STATUS.REVIEWING && (
          <button
            onClick={handleRefresh}
            className={`${styles.btn} ${justRefreshed ? styles.btnRefreshed : styles.btnRefresh}`}
            title={t.reviewedTitle}
          >
            <FaSyncAlt className={`${styles.btnIcon} ${justRefreshed ? styles.spinOnce : ''}`} />
            <span className={styles.btnText}>{t.reviewed}</span>
          </button>
        )}
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
        const info = getReviewInfo(updatedAt);
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
          </p>
        );
      })()}
      <p className={styles.trackerHint}>
        <a href="/progress">{t.hint}</a>
      </p>
    </div>
  );
}
