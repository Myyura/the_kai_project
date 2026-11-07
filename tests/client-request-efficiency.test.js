const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');

const deferred = () => {
  let resolve, reject;
  const promise = new Promise((done, fail) => {resolve = done; reject = fail;});
  return {promise, resolve, reject};
};
const find = (node, predicate) => {
  if (!node || typeof node !== 'object') return undefined;
  if (Array.isArray(node)) {
    for (const child of node) {const result = find(child, predicate); if (result) return result;}
  } else {
    if (predicate(node)) return node;
    return find(node.props?.children, predicate);
  }
};
const button = (tree, label) => find(tree, node => node.type === 'button' && node.props.children?.includes(label));

function setFixture(mode) {
  const window = new EventTarget();
  window.clearTimeout = () => {};
  window.setTimeout = () => 1;
  const auth = {isLoggedIn: true, authReady: true, user: {id: 'owner'}};
  const calls = [];
  const delayedReads = new Map();
  const sets = [{id: 'plan', title: 'Plan', kind: 'custom', item_count: 1, contains_doc: false}];
  let items = [{item_id: 'item', doc_id: 'example', title: 'Example', content_available: true}];
  const rpc = async (name, params) => {
    calls.push(name);
    const delay = delayedReads.get(name);
    if (delay) {delayedReads.delete(name); await delay.promise;}
    if (name === 'get_my_problem_sets') return {data: sets.map(set => ({...set}))};
    if (name === 'get_my_problem_set') return {data: (items.length ? items : [{}]).map(item => ({set_id: 'plan', kind: 'custom', set_title: 'Plan', ...item}))};
    if (name === 'create_my_problem_set') {
      sets.push({id: 'created', title: params.p_title, kind: 'custom', item_count: 0, contains_doc: false});
      return {data: 'created'};
    }
    if (name === 'set_doc_problem_set_memberships') {
      for (const set of sets) set.contains_doc = params.p_set_ids.includes(set.id);
    }
    if (name === 'remove_problem_set_items') items = items.filter(item => !params.p_item_ids.includes(item.item_id));
    return {data: null};
  };
  const text = new Proxy({
    defaultDescriptions: {}, statusLabels: {},
    problemCount: n => `${n} problems`, completedCount: n => `${n} complete`, reviewingCount: n => `${n} reviewing`,
    selectItem: title => `Select ${title}`, removeItem: title => `Remove ${title}`,
  }, {get: (target, key) => target[key] || key});
  const dependencies = {
    'react-icons/fa': {}, '@docusaurus/Link': 'a',
    '@docusaurus/router': {useHistory: () => ({}), useLocation: () => ({search: mode === 'detail' ? '?setId=plan' : ''})},
    './useAuth': {useAuth: () => auth}, '@site/src/hooks/useAuth': {useAuth: () => auth},
    './supabaseClient': {getSupabaseClient: () => ({rpc})},
    '@site/src/hooks/useProblemSetsFeature': {useProblemSetsFeature: () => true},
    '@site/src/i18n/useUiText': {useUiText: () => text},
    '@site/src/services/documentMetadata': {getDocumentTitle: (_id, title) => title},
    '@site/src/services/authReturn': {consumeAuthReturnIntent: () => false},
    '@site/src/services/problemSetErrors': {getProblemSetMembershipErrorCode: () => 'failed'},
    '@site/src/components/ProblemSetSharing/SharePanel': () => null,
    '@site/src/components/ProblemSetSharing/ImportPanel': () => null,
    './styles.module.css': {},
  };
  const runtime = createHookRuntime(dependencies, {window, CustomEvent,
    document: {addEventListener() {}, removeEventListener() {}}});
  dependencies['@site/src/hooks/useProblemSets'] = runtime.load('src/hooks/useProblemSets.js');
  dependencies['@site/src/services/problemSetService'] = runtime.load('src/services/problemSetService.js');
  dependencies['@site/src/services/problemSetTypes'] = runtime.load('src/services/problemSetTypes.js');
  if (mode === 'picker') {
    const Picker = runtime.load('src/components/AddToProblemSet/index.jsx').default;
    runtime.mount(() => Picker({docId: 'example'}));
  } else {
    const Content = runtime.load('src/components/ProblemSetsContent/index.jsx').default;
    runtime.mount(() => {const child = Content(); return child.type(child.props);});
  }
  return {runtime, calls, delayNextRead: (name) => {
    const delay = deferred();
    delayedReads.set(name, delay);
    return delay;
  }};
}

