const {source: rankSource, ranks} = require('./universityRanks.json');

// Source upper/middle/lower subdivisions become +/plain/-. Quasi-A is B+.
const rankOrder = ['S', 'A', 'B', 'C', 'D'].flatMap((rank) => [`${rank}+`, rank, `${rank}-`])
  .concat(['E', 'F']);

function getUniversityRank(schoolId) {
  // An unlisted school is unknown, including when the source groups unnamed schools as F.
  return Object.prototype.hasOwnProperty.call(ranks, schoolId) ? ranks[schoolId] : null;
}

function getUniversityRankGroup(schoolId) {
  return getUniversityRank(schoolId)?.charAt(0) || null;
}

function sortUniversitiesByRank(items, getSchoolId = (item) => item.id) {
  const position = (item) => {
    const index = rankOrder.indexOf(getUniversityRank(getSchoolId(item)));
    return index === -1 ? rankOrder.length : index;
  };
  // Copy before sorting; equal subdivisions (and unlisted schools) stay in catalog order.
  return [...items].sort((a, b) => position(a) - position(b));
}

function getSameRankUniversities(university, universities) {
  const rank = getUniversityRankGroup(university?.id);
  if (!rank) return [];

  return sortUniversitiesByRank(universities.filter((candidate) => (
    candidate.id !== university.id
    && candidate.archiveUrl
    && getUniversityRankGroup(candidate.id) === rank
  )));
}

module.exports = {
  rankSource,
  getUniversityRank,
  getUniversityRankGroup,
  sortUniversitiesByRank,
  getSameRankUniversities,
};
