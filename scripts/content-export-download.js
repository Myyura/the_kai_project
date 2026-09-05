const crypto = require('node:crypto');
const dns = require('node:dns').promises;
const fs = require('node:fs').promises;
const http = require('node:http');
const https = require('node:https');
const net = require('node:net');
const path = require('node:path');

const DEFAULT_MAX_BYTES = 20 * 1024 * 1024;
const REDIRECT_CODES = new Set([301, 302, 303, 307, 308]);
const TRANSIENT_CODES = new Set([
  'ECONNRESET', 'ECONNREFUSED', 'EPIPE', 'ETIMEDOUT', 'EAI_AGAIN',
  'ENETUNREACH', 'EHOSTUNREACH', 'ERR_STREAM_PREMATURE_CLOSE',
]);

function failure(message, code, retryable = false) {
  return Object.assign(new Error(message), {code, retryable});
}

function hash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

function isPublicAddress(address) {
  if (net.isIP(address) === 4) {
    const [a, b, c] = address.split('.').map(Number);
    return !(a === 0 || a === 10 || a === 127 || a >= 224
      || (a === 100 && b >= 64 && b <= 127)
      || (a === 169 && b === 254)
      || address === '168.63.129.16'
      || (a === 172 && b >= 16 && b <= 31)
      || (a === 192 && (b === 168 || (b === 0 && (c === 0 || c === 2))))
      || (a === 192 && b === 88 && c === 99)
      || (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100)))
      || (a === 203 && b === 0 && c === 113));
  }
  if (net.isIP(address) === 6) {
    // Only globally routable unicast; exclude special transition/documentation ranges.
    const [first, second] = address.toLowerCase().split(':').map((part) => parseInt(part || '0', 16));
    return first >= 0x2000 && first <= 0x3fff
      && !(first === 0x2001 && (second <= 0x1ff || second === 0xdb8))
      && first !== 0x2002 && first !== 0x3fff;
  }
  return false;
}

function checkedUrl(value) {
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw failure('Image URL must use HTTP(S) without credentials', 'UNSAFE_IMAGE_URL');
  }
  const hostname = url.hostname.replace(/^\[|\]$/g, '').replace(/\.$/, '').toLowerCase();
  if (!hostname || hostname === 'localhost' || /\.(localhost|local|internal)$/.test(hostname)
      || (net.isIP(hostname) && !isPublicAddress(hostname))) {
    throw failure(`Image URL does not identify a public host: ${hostname}`, 'UNSAFE_IMAGE_URL');
  }
  url.hash = '';
  return url;
}

