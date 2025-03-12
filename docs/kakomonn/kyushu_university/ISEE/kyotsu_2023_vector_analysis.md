---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2023年度 ベクトル解析
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2023年度 ベクトル解析

## **Author**
Yu

## **Description**
直交座標系において, $x,y,z$ 軸方向の単位ベクトルをそれぞれ $\mathbf{i,j,k}$ とする。ベクトル場 $\mathbf{F}$ を $\mathbf{F}=y\mathbf{i} - x\mathbf{j} + z\mathbf{k}$ とする。次の各問に答えよ。

(1) $C$ を $x^2 + y^2=4,z=0$ で定義される円とする。次に示す $C_1$ および $C_2$ に沿った線積分 $\int_{C_1} \mathbf{F} \cdot d\mathbf{r}$ および $\int_{C_2} \mathbf{F} \cdot d\mathbf{r}$ を求めよ。

$\quad$ (a) $C_1:C$ 上を点 $A(1,\sqrt{3},0)$ から点 $B(-\sqrt{3},1,0)$ まで反時計回り向かう曲線

$\quad$ (b) $C_2:C$ 上を点 $A(1,\sqrt{3},0)$ から点 $B(-\sqrt{3},1,0)$ まで時計回り向かう曲線　

(2) $S$ を半球面 $x^2 + y^2 + z^2 = 4 (0 \le z)$ と平面 $z = 0$ で囲まれた領域の境界とする。面積分 $\int_{S}\nabla \times \mathbf{F} \cdot d\mathbf{S}$ を求めよ。外向き法線ベクトルを用いよ。


## **Kai**
### (1)
#### (a)

$$
\begin{aligned}
x(t) &= 2\cos t\\
y(t) &= 2\sin t\\
\mathbf{r} = 2\cos t \mathbf{i} &+ 2\sin t \mathbf{j} \quad (\frac{\pi}{3} \le t \le \frac{5\pi}{6}) \\
d\mathbf{r} = \langle -2&\sin t,2\cos t,0 \rangle dt\\
\mathbf{F} \cdot d\mathbf{r} = \langle 2\sin t,-2\cos t,z \rangle \cdot \langle -2\sin t,2&\cos t,0\rangle dt = -4(\sin
^2t + \cos^2t)dt = -4dt\\
\int_{C_1} \mathbf{F} \cdot d \mathbf{r} = &-4\int_{\frac{\pi}{3}}^{\frac{5\pi}{6}}dt = -2\pi 
\end{aligned}
$$

#### (b)

$$
\int_{C_2}\mathbf{F} \cdot d\mathbf{r} = \int_{-C_1} \mathbf{F} \cdot d\mathbf{r} = -\int_{C_1} \mathbf{F} \cdot d \mathbf{r} =2\pi
$$

### (2)


$S$は、半球面$S_1:x^2+y^2+z^2=4,z\ge 0$と、円盤$S_2:x^2+y^2\le 4, z=0$に分け、境界$\partial S_1$は$x^2 + y^2 = 4,z = 0$で定義される円とする。

Stokes定理を用い、外向きなので反時計回りに境界をパラメータ化表示：

$$
\bold r (t) = (2\cos t, 2\sin t, 0), \, t\in[0,2\pi]
$$

微分すると、

$$
{\dd r\over \dd t} = (-2\sin t, 2\cos t, 0),
$$

つまり

$$
\dd r = {\dd r\over \dd t}\dd t = (-2\sin t, 2\cos t, 0)\dd t.
$$

ゆえに

$$
\begin{align*}
\int_{S_1} \nabla \times \mathbf{F} \cdot \dd \mathbf{S} & = \oint_{\partial S} \mathbf{F} \cdot \dd \mathbf{r} 
\\ & = \int_0^{2\pi} \bold F(\bold r(t))\cdot \dd bold r(t) 
\\ & = \int_0^{2\pi} (2\sin t, -2\cos t, 0)\cdot (-2\sin t, 2\cos t, 0)\dd t
\\ & = -4\int_{0}^{2\pi} \dd t 
\\ & = -8\pi
$$

$S_2$に関する面積分を求めるために、$\bold F$の回転を求める。

$$
\nabla \times \mathbf{F} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y & -x & z
\end{vmatrix} = \langle 0,0,-2 \rangle
$$

$$
\int_{S_2} \nabla \times \mathbf{F} \cdot d\mathbf{S} = \int_{S_2} \nabla \times \mathbf{F} \cdot \mathbf{n}dS
$$

$$
=\int_{S_2}\langle 0,0,-2\rangle \cdot \langle 0,0,-1\rangle dxdy
$$

$$
=\int_0^{2\pi}d\theta\int_0^2 2rdr = 8\pi
$$

$$
\int_{S} \nabla \times \mathbf{F} \cdot d\mathbf{S} = \int_{S_1} \nabla \times \mathbf{F} \cdot d\mathbf{S} + \int_{S_2} \nabla \times \mathbf{F} \cdot d \mathbf{S} = 0
$$
![image](https://github.com/user-attachments/assets/22b3e007-c837-403d-9756-76c917dc3770)
