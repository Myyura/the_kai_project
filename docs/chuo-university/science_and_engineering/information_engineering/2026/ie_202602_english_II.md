---
sidebar_label: "2026年2月実施 問題II（英語）"
tags:
  - Chuo-University
  - Computer-Science.Computer-Architecture.SRT-Division
---

# 中央大学 理工学研究科 情報工学専攻 2026年2月実施 一般入試（春季）英語 問題II

## **Author**

祭音Myyura (Based on [中央大学の公式解答例](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf) refined with GPT 6 Astra)

## **Description**

SRT 除算アルゴリズム（段落①）と Pentium の FP 除算バグ（段落②～⑤）に関する次の英文を読み，以下の設問に答えよ。Pentium は Intel が開発したマイクロプロセッサの名称である。また，FP は floating-point の略で，浮動小数点を意味する。

① The SRT division algorithm is commonly used in hardware for dividing floating-point numbers. It computes the quotient iteratively, selecting one quotient digit per iteration. In radix-$2^n$ SRT division (e.g., radix-2 and radix-4), each iteration produces one quotient digit in base $2^n$, which corresponds to $n$ quotient bits. When $n>1$, this digit is typically selected using a small lookup table. SRT algorithms are also used for square-root computation.

補足：「lookup table」は単にルックアップテーブルと訳せばよい。

② The error in the division portion of the floating-point unit of the Pentium microprocessor drew a lot of media attention late in 1994. An <u>interesting artifact</u>ⓐ of the error was that <u>it</u>ⓑ exposed the internals of the Pentium design to public scrutiny. Several individuals managed to reverse-engineer the implementation as a result of the design error. If the division unit had worked correctly, it would have been impossible to determine the nature of the implementation.

③ Intel uses a radix-4 SRT implementation for division in the Pentium. The error resulted from incorrect entries in the lookup table used to implement the quotient selection in the SRT algorithm. Five entries that should have had the value 2 had the value 0. According to Intel, the five entries were mistakenly omitted from the input script to the PLA (programmable logic array) used to generate the circuit layout for the table.

④ The error manifests itself only for a small minority of operands, but can be considerable when it appears. For example, one would expect the result of $r=x-(x/y)\times y$ to be zero. Calculating $r$ with values $x=4195835$ and $y=3145727$ on a faulty Intel Pentium results in $r=256$. The division $x/y$ in this case is accurate to only 14 bits rather than 53, i.e., worse than single precision for a double precision computation, and is an example of the worst-case error. The only inputs affected are those which at some time in the course of computation encounter the missing entries.

⑤ The bug affects only division and not square root, which does not use the table. In fact, this is one of the most intriguing aspects of this case. Ironically, the fateful quotient selection table actually appears over-designed, with higher resolution than necessary for radix-4 SRT division. Meanwhile, the Pentium implements square root using a radix-2 SRT algorithm, instead of implementing radix-4 square root as well.

出典：P. Soderquist and M. Leeser, Area and performance tradeoffs in floating-point divide and square-root implementations, *ACM Computing Surveys*, 28 (3), 518–564, 1996.（付録Aより抜粋，一部改変。）

1. 段落①を日本語に訳せ。

2. 段落②について下記の問に答えよ。

   (1) 「it」（下線部ⓑ）が指しているものを，この段落の英文から抜き出せ。

   (2) 下線部ⓐについて，なぜ「interesting」なのか日本語で説明せよ。

3. Pentium の FP 除算演算器において，なぜ除算の計算に誤りが発生するのか段落③から読み取って日本語で説明せよ。

4. 段落④について下記の問に答えよ。ただし $x=4195835,y=3145727$ とせよ。

   (1) この段落において，$x/y$ の計算で発生する誤りの大きさは，小さいと評価されているのか，大きいと評価されているのか答えよ。

   (2) 以下の[ア]～[エ]の中から，「Pentium の FP 除算演算器で計算される $x/y$ の値」に最も近いものを選択せよ。（Pentium で計算される値との差の絶対値が最も小さくなるものを選択すればよい。）なお，$x/y$ の真の値は「1.3338204…」である。

   - [ア] 1.333
   - [イ] 1.3338
   - [ウ] 1.3339
   - [エ] 1.334

