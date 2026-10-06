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
    <span className={styles.rankBadge}>
      <span>{t.reference}</span>
      <span className={`badge ${styles.rankValue}`}>{rank}</span>
    </span>
  );
}

export default function SchoolRank({university}) {
  const language = useCurrentLanguage();
  const t = messages[language] || messages.zh;
  const rank = getUniversityRank(university.id);
  const peers = getSameRankUniversities(university, universities);

  if (!rank) {
    return <div className={styles.unlisted}>{t.reference} · {t.noRank}</div>;
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
              <div className={styles.peerCaption}>
                {t.availableOnly.replace('{rank}', rank)}
              </div>
              <nav className={styles.peerLinks} aria-label={t.peers}>
                {peers.map((peer) => (
                  <Link key={peer.id} to={peer.archiveUrl} className={styles.peerLink}>
                    <span>{peer.name}</span>
                    <FaArrowRight aria-hidden="true" />
                  </Link>
                ))}
              </nav>
            </>
          ) : <div className={styles.peerCaption}>{t.noPeers}</div>}
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
            日本の学歴 <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </span>
        <span>{t.edition.replace('{date}', rankSource.rankingDate)}</span>
      </div>
      <div className={styles.note}>{t.note}</div>
    </section>
  );
}
