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
const text = node => Array.isArray(node) ? node.map(text).join('')
  : typeof node === 'string' || typeof node === 'number' ? String(node) : text(node?.props?.children || []);
const problemSet = () => ({id: 'set-a', title: 'My set', description: 'Set description', items: [
  {docId: 'school/program/year/problem', title: 'Problem one', annotation: 'Practice boundary conditions'},
  {docId: 'school/program/year/another', title: 'Problem two', annotation: ''},
]});
const snapshot = (set, extra = {}) => ({...set, code: 'KAI-1234-5678-ABCD', version: 1,
  includeAnnotations: true, isActive: true, author: {displayName: 'Curator'}, ...extra});

function fixture(options = {}) {
  let set = options.set || problemSet();
  const calls = {publish: [], active: [], prepare: [], render: [], download: [], revoked: [], plans: []};
  const actions = {
    fetch: async () => options.share || null,
    publish: async (_, settings) => snapshot(set, {...settings, version: (options.share?.version || 0) + 1}),
    active: async () => ({...options.share, isActive: true}),
    prepare: async () => {
      const plan = {pageCount: 3, disposed: false, dispose() {this.disposed = true;},
        async renderPage(page, signal) {
          calls.render.push({page, signal});
          return actions.render(page, signal);
        }};
      calls.plans.push(plan);
      return plan;
    },
    render: async page => ({blob: new Blob(['png']), filename: `page-${page + 1}.png`}),
  };
  const dependencies = {
    'react-icons/fa': {}, '@docusaurus/useBaseUrl': value => value,
    '@site/src/context/LanguageContext': {useCurrentLanguage: () => 'zh'},
    '@site/src/hooks/usePublicProfile': {usePublicProfile: () => ({profile: {displayName: 'Me'}})},
    './styles.module.css': new Proxy({}, {get: (_, key) => key}),
    '@site/src/services/problemSetSharingService': {
      fetchMyProblemSetShare: id => actions.fetch(id),
      publishProblemSet: (...args) => {calls.publish.push(args); return actions.publish(...args);},
      setProblemSetShareActive: (...args) => {calls.active.push(args); return actions.active(...args);},
      getProblemSetShareErrorCode: () => 'failed', createProblemSetShareUrl: () => '/shared-set',
    },
    './exportImage': {prepareProblemSetShareImages: args => {calls.prepare.push(args); return actions.prepare(args);}},
  };
  let urls = 0;
  const runtime = createHookRuntime(dependencies, {
    URL: {createObjectURL: () => `blob:${++urls}`, revokeObjectURL: url => calls.revoked.push(url)},
    document: {body: {appendChild() {}}, createElement: () => ({
      click() {calls.download.push({url: this.href, filename: this.download});}, remove() {},
    })},
  });
  const messages = runtime.load('src/i18n/problemSetSharingMessages.js');
  dependencies['@site/src/i18n/problemSetSharingMessages'] = messages;
  const {default: Panel, ShareChecklist} = runtime.load('src/components/ProblemSetSharing/SharePanel.jsx');
  runtime.mount(() => Panel({problemSet: set, onClose() {runtime.unmount();}}));
  return {
    runtime, calls, actions, t: messages.problemSetSharingMessages.zh,
    updateSet(next) {set = next; runtime.render();},
    checkbox: () => find(runtime.current, node => node.type === 'input' && node.props.type === 'checkbox'),
    button: label => find(runtime.current, node => node.type === 'button' && text(node).includes(label)),
    preview: () => find(runtime.current, node => node.type === ShareChecklist).props.share,
    checklist: () => ShareChecklist(find(runtime.current, node => node.type === ShareChecklist).props),
  };
}

