const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');
const createSourceLoader = require('./helpers/load-source.cjs');

const errors = createSourceLoader()('src/services/problemSetErrors.js');

test('membership failures distinguish missing document data from other database failures', () => {
  const classify = errors.getProblemSetMembershipErrorCode;
  assert.equal(classify({code: '22023', message: 'invalid_doc_id'}), 'invalidDoc');
  assert.equal(classify({code: '22023', message: 'invalid_problem_set'}), 'invalidSet');
  assert.equal(classify({code: '22023', message: 'invalid_title'}), 'failed');
  assert.equal(classify({code: '54000', message: 'problem_set_item_limit_reached'}), 'limitReached');
  assert.equal(classify({code: '28000', message: 'not_authenticated'}), 'unauthenticated');
  assert.equal(classify({code: 'PGRST301', message: 'JWT expired'}), 'unauthenticated');
  assert.equal(classify({code: 'PGRST202', message: 'RPC missing'}), 'unavailable');
  assert.equal(classify(new Error('Failed to fetch')), 'failed');
});

const find = (node, predicate) => {
  if (!node || typeof node !== 'object') return undefined;
  if (Array.isArray(node)) {
    for (const child of node) {const found = find(child, predicate); if (found) return found;}
  } else {
    if (predicate(node)) return node;
    return find(node.props?.children, predicate);
  }
  return undefined;
};

function fixture() {
  let resolveSave;
  let rejectSave;
  const pendingSave = new Promise((resolve, reject) => {resolveSave = resolve; rejectSave = reject;});
  const calls = [];
  const t = new Proxy({
    problemCount: (count) => `${count} problems`,
    membershipErrors: {invalidDoc: 'Document unavailable for saving', failed: 'Save failed'},
  }, {get: (target, key) => target[key] || key});
  const auth = {isLoggedIn: true, authReady: true, user: {id: 'owner'}};
  const runtime = createHookRuntime({
    'react-icons/fa': {},
    '@site/src/hooks/useAuth': {useAuth: () => auth},
    '@site/src/hooks/useProblemSets': {useProblemSets: () => ({sets, loading: false, error: null, refresh: async () => sets})},
    '@site/src/hooks/useProblemSetsFeature': {useProblemSetsFeature: () => true},
    '@site/src/i18n/useUiText': {useUiText: () => t},
    '@site/src/services/problemSetTypes': {PROBLEM_SET_KIND: {CUSTOM: 'custom', LATER: 'system_later', MISTAKES: 'system_mistakes'}},
    '@site/src/services/authReturn': {consumeAuthReturnIntent: () => false, saveAuthReturnIntent: () => {}},
    '@site/src/services/problemSetErrors': errors,
    '@site/src/services/problemSetService': {setDocProblemSetMemberships: (...args) => {calls.push(args); return pendingSave;}},
    './styles.module.css': {},
  }, {window: {clearTimeout: () => {}, setTimeout: () => 1}, document: {addEventListener() {}, removeEventListener() {}}});
  const sets = [{id: 'plan', title: 'Plan', kind: 'custom', itemCount: 0, containsDoc: false}];
  const Picker = runtime.load('src/components/AddToProblemSet/index.jsx').default;
  let docId = 'first-problem';
  runtime.mount(() => Picker({docId}));
  return {runtime, calls, resolveSave, rejectSave, setDoc: value => {docId = value; runtime.render();}};
}

test('failed membership saves keep selections, explain the failure, and block duplicate submissions', async () => {
  const {runtime, calls, rejectSave} = fixture();
  await runtime.flush();
  find(runtime.current, node => node.type === 'button').props.onClick();
  await runtime.flush();
  find(runtime.current, node => node.type === 'input' && node.props.type === 'checkbox').props.onChange();
  await runtime.flush();
  const save = find(runtime.current, node => node.type === 'button' && node.props.children.includes('saveMemberships'));
  void save.props.onClick();
  void save.props.onClick();
  await runtime.flush();
  assert.deepEqual(calls, [['first-problem', ['plan']]]);
  assert.equal(find(runtime.current, node => node.type === 'input' && node.props.type === 'checkbox').props.disabled, true);
  rejectSave({code: '22023', message: 'invalid_doc_id'});
  await runtime.flush();
  const checkbox = find(runtime.current, node => node.type === 'input' && node.props.type === 'checkbox');
  assert.equal(checkbox.props.checked, true);
  assert.equal(checkbox.props.disabled, false);
  const alert = find(runtime.current, node => node.props?.role === 'alert');
  assert.deepEqual(alert.props.children, ['Document unavailable for saving']);
  assert.ok(find(runtime.current, node => node.props?.role === 'dialog'));
  runtime.unmount();
});

test('a response for the previous document cannot reopen or report an error in the new picker', async () => {
  const {runtime, rejectSave, setDoc} = fixture();
  await runtime.flush();
  find(runtime.current, node => node.type === 'button').props.onClick();
  await runtime.flush();
  const save = find(runtime.current, node => node.type === 'button' && node.props.children.includes('saveMemberships'));
  void save.props.onClick();
  await runtime.flush();
  setDoc('another-problem');
  await runtime.flush();
  find(runtime.current, node => node.type === 'button').props.onClick();
  await runtime.flush();
  rejectSave({code: '22023', message: 'invalid_doc_id'});
  await runtime.flush();
  assert.ok(find(runtime.current, node => node.props?.role === 'dialog'));
  assert.equal(find(runtime.current, node => node.props?.role === 'alert'), undefined);
  assert.equal(find(runtime.current, node => node.type === 'button' && node.props.children.includes('saveMemberships')).props.disabled, false);
  runtime.unmount();
});
