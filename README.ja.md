<div align="center">
  <h1 align="center">
    The Kai Project 
    <br />
  </h1>
   <p align="center"><a href="./README.md">English</a> | <a href="./README.zh.md">中文</a> | <a href="./README.ja.md">日本語</a><br></p>
   
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

## 📧 メールでの提出
Git に不慣れな貢献者のために、本プロジェクトではメールでの貢献も受け付けています。

メール提出の手順：
1. フォーマットのガイドラインに従ってコンテンツを準備します。
2. [コントリビューターライセンス同意書 (CLA)](CLA.md) をお読みください。
3. プロジェクトのメールアドレス **376672994@qq.com** 宛てにコンテンツを送信してください。
   **⚠️ 重要な手順：** メールの本文に必ず以下の声明を明記してください：*「私は The Kai Project CLA を読み、これに同意します。」* この明確な同意がない場合、法的な理由により、あなたの貴重な貢献をマージすることができません。
4. プロジェクトのメンテナが提出物を審査します。
5. 承認された場合、メンテナがあなたのコンテンツをリポジトリに追加します。

この方法は、貴重なコンテンツを共有したいが Git の技術的な経験がない貢献者のために、参加のハードルを下げることを目的としています。

## 📝 CLA の署名

あなたの貢献をマージする前に、[コントリビューターライセンス同意書 (CLA)](CLA.md) に署名していただく必要があります。この法的合意は、あなたの貢献が適切にライセンスされていることを保証し、プロジェクトが GNU Affero General Public License v3.0 の下で安全に配布され続けることを可能にするとともに、あなたとプロジェクトの双方を保護するものです。

**GitHub ユーザーの場合（Pull Request）：**
Pull Request を提出した後、CLA ボットが署名プロセスを案内します。CLA に署名するには、PR に以下のコメントを追加するだけです：

```text
I have read the CLA Document and I sign the CLA
```

**GitHub 以外のユーザーの場合（メールでの提出）：**
「メールでの提出」セクションで述べたように、提出するメールの本文に 「私は The Kai Project CLA を読み、これに同意します。」 という声明を含めるだけです。

# 💬 コミュニティ議論
Kaiプロジェクトでは、試験解答や入試経験についてコミュニティディスカッション用のQQグループを維持しています。解答に誤りがある場合はGitHub issuesを通じてお知らせください！

[QQグループ：925154731](https://qm.qq.com/q/MVPd9wniQU)

コミュニティ議論を通じて受け取ったフィードバックは、管理者によってリポジトリに組み込まれるか、今後の貢献の指針として使用される場合があります。

# ©️ ライセンスと著作権
Kaiプロジェクトへのすべてのコード貢献は、GNU Affero General Public License v3.0の対象となります。

また、入試問題の著作権は各学校・機関に帰属します。

このプロジェクトは、この知識ベースの維持と拡張におけるすべての貢献者を感謝しております。

コンテンツがあなたの権利を侵害していると思われる場合は、直ちにプロジェクト管理者にご連絡ください。

# ⭐ スター履歴

[![Star History Chart](https://api.star-history.com/svg?repos=Myyura/the_kai_project&type=Date)](https://www.star-history.com/#Myyura/the_kai_project&Date)