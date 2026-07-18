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
The Kai Project is an open-source platform for Japanese graduate school entrance exam archives, public solutions, and preparation experience. Signed-in users can also track progress, take notes, and manage private study data stored directly in the project database.

```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

Project website: [Japanese graduate school entrance exam answers](https://runjp.com/)

## Open Source and Sustainable Operation

The Kai Project is built around an open-source project and a public study archive. Community-maintained exam indexes, public solutions, study materials, and related documentation form the project's core public content and are intended to remain openly accessible to learners.

To support long-term maintenance, technical services, and community operations, the project may explore sustainable operation around learning tools, account features, data APIs, tutoring support, or partner integrations. These supporting services or partnership arrangements do not change the open-access nature of the core public content.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="700" alt=""/>
</figure>

# ✨ Features
- Open past-exam and solution database across multiple universities and departments
- Exam-experience blog posts and preparation write-ups
- Per-question progress tracking with review reminders and a progress dashboard
- Built-in Markdown/LaTeX notes plus selectable inline annotations with highlighting, quick navigation, and editing
- Account-based progress, private problem sets, public nicknames, and a practice leaderboard powered by Supabase
- Local search and share-as-image for answer pages; web document reading requires a network connection

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
yarn generate:site-stats
yarn tags:generate
yarn content:validate
yarn tags:audit
yarn documents:validate
yarn review:format
yarn api:validate
```

- `yarn generate:universities`: regenerate `src/data/universities.js` after changing the `docs/` directory structure or `_category_.json` labels.
- `yarn generate:site-stats`: regenerate `src/data/siteStats.json` from the same scan used by the public JSON API.
- `yarn tags:generate`: regenerate `docs/tags.yml` from the subject files under `src/data/tagTaxonomy/`.
- `yarn content:validate`: validate contributor-editable JSON data under `src/data/`, including links, university metadata, and the tag taxonomy.
- `yarn tags:audit`: summarize site-wide school, subject, subsubject, topic, pending, and deprecated tag usage.
- `yarn documents:validate`: validate immutable document UUIDs and historical path aliases.
- `yarn review:format`: review answer-document formatting under `docs/` before opening a PR.
- `yarn api:validate`: validate the structured data used by the public JSON API.

Contributor-editable content data lives under `src/data/`: `links.json`, `universityMetadata.json`, and the `tagTaxonomy/` directory. Tag definitions are split by primary subject under `tagTaxonomy/subjects/`; global policy and school tags live alongside them. The generated `universities.js`, `siteStats.json`, and `docs/tags.yml` files should be refreshed with the scripts above.

## Account and database configuration
Public content remains readable without Supabase credentials. Account-only features such as progress, notes, annotations, private problem sets, and the leaderboard require the following configuration; those records are written directly to the database and anonymous study data is not supported.

```bash
export SUPABASE_URL="https://your-project.supabase.co"
export SUPABASE_ANON_KEY="your-anon-key"
export HCAPTCHA_SITE_KEY="your-hcaptcha-site-key"
export PROBLEM_SETS_ENABLED="true"
```

- `SUPABASE_URL` and `SUPABASE_ANON_KEY` enable authentication and account data.
- `HCAPTCHA_SITE_KEY` is optional but recommended for abuse protection on the login/register page.
- `PROBLEM_SETS_ENABLED` is a release flag. It must be exactly `true` to expose private problem-set UI; leave it unset until the latest schema is deployed and verified.

To enable account features end-to-end:
1. Create a Supabase project. For a blank project, apply `src/services/schema.sql` once as the baseline; do not reapply it to an existing database.
2. The current baseline has no pending historical migrations. Future schema changes will be added under `supabase/migrations/` and applied by the deployment workflow.
3. Configure the auth security items noted in that SQL file, including rate limits, password policy, and hCaptcha.
4. Add the site callback URLs in Supabase Authentication → URL Configuration, including `https://your-domain/auth/callback` and `https://your-domain/reset-password`.
5. Deploy `supabase/functions/content-submissions` so contribution authors are read from the unified public profile instead of request data.
6. Verify nickname and private problem-set RPCs with test accounts, then rebuild with `PROBLEM_SETS_ENABLED=true`.

