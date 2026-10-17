---
sidebar_label: "2017年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Strain-Energy
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Beam-Deflection
---

# 九州大学 工学府 機械系専攻 2017年8月実施 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

半径 $a$ の半円形に曲がった丸棒 AB は、下図の様に、一端が壁に溶接されている。棒 AB のもう一端は、長さ $a$ のはり BC に直角に溶接されている。また、はり BC は、同じく長さ $a$ のはり CD に直角に溶接されている。ここで、棒 AB は、ヤング率 $E$ および横弾性係数 $G$ の弾性体、はり BC および CD は剛体である。点 D には、荷重 $P$ が紙面と垂直で、かつ紙面の表から裏に向かう方向に負荷されている。なお、いずれの棒の直径も、棒の長さに比べて十分に小さいものとする。次の各問に答えよ。（35点）

**(1)** 点 B における曲げモーメント $M_B$ とねじりモーメント $T_B$ を求めよ。

**(2)** 棒 AB 上で点 B から角度 $\theta$ だけ離れた断面 F にかかる曲げモーメント $M_F$、およびねじりモーメント $T_F$ を求めよ。

**(3)** 点 B の変位 $\delta_B$ を求めよ。

図中、$I$ は断面二次モーメント、$I_p$ は断面二次極モーメントを表す。

![原題の半円形弾性棒と二本の剛体はり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_material-3-original.png)

#### 题目描述

半径为 $a$ 的半圆形圆杆 AB，其一端如图焊接于墙壁，另一端与长度为 $a$ 的梁 BC 垂直焊接。梁 BC 又与同样长 $a$ 的梁 CD 垂直焊接。杆 AB 为杨氏模量为 $E$、剪切模量为 $G$ 的弹性体，梁 BC、CD 为刚体。D 点受到垂直于纸面、从纸面正面指向背面的载荷 $P$。所有杆的直径相对于杆长均充分小。回答下列问题。（35分）

**(1)** 求 B 点的弯矩 $M_B$ 和扭矩 $T_B$。

**(2)** 求杆 AB 上从 B 点转过角度 $\theta$ 的 F 截面处的弯矩 $M_F$ 和扭矩 $T_F$。

**(3)** 求 B 点的位移 $\delta_B$。

图中 $I$ 表示截面二次矩，$I_p$ 表示截面极二次矩。

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
\begin{gathered}
\boxed{M_F=Pa\cos\theta,\qquad
T_F=Pa(1+\sin\theta)}\\
(0\leq\theta\leq\pi).
\end{gathered}
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
\begin{gathered}
\delta_B=\left.\frac{\partial U}{\partial q}\right|_{q=0}\\
=Pa^3\left[\begin{gathered}
\frac1{EI}\int_0^\pi\sin\theta\cos\theta\,d\theta\\
+\frac1{GI_p}\int_0^\pi(1+\sin\theta)(1-\cos\theta)\,d\theta
\end{gathered}\right].
\end{gathered}
$$

第1積分はゼロ、第2積分は $\pi+2$ なので

$$
\boxed{\delta_B=\frac{Pa^3}{GI_p}(\pi+2)}
$$

となる。方向は紙面の表から裏である。ねじりエネルギーの分母には $EI_p$ ではなく $GI_p$ を用いる。
