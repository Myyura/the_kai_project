---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2014年8月実施 線形計画
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2014年8月実施 線形計画

## **Author**
Casablanca

## **Description**
### 日本語版


### English Version


## **Kai**
### (i)

$$
\begin{aligned}
    x^{*\top}y* &= C^\top x^* - (Ax^*)^\top w^* \\
    &= C^\top x^* - b^\top w^* \\
    & = 0
\end{aligned}
$$

since $x^* \succeq \boldsymbol{0}$
and $y^* = C - A^\top w^* \succeq \boldsymbol{0}$
then if $x^* \succ \boldsymbol{0}$, $$y^* = \boldsymbol{0}$$

### (ii)

Easy to see that we can let $x = [x_1, x_2, x_3, x_4, x_5]^\top$, the problem holds equivalent.
And we can write P2 as 
$$
\begin{aligned}
-&\text{Minimize} \quad - [0,0,0,0,1]x\\
&\text{Subject to} 
\begin{bmatrix}
    1 &1 &1 & 1 &0\\
    -1&1 &1 &1 &0 \\
    0 &-2 &1 &1 &0 \\
    0 &0 &-3 &1 &0\\
    0 &0 &0 &-4 &1
\end{bmatrix} \boldsymbol{x} = 
\begin{bmatrix}
    1\\ 0 \\0 \\0 \\0
\end{bmatrix}
\end{aligned}
$$

Denote as 
$$
\begin{aligned}
-&\text{Minimize} \quad -c^\top x \\
&\text{Subject to} \quad A\boldsymbol{x} \preceq b
\end{aligned}
$$

Lagrangian:
$$L(x, \lambda) = -c^\top x + \lambda ^\top (Ax - b)$$
Lagrange dual function:
$$d(\lambda) = -b^\top \lambda$$

An optimal solution of dual problem is $\lambda ^\top = [1,1,1,1,1]$
since $$-c^\top x = -1, x_5 = 1$$
By solving $Ax = b$,we get $$\sum_{i=1}^{4}x_i^* = 1$$