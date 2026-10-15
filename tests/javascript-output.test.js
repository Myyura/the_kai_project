const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const {parse} = require('@babel/parser');
const acorn = require('acorn');
const rspack = require('@rspack/core');

function productionMinifier(asciiOnly) {
  const source = fs.readFileSync(path.resolve(__dirname, '../docusaurus.config.js'), 'utf8');
  const declaration = parse(source, {sourceType: 'module'}).program.body.find(
    (node) => node.type === 'FunctionDeclaration' && node.id.name === 'safeRspackJsMinifierPlugin',
  );
  // Load the real config factory without initializing unrelated Docusaurus plugins.
  const factory = vm.runInNewContext(`(${source.slice(declaration.start, declaration.end)})`, {
    require(request) {
      assert.equal(request, '@rspack/core');
      if (asciiOnly === undefined) return rspack;
      return {
        SwcJsMinimizerRspackPlugin: class {
          constructor(options) {
            return new rspack.SwcJsMinimizerRspackPlugin({
              ...options,
              minimizerOptions: {
                ...options.minimizerOptions,
                format: {...options.minimizerOptions.format, ascii_only: asciiOnly},
              },
            });
          }
        },
      };
    },
  });
  return factory().configureWebpack(
    {optimization: {minimizer: []}}, false, {currentBundler: {name: 'rspack'}},
  ).optimization.minimizer;
}

async function buildFixture(directory, source, asciiOnly) {
  fs.mkdirSync(directory, {recursive: true});
  fs.writeFileSync(path.join(directory, 'entry.js'), source);
  const compiler = rspack.rspack({
    mode: 'production',
    context: directory,
    entry: './entry.js',
    target: ['web', 'es5'],
    devtool: false,
    output: {path: path.join(directory, 'output'), filename: 'fixture.js'},
    optimization: {minimizer: productionMinifier(asciiOnly)},
  });
  try {
    await new Promise((resolve, reject) => compiler.run((error, stats) => {
      if (error) reject(error);
      else if (stats.hasErrors()) reject(new Error(stats.toString({all: false, errors: true})));
      else resolve();
    }));
    return fs.readFileSync(path.join(directory, 'output/fixture.js'), 'utf8');
  } finally {
    await new Promise((resolve, reject) => compiler.close((error) => error ? reject(error) : resolve()));
  }
}

test('production minification keeps compact Unicode text and legacy-safe JavaScript', async (t) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-javascript-output-'));
  t.after(() => fs.rmSync(directory, {recursive: true, force: true}));
  const expected = {
    '日本語の題名': '大学院入試の問題と解答。中文题目与解答。'.repeat(20),
    emoji: '😀 🧮 𝛂',
    separators: '\u2028\u2029',
    unusual: '\uD800 \uDC00 \uFEFF e\u0301',
    markup: '</script><script> & < >',
  };
  const source = `var 変数 = ${JSON.stringify(expected)}; globalThis.unicodeResult = 変数;`;
  const compact = await buildFixture(path.join(directory, 'compact'), source);
  const ascii = await buildFixture(path.join(directory, 'ascii'), source, true);
  // The new output also parses as ES5. The old ASCII form can use ES2015
  // code-point escapes for emoji under the minifier's existing ecma: 2020.
  acorn.parse(compact, {ecmaVersion: 5});
  for (const code of [compact, ascii]) {
    acorn.parse(code, {ecmaVersion: 2020});
    const context = {};
    vm.runInNewContext(code, context);
    assert.deepEqual(JSON.parse(JSON.stringify(context.unicodeResult)), expected);
    assert.equal(/[\u2028\u2029]/.test(code), false, 'line separators must remain escaped');
    assert.equal(code.includes('</script>'), false, 'closing script tags must remain escaped');
  }
  assert.match(compact, /大学院入試/);
  assert(Buffer.byteLength(compact) < Buffer.byteLength(ascii), 'Unicode text must not expand into ASCII escapes');
});
