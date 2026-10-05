import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {
  FaArrowRight,
  FaChevronDown,
  FaComments,
  FaExternalLinkAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import BrowseEmptyState from '@site/src/components/BrowseEmptyState';
import BrowseSearchField from '@site/src/components/BrowseSearchField';
import ContentBrowseModes from '@site/src/components/ContentBrowseModes';
import {SchoolRankBadge} from '@site/src/components/SchoolRank';
import {universities} from '@site/src/data/universities';
import {examUniversities} from '@site/src/data/universityCatalog.cjs';
import {useUiText} from '@site/src/i18n/useUiText';
import styles from './intro.module.css';

const catalogUniversities = examUniversities(universities);
const normalizeUniversityQuery = (value) => value.normalize('NFKC').toLowerCase().trim();

function filterUniversities(query) {
  const matches = (item) => normalizeUniversityQuery(
    [item.name, item.id, ...(item.aliases || [])].join(' '),
  ).includes(query);

  return catalogUniversities.flatMap((university) => {
    const universityMatches = matches(university);
    const departments = university.departments.flatMap((department) => {
      const departmentMatches = matches(department);
      const matchingPrograms = query && !universityMatches && !departmentMatches
        ? department.programs.filter(matches)
        : [];
      return universityMatches || departmentMatches || matchingPrograms.length
        ? [{...department, matchingPrograms}]
        : [];
    });

    // University archives can contain exams directly, without graduate-school categories.
    return universityMatches || departments.length ? [{university, departments}] : [];
  });
}

function SchoolCard({university, departments, query, t}) {
  return (
    <article className={styles.schoolCard}>
      <Link to={university.archiveUrl} className={styles.schoolArchiveLink}>
        <span
          className={styles.schoolColor}
          style={{'--university-color': university.color}}
          aria-hidden="true"
        />
        <span className={styles.schoolHeading}>
          <span className={styles.schoolName}>{university.name}</span>
          <span className={styles.schoolMeta}>
            <span>{university.departments.length
              ? t.departmentCount.replace('{count}', String(university.departments.length))
              : t.viewPastExams}</span>
            <SchoolRankBadge schoolId={university.id} />
          </span>
        </span>
        <FaArrowRight className={styles.linkIcon} aria-hidden="true" />
      </Link>
      {departments.length > 0 && (
        // Reset native disclosure state for each search, including when the query is cleared.
        <details key={query} className={styles.schoolDetails} open={Boolean(query)}>
          <summary className={styles.schoolSummary}>
            <span>{t.departmentLinks}</span>
            <FaChevronDown className={styles.schoolToggle} aria-hidden="true" />
          </summary>
          <div className={styles.departmentList}>
            {departments.map((department) => (
              <div key={department.id} className={styles.departmentRow}>
                <Link to={department.archiveUrl} className={styles.departmentLink}>
                  <span>{department.name}</span>
                  <FaArrowRight className={styles.linkIcon} aria-hidden="true" />
                </Link>
                {department.matchingPrograms.map((program) => (
                  <Link key={program.id} to={program.archiveUrl} className={styles.programLink}>
                    <span>{program.name}</span>
                    <FaArrowRight className={styles.linkIcon} aria-hidden="true" />
                  </Link>
                ))}
                {department.websiteUrl && (
                  <a
                    href={department.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.departmentWebsiteLink}
                    aria-label={`${university.name} · ${department.name} · ${t.websiteLink} · ${t.opensNewTab}`}>
                    {t.websiteLink}
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </details>
      )}
    </article>
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
  const normalizedQuery = normalizeUniversityQuery(query);
  const filteredUniversities = useMemo(
    () => filterUniversities(normalizedQuery),
    [normalizedQuery],
  );

  return (
    <div className={styles.introPage}>
      <header className={styles.pageHeader}>
        <span>{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </header>

      <ContentBrowseModes activeMode="catalog" />

      <section className={styles.schoolsSection} aria-labelledby="university-search-label">
        <div className={styles.searchToolbar}>
          <div className={styles.searchField}>
            <label id="university-search-label" className={styles.searchLabel} htmlFor="university-search">
              {t.searchLabel}
            </label>
            <BrowseSearchField
              id="university-search"
              value={query}
              onChange={setQuery}
              label={t.searchLabel}
              placeholder={t.searchPlaceholder}
              resultsId="university-results"
              autoComplete="off"
            />
          </div>
          <p className={styles.resultCount} role="status">
            {t.resultCount.replace('{count}', String(filteredUniversities.length))}
          </p>
        </div>

        <div id="university-results">
          {filteredUniversities.length > 0 ? (
            <div className={styles.schoolGrid}>
              {filteredUniversities.map(({university, departments}) => (
                <SchoolCard
                  key={university.id}
                  university={university}
                  departments={departments}
                  query={normalizedQuery}
                  t={t}
                />
              ))}
            </div>
          ) : (
            <BrowseEmptyState
              message={t.noResults}
              onReset={() => setQuery('')}
              focusTargetId="university-search"
            />
          )}
        </div>
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
