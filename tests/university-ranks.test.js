const assert = require('node:assert/strict');
const test = require('node:test');
const {universities} = require('../src/data/universities');
const {source, ranks} = require('../src/data/universityRanks.json');
const {rankSource, getUniversityRank, getSameRankUniversities} = require('../src/data/universityRanks.cjs');

test('rank data uses canonical school IDs and only the seven major ranks', () => {
  const schoolIds = new Set(universities.map(({id}) => id));
  for (const [schoolId, rank] of Object.entries(ranks)) {
    assert.ok(schoolIds.has(schoolId), `Unknown school ID: ${schoolId}`);
    assert.match(rank, /^[SABCDEF]$/, `${schoolId} must not include a subdivision`);
  }
  assert.equal(new URL(source.url).hostname, 'gakurekirank.com');
  assert.equal(source.rankingDate, '2026-04-01');
  assert.match(source.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(source.checkedAt >= source.rankingDate);
  assert.deepEqual(rankSource, source);
});

test('all source subdivisions collapse to their major rank, including quasi-A in B', () => {
  assert.equal(getUniversityRank('tokyo-university'), 'S');
  assert.equal(getUniversityRank('institute-of-science-tokyo'), 'S');
  assert.equal(getUniversityRank('osaka-university'), 'A');
  assert.equal(getUniversityRank('kobe-university'), 'A');
  assert.equal(getUniversityRank('tsukuba-university'), 'B');
  assert.equal(getUniversityRank('hosei-university'), 'B');
});

test('unlisted and invalid school IDs never inherit a rank or fall back to F', () => {
  for (const schoolId of ['naist', 'not-in-source', '__proto__', 'constructor', null, undefined]) {
    assert.equal(getUniversityRank(schoolId), null);
    assert.deepEqual(getSameRankUniversities({id: schoolId}, universities), []);
  }
});

test('same-rank links exclude the current school and schools without an archive', () => {
  const tsukuba = universities.find(({id}) => id === 'tsukuba-university');
  const withoutArchive = {...universities.find(({id}) => id === 'UEC'), archiveUrl: undefined};
  const otherMajorRank = universities.find(({id}) => id === 'tokyo-university');
  const lowerSubdivision = universities.find(({id}) => id === 'hosei-university');
  const middleSubdivision = universities.find(({id}) => id === 'hiroshima-university');
  const candidates = Object.freeze([withoutArchive, lowerSubdivision, tsukuba, otherMajorRank, middleSubdivision]);

  // Keep catalog order and the original records; grouping must not imply a finer ranking.
  assert.deepEqual(getSameRankUniversities(tsukuba, candidates), [lowerSubdivision, middleSubdivision]);
  assert.equal(getUniversityRank('kyoto-institute-of-technology'), 'B');
  assert.equal(getSameRankUniversities(tsukuba, universities).some(({id}) => id === 'kyoto-institute-of-technology'), false);
});
