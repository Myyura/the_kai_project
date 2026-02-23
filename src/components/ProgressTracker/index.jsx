import React from 'react';
import { FaCheckCircle, FaRedo, FaTimes, FaSyncAlt } from 'react-icons/fa';
import { useDocProgress, STATUS, getReviewInfo } from '@site/src/hooks/useProgress';
import { useCurrentLanguage } from '@site/src/context/LanguageContext';
import styles from './styles.module.css';

const LABELS = {
  zh: {
    heading: '做题进度',
    [STATUS.NOT_STARTED]: '未做',
    [STATUS.COMPLETED]: '已完成',
    [STATUS.REVIEWING]: '待复习',
    reviewed: '我已复习',
    reviewedTitle: '复习完成，进入下一轮复习周期',
    reviewedFinal: '完成全部复习',
    reviewedFinalTitle: '最后一轮，点击后自动标记为已完成',
    hint: '标记状态后可在「进度总览」中查看所有进度',
    nextReview: '下次复习',
    nextReviewToday: '今日',
    nextReviewIn: (d) => `${d} 天后`,
    nextReviewOverdue: (d) => `已逾期 ${d} 天`,
    round: (n, total) => `第 ${n + 1} / ${total} 轮`,
  },
  ja: {
    heading: '学習進捗',
    [STATUS.NOT_STARTED]: '未着手',
    [STATUS.COMPLETED]: '完了',
    [STATUS.REVIEWING]: '要復習',
    reviewed: '復習完了',
    reviewedTitle: '復習したことを記録し、次の復習サイクルへ',
    reviewedFinal: '全計終了',
    reviewedFinalTitle: '最終ラウンド。クリックすると記録が「完了」に変わります',
    hint: '「進捗一覧」ページで全体の進捗を確認できます',
    nextReview: '次回復習',
    nextReviewToday: '今日',
    nextReviewIn: (d) => `${d}日後`,
    nextReviewOverdue: (d) => `${d}日超過`,
    round: (n, total) => `第 ${n + 1} / ${total} 回目`,
  },
};

const BUTTONS = [
  { key: STATUS.COMPLETED, Icon: FaCheckCircle },
  { key: STATUS.REVIEWING, Icon: FaRedo },
];

export default function ProgressTracker({ docId, title, permalink, tags }) {
  const [status, setStatus, refreshReview, updatedAt, reviewCount] = useDocProgress(docId, title, permalink, tags);
  const lang = useCurrentLanguage();
  const [justRefreshed, setJustRefreshed] = React.useState(false);
  const t = LABELS[lang] ?? LABELS.zh;

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
