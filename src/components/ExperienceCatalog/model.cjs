const PAGE_SIZE = 24;

function readFilters(search, catalog) {
  const params = new URLSearchParams(search);
  const school = catalog.schools.some((item) => item.id === params.get('school')) ? params.get('school') : '';
  const program = catalog.programs.find((item) => item.id === params.get('program') && (!school || item.school === school));
  return {
    school: school || program?.school || '',
    program: program?.id || '',
    year: /^(19|20)\d{2}$/.test(params.get('year') || '') ? params.get('year') : '',
    kind: ['internal', 'external'].includes(params.get('kind')) ? params.get('kind') : '',
    q: params.get('q') || '',
    page: Math.max(1, Number.parseInt(params.get('page'), 10) || 1),
  };
}

function filterSearch(filters) {
  const params = new URLSearchParams();
  for (const key of ['school', 'program', 'year', 'kind', 'q', 'page']) {
    if (filters[key] && !(key === 'page' && filters[key] === 1)) params.set(key, filters[key]);
  }
  const search = params.toString();
  return search ? `?${search}` : '';
}

function normalize(value) {
  return value.normalize('NFKC').toLocaleLowerCase();
}

function matchingPlacements(entry, filters, programs) {
  return entry.placements.filter((placement) => (
    (!filters.school || programs.get(placement.scope).school === filters.school)
    && (!filters.program || placement.scope === filters.program)
    && (!filters.year || String(placement.year) === filters.year)
  ));
}

function filterEntries(catalog, filters) {
  const programs = new Map(catalog.programs.map((program) => [program.id, program]));
  const schools = new Map(catalog.schools.map((school) => [school.id, school]));
  const tokens = normalize(filters.q || '').trim().split(/\s+/).filter(Boolean);
  return catalog.entries.map((entry) => ({entry, placements: matchingPlacements(entry, filters, programs)}))
    .filter(({entry, placements}) => {
      if (!placements.length || (filters.kind && entry.kind !== filters.kind)) return false;
      const searchText = normalize([
        entry.title, entry.source, ...(entry.authors || []),
        ...placements.flatMap((placement) => {
          const program = programs.get(placement.scope);
          const school = schools.get(program.school);
          return [school.name, ...(school.aliases || []), program.name, program.department, ...(program.departmentAliases || []), ...(program.aliases || [])];
        }),
      ].join(' '));
      return tokens.every((token) => searchText.includes(token));
    })
    .sort((a, b) => (
      Math.max(...b.placements.map((p) => p.year || 0)) - Math.max(...a.placements.map((p) => p.year || 0))
      || (a.entry.kind === 'internal' ? 0 : 1) - (b.entry.kind === 'internal' ? 0 : 1)
      || a.entry.title.localeCompare(b.entry.title, 'zh')
    ));
}

module.exports = {PAGE_SIZE, readFilters, filterSearch, filterEntries};
