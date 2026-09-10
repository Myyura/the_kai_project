---
sidebar_label: '2022年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Conformal-Mapping
---

# 東京大学 工学系研究科 2022年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$z=x+iy$, $w=u+iv$ を複素数とし、$x,y,u,v$ は実数とする。

I. 積分

$$
I=\int_{-\infty}^{\infty}\frac{dx}{x^6+1}
$$

を計算するため、$f(z)=1/(z^6+1)$ を考える。

1. $f(z)$ の特異点をすべて求めよ。
2. 留数定理を用いて $I$ を求めよ。

II. 複素平面上の領域を

$$
D_1=\{x+iy:0\le x\le\pi/2,\ y\ge0\},\qquad
D_2=\{x+iy:x\ge0,\ -\pi/2\le y\le0\}
$$

とする。解析関数による写像 $w=g(z)$ による $D_1,D_2$ の像を、それぞれ $D_1^*,D_2^*$ とする。

1. $g(z)=\cos z$ のとき、$D_1^*$ を図示せよ。
2. $g(z)=(\cosh z)^3$ のとき、$D_2^*$ を図示せよ。

#### 题目描述

设 $z=x+iy$、$w=u+iv$，其中 $x,y,u,v$ 为实数。

I. 为计算

$$
I=\int_{-\infty}^{\infty}\frac{dx}{x^6+1},
$$

考虑 $f(z)=1/(z^6+1)$。

1. 求 $f$ 的全部奇点。
2. 用留数定理求 $I$。

II. 定义

$$
D_1=\{x+iy:0\le x\le\pi/2,\ y\ge0\},\qquad
D_2=\{x+iy:x\ge0,\ -\pi/2\le y\le0\}.
$$

解析映射 $w=g(z)$ 将 $D_1,D_2$ 分别映为 $D_1^*,D_2^*$。

1. 当 $g(z)=\cos z$ 时，画出 $D_1^*$。
2. 当 $g(z)=(\cosh z)^3$ 时，画出 $D_2^*$。

## **Kai**

### I

分母の六つの零点

$$
\alpha_k=e^{(2k+1)\pi i/6}\quad(k=0,\ldots,5)
$$

はいずれも単純極であり、

$$
\operatorname{Res}(f,\alpha_k)=\frac1{6\alpha_k^5}=-\frac{\alpha_k}{6}.
$$

上半平面の三つの極の和は $2i$ なので、留数の和は $-i/3$ である。半径 $R>1$ の上半円弧での積分の絶対値は $\pi R/(R^6-1)\to0$ 以下である。よって

$$
\boxed{I=2\pi i\left(-\frac i3\right)=\frac{2\pi}{3}}.
$$

### II.1

次式

$$
w=\cos x\cosh y-i\sin x\sinh y
$$

より $u\ge0,v\le0$ である。三つの境界の像は

$$
y=0\mapsto[0,1],\qquad x=0\mapsto[1,\infty),\qquad
x=\pi/2\mapsto-i[0,\infty).
$$

任意の $u>0,v<0$ に対し、方程式

$$
\frac{u^2}{\cosh^2 y}+\frac{v^2}{\sinh^2 y}=1
$$

の左辺は $y>0$ で $+\infty$ から $0$ まで狭義単調に減少するので、解は一意に存在する。さらに $\cos x=u/\cosh y$、$\sin x=-v/\sinh y$ によって $0<x<\pi/2$ が定まる。したがって

$$
\boxed{D_1^*=\{u+iv:u\ge0,\ v\le0\}}.
$$

### II.2

$z\in D_2$ ならば $iz\in D_1$ なので、$\zeta=\cosh z=\cos(iz)$ の像は境界を含む第4象限全体である。$\zeta=\rho e^{i\theta}$（$\rho\ge0,-\pi/2\le\theta\le0$）と書くと、

$$
w=\rho^3e^{3i\theta},\qquad-3\pi/2\le3\theta\le0.
$$

よって

$$
\boxed{D_2^*=\{u+iv:u\le0\ \text{または}\ v\le0\}}.
$$

いずれも境界を含む。図の網掛け部分が求める像である。

![二つの写像の像](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2023/math3-image-regions.svg)
