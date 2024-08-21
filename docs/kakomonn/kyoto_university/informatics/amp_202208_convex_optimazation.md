---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2022年8月実施 専門科目 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2022年8月実施 専門科目 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版

### English Version

## **Kai**
### (i)

$$ 
\begin{aligned}
g(x) = & \frac{1}{2} x^\top Q x + \frac{1}{2} x^\top x + q^\top x \\
& \frac{1}{2} x^\top(Q+I)x + q^\top x \\
\end{aligned}
$$

easy to see that $g(x)$ is convex, and from first-order condition:

$$
g(x) \geq \bigtriangledown g(y)^\top (x-y)
$$

### (ii)
Lagrangian:

$$
L(x,\lambda) = \frac{1}{2} x^\top (Q+I)x + q^\top x + \lambda(x^2 - 1)
$$

and we get:

$$
\text{KKT-conditions } \left\{
\begin{aligned}
(Q+I)x^* + 2\lambda I x^* + q & = & \mathbf{0} \\
\lambda ((x^*)^2 - 1) &=&0 \\
\lambda &\geq& 0\\
\end{aligned}
\right.
$$

### (iii)
$$
f(x) = \frac{1}{2} x^\top Q x + q^\top x + \frac{1}{2} x^\top x - \frac{1}{2} x^\top x
$$

$$
f(u) = g(u) - \frac{1}{2} u^\top u = g(u) - \frac{1}{2}
$$

$$
\forall x, f(x) = g(x) - \frac{1}{2} \geq g(u) - \frac{1}{2} \geq g(u) - \frac{1}{2} = f(u)
$$

thus $u$ is a global optimal solution to (P1)
