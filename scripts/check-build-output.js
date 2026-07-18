#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const MAIN_GZIP_BUDGET = 450 * 1024;
const SEARCH_GZIP_BUDGET = 7 * 1024 * 1024;

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
if (!mainBundle) throw new Error('Main JavaScript bundle was not generated.');
if (!searchIndex) throw new Error('Search index was not generated.');

const forbiddenArtifacts = files.filter((filePath) => (
  /(^|\/)(sw\.js|manifest\.json|browserconfig\.xml)$/.test(filePath)
));
if (forbiddenArtifacts.length > 0) {
  throw new Error(`Retired PWA artifacts returned: ${forbiddenArtifacts.join(', ')}`);
}

const mainGzip = gzipSize(mainBundle);
const searchGzip = gzipSize(searchIndex);
if (mainGzip > MAIN_GZIP_BUDGET) {
  throw new Error(`Main bundle ${formatMiB(mainGzip)} exceeds ${formatMiB(MAIN_GZIP_BUDGET)}.`);
}
if (searchGzip > SEARCH_GZIP_BUDGET) {
  throw new Error(`Search index ${formatMiB(searchGzip)} exceeds ${formatMiB(SEARCH_GZIP_BUDGET)}.`);
}

console.log(`Build budgets passed: main ${formatMiB(mainGzip)}, search ${formatMiB(searchGzip)}.`);
