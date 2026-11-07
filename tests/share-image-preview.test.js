const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');

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
  : typeof node === 'string' ? node : text(node?.props?.children || []);
const deferred = () => {
  let resolve, reject;
  const promise = new Promise((done, fail) => {resolve = done; reject = fail;});
  return {promise, resolve, reject};
};

test('the solution sharing entry still mounts and changes the selected content scope', async () => {
  const runtime = createHookRuntime({
    './PreviewModal': () => null,
    'react-icons/fa': {},
    '@site/src/i18n/useUiText': {useUiText: () => ({heading: 'Share as image', scope: 'Scope'})},
    './styles.module.css': new Proxy({}, {get: (_, key) => key}),
  });
  const ShareAsImage = runtime.load('src/components/ShareAsImage/index.jsx').default;
  runtime.mount(() => ShareAsImage({docId: 'school/problem', title: 'A problem'}));
  const chooser = () => find(runtime.current, node => node.type === 'select');
  assert.equal(chooser().props.value, 'all');
  chooser().props.onChange({target: {value: 'solution'}});
  await runtime.flush();
  assert.equal(chooser().props.value, 'solution');
  assert.equal(find(runtime.current, node => node.type === 'button').props.disabled, false);
  runtime.unmount();
});

function fixture(navigator = {}, options = {}) {
  const labels = {preview: 'Preview', close: 'Close', previewAlt: 'Generated image',
    download: 'Download', share: 'Share', copied: 'Copied', shareSuccess: 'Shared', shareFail: 'Failed', generating: 'Generating'};
  const calls = {downloads: [], removed: 0, focus: [], portals: [], listeners: 0};
  const events = new Map();
  const frames = new Map();
  const doc = {body: {style: {overflow: 'auto'}, appendChild() {}},
    createElement: () => ({click() {calls.downloads.push({url: this.href, filename: this.download});}, remove() {calls.removed++;}}),
    addEventListener(type, fn) {calls.listeners++; events.set(type, fn);},
    removeEventListener(type, fn) {if (events.get(type) === fn) events.delete(type);},
  };
  const focusable = name => ({isConnected: true, focus() {doc.activeElement = this; calls.focus.push(name);}});
  const trigger = focusable('trigger');
  doc.activeElement = options.initialFocusBody ? doc.body : trigger;
  const close = focusable('close');
  const save = focusable('save');
  const share = focusable('share');
  let nextFrame = 0;
  const runtime = createHookRuntime({
    'react-dom': {createPortal(node, target) {calls.portals.push(target); return node;}},
    'react-icons/fa': {},
    '@site/src/i18n/useUiText': {useUiText: () => labels},
    './styles.module.css': new Proxy({}, {get: (_, key) => key}),
  }, {
    document: doc, navigator,
    window: {requestAnimationFrame(fn) {frames.set(++nextFrame, fn); return nextFrame;}, cancelAnimationFrame(id) {frames.delete(id);}},
    ClipboardItem: class {constructor(data) {this.data = data;}},
  });
  const Modal = runtime.load('src/components/ShareAsImage/PreviewModal.jsx').default;
  let props = {image: {url: 'blob:1', blob: new Blob(['page one'], {type: 'image/png'}), filename: 'set-page-1.png'},
    title: 'A set', onClose: () => runtime.unmount(),
    returnFocusRef: options.returnFocus ? {current: trigger} : undefined};
  const render = () => {
    const tree = Modal(props);
    find(tree, node => node.props?.role === 'dialog').props.ref.current = {
      querySelectorAll: () => [close, ...(props.busy ? [] : [save, share])],
      contains: element => [close, save, share].includes(element),
    };
    find(tree, node => node.props?.['aria-label'] === labels.close).props.ref.current = close;
    return tree;
  };
  const flushFrames = () => {const callbacks = [...frames.values()]; frames.clear(); callbacks.forEach(fn => fn());};
  runtime.mount(render);
  flushFrames();
  return {runtime, calls, doc, events, trigger, close, share, labels,
    flushFrames,
    button: label => find(runtime.current, node => node.type === 'button' && text(node) === label),
    update(next) {props = {...props, ...next}; runtime.render();},
    key(key, shiftKey = false) {
      const event = {key, shiftKey, prevented: false, preventDefault() {this.prevented = true;}, stopPropagation() {}};
      events.get('keydown')(event); return event;
    },
  };
}

