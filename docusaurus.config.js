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
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Myyura', // Usually your GitHub org/user name.
  projectName: 'the_kai_project', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        language: ["zh", "en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: "/docs",
        blogRouteBasePath: "/blog",
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
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
            name: 'apple-mobile-web-app-capable',
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO相关配置
      metadata: [
        {name: 'keywords', content: '考试, 過去問, 考研, 分享, 修士, 答案, 信息共享, 开源'},
        {name: 'description', content: '开源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁'},
        {name: 'author', content: 'The Kai Project Team'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'The Kai Project - 分享与讨论修考试题答案的平台'},
        {property: 'og:url', content: 'https://runjp.com'},
        {property: 'og:description', content: '开源的、便捷的、分享与讨论修考试题答案的平台，破除信息之壁'},
        {property: 'og:image', content: 'https://runjp.com/img/docusaurus-social-card.png'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
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
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '過去問',
          },
          {to: '/blog', label: '经验贴', position: 'left'},
          {to: '/docs/tags', label: 'Tags', position: 'left'},
          {to: '/links', label: '友情链接', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
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
                label: '過去問',
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
                label: '友情链接',
                to: '/links',
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
        copyright: `Copyright © ${new Date().getFullYear()} The Kai Project. AGPL v3. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
