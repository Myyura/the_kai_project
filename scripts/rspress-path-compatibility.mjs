// Docusaurus' default numberPrefixParser strips a leading numeric ordering
// prefix separated by one or more hyphens, underscores, or dots. Apply the
// same rule to every document-id segment so existing public URLs stay stable.
const DOCUSAURUS_NUMBER_PREFIX_RE = /^(?<numberPrefix>\d+)\s*[-_.]+\s*(?<suffix>[^-_.\s].*)$/;

export function stripDocusaurusNumberPrefix(segment) {
  const match = DOCUSAURUS_NUMBER_PREFIX_RE.exec(String(segment));
  return match?.groups?.suffix ?? String(segment);
}

export function stripDocusaurusNumberPrefixes(relativePath) {
  return String(relativePath)
    .split('/')
    .map(stripDocusaurusNumberPrefix)
    .join('/');
}
