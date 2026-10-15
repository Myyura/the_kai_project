---
sidebar_label: "2013年度 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Minor-Losses
---

# 九州大学 工学府 機械系専攻 2013年度 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

同一床面に置かれた十分大きい容器と断面積 $A$ の小容器が、床面から高さ $h_0$ の位置で、長さ $l$、内径 $d$ の細い水平円管と弁によりつながっている。両容器は大気開放である。最初は弁が閉じており、大容器の水深は $H_0$、管内は水で満たされ、小容器は空である。$t=0$ に弁を全開にして小容器へ流出させる。

流れは準定常とする。全開時の弁の内径は $d$、損失係数は $\zeta_v$。出口で縮流せず、管入口損失係数は $\zeta_{\rm in}$、管摩擦係数は一定値 $\lambda$、重力加速度は $g$ である。（50点）

1. 小容器の水位 $h$ が $h_0$ より低いときの流量 $Q_1$ を求めよ。
2. 小容器の水位が $h_0$ に達する時刻 $T_1$ を求めよ。
3. 水位 $h$ が $h_0$ より高いときの流量 $Q_2$ を求めよ。水面上昇速度は管出口の速度より十分小さい。
4. 小容器の水位が大容器と同じ高さになる時刻 $T_2$ を求めよ。

![原題の図（九州大学 2013年度 流体工学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2013/fluids-1-original.png)

#### 题目描述

同一地面上的大容器与横截面积 $A$ 的小容器由高度 $h_0$、内径 $d$、长 $l$ 的水平管和阀门连接。初始大容器水深 $H_0$，小容器空，管内充水；$t=0$ 全开阀门。入口、阀门和管摩擦损失系数为 $\zeta_{\rm in},\zeta_v,\lambda$，流动准定常且无缩流。求小容器水位低于或高于管轴时的流量，以及达到管轴和大容器水位的时刻。

## **Kai**

管断面積を $a=\pi d^2/4$、$K=1+\zeta_{\rm in}+\lambda l/d+\zeta_v$ とする。大容器の水位は一定とみなす。

### (1)

自由噴流出口の位置は $h_0$ であり、小容器の水位がそれより低い間は流量は一定である。

$$
\boxed{Q_1=a\sqrt{\frac{2g(H_0-h_0)}K}}.
$$

### (2)

$Q_1T_1=Ah_0$ なので

$$
\boxed{T_1=\frac{Ah_0}{a}\sqrt{\frac{K}{2g(H_0-h_0)}}}.
$$

### (3)

出口が水没すると、二つの自由表面の水位差が駆動水頭になる。管入口・弁・管摩擦の損失に加え、小容器に入る際の出口損失係数1も含める。

$$
\boxed{Q_2(h)=a\sqrt{\frac{2g(H_0-h)}K}}.
$$

$h=h_0$ で (1) と連続する。

### (4)

小容器の体積保存 $A\,dh/dt=Q_2(h)$ を積分して

$$
T_2-T_1=\frac Aa\sqrt{\frac K{2g}}
\int_{h_0}^{H_0}\frac{dh}{\sqrt{H_0-h}}
=\frac{2A}{a}\sqrt{\frac{K(H_0-h_0)}{2g}}.
$$

したがって

$$
\boxed{T_2=T_1+\frac{2A}{a}\sqrt{\frac{K(H_0-h_0)}{2g}}}.
$$
