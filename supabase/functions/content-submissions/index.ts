import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.48.1';
import {
  corsHeadersFor,
  errorResponse,
  getBearerToken,
  isAllowedOrigin,
  jsonResponse,
  readJsonBody,
  withCors,
} from './http.ts';
import { hmacSha256Hex, sha256Hex } from './crypto.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const CONTENT_BOT_TOKEN = Deno.env.get('CONTENT_BOT_TOKEN') || '';
const CLA_ATTESTATION_SECRET = Deno.env.get('CLA_ATTESTATION_SECRET') || '';
const GITHUB_REPOSITORY = Deno.env.get('GITHUB_REPOSITORY') || 'Myyura/the_kai_project';
const MAX_MARKDOWN_LENGTH = 60000;
const MAX_TEXT_LENGTH = 240;

const SUBMISSION_LABELS = [
  { name: 'submission:new-solution', color: '2e8555', description: '站内投稿：新增题解' },
  { name: 'submission:correction', color: 'd97706', description: '站内投稿：纠错或补充' },
  { name: 'submission:needs-info', color: 'facc15', description: '投稿需要补充信息' },
  { name: 'submission:ready-for-pr', color: '2563eb', description: '投稿已确认，可以生成 PR' },
  { name: 'submission:converted', color: '6b7280', description: '投稿已转换为 PR' },
];

let supabaseClient: ReturnType<typeof createClient> | null = null;

function getSupabase() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) return null;
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseClient;
}

type SubmissionType = 'new_solution' | 'correction';

type SubmissionPayload = {
  version: 1;
  submissionId: string;
  submissionType: SubmissionType;
  createdAt: string;
  publicAuthor: string;
  cla: {
    acceptedAt: string;
    statement: string;
  };
  document: {
    title: string;
    sidebarLabel: string;
    universityId: string;
    departmentId: string;
    programId: string;
    year: number | null;
    fileSlug: string;
    tags: string[];
    targetDocId: string;
    targetTitle: string;
  };
  content: {
    descriptionMarkdown: string;
    kaiMarkdown: string;
    correctionMarkdown: string;
  };
};

function cleanText(value: unknown, maxLength = MAX_TEXT_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function cleanMarkdown(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_MARKDOWN_LENGTH) : '';
}

function cleanSlug(value: unknown) {
  return cleanText(value, 120)
    .replace(/\.mdx?$/i, '')
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function normalizeDocId(value: unknown) {
  return cleanText(value, 260)
    .replace(/^\/+/, '')
    .replace(/^docs\//, '')
    .replace(/\.mdx?$/i, '');
}

function normalizeTags(value: unknown) {
  const rawItems = Array.isArray(value)
    ? value
    : typeof value === 'string'
      ? value.split(/[\n,]/)
      : [];

  const seen = new Set<string>();
  const tags: string[] = [];
  for (const raw of rawItems) {
    const tag = cleanText(raw, 120);
    if (!tag || seen.has(tag)) continue;
    seen.add(tag);
    tags.push(tag);
    if (tags.length >= 30) break;
  }
  return tags;
}

function base64Url(input: string) {
  const bytes = new TextEncoder().encode(input);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(',')}]`;
  }
  if (value && typeof value === 'object') {
    const objectValue = value as Record<string, unknown>;
    return `{${Object.keys(objectValue).sort().map((key) => (
      `${JSON.stringify(key)}:${stableStringify(objectValue[key])}`
    )).join(',')}}`;
  }
  return JSON.stringify(value);
}

function submissionTitle(payload: SubmissionPayload) {
  const prefix = payload.submissionType === 'new_solution'
    ? '新增题解投稿'
    : '题解纠错投稿';
  const title = payload.submissionType === 'new_solution'
    ? payload.document.title
    : (payload.document.targetTitle || payload.document.targetDocId);
  return `[${prefix}] ${title}`.slice(0, 240);
}

function buildIssueBody(payload: SubmissionPayload, signature: string) {
  const label = payload.submissionType === 'new_solution' ? '新增题解' : '纠错/补充';
  const target = payload.submissionType === 'new_solution'
    ? [
      payload.document.universityId,
      payload.document.departmentId,
      payload.document.programId,
      payload.document.year ? String(payload.document.year) : '',
    ].filter(Boolean).join(' / ')
    : payload.document.targetDocId;
  const encodedPayload = base64Url(stableStringify(payload));

  return `## 投稿类型
${label}

## 目标
${target}

## 公开署名
${payload.publicAuthor}

## 标题
${payload.document.title || payload.document.targetTitle || '-'}

## Tags
${payload.document.tags.length ? payload.document.tags.map((tag) => `- \`${tag}\``).join('\n') : '- 暂无'}

## CLA
投稿者已在站内确认：I have read and agree to The Kai Project CLA.

确认时间：${payload.cla.acceptedAt}

## Markdown 原文

### Description

\`\`\`markdown
${payload.content.descriptionMarkdown || '(empty)'}
\`\`\`

### Kai

\`\`\`markdown
${payload.content.kaiMarkdown || '(empty)'}
\`\`\`

### Correction

\`\`\`markdown
${payload.content.correctionMarkdown || '(empty)'}
\`\`\`

<!-- kai-submission-payload:${encodedPayload} -->
<!-- kai-submission-signature:${signature} -->
`;
}

