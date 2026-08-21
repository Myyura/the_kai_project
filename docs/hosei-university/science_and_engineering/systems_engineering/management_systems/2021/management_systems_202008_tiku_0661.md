---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Differentiation
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

関数 $f(x,y) = \frac{x^3}{3} - xy + y^2$ について、以下の問いに答えよ。

(1) 偏導関数 $\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial^2 f}{\partial x^2}, \frac{\partial^2 f}{\partial y^2}, \frac{\partial^2 f}{\partial x \partial y}$ を求めよ。

(2) 関数 $f(x, y)$ の停留点（臨界点）を求め、それらの点において $f(x, y)$ が極値をとるかどうか判定せよ。もし極値をとる場合は、その値を求めよ。

### 题目描述

给定函数

$$
f(x,y)=\frac{x^3}{3}-xy+y^2,
$$

回答下列问题。

（1）求偏导数

$$
\frac{\partial f}{\partial x},\quad
\frac{\partial f}{\partial y},\quad
\frac{\partial^2f}{\partial x^2},\quad
\frac{\partial^2f}{\partial y^2},\quad
\frac{\partial^2f}{\partial x\partial y}.
$$

（2）求函数 $f(x,y)$ 的驻点（临界点），并判断 $f(x,y)$ 在各点是否取得极值；若取得极值，还要求出相应的极值。

## **Kai**

(1) 首先计算一阶偏导数：

$$
\frac{\partial f}{\partial x} = x^2 - y
$$

$$
\frac{\partial f}{\partial y} = -x + 2y
$$

然后计算二阶偏导数：

$$
\frac{\partial^2 f}{\partial x^2} = 2x
$$

$$
\frac{\partial^2 f}{\partial y^2} = 2
$$

$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x} = -1
$$

(2) 为了求临界点，我们需要解以下方程组：

$$
\frac{\partial f}{\partial x} = x^2 - y = 0
$$

$$
\frac{\partial f}{\partial y} = -x + 2y = 0
$$

从第二个方程得到 $x = 2y$ 。 将其代入第一个方程：

$$
(2y)^2 - y = 4y^2 - y = y(4y - 1) = 0
$$

因此， $y = 0$ 或 $y = \frac{1}{4}$ 。
当 $y = 0$ 时， $x = 2(0) = 0$ 。 所以第一个临界点是 $(0, 0)$ 。
当 $y = \frac{1}{4}$ 时， $x = 2(\frac{1}{4}) = \frac{1}{2}$ 。 所以第二个临界点是 $(\frac{1}{2}, \frac{1}{4})$ 。
现在我们使用二阶偏导数测试来确定临界点是否为极值点。
令 $D(x, y) = \frac{\partial^2 f}{\partial x^2} \cdot \frac{\partial^2 f}{\partial y^2} - (\frac{\partial^2 f}{\partial x \partial y})^2 = (2x)(2) - (-1)^2 = 4x - 1$ 。
对于临界点 $(0, 0)$ ， $D(0, 0) = 4(0) - 1 = -1 < 0$ 。 因为 $D < 0$ ，所以 $(0, 0)$ 是鞍点，不是极值点。
对于临界点 $(\frac{1}{2}, \frac{1}{4})$ ， $D(\frac{1}{2}, \frac{1}{4}) = 4(\frac{1}{2}) - 1 = 2 - 1 = 1 > 0$ 。
由于 $D > 0$ 并且 $\frac{\partial^2 f}{\partial x^2}(\frac{1}{2}, \frac{1}{4}) = 2(\frac{1}{2}) = 1 > 0$ ，所以 $(\frac{1}{2}, \frac{1}{4})$ 是局部最小值点。
该点的函数值为:

$$
f(\frac{1}{2}, \frac{1}{4}) = \frac{(\frac{1}{2})^3}{3} - (\frac{1}{2})(\frac{1}{4}) + (\frac{1}{4})^2 = \frac{1}{24} - \frac{1}{8} + \frac{1}{16} = \frac{2 - 6 + 3}{48} = -\frac{1}{48}
$$

所以， $f(\frac{1}{2}, \frac{1}{4}) = -\frac{1}{48}$ 。
