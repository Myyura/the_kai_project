const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {collectImageAssets} = require('../scripts/content-export-asset-bundle');

function fixture(t) {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-export-images-'));
  t.after(() => fs.rmSync(repoRoot, {recursive: true, force: true}));
  fs.mkdirSync(path.join(repoRoot, 'docs', 'course'), {recursive: true});
  fs.mkdirSync(path.join(repoRoot, 'static', 'img'), {recursive: true});
  fs.writeFileSync(path.join(repoRoot, 'docs/course/local image.svg'), '<svg xmlns="http://www.w3.org/2000/svg"/>');
  fs.writeFileSync(path.join(repoRoot, 'static/img/figure.svg'), '<svg xmlns="http://www.w3.org/2000/svg"><path/></svg>');
  return {repoRoot, siteUrl: 'https://example.com'};
}

function doc(markdown, filename = 'lesson') {
  return {docId: `course/${filename}`, sourcePath: `docs/course/${filename}.md`, markdown};
}

test('bundles remote, relative and static images with mappings; deduplicates downloads across documents', async (t) => {
  const documents = [
    doc('![one](https://images.example/a.png)\n<img src="/img/figure.svg"/>\n![local](local%20image.svg#drawing)'),
    doc('![again](https://images.example/a.png#view)\n![two][image]\n\n[image]: //images.example/a.png', 'other'),
  ];
  const originals = documents.map((document) => document.markdown);
  const calls = [];
  const content = Buffer.from('remote image bytes');
  const assets = await collectImageAssets({
    ...fixture(t), documents,
    downloadImage: async (url) => {
      calls.push(url);
      return {content, mimeType: 'image/png'};
    },
  });
  assert.deepEqual(calls, ['https://images.example/a.png']);
  assert.equal(assets.length, 3);
  assert.deepEqual(documents.map((document) => document.markdown), originals);
  const byPath = new Map(assets.map((asset) => [asset.path, asset]));
  for (const document of documents) {
    for (const reference of document.imageAssets) assert.ok(byPath.has(reference.assetPath));
  }
  const remote = assets.find((asset) => asset.sourceUrl);
  assert.equal(Buffer.from(remote.data, 'base64').toString(), content.toString());
  assert.equal(remote.contentHash, crypto.createHash('sha256').update(content).digest('hex'));
  assert.equal(remote.directoryPath, null);
  assert.ok(byPath.has('_static/img/figure.svg'));
  assert.ok(byPath.has('course/local image.svg'));
  assert.equal(documents[1].imageAssets.length, 2);
  assert.ok(documents[1].imageAssets.every((ref) => ref.assetPath === remote.path));
});

test('image failures reject the snapshot with URL and document context', async (t) => {
  await assert.rejects(collectImageAssets({
    ...fixture(t), documents: [doc('![broken](https://images.example/missing.png)')],
    downloadImage: async () => { throw new Error('HTTP 404'); },
  }), (error) => {
    assert.match(error.message, /https:\/\/images.example\/missing.png/);
    assert.match(error.message, /docs\/course\/lesson.md/);
    assert.match(error.message, /HTTP 404/);
    return true;
  });
});

test('a missing local file or path outside the content roots prevents incomplete export', async (t) => {
  const options = fixture(t);
  fs.writeFileSync(path.join(options.repoRoot, 'private.svg'), 'private');
  for (const source of ['missing.svg', '../../private.svg', '/img/../../private.svg', 'file:///private.svg']) {
    await assert.rejects(collectImageAssets({
      ...options, documents: [doc(`<img src="${source}"/>`)],
      downloadImage: async () => { throw new Error('Unexpected network access'); },
    }), /Cannot export all images/);
  }
});

test('data URLs stay self-contained and code samples never trigger downloads', async (t) => {
  const documents = [doc('![inline](data:image/png;base64,aGVsbG8=)\n`![code](https://images.example/code.png)`\n\n```md\n<img src="https://images.example/fenced.png"/>\n```')];
  const assets = await collectImageAssets({
    ...fixture(t), documents,
    downloadImage: async () => { throw new Error('Unexpected network access'); },
  });
  assert.deepEqual(assets, []);
  assert.deepEqual(documents[0].imageAssets, []);
});

test('output order is stable despite different download completion order', async (t) => {
  const options = fixture(t);
  async function build(reverse) {
    const documents = [doc('![z](https://images.example/z.png) ![a](https://images.example/a.png)')];
    const assets = await collectImageAssets({
      ...options, documents,
      downloadImage: async (url) => {
        if (url.includes(reverse ? '/z.' : '/a.')) await new Promise((resolve) => setTimeout(resolve, 5));
        return {content: Buffer.from(url), mimeType: 'image/png'};
      },
    });
    return {documents, assets};
  }
  assert.deepEqual(await build(false), await build(true));
});
