---
sidebar_label: "2010年8月実施 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Networks
  - Engineering.Fluid-Mechanics.Pipe-Friction
---

# 九州大学 工学府 機械系専攻 2010年8月実施 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

大気に開放された十分大きい容器に、水位が変化しないよう水が満たされている。水面から深さ $h,H$（$h<H$）の側壁に細い円管が取り付けられ、下側管は水平、上側管は弁を通って下側管に合流する。入口から合流点までの上・下側管の長さは $L_1,L_2$、合流点から出口までは $L_2$ である。

全管の内径は $D$、摩擦係数は $\lambda$。入口・曲がり・合流損失を無視する。重力加速度を $g$ とする。（50点）

1. 弁を完全に閉じたときの出口体積流量を求めよ。
2. 弁を開いたときの出口体積流量を求めよ。弁の損失係数を $\zeta_v$ とする。

![原題の図（九州大学 2011年度 流体工学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2011/mech_201008_fluids-1-original.png)

#### 题目描述

大开口水槽在水面下 $h,H$ 处分别接出上、下两管，上管经过阀门后并入下管，汇合前管长分别为 $L_1,L_2$，共用出口段长 $L_2$。所有管内径为 $D$、摩擦系数为 $\lambda$，忽略入口、弯曲与汇合损失，水位恒定。求关阀和开阀两种状态的出口流量，开阀损失系数为 $\zeta_v$。

## **Kai**

断面積を $A=\pi D^2/4$ とする。

### (1)

自由表面から大気開放出口まで、速度水頭と全長 $2L_2$ の摩擦損失を計上すると

$$
H=\left(1+\frac{2\lambda L_2}{D}\right)\frac{(Q/A)^2}{2g},\qquad
\boxed{Q=A\sqrt{\frac{2gH}{1+2\lambda L_2/D}}}.
$$

### (2)

上側、下側、共通出口の流量を $Q_u,Q_d,Q=Q_u+Q_d$ とおく。また

$$
k_u=\frac{\lambda L_1}{D}+\zeta_v,\qquad
k_d=\frac{\lambda L_2}{D}
$$

とすれば、二つの経路のエネルギー式は

$$
H=(1+k_d)\frac{(Q/A)^2}{2g}
+k_u\frac{(Q_u/A)^2}{2g}
=(1+k_d)\frac{(Q/A)^2}{2g}
+k_d\frac{(Q_d/A)^2}{2g}.
$$

したがって

$$
\frac{Q_u}{Q_d}=\sqrt{\frac{k_d}{k_u}},\qquad
Q_u=\frac{\sqrt{k_d}}{\sqrt{k_u}+\sqrt{k_d}}Q.
$$

これを代入すると

$$
\boxed{Q=A\sqrt{\frac{2gH}
{1+k_d+\dfrac{k_uk_d}{(\sqrt{k_u}+\sqrt{k_d})^2}}}}.
$$

両経路は同じ自由表面から同じ出口に至るので、駆動水頭はともに $H$ である。入口の深さ $h$ は最終式に現れない。$\zeta_v\to\infty$ の極限では (1) に戻る。
