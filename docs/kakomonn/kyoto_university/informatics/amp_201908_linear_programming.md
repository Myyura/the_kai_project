---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2019年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2019年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

Lagrangian: 
$$L(u,v,\lambda, \kappa) = (c^\top x^*)v - b^\top u + \lambda ^\top (A^\top u - vc - d) - \kappa v$$
Lagrange dual function:
$$d(\lambda, \kappa) = -\lambda ^\top d$$

$
\begin{aligned}
(D): \text{Minimize} \quad &d^\top \lambda \\
\text{Subject to:} \quad  & c^\top x^* - c^\top \lambda - \kappa &= 0 \\
&\kappa \geq 0,  \lambda \succeq \boldsymbol{0}\\
\end{aligned}
$
$d = [-1,0,0,\ldots, 0]^\top$

### (ii)
for $(D)$, $\kappa = 0$, $\lambda = x^*$ is feasible , hence $(Q)$ has optimal value $v(Q) \leq d^\top x^* = 0$
$(Q)$ is bounded, thus has an optimal value.

### (iii)
for $w^*$, $c^\top x^* = b^\top w^*$, since suality gap is zero, then for $(Q)$,when $u = w^*$ and $v = 1$, 0 is attained.

### (iv)
we know:
$$b^\top u^* - v^* (c^\top x^*) = 0$$
then
$$b^\top \frac{u^*}{v^*} = c^\top x^*$$
since 
$$A^\top \frac{u^*}{v^*} \leq c+d \leq c$$
$\frac{u^*}{v^*}$ is an optimal solution to $(D)$

### (v)
we have $$b^\top u^* = 0, A^\top u^* \leq d$$
$(D)$ has optimal solution $\widetilde{w}$, 
let $w^* = \widetilde{w} + tu^*$, $t > 0$
then
$$Aw^* \leq c+ td, (a^1)\top w^* < c_1$$
$$b^\top w^* = b^\top \widetilde{w}$$
thus $w^*$ is such an optimal solution