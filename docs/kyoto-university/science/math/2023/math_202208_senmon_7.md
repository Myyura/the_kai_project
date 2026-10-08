---
sidebar_label: "2023年度 専門科目 [7]（Poincaré 不等式と熱方程式）"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Poincare-Inequality-and-Energy-Decay
  - Mathematics.Vector-Calculus.Greens-Identities
---

# 京都大学 理学研究科 数学・数理解析専攻 2023年度 専門科目 問題7

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$B=\{(x_1,x_2)\in\mathbb R^2:x_1^2+x_2^2<1\}$、$\overline B=\{x_1^2+x_2^2\le1\}$ とする。

(1) 実数値関数 $f\in C^1([0,1])$ が $f(1)=0$ を満たすとき、$f$ に依存しない $c_1>0$ が存在して

$$
\int_0^1 f(r)^2r\,dr\le c_1\int_0^1f'(r)^2r\,dr
$$

が成り立つことを示せ。

(2) 実数値関数 $f\in C^1(B)\cap C(\overline B)$ が境界で $f=0$ を満たし、すべての1階偏導関数が $\overline B$ 上の連続関数に拡張できるとする。$f$ に依存しない $c_2>0$ によって

$$
\int_Bf^2\,dx\le c_2\int_B\bigl((\partial_{x_1}f)^2+(\partial_{x_2}f)^2\bigr)\,dx
$$

が成り立つことを示せ。

(3) 実数値関数 $u\in C^2((0,\infty)\times B)\cap C([0,\infty)\times\overline B)$ が $t>0$、$x\in\partial B$ で $u(t,x)=0$ を満たすとする。各 $t>0$ で $u_t(t,\cdot),u_{x_1}(t,\cdot),u_{x_2}(t,\cdot),u_{x_1x_2}(t,\cdot)$ は $\overline B$ 上連続に拡張できるものとする。$u_t-u_{x_1x_1}-u_{x_2x_2}=0$ なら、すべての $t>0$ で

$$
\int_Bu(t,x)^2\,dx\le c_3e^{-c_4t}
$$

を示せ。ただし $c_3>0$ は $t$ に依存せず、$c_4>0$ は $t,u$ に依存しない。

#### 题目描述

令 $B$ 为平面单位开圆盘。

(1) 对满足 $f(1)=0$ 的实值 $C^1([0,1])$ 函数，证明 $\int_0^1f^2r\,dr\le c_1\int_0^1(f')^2r\,dr$，其中 $c_1>0$ 与 $f$ 无关。

(2) 实值 $f\in C^1(B)\cap C(\overline B)$ 在边界为零，一阶偏导数连续延拓到闭圆盘。证明 $\int_B f^2\le c_2\int_B|\nabla f|^2$，其中 $c_2>0$ 与 $f$ 无关。

(3) 实值 $u\in C^2((0,\infty)\times B)\cap C([0,\infty)\times\overline B)$ 满足齐次 Dirichlet 边界条件和热方程 $u_t=\Delta u$，且每个 $t>0$ 时 $u_t,u_{x_1},u_{x_2},u_{x_1x_2}$ 都能连续延拓到闭圆盘。证明 $\int_B u(t,x)^2\,dx\le c_3e^{-c_4t}$，其中 $c_3>0$ 不依赖于 $t$，$c_4>0$ 不依赖于 $t,u$。

## **Kai**

### (1)

$0<r\le1$ について $f(r)=-\int_r^1f'(s)\,ds$ だから、Cauchy–Schwarz の不等式より

$$
|f(r)|^2\le\left(\int_r^1|f'(s)|^2s\,ds\right)\left(\int_r^1\frac{ds}{s}\right)
\le\log\frac1r\int_0^1|f'(s)|^2s\,ds.
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
E'(t)=2\int_Bu\Delta u\,dx=-2\int_B|\nabla u|^2\,dx\le-8E(t).
$$

部分積分は半径 $\rho<1$ の円盤上で行い、$\rho\uparrow1$ とすればよい。境界で $u=0$、1階偏導関数と $\Delta u=u_t$ は境界まで連続なので境界項は消える。

したがって $0<s<t$ に対し $E(t)\le E(s)e^{-8(t-s)}$。初期時刻までの連続性から $E(s)\to E(0)$ であるので

$$
\boxed{E(t)\le E(0)e^{-8t}}.
$$

特に $c_3=1+E(0)>0$、$c_4=8$ と取ればよい。

## **Reference**

- [京都大学公式問題（2023年度・専門科目、PDF 6ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2025-10/2022math_senmon_for2023_honshi.pdf)
