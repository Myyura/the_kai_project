#!/usr/bin/env node
/**
 * generate-universities.js
 *
 * 从 docs/ 目录结构自动生成 src/data/universities.js
 * 大学、院系和项目目录由 docs/ 中实际存在的文件夹及其 _category_.json 决定，
 * 颜色和官网链接等附加元数据维护在 src/data/universityMetadata.json。
 *
 * 用法：
 *   node scripts/generate-universities.js
 *   npm run generate:universities
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const OUTPUT_FILE = path.resolve(__dirname, '..', 'src', 'data', 'universities.js');
const { colors: COLORS = {}, websiteUrls: WEBSITE_URLS = {} } = require('../src/data/universityMetadata.json');

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

function scanPrograms(deptDir) {
  const programs = new Map();

  function addProgram(segments) {
    if (segments.length === 0) return;
    const id = segments.join('/');
    if (programs.has(id)) return;

    const programDir = path.join(deptDir, ...segments);
    const category = readCategoryJson(programDir);
    programs.set(id, {
      id,
      name: category?.label || segments.join(' / '),
      _position: category?.position ?? 999,
    });
  }

  function walk(currentDir, segments) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

      if (/^\d{4}$/.test(entry.name)) {
        addProgram(segments);
        continue;
      }

      walk(path.join(currentDir, entry.name), [...segments, entry.name]);
    }
  }

  walk(deptDir, []);
  return Array.from(programs.values())
    .sort((a, b) => a._position - b._position || a.name.localeCompare(b.name))
    .map(({ _position, ...rest }) => rest);
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
      const programs = scanPrograms(deptDir);
      if (programs.length > 0) {
        dept.programs = programs;
      }
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
 * 大学、院系及项目目录信息（从 docs/ 目录结构自动扫描生成）
 *
 * 每所大学的 id 对应 docs/ 下的文件夹名，
 * 每个院系的 id 对应该大学文件夹下的子文件夹名，
 * 每个项目目录的 id 对应院系下、年度目录前的路径，
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
