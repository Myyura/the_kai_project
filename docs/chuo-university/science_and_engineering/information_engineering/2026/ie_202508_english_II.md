---
sidebar_label: "2025年8月実施 問題II（英語）"
tags:
  - Chuo-University
  - Computer-Science.Programming.Unicode-Character-Encoding
---

# 中央大学 理工学研究科 情報工学専攻 2025年8月実施 一般入試（夏季）英語 問題II

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

次の英文は，文字コードの標準規格である Unicode 標準の規格書 “The Unicode Standard, Version 15” から一部を抜粋し，改変したものである。この英文を読み，以下の設問に答えよ。

While taking the ASCII character set as its starting point, the Unicode Standard goes far beyond ASCII’s limited ability to encode only the upper- and lowercase letters A through Z. <u>It</u> provides the capacity to encode all characters used for the written languages of the world—more than 1 million characters can be encoded. No escape sequence or control code is required to specify any character in any language. The Unicode character encoding treats alphabetic characters, ideographic characters, and symbols equivalently, which means <u>they</u> can be used in any mixture and with equal facility.

The Unicode Standard specifies a numeric value (code point) and a name for each of its characters. In this respect, it is similar to other character encoding standards from ASCII onward. In addition to character codes and names, other information is crucial to ensure legible text: a character’s case, directionality, and alphabetic properties must be well defined. The Unicode Standard defines these and other semantic values, and includes application data such as case mapping tables and character property tables as part of the Unicode Character Database. Character properties define a character’s identity and behavior; they ensure consistency in the processing and interchange of Unicode data.

The Unicode Standard contains 149,186 characters from the world’s scripts. These characters are more than sufficient not only for modern communication for the world’s languages, but also to represent the classical forms of many languages. The standard includes the European alphabetic scripts, Middle Eastern right-to-left scripts, and scripts of Asia and Africa. Many archaic and historic scripts are encoded. In addition, the Unicode Standard contains many important symbol sets, including currency symbols, punctuation marks, mathematical symbols, technical symbols, geometric shapes, dingbats, and emoji.

The Unicode Standard began with a simple goal: to unify the many hundreds of conflicting ways to encode characters, replacing them with a single, universal standard. The pre-existing legacy character encodings were both inconsistent and incomplete—two encodings could use the same codes for two different characters and use different codes for the same characters, while none of the encodings handled any more than a small fraction of the world’s languages. Whenever textual data was converted between different programs or platforms, there was a substantial risk of corruption. Programs were often written to only support particular encodings, making development of international versions expensive.

出典：The Unicode Consortium, *The Unicode Standard, Version 15*, 2022.（第1章より抜粋，一部改変。）

補足1　Unicode 標準は単に Unicode と呼ばれることも多い。

補足2　ASCII は1960年代にアメリカで策定された文字コードである。

補足3　code point：コードポイント（または符号位置），Basic Multilingual Plane：基本多言語面，dingbat：装飾記号，emoji：絵文字。

1. 第一段落の下線部「It」，「they」が指しているものを，それぞれ英文から抜き出せ。

2. Unicode 標準と ASCII の相違点を第一段落から読み取って日本語で説明せよ。また，Unicode 標準と ASCII の類似点を第二段落から読み取って日本語で説明せよ。

3. 第三段落を日本語に訳せ。

4. 最終段落の内容に則して，下記の問に答えよ。

   (1) Unicode 標準よりも古くから存在していた文字コードはどのような欠点を持っていたか，日本語で説明せよ。

   (2) その欠点はどのような問題を引き起こしていたか，日本語で説明せよ。

#### 题目描述

以下英文摘自字符编码标准 Unicode 标准的规范文档《The Unicode Standard, Version 15》，并做了部分修改。阅读文章，回答各问。

Unicode 标准以 ASCII 字符集为起点，但其能力远远超出了 ASCII 只能编码 A 到 Z 的大小写字母这一限制。<u>它（It）</u>具备为世界各种书面语言所使用的全部字符编码的容量，可以编码超过100万个字符。指定任何语言中的任何字符，都不需要转义序列或控制码。Unicode 字符编码同等对待字母文字、表意文字和符号，这意味着<u>它们（they）</u>能够任意混合使用，而且使用起来同样方便。

