import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {findFirstSidebarItemLink} from '@docusaurus/plugin-content-docs/client';
import DocCardList from '@theme/DocCardList';
import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import copy from './copy';
import {archivePath, countArchivedPrograms} from './model.cjs';

export default function SchoolDepartmentCards({university, items}) {
  const language = useCurrentLanguage();
  const text = copy[language] || copy.zh;
  const baseUrl = useBaseUrl('/');
  const departments = new Map(
    (university.departments || [])
      .filter((department) => department.archiveUrl)
      .map((department) => [archivePath(department.archiveUrl, baseUrl), department]),
  );
  const cards = (items || []).map((item) => {
    const href = findFirstSidebarItemLink(item);
    // Some department folders use the first child as their destination
    // instead of having their own generated index page.
    const matchingNames = (university.departments || [])
      .filter((department) => department.name === item.label);
    const department = departments.get(archivePath(href, baseUrl))
      || (matchingNames.length === 1 ? matchingNames[0] : undefined);
    if (!department) return item;

    const count = countArchivedPrograms(department, item.items, baseUrl, university.id);
    return {
      ...item,
      description: count > 0 ? text.programCount(count) : text.archivedExams,
    };
  });

  return <DocCardList items={cards} />;
}
