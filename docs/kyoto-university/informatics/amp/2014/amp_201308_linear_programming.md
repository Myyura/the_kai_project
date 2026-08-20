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
Casablanca, find, Finalized by 祭音Myyura

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
### (i) (Written by Casablanca, English Version)
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

### (ii) (Written by Casablanca, English Version)

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

### (iii) (Written by Casablanca, English Version)
Consider $Q(0)$, get $b^\top y(0) = c^\top x(0)$.

For every primal-feasible $x$ and dual-feasible $y$,

$$
b^\top y \leq c^\top x.
$$

Since $y(0)$ is dual feasible and $b^\top y(0)=c^\top x(0)$, weak duality shows that $x(0)$ and $y(0)$ are optimal.

### (iv) (Written by Casablanca, English Version)

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

---

### (i) (Written by find, Chinese Version)

问题 $P$ 的 Lagrange 函数为$\mathcal{L}(\boldsymbol{x}, \boldsymbol{\lambda}, \boldsymbol{\nu})=\boldsymbol{c}^{\mathsf T}\boldsymbol{x}-\boldsymbol{\lambda}^{\mathsf T}\boldsymbol{x}+\boldsymbol{\nu}^{\mathsf T}(\boldsymbol{b}-A\boldsymbol{x})$, 其中 $\boldsymbol{\lambda}\in\mathbb{R}_+^n, \ \boldsymbol{\nu}\in\mathbb{R}^m$ 为 Lagrange 乘子.

问题 $P$ 的对偶函数为

$$
g(\boldsymbol{\lambda}, \boldsymbol{\nu})=\inf_{\boldsymbol{x}\in\mathbb{R}^n}\mathcal{L}(\boldsymbol{x}, \boldsymbol{\lambda}, \boldsymbol{\nu})
=\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}+\inf_{\boldsymbol{x}\in\mathbb{R}^n}\{(\boldsymbol{c}-\boldsymbol{\lambda}-A^{\mathsf T}\boldsymbol{\nu})^{\mathsf T}\boldsymbol{x}\}, 
$$

从而

$$
g(\boldsymbol{\lambda}, \boldsymbol{\nu})=
\begin{cases}
\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}, & \boldsymbol{c}-\boldsymbol{\lambda}-A^{\mathsf T}\boldsymbol{\nu}=\boldsymbol{0}, \\
-\infty, & \text{otherwise}.
\end{cases}
$$

因此，问题 $P$ 的对偶问题 $(\mathrm{DP})$ 为

$$
\begin{array}{rll}
\mathrm{DP:} & \text{Maximize}\qquad
& \boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}\\[2mm]
& \text{subject to}\qquad
& \boldsymbol{c}-\boldsymbol{\lambda}
-A^{\mathsf T}\boldsymbol{\nu}
=\boldsymbol{0}, \\
&& \boldsymbol{\lambda}\succeq \boldsymbol{0}
\end{array}
$$

等价地，

$$
\begin{array}{rll}
\mathrm{DP^\prime:} & \text{Maximize}\qquad
& \boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}\\[2mm]
& \text{subject to}\qquad
& \boldsymbol{c}
-A^{\mathsf T}\boldsymbol{\nu}
\succeq \boldsymbol{0} \\
\end{array}
\qquad \Box
$$

### (ii) (Written by find, Chinese Version)

由条件 $Q(\mu)$ 的前两个等式: 

$$
\begin{aligned}
h(\mu)
=\boldsymbol{c}^{\mathsf T}\boldsymbol{x}(\mu)-\boldsymbol{b}^{\mathsf T}\boldsymbol{y}(\mu)
&= (A^{\mathsf T}\boldsymbol{y}(\mu)+\boldsymbol{z}(\mu))^{\mathsf T}\boldsymbol{x}(\mu)-(A\boldsymbol{x}(\mu))^{\mathsf T}\boldsymbol{y}(\mu) \\
&= \boldsymbol{y}(\mu)^{\mathsf T}A\boldsymbol{x}(\mu)+\boldsymbol{z}(\mu)^{\mathsf T}\boldsymbol{x}(\mu)-\boldsymbol{x}(\mu)^{\mathsf T}A^{\mathsf T}\boldsymbol{y}(\mu)\\
&= \boldsymbol{z}(\mu)^{\mathsf T}\boldsymbol{x}(\mu)
\end{aligned}
$$

