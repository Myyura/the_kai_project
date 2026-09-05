const assert = require('node:assert/strict');
const test = require('node:test');
const {extractImageSources} = require('../scripts/content-export-images');

test('collects Markdown images in source order and deduplicates references', () => {
  const markdown = [
    '![First](https://images.example/a_(1).png "A title")',
    '![Second][image-ref] ![First again](https://images.example/a_(1).png)',
    '![shortcut] ![collapsed][]',
    '[Ordinary link](https://images.example/not-an-image.png)',
    '[image-ref]: <./local image.png> "Reference title"',
    '[shortcut]: ../shortcut.svg',
    '[collapsed]: /img/collapsed.webp',
  ].join('\n\n');
  assert.deepEqual(extractImageSources(markdown), [
    'https://images.example/a_(1).png',
    './local%20image.png',
    '../shortcut.svg',
    '/img/collapsed.webp',
  ]);
});

test('collects quoted, unquoted and static MDX image sources among Markdown', () => {
  const markdown = [
    '![one](one.png) <img alt="src=wrong.png >" src="two.png" />',
    "<IMG SRC='three.png'>",
    '<img src=four.png width=20 />',
    '<img src={"five.png"} style={{width: 500}} />',
    "inline <img className={'picture'} src={ 'six.png' } /> text",
    '<img src={imageVariable} /> <img src={"prefix" + filename} />',
    '<img data-src="lazy.png" alt="src=wrong.png" />',
  ].join('\n\n');
  assert.deepEqual(extractImageSources(markdown), [
    'one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png',
  ]);
});

test('decodes HTML entities once and escaped static MDX strings', () => {
  const markdown = [
    '![query](https://images.example/a.png?x=1&amp;y=2)',
    '<img src="https://images.example/a.png?x=1&amp;y=2" />',
    '<img src="/img/&#x4e2d;&#25991;.png?literal=&amp;amp;" />',
    '![literal](/img/quoted.png?literal=&amp;amp;)',
    String.raw`<img src={'/img/it\'s\u0020fine.png'} />`,
  ].join('\n\n');
  assert.deepEqual(extractImageSources(markdown), [
    'https://images.example/a.png?x=1&y=2',
    '/img/中文.png?literal=&amp;',
    '/img/quoted.png?literal=&amp;',
    "/img/it's fine.png",
  ]);
});

test('ignores fenced and inline code, HTML comments, and escaped Markdown', () => {
  const markdown = [
    '`![fake](inline.png)` and `<img src="inline-html.png" />`',
    '```md',
    '![fake](fenced.png)',
    '<img src={"fenced-html.png"} />',
    '```',
    '~~~html',
    '<img src="tilde-fence.png" />',
    '~~~',
    '    ![fake](indented.png)',
    '<!-- ![fake](comment.png)',
    '',
    '<img src="comment-html.png" /> -->',
    'inline <!-- <img src="inline-comment.png" /> --> ![real](real.png)',
    String.raw`\![escaped](escaped.png) \<img src="escaped-html.png" />`,
  ].join('\n\n');
  assert.deepEqual(extractImageSources(markdown), ['real.png']);
});

test('finds images inside HTML containers while respecting code and comments', () => {
  const markdown = [
    '<div className="images">',
    '![markdown](inside.png)',
    '<img src="inside-html.png" />',
    '`<img src="fake-code.png" />`',
    '<!-- <img src="fake-comment.png" /> -->',
    '</div>',
  ].join('\n');
  assert.deepEqual(extractImageSources(markdown), ['inside.png', 'inside-html.png']);
});

test('returns no sources for an empty body or missing image src', () => {
  assert.deepEqual(extractImageSources(''), []);
  assert.deepEqual(extractImageSources('<img alt="image" /> <img src="" />'), []);
});

test('ignores comments spanning blank lines and HTML container blocks', () => {
  const markdown = [
    '<div>',
    '![before](before.png)',
    '<!-- start',
    '',
    '<img src="hidden.png" />',
    '',
    '--> ![after](after.png)',
    '</div>',
    '',
    'Text <!-- inline comment',
    '',
    '![also hidden](hidden-markdown.png)',
    '',
    '--> ![last](last.png)',
  ].join('\n');
  assert.deepEqual(extractImageSources(markdown), ['before.png', 'after.png', 'last.png']);
});
