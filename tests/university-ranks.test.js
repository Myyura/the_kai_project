const assert = require('node:assert/strict');
const test = require('node:test');
const {universities} = require('../src/data/universities');
const {source, ranks} = require('../src/data/universityRanks.json');
const {
  rankSource,
  getUniversityRank,
  getUniversityRankGroup,
  sortUniversitiesByRank,
  getSameRankUniversities,
} = require('../src/data/universityRanks.cjs');

test('rank data uses canonical school IDs and compact subdivision labels', () => {
  const schoolIds = new Set(universities.map(({id}) => id));
  for (const [schoolId, rank] of Object.entries(ranks)) {
    assert.ok(schoolIds.has(schoolId), `Unknown school ID: ${schoolId}`);
    assert.match(rank, /^(?:[SABCD][+-]?|[EF])$/, `Invalid rank for ${schoolId}`);
  }
  assert.equal(new URL(source.url).hostname, 'gakurekirank.com');
  assert.equal(source.rankingDate, '2026-04-01');
  assert.match(source.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(source.checkedAt >= source.rankingDate);
  assert.deepEqual(rankSource, source);
});

test('display distinguishes upper, middle and lower subdivisions, with quasi-A shown as B+', () => {
  assert.equal(getUniversityRank('tokyo-university'), 'S+');
  assert.equal(getUniversityRank('kyoto-university'), 'S');
  assert.equal(getUniversityRank('institute-of-science-tokyo'), 'S-');
  assert.equal(getUniversityRank('osaka-university'), 'A+');
  assert.equal(getUniversityRank('tohoku-university'), 'A');
  assert.equal(getUniversityRank('kobe-university'), 'A-');
  assert.equal(getUniversityRank('tsukuba-university'), 'B+');
  assert.equal(getUniversityRank('UEC'), 'B+');
  assert.equal(getUniversityRank('hosei-university'), 'B-');
});

test('peer groups ignore subdivisions, including quasi-A in the B group', () => {
  for (const schoolId of ['tokyo-university', 'kyoto-university', 'institute-of-science-tokyo']) {
    assert.equal(getUniversityRankGroup(schoolId), 'S');
  }
  for (const schoolId of ['tsukuba-university', 'hiroshima-university', 'hosei-university']) {
    assert.equal(getUniversityRankGroup(schoolId), 'B');
  }
});

test('unlisted and invalid school IDs never inherit a rank or fall back to F', () => {
  for (const schoolId of ['naist', 'not-in-source', '__proto__', 'constructor', null, undefined]) {
    assert.equal(getUniversityRank(schoolId), null);
    assert.equal(getUniversityRankGroup(schoolId), null);
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

  // The peer group spans subdivisions; its links still follow the shared rank order.
  assert.deepEqual(getSameRankUniversities(tsukuba, candidates), [middleSubdivision, lowerSubdivision]);
  assert.equal(getUniversityRank('kyoto-institute-of-technology'), 'B+');
  assert.equal(getSameRankUniversities(tsukuba, universities).some(({id}) => id === 'kyoto-institute-of-technology'), false);
});

test('school sorting uses subdivisions, preserves ties and places unlisted schools last without mutation', () => {
  const ids = [
    'naist', 'kobe-university', 'tohoku-university', 'UEC', 'kyoto-university',
    'tsukuba-university', 'osaka-university', 'tokyo-university', 'nagoya-university',
    'not-in-source', 'institute-of-science-tokyo', 'ryukyu-university', 'hosei-university',
  ];
  const records = Object.freeze(ids.map((id) => Object.freeze({id})));
  const sorted = sortUniversitiesByRank(records);
  assert.deepEqual(sorted.map(({id}) => id), [
    'tokyo-university', 'kyoto-university', 'institute-of-science-tokyo',
    'osaka-university', 'tohoku-university', 'nagoya-university', 'kobe-university',
    'UEC', 'tsukuba-university', 'hosei-university', 'ryukyu-university',
    'naist', 'not-in-source',
  ]);
  assert.deepEqual(records.map(({id}) => id), ids);
  assert.equal(sorted[0], records[7]);
  assert.deepEqual(sortUniversitiesByRank([]), []);
  assert.deepEqual(sortUniversitiesByRank(ids, (id) => id), sorted.map(({id}) => id));
});
