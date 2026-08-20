---
sidebar_label: "2022年8月実施 線形計画"
tags:
  - Kyoto-University
  - Operations-Research.Linear-Programming.Linear-Programming-Duality
  - Operations-Research.Convex-Optimization.Interior-Point-Method
  - Operations-Research.Linear-Programming.Affine-Scaling-Method
---
# 京都大学 情報学研究科 数理工学専攻 2022年8月実施 線形計画

## **Author**
Casablanca, 祭音Myyura

## **Description**
### 日本語版
$\boldsymbol{A} \in \mathbb{R}^{m \times n},\boldsymbol{b} \in \mathbb{R}^m,\boldsymbol{c} \in \mathbb{R}^n$ とする。次の線形計画問題を考える。

$$
\begin{aligned}
\text{P}: &\text{Minimize} \quad \boldsymbol{c}^{\top}\boldsymbol{x} \\
&\text{subject to} \quad \boldsymbol{Ax} = \boldsymbol{b} \\
&\qquad \qquad \quad \boldsymbol{x} \geqq 0
\end{aligned}
$$

ただし, 問題 $P$ の決定変数は $\boldsymbol{x} \in \mathbb{R}^n$ であり, $\top$ は転置記号を表す。また, $\boldsymbol{Ay} = \boldsymbol{b}$ と $y_i > 0(i = 1,\dots,n)$ を満たすベクトル $\boldsymbol{y} = (y_1,\dots,y_n)^{\top} \in \mathbb{R}^n$ が存在するとする。

以下の問いに答えよ。

(i) 問題 $P$ の双対問題を $D$ とする。$\boldsymbol{r^*} \in \mathbb{R}^m$ が問題 $D$ の最適解であり, ある実数 $\varepsilon > 0$ に対して, $\boldsymbol{c}^{\top}\boldsymbol{y} - \boldsymbol{b}^{\top}r < \varepsilon$ を満たす問題 $D$ の実行可能解 $\boldsymbol{r} \in \mathbb{R}^m$ が存在すると仮定する。そのとき,

$$
\boldsymbol{b}^{\top}\boldsymbol{r^*} - \varepsilon < \boldsymbol{b}^{\top}\boldsymbol{r} \leqq \boldsymbol{b}^{\top}\boldsymbol{r^*}
$$

が成立することを示せ。

(ii) $\boldsymbol{Y} \in \mathbb{R}^{n \times n}$ は第 $(i,i)$ 成分を $y_i$ とする　対角行列と定義し, $\boldsymbol{AY}^2\boldsymbol{A}^{\top}$ は正則行列と仮定する。さらに, 以下の最適化問題を考える。

$$
\begin{aligned}
\text{Q}: &\text{Minimize} \quad \boldsymbol{c}^{\top}\boldsymbol{d} \\
&\text{subject to} \quad \boldsymbol{Ad} = \boldsymbol{0} \\
&\qquad \qquad \quad \boldsymbol{||Y^{-1}d||} \leqq \frac{1}{2}
\end{aligned}
$$

ここで, 問題 $Q$ の決定変数は $\boldsymbol{d} \in \mathbb{R}^n$ であり, $||\cdot||$ はユークリッドノルマ表す (すなわち, 任意のベクトル $z$ に対して, $||z|| = \sqrt{z^{\top}z}$). また, $\boldsymbol{p} = (\boldsymbol{AY^2A}^{\top})^{-1}\boldsymbol{AY^2c}$ と定義し, $\boldsymbol{c - A^{\top}p \neq 0}$ と仮定する。さらに, 以下のベクトルを定義する。

$$
\boldsymbol{d^*} = -\frac{\boldsymbol{Y^2(c - A^{\top}p)}}{2||\boldsymbol{Y(c - A^{\top}p)}||}
$$

以下の問 (a) , (b) , $(c)$ に答えよ。

(a) $\boldsymbol{c^{\top}d^*} = - \frac{||\boldsymbol{Y(c - A^{\top}p)}||}{2}$ であることを示せ。

(b) $\boldsymbol{d^*}$ が問題 $Q$ の最適解であることを示せ。

