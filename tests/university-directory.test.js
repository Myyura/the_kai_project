const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {universities} = require('../src/data/universities');
const {examUniversities} = require('../src/data/universityCatalog.cjs');

test('every collected graduate school has an official website', () => {
  for (const university of universities) {
    for (const department of university.departments) {
      const scope = `${university.id}/${department.id}`;
      assert.ok(department.websiteUrl, `${scope} is missing its official website`);
      assert.match(new URL(department.websiteUrl).protocol, /^https?:$/);
    }
  }
});

test('graduate schools containing exam documents are reachable from the directory', () => {
  const directory = examUniversities(universities);
  for (const university of universities) {
    for (const department of university.departments) {
      const scope = `${university.id}/${department.id}`;
      const files = fs.readdirSync(path.join(__dirname, '../docs', scope), {recursive: true});
      if (!files.some((file) => /\.mdx?$/.test(file))) continue;
      const entry = directory.find(({id}) => id === university.id)?.departments
        .find(({id}) => id === department.id);
      assert.ok(entry?.archiveUrl, `${scope} has exams but no directory link`);
    }
  }
});

test('every displayed university has graduate-school links without adding experience-only archives', () => {
  for (const university of examUniversities(universities)) {
    assert.ok(university.departments.length, `${university.id} has an empty card`);
  }
  for (const scope of ['kyushu-university/IGSES', 'waseda-university/IPS', 'naist/science_and_technology']) {
    const [schoolId, departmentId] = scope.split('/');
    assert.equal(universities.find(({id}) => id === schoolId).departments
      .find(({id}) => id === departmentId).archiveUrl, undefined);
  }
});
