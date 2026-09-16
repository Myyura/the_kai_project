const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/core');
const createSourceLoader = require('./helpers/load-source.cjs');

function loadWithMocks(relativePath, dependencies, globals = {}) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const {code} = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename, babelrc: false, configFile: false,
    plugins: [require('@babel/plugin-transform-modules-commonjs')],
  });
  const loaded = {exports: {}};
  const localRequire = (name) => Object.prototype.hasOwnProperty.call(dependencies, name) ? dependencies[name] : require(name);
  Function('module', 'exports', 'require', ...Object.keys(globals), code)(loaded, loaded.exports, localRequire, ...Object.values(globals));
  return loaded.exports;
}

// In-memory Supabase boundary: no network, auth credentials, or real user data.
function notesFixture({uuid = '11111111-1111-5111-8111-111111111111', userId = 'test-user', rows = [], failure = null} = {}) {
  const calls = [];
  const events = [];
  let savedRow = null;
  const client = {
    auth: {getSession: async () => ({data: {session: userId ? {user: {id: userId}} : null}, error: null})},
    from(table) {
      const call = {table, filters: []};
      calls.push(call);
      const query = {
        select(columns) {call.columns = columns; return this;},
        is(column, value) {call.filters.push(['is', column, value]); return this;},
        eq(column, value) {call.filters.push(['eq', column, value]); return this;},
        order(column, options) {call.order = [column, options]; return this;},
        upsert(payload, options) {call.payload = payload; call.options = options; return this;},
        delete() {call.deleted = true; return this;},
        range(from, to) {call.range = [from, to]; return Promise.resolve({data: rows.slice(from, to + 1), error: failure});},
        async single() {
          if (failure) return {data: null, error: failure};
          savedRow = {...call.payload, version: 3, updated_at: '2026-09-16T12:00:00Z'};
          return {data: savedRow, error: null};
        },
        async maybeSingle() {return {data: savedRow, error: failure};},
        then(resolve, reject) {return Promise.resolve({data: null, error: failure}).then(resolve, reject);},
      };
      return query;
    },
  };
  const service = loadWithMocks('src/services/studyDataService.js', {
    './supabaseClient': {getSupabaseClient: () => client},
    './documentIdentity': {resolveDocumentUuid: async () => uuid, resolveCurrentDocId: (row) => row.doc_id},
  }, {
    window: {dispatchEvent: (event) => events.push(event)},
    CustomEvent: class {constructor(type, options) {this.type = type; this.detail = options.detail;}},
  });
  return {service, calls, events};
}

test('saved notes round-trip exact text, formulas, and managed annotations through the storage boundary', async () => {
  const {createAnnotation, serializeNoteDocument, parseNoteDocument} = createSourceLoader()('src/services/noteAnnotations.js');
  const freeContent = '# 中文笔记 😀\n\n  保留缩进\n\n$$\n\\int_0^1 x^2\\,dx=\\frac13\n$$\n';
  const {document} = createAnnotation({freeContent, annotations: [], nextNumber: 1}, {
    exact: '积分公式', line: 42, documentHash: 'test-source-hash', bodyMarkdown: '注意上下限 $0,1$。',
  }, 1000);
  const content = serializeNoteDocument(document);
  const {service, calls, events} = notesFixture();
  const saved = await service.saveDocNote('test/document', content, 'test-user');
  const fetched = await service.fetchDocNote('test/document');
  assert.equal(saved.content, content);
  assert.deepEqual(fetched, saved);
  assert.deepEqual(parseNoteDocument(fetched.content), parseNoteDocument(content));
  assert.equal(calls[0].table, 'user_note_items');
  assert.equal(calls[0].payload.content, content);
  assert.equal(calls[0].payload.user_id, 'test-user');
  assert.equal(calls[0].payload.deleted_at, null);
  assert.equal(calls[0].options.onConflict, 'user_id,document_uuid');
  assert.deepEqual(calls[1].filters, [['is', 'deleted_at', null], ['eq', 'document_uuid', saved.documentUuid]]);
  assert.equal(saved.version, 3);
  assert.deepEqual(events.map(({type, detail}) => ({type, detail})), [{type: 'kai_notes_updated', detail: {userId: 'test-user', docId: 'test/document', value: saved}}]);
});

