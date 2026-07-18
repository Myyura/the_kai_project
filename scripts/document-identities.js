const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const MANIFEST_PATH = path.join(REPO_ROOT, 'src/data/documentIdentities.json');
const RUNTIME_MANIFEST_PATH = path.join(REPO_ROOT, 'src/data/documentIdentityOverrides.json');
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

function loadDocumentIdentities() {
  const parsed = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  return {
    schemaVersion: parsed.schemaVersion || 1,
    namespace: parsed.namespace || DOCUMENT_NAMESPACE,
    current: parsed.current || {},
    aliases: parsed.aliases || {},
  };
}

function resolveDocumentUuid(docId, manifest = loadDocumentIdentities()) {
  return manifest.current[docId] || manifest.aliases[docId] || null;
}

module.exports = {
  DOCUMENT_NAMESPACE,
  MANIFEST_PATH,
  RUNTIME_MANIFEST_PATH,
  loadDocumentIdentities,
  resolveDocumentUuid,
  uuidV5,
};
