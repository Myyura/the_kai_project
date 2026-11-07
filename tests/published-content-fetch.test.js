const assert = require('node:assert/strict');
const test = require('node:test');
const createSourceLoader = require('./helpers/load-source.cjs');

const uuid = '72dc6d93-df21-5bbe-b808-359a254e5ad9';
const hash = 'a'.repeat(64);
const pointer = {document_uuid: uuid, content_hash: hash, content_path: `/api-content/v1/documents/${uuid}.json`};
const body = (contentHash = hash) => ({
  schemaVersion: 2, documentUuid: uuid, docId: 'school/problem', contentHash,
  fullMarkdown: 'body', sectionRanges: {authorMarkdown: [], descriptionMarkdown: [[0, 4]], kaiMarkdown: []},
});
function deferred() {
  let resolve;
  const promise = new Promise(done => {resolve = done;});
  return {promise, resolve};
}

test('simultaneous reads of one published revision fetch and decode only once', async () => {
  let requests = 0;
  let decodes = 0;
  const response = deferred();
  const {fetchPublishedDocument} = createSourceLoader({fetch: () => {requests++; return response.promise;}})(
    'supabase/functions/_shared/published-content.ts',
  );
  const reads = Array.from({length: 20}, () => fetchPublishedDocument(pointer, 'https://runjp.com'));
  assert.equal(requests, 1);
  response.resolve({ok: true, json: async () => {decodes++; return body();}});
  const documents = await Promise.all(reads);
  assert.equal(decodes, 1);
  assert(documents.every(document => document === documents[0]));
  assert.equal(documents[0].sections.descriptionMarkdown, 'body');
  assert.equal(await fetchPublishedDocument(pointer, 'https://runjp.com/'), documents[0]);
  assert.equal(requests, 1);
});

test('failed fetches and malformed content are not cached and can be retried', async () => {
  const failed = deferred();
  let requests = 0;
  const {fetchPublishedDocument} = createSourceLoader({fetch: async () => {
    requests++;
    if (requests === 1) return failed.promise;
    return {ok: true, json: async () => requests === 2 ? {...body(), documentUuid: 'wrong'} : body()};
  }})('supabase/functions/_shared/published-content.ts');
  const reads = Promise.allSettled(Array.from({length: 5}, () => fetchPublishedDocument(pointer, 'https://runjp.com')));
  failed.resolve({ok: false, status: 503});
  assert((await reads).every(result => result.status === 'rejected' && /503/.test(result.reason.message)));
  assert.equal(requests, 1);
  await assert.rejects(fetchPublishedDocument(pointer, 'https://runjp.com'), /UUID/);
  assert.equal((await fetchPublishedDocument(pointer, 'https://runjp.com')).documentUuid, uuid);
  assert.equal(requests, 3);
});

test('published caches isolate origins and revisions and still validate cached requests', async () => {
  const urls = [];
  const {fetchPublishedDocument} = createSourceLoader({fetch: async url => {
    urls.push(url.href);
    return {ok: true, json: async () => body(url.searchParams.get('v'))};
  }})('supabase/functions/_shared/published-content.ts');
  await fetchPublishedDocument(pointer, 'https://runjp.com');
  await fetchPublishedDocument(pointer, 'https://preview.example');
  const updated = await fetchPublishedDocument({...pointer, content_hash: 'b'.repeat(64)}, 'https://runjp.com');
  assert.equal(urls.length, 3);
  assert.equal(updated.contentHash, 'b'.repeat(64));
  await assert.rejects(fetchPublishedDocument(pointer, 'http://runjp.com'), /HTTPS/);
  await assert.rejects(fetchPublishedDocument({...pointer, content_path: 'https://other.example/body'}, 'https://runjp.com'), /path/);
  await assert.rejects(fetchPublishedDocument({...pointer, content_hash: ''}, 'https://runjp.com'), /hash/);
  assert.equal(urls.length, 3);
});