上面第四个等式利用了 $\boldsymbol{x}(\mu)^{\mathsf T}A^{\mathsf T}\boldsymbol{y}(\mu), \ \boldsymbol{y}(\mu)^{\mathsf T}A\boldsymbol{x}(\mu)\in\mathbb{R}$，从而标量转置相等.

再由 $Q(\mu)$ 的第三个等式 $x_i(\mu)z_i(\mu)=\mu\ (i=1, \ldots, n)$, 有

$$
\displaystyle h(\mu)=\boldsymbol{z}(\mu)^{\mathsf T}\boldsymbol{x}(\mu)=\sum_{i=1}^n x_i(\mu)z_i(\mu)=\sum_{i=1}^n\mu=n\mu
$$

因此, $h(\mu)=n\mu$ 为 $[0, \infin)$ 上的线性函数.$\quad \Box$

### (iii) (Written by find, Chinese Version)

当 $\mu=0$ 时，由题目条件可知，满足条件 $Q(0)$ 的向量 $\boldsymbol{x}(0), \boldsymbol{y}(0), \boldsymbol{z}(0)$ 存在. 考虑 (i) 的对偶问题 $(\text{DP})$，令 $\boldsymbol{\nu}=\boldsymbol{y}(0), \ \boldsymbol{\lambda}=\boldsymbol{z}(0)$，则 $\boldsymbol{\lambda}, \boldsymbol{\nu}$ 是对偶问题 $(\text{DP})$ 的可行解；另一方面，$\boldsymbol{x}(0)$ 显然是问题 $\text P$ 的可行解.

由 $Q(0)$ 的前三个等式, 有

$$
\boldsymbol{c}^{\mathsf T}\boldsymbol{x}(0)=(A^{\mathsf T}\boldsymbol{y}(0)+\boldsymbol{z}(0))^{\mathsf T}\boldsymbol{x}(0)=\boldsymbol{y}(0)^{\mathsf T}A\boldsymbol{x}(0)+\boldsymbol{z}(0)^{\mathsf T}\boldsymbol{x}(0)=\boldsymbol{y}(0)^{\mathsf T}\boldsymbol{b}+0=\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}
$$

对原问题 $(\text P)$ 的任意可行解 $\boldsymbol{x}$, 结合弱对偶性: $\boldsymbol{c}^{\mathsf T}\boldsymbol{x}(0) = \boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}\le \boldsymbol{c}^{\mathsf T}\boldsymbol{x}$

即 $\boldsymbol{c}^{\mathsf T}\boldsymbol{x}(0) \le \boldsymbol{c}^{\mathsf T}\boldsymbol{x}$, 因此 $\boldsymbol{x}(0)$ 是问题 $P$ 的最优解. $\qquad \Box$

### (iv) (Written by find, Chinese Version)

通过所给的条件, 此时有

