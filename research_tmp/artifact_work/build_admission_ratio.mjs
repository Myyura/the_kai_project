import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const ROOT = "/Users/zhangzhe/Documents/WorkWork/the_kai_project";
const DATA_DIR = path.join(ROOT, "research_tmp");
const OUTPUT_DIR = path.join(ROOT, "outputs", "admission_ratio_20260828");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "日本大学院报录比_2022-2026.xlsx");
const PREVIEW_DIR = path.join(DATA_DIR, "artifact_work", "previews");
const CHECK_DATE = "2026-08-28";

const COLORS = {
  navy: "#17324D",
  blue: "#2F6690",
  paleBlue: "#EAF2F8",
  teal: "#2A9D8F",
  paleTeal: "#E8F5F2",
  amber: "#E9A23B",
  paleAmber: "#FFF3D9",
  coral: "#D66A5E",
  paleCoral: "#FBE9E7",
  gray: "#6B7785",
  paleGray: "#EEF1F4",
  border: "#D7E0E8",
  ink: "#243443",
  white: "#FFFFFF",
};

function asText(value) {
  return value === null || value === undefined ? "" : String(value);
}

function normalizeUnicode(value) {
  return asText(value).normalize("NFKC").trim();
}

function universityKey(value) {
  const s = normalizeUnicode(value).replace(/[\s・･·,，.。()（）旧\-—_]/g, "");
  if (/東京科[学學]大学|東京工業大学/.test(s)) return "tokyo-science";
  return s;
}

function entityKey(value) {
  return normalizeUnicode(value)
    .replace(/[（(][^）)]*[）)]/g, "")
    .replace(/[\s・･·,，.。/／\-—_]/g, "")
    .replace(/大学院/g, "")
    .replace(/研究科|学院|学府/g, "");
}

function programKey(value) {
  return normalizeUnicode(value)
    .replace(/[（(][^）)]*[）)]/g, "")
    .replace(/[\s・･·,，.。/／\-—_]/g, "")
    .replace(/博士前期課程|修士課程/g, "")
    .replace(/専攻|コース|プログラム|学科|領域|分野|教室|講座|系/g, "");
}

function fuzzyScore(left, right, keyFn = entityKey) {
  const a = keyFn(left);
  const b = keyFn(right);
  if (!a || !b) return a === b ? 3 : 0;
  if (a === b) return 3;
  if (Math.min(a.length, b.length) >= 2 && (a.includes(b) || b.includes(a))) return 2;
  return 0;
}

function statusPriority(status) {
  return status === "exact" ? 3 : status === "aggregate_only" ? 2 : 1;
}

function statusLabel(status) {
  if (status === "exact") return "精确到专攻/项目";
  if (status === "aggregate_only") return "仅上位层级合计";
  return "未找到公开统计";
}

function sourceTypeLabel(value) {
  const s = normalizeUnicode(value).toLowerCase();
  return s === "official" || s === "官方" ? "官方" : "民间";
}

function credibilityLabel(value) {
  const s = normalizeUnicode(value).toLowerCase();
  if (s === "high" || s === "高") return "高";
  if (s === "medium" || s === "中") return "中";
  if (s === "low" || s === "低") return "低";
  return asText(value);
}

function scopeLabel(value) {
  const map = {
    program: "专攻/系",
    course: "课程/分野",
    program_group: "项目群合计",
    department_total: "院系合计",
    graduate_school_total: "研究科合计",
    university_total: "全校合计",
  };
  return map[value] || asText(value) || "未说明";
}

function unique(values) {
  return [...new Set(values.filter((v) => v !== "" && v !== null && v !== undefined))];
}

function yearsFromText(value) {
  return unique((asText(value).match(/20\d{2}/g) || []).map(Number)).sort((a, b) => a - b);
}

function yearLabel(years) {
  if (!years.length) return "";
  if (years.length === 1) return String(years[0]);
  const contiguous = years.every((year, idx) => idx === 0 || year === years[idx - 1] + 1);
  return contiguous ? `${years[0]}–${years.at(-1)}` : years.join("、");
}

function safeNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function tableStyle(table) {
  table.style = "TableStyleMedium2";
  table.showHeaders = true;
  table.showFilterButton = true;
}

function setBaseRangeStyle(sheet, rangeAddress) {
  const range = sheet.getRange(rangeAddress);
  range.format.font = { name: "Aptos", size: 10, color: COLORS.ink };
  range.format.verticalAlignment = "center";
}

function setTitle(sheet, titleRange, title, subtitleRange, subtitle) {
  sheet.getRange(titleRange).merge();
  const titleCell = sheet.getRange(titleRange.split(":")[0]);
  titleCell.values = [[title]];
  sheet.getRange(titleRange).format.fill = COLORS.navy;
  sheet.getRange(titleRange).format.font = { name: "Aptos Display", size: 20, bold: true, color: COLORS.white };
  sheet.getRange(titleRange).format.verticalAlignment = "center";
  sheet.getRange(titleRange).format.rowHeight = 34;

  sheet.getRange(subtitleRange).merge();
  const subtitleCell = sheet.getRange(subtitleRange.split(":")[0]);
  subtitleCell.values = [[subtitle]];
  sheet.getRange(subtitleRange).format.fill = COLORS.paleBlue;
  sheet.getRange(subtitleRange).format.font = { name: "Aptos", size: 10, italic: true, color: COLORS.blue };
  sheet.getRange(subtitleRange).format.verticalAlignment = "center";
  sheet.getRange(subtitleRange).format.rowHeight = 25;
}