function publicSubmission(row: Record<string, unknown>) {
  return {
    id: row.id,
    submissionType: row.submission_type,
    status: row.status,
    title: row.title,
    targetDocId: row.target_doc_id,
    issueNumber: row.issue_number,
    issueUrl: row.issue_url,
    prNumber: row.pr_number,
    prUrl: row.pr_url,
    failureReason: row.failure_reason,
    updatedAt: row.updated_at,
    createdAt: row.created_at,
  };
}

function submissionDatabaseErrorResponse(error: unknown, code: string) {
  const errorLike = error && typeof error === 'object'
    ? error as { code?: unknown; message?: unknown }
    : null;
  const message = typeof errorLike?.message === 'string'
    ? errorLike.message
    : error instanceof Error
      ? error.message
      : String(error || '');
  const pgCode = typeof errorLike?.code === 'string' ? errorLike.code : '';

  if (
    pgCode === '42P01'
    || message.includes('content_submissions')
    || message.includes('does not exist')
  ) {
    return errorResponse(
      500,
      'submission_schema_missing',
      '投稿服务数据库尚未初始化，请先在 Supabase SQL Editor 执行最新的 src/services/schema.sql 后重试。',
    );
  }

  return errorResponse(500, code, '投稿服务数据库请求失败，请稍后重试。');
}

async function requireUser(req: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return { response: errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.') };
  }

  const token = getBearerToken(req);
  if (!token) {
    return { response: errorResponse(401, 'missing_auth', 'Login is required.') };
  }

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) {
    return { response: errorResponse(401, 'invalid_auth', 'Invalid or expired login session.') };
  }

  return { user: data.user };
}

function validateSubmission(body: Record<string, unknown>) {
  const submissionType = cleanText(body.submissionType, 40) as SubmissionType;
  if (submissionType !== 'new_solution' && submissionType !== 'correction') {
    return { error: errorResponse(400, 'invalid_type', 'Submission type must be new_solution or correction.') };
  }

  const authorName = cleanText(body.authorName, 120);
  if (!authorName) {
    return { error: errorResponse(400, 'missing_author', 'Author name is required.') };
  }
  if (!body.claAccepted) {
    return { error: errorResponse(400, 'cla_required', 'CLA confirmation is required.') };
  }

  const now = new Date().toISOString();
  const title = cleanText(body.title, 180);
  const sidebarLabel = cleanText(body.sidebarLabel, 120) || title;
  const universityId = cleanText(body.universityId, 120);
  const departmentId = cleanText(body.departmentId, 120);
  const programId = cleanText(body.programId, 160);
  const rawYear = Number(body.year);
  const year = Number.isInteger(rawYear) && rawYear >= 1900 && rawYear <= 2100 ? rawYear : null;
  const fileSlug = cleanSlug(body.fileSlug);
  const targetDocId = normalizeDocId(body.targetDocId);
  const targetTitle = cleanText(body.targetTitle, 180);
  const tags = normalizeTags(body.tags);
  const descriptionMarkdown = cleanMarkdown(body.descriptionMarkdown);
  const kaiMarkdown = cleanMarkdown(body.kaiMarkdown);
  const correctionMarkdown = cleanMarkdown(body.correctionMarkdown);

  if (submissionType === 'new_solution') {
    if (!title || !universityId || !departmentId || !year) {
      return { error: errorResponse(400, 'missing_document_meta', 'Title, university, department, and year are required.') };
    }
    if (!descriptionMarkdown && !kaiMarkdown) {
      return { error: errorResponse(400, 'missing_markdown', 'Description or Kai markdown is required.') };
    }
  }

  if (submissionType === 'correction') {
    if (!targetDocId || !correctionMarkdown) {
      return { error: errorResponse(400, 'missing_correction', 'Target document and correction markdown are required.') };
    }
  }

  const payload: SubmissionPayload = {
    version: 1,
    submissionId: '',
    submissionType,
    createdAt: now,
    publicAuthor: authorName,
    cla: {
      acceptedAt: now,
      statement: 'I have read and agree to The Kai Project CLA.',
    },
    document: {
      title,
      sidebarLabel,
      universityId,
      departmentId,
      programId,
      year,
      fileSlug,
      tags,
      targetDocId,
      targetTitle,
    },
    content: {
      descriptionMarkdown,
      kaiMarkdown,
      correctionMarkdown,
    },
  };

  return { payload };
}