function detectImageMimeType(content) {
  if (!Buffer.isBuffer(content)) return null;
  if (content.length >= 24
      && content.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'))
      && content.toString('ascii', 12, 16) === 'IHDR') return 'image/png';
  if (content.length >= 4 && content[0] === 0xff && content[1] === 0xd8
      && content[2] === 0xff) return 'image/jpeg';
  if (content.length >= 10 && /^GIF8[79]a$/.test(content.toString('ascii', 0, 6))) return 'image/gif';
  if (content.length >= 16 && content.toString('ascii', 0, 4) === 'RIFF'
      && content.toString('ascii', 8, 12) === 'WEBP') return 'image/webp';
  if (content.length >= 26 && content.toString('ascii', 0, 2) === 'BM') return 'image/bmp';
  if (content.length >= 22 && content.readUInt32LE(0) === 0x00010000
      && content.readUInt16LE(4) > 0) return 'image/x-icon';
  if (content.length >= 16 && content.toString('ascii', 4, 8) === 'ftyp') {
    const boxLength = content.readUInt32BE(0);
    if (boxLength >= 16 && boxLength <= content.length) {
      const brands = [content.toString('ascii', 8, 12)];
      for (let offset = 16; offset + 4 <= boxLength; offset += 4) {
        brands.push(content.toString('ascii', offset, offset + 4));
      }
      if (brands.some((brand) => brand === 'avif' || brand === 'avis')) return 'image/avif';
    }
  }
  const text = content.toString('utf8').replace(/^\uFEFF/, '').trim();
  // Anchor at the XML root so an HTML error page containing an SVG icon is rejected.
  const xml = text.replace(/^(?:(?:<\?xml[\s\S]*?\?>|<!--[\s\S]*?-->|<!DOCTYPE\s+svg(?:[^>\[]|\[[\s\S]*?\])*>)[\s]*)*/i, '');
  if (/^<svg(?:\s|\/?>)/i.test(xml) && (/<\/svg\s*>\s*$/i.test(xml) || /\/>\s*$/.test(xml))) {
    return 'image/svg+xml';
  }
  return null;
}

function abortable(promise, signal) {
  return new Promise((resolve, reject) => {
    const abort = () => reject(signal.reason);
    signal.addEventListener('abort', abort, {once: true});
    if (signal.aborted) abort();
    Promise.resolve(promise).then(resolve, reject).finally(() => {
      signal.removeEventListener('abort', abort);
    });
  });
}

async function publicLookup(url, lookup, signal) {
  const hostname = url.hostname.replace(/^\[|\]$/g, '');
  const records = net.isIP(hostname)
    ? [{address: hostname, family: net.isIP(hostname)}]
    : await abortable(lookup(hostname, {all: true, verbatim: true}), signal);
  if (!Array.isArray(records) || records.length === 0
      || records.some((record) => !isPublicAddress(record.address))) {
    throw failure(`Image host resolves to a non-public address: ${hostname}`, 'UNSAFE_IMAGE_URL');
  }
  const addresses = records.map((record) => ({
    address: record.address, family: net.isIP(record.address),
  }));
  const selected = addresses.find((record) => record.family === 4) || addresses[0];
  // Happy Eyeballs may try every checked address, without ever resolving DNS again.
  return (_hostname, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (options.all) callback(null, addresses);
    else callback(null, selected.address, selected.family);
  };
}

function requestImage(url, {request, lookup, signal, maxBytes, headers, httpAgent, httpsAgent}) {
  return new Promise((resolve, reject) => {
    let settled = false;
    let req;
    const finish = (error, result) => {
      if (settled) return;
      settled = true;
      signal.removeEventListener('abort', abort);
      if (error) reject(error);
      else resolve(result);
    };
    const abort = () => {
      finish(signal.reason);
      req?.destroy(signal.reason);
    };
    signal.addEventListener('abort', abort, {once: true});
    if (signal.aborted) {
      abort();
      return;
    }
    try {
      const send = request || (url.protocol === 'https:' ? https.request : http.request);
      const agent = (url.protocol === 'https:' ? httpsAgent : httpAgent) || false;
      req = send(url, {
        method: 'GET', headers, lookup, agent, signal,
        autoSelectFamily: true, autoSelectFamilyAttemptTimeout: 250,
      }, (response) => {
        const status = response.statusCode;
        const responseHeaders = response.headers;
        if (REDIRECT_CODES.has(status) || status === 304 || status !== 200) {
          finish(null, {status, headers: responseHeaders});
          // A 304 has no body; drain it so cache revalidation can reuse TLS.
          if (status === 304) response.resume();
          else response.destroy();
          return;
        }
        if (Number(responseHeaders['content-length']) > maxBytes) {
          finish(failure(`Image exceeds ${maxBytes} bytes`, 'IMAGE_TOO_LARGE'));
          response.destroy();
          return;
        }
        const chunks = [];
        let size = 0;
        response.on('data', (chunk) => {
          if (settled) return;
          size += chunk.length;
          if (size > maxBytes) {
            finish(failure(`Image exceeds ${maxBytes} bytes`, 'IMAGE_TOO_LARGE'));
            response.destroy();
          } else chunks.push(chunk);
        });
        response.on('end', () => {
          if (!settled) finish(null, {
            status, headers: responseHeaders, content: Buffer.concat(chunks, size),
          });
        });
        response.on('error', (error) => finish(error));
        response.on('aborted', () => finish(failure('Image response was interrupted', 'ECONNRESET', true)));
      });
      req.on('error', (error) => finish(signal.aborted ? signal.reason : error));
      req.end();
    } catch (error) {
      finish(error);
    }
  });
}

async function readCache(cacheDir, url, maxBytes) {
  if (!cacheDir) return null;
  const prefix = path.join(cacheDir, hash(url));
  try {
    const metadata = JSON.parse(await fs.readFile(`${prefix}.json`, 'utf8'));
    const info = await fs.stat(`${prefix}.bin`);
    if (info.size > maxBytes || metadata.url !== url) return null;
    const content = await fs.readFile(`${prefix}.bin`);
    const mimeType = detectImageMimeType(content);
    if (!mimeType || metadata.mimeType !== mimeType || metadata.contentHash !== hash(content)) return null;
    if (typeof metadata.finalUrl !== 'string' || checkedUrl(metadata.finalUrl).href !== metadata.finalUrl) return null;
    for (const [header, value] of [['etag', metadata.etag], ['last-modified', metadata.lastModified]]) {
      if (value !== null && value !== undefined) {
        if (typeof value !== 'string') return null;
        http.validateHeaderValue(header, value);
      }
    }
    return {...metadata, content, mimeType};
  } catch {
    return null;
  }
}

async function writeCache(cacheDir, url, result) {
  if (!cacheDir) return;
  await fs.mkdir(cacheDir, {recursive: true});
  const prefix = path.join(cacheDir, hash(url));
  const suffix = `.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`;
  const metadata = {
    url, finalUrl: result.finalUrl, mimeType: result.mimeType, contentHash: hash(result.content),
    etag: result.headers.etag || null,
    lastModified: result.headers['last-modified'] || null,
  };
  try {
    await fs.writeFile(`${prefix}.bin${suffix}`, result.content);
    await fs.writeFile(`${prefix}.json${suffix}`, JSON.stringify(metadata));
    await fs.rename(`${prefix}.bin${suffix}`, `${prefix}.bin`);
    await fs.rename(`${prefix}.json${suffix}`, `${prefix}.json`);
  } finally {
    await Promise.all([
      fs.rm(`${prefix}.bin${suffix}`, {force: true}),
      fs.rm(`${prefix}.json${suffix}`, {force: true}),
    ]);
  }
}

async function downloadAttempt(initialUrl, cached, options) {
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort(failure(`Image download timed out after ${options.timeoutMs} ms`, 'ETIMEDOUT', true));
  }, options.timeoutMs);
  try {
    let url = initialUrl;
    for (let redirects = 0; ; redirects += 1) {
      const lookup = await publicLookup(url, options.lookup, controller.signal);
      const headers = {
        accept: 'image/*', 'accept-encoding': 'identity',
        'user-agent': 'Kai-Content-Export/1.0',
      };
      if (cached?.finalUrl === url.href) {
        if (cached.etag) headers['if-none-match'] = cached.etag;
        if (cached.lastModified) headers['if-modified-since'] = cached.lastModified;
      }
      const response = await requestImage(url, {...options, lookup, signal: controller.signal, headers});
      if (REDIRECT_CODES.has(response.status)) {
        if (redirects >= options.maxRedirects || !response.headers.location) {
          throw failure('Image redirect limit exceeded or Location is missing', 'IMAGE_REDIRECT_ERROR');
        }
        url = checkedUrl(new URL(response.headers.location, url));
        continue;
      }
      if (response.status === 304 && cached?.finalUrl === url.href
          && (headers['if-none-match'] || headers['if-modified-since'])) {
        return {...cached, headers: {
          etag: response.headers.etag || cached.etag,
          'last-modified': response.headers['last-modified'] || cached.lastModified,
        }};
      }
      if (response.status !== 200) {
        throw failure(`Image request returned HTTP ${response.status}`, 'IMAGE_HTTP_ERROR',
          response.status === 429 || response.status >= 500);
      }
      const mimeType = detectImageMimeType(response.content);
      if (!mimeType) throw failure('Image response does not contain a supported image', 'INVALID_IMAGE');
      return {...response, finalUrl: url.href, mimeType};
    }
  } finally {
    clearTimeout(timer);
  }
}