test('draft exports publish current settings and render the returned snapshot before downloading', async () => {
  const f = fixture();
  await f.runtime.flush();
  assert.equal(f.checkbox().props.checked, true);
  assert.match(text(f.checklist()), /Practice boundary conditions/);
  assert.match(text(f.checklist()), /暂无选题说明/);
  assert.doesNotMatch(text(f.checklist()), /school\/program/);
  const saved = snapshot(problemSet(), {title: 'Server snapshot title'});
  f.actions.publish = async () => saved;
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  assert.deepEqual(f.calls.publish, [['set-a', {includeAnnotations: true}]]);
  assert.equal(f.calls.prepare[0].share, saved, 'export uses the returned snapshot, not stale React state');
  assert.deepEqual(f.calls.download, [{url: 'blob:1', filename: 'page-1.png'}]);
  const chooser = find(f.runtime.current, node => node.type === 'select');
  await chooser.props.onChange({target: {value: '2'}});
  await f.runtime.flush();
  assert.deepEqual(f.calls.render.map(call => call.page), [0, 2]);
  assert.equal(f.calls.download.length, 1, 'page changes retain explicit manual download');
  assert.equal(find(f.runtime.current, node => node.type === 'a' && node.props.download).props.download, 'page-3.png');
  assert.deepEqual(f.calls.revoked, ['blob:1']);
  f.runtime.unmount();
  assert.equal(f.calls.plans[0].disposed, true);
  assert.deepEqual(f.calls.revoked, ['blob:1', 'blob:2']);
});

test('changed settings update the preview as a draft and export the new saved snapshot', async () => {
  const set = problemSet();
  const f = fixture({set, share: snapshot(set)});
  await f.runtime.flush();
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  f.checkbox().props.onChange({target: {checked: false}});
  await f.runtime.flush();
  assert.equal(f.preview().includeAnnotations, false);
  assert.equal(f.preview().version, 0);
  assert.equal(f.preview().code, '');
  assert.doesNotMatch(text(f.checklist()), /Practice boundary conditions/);
  assert.equal(find(f.runtime.current, node => node.type === 'a' && node.props.download), undefined);
  assert.equal(f.calls.plans[0].disposed, true);
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  assert.deepEqual(f.calls.publish, [['set-a', {includeAnnotations: false}]]);
  assert.equal(f.calls.prepare[1].share.includeAnnotations, false);
  assert.equal(f.calls.prepare[1].share.version, 2);
  assert.equal(f.calls.download.length, 2);
  f.runtime.unmount();
});

test('an existing explicit exclusion stays off and a stopped share resumes without changing that choice', async () => {
  const set = problemSet();
  const f = fixture({set, share: snapshot(set, {includeAnnotations: false, isActive: false})});
  await f.runtime.flush();
  assert.equal(f.checkbox().props.checked, false);
  assert.doesNotMatch(text(f.checklist()), /Practice boundary conditions/);
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  assert.deepEqual(f.calls.active, [['set-a', true]]);
  assert.deepEqual(f.calls.publish, []);
  assert.equal(f.calls.prepare[0].share.includeAnnotations, false);
  f.runtime.unmount();
});

test('a failed update never downloads the old image and can be retried', async () => {
  const set = problemSet();
  const f = fixture({set, share: snapshot(set)});
  await f.runtime.flush();
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  f.updateSet({...set, description: 'Updated description'});
  await f.runtime.flush();
  const publish = f.actions.publish;
  f.actions.publish = async () => {throw new Error('offline');};
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  assert.equal(f.calls.prepare.length, 1);
  assert.equal(f.calls.download.length, 1);
  assert.equal(find(f.runtime.current, node => node.type === 'a' && node.props.download), undefined);
  assert.equal(text(find(f.runtime.current, node => node.props?.role === 'alert')), f.t.errors.failed);
  f.actions.publish = publish;
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  assert.equal(f.calls.prepare[1].share.description, 'Updated description');
  assert.equal(f.calls.download.length, 2);
  f.runtime.unmount();
});

test('image failure retries the saved share without publishing another version', async () => {
  const f = fixture();
  await f.runtime.flush();
  const render = f.actions.render;
  f.actions.render = async () => {throw new Error('encoding failed');};
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  assert.equal(f.calls.publish.length, 1);
  assert.equal(f.calls.download.length, 0);
  assert.equal(text(find(f.runtime.current, node => node.props?.role === 'alert')), f.t.imageFailed);
  f.actions.render = render;
  await f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  assert.equal(f.calls.publish.length, 1);
  assert.equal(f.calls.plans[0].disposed, true);
  assert.equal(f.calls.download.length, 1);
  f.runtime.unmount();
});

