---
sidebar_label: '2021年7月実施 専門基礎B [B-4]'
tags:
  - Kyoto-University
  - Electrical-Electronic.Digital-Logic.Boolean-Function-Minimization
  - Electrical-Electronic.Digital-Logic.Not-AND-and-Not-OR-Universal-Gates
  - Electrical-Electronic.Digital-Logic.Sequential-Circuit
  - Electrical-Electronic.Digital-Logic.Finite-State-Machine-Minimization
---
# 京都大学 情報学研究科 通信情報システム専攻 2021年7月実施 専門基礎B \[B-4\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_cce.pdf)

下記のすべての問に答えよ。  
$\overline{\phantom{x}}$ は論理否定、$\cdot$ は論理積、$+$ は論理和、$\oplus$ は排他的論理和を表す。

### (1)
以下に示す論理関数 $f$ について、以下の問に答えよ。

$$
f
=
(a+\bar{b}+d)\cdot(a+\bar{c}+\bar{d})\cdot(\bar{b}+\bar{c}+d)\cdot(\bar{a}+\bar{c}+\bar{d})\cdot(\bar{a}+b+\bar{d})
$$

(a) 論理関数 $f$ の最小積和形表現を求めよ。

(b) 論理関数 $f$ の最小和積形表現を求めよ。

(c) 3入力 NAND ゲートのみを用いて、論理関数 $f$ を出力とするゲート数最小の論理回路を示せ。なお、入力として、$a,\ b,\ c,\ d$ およびそれらの否定 $\bar{a},\ \bar{b},\ \bar{c},\ \bar{d}$ が与えられるものとする。

(d) 論理関数

$$
g=b\cdot\bar{c}+a\cdot\bar{b},\qquad r=b\cdot\bar{c}\cdot d
$$

を考える。

$$
f=(g\oplus h)+r
$$

を満足するすべての論理関数 $h$ の中から、積項数が最小でリテラル数が最も少ない積和形論理式を持つ論理関数の最小積和形表現を求めよ。

### (2)
図(a)に示す入力 $x$ と出力 $y$ を持つ順序回路について、以下の問に答えよ。

(a) 状態遷移出力表を示せ。リセットされた状態を初期状態とし、初期状態から回路を動作させても到達できない状態は記載しないこと。

(b) 問(a)で求めた状態遷移出力表について、状態数が最小であるか答えよ。最小でない場合には、等価な状態の組を示せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p1.png" width="600" alt=""/>
</figure>

### 题目描述

回答全部问题。$\overline{\phantom{x}}$、$\cdot$、$+$、$\oplus$ 分别表示逻辑非、与、或、异或。

1. 对逻辑函数

   $$
   \begin{aligned}
   f={}&(a+\bar b+d)(a+\bar c+\bar d)
   (\bar b+\bar c+d)\\
   &\cdot(\bar a+\bar c+\bar d)(\bar a+b+\bar d)
   \end{aligned}
   $$

   回答：
   1. 求 $f$ 的最简与或式。
   2. 求 $f$ 的最简或与式。
   3. 仅用三输入 NAND 门设计门数最少、输出为 $f$ 的电路；可直接使用 $a,b,c,d$ 及其反变量。
   4. 令
      $g=b\bar c+a\bar b$、$r=b\bar c d$。在所有满足
      $f=(g\oplus h)+r$
      的逻辑函数 $h$ 中，求其最简与或式，使乘积项数最少，并在此基础上文字数也最少。
2. 对下图所示、输入为 $x$、输出为 $y$ 的时序电路：
   1. 写出状态转移—输出表，以复位状态为初态，不列从初态不可达的状态。
   2. 判断所得状态数是否最少；若不是，指出等价状态对。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p1.png" width="600" alt="题目时序电路"/>
   </figure>

## **Kai**
### (1)
#### (a)
Derive the corresponding K-map of $\bar{f}$ and $f$

