import React from 'react';
import { useDocProgress, STATUS } from '@site/src/hooks/useProgress';
import styles from './styles.module.css';

const LABELS = {
  zh: {
    heading: '做题进度',
    [STATUS.NOT_STARTED]: '未做',
    [STATUS.COMPLETED]: '已完成',
    [STATUS.REVIEWING]: '待复习',
    hint: '标记状态后可在「进度总览」中查看所有进度',
  },
  ja: {
    heading: '学習進捗',
    [STATUS.NOT_STARTED]: '未着手',
    [STATUS.COMPLETED]: '完了',
    [STATUS.REVIEWING]: '要復習',
    hint: '「進捗一覧」ページで全体の進捗を確認できます',
  },
};

const getLanguage = () => {
  if (typeof document === 'undefined') return 'zh';
  return document.documentElement.getAttribute('data-lang') || 'zh';
};

const BUTTONS = [
  { key: STATUS.COMPLETED, icon: '✅' },
  { key: STATUS.REVIEWING, icon: '🔄' },
  { key: STATUS.NOT_STARTED, icon: '✕' },
];

export default function ProgressTracker({ docId, title, permalink }) {
  const [status, setStatus] = useDocProgress(docId, title, permalink);
  const [lang, setLang] = React.useState(getLanguage);
  const t = LABELS[lang] ?? LABELS.zh;

  React.useEffect(() => {
    const handler = () => setLang(getLanguage());
    window.addEventListener('languageChange', handler);
    return () => window.removeEventListener('languageChange', handler);
  }, []);

  const handleClick = (newStatus) => {
    setStatus(newStatus === status ? STATUS.NOT_STARTED : newStatus);
  };

  return (
    <div className={styles.tracker}>
      <div className={styles.trackerHeader}>
        <span className={styles.trackerLabel}>{t.heading}</span>
        <span
          className={`${styles.statusBadge} ${styles[`badge_${status}`]}`}
        >
          {t[status]}
        </span>
      </div>
      <div className={styles.trackerButtons}>
        {BUTTONS.filter((b) => b.key !== STATUS.NOT_STARTED).map(({ key, icon }) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className={`${styles.btn} ${status === key ? styles[`btn_${key}_active`] : styles.btnDefault}`}
            title={t[key]}
          >
            <span className={styles.btnIcon}>{icon}</span>
            <span className={styles.btnText}>{t[key]}</span>
          </button>
        ))}
        {status !== STATUS.NOT_STARTED && (
          <button
            onClick={() => setStatus(STATUS.NOT_STARTED)}
            className={`${styles.btn} ${styles.btnReset}`}
            title={t[STATUS.NOT_STARTED]}
          >
            <span className={styles.btnIcon}>✕</span>
            <span className={styles.btnText}>{t[STATUS.NOT_STARTED]}</span>
          </button>
        )}
      </div>
      <p className={styles.trackerHint}>
        <a href="/progress">{t.hint}</a>
      </p>
    </div>
  );
}
