---
sidebar_label: "2012年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Strain-Energy
---

# 九州大学 工学府 機械系専攻 2012年8月実施 材料力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図3の構造において，次の問に答えよ。（40点）

**1)** BC間のSFD，BMDを描きなさい。

**2)** 点Bの垂直方向変位 $\delta_{BV}$，水平方向変位 $\delta_{BH}$ を求めよ。

![原題の図3：四分円形棒ABと直線棒BC](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_material-3-original.png)

図中，$E$ はヤング率，$\phi d$ は直径 $d$ を表し，$a\gg d$ である。ABは半径 $a$ の四分円形棒，BCは長さ $a$ の直線棒で，A，Cは固定端，Bはピン継手である。図のBに作用する下向き荷重の大きさを $P$ とおく。

### 题目描述

对于图3的结构，回答下列问题。（40分）

**1)** 画出BC段的剪力图（SFD）和弯矩图（BMD）。

**2)** 求B点的竖直位移 $\delta_{BV}$ 和水平位移 $\delta_{BH}$。

图中 $E$ 为杨氏模量，$\phi d$ 表示直径 $d$，且 $a\gg d$。AB为半径 $a$ 的四分之一圆弧杆，BC为长 $a$ 的直杆；A、C固定，B铰接。将图中B点向下的载荷大小记为 $P$。

## **Kai**

円断面について

$$
\begin{gathered}
A_s=\frac{\pi d^2}{4},\\
I=\frac{\pi d^4}{64},\\
\eta=\frac{I}{A_sa^2}=\frac{d^2}{16a^2}
\end{gathered}
$$

とおく。剪断変形は無視し、曲げと軸方向変形を考える。水平変位を求めるため、BC の軸方向剛性も必要となる。

### (1)

ピンから円弧 AB に加わる下向き力を $P_1$、右向き力を $H$ とする。BC に加わる力は下向き $P_2=P-P_1$、左向き $H$ で、ピンでの伝達モーメントは 0 である。

B を角度 0、A を角度 $\pi/2$ とする円弧上の断面で

$$
\begin{gathered}
M=a\{P_1\sin\theta+H(1-\cos\theta)\},\\
N=H\cos\theta-P_1\sin\theta.
\end{gathered}
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
\begin{gathered}
\alpha=\frac\pi4(1+\eta),\\
\beta=\frac{1-\eta}{2},\\
\gamma=\frac{3\pi}4-2+\left(1+\frac\pi4\right)\eta,
\end{gathered}
$$

$$
D_0=(1+3\alpha)\gamma-3\beta^2
$$

とおく。二方向の変位の適合条件を解けば

$$
\begin{gathered}
P_1=\frac{\gamma}{D_0}P,\\
H=-\frac{\beta}{D_0}P,\\
\boxed{P_2=\frac{3(\alpha\gamma-\beta^2)}{D_0}P}.
\end{gathered}
$$

B から C へ向かう座標を $x\in[0,a]$ とし、正曲げを下側引張りと定めると

$$
\boxed{V(x)=-P_2,\qquad M(x)=-P_2x}.
$$

SFD は一定値 $-P_2$、BMD は B の 0 から C の $-P_2a$ へ下がる三角形である。

![BC の SFD と BMD](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_material-3-diagrams.svg)

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
\boxed{\begin{gathered}
\delta_{BV}\simeq
\frac{3\pi^2-8\pi-4}{K}\frac{Pa^3}{EI},\\
\delta_{BH}\simeq\frac8K\frac{Pa}{EA_s}
\end{gathered}}.
$$

水平変位は鉛直変位に比べて小さいが、その先頭項を求めるときは $EA_s$ を有限のまま保つ。
