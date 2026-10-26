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

図3のように、ヤング率 $E$、横弾性係数 $G$ の弾性体棒 AB、CD、EF と剛体棒 BC、DE、FG がいずれも $x$-$y$ 平面内で接合された構造体がある。いずれの弾性体棒も、直径は $d$、長さは $a$ である。また、点 G に $z$ 方向に荷重 $P$ が作用している。次の各問に答えよ。（40点）

**(1)** 点 F のねじれ角を求めよ。

**(2)** 弾性体棒 AB、CD、EF のねじれによる点 G の $z$ 方向の変位 $\delta_G^\phi$ を求めよ。

**(3)** 弾性体棒 AB、CD、EF の曲げの効果も考慮し、点 G の $z$ 方向の変位 $\delta_G$ を求めよ。

図中、各剛体棒の長さも $a$、$a\gg d$ であり、A は固定端である。$+x$ は右向き、$+y$ は下向き、$+z$ は紙面の奥向きとする。

![図3：弾性丸棒と剛体棒の平面構造](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_material-3-original.png)

### 题目描述

如图3，杨氏模量为 $E$、剪切模量为 $G$ 的弹性杆 AB、CD、EF，与刚杆 BC、DE、FG 均在 $x$-$y$ 平面内连接。每根弹性杆的直径为 $d$、长度为 $a$。G 点受沿 $z$ 方向的载荷 $P$。回答下列问题。（40分）

**(1)** 求 F 点的扭转角。

**(2)** 求弹性杆 AB、CD、EF 的扭转引起的 G 点沿 $z$ 方向的位移 $\delta_G^\phi$。

**(3)** 进一步考虑弹性杆 AB、CD、EF 的弯曲效应，求 G 点沿 $z$ 方向的位移 $\delta_G$。

图中各刚杆也长 $a$，$a\gg d$，A 端固定。$+x$ 向右，$+y$ 向下，$+z$ 指向纸面内部。

## **Kai**

$$
I=\frac{\pi d^4}{64},\qquad I_p=\frac{\pi d^4}{32}.
$$

### (1)

G の荷重の各弾性棒軸からの距離は、AB、CD、EF に対してそれぞれ $a,2a,a$ である。したがって $+x$ 軸まわりのねじりモーメントは

$$
\begin{gathered}
T_{AB}=Pa,\\
T_{CD}=2Pa,\\
T_{EF}=Pa.
\end{gathered}
$$

各弾性棒で生じる相対ねじれ角は

$$
\begin{gathered}
\Delta\phi_{AB}=\frac{Pa^2}{GI_p},\\
\Delta\phi_{CD}=\frac{2Pa^2}{GI_p},\\
\Delta\phi_{EF}=\frac{Pa^2}{GI_p}.
\end{gathered}
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
\begin{gathered}
U_t=\frac{a}{2GI_p}\{(Pa)^2+(2Pa)^2+(Pa)^2\}\\
=\frac{3P^2a^3}{GI_p}.
\end{gathered}
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
\boxed{\begin{gathered}
\delta_G=\frac{6Pa^3}{GI_p}+\frac{9Pa^3}{EI}\\
=\frac{192Pa^3}{\pi d^4}\left(\frac1G+\frac3E\right)
\end{gathered}}.
$$
