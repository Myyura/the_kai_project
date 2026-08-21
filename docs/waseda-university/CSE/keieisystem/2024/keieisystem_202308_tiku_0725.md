---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$xy$ 平面上の曲線 $x^3 + y^3 = 1$ の点 $\left( \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}} \right)$ における接線(tangent line)の方程式(equation)を求めよ。

### 题目描述

求平面曲线

$$
x^3+y^3=1
$$

在点

$$
\left(\frac1{\sqrt[3]{2}},\frac1{\sqrt[3]{2}}\right)
$$

处的切线方程。

## **Kai**

曲線を陰関数表示された関数として、微分して接線の傾きを求める。

$$
x^3 + y^3 = 1
$$

両辺を $x$ で微分すると、

$$
3x^2 + 3y^2\frac{dy}{dx} = 0
$$

$$
\frac{dy}{dx} = -\frac{x^2}{y^2}
$$

点 $\left( \frac{1}{\sqrt[3]{2}}, \frac{1}{\sqrt[3]{2}} \right)$ における接線の傾きは、

$$
\frac{dy}{dx} = -\frac{(\frac{1}{\sqrt[3]{2}})^2}{(\frac{1}{\sqrt[3]{2}})^2} = -1
$$

したがって、接線の方程式は、

$$
y - \frac{1}{\sqrt[3]{2}} = -1 \left( x - \frac{1}{\sqrt[3]{2}} \right)
$$

$$
y = -x + \frac{2}{\sqrt[3]{2}}
$$

$$
y = -x + 2^{2/3}
$$
