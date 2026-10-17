---
sidebar_label: "2018年8月実施 問1（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Truss
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2018年8月実施 材料力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

直径 $d$、ヤング率 $E$ の弾性体棒3本が L 型の剛体部材1個と組み合わされて図に示す構造が作られている。図の構造において、点 G に徐々に力を加えて $P$ に達した時に、点 G の垂直変位が $\delta_y$、水平変位が $\delta_x$ となった。なお $\delta_x$ と $\delta_y$ の正方向は図中 $x$ 軸と $y$ 軸の矢印方向とする。

次の各問に答えよ。（40点）

**1)** 点 G の垂直変位と水平変位の比（$\delta_y/\delta_x$）を求めよ。

**2)** $\theta=45^\circ$ の時、$\delta_y$ を求めよ。

**3)** $\theta=60^\circ$ の時、$\delta_y$ を求めよ。

図中、丸印はピン継手を表す。AG、GF、FD の長さは各 $\ell$、$\ell\gg d$、$45^\circ\le\theta\le90^\circ$ である。$+x$ は右向き、$+y$ は下向きで、荷重 $P$ は G に下向きに作用する。

![原題の三本の弾性棒とL型剛体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_material-1-original.png)

#### 题目描述

三根直径为 $d$、杨氏模量为 $E$ 的弹性杆与一个 L 形刚性构件组合成图示结构。逐渐在 G 点施力，力达到 $P$ 时，G 点的竖直位移为 $\delta_y$，水平位移为 $\delta_x$。$\delta_x,\delta_y$ 的正方向分别取图中 $x,y$ 轴的箭头方向。

回答下列问题。（40分）

**1)** 求 G 点竖直位移与水平位移之比 $\delta_y/\delta_x$。

**2)** 当 $\theta=45^\circ$ 时，求 $\delta_y$。

**3)** 当 $\theta=60^\circ$ 时，求 $\delta_y$。

图中圆圈表示铰接，AG、GF、FD 各长 $\ell$，$\ell\gg d$，$45^\circ\le\theta\le90^\circ$。$+x$ 向右，$+y$ 向下，载荷 $P$ 在 G 点向下作用；各角度及支承如图。

## **Kai**

### (1)

剛体 GFD は固定されたピン D のまわりに微小回転する。DG の水平・鉛直成分はともに長さ $\ell$ であるから、G の変位は DG に垂直となり、

$$
\boxed{\frac{\delta_y}{\delta_x}=1}.
$$

以下、$u=\delta_x=\delta_y$、弾性棒の断面積を $A_0=\pi d^2/4$ とする。各棒の軸方向伸びは

$$
\begin{gathered}
\lambda_{AG}=u,\\
\lambda_{BG}=\frac{-u+u}{\sqrt2}=0,\\
\lambda_{CG}=u(\sin\theta-\cos\theta).
\end{gathered}
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
\boxed{\begin{gathered}
\delta_y=\frac{4P\ell}{(1+2\sqrt3)EA_0}\\
=\frac{16P\ell}{(1+2\sqrt3)\pi Ed^2}
\end{gathered}}.
$$
