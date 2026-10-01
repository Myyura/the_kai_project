const assert = require('node:assert/strict');
const test = require('node:test');
const createHookRuntime = require('./helpers/hook-runtime.cjs');

function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((done, fail) => {resolve = done; reject = fail;});
  return {promise, resolve, reject};
}

function fixture(dependencies) {
  let auth = {isLoggedIn: true, isConfigured: true, authReady: true, user: {id: 'a'}};
  const window = new EventTarget();
  const runtime = createHookRuntime({
    './useAuth': {useAuth: () => auth},
    ...dependencies,
  }, {window, CustomEvent});
  return {runtime, window, setAuth: (value) => {auth = {...auth, ...value};}};
}

test('disabled or signed-out hooks ignore pending problem-set, difficulty, and reputation reads', async () => {
  for (const kind of ['sets', 'set', 'difficulty', 'reputation']) {
    const read = deferred();
    const {runtime, setAuth} = fixture({
      '../services/problemSetService': {fetchMyProblemSets: () => read.promise, fetchMyProblemSet: () => read.promise},
      '../services/difficultyService': {fetchExamDifficulty: () => read.promise},
      '../services/reputationService': {fetchMyReputation: () => read.promise, emptyReputation: () => ({level: 0})},
    });
    let enabled = true;
    const getHook = kind === 'sets' ? runtime.load('src/hooks/useProblemSets.js').useProblemSets
      : kind === 'set' ? runtime.load('src/hooks/useProblemSets.js').useProblemSet
        : kind === 'difficulty' ? runtime.load('src/hooks/useDifficulty.js').useExamDifficulty
          : runtime.load('src/hooks/useReputation.js').useReputation;
    runtime.mount(() => kind === 'reputation' ? getHook({enabled}) : getHook('example', {enabled}));
    await runtime.flush();
    enabled = false;
    setAuth({isLoggedIn: false, user: null});
    runtime.render();
    read.resolve(kind === 'sets' ? [{id: 'old-user-set'}] : {id: 'old-user-data', level: 5});
    await runtime.flush();
    const value = runtime.current;
    if (kind === 'sets') assert.deepEqual(value.sets, []);
    else if (kind === 'set') assert.equal(value.problemSet, null);
    else if (kind === 'difficulty') assert.equal(value.difficulty, null);
    else assert.deepEqual(value.reputation, {level: 0});
    assert.equal(value.loading, false);
    runtime.unmount();
  }
});

test('a previous document read cannot replace the current document progress', async () => {
  const first = deferred();
  const second = deferred();
  const {runtime} = fixture({'../services/studyDataService': {
    fetchDocProgress: (docId) => docId === 'first' ? first.promise : second.promise,
  }});
  const {useDocProgress} = runtime.load('src/hooks/useProgress.js');
  let docId = 'first';
  runtime.mount(() => useDocProgress(docId));
  await runtime.flush();
  docId = 'second';
  runtime.render();
  await runtime.flush();
  second.resolve({status: 'reviewing', reviewCount: 2});
  await runtime.flush();
  first.resolve({status: 'completed', reviewCount: 0});
  await runtime.flush();
  assert.equal(runtime.current[0], 'reviewing');
  assert.equal(runtime.current[4], 2);
  runtime.unmount();
});

test('a note read begun before typing cannot overwrite the pending draft', async () => {
  const read = deferred();
  const write = deferred();
  const {runtime} = fixture({'../services/studyDataService': {
    fetchDocNote: () => read.promise,
    saveDocNote: () => write.promise,
  }});
  const {useDocNotes} = runtime.load('src/hooks/useNotes.js');
  runtime.mount(() => useDocNotes('example'));
  await runtime.flush();
  runtime.current.patchNote('new draft');
  await runtime.flush();
  read.resolve({content: 'older saved note'});
  await runtime.flush();
  assert.equal(runtime.current.content, 'new draft');
  write.resolve({content: 'new draft', updatedAt: 100});
  await runtime.flush();
  assert.equal(runtime.current.saving, false);
  runtime.unmount();
});

test('failed note queues report one handled error and allow the next save', async () => {
  const failure = new Error('save failed');
  let writes = 0;
  const {runtime} = fixture({'../services/studyDataService': {
    fetchDocNote: async () => null,
    saveDocNote: async (_docId, content) => {
      if (++writes === 1) throw failure;
      return {content, updatedAt: 100};
    },
  }});
  const {useDocNotes} = runtime.load('src/hooks/useNotes.js');
  runtime.mount(() => useDocNotes('example'));
  await runtime.flush();
  runtime.current.patchNote('first draft');
  await runtime.flush();
  assert.equal(runtime.current.error, failure);
  assert.equal(runtime.current.saving, false);
  runtime.current.patchNote('second draft');
  await runtime.flush();
  assert.equal(writes, 2);
  assert.equal(runtime.current.error, null);
  assert.equal(runtime.current.content, 'second draft');
  runtime.unmount();
});

test('public-profile requests are isolated by account and never reuse another account promise', async () => {
  const reads = [];
  const {runtime, setAuth} = fixture({'../services/publicProfileService': {
    fetchMyPublicProfile: () => {const read = deferred(); reads.push(read); return read.promise;},
  }});
  const {usePublicProfile} = runtime.load('src/hooks/usePublicProfile.js');
  runtime.mount(usePublicProfile);
  await runtime.flush();
  setAuth({user: {id: 'b'}});
  runtime.render();
  await runtime.flush();
  assert.equal(reads.length, 2);
  reads[1].resolve({nickname: 'B'});
  reads[0].resolve({nickname: 'A'});
  await runtime.flush();
  assert.equal(runtime.current.profile.nickname, 'B');
  runtime.unmount();
});

test('a saved nickname invalidates older reads without affecting another account refresh', async () => {
  const reads = [];
  const saved = deferred();
  const {runtime, setAuth} = fixture({'../services/publicProfileService': {
    fetchMyPublicProfile: () => {const read = deferred(); reads.push(read); return read.promise;},
    confirmOrChangeMyNickname: () => saved.promise,
  }});
  const {usePublicProfile} = runtime.load('src/hooks/usePublicProfile.js');
  setAuth({user: {id: 'b'}});
  runtime.mount(usePublicProfile);
  reads[0].resolve({nickname: 'B cached'});
  await runtime.flush();
  setAuth({user: {id: 'a'}});
  runtime.render();
  reads[1].resolve({nickname: 'A'});
  await runtime.flush();
  const save = runtime.current.saveNickname('A updated');
  setAuth({user: {id: 'b'}});
  runtime.render();
  await runtime.flush();
  const refresh = runtime.current.refresh();
  saved.resolve({nickname: 'A updated'});
  await save;
  reads[2].resolve({nickname: 'B fresh'});
  await refresh;
  await runtime.flush();
  assert.equal(runtime.current.profile.nickname, 'B fresh');
  assert.equal(runtime.current.loading, false);
  runtime.unmount();
});
