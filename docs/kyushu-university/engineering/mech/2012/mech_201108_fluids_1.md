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

2つの十分に大きな開放タンクIとIIIが密閉タンクIIを介して，図のように接続されている。タンクIから，深さ $H$ の側壁に接続された管内径 $D$，長さ $L$ の水平管を通ってタンクIIに体積流量 $Q$ の水が流れ込む。密閉タンク内の水面は管軸からタンクIと同じ深さ $H$ を持ち，その上部にはガス（圧力 $p_G$）が封入されている。タンクIIの水は管内径 $d$，長さ $l$ の2本の水平管からタンクIIIに流出する。タンクIIIへの2本の接続管のうち，上管はタンクI–II間の管と同じ管軸高さを持ち，$(Q/2)$ の流量の水がタンクIIIの水面上方の高さ $h$ から大気に流出している。一方，下管はタンクIIIの水面下に管軸を持ち，その途中に弁が設けられ，残りの $(Q/2)$ の流量の水がタンクIIIの水中に流れ込んでいる。全ての管の管摩擦係数を $\lambda$，弁損失係数を $\zeta$ とし，管摩擦・弁・出口以外の損失はないものとして，次の問いに答えよ。ただし，重力加速度を $g$，水の密度を $\rho$ とし，空気およびタンクII内のガスの密度は無視できるものとする。（50点）

**(1)** 体積流量 $Q$，

**(2)** タンクII内のガス圧 $p_G$（ゲージ圧），および

**(3)** 下管に付設の弁の損失係数 $\zeta$

を他の物理量 $(H,h,D,d,L,l,\rho,\lambda,g)$ を用いて表せ。

![原題の図：開放タンクI・IIIと密閉タンクIIの接続](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_fluids-1-original.png)

#### 题目描述

如图所示，两个足够大的敞口水槽I和III通过密闭水槽II连接。水以体积流量 $Q$ 从水槽I经过连接在水深 $H$ 处侧壁上的水平管流入水槽II，该管内径为 $D$、长度为 $L$。密闭水槽中的水面距管轴的高度与水槽I相同，为 $H$，水面上方封有压力为 $p_G$ 的气体。水槽II中的水通过两根内径为 $d$、长度为 $l$ 的水平管流入水槽III。通往水槽III的两根连接管中，上管的轴线高度与连接水槽I、II的管轴高度相同，流量为 $Q/2$ 的水从水槽III水面上方高度 $h$ 处流入大气；下管的轴线在水槽III水面以下，中途设有阀门，余下流量为 $Q/2$ 的水流入水槽III的水中。各管的管摩擦系数均为 $\lambda$，阀门损失系数为 $\zeta$。设除管摩擦、阀门及出口损失外没有其他损失，回答下列问题。重力加速度为 $g$，水的密度为 $\rho$，空气以及水槽II内气体的密度均可忽略。（50分）

用其余物理量 $(H,h,D,d,L,l,\rho,\lambda,g)$ 表示：

**(1)** 体积流量 $Q$；

**(2)** 水槽II内气体的压力 $p_G$（表压）；

**(3)** 下管所装阀门的损失系数 $\zeta$。

## **Kai**

断面積と損失係数を

$$
\begin{gathered}
A_D=\frac{\pi D^2}{4},\\
A_d=\frac{\pi d^2}{4},\\
K_D=1+\frac{\lambda L}{D},\\
K_d=1+\frac{\lambda l}{d}
\end{gathered}
$$

とおく。$v=Q/A_D$、$u=Q/(2A_d)$ とすれば、I–II間と上管についてのエネルギー式は

$$
-\frac{p_G}{\rho g}=K_D\frac{v^2}{2g},\qquad
H+\frac{p_G}{\rho g}=K_d\frac{u^2}{2g}.
$$

### (1)

二式を加えて圧力を消すと

$$
\boxed{\begin{gathered}
Q=\sqrt{\frac{2gH}{K_D/A_D^2+K_d/(4A_d^2)}}\\
=\frac{\pi D^2d^2\sqrt{2gH}}{2\sqrt{4K_Dd^4+K_dD^4}}
\end{gathered}}.
$$

### (2)

$$
\boxed{\begin{gathered}
p_G=-\frac{\rho K_DQ^2}{2A_D^2}\\
=-\rho gH\frac{4K_Dd^4}{4K_Dd^4+K_dD^4}
\end{gathered}}.
$$

水面高さが等しいIからIIへ流れるには、IIのガス圧は大気圧より低くなければならない。

### (3)

下管ではIIの水面とIIIの水面の高さの差が $H+h$ なので

$$
H+h+\frac{p_G}{\rho g}=(K_d+\zeta)\frac{u^2}{2g}.
$$

上管の式との差をとれば

$$
\boxed{\begin{gathered}
\zeta=\frac{2gh}{u^2}\\
=\frac{8ghA_d^2}{Q^2}\\
=\frac hH\left(K_d+4K_D\frac{d^4}{D^4}\right)
\end{gathered}}.
$$
