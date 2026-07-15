type IssueSubmissionPayload = {
  version: number;
  submissionId: string;
  submissionType: 'new_solution' | 'correction';
  createdAt: string;
  publicAuthor: string;
  cla: {
    acceptedAt: string;
    statement: string;
  };
  document: {
    title: string;
    sidebarLabel: string;
    targetTitle: string;
    targetDocId: string;
    universityId: string;
    departmentId: string;
    programId: string;
    year: number | null;
    fileSlug: string;
    tags: string[];
  };
  content: {
    descriptionMarkdown: string;
    kaiMarkdown: string;
  };
  correction: null | {
    sourcePath: string;
    baseBlobSha: string;
    changes: unknown[];
    conflict: boolean;
  };
};

function base64Url(input: string) {
  const bytes = new TextEncoder().encode(input);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

export function stableStringify(value: unknown): string {
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

function markdownFenceFor(value: string) {
  const fenceFor = (marker: '`' | '~') => {
    const runs = value.match(new RegExp(`\\${marker}+`, 'g')) || [];
    const length = runs.reduce((max, run) => Math.max(max, run.length + 1), 3);
    return marker.repeat(length);
  };
  const backticks = fenceFor('`');
  const tildes = fenceFor('~');
  return backticks.length <= tildes.length ? backticks : tildes;
}

function markdownBlock(name: 'description' | 'kai', value: string) {
  const fence = markdownFenceFor(value);
  return `<!-- kai-submission-${name}:start -->
${fence}markdown
${value}
${fence}
<!-- kai-submission-${name}:end -->`;
}

function payloadForIssue(payload: IssueSubmissionPayload) {
  if (payload.submissionType !== 'new_solution') return payload;
  return {
    ...payload,
    content: {
      descriptionMarkdown: '',
      kaiMarkdown: '',
    },
  };
}

export function buildIssueBody(
  payload: IssueSubmissionPayload,
  signature: string,
  correctionDiff = '',
) {
  const label = payload.submissionType === 'new_solution' ? '新增题解' : '纠错/补充';
  const target = payload.submissionType === 'new_solution'
    ? [
      payload.document.universityId,
      payload.document.departmentId,
      payload.document.programId,
      payload.document.year ? String(payload.document.year) : '',
    ].filter(Boolean).join(' / ')
    : payload.document.targetDocId;
  const encodedPayload = base64Url(stableStringify(payloadForIssue(payload)));
  const signedMarkers = `<!-- kai-submission-payload:${encodedPayload} -->
<!-- kai-submission-signature:${signature} -->`;

  if (payload.submissionType === 'correction') {
    const correction = payload.correction;
    if (!correction) throw new Error('Correction payload is missing patch data.');
    const fence = markdownFenceFor(correctionDiff);
    const conflictNotice = correction.conflict
      ? `\n> [!WARNING]\n> 提交者编辑期间原文已经变化。本 Issue 已标记为冲突，不能直接自动转换为 PR。\n`
      : '';

    return `${signedMarkers}

## 投稿类型
${label}

## 目标
\`${correction.sourcePath}\`

## 公开署名
${payload.publicAuthor}

## 标题
${payload.document.targetTitle || payload.document.targetDocId}
${conflictNotice}
## 基准版本
\`${correction.baseBlobSha}\`

## 修改 Diff

${fence}diff
${correctionDiff}
${fence}

## CLA
投稿者已在站内确认：I have read and agree to The Kai Project CLA.

确认时间：${payload.cla.acceptedAt}
`;
  }

  return `${signedMarkers}

## 投稿类型
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

${markdownBlock('description', payload.content.descriptionMarkdown)}

### Kai

${markdownBlock('kai', payload.content.kaiMarkdown)}
`;
}
