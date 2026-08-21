---
sidebar_label: "2025年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$f(x,y) = \log(x^2 + y^2)$ ( $x, y > 0$ ) とする.

(1) 偏導関数 $\frac{\partial f}{\partial x}, \frac{\partial^2 f}{\partial x \partial y}$ を求めよ.

(2) $f(x,y)$ は $\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} = 0$ を満たすことを示せ.

### 题目描述

设

$$
f(x,y)=\log(x^2+y^2)\qquad(x,y>0).
$$

（1）求偏导数

$$
\frac{\partial f}{\partial x},
\qquad
\frac{\partial^2f}{\partial x\partial y}.
$$

（2）证明 $f(x,y)$ 满足

$$
\frac{\partial^2f}{\partial x^2}
+\frac{\partial^2f}{\partial y^2}=0.
$$

## **Kai**

(1)  $\frac{\partial f}{\partial x} = \frac{1}{x^2 + y^2} \cdot 2x = \frac{2x}{x^2 + y^2}$

$\frac{\partial f}{\partial y} = \frac{1}{x^2 + y^2} \cdot 2y = \frac{2y}{x^2 + y^2}$

$\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x} (\frac{2y}{x^2 + y^2}) = 2y \cdot \frac{-1}{(x^2 + y^2)^2} \cdot 2x = -\frac{4xy}{(x^2 + y^2)^2}$

(2) $\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x} (\frac{2x}{x^2 + y^2}) = 2 \cdot \frac{(x^2 + y^2) - x(2x)}{(x^2 + y^2)^2} = 2\frac{y^2 - x^2}{(x^2 + y^2)^2}$

$\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y} (\frac{2y}{x^2 + y^2}) = 2 \cdot \frac{(x^2 + y^2) - y(2y)}{(x^2 + y^2)^2} = 2\frac{x^2 - y^2}{(x^2 + y^2)^2}$

$\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} = 2\frac{y^2 - x^2}{(x^2 + y^2)^2} + 2\frac{x^2 - y^2}{(x^2 + y^2)^2} = 2\frac{y^2 - x^2 + x^2 - y^2}{(x^2 + y^2)^2} = 0$
