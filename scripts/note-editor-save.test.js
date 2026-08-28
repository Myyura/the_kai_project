const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

const schedulerUrl = pathToFileURL(path.resolve(
  __dirname,
  '..',
  'src',
  'components',
  'NoteEditor',
  'draftSaveScheduler.mjs',
)).href;

function loadModule(relativePath) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename,
    plugins: [transformModules],
  }).code;
  const loaded = {exports: {}};
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, require);
  return loaded.exports;
}

function createFakeTimers() {
  let nextId = 1;
  const callbacks = new Map();
  return {
    clearTimer(id) {
      callbacks.delete(id);
    },
    runAll() {
      const pending = [...callbacks.values()];
      callbacks.clear();
      pending.forEach((callback) => callback());
    },
    setTimer(callback) {
      const id = nextId;
      nextId += 1;
      callbacks.set(id, callback);
      return id;
    },
    size() {
      return callbacks.size;
    },
  };
}

test('draft scheduler debounces every update path to the latest value', async () => {
  const {createDraftSaveScheduler} = await import(schedulerUrl);
  const timers = createFakeTimers();
  const saves = [];
  const flushed = [];
  const scheduler = createDraftSaveScheduler({
    save: (value) => saves.push(value),
    onFlushed: (value) => flushed.push(value),
    setTimer: timers.setTimer,
    clearTimer: timers.clearTimer,
  });

  scheduler.schedule('ordinary input');
  scheduler.schedule('toolbar input');
  scheduler.schedule('tab input  ');

  assert.equal(timers.size(), 1);
  assert.equal(scheduler.hasPending(), true);
  timers.runAll();
  assert.deepEqual(saves, ['tab input  ']);
  assert.deepEqual(flushed, ['tab input  ']);
  assert.equal(scheduler.hasPending(), false);
  assert.equal(scheduler.flush(), false);
});

test('unmount-style flush saves pending text once without UI notification', async () => {
  const {createDraftSaveScheduler} = await import(schedulerUrl);
  const timers = createFakeTimers();
  const saves = [];
  const flushed = [];
  const scheduler = createDraftSaveScheduler({
    save: (value) => saves.push(value),
    onFlushed: (value) => flushed.push(value),
    setTimer: timers.setTimer,
    clearTimer: timers.clearTimer,
  });

  scheduler.schedule('pending at unmount');
  assert.equal(scheduler.flush({notify: false}), true);
  assert.equal(timers.size(), 0);
  timers.runAll();

  assert.deepEqual(saves, ['pending at unmount']);
  assert.deepEqual(flushed, []);
  assert.equal(scheduler.flush({notify: false}), false);
});

test('pending local text stays authoritative until its save is flushed', async () => {
  const {createDraftSaveScheduler} = await import(schedulerUrl);
  const timers = createFakeTimers();
  const saves = [];
  const scheduler = createDraftSaveScheduler({
    save: (value) => saves.push(value),
    setTimer: timers.setTimer,
    clearTimer: timers.clearTimer,
  });
  let visibleText = 'local draft';

  scheduler.schedule(visibleText);
  const applyExternalText = (value) => {
    if (scheduler.hasPending()) return false;
    visibleText = value;
    return true;
  };

  assert.equal(applyExternalText('older server content'), false);
  assert.equal(visibleText, 'local draft');
  scheduler.flush({notify: false});
  assert.deepEqual(saves, ['local draft']);
  assert.equal(applyExternalText('local draft'), true);
  assert.equal(visibleText, 'local draft');
});

test('a scheduled free-note save preserves managed annotation metadata', async () => {
  const {createDraftSaveScheduler} = await import(schedulerUrl);
  const {
    createAnnotation,
    parseNoteDocument,
    serializeNoteDocument,
    updateFreeNoteContent,
  } = loadModule('src/services/noteAnnotations.js');
  const timers = createFakeTimers();
  const {document} = createAnnotation(
    {freeContent: 'old note', annotations: [], nextNumber: 1},
    {exact: 'source text', line: 7, documentHash: 'hash', bodyMarkdown: 'annotation'},
    1000,
  );
  let storedContent = serializeNoteDocument(document);
  const scheduler = createDraftSaveScheduler({
    save: (value) => {
      storedContent = updateFreeNoteContent(storedContent, value);
    },
    setTimer: timers.setTimer,
    clearTimer: timers.clearTimer,
  });

  scheduler.schedule('new  note with tab indentation');
  scheduler.flush({notify: false});
  const parsed = parseNoteDocument(storedContent);

  assert.equal(parsed.freeContent, 'new  note with tab indentation');
  assert.equal(parsed.annotations.length, 1);
  assert.equal(parsed.annotations[0].exact, 'source text');
  assert.equal(parsed.annotations[0].bodyMarkdown, 'annotation');
  assert.equal(parsed.nextNumber, 2);
});

test('NoteEditor wires ordinary, toolbar, and Tab edits through one updater', () => {
  const source = fs.readFileSync(path.resolve(
    __dirname,
    '..',
    'src',
    'components',
    'NoteEditor',
    'index.jsx',
  ), 'utf8');

  assert.match(source, /const updateTextAndScheduleSave = useCallback/);
  assert.match(source, /const val = e\.target\.value;\s*updateTextAndScheduleSave\(val\)/);
  assert.match(source, /updateTextAndScheduleSave\(newValue\);\s*\n\s*requestAnimationFrame/);
  assert.match(source, /value\.substring\(selectionEnd\);\s*updateTextAndScheduleSave\(newValue\)/);
  assert.match(source, /saveSchedulerRef\.current\?\.flush\(\{notify: false\}\)/);
  assert.match(source, /if \(saveSchedulerRef\.current\?\.hasPending\(\)\) return;\s*setText\(parseNoteDocument\(content\)\.freeContent\)/);
});