| &nbsp; | &nbsp; |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p2.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p3.png" width="200" /> |
| $\bar{f} = cd + bc + \bar{a}b\bar{d} + a\bar{b}d$ | $f = \bar{b}\bar d + ab\bar{c} + \bar{a}\bar{c}d$ |

#### (b)
Simplified Boolean Expression for $f$

$$
f=(\bar c+\bar d)(\bar b+\bar c)(a+\bar b+d)(\bar a+b+\bar d)
$$

#### (c)
NAND/Logic Expression for $f$

$$
f=\overline{
\overline{\bar b\bar d}\cdot
\overline{ab\bar c}\cdot
\overline{\bar a\bar c d}}
$$

The three product terms are formed by three 3-input NAND gates (duplicate one input for $\bar b\bar d$), and a fourth 3-input NAND gate combines their outputs. Hence four gates suffice.

The three 1-inputs $(a,b,c,d)=0000,0101,1100$ cannot be covered in pairs by a single implicant, so at least three product terms are necessary.

To justify minimality, observe that the function has no literal that is always true on all of its 1-inputs, and no entire literal half-space on which it is 1. Consequently, the final NAND cannot take a primary literal directly. With at most three gates, it must use only the outputs of the preceding one or two NAND gates. If those preceding gates are parallel, or both their outputs enter the final gate, De Morgan's law reduces the result to at most two product terms. In the remaining chain case the output has the form $P\overline{T}$, where $P,T$ are products of literals. A nonconstant $P$ would force a literal on every 1-input; a constant $P$ would make the output the complement of a single product, which also does not equal this function. Thus none of these cases realizes a function requiring three product terms, and four gates are minimal.


<div align="center">
    <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p4.png" width="400" />
</div>

#### (d)
Derive the K-map of $g, r, h$

| &nbsp; | &nbsp; | &nbsp; |
| :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p5.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p6.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p7.png" width="200" /> |
---

**Equation for $h$:**

$$
h = \bar{a}\bar{c} + a\bar{b}d + \bar{a}\bar{b}\bar{d}
$$

### (2)
#### (a)

$$
D_2 = a_1 a_0 + \bar{a}_2 a_0 x + a_2 a_0 \bar{x}
$$

$$
D_1 = a_2 \bar{a}_0 + a_1 \bar{a}_0 \bar{x} + \bar{a}_2 \bar{a}_1 a_0 \bar{x}
$$

$$
D_0 = \bar{a}_0 x + \bar{a}_2 x + \bar{a}_2 \bar{a}_1 a_0
$$

$$
y = \bar{x} \bar{a}_1 a_0 + a_2 \bar{a}_0
$$

| &nbsp; | &nbsp; |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p8.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p9.png" width="200" /> |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p10.png" width="200" /> | $y=\bar x\bar a_1a_0+a_2\bar a_0$ |

---

**State Transition Table**

| Current State ($a_2a_1a_0$) | $x=0$: Next/Output | $x=1$: Next/Output |
| :---: | :---: | :---: |
| 000 | 000 / 0 | 001 / 0 |
| 001 | 011 / 1 | 101 / 0 |
| 010 | 010 / 0 | 001 / 0 |
| 011 | 100 / 0 | 101 / 0 |
| 100 | 010 / 1 | 011 / 1 |
| 101 | 100 / 1 | 000 / 0 |

#### (b) 
The first product term of the output gate is connected to $Q_0$, not $\overline{Q_0}$ in the original circuit. Thus its correct expression is $\bar x\bar a_1a_0$, as used above.

Partitioning by the two outputs for inputs $0,1$ gives

$$
\{000,010,011\},\quad\{001,101\},\quad\{100\}.
$$

Refining by the blocks containing the next states gives

$$
\{000,010\},\quad\{001\},\quad\{011\},\quad\{100\},\quad\{101\}.
$$

This partition is stable: $000$ and $010$ both output $0$ for either input; on input $0$ each stays within their common block, and on input $1$ each goes to $001$. All other blocks are distinguished by the refinement. Therefore the equivalent pair is $\boxed{000\sim010}$ and the minimum number of states is $\boxed{5}$.