function styleHeader(sheet, address) {
  const header = sheet.getRange(address);
  header.format.fill = COLORS.blue;
  header.format.font = { name: "Aptos", size: 10, bold: true, color: COLORS.white };
  header.format.horizontalAlignment = "center";
  header.format.verticalAlignment = "center";
  header.format.wrapText = true;
  header.format.rowHeight = 32;
  header.format.borders = { preset: "all", style: "thin", color: COLORS.border };
}

function setWidth(sheet, column, endRow, width) {
  sheet.getRange(`${column}1:${column}${endRow}`).format.columnWidth = width;
}

const universityModule = await import(`${pathToFileURL(path.join(ROOT, "src", "data", "universities.js")).href}?v=${Date.now()}`);
const universities = universityModule.universities;

const jsonFiles = (await fs.readdir(DATA_DIR)).filter((name) => /^part_.*\.json$/.test(name)).sort();
const parts = [];
for (const name of jsonFiles) {
  const parsed = JSON.parse(await fs.readFile(path.join(DATA_DIR, name), "utf8"));
  parts.push(parsed);
}
const supplements = JSON.parse(await fs.readFile(path.join(DATA_DIR, "unofficial_supplements.json"), "utf8"));

let metrics = parts.flatMap((part) => part.metrics || []);
const coverageNotes = parts.flatMap((part) => part.coverage_notes || []);
const declaredSources = parts.flatMap((part) => part.sources || []);

const requiredMetricFields = ["university", "graduate_school", "admission_year", "exam_period", "degree", "selection_category", "data_scope", "source_url", "source_title"];
const badMetrics = metrics.filter((row) => requiredMetricFields.some((field) => row[field] === undefined));
if (badMetrics.length) throw new Error(`缺少必需字段的metrics行数: ${badMetrics.length}`);

const universityDisplay = new Map();
const universityOrder = new Map();
universities.forEach((university, index) => {
  const key = universityKey(university.name);
  const display = key === "tokyo-science" ? "東京科学大学（旧・東京工業大学）" : university.name;
  universityDisplay.set(key, display);
  universityOrder.set(key, index);
});

metrics = metrics.map((row) => ({
  ...row,
  university: universityDisplay.get(universityKey(row.university)) || row.university,
  source_type: sourceTypeLabel(row.source_type),
  credibility: credibilityLabel(row.credibility),
}));

const metricDedupe = new Map();
for (const row of metrics) {
  const key = JSON.stringify([
    universityKey(row.university), entityKey(row.graduate_school), programKey(row.program), row.admission_year,
    row.exam_period, row.selection_category, row.data_scope, row.capacity, row.applicants, row.examinees,
    row.admitted, row.enrolled, row.source_url,
  ]);
  if (!metricDedupe.has(key)) metricDedupe.set(key, row);
}
metrics = [...metricDedupe.values()];

metrics.sort((a, b) => {
  const ua = universityOrder.get(universityKey(a.university)) ?? 999;
  const ub = universityOrder.get(universityKey(b.university)) ?? 999;
  return ua - ub
    || normalizeUnicode(a.graduate_school).localeCompare(normalizeUnicode(b.graduate_school), "ja")
    || normalizeUnicode(a.program).localeCompare(normalizeUnicode(b.program), "ja")
    || Number(a.admission_year) - Number(b.admission_year)
    || normalizeUnicode(a.exam_period).localeCompare(normalizeUnicode(b.exam_period), "ja");
});

const inventory = [];
for (const university of universities) {
  const displayUniversity = universityDisplay.get(universityKey(university.name)) || university.name;
  for (const department of university.departments || []) {
    const programs = department.programs || [];
    if (!programs.length) {
      inventory.push({
        universityId: university.id,
        university: displayUniversity,
        departmentId: department.id,
        graduateSchool: department.name,
        programId: "",
        program: "",
        websiteUrl: department.websiteUrl || "",
      });
    } else {
      for (const program of programs) {
        inventory.push({
          universityId: university.id,
          university: displayUniversity,
          departmentId: department.id,
          graduateSchool: department.name,
          programId: program.id,
          program: program.name,
          websiteUrl: department.websiteUrl || "",
        });
      }
    }
  }
}

function sameUniversity(left, right) {
  return universityKey(left) === universityKey(right);
}

function sameGraduateSchool(left, right) {
  return fuzzyScore(left, right, entityKey) >= 2;
}

function sameProgram(left, right) {
  return fuzzyScore(left, right, programKey) >= 2;
}

function metricMatchesInventory(row, item, exactOnly) {
  if (!sameUniversity(row.university, item.university) || !sameGraduateSchool(row.graduate_school, item.graduateSchool)) return false;
  if (!item.program) return true;
  if (exactOnly) return Boolean(row.program) && sameProgram(row.program, item.program) && !String(row.data_scope).includes("total");
  return String(row.data_scope).includes("total") || !row.program;
}

