---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$f(x)$ は区間 $[a, b]$ (ただし、 $a<b$ ) で連続で、 $f(x) \geq 0$ とする。 $n$ は $1$ 以上の自然数、 $i = 1, \dots, n$ として、 $\Delta x = \frac{b-a}{n}$ , $x_i = a + i\Delta x$ とすると、定積分

$$
\int_a^b f(x)dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i) \Delta x
$$

は、 $xy$ 平面上の $y = f(x)$ , $x = a$ , $x = b$ , $y = 0$ のグラフで囲まれる領域の面積である。このことを用いて、次の極限値を計算せよ。

$$
S = \lim_{n \to \infty} \left\{ \frac{1}{n+1} + \frac{1}{n+2} + \dots + \frac{1}{n+n} \right\}
$$

### 题目描述

设 $f(x)$ 在区间 $[a,b]$ 上连续且 $f(x)\ge0$，其中 $a<b$。对自然数 $n\ge1$ 及 $i=1,\ldots,n$，令

$$
\Delta x=\frac{b-a}{n},
\qquad
x_i=a+i\Delta x.
$$

定积分

$$
\int_a^b f(x)\,dx
=\lim_{n\to\infty}
\sum_{i=1}^n f(x_i)\Delta x
$$

等于 $xy$ 平面上由 $y=f(x)$、$x=a$、$x=b$ 与 $y=0$ 围成区域的面积。利用这一事实计算

$$
S=\lim_{n\to\infty}
\left(
\frac1{n+1}+\frac1{n+2}+\cdots+\frac1{n+n}
\right).
$$

## **Kai**

We have:

$$
S = \lim_{n \to \infty} \sum_{i=1}^{n} \frac{1}{n+i} = \lim_{n \to \infty} \sum_{i=1}^{n} \frac{1}{n(1+\frac{i}{n})} = \lim_{n \to \infty} \frac{1}{n} \sum_{i=1}^{n} \frac{1}{1+\frac{i}{n}}
$$

This is the Riemann sum for the integral $\int_0^1 \frac{1}{1+x} dx$ .
Therefore,

$$
S = \int_0^1 \frac{1}{1+x} dx = \left[ \ln(1+x) \right]_0^1 = \ln(1+1) - \ln(1+0) = \ln 2 - \ln 1 = \ln 2 - 0 = \ln 2
$$
