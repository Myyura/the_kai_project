const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');

const {buildApiData} = require('../scripts/api-data');
const {
  DOCUMENT_NAMESPACE,
  OVERRIDES_PATH,
  loadDocumentIdentityOverrides,
  resolveDocumentUuid,
  uuidV5,
} = require('../scripts/document-identities');
const {moveDocumentIdentity, validateOverrides} = require('../scripts/generate-document-identities');
const {buildDocumentIdentityRows} = require('../scripts/sync-document-catalog');

test('UUIDv5 document identities retain their persisted output', () => {
  assert.equal(uuidV5('test'), '06fc238b-b9d4-51c3-8cdc-98a048822522');
});

test('every ordinary document derives one stable UUID without a manifest entry', () => {
  const data = buildApiData();
  const overrides = loadDocumentIdentityOverrides();
  const uuids = data.documents.map((document) => document.document_uuid);
  assert.equal(new Set(uuids).size, uuids.length);
  for (const document of data.documents) {
    assert.equal(document.document_uuid, resolveDocumentUuid(document.doc_id, overrides));
    if (!overrides.current[document.doc_id]) {
      assert.equal(document.document_uuid, uuidV5(document.doc_id));
    }
  }
  assert.equal(
    resolveDocumentUuid('osaka-university/IST/ie/02-useful_info', overrides),
    '033e4c27-c818-541e-94ea-fbb2dc2f2113',
  );
});

test('the repository stores only path-change exceptions', () => {
  const overrides = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf8'));
  assert.equal(overrides.schemaVersion, 2);
  assert.equal(overrides.namespace, DOCUMENT_NAMESPACE);
  for (const [docId, documentUuid] of Object.entries(overrides.current)) {
    assert.notEqual(documentUuid, uuidV5(docId));
  }
  assert.deepEqual(validateOverrides(overrides, buildApiData().documents.map((doc) => doc.doc_id)), []);
});

test('repeated moves stay flat and preserve the original UUID', () => {
  const empty = {
    schemaVersion: 2,
    namespace: DOCUMENT_NAMESPACE,
    current: {},
    aliases: {},
  };
  const originalUuid = uuidV5('school/department/old');
  const firstMove = moveDocumentIdentity(
    empty,
    ['school/department/middle'],
    'school/department/old',
    'school/department/middle',
  );
  const secondMove = moveDocumentIdentity(
    firstMove,
    ['school/department/current'],
    'school/department/middle',
    'school/department/current',
  );

  assert.equal(secondMove.current['school/department/current'], originalUuid);
  assert.equal(secondMove.aliases['school/department/old'], originalUuid);
  assert.equal(secondMove.aliases['school/department/middle'], originalUuid);
  assert.equal(Object.values(secondMove.aliases).every((uuid) => uuid === originalUuid), true);

  const movedBack = moveDocumentIdentity(
    secondMove,
    ['school/department/old'],
    'school/department/current',
    'school/department/old',
  );
  assert.equal(movedBack.current['school/department/old'], originalUuid);
  assert.equal(movedBack.aliases['school/department/old'], undefined);
  assert.equal(movedBack.aliases['school/department/current'], originalUuid);
  assert.equal(resolveDocumentUuid('school/department/old', movedBack), originalUuid);
  assert.deepEqual(validateOverrides(movedBack, ['school/department/old']), []);

  const missingReverseMapping = {...movedBack, current: {}};
  assert.match(
    validateOverrides(missingReverseMapping, ['school/department/old']).join('\n'),
    /missing its current path override/,
  );
});

test('catalog sync derives current aliases and retains only recorded historical paths', () => {
  const movedUuid = uuidV5('school/old');
  const overrides = {
    schemaVersion: 2,
    namespace: DOCUMENT_NAMESPACE,
    current: {'school/current': movedUuid},
    aliases: {'school/old': movedUuid},
  };
  const documents = [
    {doc_id: 'school/current', document_uuid: movedUuid},
    {doc_id: 'school/new', document_uuid: uuidV5('school/new')},
  ];
  const {registry, aliases} = buildDocumentIdentityRows(documents, overrides);

  assert.deepEqual(registry, [
    {current_doc_id: 'school/current', document_uuid: movedUuid},
    {current_doc_id: 'school/new', document_uuid: uuidV5('school/new')},
  ]);
  assert.deepEqual(aliases, [
    {doc_id: 'school/current', document_uuid: movedUuid, is_current: true},
    {doc_id: 'school/new', document_uuid: uuidV5('school/new'), is_current: true},
    {doc_id: 'school/old', document_uuid: movedUuid, is_current: false},
  ]);
});