Unicode 标准为每个字符指定一个数值（码点）和一个名称。在这一点上，它与自 ASCII 以来的其他字符编码标准相似。除了字符编码和名称，还需要其他信息才能确保文本易于阅读：必须明确规定字符的大小写、书写方向和字母属性。Unicode 标准定义了这些属性及其他语义值，并将大小写映射表、字符属性表等应用数据纳入 Unicode 字符数据库。字符属性定义字符的身份及行为，确保 Unicode 数据的处理和交换保持一致。

Unicode 标准收录了来自世界各种文字系统的149,186个字符。这些字符不仅足以满足世界各种语言的现代交流需要，也足以表示许多语言的古典形式。该标准包含欧洲的字母文字系统、中东从右向左书写的文字系统，以及亚洲和非洲的文字系统。许多古老及历史上的文字系统也已获得编码。此外，Unicode 标准还包含许多重要的符号集合，包括货币符号、标点符号、数学符号、技术符号、几何图形、装饰符号和表情符号。

Unicode 标准最初的目标很简单：统一数百种彼此冲突的字符编码方式，用一个通用标准取代它们。此前已有的传统字符编码既不一致，也不完整：两个编码系统可能用相同编码表示不同字符，也可能用不同编码表示相同字符，而且每个编码系统都只能处理世界语言中的很小一部分。每当文本数据在不同程序或平台之间转换时，都存在相当大的数据损坏风险。程序往往被编写为只支持特定编码，使开发国际化版本的成本很高。

出处：The Unicode Consortium，《The Unicode Standard, Version 15》，2022年。（摘自第1章，部分修改。）

补充1：Unicode 标准也经常简称为 Unicode。

补充2：ASCII 是20世纪60年代在美国制定的字符编码。

补充3：code point：码点（或编码位置）；Basic Multilingual Plane：基本多文种平面；dingbat：装饰符号；emoji：表情符号。

1. 分别从英文中摘出第一段下划线处“It”和“they”所指代的内容。

2. 根据第一段，用日语说明 Unicode 标准与 ASCII 的不同之处；再根据第二段，用日语说明两者的相似之处。

3. 将第三段翻译成日语。

4. 根据最后一段回答下列问题。

   (1) 比 Unicode 标准更早出现的字符编码具有哪些缺点？用日语说明。

   (2) 这些缺点造成了哪些问题？用日语说明。

## **Kai**

### 1

- **It**：**the Unicode Standard**
- **they**：**alphabetic characters, ideographic characters, and symbols**

It は前文の主語である Unicode 標準を指す。they は直前に列挙された三種類の文字・記号をまとめて指している。

### 2

**相違点**：第一段落では，ASCII が符号化できる範囲を A から Z までの大文字・小文字に限られたものとして対比している。一方，Unicode 標準は世界の書記言語で用いられるすべての文字を符号化するための容量を備え，100万を超える文字を符号化できる。また，文字を指定するためのエスケープシーケンスや制御コードを必要とせず，アルファベット文字・表意文字・記号を同等に扱い，自由に混在させられる。

**類似点**：Unicode 標準も，ASCII をはじめとする従来の文字符号化規格と同様に，それぞれの文字に数値（コードポイント）と名前を割り当てている。

### 3

Unicode 標準には，世界のさまざまな文字体系に属する149,186の文字が収録されている。これらの文字は，世界の言語による現代のコミュニケーションに十分であるだけでなく，多くの言語の古典的な形態を表すうえでも十分なものである。この規格には，ヨーロッパのアルファベット系文字体系，中東の右から左へ書く文字体系，そしてアジアとアフリカの文字体系が含まれる。多くの古代の文字体系や歴史的な文字体系も符号化されている。さらに，Unicode 標準には，通貨記号，句読点，数学記号，技術記号，幾何学図形，装飾記号，絵文字など，多くの重要な記号集合が含まれている。

### 4

#### (1)

従来の文字コードには，**一貫性の欠如**と**不完全さ**という欠点があった。異なる符号化方式の間で，同じコードが異なる文字を表したり，同じ文字に異なるコードが割り当てられたりしていた。また，どの方式も世界の言語のごく一部しか扱えず，すべての言語を共通して表現できなかった。

#### (2)

異なるプログラムやプラットフォームの間でテキストデータを変換する際，文字化けなどのデータ破損が生じる大きな危険があった。さらに，プログラムが特定の符号化方式だけに対応するように作られることが多かったため，国際版を開発する費用が高くなっていた。

## **Reference**

- [中央大学公式問題：2026年度・夏季英語 問題II（冊子2頁／PDF 3頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf)
- [中央大学公式解答例・出題の意図：夏季英語 問題II（冊子4頁／PDF 5頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf)
