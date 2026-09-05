---
sidebar_label: "2025年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura


## **Description**

(1) $xy$ 平面上の閉領域 $D$ を, $D = \{(x,y) | y \geq 0, x^2 + y^2 \leq 2x\}$ とする。
$D$ を $xy$ 平面上に図示せよ.

(2) 2 重積分

$$
I = \iint_D y^3 dxdy
$$

の値を求めよ.

### 题目描述

（1）在 $xy$ 平面上定义闭区域

$$
D=\{(x,y)\mid y\ge0,\ x^2+y^2\le2x\}.
$$

在 $xy$ 平面上画出 $D$。

（2）求二重积分

$$
I=\iint_Dy^3\,dx\,dy
$$

的值。

## **Kai**

解 (1) 領域 $D$ は $y \geq 0$ かつ $x^2 + y^2 \leq 2x$ , すなわち $(x-1)^2 + y^2 \leq 1$ を満たす領域である。よって， $D$ は中心 $(1, 0)$ , 半径 $1$ の円の下半分を除いた領域である。

![積分領域の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/hosei_university/science_and_engineering/systems_engineering/management_systems/2026/hosei-2025-upper-disk.svg)

(2) $x = r\cos\theta + 1$ , $y = r\sin\theta$ とおく。ただし、 $0 \leq r \leq 1$ かつ $0 \leq \theta \leq \pi$ 。 ヤコビアンは $r$ である。したがって、

$$
I = \iint_D y^3 dxdy = \int_0^1 \int_0^{\pi} (r\sin\theta)^3 r d\theta dr = \int_0^1 r^4 dr \int_0^{\pi} \sin^3\theta d\theta
$$

$$
\int_0^1 r^4 dr = \frac{1}{5} r^5 |_0^1 = \frac{1}{5}
$$

$$
\int_0^{\pi} \sin^3\theta d\theta = \int_0^{\pi} \sin\theta (1-\cos^2\theta) d\theta = [-\cos\theta + \frac{1}{3}\cos^3\theta]_0^{\pi} = (1 - \frac{1}{3}) - (-1 + \frac{1}{3}) = 2 - \frac{2}{3} = \frac{4}{3}
$$

よって、

$$
I = \frac{1}{5} \times \frac{4}{3} = \frac{4}{15}
$$