for (const item of inventory) {
  const noteCandidates = coverageNotes
    .filter((note) => sameUniversity(note.university, item.university) && sameGraduateSchool(note.graduate_school, item.graduateSchool))
    .map((note) => {
      let score = 0;
      if (!item.program && !note.program) score = 3;
      else if (item.program && note.program) score = fuzzyScore(note.program, item.program, programKey);
      return { note, score };
    })
    .filter(({ score }) => score >= 2)
    .sort((a, b) => b.score - a.score || statusPriority(b.note.status) - statusPriority(a.note.status));

  let selectedNote = noteCandidates[0]?.note || null;
  let status = selectedNote?.status || "";
  const exactRows = metrics.filter((row) => metricMatchesInventory(row, item, true));
  const aggregateRows = metrics.filter((row) => metricMatchesInventory(row, item, false));
  const gradRows = metrics.filter((row) => sameUniversity(row.university, item.university) && sameGraduateSchool(row.graduate_school, item.graduateSchool));

  if (!status) {
    if (!item.program && gradRows.length) status = "exact";
    else if (exactRows.length) status = "exact";
    else if (aggregateRows.length) status = "aggregate_only";
    else status = "not_found";
  }

  const relevantRows = status === "exact"
    ? (item.program ? exactRows : gradRows)
    : status === "aggregate_only" ? aggregateRows : [];

  const years = unique([
    ...yearsFromText(selectedNote?.years || selectedNote?.available_years),
    ...relevantRows.map((row) => Number(row.admission_year)).filter(Number.isFinite),
  ]).sort((a, b) => a - b);

  item.status = status;
  item.statusText = statusLabel(status);
  item.availableYears = yearLabel(years);
  item.note = selectedNote?.note || (status === "not_found" ? "本次核查未发现可验证的公开数值表；保留空白。" : "");
  item.bestSource = selectedNote?.best_source_url || selectedNote?.source_url || relevantRows[0]?.source_url || "";
  item.metricCount = relevantRows.length;
}

const sourceByUrl = new Map();
function addSource(raw, associatedUniversity = "", note = "") {
  const url = raw.source_url || raw.url || "";
  if (!url) return;
  const existing = sourceByUrl.get(url) || {
    sourceType: sourceTypeLabel(raw.source_type || raw.type || "official"),
    credibility: credibilityLabel(raw.credibility || "high"),
    title: raw.source_title || raw.title || "",
    url,
    universities: new Set(),
    note: raw.note || note || "",
    lastChecked: raw.last_checked || CHECK_DATE,
  };
  if (associatedUniversity) existing.universities.add(universityDisplay.get(universityKey(associatedUniversity)) || associatedUniversity);
  if (!existing.title) existing.title = raw.source_title || raw.title || "";
  if (!existing.note) existing.note = raw.note || note || "";
  sourceByUrl.set(url, existing);
}

for (const source of declaredSources) addSource(source);
for (const row of metrics) addSource(row, row.university, row.scope_note || row.remarks || "");
for (const note of coverageNotes) addSource({ source_url: note.best_source_url || note.source_url, source_title: "覆盖核查入口", source_type: "official", credibility: "high" }, note.university, note.note || "");
for (const row of supplements) addSource(row, row.university, row.caveat || "");

const sources = [...sourceByUrl.values()].sort((a, b) => {
  const typeOrder = a.sourceType === "官方" ? 0 : 1;
  const otherTypeOrder = b.sourceType === "官方" ? 0 : 1;
  return typeOrder - otherTypeOrder || a.title.localeCompare(b.title, "ja");
});

const workbook = Workbook.create();
const infoSheet = workbook.worksheets.add("说明");
const inventorySheet = workbook.worksheets.add("项目专攻清单");
const dataSheet = workbook.worksheets.add("历年报录数据");
const coverageSheet = workbook.worksheets.add("覆盖汇总");
const sourceSheet = workbook.worksheets.add("数据源");
const supplementSheet = workbook.worksheets.add("民间补充");
for (const sheet of [infoSheet, inventorySheet, dataSheet, coverageSheet, sourceSheet, supplementSheet]) {
  sheet.showGridLines = false;
}

// 说明
setBaseRangeStyle(infoSheet, "A1:L38");
setTitle(infoSheet, "A1:L2", "日本大学院报录比与招生数据", "A3:L3", `项目范围：27所大学、64个研究科层级、140个专攻/课程；数据核查日：${CHECK_DATE}`);

const inventoryStart = 5;
const inventoryEnd = inventoryStart + inventory.length - 1;
const dataStart = 5;
const dataEnd = dataStart + metrics.length - 1;
const sourceStart = 5;
const sourceEnd = sourceStart + sources.length - 1;