test('switching sets during publication ignores its late result', async () => {
  const f = fixture();
  await f.runtime.flush();
  const save = deferred();
  f.actions.publish = () => save.promise;
  const exporting = f.button(f.t.exportImage).props.onClick();
  f.updateSet({...problemSet(), id: 'set-b', title: 'Another set'});
  await f.runtime.flush();
  save.resolve(snapshot(problemSet()));
  await exporting;
  await f.runtime.flush();
  assert.equal(f.calls.prepare.length, 0);
  assert.equal(f.calls.download.length, 0);
  assert.equal(f.preview().title, 'Another set');
  f.runtime.unmount();
});

test('editing the current set during publication suppresses an outdated export and allows another try', async () => {
  const f = fixture();
  await f.runtime.flush();
  const save = deferred();
  const publish = f.actions.publish;
  f.actions.publish = () => save.promise;
  const exporting = f.button(f.t.exportImage).props.onClick();
  f.updateSet({...problemSet(), description: 'Edited during save'});
  await f.runtime.flush();
  save.resolve(snapshot(problemSet()));
  await exporting;
  await f.runtime.flush();
  assert.equal(f.calls.prepare.length, 0);
  assert.equal(f.calls.download.length, 0);
  assert.equal(f.preview().description, 'Edited during save');
  f.actions.publish = publish;
  await f.button(f.t.exportImage).props.onClick();
  assert.equal(f.calls.prepare[0].share.description, 'Edited during save');
  assert.equal(f.calls.download.length, 1);
  f.runtime.unmount();
});

test('switching sets disposes a late image plan, and unmounting suppresses a late rendered image', async () => {
  const f = fixture({share: snapshot(problemSet())});
  await f.runtime.flush();
  const prepared = deferred();
  f.actions.prepare = () => prepared.promise;
  const exporting = f.button(f.t.exportImage).props.onClick();
  await f.runtime.flush();
  f.updateSet({...problemSet(), id: 'set-b'});
  await f.runtime.flush();
  const plan = {disposed: false, dispose() {this.disposed = true;}};
  prepared.resolve(plan);
  await exporting;
  assert.equal(plan.disposed, true);
  assert.equal(f.calls.prepare[0].signal.aborted, true);
  assert.equal(f.calls.download.length, 0);
  f.runtime.unmount();

  const g = fixture({share: snapshot(problemSet())});
  await g.runtime.flush();
  const rendered = deferred();
  g.actions.render = () => rendered.promise;
  const pending = g.button(g.t.exportImage).props.onClick();
  await g.runtime.flush();
  g.runtime.unmount();
  rendered.resolve({blob: new Blob(['late']), filename: 'late.png'});
  await pending;
  assert.equal(g.calls.render[0].signal.aborted, true);
  assert.equal(g.calls.plans[0].disposed, true);
  assert.equal(g.calls.download.length, 0);
});

test('public import previews show selection notes and their fallback without paths, respecting exclusions', async () => {
  for (const includeAnnotations of [true, false]) {
    const set = problemSet();
    set.items[0] = {...set.items[0], contentAvailable: true, permalink: '/docs/example'};
    const runtime = createHookRuntime({
      'react-icons/fa': {}, '@docusaurus/Link': 'a', './import.module.css': {},
      '@site/src/hooks/useAuth': {useAuth: () => ({isLoggedIn: false, authReady: true})},
      '@site/src/context/LanguageContext': {normalizeLanguage: value => value, useCurrentLanguage: () => 'zh'},
      '@site/src/services/authReturn': {},
      '@site/src/services/problemSetSharingService': {
        normalizeProblemSetShareCode: value => value,
        fetchSharedProblemSet: async () => snapshot(set, {includeAnnotations}),
      },
    });
    const ImportPanel = runtime.load('src/components/ProblemSetSharing/ImportPanel.jsx').default;
    runtime.mount(() => ImportPanel({initialCode: 'KAI-1234-5678-ABCD'}));
    await runtime.flush();
    const rendered = text(runtime.current);
    assert.doesNotMatch(rendered, /school\/program/);
    assert.equal(rendered.includes('Practice boundary conditions'), includeAnnotations);
    assert.equal(rendered.includes('暂无选题说明'), includeAnnotations);
    assert.equal(find(runtime.current, node => node.type === 'a' && text(node) === 'Problem one').props.to, '/docs/example');
    runtime.unmount();
  }
});