$$
Q(\mu)=
\left\{
\begin{aligned}
&\begin{pmatrix}1\\1\end{pmatrix}y+\boldsymbol{z}
=\begin{pmatrix}1\\-1\end{pmatrix}
&&\text{(1)}\\
&(1\ \ 1)\boldsymbol{x}=1
&&\text{(2)}\\
&x_1z_1=\mu, \quad x_2z_2=\mu
&&\text{(3)}\\
&x_1, x_2, z_1, z_2\ge 0
&&\text{(4)}
\end{aligned}
\right.
$$

由 $\text{(1)}$ 得

$$
\left\{
\begin{aligned}
&y+z_1=1
&&\text{(5)}\\
&y+z_2=-1
&&\text{(6)}
\end{aligned}
\right.
$$

由 $\text{(2)}$ 得 $x_1+x_2=1\quad \text{(7)}$. 通过 $\text{(3)}, \text{(5)}, \text{(6)}, \text{(7)}$, 消去 $x_2, z_1, z_2$ 后得到 

$$
\left\{
\begin{aligned}
&x_1(1-y)=\mu
&&\text{(8)}\\
&(1-x_1)(-1-y)=\mu
&&\text{(9)}
\end{aligned}
\right.
$$

由 $\text{(8)}, \text{(9)}$, 消去 $\mu$ 后有 $\displaystyle x_1y = \frac{y+1}{2}$. 将其代回 $\text{(8)}$，得到 $y^2+2\mu y-1=0.$

因此

$$
y=\frac{-2\mu\pm\sqrt{4\mu^2+4}}{2}=-\mu\pm\sqrt{\mu^2+1}.
$$

代回 $\text{(8)}$ 后有:

$$
x_1=\frac12\left(1+\frac{1}{-\mu\pm\sqrt{\mu^2+1}}\right)=\frac12\left(1+\mu\pm\sqrt{\mu^2+1}\right), 
$$

且由 $\text{(7)}$ 有

$$
x_2=1-x_1=\frac12\left(1-\mu\mp\sqrt{\mu^2+1}\right)
$$

把 $y$ 代回 $\text{(5)}, \text{(6)}$ 得 

$$
z_1 = 1 + \mu\mp\sqrt{\mu^2+1}, \quad z_2 = -1 + \mu\mp\sqrt{\mu^2+1}
$$

但是 $z_2 = -1 + \mu - \sqrt{\mu^2+1} < -1 < 0$, 与 $\text(4)$ 矛盾, 所以保留第二分支 $y=-\mu-\sqrt{\mu^2+1}$.

因此
$$
\boldsymbol{x}(\mu)=\left(\frac12(1+\mu-\sqrt{\mu^2+1}), \ \frac12(1-\mu+\sqrt{\mu^2+1})\right)^{\mathsf T}
$$

由于此时 $y=-\mu-\sqrt{\mu^2+1}$, 结合 $\text{(iii)}$, $\nu^*=y(0)=-1$ 是对偶问题 $(\text DP^\prime)$ 的最优解. $\quad \Box$

### (i) (Written by find, Japanese Version)

問題 $P$ の Lagrange 関数を $\mathcal{L}(\boldsymbol{x}, \boldsymbol{\lambda}, \boldsymbol{\nu})=\boldsymbol{c}^{\mathsf T}\boldsymbol{x}-\boldsymbol{\lambda}^{\mathsf T}\boldsymbol{x}+\boldsymbol{\nu}^{\mathsf T}(\boldsymbol{b}-A\boldsymbol{x})$ とおく。ただし、$\boldsymbol{\lambda}\in\mathbb{R}_+^n, \ \boldsymbol{\nu}\in\mathbb{R}^m$ は Lagrange 乗数である。

問題 $P$ の双対関数は

$$
\displaystyle g(\boldsymbol{\lambda}, \boldsymbol{\nu})=\inf_{\boldsymbol{x}\in\mathbb{R}^n}\mathcal{L}(\boldsymbol{x}, \boldsymbol{\lambda}, \boldsymbol{\nu})=\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}+\inf_{\boldsymbol{x}\in\mathbb{R}^n}\left\{(\boldsymbol{c}-\boldsymbol{\lambda}-A^{\mathsf T}\boldsymbol{\nu})^{\mathsf T}\boldsymbol{x}\right\}
$$

である。したがって、

$$
\displaystyle g(\boldsymbol{\lambda}, \boldsymbol{\nu})=
\begin{cases}
\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}, & \boldsymbol{c}-\boldsymbol{\lambda}-A^{\mathsf T}\boldsymbol{\nu}=\boldsymbol{0}, \\
-\infty, & \text{otherwise}.
\end{cases}
$$

よって、問題 $P$ の双対問題 $\text{(DP)}$ は

$$
\displaystyle
\begin{array}{rll}
\mathrm{DP:} & \text{Maximize} & \boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}\\
& \text{subject to} & \boldsymbol{c}-\boldsymbol{\lambda}-A^{\mathsf T}\boldsymbol{\nu}=\boldsymbol{0}, \\
&& \boldsymbol{\lambda}\succeq\boldsymbol{0}
\end{array}
$$

である。これは、$\boldsymbol{\lambda}$ を消去することにより、

