---
sidebar_label: "2015年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の関数について、 $\frac{dz}{dt}$ を求めよ。

$$
z = \frac{3x^2 + y^2}{x^2 + 3y^2}, \quad x = e^t, \quad y = e^{-t}
$$

### 题目描述

已知

$$
z=\frac{3x^2+y^2}{x^2+3y^2},\qquad
x=e^t,\qquad y=e^{-t}.
$$

求 $\frac{dz}{dt}$。

## **Kai**

We have

$$
z = \frac{3x^2 + y^2}{x^2 + 3y^2}
$$

,

$$
x = e^t
$$

,

$$
y = e^{-t}
$$

.
We want to find $\frac{dz}{dt}$ .
Using the chain rule:

$$
\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}
$$

First, we calculate the partial derivatives:

$$
\frac{\partial z}{\partial x} = \frac{(6x)(x^2 + 3y^2) - (3x^2 + y^2)(2x)}{(x^2 + 3y^2)^2} = \frac{6x^3 + 18xy^2 - 6x^3 - 2xy^2}{(x^2 + 3y^2)^2} = \frac{16xy^2}{(x^2 + 3y^2)^2}
$$

$$
\frac{\partial z}{\partial y} = \frac{(2y)(x^2 + 3y^2) - (3x^2 + y^2)(6y)}{(x^2 + 3y^2)^2} = \frac{2x^2y + 6y^3 - 18x^2y - 6y^3}{(x^2 + 3y^2)^2} = \frac{-16x^2y}{(x^2 + 3y^2)^2}
$$

Next, we calculate the derivatives with respect to t:

$$
\frac{dx}{dt} = e^t = x
$$

$$
\frac{dy}{dt} = -e^{-t} = -y
$$

Now, we substitute these into the chain rule formula:

$$
\frac{dz}{dt} = \frac{16xy^2}{(x^2 + 3y^2)^2} (x) + \frac{-16x^2y}{(x^2 + 3y^2)^2} (-y) = \frac{16x^2y^2 + 16x^2y^2}{(x^2 + 3y^2)^2} = \frac{32x^2y^2}{(x^2 + 3y^2)^2}
$$

Since $x = e^t$ and $y = e^{-t}$ , we have $xy = e^t e^{-t} = 1$ , so $x^2y^2 = 1$ .

$$
\frac{dz}{dt} = \frac{32}{(x^2 + 3y^2)^2} = \frac{32}{(e^{2t} + 3e^{-2t})^2}
$$

So,

$$
\frac{dz}{dt} = \frac{32}{(e^{2t} + 3e^{-2t})^2}
$$
