const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');
const createSourceLoader = require('./helpers/load-source.cjs');

test('problem-set details use the set title, while items retain their own problem titles', async () => {
  const client = {rpc: async (name) => ({data: name === 'get_my_problem_sets'
    ? [{id: 'set', title: 'My set', description: 'Set description', item_count: 1}]
    : [{set_id: 'set', set_title: 'My set', set_description: 'Set description', item_id: 'item', doc_id: 'example', title: 'First problem', progress_status: 'completed'}], error: null})};
  const {load} = createHookRuntime({'./supabaseClient': {getSupabaseClient: () => client}});
  const service = load('src/services/problemSetService.js');
  const [listItem] = await service.fetchMyProblemSets();
  const detail = await service.fetchMyProblemSet('set');
  assert.equal(detail.title, listItem.title);
  assert.equal(detail.description, listItem.description);
  assert.equal(detail.items[0].title, 'First problem');
  assert.equal(detail.completedCount, 1);
});

test('missing difficulty scores stay null rather than becoming a zero vote', async () => {
  const client = {rpc: async () => ({data: [{doc_id: 'example', user_difficulty: null, average_score: null, bayesian_score: null}], error: null})};
  const {load} = createHookRuntime({'./supabaseClient': {getSupabaseClient: () => client}});
  const value = await load('src/services/difficultyService.js').fetchExamDifficulty('example');
  assert.equal(value.userDifficulty, null);
  assert.equal(value.averageScore, null);
  assert.equal(value.bayesianScore, null);
});

test('sign-out failures are propagated and verified-user results have one shape', async () => {
  const failure = Error('sign-out failed');
  const user = {id: 'test'};
  const client = {auth: {
    signOut: async () => ({error: failure}),
    getUser: async () => ({data: {user}, error: null}),
  }};
  const {load} = createHookRuntime({'./supabaseClient': {getSupabaseClient: () => client}});
  const service = load('src/services/authService.js');
  assert.equal(await service.getVerifiedUser(), user);
  await assert.rejects(service.signOut(), failure);
});

test('blocked auth-return storage does not break login navigation', () => {
  const service = createSourceLoader({window: {}, sessionStorage: {
    getItem() {throw Error('blocked');},
    setItem() {throw Error('blocked');},
    removeItem() {throw Error('blocked');},
  }})('src/services/authReturn.js');
  assert.equal(service.getAuthReturnTarget(), '/me');
  assert.equal(service.consumeAuthReturnIntent({intent: 'add-to-set'}), false);
  assert.equal(service.saveAuthReturnIntent({returnTo: '/docs/example'}), false);
});

test('auth-return intents reject expired timestamps and redirect control characters', () => {
  let stored = JSON.stringify({returnTo: '/docs/example', createdAt: 'invalid'});
  const service = createSourceLoader({window: {}, sessionStorage: {
    getItem: () => stored,
    setItem: (_key, value) => {stored = value;},
    removeItem: () => {stored = null;},
  }})('src/services/authReturn.js');
  assert.equal(service.getAuthReturnTarget(), '/me');
  assert.equal(stored, null);
  assert.equal(service.saveAuthReturnIntent({returnTo: '/\n/other.example'}), false);
  assert.equal(service.saveAuthReturnIntent({returnTo: '/docs/example?school=tokyo#answer', intent: 'add-to-set'}), true);
  assert.equal(service.getAuthReturnTarget(), '/docs/example?school=tokyo#answer');
});

test('study events have one subscription path and unsubscribe cleanly', () => {
  const window = new EventTarget();
  const service = createSourceLoader({window, CustomEvent})('src/services/studyEvents.js');
  const values = [];
  const remove = service.addStudyEventListener(service.NOTES_UPDATED_EVENT, (event) => values.push(event.detail));
  service.emitStudyEvent(service.NOTES_UPDATED_EVENT, {docId: 'example'});
  remove();
  service.emitStudyEvent(service.NOTES_UPDATED_EVENT, {docId: 'ignored'});
  assert.deepEqual(values, [{docId: 'example'}]);
  const server = createSourceLoader({window: undefined})('src/services/studyEvents.js');
  assert.doesNotThrow(() => server.addStudyEventListener(server.NOTES_UPDATED_EVENT, () => {})());
  assert.doesNotThrow(() => server.emitStudyEvent(server.NOTES_UPDATED_EVENT));
});
