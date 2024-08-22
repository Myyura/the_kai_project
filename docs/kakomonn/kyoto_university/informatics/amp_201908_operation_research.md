---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2019年8月実施 オペレーションズ・リサーチ
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 オペレーションズ・リサーチ

## **Author**
Casablanca

## **Description**
### 日本語版



### English Version

## **Kai**
### (i)

$\boldsymbol{(a)}$
$
\begin{aligned}
(P): - \text{Minimize} \quad &-\theta (x) \\
\text{Subject to}\quad &\boldsymbol{1}^\top x = 1 \\
&x \succeq \boldsymbol{0}
\end{aligned}
$

Lagrangian : $$L(x, \mu) = -\theta (x) + \mu (1^\top x - 1)$$
$$
\text{KKT-conditions } \left\{
\begin{aligned}
&-\frac 1n (\Pi_{j\neq i}^{n} x_j)^{\frac 1n - 1} - \mu = 0, i = 1, 2, \ldots, n \\
&1^\top x = 1, x\succeq 0 \\
\end{aligned}
\right.
$$

$\boldsymbol{(b)}$
$x^*$, $\mu ^*$ satisfied KKT-conditions if $x^* = [\frac 1n, \frac 1n, \ldots , \frac 1n]^\top$, $\mu = -\frac 1n$

$\boldsymbol{(c)}$
$$(\prod_{i=1}^{n} \gamma_i )^{\frac 1n} = (\prod_{i=1}^{n} \gamma_i )^{\frac 1n} \frac{\sum \gamma_i}{\sum \gamma_i}  = (\frac{\prod_{i=1}^{n} \gamma_i}{(\sum_{i=1}^{n}\gamma_i)^n})^{\frac 1n} (\sum_{i=1}^{n} \gamma_i) \leq \frac 1n \sum_{i=1}^{n}\gamma_i$$

### (ii)
$\boldsymbol{(a)}$

for any $f \in \bigcup_{n=1}^{\infty} \mathscr{F}_n$ ,without losing generallity, let $f : R^k \rightarrow R$ be an nonnegative function.
then
$$\theta g_f( x_1) + (1-\theta)g_f(x_2) = \theta f( x_1)^2 + (1-\theta) f( x_2)^2 $$
$$g_f(\theta x_1 + (1-\theta)x_2) = f(\theta x_1 + (1-\theta)x_2) ^ 2 \leq (\theta f( x_1) + (1-\theta) f( x_2)) ^2$$
and consider $\phi(\theta) =g_f(\theta x_1 + (1-\theta)x_2) - \theta g_f( x_1) - (1-\theta)g_f(x_2) $ 
by calculating $\Delta$ , easily we see:

$$g_f(\theta x_1 + (1-\theta)x_2) \leq \theta g_f( x_1) + (1-\theta)g_f(x_2) $$

$\boldsymbol{(b)}$

$\alpha ^* = 1$
for $\alpha \geq 1$:
$$\theta f(x_1)^{\alpha} + (1-\theta)f(x_2) ^{\alpha} \geq (\theta f(x_1) + (1-\theta)f(x_2))^{\alpha}$$
since $\theta f(x_1) + (1-\theta)f(x_2) \geq f(\theta x_1 + (1-\theta)x_2)$, and $t^{\alpha}$ increases for $t>0$
then
$$(\theta f(x_1) + (1-\theta)f(x_2))^{\alpha} \geq (f(\theta x_1 + (1-\theta)x_2))^{\alpha } = h(\theta x_1 + (1-\theta)x_2)$$
thus h is convex for $\alpha \geq 1$
if $\alpha < 1$, let $f(x) = x_1^{\alpha}$, easy to see $h$ is not convex.
hence $\alpha^* = 1$