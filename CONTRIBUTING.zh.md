# 开发与贡献指南

<p align="center">
  <a href="./CONTRIBUTING.md">English</a> | <a href="./CONTRIBUTING.zh.md">中文</a> | <a href="./CONTRIBUTING.ja.md">日本語</a>
</p>

[← 返回中文 README](./README.zh.md)

本指南面向内容贡献者、代码贡献者和项目维护者，集中说明本地开发、内容规范、账号与 API 配置、部署及投稿流程。

## 🛠️ 本地开发
### 环境要求
- Node.js `>=20`
- Yarn `>=1.22.0`

### 本地运行
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

### 常用脚本

```bash
yarn test
yarn generate:universities
yarn generate:site-stats
yarn generate:contributors
yarn tags:generate
yarn content:validate
yarn tags:audit
yarn documents:validate
yarn content:export
yarn review:format
yarn api:validate
```

- `yarn test`：在本地运行仓库根目录 `tests/` 下的自动化测试。
- `yarn generate:universities`：当你修改 `docs/` 目录结构或 `_category_.json` 标签后，重新生成 `src/data/universities.js`。
- `yarn generate:site-stats`：使用 API 数据生成所采用的同一套本地内容扫描逻辑，重新生成 `src/data/siteStats.json` 和 `src/data/documentTitles.json`；开发服务器和生产构建会自动执行。
- `yarn generate:contributors`：从 GitHub 刷新 `src/data/githubContributors.json`；网络请求失败时保留已有缓存。
- `yarn tags:generate`：根据 `src/data/tagTaxonomy/` 下按科目拆分的文件重新生成 `docs/tags.yml`。
- `yarn content:validate`：校验文档身份、tag 生成结果、Description 章节规范化状态，以及 `src/data/` 下的结构化数据，包括参考链接、大学元数据、站点统计、文档标题和 tag taxonomy。
- `yarn tags:audit`：统计全站学校、学科、子科目、考点、待归类和废弃 tag 的使用情况。
- `yarn documents:validate`：校验自动推导的文档 UUID，以及仅在路径重命名时保存的 current override 与历史 alias。
- `yarn content:export`：生成供独立客户端同步的完整内容快照 `build/content-export/v1/kai-content-v1.json.gz`；字段与同步规则参见 [CONTENT_EXPORT.md](CONTENT_EXPORT.md)。
- `yarn review:format`：在提交 PR 前检查 `docs/` 下题解文档的格式。
- `yarn api:validate`：检查 JSON API 使用的结构化题库数据。

仓库根目录 `tests/` 下的自动化测试文件纳入 Git 版本管理。贡献者必须在提交 commit 或发起 PR 前，在本地运行 `yarn test` 并修复所有失败项；CI 不运行这些测试。`audits/` 下的审计报告仍仅保留在本地，由 Git 忽略，不纳入版本管理。

贡献者可编辑的内容数据位于 `src/data/`：`links.json`、`universityMetadata.json` 和 `tagTaxonomy/` 目录。tag 定义按主科目存放在 `tagTaxonomy/subjects/`，全局策略和学校 tag 则存放在同级文件中。普通新增文档会按 `docId` 自动推导 UUIDv5，不需要修改身份清单；只有移动或重命名文档时才需要执行 `yarn documents:move -- <旧-doc-id> <新-doc-id>`。`siteStats.json` 和 `documentTitles.json` 会在开发及构建时自动刷新，其余生成文件可用上面的脚本维护。

## 账号与数据库配置
不配置 Supabase 时，文档、博客、题目与题解等公开内容仍可正常阅读。进度、笔记、文中注释、私人题集和排行榜仅向登录用户开放，数据直接写入数据库，不提供匿名学习数据模式。

```bash
export SUPABASE_URL="https://your-project.supabase.co"
export SUPABASE_ANON_KEY="your-anon-key"
export HCAPTCHA_SITE_KEY="your-hcaptcha-site-key"
export PROBLEM_SETS_ENABLED="true"
```

- `SUPABASE_URL` 和 `SUPABASE_ANON_KEY` 用于开启认证与账号数据功能。
- `HCAPTCHA_SITE_KEY` 是可选项，但建议配置，用于登录/注册页的人机验证。
- `PROBLEM_SETS_ENABLED` 是发布开关；只有值严格为 `true` 时才显示私人题集界面。请在最新数据库结构完成部署和验证后再开启。

