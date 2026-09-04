---
sidebar_label: "2019年8月実施 専門科目II 問題5"
tags:
  - Tokyo-University
  - Mathematics.Numerical-Analysis.Central-Finite-Difference-for-Second-Derivative
  - Mathematics.Numerical-Analysis.Roundoff-vs-Truncation-Error
  - Mathematics.Numerical-Analysis.Composite-Trapezoidal-Rule
  - Mathematics.Numerical-Analysis.Richardson-Extrapolation-for-Trapezoidal-Error
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題5

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
Suppose that $f(x)$ is a real function defined on a closed interval from $a$ to $b$ $(a < b)$. Suppose that $n$ is an integer that is no less than 2, and define $h = (b - a)/n$. Then, for each integer $i = 0, 1, \ldots, n$, define $x_i = a + ih$ and $f_i = f(x_i)$, respectively. Namely, $x_0, \ldots, x_n$ are the points that divide the interval from $a$ to $b$ into $n$ equal parts, and $f_i$ is the value of the function $f(x)$ at $x = x_i$.

Next, define $J = \int_a^b f(x) \, \mathrm{d}x$, and define $J_n$ as the approximate value calculated by the composite trapezoid rule applied on $J$ using the points which divide the interval from $a$ to $b$ into $n$ equal parts.

Answer the following questions.

(1) Assume that $f(x)$ is a four times continuously differentiable function. Let $k$ be an integer such that $0 < k < n$ and define $f_k''$ as the second order differential of $f(x)$ at $x_k$. Express an approximate value of $f_k''$ whose error is $O(h^2)$, as a linear combination of $f_{k-1}, f_k$, and $f_{k+1}$.

(2) The approximation obtained by question (1) seems to become accurate when $h$ approaches zero. Answer, with a reason, whether this is correct or not in the calculation with the IEEE 754 double precision floating point operations.

(3) Express $J_n$ using $n, h$, and $f_i$ $(i = 0, \ldots, n)$.

(4) Assume that $f(x)$ can be expressed by a quadratic function in each interval formed by the division into $n$ equal parts. Then, define $J_{2n}$ similarly using the division into $2n$ equal parts composed of the division of each original part into two halves. Express $E_n = J_n - J$ using $J_{2n}$ and $J_n$.


### 题目描述

设实函数 $f(x)$ 定义在闭区间 $[a,b]$ 上，$a<b$。取整数 $n\ge2$，
令 $h=(b-a)/n$；对 $i=0,1,\ldots,n$，定义
$x_i=a+ih$、$f_i=f(x_i)$。于是 $x_0,\ldots,x_n$ 将区间等分为
$n$ 份。再令

$$
J=\int_a^b f(x)\,\mathrm dx,
$$

并以 $J_n$ 表示在这些等分点上使用复合梯形公式得到的近似值。回答下列问题。

（1）假设 $f$ 四阶连续可微。对整数 $0<k<n$，用
$f_{k-1},f_k,f_{k+1}$ 的线性组合给出 $f''(x_k)$ 的一个误差为
$O(h^2)$ 的近似式。

（2）第（1）问的近似看似会在 $h\to0$ 时不断变精确。说明在 IEEE 754 双精度浮点运算中这一说法是否正确，并给出理由。

（3）用 $n,h$ 以及 $f_i\ (i=0,\ldots,n)$ 表示复合梯形近似 $J_n$。

（4）假设 $f$ 在每个原等分小区间上均可由二次函数表示。把每一小区间再二等分，类似定义使用 $2n$ 等分的 $J_{2n}$。用 $J_{2n}$ 和 $J_n$ 表示误差
$E_n=J_n-J$。

## **Kai**

### (1)

在 $x_k$ 两侧作 Taylor 展开并相加，奇数阶项抵消，得

$$
f_{k-1}-2f_k+f_{k+1}=h^2f''(x_k)+O(h^4).
$$

所以所求近似为

$$
\boxed{f''(x_k)=\frac{f_{k-1}-2f_k+f_{k+1}}{h^2}+O(h^2).}
$$

### (2)

不一定。三项相消后的分子只有 $O(h^2)$，而函数值的浮点舍入误差经除以 $h^2$ 被放大。典型总误差为

$$
O(h^2)+O(uF/h^2),
$$

其中 $u$ 是单位舍入误差，$F$ 表示函数值的尺度。$h$ 过小时舍入误差可能占主导，甚至 $x_k\pm h$ 被舍入成 $x_k$，因此不能无限减小 $h$ 来提高精度。

### (3)

$$
\boxed{J_n=\frac h2\left(f_0+2\sum_{i=1}^{n-1}f_i+f_n\right).}
$$

### (4)

对每段二次函数，梯形公式的单段误差为 $f''h^3/12$；二等分后两段误差之和为原来的 $1/4$。逐段相加得 $E_{2n}=E_n/4$，因此

$$
J_n-J_{2n}=E_n-E_{2n}=\frac34E_n,
\qquad
\boxed{E_n=\frac43(J_n-J_{2n}).}
$$

在题设“每段为二次函数”的条件下，这是精确等式。
