const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { getSchoolTagForUniversity } = require('./tag-taxonomy');

const PAYLOAD_RE = /<!--\s*kai-submission-payload:([A-Za-z0-9_-]+)\s*-->/;
const SIGNATURE_RE = /<!--\s*kai-submission-signature:([a-f0-9]+)\s*-->/i;

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(',')}]`;
  }
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => (
      `${JSON.stringify(key)}:${stableStringify(value[key])}`
    )).join(',')}}`;
  }
  return JSON.stringify(value);
}

function base64UrlDecode(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  return Buffer.from(padded, 'base64').toString('utf8');
}

function hmacSha256Hex(secret, input) {
  return crypto.createHmac('sha256', secret).update(input).digest('hex');
}

function extractMarkdownBlock(body, name) {
  const pattern = new RegExp(
    `<!--\\s*kai-submission-${name}:start\\s*-->\\r?\\n`
      + '(?<fence>`{3,}|~{3,})markdown\\r?\\n'
      + '(?<content>[\\s\\S]*?)\\r?\\n'
      + '\\k<fence>\\r?\\n'
      + `<!--\\s*kai-submission-${name}:end\\s*-->`,
  );
  const match = String(body || '').match(pattern);
  if (!match?.groups) {
    throw new Error(`Issue body does not contain a signed ${name} Markdown block.`);
  }
  return match.groups.content;
}

function extractSubmissionFromIssueBody(body) {
  const payloadMatch = String(body || '').match(PAYLOAD_RE);
  const signatureMatch = String(body || '').match(SIGNATURE_RE);
  if (!payloadMatch || !signatureMatch) {
    throw new Error('Issue body does not contain a Kai submission payload and signature.');
  }

  const payload = JSON.parse(base64UrlDecode(payloadMatch[1]));
  if (payload?.version !== 3) {
    throw new Error('Unsupported submission payload version.');
  }
  if (payload.submissionType === 'new_solution') {
    if (
      payload.content?.descriptionMarkdown
      || payload.content?.kaiMarkdown
    ) {
      throw new Error('New-solution Issue payload must not duplicate visible Markdown content.');
    }
    payload.content = {
      descriptionMarkdown: extractMarkdownBlock(body, 'description'),
      kaiMarkdown: extractMarkdownBlock(body, 'kai'),
    };
  }
  return {
    payload,
    canonicalPayload: stableStringify(payload),
    signature: signatureMatch[1],
  };
}

function verifySubmissionSignature({ canonicalPayload, signature }, secret) {
  if (!secret) {
    throw new Error('CLA_ATTESTATION_SECRET is required to verify this submission.');
  }
  const expected = hmacSha256Hex(secret, canonicalPayload);
  const expectedBuffer = Buffer.from(expected, 'hex');
  const actualBuffer = Buffer.from(signature, 'hex');
  if (expectedBuffer.length !== actualBuffer.length || !crypto.timingSafeEqual(expectedBuffer, actualBuffer)) {
    throw new Error('Submission signature verification failed.');
  }
}

function rejectDangerousMdx(markdown, fieldName) {
  const lines = String(markdown || '').split(/\r?\n/);
  let fence = null;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      const length = fenceMatch[1].length;
      if (!fence) fence = { marker, length };
      else if (marker === fence.marker && length >= fence.length) fence = null;
      continue;
    }
    if (fence) continue;
    if (/^\s*(import|export)\s/.test(line)) {
      throw new Error(`${fieldName} contains MDX import/export at line ${index + 1}.`);
    }
    if (/<\/?[A-Z][A-Za-z0-9_.:-]*(?:\s[^<>]*?)?\/?>/.test(line)) {
      throw new Error(`${fieldName} contains JSX-like markup at line ${index + 1}.`);
    }
  }
}

function validateSubmissionPayload(payload) {
  if (!payload || payload.version !== 3) throw new Error('Unsupported submission payload version.');
  if (payload.submissionType !== 'new_solution' && payload.submissionType !== 'correction') {
    throw new Error('Unsupported submission type.');
  }
  if (!payload.submissionId || !payload.publicAuthor || !payload.cla?.acceptedAt) {
    throw new Error('Submission payload is missing author, id, or CLA data.');
  }

  rejectDangerousMdx(payload.content?.descriptionMarkdown, 'Description');
  rejectDangerousMdx(payload.content?.kaiMarkdown, 'Kai');
  if (payload.submissionType === 'correction') {
    const correction = payload.correction;
    if (!correction || !/^[a-f0-9]{40}$/.test(correction.baseBlobSha || '')) {
      throw new Error('Correction payload is missing a valid base blob SHA.');
    }
    if (!Array.isArray(correction.changes) || correction.changes.length === 0) {
      throw new Error('Correction payload contains no line changes.');
    }
  }
}

