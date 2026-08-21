---
sidebar_label: "2016年8月実施 微积分"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2016年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

周期 $2\pi$ の偶関数 $f(x)$ のフーリエ級数は以下のように定義される。

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos(nx)
$$

$$
a_n = \frac{2}{\pi} \int_0^{\pi} f(x) \cos(nx) dx
$$

1) 関数 $f(x) = x^2 (-\pi \leq x \leq \pi)$ のフーリエ級数を求めよ。

2) 1)で求めたフーリエ級数に $x=\pi$ を代入することにより、以下の無限級数の値を求めよ。

$$
I = \sum_{n=1}^{\infty} \frac{1}{n^2}
$$

### 题目描述

周期为 $2\pi$ 的偶函数 $f(x)$ 的 Fourier 级数定义为

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos(nx),
$$

其中

$$
a_n=\frac2\pi\int_0^\pi f(x)\cos(nx)\,dx.
$$

1. 求函数

   $$
   f(x)=x^2,\qquad-\pi\le x\le\pi,
   $$

   的 Fourier 级数；
2. 在第 1 问所得 Fourier 级数中代入 $x=\pi$，求无穷级数

   $$
   I=\sum_{n=1}^{\infty}\frac1{n^2}
   $$

   的值。

## **Kai**

1) まず、 $a_0$ と $a_n$ を求める。

$$
a_0 = \frac{2}{\pi}\int_{0}^{\pi} x^2 dx
= \frac{2}{\pi} \left[ \frac{x^3}{3} \right]_0^{\pi}
= \frac{2\pi^2}{3}
$$

$$
a_n = \frac{2}{\pi}\int_0^{\pi} x^2 \cos(nx) dx
$$

部分積分を二回行う。

$$
\int x^2 \cos(nx) dx = x^2 \frac{\sin(nx)}{n} - \int 2x \frac{\sin(nx)}{n} dx = x^2 \frac{\sin(nx)}{n} + \frac{2x}{n^2}\cos(nx) - \int \frac{2}{n^2}\cos(nx) dx = x^2 \frac{\sin(nx)}{n} + \frac{2x}{n^2}\cos(nx) - \frac{2}{n^3}\sin(nx)
$$

$$
a_n = \frac{2}{\pi} \left[ x^2 \frac{\sin(nx)}{n} + \frac{2x}{n^2}\cos(nx) - \frac{2}{n^3}\sin(nx) \right]_0^{\pi} = \frac{2}{\pi} \left[ \frac{2\pi}{n^2} \cos(n\pi) \right] = \frac{4}{n^2} (-1)^n
$$

よって、フーリエ級数は

$$
f(x) = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4}{n^2}(-1)^n \cos(nx)
$$

2) $x = \pi$ を代入すると

$$
f(\pi) = \pi^2 = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4}{n^2}(-1)^n \cos(n\pi) = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4}{n^2}(-1)^n (-1)^n = \frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{1}{n^2}
$$

$$
\pi^2 - \frac{\pi^2}{3} = \frac{2\pi^2}{3} = 4\sum_{n=1}^{\infty} \frac{1}{n^2}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

よって、 $I = \frac{\pi^2}{6}$
