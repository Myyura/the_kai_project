---
sidebar_label: "2011年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Hydrostatics
---

# 九州大学 工学府 機械系専攻 2011年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように，鉛直面に立てられた半径 $R$ の円形のレール上に，幅 $L$，深さ $H$ の直方体の水槽が置かれている。水槽中には水が入れられており，水槽静止時の水深は $h$ である $(h<H)$。水槽は一定の角速度 $\omega$ でレール上を左回りに動いており，時刻 $t=0$ において，水槽はレールの最下部を通過する。水面形状の変化は十分早く，準定常状態を仮定できるものとして，以下の問に答えよ。なお，重力加速度を $g$ とし，レールの半径 $R$ は $L,H$ および $h$ に比べて十分大きく，かつ遠心力は重力より大きいものとする。（50点）

**(1)** 時刻 $t$ における，水槽中の水面と水平方向とのなす角 $\theta$ を求めよ。なお，$R\gg h$ および $R\gg L$ より，円形レールの中心から水面までの距離を $R$ と近似してよい。

**(2)** 水槽が1回転する間に水槽中の水がこぼれないための，水深 $h$ の条件を求めよ。なお，公式

$$
\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}
$$

を用いてよい。

![原題の図：円形レール上を運動する水槽](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_fluids-3-original.png)

### 题目描述

如图所示，在竖直面内半径为 $R$ 的圆形轨道上，放置一个宽度为 $L$、深度为 $H$ 的长方体水槽。槽中装有水，水槽静止时的水深为 $h$，且 $h<H$。水槽以恒定角速度 $\omega$ 沿轨道逆时针运动，在 $t=0$ 时通过轨道最低点。设水面形状变化足够快，可以假定为准定常状态，回答下列问题。重力加速度为 $g$；轨道半径 $R$ 远大于 $L,H,h$，且离心力大于重力。（50分）

**(1)** 求时刻 $t$ 水槽内水面与水平方向的夹角 $\theta$。由 $R\gg h$ 和 $R\gg L$，可以将圆形轨道中心至水面的距离近似为 $R$。

**(2)** 求水槽转动一周期间槽内水不溢出的水深 $h$ 的条件。可以使用公式

$$
\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}.
$$

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
