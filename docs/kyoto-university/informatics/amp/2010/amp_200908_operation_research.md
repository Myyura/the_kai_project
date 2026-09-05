---
sidebar_label: "2009年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Linear-Programming.Linear-Programming-Problem
  - Operations-Research.Convex-Optimization.Convex-First-Order-Optimality
---
# 京都大学 情報学研究科 数理工学専攻 2009年8月実施 オペレーションズ・リサーチ

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.amp.i.kyoto-u.ac.jp/innshi/kakomon/h22/h22_senmon3.pdf)

以下の問 (i), (ii) に答えよ。

(i) $A$ を $n \times n$ の実対称行列とし, $g: \mathbb{R}^n \to \mathbb{R}$ を

$$
g(x) = x^T A x
$$

とする。ただし、 $T$ は転置を表す。以下の (a) に答えよ。

(a) $A$ が半正定値行列のとき, $g$ は凸関数であることを示せ。

$f$ を $\mathbb{R}^n$ から $\mathbb{R}$ への凸関数とし、次の非線形計画問題を考える。

$$
\begin{aligned}
&\text{minimize} \quad f(x) + g(x) \\
&\text{subject to} \quad x \in \mathbb{R}^n
\end{aligned}
$$

この問題の大域的最適解の集合を $X$ とし、 $X$ は空集合ではないとする。以下の (b), (c) に答えよ。

(b) $A$ が半正定値行列のとき、 $X$ は凸集合であることを示せ。

(c) $A$ が正定値行列のとき、 $X$ の要素は唯一であることを示せ。

(ii) $\alpha$ と $b_i$ $(i = 1, ..., m)$ を正の定数とする。決定変数が $(x_1, ..., x_m, y, z_1, ..., z_m)$ である次の非線形計画問題を考える.

(P):

$$
\begin{aligned}
&\text{minimize} \quad \frac{1}{2} \sum_{i=1}^m x_i^2 - \alpha y + \sum_{i=1}^m z_i \\
&\text{subject to} \quad x_i \geq b_i + y - z_i \quad (i = 1, ..., m) \\
&\qquad\qquad y \geq 0, \quad z_i \geq 0 \quad (i = 1, ..., m)
\end{aligned}
$$

$(x_1^*, ..., x_m^*, y^*, z_1^*, ..., z_m^*)$ を問題 (P) の大域的最適解とする。次の (A) - (C) に答えよ.

(A) 問題 (P) のカルーシュ・キューン・タッカー条件 (Karush-Kuhn-Tucker 条件) を書け。

(B) $z_i^* > 0$ である $i$ に対して, $x_i^* = 1$ であることを示せ。

(C) $K = \{ i \mid x_i^* < b_i \}$ とする. $y^* > 0$ のとき, $|K| \leq \alpha$ となることを示せ。ただし、 $|K|$ は集合 $K$ の要素の数を表す。

### 题目描述

回答以下两部分问题。

1. 设 $A$ 为 $n\times n$ 实对称矩阵，并定义

   $$
   g(x)=x^TAx,\qquad x\in\mathbb R^n,
   $$

   其中 $T$ 表示转置。

   1. 当 $A$ 半正定时，证明 $g$ 是凸函数。
   2. 再设 $f:\mathbb R^n\to\mathbb R$ 为凸函数，考虑无约束问题

      $$
      \text{minimize}\quad f(x)+g(x),\qquad x\in\mathbb R^n.
      $$

      其全局最优解集合记为非空集合 $X$。当 $A$ 半正定时，证明 $X$ 是凸集。
   3. 当 $A$ 正定时，证明 $X$ 只含一个元素。

2. 设 $\alpha$ 与 $b_i\ (i=1,\ldots,m)$ 均为正数，以
   $(x_1,\ldots,x_m,y,z_1,\ldots,z_m)$ 为决策变量考虑

   $$
   \begin{aligned}
   \mathrm P:\quad \text{minimize}\quad
   &\frac12\sum_{i=1}^{m}x_i^2-\alpha y+\sum_{i=1}^{m}z_i,\\
   \text{subject to}\quad
   &x_i\geq b_i+y-z_i\quad(i=1,\ldots,m),\\
   &y\geq0,\qquad z_i\geq0\quad(i=1,\ldots,m).
   \end{aligned}
   $$

   设 $(x_1^*,\ldots,x_m^*,y^*,z_1^*,\ldots,z_m^*)$ 是该问题的全局最优解。

   1. 写出问题 $\mathrm P$ 的 Karush–Kuhn–Tucker 条件。
   2. 证明对每个满足 $z_i^*>0$ 的指标 $i$，都有 $x_i^*=1$。
   3. 令 $K=\{i\mid x_i^*<b_i\}$。在 $y^*>0$ 时证明
      $|K|\leq\alpha$，其中 $|K|$ 表示 $K$ 的元素个数。

## **Kai**

(i)

