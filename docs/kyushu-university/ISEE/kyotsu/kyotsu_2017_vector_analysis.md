---
sidebar_label: "2017年度 ベクトル解析"
sidebar_position: 26
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2017年度 ベクトル解析 


## **Author**
Zero

## **Description**
次の各問に答えよ．ただし $(x, y, z)$ は三次元空間の直交座標を表す.

(1) スカラー場 $\phi = x^2yz^3 + xy^2z$ について，点 $(1,3,2)$ における $\nabla \cdot (\nabla \cdot \phi)$ を計算せよ．

(2) スカラー場 $V = xyz$ について，次の面 $S$ に対する $V$ の面積分を計算せよ．

$$
S: x^2 + y^2 = 4,x \ge 0,y \ge 0, 3 \ge z \ge 0
$$

## **Kai** 
### (1)
$\phi = x^2yz^3 + xy^2z$ 点 $(1,3,2)$ における $\nabla \cdot (\nabla \cdot \phi)$

$$
\begin{aligned}
\nabla \cdot (\nabla \cdot \phi) &= \nabla \cdot (\frac{\partial \phi}{\partial x},\frac{\partial \phi}{\partial y},\frac{\partial \phi}{\partial z}) \\
&= \frac{\partial ^2\phi}{\partial x^2} + \frac{\partial ^2\phi}{\partial y^2} + \frac{\partial ^2\phi}{\partial z^2} \\
&= 2yz^3 + 2xz + 6x^yz \\
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
r_\theta \times r_z = 2
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

