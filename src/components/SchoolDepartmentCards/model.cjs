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

// Metadata can include programs with no exam archive. Count only programs
// backed by a destination or canonical document in the actual sidebar.
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

  const docIds = [...reachableDocIds];
  const archivedPrograms = new Set();
  for (const program of department.programs || []) {
    if (!isProgram(program)) continue;
    if (program.archiveUrl) {
      const pathname = archivePath(program.archiveUrl, baseUrl);
      if (reachablePaths.has(pathname)) archivedPrograms.add(pathname);
      continue;
    }
    // A few archived program folders have no generated index. Canonical
    // document IDs establish their scope without guessing from URLs/names.
    if (!universityId || !department.id || !program.id) continue;
    const programPath = `${universityId}/${department.id}/${program.id}`;
    if (docIds.some((docId) => docId.startsWith(`${programPath}/`))) {
      archivedPrograms.add(programPath);
    }
  }
  return archivedPrograms.size;
}

module.exports = {archivePath, countArchivedPrograms};
