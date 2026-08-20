---
sidebar_label: "2013年8月実施 線形計画"
tags:
  - Kyoto-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Convex-Optimization.Interior-Point-Method
  - Operations-Research.Linear-Programming.Complementary-Slackness
---
# 京都大学 情報学研究科 数理工学専攻 2013年8月実施 線形計画

## **Author**
Casablanca, 祭音Myyura

## **Description**
### 日本語版
次の線形計画問題 $P$ を考える。

$$
\begin{aligned}
\text{P}: &\text{Minimize} \quad \boldsymbol{\boldsymbol{c}^{\top}x} \\
&\text{subject to} \quad \boldsymbol{Ax} = \boldsymbol{b} \\
&\qquad \qquad \quad \boldsymbol{x} \geqq \boldsymbol{0} \\
\end{aligned}
$$

ただし, $\boldsymbol{A}$ は $m \times n$ 定数行列, $\boldsymbol{b}$ は $m$ 次元定数ベクトル, $\boldsymbol{c}$ は $n$ 次元定数ベクトル, $\boldsymbol{x}$ は $n$ 次元定数ベクトルであり, $\top$ は転置記号を表す。さらに, 問題 $(P)$ に関連して, 非負パラメータ $\mu$ を含む次の条件 $Q(\mu)$ を考える。