test('empty-note removal is scoped to the current account and document', async () => {
  const {service, calls, events} = notesFixture();
  assert.equal(await service.saveDocNote('test/document', ' \n\t', 'test-user'), null);
  assert.equal(calls[0].deleted, true);
  assert.deepEqual(calls[0].filters, [['eq', 'user_id', 'test-user'], ['eq', 'document_uuid', '11111111-1111-5111-8111-111111111111']]);
  assert.equal(events[0].detail.value, null);
});

test('a failed note write reports the failure without emitting a successful update', async () => {
  const failure = new Error('Simulated network failure');
  const {service, events} = notesFixture({failure});
  await assert.rejects(service.saveDocNote('test/document', '未保存的草稿'), failure);
  assert.deepEqual(events, []);
});

test('account changes and signed-out sessions cannot write a draft to another account', async () => {
  const changed = notesFixture({userId: 'another-user'});
  await assert.rejects(changed.service.saveDocNote('test/document', '草稿', 'test-user'), /账号已切换/);
  assert.equal(changed.calls.length, 0);
  const signedOut = notesFixture({userId: null});
  await assert.rejects(signedOut.service.saveDocNote('test/document', '草稿'), /请先登录/);
  await assert.rejects(signedOut.service.fetchDocNote('test/document'), /请先登录/);
  assert.equal(signedOut.calls.length, 0);
});

test('the retained doc_id fallback can read and save legacy note identities', async () => {
  const {service, calls} = notesFixture({uuid: null});
  await service.saveDocNote('legacy/document', '旧笔记');
  const value = await service.fetchDocNote('legacy/document');
  assert.equal(value.content, '旧笔记');
  assert.equal(value.documentUuid, null);
  assert.equal(calls[0].options.onConflict, 'user_id,doc_id');
  assert.equal(calls[0].payload.document_uuid, undefined);
  assert.deepEqual(calls[1].filters, [['is', 'deleted_at', null], ['eq', 'doc_id', 'legacy/document']]);
});

test('loading all notes includes records beyond the first page', async () => {
  const rows = Array.from({length: 501}, (_, i) => ({doc_id: `test/${i}`, content: `笔记 ${i}`, version: 1, updated_at: '2026-09-16T12:00:00Z'}));
  const {service, calls} = notesFixture({rows});
  const notes = await service.fetchAllNotes();
  assert.equal(notes.length, 501);
  assert.equal(notes.at(-1).content, '笔记 500');
  assert.deepEqual(calls.map(call => call.range), [[0, 499], [500, 999]]);
  for (const call of calls) assert.deepEqual(call.filters, [['is', 'deleted_at', null]]);
});

test('note preview retains rich Markdown and formula source while escaping raw HTML', () => {
  const {markdownToHtml} = loadWithMocks('src/components/NoteEditor/markdownRenderer.js', {
    '@site/src/components/Chemistry/smilesRenderer': {drawSmiles() {}, getDocumentColorMode() {return 'light';}},
  });
  const source = '# 笔记\n\n**结论** $x^2$\n\n$$\n\\frac{1}{2}\n$$\n\n- 保留列表\n\n|A|B|\n|-|-|\n|1|2|\n\n```js\nx = 1 < 2;\n```\n\n<script>alert(1)</script>';
  const html = markdownToHtml(source);
  assert.match(html, /<h1>笔记<\/h1>/);
  assert.match(html, /<strong>结论<\/strong>/);
  assert.match(html, /<table>/);
  assert.match(html, /<li>保留列表<\/li>/);
  assert.match(html, /note-code-block/);
  assert.match(html, /note-math-inline/);
  assert.match(html, /note-math-display/);
  assert.ok(html.includes(encodeURIComponent('\\frac{1}{2}')));
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /<script>/);
});
