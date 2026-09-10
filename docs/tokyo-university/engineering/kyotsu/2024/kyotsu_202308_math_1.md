---
sidebar_label: '2023年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Hyperbolic-Functions-from-Power-Series
---

# 東京大学 工学系研究科 2023年8月実施 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 微分方程式 $y'=y(1-y)$ の一般解 $y(x)$ を求めよ。ただし $0<y<1$ とする。

II. 定積分

$$
I=\int_{-1}^{1}\frac{\arccos(x/2)}{\cos^2(\pi x/3)}\,dx
$$

を求めよ。ただし $0\le\arccos(x/2)\le\pi$ とする。

III. 正の実変数 $x$ に対する実数値関数を

$$
f(x)=\sum_{m=0}^{\infty}\frac{x^{2m}}{(2m)!},\qquad g(x)=f'(x)
$$

とする。非負整数 $n$ に対して

$$
I_n(x)=\int_0^x\left(\frac{g(X)}{f(X)}\right)^n\,dX
$$

と定義する。$e^x=\sum_{m=0}^{\infty}x^m/m!$ を用いてよい。

1. $f(x)^2-g(x)^2$ を求めよ。
2. $I_{n+2}(x)$ を $I_n(x)$ を用いて表せ。

#### 题目描述

I. 求微分方程 $y'=y(1-y)$ 在 $0<y<1$ 条件下的一般解。

II. 计算

$$
I=\int_{-1}^{1}\frac{\arccos(x/2)}{\cos^2(\pi x/3)}\,dx,
$$

其中 $0\le\arccos(x/2)\le\pi$。

III. 对 $x>0$ 定义

$$
f(x)=\sum_{m=0}^{\infty}\frac{x^{2m}}{(2m)!},\qquad g(x)=f'(x),\qquad
I_n(x)=\int_0^x\left(\frac{g(X)}{f(X)}\right)^n\,dX\quad(n\ge0).
$$

可使用 $e^x=\sum_{m=0}^{\infty}x^m/m!$。

1. 求 $f(x)^2-g(x)^2$。
2. 用 $I_n(x)$ 表示 $I_{n+2}(x)$。

## **Kai**

### I

変数分離して積分すると、

$$
\log\frac{y}{1-y}=x+c.
$$

$0<y<1$ より、

$$
\boxed{y(x)=\frac1{1+Ce^{-x}},\qquad C>0}.
$$

### II

$\arccos(-x/2)=\pi-\arccos(x/2)$ と分母の偶性から、

$$
I=\pi\int_0^1\sec^2\frac{\pi x}{3}\,dx
=3\left[\tan\frac{\pi x}{3}\right]_0^1
=\boxed{3\sqrt3}.
$$

### III

指数関数の偶数次・奇数次の項をそれぞれ集めると、

$$
f(x)=\frac{e^x+e^{-x}}2=\cosh x,\qquad g(x)=\frac{e^x-e^{-x}}2=\sinh x.
$$

したがって

$$
\boxed{f^2-g^2=1}.
$$

$h=g/f$ とおけば、$h(0)=0$、$h'=1-h^2$ である。したがって

$$
I_n-I_{n+2}=\int_0^xh(X)^nh'(X)\,dX=\frac{h(x)^{n+1}}{n+1}.
$$

よって

$$
\boxed{I_{n+2}(x)=I_n(x)-\frac1{n+1}\left(\frac{g(x)}{f(x)}\right)^{n+1}}.
$$

