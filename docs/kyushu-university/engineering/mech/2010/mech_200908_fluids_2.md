---
sidebar_label: "2009年8月実施 問2（流れ学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Hydrostatics
---

# 九州大学 工学府 機械系専攻 2009年8月実施 流れ学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図aのように半径 $R$ の円筒容器中に密度 $\rho$ の水が入っており，この水面上に頂角 $\pi/2$ の直円錐体を浮かべる。直円錐体の頂点は水面より深さ $h$ だけ沈んでおり，かつ中心軸は鉛直方向を向いている。また水面は容器の底から $H$ の高さにある。重力加速度を $g$ として，以下の問に答えよ。（50点）

**(1)** 円錐体の質量 $M$ を求めよ。

**(2)** 円筒容器を中心軸まわりに一定角速度で回転させると，図bのように，直円錐体の中心軸から半径 $a$ の領域が水に浸かった。このときの回転の角速度 $\omega$ を求めよ。ただし，円筒容器の壁面近傍で水面の接線方向と水平面との成す角は $\pi/4$ を超えないものとする。

**(3)** (2)のとき，円筒容器壁面での水面高さ $H_r$ を求めよ。

![原題の図a・b：静止時と回転時の水面および円錐体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2010/mech_200908_fluids-2-original.png)

#### 题目描述

如图a所示，半径为 $R$ 的圆筒容器内装有密度为 $\rho$ 的水，水面上浮着一个顶角为 $\pi/2$ 的正圆锥体。圆锥顶点在水面下深度 $h$ 处，中心轴沿竖直方向。水面距容器底部的高度为 $H$。设重力加速度为 $g$，回答下列问题。（50分）

**(1)** 求圆锥体的质量 $M$。

**(2)** 使圆筒容器绕中心轴以恒定角速度旋转后，如图b所示，正圆锥体距中心轴半径 $a$ 以内的区域浸在水中。求此时的转动角速度 $\omega$。设圆筒容器壁面附近，水面的切线方向与水平面所成的角不超过 $\pi/4$。

**(3)** 在(2)的情况下，求圆筒容器壁面处的水面高度 $H_r$。

## **Kai**

### (1)

半頂角が $\pi/4$ なので、初期の浸水円錐の底面半径は $h$ である。浮力と重力の釣り合いから

$$
\boxed{M=\rho\frac{\pi h^3}{3}}.
$$

### (2)

容器底を基準とした自由表面の延長を $z_f(r)=z_0+kr^2$、$k=\omega^2/(2g)$ とする。円錐の頂点を $z_c$ とすると、円錐側面は $z_s=z_c+r$。$r=a$ で交わるので $z_0-z_c=a-ka^2$ である。

円錐側面の圧力は $p-p_a=\rho g(z_f-z_s)$ であり、その鉛直上向き成分を水平投影面上で積分すると

$$
\begin{aligned}
Mg&=2\pi\rho g\int_0^a r(z_f-z_s)\,dr\\
&=\rho g\left(\frac{\pi a^3}{3}-\frac{\pi ka^4}{2}\right).
\end{aligned}
$$

(1)を代入すると

$$
\boxed{\omega=\frac2{a^2}\sqrt{\frac{g(a^3-h^3)}3}}.
$$

実数解には $a\ge h$ が必要である。壁面勾配の条件は $2kR=\omega^2R/g\le1$ であり、$a<R$ と合わせて交点付近で円錐面より自由面が緩やかな条件を保証する。

### (3)

上の圧力積分を $\rho g$ で割った排除体積は、回転前後で同じ $M/\rho$ である。全水量も一定なので

$$
\begin{gathered}
\pi R^2H-\frac M\rho
=\int_0^R2\pi r(z_0+kr^2)\,dr-\frac M\rho,\\
z_0=H-\frac{kR^2}{2}.
\end{gathered}
$$

ゆえに

$$
\boxed{\begin{gathered}
H_r=z_0+kR^2\\
=H+\frac{\omega^2R^2}{4g}\\
=H+\frac{R^2(a^3-h^3)}{3a^4}
\end{gathered}}.
$$
