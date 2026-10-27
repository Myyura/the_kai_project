---
sidebar_label: "2024年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Sequence-Convergence
  - Mathematics.Calculus.Improper-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2024年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

以下の問いに答えよ．ただし，$\mathbb{Z}_{>0}$ は正の整数全体のなす集合を表す．

(1) $\{a_n\}_{n=1}^{\infty}$ は正の実数からなる数列とし，$a_n\ge a_{n+1}$ $(n=1,2,\ldots)$ かつ $\displaystyle\sum_{n=1}^{\infty}a_n<\infty$ を満たすとする．このとき，$\displaystyle\lim_{n\to\infty}na_n=0$ が成り立つことを示せ．

(2) $n\in\mathbb{Z}_{>0}$ に対して，$a_n=\dfrac{1}{(n+1)\log(n+1)}$ で与えられる $\{a_n\}_{n=1}^{\infty}$ は，$\displaystyle\lim_{n\to\infty}na_n=0$ を満たすことを示せ．また，$\displaystyle\sum_{n=1}^{\infty}a_n=\infty$ であることを示せ．

### 题目描述

本卷共有4题，全部作答。

回答下列问题，其中 $\mathbb{Z}_{>0}$ 表示正整数集合。

(1) 正实数列 $\{a_n\}_{n=1}^{\infty}$ 满足 $a_n\ge a_{n+1}$ $(n=1,2,\ldots)$ 以及 $\displaystyle\sum_{n=1}^{\infty}a_n<\infty$。证明 $\displaystyle\lim_{n\to\infty}na_n=0$。

(2) 对 $n\in\mathbb{Z}_{>0}$，令 $a_n=\dfrac{1}{(n+1)\log(n+1)}$。证明 $\displaystyle\lim_{n\to\infty}na_n=0$，并证明 $\displaystyle\sum_{n=1}^{\infty}a_n=\infty$。

## **Kai**

### (1)

$m=\lfloor n/2\rfloor$ とする．単調性と $n-m\ge n/2$ より

$$
0<na_n\le2(n-m)a_n\le2\sum_{k=m+1}^{n}a_k.
$$

収束級数の末尾の和は $m\to\infty$ とともに $0$ に収束するので，はさみうちにより $na_n\to0$．

### (2)

$$
na_n=\frac{n}{n+1}\frac1{\log(n+1)}\longrightarrow0.
$$

一方，$x\mapsto((x+1)\log(x+1))^{-1}$ は $x\ge1$ で正かつ単調減少である．積分判定法により

$$
\int_1^R\frac{dx}{(x+1)\log(x+1)}
=\log\log(R+1)-\log\log2\longrightarrow\infty
$$

なので，$\displaystyle\sum_{n=1}^{\infty}a_n=\infty$ となる．

## **Reference**

- [東北大学公式問題（2025年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_kyotsu.pdf)
- [L^2：2025年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#c4ee729c-5ea3-4198-98b5-418305831aa4)
