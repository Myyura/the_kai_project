---
sidebar_label: "2015年度入学 数学 問2（微分方程式）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2015年度入学 数学 問2（微分方程式）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

> 出典：九州大学[公式問題](https://www.isee.kyushu-u.ac.jp/script/wordpress/wp-content/uploads/H27infait.pdf)。

次の微分方程式を解け.

(1) $(2xy^3 - e^x \cos y)dx + (3x^2y^2 + e^x \sin y)dy = 0$

(2) $\left(y + \frac{-2y}{x^2 - y^2}\right)dx + \left(x + \frac{2x}{x^2 - y^2}\right)dy = 0$

### 题目描述

求下列两个一阶微分方程的通解：

1.

   $$
   (2xy^3-e^x\cos y)\,dx
   +(3x^2y^2+e^x\sin y)\,dy=0.
   $$

2.

   $$
   \left(y-\frac{2y}{x^2-y^2}\right)\,dx
   +\left(x+\frac{2x}{x^2-y^2}\right)\,dy=0.
   $$

## **Kai**

(1) Let $M(x,y) = 2xy^3 - e^x\cos y$ and $N(x,y) = 3x^2y^2 + e^x\sin y$ .

$$
\frac{\partial M}{\partial y} = 6xy^2 + e^x \sin y
$$

$$
\frac{\partial N}{\partial x} = 6xy^2 + e^x \sin y
$$

Since $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ , the equation is exact.
Then, we want to find a function $F(x,y)$ such that $\frac{\partial F}{\partial x} = M$ and $\frac{\partial F}{\partial y} = N$ .

$$
\frac{\partial F}{\partial x} = 2xy^3 - e^x\cos y
$$

$$
F(x,y) = \int (2xy^3 - e^x\cos y) dx = x^2y^3 - e^x\cos y + g(y)
$$

Now, differentiate $F(x,y)$ with respect to $y$ :

$$
\frac{\partial F}{\partial y} = 3x^2y^2 + e^x\sin y + g'(y) = N(x,y) = 3x^2y^2 + e^x\sin y
$$

Thus, $g'(y) = 0$ , which means $g(y) = C$ , where $C$ is a constant.
Therefore, the solution is $x^2y^3 - e^x\cos y = C$ .

(2) Let $M(x,y) = y - \frac{2y}{x^2 - y^2}$ and $N(x,y) = x + \frac{2x}{x^2 - y^2}$ .

$$
\frac{\partial M}{\partial y} = 1 - \frac{2(x^2 - y^2) - 2y(-2y)}{(x^2 - y^2)^2} = 1 - \frac{2x^2 - 2y^2 + 4y^2}{(x^2 - y^2)^2} = 1 - \frac{2x^2 + 2y^2}{(x^2 - y^2)^2}
$$

$$
\frac{\partial N}{\partial x} = 1 + \frac{2(x^2 - y^2) - 2x(2x)}{(x^2 - y^2)^2} = 1 + \frac{2x^2 - 2y^2 - 4x^2}{(x^2 - y^2)^2} = 1 - \frac{2x^2 + 2y^2}{(x^2 - y^2)^2}
$$

Since $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ , the equation is exact.
Then, we want to find a function $F(x,y)$ such that $\frac{\partial F}{\partial x} = M$ and $\frac{\partial F}{\partial y} = N$ .

$$
\frac{\partial F}{\partial x} = y - \frac{2y}{x^2 - y^2}
$$

$$
F(x,y) = \int \left(y - \frac{2y}{x^2 - y^2}\right) dx = xy - y\int \frac{2}{x^2 - y^2} dx = xy - y \int \frac{1}{y}\left(\frac{1}{x-y} - \frac{1}{x+y}\right) dx = xy - \ln|x-y| + \ln|x+y|
$$

$$
=xy-\ln|x-y|+\ln|x+y|+g(y)
=xy+\ln\left|\frac{x+y}{x-y}\right|+g(y).
$$

これを $y$ で微分すると

$$
\frac{\partial F}{\partial y}
=x+\frac{1}{x+y}+\frac{1}{x-y}+g'(y)
=x+\frac{2x}{x^2-y^2}+g'(y).
$$

$F_y=N$ と比較して $g'(y)=0$ である。したがって一般積分は

$$
\boxed{xy+\ln\left|\frac{x+y}{x-y}\right|=C},
$$

ただし元の方程式と対数が定義される $x^2\ne y^2$ の各領域で考える。
