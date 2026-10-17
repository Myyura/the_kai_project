---
sidebar_label: "2016年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2016年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の構造において、次の問いに答えよ。（40点）

**(1)** 棒 BD に作用する力を求めよ。

**(2)** 着力点 C の水平方向変位を求めよ。

**(3)** 着力点 C の垂直方向変位を求めよ。

ただし、各棒の伸びは、その長さに比べて十分に小さいものとする。

図中、$E$ はヤング率、$A$ は断面積、丸印はピン結合を表す。AB の長さは $a$、DC の長さは $2a$ であり、各角度および荷重 $P$ の方向は図示のとおりである。

![原題の四本の棒の構造と荷重方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_material-1-original.png)

#### 题目描述

对于图示结构，回答下列问题。（40分）

**(1)** 求杆 BD 中的力。

**(2)** 求载荷作用点 C 的水平位移。

**(3)** 求载荷作用点 C 的竖直位移。

各杆的伸长与其自身长度相比充分小。

图中 $E$ 为杨氏模量，$A$ 为截面积，圆圈表示铰接。AB 长 $a$，DC 长 $2a$。图示各夹角为 $60^\circ$，载荷 $P$ 在 C 点沿水平右向上方 $60^\circ$ 的方向作用，支承及连接位置如图。

## **Kai**

右向き、上向きを正とし、軸力の正を引張りとする。

### (1)

C のつり合いから

$$
\begin{gathered}
\frac{\sqrt3}{2}N_{BC}+\frac{\sqrt3}{2}P=0,\\
-N_{DC}-\frac12N_{BC}+\frac12P=0.
\end{gathered}
$$

したがって $N_{BC}=-P$、$N_{DC}=P$。B のつり合いを取ると

$$
\begin{gathered}
\boxed{N_{BD}=P\quad\text{（引張り）}},\\
N_{AB}=-P.
\end{gathered}
$$

### (2)

DC は水平で D が固定されているので、その伸びが C の水平変位に等しい。

$$
\boxed{u_{Cx}=\frac{N_{DC}(2a)}{EA}=\frac{2Pa}{EA}}.
$$

方向は右向きである。

### (3)

$s=Pa/(EA)$ とおく。AB の軸伸びから $u_{Bx}=-s$。BD の軸方向に変位を射影すると

$$
\frac12u_{Bx}+\frac{\sqrt3}{2}u_{By}=2s,
\qquad u_{By}=\frac{5s}{\sqrt3}.
$$

BC の伸びは $-2s$ なので

$$
\frac12(u_{Cx}-u_{Bx})-\frac{\sqrt3}{2}(u_{Cy}-u_{By})=-2s.
$$

$u_{Cx}=2s$ を代入して

$$
\boxed{u_{Cy}=4\sqrt3s=\frac{4\sqrt3Pa}{EA}}.
$$

方向は上向きである。
