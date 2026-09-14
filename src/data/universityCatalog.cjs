// Views over the shared hierarchy; no names or identifiers are maintained here.
function catalogScopes(universities) {
  const scopes = new Map();
  for (const university of universities) {
    scopes.set(university.id, {id: university.id, school: university.id, level: 'school', name: university.name, aliases: university.aliases || []});
    for (const department of university.departments) {
      const departmentId = `${university.id}/${department.id}`;
      const common = {school: university.id, department: department.name, departmentId, departmentAliases: department.aliases || []};
      scopes.set(departmentId, {...common, id: departmentId, level: 'department', name: department.name, aliases: department.aliases || []});
      for (const program of department.programs || []) {
        const id = `${departmentId}/${program.id}`;
        scopes.set(id, {...common, id, level: 'program', name: program.name, aliases: program.aliases || [], archiveUrl: program.archiveUrl});
      }
    }
  }
  return scopes;
}

function examUniversities(universities) {
  return universities.filter((university) => university.archiveUrl).map((university) => ({
    ...university,
    departments: university.departments.filter((department) => department.archiveUrl).map((department) => ({
      ...department,
      programs: (department.programs || []).filter((program) => program.archiveUrl),
    })),
  }));
}

module.exports = {catalogScopes, examUniversities};
