---
sidebar_label: "2011年8月実施 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2011年8月実施 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問に答えよ。（40点）

図5のように $x\to y\to x$ 方向に直角に折れ曲がった丸棒のはりの先端Dに垂直方向の荷重 $P$ とねじりモーメント $T$ が作用するとき，D点の $yz$ 平面内角度変化（ねじれ角）$\theta$ と $z$ 方向変位 $\delta_z$ を求めよ。ただし，丸棒ABCDの直径を $d$，ヤング率を $E$，ポアソン比を $\nu$ とする。

![原題の図5：直角に折れ曲がった丸棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_material-4-original.png)

図中の各区間の長さは $AB=a$，$BC=b$，$CD=c$ であり，A端は固定されている。

#### 题目描述

回答下列问题。（40分）

如图5，圆截面梁按 $x\to y\to x$ 方向连续直角弯折，端点D承受竖直载荷 $P$ 与扭矩 $T$。求D点在 $yz$ 平面内的角度变化（扭转角）$\theta$，以及 $z$ 方向位移 $\delta_z$。圆杆ABCD直径为 $d$，杨氏模量为 $E$，泊松比为 $\nu$。

图中 $AB=a$、$BC=b$、$CD=c$，A端固定；坐标、载荷及扭矩方向如图。

## **Kai**

$+z$ は図の上向きとする。ここでは、$T>0$ および $\theta>0$ を $-x$ 軸まわり、すなわち荷重 $P$ が AB に生じさせるねじりと同じ向きに定義する。逆向きのトルクには $T<0$ を代入すればよい。下向き変位の大きさを $w=-\delta_z$ とおく。

$$
\begin{gathered}
I=\frac{\pi d^4}{64},\\
I_p=2I,\\
G=\frac{E}{2(1+\nu)},\\
GI_p=\frac{EI}{1+\nu}.
\end{gathered}
$$

### 各部材の内力とひずみエネルギー

各部材の始点からの座標を $s$ とする。曲げ・ねじりモーメントの大きさは

| 部材 | 曲げモーメント | ねじりモーメント |
|---|---|---|
| AB | $P(a+c-s)$ | $T+Pb$ |
| BC | $T+P(b-s)$ | $Pc$ |
| CD | $P(c-s)$ | $T$ |

したがって

$$
\begin{aligned}
U={}&\frac{P^2}{2EI}\left[
\int_0^a(a+c-s)^2\,ds+\int_0^c(c-s)^2\,ds\right]\\
&+\frac1{2EI}\int_0^b\{T+P(b-s)\}^2\,ds\\
&+\frac{a(T+Pb)^2+bP^2c^2+cT^2}{2GI_p}.
\end{aligned}
$$

### ねじれ角

Castigliano の定理から

$$
\begin{gathered}
\theta=\frac{\partial U}{\partial T}\\
=\frac{a(T+Pb)+cT}{GI_p}
+\frac{Tb+Pb^2/2}{EI}.
\end{gathered}
$$

よって

$$
\boxed{\theta=\frac1{EI}\left[
T\{(1+\nu)(a+c)+b\}
+P\left\{(1+\nu)ab+\frac{b^2}{2}\right\}\right]}.
$$

$Pb^2/(2EI)$ は BC のせん断力 $P$ による曲げ回転であり、D の $x$ 軸まわりの角度変化に含まれる。

### 鉛直変位

同じエネルギーを $P$ で微分して

$$
\begin{aligned}
w&=\frac{\partial U}{\partial P}\\
&=\frac{P}{EI}\left[\frac{(a+c)^3+b^3}{3}
+(1+\nu)(ab^2+bc^2)\right]\\
&\quad+\frac{T}{EI}\left[\frac{b^2}{2}+(1+\nu)ab\right].
\end{aligned}
$$

したがって図の上向きを正とした変位は

$$
\boxed{\delta_z=-\frac1{EI}\left[\begin{gathered}
P\left\{\frac{(a+c)^3+b^3}{3}+(1+\nu)(ab^2+bc^2)\right\}\\
+T\left\{\frac{b^2}{2}+(1+\nu)ab\right\}
\end{gathered}\right]}.
$$

両答えは相反関係 $\partial w/\partial T=\partial\theta/\partial P$ を満たす。
