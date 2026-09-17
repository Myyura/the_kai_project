const fs = require('node:fs');
const path = require('node:path');

function readUtf8IfExists(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return null;
  }
}

function writeFileAtomicSync(file, content) {
  // Publish a complete file without following a replaced destination symlink.
  // Keeping the temporary file beside the destination makes rename atomic.
  const directory = fs.mkdtempSync(path.join(path.dirname(file), '.kai-write-'));
  try {
    const temporaryFile = path.join(directory, 'content');
    fs.writeFileSync(temporaryFile, content, {encoding: 'utf8', flag: 'wx'});
    fs.renameSync(temporaryFile, file);
  } finally {
    fs.rmSync(directory, {recursive: true, force: true});
  }
}

module.exports = {readUtf8IfExists, writeFileAtomicSync};
