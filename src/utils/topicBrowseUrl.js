import {getTopicAnchorId} from './tags';

export const UNCLASSIFIED_ANCHOR = 'topic-unclassified';

export function readTopicBrowseSelection(location, browse) {
  let anchor = (location.hash || '').replace(/^#/, '');
  try {
    anchor = decodeURIComponent(anchor);
  } catch {
    // Invalid bookmarks fall back to the complete topic list.
  }
  const matchedTopic = browse.topics.find((topic) => getTopicAnchorId(topic.id) === anchor);
  const topic = anchor === UNCLASSIFIED_ANCHOR && browse.directDocIds.length
    ? 'unclassified'
    : matchedTopic?.id || 'all';
  const requestedSchool = new URLSearchParams(location.search || '').get('school');
  const school = requestedSchool && browse.docIds.some((docId) => {
    const document = browse.documents[docId];
    return document && (document.universityId || 'other') === requestedSchool;
  }) ? requestedSchool : 'all';
  return {topic, school};
}

export function buildTopicBrowseUrl(location, {topic, school}) {
  const params = new URLSearchParams(location.search || '');
  if (school === 'all') params.delete('school');
  else params.set('school', school);
  const anchor = topic === 'all' ? ''
    : topic === 'unclassified' ? UNCLASSIFIED_ANCHOR
      : getTopicAnchorId(topic);
  const search = params.toString();
  return `${location.pathname}${search ? `?${search}` : ''}${anchor ? `#${anchor}` : ''}`;
}
