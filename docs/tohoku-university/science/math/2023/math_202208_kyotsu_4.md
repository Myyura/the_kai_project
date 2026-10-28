---
sidebar_label: "2022年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Uniform-Convergence
  - Mathematics.Real-Analysis.Interchange-of-Limit-Derivative-and-Integral
  - Mathematics.Calculus.Continuity-and-Differentiability
---

# 東北大学 大学院理学研究科 数学専攻 2022年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

以下の問いに答えよ．ただし，関数はすべて実数値であるとする．

(1) $\mathbb{R}$ の空でない開区間 $I$ 上で定義された連続関数からなる関数列 $\{g_n(x)\}_{n=1}^{\infty}$ は $I$ 上で定義された関数 $g(x)$ に $I$ 上で一様収束するものとする．このとき，$g(x)$ は $I$ 上で連続であることを示せ．

(2) 関数 $f(x)$ は $\mathbb{R}$ 上で定義された連続関数で，次の (a), (b), (c) をみたすとする．

(a) $f(0)=0$．

(b) ある実数 $L>0$ が存在して，$\displaystyle\lim_{x\to0}\frac{f(x)}x=L$．

(c) ある実数 $M>0$ が存在して，任意の実数 $x$ に対して $|f(x)|<M$ が成り立つ．

このとき，関数 $\displaystyle F(x)=\sum_{n=1}^{\infty}\frac{f(nx)}{n^2}$ は $\mathbb{R}$ 上で一様収束し連続であることを示せ．

(3) (2) で定めた関数 $F(x)$ は $x=0$ で微分可能ではないことを示せ．

### 题目描述

回答下列问题，所有函数均为实值函数。

(1) 定义在非空实开区间 $I$ 上的连续函数列 $\{g_n(x)\}_{n=1}^{\infty}$ 在 $I$ 上一致收敛于函数 $g(x)$。证明 $g$ 在 $I$ 上连续。

(2) 设 $f$ 是 $\mathbb{R}$ 上的连续函数，并满足以下条件。

(a) $f(0)=0$。

(b) 存在实数 $L>0$，使得 $\displaystyle\lim_{x\to0}\frac{f(x)}x=L$。

(c) 存在实数 $M>0$，使任意实数 $x$ 都满足 $|f(x)|<M$。

证明级数 $\displaystyle F(x)=\sum_{n=1}^{\infty}\frac{f(nx)}{n^2}$ 在 $\mathbb{R}$ 上一致收敛，且其和函数连续。

(3) 证明第 (2) 问定义的 $F$ 在 $x=0$ 处不可微。

## **Kai**

### (1)

$x_0\in I$ と $\varepsilon>0$ を任意にとる．一様収束より，ある $N$ について $|g_N(x)-g(x)|<\varepsilon/3$ がすべての $x\in I$ で成り立つ．$g_N$ の $x_0$ での連続性から，十分小さい $\delta>0$ に対して

$$
x\in I,\quad |x-x_0|<\delta
\quad\Longrightarrow\quad |g_N(x)-g_N(x_0)|<\frac{\varepsilon}{3}.
$$

このとき三角不等式より $|g(x)-g(x_0)|<\varepsilon$．したがって $g$ は $I$ 上で連続である．

### (2)

任意の $x\in\mathbb{R}$ に対し $|f(nx)/n^2|\le M/n^2$ であり，$\sum_{n=1}^{\infty}M/n^2<\infty$．Weierstrass の判定法から級数は $\mathbb{R}$ 上で一様収束する．各部分和は連続なので，(1) により $F$ も連続である．

### (3)

$F(0)=0$．(b) より，ある $\delta>0$ をとれば

$$
0<t\le\delta\quad\Longrightarrow\quad \frac{f(t)}t\ge\frac L2.
$$

$0<x<\delta/2$ とし，$N=\lfloor\delta/x\rfloor$ とおく．$n\le N$ ならば $nx\le\delta$ だから

$$
\sum_{n=1}^{N}\frac{f(nx)}{n^2x}\ge\frac L2\sum_{n=1}^{N}\frac1n.
$$

一方，$N\ge\delta/(2x)$ および $\sum_{n>N}n^{-2}\le1/N$ より，尾部は

$$
\left|\sum_{n>N}\frac{f(nx)}{n^2x}\right|
\le\frac Mx\sum_{n>N}\frac1{n^2}
\le\frac{M}{xN}\le\frac{2M}{\delta}.
$$

したがって

$$
\frac{F(x)-F(0)}x
\ge\frac L2\sum_{n=1}^{N}\frac1n-\frac{2M}{\delta}
\longrightarrow+\infty\qquad(x\downarrow0).
$$

よって $F$ は $x=0$ で微分可能ではない．

## **Reference**

- [東北大学公式問題（2023年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2023_R5_kyotsu.pdf)
- [L^2：2023年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#d4271f1f-8a13-42ac-8e6b-c6c4114be685)
