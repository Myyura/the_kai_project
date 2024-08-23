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

Let $a^{(1)} = [1,1,0,1,1]^\top, a^{(2)} = [0,1,1,1,0]^\top$
Lagrangian:
$$L(x,\mu) = c^\top x + \mu_1 (a^{(1)\top}-3) + \mu_2(a^{(2)\top} - 3)$$
Lagrange dual function:
$$g(\mu) = -3(\mu_1 + \mu_2)$$

Dual problem:
$
\begin{aligned}
(D): \text{Maximize} \quad &-3(\mu_1 + \mu_2) \\
\text{Subject to:} \quad  & c + \mu_1 a^{(1)} + \mu_2a^{(2)} \succeq \boldsymbol{1} \\
\end{aligned}
$

### (ii)

we calculate the extreme point , and get $[0,3,0,0,0]$, $[0,0,0,3,0]$, $[0,0,0,0,3]$, $[3,0,3,0,0]$, and there is no extreme direction.
then the domain is bounded, thus $X(c) \neq \empty$

### (iii)

if $x^*$ is an optimal solution,
$c^\top x^* = c^\top \sum_{i=1}^{4}\theta_i x_i$ $\boldsymbol{(*)}$, where $\theta_i \in [0,1]$, $\sum \theta_i = 1$, $x_i$ is extreme point shown in (ii)

first we have $c^\top x_i \geq c^\top x^*$, else $x^*$ is not a optimal solution.
if $c^\top x_j > c^\top x^*$ for $j =1,2,3,4$, then 
$$\sum_{i=1}^{4}\theta_i c^\top x_i > c^\top x^*$$ 
But according to $\boldsymbol{(*)}$
$$c^\top x^* = \sum_{i=1}^{4}\theta_i c^\top x_i$$
Thus, a contradiction arises.

thus there is at least one extreme point such that $c^\top x_j = c^\top x^*$
Therefore
$$X(c)\cap Z^5 \neq \empty$$

### (iv)

let $c^\top = [0,0,0,-1,-1]$, then $x_5^\top = [0,0,0,1.5,1.5]$ is also a solution