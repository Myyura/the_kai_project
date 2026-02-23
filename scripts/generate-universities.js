#!/usr/bin/env node
/**
 * generate-universities.js
 *
 * 从 docs/ 目录结构自动生成 src/data/universities.js
 * 大学和院系列表完全由 docs/ 中实际存在的文件夹及其 _category_.json 决定，
 * 不再需要手动维护。
 *
 * 用法：
 *   node scripts/generate-universities.js
 *   npm run generate:universities
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const OUTPUT_FILE = path.resolve(__dirname, '..', 'src', 'data', 'universities.js');

// ─── 手动维护的附加元数据 ────────────────────────────────────
// 颜色：以 docs/ 下的大学文件夹名为键
const COLORS = {
  'tokyo-university':    '#1e3a5f',
  'kyoto-university':    '#2e8555',
  'tohoku-university':   '#6b5b95',
  'osaka-university':    '#2980b9',
  'nagoya-university':   '#c87533',
  'TITech':              '#1a7f8e',
  'hokkaido-university': '#4a90a4',
  'kyushu-university':   '#8e4557',
  'waseda-university':   '#9e3a3a',
  'keio-university':     '#1e3264',
  'kobe-university':     '#34495e',
  'tsukuba-university':  '#3d8b6d',
  'UEC':                 '#3a6ea5',
  'hiroshima-university':'#c0626f',
  'TUAT':                '#5b8c5a',
  'kanazawa-university': '#7b6b8d',
};

// 官方链接：以 "大学文件夹/院系文件夹" 为键
const WEBSITE_URLS = {
  // ─── 東京大学 ───
  'tokyo-university/science':                'https://www.s.u-tokyo.ac.jp/ja/admission/master/index.html',
  'tokyo-university/engineering':            'https://www.t.u-tokyo.ac.jp/soe/admission/general',
  'tokyo-university/IST':                    'https://www.i.u-tokyo.ac.jp/edu/entra/',
  'tokyo-university/frontier_sciences':      'https://www.k.u-tokyo.ac.jp/exam/info/',
  'tokyo-university/art_and_sciences':       'https://www.c.u-tokyo.ac.jp/graduate/admission/master-doctor/index.html',
  'tokyo-university/III':                    'https://www.iii.u-tokyo.ac.jp/admissions',
  'tokyo-university/mathematical_sciences':  'https://www.ms.u-tokyo.ac.jp/kyoumu/examination.html',

  // ─── 京都大学 ───
  'kyoto-university/informatics': 'https://www.i.kyoto-u.ac.jp/admission/',
  'kyoto-university/management':  'https://www.gsm.kyoto-u.ac.jp/admission/',
  'kyoto-university/science':     'https://sci.kyoto-u.ac.jp/ja/admissions/ms',

  // ─── 東北大学 ───
  'tohoku-university/biomedical_engineering': 'https://www.bme.tohoku.ac.jp/admission/',
  'tohoku-university/engineering':            'https://www.eng.tohoku.ac.jp/admission/grad/master.html',
  'tohoku-university/environmental_studies':  'https://www.kankyo.tohoku.ac.jp/newstudent/nittei-yoko.html',
  'tohoku-university/information_sciences':   'https://www.is.tohoku.ac.jp/jp/entrance/',
  'tohoku-university/science':                'https://www.sci.tohoku.ac.jp/juken/graduate-admission.html',

  // ─── 大阪大学 ───
  'osaka-university/engineering':             'https://www.eng.osaka-u.ac.jp/ja/entrance/g_admissions/',
  'osaka-university/engineering_sciences':    'https://www.es.osaka-u.ac.jp/ja/examinee/graduate-school-of-engineering-science/entrance-exam/',
  'osaka-university/IST':                     'https://www.ist.osaka-u.ac.jp/japanese/examinees/admission/',
  'osaka-university/science':                 'https://www.sci.osaka-u.ac.jp/ja/admissions/admissions_d/',

  // ─── 名古屋大学 ───
  'nagoya-university/EES':          'https://www.env.nagoya-u.ac.jp/admission/index.html',
  'nagoya-university/engineering':  'https://www.engg.nagoya-u.ac.jp/prospective/',
  'nagoya-university/informatics':  'https://www.i.nagoya-u.ac.jp/gs/entranceexamination/',
  'nagoya-university/mathematics':  'https://www.math.nagoya-u.ac.jp/ja/admission/',
  'nagoya-university/science':      'https://www.sci.nagoya-u.ac.jp/graduate/index.html',

  // ─── 東京科学大学（旧東京工業大学）───
  'TITech/engineering':            'https://www.titech.ac.jp/admissions/prospective-students/admissions/guide',
  'TITech/environment_and_society':'https://www.titech.ac.jp/admissions/prospective-students/admissions/guide',
  'TITech/MCS':                    'https://www.titech.ac.jp/admissions/prospective-students/admissions/guide',
  'TITech/MCT':                    'https://www.titech.ac.jp/admissions/prospective-students/admissions/guide',
  'TITech/science':                'https://www.titech.ac.jp/admissions/prospective-students/admissions/guide',

  // ─── 北海道大学 ───
  'hokkaido-university/fisheries_sciences': 'https://www2.fish.hokudai.ac.jp/admission/mcdc.html',
  'hokkaido-university/IST':                'https://www.ist.hokudai.ac.jp/examinfo/',
  'hokkaido-university/public_policy':      'https://www.hops.hokudai.ac.jp/admission/',
  'hokkaido-university/science':            'https://www2.sci.hokudai.ac.jp/gs/admission-guideline',

  // ─── 九州大学 ───
  'kyushu-university/economics':   'https://www.econ.kyushu-u.ac.jp/nyushi/',
  'kyushu-university/engineering': 'https://www.eng.kyushu-u.ac.jp/admissions.html',
  'kyushu-university/ISEE':        'https://www.isee.kyushu-u.ac.jp/admissions_master.html',
  'kyushu-university/mathematics': 'https://www.math.kyushu-u.ac.jp/admission/graduateschool/',
  'kyushu-university/science':     'https://www.sci.kyushu-u.ac.jp/admission/daigakuin_master.html',

  // ─── 早稲田大学 ───
  'waseda-university/ASE': 'https://www.waseda.jp/fsci/admissions_gs/',
  'waseda-university/CSE': 'https://www.waseda.jp/fsci/admissions_gs/',
  'waseda-university/FSE': 'https://www.waseda.jp/fsci/admissions_gs/',

  // ─── 慶應義塾大学 ───
  'keio-university/business': 'https://www.kbs.keio.ac.jp/graduate/mba/admission/',

  // ─── 神戸大学 ───
  'kobe-university/economics':          'https://www.econ.kobe-u.ac.jp/admission-master/',
  'kobe-university/engineering':        'http://www.eng.kobe-u.ac.jp/examinee.html',
  'kobe-university/science':            'http://www.sci.kobe-u.ac.jp/admissions/master.html',
  'kobe-university/system_informatics': 'https://www.csi.kobe-u.ac.jp/exam/master_exam.html',

  // ─── 筑波大学 ───
  'tsukuba-university/science_and_technology': 'https://www.ap-graduate.tsukuba.ac.jp/course/',

  // ─── 電気通信大学 ───
  'UEC/informatics_and_engineering': 'https://www.uec.ac.jp/education/graduate/admission/request.html',

  // ─── 広島大学 ───
  'hiroshima-university/ASE': 'https://www.hiroshima-u.ac.jp/adse/admission',

  // ─── 東京農工大学 ───
  'TUAT/engineering': 'https://www.tuat.ac.jp/admission/nyushi_daigakuin/',

  // ─── 金沢大学 ───
  'kanazawa-university/nst': 'https://www.kanazawa-u.ac.jp/education/admission/graduate',
};

// ─── 工具函数 ────────────────────────────────────────────────

function readCategoryJson(dirPath) {
  const catFile = path.join(dirPath, '_category_.json');
  if (!fs.existsSync(catFile)) return null;
  try {
    return JSON.parse(fs.readFileSync(catFile, 'utf-8'));
  } catch {
    return null;
  }
}

// ─── 主逻辑：扫描 docs/ 生成数据 ────────────────────────────

function scanDocs() {
  const universities = [];

  const entries = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

    const univDir = path.join(DOCS_DIR, entry.name);
    const univCategory = readCategoryJson(univDir);
    if (!univCategory || !univCategory.label) continue;

    // 扫描院系子目录
    const departments = [];
    const deptEntries = fs.readdirSync(univDir, { withFileTypes: true });
    for (const deptEntry of deptEntries) {
      if (!deptEntry.isDirectory()) continue;
      if (deptEntry.name.startsWith('_') || deptEntry.name.startsWith('.')) continue;

      const deptDir = path.join(univDir, deptEntry.name);
      const deptCategory = readCategoryJson(deptDir);
      if (!deptCategory || !deptCategory.label) continue;

      const deptKey = `${entry.name}/${deptEntry.name}`;
      const dept = {
        id: deptEntry.name,
        name: deptCategory.label,
        _position: deptCategory.position ?? 999,
      };
      if (WEBSITE_URLS[deptKey]) {
        dept.websiteUrl = WEBSITE_URLS[deptKey];
      }
      departments.push(dept);
    }

    // 按 _category_.json 中的 position 排序
    departments.sort((a, b) => a._position - b._position);
    // 移除内部排序字段
    const cleanDepts = departments.map(({ _position, ...rest }) => rest);

    universities.push({
      id: entry.name,
      name: univCategory.label,
      _position: univCategory.position ?? 999,
      color: COLORS[entry.name] || '#666666',
      departments: cleanDepts,
    });
  }

  universities.sort((a, b) => a._position - b._position);
  return universities.map(({ _position, ...rest }) => rest);
}

// ─── 生成输出文件 ────────────────────────────────────────────

const universities = scanDocs();

// 构建 docs 文件夹名 → 大学显示名的映射表
const univMapEntries = universities
  .map((u) => `  ${JSON.stringify(u.id)}: ${JSON.stringify(u.name)}`)
  .join(',\n');

// 构建 universities 数组内容
const univArrayStr = JSON.stringify(universities, null, 2);

const output = `\
// ============================================================
// 此文件由 scripts/generate-universities.js 自动生成
// 请勿手动编辑！如需更新请运行：npm run generate:universities
// 生成时间：${new Date().toISOString()}
// ============================================================

/**
 * 大学及院系信息（从 docs/ 目录结构自动扫描生成）
 *
 * 每所大学的 id 对应 docs/ 下的文件夹名，
 * 每个院系的 id 对应该大学文件夹下的子文件夹名，
 * name 取自各级 _category_.json 的 label 字段。
 */
export const universities = ${univArrayStr};

/**
 * docs 文件夹名 → 大学显示名 映射表
 * 供 progress.js 等模块直接使用，无需硬编码
 */
export const UNIV_MAP = {
${univMapEntries},
};
`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');

// 汇总
console.log('✅ 生成完毕！');
console.log(`   输出文件：${OUTPUT_FILE}`);
console.log(`   大学数量：${universities.length}`);
const totalDepts = universities.reduce((sum, u) => sum + u.departments.length, 0);
console.log(`   院系数量：${totalDepts}`);

// 检查缺失元数据
const missingColors = universities.filter((u) => !COLORS[u.id]);
if (missingColors.length) {
  console.warn(`\n⚠️  以下大学缺少颜色配置（将使用默认 #666666）：`);
  missingColors.forEach((u) => console.warn(`   - ${u.id} (${u.name})`));
}

const missingUrls = [];
for (const u of universities) {
  for (const d of u.departments) {
    if (!d.websiteUrl) {
      missingUrls.push(`${u.id}/${d.id} (${d.name})`);
    }
  }
}
if (missingUrls.length) {
  console.warn(`\n⚠️  以下院系缺少官方链接：`);
  missingUrls.forEach((s) => console.warn(`   - ${s}`));
}
