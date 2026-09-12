---
sidebar_label: 2010年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Sequence-Convergence
  - Discrete-Mathematics.Combinatorics.Counting
---
# 京都大学 情報学研究科 システム科学専攻 2010年8月実施 数学【II】

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
無限乗積 $\prod_{k=2}^\infty(1-1/k^2)$ が収束するか調べ、収束するなら値を求めよ。ここで $\prod_{k=2}^na_k=a_2a_3\cdots a_n$、無限乗積はその $n\to\infty$ の極限と定義する。

### 問2
(i) $100$ から $999$ までの三桁の自然数 $900$ 個のうち、十進表示に数字 $0$ を含まないものはいくつあるか。

(ii) 自然数 $k$ に対して、十進表示が $k$ 桁で数字 $0$ を含まない自然数の個数を求めよ。

(iii) 十進表示に数字 $0$ を含まない自然数全体を $A$ とする。$\sum_{n\in A}1/n$ が収束することを示せ。

#### 题目描述

**问1** 判断无穷乘积 $\prod_{k=2}^\infty(1-1/k^2)$ 是否收敛，若收敛则求其值。无穷乘积定义为有限乘积在上限趋于无穷时的极限。

**问2** (i) $100$ 至 $999$ 的 $900$ 个三位自然数中，十进制表示不含数字 $0$ 的有多少个？(ii) 对任意正整数 $k$，求不含 $0$ 的 $k$ 位自然数数量。(iii) 令 $A$ 为十进制不含 $0$ 的所有自然数的集合，证明 $\sum_{n\in A}1/n$ 收敛。

## **Kai**

### 問1

$$
\prod_{k=2}^n\left(1-\frac1{k^2}\right)
=\prod_{k=2}^n\frac{k-1}k\prod_{k=2}^n\frac{k+1}k
=\frac1n\frac{n+1}2\longrightarrow\boxed{\frac12}.
$$

### 問2
(i) 各桁は $1,\ldots,9$ のいずれかなので $\boxed{9^3=729}$ 個。

(ii) 同様に $\boxed{9^k}$ 個。

(iii) $A_k$ を $A$ のうち $k$ 桁の数の集合とすると、$n\in A_k$ では $n\ge10^{k-1}$。従って

$$
\sum_{n\in A}\frac1n
=\sum_{k=1}^\infty\sum_{n\in A_k}\frac1n
\le\sum_{k=1}^\infty\frac{9^k}{10^{k-1}}
=9\sum_{k=1}^\infty\left(\frac9{10}\right)^{k-1}=90<\infty.
$$

正項級数の比較により収束する。

