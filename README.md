<div align="center">
  <h1 align="center">
    The Kai Project 
    <br />
  </h1>
   <p align="center"><a href="./docs/README.md">English | <a href="./docs/README.zh.md">中文</a> | <a href="./docs/README.ja.md">日本語</a><br></p>
   
   <a href="https://deepwiki.com/Myyura/the_kai_project"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</div>

# 📖 Introduction 
The Kai Project is an open-source project designed to break down information barriers by providing a centralized resource for sharing and discussing Japanese graduate school entrance exam answers.

```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

Project website: [Japanese graduate school entrance exam answers](https://runjp.com/)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="700" alt=""/>
</figure>

# 👏 Contribution 

The project encourages community contributions through multiple channels:
- Git Pull Requests: For contributors familiar with Git
- Email Submissions: For users who prefer to send content via email
- Community Discussion: Discuss the answers to the questions and your experience with the exam via the QQ group, or let us know if the answers are wrong via GitHub issues!

All Git contributions follow a standardized format that includes metadata, tags, and proper file organization to maintain consistency across the platform.

## 📝 Formatting guidelines
All contributions must adhere to specific formatting guidelines to maintain consistency throughout the project.

### Document Frontmatter
#### Exam answer:

Each exam answer markdown document must include frontmatter at the beginning of the file, which provides metadata about the content:

```markdown
---
sidebar_label: 'Title displayed in sidebar'
tags:
  - School-Name
  - Topic-Tag (optional)
---
```
Required frontmatter fields:
- `sidebar_label`: The title that will appear in the navigation sidebar
- `tags`: At minimum, must include the relevant school (e.g., Tokyo-University). Additional exam focus topic tags are optional but encouraged.

#### Blog:
Blog posts reference these author IDs in their frontmatter:

Every author should have at least the `name` attribute.

Single author:

```markdown
---
title: Post title
authors:
  name: example author
tags: [Tag1, Tag2]
---
```

Multiple authors:

```markdown
---
title: Post title
authors:
  - name: Joel Marcey
  - name: Sébastien Lorber
tags: [Tag1, Tag2]
---
```

### File Naming and Location Conventions
Files must be placed in the correct directory structure and follow naming conventions:

1. Base directory: `docs/`
2. Hierarchy: `school/department/major/academic year/`
3. Filename: Should indicate the content's specific details (school abbreviation, year and month of the exam, subject, question number)

```markdown
docs/
├── <university>/
│   ├── <department>/
│   │   ├── <specialization>/
│   │   │   ├── <academic year>/
│   │   │   │   └── <exam_file>.md
blog/
├── <category>/
│   └── <blog_post>.md
```

Example:

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

This corresponds to:
- School: Tokyo University
- Department: Engineering
- Major: Applied Physics (ap)
- Year and month of the exam: 201908
- Subject: Physics
- Question number: 3

## 📧 Email Submissions
For contributors who are not familiar with Git, the project accepts contributions via email.

Steps for Email Submission:
1. Prepare your content following the formatting guidelines
2. Send your content to the project email address: 376672994@qq.com
3. Project maintainers will review your submission
4. If approved, maintainers will add your content to the repository

This method is designed to lower the barrier to entry for contributors who want to share valuable content but don't have technical Git experience.

## 💬 Community Discussion
The Kai Project maintains a QQ group for community discussion about exam solutions and your experience with the exam, or let us know if the answers are wrong via GitHub issues!

[QQ Group: 925154731](https://qm.qq.com/q/MVPd9wniQU)

Feedback received through community discussions may be incorporated into the repository by maintainers or used to guide future contributions.

# ©️ License and Copyright
All code contributions to the Kai Project are subject to the GNU Affero General Public License v3.0.

In addition, exam question copyright belongs to the respective schools/institutions

The project acknowledges all contributors in maintaining and expanding this knowledge base.

If you believe any content infringes on your rights, please contact the project maintainers immediately.

# ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)