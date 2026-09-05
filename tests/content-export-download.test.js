const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const {EventEmitter} = require('node:events');
const fs = require('node:fs/promises');
const http = require('node:http');
const https = require('node:https');
const os = require('node:os');
const path = require('node:path');
const {Readable} = require('node:stream');
const test = require('node:test');
const {
  createImageDownloader, downloadImage, detectImageMimeType,
} = require('../scripts/content-export-download');

const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/a9sAAAAASUVORK5CYII=',
  'base64',
);
const IMAGE_URL = 'https://images.example.com/picture.png';

function fakeNetwork(replies) {
  const calls = [];
  let lookups = 0;
  return {
    calls,
    get lookups() { return lookups; },
    options: {
      lookup: async () => {
        lookups += 1;
        return [{address: '1.1.1.1', family: 4}];
      },
      sleep: async () => {},
      request(url, options, callback) {
        const request = new EventEmitter();
        request.destroy = (error) => {
          if (error) queueMicrotask(() => request.emit('error', error));
        };
        request.end = () => queueMicrotask(() => {
          const reply = replies[calls.length];
          const call = {url: url.href, headers: options.headers, agent: options.agent};
          calls.push(call);
          options.lookup(url.hostname, {all: true}, (error, addresses) => {
            assert.ifError(error);
            call.addresses = addresses;
          });
          options.lookup(url.hostname, {}, (error, address, family) => {
            assert.ifError(error);
            call.singleAddress = {address, family};
          });
          call.autoSelectFamily = options.autoSelectFamily;
          if (!reply) {
            request.emit('error', new Error('Unexpected request'));
            return;
          }
          if (reply.error) {
            request.emit('error', reply.error);
            return;
          }
          if (reply.hang) return;
          const response = Readable.from(reply.chunks || [reply.body || PNG]);
          response.statusCode = reply.status || 200;
          response.headers = reply.headers || {};
          callback(response);
        });
        return request;
      },
    },
  };
}

async function temporaryCache(t) {
  const cacheDir = await fs.mkdtemp(path.join(os.tmpdir(), 'kai-image-download-'));
  t.after(() => fs.rm(cacheDir, {recursive: true, force: true}));
  return cacheDir;
}

test('downloads image bytes and pins the previously checked public DNS address', async () => {
  const network = fakeNetwork([{headers: {'content-type': 'application/octet-stream'}}]);
  const result = await downloadImage(IMAGE_URL, network.options);
  assert.deepEqual(result, {content: PNG, mimeType: 'image/png'});
  assert.equal(network.lookups, 1);
  assert.deepEqual(network.calls[0].addresses, [{address: '1.1.1.1', family: 4}]);
  assert.equal(network.calls[0].headers['accept-encoding'], 'identity');
  assert.equal(network.calls[0].agent, false);
});

test('factory reuses dedicated keep-alive agents by protocol and can close them', async () => {
  const network = fakeNetwork([{}, {}, {}]);
  const download = createImageDownloader(network.options);
  try {
    await download(IMAGE_URL);
    await download(IMAGE_URL);
    await download('http://images.example.com/picture.png');
    assert.ok(network.calls[0].agent instanceof https.Agent);
    assert.equal(network.calls[0].agent, network.calls[1].agent);
    assert.ok(network.calls[2].agent instanceof http.Agent);
    assert.notEqual(network.calls[0].agent, network.calls[2].agent);
    assert.equal(network.calls[0].agent.options.keepAlive, true);
    assert.equal(network.calls[2].agent.options.keepAlive, true);
    assert.equal(network.lookups, 3);
    assert.equal(download.close, download.destroy);
  } finally {
    download.close();
  }
  await assert.rejects(download(IMAGE_URL), /has been closed/);
});

test('identifies supported image formats from bytes rather than HTTP content type', () => {
  const gif = Buffer.concat([Buffer.from('GIF89a'), Buffer.alloc(8)]);
  const webp = Buffer.concat([Buffer.from('RIFF'), Buffer.alloc(4), Buffer.from('WEBPVP8 ')]);
  const bmp = Buffer.concat([Buffer.from('BM'), Buffer.alloc(24)]);
  const ico = Buffer.alloc(22);
  ico.writeUInt32LE(0x00010000);
  ico.writeUInt16LE(1, 4);
  const avif = Buffer.concat([Buffer.from('00000018667479706176696600000000', 'hex'), Buffer.from('mif1avif')]);
  for (const [content, mimeType] of [
    [PNG, 'image/png'], [Buffer.from('ffd8ffe0', 'hex'), 'image/jpeg'],
    [gif, 'image/gif'], [webp, 'image/webp'], [bmp, 'image/bmp'], [ico, 'image/x-icon'],
    [avif, 'image/avif'], [Buffer.from('<svg/>'), 'image/svg+xml'],
    [Buffer.from('\uFEFF<?xml version="1.0"?>\n<!-- icon --><svg viewBox="0 0 1 1"></svg>'), 'image/svg+xml'],
  ]) assert.equal(detectImageMimeType(content), mimeType);
  assert.equal(detectImageMimeType(Buffer.from('<html><body><svg/></body></html>')), null);
  assert.equal(detectImageMimeType(Buffer.from('Not Found')), null);
});

