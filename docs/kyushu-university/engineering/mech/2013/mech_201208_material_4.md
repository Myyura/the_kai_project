---
sidebar_label: "2012年8月実施 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2012年8月実施 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図4の直角に折れ曲がった弾性丸棒 ABC は、AB $=$ BC $=\ell$、直径 $d$、ヤング率 $E$、ポアソン比 $\nu$ を持つ。A、C は固定端で、二本の棒は B で剛に接合されている。棒は水平面内にあり、B に鉛直下向き荷重 $P$ を加える。B の鉛直変位 $\delta_{BV}$ を求めよ。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_material-4-original.png)

#### 题目描述

两段长 $\ell$、直径 $d$ 的弹性圆杆在 B 处直角刚接，A、C 固定，两杆位于水平面内。材料参数为 $E,\nu$。B 受向下力 $P$，求其竖直位移。

## **Kai**

$$
I=\frac{\pi d^4}{64},\qquad I_p=2I,\qquad
GI_p=\frac{EI}{1+\nu}.
$$

対称性より、各杆が負担する鉛直力は $P/2$。AB の B 端で曲げを抑えるモーメントの大きさを $M$ とすると、B のモーメントのつり合いから、BC に作用するねじりモーメントの大きさも $M$ である。

AB の曲げによる端部回転角と、BC のねじれ角が等しいので

$$
\frac{P\ell^2}{4EI}-\frac{M\ell}{EI}
=\frac{M\ell}{GI_p}
=\frac{(1+\nu)M\ell}{EI}.
$$

よって

$$
M=\frac{P\ell}{4(2+\nu)}.
$$

AB の片持ちはりとしての先端変位は

$$
\delta_{BV}=\frac{P\ell^3}{6EI}-\frac{M\ell^2}{2EI}
=\frac{(5+4\nu)P\ell^3}{24(2+\nu)EI}.
$$

したがって

$$
\boxed{\delta_{BV}=\frac{8(5+4\nu)P\ell^3}
{3(2+\nu)\pi Ed^4}\quad\text{（下向き）}}.
$$
