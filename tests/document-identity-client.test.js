const assert = require('node:assert/strict');
const fs = require('node:fs');
const {createRequire} = require('node:module');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');
const transformModules = require('@babel/plugin-transform-modules-commonjs');

function loadDocumentIdentity() {
  const filename = path.resolve(__dirname, '..', 'src/services/documentIdentity.js');
  const transformed = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename,
    plugins: [transformModules],
  }).code;
  const loaded = {exports: {}};
  Function('module', 'exports', 'require', transformed)(loaded, loaded.exports, createRequire(filename));
  return loaded.exports;
}

const {getCanonicalDocumentId, resolveDocumentUuid, resolveCurrentDocId} = loadDocumentIdentity();

test('document features use the source-path identity when Docusaurus strips numeric prefixes', () => {
  assert.equal(
    getCanonicalDocumentId({
      id: 'osaka-university/IST/ie/useful_info',
      source: '@site/docs/osaka-university/IST/ie/02-useful_info.md',
    }),
    'osaka-university/IST/ie/02-useful_info',
  );
});

test('document identity falls back to the Docusaurus id without a source file', () => {
  assert.equal(getCanonicalDocumentId({id: 'intro'}), 'intro');
});

test('document UUIDs reject empty input and retain renamed-document identities', async () => {
  await assert.rejects(resolveDocumentUuid('  '), /缺少文档标识/);
  const overrides = require('../src/data/documentIdentityOverrides.json');
  for (const [docId, uuid] of Object.entries(overrides.current || {})) {
    assert.equal(await resolveDocumentUuid(docId), uuid);
    assert.equal(resolveCurrentDocId({document_uuid: uuid, doc_id: 'older/path'}), docId);
  }
  for (const [alias, uuid] of Object.entries(overrides.aliases || {})) {
    assert.equal(await resolveDocumentUuid(alias), uuid);
  }
  assert.equal(resolveCurrentDocId({document_uuid: 'unmoved-uuid', doc_id: 'current/path'}), 'current/path');
});
