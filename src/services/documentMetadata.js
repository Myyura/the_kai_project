import documentTitles from '../data/documentTitles.json';
import {UNIV_MAP} from '../data/universities';

export const getDocumentTitle = (docId, fallbackTitle = '') => {
  const id = String(docId || '');
  return documentTitles[id] || fallbackTitle || id;
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
