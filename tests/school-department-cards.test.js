const assert = require('node:assert/strict');
const test = require('node:test');
const {countArchivedPrograms} = require('../src/components/SchoolDepartmentCards/model.cjs');

const program = (id, name = `${id}専攻`) => ({
  id,
  name,
  archiveUrl: `/docs/category/university-department-${id}`,
});
const sidebar = (entry) => ({
  type: 'category',
  label: entry.name,
  href: entry.archiveUrl,
  items: [],
});

test('only reachable archived programs count; years and introduction docs do not', () => {
  const math = program('math');
  const physics = program('physics');
  const department = {programs: [math, math, physics, {id: 'unarchived'}]};
  const items = [
    {...sidebar(math), href: `/kai${math.archiveUrl}/`, items: [
      {type: 'category', label: '2025', href: '/kai/docs/category/university-department-math-2025'},
    ]},
    {type: 'link', label: '说明', href: '/kai/docs/university/department/intro'},
    {type: 'category', label: '2024', href: '/kai/docs/category/university-department-2024'},
  ];
  assert.equal(countArchivedPrograms(department, items, '/kai/'), 1);
  assert.equal(countArchivedPrograms(department, [{...items[0], unlisted: true}], '/kai/'), 0);
  assert.equal(countArchivedPrograms(department, [], '/kai/'), 0);
});

test('shared and subject-only exam folders are not academic programs', () => {
  const programs = [
    program('math', '数学教室'),
    program('kyotsu', '共通'),
    program('common-subjects', '共通科目'),
    program('common-questions', '共通問題'),
    program('common-math', '共通数学'),
    program('basic_mathematics', '基礎数学'),
  ];
  assert.equal(countArchivedPrograms({programs}, programs.map(sidebar)), 1);
});

test('departments with direct exam documents do not claim program counts', () => {
  const items = [{type: 'link', label: '2025 年過去問', href: '/docs/university/department/2025-exam'}];
  assert.equal(countArchivedPrograms({programs: []}, items), 0);
  assert.equal(countArchivedPrograms({}, items), 0);
});

test('programs without index pages require reachable canonical documents in their exact scope', () => {
  const department = {
    id: 'engineering',
    programs: [
      {id: 'mech', name: '機械工学群'},
      {id: 'ee', name: '電気工学専攻'},
      {id: 'chem', name: '化学専攻', archiveUrl: '/docs/category/kyoto-university-engineering-chem'},
    ],
  };
  const document = (id) => ({type: 'link', label: '過去問', href: `/docs/${id}`, docId: id});
  const items = [
    document('kyoto-university/engineering/mech/2024/mech_202308_senmon_3_3'),
    document('kyoto-university/engineering/mech/2015/mech_201408_dynamics_2'),
    document('kyoto-university/engineering/ee-extra/2025/exam'),
    document('kyoto-university/engineering/chem/2025/exam'),
    {...document('kyoto-university/engineering/ee/2025/exam'), unlisted: true},
  ];
  assert.equal(countArchivedPrograms(department, items, '/', 'kyoto-university'), 1);
  assert.equal(countArchivedPrograms(department, items, '/', 'other-university'), 0);
  assert.equal(countArchivedPrograms(department, items), 0);
  assert.equal(countArchivedPrograms(department, [], '/', 'kyoto-university'), 0);
});
