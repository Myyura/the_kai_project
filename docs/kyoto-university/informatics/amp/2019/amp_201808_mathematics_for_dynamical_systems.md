---
sidebar_label: "2018年8月実施 力学系数学"
tags:
  - Kyoto-University
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
