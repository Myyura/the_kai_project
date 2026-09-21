const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');
const loadSource = require('./helpers/load-source.cjs');

const render = loadSource()(path.resolve(__dirname, '../src/components/ShareAsImage/render.js'));
const {getCapturePixelRatio, yieldToMain, waitForImage} = render;

test('capture keeps small images sharp and bounds tall/wide canvas allocations', () => {
  assert.equal(getCapturePixelRatio(800, 600), 2);
  for (const [width, height] of [[800, 2200], [800, 40000], [40000, 800], [10000, 10000]]) {
    const ratio = getCapturePixelRatio(width, height);
    assert.ok(width * height * ratio ** 2 <= render.MAX_CANVAS_PIXELS + 1);
    assert.ok(Math.max(width, height) * ratio <= render.MAX_CANVAS_EDGE);
  }
  for (const size of [0, -1, NaN, Infinity]) assert.throws(() => getCapturePixelRatio(800, size));
});

function captureHarness({encodingFails = false} = {}) {
  const draws = [];
  const blob = new Blob(['png'], {type: 'image/png'});
  const output = {
    width: 0, height: 0,
    getContext: () => ({fillRect() {}, drawImage: (...args) => draws.push(args)}),
    toBlob: callback => callback(encodingFails ? null : blob),
  };
  const document = {createElement: () => output};
  const window = {getComputedStyle: () => ({getPropertyValue: name => name === 'content' ? 'none' : ''})};
  const api = loadSource({document, window})(path.resolve(__dirname, '../src/components/ShareAsImage/render.js'));
  const makeStrip = height => ({
    nodeType: 1, style: {}, childNodes: [], offsetWidth: 800, scrollHeight: height,
    cloneNode() { return makeStrip(height); },
  });
  return {api, output, draws, blob, strips: [makeStrip(1000), makeStrip(1500)]};
}

test('strips produce one Blob in order and release all canvas backing stores', async () => {
  const {api, output, draws, blob, strips} = captureHarness();
  const canvases = [];
  const progress = [];
  const result = await api.captureLongImage(strips, async (_, options) => {
    assert.equal(options.cacheBust, false);
    assert.equal(options.preferredFontFormat, 'woff2');
    assert.deepEqual(options.includeStyleProperties, []);
    const canvas = {width: options.width * options.pixelRatio, height: options.height * options.pixelRatio};
    canvases.push(canvas);
    return canvas;
  }, undefined, (...value) => progress.push(value));
  assert.equal(result, blob);
  assert.equal(draws.length, 2);
  assert.deepEqual(draws.map(draw => draw.slice(1)), [[0, 0, 1600, 2000], [0, 2000, 1600, 3000]]);
  assert.deepEqual(progress, [[0, 2], [1, 2], [2, 2]]);
  for (const canvas of [...canvases, output]) {
    assert.equal(canvas.width, 0);
    assert.equal(canvas.height, 0);
  }
});

test('zero-height whitespace between formula strips is skipped', async () => {
  const {api, strips, draws} = captureHarness();
  strips.splice(1, 0, {offsetWidth: 800, scrollHeight: 0});
  let captures = 0;
  await api.captureLongImage(strips, async (_, options) => {
    assert.ok(options.height > 0);
    captures++;
    return {width: 800, height: options.height};
  });
  assert.equal(captures, 2);
  assert.equal(draws.length, 2);
});

test('encoding failure frees the final canvas', async () => {
  const {api, output, strips} = captureHarness({encodingFails: true});
  await assert.rejects(api.captureLongImage(strips, async () => ({width: 800, height: 1000})), /encoding failed/);
  assert.equal(output.width, 0);
  assert.equal(output.height, 0);
});

test('cancelling a pending capture stops immediately and frees a canvas arriving later', async () => {
  const {api, output, strips} = captureHarness();
  const controller = new AbortController();
  let finish;
  const pending = new Promise(resolve => { finish = resolve; });
  const result = api.captureLongImage(strips, () => {
    setTimeout(() => controller.abort(), 0);
    return pending;
  }, controller.signal);
  await assert.rejects(result, {name: 'AbortError'});
  assert.equal(output.width, 0);
  const canvas = {width: 800, height: 1000};
  finish(canvas);
  await Promise.resolve();
  assert.equal(canvas.width, 0);
  assert.equal(canvas.height, 0);
});

test('yield allows browser tasks to run and checks for cancellation afterward', async () => {
  const controller = new AbortController();
  const events = [];
  setTimeout(() => { events.push('input'); controller.abort(); }, 0);
  await assert.rejects(yieldToMain(controller.signal), {name: 'AbortError'});
  assert.deepEqual(events, ['input']);
});

test('image readiness waits for loading and supports prompt cancellation', async () => {
  class Image extends EventTarget {
    complete = false;
    naturalWidth = 0;
  }
  const image = new Image();
  const ready = waitForImage(image);
  image.dispatchEvent(new Event('load'));
  await ready;

  const controller = new AbortController();
  const pending = waitForImage(new Image(), controller.signal);
  controller.abort();
  await assert.rejects(pending, {name: 'AbortError'});
  await assert.rejects(waitForImage({complete: true, naturalWidth: 0}), /failed to load/);
});
