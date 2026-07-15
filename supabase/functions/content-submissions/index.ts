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
import {
  buildLineChanges,
  formatUnifiedDiff,
  normalizeMarkdown,
  type CorrectionChange,
} from './diff.ts';
import { buildIssueBody, stableStringify } from './issue.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const CONTENT_BOT_TOKEN = Deno.env.get('CONTENT_BOT_TOKEN') || '';
const CLA_ATTESTATION_SECRET = Deno.env.get('CLA_ATTESTATION_SECRET') || '';
const CONTENT_SUBMISSION_CALLBACK_SECRET = Deno.env.get('CONTENT_SUBMISSION_CALLBACK_SECRET') || '';
const GITHUB_REPOSITORY = Deno.env.get('GITHUB_REPOSITORY') || 'Myyura/the_kai_project';
const GITHUB_CONTENT_REF = Deno.env.get('GITHUB_CONTENT_REF') || 'main';
const MAX_MARKDOWN_LENGTH = 60000;
const MAX_NEW_SOLUTION_MARKDOWN_LENGTH = 50000;
const MAX_TEXT_LENGTH = 240;
const MAX_ISSUE_BODY_LENGTH = 62000;

const SUBMISSION_LABELS = [
  { name: 'submission:new-solution', color: '2e8555', description: '站内投稿：新增题解' },
  { name: 'submission:correction', color: 'd97706', description: '站内投稿：纠错或补充' },
  { name: 'submission:needs-info', color: 'facc15', description: '投稿需要补充信息' },
  { name: 'submission:ready-for-pr', color: '2563eb', description: '投稿已确认，可以生成 PR' },
  { name: 'submission:converted', color: '6b7280', description: '投稿已转换为 PR' },
  { name: 'submission:conflict', color: 'b91c1c', description: '投稿基准版本或目标路径与当前仓库冲突' },
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

function getApiPath(req: Request) {
  const url = new URL(req.url);
  const marker = '/content-submissions';
  const markerIndex = url.pathname.indexOf(marker);
  const path = markerIndex >= 0
    ? url.pathname.slice(markerIndex + marker.length)
    : url.pathname;
  return path || '/';
}

type SubmissionType = 'new_solution' | 'correction';

type SubmissionPayload = {
  version: 3;
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
  };
  correction: null | {
    sourcePath: string;
    baseBlobSha: string;
    changes: CorrectionChange[];
    conflict: boolean;
  };
};

function cleanText(value: unknown, maxLength = MAX_TEXT_LENGTH) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function newSolutionMarkdownFrom(value: unknown) {
  return typeof value === 'string' ? normalizeMarkdown(value).trim() : '';
}

function proposedMarkdownFrom(value: unknown): { markdown: string } | { error: string } {
  if (typeof value !== 'string') return { error: 'Proposed Markdown is required.' };
  const markdown = normalizeMarkdown(value);
  if (markdown.length > MAX_MARKDOWN_LENGTH) {
    return { error: `Proposed Markdown must be at most ${MAX_MARKDOWN_LENGTH} characters.` };
  }
  return { markdown };
}

function rejectDangerousMdx(markdown: string, fieldName = 'Proposed Markdown') {
  const lines = normalizeMarkdown(markdown).split('\n');
  let fence: { marker: string; length: number } | null = null;
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
      return `${fieldName} contains MDX import/export at line ${index + 1}.`;
    }
    if (/<\/?[A-Z][A-Za-z0-9_.:-]*(?:\s[^<>]*?)?\/?>/.test(line)) {
      return `${fieldName} contains JSX-like markup at line ${index + 1}.`;
    }
  }
  return '';
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

