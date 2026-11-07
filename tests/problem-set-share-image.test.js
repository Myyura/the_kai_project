const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');

function fixture() {
  class Element {
    constructor(tag) {this.tag = tag; this.children = []; this.style = {}; this.text = ''; this.attributes = {};}
    set textContent(value) {this.text = value;}
    get textContent() {return this.text + this.children.map(child => child.textContent).join('');}
    setAttribute(name, value) {this.attributes[name] = value;}
    append(...nodes) {nodes.forEach(node => this.appendChild(node));}
    appendChild(node) {node.remove(); node.parent = this; this.children.push(node); return node;}
    replaceChildren(...nodes) {this.children.forEach(child => {child.parent = null;}); this.children = []; this.append(...nodes);}
    remove() {if (this.parent) this.parent.children = this.parent.children.filter(child => child !== this); this.parent = null;}
    get scrollHeight() {
      // Text height is deliberately independent of the exporter page limits.
      return (this.text ? 24 * Math.ceil(this.text.length / 60) : 0)
        + this.children.reduce((height, child) => height + (/position\s*:\s*absolute\b/.test(child.style.cssText || '') ? 0 : child.scrollHeight), 0)
        + (this.style.cssText?.includes('padding:18px 0') ? 36 : 0);
    }
  }
  const document = {body: new Element('body'), createElement: tag => new Element(tag)};
  const descendants = node => [node, ...node.children.flatMap(descendants)];
  const captures = [], canvases = [];
  const runtime = createHookRuntime({
    '../ShareAsImage/render': {getCapturePixelRatio: () => 2, waitForFonts: async () => {}, waitForImage: async () => {}, yieldToMain: async () => {}},
    'html-to-image': {toCanvas: async (node, options) => {
      const overlays = descendants(node).filter(child => Object.hasOwn(child.attributes, 'data-share-watermark'));
      captures.push({text: node.textContent, options, overlays: overlays.map(overlay => ({
        text: overlay.textContent,
        contentText: overlay.parent.textContent,
        contentHeight: overlay.parent.scrollHeight,
        labels: overlay.children.map(label => ({text: label.textContent, css: label.style.cssText})),
      }))});
      const canvas = {width: options.width, height: options.height, toBlob: done => done(new Blob(['png']))};
      canvases.push(canvas);
      return canvas;
    }},
  }, {document});
  const {prepareProblemSetShareImages} = runtime.load('src/components/ProblemSetSharing/exportImage.js');
  const labels = runtime.load('src/i18n/problemSetSharingMessages.js').problemSetSharingMessages.zh;
  const share = {title: 'Complete set', description: 'Description', code: 'KAI-1234-5678-ABCD', version: 2,
    includeAnnotations: true, author: {displayName: 'Kai Reader', publicId: 'reader-public-id'}, items: Array.from({length: 40}, (_, index) => ({
      title: `Problem [${index}]`, docId: `private/path/${index}`, annotation: index ? `Selection note [${index}]` : '',
    }))};
  return {document, captures, canvases, share, labels, prepare: value => prepareProblemSetShareImages({share: value || share, labels, logoUrl: '/logo.png'})};
}

test('PNG pages preserve every problem and selection note, omit paths, and release each rendering surface', async () => {
  const f = fixture();
  const plan = await f.prepare();
  assert.equal(plan.pageCount, 3);
  assert.equal(f.document.body.children.length, 0);
  for (let page = 0; page < plan.pageCount; page++) {
    const result = await plan.renderPage(page);
    assert.match(result.filename, new RegExp(`-${page + 1}-3\\.png$`));
    assert.equal(f.document.body.children.length, 0);
  }
  const output = f.captures.map(capture => capture.text).join('\n');
  for (let index = 0; index < 40; index++) {
    assert.equal(output.split(`Problem [${index}]`).length - 1, 1);
    if (index) assert.equal(output.split(`Selection note [${index}]`).length - 1, 1);
  }
  assert.match(output, /暂无选题说明/);
  assert.doesNotMatch(output, /private\/path/);
  assert.ok(f.captures.every(capture => capture.options.height <= 3600));
  assert.ok(f.canvases.every(canvas => canvas.width === 0 && canvas.height === 0));
  plan.dispose();
  await assert.rejects(plan.renderPage(0), {name: 'AbortError'});
});

test('every PNG page is watermarked while the share code and attribution remain intact', async () => {
  const f = fixture();
  const plan = await f.prepare();
  for (let page = 0; page < plan.pageCount; page++) await plan.renderPage(page);
  for (const capture of f.captures) {
    assert.equal(capture.overlays.length, 1);
    const overlay = capture.overlays[0];
    assert.ok(overlay.labels.length >= 3);
    assert.ok(overlay.labels.every(label => label.text === 'The Kai Project | runjp.com'));
    assert.ok(overlay.labels.every(label => /rgba\([^)]*, 0\.08\)/.test(label.css)));
    assert.doesNotMatch(overlay.contentText, /KAI-1234-5678-ABCD/);
    assert.match(capture.text, /KAI-1234-5678-ABCD/);
    assert.match(capture.text, /Kai Reader/);
    assert.match(capture.text, /reader-public-id/);
    assert.ok(capture.options.height <= 3600);
  }
  plan.dispose();
});

test('PNG excludes notes when sharing is explicitly off, even if the snapshot contains annotation text', async () => {
  const f = fixture();
  const plan = await f.prepare({...f.share, includeAnnotations: false});
  await plan.renderPage(0);
  assert.doesNotMatch(f.captures[0].text, /Selection note|暂无选题说明|private\/path/);
  plan.dispose();
});

test('long selection notes cause additional pages rather than truncating items or text', async () => {
  const f = fixture();
  const share = {...f.share, items: f.share.items.slice(0, 12).map(item => ({...item, annotation: '详细说明'.repeat(400)}))};
  const plan = await f.prepare(share);
  assert.ok(plan.pageCount > 1);
  for (let page = 0; page < plan.pageCount; page++) await plan.renderPage(page);
  const output = f.captures.map(capture => capture.text).join('');
  assert.equal(output.split('详细说明').length - 1, 400 * 12);
  assert.equal((output.match(/Problem \[/g) || []).length, 12);
  assert.ok(f.captures.every(capture => capture.options.height <= 3600));
  plan.dispose();
});
