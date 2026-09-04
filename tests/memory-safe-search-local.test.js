const assert = require('node:assert/strict');
const {spawnSync} = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {
  DEFAULT_SCAN_CONCURRENCY,
  scanDocumentsBounded,
  validateScanConcurrency,
} = require('../plugins/memory-safe-search-local/boundedScanDocuments.cjs');
const {
  buildSearchIndexes,
  getSearchIndexFilename,
  partitionDocumentsByContext,
} = require('../plugins/memory-safe-search-local/postBuild.cjs');
const {
  DEFERRED_INDEX_MANIFEST_FILENAME,
  createDeferredIndexManifest,
  createDeferredSearchIndexPostBuild,
  getDeferredIndexManifestPath,
  runDeferredSearchIndex,
  validateDeferredIndexManifest,
} = require('../plugins/memory-safe-search-local/deferredIndex.cjs');
const {
  validateDeferSearchIndex,
} = require('../plugins/memory-safe-search-local/index.cjs');
const {
  SUPPORTED_SEARCH_LOCAL_VERSION,
} = require('../plugins/memory-safe-search-local/upstream.cjs');

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return {promise, reject, resolve};
}

function flushTasks() {
  return new Promise((resolve) => setImmediate(resolve));
}

function doc(index) {
  return {
    filePath: `/fixtures/${index}.html`,
    type: 'docs',
    url: `/docs/${index}`,
  };
}

function parsedPage(pageTitle) {
  return {
    breadcrumb: [],
    description: '',
    keywords: '',
    pageTitle,
    sections: [],
  };
}

test('search HTML parsing has a strict batch concurrency bound', async () => {
  const gates = Array.from({length: 7}, deferred);
  const started = [];
  let active = 0;
  let maxActive = 0;
  const scan = scanDocumentsBounded(
    Array.from({length: 7}, (_, index) => doc(index)),
    {},
    {
      concurrency: 3,
      async readFile(filePath) {
        const index = Number.parseInt(filePath.match(/(\d+)\.html$/)[1], 10);
        started.push(index);
        active += 1;
        maxActive = Math.max(maxActive, active);
        try {
          await gates[index].promise;
          return String(index);
        } finally {
          active -= 1;
        }
      },
      parse(html) {
        return parsedPage(`Page ${html}`);
      },
      debugVerbose() {},
    },
  );

  await flushTasks();
  assert.deepEqual(started, [0, 1, 2]);
  gates[0].resolve();
  await flushTasks();
  assert.deepEqual(started, [0, 1, 2], 'the next batch must not start early');

  gates[2].resolve();
  gates[1].resolve();
  await flushTasks();
  assert.deepEqual(started, [0, 1, 2, 3, 4, 5]);

  gates[3].resolve();
  gates[4].resolve();
  gates[5].resolve();
  await flushTasks();
  assert.deepEqual(started, [0, 1, 2, 3, 4, 5, 6]);
  gates[6].resolve();

  const [titles] = await scan;
  assert.equal(maxActive, 3);
  assert.deepEqual(titles.map(({t}) => t), [
    'Page 0',
    'Page 1',
    'Page 2',
    'Page 3',
    'Page 4',
    'Page 5',
    'Page 6',
  ]);
});

test('bounded scanning preserves upstream document order and ID semantics', async () => {
  const parsedByFile = new Map([
    ['0', {
      breadcrumb: ['Root'],
      description: 'Description A',
      keywords: 'alpha',
      pageTitle: 'Page A',
      sections: [
        {content: 'Root content', hash: undefined, title: 'Page A'},
        {content: 'Section content', hash: '/docs/0#section', title: 'Section A'},
        {content: 'External content', hash: 'https://example.com/#external', title: 'External'},
      ],
    }],
    ['1', null],
    ['2', {
      breadcrumb: ['Root'],
      description: '',
      keywords: '',
      pageTitle: 'Page B',
      sections: [
        {content: '', hash: '#top', title: 'Page B'},
        {content: 'Second content', hash: '#second', title: 'Section B'},
      ],
    }],
  ]);
  const idState = {next: 0};
  const result = await scanDocumentsBounded([doc(0), doc(1), doc(2)], {}, {
    concurrency: 3,
    idState,
    async readFile(filePath) {
      return filePath.match(/(\d+)\.html$/)[1];
    },
    parse(html) {
      return parsedByFile.get(html);
    },
    debugVerbose() {},
  });

  assert.deepEqual(result, [
    [
      {i: 1, t: 'Page A', u: '/docs/0', b: ['Root']},
      {i: 5, t: 'Page B', u: '/docs/2', b: ['Root']},
    ],
    [
      {i: 3, t: 'Section A', u: '/docs/0', h: '#section', p: 1},
      {i: 6, t: 'Section B', u: '/docs/2', h: '#second', p: 5},
    ],
    [
      {i: 1, t: 'Description A', s: 'Page A', u: '/docs/0', p: 1},
    ],
    [
      {i: 1, t: 'alpha', s: 'Page A', u: '/docs/0', p: 1},
    ],
    [
      {i: 2, t: 'Root content', s: 'Page A', u: '/docs/0', h: undefined, p: 1},
      {i: 4, t: 'Section content', s: 'Section A', u: '/docs/0', h: '#section', p: 1},
      {i: 7, t: 'Second content', s: 'Section B', u: '/docs/2', h: '#second', p: 5},
    ],
  ]);
  assert.equal(idState.next, 7);
});

