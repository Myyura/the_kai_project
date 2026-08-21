---
sidebar_label: "2024年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) $f(x, y) = \cos(x^2 + xy - y^2)$ とする。偏導関数 $\frac{\partial f}{\partial y}$ , $\frac{\partial^2 f}{\partial x\partial y}$ , $\frac{\partial^2 f}{\partial y^2}$ を求めよ。
(2) $g(x, y) = x^y$ とする。偏導関数 $\frac{\partial g}{\partial x}$ , $\frac{\partial g}{\partial y}$ を求めよ。

### 题目描述

（1）设

$$
f(x,y)=\cos(x^2+xy-y^2).
$$

求偏导数

$$
\frac{\partial f}{\partial y},\qquad
\frac{\partial^2f}{\partial x\partial y},\qquad
\frac{\partial^2f}{\partial y^2}.
$$

（2）设

$$
g(x,y)=x^y.
$$

求偏导数 $\dfrac{\partial g}{\partial x}$ 与 $\dfrac{\partial g}{\partial y}$。按实值函数通常的可微定义，本问取 $x>0$，从而可写成 $x^y=e^{y\ln x}$。

## **Kai**

(1) 関数

$$
f(x,y)=\cos(x^{2}+xy-y^{2})
$$

について，まず

$$
u(x,y)=x^{2}+xy-y^{2}
$$

とおくと

$$
f(x,y)=\cos u.
$$

$$
\frac{\partial f}{\partial y}
=-\sin u\cdot\frac{\partial u}{\partial y}
=-(x-2y)\sin(x^{2}+xy-y^{2}).
$$

$$
\frac{\partial^{2}f}{\partial x\partial y}
=\frac{\partial}{\partial x}\left[-(x-2y)\sin u\right]
=-\sin u-(x-2y)(2x+y)\cos(x^{2}+xy-y^{2}).
$$

$$
\frac{\partial^{2}f}{\partial y^{2}}
=\frac{\partial}{\partial y}\left[-(x-2y)\sin u\right]
=2\sin(x^{2}+xy-y^{2})-(x-2y)^{2}\cos(x^{2}+xy-y^{2}).
$$

(2) 関数

$$
g(x,y)=x^{y}\quad (x>0)
$$

について， $g(x,y)=e^{y\ln x}$ と書けるから

$$
\frac{\partial g}{\partial x}
=x^{y}\cdot\frac{y}{x}
= y\,x^{\,y-1},
$$

$$
\frac{\partial g}{\partial y}
=x^{y}\ln x.
$$
