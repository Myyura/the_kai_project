#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {
  DOCUMENT_NAMESPACE,
  OVERRIDES_PATH,
  loadDocumentIdentityOverrides,
  resolveDocumentUuid,
  uuidV5,
} = require('./document-identities');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function normalizeDocId(value) {
  return String(value || '')
    .trim()
    .replaceAll('\\', '/')
    .replace(/^docs\//, '')
    .replace(/\.mdx?$/, '')
    .replace(/^\/+|\/+$/g, '');
}

function listDocIds(directory = DOCS_DIR) {
  const result = [];
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...listDocIds(fullPath));
    if (entry.isFile() && /\.mdx?$/.test(entry.name) && entry.name !== 'intro.mdx') {
      const relative = path.relative(DOCS_DIR, fullPath).replaceAll(path.sep, '/');
      result.push(normalizeDocId(relative));
    }
  }
  return result.sort();
}

function sortObject(value) {
  return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)));
}

function normalizeOverrides(overrides) {
  return {
    schemaVersion: 2,
    namespace: DOCUMENT_NAMESPACE,
    current: sortObject(overrides.current || {}),
    aliases: sortObject(overrides.aliases || {}),
  };
}

function validateOverrides(overrides, docIds) {
  const issues = [];
  const currentIds = new Set(docIds);
  const uuidOwners = new Map();
  const aliasedUuids = new Set(Object.values(overrides.aliases || {}));

  if (overrides.namespace !== DOCUMENT_NAMESPACE) {
    issues.push(`Unexpected namespace: ${overrides.namespace}`);
  }

  for (const docId of docIds) {
    const documentUuid = resolveDocumentUuid(docId, overrides);
    const owner = uuidOwners.get(documentUuid);
    if (owner && owner !== docId) {
      issues.push(`Duplicate UUID ${documentUuid}: ${owner}, ${docId}`);
    }
    uuidOwners.set(documentUuid, docId);
  }

  for (const [docId, documentUuid] of Object.entries(overrides.current || {})) {
    if (!currentIds.has(docId)) issues.push(`Stale current override: ${docId}`);
    if (!UUID_PATTERN.test(documentUuid)) issues.push(`Invalid UUID override: ${docId}`);
    if (uuidV5(docId) === documentUuid && !aliasedUuids.has(documentUuid)) {
      issues.push(`Redundant current override without aliases: ${docId}`);
    }
  }

  for (const [alias, documentUuid] of Object.entries(overrides.aliases || {})) {
    if (currentIds.has(alias)) issues.push(`Alias is also a current document: ${alias}`);
    if (!UUID_PATTERN.test(documentUuid)) issues.push(`Invalid alias UUID: ${alias}`);
    if (!uuidOwners.has(documentUuid)) {
      issues.push(`Alias points to a non-current document UUID: ${alias}`);
    } else {
      const currentOwner = uuidOwners.get(documentUuid);
      if (overrides.current?.[currentOwner] !== documentUuid) {
        issues.push(`Aliased UUID is missing its current path override: ${currentOwner}`);
      }
    }
  }

  return issues;
}

function moveDocumentIdentity(overrides, docIds, oldValue, newValue) {
  const oldId = normalizeDocId(oldValue);
  const newId = normalizeDocId(newValue);
  const currentIds = new Set(docIds);

  if (!oldId || !newId || oldId === newId) {
    throw new Error('Usage: --move <old-doc-id> <new-doc-id>; IDs must be different');
  }
  if (currentIds.has(oldId)) {
    throw new Error(`Old document still exists: ${oldId}; move the file before recording its identity`);
  }
  if (!currentIds.has(newId)) {
    throw new Error(`New document does not exist: ${newId}`);
  }

  const documentUuid = overrides.current?.[oldId]
    || overrides.aliases?.[oldId]
    || uuidV5(oldId);
  const newAliasUuid = overrides.aliases?.[newId];
  const newOverrideUuid = overrides.current?.[newId];
  if ((newAliasUuid && newAliasUuid !== documentUuid)
    || (newOverrideUuid && newOverrideUuid !== documentUuid)) {
    throw new Error(`New path already belongs to another document identity: ${newId}`);
  }

  const next = {
    ...overrides,
    current: {...(overrides.current || {})},
    aliases: {...(overrides.aliases || {})},
  };
  delete next.current[oldId];
  delete next.aliases[newId];
  next.current[newId] = documentUuid;
  next.aliases[oldId] = documentUuid;
  return normalizeOverrides(next);
}

function writeOverrides(overrides) {
  fs.writeFileSync(OVERRIDES_PATH, `${JSON.stringify(normalizeOverrides(overrides), null, 2)}\n`);
}

function main(args = process.argv.slice(2)) {
  const docIds = listDocIds();
  let overrides = loadDocumentIdentityOverrides();

  if (args[0] === '--move') {
    overrides = moveDocumentIdentity(overrides, docIds, args[1], args[2]);
    writeOverrides(overrides);
  } else if (args[0] && args[0] !== '--check') {
    throw new Error(`Unknown option: ${args[0]}`);
  }

  const issues = validateOverrides(overrides, docIds);
  if (issues.length) {
    issues.slice(0, 30).forEach((issue) => console.error(`[document-identity] ${issue}`));
    if (issues.length > 30) console.error(`... ${issues.length - 30} more`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `Validated ${docIds.length} automatically derived document identities, `
    + `${Object.keys(overrides.current).length} current overrides, `
    + `${Object.keys(overrides.aliases).length} historical aliases.`,
  );
}

if (require.main === module) main();

module.exports = {
  listDocIds,
  moveDocumentIdentity,
  normalizeDocId,
  validateOverrides,
};