const cards = [
  { cols: "A:B", label: "项目清单行数", formula: `=COUNTA('项目专攻清单'!$A$${inventoryStart}:$A$${inventoryEnd})`, fill: COLORS.paleBlue },
  { cols: "C:D", label: "精确到专攻/项目", formula: `=COUNTIF('项目专攻清单'!$H$${inventoryStart}:$H$${inventoryEnd},"精确到专攻/项目")`, fill: COLORS.paleTeal },
  { cols: "E:F", label: "仅上位层级合计", formula: `=COUNTIF('项目专攻清单'!$H$${inventoryStart}:$H$${inventoryEnd},"仅上位层级合计")`, fill: COLORS.paleAmber },
  { cols: "G:H", label: "未找到公开统计", formula: `=COUNTIF('项目专攻清单'!$H$${inventoryStart}:$H$${inventoryEnd},"未找到公开统计")`, fill: COLORS.paleGray },
  { cols: "I:J", label: "官方数值行", formula: `=COUNTA('历年报录数据'!$A$${dataStart}:$A$${dataEnd})`, fill: COLORS.paleBlue },
  { cols: "K:L", label: "证据来源数", formula: `=COUNTA('数据源'!$A$${sourceStart}:$A$${sourceEnd})`, fill: COLORS.paleBlue },
];
for (const card of cards) {
  const [startCol, endCol] = card.cols.split(":");
  infoSheet.getRange(`${startCol}5:${endCol}5`).merge();
  infoSheet.getRange(`${startCol}5`).values = [[card.label]];
  infoSheet.getRange(`${startCol}5:${endCol}5`).format.fill = COLORS.navy;
  infoSheet.getRange(`${startCol}5:${endCol}5`).format.font = { name: "Aptos", size: 9, bold: true, color: COLORS.white };
  infoSheet.getRange(`${startCol}5:${endCol}5`).format.horizontalAlignment = "center";
  infoSheet.getRange(`${startCol}6:${endCol}7`).merge();
  infoSheet.getRange(`${startCol}6`).formulas = [[card.formula]];
  infoSheet.getRange(`${startCol}6:${endCol}7`).format.fill = card.fill;
  infoSheet.getRange(`${startCol}6:${endCol}7`).format.font = { name: "Aptos Display", size: 18, bold: true, color: COLORS.ink };
  infoSheet.getRange(`${startCol}6:${endCol}7`).format.horizontalAlignment = "center";
  infoSheet.getRange(`${startCol}5:${endCol}7`).format.borders = { preset: "all", style: "thin", color: COLORS.border };
}

infoSheet.getRange("A9:F9").merge();
infoSheet.getRange("A9").values = [["口径与使用建议"]];
infoSheet.getRange("A9:F9").format.fill = COLORS.blue;
infoSheet.getRange("A9:F9").format.font = { name: "Aptos", size: 11, bold: true, color: COLORS.white };
const methodLines = [
  ["1. 优先使用官网公开的志愿者、受验者、合格者、入学者数据；空白表示官网未公开，不代表人数为0。"],
  ["2. “精确到专攻/项目”可以用于该项目历年纵向比较；“仅上位层级合计”只能作为研究科或学院层级参考。"],
  ["3. 主要倍率优先取“志愿者÷合格者”；若志愿者缺失，才取“受验者÷合格者”。"],
  ["4. 夏季、冬季、秋季、春季或第1/第2次募集尽量分行保留；另列全年合计时会在证据定位或备注中说明。"],
  ["5. note、Academaid等资料只放在“民间补充”，统一标为中可信度，不参与官方主表公式。"],
  ["6. 报录比不能完全代表录取难度：内部生比例、研究室名额、考试科目和合格线仍会显著影响结果。"],
];
for (let index = 0; index < methodLines.length; index += 1) {
  const row = 10 + index;
  infoSheet.getRange(`A${row}:F${row}`).merge();
  infoSheet.getRange(`A${row}`).values = methodLines[index];
  infoSheet.getRange(`A${row}:F${row}`).format.wrapText = true;
  infoSheet.getRange(`A${row}:F${row}`).format.fill = COLORS.white;
  infoSheet.getRange(`A${row}:F${row}`).format.borders = { preset: "all", style: "thin", color: COLORS.border };
  infoSheet.getRange(`A${row}:F${row}`).format.rowHeight = 34;
}

infoSheet.getRange("H9:I12").values = [
  ["覆盖类型", "数量"],
  ["精确到专攻/项目", null],
  ["仅上位层级合计", null],
  ["未找到公开统计", null],
];
infoSheet.getRange("I10").formulas = [["=C6"]];
infoSheet.getRange("I11").formulas = [["=E6"]];
infoSheet.getRange("I12").formulas = [["=G6"]];
styleHeader(infoSheet, "H9:I9");
infoSheet.getRange("H10:I12").format.borders = { preset: "all", style: "thin", color: COLORS.border };
const coverageChart = infoSheet.charts.add("doughnut", infoSheet.getRange("H9:I12"));
coverageChart.setPosition("H14", "L26");
coverageChart.title = "项目官方数据覆盖结构";
coverageChart.hasLegend = true;

infoSheet.getRange("A18:F18").merge();
infoSheet.getRange("A18").values = [["倍率与比例字段"]];
infoSheet.getRange("A18:F18").format.fill = COLORS.blue;
infoSheet.getRange("A18:F18").format.font = { name: "Aptos", size: 11, bold: true, color: COLORS.white };
infoSheet.getRange("A19:F24").values = [
  ["字段", "公式", "适用场景", "关键限制", "显示格式", "是否进入主要倍率"],
  ["志愿/合格倍率", "志愿者÷合格者", "看出愿竞争", "可能包含未实际受验者", "0.00×", "是，优先"],
  ["受验/合格倍率", "受验者÷合格者", "看实际应试竞争", "部分学校不公开受验人数", "0.00×", "是，候补"],
  ["合格率", "合格者÷受验者", "看实际通过率", "受验者缺失时为空", "0.0%", "否"],
  ["入学转化率", "入学者÷合格者", "观察合格后入学意向", "受并愿、辞退影响", "0.0%", "否"],
  ["主要倍率", "优先志愿/合格，否则受验/合格", "跨行快速排序", "必须结合统计粒度读取", "0.00×", "—"],
];
styleHeader(infoSheet, "A19:F19");
infoSheet.getRange("A20:F24").format.borders = { preset: "all", style: "thin", color: COLORS.border };
infoSheet.getRange("A20:F24").format.wrapText = true;
infoSheet.getRange("A20:F24").format.rowHeight = 30;

