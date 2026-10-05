import React from 'react';
import Link from '@docusaurus/Link';
import {FaArrowRight, FaChevronDown, FaExternalLinkAlt} from 'react-icons/fa';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {universities} from '@site/src/data/universities';
import {
  rankSource,
  getUniversityRank,
  getSameRankUniversities,
} from '@site/src/data/universityRanks.cjs';
import messages from './copy';
import styles from './styles.module.css';

export function SchoolRankBadge({schoolId}) {
  const language = useCurrentLanguage();
  const t = messages[language] || messages.zh;
  const rank = getUniversityRank(schoolId);
  if (!rank) return null;

  return (
    <span className={styles.badge}>
      <span>{t.reference}</span>
      <strong>{rank}</strong>
    </span>
  );
}

export default function SchoolRank({university}) {
  const language = useCurrentLanguage();
  const t = messages[language] || messages.zh;
  const rank = getUniversityRank(university.id);
  const peers = getSameRankUniversities(university, universities);

  if (!rank) {
    return <p className={styles.unlisted}>{t.reference} · {t.noRank}</p>;
  }

  return (
    <section className={styles.rankPanel} aria-label={t.reference}>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <SchoolRankBadge schoolId={university.id} />
          <span className={styles.peerToggle}>
            {t.peers}
            <span className={styles.peerCount}>
              {t.peerCount.replace('{count}', String(peers.length))}
            </span>
            <FaChevronDown className={styles.chevron} aria-hidden="true" />
          </span>
        </summary>
        <div className={styles.peerContent}>
          {peers.length ? (
            <>
              <p className={styles.peerCaption}>{t.availableOnly}</p>
              <ul className={styles.peerGrid}>
                {peers.map((peer) => (
                  <li key={peer.id}>
                    <Link to={peer.archiveUrl} className={styles.peerLink}>
                      <span className={styles.peerName}>{peer.name}</span>
                      <FaArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : <p className={styles.peerCaption}>{t.noPeers}</p>}
        </div>
      </details>
      <div className={styles.attribution}>
        <span>
          {t.source}：{' '}
          <a
            href={rankSource.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.source}：${rankSource.name} · ${t.opensNewTab}`}>
            {rankSource.name} <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </span>
        <span>{t.edition.replace('{date}', rankSource.rankingDate)}</span>
      </div>
      <p className={styles.note}>{t.note}</p>
    </section>
  );
}
