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
The Kai Project 是一个面向日本大学院入试过去问、答案与备考经验分享的开源平台。除了资料库本身，站点现在也提供了做题进度追踪、题目笔记和跨设备同步等学习工具，帮助用户更系统地备考。

```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

项目网站：[日本大学院入学考试答案](https://runjp.com/)

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
yarn review:format
```

- `yarn generate:universities`：当你修改 `docs/` 目录结构或 `_category_.json` 标签后，重新生成 `src/data/universities.js`。
- `yarn review:format`：在提交 PR 前检查 `docs/` 下题解文档的格式。

## 可选的云同步配置
即使不配置云端环境变量，站点的核心功能仍可正常使用，包括文档、博客、本地做题进度和本地笔记。若不配置下面这些变量，则登录、云同步和排行榜功能不可用。

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

# 👏 贡献方式
项目通过多种渠道鼓励社区贡献：
- Git Pull Request：适合熟悉 Git 的贡献者
- 邮件投稿：适合希望通过邮件发送内容的用户
- 社区讨论：通过 QQ 群讨论题目答案和考试经验，或通过 GitHub issues 告知我们答案错误

## 📝 格式规范
`docs/` 下的题解文档请尽量遵循统一格式。

### 题解文档
每个题解 markdown 文档建议使用如下结构：

```markdown
---
sidebar_label: '在侧边栏显示的标题'
tags:
  - Tokyo-University
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

提交 PR 前建议先运行：

```bash
yarn review:format
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
The Kai Project 维护一个 QQ 群用于社区讨论考试解答和考试经验，或通过 GitHub issues 告知我们答案错误！

[QQ群：925154731](https://qm.qq.com/q/MVPd9wniQU)

通过社区讨论收到的反馈可能会被维护者纳入仓库或用于指导未来的贡献。

# ©️ 许可证和版权
对 The Kai Project 的所有代码贡献都受 GNU Affero General Public License v3.0 约束。

此外，考试题目版权归各自的学校/机构所有。

项目感谢所有为维护和扩展这个知识库做出贡献的人员。

如果你认为任何内容侵犯了你的权利，请立即联系项目维护者。

# ⭐ 星标历史

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)
