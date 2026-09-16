import {errorResponse} from './http.ts';

export function submissionDatabaseErrorResponse(error: unknown, operation: string) {
  const errorLike = error && typeof error === 'object'
    ? error as {code?: unknown; message?: unknown}
    : null;
  const message = typeof errorLike?.message === 'string' ? errorLike.message : '';
  const pgCode = typeof errorLike?.code === 'string' ? errorLike.code : '';

  // Keep diagnostics on the server. Postgres details can contain the complete
  // rejected row, including private submission data, so do not log or return it.
  console.error('submission_database_error', {operation, databaseCode: pgCode, message});

  if (pgCode === '42703' || pgCode === 'PGRST204') {
    if (/\bexperience_data\b/.test(message)) {
      return errorResponse(500, 'experience_schema_missing', '经验贴投稿字段缺失或 API 结构缓存尚未刷新，请管理员核对当前数据库基线与部署版本。初始化说明见 CONTRIBUTING.zh.md。');
    }
    if (/\badmission_data\b/.test(message)) {
      return errorResponse(500, 'admission_schema_missing', '投稿服务缺少 admission_data 字段或 API 结构缓存尚未刷新，请管理员核对当前数据库基线与部署版本。初始化说明见 CONTRIBUTING.zh.md。');
    }
    return errorResponse(500, 'submission_schema_outdated', '投稿服务字段与数据库不一致，请管理员检查缺失的迁移及 API 结构缓存。不要在已有数据库重跑整份 schema.sql。');
  }

  if (pgCode === '42P01' || pgCode === 'PGRST205') {
    return errorResponse(500, 'submission_schema_missing', '投稿服务无法找到所需数据表，请管理员确认 Supabase 项目、数据库迁移及 API 结构缓存。只有全新数据库才执行 src/services/schema.sql。');
  }

  if (pgCode === '42883' || pgCode === 'PGRST202') {
    return errorResponse(500, 'submission_function_missing', '投稿服务所需数据库函数缺失或 API 结构缓存尚未刷新，请管理员检查数据库迁移。');
  }

  if (pgCode === '23514') {
    if (/\bcontent_submissions_(type|status)_check\b/.test(message)) {
      return errorResponse(500, 'submission_protocol_outdated', '数据库尚未支持当前投稿类型或状态，请管理员核对 content_submissions 约束与当前数据库基线。不要在已有数据库重跑整份 schema.sql。');
    }
    return errorResponse(400, 'submission_constraint_failed', '投稿数据未通过数据库约束校验，请管理员查看 content-submissions 日志确认具体约束。');
  }

  if (pgCode === '42501') {
    return errorResponse(500, 'submission_database_permission_denied', '投稿服务数据库权限不足，请管理员检查 Edge Function 服务端凭据及数据库授权。');
  }

  return errorResponse(500, operation, '投稿服务数据库请求失败，请稍后重试；管理员可查看 content-submissions 日志中的数据库错误码。');
}
