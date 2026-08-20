---
sidebar_label: "2018年8月実施 線形計画"
tags:
  - Kyoto-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Convex-Optimization.One-Norm-Minimization
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 線形計画

## **Author**
Casablanca, 祭音Myyura

## **Description**
### 日本語版
$\boldsymbol{A}$ を $m \times n$ 行列、$\boldsymbol{b}$ を $m$ 次元ベクトルとする。
$\boldsymbol{A}\boldsymbol{z} = \boldsymbol{b}$ を満たす $n$ 次元ベクトル $\boldsymbol{z}$ が存在するとする。
このとき、次の線形計画問題 (P) を考える。

$$
\begin{aligned}
\text{(P): } \text{Minimize } \ &\sum_{i=1}^n y_i \\
\text{subject to } \ &\boldsymbol{A}\boldsymbol{x} = \boldsymbol{b} \\
&y_i \geqq x_i \ (i = 1, \ldots, n) \\
&y_i \geqq -x_i \ (i = 1, \ldots, n)
\end{aligned}
$$

ただし、決定変数は $\boldsymbol{x}, \boldsymbol{y} \in \mathbb{R}^n$ である。

以下の問いに答えよ。

(i) 問題 (P) の双対問題を書け。

(ii) 問題 (P) が最適解を持つことを示せ。

(iii) $m = 2, n = 3$ とし、

$$
\boldsymbol{A} = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 5 \end{pmatrix}, \quad \boldsymbol{b} = \begin{pmatrix} 2 \\ 10 \end{pmatrix}
$$

とする。このとき、問題 (P) の最適解を求めよ。

### English Version


### 题目描述

设 $\boldsymbol A$ 为 $m\times n$ 矩阵，$\boldsymbol b$ 为 $m$ 维向量，并假设存在 $\boldsymbol z\in\mathbb R^n$ 满足
$\boldsymbol A\boldsymbol z=\boldsymbol b$。考虑以
$\boldsymbol x,\boldsymbol y\in\mathbb R^n$ 为变量的线性规划

$$
\begin{aligned}
(\mathrm P):\quad
&\text{最小化}\quad \sum_{i=1}^n y_i\\
&\text{满足}\quad \boldsymbol A\boldsymbol x=\boldsymbol b,\\
&\hspace{2.8em}y_i\geqq x_i\quad(i=1,\ldots,n),\\
&\hspace{2.8em}y_i\geqq-x_i\quad(i=1,\ldots,n).
\end{aligned}
$$

回答：

1. 写出 P 的对偶问题。
2. 证明 P 存在最优解。
3. 当 $m=2,n=3$ 且

   $$
   \boldsymbol A=
   \begin{pmatrix}1&2&0\\0&0&5\end{pmatrix},
   \qquad
   \boldsymbol b=\begin{pmatrix}2\\10\end{pmatrix}
   $$

   时，求 P 的最优解。

## **Kai**
### (i)
Lagrangina: 

$$ 
\begin{aligned}
L(x,y, \lambda, \nu, \mu) &= \boldsymbol{1}^\top y + \mu ^\top (b - Ax) + \lambda ^\top (x - y) + \nu ^\top (-x-y) \\
&= (1-\lambda -\nu )^\top y + (-\mu ^\top A + \lambda ^\top - \nu ^\top ) x + b^\top \mu 
\end{aligned}
$$

$$
\begin{aligned}
\text{(Q): } \text{Maximize} \ &b^\top \mu \\
\text{subject to } \ &\lambda + \nu = \boldsymbol{1} \\
&A^\top\mu = \lambda - \nu \\
&\lambda \succeq 0, \nu \succeq 0,\qquad \mu\in\mathbb R^m
\end{aligned}
$$

### (ii)

Choose $z$ with $Az=b$. Then $(x,y)=(z,|z|)$ is feasible. At every feasible point, $y_i\geq|x_i|$, so the objective is bounded below by $0$.

Moreover, at an optimum one may take $y=|x|$, so P is equivalent to minimizing $\|x\|_1$ over the nonempty closed set $\{x:Ax=b\}$. Its sublevel set

$$
\{x:Ax=b,\ \|x\|_1\leq\|z\|_1\}
$$

is nonempty and compact. Hence the minimum is attained.

### (iii)

$$
\begin{pmatrix}
1 & 2&0 \\
0 & 0&5
\end{pmatrix}
x = \begin{pmatrix} 2 \\ 10 \end{pmatrix}
\Rightarrow
x = (2-2u, u, 2)^\top
$$

$$
\min \sum_{i=1}^{n}y_i = \min(|2-2u| + |u| + 2) = 3
$$

Thus the unique minimizer is $u=1$, and

$$
x^*=y^*=(0,1,2)^\top.
$$
