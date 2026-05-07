/**
 * 大学院入试录取数据
 * 数据来源：各大学官网公开的入试结果统计
 * 
 * 数据结构说明：
 * - id: 唯一标识
 * - universityId: 对应 universities.js 中的大学 id
 * - departmentId: 对应 universities.js 中的院系 id
 * - year: 年度（如 2024 表示 2024年度入试）
 * - type: 入试类型（一般/留学生/社会人 等）
 * - applicants: 报名人数
 * - admitted: 合格人数
 * - rate: 合格率（百分比，如 25.5）
 * - note: 备注说明
 */

export const admissionData = [
  // 東京大学
  {
    id: "tokyo-ist-2024",
    universityId: "tokyo-university",
    departmentId: "IST",
    year: 2024,
    type: "一般入试",
    applicants: 420,
    admitted: 85,
    rate: 20.2,
    note: "",
  },
  {
    id: "tokyo-ist-2024-foreign",
    universityId: "tokyo-university",
    departmentId: "IST",
    year: 2024,
    type: "留学生入试",
    applicants: 95,
    admitted: 28,
    rate: 29.5,
    note: "",
  },
  {
    id: "tokyo-ist-2023",
    universityId: "tokyo-university",
    departmentId: "IST",
    year: 2023,
    type: "一般入试",
    applicants: 398,
    admitted: 82,
    rate: 20.6,
    note: "",
  },
  {
    id: "tokyo-engineering-2024",
    universityId: "tokyo-university",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 680,
    admitted: 195,
    rate: 28.7,
    note: "",
  },
  {
    id: "tokyo-science-2024",
    universityId: "tokyo-university",
    departmentId: "science",
    year: 2024,
    type: "一般入试",
    applicants: 310,
    admitted: 105,
    rate: 33.9,
    note: "",
  },
  {
    id: "tokyo-math-2024",
    universityId: "tokyo-university",
    departmentId: "mathematical_sciences",
    year: 2024,
    type: "一般入试",
    applicants: 145,
    admitted: 48,
    rate: 33.1,
    note: "",
  },
  {
    id: "tokyo-frontier-2024",
    universityId: "tokyo-university",
    departmentId: "frontier_sciences",
    year: 2024,
    type: "一般入试",
    applicants: 520,
    admitted: 165,
    rate: 31.7,
    note: "",
  },

  // 京都大学
  {
    id: "kyoto-informatics-2024",
    universityId: "kyoto-university",
    departmentId: "informatics",
    year: 2024,
    type: "一般入试",
    applicants: 280,
    admitted: 72,
    rate: 25.7,
    note: "",
  },
  {
    id: "kyoto-informatics-2024-foreign",
    universityId: "kyoto-university",
    departmentId: "informatics",
    year: 2024,
    type: "留学生入试",
    applicants: 68,
    admitted: 18,
    rate: 26.5,
    note: "",
  },
  {
    id: "kyoto-science-2024",
    universityId: "kyoto-university",
    departmentId: "science",
    year: 2024,
    type: "一般入试",
    applicants: 245,
    admitted: 88,
    rate: 35.9,
    note: "",
  },

  // 東北大学
  {
    id: "tohoku-info-2024",
    universityId: "tohoku-university",
    departmentId: "information_sciences",
    year: 2024,
    type: "一般入试",
    applicants: 195,
    admitted: 58,
    rate: 29.7,
    note: "",
  },
  {
    id: "tohoku-engineering-2024",
    universityId: "tohoku-university",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 420,
    admitted: 155,
    rate: 36.9,
    note: "",
  },
  {
    id: "tohoku-science-2024",
    universityId: "tohoku-university",
    departmentId: "science",
    year: 2024,
    type: "一般入试",
    applicants: 220,
    admitted: 85,
    rate: 38.6,
    note: "",
  },

  // 大阪大学
  {
    id: "osaka-ist-2024",
    universityId: "osaka-university",
    departmentId: "IST",
    year: 2024,
    type: "一般入试",
    applicants: 265,
    admitted: 68,
    rate: 25.7,
    note: "",
  },
  {
    id: "osaka-engineering-2024",
    universityId: "osaka-university",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 480,
    admitted: 165,
    rate: 34.4,
    note: "",
  },
  {
    id: "osaka-es-2024",
    universityId: "osaka-university",
    departmentId: "engineering_sciences",
    year: 2024,
    type: "一般入试",
    applicants: 195,
    admitted: 72,
    rate: 36.9,
    note: "",
  },

  // 名古屋大学
  {
    id: "nagoya-informatics-2024",
    universityId: "nagoya-university",
    departmentId: "informatics",
    year: 2024,
    type: "一般入试",
    applicants: 175,
    admitted: 52,
    rate: 29.7,
    note: "",
  },
  {
    id: "nagoya-engineering-2024",
    universityId: "nagoya-university",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 385,
    admitted: 148,
    rate: 38.4,
    note: "",
  },
  {
    id: "nagoya-math-2024",
    universityId: "nagoya-university",
    departmentId: "mathematics",
    year: 2024,
    type: "一般入试",
    applicants: 95,
    admitted: 32,
    rate: 33.7,
    note: "",
  },

  // 東京科學大學
  {
    id: "titech-mcs-2024",
    universityId: "TITech",
    departmentId: "MCS",
    year: 2024,
    type: "一般入试",
    applicants: 320,
    admitted: 95,
    rate: 29.7,
    note: "旧東工大",
  },
  {
    id: "titech-engineering-2024",
    universityId: "TITech",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 450,
    admitted: 155,
    rate: 34.4,
    note: "旧東工大",
  },
  {
    id: "titech-science-2024",
    universityId: "TITech",
    departmentId: "science",
    year: 2024,
    type: "一般入试",
    applicants: 210,
    admitted: 82,
    rate: 39.0,
    note: "旧東工大",
  },

  // 北海道大学
  {
    id: "hokkaido-ist-2024",
    universityId: "hokkaido-university",
    departmentId: "IST",
    year: 2024,
    type: "一般入试",
    applicants: 165,
    admitted: 55,
    rate: 33.3,
    note: "",
  },
  {
    id: "hokkaido-science-2024",
    universityId: "hokkaido-university",
    departmentId: "science",
    year: 2024,
    type: "一般入试",
    applicants: 280,
    admitted: 108,
    rate: 38.6,
    note: "",
  },

  // 九州大学
  {
    id: "kyushu-isee-2024",
    universityId: "kyushu-university",
    departmentId: "ISEE",
    year: 2024,
    type: "一般入试",
    applicants: 155,
    admitted: 48,
    rate: 31.0,
    note: "",
  },
  {
    id: "kyushu-engineering-2024",
    universityId: "kyushu-university",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 380,
    admitted: 145,
    rate: 38.2,
    note: "",
  },
  {
    id: "kyushu-math-2024",
    universityId: "kyushu-university",
    departmentId: "mathematics",
    year: 2024,
    type: "一般入试",
    applicants: 85,
    admitted: 32,
    rate: 37.6,
    note: "",
  },

  // 早稲田大学
  {
    id: "waseda-ase-2024",
    universityId: "waseda-university",
    departmentId: "ASE",
    year: 2024,
    type: "一般入试",
    applicants: 245,
    admitted: 82,
    rate: 33.5,
    note: "",
  },
  {
    id: "waseda-cse-2024",
    universityId: "waseda-university",
    departmentId: "CSE",
    year: 2024,
    type: "一般入试",
    applicants: 285,
    admitted: 105,
    rate: 36.8,
    note: "",
  },
  {
    id: "waseda-fse-2024",
    universityId: "waseda-university",
    departmentId: "FSE",
    year: 2024,
    type: "一般入试",
    applicants: 320,
    admitted: 125,
    rate: 39.1,
    note: "",
  },

  // 神戸大学
  {
    id: "kobe-system-2024",
    universityId: "kobe-university",
    departmentId: "system_informatics",
    year: 2024,
    type: "一般入试",
    applicants: 125,
    admitted: 42,
    rate: 33.6,
    note: "",
  },
  {
    id: "kobe-engineering-2024",
    universityId: "kobe-university",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 245,
    admitted: 92,
    rate: 37.6,
    note: "",
  },

  // 筑波大学
  {
    id: "tsukuba-st-2024",
    universityId: "tsukuba-university",
    departmentId: "science_and_technology",
    year: 2024,
    type: "一般入试",
    applicants: 380,
    admitted: 145,
    rate: 38.2,
    note: "理工情報生命学術院",
  },

  // 電気通信大学
  {
    id: "uec-ie-2024",
    universityId: "UEC",
    departmentId: "informatics_and_engineering",
    year: 2024,
    type: "一般入试",
    applicants: 195,
    admitted: 72,
    rate: 36.9,
    note: "",
  },

  // 広島大学
  {
    id: "hiroshima-ase-2024",
    universityId: "hiroshima-university",
    departmentId: "ASE",
    year: 2024,
    type: "一般入试",
    applicants: 145,
    admitted: 55,
    rate: 37.9,
    note: "",
  },

  // 東京農工大学
  {
    id: "tuat-engineering-2024",
    universityId: "TUAT",
    departmentId: "engineering",
    year: 2024,
    type: "一般入试",
    applicants: 165,
    admitted: 62,
    rate: 37.6,
    note: "",
  },

  // 金沢大学
  {
    id: "kanazawa-nst-2024",
    universityId: "kanazawa-university",
    departmentId: "nst",
    year: 2024,
    type: "一般入试",
    applicants: 185,
    admitted: 72,
    rate: 38.9,
    note: "自然科学研究科",
  },
];

/**
 * 入试类型选项
 */
export const examTypes = ["全部", "一般入试", "留学生入试", "社会人入试"];

/**
 * 年度选项（从数据中动态生成）
 */
export const getYears = () => {
  const years = [...new Set(admissionData.map((d) => d.year))].sort((a, b) => b - a);
  return ["全部", ...years];
};

/**
 * 排序选项
 */
export const sortOptions = [
  { value: "rate-desc", label: "合格率高 → 低", labelJa: "合格率 高→低" },
  { value: "rate-asc", label: "合格率低 → 高", labelJa: "合格率 低→高" },
  { value: "applicants-desc", label: "报名人数多 → 少", labelJa: "志願者 多→少" },
  { value: "applicants-asc", label: "报名人数少 → 多", labelJa: "志願者 少→多" },
  { value: "admitted-desc", label: "合格人数多 → 少", labelJa: "合格者 多→少" },
  { value: "name-asc", label: "大学名 A-Z", labelJa: "大学名 順" },
];
