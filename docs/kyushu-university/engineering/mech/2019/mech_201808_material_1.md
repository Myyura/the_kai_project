---
sidebar_label: "2019年度 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2019年度 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

直径 $d$、ヤング率 $E$ の弾性体棒 AG、BG、CG と、L 型の剛体部材 GFD が図のように組み合わされている。A、B、C、D は壁に支持され、図中の丸印はピン継手を表す。AG、GF、FD の長さはそれぞれ $\ell$、BG は水平となす角が $45^\circ$、CG は水平となす角が $\theta$ である。$\ell\gg d$、$45^\circ\leq\theta\leq90^\circ$ とする。

点 G に徐々に鉛直下向きの力を加え、その大きさが $P$ に達したときの鉛直変位を $\delta_y$、水平変位を $\delta_x$ とする。正方向は図中の $x,y$ 軸の矢印方向とする。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/material-1-original.png)

1. 変位の比 $\delta_y/\delta_x$ を求めよ。
2. $\theta=45^\circ$ のとき、$\delta_y$ を求めよ。
3. $\theta=60^\circ$ のとき、$\delta_y$ を求めよ。

#### 题目描述

三根直径为 $d$、杨氏模量为 $E$ 的弹性杆 AG、BG、CG 与 L 形刚体 GFD 组成图示结构，圆圈表示铰接。AG、GF、FD 的长度均为 $\ell$；BG 与水平线成 $45^\circ$，CG 与水平线成 $\theta$，其中 $\ell\gg d$、$45^\circ\leq\theta\leq90^\circ$。在 G 点逐渐施加竖直向下的力至 $P$，其向右、向下位移分别记为 $\delta_x,\delta_y$。求两位移之比，以及 $\theta=45^\circ$、$60^\circ$ 时的 $\delta_y$。

## **Kai**

### (1)

剛体 GFD は固定されたピン D のまわりに微小回転する。DG の水平・鉛直成分はともに長さ $\ell$ であるから、G の変位は DG に垂直となり、

$$
\boxed{\frac{\delta_y}{\delta_x}=1}.
$$

以下、$u=\delta_x=\delta_y$、弾性棒の断面積を $A_0=\pi d^2/4$ とする。各棒の軸方向伸びは

$$
\lambda_{AG}=u,\qquad
\lambda_{BG}=\frac{-u+u}{\sqrt2}=0,\qquad
\lambda_{CG}=u(\sin\theta-\cos\theta).
$$

棒の長さは $L_{AG}=\ell$、$L_{BG}=\sqrt2\ell$、$L_{CG}=\ell/\sin\theta$ なので、ひずみエネルギーは

$$
U=\frac{EA_0}{2\ell}
\left[1+\sin\theta(\sin\theta-\cos\theta)^2\right]u^2.
$$

$\partial(U-Pu)/\partial u=0$ より

$$
u=\frac{P\ell}{EA_0\left[1+\sin\theta(\sin\theta-\cos\theta)^2\right]}.
$$

### (2)

$\theta=45^\circ$ では CG も一次の伸びを生じない。したがって

$$
\boxed{\delta_y=\frac{P\ell}{EA_0}=\frac{4P\ell}{\pi Ed^2}}.
$$

### (3)

$\theta=60^\circ$ を代入すると

$$
1+\sin60^\circ(\sin60^\circ-\cos60^\circ)^2
=\frac{1+2\sqrt3}{4}.
$$

よって

$$
\boxed{\delta_y=\frac{4P\ell}{(1+2\sqrt3)EA_0}
=\frac{16P\ell}{(1+2\sqrt3)\pi Ed^2}}.
$$
