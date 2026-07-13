import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  FaBookOpen,
  FaCamera,
  FaCode,
  FaEdit,
  FaExclamationTriangle,
  FaFileContract,
  FaLayerGroup,
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
        icon: FaLayerGroup,
        title: '整理私人题集',
        text: '登录后可把题目加入「稍后再做」「错题本」或自定义题集，在个人中心管理、排序并按题集连续刷题。题集默认仅本人可见。',
        link: { to: '/me?tab=sets', label: '打开我的题集' },
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
      '希望轻量参与贡献的用户可直接通过站内表单提交新题解，不需要了解 Git、frontmatter、目录结构或 CI。',
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
          '网站部分内容出于个人学习、研究目的，在必要范围内引用或使用他人已发表作品，并尽量注明作者及出处。如权利人认为相关内容涉嫌侵权，请发送邮件至 376672994@qq.com；我们将在收到通知后的 14 个工作日内核实，并视情况进行更正或删除。',
          '用户如需对公开内容进行批量复制、再分发、商业性接入或其他超出普通浏览和个人学习范围的使用，应遵守本网站另行公布的内容或 API 条款，并自行确保已取得相关权利人的必要授权。',
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
          '若您使用登录、个人中心、云同步、私人题集、排行榜、投稿或开发者 API 功能，我们可能处理账号邮箱、认证标识、统一公开昵称、学习进度、题目笔记、私人题集及选题说明、投稿记录、API 申请信息、API Key 元数据及必要调用日志。',
          '刷题排行榜默认展示全站统一昵称，不展示邮箱。您可在个人中心关闭排行榜可见性；关闭后不参与公开排名和参与人数统计，但仍可查看自己的练习数量。',
          '上述信息主要用于提供账号登录、学习数据同步、个人中心展示、投稿状态、API 访问审核、安全风控、服务维护和用户支持。我们会根据功能需要采取合理的数据最小化措施。',
          '您可以在浏览器中管理 Cookie 和追踪机制设置。如需访问或删除个人信息，可通过下方联系方式联系我们。',
        ],
      },
    ],
    contactTitle: '联系我们',
    contactText: '如果您对本站声明、投稿流程或内容权利有任何疑问，请发送邮件至 376672994@qq.com。我们将在合理时间内回复。',
  },
  ja: {
    title: 'ヘルプ・法的情報',
    subtitle: 'The Kai Project の主な機能、投稿の流れ、著作権、免責事項、プライバシーについてご案内します。',
    guideTitle: '利用ガイド',
    guides: [
      {
        icon: FaBookOpen,
        title: '過去問・解答を探す',
        text: '上部メニューの「過去問」から、大学、研究科、年度、問題ごとに閲覧できます。解答ページではサイト内検索、タグによる絞り込み、オフライン閲覧も利用できます。',
      },
      {
        icon: FaTasks,
        title: '学習進捗を記録する',
        text: '解答ページの下部で、問題を「完了」または「要復習」に設定できます。ログインするとマイページへ同期され、集計、学習ヒートマップ、復習リマインダーを確認できます。',
      },
      {
        icon: FaStickyNote,
        title: '問題ノートを書く',
        text: '各解答ページに Markdown / LaTeX 対応のノートを保存できます。ログイン後は端末間で同期され、マイページからまとめて検索できます。',
      },
      {
        icon: FaLayerGroup,
        title: '自分用の問題セットを整理する',
        text: 'ログイン後、「あとで解く」「間違いノート」またはカスタムセットへ問題を追加し、マイページで管理・並べ替え・連続演習できます。セットは本人のみ閲覧できます。',
        link: { to: '/me?tab=sets', label: '問題セットを開く' },
      },
      {
        icon: FaCamera,
        title: '画像として共有する',
        text: '解答ページ下部の「画像として共有」から、出典表示付きの画像を作成できます。学習グループでの共有や復習用の保存に利用できます。',
      },
      {
        icon: FaEdit,
        title: '解答の投稿・訂正',
        text: '新しい解答はマイページの「投稿」から送信できます。既存解答の訂正は、その解答ページ下部から開始すると対象文書が自動で入力されます。投稿内容は公開 GitHub Issue となり、メンテナーの確認後に Bot が下書き PR を作成します。',
        link: { to: '/me?tab=contribute', label: '投稿ページを開く' },
      },
      {
        icon: FaCode,
        title: '開発者 API',
        text: '問題データを JSON 形式で取得する場合は、マイページから API 利用を申請できます。承認後に API Key を作成・管理できます。',
        link: { to: '/me?tab=developer-api', label: '開発者 API を開く' },
      },
    ],
    contributionTitle: 'コミュニティへの投稿手順',
    contributionSteps: [
      'Git、frontmatter、ディレクトリ構成、CI に詳しくない方も、サイト内フォームから新しい解答を投稿できます。',
      '既存解答の訂正は対象ページの下部から開始します。対象文書は自動で入力されます。',
      '投稿内容は原則として公開 GitHub Issue になり、コミュニティが出典の補足や問題点の指摘を行えます。',
      'メンテナーが内容を確認し、Issue に submission:ready-for-pr ラベルを付けると、Bot が下書き PR を作成します。',
      '正式に公開される内容は Git リポジトリ内の Markdown を正とし、PR のマージ後に公開問題集と API データへ反映されます。',
    ],
    legalTitle: '法的情報・プライバシー',
    legalSections: [
      {
        icon: FaFileContract,
        title: '著作権に関する方針',
        items: [
          '本サイトはオープンソースプロジェクトおよび公開資料アーカイブとして運営されています。主要な公開コンテンツには、問題集の索引、コミュニティが投稿した解答、公開されている受験資料、関連する説明が含まれ、個人の学習、研究、受験準備を支援する目的で継続的に公開されます。',
          'プロジェクトの継続的な保守、技術提供、コミュニティ運営のため、学習体験、アカウント機能、データ API、学習支援、外部連携などの付加機能を提供する場合があります。これらの提供方法によって、主要な公開コンテンツの公開性が損なわれることはありません。',
          '本サイトの一部では、個人の学習・研究を目的として、第三者が公表した著作物を必要な範囲で引用または利用し、可能な限り著作者および出典を表示しています。権利侵害のおそれがあると思われる場合は 376672994@qq.com までご連絡ください。通知受領後 14 営業日以内に確認し、必要に応じて訂正または削除します。',
          '公開コンテンツの一括複製、再配布、商用連携、その他通常の閲覧や個人学習の範囲を超える利用については、別途公開するコンテンツまたは API の利用条件に従い、必要な権利者の許諾を利用者自身で取得してください。',
        ],
      },
      {
        icon: FaExclamationTriangle,
        title: '免責事項',
        items: [
          '本サイトには第三者が運営するウェブサイトへのリンクが含まれる場合があります。リンク先へのアクセスおよび第三者サービスの利用は、利用者ご自身の判断と責任で行ってください。',
          '法令で認められる範囲において、リンク先に掲載される情報、データ、見解、画像、表明または助言の正確性、完全性、十分性、信頼性を保証しません。',
          '法令で認められる範囲において、本サイトは掲載内容の適時性、有効性、完全性、利用可能性を保証せず、本サイトの利用によって生じた結果について責任を負いません。',
        ],
      },
      {
        icon: FaShieldAlt,
        title: 'プライバシーに関する方針',
        items: [
          '本サイトへのアクセス時に、アクセス日時、ブラウザーの種類、オペレーティングシステムなど、ブラウザーまたは端末から送信される情報をサーバーが自動的に収集する場合があります。',
          'ログイン、マイページ、クラウド同期、非公開の問題セット、学習ランキング、投稿、開発者 API を利用する場合、メールアドレス、認証識別子、統一公開ニックネーム、学習進捗、問題ノート、問題セットと選択メモ、投稿履歴、API 利用申請、API Key のメタデータ、必要なアクセスログを処理する場合があります。',
          '学習ランキングには統一公開ニックネームが表示され、メールアドレスは表示されません。マイページでランキング公開を無効にすると、公開順位と参加人数から除外されますが、自分の学習数は確認できます。',
          'これらの情報は、ログイン、学習データの同期、マイページの表示、投稿状況の確認、API 利用審査、安全対策、サービスの保守、利用者サポートのために使用します。機能の提供に必要な範囲で、データの最小化に努めます。',
          'Cookie やトラッキングに関する設定はブラウザーで管理できます。ご自身の個人情報の開示または削除を希望する場合は、下記の連絡先までお問い合わせください。',
        ],
      },
    ],
    contactTitle: 'お問い合わせ',
    contactText: '本ページの内容、投稿手順、コンテンツの権利に関するご質問は、376672994@qq.com までメールでお問い合わせください。合理的な期間内に回答します。',
  },
  en: {
    title: 'Help & Notices',
    subtitle: 'A guide to The Kai Project’s main features, contribution process, copyright policy, disclaimers, and privacy practices.',
    guideTitle: 'User Guide',
    guides: [
      {
        icon: FaBookOpen,
        title: 'Browse past exams and solutions',
        text: 'Open Past Exams from the top navigation to browse by university, graduate school, year, and question. Solution pages also support local search, tag-based browsing, and offline access.',
      },
      {
        icon: FaTasks,
        title: 'Track your progress',
        text: 'Mark a problem as completed or needing review at the bottom of its solution page. After you log in, your progress syncs to the Personal Center, where you can view statistics, a study heatmap, and review reminders.',
      },
      {
        icon: FaStickyNote,
        title: 'Write problem notes',
        text: 'Save Markdown and LaTeX notes on any solution page. After you log in, notes sync across devices and can be searched from the Personal Center.',
      },
      {
        icon: FaLayerGroup,
        title: 'Organize private problem sets',
        text: 'After logging in, add problems to Do Later, Mistake Book, or custom sets. Manage, reorder, and practise them in sequence from Personal Center. These sets are private to your account.',
        link: { to: '/me?tab=sets', label: 'Open Problem Sets' },
      },
      {
        icon: FaCamera,
        title: 'Share as an image',
        text: 'Use Share as Image at the bottom of a solution page to create an image that includes source attribution, suitable for study-group discussions or personal review.',
      },
      {
        icon: FaEdit,
        title: 'Submit or correct a solution',
        text: 'Submit a new solution from Submissions in the Personal Center. To correct an existing solution, start from the bottom of that solution page so the target document is filled in automatically. Each submission creates a public GitHub Issue; after review, the Bot converts it into a draft pull request.',
        link: { to: '/me?tab=contribute', label: 'Open Submissions' },
      },
      {
        icon: FaCode,
        title: 'Developer API',
        text: 'Apply for API access from the Personal Center if you need exam data in JSON format. Once approved, you can create and manage API keys.',
        link: { to: '/me?tab=developer-api', label: 'Open Developer API' },
      },
    ],
    contributionTitle: 'Community Contribution Process',
    contributionSteps: [
      'You can submit a new solution through the website without needing to understand Git, frontmatter, the repository structure, or CI.',
      'To correct an existing solution, start from the bottom of that solution page. The target document is filled in automatically.',
      'Submissions normally become public GitHub Issues, where the community can discuss the content, add sources, or point out problems.',
      'After a maintainer confirms that the content is ready, they add the submission:ready-for-pr label and the Bot creates a draft pull request.',
      'Markdown in the Git repository remains the source of truth. Content appears in the public archive and API data only after the pull request is merged.',
    ],
    legalTitle: 'Legal & Privacy Notices',
    legalSections: [
      {
        icon: FaFileContract,
        title: 'Copyright',
        items: [
          'This website is built as an open-source project and public archive. Its core public content includes exam indexes, community-contributed solutions, publicly available study materials, and related documentation. This content remains publicly accessible to support personal study, research, and exam preparation.',
          'To support long-term maintenance, technical services, and community operations, we may provide additional features related to the learning experience, accounts, data APIs, tutoring support, or third-party integrations. These features do not change the open accessibility of the core public content.',
          'Some parts of the website quote or use previously published third-party works to the extent necessary for personal study and research, with authors and sources identified where possible. If you believe that content infringes your rights, email 376672994@qq.com. We will review the notice within 14 business days of receipt and correct or remove the content when appropriate.',
          'Bulk copying, redistribution, commercial integration, or other uses beyond ordinary browsing and personal study are subject to any separately published content or API terms. You are responsible for obtaining any permissions required from the relevant rights holders.',
        ],
      },
      {
        icon: FaExclamationTriangle,
        title: 'Disclaimer',
        items: [
          'This website may contain links to websites or services operated by third parties. You decide whether to follow those links or use those services and do so at your own risk.',
          'To the extent permitted by law, we make no representation or warranty regarding the accuracy, completeness, adequacy, or reliability of information, data, opinions, images, statements, or advice provided through third-party links.',
          'To the extent permitted by law, we make no warranty regarding the timeliness, validity, completeness, or availability of this website’s content and accept no liability for consequences arising from its use.',
        ],
      },
      {
        icon: FaShieldAlt,
        title: 'Privacy',
        items: [
          'When you visit the website, our servers may automatically receive information generated by your browser or device, including access time, browser type, and operating system.',
          'If you use login, the Personal Center, cloud sync, private problem sets, practice leaderboards, submissions, or the Developer API, we may process your account email, authentication identifiers, unified public nickname, study progress, problem notes, private sets and item notes, submission history, API access applications, API key metadata, and necessary request logs.',
          'The practice leaderboard displays your unified public nickname and does not display your email address. You can disable leaderboard visibility in Personal Center; hidden accounts are excluded from public rankings and participant counts but can still see their own practice total.',
          'We use this information to provide authentication, learning-data sync, Personal Center displays, submission status, API access review, security controls, service maintenance, and user support. We apply reasonable data-minimization measures based on what each feature requires.',
          'You can manage cookies and tracking controls in your browser. To request access to or deletion of your personal information, contact us using the details below.',
        ],
      },
    ],
    contactTitle: 'Contact',
    contactText: 'For questions about these notices, the contribution process, or rights in website content, email 376672994@qq.com. We will respond within a reasonable period.',
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
