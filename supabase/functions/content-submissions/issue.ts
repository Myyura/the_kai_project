import type { AdmissionDataSubmission } from './admission.ts';

type IssueSubmissionPayload = {
  version: number;
  submissionId: string;
  submissionType: 'new_solution' | 'correction' | 'admission_data';
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
  admissionData: AdmissionDataSubmission | null;
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

function inlineMarkdown(value: unknown, fallback = '未提供') {
  const text = String(value ?? '').trim();
  if (!text) return fallback;
  return text.replace(/\r?\n/g, ' ').replace(/\|/g, '\\|');
}

function admissionValue(value: number | null, suffix = '') {
  return value === null ? '未提供' : `${value}${suffix}`;
}

function admissionIssueBody(
  payload: IssueSubmissionPayload,
  signedMarkers: string,
) {
  const admission = payload.admissionData;
  if (!admission) throw new Error('Admission-data payload is missing structured data.');
  const existingSourceType = admission.existingSeries.sourceType || '未提供';
  const mismatchNotice = admission.sourceTypeMismatch
    ? `
> [!WARNING]
> 本次来源类型（${inlineMarkdown(admission.source.type)}）与所选现有系列（${inlineMarkdown(existingSourceType)}）不同。请人工确认应合并到原系列、拆分系列，还是仅替换单年数据；本投稿不会自动修改 JSON。
`
    : '';
  const notesFence = markdownFenceFor(admission.notes || '未提供');

  return `${signedMarkers}

## 投稿类型
招生数据补充 / 修正（仅人工审核，不自动转换为 PR）

## 目标
- 数据实体：\`${inlineMarkdown(admission.entityId)}\`
- 维护文件：\`${inlineMarkdown(admission.sourcePath)}\`
- 页面标题：${inlineMarkdown(admission.targetTitle)}
- 投稿意图：${admission.intent === 'correction' ? '修正已有数据' : '补充新数据'}

## 公开署名
${inlineMarkdown(payload.publicAuthor)}

## 数据口径
- 入学年度：${admission.admissionYear}年度
- 学位阶段：${inlineMarkdown(admission.series.degree)}
- 入试时期：${inlineMarkdown(admission.series.period)}
- 选拔类别：${inlineMarkdown(admission.series.selection)}
- 系列名称：${inlineMarkdown(admission.series.label)}
- 对应现有系列 ID：${inlineMarkdown(admission.existingSeries.id)}
- 对应现有系列名称：${inlineMarkdown(admission.existingSeries.label)}
- 对应现有系列来源类型：${inlineMarkdown(existingSourceType)}
${mismatchNotice}
## 精确数据

| 字段 | 数值 |
| --- | ---: |
| 招生名额 | ${admissionValue(admission.values.capacity, ' 人')} |
| 出愿人数 | ${admissionValue(admission.values.applicants, ' 人')} |
| 受验人数 | ${admissionValue(admission.values.examinees, ' 人')} |
| 合格人数 | ${admissionValue(admission.values.admitted, ' 人')} |
| 入学人数 | ${admissionValue(admission.values.enrolled, ' 人')} |
| 来源直接记载的倍率 | ${admissionValue(admission.values.reportedRatio, ' 倍')} |
| 倍率口径 | ${inlineMarkdown(admission.values.reportedRatioBasis)} |

> 空缺字段表示来源未公开。维护时不得按图表或其他字段反推估算。

## 来源与证据
- 来源类型：${inlineMarkdown(admission.source.type)}
- 来源标题：${inlineMarkdown(admission.source.title)}
- 来源 URL：<${admission.source.url}>
- 证据位置：${inlineMarkdown(admission.source.evidenceLocator)}

## 补充说明

${notesFence}text
${admission.notes || '未提供'}
${notesFence}

## CLA
投稿者已在站内确认：I have read and agree to The Kai Project CLA.

确认时间：${payload.cla.acceptedAt}

---
此 Issue 由站内已登录用户提交。招生数据必须由维护者核对来源后手工更新，自动投稿转换器会跳过此类型。
`;
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

  if (payload.submissionType === 'admission_data') {
    return admissionIssueBody(payload, signedMarkers);
  }

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
