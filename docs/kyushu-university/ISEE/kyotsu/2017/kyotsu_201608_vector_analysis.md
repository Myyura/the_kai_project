---
sidebar_label: 2016年8月実施 ベクトル解析
tags:
  - Kyushu-University
  - Mathematics.Vector-Calculus.Laplacian
  - Mathematics.Vector-Calculus.Surface-Integral
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2016年8月実施 ベクトル解析 


## **Author**
Zero, 祭音Myyura

## **Description**

> 出典：九州大学[公式問題](https://web.archive.org/web/20211018003806id_/https://www.isee.kyushu-u.ac.jp/script/wordpress/wp-content/uploads/H29infait.pdf#page=5)。
次の各問に答えよ．ただし $(x, y, z)$ は三次元空間の直交座標を表す.

(1) スカラー場 $\phi = x^2yz^3 + xy^2z$ について，点 $(1,3,2)$ における $\nabla \cdot (\nabla \phi)$ を計算せよ．

(2) スカラー場 $V = xyz$ について，次の面 $S$ に対する $V$ の面積分を計算せよ．

$$
S: x^2 + y^2 = 4,x \ge 0,y \ge 0, 3 \ge z \ge 0
$$

### 题目描述

以下 $(x,y,z)$ 表示三维空间的直角坐标。

1. 对标量场

   $$
   \phi=x^2yz^3+xy^2z,
   $$

   计算其拉普拉斯算子 $\nabla\cdot(\nabla\phi)$ 在点 $(1,3,2)$ 处的值。
2. 对标量场 $V=xyz$，计算其在四分之一圆柱侧面

   $$
   S:\ x^2+y^2=4,\quad x\ge0,\quad y\ge0,\quad0\le z\le3
   $$

   上的面积分 $\int_S V\,dS$。

## **Kai** 
### (1)
$\phi = x^2yz^3 + xy^2z$ の点 $(1,3,2)$ における $\nabla \cdot (\nabla \phi)$

$$
\begin{aligned}
\nabla \cdot (\nabla \phi) &= \nabla \cdot (\frac{\partial \phi}{\partial x},\frac{\partial \phi}{\partial y},\frac{\partial \phi}{\partial z}) \\
&= \frac{\partial ^2\phi}{\partial x^2} + \frac{\partial ^2\phi}{\partial y^2} + \frac{\partial ^2\phi}{\partial z^2} \\
&= 2yz^3 + 2xz + 6x^2yz \\
&= 88
\end{aligned}
$$

### (2)

$$
0 \le \theta \le \frac{\pi}{2},0 \le z \le 3
$$

$$
\begin{aligned}
&x = 2\cos\theta,y = 2\sin\theta,z = z \\
&r = (2\cos\theta,2\sin\theta,z) \\
&r_{\theta} = (-2\sin\theta,2\cos\theta,0) \\
&r_z = (0,0,1)
\end{aligned}
$$

$$
r_\theta \times r_z = 
\begin{vmatrix}
i & j & k \\
-2\sin\theta & 2\cos\theta & 0 \\
0 & 0 & 1
\end{vmatrix} = 2\cos\theta i + 2\sin\theta j
$$

$$
\left|r_\theta \times r_z\right| = 2
$$

$$
\begin{aligned}
V &= (2\cos\theta) \cdot (2\sin\theta) \cdot z \\
&= 4\sin\theta \cos\theta z \\
&= 2z\sin2\theta
\end{aligned}
$$

$$
\begin{aligned}
\int_S V d S &= \int_0^3 dz \int_0^{\frac{\pi}{2}}2z \sin2\theta \cdot |r_\theta \times r_z|d\theta \\
&= \int_0^3 dz \int_0^{\frac{\pi}{2}}4z\sin2\theta d\theta \\
&= \int_0^3 dz \bigg[-2z\cos2\theta\bigg]_0^{\frac{\pi}{2}} \\
&= \int_0^3 dz (4z) \\
&= \big[2z^2\big]_0^3 \\
&= 18
\end{aligned}
$$
