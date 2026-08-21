---
sidebar_label: "2012年8月実施 オペレーションズ・リサーチ"
tags:
  - Kyoto-University
  - Operations-Research.Convex-Optimization.Karush-Kuhn-Tucker-Conditions
  - Operations-Research.Linear-Programming.Linear-Programming-Problem
  - Operations-Research.Convex-Optimization.Convex-First-Order-Optimality
---
# 京都大学 情報学研究科 数理工学専攻 2012年8月実施 オペレーションズ・リサーチ

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$f: \mathbb{R}^n \to \mathbb{R}$ , $g_j: \mathbb{R}^n \to \mathbb{R}$ ( $j = 1, ..., m$ ) を連続的微分可能な凸関数とする. 次の非線形計画問題を考える.

P: Minimize $f(x)$
subject to $g_j(x) \leq 0$ ( $j = 1, ..., m$ )

この問題に対して, 以下のカルーシュ・キューン・タッカー(Karush-Kuhn-Tucker)条件を満たすベクトル $x^* \in \mathbb{R}^n$ と $\mu^* \in \mathbb{R}^m$ とが存在するとする.

$$
\nabla f(x^*) + \sum_{j=1}^m \mu_j^* \nabla g_j(x^*) = 0
$$

$$
g_j(x^*) \leq 0, \quad \mu_j^* \geq 0, \quad \mu_j^* g_j(x^*) = 0 \quad (j = 1, ..., m)
$$

ただし, $\mu_j^*$ は $\mu^*$ の第 $j$ 成分を表す.

さらに, 関数 $\ell: \mathbb{R}^n \to \mathbb{R}$ を以下のように定義する.

$$
\ell(x) = f(x) + \sum_{j=1}^m \mu_j^* g_j(x)
$$

以下の問いに答えよ.

(i) 任意の $x, y \in \mathbb{R}^n$ に対して次の不等式が成り立つことを示せ.

$$
\ell(x) - \ell(y) \geq \nabla \ell(y)^T (x - y)
$$

ただし, $^T$ はベクトルの転置を表す.

(ii) 任意の $x \in \mathbb{R}^n$ に対して次の不等式が成り立つことを示せ.

$$
\ell(x) \geq \ell(x^*)
$$

(iii) 問(ii)の不等式を用いて, $x^*$ が問題 P の大域的最適解であることを示せ.

(iv) $n = 2, m = 2$ とする. さらに, 凸関数 $f, g_1, g_2$ を以下のように定義する.

$$
f(x) = \frac{1}{2}(x_1 - 1)^2 + \frac{1}{2}(x_2 - 1)^2, \quad g_1(x) = -x_1, \quad g_2(x) = x_1 + x_2 - 1
$$

ただし, $x = (x_1, x_2)^T$ である. このとき, 問題 P のカルーシュ・キューン・タッカー条件を満たすベクトル $x^* \in \mathbb{R}^2$ と $\mu^* \in \mathbb{R}^2$ を求めよ.

### 题目描述

设 $f:\mathbb R^n\to\mathbb R$ 及 $g_j:\mathbb R^n\to\mathbb R\ (j=1,\ldots,m)$ 均为连续可微凸函数。考虑非线性规划

$$
\begin{aligned}
P:\quad \min_x\quad &f(x)\\
\text{s.t.}\quad &g_j(x)\leq0\qquad(j=1,\ldots,m).
\end{aligned}
$$

假设存在 $x^*\in\mathbb R^n$、$\mu^*\in\mathbb R^m$ 满足该问题的 Karush–Kuhn–Tucker（KKT）条件

$$
\nabla f(x^*)+\sum_{j=1}^m\mu_j^*\nabla g_j(x^*)=0,
$$

$$
g_j(x^*)\leq0,\qquad
\mu_j^*\geq0,\qquad
\mu_j^*g_j(x^*)=0
\quad(j=1,\ldots,m),
$$

其中 $\mu_j^*$ 是 $\mu^*$ 的第 $j$ 个分量。定义

$$
\ell(x)=f(x)+\sum_{j=1}^m\mu_j^*g_j(x).
$$

完成以下各问，其中上标 $T$ 表示转置：

1. 证明对任意 $x,y\in\mathbb R^n$，

   $$
   \ell(x)-\ell(y)\geq\nabla\ell(y)^T(x-y).
   $$