如果你要完整启用账号功能：
1. 创建一个 Supabase 项目。全新空数据库先执行一次 `src/services/schema.sql` 作为基线；已有数据库不要重复执行该文件。
2. 当前基线没有待执行的历史迁移；以后新增的结构变化才会放入 `supabase/migrations/` 并由部署流程自动应用。
3. 按该 SQL 文件中的说明，配置认证限流、密码策略和 hCaptcha 等安全项。
4. 在 Supabase Authentication → URL Configuration 中加入站点回调地址，包括 `https://your-domain/auth/callback` 和 `https://your-domain/reset-password`。
5. 如需启用站内投稿，部署 `supabase/functions/content-submissions`，并配置 `CONTENT_BOT_TOKEN`、`CLA_ATTESTATION_SECRET` 和 `CONTENT_SUBMISSION_CALLBACK_SECRET`；投稿署名来自用户已确认的公开昵称，而不是请求数据。
6. 使用测试账号验证公开昵称和私人题集 RPC，再以 `PROBLEM_SETS_ENABLED=true` 重新构建。

## 开发者 JSON API
注册用户可以在个人中心申请 JSON API 访问权限。项目维护者审核通过后，用户可以创建 API Key 并读取题目与答案数据。API Key 明文只在创建时显示一次，请立即保存；数据库只保存 SHA-256 hash。

### 注册用户如何使用
1. 登录网站后打开“个人中心 → 开发者 API”，或直接访问 `/me?tab=developer-api`。
2. 填写 API 访问申请；使用目的为选填项，如涉及机构项目、批量复用或商业性接入，请在申请中如实说明。
3. 等待项目维护者审核。审核通过后，页面会开放 API Key 创建功能。
4. 创建一个 API Key，并保存 `kai_live_...` 明文。
5. 使用 `Authorization: Bearer kai_live_...` 调用内容 API。内容 API 不接受匿名请求或登录 JWT。

可用接口：

- `GET /v1/catalog`：返回大学、院系、专攻、年份和题目数量。
- `GET /v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content`：按条件查询题目；`include=content` 会返回题目/答案正文。
- `GET /v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache`：按派生学习 taxonomy 过滤题目。
- `GET /v1/exams/{doc_id}`：按文档 ID 查询单篇题目。

题目响应会返回不会随路径变化的 `documentUuid`，保留 frontmatter 原始 `tags`，并额外返回派生字段：`schoolTags`、`learningTags`、`subjectIds`、`subsubjectIds`、`topicIds`。普通新增文档的 UUID 会由固定 namespace 和 `docId` 自动推导，无需登记；移动文档路径时请执行 `yarn documents:move -- <旧-doc-id> <新-doc-id>`，该命令只在 `documentIdentityOverrides.json` 中记录重命名例外与旧路径 alias，让进度、笔记、难度投票和题集条目继续指向同一份内容。考点 ID 使用 `Subject.Subsubject.Topic` 命名空间；`learningTags` 会标明每个学习 tag 是 `subsubject`、具体 `topic`，还是待归类 tag，topic 项还会包含 `short_id`。

调用示例：

```bash
curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/catalog"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache"
```

成功响应包含 `apiVersion`、`sourceUrl`、`license`、`contentNotice`；错误响应返回带有 code 和 message 的 `error` 对象。核心公开内容保持开放访问；API 访问、批量复用、再分发、商业性接入及其他超出普通浏览和个人学习范围的使用，应遵守项目另行公布的内容/API 条款，并自行确保取得相关权利人的必要授权。

### 项目维护者如何部署
本项目复用现有登录系统作为开发者身份层，并通过 Supabase Edge Functions 对外提供题目与答案 JSON。

