---
sidebar_label: "2023年8月実施 選択問題 [5]（ルベーグ積分）"
tags:
  - Tohoku-University
  - Mathematics.Real-Analysis.Lebesgue-Dominated-and-Monotone-Convergence
---

# 東北大学 理学研究科 数学専攻 2023年8月実施 選択問題 \[5\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

正の整数 $n$ と $k=1,\ldots,2^n-1$ に対して

$$
a_{n,k}=\frac{k}{2^n}
$$

とおき、$\mathbb R$ の開区間 $I=(0,1)$ 上の関数 $f_{n,k}:I\to\mathbb R$ を

$$
f_{n,k}(x)=\begin{cases}\dfrac1{\sqrt{a_{n,k}-x}}&(0<x<a_{n,k}),\\0&(a_{n,k}\le x<1)
\end{cases}
$$

と定める。また $m$ を $\mathbb R$ におけるルベーグ測度とする。以下の問いに答えよ。

(1) 正の整数 $n$ と $k=1,\ldots,2^n-1$ に対して関数 $f_{n,k}$ は $I$ 上のルベーグ可測関数であることを示せ。さらにルベーグ積分 $\int_I f_{n,k}(x)m(dx)$ の値を求めよ。

(2) 正の整数 $n$ に対して

$$
\sum_{k=1}^{2^n-1}\sqrt{k}\le2^{\frac32n}
$$

が成り立つことを示せ。

(3) $I$ 上の関数 $f$ を

$$
f(x)=\sum_{n=1}^\infty\sum_{k=1}^{2^n-1}\frac{f_{n,k}(x)}{2^{2n}}\qquad(x\in I)
$$

と定めると、$f$ は $I$ 上でほとんどいたるところ有限な値をとることを示せ。

### 题目描述

对正整数 $n$ 及 $k=1,\ldots,2^n-1$，令 $a_{n,k}=k/2^n$，并在实数开区间 $I=(0,1)$ 上定义函数 $f_{n,k}:I\to\mathbb R$：

$$
f_{n,k}(x)=\begin{cases}\dfrac1{\sqrt{a_{n,k}-x}}&(0<x<a_{n,k}),\\0&(a_{n,k}\le x<1).
\end{cases}
$$

设 $m$ 为实数轴上的勒贝格测度，回答下列问题。

(1) 证明每个 $f_{n,k}$ 都是 $I$ 上的勒贝格可测函数，并求 $\int_I f_{n,k}(x)m(dx)$。

(2) 证明每个正整数 $n$ 都满足

$$
\sum_{k=1}^{2^n-1}\sqrt{k}\le2^{3n/2}.
$$

(3) 在 $I$ 上定义

$$
f(x)=\sum_{n=1}^\infty\sum_{k=1}^{2^n-1}\frac{f_{n,k}(x)}{2^{2n}}.
$$

证明 $f$ 在 $I$ 上几乎处处取有限值。

## **Kai**

### (1)

$f_{n,k}$ は可測集合 $(0,a_{n,k})$ 上の連続関数 $(a_{n,k}-x)^{-1/2}$ と、その補集合上の零関数をつなげた非負可測関数である。また、

$$
\int_I f_{n,k}\,dm
=\int_0^{a_{n,k}}\frac{dx}{\sqrt{a_{n,k}-x}}
=2\sqrt{a_{n,k}}=2\sqrt{\frac{k}{2^n}}.
$$

### (2)

$\sqrt{x}$ の単調性から、

$$
\sum_{k=1}^{2^n-1}\sqrt{k}
\le\int_1^{2^n}\sqrt{x}\,dx
=\frac23\bigl(2^{3n/2}-1\bigr)
\le2^{3n/2}.
$$

### (3)

非負可測関数の部分和に単調収束定理を適用し、(1), (2) を用いると、

$$
\begin{aligned}
\int_I f\,dm
&=\sum_{n=1}^{\infty}2^{-2n}\sum_{k=1}^{2^n-1}2\sqrt{\frac{k}{2^n}}\\
&\le\sum_{n=1}^{\infty}2^{1-5n/2}2^{3n/2}
=2\sum_{n=1}^{\infty}2^{-n}=2<\infty.
\end{aligned}
$$

従って $f$ が無限大となる集合は零集合であり、$f$ はほとんど至る所有限である。

## **Reference**

- [東北大学公式問題（2024年度・選択問題、PDF 4ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_sentaku.pdf)
- [L^2：2024年度・ルベーグ積分の答案](https://note.com/normalmath/n/n89152917de11#2c50405a-37ea-4355-a950-8f9e7f836d04)
