// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
      mdxCrossCompilerCache: true,
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
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 添加本地搜索功能
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["zh", "en", "ja"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: "/docs",
        blogRouteBasePath: "/blog",
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
    '@docusaurus/theme-mermaid',
  ],

  // 添加SEO相关插件
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'standalone', 
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo-192.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3578e5',
          },
          {
            tagName: 'meta',
            name: 'mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#3578e5',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo-192.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-config',
            content: '/browserconfig.xml',
          },
        ],
        injectManifestConfig: {
          globPatterns: ['**/*.{js,html,css,svg,png,jpg,jpeg,gif}'],
        },
        
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeMathjax],
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Myyura/the_kai_project/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Myyura/the_kai_project/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        {name: 'description', content: '开源的、便捷的、分享与讨论日本大学院入学考试答案的平台'},
        {name: 'author', content: 'The Kai Project Team'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'The Kai Project - 分享与讨论日本大学院入学考试答案的平台'},
        {property: 'og:url', content: 'https://runjp.com'},
        {property: 'og:description', content: '开源的、便捷的、分享与讨论日本大学院入学考试答案的平台'},
        {property: 'og:image', content: 'https://runjp.com/img/docusaurus-social-card.png'},
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.png',
      navbar: {
        title: 'The Kai Project',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '过去问',
          },
          {to: '/blog', label: '经验贴', position: 'left'},
          {to: '/docs/tags', label: 'Tags', position: 'left'},
          {to: '/links', label: '参考链接', position: 'left'},
          {to: '/progress', label: '进度', position: 'left'},
          {to: '/legalstatement', label: '法律声明', position: 'left'},
          {
            href: 'https://github.com/Myyura/the_kai_project',
            label: 'GitHub',
            position: 'right',
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
                label: 'Tags',
                to: '/docs/tags',
              },
              {
                label: '参考链接',
                to: '/links',
              },
              {
                label: '法律声明',
                to: '/legalstatement',
              },
            ],
          },
          {
            title: 'Community',
            items: [
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
