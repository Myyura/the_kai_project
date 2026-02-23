import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { FaExternalLinkAlt, FaLink, FaBriefcase, FaBook } from 'react-icons/fa';
import { useStoredLanguage } from '../context/LanguageContext';
import styles from './links.module.css';

const content = {
  zh: {
    title: '参考链接',
    heading: '参考链接',
    subtitle: '汇集题解资源与备考资料，助力你的修考之路',
    section1Title: '题解与参考资料',
    section1Desc: '由社区贡献者整理的过去问解答和学习资源',
    section2Title: '就职信息',
    section2Desc: '日本IT行业实习与求职资源',
    open: '访问',
    statsLinks: '个链接',
    statsContributors: '位贡献者',
    statsCategories: '个类别',
    links: [
      { name: "Myyura's Blog", url: 'https://myyura.github.io/', desc: '永久花的个人博客' },
      { name: 'Miyake 院试过去问解答', url: 'https://miyake.github.io/exams/index.html', desc: '各大学数学与物理问题的详细解答' },
      { name: "Zephyr's Notes", url: 'https://inshi-notes.zephyr-zdz.space/', desc: '东大 IST 和 GSFS CBMS 入试笔记' },
      { name: 'hari64boli64 东大情理解答', url: 'https://github.com/hari64boli64/GraduateSchoolEntranceExamination', desc: '東京大学大学院情報理工學系研究科過去問解答' },
      { name: 'open_inshi', url: 'https://github.com/diohabara/open_inshi', desc: '大学院入試過去問 (2023年实施试验)' },
      { name: '之遥 - 东大新领域解答', url: 'https://www.zhihu.com/people/zhao-yue-70-84', desc: '复杂理工专攻 2018-2023 年度过去问解答' },
      { name: 'etsurin 东大情理经验', url: 'https://zhuanlan.zhihu.com/p/561992447', desc: '2022.8 东大情理电情合格经验分享' },
      { name: 'Josuke 东大电情', url: 'https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f', desc: '小红书东大电子情报学习资料' },
      { name: "Yu's Site 九大情报解答", url: 'https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/', desc: '九大情報理工学過去問の解答' },
      { name: 'samparker 广岛大学', url: 'https://zhuanlan.zhihu.com/p/679651389', desc: '广岛大学情报科学过去问解答' },
      { name: 'kainoj UTokyo CS', url: 'https://github.com/kainoj/utokyo-cs', desc: 'Solutions for UTokyo CS entrance exams' },
      { name: 'tomfluff UTokyo CI', url: 'https://github.com/tomfluff/UTokyo_CI_Entrance_Exam', desc: 'Creative Informatics 入试解答' },
      { name: 'YuanzhongLi 编程题', url: 'https://qiita.com/YuanzhongLi', desc: 'UTokyo CI 编程问题解答' },
      { name: '藍色日和 东大数理', url: 'https://mathlog.info/articles/zLhBwPhItOrD5zEO3psa', desc: '東大数理院試過去問解答例' },
      { name: '京大数学解析系解答', url: 'https://sites.google.com/view/kmath-grad-answer', desc: '京大数学教室院試解答' },
      { name: 'AKIRA 京大系统科学', url: 'http://xhslink.com/m/8FArGcXC0cz', desc: '京大情报学研究科系统科学专攻解答' },
      { name: '蛋黄猫物理', url: 'https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7', desc: '物理、电路、电磁等过去问解答' },
      { name: 'つき 京大名大解答', url: 'https://www.xiaohongshu.com/user/profile/63d537d600000000260065d9', desc: '京大系统、名大复杂等解答' },
      { name: '電気情報の森', url: 'https://denjoforest.com/sample-page', desc: '電気情報関連の学習資料' },
      { name: '理工系院试问题汇总', url: 'https://language-and-engineering.hatenablog.jp/entry/20140715/GraduateSchoolsEntranceExamAnswers', desc: '数学・物理・情報・工学の院試まとめ' },
      { name: '理工系讲义笔记', url: 'https://language-and-engineering.hatenablog.jp/entry/20140620/PDFLectureNotesOnUniversity', desc: '大学講義ノートPDFまとめ' },
      { name: '东大工学系经验分享', url: 'https://www.zhihu.com/column/ut-eng', desc: '東大大学院工学系研究科修考经验' },
      { name: '院試解くよ', url: 'https://www.youtube.com/@InshiTokuyo', desc: 'YouTube 数学・物理解説チャンネル' },
      { name: 'あーるえぬ 大学数学', url: 'https://math-note.xyz/', desc: '理論系向け大学数学の記事' },
      { name: 'sin有機化学', url: 'https://www.youtube.com/playlist?list=PLO74KYA_mWyPkHdY7vO3DKmLOqJgkjW-i', desc: 'YouTube 有機化学講座' },
      { name: 'zzy 东大机械工学', url: 'https://zhuanlan.zhihu.com/p/685875014', desc: '東大院试机械工学解答' },
      { name: 'SN 機械系過去問', url: 'https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000', desc: '東大・京大・東工大・東北大機械系解答' },
    ],
    jobLinks: [
      { name: 'itshinsotsu.xyz', url: 'https://www.itshinsotsu.xyz/', desc: 'IT新卒就职信息汇总' },
      { name: '魔法のスプレッドシート', url: 'https://magic-spreadsheets.github.io/', desc: 'IT工程师实习信息魔法表格' },
      { name: 'ゼロワンインターン', url: 'https://01intern.com/', desc: '長期インターンシップ募集情報' },
      { name: 'レバテック', url: 'https://levtech.jp/', desc: 'エンジニア専門求人サイト' },
    ],
  },
  ja: {
    title: '参考リンク',
    heading: '参考リンク',
    subtitle: '過去問解答と学習リソースを集約、受験勉強をサポート',
    section1Title: '過去問解答・参考資料',
    section1Desc: 'コミュニティ貢献者による過去問解答と学習リソース',
    section2Title: '就職情報',
    section2Desc: '日本IT業界のインターンと就職リソース',
    open: '開く',
    statsLinks: '件のリンク',
    statsContributors: '人の貢献者',
    statsCategories: 'カテゴリ',
    links: [
      { name: "Myyura's Blog", url: 'https://myyura.github.io/', desc: '永久花の個人ブログ' },
      { name: 'Miyake 院試過去問解答', url: 'https://miyake.github.io/exams/index.html', desc: '各大学の数学・物理問題の詳細解答' },
      { name: "Zephyr's Notes", url: 'https://inshi-notes.zephyr-zdz.space/', desc: '東大IST・GSFS CBMSの入試ノート' },
      { name: 'hari64boli64 東大情理解答', url: 'https://github.com/hari64boli64/GraduateSchoolEntranceExamination', desc: '東京大学大学院情報理工学系研究科過去問解答' },
      { name: 'open_inshi', url: 'https://github.com/diohabara/open_inshi', desc: '大学院入試過去問 (2023年実施試験)' },
      { name: '之遥 - 東大新領域解答', url: 'https://www.zhihu.com/people/zhao-yue-70-84', desc: '複雑理工専攻 2018-2023 年度過去問解答' },
      { name: 'etsurin 東大情理体験', url: 'https://zhuanlan.zhihu.com/p/561992447', desc: '2022.8 東大情理電情合格体験記' },
      { name: 'Josuke 東大電情', url: 'https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f', desc: '小紅書東大電子情報学習資料' },
      { name: "Yu's Site 九大情報解答", url: 'https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/', desc: '九大情報理工学過去問の解答' },
      { name: 'samparker 広島大学', url: 'https://zhuanlan.zhihu.com/p/679651389', desc: '広島大学情報科学過去問解答' },
      { name: 'kainoj UTokyo CS', url: 'https://github.com/kainoj/utokyo-cs', desc: 'Solutions for UTokyo CS entrance exams' },
      { name: 'tomfluff UTokyo CI', url: 'https://github.com/tomfluff/UTokyo_CI_Entrance_Exam', desc: 'Creative Informatics 入試解答' },
      { name: 'YuanzhongLi プログラミング', url: 'https://qiita.com/YuanzhongLi', desc: 'UTokyo CI プログラミング問題解答' },
      { name: '藍色日和 東大数理', url: 'https://mathlog.info/articles/zLhBwPhItOrD5zEO3psa', desc: '東大数理院試過去問解答例' },
      { name: '京大数学解析系解答', url: 'https://sites.google.com/view/kmath-grad-answer', desc: '京大数学教室院試解答' },
      { name: 'AKIRA 京大システム科学', url: 'http://xhslink.com/m/8FArGcXC0cz', desc: '京大情報学研究科システム科学専攻解答' },
      { name: '蛋黄猫物理', url: 'https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7', desc: '物理・回路・電磁気等の過去問解答' },
      { name: 'つき 京大名大解答', url: 'https://www.xiaohongshu.com/user/profile/63d537d600000000260065d9', desc: '京大システム・名大複雑系等の解答' },
      { name: '電気情報の森', url: 'https://denjoforest.com/sample-page', desc: '電気情報関連の学習資料' },
      { name: '理工系院試問題まとめ', url: 'https://language-and-engineering.hatenablog.jp/entry/20140715/GraduateSchoolsEntranceExamAnswers', desc: '数学・物理・情報・工学の院試まとめ' },
      { name: '理工系講義ノート', url: 'https://language-and-engineering.hatenablog.jp/entry/20140620/PDFLectureNotesOnUniversity', desc: '大学講義ノートPDFまとめ' },
      { name: '東大工学系体験共有', url: 'https://www.zhihu.com/column/ut-eng', desc: '東大大学院工学系研究科院試体験' },
      { name: '院試解くよ', url: 'https://www.youtube.com/@InshiTokuyo', desc: 'YouTube 数学・物理解説チャンネル' },
      { name: 'あーるえぬ 大学数学', url: 'https://math-note.xyz/', desc: '理論系向け大学数学の記事' },
      { name: 'sin有機化学', url: 'https://www.youtube.com/playlist?list=PLO74KYA_mWyPkHdY7vO3DKmLOqJgkjW-i', desc: 'YouTube 有機化学講座' },
      { name: 'zzy 東大機械工学', url: 'https://zhuanlan.zhihu.com/p/685875014', desc: '東大院試機械工学解答' },
      { name: 'SN 機械系過去問', url: 'https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000', desc: '東大・京大・東工大・東北大機械系解答' },
    ],
    jobLinks: [
      { name: 'itshinsotsu.xyz', url: 'https://www.itshinsotsu.xyz/', desc: 'IT新卒就職情報まとめ' },
      { name: '魔法のスプレッドシート', url: 'https://magic-spreadsheets.github.io/', desc: 'ITエンジニアインターン情報' },
      { name: 'ゼロワンインターン', url: 'https://01intern.com/', desc: '長期インターンシップ募集情報' },
      { name: 'レバテック', url: 'https://levtech.jp/', desc: 'エンジニア専門求人サイト' },
    ],
  },
};

// Helper: 获取域名
const safeHostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

// Helper: 检测来源
const detectSource = (url) => {
  const host = safeHostname(url).toLowerCase();
  if (!host) return 'Other';
  if (host.includes('github.com')) return 'GitHub';
  if (host.includes('youtube.com') || host.includes('youtu.be')) return 'YouTube';
  if (host.includes('zhihu.com')) return 'Zhihu';
  if (host.includes('xiaohongshu.com') || host.includes('xhslink.com')) return 'Xiaohongshu';
  if (host.includes('qiita.com')) return 'Qiita';
  if (host.includes('sites.google.com')) return 'Google Sites';
  if (host.includes('hatenablog.jp') || host.includes('hatenadiary.jp')) return 'Hatena';
  if (host.includes('mathlog.info')) return 'Mathlog';
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
const LinkCard = ({ link, index, isJob = false }) => {
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
};

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
