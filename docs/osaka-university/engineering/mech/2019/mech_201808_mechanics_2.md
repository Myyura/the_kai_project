---
sidebar_label: "2018年8月実施 力学 問題2"
tags:
  - Osaka-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Simple-Harmonic-Motion
---

# 大阪大学 工学研究科 機械工学専攻 2018年8月実施 力学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1のように、点 C で $45^\circ$ 間隔で交わる3本の直線 $L_1,L_2,L_3$ のすべてについて対称な、面密度一定で厚さを無視できる剛体板を考える。質量を $m$、C を通る板の法線まわりの慣性モーメントを $I$、重力加速度の大きさを $g$ とする。以下の振動は微小振幅であり、$\sin x\simeq x$ を用いてよい。

1. 図2のように、$L_1$ 上かつ板の内部にある A を通る板の法線まわりに自由振動させると、周期は $T_A$ であった。$CA=r_A$ とする。回転軸の摩擦を無視して、$I/m$ を求めよ。
2. 板の $L_1$ まわりの慣性モーメントが $I/2$ であることを示せ。
3. 図3のように、$L_3$ と平行で板と同一平面内にある直線 M のまわりに自由振動させる。$L_3$ と M の距離を $r$ とし、軸の摩擦を無視する。このときの周期 $T_M$ を求めよ。
4. $T_M$ が最小になる $r$ と、その最小周期を求めよ。
5. (4) の $r$ に対応する直線 M が、必ず板を通ることを示せ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_2-question-fig1.png)

#### 题目描述

如图，面密度均匀、厚度可忽略的刚性薄板，关于经过 C、两两相邻夹角为 $45^\circ$ 的三条直线 $L_1,L_2,L_3$ 均对称。质量为 $m$，绕 C 点法线的转动惯量为 $I$，重力加速度为 $g$。各问只考虑微小振幅，可使用 $\sin x\simeq x$。

1. 以薄板内部、位于 $L_1$ 上的 A 点法线为轴作自由摆动，测得周期 $T_A$。已知 $CA=r_A$，忽略轴摩擦，求 $I/m$。
2. 证明绕 $L_1$ 的转动惯量为 $I/2$。
3. 以板面内、与 $L_3$ 平行且相距 $r$ 的直线 M 为轴摆动，求周期 $T_M$。
4. 求使周期最小的 $r$ 及最小周期。
5. 证明该最优位置的转轴 M 必定穿过薄板。

## **Kai**

### (1)

対称性から重心は C にある。平行軸の定理により、A を通る法線まわりの慣性モーメントは $I_A=I+mr_A^2$。微小角 $\varphi$ の運動方程式は

$$
(I+mr_A^2)\ddot\varphi+mgr_A\varphi=0.
$$

従って

$$
T_A=2\pi\sqrt{\frac{I+mr_A^2}{mgr_A}},
\qquad
\boxed{\frac Im=\frac{gr_AT_A^2}{4\pi^2}-r_A^2}.
$$

### (2)

$L_2$ に関する鏡映は $L_1$ と $L_3$ を入れ替えるので、これらの軸まわりの慣性モーメントは等しい。薄板の垂直軸の定理から

$$
I=I_{L_1}+I_{L_3},\qquad I_{L_1}=I_{L_3}.
$$

ゆえに

$$
\boxed{I_{L_1}=I_{L_3}=\frac I2}.
$$

### (3)

平行軸の定理より $I_M=I/2+mr^2$。安定なつり合い位置からの微小角を $\varphi$ とすると

$$
\left(\frac I2+mr^2\right)\ddot\varphi+mgr\varphi=0.
$$

従って

$$
\boxed{T_M=2\pi\sqrt{\frac{I/2+mr^2}{mgr}}
=2\pi\sqrt{\frac1g\left(\frac{I}{2mr}+r\right)}}.
$$

### (4)

$r>0$ において相加相乗平均の不等式を使うと

$$
\frac{I}{2mr}+r\ge2\sqrt{\frac{I}{2m}},
$$

等号条件は $r^2=I/(2m)$ である。よって

$$
\boxed{r_*=\sqrt{\frac{I}{2m}}},\qquad
\boxed{T_{M,\min}=2\pi\sqrt{\frac{2}{g}\sqrt{\frac{I}{2m}}}}.
$$

### (5)

板の各点の $L_3$ からの符号付き距離を $s$、その最大絶対値を $b$ とする。板は有限の面積を持つため

$$
\frac I2=I_{L_3}=\int s^2\,dm<mb^2.
$$

したがって

$$
0<r_*^2=\frac{I}{2m}<b^2.
$$

図1の一体の板は $L_3$ の両側に対称に広がり、$L_3$ から距離 $b$ の点まで連続している。従って $0<r_*<b$ の位置にある平行線 M は板と交わる。よって最小周期を与える軸は必ず板を通る。
