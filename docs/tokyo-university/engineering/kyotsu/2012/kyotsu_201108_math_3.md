---
sidebar_label: '2011年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Mobius-Transformation
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
---

# 東京大学 工学系研究科 2011年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. $\zeta=f(z)=(1+z)/(1-z)$ が $|z|<1$ を右半平面 $\operatorname{Re}\zeta>0$ に写すことを示せ。また $z=e^{i\varphi}$（$0<\varphi<2\pi$）の像を求めよ。

II. $h$ は右半平面で正則、閉右半平面で連続であり、$|\zeta|\to\infty$ で $h(\zeta)\to0$ とする。
$\zeta_0=\xi_0+i\eta_0,\zeta_1=-\xi_0+i\eta_0$（$\xi_0>0$）とおく。
半径 $R>|\zeta_0|$ の右半円と虚軸上の直径からなる閉路 $C$ を時計回りに一周するとき、

$$
h(\zeta_0)=-\frac1{2\pi i}\oint_C\frac{h(\zeta)}{\zeta-\zeta_0}\,d\zeta,
\qquad 0=-\frac1{2\pi i}\oint_C\frac{h(\zeta)}{\zeta-\zeta_1}\,d\zeta
$$

が成り立つ。これらを用いて次式を導け。

$$
h(\xi_0+i\eta_0)=\frac1\pi\int_{-\infty}^\infty
\frac{\xi_0}{\xi_0^2+(\eta_0-t)^2}h(it)\,dt.
$$

III. $k$ が単位円内で正則、閉単位円板で連続ならば、$0\le r<1,0<\theta<2\pi$ に対し次式が成り立つことを導け。

$$
k(re^{i\theta})=\frac1{2\pi}\int_0^{2\pi}
\frac{1-r^2}{1+r^2-2r\cos(\theta-\varphi)}k(e^{i\varphi})\,d\varphi.
$$

![図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2012/kyotsu_201108_math_3_contour.svg)

#### 题目描述

I. 设 $\zeta=f(z)=(1+z)/(1-z)$。证明它把 $|z|<1$ 映为 $\operatorname{Re}\zeta>0$，并求单位圆上 $z=e^{i\varphi}$（$0<\varphi<2\pi$）的像。

II. $h$ 在右半平面解析，在闭右半平面连续，且 $h(\zeta)\to0$（$|\zeta|\to\infty$）。
设 $\zeta_0=\xi_0+i\eta_0,\zeta_1=-\xi_0+i\eta_0$，$\xi_0>0$。
令 $C$ 为右半圆与虚轴直径组成的顺时针闭路，半径 $R>|\zeta_0|$。已知

$$
h(\zeta_0)=-\frac1{2\pi i}\oint_C\frac{h(\zeta)}{\zeta-\zeta_0}\,d\zeta,
\qquad 0=-\frac1{2\pi i}\oint_C\frac{h(\zeta)}{\zeta-\zeta_1}\,d\zeta.
$$

由此证明

$$
h(\xi_0+i\eta_0)=\frac1\pi\int_{-\infty}^\infty
\frac{\xi_0}{\xi_0^2+(\eta_0-t)^2}h(it)\,dt.
$$

III. 若 $k$ 在单位圆内解析、在闭圆盘连续，证明对 $0\le r<1,0<\theta<2\pi$，

$$
k(re^{i\theta})=\frac1{2\pi}\int_0^{2\pi}
\frac{1-r^2}{1+r^2-2r\cos(\theta-\varphi)}k(e^{i\varphi})\,d\varphi.
$$

## **Kai**

### I

$$
\operatorname{Re}\frac{1+z}{1-z}=\frac{1-|z|^2}{|1-z|^2}>0.
$$

逆変換 $z=(\zeta-1)/(\zeta+1)$ において、
$|\zeta-1|<|\zeta+1|\iff\operatorname{Re}\zeta>0$ だから、右半平面への全単射である。
境界上では

$$
\boxed{f(e^{i\varphi})=i\cot\frac\varphi2},
$$

$\varphi$ が $0$ から $2\pi$ まで増加すると、虚軸上を $+i\infty$ から $-i\infty$ へ動く。

### II

与えられた二式の差を取る。積分核の差は

$$
\frac1{\zeta-\zeta_0}-\frac1{\zeta-\zeta_1}
=\frac{2\xi_0}{(\zeta-\zeta_0)(\zeta-\zeta_1)}.
$$

半円弧上で核は $O(R^{-2})$、弧長は $\pi R$ なので、弧積分は零に収束する。
虚軸上の直径は $-iR$ から $iR$ に向かう。$\zeta=it$ とおくと、核の差は
$-2\xi_0/[\xi_0^2+(t-\eta_0)^2]$ となり、

$$
h(\zeta_0)=\lim_{R\to\infty}\frac1\pi\int_{-R}^R
\frac{\xi_0h(it)}{\xi_0^2+(t-\eta_0)^2}\,dt,
$$

となる。これが求める公式である。

### III

$g(\zeta)=(\zeta-1)/(\zeta+1)$ とおき、
$h(\zeta)=k(g(\zeta))-k(1)$ に II を適用する。この関数は無限遠で零に収束する。
$z_0=re^{i\theta}$、$\zeta_0=f(z_0)$ とおくと、

$$
\xi_0=\frac{1-r^2}{|1-z_0|^2},\qquad
\eta_0=\frac{2r\sin\theta}{|1-z_0|^2}.
$$

$t=\cot(\varphi/2)$ と変数変換し整理すると、

$$
\frac{\xi_0|dt|}{\xi_0^2+(t-\eta_0)^2}
=\frac{1-r^2}{2[1+r^2-2r\cos(\theta-\varphi)]}\,d\varphi.
$$

半平面の核の積分は $\pi$ なので、定数 $k(1)$ が両辺で相殺され、所望の公式を得る。
