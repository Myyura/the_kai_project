---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2021年8月実施 専門科目 常微分方程式
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 専門科目 常微分方程式

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

if $k = 1$, $a(t) = tb(t) = 0$
if $k \geq 2, k(k-1) + kta(t) + t^2b(t) = 0$
easy to see  $k(k-1) + kta(t) + t^2b(t) = 0$ is neccessary and sufficient.

### (ii)
Let $\Phi(t) = u(t)t^k, u(t) !\equiv Constant$, 
$\Phi '(t) = kt^{k-1}u(t) + t^ku'(t)$, 
$\Phi''(t) = t^ku''(t) + 2kt^{k-1}u'(t) + k(k-1)t^{k-2}u(t)$
then $p(t) = t^{k-1}u'(t), p'(t) = (k-1)t^{k-2}u'(t) + t^{k-1}u''(t)$
And we can obtain:
$$t u''(t) + (2k + a(t)t)u'(t) = 0$$
therefor
$$a(t) = -\frac{u''(t)}{u'(t)} - \frac{2k}{t} = -\frac{(3k-1)p'(t)}{tp(t)}$$
$$b(t) = \frac{2k^2}{t^2} - \frac{kp'(t)}{tp(t)}$$

### (iii)
$a(t) = -\frac{1}{t}, b(t) = \frac{1}{t^2}$

### (iv)
Let $x_1$, $x_2$ be 2 independent particular solutions, then
$$x_1'' = -a(t)x_1' - b(t)x_1 , x_2'' = -a(t)x_2' - b(t)x_2$$
and we obtain
$$
\begin{aligned}
    (x_1'x_2 - x_1 x_2')' &= x_1''x_2 - x_1 x_2''\\
&= -a(t)x_1'x_2 + a(t)x_1x_2'\\
&= -a(t)(x_1'x_2 - x_1 x_2')
\end{aligned}
$$
so we get:$$x_1'x_2 - x_1x_2' = C e^{\int a(t)dt}$$
denote  $\int a(t)d$ as $A(t)$
since $a(t)$ is a polynomial, and $Ce^{-A(t)}$ is a  polynomial for $x_1'x_2 - x_1x_2'$ is a polynomial, we obtain $a(t) \equiv 0$
then consider $$\frac{d^2x}{dt^2} + b(t)x = 0$$

if $x_1$,$x_2$ are independent polynomials, and $b(t)$ is polynomials, make an summption that $x(t)$ is m times and $b(t)$ is n times, then we must have $b(t) \equiv 0$

thus $a(t), b(t)$ can't be polynomials.
