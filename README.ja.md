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

# 📖 はじめに
The Kai Project は、日本の大学院入試過去問、解答、受験経験を共有するためのオープンソースプラットフォームです。資料アーカイブだけでなく、学習進捗管理、問題ごとのノート、デバイス間同期など、日々の勉強に役立つ機能も備えています。

```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

プロジェクトウェブサイト: [日本の大学院入試問題解答](https://runjp.com/)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="700" alt=""/>
</figure>

# ✨ 主な機能
- 複数大学・研究科にまたがる過去問と解答の公開データベース
- 受験体験記や勉強メモのブログ
- 問題ごとの進捗記録、復習リマインダー、進捗ダッシュボード
- 各問題ページで使える Markdown / LaTeX 対応ノート
- Supabase を使った任意のログイン、クラウド同期、週間ランキング
- ローカル検索、PWA / オフライン対応、解答ページの画像共有機能

# 🛠️ ローカル開発
## 必要環境
- Node.js `>=20`
- Yarn `>=1.22.0`

## ローカル起動
依存関係をインストールして開発サーバーを起動します。

```bash
yarn install
yarn dev
```

その後、`http://localhost:3000` を開いてください。

本番ビルドをローカルで確認する場合:

```bash
yarn build
yarn serve
```

## 便利なスクリプト

```bash
yarn generate:universities
yarn generate:site-stats
yarn tags:generate
yarn content:validate
yarn tags:audit
yarn review:format
yarn api:validate
```

- `yarn generate:universities`: `docs/` の構成や `_category_.json` を変更したあと、`src/data/universities.js` を再生成します。
- `yarn generate:site-stats`: JSON API と同じスキャン結果から `src/data/siteStats.json` を再生成します。
- `yarn tags:generate`: `src/data/tagTaxonomy.json` から `docs/tags.yml` を再生成します。
- `yarn content:validate`: `src/data/` 配下の編集可能な JSON データ（リンク、入試データ、大学メタデータ、タグ分類）を検証します。
- `yarn tags:audit`: サイト全体の大学、大科目、サブ科目、考点、未分類、廃止タグの使用状況を確認します。
- `yarn review:format`: `docs/` 配下の解答ドキュメント形式をレビューします。
- `yarn api:validate`: 公開 JSON API 用の構造化データを検証します。

コントリビューターが編集するコンテンツデータは `src/data/` の `links.json`、`admissions.json`、`universityMetadata.json`、`tagTaxonomy.json` にあります。生成ファイルの `universities.js`、`siteStats.json`、`docs/tags.yml` は上記スクリプトで更新できます。

## 任意のクラウド同期設定
クラウド用の環境変数がなくても、ドキュメント、ブログ、ローカル進捗、ローカルノートなどの基本機能はそのまま使えます。以下の変数を設定しない場合、ログイン、クラウド同期、ランキングは利用できません。

```bash
export SUPABASE_URL="https://your-project.supabase.co"
export SUPABASE_ANON_KEY="your-anon-key"
export HCAPTCHA_SITE_KEY="your-hcaptcha-site-key"
```

- `SUPABASE_URL` と `SUPABASE_ANON_KEY` は認証とクラウド同期に使用されます。
- `HCAPTCHA_SITE_KEY` は任意ですが、ログイン / 新規登録ページの不正利用対策として推奨です。

クラウド同期を有効にする場合:
1. Supabase プロジェクトを作成します。
2. Supabase の SQL Editor で [src/services/schema.sql](src/services/schema.sql) を実行します。
3. その SQL ファイルに書かれている認証レート制限、パスワードポリシー、hCaptcha などの設定を行います。

## 開発者向け JSON API
登録ユーザーは開発者センターで JSON API アクセスを申請できます。プロジェクトメンテナーの承認後、API Key を作成して過去問と解答データを取得できます。API Key の平文は作成時に一度だけ表示されます。データベースには SHA-256 hash のみ保存されます。

### 登録ユーザー向けの使い方
1. Web サイトにログインし、`/developers` から JSON API 機能に入ります。`/developers/api` を直接開くこともできます。
2. API アクセスを申請します。利用目的は任意項目です。商用利用を含む場合はチェックしてください。
3. プロジェクトメンテナーの審査を待ちます。承認後、このページで API Key を作成できます。
4. API Key を作成し、`kai_live_...` の値をすぐに保存します。
5. `Authorization: Bearer kai_live_...` を付けて Content API を呼び出します。Content API は匿名リクエストやログイン JWT を受け付けません。

利用できるエンドポイント:

