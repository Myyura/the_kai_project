---
sidebar_label: "2018年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Operations-Research.Convex-Optimization.Jensen-Inequality
  - Mathematics.Calculus.Continuity-and-Differentiability
---

# 東北大学 大学院理学研究科 数学専攻 2018年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$\mathbb{R}$ 上で定義された実数値関数 $\Phi$ が凸関数であるとき，すなわち任意の $x,y\in\mathbb{R}$ と $t\in(0,1)$ に対して

$$
\Phi(tx+(1-t)y)\le t\Phi(x)+(1-t)\Phi(y)
$$

を満たすとき，以下の問いに答えよ．

(1) $\Phi$ は $\mathbb{R}$ 上連続であることを示せ．

(2) $\displaystyle\sum_{j=1}^n t_j=1$ を満たす $t_j>0$ と $x_j\in\mathbb{R}$（$j=1,2,\ldots,n$）に対して

$$
\Phi\left(\sum_{j=1}^n t_jx_j\right)\le\sum_{j=1}^n t_j\Phi(x_j)
$$

が成り立つことを示せ．

(3) $a>0$ とする．区間 $[0,a]$ 上の実数値連続関数 $f$ に対して

$$
\Phi\left(\frac1a\int_0^a f(x)\,dx\right)\le\frac1a\int_0^a\Phi(f(x))\,dx
$$

が成り立つことを示せ．

### 题目描述

设 $\Phi$ 是定义在 $\mathbb{R}$ 上的实值凸函数，即对任意 $x,y\in\mathbb{R}$ 和 $t\in(0,1)$，都有

$$
\Phi(tx+(1-t)y)\le t\Phi(x)+(1-t)\Phi(y).
$$

回答下列问题。

(1) 证明 $\Phi$ 在 $\mathbb{R}$ 上连续。

(2) 对满足 $\sum_{j=1}^n t_j=1$ 的正数 $t_j$ 及实数 $x_j$（$j=1,\ldots,n$），证明

$$
\Phi\left(\sum_{j=1}^n t_jx_j\right)\le\sum_{j=1}^n t_j\Phi(x_j).
$$

(3) 设 $a>0$。对区间 $[0,a]$ 上的实值连续函数 $f$，证明

$$
\Phi\left(\frac1a\int_0^a f(x)\,dx\right)\le\frac1a\int_0^a\Phi(f(x))\,dx.
$$

## **Kai**

### (1)

$u<v<w$ のとき，$v=\frac{w-v}{w-u}u+\frac{v-u}{w-u}w$ に凸性を適用して整理すると

$$
\frac{\Phi(v)-\Phi(u)}{v-u}
\le\frac{\Phi(w)-\Phi(u)}{w-u}
\le\frac{\Phi(w)-\Phi(v)}{w-v}
$$

を得る．任意の $x_0\in\mathbb{R}$ に対し $a<x_0<b$ を固定する．この不等式から，$a<x<b$，$x\ne x_0$ ならば

$$
\frac{\Phi(x_0)-\Phi(a)}{x_0-a}
\le\frac{\Phi(x)-\Phi(x_0)}{x-x_0}
\le\frac{\Phi(b)-\Phi(x_0)}{b-x_0}.
$$

両端の絶対値の最大を $M$ とすれば，$|\Phi(x)-\Phi(x_0)|\le M|x-x_0|$．よって $\Phi$ は $x_0$ で連続であり，$x_0$ は任意なので結論を得る．

### (2)

$n=1$ は等式，$n=2$ は凸性の定義である．$n$ 個の場合を仮定し，$T=\sum_{j=1}^n t_j=1-t_{n+1}\in(0,1)$ とおくと，凸性と帰納法の仮定により

$$
\begin{aligned}
\Phi\left(\sum_{j=1}^{n+1}t_jx_j\right)
&\le T\Phi\left(\sum_{j=1}^n\frac{t_j}{T}x_j\right)+t_{n+1}\Phi(x_{n+1})\\
&\le\sum_{j=1}^{n+1}t_j\Phi(x_j).
\end{aligned}
$$

したがって，数学的帰納法によりすべての $n$ で成立する．

### (3)

$x_j=ja/n$ とおき，(2) を重み $t_j=1/n$ と値 $f(x_j)$ に適用する：

$$
\Phi\left(\frac1n\sum_{j=1}^n f(x_j)\right)
\le\frac1n\sum_{j=1}^n\Phi(f(x_j)).
$$

$f$ と $\Phi\circ f$ は連続なので，両辺の和はそれぞれ対応する積分のリーマン和である．(1) の $\Phi$ の連続性も用いて $n\to\infty$ とすれば，求める不等式を得る．

## **Reference**

- [東北大学公式問題の保存版（2019年度・共通問題，kyotsu2019(H31).pdf 第3ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2019年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#277f191e-81c5-4be7-8c06-00bb15d7176d)
