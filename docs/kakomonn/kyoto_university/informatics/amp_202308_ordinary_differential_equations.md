---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2023年8月実施 常微分方程式
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2023年8月実施 常微分方程式

## **Author**
Casablanca

## **Description**
### 日本語版
$a(t), b(t) ≢ 0$ を $t$ の多項式として次の微分方程式を考える．

$$
\begin{align}
\frac{d^2 x}{d t^2} + a(t) \frac{dx}{dt} + b(t)x = 0 \tag{1}
\end{align}
$$

$k$ をある自然数として $x = t^k$ が解であるものとする.このとき，以下の問いに答えよ.

(i) $k$ を定めよ.

(ii) $a(t)$ を $b(t)$ を用いて表わせ.

(iii) 式 (1) は $x = t^k$ と線形独立な有理関数解をもたないことを示せ.

### English Version
Let $a(t), b(t) ≢ 0$ be polynomials of $t$ and consider the differential equation

$$
\begin{align}
\frac{d^2 x}{d t^2} + a(t) \frac{dx}{dt} + b(t)x = 0 \tag{1}
\end{align}
$$

Assume that $x = t^k$ is a solution, where $k$ is a positive integer. Answer the following
questions.

(i) Determine $k$.

(ii) Express $a(t)$ in terms of $b(t)$.

(iii) Show that Eq. (1) has no rational function solution that is linearly independent of $x = t^k$.

## **Kai**
### (i)
if $k\geq 2$, plug  $x = t^k$ in,

$$
k(k-1)t^{k-2} + kt^{k-1}a(t) + t^kb(t) = 0
$$

thus

$$
k(k-1) + kta(t)+t^2b(t) = 0
$$

since $a(t)$, $b(t)$ are both polynomials of t, $kta(t)+t^2b(t)$ has no constant term.
Thus $k(k-1)=0$, which is in conflict with $k \geq 2$.
Therefore $k=1$

### (ii)
$a(t) = -tb(t)$

### (iii)
Let $x(t) = t u(t)$, we have

$$
x'(t) = u(t) + tu'(t), x''(t) = 2u'(t) + tu''(t)
$$

and obtain:

$$
tu''(t) + (2-t^2b(t))u'(t) = 0
$$

Let $v(t) = u'(t)$

$$
t\frac{dv(t)}{dt} + (2-t^2b(t))v(t) = 0
$$

since $x(t)$ is a rational function, we can easily see that $u(t)$ is a rational function and $v(t)$ is a rational function.
Let $v(t) = \frac{p(t)}{q(t)}$,

$$
t(p'(t)q(t) - p(t)q'(t)) + (2-t^2b(t))p(t)q(t) = 0
$$

if $p(t)q(t) \neq 0$, the times of $(2-t^2b(t))p(t)q(t)$ is greater than the times of $t(p'(t)q(t) - p(t)q'(t))$.
Thus $p(t)q(t) \equiv 0$, $v(t) = 0$, $v(t) = C$, $x(t) = Ct$ is the only ration function solution.
  
