import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {
  FaArrowRight,
  FaComments,
  FaPaperPlane,
  FaSearch,
} from 'react-icons/fa';
import {universities} from '@site/src/data/universities';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './intro.module.css';

const IMPERIAL_UNIVERSITIES = new Set([
  'tokyo-university',
  'kyoto-university',
  'tohoku-university',
  'osaka-university',
  'nagoya-university',
  'hokkaido-university',
  'kyushu-university',
]);

const PRIVATE_UNIVERSITIES = new Set([
  'waseda-university',
  'keio-university',
]);

function getUniversityGroup(id) {
  if (IMPERIAL_UNIVERSITIES.has(id)) return 'imperial';
  if (PRIVATE_UNIVERSITIES.has(id)) return 'private';
  return 'national';
}

function SchoolCard({university, groupLabel}) {
  return (
    <Link
      to={`/docs/category/${university.id}`}
      className={styles.schoolCard}>
      <span
        className={styles.schoolColor}
        style={{backgroundColor: university.color}}
        aria-hidden="true"
      />
      <span className={styles.schoolTag}>{groupLabel}</span>
      <span className={styles.schoolName}>{university.name}</span>
      <FaArrowRight className={styles.schoolArrow} aria-hidden="true" />
    </Link>
  );
}

function InfoCard({icon: Icon, title, description, actions}) {
  return (
    <article className={styles.infoCard}>
      <Icon className={styles.infoIcon} aria-hidden="true" />
      <h2 className={styles.infoTitle}>{title}</h2>
      <p className={styles.infoDesc}>{description}</p>
      <div className={styles.infoLinks}>
        {actions.map((action) => (
          action.to ? (
            <Link key={action.label} to={action.to} className={styles.infoLink}>
              {action.label}
            </Link>
          ) : (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoLink}>
              {action.label}
            </a>
          )
        ))}
      </div>
    </article>
  );
}

export default function Intro() {
  const t = useUiText('examCatalog');
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredUniversities = useMemo(
    () => universities.filter((university) => (
      !normalizedQuery ||
      university.name.toLocaleLowerCase().includes(normalizedQuery) ||
      university.id.toLocaleLowerCase().includes(normalizedQuery)
    )),
    [normalizedQuery],
  );

  return (
    <div className={styles.introPage}>
      <header className={styles.pageHeader}>
        <span className={styles.eyebrow}>{t.eyebrow}</span>
        <h1 className={styles.pageTitle}>{t.title}</h1>
        <p className={styles.pageSubtitle}>{t.subtitle}</p>
      </header>

      <section className={styles.schoolsSection} aria-labelledby="university-search-label">
        <label id="university-search-label" className={styles.searchLabel} htmlFor="university-search">
          {t.searchLabel}
        </label>
        <div className={styles.searchBox}>
          <FaSearch aria-hidden="true" />
          <input
            id="university-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
          />
        </div>

        {filteredUniversities.length > 0 ? (
          <div className={styles.schoolGrid}>
            {filteredUniversities.map((university) => {
              const group = getUniversityGroup(university.id);
              return (
                <SchoolCard
                  key={university.id}
                  university={university}
                  groupLabel={t.groups[group]}
                />
              );
            })}
          </div>
        ) : (
          <p className={styles.emptyState}>{t.noResults}</p>
        )}
      </section>

      <section className={styles.infoSection} aria-label={t.contributeTitle}>
        <div className={styles.infoGrid}>
          <InfoCard
            icon={FaPaperPlane}
            title={t.contributeTitle}
            description={t.contributeDesc}
            actions={[
              {label: t.contributeAction, to: '/me?tab=contribute'},
            ]}
          />
          <InfoCard
            icon={FaComments}
            title={t.feedbackTitle}
            description={t.feedbackDesc}
            actions={[
              {
                label: t.issueAction,
                href: 'https://github.com/Myyura/the_kai_project/issues',
              },
              {
                label: t.communityAction,
                href: 'https://qm.qq.com/q/MVPd9wniQU',
              },
            ]}
          />
        </div>
      </section>

      <footer className={styles.pageFooter}>
        <p>{t.license}</p>
      </footer>
    </div>
  );
}
