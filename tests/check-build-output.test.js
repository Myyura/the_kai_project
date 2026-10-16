const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const zlib = require('node:zlib');
const publishedContentBudget = require('../scripts/published-content-budget');

const checkerPath = path.resolve(__dirname, '../scripts/check-build-output.js');
const checkerSource = fs.readFileSync(checkerPath, 'utf8');
const buildDirectory = path.resolve(__dirname, '../build');
const MiB = 1024 * 1024;

function runChecker({exportBytes = Math.round(67.60 * MiB), mutateExport, invalidGzip = false, markdown = 'Question'} = {}) {
  const snapshot = {
    format: 'kai-content',
    schemaVersion: 1,
    counts: {directories: 1, documents: 2, assets: 1},
    directories: [{path: 'example'}],
    documents: [
      {documentUuid: '00000000-0000-5000-8000-000000000001', docId: 'example/exam'},
      {documentUuid: '00000000-0000-5000-8000-000000000002', docId: 'intro'},
    ],
    assets: [{path: 'example/figure.svg', encoding: 'base64', data: 'PHN2Zy8+'}],
  };
  mutateExport?.(snapshot);
  const compressedSnapshot = invalidGzip
    ? Buffer.from('not gzip')
    : zlib.gzipSync(JSON.stringify(snapshot));
  // Model a large image-complete export without allocating or downloading it.
  // Its gzip contents remain real, so malformed streams exercise zlib itself.
  const exportHandle = {length: exportBytes};
  const recovery = {path: '/assets/js/recovery.js', url: '/assets/js/recovery.js?v=fixture'};
  const mathStyles = {path: '/assets/css/math.css'};
  const html = '<!doctype html><html><head>'
    + `<script data-kai-chunk-recovery="v1" src="${recovery.url}"></script>`
    + `<link rel="stylesheet" href="${mathStyles.path}">`
    + '<script src="/assets/js/main.fixture.js"></script>'
    + '</head><body>Fixture</body></html>';
  const files = new Map(Object.entries({
    'index.html': html,
    'docs/tags/subsubject/mathematics/calculus.html': html,
    'assets/js/main.fixture.js': 'window.fixture = true;',
    'assets/js/recovery.js': '// fixture recovery',
    'assets/css/math.css': '.katex { display: inline; }',
    'sw.js': '// kai-retired-pwa-tombstone\nself.registration.unregister();',
    'api-content/v1/manifest.json': JSON.stringify({schemaVersion: 2, documentCount: 1}),
    'api-content/v1/documents/example.json': JSON.stringify({schemaVersion: 2, fullMarkdown: markdown, sectionRanges: {}}),
  }).map(([name, content]) => [path.join(buildDirectory, name), Buffer.from(content)]));
  files.set(path.join(buildDirectory, 'content-export/v1/kai-content-v1.json.gz'), exportHandle);
  const readFile = (filePath) => {
    if (!files.has(filePath)) throw Object.assign(new Error(`Missing fixture: ${filePath}`), {code: 'ENOENT'});
    return files.get(filePath);
  };
  const filesystem = {
    readdirSync(directory) {
      const entries = new Map();
      for (const filePath of files.keys()) {
        const relative = path.relative(directory, filePath);
        if (relative.startsWith('..')) continue;
        const [name, ...children] = relative.split(path.sep);
        entries.set(name, {name, isDirectory: () => children.length > 0});
      }
      return [...entries.values()];
    },
    readFileSync(filePath, encoding) {
      const content = readFile(filePath);
      return encoding ? content.toString(encoding) : content;
    },
    statSync: (filePath) => ({size: readFile(filePath).length}),
    existsSync: (filePath) => files.has(filePath),
  };
  const dependencies = {
    fs: filesystem,
    path,
    zlib: {
      gzipSync: zlib.gzipSync,
      gunzipSync(value) {
        assert.equal(value, exportHandle);
        return zlib.gunzipSync(compressedSnapshot);
      },
    },
    './shared-browser-assets': {recoveryAsset: () => recovery, mathStyleAsset: () => mathStyles},
    './api-data': {
      PUBLISHED_CONTENT_SCHEMA_VERSION: 2,
      buildApiData: () => ({documents: [{subsubject_ids: ['Mathematics.Calculus']}]}),
    },
    './published-content-budget': publishedContentBudget,
  };
  const output = [];
  vm.runInNewContext(checkerSource, {
    __dirname: path.dirname(checkerPath),
    require(name) {
      assert(Object.hasOwn(dependencies, name), `Unexpected checker dependency: ${name}`);
      return dependencies[name];
    },
    console: {log: (message) => output.push(message)},
  }, {filename: checkerPath});
  return output.join('\n');
}

test('an image-complete export above 64 MiB passes within the total build budget', () => {
  assert.match(runChecker(), /Build budgets passed:.*Kai content export 67\.60 MiB/);
});

test('the export still counts toward the 900 MiB total build budget', () => {
  assert.throws(() => runChecker({exportBytes: 901 * MiB}), /Total build output .* exceeds 900\.00 MiB/);
});

test('published document content still uses the per-document allowance', () => {
  assert.throws(() => runChecker({markdown: 'x'.repeat(7 * 1024)}), /Published document content .* exceeds .* for 1 documents/);
});

test('the checker still rejects malformed gzip exports', () => {
  assert.throws(() => runChecker({invalidGzip: true}), /not valid gzip JSON/);
});

for (const [collection, label] of [['directories', 'directory'], ['documents', 'document'], ['assets', 'asset']]) {
  test(`the checker still rejects inconsistent export ${label} counts`, () => {
    assert.throws(() => runChecker({
      mutateExport: (snapshot) => { snapshot.counts[collection] += 1; },
    }), new RegExp(`Kai content export ${label} count is inconsistent`));
  });
}

test('the checker still rejects duplicate exported document UUIDs', () => {
  assert.throws(() => runChecker({
    mutateExport(snapshot) {
      snapshot.documents[1].documentUuid = snapshot.documents[0].documentUuid;
    },
  }), /Kai content export contains duplicate document UUIDs/);
});
