---
sidebar_label: '数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Reduction-of-Order
  - Mathematics.Differential-Equations.Bernoulli-Equation
  - Mathematics.Calculus.Gaussian-Integral
---

# 東京大学 工学系研究科 2020年度 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)、後生楽 広小路, 祭音Myyura


## **Description**

### I.
$-\pi/2<x<\pi/2$ において、次の微分方程式を考える。

$$
\cos x\,y''-\sin x\,y'-\frac{y}{\cos x}=0.
$$

1. 特解が $y=(\cos x)^m$ の形をもつとき、定数 $m$ を求めよ。
2. 前問の結果を用いて一般解を求めよ。

### II.
次の積分を求めよ。

$$
I=\int_1^\infty x^5e^{-x^4+2x^2-1}\,dx.
$$

$\displaystyle\int_0^\infty e^{-ax^2}dx=\frac12\sqrt{\pi/a}$（$a>0$）を用いてよい。

### III.
$n$ は任意の実数とし、$x>0,y>0$ とする。次の微分方程式を考える。

$$
(x^3y^n+x)y'+2y=0
$$

一般解を $f(x,y)=C$ の形で表せ。

#### 题目描述

##### I.
在 $-\pi/2<x<\pi/2$ 上考虑

$$
\cos x\,y''-\sin x\,y'-\frac{y}{\cos x}=0.
$$

1. 已知特解形如 $y=(\cos x)^m$，求常数 $m$。
2. 利用前问的结果求通解。

##### II.
求

$$
I=\int_1^\infty x^5e^{-x^4+2x^2-1}\,dx.
$$

可使用 $\displaystyle\int_0^\infty e^{-ax^2}dx=\frac12\sqrt{\pi/a}$（$a>0$）。

##### III.
设 $n$ 为任意实数，$x>0,y>0$。将

$$
(x^3y^n+x)y'+2y=0
$$

的通解写成 $f(x,y)=C$ 的形式。

## **Kai**

### I.

1. $y=(\cos x)^m$ を代入すると、方程式の左辺は

$$
(m+1)(\cos x)^{m-1}\bigl[(m-1)-m\cos^2x\bigr].
$$

すべての $x$ で零となる条件は $\boxed{m=-1}$ である。

2. 特解を用いて $y=u/\cos x$ とおき、代入すると

$$
u''\cos x+u'\sin x=0,\qquad u'=C_1\cos x.
$$

積分して

$$
\boxed{y=C_1\tan x+C_2\sec x}.
$$

二つの基本解の Wronskian は $-\sec x\ne0$ なので、これが一般解である。

### II.

$t=x^2-1$ とおけば

$$
\begin{aligned}
I&=\frac12\int_0^\infty(t+1)^2e^{-t^2}\,dt\\
&=\frac12\left(\frac{\sqrt\pi}{4}+1+\frac{\sqrt\pi}{2}\right)
=\boxed{\frac{4+3\sqrt\pi}{8}}.
\end{aligned}
$$

ここで $\int_0^\infty t^2e^{-t^2}dt=\sqrt\pi/4$ は部分積分から得られる。

### III.

$x$ を $y$ の関数とみなし、$v=x^{-2}$ とおくと

$$
\frac{dv}{dy}-\frac vy=y^{n-1},\qquad
\frac{d}{dy}\left(\frac vy\right)=y^{n-2}.
$$

したがって

$$
\boxed{\begin{cases}
\dfrac1{x^2y}-\dfrac{y^{n-1}}{n-1}=C,&n\ne1,\\[6pt]
\dfrac1{x^2y}-\log y=C,&n=1.
\end{cases}}
$$

