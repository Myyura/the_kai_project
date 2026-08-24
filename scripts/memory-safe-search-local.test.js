const assert = require('node:assert/strict');
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
  getSearchIndexFilename,
  partitionDocumentsByContext,
} = require('../plugins/memory-safe-search-local/postBuild.cjs');
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

test('the private upstream adapter is pinned to the reviewed package version', () => {
  const installedVersion = require(
    '@easyops-cn/docusaurus-search-local/package.json'
  ).version;
  assert.equal(SUPPORTED_SEARCH_LOCAL_VERSION, '0.55.1');
  assert.equal(installedVersion, SUPPORTED_SEARCH_LOCAL_VERSION);
});
