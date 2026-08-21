---
sidebar_label: "2014年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

関数(function) $f(x,y) = \cos{\frac{y}{x}}$ に対して、次式の関係が成り立つことを示せ。

$$
x\frac{\partial f(x,y)}{\partial x} + y\frac{\partial f(x,y)}{\partial y} = x^2\frac{\partial^2 f(x,y)}{(\partial x)^2} + 2xy\frac{\partial^2 f(x,y)}{\partial x\partial y} + y^2\frac{\partial^2 f(x,y)}{(\partial y)^2}
$$

### 题目描述

对于函数

$$
f(x,y)=\cos\frac{y}{x}\qquad(x\neq0),
$$

证明

$$
x\frac{\partial f(x,y)}{\partial x}
+y\frac{\partial f(x,y)}{\partial y}
=x^2\frac{\partial^2f(x,y)}{(\partial x)^2}
+2xy\frac{\partial^2f(x,y)}{\partial x\partial y}
+y^2\frac{\partial^2f(x,y)}{(\partial y)^2}.
$$

## **Kai**

Let's verify the given relation.

First, compute the first-order partial derivatives:

$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x} \cos(\frac{y}{x}) = -\sin(\frac{y}{x}) \cdot (-\frac{y}{x^2}) = \frac{y}{x^2}\sin(\frac{y}{x})$

$\frac{\partial f}{\partial y} = \frac{\partial}{\partial y} \cos(\frac{y}{x}) = -\sin(\frac{y}{x}) \cdot (\frac{1}{x}) = -\frac{1}{x}\sin(\frac{y}{x})$

Next, compute the second-order partial derivatives:

$\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x} (\frac{y}{x^2}\sin(\frac{y}{x})) = y[\frac{-2}{x^3}\sin(\frac{y}{x}) + \frac{1}{x^2}\cos(\frac{y}{x})(-\frac{y}{x^2})] = \frac{-2y}{x^3}\sin(\frac{y}{x}) - \frac{y^2}{x^4}\cos(\frac{y}{x})$

$\frac{\partial^2 f}{\partial x\partial y} = \frac{\partial}{\partial x} (-\frac{1}{x}\sin(\frac{y}{x})) = -[-\frac{1}{x^2}\sin(\frac{y}{x}) + \frac{1}{x}\cos(\frac{y}{x})(-\frac{y}{x^2})] = \frac{1}{x^2}\sin(\frac{y}{x}) + \frac{y}{x^3}\cos(\frac{y}{x})$

$\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y} (-\frac{1}{x}\sin(\frac{y}{x})) = -\frac{1}{x}\cos(\frac{y}{x})\cdot \frac{1}{x} = -\frac{1}{x^2}\cos(\frac{y}{x})$

Now, substitute these into the given equation:

$x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = x(\frac{y}{x^2}\sin(\frac{y}{x})) + y(-\frac{1}{x}\sin(\frac{y}{x})) = \frac{y}{x}\sin(\frac{y}{x}) - \frac{y}{x}\sin(\frac{y}{x}) = 0$

$x^2\frac{\partial^2 f}{\partial x^2} + 2xy\frac{\partial^2 f}{\partial x\partial y} + y^2\frac{\partial^2 f}{\partial y^2} = x^2(\frac{-2y}{x^3}\sin(\frac{y}{x}) - \frac{y^2}{x^4}\cos(\frac{y}{x})) + 2xy(\frac{1}{x^2}\sin(\frac{y}{x}) + \frac{y}{x^3}\cos(\frac{y}{x})) + y^2(-\frac{1}{x^2}\cos(\frac{y}{x}))$

$= \frac{-2y}{x}\sin(\frac{y}{x}) - \frac{y^2}{x^2}\cos(\frac{y}{x}) + \frac{2y}{x}\sin(\frac{y}{x}) + \frac{2y^2}{x^2}\cos(\frac{y}{x}) - \frac{y^2}{x^2}\cos(\frac{y}{x}) = 0$

Since both sides are equal to 0, the given relation holds.
