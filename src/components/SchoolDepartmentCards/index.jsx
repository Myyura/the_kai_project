import React, {useId} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  filterDocCardListItems,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';
import Heading from '@theme/Heading';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import copy from './copy';
import {archivePath, countArchivedPrograms} from './model.cjs';
import styles from './styles.module.css';

function DepartmentCard({item, department, universityId, baseUrl, text}) {
  const href = findFirstSidebarItemLink(item);
  const programCount = countArchivedPrograms(department, item.items, baseUrl, universityId);

  return (
    <article className={styles.card}>
      <Heading as="h3" className={styles.title}>
        <Link to={href}>{item.label || department.name}</Link>
      </Heading>
      <div className={styles.information}>
        <p className={styles.count}>
          {programCount > 0 ? text.programCount(programCount) : text.archivedExams}
        </p>
      </div>
      <div className={styles.actions}>
        <Link to={href} className={styles.archiveLink}>
          {text.archive}<span aria-hidden="true">→</span>
        </Link>
        {department.websiteUrl && (
          <a
            href={department.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.websiteLabel(item.label || department.name)}
            className={styles.websiteLink}>
            {text.website}<span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function SchoolDepartmentCards({university, items}) {
  const language = useCurrentLanguage();
  const text = copy[language] || copy.zh;
  const headingId = useId();
  const baseUrl = useBaseUrl('/');
  const departments = new Map(
    (university.departments || [])
      .filter((department) => department.archiveUrl)
      .map((department) => [archivePath(department.archiveUrl, baseUrl), department]),
  );
  const cards = filterDocCardListItems(items || []);

  if (!cards.length) return null;

  return (
    <section aria-labelledby={headingId}>
      <Heading as="h2" id={headingId} className={styles.heading}>
        {text.heading}
      </Heading>
      <div className={styles.grid}>
        {cards.map((item, index) => {
          const href = findFirstSidebarItemLink(item);
          // Some department folders use the first child as their destination
          // instead of having their own generated index page.
          const matchingNames = (university.departments || [])
            .filter((department) => department.name === item.label);
          const department = departments.get(archivePath(href, baseUrl))
            || (matchingNames.length === 1 ? matchingNames[0] : undefined);
          return department ? (
            <DepartmentCard
              key={`${href}-${index}`}
              item={item}
              department={department}
              universityId={university.id}
              baseUrl={baseUrl}
              text={text}
            />
          ) : (
            <div key={`${href || item.label}-${index}`} className={styles.fallback}>
              <DocCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