function sourcePathForDocId(value: unknown, sourcePathValue?: unknown) {
  const targetDocId = normalizeDocId(value);
  if (
    !targetDocId
    || !/^[A-Za-z0-9._/-]+$/.test(targetDocId)
    || targetDocId.split('/').some((segment) => !segment || segment === '.' || segment === '..')
  ) {
    return null;
  }
  const requestedPath = cleanText(sourcePathValue, 500).replace(/^@site\//, '').replace(/^\/+/, '');
  const sourcePath = requestedPath || `docs/${targetDocId}.md`;
  if (
    !/^docs\/[A-Za-z0-9._/-]+\.mdx?$/.test(sourcePath)
    || sourcePath.split('/').some((segment) => !segment || segment === '.' || segment === '..')
    || sourcePath.replace(/^docs\//, '').replace(/\.mdx?$/, '') !== targetDocId
  ) {
    return null;
  }
  return { targetDocId, sourcePath };
}

function decodeBase64Utf8(value: unknown) {
  if (typeof value !== 'string') throw new Error('GitHub returned invalid base64 content.');
  const binary = atob(value.replace(/\s/g, ''));
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return new TextDecoder().decode(bytes);
}

function githubHeaders() {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (CONTENT_BOT_TOKEN) headers.Authorization = `Bearer ${CONTENT_BOT_TOKEN}`;
  return headers;
}

class GitHubContentError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function readGitHubResponse(res: Response) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = typeof data?.message === 'string' ? data.message : 'GitHub content request failed.';
    throw new GitHubContentError(res.status, message);
  }
  return data;
}

async function fetchGitHubDocument(sourcePath: string) {
  const encodedPath = sourcePath.split('/').map(encodeURIComponent).join('/');
  const url = `https://api.github.com/repos/${GITHUB_REPOSITORY}/contents/${encodedPath}?ref=${encodeURIComponent(GITHUB_CONTENT_REF)}`;
  const data = await readGitHubResponse(await fetch(url, { headers: githubHeaders() }));
  if (data?.type !== 'file' || typeof data?.sha !== 'string') {
    throw new GitHubContentError(404, 'Target document was not found.');
  }
  return {
    path: sourcePath,
    blobSha: data.sha.toLowerCase(),
    content: normalizeMarkdown(decodeBase64Utf8(data.content)),
  };
}