test('creating and saving picker memberships each refresh the list once and preserve the new selection', async () => {
  const {runtime, calls, delayNextRead} = setFixture('picker');
  await runtime.flush();
  find(runtime.current, node => node.type === 'button').props.onClick();
  await runtime.flush();
  find(runtime.current, node => node.type === 'input' && node.props.placeholder === 'quickCreatePlaceholder')
    .props.onChange({target: {value: 'Created plan'}});
  await runtime.flush();
  const reload = delayNextRead('get_my_problem_sets');
  await button(runtime.current, 'create').props.onClick();
  await runtime.flush();
  assert.equal(calls.filter(name => name === 'get_my_problem_sets').length, 2, 'initial read plus one mutation refresh');
  assert.equal(find(runtime.current, node => node.type === 'input' && node.props.type === 'checkbox').props.disabled, true,
    'membership edits remain disabled until the refreshed list arrives');
  assert.equal(button(runtime.current, 'saveMemberships').props.disabled, true);
  reload.resolve();
  await runtime.flush();
  const created = find(runtime.current, node => node.type === 'label' && find(node, child => child.type === 'strong' && child.props.children.includes('Created plan')));
  assert.equal(find(created, node => node.type === 'input').props.checked, true);
  await button(runtime.current, 'saveMemberships').props.onClick();
  await runtime.flush();
  assert.equal(calls.filter(name => name === 'get_my_problem_sets').length, 3);
  assert.ok(find(runtime.current, node => node.props?.role === 'status' && node.props.children.includes('saved')));
  runtime.unmount();
});

test('creating a set refreshes the list once, and explicit user refresh still reloads', async () => {
  const {runtime, calls} = setFixture('list');
  await runtime.flush();
  find(runtime.current, node => node.props?.id === 'problem-set-title').props.onChange({target: {value: 'Created plan'}});
  await runtime.flush();
  await find(runtime.current, node => node.type === 'form').props.onSubmit({preventDefault() {}});
  await runtime.flush();
  assert.equal(calls.filter(name => name === 'get_my_problem_sets').length, 2);
  assert.ok(find(runtime.current, node => node.type === 'h3' && node.props.children.includes('Created plan')));
  await find(runtime.current, node => node.props?.['aria-label'] === 'refresh').props.onClick();
  await runtime.flush();
  assert.equal(calls.filter(name => name === 'get_my_problem_sets').length, 3);
  runtime.unmount();
});

test('removing a detail item performs one detail refresh and one summary refresh', async () => {
  const {runtime, calls} = setFixture('detail');
  await runtime.flush();
  await find(runtime.current, node => node.props?.['aria-label'] === 'Remove Example').props.onClick();
  await runtime.flush();
  assert.equal(calls.filter(name => name === 'get_my_problem_set').length, 2);
  assert.equal(calls.filter(name => name === 'get_my_problem_sets').length, 2);
  assert.equal(find(runtime.current, node => node.props?.['aria-label'] === 'Remove Example'), undefined);
  runtime.unmount();
});

