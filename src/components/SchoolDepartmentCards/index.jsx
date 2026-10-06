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
  const departmentsByPath = new Map();
  const departmentsByName = new Map();
  for (const department of university.departments || []) {
    if (department.archiveUrl) {
      departmentsByPath.set(archivePath(department.archiveUrl, baseUrl), department);
    }
    // A name is a safe fallback only when it identifies exactly one department.
    departmentsByName.set(department.name, departmentsByName.has(department.name) ? null : department);
  }
  const cards = (items || []).map((item) => {
    const href = findFirstSidebarItemLink(item);
    // Some department folders use the first child as their destination
    // instead of having their own generated index page.
    const department = departmentsByPath.get(archivePath(href, baseUrl))
      || departmentsByName.get(item.label);
    if (!department) return item;

    const count = countArchivedPrograms(department, item.items, baseUrl, university.id);
    return {
      ...item,
      description: count > 0 ? text.programCount(count) : text.archivedExams,
    };
  });

  return <DocCardList items={cards} />;
}
