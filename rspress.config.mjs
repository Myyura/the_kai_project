import {readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Keep the site config as native ESM without changing the repository-wide
// CommonJS package mode used by the validation and export scripts.

import {defineConfig} from '@rspress/core';
import {pluginRss} from '@rspress/plugin-rss';
import rspressPluginMermaid from 'rspress-plugin-mermaid';
import remarkMath from 'remark-math';

import {createKaiRoutesPlugin} from './plugins/rspress-kai-routes.mjs';
import {createKaiSitemapPlugin} from './plugins/rspress-kai-sitemap.mjs';
import {buildDocsSidebar} from './scripts/rspress-sidebar.mjs';
import rehypeAnnotationSourceLines from './src/markdown/rehypeAnnotationSourceLines.js';
import rehypeKatexWithMhchem from './src/markdown/rehypeKatexWithMhchem.js';
import rehypeStudySections from './src/markdown/rehypeStudySections.js';
import remarkKaiCodeBlocks from './src/markdown/remarkKaiCodeBlocks.js';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const siteOrigin = 'https://runjp.com';
const siteDescription = '开源的日本大学院入试过去问与公开题解共享平台，破除信息之壁 | オープンソースの大学院入試過去問・公開解答共有プラットフォーム | Open-source platform for Japanese graduate school entrance exam archives and public solutions';
const chunkRecoveryBootstrap = readFileSync(
  path.join(projectRoot, 'src/clientModules/chunkRecoveryBootstrap.js'),
  'utf8',
).replace(/<\/script/gi, '<\\/script');

export default defineConfig({
  root: path.join(projectRoot, 'docs'),
  outDir: path.join(projectRoot, 'build'),
  themeDir: path.join(projectRoot, 'theme'),
  title: 'The Kai Project',
  description: siteDescription,
  siteOrigin,
  base: '/',
  // `zh` selects Rspress' built-in Simplified Chinese theme strings. The
  // project's independent three-language content switcher remains unchanged.
  lang: 'zh',
  icon: new URL('./static/img/favicon.ico', import.meta.url),
  logo: '/img/kai-icon.png',
  logoText: 'The Kai Project',
  logoHref: '/',

  // All public routes are registered explicitly so the Docusaurus URL space
  // remains stable. In particular, docs keep their historical `/docs/*`
  // prefix and blog posts keep their dated permalinks.
  route: {
    exclude: ['**/*'],
    cleanUrls: true,
    localeRedirect: 'never',
  },

  head: [
    `<script data-kai-chunk-recovery="v1">${chunkRecoveryBootstrap}</script>`,
    ['meta', {
      name: 'keywords',
      content: '過去問, 日本考研, 修士, 过去问答案, 東京大学, 大学院院试, 情报理工',
    }],
    ['meta', {name: 'author', content: 'The Kai Project Team'}],
    ['meta', {property: 'og:image', content: `${siteOrigin}/img/kai-social-card.png`}],
    ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
    '<script async src="https://www.googletagmanager.com/gtag/js?id=G-JJMZK98D6Y"></script>',
    '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","G-JJMZK98D6Y",{anonymize_ip:true});</script>',
  ],

  themeConfig: {
    darkMode: 'auto',
    search: true,
    nav: [
      {text: '过去问', link: '/docs/intro', activeMatch: '^/docs/'},
      {text: '经验贴', link: '/blog', activeMatch: '^/blog(?:/|$)'},
      {text: '个人中心', link: '/me'},
      {
        text: '更多',
        items: [
          {text: '参考链接', link: '/links'},
          {text: '支持与合作', link: '/support'},
          {text: '帮助与声明', link: '/help'},
        ],
      },
    ],
    sidebar: buildDocsSidebar(),
    editLink: {
      docRepoBaseUrl: 'https://github.com/Myyura/the_kai_project/tree/main/docs',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Myyura/the_kai_project',
      },
    ],
    footer: {
      message: `Copyright © ${new Date().getFullYear()} The Kai Project. AGPL v3. Built with Rspress & 🩷.`,
    },
  },

  search: {
    mode: 'local',
    codeBlocks: false,
  },

  ssg: {
    // Rendering the whole archive in a recyclable worker prevents Node's
    // module cache from retaining every math-heavy route until process exit.
    experimentalWorker: true,
  },

  markdown: {
    // This corpus expands thousands of math-heavy Markdown files into large
    // JavaScript modules. Keeping every compiled module in Rspress' in-memory
    // cross-compiler cache can exceed a 6 GiB heap before either bundle ends.
    crossCompilerCache: false,
    remarkPlugins: [remarkMath, remarkKaiCodeBlocks],
    rehypePlugins: [
      rehypeAnnotationSourceLines,
      [rehypeKatexWithMhchem, {strict: false, throwOnError: true}],
      rehypeStudySections,
    ],
    globalComponents: [
      path.join(projectRoot, 'src/rspress/MoleculeFigure.jsx'),
    ],
    link: {
      // The route plugin keeps non-file Docusaurus category and tag URLs.
      // Rspress' file-only checker cannot resolve all of those virtual pages.
      checkDeadLinks: false,
      checkAnchors: false,
      autoPrefix: false,
    },
    image: {
      checkDeadImages: true,
    },
    shiki: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Rspress runs Shiki before user rehype plugins. remark-math represents
      // display formulas as `language-math` code blocks at that point; leave
      // those nodes untouched so the following KaTeX plugin can consume them.
      onError(error) {
        if (String(error).includes('Language `math`')) return;
        throw error;
      },
    },
  },

  builderConfig: {
    source: {
      define: {
        'process.env.KAI_PUBLIC_SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL || ''),
        'process.env.KAI_PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(process.env.SUPABASE_ANON_KEY || ''),
        'process.env.KAI_PUBLIC_HCAPTCHA_SITE_KEY': JSON.stringify(process.env.HCAPTCHA_SITE_KEY || ''),
        'process.env.KAI_PUBLIC_PROBLEM_SETS_ENABLED': JSON.stringify(process.env.PROBLEM_SETS_ENABLED || 'false'),
      },
    },
    resolve: {
      alias: {
        '@site': projectRoot,
      },
      dedupe: ['react', 'react-dom', 'react-router-dom'],
    },
    server: {
      publicDir: {
        name: path.join(projectRoot, 'static'),
        copyOnBuild: true,
        watch: true,
      },
    },
    output: {
      sourceMap: false,
    },
    tools: {
      rspack(config, {environment, environments, isProd}) {
        // Rspress normally compiles its browser and SSG graphs together. Each
        // graph contains the full exam corpus, so sequence them on production
        // builds to keep only one large Rspack compilation live at a time.
        config.name = environment.name;
        if (
          isProd
          && process.env.KAI_RSPRESS_SPLIT_BUILD !== 'true'
          && environment.name === 'web'
          && environments.node
        ) {
          config.dependencies = ['node'];
        }
      },
    },
  },

  plugins: [
    createKaiRoutesPlugin(),
    rspressPluginMermaid({
      mermaidConfig: {
        theme: 'default',
        securityLevel: 'strict',
      },
    }),
    pluginRss({
      siteUrl: siteOrigin,
      feed: [
        {
          id: 'rss',
          title: 'The Kai Project 经验分享',
          copyright: `Copyright © ${new Date().getFullYear()} The Kai Project`,
          language: 'zh-Hans',
          test: (page) => /^\/blog\/\d{4}\/\d{2}\/\d{2}\//.test(page.routePath),
          output: {dir: 'blog', filename: 'rss.xml', type: 'rss'},
        },
        {
          id: 'atom',
          title: 'The Kai Project 经验分享',
          copyright: `Copyright © ${new Date().getFullYear()} The Kai Project`,
          language: 'zh-Hans',
          test: (page) => /^\/blog\/\d{4}\/\d{2}\/\d{2}\//.test(page.routePath),
          output: {dir: 'blog', filename: 'atom.xml', type: 'atom'},
        },
      ],
    }),
    createKaiSitemapPlugin({siteUrl: siteOrigin}),
  ],
});