5. 下記の項目[ア]～[エ]の中から，誤りを含む項目を全て選択せよ。段落②～⑤の内容に則して選択すること。

   - [ア] Pentium の FP 除算演算器のバグは，どのような入力値に対しても除算の計算に影響を与える。
   - [イ] Pentium の FP 除算演算器のバグは，除算の計算だけでなく平方根の計算についても影響を与える。
   - [ウ] Pentium の FP 除算演算器は radix-4 SRT アルゴリズムを使用している。
   - [エ] Pentium の FP 平方根演算器は radix-4 SRT アルゴリズムを使用している。

#### 题目描述

阅读以下关于 SRT 除法算法（第①段）与 Pentium 浮点除法缺陷（第②～⑤段）的英文，回答各问。Pentium 是 Intel 开发的一款微处理器的名称。FP 是 floating-point 的缩写，意为浮点。

① SRT 除法算法常用于执行浮点数除法的硬件中。它采用迭代方式计算商，每轮迭代选取一位商。在基数为 $2^n$ 的 SRT 除法中（例如基数2和基数4），每轮迭代生成一个以 $2^n$ 为基数的商位，相当于商的 $n$ 个二进制位。当 $n>1$ 时，通常使用一个小型查找表来选取这一位商。SRT 算法也用于平方根计算。

补充：“lookup table”直接译为日语“ルックアップテーブル”即可。

② Pentium 微处理器浮点运算单元中的除法部分存在错误，在1994年底引起了媒体的广泛关注。这个错误带来的一个<u>有趣的副产物</u>ⓐ是，<u>它（it）</u>ⓑ使 Pentium 的内部设计暴露在公众的审视之下。由于这一设计错误，一些人成功地通过逆向工程弄清了其实现方式。如果除法单元正常工作，就不可能确定其实现方式的具体情况。

③ Intel 在 Pentium 中采用基数4的 SRT 算法实现除法。错误来自用于实现 SRT 算法中商位选择功能的查找表中的错误表项。本应为2的五个表项却是0。据 Intel 所述，这五个表项被误漏于 PLA（可编程逻辑阵列）的输入脚本中，该 PLA 用于生成这张表的电路布局。

④ 这种错误仅会在极少数操作数下出现，但一旦出现，误差可能很大。例如，人们会预期 $r=x-(x/y)\times y$ 的结果为0。然而，在存在缺陷的 Intel Pentium 上取 $x=4195835,y=3145727$ 计算 $r$，会得到 $r=256$。此时除法 $x/y$ 的结果只有14个二进制位准确，而不是53位，也就是说，双精度计算的结果甚至不如单精度。这是最坏情况误差的一个例子。只有那些在计算过程中某个时刻访问到缺失表项的输入，才会受到影响。

⑤ 这一缺陷只影响除法，不影响平方根，因为平方根计算不使用这张表。事实上，这是该事件最引人关注的方面之一。讽刺的是，这张造成严重后果的商位选择表似乎反而设计过度，其分辨率超过基数4的 SRT 除法实际所需。与此同时，Pentium 使用基数2的 SRT 算法实现平方根计算，并未同时采用基数4的平方根算法。

出处：P. Soderquist 与 M. Leeser，《Area and performance tradeoffs in floating-point divide and square-root implementations》，*ACM Computing Surveys*，28 (3)，518–564，1996年。（摘自附录A，部分修改。）

1. 将第①段翻译成日语。

2. 关于第②段，回答以下问题。

   (1) 从本段英文中摘出“it”（下划线ⓑ）所指代的内容。

   (2) 关于下划线ⓐ，为什么说它“interesting”？用日语说明。

3. 根据第③段，用日语说明 Pentium 浮点除法器为什么会产生除法计算错误。

4. 关于第④段，回答以下问题。设 $x=4195835,y=3145727$。

   (1) 本段将 $x/y$ 计算中产生的误差评价为小还是大？

   (2) 从下列[ア]～[エ]中，选出最接近“Pentium 浮点除法器计算出的 $x/y$ 数值”的一项，即与 Pentium 计算值之差的绝对值最小的一项。$x/y$ 的真实值为“1.3338204…”。

   - [ア] 1.333
   - [イ] 1.3338
   - [ウ] 1.3339
   - [エ] 1.334

