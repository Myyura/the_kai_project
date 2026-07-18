#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {
  PUBLISHED_CONTENT_SCHEMA_VERSION,
  buildApiData,
  getPublishedContentPath,
  toPublishedDocument,
} = require('./api-data');

const REPO_ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.join(REPO_ROOT, 'build');
const DEFAULT_OUTPUT_DIR = path.join(BUILD_DIR, 'api-content', 'v1');

function getOutputDirectory() {
  const flagIndex = process.argv.indexOf('--out');
  const requested = flagIndex >= 0 ? process.argv[flagIndex + 1] : null;
  const outputDirectory = requested
    ? path.resolve(REPO_ROOT, requested)
    : DEFAULT_OUTPUT_DIR;
  const relative = path.relative(BUILD_DIR, outputDirectory);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error('Published document content must be generated inside build/.');
  }
  return outputDirectory;
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
  fs.writeFileSync(filePath, `${JSON.stringify(value)}\n`, 'utf8');
}

function main() {
  const outputDirectory = getOutputDirectory();
  const data = buildApiData();
  const errors = data.issues.filter((issue) => issue.severity === 'error');
  if (errors.length > 0) {
    throw new Error(`Refusing to publish ${errors.length} invalid document records.`);
  }

  fs.rmSync(outputDirectory, {recursive: true, force: true});
  const manifestDocuments = [];
  for (const document of data.documents) {
    const contentPath = getPublishedContentPath(document.document_uuid);
    const relativePath = contentPath.replace(/^\/api-content\/v1\//, '');
    writeJson(path.join(outputDirectory, relativePath), toPublishedDocument(document));
    manifestDocuments.push({
      documentUuid: document.document_uuid,
      docId: document.doc_id,
      contentHash: document.content_hash,
      path: contentPath,
    });
  }

  writeJson(path.join(outputDirectory, 'manifest.json'), {
    schemaVersion: PUBLISHED_CONTENT_SCHEMA_VERSION,
    documentCount: manifestDocuments.length,
    documents: manifestDocuments,
  });
  console.log(`Published ${manifestDocuments.length} document content files to ${path.relative(REPO_ROOT, outputDirectory)}.`);
}

main();
