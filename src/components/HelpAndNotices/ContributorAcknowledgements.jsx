import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import {
  FaChevronDown,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
} from 'react-icons/fa';
import { fetchSiteContributors } from '../../services/contributorService';
import githubContributorData from '../../data/githubContributors.json';
import styles from './ContributorAcknowledgements.module.css';

const REPOSITORY_URL = 'https://github.com/Myyura/the_kai_project';

function contributorInitials(displayName) {
  const visibleName = String(displayName || '').split('#')[0].trim();
  return Array.from(visibleName).slice(0, 2).join('').toUpperCase() || 'K';
}

function GitHubContributor({ contributor, copy }) {
  return (
    <a
      className={styles.githubContributor}
      href={contributor.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={contributor.avatarUrl} alt="" loading="lazy" />
      <span className={styles.contributorIdentity}>
        <strong>{contributor.login}</strong>
        <small>{copy.githubContributionCount(contributor.contributions)}</small>
      </span>
      <FaExternalLinkAlt aria-hidden="true" />
    </a>
  );
}

function SiteContributor({ contributor, copy }) {
  return (
    <div className={styles.siteContributor}>
      <span className={styles.siteContributorAvatar} aria-hidden="true">
        {contributorInitials(contributor.displayName)}
      </span>
      <span className={styles.contributorIdentity}>
        <strong>{contributor.displayName}</strong>
        <small>{copy.siteBreakdown(contributor.solutionCount, contributor.correctionCount)}</small>
      </span>
      <span className={styles.contributionCount}>{contributor.contributionCount}</span>
    </div>
  );
}

export default function ContributorAcknowledgements({ copy }) {
  const githubContributors = githubContributorData.contributors || [];
  const [isOpen, setIsOpen] = useState(false);
  const [siteContributors, setSiteContributors] = useState([]);
  const [siteContributorsLoading, setSiteContributorsLoading] = useState(true);
  const [siteContributorsError, setSiteContributorsError] = useState(false);
  const siteContributorsRequested = useRef(false);

  useEffect(() => {
    if (!isOpen || siteContributorsRequested.current) return undefined;

    let active = true;
    siteContributorsRequested.current = true;
    setSiteContributorsLoading(true);
    setSiteContributorsError(false);

    fetchSiteContributors()
      .then((rows) => {
        if (active) setSiteContributors(rows);
      })
      .catch(() => {
        if (active) setSiteContributorsError(true);
      })
      .finally(() => {
        if (active) setSiteContributorsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [isOpen]);

  return (
    <div className={styles.acknowledgementsBlock}>
      <div className={styles.acknowledgementsIntro}>
        <span className={styles.acknowledgementsIcon} aria-hidden="true"><FaUsers /></span>
        <div>
          <span className={styles.acknowledgementsEyebrow}>{copy.eyebrow}</span>
          <h3>{copy.title}</h3>
          <p>{copy.description}</p>
        </div>
      </div>

      <details
        className={styles.contributorDisclosure}
        onToggle={(event) => setIsOpen(event.currentTarget.open)}
      >
        <summary>
          <span>
            <strong>{copy.summaryTitle}</strong>
            <small>{copy.summaryHint(githubContributors.length)}</small>
          </span>
          <FaChevronDown className={styles.disclosureChevron} aria-hidden="true" />
        </summary>

        <div className={styles.contributorDisclosureBody}>
          <section className={styles.contributorGroup}>
            <div className={styles.contributorGroupHeading}>
              <div>
                <span className={styles.contributorGroupIcon}><FaGithub aria-hidden="true" /></span>
                <div>
                  <h4>{copy.githubTitle}</h4>
                  <p>{copy.githubHint}</p>
                </div>
              </div>
              <a href={`${REPOSITORY_URL}/graphs/contributors`} target="_blank" rel="noopener noreferrer">
                {copy.viewGitHub} <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </div>
            <div className={styles.contributorGrid}>
              {githubContributors.map((contributor) => (
                <GitHubContributor key={contributor.login} contributor={contributor} copy={copy} />
              ))}
            </div>
          </section>

          <section className={styles.contributorGroup}>
            <div className={styles.contributorGroupHeading}>
              <div>
                <span className={styles.contributorGroupIcon}><FaCodeBranch aria-hidden="true" /></span>
                <div>
                  <h4>{copy.siteTitle}</h4>
                  <p>{copy.siteHint}</p>
                </div>
              </div>
              <Link to="/me?tab=contribute">{copy.contribute}</Link>
            </div>

            {siteContributorsLoading ? (
              <div className={styles.contributorState}>{copy.loading}</div>
            ) : siteContributorsError ? (
              <div className={styles.contributorState}>{copy.unavailable}</div>
            ) : siteContributors.length > 0 ? (
              <div className={styles.contributorGrid}>
                {siteContributors.map((contributor) => (
                  <SiteContributor
                    key={contributor.displayName}
                    contributor={contributor}
                    copy={copy}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.contributorState}>{copy.empty}</div>
            )}
            <p className={styles.contributorPrivacy}>{copy.privacy}</p>
          </section>
        </div>
      </details>
    </div>
  );
}