5. 根据第②～⑤段，从下列[ア]～[エ]中选出所有含有错误的选项。

   - [ア] Pentium 浮点除法器的缺陷会影响任意输入值的除法计算。
   - [イ] Pentium 浮点除法器的缺陷不仅影响除法计算，也影响平方根计算。
   - [ウ] Pentium 浮点除法器使用基数4的 SRT 算法。
   - [エ] Pentium 浮点平方根运算器使用基数4的 SRT 算法。

## **Kai**

### 1

SRT 除算アルゴリズムは，浮動小数点数を除算するためのハードウェアで広く使われている。このアルゴリズムは，反復ごとに商の数字を一つ選び，商を反復的に計算する。基数 $2^n$ の SRT 除算（例えば基数2や基数4）では，各反復で $2^n$ 進法の商の数字を一つ求め，これは商の $n$ ビットに相当する。$n>1$ の場合，この数字は通常，小さなルックアップテーブルを用いて選ばれる。SRT アルゴリズムは，平方根の計算にも使われている。

### 2

#### (1)

**the error in the division portion of the floating-point unit of the Pentium microprocessor**

同じ段落中の **the error** でもよい。

#### (2)

除算器が正常に動作していれば知ることができなかった Pentium の内部の実装方式を，設計上の誤りを手がかりに逆解析できるようになったからである。本来は望ましくない計算上の不具合が，内部設計の解明という思いがけない副産物をもたらした点が興味深い。

### 3

SRT アルゴリズムで商の数字を選ぶためのルックアップテーブルに誤りがあり，本来 **2** であるべき五つの表項が **0** になっていたからである。Intel によれば，テーブルの回路レイアウトを生成する PLA への入力スクリプトから，これら五つの表項が誤って抜け落ちていた。

### 4

#### (1)

**大きいと評価されている。**

本来53ビットの精度を持つはずの倍精度計算で，正しいのは14ビットにとどまり，単精度よりも悪い精度となっている。本文はこれを最悪の場合の誤差の例としている。

#### (2)

**[イ] 1.3338**

Pentium が計算した商を $\widehat q$ とすると，本文の $r=256$ から

$$
x-\widehat qy=256
$$

である。したがって，本文の数値関係から商を求めると，

$$
\begin{aligned}
\widehat q
&=\frac{x-256}{y}\\
&=\frac{4195835-256}{3145727}\\
&=\frac{4195579}{3145727}\\
&\approx1.3337390689.
\end{aligned}
$$

各選択肢との距離は次のようになる。

| 選択肢 | 値 | $\lvert\widehat q-\text{値}\rvert$ の概数 |
| --- | ---: | ---: |
| [ア] | 1.333 | 0.0007391 |
| [イ] | 1.3338 | 0.0000609 |
| [ウ] | 1.3339 | 0.0001609 |
| [エ] | 1.334 | 0.0002609 |

よって最も近いのは [イ] である。ここでは真の商 $x/y$ ではなく，誤りを含む計算結果 $\widehat q$ との距離を比較する。

### 5

誤りを含む項目は **[ア]，[イ]，[エ]** である。

| 項目 | 判定 | 本文に基づく理由 |
| --- | --- | --- |
| [ア] | 誤り | 段落④によると，計算中に欠落した表項を参照する一部の入力だけが影響を受ける。 |
| [イ] | 誤り | 段落⑤によると，平方根の計算は問題のテーブルを使わないため，このバグの影響を受けない。 |
| [ウ] | 正しい | 段落③に，除算には radix-4 SRT を用いると記されている。 |
| [エ] | 誤り | 段落⑤によると，平方根の計算に用いるのは radix-2 SRT である。 |

## **Reference**

- [中央大学公式問題：2026年度・春季英語 問題II（冊子13頁／PDF 14頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-01.pdf)
- [中央大学公式解答例・出題の意図：春季英語 問題II（冊子18頁／PDF 19頁）](https://www.chuo-u.ac.jp/uploads/2026/03/admission_gschool_exam_science_2026_08-02.pdf)