test('annotation and note consumers share only concurrent reads, with retry after failure', async () => {
  let reads = 0;
  let pending = deferred();
  const runtime = createHookRuntime({
    './useAuth': {useAuth: () => ({isLoggedIn: true, user: {id: 'owner'}})},
    '../services/studyDataService': {fetchDocNote: () => {reads += 1; return pending.promise;}},
  }, {window: new EventTarget(), CustomEvent});
  const {useDocNotes} = runtime.load('src/hooks/useNotes.js');
  runtime.mount(() => [useDocNotes('example'), useDocNotes('example')]);
  await runtime.flush();
  assert.equal(reads, 1);
  pending.resolve({content: 'Saved note'});
  await runtime.flush();
  assert.deepEqual(runtime.current.map(note => note.content), ['Saved note', 'Saved note']);
  pending = deferred();
  void runtime.current[0].refresh();
  void runtime.current[1].refresh();
  await runtime.flush();
  assert.equal(reads, 2, 'settled reads are not a permanent cache');
  pending.reject(new Error('offline'));
  await runtime.flush();
  assert.ok(runtime.current.every(note => note.error?.message === 'offline'));
  pending = deferred();
  void runtime.current[0].refresh();
  await runtime.flush();
  assert.equal(reads, 3, 'failed requests release the shared promise');
  pending.resolve({content: 'Retried note'});
  await runtime.flush();
  assert.equal(runtime.current[0].content, 'Retried note');
  runtime.unmount();
});

test('concurrent note reads stay isolated when the account changes', async () => {
  const first = deferred(), second = deferred();
  let userId = 'first';
  let reads = 0;
  const runtime = createHookRuntime({
    './useAuth': {useAuth: () => ({isLoggedIn: true, user: {id: userId}})},
    '../services/studyDataService': {fetchDocNote: () => {reads += 1; return userId === 'first' ? first.promise : second.promise;}},
  }, {window: new EventTarget(), CustomEvent});
  const {useDocNotes} = runtime.load('src/hooks/useNotes.js');
  runtime.mount(() => [useDocNotes('example'), useDocNotes('example')]);
  await runtime.flush();
  userId = 'second'; runtime.render();
  await runtime.flush();
  assert.equal(reads, 2, 'one independent request per account');
  second.resolve({content: 'Second account'});
  await runtime.flush();
  first.resolve({content: 'First account'});
  await runtime.flush();
  assert.deepEqual(runtime.current.map(note => note.content), ['Second account', 'Second account']);
  runtime.unmount();
});

test('note writes invalidate older shared reads without releasing a newer read', async () => {
  const first = deferred(), second = deferred();
  let reads = 0;
  const window = new EventTarget();
  const runtime = createHookRuntime({
    './useAuth': {useAuth: () => ({isLoggedIn: true, user: {id: 'owner'}})},
    '../services/studyDataService': {fetchDocNote: () => (++reads === 1 ? first : second).promise},
  }, {window, CustomEvent});
  const {useDocNotes} = runtime.load('src/hooks/useNotes.js');
  const {emitStudyEvent, NOTES_UPDATED_EVENT} = runtime.load('src/services/studyEvents.js');
  runtime.mount(() => [useDocNotes('example'), useDocNotes('example')]);
  await runtime.flush();
  emitStudyEvent(NOTES_UPDATED_EVENT, {userId: 'owner', docId: 'example', value: {content: 'Saved edit'}});
  await runtime.flush();
  void runtime.current[0].refresh();
  await runtime.flush();
  assert.equal(reads, 2, 'a read after the write cannot reuse the older response');
  first.resolve({content: 'Before edit'});
  await runtime.flush();
  assert.deepEqual(runtime.current.map(note => note.content), ['Saved edit', 'Saved edit']);
  void runtime.current[1].refresh();
  await runtime.flush();
  assert.equal(reads, 2, 'settling the older request leaves the newer shared read intact');
  second.resolve({content: 'Saved edit'});
  await runtime.flush();
  assert.deepEqual(runtime.current.map(note => note.content), ['Saved edit', 'Saved edit']);
  runtime.unmount();
});