async function fetchGitHubBlob(blobSha: string) {
  const url = `https://api.github.com/repos/${GITHUB_REPOSITORY}/git/blobs/${encodeURIComponent(blobSha)}`;
  const data = await readGitHubResponse(await fetch(url, { headers: githubHeaders() }));
  if (typeof data?.sha !== 'string' || data.sha.toLowerCase() !== blobSha.toLowerCase()) {
    throw new GitHubContentError(404, 'The source version no longer exists.');
  }
  return normalizeMarkdown(decodeBase64Utf8(data.content));
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

function submissionTitle(payload: SubmissionPayload) {
  const prefix = payload.submissionType === 'new_solution'
    ? '新增题解投稿'
    : '题解纠错投稿';
  const title = payload.submissionType === 'new_solution'
    ? payload.document.title
    : (payload.document.targetTitle || payload.document.targetDocId);
  return `[${prefix}] ${title}`.slice(0, 240);
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
    correctionConflict: Boolean(row.correction_conflict),
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

function requireCallbackSecret(req: Request) {
  if (!CONTENT_SUBMISSION_CALLBACK_SECRET) {
    return { response: errorResponse(500, 'callback_secret_missing', 'CONTENT_SUBMISSION_CALLBACK_SECRET is not configured.') };
  }

  const headerSecret = req.headers.get('x-kai-submission-callback-secret')?.trim() || '';
  const bearerSecret = getBearerToken(req) || '';
  const supplied = headerSecret || bearerSecret;
  if (!supplied || supplied !== CONTENT_SUBMISSION_CALLBACK_SECRET) {
    return { response: errorResponse(403, 'invalid_callback_secret', 'Invalid callback secret.') };
  }

  return { ok: true };
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

function validateSubmission(body: Record<string, unknown>, publicAuthor: string) {
  const submissionType = cleanText(body.submissionType, 40) as SubmissionType;
  if (submissionType !== 'new_solution' && submissionType !== 'correction') {
    return { error: errorResponse(400, 'invalid_type', 'Submission type must be new_solution or correction.') };
  }

  if (!body.claAccepted) {
    return { error: errorResponse(400, 'cla_required', 'CLA confirmation is required.') };
  }

  const now = new Date().toISOString();
  const isNewSolution = submissionType === 'new_solution';
  const title = isNewSolution ? cleanText(body.title, 180) : '';
  const sidebarLabel = isNewSolution ? (cleanText(body.sidebarLabel, 120) || title) : '';
  const universityId = isNewSolution ? cleanText(body.universityId, 120) : '';
  const departmentId = isNewSolution ? cleanText(body.departmentId, 120) : '';
  const programId = isNewSolution ? cleanText(body.programId, 160) : '';
  const rawYear = isNewSolution ? Number(body.year) : NaN;
  const year = Number.isInteger(rawYear) && rawYear >= 1900 && rawYear <= 2100 ? rawYear : null;
  const fileSlug = isNewSolution ? cleanSlug(body.fileSlug) : '';
  const targetDocId = isNewSolution ? '' : normalizeDocId(body.targetDocId);
  const targetTitle = isNewSolution ? '' : cleanText(body.targetTitle, 180);
  const tags = isNewSolution ? normalizeTags(body.tags) : [];
  const descriptionMarkdown = isNewSolution ? newSolutionMarkdownFrom(body.descriptionMarkdown) : '';
  const kaiMarkdown = isNewSolution ? newSolutionMarkdownFrom(body.kaiMarkdown) : '';

  if (isNewSolution) {
    if (!title || !universityId || !departmentId || !year) {
      return { error: errorResponse(400, 'missing_document_meta', 'Title, university, department, and year are required.') };
    }
    if (!descriptionMarkdown && !kaiMarkdown) {
      return { error: errorResponse(400, 'missing_markdown', 'Description or Kai markdown is required.') };
    }
    if (descriptionMarkdown.length + kaiMarkdown.length > MAX_NEW_SOLUTION_MARKDOWN_LENGTH) {
      return {
        error: errorResponse(
          413,
          'new_solution_markdown_too_large',
          `Description and Kai must be at most ${MAX_NEW_SOLUTION_MARKDOWN_LENGTH} characters in total.`,
        ),
      };
    }
    const unsafeDescription = rejectDangerousMdx(descriptionMarkdown, 'Description');
    if (unsafeDescription) {
      return { error: errorResponse(400, 'unsafe_description_markdown', unsafeDescription) };
    }
    const unsafeKai = rejectDangerousMdx(kaiMarkdown, 'Kai');
    if (unsafeKai) {
      return { error: errorResponse(400, 'unsafe_kai_markdown', unsafeKai) };
    }
  }

  if (submissionType === 'correction') {
    if (!sourcePathForDocId(targetDocId, body.sourcePath)) {
      return { error: errorResponse(400, 'invalid_target', 'A valid target document is required.') };
    }
  }

  const payload: SubmissionPayload = {
    version: 3,
    submissionId: '',
    submissionType,
    createdAt: now,
    publicAuthor,
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
    },
    correction: null,
  };

  return { payload };
}

async function prepareCorrection(
  payload: SubmissionPayload,
  body: Record<string, unknown>,
): Promise<{ correctionDiff: string } | { error: Response }> {
  const target = sourcePathForDocId(payload.document.targetDocId, body.sourcePath);
  if (!target) {
    return { error: errorResponse(400, 'invalid_target', 'A valid target document is required.') };
  }

  const baseBlobSha = typeof body.baseBlobSha === 'string'
    ? body.baseBlobSha.trim().toLowerCase()
    : '';
  if (!/^[a-f0-9]{40}$/.test(baseBlobSha)) {
    return { error: errorResponse(400, 'invalid_base_sha', 'A valid source blob SHA is required.') };
  }

  const proposedResult = proposedMarkdownFrom(body.proposedMarkdown);
  if ('error' in proposedResult) {
    return { error: errorResponse(400, 'invalid_proposed_markdown', proposedResult.error) };
  }
  const dangerousMdx = rejectDangerousMdx(proposedResult.markdown, 'Proposed Markdown');
  if (dangerousMdx) {
    return { error: errorResponse(400, 'unsafe_proposed_markdown', dangerousMdx) };
  }

  try {
    const [baseMarkdown, currentDocument] = await Promise.all([
      fetchGitHubBlob(baseBlobSha),
      fetchGitHubDocument(target.sourcePath),
    ]);
    const changes = buildLineChanges(baseMarkdown, proposedResult.markdown);
    if (changes.length === 0) {
      return { error: errorResponse(400, 'no_correction_changes', 'The proposed document does not contain any changes.') };
    }

    const correctionDiff = formatUnifiedDiff(baseMarkdown, proposedResult.markdown, target.sourcePath);
    payload.document.targetDocId = target.targetDocId;
    payload.correction = {
      sourcePath: target.sourcePath,
      baseBlobSha,
      changes,
      conflict: currentDocument.blobSha !== baseBlobSha,
    };
    return { correctionDiff };
  } catch (error) {
    if (error instanceof GitHubContentError) {
      const status = error.status === 404 ? 404 : 502;
      return { error: errorResponse(status, 'github_source_failed', error.message) };
    }
    throw error;
  }
}

async function getCorrectionSource(body: Record<string, unknown>) {
  const target = sourcePathForDocId(body.targetDocId, body.sourcePath);
  if (!target) return errorResponse(400, 'invalid_target', 'A valid target document is required.');
  try {
    const source = await fetchGitHubDocument(target.sourcePath);
    return jsonResponse({ source });
  } catch (error) {
    if (error instanceof GitHubContentError) {
      const status = error.status === 404 ? 404 : 502;
      return errorResponse(status, 'github_source_failed', error.message);
    }
    throw error;
  }
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

async function createGitHubIssue(payload: SubmissionPayload, signature: string, correctionDiff = '') {
  if (!CONTENT_BOT_TOKEN) {
    return { response: errorResponse(500, 'github_token_missing', 'CONTENT_BOT_TOKEN is not configured.') };
  }

  await ensureLabels();
  const labels = [
    payload.submissionType === 'new_solution'
      ? 'submission:new-solution'
      : 'submission:correction',
  ];
  if (payload.correction?.conflict) labels.push('submission:conflict');
  const issueBody = buildIssueBody(payload, signature, correctionDiff);
  if (issueBody.length > MAX_ISSUE_BODY_LENGTH) {
    const message = payload.submissionType === 'new_solution'
      ? 'The submitted Markdown is too large for a GitHub Issue.'
      : 'The correction diff is too large for a GitHub Issue.';
    return {
      response: errorResponse(413, 'issue_payload_too_large', message),
    };
  }

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
      body: issueBody,
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
    .select('id,submission_type,status,title,target_doc_id,issue_number,issue_url,pr_number,pr_url,failure_reason,correction_conflict,updated_at,created_at')
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

  const { data: profile, error: profileError } = await supabase
    .from('user_public_profiles')
    .select('nickname,discriminator,nickname_confirmed_at')
    .eq('user_id', userId)
    .maybeSingle();
  if (profileError) return submissionDatabaseErrorResponse(profileError, 'profile_query_failed');
  if (!profile?.nickname_confirmed_at) {
    return errorResponse(
      409,
      'nickname_confirmation_required',
      '请先在个人中心确认公开昵称，再提交题解或纠错。',
    );
  }
  const publicAuthor = `${profile.nickname} #${String(profile.discriminator).padStart(5, '0')}`;

  const validation = validateSubmission(body, publicAuthor);
  if ('error' in validation) return validation.error;
  const payload = validation.payload;
  let correctionDiff = '';
  if (payload.submissionType === 'correction') {
    const correctionResult = await prepareCorrection(payload, body);
    if ('error' in correctionResult) return correctionResult.error;
    correctionDiff = correctionResult.correctionDiff;
  }

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
    correction_base_sha: payload.correction?.baseBlobSha || '',
    correction_patch: payload.correction?.changes || [],
    correction_conflict: payload.correction?.conflict || false,
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

  const issueResult = await createGitHubIssue(payload, signature, correctionDiff);
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
    .select('id,submission_type,status,title,target_doc_id,issue_number,issue_url,pr_number,pr_url,failure_reason,correction_conflict,updated_at,created_at')
    .single();

  if (updateError) return submissionDatabaseErrorResponse(updateError, 'submission_update_failed');

  const { error: reputationError } = await supabase.rpc('refresh_user_reputation', {
    p_user_id: userId,
  });
  if (reputationError) {
    console.error('reputation_refresh_failed', reputationError);
  }

  return jsonResponse({
    submission: publicSubmission(updated),
    conflict: Boolean(payload.correction?.conflict),
  }, 201);
}

function parsePositiveInteger(value: unknown) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) return null;
  return parsed;
}

async function markSubmissionConverted(body: Record<string, unknown>) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase Edge Function is not configured.');

  const submissionId = cleanText(body.submissionId, 80);
  const issueNumber = parsePositiveInteger(body.issueNumber);
  const prNumber = parsePositiveInteger(body.prNumber);
  const prUrl = cleanText(body.prUrl, 500);

  if (!submissionId) {
    return errorResponse(400, 'missing_submission_id', 'submissionId is required.');
  }
  if (!issueNumber) {
    return errorResponse(400, 'invalid_issue_number', 'issueNumber must be a positive integer.');
  }
  if (!prNumber) {
    return errorResponse(400, 'invalid_pr_number', 'prNumber must be a positive integer.');
  }
  const expectedPrUrl = `https://github.com/${GITHUB_REPOSITORY}/pull/${prNumber}`;
  if (prUrl.toLowerCase() !== expectedPrUrl.toLowerCase()) {
    return errorResponse(400, 'invalid_pr_url', 'prUrl must match the configured GitHub repository and PR number.');
  }

  const { data, error } = await supabase
    .from('content_submissions')
    .update({
      status: 'converted',
      pr_number: prNumber,
      pr_url: prUrl,
      failure_reason: null,
    })
    .eq('id', submissionId)
    .eq('issue_number', issueNumber)
    .select('id,user_id,submission_type,status,title,target_doc_id,issue_number,issue_url,pr_number,pr_url,failure_reason,correction_conflict,updated_at,created_at')
    .maybeSingle();

  if (error) return submissionDatabaseErrorResponse(error, 'submission_conversion_update_failed');
  if (!data) {
    return errorResponse(404, 'submission_not_found', 'Matching submission was not found.');
  }

  if (typeof data.user_id === 'string' && data.user_id) {
    const { error: reputationError } = await supabase.rpc('refresh_user_reputation', {
      p_user_id: data.user_id,
    });
    if (reputationError) {
      console.error('reputation_refresh_failed', reputationError);
    }
  }

  return jsonResponse({ submission: publicSubmission(data) });
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

  const path = getApiPath(req);
  if (path === '/conversion') {
    if (req.method !== 'POST') {
      return withCors(req, errorResponse(405, 'method_not_allowed', 'Method not allowed.'));
    }

    const callbackAuth = requireCallbackSecret(req);
    if ('response' in callbackAuth) return withCors(req, callbackAuth.response);

    try {
      const body = await readJsonBody(req);
      return withCors(req, await markSubmissionConverted(body));
    } catch (error) {
      console.error(error);
      return withCors(req, errorResponse(500, 'internal_error', 'Submission conversion callback failed.'));
    }
  }

  const auth = await requireUser(req);
  if ('response' in auth) return withCors(req, auth.response);

  try {
    if (path === '/source') {
      if (req.method !== 'POST') {
        return withCors(req, errorResponse(405, 'method_not_allowed', 'Method not allowed.'));
      }
      const body = await readJsonBody(req);
      return withCors(req, await getCorrectionSource(body));
    }
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
