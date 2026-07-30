import documentTitles from '../data/documentTitles.json';
import {UNIV_MAP} from '../data/universities';

const publishedUniversityIds = new Set(
  Object.keys(documentTitles)
    .map((docId) => docId.split('/')[0])
    .filter(Boolean),
);

export const getDocumentTitle = (docId, fallbackTitle = '') => {
  const id = String(docId || '');
  return documentTitles[id] || fallbackTitle || id;
};

export const hasPublishedDocumentsForUniversity = (universityId) => (
  publishedUniversityIds.has(String(universityId || ''))
);

export const getUniversityCatalogTarget = (university) => {
  const universityId = String(university?.id || '');
  if (!universityId) return null;
  if (hasPublishedDocumentsForUniversity(universityId)) {
    return {
      kind: 'docs',
      href: `/docs/category/${universityId}`,
    };
  }

  const websiteUrl = university?.departments
    ?.find((department) => department?.websiteUrl)
    ?.websiteUrl;
  return websiteUrl
    ? {kind: 'external', href: websiteUrl}
    : null;
};

export const resolveDocumentMetadata = (docId, fallback = {}, unknownSchool = '') => {
  const id = String(docId || '');
  const universityId = id.split('/')[0] || '';
  return {
    id,
    title: getDocumentTitle(id, fallback.title),
    permalink: documentTitles[id] ? `/docs/${id}` : (fallback.permalink || `/docs/${id}`),
    university: UNIV_MAP[universityId] || universityId || unknownSchool,
  };
};
