---
sidebar_label: "2013年度 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Constrained-Optimization
---

# 九州大学 工学府 機械系専攻 2013年度 数学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問いに答えよ。（50点）

1. $D=\{(x,y)\mid x^2+4y^2\le4,\ x\ge0,\ y\ge0\}$ とするとき、領域 $D$ を図示せよ。
2. $z=x+y$ とする。領域 $D$ における $z$ の最大値と、そのときの座標値 $(x,y)$ を求めよ。
3. $V=\iint_D(x+y)\,dx\,dy$ を計算せよ。
4. $V$ は領域 $D$ を底面とする立体の体積を表す。この立体の形状を3次元的に分かりやすく図示せよ。図には $x,y,z$ 軸と主要な座標値を記入せよ。

#### 题目描述

画出第一象限中的四分之一椭圆域，求 $x+y$ 在其中的最大值及最大点，计算该函数在域上的积分，并画出对应立体及主要坐标。

## **Kai**

### (1)

$D$ は $x^2/4+y^2\le1$ の第一象限部分で、境界を含む。軸との交点は $(2,0)$、$(0,1)$ である。

![楕円領域とその上の立体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/math-3-region-solid.svg)

### (2)

Cauchy–Schwarz の不等式より

$$
x+y=2\frac x2+y\le\sqrt{2^2+1^2}\sqrt{\frac{x^2}4+y^2}\le\sqrt5.
$$

等号は $(x/2,y)$ が $(2,1)$ に比例し、楕円上にあるときに成立する。したがって

$$
\boxed{z_{\max}=\sqrt5,\qquad (x,y)=\left(\frac4{\sqrt5},\frac1{\sqrt5}\right)}.
$$

### (3)

$x=2\rho\cos\theta$、$y=\rho\sin\theta$ とおくと、$0\le\rho\le1$、$0\le\theta\le\pi/2$、Jacobian は $2\rho$ である。

$$
\boxed{V=\int_0^{\pi/2}\int_0^1
(2\rho\cos\theta+\rho\sin\theta)2\rho\,d\rho\,d\theta
=\frac23(2+1)=2}.
$$

### (4)

立体は

$$
\boxed{\{(x,y,z)\mid (x,y)\in D,\ 0\le z\le x+y\}}
$$

である。上図の右に示すように、底面は $z=0$、上面は平面 $z=x+y$、側面の一つは楕円柱 $x^2+4y^2=4$ の一部となる。主要点は底面の $(0,0,0),(2,0,0),(0,1,0)$ と、上面の $(2,0,2),(0,1,1)$ である。上面の最高点は $(4/\sqrt5,1/\sqrt5,\sqrt5)$。
