---
sidebar_label: 2014年8月実施 専門 第3問
tags:
  - Tokyo-University
  - Mathematics.Number-Theory.Greatest-Common-Divisor
  - Computer-Science.Algorithm-Design.Euclidean-Algorithm
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2014年8月実施 専門 第3問

## **Author**
[adj-matrix](https://github.com/adj-matrix)

## **Description**

Let $f = a_0 + a_1 x + \dots + a_m x^m$ and $g = b_0 + b_1 x + \dots + b_n x^n$ be polynomials of $x$ ($a_i$ and $b_i$ are real. $a_m \neq 0$ and $b_n \neq 0$). We represent the leading terms of the polynomials $f$ and $g$ by $\text{LT}(f) = a_m x^m$ and $\text{LT}(g) = b_n x^n$, and their degrees by $\deg(f) = m$ and $\deg(g) = n$. The polynomial division, where $f$ is divided by a non-zero polynomial $g$, is given by

$$
f = qg + r.
$$

Here quotient $q$ and remainder $r$ are polynomials of $x$ satisfying $r = 0$ or $\deg(r) < \deg(g)$. In this case, we represent $r = \text{remainder}(f, g)$ and $q = \text{quotient}(f, g)$.

(1) Calculate $\text{quotient}(f, g)$ and $\text{remainder}(f, g)$ for $f = x^2 + 7x + 3$ and $g = x + 1$.

(2) Complete a pseudocode of the polynomial division algorithm by filling (a) with appropriate expressions. Note that the four arithmetic operations for monomial terms (expressions that contain only one term, e.g. $7x^3$ or $-5x^{10}$) and addition/subtraction operations for polynomials can be used as they are.

```text
Input: f, g
Output: q, r
q = 0, r = f
while (r ≠ 0 and deg(g) ≤ deg(r)) {
    q = q + LT(r)/LT(g)
    r = _____ (a) _____
}
```

(3) Prove that the algorithm introduced in (2) always terminates.

(4) The greatest common divisor (GCD) for polynomials $f$ and $g$ is a polynomial $h$ which satisfies the following conditions.
*   $h$ divides $f$ and $g$
*   if a polynomial $p$ divides $f$ and $g$, then $p$ also divides $h$

$h$ satisfying these conditions is represented by $h = \text{GCD}(f, g)$. $\text{GCD}(f, g)$ is unique up to multiplication by nonzero numbers. Given $f = qg + r$, by using the following relations $\text{GCD}(f, g) = \text{GCD}(f - qg, g)$ and $\text{GCD}(f, 0) = f$, $\text{GCD}(f, g)$ can be calculated by the following procedure (without loss of generality, we assume $\deg(f) \ge \deg(g)$). Fill (b) and (c) with appropriate expressions.

```text
Input: f, g
Output: h
h = f
s = g
while (s ≠ 0) {
    rem = remainder(h, s)
    h = ______ (b) ______
    s = ______ (c) ______
}
```

(5) Given arbitrary polynomials $f$ and $g$ ($\deg(f) \ge \deg(g)$), calculate an upper bound of the number of times that a function remainder is called inside the while-loop during the calculation of $\text{GCD}(f, g)$. Also provide a reason for the obtained result.

### 题目描述

设

$$
f=a_0+a_1x+\dots+a_mx^m,\qquad
g=b_0+b_1x+\dots+b_nx^n
$$

为关于 $x$ 的多项式，其中 $a_i,b_i$ 为实数，$a_m\ne0$、$b_n\ne0$。定义首项 $\operatorname{LT}(f)=a_mx^m$、$\operatorname{LT}(g)=b_nx^n$，次数 $\deg(f)=m$、$\deg(g)=n$。用非零多项式 $g$ 除 $f$ 时，

$$
f=qg+r,
$$

其中商 $q$、余式 $r$ 均为多项式，且 $r=0$ 或 $\deg(r)<\deg(g)$；记 $r=\operatorname{remainder}(f,g)$、$q=\operatorname{quotient}(f,g)$。

(1) 当 $f=x^2+7x+3$、$g=x+1$ 时，计算 $\operatorname{quotient}(f,g)$ 和 $\operatorname{remainder}(f,g)$。

(2) 在下列多项式除法伪代码中，用适当表达式填充 (a)。可以直接使用单项式（如 $7x^3$ 或 $-5x^{10}$）的四则运算以及多项式的加减运算。

```text
Input: f, g
Output: q, r
q = 0, r = f
while (r ≠ 0 and deg(g) ≤ deg(r)) {
    q = q + LT(r)/LT(g)
    r = _____ (a) _____
}
```

(3) 证明 (2) 的算法一定终止。

(4) 多项式 $f,g$ 的最大公因式是满足下列条件的多项式 $h$：

- $h$ 同时整除 $f$ 和 $g$；
- 若多项式 $p$ 同时整除 $f$ 和 $g$，则 $p$ 也整除 $h$。

记 $h=\operatorname{GCD}(f,g)$；它在相差非零常数倍的意义下唯一。利用

$$
\operatorname{GCD}(f,g)=\operatorname{GCD}(f-qg,g),\qquad
\operatorname{GCD}(f,0)=f
$$

可按下列过程计算最大公因式，并不失一般性地假设 $\deg(f)\ge\deg(g)$。填写 (b)、(c)。

```text
Input: f, g
Output: h
h = f
s = g
while (s ≠ 0) {
    rem = remainder(h, s)
    h = ______ (b) ______
    s = ______ (c) ______
}
```

(5) 对任意满足 $\deg(f)\ge\deg(g)$ 的多项式 $f,g$，给出计算 $\operatorname{GCD}(f,g)$ 时，`while` 循环内调用 `remainder` 次数的上界，并说明理由。

## **Kai**
### (1)

$f = x^2 + 7x + 3$ and $g = x + 1$.

Since $f = (x+6)g - 3$.

Therefore $\quad q = x + 6 \quad r = -3$.

### (2)

- **(a)**: `r - (LT(r) / LT(g)) * g`

### (3)
Let $r_k$ be the remainder at iteration $k$.
Since

$$
r_{k+1} = r_k - \frac{\text{LT}(r_k)}{\text{LT}(g_k)} g_k
$$

Let $\deg(r_k) = m, \deg(g_k) = n$, then

$$
\deg(r_{k+1}) = \deg\left(r_k - \frac{\text{LT}(r_k)}{\text{LT}(g_k)} g_k\right) = \deg\left( \sum_{i=0}^m r_i x^i - \frac{r_m x^m}{g_n x^n} \sum_{i=0}^n g_i x^i \right)
$$

i.e.,

$$
\begin{aligned}
\deg(r_{k+1}) &= \deg\left( \sum_{i=0}^{m-1} r_i x^i + r_m x^m - \frac{r_m x^m}{g_n x^n} \left( \sum_{i=0}^{n-1} g_i x^i + g_n x^n \right) \right) \\
&= \deg\left( \sum_{i=0}^{m-1} r_i x^i + r_m x^m - \frac{r_m}{g_n} x^{m-n} \sum_{i=0}^{n-1} g_i x^i - r_m x^{m-n+n} \right) \\
&= \deg\left( \sum_{i=0}^{m-1} r_i x^i - \frac{r_m}{g_n} x^{m-n} \sum_{i=0}^{n-1} g_i x^i \right)
\end{aligned}
$$

Since

$$
\deg\left( \sum_{i=0}^{m-1} r_i x^i \right) \le m - 1 < \deg(r_k)
$$

$$
\deg\left( \frac{r_m}{g_n} x^{m-n} \sum_{i=0}^{n-1} g_i x^i \right) = m - 1 < \deg(r_k)
$$

Therefore

$$
\deg(r_{k+1}) < \deg(r_k)
$$

Since if $\deg(r) < \deg(g)$ the loop stops and $\deg(g)$ will not change.
Therefore the algorithm always terminates.

### (4)

- **(b)**: `s`
- **(c)**: `rem`

### (5)
According to (3),

$$
\begin{aligned}
\deg(r_{k+1}) &= \deg\left( \sum_{i=0}^{m-1} r_i x^i - \frac{r_m}{g_n} x^{m-n} \sum_{i=0}^{n-1} g_i x^i \right) \\
&= \deg\left( \sum_{i=0}^{m-2} r_i x^i - \frac{r_m}{g_n} x^{m-n} \sum_{i=0}^{n-2} g_i x^i + \left(r_{m-1} - \frac{r_m}{g_n} g_{n-1}\right) x^{m-1} \right)
\end{aligned}
$$

In GCD, $\quad s_{next} = \text{remainder}(h, s)$.

According to the analysis of (3), we know $\deg(rem) < \deg(s)$ and $\deg(s_{k+1}) < \deg(s_k)$.

To find the worst case, we need let $\deg(s_{k+1}) = \deg(s_k) - 1$.

In this case, the degree of $s$ follows the sequence: $n, n-1, n-2, \dots, 1, 0$, where $n = \deg(g)$.

The total number of steps is the length of this sequence plus the final step: $\deg(g) + 1$.
