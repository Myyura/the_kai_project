#!/usr/bin/env node
/**
 * review-format.js
 *
 * 审阅 docs/ 下所有解答文档的格式与排版，生成 Markdown 格式的详细报告。
 *
 * 用法：
 *   node scripts/review-format.js
 *   node scripts/review-format.js --json   # 输出 JSON 格式
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_FILE_RE = /^docs\/.*\.(md|mdx)$/i;

// ─── 辅助函数 ───────────────────────────────────────────────

function getAllMdFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMdFiles(fullPath));
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      // 跳过非解答文档
      if (entry.name === 'intro.mdx' || entry.name === 'intro.js') continue;
      results.push(fullPath);
    }
  }
  return results;
}

function normalizePath(p) {
  return p.replace(/\\/g, '/');
}

function getArgValue(flagName) {
  const argv = process.argv;
  const idx = argv.indexOf(flagName);
  if (idx < 0) return null;
  return argv[idx + 1] || null;
}

function resolveWithinRepo(inputPath) {
  if (!inputPath) return null;
  const raw = String(inputPath).trim();
  if (!raw) return null;

  const asAbsolute = path.isAbsolute(raw)
    ? raw
    : path.resolve(REPO_ROOT, raw);
  const rel = normalizePath(path.relative(REPO_ROOT, asAbsolute));
  const baseName = path.basename(asAbsolute);

  if (!DOCS_FILE_RE.test(rel)) return null;
  if (baseName === 'intro.mdx') return null;
  if (!fs.existsSync(asAbsolute)) return null;
  if (!fs.statSync(asAbsolute).isFile()) return null;

  return asAbsolute;
}

function readScopedFiles() {
  const fromCli = getArgValue('--files');
  const fromFileArg = getArgValue('--files-from');

  if (!fromCli && !fromFileArg) {
    return null;
  }

  const candidates = [];

  if (fromCli) {
    candidates.push(
      ...fromCli
        .split(/[\n,]/)
        .map((s) => s.trim())
        .filter(Boolean),
    );
  }

  if (fromFileArg) {
    const fileListPath = path.isAbsolute(fromFileArg)
      ? fromFileArg
      : path.resolve(REPO_ROOT, fromFileArg);
    if (!fs.existsSync(fileListPath)) {
      throw new Error(`--files-from 指定的文件不存在: ${fromFileArg}`);
    }
    const lines = fs
      .readFileSync(fileListPath, 'utf-8')
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    candidates.push(...lines);
  }

  const unique = new Map();
  for (const file of candidates) {
    const abs = resolveWithinRepo(file);
    if (!abs) continue;
    const rel = normalizePath(path.relative(REPO_ROOT, abs));
    if (!unique.has(rel)) unique.set(rel, abs);
  }

  return Array.from(unique.values());
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const raw = match[1];
  const result = { _raw: raw, _endIndex: match[0].length };

// 简单解析 sidebar_label（支持双引号、单引号、无引号）
  const labelMatch = raw.match(/sidebar_label:\s*(?:"([^"]*)"|'([^']*)'|(\S.*))/);  
  result.sidebar_label = labelMatch ? (labelMatch[1] || labelMatch[2] || (labelMatch[3] && labelMatch[3].trim())) : null;

  // 解析 tags
  const tagsSection = raw.match(/tags:\s*\n((?:\s+-\s+.+\n?)*)/);
  if (tagsSection) {
    result.tags = tagsSection[1]
      .split('\n')
      .map(line => line.replace(/^\s+-\s+/, '').trim())
      .filter(Boolean);
  } else {
    result.tags = null;
  }

  return result;
}

function getLineNumber(content, charIndex) {
  return content.substring(0, charIndex).split('\n').length;
}

// ─── 检查规则 ───────────────────────────────────────────────

function checkFile(filePath, content) {
  const issues = [];
  const lines = content.split('\n');
  const relPath = path.relative(path.resolve(__dirname, '..'), filePath).replace(/\\/g, '/');

  // 1. YAML Frontmatter
  const fm = parseFrontmatter(content);
  if (!fm) {
    issues.push({ severity: 'ERROR', file: relPath, line: 1, rule: 'frontmatter-missing', message: '缺少 YAML frontmatter（---）' });
    return issues; // 无法继续检查
  }

  if (!fm.sidebar_label) {
    issues.push({ severity: 'ERROR', file: relPath, line: 1, rule: 'frontmatter-sidebar-label', message: '缺少或为空的 sidebar_label' });
  }

  if (!fm.tags || fm.tags.length === 0) {
    issues.push({ severity: 'ERROR', file: relPath, line: 1, rule: 'frontmatter-tags', message: '缺少或为空的 tags' });
  }

  // 2. 标题检查（frontmatter 之后的第一行非空内容应为 H1）
  const afterFm = content.substring(fm._endIndex);
  const afterFmLines = afterFm.split('\n');
  let foundTitle = false;
  let titleLineIdx = 0;
  for (let i = 0; i < afterFmLines.length; i++) {
    const trimmed = afterFmLines[i].trim();
    if (trimmed === '') continue;
    titleLineIdx = getLineNumber(content, fm._endIndex) + i;
    if (trimmed.startsWith('# ')) {
      foundTitle = true;
    } else {
      issues.push({ severity: 'ERROR', file: relPath, line: titleLineIdx, rule: 'title-missing', message: `frontmatter 后的第一行非空内容应为 H1 标题，实际为: "${trimmed.substring(0, 60)}..."` });
    }
    break;
  }
  if (!foundTitle && afterFmLines.every(l => l.trim() === '')) {
    issues.push({ severity: 'ERROR', file: relPath, line: 1, rule: 'title-missing', message: '文档缺少 H1 标题' });
  }

  // 3. 章节检查
  const trackedSections = [
    { pattern: /^##\s+\*\*Author\*\*/, name: 'Author' },
    { pattern: /^##\s+.*Description/i, name: 'Description' },
    { pattern: /^##\s+.*Kai/i, name: 'Kai' },
  ];

  const sectionPositions = {};
  for (const sec of trackedSections) {
    for (let i = 0; i < lines.length; i++) {
      if (sec.pattern.test(lines[i].trim())) {
        sectionPositions[sec.name] = i + 1; // 1-based
        break;
      }
    }
  }

  if (!sectionPositions['Author']) {
    issues.push({ severity: 'ERROR', file: relPath, line: 1, rule: 'section-missing-author', message: '缺少必需章节: ## **Author**' });
  }

  if (!sectionPositions['Description'] && !sectionPositions['Kai']) {
    issues.push({
      severity: 'ERROR',
      file: relPath,
      line: 1,
      rule: 'section-missing-description-or-kai',
      message: '缺少必需章节: 至少包含 ## **Description** 或 ## **Kai** 之一',
    });
  }

  // 4. 章节顺序检查
  const orderedSections = ['Author', 'Description', 'Kai'];
  const presentSections = orderedSections.filter(s => sectionPositions[s]);
  for (let i = 1; i < presentSections.length; i++) {
    if (sectionPositions[presentSections[i]] < sectionPositions[presentSections[i - 1]]) {
      issues.push({
        severity: 'ERROR',
        file: relPath,
        line: sectionPositions[presentSections[i]],
        rule: 'section-order',
        message: `章节顺序错误: ## **${presentSections[i]}** (行 ${sectionPositions[presentSections[i]]}) 出现在 ## **${presentSections[i - 1]}** (行 ${sectionPositions[presentSections[i - 1]]}) 之前`,
      });
    }
  }

  // 5. Description 内容为空检查
  if (sectionPositions['Description']) {
    const descStart = sectionPositions['Description']; // 1-based
    const kaiStart = sectionPositions['Kai'];          // 1-based
    const descEnd = kaiStart && kaiStart > descStart ? kaiStart - 1 : lines.length;
    const descContent = lines.slice(descStart, descEnd).join('\n').trim();
    if (descContent === '') {
      issues.push({ severity: 'WARNING', file: relPath, line: descStart, rule: 'description-empty', message: '## **Description** 章节内容为空' });
    }
  }

  // 5b. Kai 内容为空检查
  if (sectionPositions['Kai']) {
    const kaiStart = sectionPositions['Kai']; // 1-based
    const kaiContent = lines.slice(kaiStart).join('\n').trim();
    if (kaiContent === '') {
      issues.push({ severity: 'WARNING', file: relPath, line: kaiStart, rule: 'kai-empty', message: '## **Kai** 章节内容为空' });
    }
  }

  // 6. 数学公式语法检查
  // 6a. $$ 块未闭合（计算非代码块中的 $$ 数量）
  let inCodeBlock = false;
  let dollarDoubleCount = 0;
  let dollarDoubleLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^```/.test(line.trim())) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    // 计算该行中 $$ 的出现次数
    const matches = line.match(/\$\$/g);
    if (matches) {
      dollarDoubleCount += matches.length;
      dollarDoubleLines.push(i + 1);
    }
  }
  if (dollarDoubleCount % 2 !== 0) {
    issues.push({
      severity: 'WARNING',
      file: relPath,
      line: dollarDoubleLines[dollarDoubleLines.length - 1] || 1,
      rule: 'math-unclosed-block',
      message: `检测到 $$ 数量为奇数 (${dollarDoubleCount})，可能存在未闭合的数学公式块`,
    });
  }

  // 7. 标题层级跳跃检查
  let prevLevel = 0;
  inCodeBlock = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^```/.test(line.trim())) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const headingMatch = line.match(/^(#{1,6})\s+/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      if (prevLevel > 0 && level > prevLevel + 1) {
        issues.push({
          severity: 'WARNING',
          file: relPath,
          line: i + 1,
          rule: 'heading-skip',
          message: `标题层级跳跃: 从 H${prevLevel} 直接跳到 H${level}`,
        });
      }
      prevLevel = level;
    }
  }

  return issues;
}

