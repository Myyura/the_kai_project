---
sidebar_label: '数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Differential-Equations.Boundary-Value-Problem
  - Mathematics.Complex-Analysis.Residue-Theorem
---

# 東京大学 工学系研究科 2020年度 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$t\ge0$ で定義された関数の Laplace 変換を次のように定義する。
$\displaystyle F(s)=\mathcal L[f](s)=\int_0^\infty f(t)e^{-st}\,dt$。

### I.
$\displaystyle g(t)=\int_0^\infty\frac{\sin^2(tx)}{x^2}\,dx$ とする。

1. $G(s)=\mathcal L[g](s)$（$\operatorname{Re}s>0$）を求めよ。
2. 前問を用いて $\displaystyle\int_{-\infty}^\infty\frac{\sin^2x}{x^2}\,dx$ を求めよ。

### II.
$0<x<1,t>0$ において、関数 $u$ が次を満たすとする。

$$
u_t=u_{xx},\quad u_x(0,t)=0,\quad u(1,t)=1,\quad
u(x,0)=\frac{\cosh x}{\cosh1}.
$$

1. $U(x,s)=\mathcal L[u(x,\cdot)](s)$（$\operatorname{Re}s>0$）とおく。$x$ に関する微分方程式と境界条件を導け。$u$ は有界としてよく、$\mathcal L[u_x]=U_x$、$\mathcal L[u_{xx}]=U_{xx}$ を用いてよい。
2. 整関数 $Q(s)$ を用いて、次の関数を定める。

$$
U_c(x,s)=\frac{\cosh x}{(s-1)\cosh1}-\frac{\cosh(x\sqrt s)}{Q(s)}.
$$

$U=U_c$ が前問の微分方程式と境界条件を満たすとき、$Q(s)$ を求めよ。
3. $Q(s)=0$ のすべての根を絶対値の小さい順に $a_r$（$r=1,2,\ldots$）とする。次の極限は $t\ge0$、$0\le x\le1$、$r\ge1$ で有限であり、次の級数が解を与えるものとする。

$$
R_r(x,t)=\lim_{s\to a_r}(s-a_r)U_c(x,s)e^{st},\qquad
u(x,t)=\sum_{r=1}^\infty R_r(x,t).
$$

$R_1,R_2$ および $r\ge3$ に対する $R_r$ を求めよ。

#### 题目描述

对 $t\ge0$ 的函数，定义 Laplace 变换
$\displaystyle F(s)=\mathcal L[f](s)=\int_0^\infty f(t)e^{-st}\,dt$。

##### I.
设 $\displaystyle g(t)=\int_0^\infty\frac{\sin^2(tx)}{x^2}\,dx$。

1. 求 $G(s)=\mathcal L[g](s)$（$\operatorname{Re}s>0$）。
2. 利用前问求 $\displaystyle\int_{-\infty}^\infty\frac{\sin^2x}{x^2}\,dx$。

##### II.
在 $0<x<1,t>0$ 上，函数 $u$ 满足

$$
u_t=u_{xx},\quad u_x(0,t)=0,\quad u(1,t)=1,\quad
u(x,0)=\frac{\cosh x}{\cosh1}.
$$

1. 令 $U(x,s)=\mathcal L[u(x,\cdot)](s)$（$\operatorname{Re}s>0$）。求关于 $x$ 的微分方程及边界条件。可假定 $u$ 有界，并使用 $\mathcal L[u_x]=U_x$、$\mathcal L[u_{xx}]=U_{xx}$。
2. 设 $Q(s)$ 为整函数，定义

$$
U_c(x,s)=\frac{\cosh x}{(s-1)\cosh1}-\frac{\cosh(x\sqrt s)}{Q(s)}.
$$

当 $U=U_c$ 满足前问方程及边界条件时，求 $Q(s)$。
3. 将 $Q(s)=0$ 的全部根按绝对值递增排列为 $a_r$（$r=1,2,\ldots$）。已知下列极限在 $t\ge0$、$0\le x\le1$、$r\ge1$ 时有限，且以下级数给出方程的解：

$$
R_r(x,t)=\lim_{s\to a_r}(s-a_r)U_c(x,s)e^{st},\qquad
u(x,t)=\sum_{r=1}^\infty R_r(x,t).
$$

求 $R_1,R_2$ 及 $r\ge3$ 时的 $R_r$。

## **Kai**

### I.

1. まず実数 $s>0$ とする。積分の順序を交換し、$\sin^2(tx)=(1-\cos2tx)/2$ を用いると

$$
\begin{aligned}
G(s)&=\int_0^\infty\frac1{2x^2}\left(\frac1s-\frac{s}{s^2+4x^2}\right)dx\\
&=\frac2s\int_0^\infty\frac{dx}{s^2+4x^2}
=\boxed{\frac\pi{2s^2}}.
\end{aligned}
$$

解析接続により、この式は $\operatorname{Re}s>0$ で成り立つ。

2. 逆変換により $g(t)=\pi t/2$ を得る。偶関数であることから

$$
\boxed{\int_{-\infty}^\infty\frac{\sin^2x}{x^2}\,dx=2g(1)=\pi}.
$$

### II.

1. $\mathcal L[u_t]=sU-u(x,0)$ より

$$
\boxed{U_{xx}-sU=-\frac{\cosh x}{\cosh1},\qquad
U_x(0,s)=0,\quad U(1,s)=\frac1s}.
$$

2. 与えられた $U_c$ は微分方程式と左端の条件を満たす。右端の条件は

$$
\frac1{s-1}-\frac{\cosh\sqrt s}{Q(s)}=\frac1s,
$$

したがって

$$
\boxed{Q(s)=s(s-1)\cosh\sqrt s}.
$$

$\cosh\sqrt s=\sum_{j\ge0}s^j/(2j)!$ なので、$Q$ は整関数である。

3. 根は

$$
a_1=0,\qquad a_2=1,\qquad a_r=-k_r^2,\quad
k_r=\left(r-\frac52\right)\pi\quad(r\ge3).
$$

$s=0$ で極限をとると $\boxed{R_1=1}$ を得る。$s=1$ では二つの極の寄与が打ち消し合うので $\boxed{R_2=0}$ である。

$r\ge3$ に対して

$$
\left.\frac d{ds}\cosh\sqrt s\right|_{s=-k_r^2}
=\frac{\sin k_r}{2k_r},\qquad \sin k_r=(-1)^{r-3}.
$$

したがって

$$
\boxed{R_r(x,t)=\frac{2(-1)^{r-2}}{k_r(1+k_r^2)}\cos(k_rx)e^{-k_r^2t}},\qquad r\ge3.
$$

