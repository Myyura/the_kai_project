# 開発・貢献ガイド

<p align="center">
  <a href="./CONTRIBUTING.md">English</a> | <a href="./CONTRIBUTING.zh.md">中文</a> | <a href="./CONTRIBUTING.ja.md">日本語</a>
</p>

[← 日本語 README に戻る](./README.ja.md)

この文書では、ローカル開発環境の構築、アカウントとデータベースの設定、開発者向け JSON API、およびコンテンツやコードへの貢献方法を説明します。

## 🛠️ ローカル開発
### 必要環境
- Node.js `>=20`
- Yarn `>=1.22.0`

### ローカル起動
依存関係をインストールして開発サーバーを起動します。

```bash
yarn install
yarn dev
```

その後、`http://localhost:3000` を開いてください。

本番ビルドをローカルで確認する場合：

```bash
yarn build
yarn serve
```

### 便利なスクリプト

```bash
yarn generate:universities
yarn generate:site-stats
yarn generate:contributors
yarn tags:generate
yarn test
yarn content:validate
yarn tags:audit
yarn documents:validate
yarn content:export
yarn review:format
yarn api:validate
```

- `yarn generate:universities`：`docs/` の構成や `_category_.json` を変更したあと、`src/data/universities.js` を再生成します。
- `yarn generate:site-stats`：API データ生成と同じローカルコンテンツスキャンから `src/data/siteStats.json` と `src/data/documentTitles.json` を再生成します。開発サーバーと本番ビルドでは自動実行されます。
- `yarn generate:contributors`：GitHub から `src/data/githubContributors.json` を更新します。ネットワーク取得に失敗した場合は既存キャッシュを保持します。
- `yarn tags:generate`：`src/data/tagTaxonomy/` の科目別ファイルから `docs/tags.yml` を再生成します。
- `yarn test`：リポジトリの自動テストを実行します。
- `yarn content:validate`：文書 ID、生成タグ、Description セクションの正規化状態、および `src/data/` 配下の構造化データ（リンク、大学メタデータ、サイト統計、文書タイトル、タグ分類）を検証します。
- `yarn tags:audit`：サイト全体の大学、大科目、サブ科目、トピック、未分類、廃止タグの使用状況を確認します。
- `yarn documents:validate`：自動導出される文書 UUID と、パス変更時だけ保存される current override と過去の alias を検証します。
- `yarn content:export`：独立クライアント同期用の完全スナップショット `build/content-export/v1/kai-content-v1.json.gz` を生成します。仕様と同期ルールは [CONTENT_EXPORT.md](CONTENT_EXPORT.md) を参照してください。
- `yarn review:format`：`docs/` 配下の解答ドキュメント形式をレビューします。
- `yarn api:validate`：公開 JSON API 用の構造化データを検証します。

コントリビューターが編集するコンテンツデータは `src/data/` の `links.json`、`universityMetadata.json`、`tagTaxonomy/` にあります。タグ定義は `tagTaxonomy/subjects/` に主科目別で保存し、全体設定と大学タグは同階層のファイルで管理します。通常の新規文書は `docId` から UUIDv5 を自動導出するため、ID マニフェストの更新は不要です。移動・改名時だけ `yarn documents:move -- <旧-doc-id> <新-doc-id>` を実行します。`siteStats.json` と `documentTitles.json` は開発・ビルド時に自動更新され、その他の生成ファイルは上記スクリプトで管理できます。

## アカウントとデータベースの設定
Supabase の環境変数がなくても公開コンテンツは閲覧できます。進捗、ノート、本文注釈、非公開問題セット、ランキングはログインユーザー専用で、データベースへ直接保存されます。匿名の学習データには対応しません。

```bash
export SUPABASE_URL="https://your-project.supabase.co"
export SUPABASE_ANON_KEY="your-anon-key"
export HCAPTCHA_SITE_KEY="your-hcaptcha-site-key"
export PROBLEM_SETS_ENABLED="true"
```

- `SUPABASE_URL` と `SUPABASE_ANON_KEY` は認証とアカウントデータに使用されます。
- `HCAPTCHA_SITE_KEY` は任意ですが、ログイン / 新規登録ページの不正利用対策として推奨です。
- `PROBLEM_SETS_ENABLED` はリリースフラグです。値が厳密に `true` の場合だけ非公開問題セット UI を表示します。最新のデータベース構造をデプロイして検証するまでは設定しないでください。

