---
sidebar_label: "2018年8月実施 力学系数学"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Polynomial-Solutions-of-Ordinary-Differential-Equation
---
# 京都大学 情報学研究科 数理工学専攻 2018年8月実施 力学系数学

## **Author**
Casablanca, 祭音Myyura

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

(iii) どんな自然数 $n$ に対しても式 (1) が $n$ 次多項式解をもたないための必要十分条件を $a, b, c, d$ を用いて表わせ。

### English Version


### 题目描述

设 $a,b,c,d\in\mathbb R$ 为常数，且 $b\ne0$。考虑微分方程

$$
t^2\frac{dx}{dt}+(at+b)x=ct+d. \tag{1}
$$

对正整数 $n$，称能表示为关于 $t$ 的次数恰为 $n$ 的多项式的解为“$n$ 次多项式解”。回答：

1. 用 $a,b,c,d$ 表示方程 (1) 存在一次多项式解的充要条件。
2. 对任意正整数 $n>1$，用 $a,b,c,d,n$ 表示方程 (1) 存在 $n$ 次多项式解的充要条件。
3. 用 $a,b,c,d$ 表示如下性质成立的充要条件：对每个正整数 $n$，方程 (1) 都不存在 $n$ 次多项式解。

## **Kai**
### (i)
Suppose that $x(t) = pt + q$ is a solution, $p \neq 0$, we have

$$
p(1+a)t^2+(aq+bp-c)t+bq-d=0.
$$

$$
p(1+a)=0,\qquad aq+bp=c,\qquad bq=d.
$$

Thus $q=d/b$, $a=-1$, and $p=(bc+d)/b^2$. Since the degree must be exactly one, the necessary and sufficient condition is

$$
a=-1,\qquad bc+d\ne0.
$$

### (ii)
Let $x(t)=\sum_{j=0}^n q_jt^j$, where $q_n\ne0$. Comparing coefficients gives

$$
\begin{aligned}
(n+a)q_n&=0,\\
(j-1+a)q_{j-1}+bq_j&=0 &&(2\le j\le n),\\
aq_0+bq_1&=c,\\
bq_0&=d.
\end{aligned}
$$

Hence $a=-n$ and

$$
q_0=\frac db,\qquad
q_1=\frac{bc+nd}{b^2},\qquad
q_j=\frac{n-j+1}{b}q_{j-1}.
$$

Therefore $q_n\ne0$ exactly when $bc+nd\ne0$. The necessary and sufficient condition is

$$
a=-n,\qquad bc+nd\ne0.
$$

### (iii)
By (i) and (ii), an $n$th-degree polynomial solution exists exactly when

$$
a=-n\quad\text{and}\quad bc+nd\ne0.
$$

Therefore no positive degree occurs for any $n\in\mathbb N$ if and only if

$$
-a\notin\mathbb N
\quad\text{or}\quad
\bigl(-a\in\mathbb N\ \text{and}\ ad=bc\bigr).
$$
