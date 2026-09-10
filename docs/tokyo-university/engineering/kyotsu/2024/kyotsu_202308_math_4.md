---
sidebar_label: '2023年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Geometry.Arc-Length-Parameter-and-Curvature
  - Mathematics.Vector-Calculus.Surface-Normal
  - Mathematics.Geometry.Gaussian-Curvature
---

# 東京大学 工学系研究科 2023年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 二次元直交座標系において、曲線 $L$ を

$$
x(t)=a(t-\sin t),\qquad y(t)=a(1-\cos t),\qquad0\le t\le2\pi
$$

で定義する。ただし $a>0$ は定数とする。

1. $L$ の長さを求めよ。
2. $L$ 上の任意の点の曲率を求めよ。ただし $t=0,2\pi$ は除く。

II. 実数の媒介変数 $u,v$ を用いて

$$
x=\sinh u\cos v,\qquad y=2\sinh u\sin v,\qquad z=3\cosh u
$$

と表される曲面を考える。

1. 媒介変数を含まない式で曲面を表せ。
2. $z=5$ における $xy$ 平面図と、$y=0$ における $xz$ 平面図の概形を描き、それぞれの軸との交点を示せ。
3. $z$ 成分が正となる単位法線ベクトル $\boldsymbol n$ を $u,v$ で表せ。
4. $u=v=0$ で与えられる点のガウス曲率を $\kappa$ とする。$|\kappa|$ を求めよ。

#### 题目描述

I. 在 $xy$ 平面上，曲线 $L$ 为

$$
x(t)=a(t-\sin t),\qquad y(t)=a(1-\cos t),\qquad0\le t\le2\pi,
$$

其中 $a>0$。

1. 求 $L$ 的长度。
2. 求 $0<t<2\pi$ 时曲线上任意一点的曲率。

II. 曲面参数方程为

$$
x=\sinh u\cos v,\qquad y=2\sinh u\sin v,\qquad z=3\cosh u,
$$

其中 $u,v\in\mathbb R$。

1. 将曲面表示为不含参数的方程。
2. 分别画出 $z=5$ 处的 $xy$ 截面和 $y=0$ 处的 $xz$ 截面，标出与各坐标轴的交点。
3. 用 $u,v$ 表示 $z$ 分量为正的单位法向量 $\boldsymbol n$。
4. 设 $u=v=0$ 处的高斯曲率为 $\kappa$，求 $|\kappa|$。

## **Kai**

### I

$$
x'=a(1-\cos t),\qquad y'=a\sin t,\qquad
\sqrt{x'^2+y'^2}=2a\sin(t/2).
$$

したがって

$$
\boxed{\operatorname{Length}(L)=\int_0^{2\pi}2a\sin(t/2)\,dt=8a}.
$$

また $|x'y''-y'x''|=a^2(1-\cos t)$ より、

$$
\boxed{\kappa(t)=\frac{|x'y''-y'x''|}{(x'^2+y'^2)^{3/2}}=\frac1{4a\sin(t/2)}}\quad(0<t<2\pi).
$$

### II.1、II.2

$\cosh^2u-\sinh^2u=1$ より、曲面は

$$
\boxed{\frac{z^2}{9}-x^2-\frac{y^2}{4}=1,\qquad z\ge3}.
$$

$z=5$ における断面は楕円

$$
x^2+\frac{y^2}{4}=\frac{16}{9},
$$

であり、両軸との交点は $(\pm4/3,0)$、$(0,\pm8/3)$ である。$y=0$ の断面は

$$
z=3\sqrt{1+x^2},
$$

であり、$z$ 軸とは $(0,3)$ で交わり、$x$ 軸とは交わらない。

![楕円断面と双曲線の上側の枝](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/math4-sections.svg)

### II.3

$F=z^2/9-x^2-y^2/4-1$ とおくと、$\nabla F=(-2x,-y/2,2z/9)$ の第3成分は正である。媒介変数を代入して正規化すると、

$$
\boxed{\boldsymbol n=
\frac{(-2\sinh u\cos v,-\sinh u\sin v,\frac23\cosh u)}
{\sqrt{4\sinh^2u\cos^2v+\sinh^2u\sin^2v+\frac49\cosh^2u}}}.
$$

### II.4

$(0,0,3)$ の近くで $z=h(x,y)=3\sqrt{1+x^2+y^2/4}$ と表す。この点では

$$
h_x=h_y=h_{xy}=0,\qquad h_{xx}=3,\quad h_{yy}=\frac34.
$$

よって

$$
\boxed{|\kappa|=\left|\frac{h_{xx}h_{yy}-h_{xy}^2}{(1+h_x^2+h_y^2)^2}\right|=\frac94}.
$$