test('offers all checked IPv6 and IPv4 addresses for connection fallback', async () => {
  const network = fakeNetwork([{}]);
  const addresses = [
    {address: '2606:4700:4700::1111', family: 6},
    {address: '1.1.1.1', family: 4},
  ];
  await downloadImage(IMAGE_URL, {...network.options, lookup: async () => addresses});
  assert.deepEqual(network.calls[0].addresses, addresses);
  assert.deepEqual(network.calls[0].singleAddress, addresses[1]);
  assert.equal(network.calls[0].autoSelectFamily, true);
});

test('follows relative redirects and validates the next host before requesting it', async () => {
  const network = fakeNetwork([
    {status: 302, headers: {location: '/new/picture.png'}},
    {},
  ]);
  await downloadImage(IMAGE_URL, network.options);
  assert.equal(network.calls[1].url, 'https://images.example.com/new/picture.png');
  assert.equal(network.lookups, 2);
});

test('rejects credentials, local networks, metadata addresses, and unsupported schemes before a request', async () => {
  for (const url of [
    'file:///tmp/picture.png', 'https://user:secret@images.example.com/picture.png',
    'http://localhost/image.png', 'http://foo.localhost/image.png',
    'http://127.1/image.png', 'http://2130706433/image.png', 'http://10.1.2.3/image.png',
    'http://172.16.1.1/image.png', 'http://192.168.1.1/image.png',
    'http://169.254.169.254/latest/meta-data/', 'http://100.100.100.200/image.png',
    'http://168.63.129.16/image.png', 'http://metadata.google.internal/image.png',
    'http://[::1]/image.png', 'http://[::ffff:127.0.0.1]/image.png',
    'http://[fd00::1]/image.png', 'http://[2001:db8::1]/image.png',
  ]) {
    const network = fakeNetwork([]);
    await assert.rejects(downloadImage(url, network.options), {code: 'UNSAFE_IMAGE_URL'});
    assert.equal(network.calls.length, 0, url);
  }
});

test('rejects DNS with any private result and redirects into private networks', async () => {
  const mixed = fakeNetwork([]);
  await assert.rejects(downloadImage(IMAGE_URL, {
    ...mixed.options,
    lookup: async () => [{address: '1.1.1.1', family: 4}, {address: '127.0.0.1', family: 4}],
  }), {code: 'UNSAFE_IMAGE_URL'});
  assert.equal(mixed.calls.length, 0);
  const redirected = fakeNetwork([{status: 302, headers: {location: 'http://169.254.169.254/image.png'}}]);
  await assert.rejects(downloadImage(IMAGE_URL, redirected.options), {code: 'UNSAFE_IMAGE_URL'});
  assert.equal(redirected.calls.length, 1);
});

test('does not retry HTML masquerading as an image or permanent HTTP failures', async () => {
  for (const [reply, code] of [
    [{body: Buffer.from('<html>404</html>'), headers: {'content-type': 'image/png'}}, 'INVALID_IMAGE'],
    [{status: 404}, 'IMAGE_HTTP_ERROR'],
    [{status: 304}, 'IMAGE_HTTP_ERROR'],
  ]) {
    const network = fakeNetwork([reply]);
    await assert.rejects(downloadImage(IMAGE_URL, network.options), {code});
    assert.equal(network.calls.length, 1);
  }
});

test('retries transient HTTP and network errors at most three times', async () => {
  const recovered = fakeNetwork([{status: 429}, {status: 503}, {}]);
  assert.deepEqual((await downloadImage(IMAGE_URL, recovered.options)).content, PNG);
  assert.equal(recovered.calls.length, 3);
  const failed = fakeNetwork(Array.from({length: 3}, () => ({
    error: Object.assign(new Error('Connection reset'), {code: 'ECONNRESET'}),
  })));
  await assert.rejects(downloadImage(IMAGE_URL, failed.options), {code: 'ECONNRESET'});
  assert.equal(failed.calls.length, 3);
});

test('enforces size limits on declared and streamed image bodies', async () => {
  for (const reply of [
    {headers: {'content-length': '1000'}},
    {chunks: [PNG.subarray(0, 20), PNG.subarray(20)]},
  ]) {
    const network = fakeNetwork([reply]);
    await assert.rejects(downloadImage(IMAGE_URL, {...network.options, maxBytes: 30}), {code: 'IMAGE_TOO_LARGE'});
    assert.equal(network.calls.length, 1);
  }
});

