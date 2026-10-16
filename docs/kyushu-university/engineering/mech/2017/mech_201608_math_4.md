---
sidebar_label: "2016年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
---

# 九州大学 工学府 機械系専攻 2016年8月実施 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の図および関数により示される図形について、以下の問いに答えよ。（50点）

![原題のカージオイド](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_math-4-original.png)

$$
x=(1+\cos\theta)\cos\theta,\qquad y=(1+\cos\theta)\sin\theta.
$$

1. $r=f(\theta)$ で表される極方程式を求めよ。
2. この図形が囲む面積を求めよ。
3. この図形を $x$ 軸まわりに1回転して得られる回転体の体積を求めよ。
4. この図形の周長を求めよ。

#### 题目描述

给定心形线的参数方程，求极坐标方程、围成面积、绕 $x$ 轴旋转所得体积以及周长。

## **Kai**

### (1)

$1+\cos\theta\ge0$ より、$x=r\cos\theta$、$y=r\sin\theta$ と比較して

$$
\boxed{r=1+\cos\theta}\qquad(0\le\theta\le2\pi).
$$

### (2)

$$
\boxed{A=\frac12\int_0^{2\pi}(1+\cos\theta)^2d\theta=\frac{3\pi}{2}}.
$$

### (3)

上半平面内の領域を $x$ 軸のまわりに回転させる。円筒座標で、体積要素は $2\pi y\,dx\,dy$ である。極座標 $y=\rho\sin\theta$ を用いれば

$$
\begin{aligned}
V&=2\pi\int_0^\pi\int_0^{1+\cos\theta}\rho^2\sin\theta\,d\rho\,d\theta\\
&=\frac{2\pi}{3}\int_0^\pi(1+\cos\theta)^3\sin\theta\,d\theta
=\boxed{\frac{8\pi}{3}}.
\end{aligned}
$$

### (4)

$r'= -\sin\theta$ より

$$
\sqrt{r^2+(r')^2}=\sqrt{2+2\cos\theta}=2|\cos(\theta/2)|.
$$

従って $\boxed{L=\int_0^{2\pi}2|\cos(\theta/2)|\,d\theta=8}$。