(a)  $g(x) = x^T A x$ . Since A is a symmetric matrix, for any x, y and $\lambda \in [0,1]$ , we have

$g(\lambda x + (1-\lambda)y) = (\lambda x + (1-\lambda)y)^T A (\lambda x + (1-\lambda)y)$

$= \lambda^2 x^T A x + \lambda(1-\lambda) x^T A y + \lambda(1-\lambda) y^T A x + (1-\lambda)^2 y^T A y$

$= \lambda^2 x^T A x + 2\lambda(1-\lambda) x^T A y + (1-\lambda)^2 y^T A y$

Since A is positive semi-definite, $x^T A x \geq 0$ for any x.

Now, $\lambda g(x) + (1-\lambda)g(y) = \lambda x^T A x + (1-\lambda)y^T A y$ . Then,

$\lambda g(x) + (1-\lambda)g(y) - g(\lambda x + (1-\lambda)y) = \lambda(1-\lambda)x^T A x + (1-\lambda)\lambda y^T A y - 2\lambda(1-\lambda) x^T A y = \lambda(1-\lambda)(x^T A x + y^T A y - 2x^T A y) = \lambda(1-\lambda)(x-y)^T A (x-y) \geq 0$ .

Thus, $g(\lambda x + (1-\lambda)y) \leq \lambda g(x) + (1-\lambda)g(y)$ , so $g(x)$ is convex.

(b) Let $x, y \in X$ , so $f(x) + g(x) = f(y) + g(y) = \min_{z \in \mathbb{R}^n} f(z) + g(z)$ . Since f and g are convex, for $\lambda \in [0,1]$ , $f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)$ and $g(\lambda x + (1-\lambda)y) \leq \lambda g(x) + (1-\lambda)g(y)$ .
Therefore, $f(\lambda x + (1-\lambda)y) + g(\lambda x + (1-\lambda)y) \leq \lambda (f(x) + g(x)) + (1-\lambda)(f(y) + g(y)) = \lambda \min_{z \in \mathbb{R}^n} f(z) + g(z) + (1-\lambda) \min_{z \in \mathbb{R}^n} f(z) + g(z) = \min_{z \in \mathbb{R}^n} f(z) + g(z)$ .
This implies that $f(\lambda x + (1-\lambda)y) + g(\lambda x + (1-\lambda)y) = \min_{z \in \mathbb{R}^n} f(z) + g(z)$ , so $\lambda x + (1-\lambda)y \in X$ . Therefore, $X$ is a convex set.

(c) Since A is positive definite, g(x) is strictly convex. Also, f(x) is convex. Then f(x) + g(x) is strictly convex. Thus, the minimum of f(x) + g(x) is unique.

(ii)

(A) Lagrangian:

$L(x, y, z, \lambda, \mu) = \frac{1}{2} \sum_{i=1}^m x_i^2 - \alpha y + \sum_{i=1}^m z_i + \sum_{i=1}^m \lambda_i (b_i + y - z_i - x_i) - \mu y - \sum_{i=1}^m \nu_i z_i$ , where $\lambda_i, \mu, \nu_i \geq 0$ .

KKT conditions:

1. $\frac{\partial L}{\partial x_i} = x_i - \lambda_i = 0 \implies x_i = \lambda_i$ , for $i = 1, ..., m$ .
2. $\frac{\partial L}{\partial y} = -\alpha + \sum_{i=1}^m \lambda_i - \mu = 0 \implies \alpha = \sum_{i=1}^m \lambda_i - \mu$ .
3. $\frac{\partial L}{\partial z_i} = 1 - \lambda_i - \nu_i = 0 \implies \lambda_i + \nu_i = 1$ , for $i = 1, ..., m$ .
4. $x_i \geq b_i + y - z_i$ , $y \geq 0$ , $z_i \geq 0$ , $\lambda_i \geq 0$ , $\mu \geq 0$ , $\nu_i \geq 0$ , for $i = 1, ..., m$ .
5. $\lambda_i (b_i + y - z_i - x_i) = 0$ , $\mu y = 0$ , $\nu_i z_i = 0$ , for $i = 1, ..., m$ .

(B) If $z_i^* > 0$ , then $\nu_i = 0$ , so $\lambda_i = 1$ , then $x_i^* = 1$ .

(C) $y^*>0$ なら相補性から $\mu=0$ であり、 $y$ に関する停留条件より

$$
\alpha=\sum_{i=1}^m\lambda_i.
$$

$i\in K$ 、すなわち $x_i^*<b_i$ とする。実行可能性から

$$
z_i^*\geq b_i+y^*-x_i^*>y^*>0.
$$

従って相補性より $\nu_i=0$ であり、 $z_i$ に関する停留条件 $\lambda_i+\nu_i=1$ から $\lambda_i=1$ である。ゆえに

$$
|K|=\sum_{i\in K}\lambda_i
\leq\sum_{i=1}^m\lambda_i=\alpha.
$$

従って $\boxed{|K|\leq\alpha}$ である。
