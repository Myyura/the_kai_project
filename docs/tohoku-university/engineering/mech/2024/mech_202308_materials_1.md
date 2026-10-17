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

1. 図1に示すように、外径 $3d$ および内径 $2d$ の中空丸軸 AB と直径 $d$ の中実丸軸 CD を考える。丸軸 AB の左端 A と丸軸 CD の右端 D はそれぞれ剛体壁に固定されている。丸軸 AB と丸軸 CD には、それぞれ固定端から距離 $L$ の位置 E にピン結合用の穴がある。初期状態では、丸軸 CD の穴は、丸軸 AB の穴を通した直線と $\beta$ の角度をなしている。丸軸 AB および丸軸 CD のせん断弾性係数は $G$ とする。以下の問いに答えよ。

(1) 丸軸 CD をねじり、両軸の穴の位置を一致させるために必要なねじりモーメント $M_E$ を求めよ。

(2) 次に、丸軸 AB の穴と丸軸 CD の穴にピン結合して固定する。その後、$M_E$ を解放したときの丸軸 AB のピン結合位置のねじれ角 $\alpha$ を求めよ。ただし、ピンと穴の変形や摩擦は無視するものとする。

(3) このとき、丸軸 AB と丸軸 CD に生じる最大せん断応力 $\tau_1$ と $\tau_2$ をそれぞれ求めよ。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2024/mech_202308_materials_1_original_figure_1.png)

#### 题目描述

1. 如图1，考虑外径 $3d$、内径 $2d$ 的空心圆轴 AB，以及直径 $d$ 的实心圆轴 CD。AB 的左端 A 和 CD 的右端 D 分别固定在刚性墙上。两根轴均在距各自固定端为 $L$ 的位置 E 处开有销接孔。初始状态下，CD 的孔与穿过 AB 孔的直线夹角为 $\beta$。两根轴的剪切模量均为 $G$。回答以下问题。

(1) 求扭转 CD 使两轴孔位置对齐所需的扭矩 $M_E$。

(2) 接着用销穿过两轴的孔将其连接固定，再撤去 $M_E$。求此时 AB 在销接位置处的扭转角 $\alpha$。忽略销和孔的变形及摩擦。

(3) 求此时 AB 和 CD 各自产生的最大剪应力 $\tau_1,\tau_2$。

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

