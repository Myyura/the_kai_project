import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const file = "/Users/zhangzhe/Documents/WorkWork/the_kai_project/outputs/admission_ratio_20260828/日本大学院报录比_2022-2026.xlsx";
const blob = await FileBlob.load(file);
const workbook = await SpreadsheetFile.importXlsx(blob);

const sheets = await workbook.inspect({
  kind: "sheet,table",
  include: "id,name",
  maxChars: 10000,
  tableMaxRows: 4,
  tableMaxCols: 8,
});
console.log("SHEETS_AND_TABLES\n" + sheets.ndjson);

const dashboard = await workbook.inspect({
  kind: "region",
  sheetId: "说明",
  range: "A5:L15",
  include: "values,formulas",
  maxChars: 8000,
  tableMaxRows: 15,
  tableMaxCols: 12,
});
console.log("DASHBOARD\n" + dashboard.ndjson);

const dataFormulaCheck = await workbook.inspect({
  kind: "table",
  sheetId: "历年报录数据",
  range: "I4:S10",
  include: "values,formulas",
  maxChars: 8000,
  tableMaxRows: 8,
  tableMaxCols: 11,
});
console.log("DATA_FORMULAS\n" + dataFormulaCheck.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "post-export formula error scan",
});
console.log("ERROR_SCAN\n" + errors.ndjson);
