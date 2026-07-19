#!/usr/bin/env node

const {createClient} = require('@supabase/supabase-js');
const {buildApiData, toDocumentCatalogRow} = require('./api-data');
const {loadDocumentIdentityOverrides} = require('./document-identities');

const BATCH_SIZE = 100;
const SELECT_PAGE_SIZE = 1000;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

async function upsertRowsInBatches(supabase, table, rows, onConflict) {
  for (let start = 0; start < rows.length; start += BATCH_SIZE) {
    const batch = rows.slice(start, start + BATCH_SIZE);
    const {error} = await supabase.from(table).upsert(batch, {onConflict});
    if (error) throw error;
    console.log(`  ${table}: ${Math.min(start + BATCH_SIZE, rows.length)}/${rows.length}`);
  }
}

function buildDocumentIdentityRows(documents, overrides = loadDocumentIdentityOverrides()) {
  const registry = documents.map((document) => ({
    document_uuid: document.document_uuid,
    current_doc_id: document.doc_id,
  }));
  const aliases = [
    ...documents.map((document) => [document.doc_id, document.document_uuid, true]),
    ...Object.entries(overrides.aliases).map(([docId, documentUuid]) => [docId, documentUuid, false]),
  ].map(([docId, documentUuid, isCurrent]) => ({
    doc_id: docId,
    document_uuid: documentUuid,
    is_current: isCurrent,
  }));
  return {registry, aliases};
}

async function syncDocumentIdentities(supabase, documents) {
  const {registry, aliases} = buildDocumentIdentityRows(documents);
  await upsertRowsInBatches(supabase, 'document_registry', registry, 'document_uuid');
  const documentUuids = registry.map((row) => row.document_uuid);
  for (let start = 0; start < documentUuids.length; start += BATCH_SIZE) {
    const batch = documentUuids.slice(start, start + BATCH_SIZE);
    const {error} = await supabase
      .from('document_aliases')
      .update({is_current: false})
      .in('document_uuid', batch);
    if (error) throw error;
  }
  await upsertRowsInBatches(supabase, 'document_aliases', aliases, 'doc_id');
}

async function fetchRemoteDocumentUuids(supabase) {
  const documentUuids = [];
  for (let from = 0; ; from += SELECT_PAGE_SIZE) {
    const {data, error} = await supabase
      .from('document_catalog')
      .select('document_uuid')
      .order('document_uuid', {ascending: true})
      .range(from, from + SELECT_PAGE_SIZE - 1);
    if (error) throw error;
    for (const row of data || []) {
      if (typeof row.document_uuid === 'string') documentUuids.push(row.document_uuid);
    }
    if (!data || data.length < SELECT_PAGE_SIZE) break;
  }
  return documentUuids;
}

async function pruneStaleCatalogRows(supabase, staleDocumentUuids) {
  let total = 0;
  for (let start = 0; start < staleDocumentUuids.length; start += BATCH_SIZE) {
    const batch = staleDocumentUuids.slice(start, start + BATCH_SIZE);
    const {error} = await supabase
      .from('document_catalog')
      .delete()
      .in('document_uuid', batch);
    if (error) throw error;
    total += batch.length;
  }
  return total;
}

async function main() {
  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const data = buildApiData();
  const errors = data.issues.filter((issue) => issue.severity === 'error');
  if (errors.length > 0) {
    throw new Error(`Refusing to sync a catalog with ${errors.length} validation errors.`);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {persistSession: false, autoRefreshToken: false},
  });
  const catalogRows = data.documents.map(toDocumentCatalogRow);
  if (catalogRows.length === 0) throw new Error('No documents generated; refusing to sync or prune the catalog.');

  console.log(`Syncing ${catalogRows.length} stable document identities...`);
  await syncDocumentIdentities(supabase, data.documents);
  console.log(`Syncing ${catalogRows.length} lightweight catalog rows (no Markdown content)...`);
  await upsertRowsInBatches(supabase, 'document_catalog', catalogRows, 'document_uuid');

  const localDocumentUuids = new Set(catalogRows.map((row) => row.document_uuid));
  const remoteDocumentUuids = await fetchRemoteDocumentUuids(supabase);
  const staleDocumentUuids = remoteDocumentUuids.filter((uuid) => !localDocumentUuids.has(uuid));
  const pruned = await pruneStaleCatalogRows(supabase, staleDocumentUuids);
  console.log(`Document catalog sync completed. Upserted ${catalogRows.length}, pruned ${pruned}; no user tables were modified.`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {buildDocumentIdentityRows};
