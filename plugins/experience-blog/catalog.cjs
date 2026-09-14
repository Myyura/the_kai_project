const {catalogScopes} = require('../../src/data/universityCatalog.cjs');

function assert(condition, message) {
  if (!condition) throw new Error(`Experience catalog: ${message}`);
}

function text(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validatePlacements(placements, programs, title) {
  assert(Array.isArray(placements) && placements.length > 0, `${title} needs experience classifications`);
  const seen = new Set();
  for (const placement of placements) {
    assert(placement && programs.has(placement.scope), `${title}: unknown catalog scope ${placement?.scope}`);
    assert(Object.keys(placement).every((key) => ['scope', 'admissionYear', 'examYear', 'season'].includes(key)), `${title}: unexpected classification field`);
    for (const key of ['admissionYear', 'examYear']) {
      assert(placement[key] === undefined || (Number.isInteger(placement[key]) && placement[key] >= 1900 && placement[key] <= 2100), `${title}: invalid ${key}`);
    }
    assert(placement.season === undefined || ['summer', 'winter'].includes(placement.season), `${title}: invalid exam season`);
    const key = `${placement.scope}/${placement.admissionYear || ''}/${placement.examYear || ''}/${placement.season || ''}`;
    assert(!seen.has(key), `${title}: duplicate classification ${key}`);
    seen.add(key);
  }
}

function withAdmissionYear(placements, publishedYear, title) {
  assert(publishedYear === undefined || (Number.isInteger(publishedYear) && publishedYear >= 1900 && publishedYear <= 2100), `${title}: invalid publication year`);
  return placements.map(({admissionYear, ...placement}) => {
    const inferred = placement.examYear !== undefined && placement.season !== undefined
      ? placement.examYear + (placement.season === 'summer' ? 1 : 0)
      : undefined;
    const year = admissionYear ?? inferred ?? publishedYear;
    return year === undefined ? placement : {
      ...placement,
      year,
      yearSource: admissionYear !== undefined ? 'admission' : inferred !== undefined ? 'exam' : 'publication',
    };
  });
}

function buildCatalog({universities, external, blogPosts, siteUrl}) {
  const programs = catalogScopes(universities);
  const urls = new Set();
  assert(Array.isArray(external), 'external entries must be an array');
  const entries = external.map((entry) => {
    assert(text(entry.title) && text(entry.url), 'external entries need a title and URL');
    let url;
    try { url = new URL(entry.url); } catch { assert(false, `invalid URL ${entry.url}`); }
    assert(['https:', 'http:'].includes(url.protocol) && !url.username && !url.password, `invalid external URL ${entry.url}`);
    assert(url.hostname !== new URL(siteUrl).hostname, `use blog frontmatter for on-site article ${entry.url}`);
    assert(!urls.has(url.href), `duplicate external URL ${entry.url}`);
    urls.add(url.href);
    validatePlacements(entry.placements, programs, entry.title);
    return {title: entry.title, url: url.href, kind: 'external', source: url.hostname.replace(/^www\./, ''), placements: withAdmissionYear(entry.placements, entry.publishedYear, entry.title)};
  });
  for (const post of blogPosts) {
    const {metadata} = post;
    if (metadata.unlisted || metadata.frontMatter.draft) continue;
    const placements = metadata.frontMatter.experience;
    validatePlacements(placements, programs, metadata.source || metadata.title);
    entries.push({
      title: metadata.title,
      url: metadata.permalink,
      kind: 'internal',
      authors: metadata.authors.map((author) => author.name).filter(Boolean),
      placements: withAdmissionYear(placements, new Date(metadata.date).getUTCFullYear(), metadata.title),
    });
  }
  const usedScopes = new Set(entries.flatMap((entry) => entry.placements.map((placement) => placement.scope)));
  const selectedPrograms = [...programs.values()].filter((scope) => usedScopes.has(scope.id));
  const usedSchools = new Set(selectedPrograms.map((scope) => scope.school));
  return {
    schools: universities.filter((university) => usedSchools.has(university.id)).map(({id, name, aliases = []}) => ({id, name, aliases})),
    programs: selectedPrograms,
    entries,
  };
}

module.exports = {buildCatalog};
