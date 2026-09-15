const fs = require('node:fs');
const path = require('node:path');
const {resolveExperienceYear} = require('./years.cjs');

const EXTERNAL_DIRECTORY = 'src/data/experiences/external';
const defaultRepoRoot = path.resolve(__dirname, '../../..');

function canonicalExperienceUrl(value) {
  const url = new URL(value);
  url.hash = '';
  if (url.hostname === 'zhuanlan.zhihu.com' && /^\/p\/\d+\/?$/.test(url.pathname)) {
    url.protocol = 'https:';
    url.pathname = url.pathname.replace(/\/$/, '');
    url.search = '';
  }
  return url.href;
}

function externalExperiencePath(entry) {
  const url = new URL(entry.url);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
    throw new Error(`Invalid external experience URL: ${entry.url}`);
  }
  const publishedYear = entry.publishedYear;
  if (publishedYear !== undefined && (!Number.isInteger(publishedYear) || publishedYear < 1900 || publishedYear > 2100)) {
    throw new Error(`Invalid external experience publication year: ${entry.url}`);
  }
  if (!Array.isArray(entry.placements) || entry.placements.length === 0) {
    throw new Error(`External experience needs classifications: ${entry.url}`);
  }
  const years = entry.placements.map(placement => resolveExperienceYear(placement, publishedYear).year)
    .filter(year => year !== undefined);
  if (years.some(year => !Number.isInteger(year) || year < 1900 || year > 2101)) {
    throw new Error(`Invalid external experience admission year: ${entry.url}`);
  }
  // Keep a multi-year story once, under its latest directory year. Every
  // placement remains available to the frontend's school and year filters.
  const year = years.length ? Math.max(...years) : 'unknown';
  return `${EXTERNAL_DIRECTORY}/${encodeURIComponent(url.hostname)}/${year}.json`;
}

function readExternalExperiences(repoRoot = defaultRepoRoot) {
  const entries = [];
  const seen = new Map();
  const children = relativePath => fs.readdirSync(path.join(repoRoot, relativePath), {withFileTypes: true})
    .filter(item => !item.name.startsWith('.'))
    .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

  for (const source of children(EXTERNAL_DIRECTORY)) {
    const sourcePath = `${EXTERNAL_DIRECTORY}/${source.name}`;
    if (!source.isDirectory()) throw new Error(`Expected an external experience source directory: ${sourcePath}`);
    for (const year of children(sourcePath)) {
      const relativePath = `${sourcePath}/${year.name}`;
      if (!year.isFile() || !year.name.endsWith('.json')) {
        throw new Error(`Expected an external experience year JSON file: ${relativePath}`);
      }
      let group;
      try {
        group = JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'));
      } catch (cause) {
        throw new Error(`Cannot read external experiences from ${relativePath}: ${cause.message}`, {cause});
      }
      if (!Array.isArray(group)) throw new Error(`External experiences must be an array: ${relativePath}`);
      for (const entry of group) {
        const expectedPath = externalExperiencePath(entry);
        if (relativePath !== expectedPath) {
          throw new Error(`External experience ${entry.url} belongs in ${expectedPath}, found in ${relativePath}`);
        }
        const url = canonicalExperienceUrl(entry.url);
        if (seen.has(url)) {
          throw new Error(`Duplicate external URL ${url} in ${relativePath}; already in ${seen.get(url)}`);
        }
        seen.set(url, relativePath);
        entries.push(entry);
      }
    }
  }
  return entries;
}

module.exports = {EXTERNAL_DIRECTORY, canonicalExperienceUrl, externalExperiencePath, readExternalExperiences};
