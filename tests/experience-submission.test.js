const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const test = require('node:test');
const babel = require('@babel/core');
const matter = require('gray-matter');
const {extractSubmissionFromIssueBody, verifySubmissionSignature, stableStringify, writeSubmissionToRepo, buildPullRequestBody} = require('../scripts/submission-utils');
const {buildCatalog} = require('../plugins/experience-blog/catalog.cjs');
const {universities} = require('../src/data/universities');
const {filterEntries} = require('../src/components/ExperienceCatalog/model.cjs');

function loadTS(relativePath, extra = '') {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = fs.readFileSync(filename, 'utf8') + extra;
  const code = babel.transformSync(source, {filename, plugins: [require('@babel/plugin-transform-typescript'), require('@babel/plugin-transform-modules-commonjs')]}).code;
  const loaded = {exports: {}};
  const resolve = name => {
    if (name.startsWith('https:')) return {serve() {}};
    if (name.startsWith('npm:')) return {createClient() {}};
    if (name === './http.ts') return {errorResponse: (status, code, message) => ({status, code, message})};
    if (name.endsWith('.ts')) return loadTS(path.relative(path.resolve(__dirname, '..'), path.resolve(path.dirname(filename), name)));
    return require(name);
  };
  Function('module', 'exports', 'require', 'Deno', code)(loaded, loaded.exports, resolve, {env: {get: () => ''}});
  return loaded.exports;
}
const {normalizeExperienceRequest} = loadTS('supabase/functions/content-submissions/experience.ts');
const {buildIssueBody} = loadTS('supabase/functions/content-submissions/issue.ts');
const {validateSubmission, submissionTitle} = loadTS('supabase/functions/content-submissions/index.ts', '\nexports.validateSubmission = validateSubmission; exports.submissionTitle = submissionTitle;');
const now = new Date('2026-09-14T12:00:00.000Z');
const base = () => ({
  kind: 'external', title: '多校经验分享', url: 'https://zhuanlan.zhihu.com/p/123456?utm_source=share#section', publishedYear: 2026, notes: '2025 年夏试；2026 年冬试。',
  placements: [
    {scope: 'tokyo-university/engineering/chemsys', examYear: 2025, season: 'summer'},
    {scope: 'kyoto-university/informatics/sys', examYear: 2026, season: 'winter'},
    {scope: 'osaka-university/science'},
  ],
});
function payload(input = base()) {
  const normalized = normalizeExperienceRequest(input, now);
  assert.ok(normalized.data, JSON.stringify(normalized));
  return {
    version: 3, submissionId: '11111111-1111-4111-8111-111111111111', submissionType: 'experience', createdAt: now.toISOString(), publicAuthor: 'Kai #00001',
    cla: {acceptedAt: now.toISOString(), statement: 'I have read and agree to The Kai Project CLA.'},
    document: {title: input.title}, content: {descriptionMarkdown: '', kaiMarkdown: ''}, correction: null, admissionData: null, experience: normalized.data,
  };
}
function repo(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-experience-submission-'));
  fs.mkdirSync(path.join(root, 'src/data/experiences'), {recursive: true});
  fs.writeFileSync(path.join(root, 'src/data/experiences/external.json'), '[]\n');
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  return root;
}
function signed(p) {
  const signature = crypto.createHmac('sha256', 'test-secret').update(stableStringify(p)).digest('hex');
  return buildIssueBody(p, signature);
}

test('external recommendation round-trips through signed review into the shared directory', t => {
  const p = payload();
  assert.equal(p.experience.url, 'https://zhuanlan.zhihu.com/p/123456');
  const issue = signed(p);
  assert.match(issue, /不转载正文/);
  const extracted = extractSubmissionFromIssueBody(issue);
  verifySubmissionSignature(extracted, 'test-secret');
  assert.deepEqual(extracted.payload, p);
  const root = repo(t);
  const result = writeSubmissionToRepo({repoRoot: root, payload: extracted.payload});
  const external = JSON.parse(fs.readFileSync(path.join(root, result.relativePath)));
  assert.deepEqual(Object.keys(external[0]), ['title', 'url', 'publishedYear', 'placements']);
  assert.equal(external[0].url, p.experience.url);
  const catalog = buildCatalog({universities, external, blogPosts: [], siteUrl: 'https://runjp.com'});
  for (const placement of catalog.entries[0].placements) {
    assert.equal(placement.year, 2026);
    assert.equal(filterEntries(catalog, {program: placement.scope, year: '2026'}).length, 1);
  }
  assert.equal(catalog.entries[0].placements[2].yearSource, 'publication');
  assert.match(buildPullRequestBody({payload:p, issue:{number:1, html_url:'https://github.com/example/repo/issues/1'}, relativePath:result.relativePath}), /经验贴外链推荐/);
});

test('duplicate external recommendations never overwrite existing entries', t => {
  const root = repo(t), p = payload();
  writeSubmissionToRepo({repoRoot: root, payload: p});
  const file = path.join(root, 'src/data/experiences/external.json');
  const before = fs.readFileSync(file, 'utf8');
  p.experience.url = 'http://zhuanlan.zhihu.com/p/123456/?source=another#heading';
  p.experience.title = 'Different title';
  assert.equal(writeSubmissionToRepo({repoRoot:root, payload:p}).conflictKind, 'duplicate_external_url');
  assert.equal(fs.readFileSync(file, 'utf8'), before);
});

