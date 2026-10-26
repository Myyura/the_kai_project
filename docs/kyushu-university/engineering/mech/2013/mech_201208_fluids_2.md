---
sidebar_label: "2012年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Jet-Propulsion
---

# 九州大学 工学府 機械系専攻 2012年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように，幅 $A$ で，一様な速度 $V$ を持つ二次元噴流が，噴流と同じ向きに一定の速度 $v$ で動く（ただし $V>v$ とする）平板と衝突し，互いに反対向きの流れに分かれて，一様な速度で平板に沿って流出している。平板の表面は衝突噴流に対して傾いており，噴流と平板表面の法線とのなす角は $\theta$ である。流体の密度は $\rho$ であり，また流れは水平面上にあり，さらに流体の粘性を無視できるものとして，以下の問いに答えよ。（50点）

**(1)** 平板とともに移動する相対座標系で見たときの，衝突後の流れの速さ $V_{r1}$ および $V_{r2}$ を求めよ。

**(2)** 平板とともに移動する相対座標系で見たときの，衝突後の流れの幅 $A_1$ および $A_2$ を求めよ。

**(3)** 噴流が単位奥行きあたりの平板に及ぼす力による仕事率を求めよ。

![原題の図：移動する傾斜平板と衝突噴流](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_fluids-2-original.png)

### 题目描述

如图所示，宽度为 $A$、速度均匀且为 $V$ 的二维射流，撞击一块以恒定速度 $v$ 沿射流方向运动的平板，其中 $V>v$。射流撞击后分成方向相反的两股流动，分别以均匀速度沿平板流出。平板表面相对于入射射流倾斜，射流与平板表面法线的夹角为 $\theta$。流体密度为 $\rho$，流动位于水平面内，且流体黏性可以忽略。回答下列问题。（50分）

**(1)** 在随平板一起运动的相对坐标系中，求撞击后两股流动的速率 $V_{r1}$ 和 $V_{r2}$。

**(2)** 在随平板一起运动的相对坐标系中，求撞击后两股流动的宽度 $A_1$ 和 $A_2$。

**(3)** 求射流对单位进深平板施加的力所作功的功率。

## **Kai**

### (1)

平板とともに等速並進する座標系も慣性系である。噴流の入射相対速度は $w=V-v$、各自由噴流の圧力は大気圧なので、ベルヌーイの式から

$$
\boxed{V_{r1}=V_{r2}=w=V-v}.
$$

### (2)

連続の式と平板接線方向の運動量保存から

$$
\begin{gathered}
A_1+A_2=A,\\
\rho w^2(A_1-A_2)=\rho Aw^2\sin\theta.
\end{gathered}
$$

したがって

$$
\boxed{\begin{gathered}
A_1=\frac A2(1+\sin\theta),\\
A_2=\frac A2(1-\sin\theta)
\end{gathered}}.
$$

### (3)

平板に相対的な流入質量流量は $\rho A(V-v)$ である。法線方向の速度は衝突後ゼロになるため、平板への法線力は

$$
F_n=\rho A(V-v)^2\cos\theta.
$$

平板の移動方向への力の成分は $F_n\cos\theta$ だから、仕事率は

$$
\boxed{P=F_n v\cos\theta=\rho A v(V-v)^2\cos^2\theta}.
$$