- `GET /v1/catalog`: 大学、研究科、専攻、年度、ドキュメント数を返します。
- `GET /v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content`: 条件に合う過去問を検索します。`include=content` を付けると Markdown 本文も返します。
- `GET /v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache`: 派生した学習 taxonomy で検索します。
- `GET /v1/exams/{doc_id}`: ドキュメント ID で 1 件取得します。

過去問レスポンスには frontmatter の元の `tags` に加え、派生フィールド `schoolTags`、`learningTags`、`subjectIds`、`subsubjectIds`、`topicIds` が含まれます。トピック ID は `Subject.Subsubject.Topic` 形式です。`learningTags` は各学習タグが `subsubject`、具体的な `topic`、または未分類タグのどれかを示し、topic 項目には `short_id` も含まれます。

呼び出し例:

```bash
curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/catalog"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?university=tokyo-university&department=IST&program=cs&year=2024&include=content"

curl -H "Authorization: Bearer kai_live_..." \
  "https://your-project.supabase.co/functions/v1/kai-api/v1/exams?subject=Computer-Science&subsubject=Computer-Science.Computer-Architecture&topic=Computer-Science.Computer-Architecture.Cache"
```

レスポンスには常に `apiVersion`、`sourceUrl`、`license`、`contentNotice` が含まれます。コンテンツは個人の学習・研究目的で提供され、商用利用には別途許可が必要です。

### プロジェクトメンテナー向けのデプロイ
このプロジェクトは既存のログインシステムを開発者 ID として再利用し、Supabase Edge Functions から過去問と解答 JSON を提供します。

1. Supabase の SQL Editor で最新版の [src/services/schema.sql](src/services/schema.sql) を実行します。
2. [supabase/functions](supabase/functions) の Edge Functions をデプロイします。

```bash
npx supabase functions deploy developer-api-keys --project-ref "$SUPABASE_PROJECT_REF"
npx supabase functions deploy kai-api --project-ref "$SUPABASE_PROJECT_REF"
```

Supabase Dashboard の Edge Functions エディタからデプロイすることもできます。`developer-api-keys` と `kai-api` をそれぞれ作成し、各 function ディレクトリ内の `index.ts`、`http.ts`、`crypto.ts` を追加してください。各 function ディレクトリは自己完結しており、外部の共有ファイルには依存しません。

3. 構造化された過去問データを同期します。

```bash
SUPABASE_URL="https://your-project.supabase.co" \
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key" \
yarn api:sync
```

このコマンドは現在の `docs/` ディレクトリをミラーします。現在のドキュメントを upsert し、ローカルに存在しない古い `exam_documents` 行を物理削除します。

4. Supabase Function secrets に `API_LOG_SALT` が設定されていることを確認し、両方の function で JWT verification を無効にします。
5. Supabase Dashboard で `api_access_requests` テーブルの申請を確認します。`status` を `approved` に変更すると API Key 作成を許可できます。拒否または停止する場合は `rejected` / `revoked` を使います。

最初のバージョンでは、承認済みユーザーは全員同じ無料枠を使います: `60 requests/minute`、active key は最大 `3` 個です。`api_access_requests` と `api_keys` には、将来の商用プランや段階的なクォータのために `plan`、`commercial_allowed` などのフィールドを予約しています。

# 👏 貢献方法
このプロジェクトは複数のチャンネルを通じてコミュニティからの貢献を奨励しています。
- Git Pull Request: Git に慣れている方向け
- メール投稿: メールでの送信を希望する方向け
- コミュニティ議論: Discord または QQ グループで解答や受験経験を共有したり、GitHub issues で誤りを知らせたりできます

## 📝 フォーマットガイドライン
`docs/` 配下の解答ドキュメントは、できるだけ統一フォーマットで投稿してください。

### 解答ドキュメント
各解答 Markdown は、基本的に次のような構成を推奨します。

```markdown
---
sidebar_label: 'サイドバーに表示されるタイトル'
tags:
  - Tokyo-University
  - Subsubject-Tag
  - Topic-Tag
---

# 完全なページタイトル

## **Author**
[あなたの名前](https://example.com)

## **Description**
問題文の要約、転記、または簡単な説明。

## **Kai**
解答、導出、解説、補足ノート。
```

現在のフォーマットレビュースクリプトでは、次の点をチェックしています。
- `sidebar_label` は必須
- `tags` は必須
- frontmatter の直後、最初の非空行は H1 であること
- `## **Author**` は必須
- `## **Description**` と `## **Kai**` は個別には任意だが、少なくともどちらか一方は必要
- 両方ある場合の順序は `Author` → `Description` → `Kai`

