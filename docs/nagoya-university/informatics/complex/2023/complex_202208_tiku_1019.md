---
sidebar_label: "2022年8月実施 微分方程"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 微分方程

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の微分方程式の一般解を求めよ。

1) $y'' + 4y' + 4y = 0$

2) $y'' - 3y' + 2y = e^x$

### 题目描述

求下列微分方程的通解。

1. 求解：

   $$
   y''+4y'+4y=0;
   $$

2. 求解：

   $$
   y''-3y'+2y=e^x.
   $$

## **Kai**

1) $y'' + 4y' + 4y = 0$

Characteristic equation: $r^2 + 4r + 4 = 0$

$(r+2)^2 = 0$

$r = -2$ (repeated root)

General solution: $y(x) = c_1 e^{-2x} + c_2 x e^{-2x}$

2) $y'' - 3y' + 2y = e^x$

Homogeneous equation: $y'' - 3y' + 2y = 0$

Characteristic equation: $r^2 - 3r + 2 = 0$

$(r-1)(r-2) = 0$

$r = 1, 2$

Homogeneous solution: $y_h(x) = c_1 e^x + c_2 e^{2x}$

Particular solution: $y_p(x) = Axe^x$

$y_p'(x) = Ae^x + Axe^x$

$y_p''(x) = Ae^x + Ae^x + Axe^x = 2Ae^x + Axe^x$

Substitute into the original equation:

$(2Ae^x + Axe^x) - 3(Ae^x + Axe^x) + 2(Axe^x) = e^x$

$2Ae^x + Axe^x - 3Ae^x - 3Axe^x + 2Axe^x = e^x$

$-Ae^x = e^x$

$A = -1$

$y_p(x) = -xe^x$

General solution: $y(x) = y_h(x) + y_p(x) = c_1 e^x + c_2 e^{2x} - xe^x$