$$
\displaystyle
\begin{array}{rll}
\mathrm{DP^\prime:} & \text{Maximize} & \boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}\\
& \text{subject to} & \boldsymbol{c}-A^{\mathsf T}\boldsymbol{\nu}\succeq\boldsymbol{0}
\end{array}
$$

と同値である。$\qquad\Box$

### (ii) (Written by find, Japanese Version)

条件 $Q(\mu)$ の最初の二つの等式より、

$$
\displaystyle h(\mu)=\boldsymbol{c}^{\mathsf T}\boldsymbol{x}(\mu)-\boldsymbol{b}^{\mathsf T}\boldsymbol{y}(\mu)=(A^{\mathsf T}\boldsymbol{y}(\mu)+\boldsymbol{z}(\mu))^{\mathsf T}\boldsymbol{x}(\mu)-(A\boldsymbol{x}(\mu))^{\mathsf T}\boldsymbol{y}(\mu)=\boldsymbol{z}(\mu)^{\mathsf T}\boldsymbol{x}(\mu)
$$

を得る。ここで、最後の等式では $\boldsymbol{x}(\mu)^{\mathsf T}A^{\mathsf T}\boldsymbol{y}(\mu)$ および $\boldsymbol{y}(\mu)^{\mathsf T}A\boldsymbol{x}(\mu)$ がともにスカラーであり、互いに等しいことを用いた。

さらに、$Q(\mu)$ の第3の等式 $x_i(\mu)z_i(\mu)=\mu\ (i=1, \ldots, n)$ より、

$$
\displaystyle h(\mu)=\boldsymbol{z}(\mu)^{\mathsf T}\boldsymbol{x}(\mu)=\sum_{i=1}^{n}x_i(\mu)z_i(\mu)=\sum_{i=1}^{n}\mu=n\mu
$$

である。したがって、$h(\mu)=n\mu$ であるから、$h$ は $[0, \infty)$ 上の線形関数である。$\qquad\Box$

### (iii) (Written by find, Japanese Version)

$\mu=0$ とする。問題の仮定より、条件 $Q(0)$ を満たす $\boldsymbol{x}(0), \boldsymbol{y}(0), \boldsymbol{z}(0)$ が存在する。

$\text{(i)}$ で得た双対問題 $\text{(DP)}$ において、$\boldsymbol{\nu}=\boldsymbol{y}(0), \ \boldsymbol{\lambda}=\boldsymbol{z}(0)$ とおく。このとき、$Q(0)$ より $\boldsymbol{\lambda}\succeq\boldsymbol{0}$ かつ $\boldsymbol{c}-\boldsymbol{\lambda}-A^{\mathsf T}\boldsymbol{\nu}=\boldsymbol{0}$ であるから、$(\boldsymbol{\lambda}, \boldsymbol{\nu})$ は双対問題 $\text{(DP)}$ の実行可能解である。一方、$A\boldsymbol{x}(0)=\boldsymbol{b}$ かつ $\boldsymbol{x}(0)\succeq\boldsymbol{0}$ であるから、$\boldsymbol{x}(0)$ は問題 $P$ の実行可能解である。

また、$Q(0)$ の最初の三つの等式より、

$$
\displaystyle \boldsymbol{c}^{\mathsf T}\boldsymbol{x}(0)=(A^{\mathsf T}\boldsymbol{y}(0)+\boldsymbol{z}(0))^{\mathsf T}\boldsymbol{x}(0)=\boldsymbol{y}(0)^{\mathsf T}A\boldsymbol{x}(0)+\boldsymbol{z}(0)^{\mathsf T}\boldsymbol{x}(0)=\boldsymbol{y}(0)^{\mathsf T}\boldsymbol{b}=\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}
$$

である。ここで、$x_i(0)z_i(0)=0\ (i=1, \ldots, n)$ より $\boldsymbol{z}(0)^{\mathsf T}\boldsymbol{x}(0)=0$ であることを用いた。

問題 $P$ の任意の実行可能解 $\boldsymbol{x}$ に対し、弱双対性より $\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}\leq\boldsymbol{c}^{\mathsf T}\boldsymbol{x}$ である。したがって、

