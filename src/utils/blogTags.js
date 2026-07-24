import tagTaxonomy from '@site/src/data/tagTaxonomy';

const BLOG_SUFFIX = /-Blog$/;

export function getBlogTagDisplayName(tagLabel) {
  const schoolTag = tagLabel.replace(BLOG_SUFFIX, '');
  return tagTaxonomy.schoolTags[schoolTag]?.label || tagLabel;
}

export function getBlogTagSearchText(tagLabel) {
  const schoolTag = tagLabel.replace(BLOG_SUFFIX, '');
  const school = tagTaxonomy.schoolTags[schoolTag];
  return [
    tagLabel,
    schoolTag,
    school?.label,
    school?.universityId,
    ...(school?.aliases || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLocaleLowerCase();
}
