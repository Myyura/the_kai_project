---
sidebar_label: "2018年度 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Strain-Energy
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Beam-Deflection
---

# 九州大学 工学府 機械系専攻 2018年度 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

半径 $a$ の半円形丸棒 AB は A で壁に溶接されている。B には長さ $a$ の剛体はり BC が直角に溶接され、C には長さ $a$ の剛体はり CD が直角に溶接されている。AB のヤング率は $E$、横弾性係数は $G$、断面二次モーメントは $I$、断面二次極モーメントは $I_p$ である。D に紙面の表から裏へ向かう荷重 $P$ を加える。棒の直径は長さに比べて十分小さい。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/material-3-original.png)

1. B における曲げモーメント $M_B$ とねじりモーメント $T_B$ を求めよ。
2. B から中心角 $\theta$ だけ離れた断面 F の曲げモーメント $M_F$ とねじりモーメント $T_F$ を求めよ。
3. B の変位 $\delta_B$ を求めよ。

#### 题目描述

半径 $a$ 的半圆弹性杆 AB 在 A 固定，B 连接长度 $a$ 的刚臂 BC，C 再垂直连接长度 $a$ 的刚臂 CD。弹性杆的弯曲与扭转刚度分别为 $EI$、$GI_p$。D 受垂直纸面向里的力 $P$，杆直径远小于长度。求 B 及距 B 中心角为 $\theta$ 的 F 截面处的弯矩、扭矩，并求 B 的位移。

## **Kai**

### (1)

D の荷重を B に移すと、せん断力 $P$ に加えて、互いに直交する二つの偶力が生じる。いずれの腕の長さも $a$ なので、モーメントの大きさは

$$
\boxed{M_B=Pa,\qquad T_B=Pa}.
$$

### (2)

F における半径方向を曲げモーメントの正方向、接線方向の反対をねじりモーメントの正方向と取る。この符号規約では

$$
\begin{aligned}
M_F&=M_B\cos\theta-T_B\sin\theta+Pa\sin\theta,\\
T_F&=T_B\cos\theta+M_B\sin\theta+Pa(1-\cos\theta).
\end{aligned}
$$

よって

$$
\boxed{M_F=Pa\cos\theta,\qquad
T_F=Pa(1+\sin\theta)}\qquad(0\leq\theta\leq\pi).
$$

$M_F$ は符号付きであり、$\theta>\pi/2$ では曲げの向きが反転する。

### (3)

求めるのは荷重点 D ではなく B の変位である。B に紙面の裏向きの仮想荷重 $q$ を追加すると

$$
M_F(q)=Pa\cos\theta+qa\sin\theta,
$$

$$
T_F(q)=Pa(1+\sin\theta)+qa(1-\cos\theta).
$$

$ds=a\,d\theta$ より

$$
U(q)=\frac a2\int_0^\pi
\left[\frac{M_F(q)^2}{EI}+\frac{T_F(q)^2}{GI_p}\right]d\theta.
$$

したがって B の裏向き変位は

$$
\delta_B=\left.\frac{\partial U}{\partial q}\right|_{q=0}
=Pa^3\left[
\frac1{EI}\int_0^\pi\sin\theta\cos\theta\,d\theta
+\frac1{GI_p}\int_0^\pi(1+\sin\theta)(1-\cos\theta)\,d\theta
\right].
$$

第1積分はゼロ、第2積分は $\pi+2$ なので

$$
\boxed{\delta_B=\frac{Pa^3}{GI_p}(\pi+2)}
$$

となる。方向は紙面の表から裏である。ねじりエネルギーの分母には $EI_p$ ではなく $GI_p$ を用いる。
