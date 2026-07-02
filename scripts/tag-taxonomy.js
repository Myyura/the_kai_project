const taxonomy = require('../src/data/tagTaxonomy');

function normalizeTagValue(value) {
  return String(value ?? '').trim();
}

function addUnique(list, value) {
  if (value && !list.includes(value)) list.push(value);
}

function buildTagLookup() {
  const subjectTags = new Map();
  const schoolTags = new Map();
  const schoolTagsByUniversityId = new Map();
  const subsubjectTags = new Map();
  const topicTags = new Map();
  const aliasTags = new Map();

  for (const [id, meta] of Object.entries(taxonomy.subjects || {})) {
    subjectTags.set(id, { kind: 'subject', id, ...meta });
  }

  for (const [id, meta] of Object.entries(taxonomy.schoolTags || {})) {
    schoolTags.set(id, { kind: 'school', id, ...meta });
    if (meta.universityId) {
      schoolTagsByUniversityId.set(meta.universityId, { kind: 'school', id, ...meta });
    }
    for (const alias of meta.aliases || []) {
      if (!schoolTags.has(alias) && !aliasTags.has(alias)) {
        aliasTags.set(alias, { kind: 'school', id, aliasOf: id, ...meta });
      }
    }
  }

  for (const [id, meta] of Object.entries(taxonomy.subsubjects || {})) {
    const subjectId = meta.subject;
    subsubjectTags.set(id, { kind: 'subsubject', id, subjectId, ...meta });
  }

  for (const [id, meta] of Object.entries(taxonomy.topics || {})) {
    const subsubjectId = meta.subsubject || null;
    const subsubject = subsubjectId ? subsubjectTags.get(subsubjectId) : null;
    const primarySubjectId = subsubject?.subjectId || meta.subjects?.[0] || null;
    const subjectIds = meta.subjects?.length ? meta.subjects : [primarySubjectId].filter(Boolean);
    const shortId = getTopicShortId(id, meta);
    topicTags.set(id, {
      kind: 'topic',
      id,
      shortId,
      subsubjectId,
      primarySubjectId,
      subjectIds,
      ...meta,
    });
  }

  return {
    subjectTags,
    schoolTags,
    schoolTagsByUniversityId,
    subsubjectTags,
    topicTags,
    aliasTags,
  };
}

const LOOKUP = buildTagLookup();

function getTopicShortId(topicId, topic = {}) {
  const prefix = topic.subsubject ? `${topic.subsubject}.` : '';
  return prefix && topicId.startsWith(prefix)
    ? topicId.slice(prefix.length)
    : topicId.split('.').pop();
}

function classifyTag(rawTag) {
  const tag = normalizeTagValue(rawTag);
  if (!tag) return { kind: 'empty', id: tag };

  if (LOOKUP.subjectTags.has(tag)) return LOOKUP.subjectTags.get(tag);
  if (LOOKUP.schoolTags.has(tag)) return LOOKUP.schoolTags.get(tag);
  if (LOOKUP.subsubjectTags.has(tag)) return LOOKUP.subsubjectTags.get(tag);
  if (LOOKUP.topicTags.has(tag)) return LOOKUP.topicTags.get(tag);
  if (LOOKUP.aliasTags.has(tag)) return LOOKUP.aliasTags.get(tag);
  return { kind: 'unknown', id: tag };
}

function isSchoolTag(tag) {
  return classifyTag(tag).kind === 'school';
}

function isLearningTag(tag) {
  const info = classifyTag(tag);
  return info.kind === 'subsubject' || info.kind === 'topic' || info.kind === 'unknown';
}

function isTopicLikeTag(tag) {
  return isLearningTag(tag);
}

function getSchoolTagForUniversity(universityId) {
  if (!universityId) return null;
  return LOOKUP.schoolTagsByUniversityId.get(universityId) || null;
}

function getSubsubjectInfo(subsubjectId) {
  return LOOKUP.subsubjectTags.get(subsubjectId) || null;
}

function getTopicSubjectIds(info) {
  if (!info || info.kind !== 'topic') return [];
  return info.subjectIds?.length
    ? info.subjectIds
    : [info.primarySubjectId].filter(Boolean);
}

