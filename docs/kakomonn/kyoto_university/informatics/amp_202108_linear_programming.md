---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2021年8月実施 専門科目 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 専門科目 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)
Lagrangian:
$$L(x, \lambda, \nu) = u^\top Ax + \lambda(\mathbf{1}^\top x - 1) - \nu^\top x$$
Lagrange dual function:
$$g(\lambda, \nu) = \inf_{x} \{ L(x,\lambda, \nu) \} = - \boldsymbol{\lambda}$$
Dual proble $(D)$:
$$
\begin{aligned}
(D): &\text{Maximize} \quad \lambda \\
&\text{subject to} \quad u^\top A + \lambda \boldsymbol{1}^\top \succeq \boldsymbol{0} \\
&\qquad \qquad \quad \lambda \geqq 0
\end{aligned}
$$

### (ii)
from $\boldsymbol{(i)}$ we know , for $(D)$: $-\lambda \boldsymbol{1} \preceq u^\top A$
obviously $u^\top A \succeq \boldsymbol{0}$, from strong duality, $\max \{- \lambda\} = 0$, $0 \in S_p(u)$

### (iii)

according to the constraint, $x^* \succeq 0$, from $\boldsymbol{(ii)}, 0 \in S_Q(x^*)$
if $x^* = 0$ , then $(y^*)^\top Ax^* = 0$
if $x^* \neq 0$, $y^* = 0$, else $-(x^*)^\top A y^* \succ 0$, which is conflict with $0 \in S_Q(x^*)$
thus $(x^*)^\top A y^* = 0$ always holds

### (iv)
Let $ \boldsymbol{c} = u^\top A$, then :$0 > c_1 > c_2 > \ldots > c_n$

We get KKT_conditions:

$$
\text{ } \left\{
\begin{aligned}
c + \lambda \boldsymbol{1} - \nu & = & 0 \\
\lambda \succeq \boldsymbol{0}, \nu   & \succeq & \bold{0} \\
 -\nu^\top x^*  = 0,\lambda (\bold{1}^\top x^* - 1) &=& 0
\end{aligned}
\right.
$$
And $\lambda = -c_n , \nu = \bold{c} - c_n \bold{1}, x^* = [0,0,\ldots, 1]^\top$ satisfies the KKT-conditions,
thus $[0,0,\ldots, 1]^\top \in S_P(u)$
and $ \forall \widetilde{x} \neq [0,0,\ldots, 1]^\top, \bold{c} \widetilde{x} > c_n = \bold{c}x^* $ 
thus S_P(u) = $\{ [0,0,\ldots, 1]^\top \}$

### (v)
Consider $P(y^*)$ and $Q(x^*)$
for $x^* = 0$, if $y* \neq 0$, then $x^* = [0,0,\ldots, 1]^\top$, and it's similar when $y^* = \bold{0}, x^* \neq \bold{0}$
thus $(\bold{0}, \bold{0}) \in X$
And then we consider the situation when $y^* \neq \bold{0}, x^* \neq \bold{0}$

$y^* \neq \bold{0} \Rightarrow x^* = [0,0,\ldots, 1]^\top \Rightarrow x^* \neq \bold{0} \Rightarrow y^* = [0,0,\ldots, 1]^\top $
Therefor $X = \{ (\bold{0}, \bold{0}), ([0,0,\ldots, 1]^\top, [0,0,\ldots, 1]^\top) \}$