function normalizePath(input) {
  return String(input || '').replace(/\\/g, '/').replace(/^\/+/, '');
}

function cleanSegment(input, fallback = 'submission') {
  const cleaned = String(input || '')
    .trim()
    .replace(/\.mdx?$/i, '')
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100);
  return cleaned || fallback;
}

function slugFromTitle(title) {
  return String(title || '').replace(/\s+/g, '');
}

function cleanProgramPath(input) {
  return normalizePath(input)
    .split('/')
    .map((segment) => cleanSegment(segment, ''))
    .filter(Boolean)
    .join('/');
}

function buildNewSolutionPath(payload) {
  const doc = payload.document || {};
  const year = Number(doc.year);
  if (!doc.universityId || !doc.departmentId || !Number.isInteger(year)) {
    throw new Error('New solution payload is missing university, department, or year.');
  }

  const parts = [
    'docs',
    cleanSegment(doc.universityId),
    cleanSegment(doc.departmentId),
  ];
  const programPath = cleanProgramPath(doc.programId);
  if (programPath) parts.push(...programPath.split('/'));
  parts.push(String(year));
  const fileSlug = cleanSegment(doc.fileSlug, '')
    || cleanSegment(slugFromTitle(doc.title), '')
    || `submission-${payload.submissionId.slice(0, 8)}`;
  parts.push(`${fileSlug}.md`);
  return parts.join('/');
}

function yamlString(value) {
  return JSON.stringify(String(value || ''));
}

function formatTags(tags, universityId) {
  const cleanTags = Array.isArray(tags)
    ? tags.map((tag) => String(tag || '').trim()).filter(Boolean)
    : [];
  const schoolTag = getSchoolTagForUniversity(universityId);
  if (schoolTag?.id && !cleanTags.includes(schoolTag.id)) {
    cleanTags.unshift(schoolTag.id);
  }
  if (cleanTags.length === 0) return 'tags: []';
  return `tags:\n${cleanTags.map((tag) => `  - ${tag}`).join('\n')}`;
}

function buildNewSolutionMarkdown(payload) {
  const doc = payload.document || {};
  const content = payload.content || {};
  const title = doc.title || doc.sidebarLabel || 'Untitled submission';
  const sidebarLabel = doc.sidebarLabel || title;
  const description = String(content.descriptionMarkdown || '').trim();
  const kai = String(content.kaiMarkdown || '').trim();
  if (!description && !kai) throw new Error('New solution payload contains no Description or Kai markdown.');

  const sections = [
    '---',
    `sidebar_label: ${yamlString(sidebarLabel)}`,
    formatTags(doc.tags, doc.universityId),
    '---',
    `# ${title}`,
    '',
    '## **Author**',
    payload.publicAuthor,
  ];

  if (description) {
    sections.push('', '## **Description**', description);
  }
  if (kai) {
    sections.push('', '## **Kai**', kai);
  }

  return `${sections.join('\n')}\n`;
}

