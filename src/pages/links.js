import React from 'react';
import Layout from '@theme/Layout';

// 从 DOM 属性同步读取语言
const getLanguageFromDOM = () => {
  if (typeof document === 'undefined') return 'zh';
  return document.documentElement.getAttribute('data-lang') || 'zh';
};

const useStoredLanguage = () => {
  return React.useSyncExternalStore(
    (callback) => {
      if (typeof window === 'undefined') return () => {};
      window.addEventListener('languageChange', callback);
      return () => window.removeEventListener('languageChange', callback);
    },
    getLanguageFromDOM,
    () => 'zh'
  );
};

const content = {
  zh: {
    title: '参考链接',
    heading: '参考链接',
    intro:
      '这里汇总我们参考过的资料来源。支持搜索、来源筛选以及标签多选过滤。',
    searchPlaceholder: '搜索：标题 / 描述 / 域名（支持模糊匹配）',
    sourceFilterLabel: '来源筛选',
    sourceAll: '全部来源',
    tagFilterLabel: '标签',
    tagAllHint: '点击标签以多选过滤；再次点击可取消。',
    clearTags: '清空标签',
    empty: '没有匹配的结果，试试换个关键词、来源或标签。',
    section1Title: '部分题解作者的链接和有用的参考资料',
    section2Title: '有用的就职信息',
    open: '打开 ↗',

    // ✅ 每条 link 可逐步补 tags；不写也没问题
    links: [
      { name: "永久花, Myyura's Blog", url: 'https://myyura.github.io/', desc: '两年不更新了！', tags: [] },
      { name: 'Miyake, 大学院入試（院試）過去問題の解答', url: 'https://miyake.github.io/exams/index.html', desc: '主要为各个学校数学与物理问题的解答', tags: [] },
      { name: "Zephyr's Notes on ISCS & CBMS, UTokyo", url: 'https://inshi-notes.zephyr-zdz.space/', desc: '东京大学 IST 计算机科学硕士课程和东京大学 GSFS CBMS 硕士课程入学考试的笔记', tags: [] },
      { name: 'hari64boli64, GraduateSchoolEntranceExamination', url: 'https://github.com/hari64boli64/GraduateSchoolEntranceExamination', desc: '東京大学大学院情報理工学系研究科入試問題過去問解答など', tags: [] },
      { name: 'diohabara, open_inshi', url: 'https://github.com/diohabara/open_inshi', desc: '大学院入試過去問(2023年実施試験まで)', tags: [] },
      { name: '之遥, 知乎链接', url: 'https://www.zhihu.com/people/zhao-yue-70-84', desc: '东京大学·新领域创成研究科·复杂理工专攻2018-2023年度过去问解答', tags: [] },
      { name: 'etsurin, 2022.8东京大学情报理工电情修士合格经验分享', url: 'https://zhuanlan.zhihu.com/p/561992447', desc: '附东京大学情理数学解答例', tags: [] },
      { name: 'Josuke, 东大电情', url: 'https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f', tags: [] },
      { name: "Yu's Site, 九大情報理工学過去問の解答", url: 'https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/', tags: [] },
      { name: 'samparker, 广岛大学情报科学过去问', url: 'https://zhuanlan.zhihu.com/p/679651389', tags: [] },
      { name: 'kainoj, UTokyo CS', url: 'https://github.com/kainoj/utokyo-cs', desc: 'Solutions for past entrance exams, CS, UTokyo', tags: [] },
      { name: 'tomfluff, UTokyo CI', url: 'https://github.com/tomfluff/UTokyo_CI_Entrance_Exam', desc: 'Solutions for The University of Tokyo Creative Informatics Masters entrance exam.', tags: [] },
      { name: 'YuanzhongLi, UTokyo CI Programming', url: 'https://qiita.com/YuanzhongLi', desc: 'Solutions for The Programming Problem of the UTokyo Creative Informatics Masters entrance exam.', tags: [] },
      { name: '藍色日和, Mathblog', url: 'https://mathlog.info/articles/zLhBwPhItOrD5zEO3psa', desc: '東大数理院試過去問解答例まとめ', tags: [] },
      { name: '京大数学教室院試解答(解析系)のぺーじ', url: 'https://sites.google.com/view/kmath-grad-answer', tags: [] },
      { name: 'AKIRA, 京都大学情报学研究科系统科学专攻过去问解答', url: 'http://xhslink.com/m/8FArGcXC0cz', tags: [] },
      { name: '蛋黄猫物理, 物理、电路、电磁等过去问解答', url: 'https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7', tags: [] },
      { name: 'つき, 京大系统, 名大复杂等过去问解答', url: 'https://www.xiaohongshu.com/user/profile/63d537d600000000260065d9', tags: [] },
      { name: '電気情報の森・s2', url: 'https://denjoforest.com/sample-page', tags: [] },
      { name: '理工系の院試の，問題と解答のまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140715/GraduateSchoolsEntranceExamAnswers', tags: [] },
      { name: '大学の理工系の講義ノートPDFまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140620/PDFLectureNotesOnUniversity', tags: [] },
      { name: '东京大学大学院工学系研究科修考经验分享', url: 'https://www.zhihu.com/column/ut-eng', tags: [] },
      { name: '院試解くよ, 理工系の大学院入試の数学、物理学の解説をしてます。', url: 'https://www.youtube.com/@InshiTokuyo', tags: [] },
      { name: 'あーるえぬ, 主に理論系の方に向けた大学数学の記事を扱っています', url: 'https://math-note.xyz/', tags: [] },
      { name: 'Youtube: sin有機化学', url: 'https://www.youtube.com/playlist?list=PLO74KYA_mWyPkHdY7vO3DKmLOqJgkjW-i', tags: [] },
      { name: '東京大学院试机械工学解答, zzy', url: 'https://zhuanlan.zhihu.com/p/685875014', tags: [] },
      { name: 'SN, 東大院、京大院、東工大院、東北大院機械系過去問の解答', url: 'https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000', tags: [] },
    ],

    jobLinks: [
      { name: 'itshinsotsu.xyz', url: 'https://www.itshinsotsu.xyz/', tags: [] },
      { name: '魔法のスプレッドシート, ITエンジニアインターン情報が集まる魔法のスプレッドシート', url: 'https://magic-spreadsheets.github.io/', tags: [] },
      { name: '長期インターンシップ・インターン募集情報ならゼロワンインターン', url: 'https://01intern.com/', tags: [] },
      { name: 'レバテック | エンジニア専門 求人/案件サイト', url: 'https://levtech.jp/', tags: [] },
    ],
  },

  ja: {
    title: '参考リンク',
    heading: '参考リンク',
    intro:
      '参考にした情報源をまとめています。検索・ソース・タグ（複数選択）で絞り込めます。',
    searchPlaceholder: '検索：タイトル / 説明 / ドメイン（あいまい検索）',
    sourceFilterLabel: 'ソース',
    sourceAll: 'すべて',
    tagFilterLabel: 'タグ',
    tagAllHint: 'タグをクリックして複数選択。もう一度で解除。',
    clearTags: 'タグをクリア',
    empty: '一致する結果がありません。条件を変更してください。',
    section1Title: '過去問解答者のリンクと参考資料',
    section2Title: '就職活動に役立つ情報',
    open: '開く ↗',

    // ja 侧也支持 tags；可以先沿用 zh 的标签，后续再翻译（不影响功能）
    links: [
      { name: "永久花, Myyura's Blog", url: 'https://myyura.github.io/', desc: '2年間更新なし！', tags: [] },
      { name: 'Miyake, 大学院入試（院試）過去問題の解答', url: 'https://miyake.github.io/exams/index.html', desc: '各大学の数学・物理問題の解答', tags: [] },
      { name: "Zephyr's Notes on ISCS & CBMS, UTokyo", url: 'https://inshi-notes.zephyr-zdz.space/', desc: '東京大学IST情報理工学系・GSFS CBMSの入試ノート', tags: [] },
      { name: 'hari64boli64, GraduateSchoolEntranceExamination', url: 'https://github.com/hari64boli64/GraduateSchoolEntranceExamination', desc: '東京大学大学院情報理工学系研究科入試問題過去問解答など', tags: [] },
      { name: 'diohabara, open_inshi', url: 'https://github.com/diohabara/open_inshi', desc: '大学院入試過去問(2023年実施試験まで)', tags: [] },
      { name: '之遥, 知乎链接', url: 'https://www.zhihu.com/people/zhao-yue-70-84', desc: '东京大学·新领域创成研究科·复杂理工专攻2018-2023年度过去问解答', tags: [] },
      { name: 'etsurin, 2022.8东京大学情报理工电情修士合格经验分享', url: 'https://zhuanlan.zhihu.com/p/561992447', desc: '附东京大学情理数学解答例', tags: [] },
      { name: 'Josuke, 東大電子情報', url: 'https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f', tags: [] },
      { name: "Yu's Site, 九大情報理工学過去問の解答", url: 'https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/', tags: [] },
      { name: 'samparker, 広島大学情報科学過去問', url: 'https://zhuanlan.zhihu.com/p/679651389', tags: [] },
      { name: 'kainoj, UTokyo CS', url: 'https://github.com/kainoj/utokyo-cs', desc: 'Solutions for past entrance exams, CS, UTokyo', tags: [] },
      { name: 'tomfluff, UTokyo CI', url: 'https://github.com/tomfluff/UTokyo_CI_Entrance_Exam', desc: 'Solutions for The University of Tokyo Creative Informatics Masters entrance exam.', tags: [] },
      { name: 'YuanzhongLi, UTokyo CI Programming', url: 'https://qiita.com/YuanzhongLi', desc: 'Solutions for The Programming Problem of the UTokyo Creative Informatics Masters entrance exam.', tags: [] },
      { name: '藍色日和, Mathblog', url: 'https://mathlog.info/articles/zLhBwPhItOrD5zEO3psa', desc: '東大数理院試過去問解答例まとめ', tags: [] },
      { name: '京大数学教室院試解答(解析系)のぺーじ', url: 'https://sites.google.com/view/kmath-grad-answer', tags: [] },
      { name: 'AKIRA, 京都大学情報学研究科システム科学専攻過去問解答', url: 'http://xhslink.com/m/8FArGcXC0cz', tags: [] },
      { name: '蛋黄猫物理, 物理・回路・電磁気等の過去問解答', url: 'https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7', tags: [] },
      { name: 'つき, 京大システム・名大複雑系等の過去問解答', url: 'https://www.xiaohongshu.com/user/profile/63d537d600000000260065d9', tags: [] },
      { name: '電気情報の森・s2', url: 'https://denjoforest.com/sample-page', tags: [] },
      { name: '理工系の院試の，問題と解答のまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140715/GraduateSchoolsEntranceExamAnswers', tags: [] },
      { name: '大学の理工系の講義ノートPDFまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140620/PDFLectureNotesOnUniversity', tags: [] },
      { name: '東京大学大学院工学系研究科院試体験共有', url: 'https://www.zhihu.com/column/ut-eng', tags: [] },
      { name: '院試解くよ, 理工系の大学院入試の数学、物理学の解説をしてます。', url: 'https://www.youtube.com/@InshiTokuyo', tags: [] },
      { name: 'あーるえぬ, 主に理論系の方に向けた大学数学の記事を扱っています', url: 'https://math-note.xyz/', tags: [] },
      { name: 'Youtube: sin有機化学', url: 'https://www.youtube.com/playlist?list=PLO74KYA_mWyPkHdY7vO3DKmLOqJgkjW-i', tags: [] },
      { name: '東京大学院試機械工学解答, zzy', url: 'https://zhuanlan.zhihu.com/p/685875014', tags: [] },
      { name: 'SN, 東大院、京大院、東工大院、東北大院機械系過去問の解答', url: 'https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000', tags: [] },
    ],

    jobLinks: [
      { name: 'itshinsotsu.xyz', url: 'https://www.itshinsotsu.xyz/', tags: [] },
      { name: '魔法のスプレッドシート, ITエンジニアインターン情報が集まる魔法のスプレッドシート', url: 'https://magic-spreadsheets.github.io/', tags: [] },
      { name: '長期インターンシップ・インターン募集情報ならゼロワンインターン', url: 'https://01intern.com/', tags: [] },
      { name: 'レバテック | エンジニア専門 求人/案件サイト', url: 'https://levtech.jp/', tags: [] },
    ],
  },
};

