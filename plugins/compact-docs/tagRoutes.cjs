const {
  buildPermalink,
  getSubsubjectShortId,
  getTopicShortId,
  kebabCase,
} = require('../../scripts/generate-docusaurus-tags');

const LEGACY_TOPIC_ROUTE_SEGMENT = '/tags/topic/';

function unique(values) {
  return Array.from(new Set(values));
}

function normalizeDocumentSourcePath(sourcePath) {
  const normalized = String(sourcePath || '').replace(/\\/g, '/');
  const withoutSiteAlias = normalized.replace(/^@site\//, '');
  const docsMarker = withoutSiteAlias.lastIndexOf('/docs/');
  return docsMarker >= 0
    ? withoutSiteAlias.slice(docsMarker + 1)
    : withoutSiteAlias.replace(/^\.\//, '').replace(/^\//, '');
}

function getVisibleDocIds(candidateIds, docsById) {
  const ids = unique(candidateIds).filter((id) => docsById.has(id));
  const listedIds = ids.filter((id) => !docsById.get(id).unlisted);
  return listedIds.length > 0 ? listedIds : ids;
}

function toRouteItem(doc) {
  return {
    id: doc.id,
    title: doc.title,
    description: doc.description,
    permalink: doc.permalink,
  };
}

function toBrowseDocument(doc, apiDocument) {
  return {
    id: doc.id,
    title: doc.title,
    sidebarLabel: apiDocument.sidebar_label || null,
    permalink: doc.permalink,
    universityId: apiDocument.university_id || null,
    universityName: apiDocument.university_name || null,
    departmentId: apiDocument.department_id || null,
    departmentName: apiDocument.department_name || null,
    programId: apiDocument.program_id || null,
    programName: apiDocument.program_name || null,
    year: apiDocument.year || null,
    topicIds: apiDocument.topic_ids || [],
    subsubjectIds: apiDocument.subsubject_ids || [],
  };
}

function buildVersionParentPages({version, apiDocuments, taxonomy}) {
  const docsById = new Map(version.docs.map((doc) => [doc.id, doc]));
  const docsBySource = new Map(version.docs.map((doc) => [
    normalizeDocumentSourcePath(doc.source),
    doc,
  ]));
  const apiById = new Map();
  const parentToCandidateIds = new Map();

  for (const apiDocument of apiDocuments) {
    // Docusaurus strips numeric filename prefixes from some generated IDs
    // (for example 202208_math_1.md -> math_1). Source paths remain stable,
    // so use them as the fallback join key instead of silently dropping docs.
    const loadedDocument = docsById.get(apiDocument.doc_id)
      || docsBySource.get(normalizeDocumentSourcePath(apiDocument.source_path));
    if (!loadedDocument) continue;
    apiById.set(loadedDocument.id, apiDocument);
    for (const subsubjectId of apiDocument.subsubject_ids || []) {
      if (!taxonomy.subsubjects[subsubjectId]) continue;
      if (!parentToCandidateIds.has(subsubjectId)) {
        parentToCandidateIds.set(subsubjectId, []);
      }
      parentToCandidateIds.get(subsubjectId).push(loadedDocument.id);
    }
  }

  return Array.from(parentToCandidateIds, ([subsubjectId, candidateIds]) => {
    const docIds = getVisibleDocIds(candidateIds, docsById);
    const visibleDocIdSet = new Set(docIds);
    const subsubject = taxonomy.subsubjects[subsubjectId];
    const subjectId = subsubject.subject || 'General';
    const permalink = `${version.tagsPath}${buildPermalink('subsubject', subsubjectId, taxonomy)}`;
    const documents = {};

    for (const docId of docIds) {
      const doc = docsById.get(docId);
      const apiDocument = apiById.get(docId);
      if (doc && apiDocument) documents[docId] = toBrowseDocument(doc, apiDocument);
    }

    const directDocIds = docIds.filter((docId) => (
      (apiById.get(docId)?.learning_tags || []).some((tag) => (
        tag.kind === 'subsubject' && tag.id === subsubjectId
      ))
    ));

    const topics = Object.entries(taxonomy.topics)
      .filter(([, topic]) => topic.subsubject === subsubjectId)
      .map(([topicId, topic]) => {
        const topicDocIds = docIds.filter((docId) => (
          (apiById.get(docId)?.topic_ids || []).includes(topicId)
          && visibleDocIdSet.has(docId)
        ));
        return {
          id: topicId,
          shortId: getTopicShortId(topicId, topic),
          count: topicDocIds.length,
          anchor: `topic-${kebabCase(getTopicShortId(topicId, topic))}`,
          docIds: topicDocIds,
        };
      })
      .filter((topic) => topic.count > 0)
      .sort((left, right) => right.count - left.count || left.id.localeCompare(right.id, 'en'));

    const items = docIds.map((docId) => toRouteItem(docsById.get(docId)));
    const allUnlisted = items.length > 0 && docIds.every((docId) => docsById.get(docId).unlisted);

    return {
      id: subsubjectId,
      path: permalink,
      tag: {
        label: subsubjectId,
        permalink,
        description: `${subjectId} / ${getSubsubjectShortId(subsubjectId, subsubject)}`,
        allTagsPath: version.tagsPath,
        count: items.length,
        items,
        unlisted: allUnlisted,
        browse: {
          directDocIds,
          docIds,
          topics,
          documents,
        },
      },
    };
  }).sort((left, right) => left.path.localeCompare(right.path, 'en'));
}

function createParentRoute(page, component) {
  return {
    path: page.path,
    component,
    exact: true,
    props: {tag: page.tag},
  };
}

function isLegacyTopicRoute(route) {
  return typeof route?.path === 'string' && route.path.includes(LEGACY_TOPIC_ROUTE_SEGMENT);
}

function rewriteRoute(route, {pagesByTagsPath, docTagDocListComponent}) {
  if (isLegacyTopicRoute(route)) return null;
  if (!Array.isArray(route.routes)) return route;

  const originalChildren = route.routes;
  const tagsListRoute = originalChildren.find((child) => (
    Array.isArray(child?.props?.tags) && pagesByTagsPath.has(child.path)
  ));

  if (tagsListRoute) {
    const pages = pagesByTagsPath.get(tagsListRoute.path);
    const retainedChildren = originalChildren.filter((child) => (
      !isLegacyTopicRoute(child)
      && !(typeof child?.path === 'string' && child.path.includes('/tags/subsubject/'))
    ));
    return {
      ...route,
      routes: [
        ...retainedChildren,
        ...pages.map((page) => createParentRoute(page, docTagDocListComponent)),
      ],
    };
  }

  return {
    ...route,
    routes: originalChildren
      .map((child) => rewriteRoute(child, {pagesByTagsPath, docTagDocListComponent}))
      .filter(Boolean),
  };
}

function rewriteCapturedRoutes(routes, options) {
  return routes
    .map((route) => rewriteRoute(route, options))
    .filter(Boolean);
}

module.exports = {
  LEGACY_TOPIC_ROUTE_SEGMENT,
  buildVersionParentPages,
  isLegacyTopicRoute,
  normalizeDocumentSourcePath,
  rewriteCapturedRoutes,
};
