---
sidebar_label: "2018年8月実施 力学系数学"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Polynomial-Solutions-of-Ordinary-Differential-Equation
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 力学系数学

## **Author**
Casablanca

## **Description**
### 日本語版
$a, b, c, d \in \mathbb{R}$ を定数として次の微分方程式を考える。

$$
\begin{align}
t^2 \frac{dx}{dt} + (at + b)x = ct + d  \tag{1}
\end{align}
$$

以下の問いに答えよ。ただし、$b \neq 0$ とし、自然数 $n$ に対して最高次の次数が $n$ の $t$ の多項式で表される解を $n$ 次多項式解と呼ぶ。

(i) 式 (1) が１次多項式解を持つための必要十分条件を $a, b, c, d$ を用いて表わせ。

(ii) 自然数 $n > 1$ に対して、式 (1) が $n$ 次多項式解をもつための必要十分条件を $a, b, c, d, n$ を用いて表わせ。

(iii) どんな自然数 $n$ に対しても式 (1) が $n$ 次多項式解をもつための必要十分条件を $a, b, c, d$ を用いて表わせ。

### English Version


### 题目描述

设 $a,b,c,d\in\mathbb R$ 为常数，且 $b\ne0$。考虑微分方程

$$
t^2\frac{dx}{dt}+(at+b)x=ct+d. \tag{1}
$$

对正整数 $n$，称能表示为关于 $t$ 的次数恰为 $n$ 的多项式的解为“$n$ 次多项式解”。回答：

1. 用 $a,b,c,d$ 表示方程 (1) 存在一次多项式解的充要条件。
2. 对任意正整数 $n>1$，用 $a,b,c,d,n$ 表示方程 (1) 存在 $n$ 次多项式解的充要条件。
3. 用 $a,b,c,d$ 表示如下性质成立的充要条件：方程 (1) 对每个正整数 $n$ 都存在一个 $n$ 次多项式解。

#### 考点

- **一阶微分方程的多项式解**：设定多项式系数并比较同次幂，推导系数递推及最高次项条件。
- **参数化存在性条件**：区分一次与一般 $n$ 次情形，并进一步判断何种参数能对所有正整数次数同时保证解的存在。

## **Kai**
### (i)
Suppose that $x(t) = pt + q$ is a solution, $p \neq 0$, we have

$$
(p+ap)t^2 + (a1+bp - c)t + bq - d = 0
$$

$$
p+ap = 0, aq+bp-c = 0, bq - d = 0 \Leftrightarrow a = -1, q = \frac db , p = \frac cb - \frac{ad}{b^2}
$$

### (ii)
Let $\Phi(t) \sum_{i=0}^{n}c_i t^i$ be a solution, where $c_n \neq 0$. Then we have

$$
(nc_n + ac_n)t^{n+1} + \sum_{i=2}^{n-1}t^i(ic_i + ac_i + bc_{i+1}) + (ac_0 + bc_1 - c)t + bc_0 - d = 0
$$

and we get a sufficient and necessary condition:

$$
a = -n, c_0 = \frac db , c_1 = \frac{nd}{b^2} + \frac cb , c_k = \frac{b^{n-k}}{(n-k)!}c_n
$$

### (iii)
from (i) and (ii) we see that $a \in R/Z^-$ is sufficient and necessary.
