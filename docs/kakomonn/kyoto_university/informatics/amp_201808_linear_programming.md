---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2018年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

Lagrangina: 
$$ 
\begin{aligned}
L(y,z, \lambda, \nu, \mu) &= \boldsymbol{1}^\top y + \mu ^\top (b - Ax) + \lambda ^\top (x - y) + \nu ^\top (-x-y) \\
 & = (1-\lambda -\nu )^\top y + (-\mu ^\top A + \lambda ^\top - \nu ^\top ) x + b^\top \mu 
\end{aligned}
$$

$
\begin{aligned}
(Q): \text{Maximize} \quad &b^\top \mu \\
\text{Subject to:} \quad  & \mu + \nu = \boldsymbol{1} \\
&\mu ^\top A = (\lambda - \nu) ^\top \\
&\lambda \succeq 0, \nu \succeq 0
\end{aligned}
$

### (ii)
$b^\top \mu = (Ax)^\top \mu = x^\top(\lambda ^\top - \mu ^\top), -1 \preceq \lambda - \mu \preceq 1$
for a given $\widetilde{x} $, $v(p) \geq \max (\widetilde{x}^\top (\lambda - \nu))$
$\widetilde{x}^\top (\lambda - \nu)$ is bounded, thus $(P)$ is bounded, and therefore has an optimal solution

### (iii)

for $
\begin{bmatrix}
1 & 2&0 \\
0 & 0&5
\end{bmatrix}
x = \begin{bmatrix} 2 \\ 10 \end{bmatrix}$ , we get $x = [2-2u, u, 2] ^\top$
$$ \min \sum_{i=1}^{n}y_i = \min(|2-2u| + |u| + 2) = 3$$
$y^* = [0,1,2]^\top$