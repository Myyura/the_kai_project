---
sidebar_label: "2017年秋季 材料力学 第1問"
tags:
  - Tohoku-University
  - Engineering.Mechanics-of-Materials.Torsion
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 材料力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

段付き丸軸 ABCD の各区間 AB、BC、CD の長さはすべて $L$。AB は外径 $2d$・内径 $d$ の中空軸、BC は直径 $2d$ の中実軸、CD は直径 $d$ の中実軸であり、せん断弾性係数はすべて $G$ である。

1. A端固定、D端にねじりモーメント $M_t$ を加える。各区間の比ねじれ角とD端のねじれ角を求めよ。
2. A、D両端固定、C点に $M_t$ を加える。両端の反ねじりモーメント $M_{tA},M_{tD}$ とC点のねじれ角を求めよ。

![三つの区間からなる丸軸と二つの支持条件](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku-university/engineering/mech/2018/tohoku2017_materials1.svg)

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

阶梯圆轴 ABCD 的 AB、BC、CD 各长 $L$，分别为外径 $2d$、内径 $d$ 的空心轴，直径 $2d$ 的实心轴，以及直径 $d$ 的实心轴；剪切模量均为 $G$。（1）A端固定，D端施加扭矩 $M_t$，求各段单位长度扭转角及D端总转角。（2）A、D两端固定，C点施加 $M_t$，求两端反扭矩及C点转角。

## **Kai**

### (1)

断面二次極モーメントは

$$
J_{AB}=\frac{15\pi d^4}{32},\qquad J_{BC}=\frac{16\pi d^4}{32},\qquad J_{CD}=\frac{\pi d^4}{32}.
$$

全区間を伝わるトルクが $M_t$ だから、比ねじれ角 $\theta=M_t/(GJ)$ より

$$
\boxed{\theta_{AB}=\frac{32M_t}{15\pi Gd^4},\quad
\theta_{BC}=\frac{2M_t}{\pi Gd^4},\quad
\theta_{CD}=\frac{32M_t}{\pi Gd^4}}.
$$

各区間の回転角を足して

$$
\boxed{\varphi_D=L(\theta_{AB}+\theta_{BC}+\theta_{CD})
=\frac{542M_tL}{15\pi Gd^4}}.
$$

### (2)

反トルクは加えた $M_t$ と逆向きの大きさで表す。つり合いと適合条件は

$$
M_{tA}+M_{tD}=M_t,
$$

$$
\varphi_C=\frac{M_{tA}L}{G}\left(\frac1{J_{AB}}+\frac1{J_{BC}}\right)
=\frac{M_{tD}L}{GJ_{CD}}.
$$

後式から $M_{tD}=31M_{tA}/240$。従って

$$
\boxed{M_{tA}=\frac{240}{271}M_t,\qquad M_{tD}=\frac{31}{271}M_t},
$$

$$
\boxed{\varphi_C=\frac{992M_tL}{271\pi Gd^4}}.
$$

Cの回転方向は加えたモーメントと同じである。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 15ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
