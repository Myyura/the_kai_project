#!/usr/bin/env node

const path = require('node:path');
const {
  DEFERRED_INDEX_MANIFEST_FILENAME,
  runDeferredSearchIndex,
} = require('../plugins/memory-safe-search-local/deferredIndex.cjs');

function resolveManifestPath(argument, cwd = process.cwd()) {
  return argument
    ? path.resolve(cwd, argument)
    : path.resolve(cwd, 'build', DEFERRED_INDEX_MANIFEST_FILENAME);
}

async function main(args = process.argv.slice(2)) {
  if (args.length > 1) {
    throw new Error('Usage: node scripts/build-search-index.js [manifest-path]');
  }
  await runDeferredSearchIndex(resolveManifestPath(args[0]));
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  main,
  resolveManifestPath,
};
