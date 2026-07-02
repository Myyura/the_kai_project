<div align="center">

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-green.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![The Kai Project](https://img.shields.io/badge/Powered%20by-The%20Kai%20Project-2e8555)](https://runjp.com)
[![GitHub](https://img.shields.io/badge/GitHub-the__kai__project-181717?logo=github)](https://github.com/Myyura/the_kai_project)

</div>

<div align="center">
  <h1 align="center">
    The Kai Project
    <br />
  </h1>
  <p align="center"><a href="./README.md">English</a> | <a href="./README.zh.md">中文</a> | <a href="./README.ja.md">日本語</a><br></p>

  <a href="https://deepwiki.com/Myyura/the_kai_project"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</div>

# 📖 项目介绍
The Kai Project 是一个面向日本大学院入试过去问、公开题解与备考经验分享的开源平台。除了资料库本身，站点现在也提供了做题进度追踪、题目笔记和跨设备同步等学习工具，帮助用户更系统地备考。

```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

项目网站：[日本大学院入学考试答案](https://runjp.com/)

## 开源项目与可持续运营

The Kai Project 以开源项目和公开资料库为基础。由社区共同维护的题库索引、公开题解、备考资料及相关说明，作为项目的核心公开内容，将持续面向公众提供开放访问。

为支持项目的长期维护、技术服务和社区运营，项目可能围绕学习工具、账号功能、数据接口、辅导支持或合作接入等方向探索可持续运营方式。相关功能或合作安排不会改变核心公开内容的开放访问属性。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="700" alt=""/>
</figure>

# ✨ 功能特性
- 多学校、多研究科的过去问与答案资料库
- 经验贴与备考心得博客
- 逐题进度标记、复习提醒与总览面板
- 每道题自带笔记区，支持 Markdown 与 LaTeX
- 基于 Supabase 的可选登录、云同步与周榜功能
- 本地搜索、PWA/离线支持，以及题解页面一键分享成图片

# 🛠️ 本地开发
## 环境要求
- Node.js `>=20`
- Yarn `>=1.22.0`

## 本地运行
安装依赖并启动开发服务器：

```bash
yarn install
yarn dev
```

然后访问 `http://localhost:3000`。

如果要本地预览生产构建结果：

```bash
yarn build
yarn serve
```

## 常用脚本

```bash
yarn generate:universities
yarn generate:site-stats
yarn tags:generate
yarn content:validate
yarn tags:audit
yarn review:format
yarn api:validate
```

- `yarn generate:universities`：当你修改 `docs/` 目录结构或 `_category_.json` 标签后，重新生成 `src/data/universities.js`。
- `yarn generate:site-stats`：使用 JSON API 的同一套扫描逻辑重新生成 `src/data/siteStats.json`。
- `yarn tags:generate`：根据 `src/data/tagTaxonomy/` 下按科目拆分的文件重新生成 `docs/tags.yml`。
- `yarn content:validate`：校验 `src/data/` 下贡献者可编辑的 JSON 数据，包括参考链接、录取数据、大学元数据和 tag 池。
- `yarn tags:audit`：统计全站学校、学科、子科目、考点、待归类和废弃 tag 的使用情况。
- `yarn review:format`：在提交 PR 前检查 `docs/` 下题解文档的格式。
- `yarn api:validate`：检查 JSON API 使用的结构化题库数据。

贡献者可编辑的内容数据位于 `src/data/`：`links.json`、`admissions.json`、`universityMetadata.json` 和 `tagTaxonomy/` 目录。tag 定义按主科目存放在 `tagTaxonomy/subjects/`，全局策略和学校 tag 则存放在同级文件中。自动生成的 `universities.js`、`siteStats.json` 和 `docs/tags.yml` 可用上面的脚本刷新。

## 可选的云同步配置
即使不配置云端环境变量，站点的核心公开内容仍可正常访问，包括文档、博客、题目与题解。若不配置下面这些变量，则登录、个人中心、进度/笔记、云同步和排行榜功能不可用。

```bash
export SUPABASE_URL="https://your-project.supabase.co"
export SUPABASE_ANON_KEY="your-anon-key"
export HCAPTCHA_SITE_KEY="your-hcaptcha-site-key"
```

- `SUPABASE_URL` 和 `SUPABASE_ANON_KEY` 用于开启认证与云同步。
- `HCAPTCHA_SITE_KEY` 是可选项，但建议配置，用于登录/注册页的人机验证。

如果你要完整启用云同步：
1. 创建一个 Supabase 项目。
2. 在 Supabase SQL Editor 中执行 [src/services/schema.sql](src/services/schema.sql)。
3. 按该 SQL 文件中的说明，配置认证限流、密码策略和 hCaptcha 等安全项。
4. 在 Supabase Authentication → URL Configuration 中加入站点回调地址，包括 `https://your-domain/auth/callback` 和 `https://your-domain/reset-password`。

## 开发者 JSON API
注册用户可以在开发者中心申请 JSON API 访问权限。项目维护者审核通过后，用户可以创建 API Key 并读取题目与答案数据。API Key 明文只在创建时显示一次，请立即保存；数据库只保存 SHA-256 hash。

### 注册用户如何使用
1. 登录网站后访问 `/developers`，进入 JSON API 功能。也可以直接打开 `/developers/api`。
2. 填写 API 访问申请；使用目的为选填项，如涉及机构项目、批量复用或商业性接入，请在申请中如实说明。
3. 等待项目维护者审核。审核通过后，页面会开放 API Key 创建功能。
4. 创建一个 API Key，并保存 `kai_live_...` 明文。
5. 使用 `Authorization: Bearer kai_live_...` 调用内容 API。内容 API 不接受匿名请求或登录 JWT。

可用接口：

- `GET /v1/catalog`：返回大学、院系、专攻、年份和题目数量。
- `GET /v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content`：按条件查询题目；`include=content` 会返回题目/答案正文。
- `GET /v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache`：按派生学习 taxonomy 过滤题目。
- `GET /v1/exams/{doc_id}`：按文档 ID 查询单篇题目。

题目响应会保留 frontmatter 原始 `tags`，并额外返回派生字段：`schoolTags`、`learningTags`、`subjectIds`、`subsubjectIds`、`topicIds`。考点 ID 使用 `Subject.Subsubject.Topic` 命名空间；`learningTags` 会标明每个学习 tag 是 `subsubject`、具体 `topic`，还是待归类 tag，topic 项还会包含 `short_id`。

调用示例：

```bash
curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/catalog"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache"
```

响应固定包含 `apiVersion`、`sourceUrl`、`license`、`contentNotice`。核心公开内容保持开放访问；API 访问、批量复用、再分发、商业性接入及其他超出普通浏览和个人学习范围的使用，应遵守项目另行公布的内容/API条款，并自行确保取得相关权利人的必要授权。

### 项目维护者如何部署
本项目复用现有登录系统作为开发者身份层，并通过 Supabase Edge Functions 对外提供题目与答案 JSON。

1. 在 Supabase SQL Editor 中执行最新版 [src/services/schema.sql](src/services/schema.sql)。
2. 部署 [supabase/functions](supabase/functions) 中的 Edge Functions：

```bash
npx supabase functions deploy developer-api-keys --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy kai-api --project-ref "$SUPABASE_PROJECT_REF"
```

也可以在 Supabase Dashboard 的 Edge Functions 编辑器中部署：分别创建 `developer-api-keys` 和 `kai-api`，并把对应函数目录下的 `index.ts`、`http.ts`、`crypto.ts` 加到该函数中。每个函数目录都是自包含的，不依赖函数目录外的共享文件。

3. 同步结构化题库数据：

```bash
SUPABASE_URL="https://your-project.supabase.co" \
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key" \
yarn api:sync
```

该命令会镜像当前 `docs/` 目录：upsert 当前文档，并硬删除本地已不存在的 `exam_documents` 旧行。

4. 确认 Supabase Function secrets 已配置 `API_LOG_SALT`，并关闭两个函数的 JWT verification。
5. 通过 Supabase Dashboard 审核 `api_access_requests` 表中的申请：将 `status` 改为 `approved` 即可允许用户创建 API Key；可用 `rejected` 或 `revoked` 拒绝或暂停访问。

第一版默认所有通过用户使用相同基础访问配置：`60 requests/minute`、最多 `3` 个 active key。`api_access_requests` 和 `api_keys` 中已经预留 `plan`、`commercial_allowed` 等字段，后续可用于合作接入、机构场景和分层配额管理。

# 👏 贡献方式
项目通过多种渠道鼓励社区贡献：
- Git Pull Request：适合熟悉 Git 的贡献者
- 邮件投稿：适合希望通过邮件发送内容的用户
- 社区讨论：通过 Discord 或 QQ 群讨论题目答案和备考经验，或通过 GitHub issues 告知我们答案错误

合并进入公开题库与公开题解库的贡献，将作为 The Kai Project 核心公开内容的一部分持续开放访问。项目围绕学习工具、数据接口、辅导支持或合作接入开展的可持续运营探索，不改变这些已合并核心公开内容的开放访问属性。

## 📝 格式规范
`docs/` 下的题解文档请尽量遵循统一格式。

### 题解文档
每个题解 markdown 文档建议使用如下结构：

```markdown
---
sidebar_label: '在侧边栏显示的标题'
tags:
  - Tokyo-University
  - Subsubject-Tag
  - Topic-Tag
---

# 完整标题

## **Author**
[你的名字](https://example.com)

## **Description**
题面摘要、誊写内容或对题目的简要说明。

## **Kai**
你的解答、推导、说明或补充笔记。
```

当前仓库中的格式审阅脚本会检查这些规则：
- `sidebar_label` 必填
- `tags` 必填
- frontmatter 后第一行非空内容必须是 H1 标题
- `## **Author**` 必填
- `## **Description**` 和 `## **Kai**` 可以分别缺省，但两者至少要有一个存在
- 如果两个章节都存在，顺序应保持为 `Author` → `Description` → `Kai`

tag 规则：
- 推荐从[按科目拆分的 tag 文件](src/data/tagTaxonomy/subjects)中选择已有 canonical 子科目 ID 与 namespaced 考点 ID。一级学科与旧短考点 tag 都不是有效 frontmatter tag。
- tag 池中的关联科目应以题目内容中确实出现的强关联为准，不按宽泛的理论交叉来归类。
- 学校 tag 暂时保持兼容，但站点会优先从 `docs/学校/研究科/...` 路径推导学校信息。
- 正确的新子科目或考点 tag 可以直接提交；`yarn review:format` 只会给 warning，不会阻止 PR。
- 当前 tag 池中不存在的 tag 会作为新 tag 给出提示，便于检查拼写或联系管理员审查。
- 如果一篇文档只有学校 tag，没有任何学习 tag，脚本会给 warning。若只有子科目 tag，脚本会建议在题面线索足够时继续补充具体考点。

提交 PR 前建议先运行：

```bash
yarn review:format
yarn tags:audit
```

### 博客文章
博客统一使用 [blog/authors.yml](blog/authors.yml) 中定义的 author ID，而不是在 frontmatter 中直接写内联作者对象。

1. 先在 [blog/authors.yml](blog/authors.yml) 中新增或复用一个作者 ID。
2. 再在博客 frontmatter 中引用这个 ID。

示例：

```markdown
---
title: 博客标题
authors: yourAuthorId
tags: [标签1, 标签2]
---
```

可以参考已有文章：[blog/2025-04-02-furry.md](blog/2025-04-02-furry.md)、[blog/2025-07-10-unagoya.md](blog/2025-07-10-unagoya.md)。

### 文件命名和位置约定
文件必须放置在正确的目录结构中并遵循命名约定：

1. 基础目录：`docs/`
2. 层级结构：`学校/学部/专业/学年/`
3. 文件名：应体现具体内容信息，例如学校缩写、考试年月、科目、题号

```text
docs/
├── <大学>/
│   ├── <学部>/
│   │   ├── <专业>/
│   │   │   ├── <学年>/
│   │   │   │   └── <题解文件>.md
blog/
├── <博客文章>.md
```

示例：

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

这对应于：
- 学校：东京大学
- 学部：工学部
- 专业：应用物理学（`ap`）
- 考试年月：`201908`
- 科目：物理
- 题目编号：`3`

## 📧 邮件投稿
对于不熟悉 Git 的贡献者，本项目接受通过邮件提交贡献。

邮件提交步骤：
1. 按照上面的格式指南准备内容。
2. 阅读我们的 [贡献者许可协议（CLA）](CLA.md)。
3. 将内容发送至项目邮箱：**376672994@qq.com**。
4. 在邮件正文中明确写上：*“我已阅读并同意 The Kai Project CLA。”*
5. 维护者审核通过后，会将内容添加到仓库中。

## 📝 签署 CLA
在合并贡献之前，你需要签署 [贡献者许可协议（CLA）](CLA.md)。

**对于 GitHub 用户（Pull Requests）：**
现在仓库已通过工作流自动检查 CLA：[.github/workflows/cla-check.yml](.github/workflows/cla-check.yml)。

提交 PR 后，请由 PR 作者本人在以下任一位置写入签署语句：
- PR 描述
- PR 对话区评论
- PR Review 评论

可用签署语句：

```text
I have read the CLA Document and I sign the CLA
```

```text
I have read and agree to The Kai Project CLA.
```

如果未检测到签署语句，`CLA 检查` 工作流会失败并自动留言提醒；补充签署语句后会自动通过。

**对于非 GitHub 用户（邮件投稿）：**
如上所述，在邮件正文中包含 *“我已阅读并同意 The Kai Project CLA。”* 即可。

# 💬 社区讨论
欢迎加入 The Kai Project 的 Discord 或 QQ 群，讨论考试解答、分享备考经验并提供反馈。也可以通过 GitHub issues 告知我们答案错误。

[加入 Discord](https://discord.gg/VcUHXzB9Mk)

[QQ群：925154731](https://qm.qq.com/q/MVPd9wniQU)

通过社区讨论收到的反馈可能会被维护者纳入仓库或用于指导未来的贡献。

# ©️ 许可证和版权
对 The Kai Project 的所有代码贡献都受 GNU Affero General Public License v3.0 约束。

公开题解、备考资料与相关文档贡献适用 [贡献者许可协议（CLA）](CLA.md)。项目将核心公开内容作为开源共享资料库的一部分持续提供访问，同时保留围绕配套工具、API、服务支持和合作场景进行长期运营的空间。

此外，考试题目版权归各自的学校/机构所有。

项目感谢所有为维护和扩展这个知识库做出贡献的人员。

如果你认为任何内容侵犯了你的权利，请立即联系项目维护者。

# ⭐ 星标历史

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)
