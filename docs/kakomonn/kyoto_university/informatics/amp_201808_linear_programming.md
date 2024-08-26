---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2018年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 線形計画

## **Author**
Casablanca

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


## **Kai**
### (i)
Lagrangina: 

$$ 
\begin{aligned}
L(y,z, \lambda, \nu, \mu) &= \boldsymbol{1}^\top y + \mu ^\top (b - Ax) + \lambda ^\top (x - y) + \nu ^\top (-x-y) \\
&= (1-\lambda -\nu )^\top y + (-\mu ^\top A + \lambda ^\top - \nu ^\top ) x + b^\top \mu 
\end{aligned}
$$

$$
\begin{aligned}
\text{(Q): } \text{Maximize} \ &b^\top \mu \\
\text{subject to } \ &\mu + \nu = \boldsymbol{1} \\
&\mu^\top A = (\lambda - \nu) ^\top \\
&\lambda \succeq 0, \nu \succeq 0
\end{aligned}
$$

### (ii)

$$
b^\top \mu = (Ax)^\top \mu = x^\top(\lambda ^\top - \mu ^\top), -1 \preceq \lambda - \mu \preceq 1
$$

For a given $\widetilde{x}$, $v(p) \geq \max (\widetilde{x}^\top (\lambda - \nu))$,
$\widetilde{x}^\top (\lambda - \nu)$ is bounded, thus (P) is bounded, and therefore has an optimal solution.

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

$$
y^* = (0,1,2)^\top
$$