async function ensureLabels() {
  if (!CONTENT_BOT_TOKEN) return;
  for (const label of SUBMISSION_LABELS) {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPOSITORY}/labels`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CONTENT_BOT_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify(label),
    });
    if (!res.ok && res.status !== 422) {
      console.warn(`Failed to ensure label ${label.name}: ${res.status}`);
    }
  }
}

async function createGitHubIssue(payload: SubmissionPayload, signature: string) {
  if (!CONTENT_BOT_TOKEN) {
    return { response: errorResponse(500, 'github_token_missing', 'CONTENT_BOT_TOKEN is not configured.') };
  }

  await ensureLabels();
  const labels = [
    payload.submissionType === 'new_solution'
      ? 'submission:new-solution'
      : 'submission:correction',
  ];

  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPOSITORY}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CONTENT_BOT_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      title: submissionTitle(payload),
      body: buildIssueBody(payload, signature),
      labels,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = typeof data?.message === 'string' ? data.message : 'Failed to create GitHub issue.';
    return { response: errorResponse(502, 'github_issue_failed', message) };
  }

  return {
    issue: {
      number: data.number,
      url: data.html_url,
    },
  };
}

async function listSubmissions(userId: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const { data, error } = await supabase
    .from('content_submissions')
    .select('id,submission_type,status,title,target_doc_id,issue_number,issue_url,pr_number,pr_url,failure_reason,updated_at,created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) return submissionDatabaseErrorResponse(error, 'submission_query_failed');
  return jsonResponse({ submissions: (data || []).map(publicSubmission) });
}

async function createSubmission(userId: string, body: Record<string, unknown>) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');
  if (!CLA_ATTESTATION_SECRET) {
    return errorResponse(500, 'attestation_secret_missing', 'CLA_ATTESTATION_SECRET is not configured.');
  }

  const validation = validateSubmission(body);
  if ('error' in validation) return validation.error;
  const payload = validation.payload;

  const rowPayload = {
    user_id: userId,
    submission_type: payload.submissionType,
    status: 'pending_issue',
    title: payload.document.title || payload.document.targetTitle || payload.document.targetDocId,
    public_author: payload.publicAuthor,
    university_id: payload.document.universityId,
    department_id: payload.document.departmentId,
    program_id: payload.document.programId,
    year: payload.document.year,
    file_slug: payload.document.fileSlug,
    target_doc_id: payload.document.targetDocId,
    target_title: payload.document.targetTitle,
    tags: payload.document.tags,
    description_markdown: payload.content.descriptionMarkdown,
    kai_markdown: payload.content.kaiMarkdown,
    correction_markdown: payload.content.correctionMarkdown,
    cla_accepted_at: payload.cla.acceptedAt,
  };

  const { data: inserted, error: insertError } = await supabase
    .from('content_submissions')
    .insert(rowPayload)
    .select('id')
    .single();

  if (insertError) return submissionDatabaseErrorResponse(insertError, 'submission_insert_failed');

  payload.submissionId = inserted.id;
  const canonicalPayload = stableStringify(payload);
  const signature = await hmacSha256Hex(CLA_ATTESTATION_SECRET, canonicalPayload);
  const payloadHash = await sha256Hex(canonicalPayload);

  const issueResult = await createGitHubIssue(payload, signature);
  if ('response' in issueResult) {
    await supabase
      .from('content_submissions')
      .update({
        status: 'failed',
        failure_reason: 'GitHub issue creation failed.',
        payload_hash: payloadHash,
      })
      .eq('id', inserted.id);
    return issueResult.response;
  }

  const { data: updated, error: updateError } = await supabase
    .from('content_submissions')
    .update({
      status: 'issue_created',
      issue_number: issueResult.issue.number,
      issue_url: issueResult.issue.url,
      payload_hash: payloadHash,
      payload_signature: signature,
    })
    .eq('id', inserted.id)
    .select('id,submission_type,status,title,target_doc_id,issue_number,issue_url,pr_number,pr_url,failure_reason,updated_at,created_at')
    .single();

  if (updateError) return submissionDatabaseErrorResponse(updateError, 'submission_update_failed');
  return jsonResponse({ submission: publicSubmission(updated) }, 201);
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    const status = isAllowedOrigin(req) ? 200 : 403;
    return new Response(status === 200 ? 'ok' : 'forbidden', { status, headers: corsHeadersFor(req) });
  }

  if (!isAllowedOrigin(req)) {
    return withCors(req, errorResponse(403, 'origin_not_allowed', 'Origin is not allowed.'));
  }

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return withCors(req, errorResponse(500, 'server_not_configured', 'Supabase Edge Function is not configured.'));
  }

  const auth = await requireUser(req);
  if ('response' in auth) return withCors(req, auth.response);

  try {
    if (req.method === 'GET') return withCors(req, await listSubmissions(auth.user.id));
    if (req.method === 'POST') {
      const body = await readJsonBody(req);
      return withCors(req, await createSubmission(auth.user.id, body));
    }
    return withCors(req, errorResponse(405, 'method_not_allowed', 'Method not allowed.'));
  } catch (error) {
    console.error(error);
    return withCors(req, errorResponse(500, 'internal_error', 'Content submission request failed.'));
  }
});
