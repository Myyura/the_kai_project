#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const MAIN_GZIP_BUDGET = 450 * 1024;
const SEARCH_GZIP_BUDGET = 7 * 1024 * 1024;
const PUBLISHED_CONTENT_BUDGET = 15 * 1024 * 1024;
const CONTENT_EXPORT_GZIP_BUDGET = 20 * 1024 * 1024;

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filePath) : [filePath];
  });
}

function gzipSize(filePath) {
  return zlib.gzipSync(fs.readFileSync(filePath)).length;
}

function formatMiB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
}

if (!fs.existsSync(BUILD_DIR)) throw new Error('Missing build output; run yarn build first.');
const files = walk(BUILD_DIR);
const mainBundle = files.find((filePath) => /\/assets\/js\/main\.[^/]+\.js$/.test(filePath));
const searchIndex = files.find((filePath) => filePath.endsWith('/search-index.json'));
const contentManifestPath = path.join(BUILD_DIR, 'api-content', 'v1', 'manifest.json');
const contentExportPath = path.join(
  BUILD_DIR,
  'content-export',
  'v1',
  'kai-content-v1.json.gz',
);
if (!mainBundle) throw new Error('Main JavaScript bundle was not generated.');
if (!searchIndex) throw new Error('Search index was not generated.');
if (!fs.existsSync(contentManifestPath)) throw new Error('Published document content manifest was not generated.');
if (!fs.existsSync(contentExportPath)) throw new Error('Kai content v1 export was not generated.');

const forbiddenArtifacts = [
  path.join(BUILD_DIR, 'sw.js'),
  path.join(BUILD_DIR, 'manifest.json'),
  path.join(BUILD_DIR, 'browserconfig.xml'),
].filter((filePath) => fs.existsSync(filePath));
if (forbiddenArtifacts.length > 0) {
  throw new Error(`Retired PWA artifacts returned: ${forbiddenArtifacts.join(', ')}`);
}

const mainGzip = gzipSize(mainBundle);
const searchGzip = gzipSize(searchIndex);
const contentManifest = JSON.parse(fs.readFileSync(contentManifestPath, 'utf8'));
const publishedContentFiles = files.filter((filePath) => (
  filePath.startsWith(path.join(BUILD_DIR, 'api-content', 'v1', 'documents') + path.sep)
  && filePath.endsWith('.json')
));
const publishedContentBytes = publishedContentFiles.reduce(
  (total, filePath) => total + fs.statSync(filePath).size,
  0,
);
const contentExportGzip = fs.statSync(contentExportPath).size;
let contentExport;
try {
  contentExport = JSON.parse(zlib.gunzipSync(fs.readFileSync(contentExportPath)).toString('utf8'));
} catch (error) {
  throw new Error(`Kai content v1 export is not valid gzip JSON: ${error.message}`);
}
if (contentManifest.schemaVersion !== 1) throw new Error('Unexpected published document schema version.');
if (contentManifest.documentCount !== publishedContentFiles.length) {
  throw new Error(`Published document manifest lists ${contentManifest.documentCount}, found ${publishedContentFiles.length} files.`);
}
if (publishedContentBytes > PUBLISHED_CONTENT_BUDGET) {
  throw new Error(`Published document content ${formatMiB(publishedContentBytes)} exceeds ${formatMiB(PUBLISHED_CONTENT_BUDGET)}.`);
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
if (contentExportGzip > CONTENT_EXPORT_GZIP_BUDGET) {
  throw new Error(`Kai content export ${formatMiB(contentExportGzip)} exceeds ${formatMiB(CONTENT_EXPORT_GZIP_BUDGET)}.`);
}
if (mainGzip > MAIN_GZIP_BUDGET) {
  throw new Error(`Main bundle ${formatMiB(mainGzip)} exceeds ${formatMiB(MAIN_GZIP_BUDGET)}.`);
}
if (searchGzip > SEARCH_GZIP_BUDGET) {
  throw new Error(`Search index ${formatMiB(searchGzip)} exceeds ${formatMiB(SEARCH_GZIP_BUDGET)}.`);
}

console.log(
  `Build budgets passed: main ${formatMiB(mainGzip)}, search ${formatMiB(searchGzip)}, `
  + `published content ${formatMiB(publishedContentBytes)} across ${publishedContentFiles.length} files, `
  + `Kai content export ${formatMiB(contentExportGzip)} across ${contentExport.documents.length} documents `
  + `and ${contentExport.assets.length} assets.`,
);