$(c)$ $\boldsymbol{\tilde{x} = y + d^*}$ とする。そのとき, $\boldsymbol{\tilde{x}}$が問題 $P$ の実行可能解であることと, $\boldsymbol{c^{\top}\tilde{x}} < \boldsymbol{c^{\top}y}$ を満たすことを示せ。

### English Version


### 题目描述

给定
$\boldsymbol A\in\mathbb R^{m\times n}$、
$\boldsymbol b\in\mathbb R^m$、
$\boldsymbol c\in\mathbb R^n$，考虑

$$
\begin{aligned}
\mathrm P:\quad
&\text{最小化}\quad\boldsymbol c^\top\boldsymbol x\\
&\text{满足}\quad\boldsymbol A\boldsymbol x=\boldsymbol b,\qquad
\boldsymbol x\geqq0.
\end{aligned}
$$

假设存在严格正的可行向量
$\boldsymbol y=(y_1,\ldots,y_n)^\top$，即
$\boldsymbol A\boldsymbol y=\boldsymbol b$ 且每个 $y_i>0$。回答：

1. 令 D 为 P 的对偶问题。假设 $\boldsymbol r^*$ 是 D 的最优解，且对某个 $\varepsilon>0$ 存在 D 的可行解 $\boldsymbol r$ 满足
   $\boldsymbol c^\top\boldsymbol y-\boldsymbol b^\top\boldsymbol r<\varepsilon$。证明

   $$
   \boldsymbol b^\top\boldsymbol r^*-\varepsilon
   <\boldsymbol b^\top\boldsymbol r
   \leqq\boldsymbol b^\top\boldsymbol r^*.
   $$

2. 令 $\boldsymbol Y=\operatorname{diag}(y_1,\ldots,y_n)$，假设
   $\boldsymbol A\boldsymbol Y^2\boldsymbol A^\top$ 可逆。考虑

   $$
   \begin{aligned}
   \mathrm Q:\quad
   &\text{最小化}\quad\boldsymbol c^\top\boldsymbol d\\
   &\text{满足}\quad\boldsymbol A\boldsymbol d=\boldsymbol0,\qquad
   \|\boldsymbol Y^{-1}\boldsymbol d\|\leqq\frac12,
   \end{aligned}
   $$

   其中 $\|\boldsymbol z\|=\sqrt{\boldsymbol z^\top\boldsymbol z}$。定义

   $$
   \boldsymbol p=
   (\boldsymbol A\boldsymbol Y^2\boldsymbol A^\top)^{-1}
   \boldsymbol A\boldsymbol Y^2\boldsymbol c,
   $$

   并假设 $\boldsymbol c-\boldsymbol A^\top\boldsymbol p\ne\boldsymbol0$，再令

   $$
   \boldsymbol d^*=
   -\frac{\boldsymbol Y^2(\boldsymbol c-\boldsymbol A^\top\boldsymbol p)}
   {2\|\boldsymbol Y(\boldsymbol c-\boldsymbol A^\top\boldsymbol p)\|}.
   $$

   1. 证明 $\boldsymbol c^\top\boldsymbol d^*=-\frac12\|\boldsymbol Y(\boldsymbol c-\boldsymbol A^\top\boldsymbol p)\|$。
   2. 证明 $\boldsymbol d^*$ 是 Q 的最优解。
   3. 令 $\tilde{\boldsymbol x}=\boldsymbol y+\boldsymbol d^*$。证明 $\tilde{\boldsymbol x}$ 是 P 的可行解，且 $\boldsymbol c^\top\tilde{\boldsymbol x}<\boldsymbol c^\top\boldsymbol y$。

## **Kai**
### (i)
Lagrangian:

$$
L(x,\mu) = c^\top x + \mu^\top(b-Ax)
$$

Lagrange dual function:

$$
\begin{aligned}
g(\mu)=& \inf_{x\succeq0} \{ (c^\top - \mu^\top A )x + \mu^\top b \} \\
=&b^\top \mu,\qquad c-A^\top\mu \succeq \mathbf{0}
\end{aligned}
$$

dual problem

$$
\begin{aligned}
D:&\text{Maximize} & b^\top \mu  \\
&\text{subject to} & c - A^\top\mu \succeq \mathbf{0}
\end{aligned}
$$

