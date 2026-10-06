const copy = {
  zh: {
    programCount: (count) => `收录 ${count} 个专攻`,
    archivedExams: '已收录过去问',
  },
  ja: {
    programCount: (count) => `${count} 専攻を掲載`,
    archivedExams: '過去問を掲載',
  },
  en: {
    programCount: (count) => `${count} ${count === 1 ? 'program' : 'programs'} in the archive`,
    archivedExams: 'Past exams available',
  },
};

export default copy;