タグのルール:
- できるだけ [src/data/tagTaxonomy.json](src/data/tagTaxonomy.json) の canonical サブ科目 ID と namespaced トピック ID を使ってください。大科目タグと旧い短いトピックタグは frontmatter では無効です。
- タグ分類の関連科目は、実際の問題内容に現れる強い関連に限定し、広い理論上の重なりだけでは付けません。
- 学校タグは互換性のため残しますが、サイトは主に `docs/学校/研究科/...` のパスから学校情報を推定します。
- 正しい新しいサブ科目タグまたは考点タグはそのまま提出できます。`yarn review:format` では warning になり、PR はブロックされません。
- 廃止済みまたは明らかな typo タグは error になり、置換先の canonical tag が表示されます。
- 学校タグだけで学習タグがない文書は warning になります。サブ科目タグだけの文書は、問題文から判断できる場合に具体的な考点タグの追加が推奨されます。

PR を出す前に、次のコマンドを実行することをおすすめします。

```bash
yarn review:format
yarn tags:audit
```

### ブログ記事
ブログでは、frontmatter にインライン著者オブジェクトを書くのではなく、[blog/authors.yml](blog/authors.yml) で定義した author ID を使ってください。

1. [blog/authors.yml](blog/authors.yml) に新しい著者 ID を追加するか、既存のものを使います。
2. 記事の frontmatter でその ID を参照します。

例:

```markdown
---
title: 投稿タイトル
authors: yourAuthorId
tags: [Tag1, Tag2]
---
```

既存の例として [blog/2025-04-02-furry.md](blog/2025-04-02-furry.md) や [blog/2025-07-10-unagoya.md](blog/2025-07-10-unagoya.md) を参照できます。

### ファイル命名規則と配置
ファイルは正しいディレクトリ構造に配置し、命名規則に従ってください。

1. ベースディレクトリ: `docs/`
2. 階層: `学校/学部/専攻/学年度/`
3. ファイル名: 学校略称、試験年月、科目、問題番号などが分かる形

```text
docs/
├── <大学名>/
│   ├── <学部>/
│   │   ├── <専攻>/
│   │   │   ├── <学年度>/
│   │   │   │   └── <解答ファイル>.md
blog/
├── <ブログ記事>.md
```

例:

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

これは以下に対応します。
- 学校: 東京大学
- 学部: 工学系研究科
- 専攻: 応用物理学 (`ap`)
- 試験年月: `201908`
- 科目: 物理
- 問題番号: `3`

## 📧 メールでの提出
Git に不慣れな方のために、メールでの貢献も受け付けています。

手順:
1. 上記のガイドラインに従って内容を準備します。
2. [コントリビューターライセンス同意書 (CLA)](CLA.md) を読みます。
3. **376672994@qq.com** 宛に内容を送信します。
4. メール本文に *「私は The Kai Project CLA を読み、これに同意します。」* を必ず記載してください。
5. 承認された場合、メンテナが内容をリポジトリに反映します。

## 📝 CLA の署名
貢献をマージする前に、[コントリビューターライセンス同意書 (CLA)](CLA.md) への同意が必要です。

**GitHub ユーザーの場合（Pull Request）:**
CLA 署名は、現在このリポジトリ内の workflow で自動チェックされます: [.github/workflows/cla-check.yml](.github/workflows/cla-check.yml)。

PR 作成後、PR 作成者本人が次のいずれかに署名文を記載してください。
- PR の説明文
- PR の会話コメント
- PR の Review コメント

利用できる署名文:

```text
I have read the CLA Document and I sign the CLA
```

```text
I have read and agree to The Kai Project CLA.
```

署名文が検出されない場合、`CLA 检查` workflow は失敗し、リマインドコメントを自動投稿します。署名文を追加すると自動的に再チェックされて通過します。

**GitHub 以外のユーザーの場合（メール投稿）:**
上記のとおり、メール本文に *「私は The Kai Project CLA を読み、これに同意します。」* を含めてください。

# 💬 コミュニティ議論
The Kai Project の Discord または QQ グループに参加して、試験解答や受験経験を共有し、フィードバックをお寄せください。解答に誤りがある場合は GitHub issues からも知らせてください。

[Discord に参加](https://discord.gg/VcUHXzB9Mk)

[QQグループ：925154731](https://qm.qq.com/q/MVPd9wniQU)

コミュニティ経由のフィードバックは、メンテナによってリポジトリに取り込まれたり、今後の改善方針に活用されたりします。

# ©️ ライセンスと著作権
The Kai Project へのすべてのコード貢献は、GNU Affero General Public License v3.0 の対象です。

また、入試問題の著作権は各学校・機関に帰属します。

このプロジェクトは、この知識ベースの維持と拡張に関わるすべての貢献者に感謝します。

コンテンツが権利を侵害していると思われる場合は、直ちに管理者までご連絡ください。

# ⭐ スター履歴

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)
