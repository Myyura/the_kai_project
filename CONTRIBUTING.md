# Development and Contribution Guide

<p align="center">
  <a href="./CONTRIBUTING.md">English</a> | <a href="./CONTRIBUTING.zh.md">中文</a> | <a href="./CONTRIBUTING.ja.md">日本語</a>
</p>

[← Back to the project overview](./README.md)

This guide covers local development, account and API configuration, and the workflows and formatting rules for contributing to The Kai Project.

## 🛠️ Local Development

### Requirements

- Node.js `>=20`
- Yarn `>=1.22.0`

### Run locally

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

### Helper scripts

Useful repository scripts:

```bash
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

- `yarn generate:universities`: regenerate `src/data/universities.js` after changing the `docs/` directory structure or `_category_.json` labels.
- `yarn generate:site-stats`: regenerate `src/data/siteStats.json` and `src/data/documentTitles.json` from the same local content scan used by API generation; development and production builds run it automatically.
- `yarn generate:contributors`: refresh `src/data/githubContributors.json` from GitHub while retaining the existing cache if the network request fails.
- `yarn tags:generate`: regenerate `docs/tags.yml` from the subject files under `src/data/tagTaxonomy/`.
- `yarn content:validate`: validate document identities, generated tag metadata, normalized Description sections, and structured data under `src/data/`, including links, university metadata, site statistics, document titles, and the tag taxonomy.
- `yarn tags:audit`: summarize site-wide school, subject, subsubject, topic, pending, and deprecated tag usage.
- `yarn documents:validate`: validate automatically derived document UUIDs and the current overrides / historical aliases stored only for renamed paths.
- `yarn content:export`: generate the complete client-sync snapshot at `build/content-export/v1/kai-content-v1.json.gz`; see [CONTENT_EXPORT.md](CONTENT_EXPORT.md) for its contract and import rules.
- `yarn review:format`: review answer-document formatting under `docs/` before opening a PR.
- `yarn api:validate`: validate the structured data used by the public JSON API.

Test files under `scripts/*.test.js` and audit reports under `audits/` are kept locally and are not tracked in Git. CI does not run `yarn test`; maintainers who retain local test files can still use this command locally.

Contributor-editable content data lives under `src/data/`: `links.json`, `universityMetadata.json`, and the `tagTaxonomy/` directory. Tag definitions are split by primary subject under `tagTaxonomy/subjects/`; global policy and school tags live alongside them. Ordinary new documents derive UUIDv5 directly from `docId` and require no identity-manifest update. Only a move or rename requires `yarn documents:move -- <old-doc-id> <new-doc-id>`. Development and production builds refresh `siteStats.json` and `documentTitles.json` automatically; the other generated files can be maintained with the scripts above.

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
5. To enable website submissions, deploy `supabase/functions/content-submissions` and configure `CONTENT_BOT_TOKEN`, `CLA_ATTESTATION_SECRET`, and `CONTENT_SUBMISSION_CALLBACK_SECRET`; contribution authors are resolved from confirmed public profiles rather than request data.
6. Verify nickname and private problem-set RPCs with test accounts, then rebuild with `PROBLEM_SETS_ENABLED=true`.

## Developer JSON API

Registered users can request JSON API access from the Personal Center. After a project maintainer approves the request, the user can create an API key and read exam and answer data. API keys are shown only once when created; the database stores only SHA-256 hashes.

### For registered users

1. Log in on the website and open Personal Center → Developer API, or go directly to `/me?tab=developer-api`.
2. Submit an API access request. Intended use is optional; if the use involves an organization, bulk reuse, or commercial integration, please describe it in the request.
3. Wait for project maintainer review. Once approved, the page will allow API key creation.
4. Create an API key and save the `kai_live_...` value immediately.
5. Call the content API with `Authorization: Bearer kai_live_...`. The content API does not accept anonymous requests or login JWTs.

Available endpoints:

- `GET /v1/catalog`: returns universities, departments, programs, years, and document counts.
- `GET /v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content`: queries exam documents; `include=content` returns markdown content.
- `GET /v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache`: filters by the derived learning taxonomy.
- `GET /v1/exams/{doc_id}`: returns one document by ID.

Exam rows include an immutable `documentUuid`, the original frontmatter `tags`, and derived taxonomy fields: `schoolTags`, `learningTags`, `subjectIds`, `subsubjectIds`, and `topicIds`. Ordinary new documents derive their UUID from the fixed namespace and `docId` without registration. When a path changes, run `yarn documents:move -- <old-doc-id> <new-doc-id>`; it stores only the rename exception and old-path alias in `documentIdentityOverrides.json`, so saved progress, notes, votes, and problem-set items keep the same identity. Topic IDs are namespaced as `Subject.Subsubject.Topic`; `learningTags` identifies whether each learning tag is a `subsubject`, concrete `topic`, or pending tag, and topic entries include `short_id`.

Examples:

```bash
curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/catalog"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache"
```

Successful responses include `apiVersion`, `sourceUrl`, `license`, and `contentNotice`; error responses return an `error` object with a code and message. Core public content remains openly accessible; API access, bulk reuse, redistribution, commercial integration, and other uses beyond ordinary browsing and personal study are subject to the project's separately published content/API terms, and users are responsible for obtaining any necessary permissions from the relevant rights holders.

### For project maintainers

The project exposes exam data through Supabase Edge Functions while reusing the existing login system as the developer identity layer.

1. Apply [src/services/schema.sql](src/services/schema.sql) once only for a blank database; it already contains the complete current structure. Never reapply the baseline to an existing database. Existing production projects whose three 20260718 migrations were squashed should run the [baseline finalization SQL](supabase/manual/20260718_finalize_consolidated_baseline.sql) once before adding another migration.
2. Deploy the functions in [supabase/functions](supabase/functions). Production GitHub Actions uses `SUPABASE_ACCESS_TOKEN` and `SUPABASE_PROJECT_REF` for function deployment; `SUPABASE_DB_PASSWORD` is additionally required only when a new database migration exists:

```bash
npx supabase functions deploy developer-api-keys --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy kai-api --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy content-submissions --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy agent-session --project-ref "$SUPABASE_PROJECT_REF"
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

After document paths have moved, you may run the [doc_id canonicalization SQL](supabase/manual/20260719_canonicalize_document_doc_ids.sql) manually in Supabase SQL Editor during a low-traffic maintenance window. Take a backup and complete `yarn catalog:sync` first. The repeatable script rewrites legacy `doc_id` snapshots in application tables to `document_registry.current_doc_id` while preserving UUIDs, user rows, timestamps, note versions, and all historical aliases. Every final `stale_row_count` should be `0`.

4. Keep `verify_jwt = false` for all five functions as configured in [supabase/config.toml](supabase/config.toml); each function performs its own API-key, login-token, callback-secret, or JWK verification. Configure `API_LOG_SALT` for `kai-api`. Website submissions additionally require the GitHub, CLA-attestation, and callback secrets used by `content-submissions`; the Agent bridge requires its service URL and JWK secrets before it is enabled.
5. Review requests in the `api_access_requests` table from the Supabase Dashboard: set `status` to `approved` to allow key creation, or use `rejected` / `revoked` to deny or pause access.

The current default gives approved users a baseline access configuration of `60 requests/minute` and up to `3` active keys; maintainers can adjust the access configuration stored on each request. `api_access_requests` and `api_keys` reserve fields such as `plan` and `commercial_allowed` for partner access, institutional scenarios, and tiered quota management.

## 👏 Contribution

The project encourages community contributions through multiple channels:

- GitHub Pull Requests: For contributors familiar with Git
- Website Submissions: For signed-in users submitting a new solution or correcting an existing one
- Email Submissions: For users who prefer to send content via email
- Community Discussion: Discuss exam solutions and preparation experience via Discord or the QQ group, or report incorrect answers through GitHub Issues

Contributions merged into the public exam archive and public solution library become part of The Kai Project's core public content and are intended to remain openly accessible. Sustainable operation around learning tools, data APIs, tutoring support, or partner integrations does not change the open-access nature of these accepted core public contributions.

Signed-in users can open Personal Center → Submissions, or `/me?tab=contribute`, to submit a new solution or start a correction from the relevant problem page. The form records CLA acceptance in a signed payload and creates a public GitHub Issue. After a maintainer reviews the content and adds the `submission:ready-for-pr` label, the [submission-to-PR workflow](.github/workflows/submission-issue-to-pr.yml) verifies that payload and creates a draft pull request.

All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

### 📝 Formatting guidelines

All answer-document contributions under `docs/` should follow a consistent structure.

#### Exam answer documents

Each answer markdown document should look like this:

```markdown
---
sidebar_label: 'Title displayed in sidebar'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Grand-Canonical-Ideal-Gas
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

- Prefer existing canonical subsubject IDs and namespaced topic IDs from the [subject taxonomy files](src/data/tagTaxonomy/subjects). Top-level subject tags are invalid frontmatter tags. Legacy topic aliases are deprecated and trigger warnings; replace them with their canonical namespaced IDs.
- When a concrete topic is present, do not also add its parent subsubject; the formatter treats that pair as redundant.
- Subject associations in the taxonomy should be strong associations found in actual problem content, not broad theoretical overlap.
- School tags remain compatible, but the site primarily derives school metadata from the first two directory levels under `docs/`.
- Correct new subsubject or topic tags are allowed; `yarn review:format` reports them as warnings instead of blocking the PR.
- Tags missing from the current taxonomy are reported as new tags so contributors can check their spelling or request review.
- If a document only has a school tag and no learning tag, the formatter reports a warning. If it has only a subsubject tag, the formatter suggests adding a more concrete topic when the problem statement has enough signal.

Before opening a PR, please run:

```bash
yarn review:format
yarn tags:audit
```

#### Blog posts

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

#### File naming and location conventions

New files should follow the existing structure for the target university:

1. Base directory: `docs/`
2. Typical hierarchy: `university/graduate-school-or-department/[program-or-track/...]/academic-year/`. The program segment is optional and may contain multiple levels; follow nearby files and `_category_.json` labels.
3. Use a stable, descriptive filename, typically including the exam date or year, subject or section, and question number.

```text
docs/
├── <university>/
│   ├── <graduate-school-or-department>/
│   │   ├── [<program-or-track>/...]
│   │   │   ├── <academic-year>/
│   │   │   │   └── <exam_file>.md
blog/
├── <blog_post>.md
```

Example:

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

This corresponds to:

- University: The University of Tokyo (`tokyo-university`)
- Graduate school: Graduate School of Engineering (`engineering`)
- Program: Department of Applied Physics (`ap`)
- Academic year: `2020`
- Exam year and month: `201908`
- Subject: Physics
- Question number: `3`

### 📧 Email submissions

For contributors who are not familiar with Git, the project accepts contributions via email.

Steps for email submission:

1. Prepare your content following the formatting guidelines above.
2. Please read our [Contributor License Agreement (CLA)](CLA.md).
3. Send your content to the project email address: **376672994@qq.com**.
4. Include the following statement in your email body: *"I have read and agree to The Kai Project CLA."*
5. Project maintainers will review your submission and add it to the repository if approved.

### 📝 CLA signing

Before we can merge your contributions, you must sign our [Contributor License Agreement (CLA)](CLA.md).

**For website submissions:**

The submission form requires you to confirm the CLA before sending content. That confirmation is stored in the signed GitHub Issue payload and verified before an approved submission is converted into a draft pull request.

**For GitHub users (Pull Requests):**

The PR author should include this signature statement in the pull request description:

```text
I have read and agree to The Kai Project CLA.
```

Project maintainers verify the statement during review before merging the pull request.

**For non-GitHub users (Email submissions):**

As mentioned above, include the statement *"I have read and agree to The Kai Project CLA."* in the email body.
