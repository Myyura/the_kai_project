const fs = require('node:fs');
const path = require('node:path');
const {createRequire} = require('node:module');
const babel = require('@babel/core');

// Isolated module graph with explicit browser/Deno globals for behavior tests.
module.exports = function createSourceLoader(globals = {}) {
  const cache = new Map();
  function load(filename) {
    filename = path.resolve(filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    const nativeRequire = createRequire(filename);
    const loaded = {exports: {}};
    cache.set(filename, loaded);
    const localRequire = (request) => {
      if (request.startsWith('.')) {
        const resolved = nativeRequire.resolve(request);
        if (/\.(?:js|ts)$/.test(resolved)) return load(resolved);
      }
      return nativeRequire(request);
    };
    const {code} = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
      filename,
      babelrc: false,
      configFile: false,
      plugins: [
        ...(filename.endsWith('.ts') ? [require('@babel/plugin-transform-typescript')] : []),
        require('@babel/plugin-transform-modules-commonjs'),
      ],
    });
    Function('module', 'exports', 'require', ...Object.keys(globals), code)(
      loaded, loaded.exports, localRequire, ...Object.values(globals),
    );
    return loaded.exports;
  }
  return load;
};
