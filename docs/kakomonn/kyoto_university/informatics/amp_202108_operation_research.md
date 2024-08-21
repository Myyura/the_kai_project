---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2021年8月実施 専門科目 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 専門科目 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version

## **Kai**
### (i)

Lagrangian:
$$L(y, z^i, \mu) = \sum_{i=1}^{n}(z^i)^\top z^i + y^\top y + x^\top C x + \mu^\top (y - \sum_{i=1}^{n}x_iz^i - Ax + b)$$

and we get:
$$
\text{KKT-conditions } \left\{
\begin{aligned}
2y + \mu & = & \mathbf{0} \\
2z^i - x_i \mu &=&0 \\
y - \sum_{i=1}^{n}x_iz^i - Ax + b & = & 0\\
\end{aligned}
\right.
$$

### (ii)
$(z^i)^\top z^i$ is convex, $y^\top y$ is convex, then the objective function is convex.

### (iii)
from $(i)$, $$z^i = x_i y , y = \frac{Ax - b}{1 + x^\top x}$$
And
$
\begin{aligned}
\sum_{i=1}^{n} (z^i)^\top z^i + y^\top y + x^\top C x &= (1+x^\top x)\\
y^\top y + x^\top C x &= \frac{(Ax - b)^\top (Ax - b)}{ 1 + x^\top x} + x^\top X x = f(x)
\end{aligned}
$

$$f(x^*) \leq f(0)$$
$$b^\top b \geq \frac{(Ax^* - b)^\top(AX^* - b)}{1+(x^*)^2}$$

since $C$ is symmetric positive difinete, $C$ can be decomposited as $C = P^{-1} \Lambda P $, and $P^{-1} = P^\top$

$$
\begin{aligned}
(x^*)^\top C x^* &= (Px^*)^\top \Lambda Px^* \\
&\geq \lambda_{min}(C)||(Px^*)^\top|| *||Px^*|| \\
&=\lambda_{min}(C) (x^*)^\top x^*
\end{aligned}
$$

thus $(x^*)^\top x^* \leq \frac{b^\top b}{\lambda_{min}(C)}$

### (iv)
$$
\begin{aligned}
(P2) &\text{Minimize} & x^\top Cx \\
&\text{subject to} & x^\top x \leq \alpha
\end{aligned}
$$

Lagrangian:
$$L(x,\rho) = x^\top Cx + \rho (x^\top x - \alpha)$$

$$
\text{KKT-conditions } \left\{
\begin{aligned}
(C^\top + C)x + 2\rho x & = & \mathbf{0} \\
\rho (x^\top x - \alpha) &=&0 \\
\rho  \geq  0, x^\top x^\top x - \alpha &\leq& 0 \\
\end{aligned}
\right.
$$

$2\hat{x}^\top C \hat{x} = -2\rho \hat{x}^\top \hat{x}$
$2 \widetilde{x}^\top C \widetilde{x} = -2\rho \widetilde{x}^\top \widetilde{x}$
if $\rho \neq 0, \hat{x}^2 = \widetilde{x}^2 = \alpha ,\hat{x}^\top C \hat{x} = -\rho \alpha = \widetilde{x}^\top C \widetilde{x} $
if $\rho = 0$, $\hat{x}^\top C \hat{x} = 0 = \widetilde{x}^\top C \widetilde{x} $