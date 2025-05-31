---
sidebar_label: "2019年8月実施 専門科目II 問題5"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 コンピュータ科学専攻 2019年8月実施 専門科目II 問題5

## **Author**
[zephyr](https://inshi-notes.zephyr-zdz.space/)

## **Description**
Suppose that $f(x)$ is a real function defined on a closed interval from $a$ to $b$ $(a < b)$. Suppose that $n$ is an integer that is no less than 2, and define $h = (b - a)/n$. Then, for each integer $i = 0, 1, \ldots, n$, define $x_i = a + ih$ and $f_i = f(x_i)$, respectively. Namely, $x_0, \ldots, x_n$ are the points that divide the interval from $a$ to $b$ into $n$ equal parts, and $f_i$ is the value of the function $f(x)$ at $x = x_i$.

Next, define $J = \int_a^b f(x) \, \mathrm{d}x$, and define $J_n$ as the approximate value calculated by the composite trapezoid rule applied on $J$ using the points which divide the interval from $a$ to $b$ into $n$ equal parts.

Answer the following questions.

(1) Assume that $f(x)$ is a four times continuously differentiable function. Let $k$ be an integer such that $0 < k < n$ and define $f_k''$ as the second order differential of $f(x)$ at $x_k$. Express an approximate value of $f_k''$ whose error is $O(h^2)$, as a linear combination of $f_{k-1}, f_k$, and $f_{k+1}$.

(2) The approximation obtained by question (1) seems to become accurate when $h$ approaches zero. Answer, with a reason, whether this is correct or not in the calculation with the IEEE 754 double precision floating point operations.

(3) Express $J_n$ using $n, h$, and $f_i$ $(i = 0, \ldots, n)$.

(4) Assume that $f(x)$ can be expressed by a quadratic function in each interval formed by the division into $n$ equal parts. Then, define $J_{2n}$ similarly using the division into $2n$ equal parts composed of the division of each original part into two halves. Express $E_n = J_n - J$ using $J_{2n}$ and $J_n$.

---

假设 $f(x)$ 是一个定义在从 $a$ 到 $b$ $(a < b)$ 的闭区间上的实函数。假设 $n$ 是不小于 2 的整数，并定义 $h = (b - a)/n$。然后，对于每个整数 $i = 0, 1, \ldots, n$，分别定义 $x_i = a + ih$ 和 $f_i = f(x_i)$。即，$x_0, \ldots, x_n$ 是将从 $a$ 到 $b$ 的区间分成 $n$ 等分的点，$f_i$ 是函数 $f(x)$ 在 $x = x_i$ 处的值。

接下来，定义 $J = \int_a^b f(x) \, \mathrm{d}x$，并定义 $J_n$ 为使用复合梯形规则计算的近似值，该规则适用于使用将区间 $a$ 到 $b$ 分成 $n$ 等分的点上的 $J$。

回答以下问题。

(1) 假设 $f(x)$ 是四次连续可微函数。设 $k$ 是整数，使得 $0 < k < n$，并定义 $f_k''$ 为 $f(x)$ 在 $x_k$ 处的二阶导数。表示 $f_k''$ 的一个近似值，其误差为 $O(h^2)$，作为 $f_{k-1}, f_k$ 和 $f_{k+1}$ 的线性组合。

(2) 问题 (1) 中获得的近似值在 $h$ 趋近于零时似乎变得准确。回答，在使用 IEEE 754 双精度浮点运算进行计算时，这是否正确，并给出理由。

(3) 使用 $n, h$ 和 $f_i$ $(i = 0, \ldots, n)$ 表示 $J_n$。

(4) 假设 $f(x)$ 可以在每个由分成 $n$ 等分形成的区间中用二次函数表示。然后，类似地定义 $J_{2n}$，使用将每个原始部分分成两半的 $2n$ 等分的划分。使用 $J_{2n}$ 和 $J_n$ 表示 $E_n = J_n - J$。

## **Kai**
### (1)

To approximate the second derivative $f_k''$ at $x_k$ using the values $f_{k-1}$, $f_k$, and $f_{k+1}$, we can use the central difference formula:

$$
f_k'' \approx \frac{f_{k-1} - 2f_k + f_{k+1}}{h^2}
$$

The error in this approximation is $O(h^2)$. This formula is derived from the Taylor series expansion of $f(x)$ around $x_k$.

### (2)

The approximation for $f_k''$ becomes more accurate as $h$ approaches zero theoretically. However, in the context of IEEE 754 double precision floating point operations, as $h$ decreases, the difference between $f_{k+1}$ and $f_{k-1}$ also becomes very small. This can lead to a significant loss of precision due to rounding errors, which is known as **catastrophic cancellation**. Therefore, in practice, there is a limit to the accuracy of this approximation when $h$ becomes too small.

### (3)

The composite trapezoidal rule $J_n$ for approximating the integral $J$ is given by:

$$
J_n = \frac{h}{2} \left( f_0 + 2\sum_{i=1}^{n-1} f_i + f_n \right)
$$

where $h = \frac{b-a}{n}$ and $f_i = f(x_i)$.

### (4)

When $f(x)$ is approximated by a quadratic function on each subinterval, the error $E_n = J_n - J$ can be related to the integral approximations $J_n$ and $J_{2n}$ as follows:

$$
E_n = \frac{J_{2n} - J_n}{3}
$$

This formula arises from the fact that the error in the trapezoidal rule is proportional to $h^2$, and doubling the number of intervals reduces the error by a factor of 4. By subtracting the two approximations, we can eliminate the leading order error term, leaving a smaller error proportional to $h^4$.

## **Knowledge**

数值分析 数值积分 复合梯形法 数值微分 误差分析 浮点运算

### 难点思路

在第二问中，理解浮点数运算中的精度问题是关键。尤其是当差值变小时，浮点运算的误差可能会导致结果不准确。

### 解题技巧和信息

1. **数值微分**：当计算导数时，中央差分法通常比前向或后向差分法具有更高的精度，但需要注意数值稳定性。
2. **数值积分**：复合梯形法的误差分析依赖于对被积函数的光滑性假设，常见的误差公式与分割数 $n$ 的关系密切。
3. **误差消除**：使用不同分割方式计算积分时，考虑两次计算的结果，可以有效减少误差，这种方法类似于龙贝格积分法。

### 重点词汇

- **Trapezoidal rule**: 梯形法
- **Central difference**: 中央差分
- **IEEE 754 double precision**: IEEE 754 双精度浮点数
- **Catastrophic cancellation**: 灾难性消减

### 参考资料

1. Burden, R. L., & Faires, J. D. (2011). *Numerical Analysis* (9th ed.). Brooks Cole. Chapter 4: Numerical Differentiation and Integration.
2. Heath, M. T. (2002). *Scientific Computing: An Introductory Survey* (2nd ed.). McGraw-Hill. Chapter 8: Numerical Integration.
