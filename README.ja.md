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
yarn review:format
```

- `yarn generate:universities`: `docs/` の構成や `_category_.json` を変更したあと、`src/data/universities.js` を再生成します。
- `yarn review:format`: `docs/` 配下の解答ドキュメント形式をレビューします。

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

# 👏 貢献方法
このプロジェクトは複数のチャンネルを通じてコミュニティからの貢献を奨励しています。
- Git Pull Request: Git に慣れている方向け
- メール投稿: メールでの送信を希望する方向け
- コミュニティ議論: QQ グループで解答や受験経験を共有したり、GitHub issues で誤りを知らせたりできます

## 📝 フォーマットガイドライン
`docs/` 配下の解答ドキュメントは、できるだけ統一フォーマットで投稿してください。

### 解答ドキュメント
各解答 Markdown は、基本的に次のような構成を推奨します。

```markdown
---
sidebar_label: 'サイドバーに表示されるタイトル'
tags:
  - Tokyo-University
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

PR を出す前に、次のコマンドを実行することをおすすめします。

```bash
yarn review:format
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
現在の CLA フローは、リポジトリ内の workflow ではなく、GitHub 側の assistant / bot で処理されている可能性が高いです。PR 作成後は、PR の会話欄に表示される案内に従ってください。もし bot が署名コメントを求めた場合は、その案内文を優先してください。このリポジトリで使われたことのある文言の一例は次のとおりです。

```text
I have read the CLA Document and I sign the CLA
```

**GitHub 以外のユーザーの場合（メール投稿）:**
上記のとおり、メール本文に *「私は The Kai Project CLA を読み、これに同意します。」* を含めてください。

# 💬 コミュニティ議論
The Kai Project では、試験解答や受験経験についてコミュニティディスカッション用の QQ グループを維持しています。解答に誤りがある場合は GitHub issues からも知らせてください。

[QQグループ：925154731](https://qm.qq.com/q/MVPd9wniQU)

コミュニティ経由のフィードバックは、メンテナによってリポジトリに取り込まれたり、今後の改善方針に活用されたりします。

# ©️ ライセンスと著作権
The Kai Project へのすべてのコード貢献は、GNU Affero General Public License v3.0 の対象です。

また、入試問題の著作権は各学校・機関に帰属します。

このプロジェクトは、この知識ベースの維持と拡張に関わるすべての貢献者に感謝します。

コンテンツが権利を侵害していると思われる場合は、直ちに管理者までご連絡ください。

# ⭐ スター履歴

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)
