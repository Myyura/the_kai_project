---
sidebar_label: 2020年12月実施 ベクトル解析
tags:
  - Kyushu-University
  - Mathematics.Vector-Calculus.Plane-and-Distance-in-Three-Dimensional-Euclidean-Space
  - Mathematics.Vector-Calculus.Line-Integral
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2020年12月実施 ベクトル解析

## **Author**
Yu, 祭音Myyura

## **Description**
直交座標系において, $x,y,z$ 軸方向の単位ベクトルをそれぞれ $\mathbf{i},\mathbf{j},\mathbf{k}$ とする。次の各問に答えよ。

(1) $3$点 $(2,-6,2),(1,-10,-1)$ および $(-1,2,3)$ が決定する平面と点 $(2,-2,-2)$ との距離を求めよ。

(2) ベクトル場 $\mathbf{F}$ を $\mathbf{F} = \big(-\frac{xy}{4}\big)\mathbf{i} + (z - x)\mathbf{j} + (x + y)\mathbf{k}$ とする。曲線 $C:x = \frac{y^2}{8},y = -z$ に沿って, $(0,0,0)$ から $\big(\frac{9}{2},6,-6\big)$ までの線積分 $\int_{C} \mathbf{F} \times d \mathbf{r}$ を計算せよ。

### 题目描述

在直角坐标系中，$\mathbf i,\mathbf j,\mathbf k$ 分别为 $x,y,z$ 轴方向的单位向量。

1. 求由三点 $(2,-6,2)$、$(1,-10,-1)$、$(-1,2,3)$ 确定的平面与点 $(2,-2,-2)$ 之间的距离。
2. 给定向量场

   $$
   \mathbf F=-\frac{xy}{4}\mathbf i+(z-x)\mathbf j+(x+y)\mathbf k,
   $$

   沿曲线

   $$
   C:\ x=\frac{y^2}{8},\qquad y=-z
   $$

   从 $(0,0,0)$ 到 $(9/2,6,-6)$，计算线积分

   $$
   \int_C\mathbf F\times d\mathbf r.
   $$

## **Kai**
### (1)

$$
\begin{aligned}
\mathbf{v}_1 = \langle -1,-4,-3 &\rangle \quad \mathbf{v}_2 = \langle -3,8,1 \rangle \\
\mathbf{v}_1 \times \mathbf{v}_2&= \langle 20,10,-20 \rangle \\
\mathbf{n} &= \langle 2,1,-2 \rangle \\
2x + y &- 2z + d = 0\\
(2,-6,2)&\text{を代入して}, d=6\\
2x + y &- 2z + 6 = 0\\
\end{aligned} 
$$

$$
D = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}} = 4
$$

### (2)

曲線を $y=t$ で表すと、

$$
\mathbf r(t)=\left(\frac{t^2}{8},t,-t\right),\qquad
\mathbf r'(t)=\left(\frac t4,1,-1\right),\qquad 0\le t\le6.
$$

したがって、

$$
\begin{aligned}
\mathbf F(\mathbf r(t))
&=\left(-\frac{t^3}{32},-t-\frac{t^2}{8},t+\frac{t^2}{8}\right),\\
\mathbf F(\mathbf r(t))\times\mathbf r'(t)
&=\left(0,\frac{t^2}{4},\frac{t^2}{4}\right).
\end{aligned}
$$

よって、

$$
\boxed{\int_C\mathbf F\times d\mathbf r
=\int_0^6\left(0,\frac{t^2}{4},\frac{t^2}{4}\right)\,dt
=18\mathbf j+18\mathbf k.}
$$
