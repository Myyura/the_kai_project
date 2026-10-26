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

次の各問に答えよ。（35点）

図2の問題について，

**1.** 棒ABに作用する力を求めよ。

**2.** 着力点Dの垂直方向変位を求めよ。

図3の問題について，

**3.** 棒ABと棒FBに作用する力を求めよ。

**4.** 着力点Dの垂直方向変位を求めよ。

![原題の図2・図3：剛体と棒の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_material-2-original.png)

図中，$E$ はヤング率，$\phi d$ は直径 $d$ を表す。CDBは剛体で，図示の長さは $\ell$，角度は $\pi/4$，点Dの下向き荷重は $P$ である。

### 题目描述

回答下列问题。（35分）

对于图2：

**1.** 求杆AB所受的力。

**2.** 求载荷作用点D的竖直位移。

对于图3：

**3.** 求杆AB与杆FB所受的力。

**4.** 求载荷作用点D的竖直位移。

图中 $E$ 为杨氏模量，$\phi d$ 表示直径 $d$。CDB为刚体，所示各段长度为 $\ell$，角度为 $\pi/4$，点D承受向下的载荷 $P$；各铰接及构件位置如图。

## **Kai**

断面積を $A_0=\pi d^2/4$ とする。剛体 CDB が C まわりに微小回転すると、D の下向き変位 $v$ に対して B は右に $v$、下に $v$ だけ移動する。このため

$$
\lambda_{AB}=\sqrt2v,\qquad L_{AB}=\sqrt2\ell.
$$

### (1)

AB の引張力を $N_{AB}$ とする。C まわりのモーメントのつり合いより

$$
\begin{gathered}
\sqrt2\ell N_{AB}=P\ell,\\
\boxed{N_{AB}=\frac{P}{\sqrt2}\quad\text{（引張り）}}.
\end{gathered}
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
\boxed{\begin{gathered}
N_{AB}=N_{FB}=\frac{P}{1+\sqrt2}
=(\sqrt2-1)P\\
\text{（引張り）}
\end{gathered}}.
$$

### (4)

FB の軸伸びが求める変位に等しいので

$$
\boxed{v=\frac{P\ell}{(1+\sqrt2)EA_0}
=\frac{4(\sqrt2-1)P\ell}{\pi Ed^2}}.
$$
