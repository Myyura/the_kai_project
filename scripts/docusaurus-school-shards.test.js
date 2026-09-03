const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');

const {
  DEFAULT_SCHOOL_SHARD_COUNT,
  HARD_RELOAD_ROUTE_COMPONENT,
  SCHOOL_SHARD_TARGET_WEIGHT,
  clearSchoolShardEnvironment,
  countMathExpressions,
  createSchoolShardEnvironment,
  discoverSchoolBuildUnits,
  filterRoutePathsForSchoolShard,
  parseSchoolShardEnvironment,
  planSchoolShards,
  resolveSchoolShardCount,
  transformRoutesForSchoolShard,
} = require('./docusaurus-school-shards');

const repoRoot = path.resolve(__dirname, '..');

function createUnit(id, weight) {
  return {
    id,
    weight,
    documentCount: 1,
    sourceBytes: weight,
    mathExpressions: 0,
  };
}

function flattenLeaves(routes) {
  return routes.flatMap((route) => (
    route.routes ? flattenLeaves(route.routes) : [route]
  ));
}

test('school shard weights count TeX work without treating escaped dollars as math', () => {
  assert.equal(countMathExpressions('price \\$5; $x$; \\(y\\); \\[z\\]'), 3);
});

test('automatic shard planning grows with content and remains deterministic', () => {
  const units = Array.from({length: 7}, (_unused, index) => (
    createUnit(`school-${index + 1}`, SCHOOL_SHARD_TARGET_WEIGHT)
  ));
  assert.equal(resolveSchoolShardCount(units, 'auto'), 7);
  assert.equal(resolveSchoolShardCount(units, 2), 2);

  const forward = planSchoolShards(units, 3);
  const reversed = planSchoolShards([...units].reverse(), 3);
  assert.deepEqual(reversed, forward);
  assert.equal(forward.filter((shard) => shard.includeShared).length, 1);
  assert.deepEqual(
    forward.flatMap((shard) => shard.schools).sort(),
    units.map((unit) => unit.id).sort(),
  );
});

test('current repository schools form complete indivisible automatic groups', () => {
  const units = discoverSchoolBuildUnits(repoRoot);
  const shards = planSchoolShards(units, 'auto');
  assert.ok(units.length > DEFAULT_SCHOOL_SHARD_COUNT);
  assert.ok(shards.length >= DEFAULT_SCHOOL_SHARD_COUNT);
  assert.equal(new Set(shards.flatMap((shard) => shard.schools)).size, units.length);
  assert.equal(shards.flatMap((shard) => shard.schools).length, units.length);
});

test('school shard environments are isolated and reject partial state', () => {
  const source = {
    KEEP: 'yes',
    KAI_DOCS_BUILD_SHARD_ID: 'stale',
    KAI_DOCS_BUILD_SHARD_SCHOOLS: 'stale-school',
    KAI_DOCS_BUILD_SHARD_SHARED: 'true',
  };
  assert.deepEqual(clearSchoolShardEnvironment(source), {KEEP: 'yes'});

  const environment = createSchoolShardEnvironment(source, {
    id: 'school-group-01',
    schools: ['InstituteOfScienceTokyo', 'tokyo-university'],
    includeShared: false,
  });
  assert.deepEqual(parseSchoolShardEnvironment(environment), {
    id: 'school-group-01',
    schools: ['InstituteOfScienceTokyo', 'tokyo-university'],
    includeShared: false,
  });
  assert.throws(
    () => parseSchoolShardEnvironment({KAI_DOCS_BUILD_SHARD_ID: 'partial'}),
    /incomplete/,
  );
});

test('route shells retain owned modules and hard-reload every unowned leaf', () => {
  const routes = [
    {
      path: '/docs',
      component: 'DocRoot',
      routes: [
        {
          path: '/docs/custom-alpha-slug',
          component: 'DocItem',
          exact: true,
          modules: {content: '@site/docs/alpha/source.mdx'},
          props: {large: 'owned'},
        },
        {
          path: '/docs/beta/item',
          component: 'DocItem',
          exact: true,
          modules: {content: '@site/docs/beta/item.md'},
          context: {
            plugin: '@generated/example-plugin-context',
            data: {large: 'unowned'},
          },
        },
        {
          path: '/docs/category/historical-wrong-name',
          component: 'Category',
          exact: true,
          props: {large: 'category'},
        },
      ],
    },
    {path: '*', component: 'NotFound'},
  ];
  const routePaths = [
    '/docs/custom-alpha-slug',
    '/docs/beta/item',
    '/docs/category/historical-wrong-name',
    '/404.html',
  ];
  const ownership = new Map([
    ['/docs/custom-alpha-slug', 'alpha'],
    ['/docs/beta/item', 'beta'],
    ['/docs/category/historical-wrong-name', 'alpha'],
    ['/404.html', null],
    ['*', null],
  ]);
  const alphaShard = {
    id: 'school-group-01',
    schools: ['alpha'],
    includeShared: false,
  };
  const transformed = transformRoutesForSchoolShard(
    routes,
    alphaShard,
    ['alpha', 'beta'],
    ownership,
  );
  const leaves = flattenLeaves(transformed);

  assert.equal(transformed[0].component, 'DocRoot');
  assert.deepEqual(leaves[0], routes[0].routes[0]);
  assert.deepEqual(leaves[2], routes[0].routes[2]);
  assert.deepEqual(leaves[1], {
    path: '/docs/beta/item',
    exact: true,
    component: HARD_RELOAD_ROUTE_COMPONENT,
    context: {
      plugin: '@generated/example-plugin-context',
      data: {large: 'unowned'},
    },
  });
  assert.deepEqual(leaves[3], {
    path: '*',
    component: HARD_RELOAD_ROUTE_COMPONENT,
  });
  assert.equal(leaves.length, flattenLeaves(routes).length);

  const alphaPaths = filterRoutePathsForSchoolShard(
    routePaths,
    alphaShard,
    ['alpha', 'beta'],
    ownership,
  );
  const betaAndSharedPaths = filterRoutePathsForSchoolShard(
    routePaths,
    {
      id: 'school-group-02',
      schools: ['beta'],
      includeShared: true,
    },
    ['alpha', 'beta'],
    ownership,
  );
  assert.deepEqual(alphaPaths, [
    '/docs/custom-alpha-slug',
    '/docs/category/historical-wrong-name',
  ]);
  assert.deepEqual(betaAndSharedPaths, ['/docs/beta/item', '/404.html']);
  assert.deepEqual([...alphaPaths, ...betaAndSharedPaths].sort(), routePaths.sort());
});

test('school shard route transforms reject missing authoritative ownership', () => {
  const shard = {
    id: 'school-group-01',
    schools: ['alpha'],
    includeShared: false,
  };
  assert.throws(
    () => transformRoutesForSchoolShard(
      [{path: '/docs/alpha/exam', component: 'DocItem'}],
      shard,
      ['alpha'],
    ),
    /must be a Map from buildRouteOwnership/,
  );
  assert.throws(
    () => transformRoutesForSchoolShard(
      [{path: '/docs/alpha/exam', component: 'DocItem'}],
      shard,
      ['alpha'],
      new Map(),
    ),
    /no authoritative school ownership entry/,
  );
  assert.throws(
    () => filterRoutePathsForSchoolShard(
      ['/docs/alpha/exam'],
      shard,
      ['alpha'],
      new Map(),
    ),
    /no authoritative school ownership entry/,
  );
});
