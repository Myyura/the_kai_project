---
sidebar_label: "2012年度 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2012年度 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように $x\to y\to x$ 方向へ直角に折れ曲がった丸棒 ABCD は A で固定され、AB $=a$、BC $=b$、CD $=c$ である。先端 D に鉛直下向きの荷重 $P$ とねじりモーメント $T$ が作用する。丸棒の直径を $d$、ヤング率を $E$、ポアソン比を $\nu$ とする。D の $yz$ 平面内の角度変化（ねじれ角）$\theta$ と $z$ 方向変位 $\delta_z$ を求めよ。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2012/material-4-original.png)

#### 题目描述

圆杆 ABCD 从 A 起依次沿 $x,y,x$ 方向折成直角，三段长度为 $a,b,c$，A 固定。D 受竖直向下载荷 $P$ 及扭矩 $T$。杆直径为 $d$，材料参数为 $E,\nu$。求 D 在 $yz$ 平面内的转角及 $z$ 方向位移。

## **Kai**

$+z$ は図の上向きとする。ここでは、$T>0$ および $\theta>0$ を $-x$ 軸まわり、すなわち荷重 $P$ が AB に生じさせるねじりと同じ向きに定義する。逆向きのトルクには $T<0$ を代入すればよい。下向き変位の大きさを $w=-\delta_z$ とおく。

$$
I=\frac{\pi d^4}{64},\qquad I_p=2I,\qquad
G=\frac{E}{2(1+\nu)},\qquad GI_p=\frac{EI}{1+\nu}.
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
\theta=\frac{\partial U}{\partial T}
=\frac{a(T+Pb)+cT}{GI_p}
+\frac{Tb+Pb^2/2}{EI}.
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
+(1+\nu)(ab^2+bc^2)\right]
+\frac{T}{EI}\left[\frac{b^2}{2}+(1+\nu)ab\right].
\end{aligned}
$$

したがって図の上向きを正とした変位は

$$
\boxed{\delta_z=-\frac1{EI}\left[
P\left\{\frac{(a+c)^3+b^3}{3}+(1+\nu)(ab^2+bc^2)\right\}
+T\left\{\frac{b^2}{2}+(1+\nu)ab\right\}\right]}.
$$

両答えは相反関係 $\partial w/\partial T=\partial\theta/\partial P$ を満たす。