$$
\displaystyle \boldsymbol{c}^{\mathsf T}\boldsymbol{x}(0)=\boldsymbol{b}^{\mathsf T}\boldsymbol{\nu}\leq\boldsymbol{c}^{\mathsf T}\boldsymbol{x}
$$

である。よって、$\boldsymbol{x}(0)$ は問題 $P$ の最適解である。$\qquad\Box$

### (iv) (Written by find, Japanese Version)

与えられた $A, \boldsymbol{b}, \boldsymbol{c}$ を条件 $Q(\mu)$ に代入すると、

$$
\displaystyle
Q(\mu)=
\left\{
\begin{aligned}
&\begin{pmatrix}1\\1\end{pmatrix}y+\boldsymbol{z}=\begin{pmatrix}1\\-1\end{pmatrix} &&\text{(1)}\\
&(1\ \ 1)\boldsymbol{x}=1 &&\text{(2)}\\
&x_1z_1=\mu, \quad x_2z_2=\mu &&\text{(3)}\\
&x_1, x_2, z_1, z_2\geq0 &&\text{(4)}
\end{aligned}
\right.
$$

となる。

$\text{(1)}$ より $y+z_1=1\ \text{(5)}, \ y+z_2=-1\ \text{(6)}$ であり、$\text{(2)}$ より $x_1+x_2=1\ \text{(7)}$ である。

$\text{(3)}, \text{(5)}, \text{(6)}, \text{(7)}$ を用いて $x_2, z_1, z_2$ を消去すると、

$$
\displaystyle
\left\{
\begin{aligned}
&x_1(1-y)=\mu &&\text{(8)}\\
&(1-x_1)(-1-y)=\mu &&\text{(9)}
\end{aligned}
\right.
$$

を得る。

$\text{(8)}, \text{(9)}$ から $\mu$ を消去すると $\displaystyle x_1y=\frac{y+1}{2}$ である。これを $\text{(8)}$ に代入すると $y^2+2\mu y-1=0$ を得る。したがって、

$$
\displaystyle y=-\mu\pm\sqrt{\mu^2+1}
$$

である。

また、$\displaystyle x_1y=\frac{y+1}{2}$ より

$$
\displaystyle x_1=\frac12\left(1+\frac1y\right)=\frac12\left(1+\mu\pm\sqrt{\mu^2+1}\right)
$$

であり、$\text{(7)}$ より

$$
\displaystyle x_2=1-x_1=\frac12\left(1-\mu\mp\sqrt{\mu^2+1}\right)
$$

である。

一方、$y$ を $\text{(5)}, \text{(6)}$ に代入すると、

$$
\displaystyle z_1=1+\mu\mp\sqrt{\mu^2+1}, \qquad z_2=-1+\mu\mp\sqrt{\mu^2+1}
$$

を得る。

ここで、$y=-\mu+\sqrt{\mu^2+1}$ に対応する場合には $\displaystyle z_2=-1+\mu-\sqrt{\mu^2+1}<0$ となり、$\text{(4)}$ に矛盾する。したがって、

$$
\displaystyle y=-\mu-\sqrt{\mu^2+1}
$$

をとる。

このとき、$\mu\geq0$ より $\sqrt{\mu^2+1}\leq\mu+1$ であるから $x_1\geq0$ である。また、$x_2>0, \ z_1>0$ であり、さらに $\sqrt{\mu^2+1}\geq1$ より $z_2=-1+\mu+\sqrt{\mu^2+1}\geq0$ である。したがって、非負条件も満たされる。

よって、

$$
\displaystyle \boldsymbol{x}(\mu)=\left(\frac12\left(1+\mu-\sqrt{\mu^2+1}\right), \ \frac12\left(1-\mu+\sqrt{\mu^2+1}\right)\right)^{\mathsf T}
$$

である。

さらに、このとき $\displaystyle y=-\mu-\sqrt{\mu^2+1}$ であるから、$\text{(iii)}$ より $\displaystyle \nu^*=y(0)=-1$ は双対問題 $\text{(DP}^\prime\text{)}$ の最適解である。$\qquad\Box$