test('limits redirect loops and aborts timed out DNS and HTTP requests', async () => {
  const redirect = fakeNetwork(Array.from({length: 3}, () => ({status: 302, headers: {location: IMAGE_URL}})));
  await assert.rejects(downloadImage(IMAGE_URL, {...redirect.options, maxRedirects: 2}), {code: 'IMAGE_REDIRECT_ERROR'});
  assert.equal(redirect.calls.length, 3);
  const hanging = fakeNetwork([{hang: true}]);
  await assert.rejects(downloadImage(IMAGE_URL, {...hanging.options, timeoutMs: 10, attempts: 1}), {code: 'ETIMEDOUT'});
  await assert.rejects(downloadImage(IMAGE_URL, {
    ...hanging.options, lookup: () => new Promise(() => {}), timeoutMs: 10, attempts: 1,
  }), {code: 'ETIMEDOUT'});
});

test('revalidates cached bytes with ETag and Last-Modified and accepts 304', async (t) => {
  const cacheDir = await temporaryCache(t);
  const network = fakeNetwork([
    {headers: {etag: '"v1"', 'last-modified': 'Wed, 02 Sep 2026 12:00:00 GMT'}},
    {status: 304},
  ]);
  const download = createImageDownloader({...network.options, cacheDir});
  const first = await download(IMAGE_URL);
  const second = await download(IMAGE_URL);
  assert.deepEqual(second, first);
  assert.equal(network.calls[1].headers['if-none-match'], '"v1"');
  assert.equal(network.calls[1].headers['if-modified-since'], 'Wed, 02 Sep 2026 12:00:00 GMT');
  assert.equal(network.calls.length, 2);
});

test('revalidates the final redirected URL and refreshes changed cached content', async (t) => {
  const cacheDir = await temporaryCache(t);
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"/>');
  const network = fakeNetwork([
    {status: 302, headers: {location: 'https://cdn.example.com/picture'}},
    {headers: {etag: '"v1"'}},
    {status: 302, headers: {location: 'https://cdn.example.com/picture'}},
    {body: svg, headers: {etag: '"v2"'}},
    {status: 302, headers: {location: 'https://cdn.example.com/picture'}},
    {status: 304},
  ]);
  const download = createImageDownloader({...network.options, cacheDir});
  await download(IMAGE_URL);
  assert.deepEqual(await download(IMAGE_URL), {content: svg, mimeType: 'image/svg+xml'});
  assert.deepEqual(await download(IMAGE_URL), {content: svg, mimeType: 'image/svg+xml'});
  assert.equal(network.calls[2].headers['if-none-match'], undefined);
  assert.equal(network.calls[3].headers['if-none-match'], '"v1"');
  assert.equal(network.calls[5].headers['if-none-match'], '"v2"');
});

test('never silently serves cached images after a remote failure', async (t) => {
  const cacheDir = await temporaryCache(t);
  const network = fakeNetwork([{headers: {etag: '"v1"'}}, {status: 404}]);
  const download = createImageDownloader({...network.options, cacheDir});
  await download(IMAGE_URL);
  await assert.rejects(download(IMAGE_URL), {code: 'IMAGE_HTTP_ERROR'});
});

test('ignores corrupted disk cache and downloads without validators', async (t) => {
  const cacheDir = await temporaryCache(t);
  const network = fakeNetwork([{headers: {etag: '"v1"'}}, {}]);
  const download = createImageDownloader({...network.options, cacheDir});
  await download(IMAGE_URL);
  const key = crypto.createHash('sha256').update(IMAGE_URL).digest('hex');
  await fs.writeFile(path.join(cacheDir, `${key}.bin`), Buffer.from('corrupted'));
  assert.deepEqual((await download(IMAGE_URL)).content, PNG);
  assert.equal(network.calls[1].headers['if-none-match'], undefined);
});

test('ignores corrupt cache validators instead of sending invalid request headers', async (t) => {
  const cacheDir = await temporaryCache(t);
  const network = fakeNetwork([{headers: {etag: '"v1"'}}, {}]);
  const download = createImageDownloader({...network.options, cacheDir});
  await download(IMAGE_URL);
  const key = crypto.createHash('sha256').update(IMAGE_URL).digest('hex');
  const metadataPath = path.join(cacheDir, `${key}.json`);
  const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
  metadata.etag = 'invalid\r\nheader';
  await fs.writeFile(metadataPath, JSON.stringify(metadata));
  assert.deepEqual((await download(IMAGE_URL)).content, PNG);
  assert.equal(network.calls[1].headers['if-none-match'], undefined);
});
