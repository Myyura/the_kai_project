---
sidebar_label: "2014年度入学 数学 問2（微分方程式）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---
# 九州大学 システム情報科学府 情報学専攻・情報知能工学専攻・電気電子工学専攻 共通 2014年度入学 数学 問2（微分方程式）

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の微分方程式の一般解を求めよ.なお, $y'$ は関数 $y(x)$ の $x$ に関する1階導関数を表している。

(1) $3y' + \frac{y}{x} = \frac{x}{y^2}$

(2) $y'' = \sqrt{4 + (y')^2}$

### 题目描述

求下列微分方程的通解，其中 $y'$ 表示函数 $y(x)$ 关于 $x$ 的一阶导数，$y''$ 表示二阶导数：

1.

   $$
   3y'+\frac{y}{x}=\frac{x}{y^2}.
   $$

2.

   $$
   y''=\sqrt{4+(y')^2}.
   $$

## **Kai**

(1) $3y' + \frac{y}{x} = \frac{x}{y^2}$
Let $u = y^3$ . Then $u' = 3y^2 y'$ , so $y' = \frac{u'}{3y^2}$ . Substituting into the equation, we have
$3(\frac{u'}{3y^2}) + \frac{y}{x} = \frac{x}{y^2}$
$\frac{u'}{y^2} + \frac{y}{x} = \frac{x}{y^2}$
Multiplying by $y^2$ , we get
$u' + \frac{y^3}{x} = x$
$u' + \frac{u}{x} = x$
This is a first-order linear ODE. Integrating factor is $\mu(x) = e^{\int \frac{1}{x} dx} = e^{\ln x} = x$ .
Multiplying by $x$ , we get
$xu' + u = x^2$
$\frac{d}{dx}(xu) = x^2$
Integrating both sides, we get
$xu = \int x^2 dx = \frac{x^3}{3} + C$
$u = \frac{x^2}{3} + \frac{C}{x}$
$y^3 = \frac{x^2}{3} + \frac{C}{x}$
$y = \sqrt[3]{\frac{x^2}{3} + \frac{C}{x}}$

(2) $y'' = \sqrt{4 + (y')^2}$
Let $v = y'$ . Then $v' = y''$ . So $v' = \sqrt{4 + v^2}$ .
$\frac{dv}{dx} = \sqrt{4 + v^2}$
$\int \frac{dv}{\sqrt{4 + v^2}} = \int dx$
$\sinh^{-1}(\frac{v}{2}) = x + C_1$
$\frac{v}{2} = \sinh(x + C_1)$
$v = 2\sinh(x + C_1)$
$y' = 2\sinh(x + C_1)$
$y = \int 2\sinh(x + C_1) dx = 2\cosh(x + C_1) + C_2$
