---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2020年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2020年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

$
\begin{aligned}
L(x,\mu) = & -y^\top x + \mu (\sum ix_i - 1)\\
=&(-y^\top + \mu N^\top)x - \mu , N^\top = [1,2, \ldots , n]
\end{aligned}
$
$g(\mu) = -\mu$

$
\begin{aligned}
(D): &\text{Minimize} \quad \mu \\
&\text{Subject to} \quad -y + \mu N \succeq \boldsymbol{0}
\end{aligned}
$

### （ii）
from $(D)$, $\mu \geq \frac 1i y_i, i = 1, 2, \ldots, n$
thus for any $y$, $\mu = \max \{\frac{y_i}{i} \}$
$(D)$ has an optimal solution, thus $(P)$ also has an optimal solution according to duality

### (iii)
$
\begin{aligned}
f(\alpha y + (1-\alpha)z) &= \max \{ \frac{\alpha y_i +(1-\alpha)z_i }{i} \} \\
& \leq \max \{ \alpha \frac{y_p}{p} \} + \max \{ (1-\alpha)\frac{z_q}{q} \} \\
& = \alpha f(y) + (1-\alpha)f(z)
\end{aligned}\\
$

#### (iv)
We write Q as :

$
\begin{aligned}
(Q): \text{Minimize} \quad &\max \{ \frac{y_i}{i}\} \\
\text{Subject to:} \quad  & \sum_{i=1}^{n} \frac{y_i}{i} = 1
\end{aligned}
$

And further, let $w_i = \frac{y_i}{i}$, we get Q':
$
\begin{aligned}
(Q'): \text{Minimize} \quad &t \\
\text{Subject to:} \quad  & \sum_{i=1}^{n} w_i = 1 \\
& t \geq w_i
\end{aligned}
$

Obviously, $$nt \geq \sum_{i=1}^{n}w_i = 1 $$
$$t\geq \frac 1n $$
And when $w_1 = w_2 = \ldots = w_n$, $t = \frac 1n$ is attained.