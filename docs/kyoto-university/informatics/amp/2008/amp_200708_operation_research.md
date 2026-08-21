---
sidebar_label: "2007年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Linear-Programming.Linear-Programming-Problem
  - Operations-Research.Convex-Optimization.Convex-First-Order-Optimality
---
# 京都大学 情報学研究科 数理工学専攻 2007年8月実施 オペレーションズ・リサーチ

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問(i), (ii)に答えよ。

(i) $f: \mathbb{R}^n \to \mathbb{R}$ を $f(0) = 0$ である凸関数とする。以下の(a), (b)に答えよ。

(a) すべての $t \geq 1$ と $x \in \mathbb{R}^n$ に対して次の不等式が成り立つことを示せ。

$$
f(tx) \geq tf(x)
$$

(b) すべての $x \in \mathbb{R}^n$ に対して $f(x) \leq M$ となる定数 $M$ が存在するとき、すべての $x \in \mathbb{R}^n$ に対して $f(x) = 0$ であることを示せ。

(ii) $u$ を $n$ 次元ベクトル、 $Q$ を $n \times n$ 正定値対称行列とする。 $x \in \mathbb{R}^n$ を決定変数とする次の非線形計画問題を考える。

(P):

$$
\begin{aligned} &\text{minimize} & u^T x \\ &\text{subject to} & x^T Q x \leq u^T Q u \end{aligned}
$$

ここで $T$ は転置記号を表す。次の(A), (B)に答えよ。

(A) カルーシュ・キューン・タッカー条件 (Karush-Khun-Tucker 条件) を用いて、問題 (P) の最適解と目的関数の最小値を求めよ。

(B) 上の結果を用いて、次の不等式が成り立つことを示せ。

$$
(u^T u)^2 \leq (u^T Q u)(u^T Q^{-1} u)
$$

### 题目描述

回答以下两部分问题。

1. 设 $f:\mathbb R^n\to\mathbb R$ 为凸函数且 $f(0)=0$。

   1. 证明对任意 $t\geq1$ 与 $x\in\mathbb R^n$，都有

      $$
      f(tx)\geq t f(x).
      $$

   2. 若存在常数 $M$，使得所有 $x\in\mathbb R^n$ 均满足 $f(x)\leq M$，证明 $f$ 在整个 $\mathbb R^n$ 上恒等于零。

2. 设 $u$ 为 $n$ 维向量，$Q$ 为 $n\times n$ 正定对称矩阵，以 $x\in\mathbb R^n$ 为决策变量考虑非线性规划

   $$
   \begin{aligned}
   \text{minimize}\quad &u^Tx,\\
   \text{subject to}\quad &x^TQx\leq u^TQu,
   \end{aligned}
   $$

   其中 $T$ 表示转置。

   1. 使用 Karush–Kuhn–Tucker 条件求该问题的最优解和目标函数最小值。
   2. 利用所得结果证明

      $$
      (u^Tu)^2\leq(u^TQu)(u^TQ^{-1}u).
      $$

## **Kai**

**(i) (a)** Since $f$ is a convex function, for $t \geq 1$ , let $\lambda = 1/t$ , then $0 < \lambda \leq 1$ . Since $f(0) = 0$ , we can write:

$f(x) = f(\lambda (tx) + (1-\lambda)0) \leq \lambda f(tx) + (1-\lambda) f(0) = \lambda f(tx)$ .

Therefore, $f(x) \leq \frac{1}{t} f(tx)$ , which means $tf(x) \leq f(tx)$ .

**(i) (b)** (a) より、もしある $x$ について $f(x)>0$ なら

$$
f(tx)\geq t f(x)\qquad(t\geq1)
$$

である。十分大きな $t$ を取れば右辺は $M$ を超え、上界 $f(tx)\leq M$ に矛盾する。したがって、すべての $x$ について $f(x)\leq0$ である。

一方、凸性と $f(0)=0$ より

$$
0=f(0)=f\left(\frac{x+(-x)}2\right)
\leq\frac{f(x)+f(-x)}2.
$$

$f(x),f(-x)\leq0$ なので、これは $f(x)=f(-x)=0$ を意味する。よってすべての $x$ に対して $\boxed{f(x)=0}$ である。

**(ii) (A)** $u=0$ のとき、制約は $x^TQx\leq0$ であり、 $Q$ が正定値なので実行可能解は $x=0$ だけである。従って最適解は $x^*=0$ 、最小値は $0$ である。

以下、 $u\ne0$ とする。The Lagrangian of (P) is

$$
L(x, \lambda) = u^T x + \lambda(x^T Q x - u^T Q u).
$$

The KKT conditions are:

$$
\begin{aligned}
\nabla L(x, \lambda) &= u + 2\lambda Q x = 0 \\
\lambda(x^T Q x - u^T Q u) &= 0 \\
\lambda &\geq 0 \\
x^T Q x &\leq u^T Q u
\end{aligned}
$$

停留条件から $\lambda=0$ は不可能なので $\lambda>0$ であり、相補性により制約は等号で成立する。From $u + 2\lambda Q x = 0$ , we have $x = -\frac{1}{2\lambda} Q^{-1} u$ .  Substituting this into $x^T Q x = u^T Q u$ , we get

$$
\left(-\frac{1}{2\lambda} Q^{-1} u\right)^T Q \left(-\frac{1}{2\lambda} Q^{-1} u\right) = u^T Q u
$$

$$
\frac{1}{4\lambda^2} u^T Q^{-1} Q Q^{-1} u = u^T Q u
$$

$$
\frac{1}{4\lambda^2} u^T Q^{-1} u = u^T Q u
$$

$$
\lambda^2 = \frac{u^T Q^{-1} u}{4 u^T Q u} \Rightarrow \lambda = \frac{1}{2} \sqrt{\frac{u^T Q^{-1} u}{u^T Q u}}
$$

Substituting $x = -\frac{1}{2\lambda} Q^{-1} u$ into the objective function $u^T x$ , we get

$$
u^T x = u^T \left(-\frac{1}{2\lambda} Q^{-1} u\right) = -\frac{1}{2\lambda} u^T Q^{-1} u = - \sqrt{\frac{u^T Q u}{u^T Q^{-1} u}} u^T Q^{-1} u = -\sqrt{(u^T Q u)(u^T Q^{-1} u)}
$$

Thus the optimal solution is

$$
\boxed{x^*=-\sqrt{\frac{u^TQu}{u^TQ^{-1}u}}\,Q^{-1}u}
$$

and the minimum value is

$$
\boxed{-\sqrt{(u^TQu)(u^TQ^{-1}u)}}.
$$

目的関数は線形、制約関数は凸であり、 $x=0$ は制約を狭義に満たすため、KKT 条件は十分でもある。

**(ii) (B)**
$u=0$ なら不等式は明らかである。 $u\ne0$ のとき、 $x=-u$ は

$$
(-u)^TQ(-u)=u^TQu
$$

を満たす実行可能解である。従って (A) の最小値はこの点の目的値以下であり、

$$
-\sqrt{(u^TQu)(u^TQ^{-1}u)}
\leq u^T(-u)=-u^Tu.
$$

よって

$$
u^Tu\leq\sqrt{(u^TQu)(u^TQ^{-1}u)}.
$$

両辺は非負なので二乗して

$$
\boxed{(u^Tu)^2\leq(u^TQu)(u^TQ^{-1}u)}
$$

を得る。