test('bounded scanning matches the upstream scanner and index byte-for-byte', async () => {
  const fixtureDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-search-scan-'));
  const paths = [
    {
      filePath: path.join(fixtureDir, 'a.html'),
      type: 'docs',
      url: '/docs/a',
    },
    {
      filePath: path.join(fixtureDir, 'hidden.html'),
      type: 'docs',
      url: '/docs/hidden',
    },
    {
      filePath: path.join(fixtureDir, 'b.html'),
      type: 'docs',
      url: '/docs/b',
    },
  ];
  const config = {
    forceIgnoreNoIndex: false,
    ignoreCssSelectors: ['nav'],
    language: ['en'],
    removeDefaultStemmer: false,
    removeDefaultStopWordFilter: [],
  };
  try {
    fs.writeFileSync(paths[0].filePath, `<!doctype html>
      <html><head>
        <meta name="description" content="Alpha description">
        <meta name="keywords" content="alpha,beta">
      </head><body><nav>ignored</nav><article>
        <h1>Alpha<a class="hash-link" href="/docs/a#alpha">#</a></h1>
        <p>Intro 日本語</p>
        <h2>Details<a class="hash-link" href="#details">#</a></h2>
        <p>Body content</p>
      </article></body></html>`);
    fs.writeFileSync(paths[1].filePath, `<!doctype html>
      <html><head><meta name="robots" content="noindex"></head>
      <body><article><h1>Hidden</h1></article></body></html>`);
    fs.writeFileSync(paths[2].filePath, `<!doctype html>
      <html><head><meta name="description" content="Beta description"></head>
      <body><article>
        <h1>Beta<a class="hash-link" href="#beta">#</a></h1>
        <p>Second page</p>
      </article></body></html>`);

    const {scanDocuments: upstreamScanDocuments} = require(
      '@easyops-cn/docusaurus-search-local/dist/server/server/utils/scanDocuments'
    );
    const {buildIndex} = require(
      '@easyops-cn/docusaurus-search-local/dist/server/server/utils/buildIndex'
    );
    const upstreamDocuments = await upstreamScanDocuments(paths, config);
    const boundedDocuments = await scanDocumentsBounded(paths, config, {
      concurrency: 2,
    });

    assert.deepEqual(boundedDocuments, upstreamDocuments);
    assert.equal(
      JSON.stringify(buildIndex(boundedDocuments, config)),
      JSON.stringify(buildIndex(upstreamDocuments, config)),
    );
  } finally {
    fs.rmSync(fixtureDir, {force: true, recursive: true});
  }
});

test('a failed scan propagates the original error without consuming IDs', async () => {
  const sentinel = new Error('fixture read failed');
  sentinel.code = 'EFIXTURE';
  const idState = {next: 10};

  await assert.rejects(
    scanDocumentsBounded([doc(0), doc(1)], {}, {
      concurrency: 2,
      idState,
      async readFile(filePath) {
        if (filePath.endsWith('/1.html')) throw sentinel;
        return '0';
      },
      parse() {
        return parsedPage('Page A');
      },
      debugVerbose() {},
    }),
    (error) => error === sentinel,
  );
  assert.equal(idState.next, 10);

  const [titles] = await scanDocumentsBounded([doc(2)], {}, {
    concurrency: 1,
    idState,
    async readFile() {
      return '2';
    },
    parse() {
      return parsedPage('Page B');
    },
    debugVerbose() {},
  });
  assert.equal(titles[0].i, 11);
  assert.equal(idState.next, 11);
});

test('scan concurrency rejects unsafe values and has a conservative default', () => {
  assert.equal(DEFAULT_SCAN_CONCURRENCY, 4);
  assert.equal(validateScanConcurrency(), 4);
  assert.equal(validateScanConcurrency(1), 1);
  assert.equal(validateScanConcurrency(32), 32);
  for (const value of [0, -1, 1.5, 33, Number.NaN, '4']) {
    assert.throws(() => validateScanConcurrency(value), RangeError);
  }
});

