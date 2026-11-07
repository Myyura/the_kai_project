const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const test = require('node:test');
const yaml = require('js-yaml');

const source = fs.readFileSync(path.resolve(__dirname, '../.github/workflows/deploy.yml'), 'utf8');
const workflow = yaml.load(source);
const steps = workflow.jobs.backend.steps;
const migrationStep = steps.find(step => step.run?.includes('supabase db push'));
const syncStep = steps.find(step => step.run?.includes('psql --dbname='));
const functionsStep = steps.find(step => step.run?.includes('supabase functions deploy'));

test('every main push syncs the matching build catalog before publishing Pages', () => {
  assert.deepEqual(workflow.on.push.branches, ['main']);
  assert.equal(workflow.on.push.paths, undefined);
  assert.equal(workflow.on.push['paths-ignore'], undefined);
  assert.equal(workflow.jobs.backend.if, "github.event_name == 'push'");
  assert.equal(workflow.jobs.deploy.if, "github.event_name == 'push'");
  assert.equal(workflow.jobs.backend.needs, 'build');
  assert.deepEqual(workflow.jobs.deploy.needs, ['build', 'backend']);
  assert.equal(workflow.concurrency['cancel-in-progress'], "${{ github.event_name == 'pull_request' }}");

  const buildSteps = workflow.jobs.build.steps;
  const generate = buildSteps.find(step => step.run?.includes('catalog:export'));
  const upload = buildSteps.find(step => step.uses?.startsWith('actions/upload-artifact@'));
  const download = steps.find(step => step.uses?.startsWith('actions/download-artifact@'));
  assert.ok(generate && upload && download);
  assert.ok(buildSteps.indexOf(generate) < buildSteps.indexOf(upload));
  assert.equal(upload.with.name, download.with.name);
  assert.equal(upload.with['if-no-files-found'], 'error');
  assert.equal(download.with['run-id'], undefined, 'must use this workflow run, not a previous build');
  assert.match(generate.run, /\$RUNNER_TEMP\/document-catalog-sync\.sql/);
  assert.equal(upload.with.path, '${{ runner.temp }}/document-catalog-sync.sql');
  assert.equal(download.with.path, '${{ runner.temp }}/document-catalog');
  assert.ok(steps.indexOf(migrationStep) < steps.indexOf(syncStep));
  assert.ok(steps.indexOf(syncStep) < steps.indexOf(functionsStep));
  for (const job of [workflow.jobs.build, workflow.jobs.backend, workflow.jobs.deploy]) {
    assert.notEqual(job['continue-on-error'], true);
    for (const step of job.steps) assert.notEqual(step['continue-on-error'], true);
  }
  assert.doesNotMatch(source, /SUPABASE_SERVICE_ROLE_KEY/);
});

function exerciseBackend(t, {failAt = '', missingCatalog = false, missingPassword = false} = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-catalog-deploy-'));
  t.after(() => fs.rmSync(dir, {recursive: true, force: true}));
  const bin = path.join(dir, 'bin');
  const runnerTemp = path.join(dir, 'runner');
  const callsPath = path.join(dir, 'calls.log');
  fs.mkdirSync(bin);
  fs.mkdirSync(path.join(dir, 'supabase', 'migrations'), {recursive: true});
  fs.writeFileSync(path.join(dir, 'supabase', 'migrations', '001.sql'), 'select 1;');
  fs.mkdirSync(path.join(runnerTemp, 'document-catalog'), {recursive: true});
  if (!missingCatalog) fs.writeFileSync(path.join(runnerTemp, 'document-catalog', 'document-catalog-sync.sql'), 'begin; select 1; commit;');
  fs.writeFileSync(path.join(bin, 'supabase'), `#!/bin/bash
set -euo pipefail
printf 'supabase %s\\n' "$*" >> "$CALLS_PATH"
if [ "$1" = link ]; then
  if [ "$FAIL_AT" = link ]; then exit 20; fi
  mkdir -p supabase/.temp
  printf '%s' 'postgresql://postgres.test-project@pooler.example:5432/postgres' > supabase/.temp/pooler-url
fi
if [ "$1 $2" = 'db push' ] && [ "$FAIL_AT" = migration ]; then exit 21; fi
`, {mode: 0o755});
  fs.writeFileSync(path.join(bin, 'psql'), `#!/bin/bash
set -euo pipefail
printf 'psql %s\\n' "$*" >> "$CALLS_PATH"
test "$PGPASSWORD" = 'test-password-never-in-arguments'
test "$PGSSLMODE" = require
test "$PGCONNECT_TIMEOUT" = 30
if [ "$FAIL_AT" = sync ]; then exit 22; fi
`, {mode: 0o755});
  const secrets = {
    SUPABASE_ACCESS_TOKEN: 'test-token-never-in-arguments',
    SUPABASE_PROJECT_REF: 'test-project',
    SUPABASE_DB_PASSWORD: missingPassword ? '' : 'test-password-never-in-arguments',
  };
  const results = [];
  for (const step of [migrationStep, syncStep, functionsStep]) {
    const env = {
      ...process.env, PATH: `${bin}${path.delimiter}${process.env.PATH}`,
      RUNNER_TEMP: runnerTemp, CALLS_PATH: callsPath, FAIL_AT: failAt,
    };
    for (const [name, value] of Object.entries(step.env || {})) {
      const secret = String(value).match(/^\$\{\{ secrets\.([A-Z_]+) \}\}$/);
      env[name] = secret ? secrets[secret[1]] : String(value);
    }
    const result = spawnSync('bash', ['-c', step.run], {cwd: dir, env, encoding: 'utf8'});
    results.push(result);
    if (result.status !== 0) break;
  }
  return {results, calls: fs.existsSync(callsPath) ? fs.readFileSync(callsPath, 'utf8') : ''};
}

test('the actual backend commands pass SQL to psql and keep passwords out of arguments', t => {
  const {results, calls} = exerciseBackend(t);
  assert.equal(results.length, 3);
  for (const result of results) assert.equal(result.status, 0, result.stderr);
  assert.match(calls, /supabase link --project-ref test-project/);
  assert.match(calls, /supabase db push --linked --include-all\npsql/);
  assert.match(calls, /--no-psqlrc --no-password --set=ON_ERROR_STOP=1 --quiet --file=/);
  assert.ok(calls.indexOf('psql ') < calls.indexOf('supabase functions deploy'));
  assert.doesNotMatch(calls + results.map(result => result.stdout + result.stderr).join(''), /test-password-never-in-arguments|test-token-never-in-arguments/);
});

test('a failed connection, migration, or catalog sync stops subsequent publication work', async t => {
  for (const failAt of ['link', 'migration', 'sync']) {
    await t.test(failAt, st => {
      const {results, calls} = exerciseBackend(st, {failAt});
      assert.notEqual(results.at(-1).status, 0);
      assert.doesNotMatch(calls, /supabase functions deploy/);
      if (failAt !== 'sync') assert.doesNotMatch(calls, /psql /);
    });
  }
});

test('missing credentials or the matching catalog artifact stop the backend', async t => {
  await t.test('database password', st => {
    const {results, calls} = exerciseBackend(st, {missingPassword: true});
    assert.notEqual(results.at(-1).status, 0);
    assert.equal(calls, '');
  });
  await t.test('catalog artifact', st => {
    const {results, calls} = exerciseBackend(st, {missingCatalog: true});
    assert.notEqual(results.at(-1).status, 0);
    assert.doesNotMatch(calls, /psql |supabase functions deploy/);
  });
});
