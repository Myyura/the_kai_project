#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { buildTagsYaml } = require('./generate-docusaurus-tags');

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const DOCS_TAGS_PATH = path.join(DOCS_DIR, 'tags.yml');

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

function validateTagTaxonomy(data) {
  if (!requireObject(data, 'tagTaxonomy')) return;

  if (data.version !== undefined) {
    requireInteger(data.version, 'tagTaxonomy.version', { min: 1 });
  }

  const subjectIds = new Set();
  if (requireObject(data.subjects, 'tagTaxonomy.subjects')) {
    for (const [subjectId, subject] of Object.entries(data.subjects)) {
      subjectIds.add(subjectId);
      const base = `tagTaxonomy.subjects.${subjectId}`;
      if (!requireObject(subject, base)) continue;
      requireString(subject.labelZh, `${base}.labelZh`);
      requireString(subject.labelJa, `${base}.labelJa`);
      if (subject.descriptionZh !== undefined) {
        requireString(subject.descriptionZh, `${base}.descriptionZh`, { allowEmpty: true });
      }
      if (subject.descriptionJa !== undefined) {
        requireString(subject.descriptionJa, `${base}.descriptionJa`, { allowEmpty: true });
      }
    }
  }

  if (requireArray(data.subjectOrder, 'tagTaxonomy.subjectOrder')) {
    data.subjectOrder.forEach((subjectId, index) => {
      if (requireString(subjectId, `tagTaxonomy.subjectOrder[${index}]`) && !subjectIds.has(subjectId)) {
        addError(`tagTaxonomy.subjectOrder[${index}]`, `unknown subject "${subjectId}"`);
      }
    });
  }

  const canonicalTags = new Set();
  for (const tagId of Object.keys(data.schoolTags || {})) canonicalTags.add(tagId);
  for (const tagId of Object.keys(data.subsubjects || {})) canonicalTags.add(tagId);
  for (const tagId of Object.keys(data.topics || {})) canonicalTags.add(tagId);

  const aliasOwners = new Map();
  const registerAlias = (alias, owner, pathLabel) => {
    if (!requireString(alias, pathLabel)) return;
    if (canonicalTags.has(alias)) {
      addError(pathLabel, `must not duplicate canonical tag "${alias}"`);
      return;
    }
    if (aliasOwners.has(alias) && aliasOwners.get(alias) !== owner) {
      addError(pathLabel, `alias "${alias}" already belongs to "${aliasOwners.get(alias)}"`);
      return;
    }
    aliasOwners.set(alias, owner);
  };

  if (requireObject(data.schoolTags, 'tagTaxonomy.schoolTags')) {
    for (const [tagId, tag] of Object.entries(data.schoolTags)) {
      canonicalTags.add(tagId);
      const base = `tagTaxonomy.schoolTags.${tagId}`;
      if (!requireObject(tag, base)) continue;
      requireString(tag.universityId, `${base}.universityId`);
      requireString(tag.label, `${base}.label`);
      if (tag.aliases !== undefined && requireArray(tag.aliases, `${base}.aliases`)) {
        tag.aliases.forEach((alias, index) => registerAlias(alias, tagId, `${base}.aliases[${index}]`));
      }
    }
  }

  const subsubjectIds = new Set();
  if (data.version >= 2 || data.subsubjects !== undefined) {
    if (requireObject(data.subsubjects, 'tagTaxonomy.subsubjects')) {
      for (const [subsubjectId, subsubject] of Object.entries(data.subsubjects)) {
        subsubjectIds.add(subsubjectId);
        const base = `tagTaxonomy.subsubjects.${subsubjectId}`;
        if (!requireObject(subsubject, base)) continue;
        if (requireString(subsubject.subject, `${base}.subject`) && !subjectIds.has(subsubject.subject)) {
          addError(`${base}.subject`, `unknown subject "${subsubject.subject}"`);
        }
        requireString(subsubject.labelZh, `${base}.labelZh`);
        requireString(subsubject.labelJa, `${base}.labelJa`);
        if (subsubject.labelEn !== undefined) {
          requireString(subsubject.labelEn, `${base}.labelEn`);
        }
        if (subsubject.descriptionZh !== undefined) {
          requireString(subsubject.descriptionZh, `${base}.descriptionZh`, { allowEmpty: true });
        }
        if (subsubject.descriptionJa !== undefined) {
          requireString(subsubject.descriptionJa, `${base}.descriptionJa`, { allowEmpty: true });
        }
        if (subsubject.descriptionEn !== undefined) {
          requireString(subsubject.descriptionEn, `${base}.descriptionEn`, { allowEmpty: true });
        }
        if (subsubject.aliases !== undefined && requireArray(subsubject.aliases, `${base}.aliases`)) {
          if (data.version >= 3) {
            addError(`${base}.aliases`, 'learning tag aliases are not allowed in taxonomy v3');
          } else {
            subsubject.aliases.forEach((alias, index) => registerAlias(alias, subsubjectId, `${base}.aliases[${index}]`));
          }
        }
      }
    }

    if (requireArray(data.subsubjectOrder, 'tagTaxonomy.subsubjectOrder')) {
      data.subsubjectOrder.forEach((subsubjectId, index) => {
        if (
          requireString(subsubjectId, `tagTaxonomy.subsubjectOrder[${index}]`)
          && !subsubjectIds.has(subsubjectId)
        ) {
          addError(`tagTaxonomy.subsubjectOrder[${index}]`, `unknown subsubject "${subsubjectId}"`);
        }
      });
    }
  }

  if (requireObject(data.topics, 'tagTaxonomy.topics')) {
    for (const [tagId, tag] of Object.entries(data.topics)) {
      const base = `tagTaxonomy.topics.${tagId}`;
      if (!requireObject(tag, base)) continue;
      if (data.version >= 2) {
        if (requireString(tag.subsubject, `${base}.subsubject`) && !subsubjectIds.has(tag.subsubject)) {
          addError(`${base}.subsubject`, `unknown subsubject "${tag.subsubject}"`);
        }
        if (data.version >= 3 && typeof tag.subsubject === 'string') {
          const expectedPrefix = `${tag.subsubject}.`;
          if (!tagId.startsWith(expectedPrefix)) {
            addError(base, `topic key must start with "${expectedPrefix}"`);
          } else {
            const shortId = tagId.slice(expectedPrefix.length);
            if (!shortId) {
              addError(base, 'topic short id must not be empty');
            }
            if (shortId.includes('.')) {
              addError(base, 'topic short id must not contain "."');
            }
          }
        }
      }
      if (requireArray(tag.subjects, `${base}.subjects`)) {
        tag.subjects.forEach((subjectId, index) => {
          if (requireString(subjectId, `${base}.subjects[${index}]`) && !subjectIds.has(subjectId)) {
            addError(`${base}.subjects[${index}]`, `unknown subject "${subjectId}"`);
          }
        });
      }
      if (tag.aliases !== undefined && requireArray(tag.aliases, `${base}.aliases`)) {
        if (data.version >= 3) {
          addError(`${base}.aliases`, 'learning tag aliases are not allowed in taxonomy v3');
        } else {
          tag.aliases.forEach((alias, index) => registerAlias(alias, tagId, `${base}.aliases[${index}]`));
        }
      }
    }
  }

}

function validateGeneratedTagsFile(tagTaxonomy) {
  const expected = buildTagsYaml(tagTaxonomy);
  let actual = '';
  try {
    actual = fs.readFileSync(DOCS_TAGS_PATH, 'utf-8');
  } catch {
    addError('docs/tags.yml', 'missing generated Docusaurus tags metadata');
    return;
  }

  if (actual !== expected) {
    addError('docs/tags.yml', 'is out of date; run node scripts/generate-docusaurus-tags.js');
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
const tagTaxonomy = require('../src/data/tagTaxonomy');
validateTagTaxonomy(tagTaxonomy);
if (tagTaxonomy) validateGeneratedTagsFile(tagTaxonomy);
validateSiteStats(readJson('src/data/siteStats.json'));

if (errors.length > 0) {
  console.error('Content data validation failed:');
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log('Content data validation passed.');
