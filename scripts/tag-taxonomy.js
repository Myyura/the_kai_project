const taxonomy = require('../src/data/tagTaxonomy.json');

function normalizeTagValue(value) {
  return String(value ?? '').trim();
}

function buildTagLookup() {
  const schoolTags = new Map();
  const topicTags = new Map();
  const aliasTags = new Map();

  for (const [id, meta] of Object.entries(taxonomy.schoolTags || {})) {
    schoolTags.set(id, { kind: 'school', id, ...meta });
    for (const alias of meta.aliases || []) {
      if (!schoolTags.has(alias) && !aliasTags.has(alias)) {
        aliasTags.set(alias, { kind: 'school', id, aliasOf: id, ...meta });
      }
    }
  }

  for (const [id, meta] of Object.entries(taxonomy.topics || {})) {
    topicTags.set(id, { kind: 'topic', id, ...meta });
    for (const alias of meta.aliases || []) {
      if (!schoolTags.has(alias) && !topicTags.has(alias) && !aliasTags.has(alias)) {
        aliasTags.set(alias, { kind: 'topic', id, aliasOf: id, ...meta });
      }
    }
  }

  return { schoolTags, topicTags, aliasTags };
}

const LOOKUP = buildTagLookup();

function classifyTag(rawTag) {
  const tag = normalizeTagValue(rawTag);
  if (!tag) return { kind: 'empty', id: tag };

  const deprecated = taxonomy.deprecatedTags?.[tag];
  if (deprecated) {
    return {
      kind: 'deprecated',
      id: tag,
      replaceWith: deprecated.replaceWith,
      reason: deprecated.reason,
    };
  }

  if (LOOKUP.schoolTags.has(tag)) return LOOKUP.schoolTags.get(tag);
  if (LOOKUP.topicTags.has(tag)) return LOOKUP.topicTags.get(tag);
  if (LOOKUP.aliasTags.has(tag)) return LOOKUP.aliasTags.get(tag);
  return { kind: 'unknown', id: tag };
}

function isSchoolTag(tag) {
  return classifyTag(tag).kind === 'school';
}

function isTopicLikeTag(tag) {
  const info = classifyTag(tag);
  return info.kind === 'topic' || info.kind === 'unknown';
}

function validateTags(tags) {
  const issues = [];
  const seen = new Map();
  let topicLikeCount = 0;

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
    if (info.kind === 'deprecated') {
      issues.push({
        severity: 'ERROR',
        rule: 'frontmatter-tags-deprecated',
        message: `tag "${normalized}" 已废弃，请改用 "${info.replaceWith}"。${info.reason || ''}`.trim(),
      });
      continue;
    }

    if (info.kind === 'unknown') {
      issues.push({
        severity: 'WARNING',
        rule: 'frontmatter-tags-unknown',
        message: `新 tag "${normalized}" 暂未收录在 tagTaxonomy.json；如果这是正确新考点，可以保留并在 PR 描述中说明。`,
      });
    }

    if (isTopicLikeTag(normalized)) topicLikeCount += 1;
  }

  if ((tags || []).length > 0 && topicLikeCount === 0) {
    issues.push({
      severity: 'WARNING',
      rule: 'frontmatter-tags-no-topic',
      message: '当前文档只有学校/位置类 tag，建议至少补充 1 个考点 tag。',
    });
  }

  return issues;
}

function getKnownTagIds() {
  return {
    schools: Array.from(LOOKUP.schoolTags.keys()),
    topics: Array.from(LOOKUP.topicTags.keys()),
    deprecated: Object.keys(taxonomy.deprecatedTags || {}),
  };
}

module.exports = {
  taxonomy,
  classifyTag,
  getKnownTagIds,
  isSchoolTag,
  validateTags,
};
