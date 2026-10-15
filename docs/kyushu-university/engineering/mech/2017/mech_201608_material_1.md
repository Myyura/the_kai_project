---
sidebar_label: "2017年度 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2017年度 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図の各棒はヤング率 $E$、断面積 $A$ を持ち、丸印はピン結合を表す。A、D は壁に固定され、AB $=a$、BC $=$ BD $=$ DC $=2a$ である。C に水平右向きから上へ $60^\circ$ の方向に荷重 $P$ を加える。各棒の伸びは長さに比べて十分小さい。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2017/material-1-original.png)

1. 棒 BD に作用する力を求めよ。
2. 着力点 C の水平方向変位を求めよ。
3. 着力点 C の垂直方向変位を求めよ。

#### 题目描述

图示铰接杆系中 A、D 固定，AB 长 $a$，BC、BD、DC 长 $2a$；各杆的轴向刚度为 $EA$。C 受向右上方、与水平线成 $60^\circ$ 的力 $P$，各杆伸长相对长度很小。求 BD 的轴力及 C 的水平、竖直位移。

## **Kai**

右向き、上向きを正とし、軸力の正を引張りとする。

### (1)

C のつり合いから

$$
\frac{\sqrt3}{2}N_{BC}+\frac{\sqrt3}{2}P=0,\qquad
-N_{DC}-\frac12N_{BC}+\frac12P=0.
$$

したがって $N_{BC}=-P$、$N_{DC}=P$。B のつり合いを取ると

$$
\boxed{N_{BD}=P\quad\text{（引張り）}},\qquad N_{AB}=-P.
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
