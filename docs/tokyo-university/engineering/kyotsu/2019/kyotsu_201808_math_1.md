---
sidebar_label: '数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Differential-Equations.Riccati-Equation
  - Mathematics.Calculus.Definite-Integral
---

# 東京大学 工学系研究科 2019年度 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問題

I. $x^2y''-xy'+y=x^3$ の一般解を求めよ。

II. $x^2y'-x^2y^2+xy+1=0$ の一般解を求めよ。ただし $y=1/x$ は特解である。

III. 非負整数 $n$ に対して $\displaystyle I_n=\int_0^{\pi/4}\tan^n x\,dx$ と定める。

1. $I_0,I_1,I_2$ を求めよ。
2. $n\ge2$ に対して $I_n$ を求めよ。

#### 题目描述

I. 求 $x^2y''-xy'+y=x^3$ 的通解。

II. 求 $x^2y'-x^2y^2+xy+1=0$ 的通解。已知 $y=1/x$ 为一个特解。

III. 定义 $\displaystyle I_n=\int_0^{\pi/4}\tan^n x\,dx$，$n$ 为非负整数。

1. 求 $I_0,I_1,I_2$。
2. 求 $n\ge2$ 时的 $I_n$。

## **Kai**

### I.

$t=\log|x|$ とおけば $(D_t-1)^2y=x^3$ となる。斉次解は $C_1x+C_2x\log|x|$、特解は $x^3/4$ なので、$x=0$ をまたがない区間において

$$
\boxed{y=C_1x+C_2x\log|x|+\frac{x^3}{4}}.
$$

### II.

$y=1/x+u$ とおくと $u'-u/x=u^2$ となる。$u\ne0$ の場合、さらに $v=1/u$ とおけば

$$
v'+\frac vx=-1,\qquad (xv)'=-x.
$$

したがって

$$
\boxed{y=\frac1x+\frac{2x}{C-x^2}},\qquad x\ne0,\ C-x^2\ne0.
$$

また、置換の際に分けた解として $\boxed{y=1/x}$ がある。

### III.

1. 直接積分して

$$
\boxed{I_0=\frac\pi4,\qquad I_1=\frac12\log2,\qquad I_2=1-\frac\pi4}.
$$

2. $\tan^2x=\sec^2x-1$ より

$$
I_n=\int_0^{\pi/4}\tan^{n-2}x\,\sec^2x\,dx-I_{n-2}
=\frac1{n-1}-I_{n-2}.
$$

よって $k\ge1$ に対して

$$
\boxed{\begin{aligned}
I_{2k}&=\sum_{j=1}^k\frac{(-1)^{k-j}}{2j-1}+(-1)^k\frac\pi4,\\
I_{2k+1}&=\sum_{j=1}^k\frac{(-1)^{k-j}}{2j}+\frac{(-1)^k}{2}\log2.
\end{aligned}}
$$

