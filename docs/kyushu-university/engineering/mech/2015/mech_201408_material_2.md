---
sidebar_label: "2015年度 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2015年度 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2の二本の弾性はり AB、EC は A、E で壁に固定され、下のはりは中点 D でも単純支持されている。AB $=$ EC $=2a$、ED $=$ DC $=a$。B と C は長さ $b$ の剛体棒にピン結合されている。両はりの曲げ剛性は $EI$。C に下向き荷重 $P$ を加える。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2015/material-2-original.png)

1. 支点 D の反力 $R_D$ を求めよ。
2. C の変位 $\delta_C$ を求めよ。

#### 题目描述

两根弯曲刚度为 $EI$、长 $2a$ 的梁分别在 A、E 固定，下梁中点 D 另设简单支承。B、C 由长 $b$ 的刚杆两端铰接，C 受向下力 $P$。求 D 的反力及 C 的位移。

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
\delta_C=\frac{8(P-Q)a^3}{3EI}-\frac{5R_Da^3}{6EI}
=\frac{7(P-Q)a^3}{12EI},
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