## Developer JSON API
Registered users can request JSON API access in the developer center. After a project maintainer approves the request, the user can create an API key and read exam and answer data. API keys are shown only once when created; the database stores only SHA-256 hashes.

### For registered users
1. Log in on the website and open `/developers`, then enter the JSON API feature. You can also open `/developers/api` directly.
2. Submit an API access request. Intended use is optional; if the use involves an organization, bulk reuse, or commercial integration, please describe it in the request.
3. Wait for project maintainer review. Once approved, the page will allow API key creation.
4. Create an API key and save the `kai_live_...` value immediately.
5. Call the content API with `Authorization: Bearer kai_live_...`. The content API does not accept anonymous requests or login JWTs.

Available endpoints:

- `GET /v1/catalog`: returns universities, departments, programs, years, and document counts.
- `GET /v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content`: queries exam documents; `include=content` returns markdown content.
- `GET /v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache`: filters by the derived learning taxonomy.
- `GET /v1/exams/{doc_id}`: returns one document by ID.

Exam rows include an immutable `documentUuid`, the original frontmatter `tags`, and derived taxonomy fields: `schoolTags`, `learningTags`, `subjectIds`, `subsubjectIds`, and `topicIds`. When a document path changes, run `yarn documents:move -- <old-doc-id> <new-doc-id>` so saved progress, notes, votes, and problem-set items keep the same identity. Topic IDs are namespaced as `Subject.Subsubject.Topic`; `learningTags` identifies whether each learning tag is a `subsubject`, concrete `topic`, or pending tag, and topic entries include `short_id`.

Examples:

```bash
curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/catalog"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache"
```

Responses always include `apiVersion`, `sourceUrl`, `license`, and `contentNotice`. Core public content remains openly accessible; API access, bulk reuse, redistribution, commercial integration, and other uses beyond ordinary browsing and personal study are subject to the project's separately published content/API terms, and users are responsible for obtaining any necessary permissions from the relevant rights holders.

### For project maintainers
The project exposes exam data through Supabase Edge Functions while reusing the existing login system as the developer identity layer.

1. Apply [src/services/schema.sql](src/services/schema.sql) once only for a blank database; it already contains the complete current structure. Never reapply the baseline to an existing database. Existing production projects whose three 20260718 migrations were squashed should run the [baseline finalization SQL](supabase/manual/20260718_finalize_consolidated_baseline.sql) once before adding another migration.
2. Deploy the functions in [supabase/functions](supabase/functions). Production GitHub Actions uses `SUPABASE_ACCESS_TOKEN` and `SUPABASE_PROJECT_REF` for function deployment; `SUPABASE_DB_PASSWORD` is additionally required only when a new database migration exists:

```bash
npx supabase functions deploy developer-api-keys --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy kai-api --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy agent-context --project-ref "$SUPABASE_PROJECT_REF"
```

`kai-api` and `agent-context` share the static body loader in `supabase/functions/_shared/published-content.ts`. The Supabase CLI and GitHub Actions bundle it automatically, so there is no file to copy and no function to update manually in the Dashboard.

3. Markdown bodies are not mirrored into PostgreSQL; the build publishes them by stable UUID under `/api-content/v1/documents/`. GitHub Actions does not store `SUPABASE_SERVICE_ROLE_KEY`. After deployment, a maintainer temporarily supplies the key in a trusted local terminal and syncs identities plus the lightweight catalog only:

```bash
printf 'Supabase service-role key: '
IFS= read -r -s SUPABASE_SERVICE_ROLE_KEY
printf '\n'
export SUPABASE_SERVICE_ROLE_KEY
SUPABASE_URL="https://your-project.supabase.co" yarn catalog:sync
unset SUPABASE_SERVICE_ROLE_KEY
```

This command upserts UUIDs, paths, titles, links, tags, taxonomy, and content hashes, then prunes stale `document_catalog` rows. It never uploads Markdown or modifies notes, progress, problem sets, or any other user table. The JSON API and Agent fetch bodies from the static JSON published with the website.
This input method keeps the key out of shell history; never commit it or store it in GitHub Actions for this workflow.