1. 全新空数据库只执行一次 [src/services/schema.sql](src/services/schema.sql)；它已经包含当前完整结构。已有数据库不要重复执行基线。将 20260718 三份迁移折叠进基线的现有生产项目，应在下次新增迁移前执行一次 [基线收尾 SQL](supabase/manual/20260718_finalize_consolidated_baseline.sql)。
2. 部署 [supabase/functions](supabase/functions) 中的 Edge Functions。生产 GitHub Actions 使用 `SUPABASE_ACCESS_TOKEN` 和 `SUPABASE_PROJECT_REF` 自动部署函数；只有存在新的数据库迁移时才额外需要 `SUPABASE_DB_PASSWORD`：

```bash
npx supabase functions deploy developer-api-keys --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy kai-api --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy content-submissions --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy agent-session --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy agent-context --project-ref "$SUPABASE_PROJECT_REF"
```

`kai-api` 和 `agent-context` 共用 `supabase/functions/_shared/published-content.ts` 中的静态正文加载器；Supabase CLI 和 GitHub Actions 会自动把共享模块打包，无需手工复制，也无需你在 Dashboard 中逐个更新函数。

3. 文档正文不会镜像到数据库，而是由构建流程按稳定 UUID 发布到 `/api-content/v1/documents/`。GitHub Actions 不保存 `SUPABASE_SERVICE_ROLE_KEY`；部署成功后，由维护者在受信任的本地终端临时设置该密钥，只同步文档身份和轻量目录：

```bash
printf 'Supabase service-role key: '
IFS= read -r -s SUPABASE_SERVICE_ROLE_KEY
printf '\n'
export SUPABASE_SERVICE_ROLE_KEY
SUPABASE_URL="https://your-project.supabase.co" yarn catalog:sync
unset SUPABASE_SERVICE_ROLE_KEY
```

该命令只 upsert UUID、路径、标题、链接、标签、分类和内容哈希，并清理已经不存在的 `document_catalog` 目录行；不会上传 Markdown，也不会修改笔记、进度、题集或其他用户表。JSON API 和 Agent 需要正文时，会按 UUID 读取随网站一起发布的静态 JSON。
该输入方式不会把密钥写入终端历史；不要把它写入仓库、GitHub Secrets 或构建日志。

文档发生过路径移动后，可以在低流量维护时段于 Supabase SQL Editor 手动执行 [doc_id 归一化 SQL](supabase/manual/20260719_canonicalize_document_doc_ids.sql)。请先备份并完成 `yarn catalog:sync`；脚本会把用户业务表的旧 `doc_id` 更新为 `document_registry.current_doc_id`，保持 UUID、用户数据、时间戳和笔记版本不变，同时永久保留历史 alias。该脚本可重复执行，最终查询中的 `stale_row_count` 应全部为 `0`。

4. 按 [supabase/config.toml](supabase/config.toml) 保持上述五个函数的 `verify_jwt = false`；每个函数会自行完成 API Key、登录 token、回调 secret 或 JWK 校验。为 `kai-api` 配置 `API_LOG_SALT`；站内投稿与 Agent bridge 在启用前还需分别配置 GitHub、CLA、回调或 Agent/JWK secrets。
5. 通过 Supabase Dashboard 审核 `api_access_requests` 表中的申请：将 `status` 改为 `approved` 即可允许用户创建 API Key；可用 `rejected` 或 `revoked` 拒绝或暂停访问。

当前默认基础访问配置为 `60 requests/minute`、最多 `3` 个 active key；维护者可以调整申请记录中保存的访问配置。`api_access_requests` 和 `api_keys` 中预留了 `plan`、`commercial_allowed` 等字段，可用于合作接入、机构场景和分层配额管理。

## 👏 贡献方式
项目通过多种渠道鼓励社区贡献：
- GitHub Pull Request：适合熟悉 Git 的贡献者
- 站内投稿：登录后提交新题解，或从现有题解页发起纠错
- 邮件投稿：适合希望通过邮件发送内容的用户
- 社区讨论：通过 Discord 或 QQ 群讨论题目答案和备考经验，或通过 GitHub Issues 告知我们答案错误

合并进入公开题库与公开题解库的贡献，将作为 The Kai Project 核心公开内容的一部分持续开放访问。项目围绕学习工具、数据接口、辅导支持或合作接入开展的可持续运营探索，不改变这些已合并核心公开内容的开放访问属性。

