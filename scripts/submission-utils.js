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

function extractSubmissionFromIssueBody(body) {
  const payloadMatch = String(body || '').match(PAYLOAD_RE);
  const signatureMatch = String(body || '').match(SIGNATURE_RE);
  if (!payloadMatch || !signatureMatch) {
    throw new Error('Issue body does not contain a Kai submission payload and signature.');
  }

  const payload = JSON.parse(base64UrlDecode(payloadMatch[1]));
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
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*(import|export)\s/.test(line)) {
      throw new Error(`${fieldName} contains MDX import/export at line ${index + 1}.`);
    }
    if (/<\/?[A-Z][A-Za-z0-9_.:-]*(\s|>|\/)/.test(line)) {
      throw new Error(`${fieldName} contains JSX-like markup at line ${index + 1}.`);
    }
  }
}

function validateSubmissionPayload(payload) {
  if (!payload || payload.version !== 1) throw new Error('Unsupported submission payload version.');
  if (payload.submissionType !== 'new_solution' && payload.submissionType !== 'correction') {
    throw new Error('Unsupported submission type.');
  }
  if (!payload.submissionId || !payload.publicAuthor || !payload.cla?.acceptedAt) {
    throw new Error('Submission payload is missing author, id, or CLA data.');
  }

  rejectDangerousMdx(payload.content?.descriptionMarkdown, 'Description');
  rejectDangerousMdx(payload.content?.kaiMarkdown, 'Kai');
  rejectDangerousMdx(payload.content?.correctionMarkdown, 'Correction');
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
  const targetDocId = normalizePath(payload.document?.targetDocId)
    .replace(/^docs\//, '')
    .replace(/\.mdx?$/i, '');
  if (!targetDocId) throw new Error('Correction payload is missing targetDocId.');
  return `docs/${targetDocId}.md`;
}

function appendCorrectionMarkdown(existing, payload, issue) {
  const correction = String(payload.content?.correctionMarkdown || '').trim();
  if (!correction) throw new Error('Correction payload contains no correction markdown.');
  const heading = `Correction from Issue #${issue.number}`;
  const block = [
    `### ${heading}`,
    '',
    `**Author:** ${payload.publicAuthor}`,
    '',
    correction,
  ].join('\n');

  const trimmed = existing.trimEnd();
  if (/^##\s+\*\*Kai\*\*/m.test(trimmed)) {
    return `${trimmed}\n\n${block}\n`;
  }
  return `${trimmed}\n\n## **Kai**\n${block}\n`;
}

function ensureWithinRepo(repoRoot, relativePath) {
  const absolutePath = path.resolve(repoRoot, relativePath);
  const normalizedRoot = path.resolve(repoRoot);
  if (!absolutePath.startsWith(`${normalizedRoot}${path.sep}`)) {
    throw new Error(`Refusing to write outside repository: ${relativePath}`);
  }
  return absolutePath;
}

function writeSubmissionToRepo({ repoRoot, payload, issue }) {
  validateSubmissionPayload(payload);

  if (payload.submissionType === 'new_solution') {
    const relativePath = buildNewSolutionPath(payload);
    const absolutePath = ensureWithinRepo(repoRoot, relativePath);
    if (fs.existsSync(absolutePath)) {
      throw new Error(`Target file already exists: ${relativePath}`);
    }
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, buildNewSolutionMarkdown(payload), 'utf8');
    return { relativePath, action: 'create' };
  }

  const relativePath = targetPathForCorrection(payload);
  const absolutePath = ensureWithinRepo(repoRoot, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Target document does not exist: ${relativePath}`);
  }
  const existing = fs.readFileSync(absolutePath, 'utf8');
  fs.writeFileSync(absolutePath, appendCorrectionMarkdown(existing, payload, issue), 'utf8');
  return { relativePath, action: 'update' };
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
    '',
    'This PR was generated from a signed The Kai Project web submission payload.',
  ].join('\n');
}

module.exports = {
  buildPullRequestBody,
  extractSubmissionFromIssueBody,
  stableStringify,
  verifySubmissionSignature,
  writeSubmissionToRepo,
};
