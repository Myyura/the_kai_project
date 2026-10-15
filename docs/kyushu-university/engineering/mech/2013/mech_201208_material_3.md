---
sidebar_label: "2013年度 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2013年度 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図3の四分円形棒 AB は半径 $a$、直線棒 BC は長さ $a$ であり、A、C は固定端、B はピン継手である。両棒の直径は $d$、ヤング率は $E$、$a\gg d$ とする。図の B に作用する下向き荷重の大きさを $P$ とおく。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/material-3-original.png)

1. BC 間の SFD と BMD を描け。
2. B の鉛直変位 $\delta_{BV}$ と水平変位 $\delta_{BH}$ を求めよ。

#### 题目描述

半径 $a$ 的四分之一圆弧杆 AB 和长 $a$ 的直杆 BC 在 B 铰接，A、C 固定。两杆直径均为 $d$，杨氏模量为 $E$，且 $a\gg d$。将图中 B 处向下荷载记为 $P$。求 BC 的剪力图、弯矩图，以及 B 的竖直、水平位移。

## **Kai**

円断面について

$$
A_s=\frac{\pi d^2}{4},\qquad I=\frac{\pi d^4}{64},\qquad
\eta=\frac{I}{A_sa^2}=\frac{d^2}{16a^2}
$$

とおく。剪断変形は無視し、曲げと軸方向変形を考える。水平変位を求めるため、BC の軸方向剛性も必要となる。

### (1)

ピンから円弧 AB に加わる下向き力を $P_1$、右向き力を $H$ とする。BC に加わる力は下向き $P_2=P-P_1$、左向き $H$ で、ピンでの伝達モーメントは 0 である。

B を角度 0、A を角度 $\pi/2$ とする円弧上の断面で

$$
M=a\{P_1\sin\theta+H(1-\cos\theta)\},\qquad
N=H\cos\theta-P_1\sin\theta.
$$

円弧のエネルギー

$$
U_{AB}=\frac a2\int_0^{\pi/2}
\left(\frac{M^2}{EI}+\frac{N^2}{EA_s}\right)d\theta
$$

を微分すると、B の下向き変位と右向き変位は

$$
\begin{aligned}
\delta_{BV}&=\frac{a^3}{EI}
\left\{\frac\pi4(1+\eta)P_1+\frac12(1-\eta)H\right\},\\
\delta_{BH}&=\frac{a^3}{EI}
\left\{\frac12(1-\eta)P_1+
\left(\frac{3\pi}4-2+\frac\pi4\eta\right)H\right\}.
\end{aligned}
$$

一方、直線棒 BC から求めると

$$
\delta_{BV}=\frac{P_2a^3}{3EI},\qquad
\delta_{BH}=-\frac{Ha}{EA_s}.
$$

そこで

$$
\alpha=\frac\pi4(1+\eta),\qquad
\beta=\frac{1-\eta}{2},\qquad
\gamma=\frac{3\pi}4-2+\left(1+\frac\pi4\right)\eta,
$$

$$
D_0=(1+3\alpha)\gamma-3\beta^2
$$

とおく。二方向の変位の適合条件を解けば

$$
P_1=\frac{\gamma}{D_0}P,\qquad
H=-\frac{\beta}{D_0}P,\qquad
\boxed{P_2=\frac{3(\alpha\gamma-\beta^2)}{D_0}P}.
$$

B から C へ向かう座標を $x\in[0,a]$ とし、正曲げを下側引張りと定めると

$$
\boxed{V(x)=-P_2,\qquad M(x)=-P_2x}.
$$

SFD は一定値 $-P_2$、BMD は B の 0 から C の $-P_2a$ へ下がる三角形である。

![BC の SFD と BMD](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/material-3-diagrams.svg)

### (2)

以上より

$$
\boxed{\delta_{BV}=\frac{Pa^3}{EI}
\frac{\alpha\gamma-\beta^2}{D_0}\quad\text{（下向き）}},
$$

$$
\boxed{\delta_{BH}=\frac{Pa}{EA_s}
\frac{\beta}{D_0}\quad\text{（右向き）}}.
$$

$a\gg d$ の主要項だけを残す場合は、分力を決める係数では $\eta\to0$ とできる。

$$
K=9\pi^2-12\pi-44
$$

とおけば

$$
P_2\simeq\frac{3(3\pi^2-8\pi-4)}K P,
$$

$$
\boxed{\delta_{BV}\simeq
\frac{3\pi^2-8\pi-4}{K}\frac{Pa^3}{EI},\qquad
\delta_{BH}\simeq\frac8K\frac{Pa}{EA_s}}.
$$

水平変位は鉛直変位に比べて小さいが、その先頭項を求めるときは $EA_s$ を有限のまま保つ。
