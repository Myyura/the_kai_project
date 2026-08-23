import {useFrontmatter, usePage} from '@rspress/core/runtime';
import {resolveTagBrowseTarget} from '@site/src/utils/tagBrowseTarget';

function routeToDocId(routePath = '') {
  return String(routePath)
    .replace(/^\/docs\/?/, '')
    .replace(/\/$/, '');
}

/**
 * Small page-data adapter for the study tools' legacy useDoc interface.
 */
export function useDoc() {
  const {page} = usePage();
  const {frontmatter} = useFrontmatter();
  const id = String(page.docId || routeToDocId(page.routePath));
  const tags = (Array.isArray(frontmatter.tags) ? frontmatter.tags : [])
    .map((label) => {
      const value = String(label);
      return {
        label: value,
        permalink: resolveTagBrowseTarget(value).href,
      };
    });

  return {
    frontMatter: frontmatter,
    toc: page.toc || [],
    contentTitle: page.headingTitle,
    metadata: {
      id,
      title: page.title || frontmatter.title || id,
      description: page.description || frontmatter.description || '',
      permalink: page.routePath || `/docs/${id}`,
      source: page.source || (id ? `docs/${id}.md` : ''),
      tags,
    },
  };
}

export default useDoc;