2. 证明对任意 $x\in\mathbb R^n$，

   $$
   \ell(x)\geq\ell(x^*).
   $$

3. 利用第 2 问的不等式证明 $x^*$ 是问题 $P$ 的全局最优解。
4. 令 $n=m=2$，并取

   $$
   f(x)=\frac12(x_1-1)^2+\frac12(x_2-1)^2,\qquad
   g_1(x)=-x_1,\qquad
   g_2(x)=x_1+x_2-1,
   $$

   其中 $x=(x_1,x_2)^T$。求满足问题 $P$ 的 KKT 条件的 $x^*\in\mathbb R^2$ 与 $\mu^*\in\mathbb R^2$。

## **Kai**

（i） $\ell(x) = f(x) + \sum_{j=1}^m \mu_j^* g_j(x)$ より

$$
\ell(x) - \ell(y) = f(x) - f(y) + \sum_{j=1}^m \mu_j^* (g_j(x) - g_j(y))
$$

$f$ と $g_j$ は凸関数なので、

$$
f(x) - f(y) \geq \nabla f(y)^T (x - y)
$$

$$
g_j(x) - g_j(y) \geq \nabla g_j(y)^T (x - y)
$$

したがって、

$$
\ell(x) - \ell(y) \geq \nabla f(y)^T (x - y) + \sum_{j=1}^m \mu_j^* \nabla g_j(y)^T (x - y) = \left( \nabla f(y) + \sum_{j=1}^m \mu_j^* \nabla g_j(y) \right)^T (x - y) = \nabla \ell(y)^T (x - y)
$$

(ii) $x^*$ は KKT 条件を満たすので

$$
\nabla f(x^*) + \sum_{j=1}^m \mu_j^* \nabla g_j(x^*) = 0
$$

$$
g_j(x^*) \leq 0, \quad \mu_j^* \geq 0, \quad \mu_j^* g_j(x^*) = 0 \quad (j = 1, ..., m)
$$

(i) より、

$$
\ell(x) - \ell(x^*) \geq \nabla \ell(x^*)^T (x - x^*)
$$

ここで、 $\nabla \ell(x^*) = \nabla f(x^*) + \sum_{j=1}^m \mu_j^* \nabla g_j(x^*) = 0$ なので、

$$
\ell(x) - \ell(x^*) \geq 0
$$

$$
\ell(x) \geq \ell(x^*)
$$

(iii) 問題 P の任意の実行可能解 $x$ に対して、 $\ell(x) = f(x) + \sum_{j=1}^m \mu_j^* g_j(x) \geq \ell(x^*)$ 。
$g_j(x) \leq 0$ なので、 $\mu_j^* g_j(x) \leq 0$ 。したがって

$$
\ell(x) = f(x) + \sum_{j=1}^m \mu_j^* g_j(x) \leq f(x)
$$

$$
\ell(x^*) = f(x^*) + \sum_{j=1}^m \mu_j^* g_j(x^*) = f(x^*)
$$

よって、 $f(x) \geq \ell(x) \geq \ell(x^*) = f(x^*)$ となり、 $x^*$ は問題Pの大域的最適解。

(iv) KKT 条件は

$$
\begin{cases}
x_1-1-\mu_1+\mu_2=0,\\
x_2-1+\mu_2=0,\\
x_1\geq0,\quad x_1+x_2\leq1,\\
\mu_1,\mu_2\geq0,\\
\mu_1x_1=0,\quad \mu_2(x_1+x_2-1)=0.
\end{cases}
$$

制約 $x_1+x_2\leq1$ が狭義なら $\mu_2=0$ となり、停留条件から $x_2=1$ となって狭義性に矛盾する。従って

$$
x_1+x_2=1.
$$

もし $x_1=0$ なら $x_2=1$ であり、第2停留条件から $\mu_2=0$ 、第1停留条件から $\mu_1=-1$ となって不可能である。よって $x_1>0$ なので $\mu_1=0$ である。停留条件と $x_1+x_2=1$ を解くと

$$
x_1=x_2=\frac12,\qquad \mu_2=\frac12.
$$

従って求める KKT ベクトルは

$$
\boxed{x^*=\begin{pmatrix}1/2\\1/2\end{pmatrix},
\qquad
\mu^*=\begin{pmatrix}0\\1/2\end{pmatrix}}.
$$