$$
Q(\mu):
\left\{
\begin{aligned}
&\boldsymbol{A}^{\top}\boldsymbol{y} + \boldsymbol{z} = \boldsymbol{c} \\
&\boldsymbol{Ax} = \boldsymbol{b} \\
&x_iz_i = \mu(i = 1,\dots,n) \\
&\boldsymbol{x} \geqq 0,\boldsymbol{z} \geqq 0
\end{aligned}
\right.
$$

ただし, $\boldsymbol{x} = \{x_1,\dots,x_n\}^{\top} \in \mathbb{R}^n ,\boldsymbol{y} = (y_1,\dots,y_m)^{\top} \in \mathbb{R}^m , \boldsymbol{z} = (z_1,\dots,z_n)^{\top} \in \mathbb{R}^n$ である。各 $\mu$ に対して, 条件 $Q(\mu)$ を満たすベクトル $\boldsymbol{x,y,z}$ は唯一存在すると仮定し, それらを $\boldsymbol{x}(\mu),\boldsymbol{y}(\mu)$ と表す。

&emsp;&emsp;以下の問いに答えよ。

(i) 問題 $P$ の双対問題をかけ。

(ii) 関数 $h:[0,\infty) \rightarrow \mathbb{R}$ を $h(\mu) = \boldsymbol{c}^{\top}\boldsymbol{x}(\mu) - \boldsymbol{b}^{\top}\boldsymbol{y}(\mu)$ と定義する。関数 $h$ は $[0,\infty)$ 上で線形関数となることを示せ。

(iii) $\boldsymbol{x}(0)$ は問題 $P$ の最適解となることを示せ。

(iv) $n = 2,m = 1$ とし,

$$
\boldsymbol{A} = (1,1),\boldsymbol{b} = 1,\boldsymbol{c} = \begin{pmatrix}1 \\ -1 \\\end{pmatrix}
$$

とする。このとき, 任意の非負パラメータ $\mu$ に対して, 条件 $Q(\mu)$ を満たすベクトル $\boldsymbol{x,y,z}$ は唯一存在する。 $\boldsymbol{x}(\mu)$を求めよ。さらに, 問 (i) で与えた双対問題の最適解を求めよ。

### English Version


### 题目描述

考虑线性规划问题

$$
\begin{aligned}
\mathrm{P}:\quad &\text{最小化}\quad \boldsymbol{c}^{\top}\boldsymbol{x}\\
&\text{满足}\quad \boldsymbol{A}\boldsymbol{x}=\boldsymbol{b},\qquad
\boldsymbol{x}\geqq\boldsymbol{0},
\end{aligned}
$$

其中 $\boldsymbol A$ 是 $m\times n$ 常数矩阵，$\boldsymbol b$、$\boldsymbol c$ 分别是 $m$ 维和 $n$ 维常向量，$\boldsymbol x$ 是 $n$ 维变量向量，$\top$ 表示转置。再考虑含非负参数 $\mu$ 的条件

$$
Q(\mu):
\left\{
\begin{aligned}
&\boldsymbol A^\top\boldsymbol y+\boldsymbol z=\boldsymbol c,\\
&\boldsymbol A\boldsymbol x=\boldsymbol b,\\
&x_i z_i=\mu\quad(i=1,\ldots,n),\\
&\boldsymbol x\geqq0,\quad\boldsymbol z\geqq0,
\end{aligned}
\right.
$$

其中 $\boldsymbol x,\boldsymbol z\in\mathbb R^n$，$\boldsymbol y\in\mathbb R^m$。假设对每个 $\mu$，满足 $Q(\mu)$ 的向量 $\boldsymbol x,\boldsymbol y,\boldsymbol z$ 唯一存在，并分别记作 $\boldsymbol x(\mu),\boldsymbol y(\mu),\boldsymbol z(\mu)$。回答：

1. 写出问题 P 的对偶问题。
2. 定义 $h:[0,\infty)\to\mathbb R$，
   $h(\mu)=\boldsymbol c^\top\boldsymbol x(\mu)-\boldsymbol b^\top\boldsymbol y(\mu)$，证明 $h$ 在 $[0,\infty)$ 上是线性函数。
3. 证明 $\boldsymbol x(0)$ 是 P 的最优解。
4. 当 $n=2,m=1$ 且

   $$
   \boldsymbol A=(1,1),\qquad \boldsymbol b=1,\qquad
   \boldsymbol c=\begin{pmatrix}1\\-1\end{pmatrix}
   $$

   时，题设的唯一性对任意 $\mu\geqq0$ 成立。求 $\boldsymbol x(\mu)$，并求第 1 问所得对偶问题的最优解。

## **Kai**
### (i)
Lagrangian:

$$
L(x, y) = c^\top x + y^\top (b-Ax) = (c^\top - y ^\top A)x + b^\top y
$$

Lagrange dual function

$$
g(y) = b^\top y
$$

The dual problem

$$
\begin{aligned}
    \text{(D)} \quad & \text{Maximize} \quad b^\top y \\
    & \text{Subject to} \quad A^\top y \preceq c,\qquad y\in\mathbb R^m
\end{aligned}
$$

### (ii)

$$
A^\top y(\mu) + z(\mu) = c, Ax(\mu) = b, x_iz_i = \mu
$$

$$
x(\mu) ^\top A^\top y(\mu) + x(\mu) ^\top z(\mu) = c^\top x(\mu)
$$

$$
b^\top y(\mu) - c^\top x(\mu) = -n\mu
$$

thus $h(\mu) = n \mu$ is linear on $[0, \infty)$.

### (iii)
Consider $Q(0)$, get $b^\top y(0) = c^\top x(0)$.

For every primal-feasible $x$ and dual-feasible $y$,

$$
b^\top y \leq c^\top x.
$$

Since $y(0)$ is dual feasible and $b^\top y(0)=c^\top x(0)$, weak duality shows that $x(0)$ and $y(0)$ are optimal.

### (iv)

$$
\text{ Q}(\mu) \left\{
\begin{aligned}
[\boldsymbol{1},\boldsymbol{1}]y+z &= [1,-1]  \\
[1,1]x &= 1 \\
x_i z_i &= \mu \\
x \succeq 0, z & \succeq 0
\end{aligned}
\right.
$$

and we get

$$
x(\mu) = \left[\frac{\mu + 1 - \sqrt{\mu ^2 + 1}}{2}, \frac{1-\mu + \sqrt{\mu^2 + 1}}{2}\right]^\top
$$

for

$$
\begin{aligned}
    &\text{Maximize} \quad y \\
    &\text{Subject to} \quad [1,-1] - y [1,1] \succeq \boldsymbol{0}
\end{aligned}
$$

then we get the optimal solution $y = -1$.
