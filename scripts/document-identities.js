const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const OVERRIDES_PATH = path.join(REPO_ROOT, 'src/data/documentIdentityOverrides.json');
const DOCUMENT_NAMESPACE = 'ad4a6e2e-1c93-5b0c-91e4-98fb44fa87cd';

function uuidToBytes(uuid) {
  return Buffer.from(uuid.replaceAll('-', ''), 'hex');
}

function bytesToUuid(bytes) {
  const hex = bytes.toString('hex');
  return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join('-');
}

function uuidV5(name, namespace = DOCUMENT_NAMESPACE) {
  const hash = crypto.createHash('sha1')
    .update(Buffer.concat([uuidToBytes(namespace), Buffer.from(String(name), 'utf8')]))
    .digest()
    .subarray(0, 16);
  hash[6] = (hash[6] & 0x0f) | 0x50;
  hash[8] = (hash[8] & 0x3f) | 0x80;
  return bytesToUuid(hash);
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