アカウント機能を有効にする場合：
1. Supabase プロジェクトを作成します。空の新規データベースでは、最初に `src/services/schema.sql` を一度だけベースラインとして適用します。既存データベースには再適用しないでください。
2. 現在のベースラインに未適用の履歴マイグレーションはありません。今後の構造変更だけを `supabase/migrations/` に追加し、デプロイ処理で適用します。
3. その SQL ファイルに書かれている認証レート制限、パスワードポリシー、hCaptcha などの設定を行います。
4. Supabase Authentication → URL Configuration に、`https://your-domain/auth/callback` と `https://your-domain/reset-password` を含むサイトのコールバック URL を追加します。
5. サイト内投稿を有効にする場合は、`supabase/functions/content-submissions` をデプロイし、`CONTENT_BOT_TOKEN`、`CLA_ATTESTATION_SECRET`、`CONTENT_SUBMISSION_CALLBACK_SECRET` を設定します。投稿者名はリクエスト値ではなく、確認済みの公開ニックネームから取得されます。
6. テストアカウントで公開ニックネームと非公開問題セットの RPC を確認し、`PROBLEM_SETS_ENABLED=true` で再ビルドします。

## 開発者向け JSON API
登録ユーザーはマイページで JSON API アクセスを申請できます。プロジェクトメンテナーの承認後、API キーを作成して過去問と解答データを取得できます。API キーの平文は作成時に一度だけ表示されます。データベースには SHA-256 ハッシュ値のみ保存されます。

### 登録ユーザー向けの使い方
1. Web サイトにログインし、「マイページ → 開発者 API」を開くか、`/me?tab=developer-api` に直接アクセスします。
2. API アクセスを申請します。利用目的は任意項目です。組織での利用、一括再利用、商用連携を含む場合は、申請内容にその旨を記載してください。
3. プロジェクトメンテナーの審査を待ちます。承認後、このページで API キーを作成できます。
4. API キーを作成し、`kai_live_...` の値をすぐに保存します。
5. `Authorization: Bearer kai_live_...` を付けて Content API を呼び出します。Content API は匿名リクエストやログイン JWT を受け付けません。

利用できるエンドポイント：

- `GET /v1/catalog`：大学、研究科、専攻、年度、ドキュメント数を返します。
- `GET /v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content`：条件に合う過去問を検索します。`include=content` を付けると Markdown 本文も返します。
- `GET /v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache`：派生した学習用の分類体系で検索します。
- `GET /v1/exams/{doc_id}`：ドキュメント ID で 1 件取得します。

過去問レスポンスにはパス変更の影響を受けない `documentUuid`、frontmatter の元の `tags`、派生フィールド `schoolTags`、`learningTags`、`subjectIds`、`subsubjectIds`、`topicIds` が含まれます。通常の新規文書 UUID は固定の namespace と `docId` から自動導出され、登録作業は不要です。パスを移動するときは `yarn documents:move -- <旧-doc-id> <新-doc-id>` を実行してください。このコマンドは `documentIdentityOverrides.json` に改名例外と旧パスの alias だけを保存し、進捗、ノート、難易度投票、問題セットを同じ内容に結び付けたままにします。トピック ID は `Subject.Subsubject.Topic` 形式です。`learningTags` は各学習タグが `subsubject`、具体的な `topic`、または未分類タグのどれかを示し、`topic` 項目には `short_id` も含まれます。

呼び出し例：

```bash
curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/catalog"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache"
```

成功レスポンスには `apiVersion`、`sourceUrl`、`license`、`contentNotice` が含まれます。エラーレスポンスは `code` と `message` を持つ `error` オブジェクトを返します。中核的な公開コンテンツはオープンにアクセスできますが、API アクセス、一括再利用、再配布、商用連携、通常の閲覧や個人学習の範囲を超える利用については、プロジェクトが別途公表するコンテンツ/API 条項に従い、必要に応じて関連する権利者から適切な許諾を得る必要があります。

### プロジェクトメンテナー向けのデプロイ
このプロジェクトは既存のログインシステムを開発者向けの認証基盤として再利用し、Supabase Edge Functions から過去問と解答 JSON を提供します。

1. 空の新規データベースだけで [src/services/schema.sql](src/services/schema.sql) を一度実行してください。現在の完全な構造が含まれているため、既存データベースには再適用しないでください。20260718 の 3 つのマイグレーションをベースラインへ統合した既存の本番環境では、次のマイグレーションを追加する前に [ベースライン最終化 SQL](supabase/manual/20260718_finalize_consolidated_baseline.sql) を一度実行してください。
2. [supabase/functions](supabase/functions) の Edge Functions をデプロイします。本番 GitHub Actions は `SUPABASE_ACCESS_TOKEN` と `SUPABASE_PROJECT_REF` で関数をデプロイし、新しいデータベースマイグレーションがある場合だけ `SUPABASE_DB_PASSWORD` も必要です。

```bash
npx supabase functions deploy developer-api-keys --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy kai-api --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy content-submissions --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy agent-session --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy agent-context --project-ref "$SUPABASE_PROJECT_REF"
```

