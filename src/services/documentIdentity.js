import overrides from '../data/documentIdentityOverrides.json';

const currentByUuid = Object.fromEntries(
  Object.entries(overrides.current || {}).map(([docId, documentUuid]) => [documentUuid, docId]),
);
const uuidPromises = new Map();

export function getCanonicalDocumentId(metadata) {
  const fallback = String(metadata?.id || '').trim();
  const source = typeof metadata?.source === 'string'
    ? metadata.source.replaceAll('\\', '/').replace(/^@site\//, '')
    : '';
  const sourceMatch = source.match(/^docs\/(.+)\.mdx?$/i);
  return sourceMatch?.[1] || fallback;
}

const uuidToBytes = (uuid) => {
  const hex = uuid.replaceAll('-', '');
  return Uint8Array.from({length: 16}, (_, index) => Number.parseInt(hex.slice(index * 2, index * 2 + 2), 16));
};

const bytesToUuid = (bytes) => {
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join('-');
};

export async function resolveDocumentUuid(docId) {
  const normalized = String(docId || '').trim();
  if (!normalized) return null;
  const stored = overrides.current?.[normalized] || overrides.aliases?.[normalized];
  if (stored) return stored;
  if (uuidPromises.has(normalized)) return uuidPromises.get(normalized);
  if (!globalThis.crypto?.subtle) throw new Error('当前浏览器不支持文档身份解析。');
  const promise = (async () => {
    const nameBytes = new TextEncoder().encode(normalized);
    const source = new Uint8Array(16 + nameBytes.length);
    source.set(uuidToBytes(overrides.namespace));
    source.set(nameBytes, 16);
    const hash = new Uint8Array(await globalThis.crypto.subtle.digest('SHA-1', source)).slice(0, 16);
    hash[6] = (hash[6] & 0x0f) | 0x50;
    hash[8] = (hash[8] & 0x3f) | 0x80;
    return bytesToUuid(hash);
  })();
  uuidPromises.set(normalized, promise);
  return promise;
}

export function resolveCurrentDocId(row) {
  return currentByUuid[row?.document_uuid] || row?.doc_id || '';
}
