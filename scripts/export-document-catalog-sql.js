#!/usr/bin/env node

// Build the catalog transaction used by automatic deployments and SQL Editor
// recovery, without credentials, pruning, or writes to any user-data table.
const fs = require('node:fs');
const path = require('node:path');
const {buildApiData, toDocumentCatalogRow, validateApiData} = require('./api-data');
const {loadDocumentIdentityOverrides, buildDocumentIdentityRows} = require('./document-identities');

const DEFAULT_OUTPUT = path.resolve(__dirname, '../.local-work/outputs/problem-set-repair/document-catalog-sync.sql');
const BATCH_SIZE = 100;
const CATALOG_COLUMNS = {
  document_uuid: 'uuid', doc_id: 'text', type: 'text', source_path: 'text', title: 'text',
  sidebar_label: 'text', university_id: 'text', university_name: 'text',
  department_id: 'text', department_name: 'text', program_id: 'text', program_name: 'text',
  year: 'integer', year_label: 'text', file_slug: 'text', tags: 'jsonb', school_tags: 'jsonb',
  learning_tags: 'jsonb', subject_ids: 'jsonb', subsubject_ids: 'jsonb', topic_ids: 'jsonb',
  permalink: 'text', content_hash: 'text', content_path: 'text', synced_at: 'timestamptz',
};

function dollarQuote(value) {
  let suffix = 0;
  let delimiter;
  do {delimiter = `$kai_catalog_${suffix++}$`;} while (value.includes(delimiter));
  return `${delimiter}${value}${delimiter}`;
}

function stageRows(name, columns, rows) {
  const names = Object.keys(columns).join(', ');
  const definitions = Object.entries(columns).map(([key, type]) => `${key} ${type}`).join(', ');
  const statements = [`create temporary table ${name} (${definitions}) on commit drop;`];
  for (let start = 0; start < rows.length; start += BATCH_SIZE) {
    const payload = dollarQuote(JSON.stringify(rows.slice(start, start + BATCH_SIZE)));
    statements.push(`insert into pg_temp.${name} (${names})\nselect ${names}\nfrom jsonb_to_recordset(${payload}::jsonb) as row(${definitions});`);
  }
  return statements.join('\n\n');
}

