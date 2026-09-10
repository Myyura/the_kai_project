---
sidebar_label: '2015年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Higher-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Method-of-Undetermined-Coefficients
  - Mathematics.Calculus.Integration-by-Parts
---

# 東京大学 工学系研究科 2015年8月実施 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 次の微分方程式の一般解を求めよ。

$$
y^{(4)}-2y^{(3)}+2y'-y=9e^{-2x}.
$$

II. 非負整数 $m,n$ に対し、次の積分を求めよ。

$$
\int_0^1x^m(\log x)^n\,\mathrm dx.
$$

III. 非負整数 $m$ に対し、

$$
I(m)=\int_0^1x^m\arccos x\,\mathrm dx,
$$

と定義する。逆三角関数は主値を取る。$I(0)$、$I(1)$ を求めよ。また、$m\ge2$ のとき $I(m)$ を $m$ と $I(m-2)$ で表し、一般式を求めよ。

#### 题目描述

I. 求微分方程的一般解：

$$
y^{(4)}-2y^{(3)}+2y'-y=9e^{-2x}.
$$

II. 对非负整数 $m,n$，求

$$
\int_0^1x^m(\log x)^n\,\mathrm dx.
$$

III. 对非负整数 $m$，定义

$$
I(m)=\int_0^1x^m\arccos x\,\mathrm dx,
$$

其中反三角函数取主值。求 $I(0)$、$I(1)$；当 $m\ge2$ 时用 $m$ 和 $I(m-2)$ 表示 $I(m)$，并求一般式。

## **Kai**

### I

特性多項式は

$$
r^4-2r^3+2r-1=(r-1)^3(r+1).
$$

と分解される。$P(-2)=27$ より、特解は $y_p=e^{-2x}/3$ と取れる。したがって

$$
\boxed{y=C_1e^{-x}+(C_2+C_3x+C_4x^2)e^x+\frac13e^{-2x}.}
$$

### II

求める積分を $J_{m,n}$ とする。$n\ge1$ のとき部分積分により、

$$
J_{m,n}=-\frac n{m+1}J_{m,n-1},\qquad J_{m,0}=\frac1{m+1},
$$

ここで $x^{m+1}(\log x)^n\to0$（$x\downarrow0$）を用いた。したがって

$$
\boxed{J_{m,n}=\frac{(-1)^nn!}{(m+1)^{n+1}}.}
$$

### III

部分積分した後に $x=\cos\theta$ とおくと、

$$
I(m)=\frac1{m+1}\int_0^1\frac{x^{m+1}}{\sqrt{1-x^2}}\,\mathrm dx
=\frac1{m+1}\int_0^{\pi/2}\cos^{m+1}\theta\,\mathrm d\theta.
$$

したがって

$$
\boxed{I(0)=1,\qquad I(1)=\frac\pi8.}
$$

$J_k=\int_0^{\pi/2}\cos^k\theta\,\mathrm d\theta$ とおく。部分積分より $J_k=(k-1)J_{k-2}/k$ なので、

$$
\boxed{I(m)=\frac{m(m-1)}{(m+1)^2}I(m-2),\qquad m\ge2.}
$$

漸化式を繰り返し適用すると、

$$
\boxed{
I(m)=\frac{m!}{((m+1)!!)^2}
\begin{cases}1,&m\text{ が偶数},\\ \pi/2,&m\text{ が奇数}.\end{cases}}
$$

ここで $k!!=k(k-2)(k-4)\cdots$ である。
