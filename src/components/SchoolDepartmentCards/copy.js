const copy = {
  zh: {
    heading: '已收录研究科',
    programCount: (count) => `已收录 ${count} 个专攻`,
    archivedExams: '已收录过去问',
    archive: '查看过去问',
    website: '官方页面',
    websiteLabel: (name) => `${name}：官方页面（在新标签页打开）`,
  },
  ja: {
    heading: '掲載研究科',
    programCount: (count) => `${count} 専攻を掲載`,
    archivedExams: '過去問を掲載',
    archive: '過去問を見る',
    website: '公式ページ',
    websiteLabel: (name) => `${name}：公式ページ（新しいタブで開く）`,
  },
  en: {
    heading: 'Graduate schools in the archive',
    programCount: (count) => `${count} ${count === 1 ? 'program' : 'programs'} in the archive`,
    archivedExams: 'Past exams available',
    archive: 'View past exams',
    website: 'Official page',
    websiteLabel: (name) => `${name}: official page (opens in a new tab)`,
  },
};

export default copy;
