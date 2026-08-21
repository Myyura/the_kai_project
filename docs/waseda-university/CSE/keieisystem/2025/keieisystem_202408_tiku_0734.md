---
sidebar_label: "2024年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

関数 $z = f(x, y) = x^4 + y^4 - 9(x+y)^2$ に対し、関数の停留点と極値を全て求めよ。

### 题目描述

对函数

$$
z=f(x,y)=x^4+y^4-9(x+y)^2,
$$

求出全部驻点，并确定所有极值。

## **Kai**

首先，求偏导数：

$$
\frac{\partial f}{\partial x} = 4x^3 - 18(x+y)
$$

$$
\frac{\partial f}{\partial y} = 4y^3 - 18(x+y)
$$

令偏导数为0，得到方程组：

$$
4x^3 - 18(x+y) = 0
$$

$$
4y^3 - 18(x+y) = 0
$$

因此， $4x^3 = 4y^3$ ，得到 $x = y$ 。
将 $x = y$ 代入第一个方程：

$$
4x^3 - 18(x+x) = 0
$$

$$
4x^3 - 36x = 0
$$

$$
4x(x^2 - 9) = 0
$$

$$
4x(x-3)(x+3) = 0
$$

所以，x = 0, x = 3, x = -3
对应的 y 值也相等，所以得到三个驻点：(0, 0), (3, 3), (-3, -3)

接下来，求二阶偏导数：

$$
\frac{\partial^2 f}{\partial x^2} = 12x^2 - 18
$$

$$
\frac{\partial^2 f}{\partial y^2} = 12y^2 - 18
$$

$$
\frac{\partial^2 f}{\partial x \partial y} = -18
$$

令 $A = \frac{\partial^2 f}{\partial x^2}, B = \frac{\partial^2 f}{\partial x \partial y}, C = \frac{\partial^2 f}{\partial y^2}$ ，计算 $AC - B^2$

对于 $(0, 0)$ : $A = -18$ , $B = -18$ , $C = -18$ , $AC - B^2 = (-18)(-18) - (-18)^2 = 0$ , 无法确定极值。
对于 $(3, 3)$ : $A = 12(3^2) - 18 = 108 - 18 = 90$ , $B = -18$ , $C = 90$ , $AC - B^2 = (90)(90) - (-18)^2 = 8100 - 324 = 7776 > 0$ , $A > 0$ , 所以 $(3, 3)$ 是极小值点, 极小值为 $f(3,3) = 3^4 + 3^4 - 9(3+3)^2 = 81 + 81 - 9(36) = 162 - 324 = -162$ 。
对于 $(-3, -3)$ : $A = 12(-3)^2 - 18 = 108 - 18 = 90$ , $B = -18$ , $C = 90$ , $AC - B^2 = (90)(90) - (-18)^2 = 8100 - 324 = 7776 > 0$ , $A > 0$ , 所以 $(-3, -3)$ 是极小值点, 极小值为 $f(-3,-3) = (-3)^4 + (-3)^4 - 9(-3-3)^2 = 81 + 81 - 9(36) = 162 - 324 = -162$ 。

对于 $(0,0)$ ，需要进一步分析。沿 $y=0$ ，

$$
f(x,0)=x^4-9x^2<0\qquad(0<|x|<3),
$$

而沿 $y=-x$ ，

$$
f(x,-x)=2x^4>0\qquad(x\ne0).
$$

因此任意小的原点邻域内都有正值和负值，故 $(0,0)$ 是鞍点。

此外，

$$
x^4+y^4-9(x+y)^2
\geq\frac12(x^2+y^2)^2-18(x^2+y^2)\longrightarrow+\infty
$$

当 $x^2+y^2\to\infty$ 。所以两个极小值点 $(3,3)$ 和 $(-3,-3)$ 也是全局最小值点，全局最小值为 $\boxed{-162}$ ；不存在极大值。
