---
sidebar_label: "2022年8月実施 専門科目 [7]（Poincaré 不等式と熱方程式）"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Poincare-Inequality-and-Energy-Decay
  - Mathematics.Vector-Calculus.Greens-Identities
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年8月実施 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の集合を定め，$\partial B$ は $B$ の境界とする。

$$
\begin{aligned}
B&:=\{x=(x_1,x_2)\in\mathbb R^2;\ x_1^2+x_2^2<1\},\\
\overline B&:=\{x=(x_1,x_2)\in\mathbb R^2;\ x_1^2+x_2^2\le1\}.
\end{aligned}
$$

(1) 実数値関数 $f\in C^1([0,1])$ が $f(1)=0$ を満たしているとき，次が成り立つことを示せ。

$$
\int_0^1 f(r)^2r\,dr\le c_1\int_0^1 f'(r)^2r\,dr.
$$

ここで，$c_1>0$ は $f$ に依存しない定数である。

(2) 実数値関数 $f\in C^1(B)\cap C(\overline B)$ は $\partial B$ 上で $f=0$ を満たしており，全ての1階偏導関数は $\overline B$ 上の連続関数に拡張できるものとする。このとき，次が成り立つことを示せ。

$$
\int_B f(x)^2\,dx\le c_2\int_B\left\{
\left(\frac{\partial}{\partial x_1}f(x)\right)^2+
\left(\frac{\partial}{\partial x_2}f(x)\right)^2\right\}\,dx.
$$

ここで，$c_2>0$ は $f$ に依存しない定数である。

(3) 実数値関数 $u\in C^2((0,\infty)\times B)\cap C([0,\infty)\times\overline B)$ は次を満たすものとする。

- $u(t,x)=0\quad(t\in(0,\infty),\ x\in\partial B)$。
- 各 $t>0$ で $\dfrac{\partial}{\partial t}u(t,\cdot)$，$\dfrac{\partial}{\partial x_1}u(t,\cdot)$，$\dfrac{\partial}{\partial x_2}u(t,\cdot)$，$\dfrac{\partial^2}{\partial x_1\partial x_2}u(t,\cdot)$ は，$\overline B$ 上の連続関数に拡張できる。

このとき，もし

$$
\frac{\partial}{\partial t}u(t,x)
-\frac{\partial^2}{\partial x_1^2}u(t,x)
-\frac{\partial^2}{\partial x_2^2}u(t,x)=0
\qquad(t\in(0,\infty),\ x\in B)
$$

が成り立つならば，全ての $t>0$ に対して

$$
\int_Bu(t,x)^2\,dx\le c_3e^{-c_4t}
$$

が成り立つことを示せ。ここで，$c_3>0$ は $t$ に依存しない定数で，$c_4>0$ は $t$ と $u$ に依存しない定数である。

#### 题目描述

定义以下集合，并以 $\partial B$ 表示 $B$ 的边界。

$$
\begin{aligned}
B&:=\{x=(x_1,x_2)\in\mathbb R^2;\ x_1^2+x_2^2<1\},\\
\overline B&:=\{x=(x_1,x_2)\in\mathbb R^2;\ x_1^2+x_2^2\le1\}.
\end{aligned}
$$

(1) 当实值函数 $f\in C^1([0,1])$ 满足 $f(1)=0$ 时，证明

$$
\int_0^1 f(r)^2r\,dr\le c_1\int_0^1 f'(r)^2r\,dr.
$$

这里，$c_1>0$ 是与 $f$ 无关的常数。

(2) 假设实值函数 $f\in C^1(B)\cap C(\overline B)$ 在 $\partial B$ 上满足 $f=0$，且所有一阶偏导数均可延拓为 $\overline B$ 上的连续函数。证明

$$
\int_B f(x)^2\,dx\le c_2\int_B\left\{
\left(\frac{\partial}{\partial x_1}f(x)\right)^2+
\left(\frac{\partial}{\partial x_2}f(x)\right)^2\right\}\,dx.
$$

这里，$c_2>0$ 是与 $f$ 无关的常数。

(3) 假设实值函数 $u\in C^2((0,\infty)\times B)\cap C([0,\infty)\times\overline B)$ 满足以下条件。

- $u(t,x)=0\quad(t\in(0,\infty),\ x\in\partial B)$。
- 对每个 $t>0$，$\dfrac{\partial}{\partial t}u(t,\cdot)$、$\dfrac{\partial}{\partial x_1}u(t,\cdot)$、$\dfrac{\partial}{\partial x_2}u(t,\cdot)$、$\dfrac{\partial^2}{\partial x_1\partial x_2}u(t,\cdot)$ 均可延拓为 $\overline B$ 上的连续函数。

证明：若

$$
\frac{\partial}{\partial t}u(t,x)
-\frac{\partial^2}{\partial x_1^2}u(t,x)
-\frac{\partial^2}{\partial x_2^2}u(t,x)=0
\qquad(t\in(0,\infty),\ x\in B),
$$

则对所有 $t>0$，有

$$
\int_Bu(t,x)^2\,dx\le c_3e^{-c_4t}.
$$

这里，$c_3>0$ 是与 $t$ 无关的常数，$c_4>0$ 是与 $t,u$ 均无关的常数。

## **Kai**

### (1)

$0<r\le1$ について $f(r)=-\int_r^1f'(s)\,ds$ だから、Cauchy–Schwarz の不等式より

$$
\begin{gathered}
|f(r)|^2\\
\le\\
\left(\int_r^1|f'(s)|^2s\,ds\right)\\
\left(\int_r^1\frac{ds}{s}\right)
\\
\le\log\frac1r\int_0^1|f'(s)|^2s\,ds.
\end{gathered}
$$

両辺に $r$ を掛けて積分すると、$\int_0^1r\log(1/r)\,dr=1/4$ より $\boxed{c_1=1/4}$ とできる。

### (2)

各 $\theta$ について $F_\theta(r)=f(r\cos\theta,r\sin\theta)$ に (1) を適用する。$F_\theta(1)=0$ であり、$|F_\theta'(r)|\le|\nabla f(r\cos\theta,r\sin\theta)|$ だから、極座標で積分して

$$
\int_Bf^2\,dx\le\frac14\int_B|\nabla f|^2\,dx.
$$

よって $\boxed{c_2=1/4}$。

### (3)

$E(t)=\int_Bu(t,x)^2\,dx$ とおく。熱方程式、境界条件および部分積分により、$t>0$ で

$$
\begin{gathered}
E'(t)=2\int_Bu\Delta u\,dx\\
=-2\int_B|\nabla u|^2\,dx\le-8E(t).
\end{gathered}
$$

部分積分は半径 $\rho<1$ の円盤上で行い、$\rho\uparrow1$ とすればよい。境界で $u=0$、1階偏導関数と $\Delta u=u_t$ は境界まで連続なので境界項は消える。

したがって $0<s<t$ に対し $E(t)\le E(s)e^{-8(t-s)}$。初期時刻までの連続性から $E(s)\to E(0)$ であるので

$$
\boxed{E(t)\le E(0)e^{-8t}}.
$$

特に $c_3=1+E(0)>0$、$c_4=8$ と取ればよい。

## **Reference**

- [京都大学公式問題（2023年度・専門科目、PDF 6ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_senmon_for2023_honshi.pdf)
