---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) $f(x,y) = x \cos(2x-y^2)$ とする.偏導関数 $\frac{\partial f}{\partial x}$ および $\frac{\partial f}{\partial y}$ を求めよ。

(2) $u = g(z), z = \frac{x}{y}$ とする. $x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y}$ を計算せよ。

### 题目描述

（1）设

$$
f(x,y)=x\cos(2x-y^2).
$$

求偏导数 $\dfrac{\partial f}{\partial x}$ 与 $\dfrac{\partial f}{\partial y}$。

（2）设

$$
u=g(z),\qquad z=\frac{x}{y}\quad(y\ne0).
$$

计算

$$
x\frac{\partial u}{\partial x}
+y\frac{\partial u}{\partial y}.
$$

## **Kai**

(1)
$f(x,y) = x \cos(2x-y^2)$

$\frac{\partial f}{\partial x} = \cos(2x-y^2) + x(-\sin(2x-y^2)) \cdot 2 = \cos(2x-y^2) - 2x\sin(2x-y^2)$

$\frac{\partial f}{\partial y} = x(-\sin(2x-y^2)) \cdot (-2y) = 2xy\sin(2x-y^2)$

(2)

$u = g(z), z = \frac{x}{y}\quad (y\ne0)$

$\frac{\partial u}{\partial x} = \frac{dg}{dz} \cdot \frac{\partial z}{\partial x} = g'(z) \cdot \frac{1}{y}$

$\frac{\partial u}{\partial y} = \frac{dg}{dz} \cdot \frac{\partial z}{\partial y} = g'(z) \cdot (-\frac{x}{y^2})$

$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = x g'(z) \cdot \frac{1}{y} + y g'(z) \cdot (-\frac{x}{y^2}) = \frac{x}{y} g'(z) - \frac{x}{y} g'(z) = 0$
