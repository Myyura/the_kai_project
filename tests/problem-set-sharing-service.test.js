const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');
const code = 'KAI-7M2Q-9X4D-P6RC';
const load = (rpc = async () => ({data: null, error: null}), events = []) => createHookRuntime({
  './supabaseClient': {getSupabaseClient: () => ({rpc})},
  './studyEvents': {PROBLEM_SETS_UPDATED_EVENT: 'updated', emitStudyEvent: (name, detail) => events.push({name, detail})},
}, {URL}).load('src/services/problemSetSharingService.js');

test('share-code input accepts copied codes and links without accepting arbitrary strings', () => {
  const service = load();
  for (const input of [code, 'kai 7m2q 9x4d p6rc', '7M2Q9X4DP6RC', `https://example.com/shared-set?code=${code}`]) {
    assert.equal(service.normalizeProblemSetShareCode(input), code);
  }
  for (const input of ['', 'KAI-123', 'a'.repeat(100), 'javascript:alert(1)', 'https://example.com/']) assert.equal(service.normalizeProblemSetShareCode(input), '');
});

test('import defaults to the source name, trims a custom name, and emits refresh only after success', async () => {
  const calls = [], events = [];
  const service = load(async (name, params) => {calls.push({name, params}); return {data: 'new-set', error: null};}, events);
  assert.equal(await service.importSharedProblemSet({code, expectedVersion: 2}), 'new-set');
  assert.equal(calls[0].params.p_title, null);
  await service.importSharedProblemSet({code, title: '  我的线代计划  ', expectedVersion: 2});
  assert.deepEqual(calls[1], {name: 'import_shared_problem_set', params: {p_code: code, p_title: '我的线代计划', p_expected_version: 2}});
  assert.equal(events.length, 2);
  await assert.rejects(service.importSharedProblemSet({code, title: '   '}), /title_invalid/);
  await assert.rejects(service.importSharedProblemSet({code, title: 'x'.repeat(81)}), /title_invalid/);
  assert.equal(calls.length, 2);
  const failure = load(async () => ({data: null, error: {message: 'problem_set_share_version_changed'}}), events);
  await assert.rejects(failure.importSharedProblemSet({code, title: 'Plan', expectedVersion: 1}));
  assert.equal(events.length, 2);
});

test('public share normalization retains every ordered item and strips unsafe links and private identity', () => {
  const {normalizeSharedProblemSet} = load();
  const source = {code, title: 'Set', isActive: true, author: {publicId: 'public', displayName: 'Kai', email: 'private'}, items: Array.from({length: 70}, (_, i) => ({title: `Item ${i}`, docId: `doc-${i}`, permalink: i ? `/docs/doc-${i}` : 'javascript:alert(1)', contentAvailable: true, ownerUserId: 'secret'}))};
  const share = normalizeSharedProblemSet(source);
  assert.equal(share.items.length, 70);
  assert.equal(share.items[69].title, 'Item 69');
  assert.equal(share.items[0].permalink, null);
  assert.equal(share.items[1].permalink, '/docs/doc-1');
  assert.equal('email' in share.author, false);
  assert.equal('ownerUserId' in share.items[0], false);
});

test('publishing never opts into private annotations implicitly', async () => {
  const calls = [];
  const service = load(async (name, params) => {calls.push({name, params});return {data: {code, items: []}, error: null};});
  await service.publishProblemSet('set');
  await service.publishProblemSet('set', {includeAnnotations: true});
  assert.equal(calls[0].params.p_include_annotations, false);
  assert.equal(calls[1].params.p_include_annotations, true);
});

test('shared document links accept catalog URLs and reject external or non-document routes', () => {
  const {normalizeSharedProblemSet} = load();
  const link = permalink => normalizeSharedProblemSet({items: [{permalink}]}).items[0].permalink;
  assert.equal(link('https://runjp.com/docs/school/exam'), '/docs/school/exam');
  assert.equal(link('/docs/school/exam?lang=ja#answer'), '/docs/school/exam?lang=ja#answer');
  for (const value of [null, {}, '/login', '//runjp.com/docs/exam', 'javascript:alert(1)',
    'http://runjp.com/docs/exam', 'https://other.example/docs/exam', 'https://runjp.com.evil.example/docs/exam',
    'https://runjp.com@evil.example/docs/exam', 'https://user:pass@runjp.com/docs/exam',
    'https://runjp.com:444/docs/exam', 'https://runjp.com/login',
    '/docs/../login', '/docs/%2e%2e/login', '/docs/exam\\path', '/docs/exam\npath', '/docs/exam\u007f']) {
    assert.equal(link(value), null, `unsafe link: ${JSON.stringify(value)}`);
  }
});
