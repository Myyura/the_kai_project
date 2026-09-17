const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {EXTERNAL_DIRECTORY, externalExperiencePath, readExternalExperiences} = require('../src/data/experiences/external.cjs');

function repo(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-experience-storage-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  return root;
}

function write(root, file, entries) {
  const filename = path.join(root, EXTERNAL_DIRECTORY, file);
  fs.mkdirSync(path.dirname(filename), {recursive: true});
  fs.writeFileSync(filename, JSON.stringify(entries));
  return filename;
}

const story = (scope, url = 'https://zhuanlan.zhihu.com/p/123456', publishedYear = 2026) => ({title: '経験談', url, publishedYear, placements: [{scope}]});

test('grouped reads are deterministic and see edits and newly created sources without a module cache', t => {
  const root = repo(t);
  const tokyo = story('tokyo-university/engineering/chemsys');
  write(root, 'zhuanlan.zhihu.com/2026.json', [tokyo]);
  assert.deepEqual(readExternalExperiences(root), [tokyo]);
  const kyoto = story('kyoto-university/informatics/sys', 'https://note.com/student/n/n123', 2025);
  write(root, 'note.com/2025.json', [kyoto]);
  tokyo.title = 'Updated title';
  write(root, 'zhuanlan.zhihu.com/2026.json', [tokyo]);
  assert.deepEqual(readExternalExperiences(root), [kyoto, tokyo]);
});

test('canonical duplicate URLs across admission years fail with both file locations', t => {
  const root = repo(t);
  write(root, 'zhuanlan.zhihu.com/2026.json', [story('tokyo-university')]);
  write(root, 'zhuanlan.zhihu.com/2025.json', [story('kyoto-university', 'http://zhuanlan.zhihu.com/p/123456/?source=share#heading', 2025)]);
  assert.throws(() => readExternalExperiences(root), error => {
    assert.match(error.message, /Duplicate external URL/);
    assert.ok(error.message.includes('zhuanlan.zhihu.com/2026.json'));
    assert.ok(error.message.includes('zhuanlan.zhihu.com/2025.json'));
    return true;
  });
});

test('entries must be stored under their URL hostname and directory year', t => {
  for (const file of ['zhuanlan.zhihu.com/2025.json', 'note.com/2026.json']) {
    const root = repo(t);
    write(root, file, [story('tokyo-university')]);
    assert.throws(() => readExternalExperiences(root), error => {
      assert.ok(error.message.includes(`belongs in ${EXTERNAL_DIRECTORY}/zhuanlan.zhihu.com/2026.json`));
      return true;
    });
  }
});

test('storage shares admission-year rules and keeps multiple attempts in the latest cohort', t => {
  const entry = story('tokyo-university', 'https://note.com/student/n/n123', 2026);
  entry.placements = [{scope: 'tokyo-university', examYear: 2025, season: 'summer'}];
  assert.equal(externalExperiencePath(entry), `${EXTERNAL_DIRECTORY}/note.com/2026.json`);
  entry.placements.push({scope: 'kyoto-university', examYear: 2026, season: 'summer'});
  assert.equal(externalExperiencePath(entry), `${EXTERNAL_DIRECTORY}/note.com/2027.json`);
  entry.placements.reverse();
  assert.equal(externalExperiencePath(entry), `${EXTERNAL_DIRECTORY}/note.com/2027.json`);
  entry.placements = [{scope: 'tokyo-university', admissionYear: 2025, examYear: 2026, season: 'summer'}];
  assert.equal(externalExperiencePath(entry), `${EXTERNAL_DIRECTORY}/note.com/2025.json`);
  entry.placements = [{scope: 'tokyo-university', examYear: 2026, season: 'winter'}];
  assert.equal(externalExperiencePath(entry), `${EXTERNAL_DIRECTORY}/note.com/2026.json`);
});

test('unresolved cohorts fall back to publication year, then unknown when no year is known', t => {
  const root = repo(t);
  const entry = story('tokyo-university');
  assert.equal(externalExperiencePath(entry), `${EXTERNAL_DIRECTORY}/zhuanlan.zhihu.com/2026.json`);
  delete entry.publishedYear;
  write(root, 'zhuanlan.zhihu.com/unknown.json', [entry]);
  assert.deepEqual(readExternalExperiences(root), [entry]);
  entry.publishedYear = '2026';
  write(root, 'zhuanlan.zhihu.com/unknown.json', [entry]);
  assert.throws(() => readExternalExperiences(root), /Invalid external experience publication year/);
});

test('missing, malformed and unexpectedly nested source data fail instead of hiding articles', t => {
  const root = repo(t);
  assert.throws(() => readExternalExperiences(root), /ENOENT/);
  const file = write(root, 'zhuanlan.zhihu.com/2026.json', {});
  assert.throws(() => readExternalExperiences(root), {
    message: `External experiences must be an array: ${EXTERNAL_DIRECTORY}/zhuanlan.zhihu.com/2026.json`,
  });
  fs.writeFileSync(file, '[broken');
  assert.throws(() => readExternalExperiences(root), error => {
    assert.ok(error.message.startsWith(`Cannot read external experiences from ${EXTERNAL_DIRECTORY}/zhuanlan.zhihu.com/2026.json:`));
    return true;
  });
  fs.writeFileSync(file, '[]');
  fs.mkdirSync(path.join(path.dirname(file), 'nested'));
  assert.throws(() => readExternalExperiences(root), /Expected an external experience year JSON file/);
});
