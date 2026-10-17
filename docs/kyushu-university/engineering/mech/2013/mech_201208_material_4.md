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

図4の構造において，次の問に答えよ。（35点）

着力点Bの垂直方向変位 $\delta_{BV}$ を求めよ。

![原題の図4：直角に曲がった弾性丸棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_material-4-original.png)

図中の弾性体丸棒は直径 $d$，ヤング率 $E$，ポアソン比 $\nu$ であり，$AB=BC=\ell$，$\angle ABC=\pi/2$ である。A，C端は固定され，点Bに下向き荷重 $P$ が作用する。

#### 题目描述

对于图4的结构，回答下列问题。（35分）

求载荷作用点B的竖直位移 $\delta_{BV}$。

图中的弹性圆杆直径为 $d$，杨氏模量为 $E$，泊松比为 $\nu$。$AB=BC=\ell$，两段互相垂直，A、C两端固定，B点承受向下载荷 $P$。

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
