const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {createRequire} = require('node:module');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

const moduleCache = new Map();

function loadSourceModule(filename) {
  const resolvedFilename = path.resolve(filename);
  if (moduleCache.has(resolvedFilename)) return moduleCache.get(resolvedFilename).exports;

  const loaded = {exports: {}};
  moduleCache.set(resolvedFilename, loaded);
  const nativeRequire = createRequire(resolvedFilename);
  const localRequire = (request) => {
    const resolved = nativeRequire.resolve(request);
    if (resolved.includes(`${path.sep}src${path.sep}`) && resolved.endsWith('.js')) {
      return loadSourceModule(resolved);
    }
    return nativeRequire(request);
  };
  const source = fs.readFileSync(resolvedFilename, 'utf8');
  const transformed = babel.transformSync(source, {
    filename: resolvedFilename,
    plugins: [transformModules],
  }).code;
  Function('module', 'exports', 'require', '__filename', '__dirname', transformed)(
    loaded,
    loaded.exports,
    localRequire,
    resolvedFilename,
    path.dirname(resolvedFilename),
  );
  return loaded.exports;
}

const repoRoot = path.resolve(__dirname, '..');
const tagTaxonomy = require('../src/data/tagTaxonomy');
const {
  getTopicAnchorId,
  getTopicDisplayName,
  resolveTagBrowseTarget,
} = loadSourceModule(path.join(repoRoot, 'src/utils/tagBrowseTarget.js'));

test('topic browse targets use a humanized label and the parent subsubject anchor', () => {
  const target = resolveTagBrowseTarget('Mathematics.Calculus.Integration');

  assert.deepEqual(target, {
    kind: 'topic',
    id: 'Mathematics.Calculus.Integration',
    subjectId: 'Mathematics',
    subsubjectId: 'Mathematics.Calculus',
    pathname: '/docs/tags/subsubject/mathematics/calculus',
    anchorId: 'topic-integration',
    href: '/docs/tags/subsubject/mathematics/calculus#topic-integration',
    displayName: 'Integration',
  });

  assert.equal(
    getTopicDisplayName('Computer-Science.Algorithm-Design.Matrix-Multiplication-Algorithms'),
    'Matrix Multiplication Algorithms',
  );
});

test('subsubject and school targets keep their canonical routes', () => {
  assert.equal(
    resolveTagBrowseTarget('Mathematics.Linear-Algebra').href,
    '/docs/tags/subsubject/mathematics/linear-algebra',
  );
  assert.equal(
    resolveTagBrowseTarget('institute-of-science-tokyo').href,
    '/docs/tags/school/institute-of-science-tokyo',
  );
  assert.equal(
    resolveTagBrowseTarget('Institute of Science Tokyo').href,
    '/docs/tags/school/institute-of-science-tokyo',
  );
});

test('canonical topics and deprecated aliases resolve to the same target', () => {
  const canonical = 'Computer-Science.Computer-Architecture.IEEE-Standard-754-Floating-Point-Arithmetic';
  const alias = 'Computer-Science.Computer-Architecture.IEEE-754';

  assert.deepEqual(
    resolveTagBrowseTarget(alias),
    resolveTagBrowseTarget(canonical),
  );
  assert.equal(getTopicAnchorId(alias), getTopicAnchorId(canonical));
});

test('every taxonomy topic has one unique parent anchor and no legacy topic link', () => {
  const targets = Object.keys(tagTaxonomy.topics).map(resolveTagBrowseTarget);

  assert.equal(new Set(targets.map(({href}) => href)).size, targets.length);
  for (const target of targets) {
    assert.equal(target.kind, 'topic');
    assert.match(target.href, /^\/docs\/tags\/subsubject\/.+#topic-[a-z0-9-]+$/);
    assert.equal(target.href.includes('/docs/tags/topic/'), false);
    assert.equal(target.anchorId, getTopicAnchorId(target.id));
    assert.equal(target.displayName, getTopicDisplayName(target.id));
  }
});

test('unknown framework tags retain their supplied permalink', () => {
  assert.equal(
    resolveTagBrowseTarget('Tokyo-University-Blog', '/blog/tags/tokyo-university-blog').href,
    '/blog/tags/tokyo-university-blog',
  );
});

test('blog permalinks win even when a tag name matches the docs taxonomy', () => {
  const target = resolveTagBrowseTarget(
    'Mathematics.Calculus.Integration',
    '/blog/tags/mathematics-calculus-integration',
  );
  assert.equal(target.kind, 'unknown');
  assert.equal(target.href, '/blog/tags/mathematics-calculus-integration');
  assert.equal(target.displayName, 'Mathematics.Calculus.Integration');
});
