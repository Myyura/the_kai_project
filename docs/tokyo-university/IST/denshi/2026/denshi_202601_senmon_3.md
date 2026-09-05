---
sidebar_label: 2026年1月実施 専門 第3問
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Binary-Search
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2026年1月実施 専門 第3問

## **Author**
[瑞穂](https://github.com/LiRunyi2001)

## **Description**

*Recalled statement.*
(1) Write nonrecursive binary-search pseudocode.

(2) Use it to approximate $\sqrt2$ with error $\delta<0.01$.

(3) Write recursive binary-search pseudocode.

(4) For $r_{n+1}=1+1/(1+r_n)$, prove

$$
r_{2n}\le\sqrt2\le r_{2n+1},\qquad
\frac{r_{n+2}-r_{n+1}}{r_{n+1}-r_n}=-\frac1{2r_n+3},
$$

and approximate $\sqrt2$ with $\delta<0.001$.

(5) Apply Newton's method to $f(x)=x^2-2$, starting at $x=2$, to obtain an approximation with $\delta<0.0001$.

### 题目描述

用非递归、递归二分法计算 $\sqrt2$，并研究递推 $r_{n+1}=1+1/(1+r_n)$ 的上下界及相邻差比；最后从 $x=2$ 开始使用牛顿法。二分法、递推和牛顿法的误差要求依次为 $0.01,0.001,0.0001$。回忆题缺少递推初值及误差定义。

## **Kai**

Here the numerical error means absolute error. For bisection choose the valid bracket $[1,2]$. For (4), the stated ordering holds if $0\le r_0\le\sqrt2$; the numerical example below chooses $r_0=1$. These are explicit conditions of this solution.

### (1)

For this root-finding problem, binary search is bisection on the monotone function $f(x)=x^2-2$ for $x>0$.

```text
Bisection(f, left, right, epsilon):
    # f(left) <= 0 <= f(right), epsilon > 0
    while (right-left)/2 >= epsilon:
        middle = (left+right)/2
        if f(middle) == 0: return middle
        if f(middle) < 0: left = middle
        else: right = middle
    return (left+right)/2
```

The root stays inside the bracket, so the returned midpoint has absolute error at most half its width, strictly less than `epsilon`.

### (2)

Starting with $[1,2]$, the brackets after each update are:

| Update | Left | Right |
|---|---|---|
| 1 | 1 | 1.5 |
| 2 | 1.25 | 1.5 |
| 3 | 1.375 | 1.5 |
| 4 | 1.375 | 1.4375 |
| 5 | 1.40625 | 1.4375 |
| 6 | 1.40625 | 1.421875 |

The midpoint is $1.4140625$, with certified error at most $0.0078125<0.01$.

### (3)

```text
BisectionRecursive(f, left, right, epsilon):
    middle = (left+right)/2
    if (right-left)/2 < epsilon or f(middle) == 0:
        return middle
    if f(middle) < 0:
        return BisectionRecursive(f, middle, right, epsilon)
    return BisectionRecursive(f, left, middle, epsilon)
```

Both versions use $O(\log((\text{right}-\text{left})/\epsilon))$ iterations. The recursive version additionally uses that many stack frames.

### (4)

Let $F(x)=1+1/(1+x)$. On $x\ge0$, $F$ is decreasing and $F(\sqrt2)=\sqrt2$. Thus a value below $\sqrt2$ is mapped above it, and conversely. Induction from $0\le r_0\le\sqrt2$ proves

$$
r_{2n}\le\sqrt2\le r_{2n+1}.
$$

For any $u,v\ne-1$,

$$
F(u)-F(v)=-\frac{u-v}{(1+u)(1+v)}.
$$

With $u=r_{n+1}$ and $v=r_n$, and using
$(1+r_n)(1+r_{n+1})=2r_n+3$, this yields

$$
r_{n+2}-r_{n+1}=-\frac{r_{n+1}-r_n}{2r_n+3}.
$$

The quotient in the question follows when $r_{n+1}\ne r_n$; at $r_0=\sqrt2$ the sequence is constant and the quotient is undefined. For $r_0\ge0$, the consecutive differences contract by a factor at most $1/3$, establishing convergence to the positive fixed point $\sqrt2$.

For $r_0=1$,

$$
r_1=\frac32,\quad r_2=\frac75,\quad r_3=\frac{17}{12},
\quad r_4=\frac{41}{29},\quad r_5=\frac{99}{70}.
$$

Since $r_4\le\sqrt2\le r_5$ and $r_5-r_4=1/2030<0.001$, one valid answer is

$$
\boxed{\sqrt2\simeq\frac{41}{29}\simeq1.4137931}.
$$

The continued fraction associated with this recurrence is
$\sqrt2=1+1/(2+1/(2+\cdots))$. A continued fraction with every denominator equal to $1$ instead has value $(1+\sqrt5)/2$.

### (5)

Newton's iteration is

$$
x_{k+1}=x_k-\frac{x_k^2-2}{2x_k}
=\frac12\left(x_k+\frac2{x_k}\right).
$$

With $x_0=2$,

$$
x_1=\frac32,\qquad x_2=\frac{17}{12},\qquad
x_3=\frac{577}{408}\simeq1.414215686.
$$

Every iterate is at least $\sqrt2$, because

$$
x_{k+1}-\sqrt2=\frac{(x_k-\sqrt2)^2}{2x_k}\ge0.
$$

In particular, $x_3^2-2=1/166464$ and

$$
0\le x_3-\sqrt2=\frac{x_3^2-2}{x_3+\sqrt2}
<\frac1{332928}<0.0001.
$$

Thus $577/408$ meets the required accuracy.
