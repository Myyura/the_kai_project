---
sidebar_label: '2014年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Clairaut-Equation-and-Singular-Solution
  - Mathematics.Geometry.Arc-Length-Parameter-and-Curvature
---

# 東京大学 工学系研究科 2014年8月実施 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. $p=y'$ とおき、次の微分方程式

$$
(y')^2+2xy'-2y=0
$$

の一般解と特異解を求めよ。

II. 曲線 $y=y(x)$ 上の任意の点 $P(x,y)$ における法線と $x$ 軸との交点を $N$ とする。曲率半径 $R$ は距離 $PN$ の2倍であるとする。曲率半径は次式で与えられる。

$$
R=\frac{(1+(y')^2)^{3/2}}{|y''|}.
$$

1. $1+(y')^2=2|yy''|$ が成り立つことを示せ。
2. $yy''>0$ のとき、この方程式を解き、得られる曲線群の名称を答えよ。

![曲線・接線と法線 PN](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/tokyo-kyotsu-201408-normal.svg)

#### 题目描述

I. 令 $p=y'$，求微分方程

$$
(y')^2+2xy'-2y=0
$$

的一般解与奇解。

II. 曲线 $y=y(x)$ 上任意一点 $P(x,y)$ 处的法线与 $x$ 轴相交于 $N$。设曲率半径 $R$ 等于 $PN$ 的两倍，其中

$$
R=\frac{(1+(y')^2)^{3/2}}{|y''|}.
$$

1. 证明 $1+(y')^2=2|yy''|$。
2. 当 $yy''>0$ 时，解此方程，并指出所得曲线族的名称。

## **Kai**

### I

元の方程式は $y=xp+p^2/2$ である。$x$ で微分すると

$$
(x+p)p'=0.
$$

$p=C$ のとき一般解、$p=-x$ のとき特異解が得られる：

$$
\boxed{y=Cx+\frac{C^2}{2}},\qquad
\boxed{y=-\frac{x^2}{2}}.
$$

### II.1

法線の方向ベクトルを $(y',-1)$ と取ると、

$$
N=(x+yy',0),\qquad PN=|y|\sqrt{1+(y')^2}.
$$

$R=2PN$ に代入して正の因子を約せば、

$$
\boxed{1+(y')^2=2|yy''|}.
$$

### II.2

このとき $1+(y')^2=2yy''$ であり、

$$
\frac{\mathrm d}{\mathrm dx}\left(\frac{1+(y')^2}{y}\right)
=\frac{y'\{2yy''-1-(y')^2\}}{y^2}=0.
$$

したがって $(1+(y')^2)/y=4a$（$a\ne0$）とおけ、$y''=2a$ を得る。積分して元の方程式に代入すると、

$$
\boxed{y=ax^2+bx+\frac{1+b^2}{4a}
=a\left(x+\frac{b}{2a}\right)^2+\frac1{4a},\quad a\ne0.}
$$

得られる曲線群は**放物線**である。
