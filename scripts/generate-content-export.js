#!/usr/bin/env node

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const {execFileSync} = require('child_process');
const matter = require('gray-matter');
const {
  buildApiData,
  buildExamDocument,
} = require('./api-data');

const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const DEFAULT_OUTPUT_PATH = path.join(
  REPO_ROOT,
  'build',
  'content-export',
  'v1',
  'kai-content-v1.json.gz',
);
const FORMAT = 'kai-content';
const SCHEMA_VERSION = 1;
const DEFAULT_REPOSITORY = 'https://github.com/Myyura/the_kai_project';
const ASSET_MIME_TYPES = new Map([
  ['.gif', 'image/gif'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
]);

function normalizePath(value) {
  return String(value || '').replaceAll('\\', '/');
}

function listEntriesRecursively(directory, predicate) {
  const result = [];
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      result.push(...listEntriesRecursively(absolutePath, predicate));
    } else if (entry.isFile() && predicate(entry.name)) {
      result.push(absolutePath);
    }
  }
  return result.sort((left, right) => normalizePath(left).localeCompare(normalizePath(right)));
}

function listDocumentFiles() {
  return listEntriesRecursively(DOCS_DIR, (name) => /\.mdx?$/.test(name));
}

function listAssetFiles() {
  return listEntriesRecursively(DOCS_DIR, (name) => (
    ASSET_MIME_TYPES.has(path.extname(name).toLowerCase())
  ));
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function toJsonSafe(value) {
  return JSON.parse(JSON.stringify(value ?? {}));
}

function buildDirectories() {
  const result = [];

  function visit(directory) {
    const entries = fs.readdirSync(directory, {withFileTypes: true})
      .filter((entry) => entry.isDirectory())
      .sort((left, right) => left.name.localeCompare(right.name));

    for (const entry of entries) {
      const absolutePath = path.join(directory, entry.name);
      const directoryPath = normalizePath(path.relative(DOCS_DIR, absolutePath));
      const separatorIndex = directoryPath.lastIndexOf('/');
      const parentPath = separatorIndex >= 0 ? directoryPath.slice(0, separatorIndex) : null;
      const categoryPath = path.join(absolutePath, '_category_.json');
      const category = fs.existsSync(categoryPath) ? toJsonSafe(readJson(categoryPath)) : {};
      const numericPosition = Number(category.position);

      result.push({
        path: directoryPath,
        parentPath,
        name: entry.name,
        label: typeof category.label === 'string' && category.label.trim()
          ? category.label.trim()
          : entry.name,
        position: Number.isFinite(numericPosition) ? numericPosition : null,
        category,
      });
      visit(absolutePath);
    }
  }

  visit(DOCS_DIR);
  return result.sort((left, right) => left.path.localeCompare(right.path));
}

function getGitValue(args, fallback = '') {
  try {
    return execFileSync('git', args, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim() || fallback;
  } catch {
    return fallback;
  }
}

function getSourceMetadata() {
  const repository = process.env.GITHUB_REPOSITORY
    ? `https://github.com/${process.env.GITHUB_REPOSITORY}`
    : DEFAULT_REPOSITORY;
  return {
    repository,
    commit: process.env.GITHUB_SHA || getGitValue(['rev-parse', 'HEAD']),
    ref: process.env.GITHUB_REF_NAME || getGitValue(['rev-parse', '--abbrev-ref', 'HEAD'], 'main'),
  };
}

function getDirectoryPath(docId) {
  const directory = path.posix.dirname(normalizePath(docId));
  return directory === '.' ? null : directory;
}

function toExportDocument(document, filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const docIdSegments = document.doc_id.split('/');
  const hasUniversityHierarchy = docIdSegments.length >= 2;

  return {
    documentUuid: document.document_uuid,
    docId: document.doc_id,
    directoryPath: getDirectoryPath(document.doc_id),
    sourcePath: document.source_path,
    type: document.type,
    title: document.title,
    sidebarLabel: document.sidebar_label,
    frontmatter: toJsonSafe(parsed.data),
    metadata: {
      universityId: hasUniversityHierarchy ? document.university_id : null,
      universityName: hasUniversityHierarchy ? document.university_name : null,
      departmentId: document.department_id,
      departmentName: document.department_name,
      programId: document.program_id,
      programName: document.program_name,
      year: document.year,
      yearLabel: document.year_label,
      fileSlug: document.file_slug,
    },
    tags: {
      raw: document.tags,
      school: document.school_tags,
      learning: document.learning_tags,
      subjects: document.subject_ids,
      subsubjects: document.subsubject_ids,
      topics: document.topic_ids,
    },
    contentHash: document.content_hash,
    markdown: String(parsed.content || '').trim(),
    sections: {
      authorMarkdown: document.author_markdown,
      descriptionMarkdown: document.description_markdown,
      kaiMarkdown: document.kai_markdown,
    },
    webUrl: document.permalink,
  };
}

function buildAssets() {
  return listAssetFiles().map((filePath) => {
    const content = fs.readFileSync(filePath);
    const assetPath = normalizePath(path.relative(DOCS_DIR, filePath));
    const directoryPath = path.posix.dirname(assetPath);
    return {
      path: assetPath,
      directoryPath: directoryPath === '.' ? null : directoryPath,
      sourcePath: `docs/${assetPath}`,
      mimeType: ASSET_MIME_TYPES.get(path.extname(filePath).toLowerCase()),
      contentHash: crypto.createHash('sha256').update(content).digest('hex'),
      encoding: 'base64',
      data: content.toString('base64'),
    };
  }).sort((left, right) => left.path.localeCompare(right.path));
}

function validateContentExport(value) {
  const issues = [];
  if (value.format !== FORMAT) issues.push(`Unexpected format: ${value.format}`);
  if (value.schemaVersion !== SCHEMA_VERSION) {
    issues.push(`Unexpected schema version: ${value.schemaVersion}`);
  }
  if (!Array.isArray(value.directories)) issues.push('directories must be an array');
  if (!Array.isArray(value.documents)) issues.push('documents must be an array');
  if (!Array.isArray(value.assets)) issues.push('assets must be an array');
  if (issues.length > 0) return issues;

  const directoryPaths = new Set(value.directories.map((directory) => directory.path));
  const documentIds = new Set();
  const documentUuids = new Set();
  const assetPaths = new Set();

  for (const directory of value.directories) {
    if (!directory.path) issues.push('Directory path must not be empty');
    if (directory.parentPath && !directoryPaths.has(directory.parentPath)) {
      issues.push(`Missing parent directory ${directory.parentPath} for ${directory.path}`);
    }
  }

  for (const document of value.documents) {
    if (documentIds.has(document.docId)) issues.push(`Duplicate document docId: ${document.docId}`);
    if (documentUuids.has(document.documentUuid)) {
      issues.push(`Duplicate document UUID: ${document.documentUuid}`);
    }
    documentIds.add(document.docId);
    documentUuids.add(document.documentUuid);
    if (document.directoryPath && !directoryPaths.has(document.directoryPath)) {
      issues.push(`Missing directory ${document.directoryPath} for ${document.docId}`);
    }
    if (!document.contentHash || !/^[0-9a-f]{64}$/i.test(document.contentHash)) {
      issues.push(`Invalid content hash for ${document.docId}`);
    }
    if (typeof document.markdown !== 'string') issues.push(`Missing Markdown for ${document.docId}`);
  }

  for (const asset of value.assets) {
    if (assetPaths.has(asset.path)) issues.push(`Duplicate asset path: ${asset.path}`);
    assetPaths.add(asset.path);
    if (asset.directoryPath && !directoryPaths.has(asset.directoryPath)) {
      issues.push(`Missing directory ${asset.directoryPath} for asset ${asset.path}`);
    }
    if (asset.encoding !== 'base64' || typeof asset.data !== 'string') {
      issues.push(`Invalid encoding for asset ${asset.path}`);
      continue;
    }
    const actualHash = crypto.createHash('sha256')
      .update(Buffer.from(asset.data, 'base64'))
      .digest('hex');
    if (actualHash !== asset.contentHash) issues.push(`Invalid content hash for asset ${asset.path}`);
  }

  if (value.counts?.directories !== value.directories.length) {
    issues.push('Directory count does not match directories array');
  }
  if (value.counts?.documents !== value.documents.length) {
    issues.push('Document count does not match documents array');
  }
  if (value.counts?.assets !== value.assets.length) {
    issues.push('Asset count does not match assets array');
  }
  const expectedContentHash = crypto.createHash('sha256')
    .update(JSON.stringify({
      directories: value.directories,
      documents: value.documents,
      assets: value.assets,
    }))
    .digest('hex');
  if (value.contentHash !== expectedContentHash) {
    issues.push('Top-level content hash does not match exported collections');
  }
  return issues;
}

function buildContentExport({generatedAt = new Date().toISOString(), source = getSourceMetadata()} = {}) {
  const apiData = buildApiData();
  const apiErrors = apiData.issues.filter((issue) => issue.severity === 'error');
  if (apiErrors.length > 0) {
    throw new Error(`Refusing to export content with ${apiErrors.length} document validation errors.`);
  }

  const apiDocumentsByPath = new Map(
    apiData.documents.map((document) => [document.source_path, document]),
  );
  const documents = listDocumentFiles().map((filePath) => {
    const sourcePath = normalizePath(path.relative(REPO_ROOT, filePath));
    const document = apiDocumentsByPath.get(sourcePath) || buildExamDocument(filePath);
    return toExportDocument(document, filePath);
  }).sort((left, right) => left.docId.localeCompare(right.docId));
  const directories = buildDirectories();
  const assets = buildAssets();
  const collectionsJson = JSON.stringify({directories, documents, assets});
  const contentHash = crypto.createHash('sha256').update(collectionsJson).digest('hex');
  const value = {
    format: FORMAT,
    schemaVersion: SCHEMA_VERSION,
    generatedAt,
    source,
    siteUrl: apiData.siteUrl,
    contentHash,
    counts: {
      directories: directories.length,
      documents: documents.length,
      assets: assets.length,
    },
    directories,
    documents,
    assets,
  };
  const issues = validateContentExport(value);
  if (issues.length > 0) {
    throw new Error(`Invalid content export:\n${issues.slice(0, 30).join('\n')}`);
  }
  return value;
}

function getOutputPath(args) {
  const index = args.indexOf('--out');
  if (index < 0) return DEFAULT_OUTPUT_PATH;
  const requested = args[index + 1];
  if (!requested) throw new Error('Missing value after --out');
  return path.isAbsolute(requested) ? requested : path.resolve(REPO_ROOT, requested);
}

function main(args = process.argv.slice(2)) {
  const value = buildContentExport();
  if (args.includes('--check')) {
    console.log(
      `Validated Kai content v${SCHEMA_VERSION}: `
      + `${value.counts.documents} documents and ${value.counts.assets} assets `
      + `in ${value.counts.directories} directories.`,
    );
    return;
  }

  const outputPath = getOutputPath(args);
  const json = `${JSON.stringify(value)}\n`;
  const compressed = zlib.gzipSync(Buffer.from(json), {level: 9});
  fs.mkdirSync(path.dirname(outputPath), {recursive: true});
  fs.writeFileSync(outputPath, compressed);
  console.log(
    `Exported ${value.counts.documents} documents and ${value.counts.assets} assets `
    + `in ${value.counts.directories} directories `
    + `to ${normalizePath(path.relative(REPO_ROOT, outputPath))} `
    + `(${compressed.length} compressed bytes).`,
  );
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error?.stack || error);
    process.exitCode = 1;
  }
}

module.exports = {
  DEFAULT_OUTPUT_PATH,
  FORMAT,
  SCHEMA_VERSION,
  buildContentExport,
  buildAssets,
  buildDirectories,
  validateContentExport,
};
