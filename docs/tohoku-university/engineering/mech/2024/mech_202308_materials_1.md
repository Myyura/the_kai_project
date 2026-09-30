---
sidebar_label: "2023年8月実施 材料力学 第1問"
tags:
  - Tohoku-University
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 東北大学 工学研究科 機械系4専攻 2023年8月実施 材料力学 第1問

## **Author**
祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

[原問題（専門科目5ページ、PDF 14ページ）](https://www.mech.tohoku.ac.jp/wp/wp-content/uploads/2026/02/Problem_2023_j.pdf)

中空丸軸 AB（外径 $3d$、内径 $2d$）と中実丸軸 CD（直径 $d$）を同軸に配置し、A と D を剛体壁に固定する。各固定端から距離 $L$ の断面 E にピン穴を設ける。無負荷時には、二つの穴の方向が角度 $\beta$ だけずれている。両軸の横弾性係数を $G$ とし、ピンと穴の変形および摩擦を無視する。

1. AB をねじらずに CD をねじって穴を一致させるのに必要なトルク $M_E$ を求める。
2. 穴を一致させてピンで固定し、外部トルク $M_E$ を除く。このとき AB の E 断面のねじれ角 $\alpha$ を求める。
3. 2 の状態で、AB と CD の最大せん断応力 $\tau_1,\tau_2$ を求める。

![同軸の中空軸と中実軸のピン結合](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/sn-mechanics/other/tohoku-2023-torsion.svg)

#### 题目描述

两根同轴圆轴的远端 A、D 固定：AB 外径 $3d$、内径 $2d$，CD 为直径 $d$ 的实心轴。两轴距各自固定端 $L$ 的 E 截面设有销孔，无载时孔的方向相差 $\beta$。剪切模量均为 $G$，忽略销孔变形与摩擦。求扭转 CD 使孔对齐所需的扭矩；插销连接并撤去外加扭矩后，求 AB 的扭转角及两轴最大剪应力。

## **Kai**

極断面二次モーメントは

$$
J_1=\frac{\pi}{32}\{(3d)^4-(2d)^4\}=\frac{65\pi d^4}{32},\qquad
J_2=\frac{\pi d^4}{32}.
$$

### (1)

CD のねじれ角が $\beta$ になればよい。$\beta=M_EL/(GJ_2)$ より

$$
\boxed{M_E=\frac{G\pi d^4\beta}{32L}}.
$$

### (2)

外部トルクを除いた後、両軸の伝達トルクの大きさを $T$ とする。変形の適合条件は

$$
\alpha=\frac{TL}{GJ_1},\qquad
\beta-\alpha=\frac{TL}{GJ_2}.
$$

よって $\beta-\alpha=65\alpha$ であるから

$$
\boxed{\alpha=\frac{\beta}{66}},\qquad
T=\frac{65G\pi d^4\beta}{2112L}.
$$

### (3)

$\tau=Tr/J$ より、各軸の外周で最大となる。

$$
\boxed{\tau_1=\frac{T(3d/2)}{J_1}=\frac{G\beta d}{44L}},\qquad
\boxed{\tau_2=\frac{T(d/2)}{J_2}=\frac{65G\beta d}{132L}}.
$$

