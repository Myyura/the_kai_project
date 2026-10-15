---
sidebar_label: "2012年度 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Hydrostatics
---

# 九州大学 工学府 機械系専攻 2012年度 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

鉛直面内の半径 $R$ の円形レール上に、幅 $L$、深さ $H$ の直方体の水槽がある。静止時の水深は $h<H$ である。水槽は一定角速度 $\omega$ でレール上を反時計回りに動き、$t=0$ に最下部を通る。水面形状の変化は十分速く、準定常状態を仮定できる。

重力加速度を $g$ とする。$R$ は $L,H,h$ より十分に大きく、遠心力は重力より大きい。（50点）

1. 時刻 $t$ の水面が水平方向となす角 $\theta$ を求めよ。中心から水面までの距離は $R$ と近似してよい。
2. 一回転中に水がこぼれないための水深 $h$ の条件を求めよ。必要なら $\tan(\alpha-\beta)=(\tan\alpha-\tan\beta)/(1+\tan\alpha\tan\beta)$ を用いよ。

![原題の図（九州大学 2012年度 流体工学 問3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2012/fluids-3-original.png)

#### 题目描述

宽 $L$、深 $H$ 的矩形水槽沿半径 $R$ 的竖直圆轨道以角速度 $\omega$ 逆时针运动，$t=0$ 位于最低点。静止水深为 $h<H$，$R$ 远大于槽的尺寸，离心加速度 $R\omega^2>g$，液面可视为准定常。求液面相对水平的角度，以及整圈运动不溢水的水深条件。

## **Kai**

### (1)

$\phi=\omega t$、$a=R\omega^2>g$ とおく。固定座標を右向き $x$、上向き $y$ とすると、槽に対して静止した流体の有効体積力は

$$
\frac{1}{\rho}\nabla p=(a\sin\phi,-g-a\cos\phi).
$$

自由面上で $dp=0$ だから

$$
\tan\theta=\frac{a\sin\phi}{g+a\cos\phi}.
$$

象限も含めて水面の向きを表すには

$$
\boxed{\theta=\operatorname{atan2}(a\sin\phi,\ g+a\cos\phi)\pmod\pi}
$$

とすればよい。分母がゼロの時刻では水面は鉛直であり、単一の逆正接の主値に固定しない。

### (2)

槽底の水平に対する角度は $\phi$ である。水面の槽底に対する傾斜の大きさは

$$
s(\phi)=|\tan(\phi-\theta)|
=\frac{g|\sin\phi|}{a+g\cos\phi}.
$$

$a>g$ なので分母は正である。最大値は $\cos\phi=-g/a$ で生じ、

$$
\boxed{s_{\max}=\frac{g}{\sqrt{a^2-g^2}}}.
$$

槽底全体が水で覆われる場合、高い側の水深は $h+Ls/2$ である。したがって、この場合の条件は

$$
h\le H-\frac{Lg}{2\sqrt{(R\omega^2)^2-g^2}}.
$$

題文は局所的な底面露出を排除していないため、小水量の場合も含める。傾斜が $s$ のとき高い側の水深を $d$ とすれば、単位奥行き当たりの水量 $Lh$ は

$$
Lh=\begin{cases}
L(d-sL/2),&d\ge sL,\\
d^2/(2s),&0\le d<sL.
\end{cases}
$$

後者は底の一部が露出した三角形断面である。最悪の傾斜 $s_{\max}$ で $d\le H$ を課せば、一般的な不溢水条件は

$$
\boxed{\quad h\le
\begin{cases}
H-\dfrac{Ls_{\max}}2,&Ls_{\max}\le H,\\[4pt]
\dfrac{H^2}{2Ls_{\max}},&Ls_{\max}>H.
\end{cases}\quad}
$$

等号は液面が縁に達する限界である。縁まで余裕を持たせるなら不等号を厳密にする。
