---
sidebar_label: "2019年度 基礎科目 問題6"
tags:
  - Kyoto-University
  - Mathematics.Topology.Compactness-and-Connectedness
  - Mathematics.Calculus.Extrema
---

# 京都大学 理学研究科 数学・数理解析専攻 2019年度 基礎科目 問題6

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$\mathbb R^2$ 上の実数値連続関数 $f$ についての次の条件 $(*)$ を考える。

$(*)$ 任意の正の実数 $R$ に対して、次の集合は有界である。

$$
\{(x,y)\in\mathbb R^2\mid |f(x,y)|\le R\}.
$$

1. 条件 $(*)$ を満たす連続関数 $f$ の例を与え、それが $(*)$ を満たすことを示せ。
2. 連続関数 $f$ が条件 $(*)$ を満たすとき、次のいずれかが成り立つことを示せ。
   - (a) $f$ は最大値を持つが、最小値は持たない。
   - (b) $f$ は最小値を持つが、最大値は持たない。

#### 题目描述

对连续函数 $f:\mathbb R^2\to\mathbb R$，考虑条件 $(*)$：对任意 $R>0$，集合 $\{(x,y):|f(x,y)|\le R\}$ 有界。

1. 举出满足 $(*)$ 的连续函数，并验证该条件。
2. 证明满足 $(*)$ 的连续函数恰满足下列情形之一：(a) 存在最大值但不存在最小值；(b) 存在最小值但不存在最大值。

## **Kai**

### (1)

$f(x,y)=x^2+y^2$ とすれば、$\{|f|\le R\}$ は半径 $\sqrt R$ の閉円板なので有界である。

### (2)

条件 $(*)$ は

$$
|f(p)|\longrightarrow\infty\qquad(\|p\|\longrightarrow\infty)
$$

を意味する。特に、ある $r_0>0$ に対し、$\|p\|>r_0$ なら $|f(p)|>1$ である。$\mathbb R^2$ の円板の外側 $\{p:\|p\|>r_0\}$ は連結であり、そこで $f$ は零にならない。連続性より、この領域では $f$ の符号が一定である。

外側で正なら、上の極限と合わせて $f(p)\to+\infty$ となる。十分大きい $r>0$ を取れば、$\|p\|>r$ で $f(p)>f(0)+1$ とできる。閉円板 $\{\|p\|\le r\}$ 上で $f$ は最小値を取り、それは平面全体での最小値でもある。一方、$f$ は上に非有界なので最大値を持たない。これは (b) である。

外側で負なら $f(p)\to-\infty$ となり、同じ議論を $-f$ に適用すると (a) が成り立つ。

## **Reference**

- [京都大学公式問題（2019年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2018math_kiso.pdf)
- [照合用参考解答（H31-basic.pdf、PDF 9–10ページ）](https://drive.google.com/file/d/1IriDJsz9XGidy2KdL3U1GBksFntQzNIh/view)
