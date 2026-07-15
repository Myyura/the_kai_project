const assert = require('node:assert/strict');
const test = require('node:test');
const { normalizeContributors } = require('./generate-github-contributors');

test('normalizes GitHub contributors, removes bots, and sorts by contribution count', () => {
  const result = normalizeContributors([
    {
      login: 'second',
      type: 'User',
      avatar_url: 'https://avatars.example/second',
      html_url: 'https://github.com/second',
      contributions: 2,
    },
    {
      login: 'first',
      type: 'User',
      avatar_url: 'https://avatars.example/first',
      html_url: 'https://github.com/first',
      contributions: 8,
    },
    {
      login: 'dependabot[bot]',
      type: 'Bot',
      avatar_url: 'https://avatars.example/bot',
      html_url: 'https://github.com/apps/dependabot',
      contributions: 99,
    },
  ]);

  assert.deepEqual(result, [
    {
      login: 'first',
      avatarUrl: 'https://avatars.example/first',
      profileUrl: 'https://github.com/first',
      contributions: 8,
    },
    {
      login: 'second',
      avatarUrl: 'https://avatars.example/second',
      profileUrl: 'https://github.com/second',
      contributions: 2,
    },
  ]);
});