test('search index filenames retain upstream hashed-query behavior', () => {
  assert.equal(getSearchIndexFilename({hashed: false}), 'search-index{dir}.json');
  assert.equal(getSearchIndexFilename({hashed: true}), 'search-index{dir}.json');
});

test('context partitioning preserves root and nested search indexes', () => {
  const allDocuments = [
    [
      {i: 1, t: 'A', u: '/docs/a'},
      {i: 2, t: 'B', u: '/blog/b'},
    ],
    [],
    [],
    [],
    [],
  ];
  const partitioned = partitionDocumentsByContext(
    allDocuments,
    {baseUrl: '/'},
    {
      hideSearchBarWithNoSearchContext: false,
      searchContextByPaths: ['docs'],
      useAllContextsWithNoSearchContext: false,
    },
  );

  assert.deepEqual(partitioned.get('docs')[0], [{i: 1, t: 'A', u: '/docs/a'}]);
  assert.deepEqual(partitioned.get('')[0], [{i: 2, t: 'B', u: '/blog/b'}]);
  assert.equal(partitioned.get('docs').length, 5);
  assert.equal(partitioned.get('').length, 5);
});

test('Pages postBuild writes a portable manifest instead of indexing in-process', async () => {
  const config = {
    docsDir: ['/repo/docs'],
    forceIgnoreNoIndex: false,
    hideSearchBarWithNoSearchContext: false,
    ignoreCssSelectors: ['nav'],
    ignoreFiles: [/draft/],
    language: ['zh', 'en', 'ja'],
    removeDefaultStemmer: false,
    removeDefaultStopWordFilter: [],
    searchContextByPaths: ['docs'],
    useAllContextsWithNoSearchContext: false,
  };
  const versionDataList = [{
    outDir: '/repo/build',
    paths: [{
      filePath: '/repo/build/docs/1/index.html',
      type: 'docs',
      url: '/docs/1',
    }],
  }];
  let written;
  const postBuild = createDeferredSearchIndexPostBuild({
    concurrency: 2,
    config,
    searchIndexFilename: 'search-index{dir}-abc123.json',
    logger() {},
    processDocInfos(buildData, receivedConfig) {
      assert.equal(buildData.baseUrl, '/kai/');
      assert.equal(receivedConfig, config);
      return versionDataList;
    },
    async writeFile(filePath, content, options) {
      written = {content, filePath, options};
    },
  });

  await postBuild({baseUrl: '/kai/', outDir: '/repo/build'});

  assert.equal(
    written.filePath,
    path.join('/repo/build', DEFERRED_INDEX_MANIFEST_FILENAME),
  );
  assert.deepEqual(written.options, {encoding: 'utf8'});
  const manifest = validateDeferredIndexManifest(JSON.parse(written.content));
  assert.equal(manifest.baseUrl, '/kai/');
  assert.equal(manifest.concurrency, 2);
  assert.equal(manifest.searchIndexFilename, 'search-index{dir}-abc123.json');
  assert.deepEqual(manifest.versionDataList, [{
    outDir: '.',
    paths: [{
      filePath: 'docs/1/index.html',
      type: 'docs',
      url: '/docs/1',
    }],
  }]);
  assert.deepEqual(manifest.config, {
    forceIgnoreNoIndex: false,
    hideSearchBarWithNoSearchContext: false,
    ignoreCssSelectors: ['nav'],
    language: ['zh', 'en', 'ja'],
    removeDefaultStemmer: false,
    removeDefaultStopWordFilter: [],
    searchContextByPaths: ['docs'],
    useAllContextsWithNoSearchContext: false,
  });
  assert.equal(manifest.config.docsDir, undefined);
  assert.equal(manifest.config.ignoreFiles, undefined);
});