`kai-api` と `agent-context` は `supabase/functions/_shared/published-content.ts` の静的本文ローダーを共有します。Supabase CLI と GitHub Actions が自動的にバンドルするため、ファイルの手動コピーや Dashboard での個別更新は不要です。

3. Markdown 本文は PostgreSQL に複製せず、ビルド時に安定 UUID ごとの静的 JSON として `/api-content/v1/documents/` に公開します。GitHub Actions には `SUPABASE_SERVICE_ROLE_KEY` を保存しません。デプロイ成功後、メンテナーが信頼できるローカル端末で一時的にキーを設定し、文書 ID と軽量カタログだけを同期します。

```bash
printf 'Supabase service-role key: '
IFS= read -r -s SUPABASE_SERVICE_ROLE_KEY
printf '\n'
export SUPABASE_SERVICE_ROLE_KEY
SUPABASE_URL="https://your-project.supabase.co" yarn catalog:sync
unset SUPABASE_SERVICE_ROLE_KEY
```

このコマンドは UUID、パス、タイトル、リンク、タグ、分類、コンテンツハッシュだけを upsert し、不要になった `document_catalog` 行を削除します。Markdown、ノート、進捗、問題セットなどのユーザーデータは変更しません。JSON API と Agent は、Web サイトと一緒に公開された静的 JSON から本文を取得します。
この入力方法ではキーがシェル履歴に残りません。リポジトリや GitHub Actions には保存しないでください。

文書パスを移動した後は、アクセスの少ない保守時間帯に Supabase SQL Editor で [doc_id 正規化 SQL](supabase/manual/20260719_canonicalize_document_doc_ids.sql) を手動実行できます。事前にバックアップを取得し、`yarn catalog:sync` を完了してください。この再実行可能なスクリプトは、UUID、ユーザー行、タイムスタンプ、ノート版数、過去の alias をすべて保持したまま、各アプリケーションテーブルの旧 `doc_id` を `document_registry.current_doc_id` へ更新します。最後の `stale_row_count` はすべて `0` になる必要があります。

4. [supabase/config.toml](supabase/config.toml) の設定どおり、5 つの Edge Function すべてで `verify_jwt = false` を維持します。各関数は API キー、ログイントークン、コールバックシークレット、または JWK を独自に検証します。`kai-api` には `API_LOG_SALT` を設定し、サイト内投稿と Agent ブリッジ には、有効化前にそれぞれ GitHub、CLA、コールバック、または Agent/JWK 用のシークレット を設定してください。
5. Supabase Dashboard で `api_access_requests` テーブルの申請を確認します。`status` を `approved` に変更すると API キーの作成を許可できます。拒否または停止する場合は `rejected` / `revoked` を使います。

現在のデフォルト設定では、1 分あたり最大 `60` リクエスト、有効なキーは最大 `3` 個まで利用でき、メンテナーは申請レコードに保存されたアクセス設定を調整できます。`api_access_requests` と `api_keys` には、提携アクセス、機関利用、段階的なクォータ管理のために `plan`、`commercial_allowed` などのフィールドを用意しています。

## 👏 貢献方法
このプロジェクトでは、次の方法でコミュニティからの貢献を受け付けています。
- サイト内投稿：ログイン後に新規解答や既存解答の訂正を投稿する方向け
- GitHub の Pull Request：Git に慣れている方向け
- メール投稿：メールでの送信を希望する方向け
- コミュニティ議論：Discord または QQ グループで解答や受験体験を共有したり、GitHub Issues で誤りを知らせたりできます

サイト内投稿では、ログイン後にマイページの「投稿」または `/me?tab=contribute` から新規解答を送信できます。既存の解答ページから訂正を開始することもできます。各投稿は公開 GitHub Issue として作成され、メンテナーが内容を確認して `submission:ready-for-pr` ラベルを付けると、署名付き payload の検証後に Draft Pull Request が作成されます。

公開過去問アーカイブおよび公開解答ライブラリにマージされた貢献は、The Kai Project の中核的な公開コンテンツの一部として、継続的にオープンアクセス可能な形で提供されることを意図しています。学習ツール、データ API、学習支援、パートナー連携などに関する持続可能な運営は、受け入れ済みの中核的な公開貢献のオープンアクセス性を変更するものではありません。

すべての参加者は [行動規範](CODE_OF_CONDUCT.md) を遵守してください。

### 📝 フォーマットガイドライン
`docs/` 配下の解答ドキュメントは、できるだけ統一フォーマットで投稿してください。

#### 解答ドキュメント
各解答 Markdown 文書は、原則として次の構成にしてください。

```markdown
---
sidebar_label: 'サイドバーに表示されるタイトル'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Grand-Canonical-Ideal-Gas
---

# 完全なページタイトル

## **Author**
[あなたの名前](https://example.com)

## **Description**
問題文の要約、転記、または簡単な説明。

## **Kai**
解答、導出、解説、補足ノート。
```

