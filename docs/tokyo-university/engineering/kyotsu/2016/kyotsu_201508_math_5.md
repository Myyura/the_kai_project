---
sidebar_label: '2015年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Sine-and-Cosine-Series
  - Mathematics.Fourier-Analysis.Infinite-Series-from-Fourier-Series
  - Mathematics.Differential-Equations.Dirichlet-Heat-Equation-by-Fourier-Sine-Series
---

# 東京大学 工学系研究科 2015年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. $[0,\pi]$ 上で連続かつ $f(0)=f(\pi)=0$ を満たす関数を奇関数として延長したとき、フーリエ正弦級数は次式で与えられる。

$$
f(x)=\sum_{n=1}^\infty b_n\sin nx,\qquad
b_n=\frac2\pi\int_0^\pi f(x)\sin nx\,\mathrm dx.
$$

1. $f(x)=x(\pi-x)$ のフーリエ正弦級数を求めよ。
2. その結果から $1-1/3^3+1/5^3-1/7^3+\cdots=\pi^3/32$ を導け。

II. 正方形 $0\le x,y\le\pi$ 上で連続であり、境界上で0となる関数の二重フーリエ正弦級数は次式で与えられる。

$$
f(x,y)=\sum_{m,n\ge1}B_{mn}\sin mx\sin ny,\qquad
B_{mn}=\frac4{\pi^2}\int_0^\pi\int_0^\pi f(x,y)\sin mx\sin ny\,\mathrm dx\,\mathrm dy.
$$

1. $f(x,y)=x(\pi-x)\sin y$ の二重フーリエ正弦級数を求めよ。
2. 変数分離法により、$t\ge0$ における次の初期境界値問題を解け。

$$
u_t=c^2(u_{xx}+u_{yy}),\qquad c>0,
$$

$$
u(0,y,t)=u(\pi,y,t)=u(x,0,t)=u(x,\pi,t)=0,\qquad
u(x,y,0)=x(\pi-x)\sin y.
$$

#### 题目描述

I. 对 $[0,\pi]$ 上满足 $f(0)=f(\pi)=0$ 的连续函数，奇延拓后的傅里叶正弦级数为

$$
f(x)=\sum_{n=1}^\infty b_n\sin nx,\qquad
b_n=\frac2\pi\int_0^\pi f(x)\sin nx\,\mathrm dx.
$$

1. 求 $f(x)=x(\pi-x)$ 的傅里叶正弦级数。
2. 由此证明 $1-1/3^3+1/5^3-1/7^3+\cdots=\pi^3/32$。

II. 对正方形 $0\le x,y\le\pi$ 上在边界为 $0$ 的函数，二重正弦级数为

$$
f(x,y)=\sum_{m,n\ge1}B_{mn}\sin mx\sin ny,\qquad
B_{mn}=\frac4{\pi^2}\int_0^\pi\int_0^\pi f(x,y)\sin mx\sin ny\,\mathrm dx\,\mathrm dy.
$$

1. 求 $f(x,y)=x(\pi-x)\sin y$ 的二重正弦级数。
2. 用分离变量法求 $t\ge0$ 时的初边值问题

$$
u_t=c^2(u_{xx}+u_{yy}),\qquad c>0,
$$

$$
u(0,y,t)=u(\pi,y,t)=u(x,0,t)=u(x,\pi,t)=0,\qquad
u(x,y,0)=x(\pi-x)\sin y.
$$

## **Kai**

### I.1

2回の部分積分により、

$$
b_n=\frac2\pi\int_0^\pi x(\pi-x)\sin nx\,\mathrm dx
=\frac{4(1-(-1)^n)}{\pi n^3}.
$$

したがって

$$
\boxed{x(\pi-x)=\frac8\pi\sum_{k=0}^\infty\frac{\sin((2k+1)x)}{(2k+1)^3}.}
$$

### I.2

$x=\pi/2$ を代入すると、

$$
\frac{\pi^2}4=\frac8\pi\sum_{k=0}^\infty\frac{(-1)^k}{(2k+1)^3},
$$

よって $\boxed{\sum_{k=0}^\infty(-1)^k/(2k+1)^3=\pi^3/32}$。

### II.1

正弦関数の直交性より $\int_0^\pi\sin y\sin ny\,\mathrm dy=(\pi/2)\delta_{n1}$ なので、

$$
B_{mn}=\frac{4(1-(-1)^m)}{\pi m^3}\delta_{n1}.
$$

求める展開は

$$
\boxed{f(x,y)=\frac8\pi\sum_{k=0}^\infty
\frac{\sin((2k+1)x)\sin y}{(2k+1)^3}.}
$$

### II.2

$u=X(x)Y(y)T(t)$ とおく。斉次境界条件より、

$$
X=\sin mx,\qquad Y=\sin ny,\qquad
T'= -c^2(m^2+n^2)T,
$$

ここで $m,n\ge1$。分離解を重ね合わせ、II.1 により初期条件を合わせると、

$$
\boxed{u(x,y,t)=\frac8\pi\sum_{k=0}^\infty
\frac{e^{-c^2((2k+1)^2+1)t}}{(2k+1)^3}
\sin((2k+1)x)\sin y.}
$$

