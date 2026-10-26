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

問題2（解答用紙：白）

図1のように、点 C において $45^\circ$ 間隔で交わる3本の直線 $\mathrm L_1,\mathrm L_2,\mathrm L_3$ の全てについて対称な形状をした、面密度が一定でかつ厚さが無視できる剛体板を考える。板の質量を $m$、点 C を通る板の法線まわりの慣性モーメントを $I$、重力加速度の大きさを $g$ とする。以下の問いに答えなさい。ただし、いずれの振動においても振幅は微小であるとし、$|x|\ll1$ である任意の実数 $x$ に対して近似式 $\sin x\simeq x$ を用いてよい。

(1) 図2のように、この板を $\mathrm L_1$ 上でかつ板内部にある点 A を通る板の法線まわりに回転できるようにし、自由振動させたところ、その周期は $T_A$ であった。点 C と点 A との距離は $r_A$ であるとし、板と回転軸との接触摩擦は無視できるものとする。$I/m$ を求めなさい。

(2) 板の $\mathrm L_1$ まわりの慣性モーメントが $I/2$ であることを示しなさい。

(3) 図3のように、この板を $\mathrm L_3$ に平行でかつ板と同一平面上にある直線 M まわりに回転できるようにし、自由振動させた。$\mathrm L_3$ と M との距離は $r$ であるとし、板と回転軸との接触摩擦は無視できるものとする。このときの周期 $T_M$ を求めなさい。

(4) 小問 (3) において、$T_M$ が最小となる $r$、およびそのときの $T_M$ を求めなさい。

(5) 小問 (4) で求めた $r$ に対する M が必ず板を通ることを示しなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_2_original_figure_1.png)

![原題の図2・図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_2_original_figure_2.png)


### 题目描述

问题2（使用白色答题纸）

如图1，考虑一块面密度均匀、厚度可忽略的刚性薄板，其形状关于在 C 点以 $45^\circ$ 间隔相交的三条直线 $\mathrm L_1,\mathrm L_2,\mathrm L_3$ 均对称。板的质量为 $m$，绕过 C 点且垂直于板面的轴的转动惯量为 $I$，重力加速度大小为 $g$。回答下列问题。所有振动的振幅均很小，可对任意满足 $|x|\ll1$ 的实数 $x$ 使用近似式 $\sin x\simeq x$。

(1) 如图2，使薄板可绕过 $\mathrm L_1$ 上且位于板内部的 A 点、垂直于板面的轴转动，令其自由振动，测得周期为 $T_A$。C、A 两点的距离为 $r_A$，忽略板与转轴之间的接触摩擦。求 $I/m$。

(2) 证明板绕 $\mathrm L_1$ 的转动惯量为 $I/2$。

(3) 如图3，使板可绕与 $\mathrm L_3$ 平行、且与板共面的直线 M 转动，并令其自由振动。$\mathrm L_3$ 与 M 的距离为 $r$，忽略板与转轴之间的接触摩擦。求振动周期 $T_M$。

(4) 在 (3) 中，求使 $T_M$ 最小的 $r$，以及此时的 $T_M$。

(5) 证明对应于 (4) 所得 $r$ 的直线 M 必定穿过薄板。

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
