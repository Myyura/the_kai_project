---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2013年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2013年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

Lagrangian:
$$L(x, \mu) = c^\top x + \mu^\top (b-Ax) = (c^\top - \mu ^\top A)x + b^\top \mu$$
Lagrange dual function:
$$g(\mu) = b^\top \mu$$

$$
\begin{aligned}
    \text{(D)} \quad & \text{Maximize} \quad b^\top \mu \\
    & \text{Subject to} \quad c^\top - \mu ^\top A \succeq 0
\end{aligned}
$$

### (ii)

$A^\top y(\mu) + z(\mu) = c, Ax(\mu) = b, x_iz_i = \mu$
$x(\mu) ^\top A^\top y(\mu) + x(\mu) ^\top z(\mu) = c^\top x(\mu)$
$b^\top y(\mu) - c^\top x(\mu) = -n\mu$
thus
$$h(\mu) = n \mu \text{ is linear on }[0, \infty)$$

### (iii)

Consider $Q(0)$, get $b^\top y(0) = c^\top x(0)$
since $$c^\top x \leq b^\top \mu$$, $y(0)$ satisfies the constraint of (D)
thus $x(0)$ is an optimal solution to P

### (iv)

$$
\text{ Q}(\mu) \left\{
\begin{aligned}
[\boldsymbol{1},\boldsymbol{1}]y+z &= [1,-1]  \\
[1,1]x &= 1 \\
x_i z_i &= \mu \\
x \succeq 0, z & \succeq 0
\end{aligned}
\right.
$$

and we get
$$x = [\frac{\mu + 1 + \sqrt{\mu ^2 + 1}}{2}, \frac{1-\mu + \sqrt{\mu^2 + 1}}{2}]^\top$$

for 
$$
\begin{aligned}
    &\text{Maximize} \quad \mu \\
    &\text{Subject to} \quad [1,-1] - \mu [1,1] \succeq \boldsymbol{0}
\end{aligned}
$$

then we get an optimal solution $\mu = -1$