4. Confirm the Supabase Function secrets include `API_LOG_SALT`, and disable JWT verification for both functions.
5. Review requests in the `api_access_requests` table from the Supabase Dashboard: set `status` to `approved` to allow key creation, or use `rejected` / `revoked` to deny or pause access.

The first version gives all approved users the same baseline access configuration: `60 requests/minute` and up to `3` active keys. `api_access_requests` and `api_keys` already reserve fields such as `plan` and `commercial_allowed` for future partner access, institutional scenarios, and tiered quota management.

# 👏 Contribution
The project encourages community contributions through multiple channels:
- Git Pull Requests: For contributors familiar with Git
- Email Submissions: For users who prefer to send content via email
- Community Discussion: Discuss exam solutions and preparation experience via Discord or the QQ group, or report incorrect answers through GitHub issues!

Contributions merged into the public exam archive and public solution library become part of The Kai Project's core public content and are intended to remain openly accessible. Sustainable operation around learning tools, data APIs, tutoring support, or partner integrations does not change the open-access nature of these accepted core public contributions.

## 📝 Formatting guidelines
All answer-document contributions under `docs/` should follow a consistent structure.

### Exam answer documents
Each answer markdown document should look like this:

```markdown
---
sidebar_label: 'Title displayed in sidebar'
tags:
  - Tokyo-University
  - Subsubject-Tag
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

Tag rules:
- Prefer existing canonical subsubject IDs and namespaced topic IDs from the [subject taxonomy files](src/data/tagTaxonomy/subjects). Top-level subject tags and legacy short topic tags are not valid frontmatter tags.
- Subject associations in the taxonomy should be strong associations found in actual problem content, not broad theoretical overlap.
- School tags remain compatible, but the site primarily derives school metadata from the `docs/school/department/...` path.
- Correct new subsubject or topic tags are allowed; `yarn review:format` reports them as warnings instead of blocking the PR.
- Tags missing from the current taxonomy are reported as new tags so contributors can check their spelling or request review.
- If a document only has a school tag and no learning tag, the formatter reports a warning. If it has only a subsubject tag, the formatter suggests adding a more concrete topic when the problem statement has enough signal.

Before opening a PR, please run:

```bash
yarn review:format
yarn tags:audit
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
CLA signing is now checked automatically by the workflow in this repository: [.github/workflows/cla-check.yml](.github/workflows/cla-check.yml).

After opening a PR, please add a signature statement in any one of these places (by the PR author):
- PR description
- PR conversation comment
- PR review comment

Accepted statements:

```text
I have read the CLA Document and I sign the CLA
```

```text
I have read and agree to The Kai Project CLA.
```

If no statement is detected, the `CLA 检查` workflow will fail and leave a reminder comment. Once a valid statement is added, the check will pass automatically.

**For non-GitHub users (Email submissions):**
As mentioned above, include the statement *"I have read and agree to The Kai Project CLA."* in the email body.

# 💬 Community Discussion
Join The Kai Project community on Discord or QQ to discuss exam solutions, share preparation experience, and provide feedback. You can also report incorrect answers through GitHub issues.

[Discord](https://discord.gg/VcUHXzB9Mk)

[QQ Group: 925154731](https://qm.qq.com/q/MVPd9wniQU)

Feedback received through community discussions may be incorporated into the repository by maintainers or used to guide future contributions.

# ©️ License and Copyright
All code contributions to The Kai Project are subject to the GNU Affero General Public License v3.0.

Public solution, study-material, and documentation contributions are governed by the [Contributor License Agreement (CLA)](CLA.md). The project keeps core public content accessible as part of its open-source public archive while preserving room for long-term operation around supporting tools, APIs, service support, and partnership scenarios.

In addition, exam question copyright belongs to the respective schools/institutions.

The Kai Project acknowledges all contributors in maintaining and expanding this knowledge base.

If you believe any content infringes on your rights, please contact the project maintainers immediately.

# ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)
