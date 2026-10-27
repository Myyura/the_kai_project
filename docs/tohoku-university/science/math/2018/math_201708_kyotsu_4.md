---
sidebar_label: "2017年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Sequence-Convergence
---

# 東北大学 大学院理学研究科 数学専攻 2017年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

$\alpha$ を実数とする．単調増加な実数列 $\{a_n\}_{n=1}^\infty$ が

$$
\lim_{n\to\infty}\frac1n\sum_{k=1}^n a_k=\alpha
$$

を満たすとする．このとき以下の問いに答えよ．

(1) 任意の正の整数 $n$ に対して，$a_n\le\alpha$ であることを示せ．

(2) $\displaystyle\lim_{n\to\infty}a_n=\alpha$ を示せ．

(3) $\displaystyle\lim_{n\to\infty}\frac1n\sum_{k=1}^n k(a_{k+1}-a_k)=0$ を示せ．

### 题目描述

本卷共有4题，全部作答。

设 $\alpha$ 是实数，单调递增的实数列 $\{a_n\}_{n=1}^\infty$ 满足

$$
\lim_{n\to\infty}\frac1n\sum_{k=1}^n a_k=\alpha.
$$

回答下列问题。

(1) 证明对任意正整数 $n$，都有 $a_n\le\alpha$。

(2) 证明 $\displaystyle\lim_{n\to\infty}a_n=\alpha$。

(3) 证明 $\displaystyle\lim_{n\to\infty}\frac1n\sum_{k=1}^n k(a_{k+1}-a_k)=0$。

## **Kai**

### (1)

任意の正の整数 $m$ を固定する．単調性から，$n\ge m$ に対して

$$
\frac1n\sum_{k=1}^n a_k
\ge\frac1n\sum_{k=1}^{m-1}a_k+\frac{n-m+1}{n}a_m.
$$

$n\to\infty$ とすれば $\alpha\ge a_m$ を得る．$m$ は任意なので結論が成り立つ．

### (2)

単調性と (1) より，任意の $n$ について

$$
\frac1n\sum_{k=1}^n a_k\le a_n\le\alpha.
$$

左辺は仮定により $\alpha$ に収束するので，はさみうちの原理から $a_n\to\alpha$．

### (3)

有限和を整理すると

$$
\sum_{k=1}^n k(a_{k+1}-a_k)=na_{n+1}-\sum_{k=1}^n a_k.
$$

したがって，仮定と (2) より

$$
\frac1n\sum_{k=1}^n k(a_{k+1}-a_k)
=a_{n+1}-\frac1n\sum_{k=1}^n a_k\longrightarrow\alpha-\alpha=0.
$$

## **Reference**

- [東北大学公式問題の保存版（2018年度・共通問題，kyotsu2018(H30).pdf 第3ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2018年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#ce275f38-cc5f-4397-ad45-08487f407f28)
