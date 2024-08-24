---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2017年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2017年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

since $\triangledown f(\bar{x})^\top d \geq 0$
from first order condition
$$f(\bar{x} + d) \geq f(\bar{x}) + \triangledown f(\bar{x})^\top d \geq f(\bar{x})$$

### (ii)

Lagrangian: $$L(x, \lambda) = \triangledown f(\bar{x})^\top x + \lambda^\top (A(\bar{x} + x) - b)$$
Lagrange dual function
$$g(\lambda) = \lambda ^\top A \bar{x} - \lambda^\top b$$


Dual problem:
$
\begin{aligned}
(D): \text{Maximize} \quad \lambda^\top (A\bar{x} - b) \\
\text{Subject to} \quad  \triangledown f(\bar{x}) + A^\top \lambda &= \boldsymbol{0} \\
\lambda &\succeq \boldsymbol{0} \\
\end{aligned}
$

### (iii)
$Az = A(z-\bar{x} + \bar{x}) \preceq b$
$z-\bar{x}$ is in domain of P,denote P's optimal value as $v(p)$, then
$$f(z) - f(\bar{x}) \geq \triangledown f(\bar{x})^\top (z- \bar{x}) \geq v(p)$$
since
$$A\bar{x} \succeq b, \lambda ^\top (A\bar{x}-b) \geq 0$$
thus 
$$v(p) \geq 0$$
then
$$f(z) \geq f(\bar{x})$$