登录用户可打开“个人中心 → 我的投稿”，或访问 `/me?tab=contribute`，提交新题解；纠错也可以从对应题解页直接发起。表单会将 CLA 确认写入带签名的 payload，并创建公开 GitHub Issue。维护者审核内容并添加 `submission:ready-for-pr` 标签后，[投稿转 PR 工作流](.github/workflows/submission-issue-to-pr.yml)会验证该 payload 并创建 Draft Pull Request。

所有参与者都应遵守[社区行为准则](CODE_OF_CONDUCT.md)。

### 📝 格式规范
`docs/` 下的题解文档请尽量遵循统一格式。

#### 题解文档
每个题解 markdown 文档建议使用如下结构：

```markdown
---
sidebar_label: '在侧边栏显示的标题'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Grand-Canonical-Ideal-Gas
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
- 推荐从[按科目拆分的 tag 文件](src/data/tagTaxonomy/subjects)中选择已有 canonical 子科目 ID 与 namespaced 考点 ID。一级学科 tag 不是有效的 frontmatter 学习 tag；旧短考点 alias 仍会被识别，但会作为 deprecated tag 给出 warning，应改用对应的 namespaced canonical 考点 ID。
- 已添加具体考点时，不要再同时添加它的父级子科目；格式检查会把这组 tag 判定为冗余。
- tag 池中的关联科目应以题目内容中确实出现的强关联为准，不按宽泛的理论交叉来归类。
- 学校 tag 暂时保持兼容，但站点会优先从 `docs/` 下前两级目录推导学校和研究科信息。
- 正确的新子科目或考点 tag 可以直接提交；`yarn review:format` 只会给 warning，不会阻止 PR。
- 当前 tag 池中不存在的 tag 会作为新 tag 给出提示，便于检查拼写或联系管理员审查。
- 如果一篇文档只有学校 tag，没有任何学习 tag，脚本会给 warning。若只有子科目 tag，脚本会建议在题面线索足够时继续补充具体考点。

提交 PR 前建议先运行：

```bash
yarn test
yarn review:format
yarn tags:audit
```

#### 博客文章
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

#### 文件命名和位置约定
新增文件应沿用目标院校的现有目录结构：

1. 基础目录：`docs/`
2. 常见层级：`大学/研究科（或院系）/[专攻或项目/...]/年度/`。专攻层可以省略，也可能包含多级；请参考相邻文件和 `_category_.json` 标签。
3. 文件名应保持稳定且具有描述性，通常包含考试年月或年度、科目或试卷部分以及题号。

```text
docs/
├── <大学>/
│   ├── <研究科或院系>/
│   │   ├── [<专攻或项目>/...]
│   │   │   ├── <年度>/
│   │   │   │   └── <题解文件>.md
blog/
├── <博客文章>.md
```

示例：

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

这对应于：
- 大学：东京大学（`tokyo-university`）
- 研究科：工学系研究科（`engineering`）
- 专攻：物理工学专攻（`ap`）
- 入学年度：`2020`
- 考试年月：`201908`
- 科目：物理
- 题目编号：`3`

### 📧 邮件投稿
对于不熟悉 Git 的贡献者，本项目接受通过邮件提交贡献。

邮件提交步骤：
1. 按照上面的格式指南准备内容。
2. 阅读我们的 [贡献者许可协议（CLA）](CLA.md)。
3. 将内容发送至项目邮箱：**376672994@qq.com**。
4. 在邮件正文中明确写上：*“我已阅读并同意 The Kai Project CLA。”*
5. 维护者审核通过后，会将内容添加到仓库中。

### 📝 签署 CLA
在合并贡献之前，你需要签署 [贡献者许可协议（CLA）](CLA.md)。

**对于站内投稿：**
提交表单前必须确认同意 CLA。该确认会写入带签名的 GitHub Issue payload，并在审核通过的投稿转换为 Draft Pull Request 前完成验证。

**对于 GitHub 用户（Pull Requests）：**
请由 PR 作者本人在 Pull Request 描述中写入以下签署语句：

```text
I have read and agree to The Kai Project CLA.
```

项目维护者会在合并 Pull Request 前核对该声明。

**对于非 GitHub 用户（邮件投稿）：**
如上所述，在邮件正文中包含 *“我已阅读并同意 The Kai Project CLA。”* 即可。