test('original story is signed once and becomes a classified native blog article', t => {
  const input = {...base(), kind:'internal', url: undefined, markdown: '我的经验\n\n```text\n```\n\n结论。'};
  const p = payload(input);
  const body = signed(p);
  assert.equal(body.split('我的经验').length - 1, 1);
  const extracted = extractSubmissionFromIssueBody(body);
  verifySubmissionSignature(extracted, 'test-secret');
  assert.deepEqual(extracted.payload, p);
  const root = repo(t);
  const result = writeSubmissionToRepo({repoRoot:root, payload:p});
  const generated = matter(fs.readFileSync(path.join(root,result.relativePath),'utf8'));
  assert.deepEqual(generated.data.experience, p.experience.placements);
  assert.equal(generated.data.authors[0].name, p.publicAuthor);
  assert.equal(generated.content.trim(), input.markdown);
  const catalog = buildCatalog({universities, external:[], blogPosts:[{metadata:{title:generated.data.title,date:generated.data.date,permalink:'/blog/new',authors:generated.data.authors,frontMatter:generated.data}}],siteUrl:'https://runjp.com'});
  assert.equal(catalog.entries[0].kind, 'internal');
  assert.equal(catalog.entries[0].placements[0].year, 2026);
  assert.equal(writeSubmissionToRepo({repoRoot:root,payload:p}).conflictKind,'target_exists');
  const changed = extractSubmissionFromIssueBody(body.replace('我的经验', '篡改正文'));
  assert.throws(() => verifySubmissionSignature(changed, 'test-secret'), /verification failed/);
});

test('request validation rejects malformed years, duplicated rounds, credentials, and copied external bodies', () => {
  const invalid = [
    {url:'javascript:alert(1)'}, {url:'https://user:password@example.org/story'}, {url:'https://runjp.com/blog/story'}, {url:'https://www.runjp.com/blog/story'},
    {url:'https://example.org/<script>'}, {publishedYear:2027}, {publishedYear:'2025'}, {kind:'unknown'}, {kind:['external']}, {title:' '}, {markdown:'copied article'},
    {placements:[]}, {placements:[{scope:'../outside'}]}, {placements:[{scope:'tokyo-university', examYear:2025.5}]},
    {placements:[{scope:'tokyo-university', season:'autumn'}]}, {placements:[{scope:'tokyo-university',unexpected:true}]},
    {placements:[{scope:'tokyo-university'}, {scope:'tokyo-university'}]},
  ];
  for (const patch of invalid) assert.ok(normalizeExperienceRequest({...base(), ...patch}, now).error, JSON.stringify(patch));
});

test('converter refuses unknown canonical scopes and unsafe native Markdown before writing', t => {
  const root = repo(t), p = payload();
  p.experience.placements = [{scope:'made-up-university/program'}];
  assert.throws(() => writeSubmissionToRepo({repoRoot:root,payload:p}), /unknown catalog scope/);
  const original = payload({...base(), kind:'internal',url:undefined,markdown:'import X from "danger"'});
  assert.throws(() => writeSubmissionToRepo({repoRoot:root,payload:original}), /MDX import/);
  original.experience.markdown = 'safe'; original.submissionId = '../../outside';
  assert.throws(() => writeSubmissionToRepo({repoRoot:root,payload:original}), /publication identity/);
  assert.equal(fs.readFileSync(path.join(root,'src/data/experiences/external.json'),'utf8'), '[]\n');
});

test('an exam year requires a season in each attempt, including when admission year is explicit', t => {
  const scope = 'tokyo-university/engineering/chemsys';
  for (const kind of ['external', 'internal']) {
    const input = {...base(), kind, ...(kind === 'internal' ? {url: undefined, markdown: 'My story'} : {})};
    for (const extra of [{}, {admissionYear: 2027}]) {
      const placement = {scope, examYear: 2026, ...extra};
      const missing = {...input, placements: [...base().placements, placement]};
      assert.equal(normalizeExperienceRequest(missing, now).error.code, 'experience_season_required');
      for (const season of ['summer', 'winter']) {
        assert.ok(normalizeExperienceRequest({...input, placements: [{...placement, season}]}, now).data);
      }
    }
    // An unknown exam year remains optional, even if the admission year is known.
    assert.ok(normalizeExperienceRequest({...input, placements: [{scope, admissionYear: 2027}]}, now).data);
  }
  const root = repo(t), p = payload();
  delete p.experience.placements[0].season;
  assert.throws(() => writeSubmissionToRepo({repoRoot: root, payload: p}), /exam season when an exam year/);
  assert.equal(fs.readFileSync(path.join(root, 'src/data/experiences/external.json'), 'utf8'), '[]\n');
  assert.equal(validateSubmission({submissionType: 'experience', claAccepted: true, experience: p.experience}, 'Kai').error.code, 'experience_season_required');
});

test('Edge submission dispatch preserves experience metadata and requires real consent', () => {
  const body = {submissionType:'experience', claAccepted:true, experience:base()};
  const result = validateSubmission(body, 'Kai #00001');
  assert.ok(result.payload, JSON.stringify(result));
  assert.equal(result.payload.document.title, body.experience.title);
  assert.equal(result.payload.document.targetDocId, '');
  assert.equal(result.payload.experience.kind, 'external');
  assert.match(submissionTitle(result.payload), /经验贴外链推荐/);
  assert.equal(validateSubmission({...body, claAccepted:'false'}, 'Kai').error.code,'cla_required');
  assert.equal(validateSubmission({...body, experience:{...base(),kind:'internal',url:undefined,markdown:'export const bad = 1;'}}, 'Kai').error.code,'unsafe_experience_markdown');
});