test('opening and changing an image never downloads; saving is an explicit action', async () => {
  const f = fixture();
  assert.deepEqual(f.calls.downloads, []);
  assert.equal(f.calls.portals[0], f.doc.body);
  f.update({image: {url: 'blob:2', filename: 'set-page-2.png', blob: new Blob(['second'])}});
  await f.runtime.flush();
  assert.deepEqual(f.calls.downloads, []);
  f.button('Download').props.onClick();
  assert.deepEqual(f.calls.downloads, [{url: 'blob:2', filename: 'set-page-2.png'}]);
  assert.equal(f.calls.removed, 1);
  f.runtime.unmount();
});

test('native sharing sends the displayed PNG; cancellation does not copy or download', async () => {
  let sent;
  const navigator = {canShare: () => true, share: async payload => {sent = payload;}};
  const f = fixture(navigator);
  await f.button('Share').props.onClick();
  assert.equal(sent.title, 'A set');
  assert.equal(sent.files[0].name, 'set-page-1.png');
  assert.equal(await sent.files[0].text(), 'page one');
  assert.deepEqual(f.calls.downloads, []);
  navigator.share = async () => {throw new DOMException('Cancelled', 'AbortError');};
  await f.runtime.flush();
  await f.button('Share').props.onClick();
  await f.runtime.flush();
  assert.doesNotMatch(text(f.runtime.current), /Failed/);
  assert.deepEqual(f.calls.downloads, []);
  f.runtime.unmount();
});

test('unsupported native sharing copies the PNG, with explicit-share download fallback', async () => {
  let copied;
  const navigator = {clipboard: {write: async values => {copied = values;}}};
  const f = fixture(navigator);
  await f.button('Share').props.onClick();
  await f.runtime.flush();
  assert.equal(await copied[0].data['image/png'].text(), 'page one');
  assert.deepEqual(f.calls.downloads, []);
  navigator.clipboard.write = async () => {throw new Error('Permission denied');};
  await f.button('Share').props.onClick();
  assert.equal(f.calls.downloads.length, 1);
  f.runtime.unmount();
});

test('a closed preview never performs a delayed fallback download', async () => {
  const pending = deferred();
  const f = fixture({clipboard: {write: () => pending.promise}});
  const sharing = f.button('Share').props.onClick();
  f.key('Escape');
  pending.reject(new Error('Permission denied'));
  await sharing;
  assert.deepEqual(f.calls.downloads, []);
});

test('late clipboard results cannot download a previous page or overwrite the current page feedback', async () => {
  for (const succeeds of [false, true]) {
    const pending = deferred();
    const f = fixture({clipboard: {write: () => pending.promise}});
    f.update({children: 'Page controls'});
    const sharing = f.button('Share').props.onClick();
    await f.runtime.flush();
    assert.equal(find(f.runtime.current, node => node.type === 'fieldset').props.disabled, true);
    f.update({image: {url: 'blob:2', blob: new Blob(['new page']), filename: 'page-2.png'}});
    if (succeeds) pending.resolve();
    else pending.reject(new Error('Permission denied'));
    await sharing;
    await f.runtime.flush();
    assert.deepEqual(f.calls.downloads, []);
    assert.doesNotMatch(text(f.runtime.current), /Copied|Failed|✓/);
    assert.equal(find(f.runtime.current, node => node.type === 'fieldset').props.disabled, false);
    f.runtime.unmount();
  }
});

test('preview traps focus, stays closable during paging, and restores focus and scrolling', async () => {
  const f = fixture();
  assert.equal(f.doc.body.style.overflow, 'hidden');
  assert.equal(f.doc.activeElement, f.close);
  assert.equal(f.key('Tab', true).prevented, true);
  assert.equal(f.doc.activeElement, f.share);
  assert.equal(f.key('Tab').prevented, true);
  assert.equal(f.doc.activeElement, f.close);
  f.update({busy: true, onClose: () => f.runtime.unmount()});
  assert.equal(f.calls.listeners, 1, 'page changes must not recapture focus');
  assert.equal(f.button('Share').props.disabled, true);
  assert.equal(f.button('Download').props.disabled, true);
  assert.equal(f.key('Escape').prevented, true);
  assert.equal(f.doc.body.style.overflow, 'auto');
  f.flushFrames();
  assert.equal(f.doc.activeElement, f.trigger);
  assert.equal(f.events.size, 0);
});

test('explicit return-focus ref wins over body after the generating button is enabled again', () => {
  const f = fixture({}, {initialFocusBody: true, returnFocus: true});
  assert.equal(f.doc.activeElement, f.close);
  f.trigger.disabled = true;
  f.key('Escape');
  assert.deepEqual(f.calls.focus, ['close'], 'focus waits for the close state to commit');
  f.trigger.disabled = false;
  f.flushFrames();
  assert.equal(f.doc.activeElement, f.trigger);
  assert.deepEqual(f.calls.focus, ['close', 'trigger']);
});
