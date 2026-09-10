---
sidebar_label: '数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Linear-Ordinary-Differential-Equation-with-Exponential-Forcing
  - Mathematics.Differential-Equations.Cauchy-Euler-Equation
  - Mathematics.Differential-Equations.Separation-of-Variables-for-Partial-Differential-Equation
---

# 東京大学 工学系研究科 2018年度 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.
次の微分方程式の一般解を求めよ。

1. $y''+2y'-3y=e^x\cos x$。
2. $y''+x^{-1}y'+4x^{-2}y=(2\log x/x)^2$，$x>0$。

### II.
$x\ge0$、$0\le y\le1$ において、次の方程式と境界条件を考える。

$$
u_{xx}+u_{yy}=0,\quad \lim_{x\to\infty}u(x,y)=0,\quad
u_y(x,0)=0,\quad u(x,1)=0,\quad u_x(0,y)=1+\cos\pi y.
$$

1. 方程式と無限遠の条件を満たす変数分離解 $u=X(x)Y(y)$ を求めよ。
2. さらに $u_y(x,0)=0$、$u(x,1)=0$ を満たす解を求めよ。
3. 前問を用いて、すべての条件を満たす解を求めよ。

#### 题目描述

##### I.
求下列微分方程的通解：

1. $y''+2y'-3y=e^x\cos x$。
2. $y''+x^{-1}y'+4x^{-2}y=(2\log x/x)^2$，$x>0$。

##### II.
在 $x\ge0$、$0\le y\le1$ 上考虑

$$
u_{xx}+u_{yy}=0,\quad \lim_{x\to\infty}u(x,y)=0,\quad
u_y(x,0)=0,\quad u(x,1)=0,\quad u_x(0,y)=1+\cos\pi y.
$$

1. 求满足方程及无穷远条件的分离变量解 $u=X(x)Y(y)$。
2. 再使其满足 $u_y(x,0)=0$、$u(x,1)=0$。
3. 利用前问求满足全部条件的解。

## **Kai**

### I.

1. 斉次方程式の特性根は $1,-3$ である。特解を $e^x(A\cos x+B\sin x)$ とおくと、$A=-1/17$、$B=4/17$ を得る。したがって

$$
\boxed{y=C_1e^x+C_2e^{-3x}+\frac{e^x}{17}(4\sin x-\cos x)}.
$$

2. $t=\log x$ とおくと、方程式は $y_{tt}+4y=4t^2$ となる。よって

$$
\boxed{y=C_1\cos(2\log x)+C_2\sin(2\log x)+(\log x)^2-\frac12}.
$$

### II.

1. 変数分離により $X''/X=-Y''/Y$ を得る。非零の減衰解では分離定数を $k^2>0$ として

$$
u=e^{-kx}(A\cos ky+B\sin ky),\qquad k>0.
$$

2. 二つの境界条件から $B=0$、$\cos k=0$ を得る。$k_n=(n+\tfrac12)\pi$ とおけば、基本解は

$$
e^{-k_nx}\cos(k_ny),\qquad n=0,1,\ldots.
$$

3. $1+\cos\pi y=\sum_{n\ge0}b_n\cos(k_ny)$ と展開する。直交性から

$$
b_n=2\int_0^1(1+\cos\pi y)\cos(k_ny)\,dy
=-\frac{2\pi^2(-1)^n}{k_n(k_n^2-\pi^2)}.
$$

したがって、求める解は

$$
\boxed{u(x,y)=\sum_{n=0}^{\infty}
\frac{2\pi^2(-1)^n}{k_n^2(k_n^2-\pi^2)}e^{-k_nx}\cos(k_ny)}.
$$

