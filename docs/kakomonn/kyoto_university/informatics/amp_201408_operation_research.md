---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2014年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版



### English Version

## **Kai**
### (i)

$$
\begin{aligned}
    \text{P}(z): & \text{Minimize} \quad \triangledown f(z)^\top y + \frac 12 (y-z)^\top (y-z) \\
    &\text{Subject to} \quad a^\top y = b
\end{aligned}
$$

Lagrangian:
$$L(y,\mu) = \triangledown f(z)^\top y + \frac 12 (y-z)^\top(y-z) + \mu (a^\top - b)$$

$$
\text{ KKT-conditions} \left\{
\begin{aligned}
\triangledown f(x) + (\bar{y}(z) - z) + \mu a & = \boldsymbol{0} \\
a^\top \bar{y}(z) &= b
\end{aligned}
\right.
$$

thus 
$$\mu = \frac{-b - \triangledown f(z)^\top a + a^\top z}{a^\top a}, \bar{y}(z) = \frac{b}{a^\top a}a$$

### (ii)

from (i) we know that $\frac{b}{a^\top a} a$ Minimize $P(\frac{b}{a^\top a}a)$
$$S = \{x | a^\top (x - \frac{b}{a^\top a}) = 0 \} = \{\frac{b}{a^\top a} + td|a^\top d = 0, t\in R \}$$
Let $g(t) = \triangledown f(\frac{b}{a^\top a}a) (\frac{b}{a^\top a}a + td) + \frac 12 t^2 d^\top d$
since $$argmin \quad g(t) = 0$$
then $$\triangledown f(\frac{b}{a^\top a}a)^\top d = 0$$
thus
$$\forall y \in S, f(y) - f(\frac{b}{a^\top a}a) \geq \triangledown f(\frac{b}{a^\top a }a)^\top (y - \frac{b}{a^\top a}a) = 0$$
Therefore $\frac{b}{a^\top a}a$ minnimize $f(x)$

### (iii)

since $$a^\top \bar{y}(x) = b, a^\top x = b$$
we obtain
$$a^\top (\bar{y}(x) - x) = 0$$
$x = \bar{y}(x) + td , a^\top d = 0, t\in R, t\neq 0$
$\triangledown f(x)^\top \bar{y}(x) + \frac 12 (\bar{y}(x) - x)^\top(\bar{y}(x) - x) \leq \triangledown f(x)^\top x$
Then $$\triangledown f(x)^\top (\bar{y}(x) - x) < 0$$

### (iv)

Let $g(t) = f(x + t(\bar{y}(x) - x)), t \geq 0$
$g'(0) = \triangledown f(x)^\top (\bar{y}(x) - x)$
 $f$ is continuously differentiable, and so is $g$
 $f(c) = g(0) + g'(\theta)c , \theta \in (0,c)$
 thus $$g(c) < g(0)$$
 then $$f(x + c(\bar{y}(x) - x)) < f(x)$$
 thus x is not an optimal solution.