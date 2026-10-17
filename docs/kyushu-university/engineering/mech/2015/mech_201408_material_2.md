---
sidebar_label: "2014年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2014年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2の構造は、点 A と点 E で壁に固定され、また点 D で単純支持されている。次の各問に答えよ。（40点）

**(1)** 支点 D の抗力 $R_D$ を求めよ。

**(2)** 着力点 C の変位 $\delta_C$ を求めよ。

図中、AB の長さは $2a$、ED と DC の長さは各 $a$、BC は長さ $b$ の剛体で、B と C はピン継手である。C に下向きの荷重 $P$ が作用する。$E$ はヤング率、$I$ は断面二次モーメントである。

![図2：固定・単純支持された二本のはり](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_material-2-original.png)

#### 题目描述

图2所示结构在 A、E 两点固定于墙壁，并在 D 点简支。回答下列问题。（40分）

**(1)** 求 D 支点的反力 $R_D$。

**(2)** 求载荷作用点 C 的位移 $\delta_C$。

图中 AB 长 $2a$，ED 与 DC 各长 $a$，BC 为长 $b$ 的刚杆，B、C 为铰接点。C 点承受向下的载荷 $P$。$E$ 为杨氏模量，$I$ 为截面二次矩。

## **Kai**

剛体棒 BC は二力部材なので、上下のはりの先端には鉛直方向の力だけを伝える。上梁 B に伝わる下向き荷重を $Q$ とすれば、下梁 C の正味荷重は $P-Q$ である。

### (1)

下梁の D の下向き変位は、重ね合わせから

$$
\delta_D=\frac{5(P-Q)a^3}{6EI}-\frac{R_Da^3}{3EI}=0.
$$

よって

$$
R_D=\frac52(P-Q).
$$

下梁 C の変位と上梁 B の変位は

$$
\begin{gathered}
\delta_C=\frac{8(P-Q)a^3}{3EI}-\frac{5R_Da^3}{6EI}\\
=\frac{7(P-Q)a^3}{12EI},
\end{gathered}
$$

$$
\delta_B=\frac{8Qa^3}{3EI}.
$$

BC の長さが変わらないので $\delta_B=\delta_C$。したがって

$$
32Q=7(P-Q),\qquad Q=\frac{7P}{39}.
$$

これを反力の式に代入して

$$
\boxed{R_D=\frac{80P}{39}\quad\text{（上向き）}}.
$$

### (2)

$$
\boxed{\delta_C=\delta_B
=\frac{56Pa^3}{117EI}\quad\text{（下向き）}}.
$$
