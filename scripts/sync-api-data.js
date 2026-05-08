#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
const { buildApiData } = require('./api-data');

const BATCH_SIZE = 100;

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
  console.log(`Syncing ${rows.length} API documents to Supabase...`);
  await upsertInBatches(supabase, rows);
  console.log('API document sync completed.');
}

main().catch((error) => {
  console.error(error?.message || error);
  process.exit(1);
});