infoSheet.getRange("A27:F27").merge();
infoSheet.getRange("A27").values = [["可信度标记"]];
infoSheet.getRange("A27:F27").format.fill = COLORS.blue;
infoSheet.getRange("A27:F27").format.font = { name: "Aptos", size: 11, bold: true, color: COLORS.white };
infoSheet.getRange("A28:F31").values = [
  ["等级", "来源", "在工作簿中的位置", "可以怎么用", "不应怎么用", "颜色"],
  ["高", "学校/研究科官方网站或官方PDF", "历年报录数据、数据源", "计算主倍率、纵向比较", "忽略粒度差异直接横比", "蓝/绿"],
  ["中", "note、Academaid等民间整理或个人观察", "民间补充", "补足官网未细分的线索", "与官方数字等权合并", "橙"],
  ["空白", "本次未找到可验证数字", "项目专攻清单", "作为后续人工问询清单", "把空白理解为0", "灰"],
];
styleHeader(infoSheet, "A28:F28");
infoSheet.getRange("A29:F31").format.borders = { preset: "all", style: "thin", color: COLORS.border };
infoSheet.getRange("A29:F31").format.wrapText = true;
infoSheet.getRange("A29:F31").format.rowHeight = 30;

infoSheet.getRange("A34:L35").merge();
infoSheet.getRange("A34").values = [["建议筛选顺序：项目专攻清单 → 选择“精确到专攻/项目” → 历年报录数据按学校、专攻、年度筛选 → 最后查看来源URL与证据定位。"]];
infoSheet.getRange("A34:L35").format.fill = COLORS.paleTeal;
infoSheet.getRange("A34:L35").format.font = { name: "Aptos", size: 11, bold: true, color: COLORS.ink };
infoSheet.getRange("A34:L35").format.wrapText = true;
infoSheet.getRange("A34:L35").format.borders = { preset: "outside", style: "medium", color: COLORS.teal };
for (const col of "ABCDEFGHIJKL") setWidth(infoSheet, col, 38, col === "A" ? 18 : 14);
infoSheet.freezePanes.freezeRows(3);

// 项目专攻清单
const inventoryHeaders = ["编号", "大学", "研究科/学院", "专攻/课程", "项目层级", "项目ID", "官网入口", "官方数据状态", "可用年度", "粒度/缺口说明", "最佳证据URL", "官方数值行数", "核查日期"];
const inventoryRows = inventory.map((item, index) => [
  index + 1,
  item.university,
  item.graduateSchool,
  item.program || "（研究科层级）",
  item.program ? "专攻/课程" : "研究科层级",
  [item.universityId, item.departmentId, item.programId].filter(Boolean).join("/"),
  item.websiteUrl,
  item.statusText,
  item.availableYears,
  item.note,
  item.bestSource,
  item.metricCount,
  CHECK_DATE,
]);
setBaseRangeStyle(inventorySheet, `A1:M${inventoryEnd}`);
setTitle(inventorySheet, "A1:M1", "项目中的学校・研究科・专攻清单", "A2:M2", "每一行均来自当前项目目录；状态明确区分专攻精确、仅上位层级合计和未找到公开统计。空白不是0。 ");
inventorySheet.getRange("A4:M4").values = [inventoryHeaders];
inventorySheet.getRange(`A5:M${inventoryEnd}`).values = inventoryRows;
styleHeader(inventorySheet, "A4:M4");
const inventoryTable = inventorySheet.tables.add(`A4:M${inventoryEnd}`, true, "ProjectScopeTable");
tableStyle(inventoryTable);
inventorySheet.freezePanes.freezeRows(4);
inventorySheet.freezePanes.freezeColumns(4);
inventorySheet.getRange(`G5:G${inventoryEnd}`).format.wrapText = true;
inventorySheet.getRange(`J5:K${inventoryEnd}`).format.wrapText = true;
inventorySheet.getRange(`A5:M${inventoryEnd}`).format.rowHeight = 34;
inventorySheet.getRange(`M5:M${inventoryEnd}`).format.fill = COLORS.paleGray;
inventorySheet.getRange(`M5:M${inventoryEnd}`).format.font = { name: "Aptos", size: 10, color: COLORS.ink };
inventorySheet.getRange(`L5:L${inventoryEnd}`).setNumberFormat("0");
inventorySheet.getRange(`H5:H${inventoryEnd}`).conditionalFormats.add("containsText", { text: "精确", format: { fill: COLORS.paleTeal, font: { color: COLORS.teal, bold: true } } });
inventorySheet.getRange(`H5:H${inventoryEnd}`).conditionalFormats.add("containsText", { text: "仅上位", format: { fill: COLORS.paleAmber, font: { color: "#8A5A00", bold: true } } });
inventorySheet.getRange(`H5:H${inventoryEnd}`).conditionalFormats.add("containsText", { text: "未找到", format: { fill: COLORS.paleGray, font: { color: COLORS.gray } } });
const inventoryWidths = { A: 7, B: 20, C: 24, D: 31, E: 14, F: 28, G: 36, H: 20, I: 14, J: 48, K: 42, L: 13, M: 13 };
for (const [col, width] of Object.entries(inventoryWidths)) setWidth(inventorySheet, col, inventoryEnd, width);

