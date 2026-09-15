function resolveExperienceYear({admissionYear, examYear, season}, publishedYear) {
  const inferred = examYear !== undefined && season !== undefined
    ? examYear + (season === 'summer' ? 1 : 0)
    : undefined;
  const year = admissionYear ?? inferred ?? publishedYear;
  return year === undefined ? {} : {
    year,
    yearSource: admissionYear !== undefined ? 'admission' : inferred !== undefined ? 'exam' : 'publication',
  };
}

module.exports = {resolveExperienceYear};
