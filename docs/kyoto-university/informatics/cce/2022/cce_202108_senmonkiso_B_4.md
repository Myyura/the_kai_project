---
sidebar_label: "2021年8月実施 専門基礎B [B-4]"
tags:
  - Kyoto-University
  - Digital-Circuit
---
# 京都大学 情報学研究科 通信情報システム専攻 2021年8月実施 専門基礎B \[B-4\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

## **Description**
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

## **Kai**
### (1)
#### (a)
Derive the corresponding K-map of $\bar{f}$ and $f$

| &nbsp; | &nbsp; |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p2.png" width="200"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p3.png" width="200"> |
| $\bar{f} = cd + bc + \bar{a}b\bar{d} + a\bar{b}d$ | $f = \bar{b}d + ab\bar{c} + \bar{a}\bar{c}d$ |

#### (b)
Simplified Boolean Expression for $f$

$$
f = (\bar{c} + \bar{d})(\bar{b} + \bar{c}) + (a + \bar{b} + d)(\bar{a} + b + \bar{d})
$$

#### (c)
NAND/Logic Expression for $f$

$$
f = \overline{\bar{b}\bar{d} \cdot ab\bar{c} \cdot \bar{a}\bar{c}d}
$$

<div align="center">
    <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p4.png" width="400">
</div>

#### (d)
Derive the K-map of $g, r, h$

| &nbsp; | &nbsp; | &nbsp; |
| :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p5.png" width="200"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p6.png" width="200"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p7.png" width="200"> |
---

**Equation for $h$:**

$$
h = \bar{a}\bar{c} + a\bar{b}d + \bar{a}\bar{b}\bar{d}
$$

### (2)
#### (a)

$$
D_2 = a_1 a_0 + \bar{a}_2 a_0 x + a_2 \bar{a}_0 \bar{x}
$$

$$
D_1 = a_2 \bar{a}_0 + \bar{a}_1 \bar{a}_0 \bar{x} + \bar{a}_2 \bar{a}_1 a_0 x
$$

$$
D_0 = \bar{a}_0 \bar{x} + \bar{a}_2 x + \bar{a}_2 \bar{a}_1 \bar{a}_0
$$

$$
y = \bar{x} \bar{a}_1 \bar{a}_0 + a_2 \bar{a}_0
$$

| &nbsp; | &nbsp; |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p8.png" width="200"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p9.png" width="200"> |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p10.png" width="200"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202108_senmonkiso_B_4_p11.png"  width="200"> |

---

**State Transition Table**

| Current State ($a_2 a_1 a_0$) | Input ($x$) | Next State ($D_2 D_1 D_0$) | Output ($y$) | &nbsp; | Current State ($a_2 a_1 a_0$) | Input ($x$) | Next State ($D_2 D_1 D_0$) | Output ($y$) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 0 0 | 0 | 0 0 0 | 1 | | 1 0 0 | 0 | 0 1 0 | 1 |
| 0 0 0 | 1 | 0 0 1 | 0 | | 1 0 0 | 1 | 0 1 1 | 1 |
| 0 0 1 | 0 | 0 1 1 | 0 | | 1 0 1 | 0 | 1 0 0 | 0 |
| 0 0 1 | 1 | 1 0 1 | 0 | | 1 0 1 | 1 | 0 0 0 | 0 |
| 0 1 0 | 0 | 0 1 0 | 0 | | 1 1 0 | 0 | 0 1 0 | 1 |
| 0 1 0 | 1 | 0 0 1 | 0 | | 1 1 0 | 1 | 0 1 1 | 1 |
| 0 1 1 | 0 | 1 0 0 | 0 | | 1 1 1 | 0 | 1 0 0 | 0 |
| 0 1 1 | 1 | 1 0 1 | 0 | | 1 1 1 | 1 | 1 0 0 | 0 |

#### (b) 
State 100 & 110 are equivalent.
