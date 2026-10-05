function archivePath(href, baseUrl = '/') {
  if (!href) return '';
  const pathname = href.split(/[?#]/)[0].replace(/\/+$/, '');
  const prefix = baseUrl.replace(/\/+$/, '');
  return prefix && pathname.startsWith(`${prefix}/`)
    ? pathname.slice(prefix.length)
    : pathname;
}

function isProgram(program) {
  // The catalog also stores shared exam subjects at the program level.
  // These are exam sections, not academic programs.
  return program.id !== 'kyotsu'
    && program.id !== 'basic_mathematics'
    && !/^共通(?:科目|問題|数学)?$/.test(program.name || '');
}

// Metadata can include programs with no exam archive. Count only program
// destinations that are also present in this department's actual sidebar.
function countArchivedPrograms(department, items, baseUrl = '/', universityId) {
  const reachablePaths = new Set();
  const reachableDocIds = new Set();
  const visit = (entries) => {
    for (const entry of entries || []) {
      if (entry.unlisted) continue;
      if (entry.href) reachablePaths.add(archivePath(entry.href, baseUrl));
      if (entry.type === 'link' && entry.href && entry.docId) {
        reachableDocIds.add(entry.docId);
      }
      if (entry.type === 'category') visit(entry.items);
    }
  };
  visit(items);

  return new Set(
    (department.programs || [])
      .filter((program) => {
        if (!isProgram(program)) return false;
        if (program.archiveUrl) {
          return reachablePaths.has(archivePath(program.archiveUrl, baseUrl));
        }
        // A few archived program folders have no generated index. Canonical
        // document IDs establish their scope without guessing from URLs/names.
        if (!universityId || !department.id || !program.id) return false;
        const prefix = `${universityId}/${department.id}/${program.id}/`;
        return [...reachableDocIds].some((docId) => docId.startsWith(prefix));
      })
      .map((program) => program.archiveUrl
        ? archivePath(program.archiveUrl, baseUrl)
        : `${universityId}/${department.id}/${program.id}`),
  ).size;
}

module.exports = {archivePath, countArchivedPrograms};
