---
sidebar_label: "2011年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2011年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2、図3の CDB は L 字型の剛体であり、CD $=$ DB $=\ell$ である。A、C、および図3の F は固定されたピン支点、B はピン結合である。AB は水平となす角が $45^\circ$ の弾性棒、図3の FB は長さ $\ell$ の鉛直な弾性棒である。弾性棒のヤング率は $E$、直径は $d$。D に鉛直下向き荷重 $P$ を加える。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_material-2-original.png)

図2について、次を求めよ。

1. 棒 AB に作用する力。
2. D の鉛直方向変位。

図3について、次を求めよ。

3. 棒 AB、FB に作用する力。
4. D の鉛直方向変位。

#### 题目描述

图2、图3中的 CDB 为 L 形刚体，CD、DB 均长 $\ell$。C 为固定铰，AB 是与水平成 $45^\circ$ 的弹性杆；图3另加竖直弹性杆 FB，长 $\ell$。A、F 固定，各弹性杆的杨氏模量为 $E$、直径为 $d$。D 受向下力 $P$。分别求图2的 AB 轴力与 D 的竖直位移，以及图3的两杆轴力与 D 的竖直位移。

## **Kai**

断面積を $A_0=\pi d^2/4$ とする。剛体 CDB が C まわりに微小回転すると、D の下向き変位 $v$ に対して B は右に $v$、下に $v$ だけ移動する。このため

$$
\lambda_{AB}=\sqrt2v,\qquad L_{AB}=\sqrt2\ell.
$$

### (1)

AB の引張力を $N_{AB}$ とする。C まわりのモーメントのつり合いより

$$
\sqrt2\ell N_{AB}=P\ell,
\qquad\boxed{N_{AB}=\frac{P}{\sqrt2}\quad\text{（引張り）}}.
$$

### (2)

軸伸びの式 $\sqrt2v=N_{AB}\sqrt2\ell/(EA_0)$ より

$$
\boxed{v=\frac{P\ell}{\sqrt2EA_0}
=\frac{2\sqrt2P\ell}{\pi Ed^2}}.
$$

方向は下向きである。

### (3)

FB の伸びは $v$ であるから

$$
N_{AB}=\frac{EA_0\sqrt2v}{\sqrt2\ell}
=\frac{EA_0v}{\ell}=N_{FB}.
$$

C まわりのモーメントのつり合いは

$$
\sqrt2N_{AB}+N_{FB}=P.
$$

よって

$$
\boxed{N_{AB}=N_{FB}=\frac{P}{1+\sqrt2}
=(\sqrt2-1)P\quad\text{（引張り）}}.
$$

### (4)

FB の軸伸びが求める変位に等しいので

$$
\boxed{v=\frac{P\ell}{(1+\sqrt2)EA_0}
=\frac{4(\sqrt2-1)P\ell}{\pi Ed^2}}.
$$
