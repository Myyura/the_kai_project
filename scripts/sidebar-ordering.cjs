const {universities} = require('../src/data/universities');
const {sortUniversitiesByRank} = require('../src/data/universityRanks.cjs');

const schoolIdByArchiveUrl = new Map(
  universities
    .filter((school) => school.archiveUrl)
    .map((school) => [school.archiveUrl, school.id]),
);

function getSchoolId(item) {
  // The default generator returns category config links, before Docusaurus
  // resolves them to hrefs. Match only a school's exact generated-index slug.
  if (item.type !== 'category' || item.link?.type !== 'generated-index' || !item.link.slug) {
    return undefined;
  }
  return schoolIdByArchiveUrl.get(`/docs/${item.link.slug.replace(/^\/+/, '')}`);
}

function getYearCategoryLabel(item) {
  if (item.type !== 'category') return null;
  const match = item.label.match(/^(\d{4})年度$/);
  return match ? Number(match[1]) : null;
}

// Reorder only matching slots, leaving introductory docs and other entries in place.
function reorderMatchingItems(items, matches, sort) {
  const sorted = sort(items.filter(matches));
  let index = 0;
  return items.map((item) => matches(item) ? sorted[index++] : item);
}

function sortYearCategoriesDesc(items) {
  const itemsWithSortedChildren = items.map((item) => (
    item.type === 'category'
      ? {...item, items: sortYearCategoriesDesc(item.items)}
      : item
  ));
  return reorderMatchingItems(
    itemsWithSortedChildren,
    (item) => getYearCategoryLabel(item) !== null,
    (years) => years.sort((a, b) => getYearCategoryLabel(b) - getYearCategoryLabel(a)),
  );
}

function sortSidebarItems(items) {
  // Rank only school roots; children retain the established year ordering.
  return reorderMatchingItems(
    sortYearCategoriesDesc(items),
    getSchoolId,
    (schools) => sortUniversitiesByRank(schools, getSchoolId),
  );
}

module.exports = {sortSidebarItems};
