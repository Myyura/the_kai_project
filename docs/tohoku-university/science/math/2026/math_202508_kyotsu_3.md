---
sidebar_label: "2025年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Uniform-Convergence
  - Mathematics.Calculus.Cauchy-Sequence
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
  - Mathematics.Real-Analysis.Uniform-Continuity
---

# 東北大学 大学院理学研究科 数学専攻 2025年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$f$ を $\mathbb{R}$ の区間 $I=[0,\infty)$ で定義された実数値関数とし，$I$ 上の実数値関数の列 $\{f_n\}_{n=1}^{\infty}$ と実数列 $\{a_n\}_{n=1}^{\infty}$ は，次の三つの条件 (A), (B), (C) を満たすとする．

(A) $\{f_n\}_{n=1}^{\infty}$ は $I$ 上で $f$ に一様収束する．

(B) 任意の正の整数 $n$ に対して $f_n$ は $I$ 上で連続である．

(C) 任意の正の整数 $n$ に対して極限 $\displaystyle\lim_{x\to\infty}f_n(x)$ が存在して $a_n$ に等しい．

以下の問いに答えよ．

(1) 数列 $\{a_n\}_{n=1}^{\infty}$ は収束することを示せ．

(2) 数列 $\{a_n\}_{n=1}^{\infty}$ の極限を $\alpha$ とする．$\displaystyle\lim_{x\to\infty}f(x)=\alpha$ が成り立つことを示せ．

(3) $f$ は $I$ 上で一様連続であることを示せ．

(4) $\alpha$ を設問 (2) で定めた定数とするとき，

$$
\lim_{n\to\infty}\frac1n\int_0^n f_n(x)\,dx=\alpha
$$

が成り立つことを示せ．

### 题目描述

设 $f$ 为实数区间 $I=[0,\infty)$ 上的实值函数，$I$ 上的实值函数列 $\{f_n\}_{n=1}^{\infty}$ 和实数列 $\{a_n\}_{n=1}^{\infty}$ 满足以下三个条件。

(A) $f_n$ 在 $I$ 上一致收敛于 $f$。

(B) 对每个正整数 $n$，$f_n$ 在 $I$ 上连续。

(C) 对每个正整数 $n$，极限 $\displaystyle\lim_{x\to\infty}f_n(x)$ 存在且等于 $a_n$。

回答下列问题。

(1) 证明数列 $\{a_n\}_{n=1}^{\infty}$ 收敛。

(2) 记该数列的极限为 $\alpha$。证明 $\displaystyle\lim_{x\to\infty}f(x)=\alpha$。

(3) 证明 $f$ 在 $I$ 上一致连续。

(4) 对第 (2) 问定义的常数 $\alpha$，证明

$$
\lim_{n\to\infty}\frac1n\int_0^n f_n(x)\,dx=\alpha.
$$

## **Kai**

### (1)

一様収束より，任意の $\varepsilon>0$ に対し，ある $N$ が存在して，$m,n\ge N$ ならばすべての $x\in I$ について

$$
|f_m(x)-f_n(x)|<\frac{\varepsilon}{2}
$$

となる．$m,n$ を固定して $x\to\infty$ とすれば，$|a_m-a_n|\le\varepsilon/2<\varepsilon$．したがって $\{a_n\}$ はコーシー列であり，$\mathbb{R}$ の完備性により収束する．

### (2)

$\varepsilon>0$ に対して，$N$ を十分大きくとり

$$
\sup_{x\in I}|f(x)-f_N(x)|<\frac{\varepsilon}{3},
\qquad |a_N-\alpha|<\frac{\varepsilon}{3}
$$

とする．(C) より，ある $R>0$ が存在して，$x\ge R$ ならば $|f_N(x)-a_N|<\varepsilon/3$．よって

$$
|f(x)-\alpha|
\le |f(x)-f_N(x)|+|f_N(x)-a_N|+|a_N-\alpha|
<\varepsilon.
$$

これで $\displaystyle\lim_{x\to\infty}f(x)=\alpha$ が示された．

### (3)

連続関数列の一様極限なので $f$ は連続である．$\varepsilon>0$ に対し，$x\ge R$ ならば $|f(x)-\alpha|<\varepsilon/2$ となる $R>0$ をとる．コンパクト区間 $[0,R+1]$ 上での一様連続性より，ある $0<\delta\le1$ が存在して，$x,y\in[0,R+1]$ かつ $|x-y|<\delta$ ならば $|f(x)-f(y)|<\varepsilon$．

一方，$|x-y|<\delta$ で，少なくとも一方が $R+1$ より大きければ，両方とも $R$ より大きい．このときも

$$
|f(x)-f(y)|\le|f(x)-\alpha|+|f(y)-\alpha|<\varepsilon.
$$

したがって $f$ は $I$ 上で一様連続である．

### (4)

$\varepsilon>0$ に対して，$x\ge R$ ならば $|f(x)-\alpha|<\varepsilon$ となる $R$ を固定する．$n>R$ のとき

$$
\begin{aligned}
\left|\frac1n\int_0^n f_n(x)\,dx-\alpha\right|
&\le \sup_{x\in I}|f_n(x)-f(x)|
 +\frac1n\int_0^n|f(x)-\alpha|\,dx\\
&\le \sup_{x\in I}|f_n(x)-f(x)|
 +\frac1n\int_0^R|f(x)-\alpha|\,dx+\varepsilon.
\end{aligned}
$$

最初の項は (A) により $0$ に収束し，二番目の項も分子が有限の定数なので $0$ に収束する．上極限は $\varepsilon$ 以下であり，$\varepsilon$ は任意だから求める極限は $\alpha$ である．

## **Reference**

- [東北大学公式問題（2026年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2026_R8_kyotsu.pdf)
- [L^2：2026年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#d3d47b8b-9b70-4178-bafc-8c6cfa3881b2)
