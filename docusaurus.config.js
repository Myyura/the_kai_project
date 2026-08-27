// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {readFileSync} from 'node:fs';
import remarkMath from 'remark-math';
import rehypeKatexWithMhchem from './src/markdown/rehypeKatexWithMhchem.js';
import rehypeAnnotationSourceLines from './src/markdown/rehypeAnnotationSourceLines.js';
import rehypeStudySections from './src/markdown/rehypeStudySections.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sequentialBundles = process.env.DOCUSAURUS_SEQUENTIAL_BUNDLES === 'true';
const localMemoryProfile = process.env.KAI_ENFORCED_BUILD_PROFILE === '16gb';
const pagesBuildProfile = 'github-pages-phased-8gb-v1';
const pagesMemoryProfile = process.env.KAI_BUILD_PROFILE === pagesBuildProfile;
const memoryConstrainedBuildProfile = localMemoryProfile || pagesMemoryProfile;
const docusaurusArgs = process.argv.slice(2);
const isDirectBuild = docusaurusArgs.includes('build')
  || (docusaurusArgs.includes('deploy') && !docusaurusArgs.includes('--skip-build'));
const requiredBuildEnvironment = {
  KAI_ENFORCED_BUILD_PROFILE: '16gb',
  DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
  DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '1',
  DOCUSAURUS_SSR_CONCURRENCY: '4',
  DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '1',
};
const hasRequiredBuildEnvironment = Object.entries(requiredBuildEnvironment)
  .every(([name, value]) => process.env[name] === value)
  && /(?:^|\s)--max[-_]old[-_]space[-_]size=6144(?:\s|$)/.test(
    process.env.NODE_OPTIONS || '',
  );
const requiredPagesBuildEnvironment = {
  KAI_BUILD_PROFILE: pagesBuildProfile,
  DOCUSAURUS_SEQUENTIAL_BUNDLES: 'true',
  DOCUSAURUS_NO_PERSISTENT_CACHE: 'true',
  DISABLE_RSPACK_INCREMENTAL: 'true',
  DOCUSAURUS_SSG_WORKER_THREAD_COUNT: '2',
  DOCUSAURUS_SSG_WORKER_THREAD_RECYCLER_MAX_MEMORY: '300000000',
  RAYON_NUM_THREADS: '1',
  RSPACK_BLOCKING_THREADS: '1',
};
const hasRequiredPagesBuildEnvironment = Object.entries(requiredPagesBuildEnvironment)
  .every(([name, value]) => process.env[name] === value)
  && process.env.KAI_ENFORCED_BUILD_PROFILE === undefined
  && process.env.DOCUSAURUS_SSR_CONCURRENCY === undefined
  && /(?:^|\s)--max[-_]old[-_]space[-_]size=8192(?:\s|$)/.test(
    process.env.NODE_OPTIONS || '',
  );

if (
  isDirectBuild
  && !hasRequiredBuildEnvironment
  && !hasRequiredPagesBuildEnvironment
) {
  throw new Error(
    'Unknown Docusaurus build profile. Use `yarn build` for the protected '
      + 'local build or `yarn build:pages` for the GitHub Pages build.',
  );
}

const chunkRecoveryBootstrap = readFileSync(
  new URL('./src/clientModules/chunkRecoveryBootstrap.js', import.meta.url),
  'utf8',
);

function getYearCategoryLabel(item) {
  if (item.type !== 'category') {
    return null;
  }

  const match = item.label.match(/^(\d{4})年度$/);
  return match ? Number(match[1]) : null;
}

function sortYearCategoriesDesc(items) {
  const itemsWithSortedChildren = items.map((item) => (
    item.type === 'category'
      ? {...item, items: sortYearCategoriesDesc(item.items)}
      : item
  ));
  const yearCategories = itemsWithSortedChildren
    .filter((item) => getYearCategoryLabel(item) !== null)
    .sort((a, b) => getYearCategoryLabel(b) - getYearCategoryLabel(a));

  let yearIndex = 0;
  return itemsWithSortedChildren.map((item) => (
    getYearCategoryLabel(item) === null ? item : yearCategories[yearIndex++]
  ));
}

