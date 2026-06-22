import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  FaBookOpen,
  FaCamera,
  FaCloud,
  FaCode,
  FaEdit,
  FaExclamationTriangle,
  FaFileContract,
  FaRoute,
  FaShieldAlt,
  FaStickyNote,
  FaTasks,
} from 'react-icons/fa';
import { useCurrentLanguage } from '../context/LanguageContext';
import styles from './legalstatement.module.css';

const content = {
  zh: {
    title: '帮助与声明',
    subtitle: '这里集中说明 The Kai Project 的主要功能、投稿流程、版权与隐私政策。',
    guideTitle: '使用指南',
    guides: [
      {
        icon: FaBookOpen,
        title: '浏览过去问与题解',
        text: '从顶部「过去问」进入题库，按大学、研究科、年度和题目浏览。题解页面支持本地搜索、标签浏览和离线访问。',
      },
      {
        icon: FaTasks,
        title: '记录做题进度',
        text: '在题解页底部可标记已完成或待复习。登录后，进度会同步到个人中心，并展示统计、热力图和复习提醒。',
      },
      {
        icon: FaStickyNote,
        title: '写题目笔记',
        text: '每个题解页都可以记录 Markdown / LaTeX 笔记。登录后可跨设备同步，并在个人中心集中检索。',
      },
      {
        icon: FaCamera,
        title: '分享为图片',
        text: '题解页底部的「分享为图片」会把当前题解渲染为带来源标识的图片，方便学习群讨论和复习保存。',
      },
      {
        icon: FaEdit,
        title: '投稿与纠错',
        text: '在个人中心的「我的投稿」提交新题解；现有题解的纠错请从题解页底部进入，系统会自动带入目标题解。投稿会创建公开 GitHub Issue，维护者确认后再由 bot 转成规范 PR。',
        link: { to: '/me?tab=contribute', label: '前往我的投稿' },
      },
      {
        icon: FaCode,
        title: '开发者 API',
        text: '如果需要以 JSON 方式读取题库数据，可在个人中心申请 API 访问。审核通过后可以创建 API Key。',
        link: { to: '/me?tab=developer-api', label: '查看开发者 API' },
      },
    ],
    contributionTitle: '社区贡献流程',
    contributionSteps: [
      '轻度用户优先使用站内投稿表单提交新题解，不需要理解 Git、frontmatter、目录结构或 CI。',
      '现有题解的纠错从具体题解页底部进入，系统会自动带入目标文档。',
      '投稿默认进入公开 GitHub Issue，社区可以在 Issue 中讨论、补充来源或指出问题。',
      '维护者确认内容可用后，给 Issue 添加 submission:ready-for-pr 标签，bot 会生成 draft PR。',
      '正式公开内容仍以 Git 仓库中的 Markdown 为准；只有 PR 合并后才进入公开题库和 API 数据。',
    ],
    legalTitle: '法律与隐私声明',
    legalSections: [
      {
        icon: FaFileContract,
        title: '版权声明',
        items: [
          '本网站以开源项目和公开资料库为基础，核心公开内容包括题库索引、社区贡献题解、公开备考资料及相关说明。上述内容将持续面向公众开放访问，用于支持个人学习、研究与备考参考。',
          '为保障项目长期维护、技术服务与社区运营，本网站可能提供与学习体验、账号功能、数据接口、辅导支持或合作接入相关的配套功能。此类功能的提供方式不影响核心公开内容的开放访问属性。',
          '网站部分内容为个人学习、研究目的而合理使用他人已发表作品，并尽量注明作者及出处。如权利人认为涉嫌侵权，请于14个工作日内发送邮件至376672994@qq.com，我们将核实并按照权利人要求进行更正或删除。',
          '用户如需对公开内容进行批量复制、再分发、商业性接入或其他超出普通浏览和个人学习范围的使用，应遵守本网站另行公布的内容/API条款，并自行确保取得相关权利人的必要授权。',
        ],
      },
      {
        icon: FaExclamationTriangle,
        title: '免责声明',
        items: [
          '本网站可能保留第三方网站或网址链接，是否访问这些链接或接受第三方服务由您自行决定。访问第三方网站产生的结果和风险由您自行承担。',
          '在法律允许的范围内，我们不对第三方链接中的信息、数据、观点、图片、陈述或建议的准确性、完整性、充分性和可靠性提供承诺或保证。',
          '在法律允许的范围内，本网站不提供任何形式的关于内容及时性、有效性、完整性、可用性的保证。用户因使用本站内容导致的任何后果，本网站不承担法律责任。',
        ],
      },
      {
        icon: FaShieldAlt,
        title: '隐私声明',
        items: [
          '访问本站时，服务器可能自动收集浏览器或设备生成的信息，包括访问时间、浏览器类型、操作系统等。',
          '若您使用登录、个人中心、云同步、排行榜、投稿或开发者 API 功能，我们可能处理账号邮箱、认证标识、学习进度、题目笔记、投稿记录、API 申请信息、API Key 元数据及必要调用日志。',
          '上述信息主要用于提供账号登录、学习数据同步、个人中心展示、投稿状态、API 访问审核、安全风控、服务维护和用户支持。我们会根据功能需要采取合理的数据最小化措施。',
          '您可以在浏览器中管理 Cookie 和追踪机制设置。如需访问或删除个人信息，可通过下方联系方式联系我们。',
        ],
      },
    ],
    contactTitle: '联系我们',
    contactText: '如果您对本站声明、投稿流程或内容权利有任何疑问，请发送邮件至 376672994@qq.com。我们将在合理时间内回复。',
  },
  ja: {
    title: 'ヘルプと声明',
    subtitle: 'The Kai Project の主な機能、投稿フロー、著作権・プライバシーに関する説明をまとめています。',
    guideTitle: '使い方',
    guides: [
      { icon: FaBookOpen, title: '過去問と解答を見る', text: '「過去問」から大学・研究科・年度ごとに問題と解答を閲覧できます。' },
      { icon: FaTasks, title: '進捗を記録する', text: '問題ページで完了・復習中を記録し、ログイン後はマイページで同期・集計できます。' },
      { icon: FaStickyNote, title: 'ノートを書く', text: '各問題ページで Markdown / LaTeX 対応ノートを保存できます。' },
      { icon: FaCamera, title: '画像として共有', text: '問題ページ下部から、出典付きの画像として解答を共有できます。' },
      { icon: FaEdit, title: '投稿と訂正', text: '新規解答はマイページの投稿機能から送信します。既存解答の訂正は問題ページ下部から開始すると、対象文書が自動入力されます。', link: { to: '/me?tab=contribute', label: '投稿へ' } },
      { icon: FaCode, title: '開発者 API', text: 'JSON API の利用申請と API Key 管理はマイページで行えます。', link: { to: '/me?tab=developer-api', label: 'API を見る' } },
    ],
    contributionTitle: 'コミュニティ投稿フロー',
    contributionSteps: [
      '軽い投稿者はサイト内フォームから新規解答を投稿でき、Git や文書形式を理解する必要はありません。',
      '既存解答の訂正は各問題ページ下部から開始し、対象文書を手入力しない設計です。',
      '投稿は公開 GitHub Issue になり、コミュニティで確認できます。',
      'メンテナーが確認後、ラベルを付けると bot が draft PR を作成します。',
      '正式公開される内容は、PR がマージされた Git リポジトリ内の Markdown を正とします。',
    ],
    legalTitle: '法的事項とプライバシー',
    legalSections: [
      {
        icon: FaFileContract,
        title: '著作権について',
        items: [
          '本サイトの中核的な公開コンテンツは、個人の学習・研究・受験準備を支援するため継続的に公開されます。',
          '補助機能、API、学習支援、提携連携などの提供形態は、中核的な公開コンテンツの公開アクセス性を変更するものではありません。',
          '権利侵害の可能性がある場合は 376672994@qq.com までご連絡ください。確認の上、訂正または削除します。',
        ],
      },
      {
        icon: FaExclamationTriangle,
        title: '免責事項',
        items: [
          '外部リンクへのアクセスおよび第三者サービスの利用は利用者ご自身の判断によります。',
          '本サイトの内容の正確性、完全性、利用可能性について、法律で許容される範囲で保証を行いません。',
        ],
      },
      {
        icon: FaShieldAlt,
        title: 'プライバシー',
        items: [
          'ログイン、同期、投稿、API 機能の提供に必要な範囲で、アカウント情報や利用記録を処理する場合があります。',
          'これらの情報はサービス提供、保守、安全対策、サポートのために利用されます。',
        ],
      },
    ],
    contactTitle: 'お問い合わせ',
    contactText: 'ご質問は 376672994@qq.com までメールでお問い合わせください。',
  },
  en: {
    title: 'Help & Notices',
    subtitle: 'A concise guide to The Kai Project features, contribution flow, copyright, and privacy.',
    guideTitle: 'User Guide',
    guides: [
      { icon: FaBookOpen, title: 'Browse exams and solutions', text: 'Use Past Exams to browse by university, department, year, and question.' },
      { icon: FaTasks, title: 'Track progress', text: 'Mark questions as completed or reviewing, then view synced stats in your personal center.' },
      { icon: FaStickyNote, title: 'Write notes', text: 'Each question page supports Markdown / LaTeX notes.' },
      { icon: FaCamera, title: 'Share as image', text: 'Create a source-marked image from a solution page for study discussions.' },
      { icon: FaEdit, title: 'Submit or correct content', text: 'Use the contribution tab in your personal center for new solutions. Open corrections from the bottom of an existing solution page so the target document is filled automatically.', link: { to: '/me?tab=contribute', label: 'Open submissions' } },
      { icon: FaCode, title: 'Developer API', text: 'Apply for JSON API access and manage API keys in your personal center.', link: { to: '/me?tab=developer-api', label: 'Open API' } },
    ],
    contributionTitle: 'Community Contribution Flow',
    contributionSteps: [
      'Light contributors submit new solutions through the website without knowing Git, frontmatter, or CI.',
      'Corrections for existing solutions start from the bottom of that solution page so the target document is filled automatically.',
      'Submissions become public GitHub Issues for discussion.',
      'Maintainers add the ready label when content is usable, and the bot opens a draft PR.',
      'Merged Markdown in the Git repository remains the source of truth for public content and API data.',
    ],
    legalTitle: 'Legal & Privacy Notices',
    legalSections: [
      {
        icon: FaFileContract,
        title: 'Copyright',
        items: [
          'Core public content remains openly accessible to support personal study, research, and exam preparation.',
          'Supporting features such as accounts, APIs, tutoring support, or integrations do not change the open-access nature of accepted core content.',
          'If you believe any content infringes your rights, contact 376672994@qq.com and we will review the request.',
        ],
      },
      {
        icon: FaExclamationTriangle,
        title: 'Disclaimer',
        items: [
          'External links are accessed at your own decision and risk.',
          'To the extent permitted by law, this website provides no warranty regarding timeliness, completeness, availability, or accuracy of content.',
        ],
      },
      {
        icon: FaShieldAlt,
        title: 'Privacy',
        items: [
          'When you use login, sync, submissions, or API features, we may process account metadata and necessary service records.',
          'This information is used for service delivery, maintenance, security, review, and support.',
        ],
      },
    ],
    contactTitle: 'Contact',
    contactText: 'For questions, please email 376672994@qq.com.',
  },
};

