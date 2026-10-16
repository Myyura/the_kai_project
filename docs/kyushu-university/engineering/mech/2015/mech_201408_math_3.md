---
sidebar_label: "2014年8月実施 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
---

# 九州大学 工学府 機械系専攻 2014年8月実施 数学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問いに答えよ。（50点）

1. 領域 $D=\{(x,y)\mid1\le x^2+y^2\le4,\ x\ge0,\ y\ge0\}$ を図示せよ。
2. 上記領域 $D$ において、$0\le x\le1$ を満たす領域を $D_1$ とする。このとき $\iint_{D_1}xy\,dx\,dy$ を計算せよ。
3. 積分領域を $D$ とし、$\iint_D(x^2+y^2)^{-1}\,dx\,dy$ を計算せよ。

#### 题目描述

画第一象限的四分之一圆环，计算其左侧 $0\le x\le1$ 子区域上的 $xy$ 积分，以及整个圆环上的 $(x^2+y^2)^{-1}$ 积分。

## **Kai**

### (1)

$D$ は第1象限の半径1と2の円弧に挟まれた閉領域である。

![四分の一円環とD1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_math-3-region.svg)

### (2)

$$
\begin{aligned}
\iint_{D_1}xy\,dx\,dy
&=\int_0^1\int_{\sqrt{1-x^2}}^{\sqrt{4-x^2}}xy\,dy\,dx\\
&=\int_0^1\frac x2\{(4-x^2)-(1-x^2)\}\,dx
=\boxed{\frac34}.
\end{aligned}
$$

### (3)

$x=\rho\cos\theta,y=\rho\sin\theta$ と変換すると

$$
\iint_D\frac{dx\,dy}{x^2+y^2}
=\int_0^{\pi/2}\int_1^2\frac{\rho\,d\rho\,d\theta}{\rho^2}
=\boxed{\frac\pi2\log2}.
$$
