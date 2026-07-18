#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {
  DOCUMENT_NAMESPACE,
  MANIFEST_PATH,
  RUNTIME_MANIFEST_PATH,
  loadDocumentIdentities,
  uuidV5,
} = require('./document-identities');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const args = process.argv.slice(2);

function listDocIds(directory = DOCS_DIR) {
  const result = [];
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...listDocIds(fullPath));
    if (entry.isFile() && /\.mdx?$/.test(entry.name) && entry.name !== 'intro.mdx') {
      const relative = path.relative(DOCS_DIR, fullPath).replaceAll(path.sep, '/');
      result.push(relative.replace(/\.mdx?$/, ''));
    }
  }
  return result.sort();
}

function readManifestOrEmpty() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return {schemaVersion: 1, namespace: DOCUMENT_NAMESPACE, current: {}, aliases: {}};
  }
  return loadDocumentIdentities();
}

function validate(manifest, docIds) {
  const issues = [];
  const currentIds = new Set(docIds);
  const uuidOwners = new Map();
  const currentUuids = new Set(Object.values(manifest.current));
  for (const docId of docIds) {
    if (!manifest.current[docId]) issues.push(`Missing identity: ${docId}`);
  }
  for (const [docId, uuid] of Object.entries(manifest.current)) {
    if (!currentIds.has(docId)) issues.push(`Stale current identity (move it to aliases): ${docId}`);
    const owner = uuidOwners.get(uuid);
    if (owner && owner !== docId) issues.push(`Duplicate UUID ${uuid}: ${owner}, ${docId}`);
    uuidOwners.set(uuid, docId);
  }
  for (const [alias, uuid] of Object.entries(manifest.aliases)) {
    if (manifest.current[alias]) issues.push(`Alias is also current: ${alias}`);
    if (!currentUuids.has(uuid)) issues.push(`Alias points to a non-current UUID: ${alias}`);
  }
  const expectedRuntime = buildRuntimeManifest(manifest);
  if (!fs.existsSync(RUNTIME_MANIFEST_PATH)) {
    issues.push('Missing runtime document identity overrides');
  } else {
    const actualRuntime = JSON.parse(fs.readFileSync(RUNTIME_MANIFEST_PATH, 'utf8'));
    if (JSON.stringify(actualRuntime) !== JSON.stringify(expectedRuntime)) {
      issues.push('Runtime document identity overrides are out of date');
    }
  }
  return issues;
}

function buildRuntimeManifest(manifest) {
  return {
    schemaVersion: 1,
    namespace: DOCUMENT_NAMESPACE,
    current: Object.fromEntries(Object.entries(manifest.current)
      .filter(([docId, documentUuid]) => uuidV5(docId) !== documentUuid)
      .sort(([a], [b]) => a.localeCompare(b))),
    aliases: Object.fromEntries(Object.entries(manifest.aliases)
      .sort(([a], [b]) => a.localeCompare(b))),
  };
}

function writeManifest(manifest) {
  const normalized = {
    schemaVersion: 1,
    namespace: DOCUMENT_NAMESPACE,
    current: Object.fromEntries(Object.entries(manifest.current).sort(([a], [b]) => a.localeCompare(b))),
    aliases: Object.fromEntries(Object.entries(manifest.aliases).sort(([a], [b]) => a.localeCompare(b))),
  };
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(normalized, null, 2)}\n`);
  fs.writeFileSync(RUNTIME_MANIFEST_PATH, `${JSON.stringify(buildRuntimeManifest(normalized), null, 2)}\n`);
}

function main() {
  const docIds = listDocIds();
  const manifest = readManifestOrEmpty();
  if (args[0] === '--init' || args[0] === '--add') {
    for (const docId of docIds) {
      if (!manifest.current[docId]) manifest.current[docId] = uuidV5(docId);
    }
    writeManifest(manifest);
  } else if (args[0] === '--move') {
    const [, oldId, newId] = args;
    if (!oldId || !newId || !manifest.current[oldId]) {
      throw new Error('Usage: --move <old-doc-id> <new-doc-id>; old ID must exist');
    }
    if (manifest.current[newId]) throw new Error(`Current identity already exists: ${newId}`);
    const uuid = manifest.current[oldId];
    delete manifest.current[oldId];
    manifest.current[newId] = uuid;
    manifest.aliases[oldId] = uuid;
    writeManifest(manifest);
  }

  const finalManifest = loadDocumentIdentities();
  const issues = validate(finalManifest, docIds);
  if (issues.length) {
    issues.slice(0, 30).forEach((issue) => console.error(`[document-identity] ${issue}`));
    if (issues.length > 30) console.error(`... ${issues.length - 30} more`);
    process.exit(1);
  }
  console.log(`Validated ${docIds.length} stable document identities and ${Object.keys(finalManifest.aliases).length} aliases.`);
}

main();
