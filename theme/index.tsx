import React from 'react';
import {
  FallbackHeading as BasicFallbackHeading,
  Layout as BasicLayout,
  type LayoutProps,
  type RootProps,
} from '@rspress/core/theme-original';
import {Head, useFrontmatter, usePage} from '@rspress/core/runtime';
import {AuthProvider} from '@site/src/context/AuthContext';
import {LanguageProvider} from '@site/src/context/LanguageContext';
import LanguageSwitcher from '@site/src/components/LanguageSwitcher';
import NavbarLoginButton from '@site/src/components/NavbarLoginButton';
import {LocalizedNav} from '@site/src/rspress/LocalizedNav';
import {
  BlogPostFooter,
  BlogPostHeader,
  BlogSidebar,
} from '@site/src/rspress/blog/BlogChrome';
import {
  AnnotationSidebar,
  DocumentAnnotationsProvider,
  DocumentChangeNotice,
  InlineAnnotationController,
  MobileAnnotationAccess,
} from '@site/src/components/DocumentAnnotations';
import DocStudyFooter from '@site/src/theme/DocItem/Footer';
// Bundle KaTeX with the theme instead of relying on a config-level CDN tag.
// Rspress' development shell does not retain those static head entries after
// the runtime head manager mounts, which left otherwise-correct math markup
// without KaTeX fonts and layout rules during local navigation.
import 'katex/dist/katex.min.css';
import './index.css';
import '@site/src/clientModules/languageInit';
import '@site/src/clientModules/removeLegacyPwa';

type FallbackHeadingProps = Parameters<typeof BasicFallbackHeading>[0];
const SITE_ORIGIN = 'https://runjp.com';

function RouteMetadata({routePath}: {routePath: string}) {
  const normalizedPath = routePath.startsWith('/') ? routePath : `/${routePath}`;
  const canonicalUrl = normalizedPath === '/'
    ? SITE_ORIGIN
    : `${SITE_ORIGIN}${normalizedPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  );
}

function isStudyDocument(routePath: string) {
  return /^\/docs\/.+\/\d{4}\//.test(routePath);
}

function getDocId(page: Record<string, unknown>) {
  if (typeof page.docId === 'string') return page.docId;
  return String(page.routePath || '').replace(/^\/docs\/?/, '').replace(/\/$/, '');
}

export function Root({children}: RootProps) {
  return (
    <LanguageProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </LanguageProvider>
  );
}

export function FallbackHeading(props: FallbackHeadingProps) {
  const {frontmatter} = useFrontmatter();
  const {page} = usePage();
  const blogPost = (page as Record<string, any>).blogPost;
  // Blog titles are injected through `beforeDocContent` so they still appear
  // when an article contains its own H1 (the university index posts do).
  if (blogPost) return null;
  return frontmatter.hide_title ? null : <BasicFallbackHeading {...props} />;
}

export function Layout(props: LayoutProps) {
  const {page} = usePage();
  const routePath = String(page.routePath || '');
  const studyDocument = isStudyDocument(routePath);
  const blogPost = (page as Record<string, any>).blogPost;
  const generatedIndex = (page as Record<string, any>).generatedIndex;
  const generatedBlog = typeof generatedIndex?.kind === 'string'
    && generatedIndex.kind.startsWith('blog-')
    ? generatedIndex
    : null;
  const blogNavigation = blogPost ?? generatedBlog;
  const docId = getDocId(page);
  const layout = (
    <>
      <RouteMetadata routePath={routePath || '/'} />
      <BasicLayout
        {...props}
        afterNavMenu={(
          <div className="kai-rspress-nav-actions">
            <LanguageSwitcher />
            <NavbarLoginButton />
          </div>
        )}
        {...(blogNavigation ? {
          beforeSidebar: (
            <BlogSidebar
              posts={blogNavigation.sidebarPosts}
              activeRoute={routePath}
              embedded
            />
          ),
        } : {})}
        {...(blogPost ? {
          beforeDocContent: <BlogPostHeader post={blogPost} />,
          beforeDocFooter: <BlogPostFooter post={blogPost} />,
        } : studyDocument ? {
          beforeDocContent: <DocumentChangeNotice />,
          afterDocContent: <InlineAnnotationController />,
          beforeDocFooter: <DocStudyFooter />,
          afterOutline: <AnnotationSidebar />,
          afterDoc: <MobileAnnotationAccess />,
        } : {})}
      />
    </>
  );

  return studyDocument ? (
    <DocumentAnnotationsProvider key={docId} docId={docId}>
      {layout}
    </DocumentAnnotationsProvider>
  ) : layout;
}

// Rspress' static nav configuration is retained as the route source, while
// labels are resolved from the project's live `?lang=` state.
export const Nav = LocalizedNav;

export * from '@rspress/core/theme-original';