function resolveDocumentTags(tags, { universityId } = {}) {
  const schoolTags = [];
  const learningTags = [];
  const subjectIds = [];
  const subsubjectIds = [];
  const topicIds = [];

  const derivedSchool = getSchoolTagForUniversity(universityId);
  if (derivedSchool) addUnique(schoolTags, derivedSchool.id);

  for (const rawTag of tags || []) {
    const tag = normalizeTagValue(rawTag);
    if (!tag) continue;

    const info = classifyTag(tag);
    if (info.kind === 'school') {
      addUnique(schoolTags, info.id);
      continue;
    }

    if (info.kind === 'subsubject') {
      addUnique(subjectIds, info.subjectId);
      addUnique(subsubjectIds, info.id);
      learningTags.push({
        kind: 'subsubject',
        tag,
        id: info.id,
        subject_id: info.subjectId,
      });
      continue;
    }

    if (info.kind === 'topic') {
      for (const subjectId of getTopicSubjectIds(info)) addUnique(subjectIds, subjectId);
      addUnique(subsubjectIds, info.subsubjectId);
      addUnique(topicIds, info.id);
      learningTags.push({
        kind: 'topic',
        tag,
        id: info.id,
        short_id: info.shortId,
        subject_ids: getTopicSubjectIds(info),
        primary_subject_id: info.primarySubjectId,
        subsubject_id: info.subsubjectId,
      });
      continue;
    }

    if (info.kind === 'unknown') {
      learningTags.push({
        kind: 'pending',
        tag,
        id: tag,
      });
    }
  }

  return {
    school_tags: schoolTags,
    learning_tags: learningTags,
    subject_ids: subjectIds,
    subsubject_ids: subsubjectIds,
    topic_ids: topicIds,
  };
}

function validateTags(tags) {
  const issues = [];
  const seen = new Map();
  const subsubjectTags = new Set();
  const topicSubsubjects = new Map();
  let learningTagCount = 0;
  let topicCount = 0;
  let unknownTagCount = 0;

  for (const tag of tags || []) {
    const normalized = normalizeTagValue(tag);
    if (!normalized) continue;

    if (seen.has(normalized)) {
      issues.push({
        severity: 'ERROR',
        rule: 'frontmatter-tags-duplicate',
        message: `重复 tag: ${normalized}`,
      });
    } else {
      seen.set(normalized, true);
    }

    const info = classifyTag(normalized);
    if (info.kind === 'subject') {
      issues.push({
        severity: 'ERROR',
        rule: 'frontmatter-tags-subject-explicit',
        message: `一级学科 tag "${normalized}" 会由子科目/考点自动派生，请不要手写。`,
      });
    }

    if (info.kind === 'unknown') {
      unknownTagCount += 1;
      issues.push({
        severity: 'WARNING',
        rule: 'frontmatter-tags-unknown',
        message: `新 tag "${normalized}" 暂未收录在当前 tag 列表中；请对比是否存在拼写错误，或联系管理员审查并补充该 tag。`,
      });
    }

    if (info.kind === 'subsubject') {
      subsubjectTags.add(info.id);
    }

    if (info.kind === 'topic') {
      topicCount += 1;
      if (info.subsubjectId) {
        if (!topicSubsubjects.has(info.subsubjectId)) topicSubsubjects.set(info.subsubjectId, []);
        topicSubsubjects.get(info.subsubjectId).push(info.id);
      }
    }

    if (isLearningTag(normalized)) learningTagCount += 1;
  }

  for (const subsubjectId of subsubjectTags) {
    const topicIds = topicSubsubjects.get(subsubjectId) || [];
    if (topicIds.length > 0) {
      issues.push({
        severity: 'ERROR',
        rule: 'frontmatter-tags-redundant-subsubject',
        message: `已存在 "${subsubjectId}" 下的具体考点，请移除冗余子科目 tag "${subsubjectId}"。`,
      });
    }
  }

  if ((tags || []).length > 0 && learningTagCount === 0) {
    issues.push({
      severity: 'WARNING',
      rule: 'frontmatter-tags-no-learning-tag',
      message: '当前文档只有学校/位置类 tag，建议至少补充 1 个子科目或考点 tag。',
    });
  } else if ((tags || []).length > 0 && topicCount === 0 && unknownTagCount === 0) {
    issues.push({
      severity: 'WARNING',
      rule: 'frontmatter-tags-no-topic',
      message: '当前文档已有子科目 tag；如果题目线索足够，建议继续补充 1 个更具体的考点 tag。',
    });
  }

  return issues;
}

function getKnownTagIds() {
  return {
    schools: Array.from(LOOKUP.schoolTags.keys()),
    subjects: Array.from(LOOKUP.subjectTags.keys()),
    subsubjects: Array.from(LOOKUP.subsubjectTags.keys()),
    topics: Array.from(LOOKUP.topicTags.keys()),
  };
}

module.exports = {
  taxonomy,
  classifyTag,
  getTopicShortId,
  getKnownTagIds,
  getSchoolTagForUniversity,
  getSubsubjectInfo,
  isSchoolTag,
  isLearningTag,
  isTopicLikeTag,
  resolveDocumentTags,
  validateTags,
};
