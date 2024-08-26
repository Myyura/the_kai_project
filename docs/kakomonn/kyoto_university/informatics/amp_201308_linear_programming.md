---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2013年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2013年8月実施 線形計画

## **Author**
Casablanca

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


## **Kai**
### (i)
Lagrangian:

$$
L(x, \mu) = c^\top x + \mu^\top (b-Ax) = (c^\top - \mu ^\top A)x + b^\top \mu
$$

Lagrange dual function

$$
g(\mu) = b^\top \mu
$$

The dual problem

$$
\begin{aligned}
    \text{(D)} \quad & \text{Maximize} \quad b^\top \mu \\
    & \text{Subject to} \quad c^\top - \mu ^\top A \succeq 0
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

Since

$$
c^\top x \leq b^\top \mu
$$

$y(0)$ satisfies the constraint of (D).
Thus $x(0)$ is an optimal solution to P.

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
x = [\frac{\mu + 1 + \sqrt{\mu ^2 + 1}}{2}, \frac{1-\mu + \sqrt{\mu^2 + 1}}{2}]^\top
$$

for

$$
\begin{aligned}
    &\text{Maximize} \quad \mu \\
    &\text{Subject to} \quad [1,-1] - \mu [1,1] \succeq \boldsymbol{0}
\end{aligned}
$$

then we get an optimal solution $\mu = -1$.
