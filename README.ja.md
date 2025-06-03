<div align="center">
  <h1 align="center">
    The Kai Project 
    <br />
  </h1>
   <p align="center"><a href="./README.md">English | <a href="./README.zh.md">中文</a> | <a href="./README.ja.md">日本語</a><br></p>
   
   <a href="https://deepwiki.com/Myyura/the_kai_project"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</div>

# 📖 はじめに 
Kaiプロジェクトは、日本の大学院入試問題解答の共有と議論のための集約リソースを提供することで、情報障壁を打ち破ることを目的としたオープンソースプロジェクトです。

```text
"Answer to the Ultimate Question of Life, the Universe, and Everything"
```

プロジェクトウェブサイト: [日本の大学院入試問題解答](https://runjp.com/)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/sample.png" width="700" alt=""/>
</figure>

# 👏 貢献方法 

このプロジェクトは複数のチャンネルを通じてコミュニティからの貢献を奨励しています：
- Git Pull Request：Gitに慣れている貢献者向け
- メール投稿：メール経由でのコンテンツ送信を希望するユーザー向け
- コミュニティ議論：QQグループを通じて問題の解答や入試体験について議論し、解答に誤りがある場合はGitHub issuesを通じてお知らせください！

すべてのGit貢献は、プラットフォーム全体での一貫性を保つために、メタデータ、タグ、適切なファイル構成を含む標準化されたフォーマットに従います。

## 📝 フォーマットガイドライン
すべての貢献は、プロジェクト全体の一貫性を保つために特定のフォーマットガイドラインに従う必要があります。

### ドキュメントのFrontmatter
#### 入試解答：

各入試解答のMarkdownドキュメントには、コンテンツに関するメタデータを提供するfrontmatterをファイルの冒頭に含める必要があります：

```markdown
---
sidebar_label: 'サイドバーに表示されるタイトル'
tags:
  - 学校名
  - トピックタグ（オプション）
---
```
必須のfrontmatterフィールド：
- `sidebar_label`：ナビゲーションサイドバーに表示されるタイトル
- `tags`：最低限、関連する学校名（例：Tokyo-University）を含める必要があります。追加の試験科目トピックタグはオプションですが、推奨されています。

#### ブログ：
ブログ投稿では、frontmatterでこれらの著者IDを参照します：

すべての著者は少なくとも`name`属性を持つ必要があります。

単一著者：

```markdown
---
title: 投稿タイトル
authors:
  name: 著者名例
tags: [Tag1, Tag2]
---
```

複数著者：

```markdown
---
title: 投稿タイトル
authors:
  - name: Joel Marcey
  - name: Sébastien Lorber
tags: [Tag1, Tag2]
---
```

### ファイル命名規則と配置場所
ファイルは正しいディレクトリ構造に配置され、命名規則に従う必要があります：

1. ベースディレクトリ：`docs/`
2. 階層：`学校/学部/専攻/学年度/`
3. ファイル名：コンテンツの具体的な詳細を示す必要があります（学校略称、試験年月、科目、問題番号）

```markdown
docs/
├── <大学名>/
│   ├── <学部>/
│   │   ├── <専攻>/
│   │   │   ├── <学年度>/
│   │   │   │   └── <試験ファイル>.md
blog/
├── <カテゴリ>/
│   └── <ブログ投稿>.md
```

例：

`docs/tokyo-university/engineering/ap/2020/ap_201908_phys_3.md`

これは以下に対応します：
- 学校：東京大学
- 学部：工学部
- 専攻：応用物理学（ap）
- 試験年月：201908
- 科目：物理学
- 問題番号：3

## 📧 メール投稿
Gitに慣れていない貢献者のために、プロジェクトではメール経由での貢献を受け付けています。

メール投稿の手順：
1. フォーマットガイドラインに従ってコンテンツを準備する
2. プロジェクトメールアドレスにコンテンツを送信：376672994@qq.com
3. プロジェクト管理者が投稿内容を審査する
4. 承認されれば、管理者がリポジトリにコンテンツを追加する

この方法は、貴重なコンテンツを共有したいが技術的なGit経験のない貢献者の参入障壁を下げるために設計されています。

## 💬 コミュニティ議論
Kaiプロジェクトでは、試験解答や入試経験についてコミュニティディスカッション用のQQグループを維持しています。解答に誤りがある場合はGitHub issuesを通じてお知らせください！

[QQグループ：925154731](https://qm.qq.com/q/MVPd9wniQU)

コミュニティ議論を通じて受け取ったフィードバックは、管理者によってリポジトリに組み込まれるか、今後の貢献の指針として使用される場合があります。

# ©️ ライセンスと著作権
Kaiプロジェクトへのすべてのコード貢献は、GNU Affero General Public License v3.0の対象となります。

また、入試問題の著作権は各学校・機関に帰属します。

このプロジェクトは、この知識ベースの維持と拡張におけるすべての貢献者を認めています。

コンテンツがあなたの権利を侵害していると思われる場合は、直ちにプロジェクト管理者にご連絡ください。

# ⭐ スター履歴

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)