test('a fresh process can build the deferred index and removes its manifest', async () => {
  const fixtureDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-search-deferred-'));
  const buildDir = path.join(fixtureDir, 'build');
  const documentDir = path.join(buildDir, 'docs', 'alpha');
  const documentPath = path.join(documentDir, 'index.html');
  const manifestPath = getDeferredIndexManifestPath(buildDir);
  const config = {
    forceIgnoreNoIndex: false,
    ignoreCssSelectors: [],
    language: ['en'],
    removeDefaultStemmer: false,
    removeDefaultStopWordFilter: [],
  };
  const versionDataList = [{
    outDir: buildDir,
    paths: [{filePath: documentPath, type: 'docs', url: '/docs/alpha'}],
  }];
  const searchIndexPath = path.join(buildDir, 'search-index.json');

  try {
    fs.mkdirSync(documentDir, {recursive: true});
    fs.writeFileSync(documentPath, `<!doctype html><html><head>
      <meta name="description" content="Alpha description">
      </head><body><article>
      <h1>Alpha<a class="hash-link" href="#alpha"></a></h1>
      <p>Searchable body</p>
      </article></body></html>`);
    await buildSearchIndexes({baseUrl: '/', versionDataList}, {
      concurrency: 1,
      config,
      logger() {},
      searchIndexFilename: 'search-index{dir}.json',
    });
    const inlineIndex = fs.readFileSync(searchIndexPath);
    fs.rmSync(searchIndexPath);
    fs.writeFileSync(manifestPath, JSON.stringify(createDeferredIndexManifest({
      baseUrl: '/',
      buildRoot: buildDir,
      concurrency: 1,
      config,
      searchIndexFilename: 'search-index{dir}.json',
      versionDataList,
    })));

    const result = spawnSync(
      process.execPath,
      [path.resolve(__dirname, '../scripts/build-search-index.js'), manifestPath],
      {encoding: 'utf8'},
    );

    assert.equal(result.status, 0, result.stderr);
    assert.equal(fs.existsSync(manifestPath), false);
    assert.deepEqual(fs.readFileSync(searchIndexPath), inlineIndex);
    const searchIndex = JSON.parse(
      fs.readFileSync(searchIndexPath, 'utf8'),
    );
    assert.equal(searchIndex[0].documents[0].t, 'Alpha');
    assert.equal(searchIndex[0].documents[0].u, '/docs/alpha');
    assert.equal(searchIndex[2].documents[0].t, 'Alpha description');
    assert.equal(searchIndex[4].documents[0].t, 'Searchable body');
  } finally {
    fs.rmSync(fixtureDir, {force: true, recursive: true});
  }
});

test('deferred indexing preserves the manifest and original error on failure', async () => {
  const sentinel = new Error('index fixture failed');
  const manifest = createDeferredIndexManifest({
    baseUrl: '/',
    buildRoot: '/fixture/build',
    concurrency: 1,
    config: {},
    searchIndexFilename: 'search-index{dir}.json',
    versionDataList: [],
  });
  let unlinked = false;

  await assert.rejects(
    runDeferredSearchIndex('/fixture/manifest.json', {
      async buildIndexes() {
        throw sentinel;
      },
      logger() {},
      async readFile() {
        return JSON.stringify(manifest);
      },
      async unlink() {
        unlinked = true;
      },
    }),
    (error) => error === sentinel,
  );
  assert.equal(unlinked, false);
});

test('deferred search settings and manifest versions fail fast', () => {
  assert.equal(validateDeferSearchIndex(), false);
  assert.equal(validateDeferSearchIndex(true), true);
  assert.throws(() => validateDeferSearchIndex('true'), TypeError);
  assert.throws(
    () => validateDeferredIndexManifest({version: 999}),
    /Unsupported deferred search index manifest version/,
  );

  const validManifest = createDeferredIndexManifest({
    baseUrl: '/',
    buildRoot: '/fixture/build',
    concurrency: 1,
    config: {},
    searchIndexFilename: 'search-index{dir}.json',
    versionDataList: [{
      outDir: '/fixture/build',
      paths: [{
        filePath: '/fixture/build/docs/a/index.html',
        type: 'docs',
        url: '/docs/a',
      }],
    }],
  });
  for (const filePath of [
    '../outside.html',
    '/tmp/outside.html',
    'C:/outside.html',
    'C:../outside.html',
    'docs\\outside.html',
  ]) {
    const malformed = structuredClone(validManifest);
    malformed.versionDataList[0].paths[0].filePath = filePath;
    assert.throws(
      () => validateDeferredIndexManifest(malformed),
      /Invalid deferred search index relative path/,
    );
  }
  assert.throws(
    () => createDeferredIndexManifest({
      baseUrl: '/',
      buildRoot: '/fixture/build',
      concurrency: 1,
      config: {},
      searchIndexFilename: 'search-index{dir}.json',
      versionDataList: [{outDir: '/fixture/outside', paths: []}],
    }),
    /escapes the build directory/,
  );
});

test('the private upstream adapter is pinned to the reviewed package version', () => {
  const installedVersion = require(
    '@easyops-cn/docusaurus-search-local/package.json'
  ).version;
  assert.equal(SUPPORTED_SEARCH_LOCAL_VERSION, '0.55.1');
  assert.equal(installedVersion, SUPPORTED_SEARCH_LOCAL_VERSION);
});
