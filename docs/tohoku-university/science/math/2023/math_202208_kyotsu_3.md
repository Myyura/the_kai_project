---
sidebar_label: "2022年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Sequence-Convergence
  - Mathematics.Calculus.Infinite-Series
---

# 東北大学 大学院理学研究科 数学専攻 2022年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

実数列 $\{a_n\}_{n=1}^{\infty}$ に対して

$$
b_n=\frac{a_1+a_2+\cdots+a_n}{n}\qquad(n=1,2,\ldots)
$$

とおく．$\alpha$ を実数とするとき，以下の問いに答えよ．

(1) $\displaystyle\lim_{n\to\infty}a_n=\alpha$ ならば，$\displaystyle\lim_{n\to\infty}b_n=\alpha$ であることを示せ．

(2) $\{a_n\}_{n=1}^{\infty}$ は収束しないが，$\{b_n\}_{n=1}^{\infty}$ は収束するような実数列 $\{a_n\}_{n=1}^{\infty}$ の例を挙げよ．また，その理由も述べること．

(3) 正の整数 $n$ に対して $c_n=a_n-a_{n-1}$ とおく．ただし，$a_0=0$ とする．$\displaystyle\lim_{n\to\infty}b_n=\alpha$ かつ $\displaystyle\lim_{n\to\infty}nc_n=0$ ならば，$\displaystyle\lim_{n\to\infty}a_n=\alpha$ であることを示せ．

### 题目描述

对实数列 $\{a_n\}_{n=1}^{\infty}$，令

$$
b_n=\frac{a_1+a_2+\cdots+a_n}{n}\qquad(n=1,2,\ldots).
$$

设 $\alpha$ 为实数，回答下列问题。

(1) 证明：若 $\displaystyle\lim_{n\to\infty}a_n=\alpha$，则 $\displaystyle\lim_{n\to\infty}b_n=\alpha$。

(2) 举一个 $\{a_n\}_{n=1}^{\infty}$ 不收敛、但 $\{b_n\}_{n=1}^{\infty}$ 收敛的实数列的例子，并说明理由。

(3) 对正整数 $n$，令 $c_n=a_n-a_{n-1}$，其中 $a_0=0$。证明：若 $\displaystyle\lim_{n\to\infty}b_n=\alpha$ 且 $\displaystyle\lim_{n\to\infty}nc_n=0$，则 $\displaystyle\lim_{n\to\infty}a_n=\alpha$。

## **Kai**

### (1)

$\varepsilon>0$ に対し，$k\ge N$ ならば $|a_k-\alpha|<\varepsilon$ となる $N$ をとる．$n\ge N$ に対して

$$
|b_n-\alpha|
\le\frac1n\sum_{k=1}^{N-1}|a_k-\alpha|
 +\frac1n\sum_{k=N}^{n}|a_k-\alpha|
\le\frac{C_N}{n}+\varepsilon,
$$

ただし $C_N=\sum_{k=1}^{N-1}|a_k-\alpha|$．$n\to\infty$ の上極限をとり，$\varepsilon\downarrow0$ とすれば $b_n\to\alpha$ となる．

### (2)

$a_n=(-1)^n$ とする．偶数番目の部分列は $1$，奇数番目の部分列は $-1$ なので $\{a_n\}$ は収束しない．一方

$$
b_{2m}=0,\qquad b_{2m-1}=-\frac1{2m-1}
$$

であるから $b_n\to0$．

### (3)

$a_k=\sum_{j=1}^{k}c_j$ より

$$
b_n=\frac1n\sum_{j=1}^{n}(n-j+1)c_j,
\qquad
a_n-b_n=\frac1n\sum_{j=1}^{n}(j-1)c_j.
$$

したがって

$$
|a_n-b_n|\le\frac1n\sum_{j=1}^{n}|jc_j|.
$$

仮定から $|jc_j|\to0$ であり，(1) をこの数列に適用すると右辺は $0$ に収束する．よって $a_n=b_n+(a_n-b_n)\to\alpha$．

## **Reference**

- [東北大学公式問題（2023年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2023_R5_kyotsu.pdf)
- [L^2：2023年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#eacb8e87-7ce7-4791-8e4a-a592e45fc356)
