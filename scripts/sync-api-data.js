#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
const { buildApiData } = require('./api-data');

const BATCH_SIZE = 100;
const SELECT_PAGE_SIZE = 1000;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function toDatabaseRow(doc) {
  return {
    ...doc,
    synced_at: new Date().toISOString(),
  };
}

async function upsertInBatches(supabase, rows) {
  let total = 0;
  for (let start = 0; start < rows.length; start += BATCH_SIZE) {
    const batch = rows.slice(start, start + BATCH_SIZE);
    const { error } = await supabase
      .from('exam_documents')
      .upsert(batch, { onConflict: 'doc_id' });
    if (error) throw error;
    total += batch.length;
    console.log(`  synced ${total}/${rows.length}`);
  }
}

async function fetchRemoteDocIds(supabase) {
  const docIds = [];
  for (let from = 0; ; from += SELECT_PAGE_SIZE) {
    const { data, error } = await supabase
      .from('exam_documents')
      .select('doc_id')
      .order('doc_id', { ascending: true })
      .range(from, from + SELECT_PAGE_SIZE - 1);
    if (error) throw error;
    for (const row of data || []) {
      if (typeof row.doc_id === 'string' && row.doc_id) docIds.push(row.doc_id);
    }
    if (!data || data.length < SELECT_PAGE_SIZE) break;
  }
  return docIds;
}

async function deleteInBatches(supabase, docIds) {
  if (docIds.length === 0) {
    console.log('  no stale documents to prune');
    return 0;
  }

  let total = 0;
  for (let start = 0; start < docIds.length; start += BATCH_SIZE) {
    const batch = docIds.slice(start, start + BATCH_SIZE);
    const { error } = await supabase
      .from('exam_documents')
      .delete()
      .in('doc_id', batch);
    if (error) throw error;
    total += batch.length;
    console.log(`  pruned ${total}/${docIds.length}`);
  }
  return total;
}

async function main() {
  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');

  const data = buildApiData();
  const errors = data.issues.filter((issue) => issue.severity === 'error');
  if (errors.length) {
    console.error('API data has validation errors. Refusing to sync.');
    for (const issue of errors.slice(0, 20)) {
      console.error(`  [ERROR] ${issue.doc_id}: ${issue.message}`);
    }
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const rows = data.documents.map(toDatabaseRow);
  if (rows.length === 0) {
    throw new Error('No API documents generated. Refusing to sync or prune exam_documents.');
  }

  const localDocIds = new Set(rows.map((row) => row.doc_id));
  console.log(`Syncing ${rows.length} API documents to Supabase...`);
  await upsertInBatches(supabase, rows);

  console.log('Pruning stale API documents from Supabase...');
  const remoteDocIds = await fetchRemoteDocIds(supabase);
  const staleDocIds = remoteDocIds.filter((docId) => !localDocIds.has(docId));
  const pruned = await deleteInBatches(supabase, staleDocIds);

  console.log(`API document sync completed. Upserted ${rows.length}, pruned ${pruned}.`);
}

main().catch((error) => {
  console.error(error?.message || error);
  process.exit(1);
});
