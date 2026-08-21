---
sidebar_label: "2020年8月実施 微分方程"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.Initial-Value-Problem
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2020年8月実施 微分方程

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

時間 $t$ の実関数 $x(t)$ に対して、

$$
\frac{d^2x}{dt^2} = -\frac{1}{2x^2} \qquad (1)
$$

が成り立つとき、次の問に答えよ。

1) 式 (1) の両辺に $2\frac{dx}{dt}$ を掛けた式から $\left(\frac{dx}{dt}\right)^2$ を与える式を求めよ。

2) $a$ を正定数として、初期条件が $x(0) = a$ および $\left(\frac{dx}{dt}\right)(0) = -\frac{1}{\sqrt{a}}$ のように与えられたときの $\frac{dx}{dt}$ を与える式を求めよ。

3) 2) の初期条件の下で、 $x$ が $a/2$ となるまでの時間を求めよ。

### 题目描述

实函数 $x(t)$ 满足

$$
\frac{d^2x}{dt^2}=-\frac1{2x^2}. \tag{1}
$$

1. 将式 (1) 两边同乘 $2\dfrac{dx}{dt}$，从所得等式导出一个给出 $\left(\dfrac{dx}{dt}\right)^2$ 的关系式；
2. 设 $a$ 为正常数，在初始条件

   $$
   x(0)=a,\qquad
   \left(\frac{dx}{dt}\right)(0)=-\frac1{\sqrt a}
   $$

   下，求给出 $\dfrac{dx}{dt}$ 的关系式；
3. 在第 2 问的初始条件下，求 $x$ 到达 $a/2$ 所需的时间。

## **Kai**

1) $ \frac{d^2x}{dt^2} = -\frac{1}{2x^2} $ に $ 2 \frac{dx}{dt} $ を掛けると、

$$
2 \frac{dx}{dt} \frac{d^2x}{dt^2} = - \frac{1}{x^2} \frac{dx}{dt}
$$

$$
\frac{d}{dt} \left( \frac{dx}{dt} \right)^2 = \frac{d}{dt} \left( \frac{1}{x} \right)
$$

積分して、

$$
\left( \frac{dx}{dt} \right)^2 = \frac{1}{x} + C
$$

2) 初期条件 $ x(0) = a $ , $ \frac{dx}{dt}(0) = -\frac{1}{\sqrt{a}} $ を代入すると、

$$
\left( -\frac{1}{\sqrt{a}} \right)^2 = \frac{1}{a} + C
$$

$$
\frac{1}{a} = \frac{1}{a} + C \Rightarrow C = 0
$$

よって、

$$
\left( \frac{dx}{dt} \right)^2 = \frac{1}{x}
$$

$$
\frac{dx}{dt} = -\frac{1}{\sqrt{x}}
$$

(初期条件より負)

3) $ \frac{dx}{dt} = -\frac{1}{\sqrt{x}} $ を解くと、

$$
\sqrt{x} dx = -dt
$$

積分して、

$$
\int_{a}^{a/2} \sqrt{x} dx = \int_0^t -dt
$$

$$
\left[ \frac{2}{3} x^{\frac{3}{2}} \right]_{a}^{a/2} = -t
$$

$$
t = \frac{2}{3} \left( a^{\frac{3}{2}} - \left( \frac{a}{2} \right)^{\frac{3}{2}} \right)
$$

$$
t = \frac{2}{3} a^{\frac{3}{2}} \left( 1 - \frac{1}{2\sqrt{2}} \right)
$$

$$
t = \frac{2}{3} a^{\frac{3}{2}} \left( 1 - \frac{\sqrt{2}}{4} \right)
$$

$$
t = \frac{2}{3} a^{\frac{3}{2}} \left( \frac{4 - \sqrt{2}}{4} \right)
$$

$$
t = \frac{4 - \sqrt{2}}{6} a^{\frac{3}{2}}
$$
