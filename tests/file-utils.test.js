const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {readUtf8IfExists, writeFileAtomicSync} = require('../scripts/file-utils');

function directory(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-file-utils-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  return root;
}

test('optional reads distinguish missing files from empty files and propagate other errors', t => {
  const root = directory(t);
  const file = path.join(root, 'output');
  assert.equal(readUtf8IfExists(file), null);
  fs.writeFileSync(file, '');
  assert.equal(readUtf8IfExists(file), '');
  assert.throws(() => readUtf8IfExists(root), {code: 'EISDIR'});
});

test('atomic writes create and replace complete UTF-8 files without leftover bytes or temporary files', t => {
  const root = directory(t);
  const file = path.join(root, 'output');
  for (const content of ['中文😀\nlong content\n', '短\n', '']) {
    writeFileAtomicSync(file, content);
    assert.equal(fs.readFileSync(file, 'utf8'), content);
    assert.deepEqual(fs.readdirSync(root), ['output']);
  }
});

test('atomic replacement does not overwrite the target of a destination symlink', t => {
  const root = directory(t);
  const target = path.join(root, 'target');
  const file = path.join(root, 'output');
  fs.writeFileSync(target, 'keep me');
  fs.symlinkSync(target, file);
  writeFileAtomicSync(file, 'new content');
  assert.equal(fs.readFileSync(target, 'utf8'), 'keep me');
  assert.equal(fs.readFileSync(file, 'utf8'), 'new content');
  assert.equal(fs.lstatSync(file).isSymbolicLink(), false);
});

test('failed atomic publication preserves the destination and cleans up its temporary file', t => {
  const root = directory(t);
  const file = path.join(root, 'output');
  fs.writeFileSync(file, 'keep me');
  t.mock.method(fs, 'renameSync', () => {throw Object.assign(new Error('permission denied'), {code: 'EACCES'});});
  assert.throws(() => writeFileAtomicSync(file, 'new content'), {code: 'EACCES'});
  assert.equal(fs.readFileSync(file, 'utf8'), 'keep me');
  assert.deepEqual(fs.readdirSync(root), ['output']);
});