function getLanguageContent(language) {
  if (language === 'ja') return content.ja;
  if (language === 'en') return content.en;
  return content.zh;
}

export default function LegalStatement() {
  const language = useCurrentLanguage();
  const t = getLanguageContent(language);

  return (
    <Layout title={t.title}>
      <main className={styles.shell}>
        <section className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>The Kai Project</span>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaRoute />
            <h2>{t.guideTitle}</h2>
          </div>
          <div className={styles.guideGrid}>
            {t.guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <article key={guide.title} className={styles.guideCard}>
                  <Icon className={styles.guideIcon} />
                  <h3>{guide.title}</h3>
                  <p>{guide.text}</p>
                  {guide.link && (
                    <Link to={guide.link.to} className={styles.inlineLink}>
                      {guide.link.label}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaEdit />
            <h2>{t.contributionTitle}</h2>
          </div>
          <ol className={styles.processList}>
            {t.contributionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaFileContract />
            <h2>{t.legalTitle}</h2>
          </div>
          <div className={styles.noticeStack}>
            {t.legalSections.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className={styles.noticePanel}>
                  <div className={styles.noticeTitle}>
                    <Icon />
                    <h3>{section.title}</h3>
                  </div>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.contactPanel}>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </section>
      </main>
    </Layout>
  );
}
