import React from 'react';
import Link from '@docusaurus/Link';
import styles from './intro.module.css';
import { FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@site/src/context/LanguageContext';

// 数据和文本
const content = {
  texts: {
    pageTitle: {
      zh: "过去问数据库",
      ja: "過去問データベース"
    },
    pageSubtitle: {
      zh: "选择大学，开始你的备考之旅",
      ja: "大学を選んで、受験勉強を始めよう"
    },
    contributeTitle: {
      zh: "参与贡献",
      ja: "貢献する"
    },
    contributeDesc: {
      zh: "帮助完善这个开源项目",
      ja: "このオープンソースプロジェクトに貢献"
    },
    contributeItems: {
      zh: [
        { text: "通过 GitHub 提交 Pull Request", link: "https://github.com/Myyura/the_kai_project" },
        { text: "发送试题或答案至邮箱", email: "376672994@qq.com" }
      ],
      ja: [
        { text: "GitHub から Pull Request を送信", link: "https://github.com/Myyura/the_kai_project" },
        { text: "試験問題や解答をメールで送信", email: "376672994@qq.com" }
      ]
    },
    feedbackTitle: {
      zh: "纠错与讨论",
      ja: "修正・質問"
    },
    feedbackDesc: {
      zh: "发现问题或想参与讨论",
      ja: "問題を見つけたり、議論に参加"
    },
    feedbackItems: {
      zh: [
        { text: "在 GitHub Issues 提交反馈", link: "https://github.com/Myyura/the_kai_project/issues" },
        { text: "加入 QQ群 925154731 交流", link: "https://qm.qq.com/q/3yjgte7UTe" }
      ],
      ja: [
        { text: "GitHub Issues でフィードバック", link: "https://github.com/Myyura/the_kai_project/issues" },
        { text: "GitHub Discussions で議論", link: "https://github.com/Myyura/the_kai_project/discussions" }
      ]
    },
    license: {
      zh: "项目代码采用 AGPL v3 协议 · 试题版权归各大学所有 · 感谢所有贡献者",
      ja: "コードは AGPL v3 ライセンス · 試験問題の著作権は各大学に帰属 · すべての貢献者に感謝"
    }
  },
  schools: [
    { name: '東京大学', url: '/docs/category/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6', tag: '旧帝大' },
    { name: '京都大学', url: '/docs/category/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6', tag: '旧帝大' },
    { name: '東北大学', url: '/docs/category/%E6%9D%B1%E5%8C%97%E5%A4%A7%E5%AD%A6', tag: '旧帝大' },
    { name: '大阪大学', url: '/docs/category/%E5%A4%A7%E9%98%AA%E5%A4%A7%E5%AD%A6', tag: '旧帝大' },
    { name: '名古屋大学', url: '/docs/category/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E5%AD%A6', tag: '旧帝大' },
    { name: '北海道大学', url: '/docs/category/%E5%8C%97%E6%B5%B7%E9%81%93%E5%A4%A7%E5%AD%A6', tag: '旧帝大' },
    { name: '九州大学', url: '/docs/category/%E4%B9%9D%E5%B7%9E%E5%A4%A7%E5%AD%A6', tag: '旧帝大' },
    { name: '東京科学大学', url: '/docs/category/%E6%9D%B1%E4%BA%AC%E7%A7%91%E5%AD%B8%E5%A4%A7%E5%AD%B8-%E6%97%A7%E6%9D%B1%E4%BA%AC%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6', tag: '国立' },
    { name: '筑波大学', url: '/docs/category/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6', tag: '国立' },
    { name: '神戸大学', url: '/docs/category/%E7%A5%9E%E6%88%B8%E5%A4%A7%E5%AD%A6', tag: '国立' },
    { name: '広島大学', url: '/docs/category/%E5%BA%83%E5%B3%B6%E5%A4%A7%E5%AD%A6', tag: '国立' },
    { name: '金沢大学', url: '/docs/category/%E9%87%91%E6%B2%A2%E5%A4%A7%E5%AD%A6', tag: '国立' },
    { name: '電気通信大学', url: '/docs/category/%E9%9B%BB%E6%B0%97%E9%80%9A%E4%BF%A1%E5%A4%A7%E5%AD%A6', tag: '国立' },
    { name: '東京農工大学', url: '/docs/category/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6', tag: '国立' },
    { name: '早稲田大学', url: '/docs/category/%E6%97%A9%E7%A8%B2%E7%94%B0%E5%A4%A7%E5%AD%A6', tag: '私立' },
    { name: '慶應義塾大学', url: '/docs/category/%E6%85%B6%E6%87%89%E7%BE%A9%E5%A1%BE%E5%A4%A7%E5%AD%A6', tag: '私立' },
  ]
};

// 大学卡片组件
const SchoolCard = ({ name, url, tag, index }) => (
  <Link to={url} className={styles.schoolCard} style={{ animationDelay: `${index * 0.03}s` }}>
    <span className={styles.schoolTag}>{tag}</span>
    <span className={styles.schoolName}>{name}</span>
    <FaArrowRight className={styles.schoolArrow} />
  </Link>
);

// 信息卡片组件
const InfoCard = ({ icon, title, description, items }) => (
  <div className={styles.infoCard}>
    <div className={styles.infoIcon}>{icon}</div>
    <h3 className={styles.infoTitle}>{title}</h3>
    <p className={styles.infoDesc}>{description}</p>
    <div className={styles.infoLinks}>
      {items.map((item, idx) => (
        <a 
          key={idx} 
          href={item.link || `mailto:${item.email}`} 
          target={item.link ? "_blank" : undefined}
          rel={item.link ? "noopener noreferrer" : undefined}
          className={styles.infoLink}
        >
          {item.text}
        </a>
      ))}
    </div>
  </div>
);

export default function Intro() {
  const { language, setLanguage } = useLanguage();
  const t = (key) => content.texts[key]?.[language] || content.texts[key]?.['zh'];

  return (
    <div className={styles.introPage}>
      {/* 页面头部 */}
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>{t('pageTitle')}</h1>
          <p className={styles.pageSubtitle}>{t('pageSubtitle')}</p>
        </div>
        
        {/* 语言切换 */}
        <div className={styles.langSwitch}>
          <button 
            onClick={() => language !== 'zh' && setLanguage('zh')}
            className={`${styles.langBtn} ${language === 'zh' ? styles.langBtnActive : ''}`}
          >
            中文
          </button>
          <span className={styles.langDivider}>/</span>
          <button 
            onClick={() => language !== 'ja' && setLanguage('ja')}
            className={`${styles.langBtn} ${language === 'ja' ? styles.langBtnActive : ''}`}
          >
            日本語
          </button>
        </div>
      </header>

      {/* 大学网格 */}
      <section className={styles.schoolsSection}>
        <div className={styles.schoolGrid}>
          {content.schools.map((school, index) => (
            <SchoolCard key={index} {...school} index={index} />
          ))}
        </div>
      </section>

      {/* 贡献与反馈 */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <InfoCard 
            icon={<FaGithub />}
            title={t('contributeTitle')}
            description={t('contributeDesc')}
            items={t('contributeItems')}
          />
          <InfoCard 
            icon={<FaEnvelope />}
            title={t('feedbackTitle')}
            description={t('feedbackDesc')}
            items={t('feedbackItems')}
          />
        </div>
      </section>

      {/* 页脚 */}
      <footer className={styles.pageFooter}>
        <p>{t('license')}</p>
      </footer>
    </div>
  );
}