thus

$$
b^\top r \leq b^\top r^*, \qquad Ay = b
$$

since

$$
c^\top y \leq  b^\top r + \epsilon
$$

and from duality we know

$$
c^\top y \geq b^\top r^*
$$

thus

$$
b^\top r^* < b^\top r + \epsilon
$$

then

$$
b^\top r^* - \epsilon < b^\top r \leq b^\top r^*
$$


### (ii)
#### (a)

$$
c^\top d^* = - \frac{c^\top Y^2 (c-A^\top p)}{2||Y(c- A^\top p)||}
$$

$$
\begin{aligned}
(Y(c- A^\top p))^\top (Y(c-A^\top p)) =& (c^\top - p^\top A)YY(c-A^\top p)\\
=& c^\top Y^2 c - c^\top Y^2 A^\top p - p^\top AY^2 c + p^\top A Y^2 A^\top p\\
= & c^\top Y^2 c - c^\top Y^2 A^\top p - p^\top AY^2 c + p^\top AY^2 c\\
= & c^\top Y^2 (c - A^\top p)\\
\end{aligned}
$$

thus

$$
c^\top d^* = -\frac{c^\top Y^2(c-A^\top p)}{2\|Y(c- A^\top p)\|} = -\frac{\|Y(c-A^\top p)\|^2}{2\|Y(c-A^\top p)\|} = - \frac{\|Y(c-A^\top p)\|}{2}
$$

#### (b)
Write Q as:

$$
\begin{aligned}
Q:&\text{Minimize} & c^\top d \\
&\text{subject to} & Ad & = \mathbf{0} \\
&\text{ } &d^\top (Y^{-1})^2d - \frac 14 & \leq 0
\end{aligned}
$$

Lagrangian:

$$
L(d,\lambda, \mu) = c^\top d + \lambda (d^\top (Y^{-1})^2 d - \frac 14) + \mu^\top Ad
$$

We get KKT_conditions:

$$
\text{ } \left\{
\begin{aligned}
c + 2\lambda (Y^{-1})^2 \widehat{d} + A^\top\mu & = & 0 \\
\lambda   & \geq &0 \\
A \widehat{d} =  0,\quad \widehat{d}^\top (Y^{-1})^2 \widehat{d} & \leq &\frac  14\\
\lambda\left(\widehat{d}^\top (Y^{-1})^2 \widehat{d}-\frac14\right)&=&0
\end{aligned}
\right.
$$

$$
\begin{align}
&Ad^* = - \frac{AY^2c - AY^2A^\top p}{2\|Y(c-A^\top p)\|}=0, \tag{1} \\
&\|Y^{-1}d^*\| = \left\|\frac{Y(c - A^\top p)}{2 \|Y(c-A^\top p) \|}\right\| = \frac 12, \tag{2} \\
&c+2\lambda^*(Y^{-1})^2d^*+A^\top\mu^*=0. \tag{3}
\end{align}
$$

Indeed, (3) holds for

$$
\lambda^*=\|Y(c-A^\top p)\|,\qquad \mu^*=-p.
$$

Thus $d^*,\lambda^*,\mu^*$ satisfy the KKT conditions. Since Q is convex and $d=0$ is strictly feasible for its norm constraint, the KKT conditions are sufficient, so $d^*$ is optimal.

#### $(c)$

$$
A(y+d^*) = b
$$

$$
d^* = - \frac{Y}{2} \frac{Y(c-A^\top p)}{ \|Y(c-A^\top p)\|}
$$

$$
d^* = -\frac{1}{2} Y \vec{n},\qquad
\vec n=\frac{Y(c-A^\top p)}{\|Y(c-A^\top p)\|},\qquad \|\vec n\|=1.
$$

Therefore, $|d_i^*|\leq y_i/2$, and hence

$$
y_i+d_i^*\geq\frac{y_i}{2}>0\qquad(i=1,\ldots,n).
$$

Thus $\widetilde{x}$ is feasible, and we get:

$$
c^\top \widetilde{x} = c^\top y + c^\top d^* = c^\top y - \frac{\|Y(c-A^\top p)\|}{2} < c^\top y
$$
