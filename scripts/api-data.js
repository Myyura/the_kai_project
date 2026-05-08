#!/usr/bin/env node

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const SITE_URL = 'https://runjp.com';

const CATEGORY_CACHE = new Map();

function normalizePath(input) {
  return input.replace(/\\/g, '/');
}

function readJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return null;
  }
}

function readCategory(dirPath) {
  const key = normalizePath(dirPath);
  if (CATEGORY_CACHE.has(key)) return CATEGORY_CACHE.get(key);

  const value = readJsonFile(path.join(dirPath, '_category_.json')) || {};
  CATEGORY_CACHE.set(key, value);
  return value;
}

function listMarkdownFiles(dirPath) {
  const files = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name) && entry.name !== 'intro.mdx') {
      files.push(fullPath);
    }
  }
  return files.sort((a, b) => normalizePath(a).localeCompare(normalizePath(b)));
}

function stripMarkdownDecorations(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`~]/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/#+/g, '')
    .trim();
}

function normalizeHeading(value) {
  return stripMarkdownDecorations(value)
    .toLowerCase()
    .replace(/[\s_-]+/g, '');
}

function getTitle(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+?)\s*$/m);
  return stripMarkdownDecorations(match?.[1] || fallback || '');
}

function extractSections(markdown) {
  const lines = markdown.split(/\r?\n/);
  const sections = {
    authorMarkdown: '',
    descriptionMarkdown: '',
    kaiMarkdown: '',
  };

  let active = null;
  const buffers = {
    authorMarkdown: [],
    descriptionMarkdown: [],
    kaiMarkdown: [],
  };

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading) {
      const normalized = normalizeHeading(heading[1]);
      if (normalized.includes('author')) {
        active = 'authorMarkdown';
        continue;
      }
      if (normalized.includes('description')) {
        active = 'descriptionMarkdown';
        continue;
      }
      if (normalized.includes('kai')) {
        active = 'kaiMarkdown';
        continue;
      }
      active = null;
      continue;
    }

    if (active) buffers[active].push(line);
  }

  for (const key of Object.keys(buffers)) {
    sections[key] = buffers[key].join('\n').trim();
  }

  return sections;
}

function getDirectoryLabel(segments) {
  if (segments.length === 0) return null;
  const dirPath = path.join(DOCS_DIR, ...segments);
  const category = readCategory(dirPath);
  return category.label || null;
}

function buildPathMetadata(relativePath) {
  const parsed = path.parse(relativePath);
  const pathWithoutExt = normalizePath(path.join(parsed.dir, parsed.name));
  const segments = pathWithoutExt.split('/');

  const universityId = segments[0] || null;
  const departmentId = segments[1] || null;
  const yearIndex = segments.findIndex((segment, index) => index >= 2 && /^\d{4}$/.test(segment));
  const year = yearIndex >= 0 ? Number(segments[yearIndex]) : null;
  const programSegments = yearIndex >= 0
    ? segments.slice(2, yearIndex)
    : segments.slice(2, -1);
  const programId = programSegments.length ? programSegments.join('/') : null;
  const fileSlug = segments[segments.length - 1] || null;
  const type = year ? 'exam' : 'guide';

  return {
    docId: pathWithoutExt,
    sourcePath: `docs/${relativePath}`,
    type,
    universityId,
    universityName: universityId ? getDirectoryLabel([universityId]) : null,
    departmentId,
    departmentName: universityId && departmentId ? getDirectoryLabel([universityId, departmentId]) : null,
    programId,
    programName: programSegments.length ? getDirectoryLabel([universityId, departmentId, ...programSegments]) : null,
    year,
    yearLabel: yearIndex >= 0 ? getDirectoryLabel(segments.slice(0, yearIndex + 1)) : null,
    fileSlug,
  };
}

function parseTags(tags) {
  if (Array.isArray(tags)) {
    return tags
      .map((tag) => String(tag || '').trim())
      .filter(Boolean);
  }
  if (typeof tags === 'string' && tags.trim()) return [tags.trim()];
  return [];
}

function buildExamDocument(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = matter(raw);
  const relativePath = normalizePath(path.relative(DOCS_DIR, filePath));
  const pathMeta = buildPathMetadata(relativePath);
  const fullMarkdown = String(parsed.content || '').trim();
  const sections = extractSections(fullMarkdown);
  const sidebarLabel = parsed.data?.sidebar_label ? String(parsed.data.sidebar_label).trim() : null;
  const title = getTitle(fullMarkdown, sidebarLabel || pathMeta.fileSlug);
  const contentHash = crypto.createHash('sha256').update(raw).digest('hex');

  return {
    doc_id: pathMeta.docId,
    type: pathMeta.type,
    source_path: pathMeta.sourcePath,
    title,
    sidebar_label: sidebarLabel,
    university_id: pathMeta.universityId,
    university_name: pathMeta.universityName,
    department_id: pathMeta.departmentId,
    department_name: pathMeta.departmentName,
    program_id: pathMeta.programId,
    program_name: pathMeta.programName,
    year: pathMeta.year,
    year_label: pathMeta.yearLabel,
    file_slug: pathMeta.fileSlug,
    tags: parseTags(parsed.data?.tags),
    author_markdown: sections.authorMarkdown,
    description_markdown: sections.descriptionMarkdown,
    kai_markdown: sections.kaiMarkdown,
    full_markdown: fullMarkdown,
    permalink: `${SITE_URL}/docs/${pathMeta.docId}`,
    content_hash: contentHash,
  };
}

function buildApiData() {
  const files = listMarkdownFiles(DOCS_DIR);
  const documents = files.map(buildExamDocument);
  const issues = validateApiData(documents);

  return {
    generatedAt: new Date().toISOString(),
    siteUrl: SITE_URL,
    documents,
    issues,
  };
}

function validateApiData(documents) {
  const issues = [];
  const seen = new Set();

  for (const doc of documents) {
    if (seen.has(doc.doc_id)) {
      issues.push({ severity: 'error', doc_id: doc.doc_id, message: 'Duplicate doc_id' });
    }
    seen.add(doc.doc_id);

    if (!doc.title) {
      issues.push({ severity: 'error', doc_id: doc.doc_id, message: 'Missing title' });
    }
    if (!doc.university_id || !doc.department_id) {
      issues.push({ severity: 'warning', doc_id: doc.doc_id, message: 'Missing university or department segment' });
    }
    if (doc.type === 'exam' && !doc.year) {
      issues.push({ severity: 'error', doc_id: doc.doc_id, message: 'Exam document has no year' });
    }
    if (doc.type === 'exam' && !doc.description_markdown && !doc.kai_markdown) {
      issues.push({ severity: 'warning', doc_id: doc.doc_id, message: 'Exam document has neither Description nor Kai section' });
    }
  }

  return issues;
}

module.exports = {
  buildApiData,
  buildExamDocument,
  validateApiData,
};
