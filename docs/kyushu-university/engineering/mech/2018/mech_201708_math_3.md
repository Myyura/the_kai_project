---
sidebar_label: "2018年度 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
---

# 九州大学 工学府 機械系専攻 2018年度 数学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

右図のように、$XY$ 平面内に、ともに半径が1である2つの円 $C_1,C_2$ があり、中心の座標がそれぞれ $(0,0),(0,1)$ であるとする。このとき、以下の問いに答えよ。（50点）

![原題の二円と斜線領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/math-3-original.png)

1. 2つの円の交点を $P$ とするとき、$y$ 軸と $OP$ とのなす角 $\theta$ を求めよ。
2. 斜線で示した領域の面積 $S_0$ を求めよ。

次に、斜線で示した領域を $y$ 軸のまわりに回転させることによってできる空間図形について考える。

3. この空間図形の体積 $V_0$ を求めよ。
4. 太い実線で表される表面の面積 $S_1$ を求めよ。

#### 题目描述

两个单位圆的圆心分别为 $(0,0)$ 与 $(0,1)$。求交点方向与 $y$ 轴夹角及图中上圆内、下圆外的面积；再求该区域绕 $y$ 轴旋转所得体积，以及原图粗实线所对应的外表面积。

## **Kai**

### (1)

円の式 $x^2+y^2=1$、$x^2+(y-1)^2=1$ から、右側の交点は $P=(\sqrt3/2,1/2)$。$OP=1$ より

$$
\boxed{\theta=\arccos\frac12=\frac\pi3}.
$$

### (2)

2円の重なりは、中心角 $2\pi/3$ の扇形から正三角形を引いた部分の2個分。したがって

$$
S_0=\pi-2\left(\frac\pi3-\frac{\sqrt3}{4}\right)
=\boxed{\frac\pi3+\frac{\sqrt3}{2}}.
$$

### (3)

$1/2\le y\le1$ では断面は環であり、その面積は
$\pi\{1-(y-1)^2-(1-y^2)\}=\pi(2y-1)$。
$1\le y\le2$ では半径 $\sqrt{1-(y-1)^2}$ の円板である。よって

$$
V_0=\pi\int_{1/2}^1(2y-1)dy
+\pi\int_1^2\{1-(y-1)^2\}dy
=\boxed{\frac{11\pi}{12}}.
$$

### (4)

太い実線は $C_2$ の $y\ge1/2$ の円弧であり、回転すると半径1、高さ $2-1/2=3/2$ の球冠になる。従って

$$
\boxed{S_1=2\pi\cdot1\cdot\frac32=3\pi}.
$$

直接計算しても、$x=\sqrt{1-(y-1)^2}$ から $x\sqrt{1+(dx/dy)^2}=1$ なので、$S_1=2\pi\int_{1/2}^2dy$ となる。
