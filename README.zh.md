<div align="center">
  <h1 align="center">
    The Kai Project 
    <br />
  </h1>
   <p align="center"><a href="./README.md">English | <a href="./README.zh.md">中文</a> | <a href="./README.ja.md">日本語</a><br></p>
   
   <a href="https://deepwiki.com/Myyura/the_kai_project"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</div>


# 📖 项目介绍 
```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

本项目旨在提供一个开源的、便捷的、分享与讨论修考试题答案的地方，破除信息之壁。

项目网站：[日本大学院入学考试答案](https://runjp.com/)


# 👏 贡献方式 

项目通过多种渠道鼓励社区贡献：
- Git Pull Request：适合熟悉Git的贡献者
- 邮件投稿：适合希望通过邮件发送内容的用户
- 社区讨论：通过QQ群讨论题目答案和考试经验，或通过GitHub issues告知我们答案错误！

所有Git贡献都遵循标准化格式，包括元数据、标签和适当的文件组织，以保持平台的一致性。

## 📝 格式规范
所有贡献都必须遵循特定的格式规范，以保持整个项目的一致性。

### 文档前置信息
#### 考试答案：

每个考试答案的markdown文档都必须在文件开头包含前置信息，提供有关内容的元数据：

```markdown
---
sidebar_label: '在侧边栏显示的标题'
tags:
  - 学校名称
  - 主题标签 (可选)
---
```
必需的前置信息字段：
- `sidebar_label`：将出现在导航侧边栏中的标题
- `tags`：至少必须包含相关学校（例如，Tokyo-University）。额外的考试重点主题标签是可选的，但建议添加。

#### 博客：
博客文章在其前置信息中引用这些作者ID：

每个作者至少应该有`name`属性。

单一作者：

```markdown
---
title: 博客标题
authors:
  name: 示例作者
tags: [标签1, 标签2]
---
```

多个作者：

```markdown
---
title: 博客标题
authors:
  - name: Joel Marcey
  - name: Sébastien Lorber
tags: [标签1, 标签2]
---
```

### 文件命名和位置约定
文件必须放置在正确的目录结构中并遵循命名约定：

1. 基础目录：`docs/`
2. 层级结构：`学校/学部/专业/学年/`
3. 文件名：应该表明内容的具体详情（学校缩写、考试年月、科目、题目编号）

```markdown
docs/
├── <大学>/
│   ├── <学部>/
│   │   ├── <专业>/
│   │   │   ├── <学年>/
│   │   │   │   └── <考试文件>.md
blog/
├── <分类>/
│   └── <博客文章>.md
```

示例：

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

这对应于：
- 学校：东京大学
- 学部：工学部
- 专业：应用物理学(ap)
- 考试年月：201908
- 科目：物理
- 题目编号：3

## 📧 邮件投稿
对于不熟悉Git的贡献者，项目接受通过邮件的贡献。

邮件投稿步骤：
1. 按照格式规范准备您的内容
2. 将您的内容发送到项目邮箱：376672994@qq.com
3. 项目维护者将审核您的投稿
4. 如获批准，维护者将把您的内容添加到仓库中

这种方法旨在降低那些想要分享有价值内容但没有Git技术经验的贡献者的参与门槛。

## 💬 社区讨论
Kai项目维护一个QQ群用于社区讨论考试解答和考试经验，或通过GitHub issues告知我们答案错误！

[QQ群：925154731](https://qm.qq.com/q/MVPd9wniQU)

通过社区讨论收到的反馈可能会被维护者纳入仓库或用于指导未来的贡献。

# ©️ 许可证和版权
对Kai项目的所有代码贡献都受GNU Affero General Public License v3.0约束。

此外，考试题目版权归各自的学校/机构所有。

项目感谢所有为维护和扩展这个知识库做出贡献的人员。

如果您认为任何内容侵犯了您的权利，请立即联系项目维护者。

# ⭐ 星标历史

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)
