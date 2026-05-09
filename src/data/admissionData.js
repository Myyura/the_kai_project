import admissions from './admissions.json';

export const admissionData = admissions.records;
export const examTypes = admissions.examTypes;
export const sortOptions = admissions.sortOptions;

export const getYears = () => {
  const years = [...new Set(admissionData.map((d) => d.year))].sort((a, b) => b - a);
  return ['全部', ...years];
};
