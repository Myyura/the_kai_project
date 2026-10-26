---
sidebar_label: "2018年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2018年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、構造 OAB-CAD が点 O と点 B で剛体壁に固定されている。点 C および点 D に $x$ 方向荷重 $P$ を作用させるとき、次の各問に答えよ。ただし、構造 OAB-CAD は、直径 $d$ の丸棒からなり、$\ell\gg d$、ヤング率 $E$ とする。（40点）

**(1)** OAB 間のせん断力線図（SFD）、曲げモーメント線図（BMD）を描け。

**(2)** 点 C の $x$ 方向変位 $\delta_{Cx}$ を求めよ。

図中、OA、AD の長さは $\ell$、AB、AC の長さは $2\ell$。$+x$ は右向き、$+y$ は下向きとする。

![原題の両端固定された十字形構造](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_material-2-original.png)

### 题目描述

如图，结构 OAB-CAD 在 O、B 两点固定于刚性墙壁。在 C、D 两点分别施加沿 $x$ 方向的载荷 $P$ 时，回答下列问题。结构 OAB-CAD 由直径为 $d$ 的圆杆构成，$\ell\gg d$，杨氏模量为 $E$。（40分）

**(1)** 绘制 OAB 段的剪力图（SFD）和弯矩图（BMD）。

**(2)** 求 C 点沿 $x$ 方向的位移 $\delta_{Cx}$。

图中 OA、AD 长 $\ell$，AB、AC 长 $2\ell$。$+x$ 向右，$+y$ 向下。

## **Kai**

断面二次モーメントを $I=\pi d^4/64$ とする。$\ell\gg d$ より、まず曲げ変形の主要項を求める。

### (1)

CAD が A に伝える力は $x$ 方向に $2P$、偶力は時計回りに $P\ell$ である。OAB 上の O から右向きの座標を $s$、下向きたわみを $v(s)$ とし、図示する内力の符号を

$$
M=EI v'',\qquad V=EI v'''
$$

と定める。O、B の固定条件および A のたわみ・傾きの連続条件は

$$
v(0)=v'(0)=v(3\ell)=v'(3\ell)=0,
$$

$$
v(\ell-)=v(\ell+),\qquad v'(\ell-)=v'(\ell+).
$$

また、$V$ は A で連続し、集中偶力により $M(\ell+)-M(\ell-)=-P\ell$ となる。これらから

$$
\boxed{V(s)=\frac{4P}{9}\quad(0<s<3\ell)}
$$

および

$$
\boxed{
M(s)=
\begin{cases}
\dfrac{4P}{9}s,&0\leq s<\ell,\\[2mm]
\dfrac{4P}{9}s-P\ell,&\ell<s\leq3\ell
\end{cases}}
$$

を得る。BMD の値は O で $0$、A の左側で $4P\ell/9$、右側で $-5P\ell/9$、B で $P\ell/3$ である。

![OAB のせん断力線図と曲げモーメント線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_material-2-sfd-bmd.svg)

### (2)

OA では $EI v''=4Ps/9$ なので、O の固定条件から

$$
v(s)=\frac{2Ps^3}{27EI},\qquad
\theta_A=v'(\ell)=\frac{2P\ell^2}{9EI}.
$$

C の水平変位は、A の回転による $2\ell\theta_A$ と、AC 自身の片持ちはりとしての曲げたわみの和である。

$$
\boxed{\begin{gathered}
\delta_{Cx}
=2\ell\theta_A+\frac{P(2\ell)^3}{3EI}\\
=\frac{28P\ell^3}{9EI}\\
=\frac{1792P\ell^3}{9\pi Ed^4}
\end{gathered}}.
$$

軸伸縮まで含める場合、A の水平移動は、OA と AB の軸剛性の和を用いて

$$
\begin{gathered}
u_A=\frac{2P}{EA_0/\ell+EA_0/(2\ell)}
=\frac{4P\ell}{3EA_0},\\
A_0=\frac{\pi d^2}{4}
\end{gathered}
$$

となり、上の $\delta_{Cx}$ に $u_A$ を加える。この補正は曲げ項に対して $O((d/\ell)^2)$ である。
