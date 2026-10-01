const assert = require('node:assert/strict');
const test = require('node:test');
const createSourceLoader = require('./helpers/load-source.cjs');

const load = createSourceLoader();
const {buildTopicBrowseUrl, readTopicBrowseSelection, UNCLASSIFIED_ANCHOR} = load('src/utils/topicBrowseUrl.js');
const {getTopicAnchorId} = load('src/utils/tags.js');
const topic = 'Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors';
const browse = {
  topics: [{id: topic}],
  directDocIds: ['tokyo'],
  docIds: ['tokyo', 'kyoto', 'unknown', 'missing'],
  documents: {
    tokyo: {universityId: 'tokyo-university'},
    kyoto: {universityId: 'kyoto-university'},
    unknown: {},
  },
};
const location = (url) => new URL(url, 'https://runjp.com');

test('school filters survive links, reloads, and return navigation with the selected topic', () => {
  const initial = location(`/docs/tags/mathematics-linear-algebra?lang=ja#${getTopicAnchorId(topic)}`);
  const filteredUrl = buildTopicBrowseUrl(initial, {topic, school: 'tokyo-university'});
  assert.equal(filteredUrl, `/docs/tags/mathematics-linear-algebra?lang=ja&school=tokyo-university#${getTopicAnchorId(topic)}`);
  assert.deepEqual(readTopicBrowseSelection(location(filteredUrl), browse), {topic, school: 'tokyo-university'});

  const allTopicsUrl = buildTopicBrowseUrl(location(filteredUrl), {topic: 'all', school: 'tokyo-university'});
  assert.deepEqual(readTopicBrowseSelection(location(allTopicsUrl), browse), {topic: 'all', school: 'tokyo-university'});
  // Reading the earlier history entry restores both controls together.
  assert.deepEqual(readTopicBrowseSelection(location(filteredUrl), browse), {topic, school: 'tokyo-university'});

  const clearedUrl = buildTopicBrowseUrl(location(filteredUrl), {topic, school: 'all'});
  assert.equal(clearedUrl, `${initial.pathname}${initial.search}${initial.hash}`);
});

test('existing topic hashes remain valid and malformed or unavailable filters fall back safely', () => {
  assert.deepEqual(readTopicBrowseSelection(location(`#${getTopicAnchorId(topic)}`), browse), {topic, school: 'all'});
  assert.deepEqual(readTopicBrowseSelection(location(`?school=other#${UNCLASSIFIED_ANCHOR}`), browse), {topic: 'unclassified', school: 'other'});
  assert.deepEqual(readTopicBrowseSelection(location('?school=unknown-school#%E0%A4%A'), browse), {topic: 'all', school: 'all'});
  assert.deepEqual(readTopicBrowseSelection(location(`#${UNCLASSIFIED_ANCHOR}`), {...browse, directDocIds: []}), {topic: 'all', school: 'all'});
});

test('changing schools preserves the topic and unrelated search parameters without duplicate filters', () => {
  const source = location(`/docs/tags/example?lang=en&school=tokyo-university&school=other#${UNCLASSIFIED_ANCHOR}`);
  const result = buildTopicBrowseUrl(source, {topic: 'unclassified', school: 'kyoto-university'});
  assert.equal(result, `/docs/tags/example?lang=en&school=kyoto-university#${UNCLASSIFIED_ANCHOR}`);
  assert.deepEqual(readTopicBrowseSelection(location(result), browse), {topic: 'unclassified', school: 'kyoto-university'});
});
