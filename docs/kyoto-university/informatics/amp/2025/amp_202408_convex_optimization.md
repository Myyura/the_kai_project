---
sidebar_label: "2024年8月実施 凸最適化"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Positive-Semidefinite-Matrix
  - Operations-Research.Optimization-Basics.Parametric-Optimization-and-Value-Function
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
---

# 京都大学 情報学研究科 数理工学コース 2024年8月実施 凸最適化

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$A$ を $n\times n$ の正定値対称行列とする。関数 $f:\mathbb R^n\times\mathbb R^n\to\mathbb R$ を以下のように定義する。

$$
f(x,y)=(x-y)^\top A(x-y)
$$

ただし、$\top$ は転置記号を表す。

$y\in\mathbb R^n$ をパラメータにもつ次の最適化問題 $\mathrm P(y)$ を考える。

$$
\begin{array}{ll}
\mathrm P(y):&\text{Minimize}\quad f(x,y)\\
&\text{subject to}\quad x^\top Ax\le1.
\end{array}
$$

ただし、問題 $\mathrm P(y)$ の決定変数は $x$ である。問題 $\mathrm P(y)$ は唯一の最適解 $\bar x(y)$ をもつとする。以下の問いに答えよ。

(i) 関数 $f$ が凸関数であることを示せ。

(ii) 関数 $g:\mathbb R^n\to\mathbb R$ を以下のように定義する。

$$
g(y)=f(\bar x(y),y)
$$

関数 $g$ が凸関数であることを示せ。

(iii) 問題 $\mathrm P(y)$ のカルーシュ・キューン・タッカー (Karush–Kuhn–Tucker) 条件を書け。

(iv) $\bar x(y)$ を求めよ。

#### 题目描述

设 $A$ 为 $n\times n$ 实对称正定矩阵，定义

$$
f(x,y)=(x-y)^\top A(x-y),\qquad x,y\in\mathbb R^n,
$$

其中 $\top$ 表示转置。对参数 $y\in\mathbb R^n$，考虑以 $x$ 为决策变量的优化问题

$$
\mathrm P(y):\quad \min_{x^\top Ax\le1}f(x,y).
$$

假设该问题具有唯一最优解 $\bar x(y)$。

(i) 证明 $f$ 是关于 $(x,y)$ 的凸函数。

(ii) 定义最优值函数 $g(y)=f(\bar x(y),y)$，证明 $g$ 是凸函数。

(iii) 写出 $\mathrm P(y)$ 的 KKT 条件。

(iv) 求 $\bar x(y)$。

## **Kai**

### (i)

$\xi=(x^\top,y^\top)^\top\in\mathbb R^{2n}$ とおく。$A^\top=A$ より

$$
\nabla f(\xi)=
\begin{pmatrix}2A(x-y)\\-2A(x-y)\end{pmatrix},
\qquad
\nabla^2 f(\xi)=2
\begin{pmatrix}A&-A\\-A&A\end{pmatrix}.
$$

任意の $z=(z_1^\top,z_2^\top)^\top\in\mathbb R^{2n}$ に対して、

$$
z^\top\nabla^2 f(\xi)z
=2(z_1-z_2)^\top A(z_1-z_2)\ge0.
$$

したがってヘッセ行列は半正定値であり、$f$ は $(x,y)$ の凸関数である。

### (ii)

$C=\{x\in\mathbb R^n:x^\top Ax\le1\}$ とおく。$x\mapsto x^\top Ax$ は凸関数なので、$C$ は凸集合である。

任意の $y_1,y_2\in\mathbb R^n$ と $\theta\in[0,1]$ に対して、

$$
x_1=\bar x(y_1),\quad x_2=\bar x(y_2),\quad
y_\theta=\theta y_1+(1-\theta)y_2,\quad
\widetilde x=\theta x_1+(1-\theta)x_2
$$

とおく。$x_1,x_2\in C$ と $C$ の凸性より $\widetilde x\in C$ である。よって、最適性と (i) の凸性から

$$
\begin{aligned}
g(y_\theta)
&=f(\bar x(y_\theta),y_\theta)\\
&\le f(\widetilde x,y_\theta)\\
&\le\theta f(x_1,y_1)+(1-\theta)f(x_2,y_2)\\
&=\theta g(y_1)+(1-\theta)g(y_2).
\end{aligned}
$$

したがって $g$ は凸関数である。

### (iii)

ラグランジュ関数を

$$
L(x,\lambda;y)=(x-y)^\top A(x-y)+\lambda(x^\top Ax-1)
$$

とおく。KKT 条件は

$$
\boxed{
\begin{aligned}
2A(x-y)+2\lambda Ax&=0,\\
x^\top Ax&\le1,\\
\lambda&\ge0,\\
\lambda(x^\top Ax-1)&=0.
\end{aligned}}
$$

この問題は凸計画問題であり、$x=0$ は狭義実行可能点であるから、KKT 条件は最適性の必要十分条件となる。

### (iv)

$A$ は正則なので、停留条件は

$$
(1+\lambda)x=y
$$

と同値である。

**$y^\top Ay\le1$ の場合。** $x=y$、$\lambda=0$ とすると KKT 条件をすべて満たす。よって $\bar x(y)=y$ である。

**$y^\top Ay>1$ の場合。** $\lambda=0$ ならば $x=y$ となり実行不可能なので、$\lambda>0$ である。相補性条件から $x^\top Ax=1$ であり、

$$
1=\frac{y^\top Ay}{(1+\lambda)^2}.
$$

$1+\lambda>0$ より

$$
\lambda=\sqrt{y^\top Ay}-1>0,\qquad
x=\frac{y}{\sqrt{y^\top Ay}}.
$$

この組は KKT 条件をすべて満たす。以上より

$$
\boxed{
\bar x(y)=
\begin{cases}
y,&y^\top Ay\le1,\\[2mm]
\dfrac{y}{\sqrt{y^\top Ay}},&y^\top Ay>1.
\end{cases}}
$$

## **Reference**

- [京都大学公式：2024年夏期実施 数理工学コース入試問題・凸最適化 問3（PDF 9–10ページ）](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_amp.pdf)
