---
sidebar_label: "2012年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Cylindrical-Couette-Flow
---

# 九州大学 工学府 機械系専攻 2012年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

十分に長い同心二重円筒の間を粘性係数 $\mu$ の非圧縮性流体が満たしている。外円筒は静止し、内円筒は一定角速度 $\omega$ で回転する。軸は鉛直方向で、内半径 $R_1$ は既知、外半径 $R_2$ は未知である。内円筒の回転に必要な軸動力は単位長さ当たり $L$ である。

流れは定常、十分発達した軸対称層流で、周方向速度 $V_\theta$ のみを持つ。（50点）

1. 微小流体の周方向の力の釣り合いが $d\tau/dr+2\tau/r=0$ で表されることを示せ。$\tau$ はせん断応力、$r$ は中心軸からの半径である。
2. $\tau(r)$ を $r,\omega,L$ で表せ。
3. $R_2$ を $R_1,\omega,L,\mu$ で表せ。ただし $\tau=\mu r\,d(V_\theta/r)/dr$ を用いてよい。


#### 题目描述

同轴长圆筒间充满黏度 $\mu$ 的流体，外筒静止，半径 $R_1$ 的内筒以角速度 $\omega$ 转动，维持运动所需单位长度轴功率为 $L$。轴线竖直，定常充分发展的轴对称层流仅有周向速度。证明应力方程，求径向剪应力分布，并反求未知外半径 $R_2$。题目给定带符号的应力关系 $\tau=\mu r\,d(V_\theta/r)/dr$。

## **Kai**

### (1)

半径 $r$ と $r+dr$ の同心円筒面を考える。角運動量流束はなく、単位長さ当たりの粘性トルクが半径によらず一定なので

$$
\frac{d}{dr}(2\pi r^2\tau)=0,
\qquad \boxed{\frac{d\tau}{dr}+\frac{2\tau}{r}=0}.
$$

### (2)

$\omega>0$ の方向を周方向の正とする。外円筒が静止するため、角速度 $V_\theta/r$ は外向きに減少し、問題の定義では $\tau<0$ である。内円筒が受ける抵抗トルクは $2\pi R_1^2\tau(R_1)$ だから

$$
L=-2\pi R_1^2\tau(R_1)\omega,
\qquad \boxed{\tau(r)=-\frac{L}{2\pi\omega r^2}}.
$$

応力の大きさだけなら $|\tau|=L/(2\pi\omega r^2)$ である。

### (3)

与えられた関係に (2) を代入して

$$
\frac{d}{dr}\left(\frac{V_\theta}{r}\right)
=-\frac{L}{2\pi\mu\omega r^3}.
$$

無滑り条件 $V_\theta(R_1)=\omega R_1$、$V_\theta(R_2)=0$ の間で積分すると

$$
-\omega=\frac{L}{4\pi\mu\omega}
\left(\frac1{R_2^2}-\frac1{R_1^2}\right).
$$

したがって

$$
\boxed{R_2=R_1\sqrt{\frac{L}{L-4\pi\mu\omega^2R_1^2}}}.
$$

有限の $R_2>R_1$ を持つための条件は $L>4\pi\mu\omega^2R_1^2$ である。等号では $R_2\to\infty$、それより小さい動力ではこの定常層流モデルを満たす外半径は存在しない。
