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

$$
I = \int_0^{\sqrt{\pi}} \left\{ \int_x^{\sqrt{\pi}} y^2 \cos(xy) dy \right\} dx
$$

について考える。

(1) 累次積分 $I$ を2重積分

$$
\iint_D y^2 \cos(xy) dydx
$$

であらわすときの、積分領域 $D$ を求めよ。

(2) 積分の順序を変更して積分の値を求めよ。

### 题目描述

考虑累次积分

$$
I=\int_0^{\sqrt{\pi}}
\left\{\int_x^{\sqrt{\pi}}y^2\cos(xy)\,dy\right\}dx.
$$

（1）将 $I$ 写成二重积分

$$
\iint_Dy^2\cos(xy)\,dy\,dx
$$

时，求积分区域 $D$。

（2）交换积分次序，并求 $I$ 的值。

## **Kai**

(1) 積分領域 $D = \{(x, y) | 0 \leq x \leq \sqrt{\pi}, x \leq y \leq \sqrt{\pi} \}$ 。これは、 $0 \leq y \leq \sqrt{\pi}, 0 \leq x \leq y$ と書き換えられる。

(2) 積分の順序を変更すると、

$$
I = \int_0^{\sqrt{\pi}} \int_0^y y^2 \cos(xy) dx dy
$$

$$
= \int_0^{\sqrt{\pi}} y^2 \left[ \frac{\sin(xy)}{y} \right]_0^y dy
$$

$$
= \int_0^{\sqrt{\pi}} y \sin(y^2) dy
$$

$u = y^2$ とおくと、 $du = 2y dy$ より、 $y dy = \frac{1}{2} du$ 。また、 $y=0$ のとき、 $u=0$ 、 $y=\sqrt{\pi}$ のとき、 $u=\pi$ 。

$$
I = \int_0^{\pi} \sin(u) \frac{1}{2} du
$$

$$
= \frac{1}{2} \int_0^{\pi} \sin(u) du
$$

$$
= \frac{1}{2} [-\cos(u)]_0^{\pi}
$$

$$
= \frac{1}{2} [-\cos(\pi) + \cos(0)]
$$

$$
= \frac{1}{2} [-(-1) + 1]
$$

$$
= \frac{1}{2} (1 + 1)
$$

$$
= 1
$$

したがって、 $I = 1$ 。