// ─── 报告生成 ───────────────────────────────────────────────

function generateMarkdownReport(allIssues, totalFiles) {
  const errors = allIssues.filter(i => i.severity === 'ERROR');
  const warnings = allIssues.filter(i => i.severity === 'WARNING');

  // 按规则分组统计
  const ruleStats = {};
  for (const issue of allIssues) {
    ruleStats[issue.rule] = (ruleStats[issue.rule] || 0) + 1;
  }

  // 按大学目录分组
  const byUniversity = {};
  for (const issue of allIssues) {
    const parts = issue.file.split('/');
    const uni = parts.length >= 2 ? parts[1] : 'other';
    if (!byUniversity[uni]) byUniversity[uni] = [];
    byUniversity[uni].push(issue);
  }

  const now = new Date().toISOString().replace('T', ' ').replace(/\.\d+Z/, ' UTC');

  let report = `# 📋 解答文档格式审阅报告\n\n`;
  report += `> 生成时间: ${now}\n\n`;
  report += `## 📊 总览\n\n`;
  report += `| 指标 | 数值 |\n`;
  report += `|------|------|\n`;
  report += `| 检查文件数 | ${totalFiles} |\n`;
  report += `| 错误 (ERROR) | ${errors.length} |\n`;
  report += `| 警告 (WARNING) | ${warnings.length} |\n`;
  report += `| 问题总数 | ${allIssues.length} |\n`;
  report += `| 涉及大学数 | ${Object.keys(byUniversity).length} |\n\n`;

  if (allIssues.length === 0) {
    report += `✅ **所有文档格式检查通过，未发现任何问题！**\n`;
    return report;
  }

  // 规则统计
  report += `## 📏 问题分类统计\n\n`;
  report += `| 规则 | 数量 | 说明 |\n`;
  report += `|------|------|------|\n`;
  const ruleDescriptions = {
    'frontmatter-missing': '缺少 YAML frontmatter',
    'frontmatter-sidebar-label': '缺少 sidebar_label',
    'frontmatter-tags': '缺少 tags',
    'title-missing': '缺少 H1 标题',
    'section-missing-author': '缺少 Author 章节',
    'section-missing-description-or-kai': '缺少 Description/Kai 章节',
    'section-order': '章节顺序错误',
    'description-empty': 'Description 内容为空',
    'kai-empty': 'Kai 内容为空',
    'math-unclosed-block': '数学公式块未闭合',
    'heading-skip': '标题层级跳跃',

  };
  for (const [rule, count] of Object.entries(ruleStats).sort((a, b) => b[1] - a[1])) {
    report += `| \`${rule}\` | ${count} | ${ruleDescriptions[rule] || rule} |\n`;
  }
  report += '\n';

  // 按目录层级分组详细报告
  report += `## 🏫 按大学分组详情\n\n`;

  // 构建目录树: { uni: { dept: { subject: { year: [issues] } } } }
  const tree = {};
  for (const issue of allIssues) {
    // docs/university/department/subject/year/file.md
    const parts = issue.file.split('/');
    const uni = parts[1] || 'other';
    // 剩余路径中，最后一个是文件名，倒数第二个是年份，其余为中间层级
    const fileName = parts[parts.length - 1];
    const middleParts = parts.slice(2, -1); // department/.../year
    const subPath = middleParts.join('/') || '_root';

    if (!tree[uni]) tree[uni] = {};
    if (!tree[uni][subPath]) tree[uni][subPath] = {};
    if (!tree[uni][subPath][fileName]) tree[uni][subPath][fileName] = [];
    tree[uni][subPath][fileName].push(issue);
  }

  const uniKeys = Object.keys(tree).sort();
  for (const uni of uniKeys) {
    // 收集该大学所有 issues
    const allUniIssues = [];
    for (const sub of Object.values(tree[uni])) {
      for (const fileIssues of Object.values(sub)) {
        allUniIssues.push(...fileIssues);
      }
    }
    const uniErrorCount = allUniIssues.filter(i => i.severity === 'ERROR').length;
    const uniWarningCount = allUniIssues.filter(i => i.severity === 'WARNING').length;

    report += `### ${uni} (${uniErrorCount} errors, ${uniWarningCount} warnings)\n\n`;

    const subPaths = Object.keys(tree[uni]).sort();
    for (const subPath of subPaths) {
      const subFiles = tree[uni][subPath];
      const allSubIssues = [];
      for (const fileIssues of Object.values(subFiles)) {
        allSubIssues.push(...fileIssues);
      }
      const subIssueCount = allSubIssues.length;

      report += `<details>\n<summary><b>${subPath}</b> (${subIssueCount} issues)</summary>\n\n`;

      const fileNames = Object.keys(subFiles).sort();
      for (const fileName of fileNames) {
        const fileIssues = subFiles[fileName];
        report += `**${fileName}**\n\n`;
        report += `| 行号 | 级别 | 规则 | 说明 |\n`;
        report += `|------|------|------|------|\n`;
        for (const issue of fileIssues) {
          const icon = issue.severity === 'ERROR' ? '🔴' : '🟡';
          report += `| ${issue.line} | ${icon} ${issue.severity} | \`${issue.rule}\` | ${issue.message} |\n`;
        }
        report += `\n`;
      }

      report += `</details>\n\n`;
    }
  }

  return report;
}

// ─── 主流程 ─────────────────────────────────────────────────

function main() {
  const jsonMode = process.argv.includes('--json');
  const scopedFiles = readScopedFiles();
  const mdFiles = scopedFiles || getAllMdFiles(DOCS_DIR);
  const scopedMode = scopedFiles !== null;

  console.error(
    `[review-format] 扫描到 ${mdFiles.length} 个文档文件${scopedMode ? '（按指定范围）' : ''}`,
  );

  const allIssues = [];
  for (const file of mdFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const issues = checkFile(file, content);
    allIssues.push(...issues);
  }

  console.error(`[review-format] 检查完成: ${allIssues.length} 个问题`);

  if (jsonMode) {
    process.stdout.write(JSON.stringify({ totalFiles: mdFiles.length, issues: allIssues }, null, 2));
  } else {
    process.stdout.write(generateMarkdownReport(allIssues, mdFiles.length));
  }

  // 如果有 ERROR 级别问题，退出码为 1
  if (allIssues.some(i => i.severity === 'ERROR')) {
    process.exit(1);
  }
}

main();