// 历年报录数据
const dataHeaders = ["大学", "研究科/学院", "专攻/统计对象", "入学年度", "考试期", "课程", "选拔类别", "统计粒度", "募集人数", "志愿者", "受验者", "合格者", "入学者", "志愿/合格倍率", "受验/合格倍率", "合格率", "入学转化率", "主要倍率", "主要口径", "来源类型", "可信度", "来源标题", "证据定位", "来源URL", "范围说明", "备注"];
const dataValueRows = metrics.map((row) => [
  row.university,
  row.graduate_school,
  row.program || "（研究科合计）",
  Number(row.admission_year),
  row.exam_period,
  row.degree,
  row.selection_category,
  scopeLabel(row.data_scope),
  safeNumber(row.capacity),
  safeNumber(row.applicants),
  safeNumber(row.examinees),
  safeNumber(row.admitted),
  safeNumber(row.enrolled),
  null, null, null, null, null, null,
  row.source_type,
  row.credibility,
  row.source_title,
  row.evidence_locator,
  row.source_url,
  row.scope_note,
  row.remarks,
]);
setBaseRangeStyle(dataSheet, `A1:Z${dataEnd}`);
setTitle(dataSheet, "A1:Z1", "历年报录数据（官方主表）", "A2:Z2", "数值全部保留原官方统计粒度；倍率与比例为公式计算。研究科合计行不可直接当作某个专攻的难度。 ");
dataSheet.getRange("A4:Z4").values = [dataHeaders];
dataSheet.getRange(`A5:Z${dataEnd}`).values = dataValueRows;
dataSheet.getRange("N5:S5").formulasR1C1 = [[
  '=IF(AND(RC[-4]<>"",RC[-2]<>0),RC[-4]/RC[-2],"")',
  '=IF(AND(RC[-4]<>"",RC[-3]<>0),RC[-4]/RC[-3],"")',
  '=IF(AND(RC[-5]<>"",RC[-5]<>0,RC[-4]<>""),RC[-4]/RC[-5],"")',
  '=IF(AND(RC[-5]<>"",RC[-5]<>0,RC[-4]<>""),RC[-4]/RC[-5],"")',
  '=IF(RC[-4]<>"",RC[-4],IF(RC[-3]<>"",RC[-3],""))',
  '=IF(RC[-5]<>"","志愿/合格",IF(RC[-4]<>"","受验/合格",""))',
]];
if (dataEnd > 5) dataSheet.getRange(`N5:S${dataEnd}`).fillDown();
styleHeader(dataSheet, "A4:Z4");
const dataTable = dataSheet.tables.add(`A4:Z${dataEnd}`, true, "AdmissionsDataTable");
tableStyle(dataTable);
dataSheet.freezePanes.freezeRows(4);
dataSheet.freezePanes.freezeColumns(3);
dataSheet.getRange(`D5:D${dataEnd}`).setNumberFormat("0");
dataSheet.getRange(`I5:M${dataEnd}`).setNumberFormat("0");
dataSheet.getRange(`N5:O${dataEnd}`).setNumberFormat('0.00"×"');
dataSheet.getRange(`P5:Q${dataEnd}`).setNumberFormat("0.0%");
dataSheet.getRange(`R5:R${dataEnd}`).setNumberFormat('0.00"×"');
dataSheet.getRange(`E5:H${dataEnd}`).format.wrapText = true;
dataSheet.getRange(`V5:Z${dataEnd}`).format.wrapText = true;
dataSheet.getRange(`A5:Z${dataEnd}`).format.rowHeight = 38;
dataSheet.getRange(`Z5:Z${dataEnd}`).format.fill = COLORS.paleGray;
dataSheet.getRange(`Z5:Z${dataEnd}`).format.font = { name: "Aptos", size: 10, color: COLORS.ink };
dataSheet.getRange(`R5:R${dataEnd}`).conditionalFormats.add("colorScale", {
  thresholds: ["min", "50%", "max"],
  colors: [COLORS.paleTeal, COLORS.paleAmber, COLORS.paleCoral],
});
dataSheet.getRange(`T5:U${dataEnd}`).conditionalFormats.add("containsText", { text: "民间", format: { fill: COLORS.paleAmber, font: { color: "#8A5A00", bold: true } } });
const dataWidths = { A: 21, B: 25, C: 34, D: 11, E: 25, F: 17, G: 28, H: 16, I: 12, J: 12, K: 12, L: 12, M: 12, N: 15, O: 15, P: 12, Q: 15, R: 13, S: 15, T: 11, U: 10, V: 42, W: 40, X: 45, Y: 48, Z: 42 };
for (const [col, width] of Object.entries(dataWidths)) setWidth(dataSheet, col, dataEnd, width);