function safeRspackJsMinifierPlugin() {
  return {
    name: 'safe-rspack-js-minifier',
    configureWebpack(config, isServer, {currentBundler}) {
      if (isServer || currentBundler.name !== 'rspack') {
        return {};
      }

      const rspack = require('@rspack/core');
      const currentMinimizers = config.optimization?.minimizer || [];
      const jsMinimizer = new rspack.SwcJsMinimizerRspackPlugin({
        minimizerOptions: {
          minify: true,
          ecma: 2020,
          compress: {
            ecma: 5,
          },
          module: true,
          mangle: true,
          safari10: true,
          format: {
            ecma: 5,
            comments: false,
            ascii_only: true,
            quote_keys: true,
            keep_quoted_props: true,
          },
        },
      });

      return {
        mergeStrategy: {
          'optimization.minimizer': 'replace',
        },
        optimization: {
          minimizer: [jsMinimizer, ...currentMinimizers.slice(1)],
        },
      };
    },
  };
}

function sequentialBundlesPlugin() {
  return {
    name: 'sequential-bundles',
    configureWebpack(_config, isServer) {
      if (!sequentialBundles) {
        return {};
      }

      // Docusaurus normally builds both configurations at once. Make the
      // larger client bundle wait for the server bundle. Module concatenation
      // is disabled for both memory-constrained production profiles:
      // Docusaurus documents it as expensive for large sites, while its usual
      // benefit is only about a 3% reduction in total JavaScript asset size.
      if (isServer) {
        return {name: 'server'};
      }

      return {
        name: 'client',
        dependencies: ['server'],
        ...(memoryConstrainedBuildProfile && {
          optimization: {
            concatenateModules: false,
          },
        }),
      };
    },
  };
}