function targetPathForCorrection(payload) {
  const targetDocId = normalizePath(payload.document?.targetDocId).replace(/^docs\//, '').replace(/\.mdx?$/i, '');
  if (!targetDocId) throw new Error('Correction payload is missing targetDocId.');
  const sourcePath = normalizePath(payload.correction?.sourcePath);
  const sourceDocId = sourcePath.replace(/^docs\//, '').replace(/\.mdx?$/i, '');
  if (sourceDocId !== targetDocId || !/^docs\/[A-Za-z0-9._/-]+\.mdx?$/.test(sourcePath)) {
    throw new Error('Correction source path does not match targetDocId.');
  }
  if (sourcePath.split('/').some((segment) => !segment || segment === '.' || segment === '..')) {
    throw new Error('Correction source path contains an invalid segment.');
  }
  return sourcePath;
}

function gitBlobSha(content) {
  const bytes = Buffer.isBuffer(content) ? content : Buffer.from(String(content), 'utf8');
  const header = Buffer.from(`blob ${bytes.length}\0`, 'utf8');
  return crypto.createHash('sha1').update(Buffer.concat([header, bytes])).digest('hex');
}

function applyLineChanges(existing, changes) {
  const originalLines = String(existing).replace(/\r\n?/g, '\n').split('\n');
  const output = [];
  let cursor = 0;

  for (const change of changes) {
    if (
      !change
      || !Number.isInteger(change.oldStart)
      || change.oldStart < cursor
      || !Array.isArray(change.oldLines)
      || !Array.isArray(change.newLines)
      || !change.oldLines.every((line) => typeof line === 'string')
      || !change.newLines.every((line) => typeof line === 'string')
    ) {
      throw new Error('Correction payload contains an invalid line change.');
    }
    if (change.oldStart > originalLines.length) {
      throw new Error('Correction line change starts outside the source document.');
    }

    output.push(...originalLines.slice(cursor, change.oldStart));
    const actualOldLines = originalLines.slice(change.oldStart, change.oldStart + change.oldLines.length);
    if (
      actualOldLines.length !== change.oldLines.length
      || actualOldLines.some((line, index) => line !== change.oldLines[index])
    ) {
      throw new Error('Correction line change does not match the signed source content.');
    }
    output.push(...change.newLines);
    cursor = change.oldStart + change.oldLines.length;
  }
  output.push(...originalLines.slice(cursor));
  return output.join('\n');
}

function ensureWithinRepo(repoRoot, relativePath) {
  const absolutePath = path.resolve(repoRoot, relativePath);
  const normalizedRoot = path.resolve(repoRoot);
  if (!absolutePath.startsWith(`${normalizedRoot}${path.sep}`)) {
    throw new Error(`Refusing to write outside repository: ${relativePath}`);
  }
  return absolutePath;
}

function writeSubmissionToRepo({ repoRoot, payload }) {
  validateSubmissionPayload(payload);

  if (payload.submissionType === 'new_solution') {
    const relativePath = buildNewSolutionPath(payload);
    const absolutePath = ensureWithinRepo(repoRoot, relativePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    try {
      fs.writeFileSync(absolutePath, buildNewSolutionMarkdown(payload), {
        encoding: 'utf8',
        flag: 'wx',
      });
    } catch (error) {
      if (error?.code !== 'EEXIST') throw error;
      return {
        relativePath,
        action: 'conflict',
        conflict: true,
        conflictKind: 'target_exists',
      };
    }
    return { relativePath, action: 'create' };
  }

  const relativePath = targetPathForCorrection(payload);
  const absolutePath = ensureWithinRepo(repoRoot, relativePath);
  let existing;
  try {
    existing = fs.readFileSync(absolutePath, 'utf8');
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
    throw new Error(`Target document does not exist: ${relativePath}`);
  }
  const currentBlobSha = gitBlobSha(Buffer.from(existing, 'utf8'));
  if (payload.correction.conflict || currentBlobSha !== payload.correction.baseBlobSha) {
    return {
      relativePath,
      action: 'conflict',
      conflict: true,
      conflictKind: 'source_changed',
      expectedBlobSha: payload.correction.baseBlobSha,
      currentBlobSha,
    };
  }

  const proposed = applyLineChanges(existing, payload.correction.changes);
  rejectDangerousMdx(proposed, 'Proposed document');
  fs.writeFileSync(absolutePath, proposed, 'utf8');
  return { relativePath, action: 'update', conflict: false };
}

function buildPullRequestBody({ payload, issue, relativePath }) {
  const kind = payload.submissionType === 'new_solution' ? '新增题解' : '纠错/补充';
  return [
    `Converts #${issue.number} into a docs change.`,
    '',
    `- Type: ${kind}`,
    `- Source issue: ${issue.html_url}`,
    `- File: \`${relativePath}\``,
    `- Public author: ${payload.publicAuthor}`,
    `- CLA accepted at: ${payload.cla.acceptedAt}`,
    ...(payload.correction ? [`- Base blob: \`${payload.correction.baseBlobSha}\``] : []),
    '',
    'This PR was generated from a signed The Kai Project web submission payload.',
  ].join('\n');
}

module.exports = {
  applyLineChanges,
  buildPullRequestBody,
  extractSubmissionFromIssueBody,
  gitBlobSha,
  stableStringify,
  verifySubmissionSignature,
  writeSubmissionToRepo,
};