/** Download a public image. request and lookup are injectable for offline tests. */
async function downloadImage(value, options = {}) {
  const url = checkedUrl(value);
  const settings = {
    maxBytes: DEFAULT_MAX_BYTES,
    timeoutMs: 120_000,
    attempts: 3,
    maxRedirects: 5,
    retryDelayMs: 250,
    lookup: (hostname, lookupOptions) => dns.lookup(hostname, lookupOptions),
    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    ...options,
  };
  for (const key of ['maxBytes', 'timeoutMs', 'attempts']) {
    if (!Number.isSafeInteger(settings[key]) || settings[key] <= 0) {
      throw new TypeError(`${key} must be a positive integer`);
    }
  }
  const cached = await readCache(settings.cacheDir, url.href, settings.maxBytes);
  for (let attempt = 0; attempt < settings.attempts; attempt += 1) {
    try {
      const result = await downloadAttempt(url, cached, settings);
      await writeCache(settings.cacheDir, url.href, result);
      return {content: result.content, mimeType: result.mimeType};
    } catch (error) {
      if (attempt + 1 === settings.attempts
          || !(error.retryable || TRANSIENT_CODES.has(error.code))) throw error;
      await settings.sleep(settings.retryDelayMs * (2 ** attempt));
    }
  }
}

function createImageDownloader(options = {}) {
  const agentOptions = {keepAlive: true, maxSockets: 6, maxFreeSockets: 6, timeout: 30_000};
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  let closed = false;
  const download = (url, overrides = {}) => {
    if (closed) return Promise.reject(new Error('Image downloader has been closed'));
    // Every request still validates DNS; reused sockets already point at checked public peers.
    return downloadImage(url, {...options, ...overrides, httpAgent, httpsAgent});
  };
  download.close = download.destroy = () => {
    closed = true;
    httpAgent.destroy();
    httpsAgent.destroy();
  };
  return download;
}

module.exports = {DEFAULT_MAX_BYTES, createImageDownloader, downloadImage, detectImageMimeType};