function buildDocumentCatalogSql(documents, {overrides = loadDocumentIdentityOverrides()} = {}) {
  if (!Array.isArray(documents) || documents.length === 0) throw new Error('No documents generated; refusing to export an empty repair.');
  const errors = validateApiData(documents).filter(issue => issue.severity === 'error');
  if (errors.length) throw new Error(`Refusing to export a catalog with ${errors.length} validation errors.`);
  const {registry, aliases} = buildDocumentIdentityRows(documents, overrides);
  const catalog = documents.map(toDocumentCatalogRow);
  const names = Object.keys(CATALOG_COLUMNS);
  // Refresh synced_at when catalog data changes, not on every identical deploy.
  const comparedNames = names.filter(name => !['document_uuid', 'synced_at'].includes(name));
  const changed = `(${comparedNames.map(name => `public.document_catalog.${name}`).join(', ')})\n  is distinct from (${comparedNames.map(name => `excluded.${name}`).join(', ')})`;
  const update = names.filter(name => name !== 'document_uuid').map(name => `${name} = excluded.${name}`).join(',\n  ');
  return `-- Generated from the current repository by scripts/export-document-catalog-sql.js.
-- ${documents.length} documents; ${aliases.length} current/historical aliases.
-- Execute this WHOLE file via the deployment CLI or Supabase SQL Editor.
-- Existing user data is not changed.
-- Existing catalog rows, registry entries, and historical aliases are never deleted.
-- Safe to repeat. Identity conflicts abort the transaction instead of rebinding data.
begin;

${stageRows('kai_catalog_repair_registry', {document_uuid: 'uuid', current_doc_id: 'text'}, registry)}

${stageRows('kai_catalog_repair_aliases', {doc_id: 'text', document_uuid: 'uuid', is_current: 'boolean'}, aliases)}

${stageRows('kai_catalog_repair_documents', CATALOG_COLUMNS, catalog)}

do $kai_identity_guard$
begin
  if exists (
    select 1 from pg_temp.kai_catalog_repair_registry incoming
    join public.document_registry existing on existing.current_doc_id = incoming.current_doc_id
    where existing.document_uuid <> incoming.document_uuid
  ) or exists (
    select 1 from pg_temp.kai_catalog_repair_aliases incoming
    join public.document_aliases existing on existing.doc_id = incoming.doc_id
    where existing.document_uuid <> incoming.document_uuid
  ) or exists (
    select 1 from pg_temp.kai_catalog_repair_documents incoming
    join public.document_catalog existing on existing.doc_id = incoming.doc_id
    where existing.document_uuid <> incoming.document_uuid
  ) then
    raise exception 'document_identity_conflict: a published path belongs to a different UUID; no repair was applied';
  end if;
end;
$kai_identity_guard$;

insert into public.document_registry (document_uuid, current_doc_id)
select document_uuid, current_doc_id from pg_temp.kai_catalog_repair_registry
on conflict (document_uuid) do update set current_doc_id = excluded.current_doc_id
where public.document_registry.current_doc_id is distinct from excluded.current_doc_id;

-- Keep historic paths, but only the incoming canonical path remains current.
update public.document_aliases existing set is_current = false
where existing.is_current and exists (
  select 1 from pg_temp.kai_catalog_repair_registry incoming
  where incoming.document_uuid = existing.document_uuid
    and incoming.current_doc_id <> existing.doc_id
);

insert into public.document_aliases (doc_id, document_uuid, is_current)
select doc_id, document_uuid, is_current from pg_temp.kai_catalog_repair_aliases
on conflict (doc_id) do update set is_current = excluded.is_current
where public.document_aliases.is_current is distinct from excluded.is_current;

insert into public.document_catalog (${names.join(', ')})
select ${names.join(', ')} from pg_temp.kai_catalog_repair_documents
on conflict (document_uuid) do update set
  ${update}
where ${changed};

-- Confirm that every exported document can be resolved by the membership RPC.
do $kai_catalog_verify$
begin
  if exists (
    select 1 from pg_temp.kai_catalog_repair_documents incoming
    left join public.document_registry registry
      on registry.document_uuid = incoming.document_uuid and registry.current_doc_id = incoming.doc_id
    left join public.document_aliases alias
      on alias.doc_id = incoming.doc_id and alias.document_uuid = incoming.document_uuid and alias.is_current
    left join public.document_catalog catalog
      on catalog.doc_id = incoming.doc_id and catalog.document_uuid = incoming.document_uuid
    where registry.document_uuid is null or alias.doc_id is null or catalog.doc_id is null
  ) then
    raise exception 'document_catalog_repair_incomplete: verification failed; no repair was applied';
  end if;
end;
$kai_catalog_verify$;

commit;

select ${documents.length} as exported_documents,
  (select count(*) from public.document_registry) as registry_rows,
  (select count(*) from public.document_aliases) as alias_rows,
  (select count(*) from public.document_catalog) as catalog_rows;
`;
}

function main() {
  if (process.argv.length > 3) throw new Error('Usage: node scripts/export-document-catalog-sql.js [output.sql]');
  const data = buildApiData();
  const output = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_OUTPUT;
  const sql = buildDocumentCatalogSql(data.documents);
  fs.mkdirSync(path.dirname(output), {recursive: true});
  fs.writeFileSync(output, sql, 'utf8');
  console.log(`Exported ${data.documents.length} documents (${Buffer.byteLength(sql)} bytes) to ${output}`);
}

if (require.main === module) {
  try {main();} catch (error) {console.error(error.message); process.exitCode = 1;}
}

module.exports = {buildDocumentCatalogSql};
