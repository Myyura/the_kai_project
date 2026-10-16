---
sidebar_label: "2011年8月実施 問1（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Networks
  - Engineering.Fluid-Mechanics.Pipe-Friction
---

# 九州大学 工学府 機械系専攻 2011年8月実施 流体工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

十分に大きい開放タンクI、IIIが密閉タンクIIを介して図のようにつながっている。Iからは水面下 $H$ に接続された内径 $D$、長さ $L$ の水平管を通り、体積流量 $Q$ の水がIIに流入する。IIの水面も管軸から高さ $H$ にあり、その上部に圧力 $p_G$ のガスが封入されている。

IIの水は内径 $d$、長さ $l$ の二本の水平管からIIIへ流出する。上管はI–II間の管と同じ高さで、流量 $Q/2$ の水をIIIの水面の上方 $h$ から大気に流出させる。下管はIIIの水面より下にあり、途中に弁がある。残りの $Q/2$ は下管を通ってIIIの水中に流れ込む。

全管の摩擦係数を $\lambda$、弁損失係数を $\zeta$ とし、管摩擦・弁・出口以外の損失を無視する。水の密度は $\rho$、重力加速度は $g$、空気とガスの密度は無視できる。次を $H,h,D,d,L,l,\rho,\lambda,g$ で表せ。（50点）

1. 体積流量 $Q$。
2. II内のガスのゲージ圧 $p_G$。
3. 下管の弁損失係数 $\zeta$。

![原題の図（九州大学 2012年度 流体工学 問1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_fluids-1-original.png)

#### 题目描述

大开口水槽I经直径 $D$、长 $L$ 的管向密闭水槽II供水，流量为 $Q$；两槽液面均高于管轴 $H$。II再经两条直径 $d$、长 $l$ 的管向开口槽III排水，各流量 $Q/2$。上管出口高于III液面 $h$，下管出口淹没且装阀。各管摩擦系数为 $\lambda$，仅计摩擦、阀及出口损失。求总流量、II中气体的表压和阀损失系数。

## **Kai**

断面積と損失係数を

$$
A_D=\frac{\pi D^2}{4},\quad A_d=\frac{\pi d^2}{4},\quad
K_D=1+\frac{\lambda L}{D},\quad K_d=1+\frac{\lambda l}{d}
$$

とおく。$v=Q/A_D$、$u=Q/(2A_d)$ とすれば、I–II間と上管についてのエネルギー式は

$$
-\frac{p_G}{\rho g}=K_D\frac{v^2}{2g},\qquad
H+\frac{p_G}{\rho g}=K_d\frac{u^2}{2g}.
$$

### (1)

二式を加えて圧力を消すと

$$
\boxed{Q=\sqrt{\frac{2gH}{K_D/A_D^2+K_d/(4A_d^2)}}
=\frac{\pi D^2d^2\sqrt{2gH}}{2\sqrt{4K_Dd^4+K_dD^4}}}.
$$

### (2)

$$
\boxed{p_G=-\frac{\rho K_DQ^2}{2A_D^2}
=-\rho gH\frac{4K_Dd^4}{4K_Dd^4+K_dD^4}}.
$$

水面高さが等しいIからIIへ流れるには、IIのガス圧は大気圧より低くなければならない。

### (3)

下管ではIIの水面とIIIの水面の高さの差が $H+h$ なので

$$
H+h+\frac{p_G}{\rho g}=(K_d+\zeta)\frac{u^2}{2g}.
$$

上管の式との差をとれば

$$
\boxed{\zeta=\frac{2gh}{u^2}
=\frac{8ghA_d^2}{Q^2}
=\frac hH\left(K_d+4K_D\frac{d^4}{D^4}\right)}.
$$
