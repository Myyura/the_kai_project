---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2017年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版



### English Version

## **Kai**
### (i)

$
\begin{aligned}
\text{P1}(z) \quad -\text{Minimize} \quad &x^\top x - z^\top Ax\\
\qquad \text{Subject to} \quad   &x^\top x \leq 1\\
\end{aligned}
$

Lagrantian:
$$L(x, \lambda) = x^\top x - z^\top Ax - \lambda (x^\top x  -1)$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
(z+2\lambda)x^* -z^\top A & = 0 \\
\lambda   \succeq \boldsymbol{0}, \nu &\succeq \boldsymbol{0} \\
 \lambda \geq 0, (x^*)^2 - 1 &\leq 0 \\
\lambda ((x^*)^2 - 1) &= 0
\end{aligned}
\right.
$$

easy to see $x^{*\top} = \frac{z^\top A}{2}, \lambda = 0$ satisfies KKT-conditions.
$$x^1(z) = \frac{A^\top z}{2}$$

### (ii)

$
\begin{aligned}
\text{P2}(z) \quad -\text{Minimize} \quad &x^\top x + y^\top y\\
\qquad \text{Subject to} \quad   &x+y-z =0\\
\end{aligned}
$

Lagrangian:
$$L(x,y,\mu) = x^\top x + y^\top y + \mu (x+y - z)$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
2x^* + \mu & = \boldsymbol{0} \\
2y^* + \mu &=  \boldsymbol{0} \\
x^* + y^* - z &= \boldsymbol{0} \\
\end{aligned}
\right.
$$

$x^* = y^* = \frac 12 z , \mu = -\frac 12 z$ satisfies KKT-conditions
And we get minimum $\frac 12 z^\top z$


### (iii)

(a) Let $n = 1$ , then easy to see that the function is not conves.

(b) easy to see $x_2(z) = -\frac 12 A^\top z$
then $$g(x_2(z),z) = -\frac 14 z^\top AA^\top z + z^\top z$$
when $-\frac 14 A^\top A + I \prec \boldsymbol{0}$, $q$ is not convex

(c) $h = \frac 12 z^\top z$, obviously, it's convex