const docsPluginOptions = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [
    rehypeAnnotationSourceLines,
    [rehypeKatexWithMhchem, {
      // Existing exam content includes CJK text inside math expressions.
      strict: false,
      throwOnError: true,
    }],
    rehypeStudySections,
  ],
  sidebarPath: './sidebars.js',
  sidebarItemsGenerator: async (generatorArgs) => {
    const sidebarItems = await generatorArgs.defaultSidebarItemsGenerator(generatorArgs);
    return sortYearCategoriesDesc(sidebarItems);
  },
};

 /** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
      // The cross-compiler cache coordinates concurrent MDX loaders and would
      // deadlock when the server and client configurations run sequentially.
      mdxCrossCompilerCache: !sequentialBundles,
    },
    experimental_storage: {
      type: 'localStorage',
      namespace: true,
    },
    experimental_router: 'browser',
  },
  

  title: 'The Kai Project',
  tagline: 'Answer to the Ultimate Question of Life, the Universe, and Everything',
  favicon: 'img/favicon.ico',

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {'data-kai-chunk-recovery': 'v1'},
      innerHTML: chunkRecoveryBootstrap,
    },
    // KaTeX CSS is loaded from jsDelivr for documentation pages and reused by NoteEditor.
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: 'anonymous' } },
  ],

  // Supabase 凭据通过环境变量注入（GitHub Secrets → CI 环境变量）
  customFields: {
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
    hcaptchaSiteKey: process.env.HCAPTCHA_SITE_KEY || '',
    problemSetsEnabled: process.env.PROBLEM_SETS_ENABLED === 'true',
  },
  

  // Set the production url of your site here
  url: 'https://runjp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  markdown: {
    format: 'detect', // 推荐使用此值
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Myyura', // Usually your GitHub org/user name.
  projectName: 'the_kai_project', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // 客户端模块 - 在页面加载时立即执行
  clientModules: [
    require.resolve('./src/clientModules/languageInit.js'),
    // One-release cleanup for service workers installed by the retired web PWA.
    require.resolve('./src/clientModules/removeLegacyPwa.js'),
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {
        label: '中文',
        htmlLang: 'zh-Hans',
      },
    },
  },

  // 添加本地搜索功能
  themes: /** @type {import('@docusaurus/types').PluginConfig[]} */ ([
    [
      require.resolve('./plugins/memory-safe-search-local/index.cjs'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions & {boundedScanConcurrency: number, deferSearchIndex: boolean}} */
      ({
        boundedScanConcurrency: 4,
        // Pages resumes this work in a fresh Node process after Docusaurus exits,
        // so Rspack's retained native memory cannot crowd out search indexing.
        deferSearchIndex: hasRequiredPagesBuildEnvironment,
        hashed: true,
        language: ["zh", "en", "ja"],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: "/docs",
        blogRouteBasePath: "/blog",
        highlightSearchTermsOnTargetPage: false,
        ignoreCssSelectors: [
          'nav',
          'footer',
          '.breadcrumbs',
          '.table-of-contents',
          '.pagination-nav',
          '.theme-doc-footer',
        ],
      }),
    ],
    '@docusaurus/theme-mermaid',
  ]),

  // 添加SEO相关插件
  plugins: [
    safeRspackJsMinifierPlugin,
    sequentialBundlesPlugin,
    [require.resolve('./plugins/compact-docs/index.cjs'), docsPluginOptions],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          ignorePatterns: [
            '/auth/callback',
            '/login',
            '/me',
            '/reset-password',
            '/search',
          ],
        },
        gtag: {
          trackingID: 'G-JJMZK98D6Y',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO相关配置
      metadata: [
        {name: 'keywords', content: '過去問, 日本考研, 修士, 过去问答案, 東京大学, 大学院院试, 情报理工'},
        {name: 'description', content: '开源的日本大学院入试过去问与公开题解共享平台，破除信息之壁 | オープンソースの大学院入試過去問・公開解答共有プラットフォーム | Open-source platform for Japanese graduate school entrance exam archives and public solutions'},
        {name: 'author', content: 'The Kai Project Team'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'The Kai Project - 日本大学院入試過去問解答 | 日本考研过去问答案'},
        {property: 'og:url', content: 'https://runjp.com'},
        {property: 'og:description', content: '开源的日本大学院入试过去问与公开题解共享平台，破除信息之壁 | オープンソースの大学院入試過去問・公開解答共有プラットフォーム | Open-source platform for Japanese graduate school entrance exam archives and public solutions'},
        {property: 'og:image', content: 'https://runjp.com/img/kai-social-card.png'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      image: 'img/kai-social-card.png',
      navbar: {
        title: 'The Kai Project',
        logo: {
          alt: 'Kai icon',
          src: 'img/kai-icon.png',
          srcDark: 'img/kai-icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '过去问',
          },
          {to: '/blog', label: '经验贴', position: 'left'},
          {to: '/me', label: '个人中心', position: 'left'},
          {
            type: 'dropdown',
            label: '更多',
            position: 'left',
            items: [
              {to: '/links', label: '参考链接'},
              {to: '/support', label: '支持与合作'},
              {to: '/help', label: '帮助与声明'},
            ],
          },
          {
            href: 'https://github.com/Myyura/the_kai_project',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kai Project',
            items: [
              {
                label: '过去问',
                to: '/docs/intro',
              },
              {
                label: '经验贴',
                to: '/blog',
              },
              {
                label: '标签',
                to: '/docs/tags',
              },
              {
                label: '参考链接',
                to: '/links',
              },
              {
                label: '个人中心',
                to: '/me',
              },
              {
                label: '帮助与声明',
                to: '/help',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/VcUHXzB9Mk',
              },
              {
                label: 'QQ group: 925154731',
                href: 'https://qm.qq.com/q/MVPd9wniQU',
              },
            ],
          },
          {
            title: 'More',
            items: [              
              {
                label: '支持与合作',
                to: '/support',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Myyura/the_kai_project',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Kai Project. AGPL v3. Built with Docusaurus & 🩷.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
