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

# 📖 Introduction
The Kai Project is an open-source platform for sharing Japanese graduate school entrance exam questions, solutions, and preparation experience. In addition to the content library itself, the site now includes study tools that help users track progress, take notes, and sync practice records across devices.

```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

Project website: [Japanese graduate school entrance exam answers](https://runjp.com/)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="700" alt=""/>
</figure>

# ✨ Features
- Open past-exam and solution database across multiple universities and departments
- Exam-experience blog posts and preparation write-ups
- Per-question progress tracking with review reminders and a progress dashboard
- Built-in notes on each question page with Markdown and LaTeX support
- Optional login, cloud sync, and weekly leaderboard powered by Supabase
- Local search, PWA/offline support, and share-as-image for answer pages

# 🛠️ Local Development
## Requirements
- Node.js `>=20`
- Yarn `>=1.22.0`

## Run locally
Install dependencies and start the development server:

```bash
yarn install
yarn dev
```

Then open `http://localhost:3000`.

To build and preview the production bundle locally:

```bash
yarn build
yarn serve
```

## Helper scripts
Useful repository scripts:

```bash
yarn generate:universities
yarn review:format
```

- `yarn generate:universities`: regenerate `src/data/universities.js` after changing the `docs/` directory structure or `_category_.json` labels.
- `yarn review:format`: review answer-document formatting under `docs/` before opening a PR.

## Optional cloud sync configuration
The site works without any cloud credentials: documentation pages, blog posts, local progress tracking, and local notes still work. If the environment variables below are not set, login, cloud sync, and the leaderboard are unavailable.

```bash
export SUPABASE_URL="https://your-project.supabase.co"
export SUPABASE_ANON_KEY="your-anon-key"
export HCAPTCHA_SITE_KEY="your-hcaptcha-site-key"
```

- `SUPABASE_URL` and `SUPABASE_ANON_KEY` enable authentication and cloud sync.
- `HCAPTCHA_SITE_KEY` is optional but recommended for abuse protection on the login/register page.

If you want to enable cloud sync end-to-end:
1. Create a Supabase project.
2. Run [src/services/schema.sql](src/services/schema.sql) in the Supabase SQL editor.
3. Configure the auth security items noted in that SQL file, including rate limits, password policy, and hCaptcha.

# 👏 Contribution
The project encourages community contributions through multiple channels:
- Git Pull Requests: For contributors familiar with Git
- Email Submissions: For users who prefer to send content via email
- Community Discussion: Discuss the answers to the questions and your experience with the exam via the QQ group, or let us know if the answers are wrong via GitHub issues!

## 📝 Formatting guidelines
All answer-document contributions under `docs/` should follow a consistent structure.

### Exam answer documents
Each answer markdown document should look like this:

```markdown
---
sidebar_label: 'Title displayed in sidebar'
tags:
  - Tokyo-University
  - Topic-Tag
---

# Full page title

## **Author**
[Your Name](https://example.com)

## **Description**
Problem statement, transcription, or a short summary of the question.

## **Kai**
Your solution, derivation, explanation, or notes.
```

Rules enforced by the repository formatter:
- `sidebar_label` is required.
- `tags` is required.
- The first non-empty line after frontmatter must be an H1 title.
- `## **Author**` is required.
- `## **Description**` and `## **Kai**` are optional individually, but at least one of them must exist.
- If both are present, keep the order `Author` → `Description` → `Kai`.

Before opening a PR, please run:

```bash
yarn review:format
```

### Blog posts
Blog posts should use author IDs defined in [blog/authors.yml](blog/authors.yml), not inline author objects.

1. Add a new author entry to [blog/authors.yml](blog/authors.yml), or reuse an existing one.
2. Reference that author ID in the post frontmatter.

Example:

```markdown
---
title: Post title
authors: yourAuthorId
tags: [Tag1, Tag2]
---
```

For reference, existing posts such as [blog/2025-04-02-furry.md](blog/2025-04-02-furry.md) and [blog/2025-07-10-unagoya.md](blog/2025-07-10-unagoya.md) already use author IDs.

### File naming and location conventions
Files must be placed in the correct directory structure and follow naming conventions:

1. Base directory: `docs/`
2. Hierarchy: `school/department/major/academic year/`
3. Filename: should indicate the specific content details (school abbreviation, exam year/month, subject, question number)

```text
docs/
├── <university>/
│   ├── <department>/
│   │   ├── <specialization>/
│   │   │   ├── <academic year>/
│   │   │   │   └── <exam_file>.md
blog/
├── <blog_post>.md
```

Example:

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

This corresponds to:
- School: Tokyo University
- Department: Engineering
- Major: Applied Physics (`ap`)
- Year and month of the exam: `201908`
- Subject: Physics
- Question number: `3`

## 📧 Email submissions
For contributors who are not familiar with Git, the project accepts contributions via email.

Steps for email submission:
1. Prepare your content following the formatting guidelines above.
2. Please read our [Contributor License Agreement (CLA)](CLA.md).
3. Send your content to the project email address: **376672994@qq.com**.
4. Include the following statement in your email body: *"I have read and agree to The Kai Project CLA."*
5. Project maintainers will review your submission and add it to the repository if approved.

## 📝 CLA signing
Before we can merge your contributions, you must sign our [Contributor License Agreement (CLA)](CLA.md).

**For GitHub users (Pull Requests):**
The current CLA flow appears to be handled by a GitHub-side assistant/bot rather than by a workflow stored in this repository. After opening a PR, please follow the instructions shown in the PR conversation. If the bot asks for a signature comment, use the statement requested there. One statement that has been used for this repository is:

```text
I have read the CLA Document and I sign the CLA
```

**For non-GitHub users (Email submissions):**
As mentioned above, include the statement *"I have read and agree to The Kai Project CLA."* in the email body.

# 💬 Community Discussion
The Kai Project maintains a QQ group for community discussion about exam solutions and your experience with the exam, or let us know if the answers are wrong via GitHub issues!

[QQ Group: 925154731](https://qm.qq.com/q/MVPd9wniQU)

Feedback received through community discussions may be incorporated into the repository by maintainers or used to guide future contributions.

# ©️ License and Copyright
All code contributions to The Kai Project are subject to the GNU Affero General Public License v3.0.

In addition, exam question copyright belongs to the respective schools/institutions.

The Kai Project acknowledges all contributors in maintaining and expanding this knowledge base.

If you believe any content infringes on your rights, please contact the project maintainers immediately.

# ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)