/** --------- helpers: URL / domain / source tag ---------- */
const safeHostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

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
  return 'Other';
};

const localizeSource = (src, lang) => {
  const map = {
    zh: {
      GitHub: 'GitHub',
      YouTube: 'YouTube',
      Zhihu: '知乎',
      Xiaohongshu: '小红书',
      Qiita: 'Qiita',
      'Google Sites': 'Google Sites',
      Hatena: 'Hatena',
      Mathlog: 'Mathlog',
      Other: '其他',
    },
    ja: {
      GitHub: 'GitHub',
      YouTube: 'YouTube',
      Zhihu: 'Zhihu',
      Xiaohongshu: '小紅書',
      Qiita: 'Qiita',
      'Google Sites': 'Google Sites',
      Hatena: 'Hatena',
      Mathlog: 'Mathlog',
      Other: 'その他',
    },
  };
  return (map[lang] && map[lang][src]) || src;
};

const normalizeTags = (tags) => {
  if (!Array.isArray(tags)) return [];
  return tags
    .map((t) => String(t || '').trim())
    .filter(Boolean);
};

const CardGrid = ({ items, lang, t, columnClass = 'col col--4', maxTagsOnCard = 6 }) => {
  const [query, setQuery] = React.useState('');
  const [source, setSource] = React.useState('ALL');
  const [selectedTags, setSelectedTags] = React.useState([]); // 多选

  const sources = React.useMemo(() => {
    const set = new Set(items.map((x) => detectSource(x.url)));
    const list = Array.from(set).sort((a, b) => a.localeCompare(b));
    return ['ALL', ...list];
  }, [items]);

  const allTags = React.useMemo(() => {
    const set = new Set();
    items.forEach((x) => normalizeTags(x.tags).forEach((tg) => set.add(tg)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((x) => x !== tag) : [...prev, tag]));
  };

  const clearTags = () => setSelectedTags([]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    return items.filter((x) => {
      const hitQ =
        !q ||
        (x.name || '').toLowerCase().includes(q) ||
        (x.desc || '').toLowerCase().includes(q) ||
        safeHostname(x.url).toLowerCase().includes(q);

      const src = detectSource(x.url);
      const hitS = source === 'ALL' || src === source;

      const tags = normalizeTags(x.tags);
      // ✅ 多选标签：AND 逻辑（选了多个就必须全部命中）
      const hitT = selectedTags.length === 0 || selectedTags.every((tg) => tags.includes(tg));

      return hitQ && hitS && hitT;
    });
  }, [items, query, source, selectedTags]);

  return (
    <div className="margin-bottom--lg">
      {/* controls */}
      <div className="row margin-bottom--md">
        <div className="col col--7">
          <input
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
          />
        </div>
        <div className="col col--5">
          <label className="margin-right--sm" style={{ fontWeight: 600 }}>
            {t.sourceFilterLabel}：
          </label>
          <select className="select" value={source} onChange={(e) => setSource(e.target.value)}>
            {sources.map((s) => (
              <option key={s} value={s}>
                {s === 'ALL' ? t.sourceAll : localizeSource(s, lang)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* tag selector */}
      {allTags.length > 0 && (
        <div className="margin-bottom--md">
          <div className="margin-bottom--sm" style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <div style={{ fontWeight: 600 }}>{t.tagFilterLabel}：</div>
            <div style={{ opacity: 0.85 }}>
              <small>{t.tagAllHint}</small>
            </div>
            {selectedTags.length > 0 && (
              <button
                type="button"
                className="button button--sm button--secondary"
                onClick={clearTags}
                style={{ marginLeft: 'auto' }}
              >
                {t.clearTags}
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {allTags.map((tg) => {
              const active = selectedTags.includes(tg);
              return (
                <button
                  key={tg}
                  type="button"
                  onClick={() => toggleTag(tg)}
                  className={`badge ${active ? 'badge--primary' : 'badge--secondary'}`}
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    padding: '6px 10px',
                    lineHeight: 1.2,
                  }}
                  aria-pressed={active}
                  title={active ? 'selected' : 'not selected'}
                >
                  {tg}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="margin-bottom--sm">
        <small>
          {filtered.length} / {items.length}
          {selectedTags.length > 0 ? ` · tags: ${selectedTags.join(', ')}` : ''}
        </small>
      </div>

      {/* grid */}
      {filtered.length === 0 ? (
        <div className="alert alert--secondary">{t.empty}</div>
      ) : (
        <div className="row">
          {filtered.map((link, idx) => {
            const host = safeHostname(link.url);
            const src = detectSource(link.url);
            const tags = normalizeTags(link.tags);

            return (
              <div key={`${link.url}-${idx}`} className={`${columnClass} margin-bottom--md`}>
                <div className="card shadow--md" style={{ height: '100%' }}>
                  <div className="card__header">
                    <h3 className="margin-bottom--sm" style={{ fontSize: '1.05rem' }}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      <span className="badge badge--secondary">{localizeSource(src, lang)}</span>
                      {host && <span className="badge badge--secondary">{host}</span>}
                    </div>
                  </div>

                  <div className="card__body">
                    {link.desc ? (
                      <p className="margin-bottom--sm">{link.desc}</p>
                    ) : (
                      <p className="margin-bottom--sm" style={{ opacity: 0.75 }}>
                        —
                      </p>
                    )}

                    {tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {tags.slice(0, maxTagsOnCard).map((tg) => {
                          const active = selectedTags.includes(tg);
                          return (
                            <button
                              key={tg}
                              type="button"
                              onClick={() => toggleTag(tg)}
                              className={`badge ${active ? 'badge--primary' : 'badge--secondary'}`}
                              style={{ cursor: 'pointer', border: 'none', padding: '6px 10px' }}
                              aria-pressed={active}
                              title={active ? 'selected' : 'not selected'}
                            >
                              {tg}
                            </button>
                          );
                        })}
                        {tags.length > maxTagsOnCard && (
                          <span className="badge badge--secondary" style={{ opacity: 0.75 }}>
                            +{tags.length - maxTagsOnCard}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="card__footer">
                    <a
                      className="button button--secondary button--sm"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.open}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function Links() {
  const language = useStoredLanguage();
  const t = content[language] || content.zh;

  return (
    <Layout title={t.title}>
      <div className="container margin-vert--lg">
        <h1 className="margin-bottom--sm">{t.heading}</h1>
        {t.intro && (
          <p className="margin-bottom--lg" style={{ opacity: 0.9 }}>
            {t.intro}
          </p>
        )}

        <h2 className="margin-bottom--md">{t.section1Title}</h2>
        {/* 资料类：桌面 3 列更合适 */}
        <CardGrid items={t.links} lang={language} t={t} columnClass="col col--4" />

        <h2 className="margin-bottom--md">{t.section2Title}</h2>
        {/* 就职类：条目少一点，桌面 2 列更舒展 */}
        <CardGrid items={t.jobLinks} lang={language} t={t} columnClass="col col--6" />
      </div>
    </Layout>
  );
}
