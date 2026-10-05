const {source: rankSource, ranks} = require('./universityRanks.json');

function getUniversityRank(schoolId) {
  // An unlisted school is unknown, including when the source groups unnamed schools as F.
  return Object.prototype.hasOwnProperty.call(ranks, schoolId) ? ranks[schoolId] : null;
}

function getSameRankUniversities(university, universities) {
  const rank = getUniversityRank(university?.id);
  if (!rank) return [];

  return universities.filter((candidate) => (
    candidate.id !== university.id
    && candidate.archiveUrl
    && getUniversityRank(candidate.id) === rank
  ));
}

module.exports = {rankSource, getUniversityRank, getSameRankUniversities};
