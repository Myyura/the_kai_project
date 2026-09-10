---
sidebar_label: '数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Singularities-and-Poles
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Contour-Integration
---

# 東京大学 工学系研究科 2018年度 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.
$a>0$ とし、$f(z)=z/[(z^2+1)(z-1-ia)]$ とする。

1. すべての極と、それぞれの留数を求めよ。
2. 留数定理を用いて $\displaystyle\int_{-\infty}^{\infty}\frac{x}{(x^2+1)(x-1-ia)}\,dx$ を求めよ。

### II.
$g(z)=z/[(z^2+1)(z-1)]$ とする。反時計回りの閉曲線 $C$ は、次の四つの経路を順にたどるものとする。ただし $r>0$、$r\ne\sqrt2$、$R>1+r$ である。

- $C_1:z=Re^{i\theta}$，$0\le\theta\le\pi$；
- $C_2:z=x$，$-R\le x\le1-r$；
- $C_3:z=1-re^{i\theta}$、$0\le\theta\le\pi$（下半円）；
- $C_4:z=x$，$1+r\le x\le R$。

![積分経路（0より大きく1より小さいrの例）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2018/math_3_contour.svg)

1. $\displaystyle\oint_Cg(z)\,dz$ を求めよ。
2. $\displaystyle\lim_{\varepsilon\to0^+}\left[\int_{-\infty}^{1-\varepsilon}g(x)\,dx+\int_{1+\varepsilon}^{\infty}g(x)\,dx\right]$ を求めよ。

#### 题目描述

##### I.
设 $a>0$，$f(z)=z/[(z^2+1)(z-1-ia)]$。

1. 求全部极点及其留数。
2. 用留数定理计算 $\displaystyle\int_{-\infty}^{\infty}\frac{x}{(x^2+1)(x-1-ia)}\,dx$。

##### II.
设 $g(z)=z/[(z^2+1)(z-1)]$。闭曲线 $C$ 依次由下列各段组成，方向为逆时针；$r>0$、$r\ne\sqrt2$、$R>1+r$：

- $C_1:z=Re^{i\theta}$，$0\le\theta\le\pi$；
- $C_2:z=x$，$-R\le x\le1-r$；
- $C_3:z=1-re^{i\theta}$，$0\le\theta\le\pi$（下半圆）；
- $C_4:z=x$，$1+r\le x\le R$。


1. 求 $\displaystyle\oint_Cg(z)\,dz$。
2. 求 $\displaystyle\lim_{\varepsilon\to0^+}\left[\int_{-\infty}^{1-\varepsilon}g(x)\,dx+\int_{1+\varepsilon}^{\infty}g(x)\,dx\right]$。

## **Kai**

### I.

1. 三つの極はいずれも1位の極であり、留数はそれぞれ

$$
\boxed{\operatorname{Res}_{i}f=\frac1{2(i-1-ia)},\quad
\operatorname{Res}_{-i}f=\frac1{2(-i-1-ia)},\quad
\operatorname{Res}_{1+ia}f=\frac{1+ia}{(1+ia)^2+1}}.
$$

2. 上半平面で積分経路を閉じる。大円弧の積分は $O(R^{-1})$ なので、

$$
\boxed{\int_{-\infty}^{\infty}f(x)\,dx
=2\pi i\left(\operatorname{Res}_if+\operatorname{Res}_{1+ia}f\right)
=\frac{\pi}{a+1-i}}.
$$

### II.

1. $g$ の $i,-i,1$ における留数は順に $(-1-i)/4$、$(-1+i)/4$、$1/2$ である。

$0<r<\sqrt2$ のとき、$C$ 内には $i,1$ がある。$r>\sqrt2$ のときは $-i$ も含まれる。したがって

$$
\boxed{\oint_Cg(z)\,dz=
\begin{cases}\dfrac\pi2(1+i),&0<r<\sqrt2,\\0,&r>\sqrt2.\end{cases}}
$$

2. $r\to0^+$ のとき、下半円を左から右へ進む積分は $i\pi\operatorname{Res}_{1}g=i\pi/2$ に収束し、大円弧の積分は零に収束する。よって

$$
\boxed{\operatorname{PV}\int_{-\infty}^{\infty}g(x)\,dx
=\frac\pi2(1+i)-\frac{\pi i}{2}=\frac\pi2}.
$$

