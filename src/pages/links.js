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
    section1Title: '部分题解作者的链接和有用的参考资料',
    section2Title: '有用的就职信息',
    links: [
      { name: '永久花, Myyura\'s Blog', url: 'https://myyura.github.io/', desc: '两年不更新了！' },
      { name: 'Miyake, 大学院入試（院試）過去問題の解答', url: 'https://miyake.github.io/exams/index.html', desc: '主要为各个学校数学与物理问题的解答' },
      { name: 'Zephyr\'s Notes on ISCS & CBMS, UTokyo', url: 'https://inshi-notes.zephyr-zdz.space/', desc: '东京大学 IST 计算机科学硕士课程和东京大学 GSFS CBMS 硕士课程入学考试的笔记' },
      { name: 'hari64boli64, 東京大学大学院情報理工学系研究科入試問題過去問解答など', url: 'https://github.com/hari64boli64/GraduateSchoolEntranceExamination' },
      { name: 'diohabara, open_inshi', url: 'https://github.com/diohabara/open_inshi', desc: '大学院入試過去問(2023年実施試験まで)' },
      { name: '之遥, 东京大学·新领域创成研究科·复杂理工专攻2018-2023年度过去问解答', url: 'https://www.zhihu.com/people/zhao-yue-70-84' },
      { name: 'etsurin, 东京大学情理数学解答例', url: 'https://zhuanlan.zhihu.com/p/561992447' },
      { name: 'Josuke, 东大电情', url: 'https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f' },
      { name: 'Yu\'s Site, 九大情報理工学過去問の解答', url: 'https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/' },
      { name: 'samparker, 广岛大学情报科学过去问', url: 'https://zhuanlan.zhihu.com/p/679651389' },
      { name: 'kainoj, UTokyo CS', url: 'https://github.com/kainoj/utokyo-cs' },
      { name: 'tomfluff, UTokyo CI', url: 'https://github.com/tomfluff/UTokyo_CI_Entrance_Exam' },
      { name: 'YuanzhongLi, UTokyo CI Programming', url: 'https://qiita.com/YuanzhongLi' },
      { name: '江澤 樹, 名古屋大学大学院多元数理科学研究科博士前期課程の入学試験問題の解答・解説', url: 'https://sites.google.com/view/tatsukiezawa/%E8%A7%A3%E7%AD%94%E9%9B%86' },
      { name: '藍色日和, 東大数理院試過去問解答例まとめ', url: 'https://mathlog.info/articles/zLhBwPhItOrD5zEO3psa' },
      { name: '京大数学教室院試解答(解析系)のぺーじ', url: 'https://sites.google.com/view/kmath-grad-answer' },
      { name: 'AKIRA, 京都大学情报学研究科系统科学专攻过去问解答', url: 'http://xhslink.com/m/8FArGcXC0cz' },
      { name: '蛋黄猫物理, 物理、电路、电磁等过去问解答', url: 'https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7' },
      { name: 'つき, 京大系统, 名大复杂等过去问解答', url: 'https://www.xiaohongshu.com/user/profile/63d537d600000000260065d9' },
      { name: '電気情報の森・s2', url: 'https://denjoforest.com/sample-page' },
      { name: '理工系の院試の，問題と解答のまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140715/GraduateSchoolsEntranceExamAnswers' },
      { name: '大学の理工系の講義ノートPDFまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140620/PDFLectureNotesOnUniversity' },
      { name: '东京大学大学院工学系研究科修考经验分享', url: 'https://www.zhihu.com/column/ut-eng' },
      { name: '院試解くよ, 理工系の大学院入試の数学、物理学の解説をしてます。', url: 'https://www.youtube.com/@InshiTokuyo' },
      { name: 'あーるえぬ, 主に理論系の方に向けた大学数学の記事を扱っています', url: 'https://math-note.xyz/' },
      { name: 'Youtube: sin有機化学', url: 'https://www.youtube.com/playlist?list=PLO74KYA_mWyPkHdY7vO3DKmLOqJgkjW-i' },
      { name: '東京大学院试机械工学解答, zzy', url: 'https://zhuanlan.zhihu.com/p/685875014' },
      { name: '東大院、京大院、東工大院、東北大院機械系過去問の解答, SN', url: 'https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000' },
    ],
    jobLinks: [
      { name: 'itshinsotsu.xyz', url: 'https://www.itshinsotsu.xyz/' },
      { name: '魔法のスプレッドシート, ITエンジニアインターン情報が集まる魔法のスプレッドシート', url: 'https://magic-spreadsheets.github.io/' },
      { name: '長期インターンシップ・インターン募集情報ならゼロワンインターン', url: 'https://01intern.com/' },
      { name: 'レバテック | エンジニア専門 求人/案件サイト', url: 'https://levtech.jp/' },
    ],
  },
  ja: {
    title: '参考リンク',
    heading: '参考リンク',
    section1Title: '過去問解答者のリンクと参考資料',
    section2Title: '就職活動に役立つ情報',
    links: [
      { name: '永久花, Myyura\'s Blog', url: 'https://myyura.github.io/', desc: '2年間更新なし！' },
      { name: 'Miyake, 大学院入試（院試）過去問題の解答', url: 'https://miyake.github.io/exams/index.html', desc: '各大学の数学・物理問題の解答' },
      { name: 'Zephyr\'s Notes on ISCS & CBMS, UTokyo', url: 'https://inshi-notes.zephyr-zdz.space/', desc: '東京大学IST情報理工学系・GSFS CBMSの入試ノート' },
      { name: 'hari64boli64, 東京大学大学院情報理工学系研究科入試問題過去問解答など', url: 'https://github.com/hari64boli64/GraduateSchoolEntranceExamination' },
      { name: 'diohabara, open_inshi', url: 'https://github.com/diohabara/open_inshi', desc: '大学院入試過去問(2023年実施試験まで)' },
      { name: '之遥, 東京大学新領域創成科学研究科複雑理工学専攻2018-2023年度過去問解答', url: 'https://www.zhihu.com/people/zhao-yue-70-84' },
      { name: 'etsurin, 東京大学情報理工数学解答例', url: 'https://zhuanlan.zhihu.com/p/561992447' },
      { name: 'Josuke, 東大電子情報', url: 'https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f' },
      { name: 'Yu\'s Site, 九大情報理工学過去問の解答', url: 'https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/' },
      { name: 'samparker, 広島大学情報科学過去問', url: 'https://zhuanlan.zhihu.com/p/679651389' },
      { name: 'kainoj, UTokyo CS', url: 'https://github.com/kainoj/utokyo-cs' },
      { name: 'tomfluff, UTokyo CI', url: 'https://github.com/tomfluff/UTokyo_CI_Entrance_Exam' },
      { name: 'YuanzhongLi, UTokyo CI Programming', url: 'https://qiita.com/YuanzhongLi' },
      { name: '江澤 樹, 名古屋大学大学院多元数理科学研究科博士前期課程の入学試験問題の解答・解説', url: 'https://sites.google.com/view/tatsukiezawa/%E8%A7%A3%E7%AD%94%E9%9B%86' },
      { name: '藍色日和, 東大数理院試過去問解答例まとめ', url: 'https://mathlog.info/articles/zLhBwPhItOrD5zEO3psa' },
      { name: '京大数学教室院試解答(解析系)のぺーじ', url: 'https://sites.google.com/view/kmath-grad-answer' },
      { name: 'AKIRA, 京都大学情報学研究科システム科学専攻過去問解答', url: 'http://xhslink.com/m/8FArGcXC0cz' },
      { name: '蛋黄猫物理, 物理・回路・電磁気等の過去問解答', url: 'https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7' },
      { name: 'つき, 京大システム・名大複雑系等の過去問解答', url: 'https://www.xiaohongshu.com/user/profile/63d537d600000000260065d9' },
      { name: '電気情報の森・s2', url: 'https://denjoforest.com/sample-page' },
      { name: '理工系の院試の，問題と解答のまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140715/GraduateSchoolsEntranceExamAnswers' },
      { name: '大学の理工系の講義ノートPDFまとめ （数学・物理・情報・工学）', url: 'https://language-and-engineering.hatenablog.jp/entry/20140620/PDFLectureNotesOnUniversity' },
      { name: '東京大学大学院工学系研究科院試体験共有', url: 'https://www.zhihu.com/column/ut-eng' },
      { name: '院試解くよ, 理工系の大学院入試の数学、物理学の解説をしてます。', url: 'https://www.youtube.com/@InshiTokuyo' },
      { name: 'あーるえぬ, 主に理論系の方に向けた大学数学の記事を扱っています', url: 'https://math-note.xyz/' },
      { name: 'Youtube: sin有機化学', url: 'https://www.youtube.com/playlist?list=PLO74KYA_mWyPkHdY7vO3DKmLOqJgkjW-i' },
      { name: '東京大学院試機械工学解答, zzy', url: 'https://zhuanlan.zhihu.com/p/685875014' },
      { name: '東大院、京大院、東工大院、東北大院機械系過去問の解答, SN', url: 'https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000' },
    ],
    jobLinks: [
      { name: 'itshinsotsu.xyz', url: 'https://www.itshinsotsu.xyz/' },
      { name: '魔法のスプレッドシート, ITエンジニアインターン情報が集まる魔法のスプレッドシート', url: 'https://magic-spreadsheets.github.io/' },
      { name: '長期インターンシップ・インターン募集情報ならゼロワンインターン', url: 'https://01intern.com/' },
      { name: 'レバテック | エンジニア専門 求人/案件サイト', url: 'https://levtech.jp/' },
    ],
  },
};

export default function Links() {
  const language = useStoredLanguage();
  const t = content[language] || content.zh;

  return (
    <Layout title={t.title}>
      <div className="container margin-vert--lg">
        <h1>{t.heading}</h1>
        
        <h2>{t.section1Title}</h2>
        <ul>
          {t.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              {link.desc && <ul><li>{link.desc}</li></ul>}
            </li>
          ))}
        </ul>

        <h2>{t.section2Title}</h2>
        <ul>
          {t.jobLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
