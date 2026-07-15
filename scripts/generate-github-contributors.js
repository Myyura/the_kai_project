#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DEFAULT_REPOSITORY = 'Myyura/the_kai_project';
const OUTPUT_FILE = path.resolve(__dirname, '..', 'src', 'data', 'githubContributors.json');
const MAX_PAGES = 5;

function normalizeContributors(rows) {
  if (!Array.isArray(rows)) return [];

  return rows
    .filter((row) => (
      row
      && row.type !== 'Bot'
      && typeof row.login === 'string'
      && !row.login.endsWith('[bot]')
      && typeof row.html_url === 'string'
      && typeof row.avatar_url === 'string'
    ))
    .map((row) => ({
      login: row.login,
      avatarUrl: row.avatar_url,
      profileUrl: row.html_url,
      contributions: Math.max(0, Number(row.contributions) || 0),
    }))
    .sort((left, right) => (
      right.contributions - left.contributions
      || left.login.localeCompare(right.login, 'en')
    ));
}

async function fetchContributorPage(repository, page, token) {
  const url = new URL(`https://api.github.com/repos/${repository}/contributors`);
  url.searchParams.set('per_page', '100');
  url.searchParams.set('page', String(page));
  url.searchParams.set('anon', '0');

  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'the-kai-project-build',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GitHub contributors request failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) throw new Error('GitHub contributors response is not an array.');
  return data;
}

async function fetchContributors(repository, token) {
  const rows = [];
  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const pageRows = await fetchContributorPage(repository, page, token);
    rows.push(...pageRows);
    if (pageRows.length < 100) break;
  }
  return normalizeContributors(rows);
}

function cachedDataIsUsable() {
  try {
    const cached = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
    return Array.isArray(cached?.contributors);
  } catch {
    return false;
  }
}

async function main() {
  const repository = process.env.KAI_GITHUB_REPOSITORY || DEFAULT_REPOSITORY;
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

  try {
    const contributors = await fetchContributors(repository, token);
    const output = { repository, contributors };
    fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
    console.log(`Generated GitHub contributors: ${contributors.length}`);
  } catch (error) {
    if (!cachedDataIsUsable()) throw error;
    console.warn(`GitHub contributors refresh skipped; using cached data. ${error.message}`);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  normalizeContributors,
};
