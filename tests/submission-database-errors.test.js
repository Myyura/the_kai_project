const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const babel = require('@babel/core');

const filename = path.resolve(__dirname, '../supabase/functions/content-submissions/database-errors.ts');
const code = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
  filename,
  plugins: [require('@babel/plugin-transform-typescript'), require('@babel/plugin-transform-modules-commonjs')],
}).code;
const loaded = {exports: {}};
const logs = [];
Function('module', 'exports', 'require', 'console', code)(loaded, loaded.exports,
  () => ({errorResponse: (status, code, message) => ({status, code, message})}),
  {error: (...args) => logs.push(args)},
);
const respond = error => loaded.exports.submissionDatabaseErrorResponse(error, 'submission_insert_failed');

test('a missing admission column points to the current setup guide', () => {
  for (const error of [
    {code: 'PGRST204', message: "Could not find the 'admission_data' column of 'content_submissions' in the schema cache"},
    {code: '42703', message: 'column "admission_data" of relation "content_submissions" does not exist'},
  ]) {
    const response = respond(error);
    assert.equal(response.code, 'admission_schema_missing');
    assert.match(response.message, /CONTRIBUTING.zh.md/);
    assert.doesNotMatch(response.message, /执行最新的 src\/services\/schema.sql/);
  }
});

test('missing tables, columns and functions are distinguished', () => {
  assert.equal(respond({code: 'PGRST205', message: "Could not find the table 'public.content_submissions' in the schema cache"}).code, 'submission_schema_missing');
  assert.equal(respond({code: '42P01', message: 'relation "public.user_public_profiles" does not exist'}).code, 'submission_schema_missing');
  assert.equal(respond({code: '42703', message: 'column "correction_conflict" does not exist'}).code, 'submission_schema_outdated');
  assert.equal(respond({code: 'PGRST204', message: "Could not find the 'experience_data' column of 'content_submissions' in the schema cache"}).code, 'experience_schema_missing');
  assert.equal(respond({code: '42883', message: 'function public.assign_target_document_uuid() does not exist'}).code, 'submission_function_missing');
});

test('constraint and permission failures mentioning content_submissions are not initialization errors', () => {
  for (const constraint of ['content_submissions_title_length', 'content_submissions_experience_data_check']) {
    const response = respond({code: '23514', message: `new row for relation "content_submissions" violates check constraint "${constraint}"`});
    assert.equal(response.code, 'submission_constraint_failed');
    assert.doesNotMatch(response.message, /迁移|初始化/);
  }
  assert.equal(respond({code: '42501', message: 'permission denied for table content_submissions'}).code, 'submission_database_permission_denied');
  assert.equal(respond({code: '23505', message: 'duplicate key value violates unique constraint "content_submissions_pkey"'}).code, 'submission_insert_failed');
});

test('incompatible type and status constraints identify a baseline mismatch', () => {
  for (const constraint of ['content_submissions_type_check', 'content_submissions_status_check']) {
    const response = respond({code: '23514', message: `new row for relation "content_submissions" violates check constraint "${constraint}"`});
    assert.equal(response.code, 'submission_protocol_outdated');
    assert.match(response.message, /content_submissions 约束/);
  }
});

test('diagnostics retain the database code without exposing rejected row details or a raw error to the client', () => {
  const message = 'new row for relation "content_submissions" violates check constraint "content_submissions_title_length"';
  const response = respond({code: '23514', message, details: 'Failing row contains private submission text'});
  assert.deepEqual(logs.at(-1), ['submission_database_error', {operation: 'submission_insert_failed', databaseCode: '23514', message}]);
  assert.doesNotMatch(JSON.stringify(response), /content_submissions_title_length|private submission text/);
  assert.equal(respond(new Error('Unexpected content_submissions failure')).code, 'submission_insert_failed');
});