// 覆盖汇总
const coverageHeaders = ["大学", "项目清单行", "精确到专攻/项目", "仅上位层级合计", "未找到公开统计", "精确覆盖率", "有数据覆盖率", "官方数值行"];
const coverageStart = 5;
const coverageEnd = coverageStart + universities.length - 1;
const coverageUniversities = universities.map((university) => [universityDisplay.get(universityKey(university.name)) || university.name, null, null, null, null, null, null, null]);
setBaseRangeStyle(coverageSheet, `A1:H${coverageEnd}`);
setTitle(coverageSheet, "A1:H1", "按大学汇总的官方数据覆盖", "A2:H2", "覆盖率基于当前项目清单行；“有数据”包括仅能取得研究科/学院合计的项目。 ");
coverageSheet.getRange("A4:H4").values = [coverageHeaders];
coverageSheet.getRange(`A5:H${coverageEnd}`).values = coverageUniversities;
coverageSheet.getRange("B5:H5").formulasR1C1 = [[
  `=COUNTIF('项目专攻清单'!R${inventoryStart}C2:R${inventoryEnd}C2,RC[-1])`,
  `=COUNTIFS('项目专攻清单'!R${inventoryStart}C2:R${inventoryEnd}C2,RC[-2],'项目专攻清单'!R${inventoryStart}C8:R${inventoryEnd}C8,"精确到专攻/项目")`,
  `=COUNTIFS('项目专攻清单'!R${inventoryStart}C2:R${inventoryEnd}C2,RC[-3],'项目专攻清单'!R${inventoryStart}C8:R${inventoryEnd}C8,"仅上位层级合计")`,
  `=COUNTIFS('项目专攻清单'!R${inventoryStart}C2:R${inventoryEnd}C2,RC[-4],'项目专攻清单'!R${inventoryStart}C8:R${inventoryEnd}C8,"未找到公开统计")`,
  '=IF(RC[-4]=0,"",RC[-3]/RC[-4])',
  '=IF(RC[-5]=0,"",(RC[-4]+RC[-3])/RC[-5])',
  `=COUNTIF('历年报录数据'!R${dataStart}C1:R${dataEnd}C1,RC[-7])`,
]];
if (coverageEnd > 5) coverageSheet.getRange(`B5:H${coverageEnd}`).fillDown();
styleHeader(coverageSheet, "A4:H4");
const coverageTable = coverageSheet.tables.add(`A4:H${coverageEnd}`, true, "CoverageSummaryTable");
tableStyle(coverageTable);
coverageSheet.freezePanes.freezeRows(4);
coverageSheet.freezePanes.freezeColumns(1);
coverageSheet.getRange(`B5:E${coverageEnd}`).setNumberFormat("0");
coverageSheet.getRange(`F5:G${coverageEnd}`).setNumberFormat("0.0%");
coverageSheet.getRange(`H5:H${coverageEnd}`).setNumberFormat("0");
coverageSheet.getRange(`F5:G${coverageEnd}`).conditionalFormats.add("dataBar", { color: COLORS.teal, gradient: true });
coverageSheet.getRange(`A5:H${coverageEnd}`).format.rowHeight = 27;
coverageSheet.getRange(`H5:H${coverageEnd}`).format.fill = COLORS.paleBlue;
coverageSheet.getRange(`H5:H${coverageEnd}`).format.font = { name: "Aptos", size: 10, color: COLORS.ink };
const coverageWidths = { A: 26, B: 14, C: 20, D: 19, E: 19, F: 15, G: 15, H: 15 };
for (const [col, width] of Object.entries(coverageWidths)) setWidth(coverageSheet, col, coverageEnd, width);

// 数据源
const sourceHeaders = ["编号", "类型", "可信度", "来源标题", "URL", "关联大学", "说明", "最近核查"];
const sourceRows = sources.map((source, index) => [
  index + 1,
  source.sourceType,
  source.credibility,
  source.title,
  source.url,
  [...source.universities].sort((a, b) => a.localeCompare(b, "ja")).join("、"),
  source.note,
  source.lastChecked,
]);
setBaseRangeStyle(sourceSheet, `A1:H${sourceEnd}`);
setTitle(sourceSheet, "A1:H1", "证据来源清单", "A2:H2", "官方PDF/网页与民间补充统一列出；主数据表每行仍保留原始URL和证据定位。 ");
sourceSheet.getRange("A4:H4").values = [sourceHeaders];
sourceSheet.getRange(`A5:H${sourceEnd}`).values = sourceRows;
styleHeader(sourceSheet, "A4:H4");
const sourceTable = sourceSheet.tables.add(`A4:H${sourceEnd}`, true, "EvidenceSourceTable");
tableStyle(sourceTable);
sourceSheet.freezePanes.freezeRows(4);
sourceSheet.freezePanes.freezeColumns(3);
sourceSheet.getRange(`D5:G${sourceEnd}`).format.wrapText = true;
sourceSheet.getRange(`A5:H${sourceEnd}`).format.rowHeight = 42;
sourceSheet.getRange(`H5:H${sourceEnd}`).format.fill = COLORS.paleGray;
sourceSheet.getRange(`H5:H${sourceEnd}`).format.font = { name: "Aptos", size: 10, color: COLORS.ink };
sourceSheet.getRange(`B5:C${sourceEnd}`).conditionalFormats.add("containsText", { text: "民间", format: { fill: COLORS.paleAmber, font: { color: "#8A5A00", bold: true } } });
const sourceWidths = { A: 7, B: 11, C: 10, D: 52, E: 58, F: 30, G: 52, H: 14 };
for (const [col, width] of Object.entries(sourceWidths)) setWidth(sourceSheet, col, sourceEnd, width);

