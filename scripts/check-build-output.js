#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const DOCS_TAGS_DIR = path.join(BUILD_DIR, 'docs', 'tags');

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filePath) : [filePath];
  });
}

function gzipSize(filePath) {
  return zlib.gzipSync(fs.readFileSync(filePath)).length;
}

function readRequiredFile(filePath, missingMessage) {
  try {
    return fs.readFileSync(filePath);
  } catch (error) {
    if (error?.code === 'ENOENT') {
      throw new Error(missingMessage);
    }
    throw error;
  }
}

function formatMiB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
}

function validateInternalLinks(allFiles) {
  const targets = new Set(['/']);
  for (const filePath of allFiles) {
    const relative = path.relative(BUILD_DIR, filePath).split(path.sep).join('/');
    targets.add(`/${relative}`);
    if (relative === 'index.html') targets.add('/');
    if (relative.endsWith('/index.html')) {
      const route = `/${relative.slice(0, -'index.html'.length)}`;
      targets.add(route);
      targets.add(route.replace(/\/$/, ''));
    } else if (relative.endsWith('.html')) {
      targets.add(`/${relative.slice(0, -'.html'.length)}`);
    }
  }

  const missing = new Map();
  for (const filePath of allFiles.filter((file) => file.endsWith('.html'))) {
    const html = fs.readFileSync(filePath, 'utf8');
    for (const match of html.matchAll(/\bhref=(?:"([^"]+)"|'([^']+)')/g)) {
      const href = match[1] ?? match[2];
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const clean = href.split(/[?#]/, 1)[0];
      let decoded = clean;
      try {
        decoded = decodeURI(clean);
      } catch {
        // Keep the literal path; malformed escapes will fail target lookup.
      }
      if (targets.has(clean) || targets.has(decoded)) continue;
      if (!missing.has(href)) missing.set(href, []);
      const sources = missing.get(href);
      if (sources.length < 3) sources.push(path.relative(BUILD_DIR, filePath));
    }
  }

  if (missing.size > 0) {
    const examples = [...missing]
      .slice(0, 20)
      .map(([href, sources]) => `${href} (${sources.join(', ')})`)
      .join('; ');
    throw new Error(`Built HTML contains ${missing.size} missing internal targets: ${examples}`);
  }
}

let files;
try {
  files = walk(BUILD_DIR);
} catch (error) {
  if (error?.code === 'ENOENT') {
    throw new Error('Missing build output; run yarn build first.');
  }
  throw error;
}
validateInternalLinks(files);
const mainBundle = files.find((filePath) => (
  /\/static\/js\/index(?:\.[^/]+)?\.js$/.test(filePath)
));
const searchIndex = files.find((filePath) => (
  /\/static\/search_index(?:\.[^/]+)*\.json$/.test(filePath)
));
const contentManifestPath = path.join(BUILD_DIR, 'api-content', 'v1', 'manifest.json');
const homePagePath = path.join(BUILD_DIR, 'index.html');
const introPagePath = path.join(BUILD_DIR, 'docs', 'intro.html');
const blogIndexPath = path.join(BUILD_DIR, 'blog.html');
const blogPagePath = path.join(BUILD_DIR, 'blog', '2025', '04', '02', 'furry.html');
const loginPagePath = path.join(BUILD_DIR, 'login.html');
const sitemapPath = path.join(BUILD_DIR, 'sitemap.xml');
const rssPath = path.join(BUILD_DIR, 'blog', 'rss.xml');
const atomPath = path.join(BUILD_DIR, 'blog', 'atom.xml');
const contentExportPath = path.join(
  BUILD_DIR,
  'content-export',
  'v1',
  'kai-content-v1.json.gz',
);
if (!mainBundle) throw new Error('Main JavaScript bundle was not generated.');
if (!searchIndex) throw new Error('Search index was not generated.');

const forbiddenArtifacts = [
  path.join(BUILD_DIR, 'sw.js'),
  path.join(BUILD_DIR, 'manifest.json'),
  path.join(BUILD_DIR, 'browserconfig.xml'),
].filter((filePath) => fs.existsSync(filePath));
if (forbiddenArtifacts.length > 0) {
  throw new Error(`Retired PWA artifacts returned: ${forbiddenArtifacts.join(', ')}`);
}
for (const publicFile of [
  'CNAME',
  '.nojekyll',
  'robots.txt',
  'img/favicon.ico',
  'img/kai-icon.png',
  'img/kai-social-card.png',
]) {
  if (!fs.existsSync(path.join(BUILD_DIR, publicFile))) {
    throw new Error(`Public asset was not copied: ${publicFile}`);
  }
}

const mainGzip = gzipSize(mainBundle);
const searchGzip = gzipSize(searchIndex);
const searchPages = JSON.parse(readRequiredFile(
  searchIndex,
  'Search index was not generated.',
).toString('utf8'));
const contentManifestBuffer = readRequiredFile(
  contentManifestPath,
  'Published document content manifest was not generated.',
);
const homePageHtml = readRequiredFile(
  homePagePath,
  'Homepage build output was not generated.',
).toString('utf8');
const introPageHtml = readRequiredFile(
  introPagePath,
  'Intro document build output was not generated.',
).toString('utf8');
const blogIndexHtml = readRequiredFile(
  blogIndexPath,
  'Blog index build output was not generated.',
).toString('utf8');
const blogPageHtml = readRequiredFile(
  blogPagePath,
  'Blog post build output was not generated.',
).toString('utf8');
const loginPageHtml = readRequiredFile(
  loginPagePath,
  'Login page build output was not generated.',
).toString('utf8');
const sitemapXml = readRequiredFile(
  sitemapPath,
  'Sitemap was not generated.',
).toString('utf8');
const rssXml = readRequiredFile(rssPath, 'RSS feed was not generated.').toString('utf8');
const atomXml = readRequiredFile(atomPath, 'Atom feed was not generated.').toString('utf8');
const contentExportBuffer = readRequiredFile(
  contentExportPath,
  'Kai content v1 export was not generated.',
);
const contentManifest = JSON.parse(contentManifestBuffer.toString('utf8'));
const publishedContentFiles = files.filter((filePath) => (
  filePath.startsWith(path.join(BUILD_DIR, 'api-content', 'v1', 'documents') + path.sep)
  && filePath.endsWith('.json')
));
const docsHtmlFiles = files.filter((filePath) => (
  filePath.startsWith(path.join(BUILD_DIR, 'docs') + path.sep)
  && filePath.endsWith('.html')
));
const allHtmlFiles = files.filter((filePath) => filePath.endsWith('.html'));
const topicTagHtmlFiles = docsHtmlFiles.filter((filePath) => (
  filePath.startsWith(path.join(DOCS_TAGS_DIR, 'topic') + path.sep)
));
const subsubjectTagHtmlFiles = docsHtmlFiles.filter((filePath) => (
  filePath.startsWith(path.join(DOCS_TAGS_DIR, 'subsubject') + path.sep)
));
const schoolTagHtmlFiles = docsHtmlFiles.filter((filePath) => (
  filePath.startsWith(path.join(DOCS_TAGS_DIR, 'school') + path.sep)
));
const legacyTopicLinkFiles = docsHtmlFiles.filter((filePath) => {
  const html = fs.readFileSync(filePath, 'utf8');
  return /href=["']\/docs\/tags\/topic\//.test(html);
});
const apiDocuments = require('./api-data').buildApiData().documents;
const expectedSubsubjectRoutes = new Set(
  apiDocuments.flatMap((document) => document.subsubject_ids || []),
).size;
const expectedSchoolRoutes = new Set(
  apiDocuments.flatMap((document) => document.school_tags || []),
).size;
const publishedContentBytes = publishedContentFiles.reduce(
  (total, filePath) => total + fs.statSync(filePath).size,
  0,
);
const totalBuildBytes = files.reduce(
  (total, filePath) => total + fs.statSync(filePath).size,
  0,
);
if (allHtmlFiles.length !== 2257) {
  throw new Error(`Expected 2,257 HTML files including 404, found ${allHtmlFiles.length}.`);
}
for (const routeFile of [
  'docs/category/TITech.html',
  'blog/archive.html',
  'blog/authors.html',
  'blog/tags/kyoto-university-blog.html',
  'search.html',
]) {
  if (!fs.existsSync(path.join(BUILD_DIR, routeFile))) {
    throw new Error(`Legacy public route output is missing: ${routeFile}`);
  }
}
if (fs.existsSync(path.join(BUILD_DIR, 'category', 'TITech.html'))) {
  throw new Error('Incorrect root-level category route returned.');
}
const unsupportedMediaRangeFiles = files.filter((filePath) => {
  if (!filePath.endsWith('.css')) return false;
  const css = fs.readFileSync(filePath, 'utf8');
  return /@media[^{}]*\((?:width|height)\s*[<>]=?/.test(css);
});
const contentExportGzip = contentExportBuffer.length;
let contentExport;
try {
  contentExport = JSON.parse(zlib.gunzipSync(contentExportBuffer).toString('utf8'));
} catch (error) {
  throw new Error(`Kai content v1 export is not valid gzip JSON: ${error.message}`);
}
if (contentManifest.schemaVersion !== 1) throw new Error('Unexpected published document schema version.');
if (contentManifest.documentCount !== publishedContentFiles.length) {
  throw new Error(`Published document manifest lists ${contentManifest.documentCount}, found ${publishedContentFiles.length} files.`);
}
if (unsupportedMediaRangeFiles.length > 0) {
  throw new Error(
    'Build output contains media-query range syntax that breaks responsive layouts in older Safari: '
    + unsupportedMediaRangeFiles.join(', '),
  );
}
if (topicTagHtmlFiles.length > 0) {
  throw new Error(`Topic tag routes returned: ${topicTagHtmlFiles.length}.`);
}
if (subsubjectTagHtmlFiles.length !== expectedSubsubjectRoutes) {
  throw new Error(
    `Expected ${expectedSubsubjectRoutes} active subsubject routes, found ${subsubjectTagHtmlFiles.length}.`,
  );
}
if (schoolTagHtmlFiles.length !== expectedSchoolRoutes) {
  throw new Error(
    `Expected ${expectedSchoolRoutes} school tag routes, found ${schoolTagHtmlFiles.length}.`,
  );
}
if (legacyTopicLinkFiles.length > 0) {
  throw new Error(
    `Built docs contain legacy /docs/tags/topic/ links: ${legacyTopicLinkFiles.slice(0, 10).join(', ')}`,
  );
}
for (const route of ['/', '/auth/callback', '/help', '/links', '/login', '/me', '/reset-password', '/support']) {
  if (searchPages.some((page) => page.routePath === route)) {
    throw new Error(`Custom page leaked into the local search index: ${route}`);
  }
}
if (!homePageHtml.includes('data-kai-chunk-recovery')) {
  throw new Error('Homepage is missing the stale-chunk recovery bootstrap.');
}
function hasHeadTag(html, tagName, attributes) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'g')) || [];
  return tags.some((tag) => Object.entries(attributes).every(
    ([name, value]) => tag.includes(`${name}="${value}"`),
  ));
}
for (const [label, html, url] of [
  ['homepage', homePageHtml, 'https://runjp.com'],
  ['intro document', introPageHtml, 'https://runjp.com/docs/intro'],
  ['blog post', blogPageHtml, 'https://runjp.com/blog/2025/04/02/furry'],
]) {
  if (!hasHeadTag(html, 'link', {rel: 'canonical', href: url})) {
    throw new Error(`${label} is missing its route-specific canonical URL.`);
  }
  if (!hasHeadTag(html, 'meta', {property: 'og:url', content: url})) {
    throw new Error(`${label} is missing its route-specific og:url.`);
  }
}
if (!hasHeadTag(loginPageHtml, 'meta', {
  property: 'og:title',
  content: '登录 / ログイン / Login',
})) {
  throw new Error('Login page is missing its route-specific og:title.');
}
if (!introPageHtml.includes(
  'href="https://github.com/Myyura/the_kai_project/tree/main/docs/intro.mdx"',
)) {
  throw new Error('Intro edit link does not target the docs directory in GitHub.');
}
for (const [label, html, expectedMarkup] of [
  ['blog index title', blogIndexHtml, '<h1>备考经验与合格记录</h1>'],
  ['blog index author', blogIndexHtml, '<strong>毛茸茸爱好者</strong>'],
  ['blog index sidebar', blogIndexHtml, '<h2>全部文章</h2>'],
  [
    'blog post title',
    blogPageHtml,
    '<h1>性价比修考！140h速通京大情报笔试和面试</h1>',
  ],
  ['blog post author', blogPageHtml, '<strong>毛茸茸爱好者</strong>'],
  ['blog post previous link', blogPageHtml, '<small>上一篇</small>'],
  ['blog post next link', blogPageHtml, '<small>下一篇</small>'],
]) {
  if (!html.includes(expectedMarkup)) {
    throw new Error(`${label} is missing from the server-rendered blog chrome.`);
  }
}
for (const route of ['/auth/callback', '/login', '/me', '/reset-password', '/search']) {
  if (sitemapXml.includes(`<loc>https://runjp.com${route}</loc>`)) {
    throw new Error(`Private route leaked into sitemap: ${route}`);
  }
}
if ((sitemapXml.match(/<url>/g) || []).length !== 2251) {
  throw new Error('Sitemap does not contain the expected 2,251 public routes.');
}
if ((rssXml.match(/<item>/g) || []).length !== 5) {
  throw new Error('RSS feed does not contain all five blog posts.');
}
if ((atomXml.match(/<entry>/g) || []).length !== 5) {
  throw new Error('Atom feed does not contain all five blog posts.');
}
for (const [label, feed] of [['RSS', rssXml], ['Atom', atomXml]]) {
  if (!feed.includes('毛茸茸爱好者')) {
    throw new Error(`${label} feed is missing resolved blog authors.`);
  }
  if (!feed.includes('Kyoto-University-Blog')) {
    throw new Error(`${label} feed is missing blog categories.`);
  }
}
if (contentExport.format !== 'kai-content' || contentExport.schemaVersion !== 1) {
  throw new Error('Unexpected Kai content export format or schema version.');
}
if (!Array.isArray(contentExport.directories)
  || !Array.isArray(contentExport.documents)
  || !Array.isArray(contentExport.assets)) {
  throw new Error('Kai content export is missing directories, documents, or assets.');
}
if (contentExport.counts?.directories !== contentExport.directories.length) {
  throw new Error('Kai content export directory count is inconsistent.');
}
if (contentExport.counts?.documents !== contentExport.documents.length) {
  throw new Error('Kai content export document count is inconsistent.');
}
if (contentExport.counts?.assets !== contentExport.assets.length) {
  throw new Error('Kai content export asset count is inconsistent.');
}
const exportedDocumentUuids = new Set(contentExport.documents.map((document) => document.documentUuid));
if (exportedDocumentUuids.size !== contentExport.documents.length) {
  throw new Error('Kai content export contains duplicate document UUIDs.');
}

console.log(
  `Build output verified: main gzip ${formatMiB(mainGzip)}, search gzip ${formatMiB(searchGzip)}, `
  + `published content ${formatMiB(publishedContentBytes)} across ${publishedContentFiles.length} files, `
  + `Kai content export gzip ${formatMiB(contentExportGzip)} across ${contentExport.documents.length} documents `
  + `and ${contentExport.assets.length} assets, tag routes ${subsubjectTagHtmlFiles.length} subsubjects `
  + `and ${schoolTagHtmlFiles.length} schools, total build ${formatMiB(totalBuildBytes)}.`,
);
