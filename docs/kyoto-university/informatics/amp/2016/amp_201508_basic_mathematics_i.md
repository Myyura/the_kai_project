---
sidebar_label: "2015年8月実施 基礎数学 I"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Limit
---
# 京都大学 情報学研究科 数理工学専攻 2015年8月実施 基礎数学 I

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/pukiwiki/amptest-e/index.php?file=h28_exam.pdf&pcmd=open&plugin=attach&refer=Entrance+Examination+Information)

実数列 $\{a_n\}$ を

$$
a_1 = \sqrt{6}, \quad a_{n+1} = \sqrt{6+a_n} \quad (n = 1, 2, ...)
$$

によって定める. 以下の問いに答えよ.

(i) 数列 $\{a_n\}$ は上に有界であることを示せ.

(ii) $n$ が増加するとき数列 $\{a_n\}$ は単調に増加することを示せ.

### 题目描述

定义实数列 $\{a_n\}$：

$$
a_1=\sqrt6,\qquad
a_{n+1}=\sqrt{6+a_n}\quad(n=1,2,\ldots).
$$

完成以下各问：

1. 证明数列 $\{a_n\}$ 有上界。
2. 证明随着 $n$ 增大，数列 $\{a_n\}$ 单调递增。

## **Kai**

### (i) 上からの有界性

すべての正の整数 $n$ に対して $a_n<3$ であることを帰納法で示す。

$n=1$ のとき、

$$
a_1=\sqrt{6}<3.
$$

$a_k<3$ と仮定すると、

$$
a_{k+1}=\sqrt{6+a_k}<\sqrt{6+3}=3.
$$

したがって、帰納法により $a_n<3$ がすべての $n$ で成り立つ。ゆえに数列 $\{a_n\}$ は上に有界である。

### (ii) 単調増加性

まず

$$
a_1=\sqrt{6}<\sqrt{6+\sqrt{6}}=a_2.
$$

$a_k<a_{k+1}$ と仮定する。平方根関数は正の範囲で狭義単調増加なので、

$$
a_{k+1}
=\sqrt{6+a_k}
<\sqrt{6+a_{k+1}}
=a_{k+2}.
$$

したがって、帰納法により $a_n<a_{n+1}$ がすべての $n$ で成り立ち、 $\{a_n\}$ は単調増加である。

なお、(i) と (ii) からこの数列は収束する。極限を $\alpha$ とおけば、 $\alpha>0$ かつ

$$
\alpha=\sqrt{6+\alpha}
$$

であるから、 $\alpha^2-\alpha-6=0$ となる。正の解を選んで $\alpha=3$ を得る。