リポジトリのフォーマット確認スクリプトは、次の規則を検証します。
- `sidebar_label` は必須
- `tags` は必須
- frontmatter の直後、最初の非空行は H1 であること
- `## **Author**` は必須
- `## **Description**` と `## **Kai**` は個別には任意だが、少なくともどちらか一方は必要
- 両方ある場合の順序は `Author` → `Description` → `Kai`

タグのルール：
- できるだけ [科目別のタグ定義ファイル](src/data/tagTaxonomy/subjects) の canonical サブ科目 ID と namespaced トピック ID を使ってください。大科目タグは frontmatter では無効です。旧形式の短いトピックエイリアスは互換性のため canonical ID に正規化されますが、非推奨として警告されます。
- 具体的なトピックを付けた場合は、親に当たるサブ科目タグを併記しないでください。フォーマッターはこの組み合わせを冗長と判定します。
- タグ分類で科目との関連を設定する際は、実際の問題内容に明確な関連がある場合に限り、広範な理論上の重なりだけを根拠にしないでください。
- 学校タグは互換性のため残しますが、サイトは主に `docs/<大学>/<研究科・学部>/...` の先頭 2 階層から大学・研究科情報を推定します。
- 正しい新しいサブ科目タグまたはトピックタグはそのまま提出できます。`yarn review:format` では警告として報告されますが、PR の提出は妨げません。
- 現在のタグ分類にないタグは新規タグとして警告され、スペル確認またはメンテナーによる確認を促します。
- 学校タグだけで学習タグがない文書は警告の対象になります。サブ科目タグだけの文書は、問題文から判断できる場合に具体的なトピックタグの追加が推奨されます。

PR を出す前に、次のコマンドを実行することをおすすめします。

```bash
yarn review:format
yarn tags:audit
```

#### ブログ記事
ブログでは、frontmatter にインライン著者オブジェクトを書くのではなく、[blog/authors.yml](blog/authors.yml) で定義した author ID を使ってください。

1. [blog/authors.yml](blog/authors.yml) に新しい著者 ID を追加するか、既存のものを使います。
2. 記事の frontmatter でその ID を参照します。

例：

```markdown
---
title: 投稿タイトル
authors: yourAuthorId
tags: [Tag1, Tag2]
---
```

既存の例として [blog/2025-04-02-furry.md](blog/2025-04-02-furry.md) や [blog/2025-07-10-unagoya.md](blog/2025-07-10-unagoya.md) を参照できます。

#### ファイル命名規則と配置
新しいファイルは、対象大学の既存ディレクトリ構造と近隣の `_category_.json` に従って配置してください。

1. ベースディレクトリ：`docs/`
2. 一般的な階層：`大学/研究科・学部/[専攻・プログラム/...]/入学年度/`。専攻・プログラム階層は省略される場合も、複数階層になる場合もあります。
3. ファイル名：試験年月または年度、科目・区分、問題番号などが分かる、安定した説明的な名前

```text
docs/
├── <大学名>/
│   ├── <研究科・学部>/
│   │   ├── [<専攻・プログラム>/...]
│   │   │   ├── <入学年度>/
│   │   │   │   └── <解答ファイル>.md
blog/
├── <ブログ記事>.md
```

例：

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

これは以下に対応します。
- 大学：東京大学 (`tokyo-university`)
- 研究科：工学系研究科 (`engineering`)
- 専攻：物理工学専攻 (`ap`)
- 入学年度：`2020`
- 試験年月：`201908`
- 科目：物理
- 問題番号：`3`

### 📧 メールでの提出
Git に不慣れな方のために、メールでの貢献も受け付けています。

手順：
1. 上記のガイドラインに従って内容を準備します。
2. [コントリビューターライセンス同意書 (CLA)](CLA.md) を読みます。
3. **376672994@qq.com** 宛に内容を送信します。
4. メール本文に *「私は The Kai Project CLA を読み、これに同意します。」* を必ず記載してください。
5. 承認された場合、メンテナーが内容をリポジトリに反映します。

### 📝 CLA の署名
貢献をマージする前に、[コントリビューターライセンス同意書 (CLA)](CLA.md) への同意が必要です。

**サイト内投稿：**
投稿フォームで CLA 同意欄を選択してください。この確認は署名済みの Issue payload に記録され、メンテナーの確認後、[submission-issue-to-pr ワークフロー](.github/workflows/submission-issue-to-pr.yml) が検証して Draft Pull Request を作成します。

**直接作成する Pull Request：**
PR 作成者本人が、PR の説明文に次の署名文を記載してください。

```text
I have read and agree to The Kai Project CLA.
```

メンテナーがマージ前に同意を確認します。

**メール投稿：**
上記のとおり、メール本文に *「私は The Kai Project CLA を読み、これに同意します。」* を含めてください。
