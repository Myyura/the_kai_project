import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { FaExternalLinkAlt, FaLink, FaBriefcase, FaBook } from 'react-icons/fa';
import { useStoredLanguage } from '../context/LanguageContext';
import styles from './links.module.css';
import content from '../data/links.json';

// Helper: 获取域名
const safeHostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

// Helper: 域名匹配（精确匹配或子域名匹配）
const isAllowedHost = (host, allowedHost) => host === allowedHost || host.endsWith(`.${allowedHost}`);

const sourceHostRules = [
  { source: 'GitHub', hosts: ['github.com'] },
  { source: 'YouTube', hosts: ['youtube.com', 'youtu.be'] },
  { source: 'Zhihu', hosts: ['zhihu.com'] },
  { source: 'Xiaohongshu', hosts: ['xiaohongshu.com', 'xhslink.com'] },
  { source: 'Qiita', hosts: ['qiita.com'] },
  { source: 'Google Sites', hosts: ['sites.google.com'] },
  { source: 'Hatena', hosts: ['hatenablog.jp', 'hatenadiary.jp'] },
  { source: 'Mathlog', hosts: ['mathlog.info'] },
];

// Helper: 检测来源
const detectSource = (url) => {
  const host = safeHostname(url).toLowerCase();
  if (!host) return 'Other';

  for (const rule of sourceHostRules) {
    if (rule.hosts.some((allowedHost) => isAllowedHost(host, allowedHost))) {
      return rule.source;
    }
  }

  return 'Blog';
};

// Helper: 本地化来源名称
const localizeSource = (src) => {
  const map = {
    GitHub: 'GitHub',
    YouTube: 'YouTube',
    Zhihu: '知乎',
    Xiaohongshu: '小红书',
    Qiita: 'Qiita',
    'Google Sites': 'Google',
    Hatena: 'Hatena',
    Mathlog: 'Mathlog',
    Blog: 'Blog',
    Other: 'Other',
  };
  return map[src] || src;
};

// 链接卡片组件
const LinkCard = React.memo(({ link, index, isJob = false }) => {
  const host = safeHostname(link.url);
  const source = detectSource(link.url);
  
  return (
    <div 
      className={clsx(styles.linkCard, isJob && styles.jobCard)}
      style={{ animationDelay: index < 8 ? `${index * 0.04}s` : '0.28s' }}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{link.name}</h3>
        <span className={styles.sourceTag}>{localizeSource(source)}</span>
      </div>
      
      <p className={styles.cardDesc}>
        {link.desc || '—'}
      </p>
      
      <div className={styles.cardFooter}>
        <span className={styles.domainText}>
          <FaLink />
          {host}
        </span>
        <a 
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.openLink}
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
});

// 主页面组件
export default function Links() {
  const [language, toggleLanguage] = useStoredLanguage();
  const t = content[language] || content.zh;
  const totalAll = t.links.length + t.jobLinks.length;

  return (
    <Layout title={t.title}>
      <div className={styles.linksPage}>
        {/* 页面头部 */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{t.heading}</h1>
          <p className={styles.pageSubtitle}>{t.subtitle}</p>
          
          {/* 语言切换 */}
          <div className={styles.langSwitch}>
            <button 
              onClick={() => language !== 'zh' && toggleLanguage()}
              className={clsx(styles.langBtn, language === 'zh' && styles.langBtnActive)}
            >
              中文
            </button>
            <span className={styles.langDivider}>/</span>
            <button 
              onClick={() => language !== 'ja' && toggleLanguage()}
              className={clsx(styles.langBtn, language === 'ja' && styles.langBtnActive)}
            >
              日本語
            </button>
          </div>
        </header>

        {/* 统计条 */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{totalAll}</span>
            <span className={styles.statLabel}>{t.statsLinks}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>{t.statsContributors}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>{t.statsCategories}</span>
          </div>
        </div>

        {/* 题解与参考资料 */}
        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <FaBook style={{ marginRight: '0.5rem', opacity: 0.7 }} />
              {t.section1Title}
            </h2>
          </div>
          
          <div className={styles.linksGrid}>
            {t.links.map((link, idx) => (
              <LinkCard 
                key={link.url} 
                link={link} 
                index={idx}
              />
            ))}
          </div>
        </section>

        {/* 就职信息 */}
        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <FaBriefcase style={{ marginRight: '0.5rem', opacity: 0.7 }} />
              {t.section2Title}
            </h2>
          </div>
          
          <div className={styles.linksGrid}>
            {t.jobLinks.map((link, idx) => (
              <LinkCard 
                key={link.url} 
                link={link} 
                index={idx}
                isJob={true}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
