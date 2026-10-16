---
sidebar_label: "2014年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2014年8月実施 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図3の弾性棒 AB、CD、EF と剛体棒 BC、DE、FG は、すべて $xy$ 平面内で接合されている。各部材の長さは $a$。三本の弾性棒は互いに平行な $x$ 方向の丸棒で、直径 $d$、ヤング率 $E$、横弾性係数 $G$ を持ち、$a\gg d$ とする。A は固定端で、G に $+z$ 方向の荷重 $P$ を加える。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_material-3-original.png)

1. F のねじれ角を求めよ。
2. 弾性棒 AB、CD、EF のねじりによる G の $z$ 方向変位 $\delta_{G\phi}$ を求めよ。
3. 曲げも考慮した G の $z$ 方向変位 $\delta_G$ を求めよ。

#### 题目描述

图示三个沿 $x$ 方向的弹性圆杆 AB、CD、EF，与三个刚臂 BC、DE、FG 在 $xy$ 平面内连接，每段长 $a$。A 固定，G 受沿 $+z$ 方向的力 $P$。圆杆直径 $d$，材料参数 $E,G$，且 $a\gg d$。求 F 的总扭转角、扭转对 G 的位移贡献，以及计入弯曲后的总位移。

## **Kai**

$$
I=\frac{\pi d^4}{64},\qquad I_p=\frac{\pi d^4}{32}.
$$

### (1)

G の荷重の各弾性棒軸からの距離は、AB、CD、EF に対してそれぞれ $a,2a,a$ である。したがって $+x$ 軸まわりのねじりモーメントは

$$
T_{AB}=Pa,\qquad T_{CD}=2Pa,\qquad T_{EF}=Pa.
$$

各弾性棒で生じる相対ねじれ角は

$$
\Delta\phi_{AB}=\frac{Pa^2}{GI_p},\quad
\Delta\phi_{CD}=\frac{2Pa^2}{GI_p},\quad
\Delta\phi_{EF}=\frac{Pa^2}{GI_p}.
$$

A に対する F の截面の回転は、三つの相対角を加えて

$$
\boxed{\phi_F=\frac{4Pa^2}{GI_p}
=\frac{128Pa^2}{\pi Gd^4}}.
$$

EF だけの E に対する相対ねじれ角は $Pa^2/(GI_p)$ であり、F の総回転とは区別する。

### (2)

ねじりエネルギーは

$$
U_t=\frac{a}{2GI_p}\{(Pa)^2+(2Pa)^2+(Pa)^2\}
=\frac{3P^2a^3}{GI_p}.
$$

よって

$$
\boxed{\delta_{G\phi}=\frac{\partial U_t}{\partial P}
=\frac{6Pa^3}{GI_p}=\frac{192Pa^3}{\pi Gd^4}}.
$$

### (3)

三本の弾性棒の $x$ 座標区間は順に $[0,a]$、$[a,2a]$、$[2a,3a]$ であり、曲げモーメントの大きさはどこでも $P(3a-x)$。したがって

$$
U_b=\frac{P^2}{2EI}\int_0^{3a}(3a-x)^2\,dx
=\frac{9P^2a^3}{2EI}.
$$

曲げによる変位は $9Pa^3/(EI)$ なので

$$
\boxed{\delta_G=\frac{6Pa^3}{GI_p}+\frac{9Pa^3}{EI}
=\frac{192Pa^3}{\pi d^4}\left(\frac1G+\frac3E\right)}.
$$
