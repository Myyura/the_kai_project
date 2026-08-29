# 招生数据维护说明

招生数据直接维护在对应研究科或专攻目录内：

```text
docs/<大学>/<研究科>/_admissions.json
docs/<大学>/<研究科>/<专攻>/_admissions.json
```

`_admissions.json` 必须与该页面的 `_category_.json` 同目录。没有可靠数据时不要创建空文件；研究科合计也不要复制到每个下属专攻。

## 最小示例

```json
{
  "schemaVersion": 1,
  "scope": "program",
  "sources": {
    "official-2026": {
      "title": "2026年度 入试结果",
      "url": "https://example.ac.jp/admission/results.pdf",
      "type": "official",
      "confidence": "high",
      "checkedAt": "2026-08-29",
      "evidenceLocator": "PDF 2页，修士課程表"
    }
  },
  "series": [
    {
      "id": "master-summer-general",
      "label": "修士課程 · 夏季 · 一般选拔",
      "sourceType": "official",
      "confidence": "high",
      "degree": "master",
      "period": "summer",
      "selection": "general",
      "points": [
        {
          "admissionYear": 2026,
          "capacity": 40,
          "applicants": 82,
          "examinees": 76,
          "admitted": 38,
          "enrolled": null,
          "reportedRatio": null,
          "sourceIds": ["official-2026"],
          "notes": ["招生年度口径；2025年夏季实施"]
        }
      ]
    }
  ]
}
```

完整字段约束见 [`docs/_admissions.schema.json`](docs/_admissions.schema.json)。`scope` 可取：

- `graduate_school_total`：整个研究科合计
- `program`：专攻级
- `course`：课程或コース级
- `aggregate`：只能放在上位页面、但不代表整个研究科的合计口径

## 维护规则

- 夏考、冬考或不同选拔口径要拆成不同 `series`，不要把不可比较的数据连成一条线。
- 官方数据使用 `sourceType: "official"`、`confidence: "high"`；note、academ-aid 等民间数据使用 `sourceType: "community"`、`confidence: "medium"`。
- 每个数据点都必须通过 `sourceIds` 指向来源；PDF 页码、表名、统计范围和例外情况写入 `evidenceLocator` 或 `notes`。
- 未公开字段写 `null`，不要写 `0`。只有原始来源明确为 0 人时才写 `0`。
- 合格人数为 0 时保留原值，倍率留空；页面会显示为“不适用”。
- 自动倍率依次采用“志愿者 ÷ 合格者”、“受验者 ÷ 合格者”，最后才采用来源直接报告的 `reportedRatio`。
- 民间口径若同时混有多种倍率且无法唯一解释，只保存原文注记，不填写 `reportedRatio`。

## 生成与校验

修改数据后运行：

```bash
yarn generate:admissions
yarn content:validate
```

页面读取的是自动生成的 `src/data/admissionStats.generated.json`。不要手动编辑该文件；启动和正式构建也会自动重新生成。

研究科/专攻首页默认展示最近 10 个有数据的年度；不足 10 年时展示全部。官方数据使用蓝色实线，民间数据使用橙色虚线。
