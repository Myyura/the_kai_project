---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2015年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2015年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版



### English Version

## **Kai**
### (i)

$$f_k(x^k) \leq f_k(x^*) = f(x^*) + \frac k2 (a^\top x^*)^2 = f(x^*)$$

### (ii)

$$
\begin{aligned}
    \lim_{k->\infty} f_k(x^k) &= \lim_{k\rightarrow\infty} (f(x^k) + \frac k2 (a^\top x^k)^2 + \frac12 (x^k - x^*)^\top (x^k - x^*)) \\
    &= f(\bar{x}) + \lim_{k\rightarrow \infty} \frac{k^2}{2}(a^\top \bar{x})^2 + \lim_{k\rightarrow \infty} \frac 12 (\bar{x} - x^*)^\top (\bar{x} - x^*) \\
    & \leq f(x^*)
\end{aligned}
$$

then we must have $$a^\top \bar{x} = 0$$
then
$$f(\bar{x}) + \frac 12 (\bar{x} - x^*)^\top(\bar{x} - x^*) \leq f(x^*)$$
And $x^*$ is optimal
$$f(\bar{x}) \geq f(x^*)$$
thus $$f(x^*) = f(\bar{x}), \text{and } \bar{x}=x^*$$ 

### (iii)

Lagrangian 
$$L(x, \lambda) = f(x) + \frac k2 (a^\top x)^2 + (\frac 12 + \lambda)(x-x^*)^\top (x-x^*) - \lambda$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
\triangledown f(x) + k aa^\top x + (1+2\lambda)(x-x^*)^\top (x-x^*) & = \boldsymbol{0} \\
\lambda \succeq  \boldsymbol{0}, \lambda ((x-x^*)^\top (x-x^*) - 1) &= 0 \\
(x-x^*)^\top (x-x^*)-1 &\leq 0
\end{aligned}
\right.
$$

### (iv)

$$\triangledown f(x^k) + k a^\top a x^k + (x-x^k)(1+2\lambda) = 0$$
And
$$\lambda \geq 0, \lambda ((x^k - x^*)^\top(x^k - x^*)-1) = 0$$
When $k$ is sufficiently large, we  have
$$(x^k - x^*)^\top (x^k - x^*)<1$$
then
$$\lambda = 0$$
thus 
$$\triangledown f_k(x^k) + ka^\top a x^* + x^k - x^* = 0$$
therefore
$$\triangledown f_k(x^k) = \triangledown f(x^k) + ka^\top a x^* + x^k - x^* = 0$$

### (v)

$$\lim_{k\rightarrow \infty}x^k = x^*$$
from KKT-conditions:
$$\triangledown f(x^k) + aka^\top x^k + (1+2\lambda)(x^k - x^*) = 0$$
Let $k \rightarrow \infty$, get
$$\triangledown f(x^*) + a \bar{\lambda} = 0$$