// 民间补充
const supplementHeaders = ["大学", "研究科/学院", "专攻/课程", "入学年度", "补充项目", "民间报告值", "来源类型", "可信度", "来源标题", "来源URL", "使用限制"];
const supplementStart = 5;
const supplementEnd = supplementStart + supplements.length - 1;
const supplementRows = supplements.map((row) => [
  universityDisplay.get(universityKey(row.university)) || row.university,
  row.graduate_school,
  row.program,
  row.admission_year,
  row.item,
  row.reported_value,
  sourceTypeLabel(row.source_type),
  credibilityLabel(row.credibility),
  row.source_title,
  row.source_url,
  row.caveat,
]);
setBaseRangeStyle(supplementSheet, `A1:K${supplementEnd}`);
setTitle(supplementSheet, "A1:K1", "民间数据补充（中可信度）", "A2:K2", "仅用于补足官网未细分的线索；不与官方主表合并计算。引用前请再次回到原文核对口径。 ");
supplementSheet.getRange("A4:K4").values = [supplementHeaders];
supplementSheet.getRange(`A5:K${supplementEnd}`).values = supplementRows;
styleHeader(supplementSheet, "A4:K4");
const supplementTable = supplementSheet.tables.add(`A4:K${supplementEnd}`, true, "UnofficialSupplementTable");
tableStyle(supplementTable);
supplementSheet.freezePanes.freezeRows(4);
supplementSheet.freezePanes.freezeColumns(3);
supplementSheet.getRange(`A5:K${supplementEnd}`).format.fill = COLORS.paleAmber;
supplementSheet.getRange(`A5:K${supplementEnd}`).format.wrapText = true;
supplementSheet.getRange(`A5:K${supplementEnd}`).format.rowHeight = 52;
const supplementWidths = { A: 21, B: 24, C: 30, D: 11, E: 28, F: 36, G: 11, H: 10, I: 48, J: 48, K: 52 };
for (const [col, width] of Object.entries(supplementWidths)) setWidth(supplementSheet, col, supplementEnd, width);

// 关键范围与公式错误检查（导出前）
const infoCheck = await workbook.inspect({
  kind: "region",
  sheetId: "说明",
  range: "A1:L35",
  include: "values,formulas",
  maxChars: 12000,
  tableMaxRows: 35,
  tableMaxCols: 12,
});
console.log("INFO_CHECK\n" + infoCheck.ndjson);

const dataCheck = await workbook.inspect({
  kind: "table",
  sheetId: "历年报录数据",
  range: `A4:Z${Math.min(dataEnd, 14)}`,
  include: "values,formulas",
  maxChars: 12000,
  tableMaxRows: 12,
  tableMaxCols: 26,
});
console.log("DATA_CHECK\n" + dataCheck.ndjson);

const formulaErrors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log("FORMULA_ERRORS\n" + formulaErrors.ndjson);

await fs.mkdir(PREVIEW_DIR, { recursive: true });
const previewSpecs = [
  ["说明", "A1:L35", 1.1],
  ["项目专攻清单", `A1:M${Math.min(inventoryEnd, 34)}`, 0.8],
  ["历年报录数据", `A1:Z${Math.min(dataEnd, 24)}`, 0.55],
  ["覆盖汇总", `A1:H${coverageEnd}`, 0.9],
  ["数据源", `A1:H${Math.min(sourceEnd, 28)}`, 0.7],
  ["民间补充", `A1:K${supplementEnd}`, 0.75],
];
for (const [sheetName, range, scale] of previewSpecs) {
  const blob = await workbook.render({ sheetName, range, scale, format: "png" });
  const bytes = new Uint8Array(await blob.arrayBuffer());
  await fs.writeFile(path.join(PREVIEW_DIR, `${sheetName}.png`), bytes);
}

await fs.mkdir(OUTPUT_DIR, { recursive: true });
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(OUTPUT_FILE);
await fs.rm(`${OUTPUT_FILE}.inspect.ndjson`, { force: true });

const manifest = {
  outputFile: OUTPUT_FILE,
  projectUniversities: universities.length,
  graduateSchoolLayers: universities.reduce((sum, university) => sum + (university.departments || []).length, 0),
  projectPrograms: universities.reduce((sum, university) => sum + (university.departments || []).reduce((inner, department) => inner + (department.programs || []).length, 0), 0),
  inventoryRows: inventory.length,
  officialMetricRows: metrics.length,
  coverage: {
    exact: inventory.filter((row) => row.status === "exact").length,
    aggregateOnly: inventory.filter((row) => row.status === "aggregate_only").length,
    notFound: inventory.filter((row) => row.status === "not_found").length,
  },
  sources: sources.length,
  unofficialSupplements: supplements.length,
  partFiles: jsonFiles,
};
await fs.writeFile(path.join(DATA_DIR, "artifact_work", "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("MANIFEST\n" + JSON.stringify(manifest, null, 2));
