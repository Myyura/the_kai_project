---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) $xy$ 平面上の閉領域 $D$ を $D = \{(x, y) | x \leq 1, y \geq 0, y \leq x\}$ とする. 2重積分

$$
I = \iint_D (x^2 + xy + y^2) dxdy
$$

の値を求めよ。

(2) 累次積分

$$
J = \int_0^1 \left( \int_y^1 x^2 e^{xy} dx \right) dy
$$

の値を求めよ。

### 题目描述

（1）在 $xy$ 平面上定义闭区域

$$
D=\{(x,y)\mid x\le1,\ y\ge0,\ y\le x\}.
$$

求二重积分

$$
I=\iint_D(x^2+xy+y^2)\,dx\,dy
$$

的值。

（2）求累次积分

$$
J=\int_0^1\left(\int_y^1x^2e^{xy}\,dx\right)dy
$$

的值。

## **Kai**

(1) 首先确定积分区域 $D = \{(x, y) | x \leq 1, y \geq 0, y \leq x\}$ . 即 $0 \leq y \leq x, 0 \leq x \leq 1$ .
所以，

$$
I = \int_0^1 \int_0^x (x^2 + xy + y^2) dy dx = \int_0^1 \left[ x^2y + \frac{1}{2}xy^2 + \frac{1}{3}y^3 \right]_0^x dx
$$

$$
= \int_0^1 \left( x^3 + \frac{1}{2}x^3 + \frac{1}{3}x^3 \right) dx = \int_0^1 \frac{11}{6} x^3 dx = \frac{11}{6} \left[ \frac{1}{4} x^4 \right]_0^1 = \frac{11}{24}.
$$

(2)

$$
J = \int_0^1 \int_y^1 x^2 e^{xy} dx dy
$$

改变积分顺序，得到 $D = \{(x, y) | 0 \leq y \leq x, 0 \leq x \leq 1\}$ .

$$
J = \int_0^1 \int_0^x x^2 e^{xy} dy dx = \int_0^1 x^2 \left[ \frac{e^{xy}}{x} \right]_0^x dx = \int_0^1 x(e^{x^2} - 1) dx = \int_0^1 (xe^{x^2} - x) dx
$$

$$
= \left[ \frac{1}{2}e^{x^2} - \frac{1}{2}x^2 \right]_0^1 = \frac{1}{2}e - \frac{1}{2} - \frac{1}{2} = \frac{e-2}{2}.
$$
