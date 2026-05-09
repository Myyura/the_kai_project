#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');

const errors = [];

function readJson(relativePath) {
  const filePath = path.join(REPO_ROOT, relativePath);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    errors.push(`${relativePath}: invalid JSON (${error.message})`);
    return null;
  }
}

function isObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function addError(pathLabel, message) {
  errors.push(`${pathLabel}: ${message}`);
}

function requireObject(value, pathLabel) {
  if (!isObject(value)) {
    addError(pathLabel, 'must be an object');
    return false;
  }
  return true;
}

function requireArray(value, pathLabel) {
  if (!Array.isArray(value)) {
    addError(pathLabel, 'must be an array');
    return false;
  }
  return true;
}

function requireString(value, pathLabel, { allowEmpty = false } = {}) {
  if (typeof value !== 'string') {
    addError(pathLabel, 'must be a string');
    return false;
  }
  if (!allowEmpty && !value.trim()) {
    addError(pathLabel, 'must not be empty');
    return false;
  }
  return true;
}

function requireInteger(value, pathLabel, { min = -Infinity, max = Infinity } = {}) {
  if (!Number.isInteger(value) || value < min || value > max) {
    addError(pathLabel, `must be an integer between ${min} and ${max}`);
    return false;
  }
  return true;
}

function requireNumber(value, pathLabel, { min = -Infinity, max = Infinity } = {}) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) {
    addError(pathLabel, `must be a number between ${min} and ${max}`);
    return false;
  }
  return true;
}

function requireUrl(value, pathLabel) {
  if (!requireString(value, pathLabel)) return false;
  try {
    const url = new URL(value);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      addError(pathLabel, 'must use http or https');
      return false;
    }
    return true;
  } catch {
    addError(pathLabel, 'must be a valid URL');
    return false;
  }
}

function validateLinks(data) {
  if (!requireObject(data, 'links.json')) return;
  const requiredText = [
    'title',
    'heading',
    'subtitle',
    'section1Title',
    'section1Desc',
    'section2Title',
    'section2Desc',
    'open',
    'statsLinks',
    'statsContributors',
    'statsCategories',
  ];

  for (const lang of ['zh', 'ja']) {
    const langData = data[lang];
    if (!requireObject(langData, `links.json.${lang}`)) continue;
    for (const key of requiredText) {
      requireString(langData[key], `links.json.${lang}.${key}`);
    }
    for (const section of ['links', 'jobLinks']) {
      const links = langData[section];
      if (!requireArray(links, `links.json.${lang}.${section}`)) continue;
      links.forEach((link, index) => {
        const base = `links.json.${lang}.${section}[${index}]`;
        if (!requireObject(link, base)) return;
        requireString(link.name, `${base}.name`);
        requireUrl(link.url, `${base}.url`);
        requireString(link.desc, `${base}.desc`, { allowEmpty: true });
      });
    }
  }
}

function validateAdmissions(data) {
  if (!requireObject(data, 'admissions.json')) return;
  if (requireArray(data.records, 'admissions.json.records')) {
    const ids = new Set();
    data.records.forEach((record, index) => {
      const base = `admissions.json.records[${index}]`;
      if (!requireObject(record, base)) return;
      if (requireString(record.id, `${base}.id`)) {
        if (ids.has(record.id)) addError(`${base}.id`, `duplicate id "${record.id}"`);
        ids.add(record.id);
      }
      requireString(record.universityId, `${base}.universityId`);
      requireString(record.departmentId, `${base}.departmentId`);
      requireInteger(record.year, `${base}.year`, { min: 1900, max: 2100 });
      requireString(record.type, `${base}.type`);
      requireInteger(record.applicants, `${base}.applicants`, { min: 0 });
      requireInteger(record.admitted, `${base}.admitted`, { min: 0 });
      requireNumber(record.rate, `${base}.rate`, { min: 0, max: 100 });
      requireString(record.note, `${base}.note`, { allowEmpty: true });
      if (
        Number.isInteger(record.applicants)
        && Number.isInteger(record.admitted)
        && record.admitted > record.applicants
      ) {
        addError(`${base}.admitted`, 'must not exceed applicants');
      }
    });
  }

  if (requireArray(data.examTypes, 'admissions.json.examTypes')) {
    data.examTypes.forEach((value, index) => requireString(value, `admissions.json.examTypes[${index}]`));
  }

  if (requireArray(data.sortOptions, 'admissions.json.sortOptions')) {
    data.sortOptions.forEach((option, index) => {
      const base = `admissions.json.sortOptions[${index}]`;
      if (!requireObject(option, base)) return;
      requireString(option.value, `${base}.value`);
      requireString(option.label, `${base}.label`);
      requireString(option.labelJa, `${base}.labelJa`);
    });
  }
}

function validateUniversityMetadata(data) {
  if (!requireObject(data, 'universityMetadata.json')) return;
  if (requireObject(data.colors, 'universityMetadata.json.colors')) {
    for (const [universityId, color] of Object.entries(data.colors)) {
      requireString(universityId, `universityMetadata.json.colors key "${universityId}"`);
      if (typeof color !== 'string' || !/^#[0-9a-f]{6}$/i.test(color)) {
        addError(`universityMetadata.json.colors.${universityId}`, 'must be a #RRGGBB color');
      }
    }
  }

  if (requireObject(data.websiteUrls, 'universityMetadata.json.websiteUrls')) {
    for (const [key, url] of Object.entries(data.websiteUrls)) {
      if (!/^[^/]+\/[^/]+$/.test(key)) {
        addError(`universityMetadata.json.websiteUrls key "${key}"`, 'must be "universityId/departmentId"');
      } else {
        const [universityId, departmentId] = key.split('/');
        if (!fs.existsSync(path.join(DOCS_DIR, universityId, departmentId))) {
          addError(`universityMetadata.json.websiteUrls.${key}`, 'does not match an existing docs university/department directory');
        }
      }
      requireUrl(url, `universityMetadata.json.websiteUrls.${key}`);
    }
  }
}

function validateSiteStats(data) {
  if (!requireObject(data, 'siteStats.json')) return;
  for (const key of ['totalDocuments', 'examDocuments', 'guideDocuments', 'universities', 'departments', 'programs']) {
    requireInteger(data[key], `siteStats.json.${key}`, { min: 0 });
  }
}

validateLinks(readJson('src/data/links.json'));
validateAdmissions(readJson('src/data/admissions.json'));
validateUniversityMetadata(readJson('src/data/universityMetadata.json'));
validateSiteStats(readJson('src/data/siteStats.json'));

if (errors.length > 0) {
  console.error('Content data validation failed:');
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log('Content data validation passed.');
