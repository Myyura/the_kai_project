---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2022年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2022年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版
$\boldsymbol{A} \in \mathbb{R}^{m \times n},\boldsymbol{b} \in \mathbb{R}^m,\boldsymbol{c} \in \mathbb{R}^n$ とする。次の線形計画問題を考える。

$$
\begin{aligned}
P: &\text{Minimize} \quad \boldsymbol{c}^{\top}\boldsymbol{x} \\
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
Q: &\text{Minimize} \quad \boldsymbol{c}^{\top}\boldsymbol{d} \\
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


## **Kai**
### (i)
Lagrangian:

$$
L(x,\mu) = c^\top x + \mu^\top(b-Ax)
$$

Lagrange dual function:

$$
\begin{aligned}
g(\mu)=& \inf_{x} \{ (c^\top - \mu^\top A )x + \mu^\top b \} \\
=&b^\top \mu, c + A\mu \succeq \mathbf{0}
\end{aligned}
$$

dual problem

$$
\begin{aligned}
D:&\text{Maximize} & b^\top \mu  \\
&\text{subject to} & c - A\mu \succeq \mathbf{0}
\end{aligned}
$$

thus

$$
b^\top r \geq b^\top r^*, Ay = b
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
c^\top d^* = -\frac{c^\top Y^2(c-A^\top p)}{2||Y(c- A^\top p)||} = \frac{(Y(c-A^\top p)) ^ 2}{-2||Y(c-A^\top p)||} = - \frac{||Y(c-A^\top p)||}{2}
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
L(d,\lambda, \mu) = c^\top d + \lambda (d^\top (Y^{-1})^2 d - \frac 14) + \mu (Ad)
$$

We get KKT_conditions:

$$
\text{ } \left\{
\begin{aligned}
\lambda (Y^{-1})^2 \widehat{d} + c + A \mu & = & 0 \\
\lambda   & \geq &0 \\
A \widehat{d} =  0, \widehat{d}^\top (Y^{-1})^2 \widehat{d} & \leq &\frac  14
\end{aligned}
\right.
$$

$$
\begin{align}
&Ad^* = - \frac{AY^2c - AY^2A^\top p}{constant} = - \frac{AY^2C - AY^2C}{constant} = 0 \tag{1} \\
&\|Y^{-1}d\| = \|\frac{Y(c - A^\top p)}{2 \|Y(c-A^\top p) \|} \| = \frac 12 \tag{2} \\
&\lambda ^* (- \frac{c - A^\top p}{2 \|Y(c-A^\top p)\|}) + c^\top + A \mu^* = 0 \tag{3}
\end{align}
$$

$d^*, \lambda^* , \mu^*$ satisfies KKT-conditions for $\lambda ^* = 2\|Y(c-A^\top p)\|, \mu^* = -p$

#### $(c)$
$$
A(y+d^*) = b
$$

$$
d^* = - \frac{Y}{2} \frac{Y(c-A^\top p)}{ \|Y(c-A^\top p)\|}
$$

$$
d^* = -\frac{1}{2} Y \vec{n}, |d_i| < \frac{1}{2} y_i
$$

and easy to see:

$$
-\mathbf{1}^\top \frac{Y}{2} \leq d^* \leq \mathbf{1}^\top \frac{Y}{2}
$$

thus

$$
y + d^* \succeq \mathbf{0}
$$

thus $\widetilde{x}$ is feasible, and we get:

$$
c^\top \widetilde{x} = c^\top y + c^\top d^* = c^\top y - \frac{\|Y(c-A^\top p)\|}{2} < c^\top y
$$

