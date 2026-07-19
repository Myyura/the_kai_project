const fs = require('fs');
const path = require('path');
const {v5: createUuidV5} = require('uuid');

const REPO_ROOT = path.resolve(__dirname, '..');
const OVERRIDES_PATH = path.join(REPO_ROOT, 'src/data/documentIdentityOverrides.json');
const DOCUMENT_NAMESPACE = 'ad4a6e2e-1c93-5b0c-91e4-98fb44fa87cd';

function uuidV5(name, namespace = DOCUMENT_NAMESPACE) {
  // UUIDv5 is intentionally used for stable, namespaced database identifiers.
  // Keep the standardized algorithm behind the maintained UUID implementation
  // instead of invoking its SHA-1 primitive directly in application code.
  return createUuidV5(String(name), namespace);
}

function loadDocumentIdentityOverrides() {
  const parsed = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf8'));
  if (parsed.namespace && parsed.namespace !== DOCUMENT_NAMESPACE) {
    throw new Error(`Unexpected document identity namespace: ${parsed.namespace}`);
  }
  return {
    schemaVersion: parsed.schemaVersion || 2,
    namespace: parsed.namespace || DOCUMENT_NAMESPACE,
    current: parsed.current || {},
    aliases: parsed.aliases || {},
  };
}

function resolveDocumentUuid(docId, overrides = loadDocumentIdentityOverrides()) {
  const normalized = String(docId || '').trim();
  if (!normalized) return null;
  return overrides.current[normalized]
    || overrides.aliases[normalized]
    || uuidV5(normalized, overrides.namespace);
}

module.exports = {
  DOCUMENT_NAMESPACE,
  OVERRIDES_PATH,
  loadDocumentIdentityOverrides,
  resolveDocumentUuid,
  uuidV5,
};
