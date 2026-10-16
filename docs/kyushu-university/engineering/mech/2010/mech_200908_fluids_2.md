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

半径 $R$ の円筒容器に密度 $\rho$ の水があり、頂角 $\pi/2$ の直円錐体が浮いている。円錐の頂点は水面から深さ $h$ にあり、中心軸は鉛直を向く。水面高さは容器底面から $H$ である。重力加速度を $g$ とする。（50点）

1. 円錐体の質量 $M$ を求めよ。
2. 容器を中心軸まわりに一定角速度で回転させると、図bのように円錐体の軸から半径 $a$ の領域が水に浸かった。このときの角速度 $\omega$ を求めよ。容器壁付近における水面の接線と水平面との角度は $\pi/4$ を超えない。
3. (2)のとき、容器壁での水面高さ $H_r$ を求めよ。

![原題の図（九州大学 2010年度 流れ学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2010/mech_200908_fluids-2-original.png)

#### 题目描述

半径 $R$ 的圆筒内盛密度 $\rho$ 的水，顶角 $\pi/2$ 的圆锥尖端朝下漂浮，尖端浸深 $h$，初始液面高 $H$。求圆锥质量；旋转圆筒后，圆锥的浸水区域扩至半径 $a$，求转速与壁面液面高度。壁面处自由面切线与水平夹角不超过 $\pi/4$。

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
\pi R^2H-\frac M\rho
=\int_0^R2\pi r(z_0+kr^2)\,dr-\frac M\rho,
\qquad z_0=H-\frac{kR^2}{2}.
$$

ゆえに

$$
\boxed{H_r=z_0+kR^2
=H+\frac{\omega^2R^2}{4g}
=H+\frac{R^2(a^3-h^3)}{3a^4}}.
$$
