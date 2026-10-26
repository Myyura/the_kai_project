---
sidebar_label: "2018年8月実施 力学 問題3"
tags:
  - Osaka-University
  - Physics.Mechanics.Connected-Particles-and-Tension
  - Physics.Mechanics.Work-and-Mechanical-Energy
---

# 大阪大学 工学研究科 機械工学専攻 2018年8月実施 力学 問題3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題3（解答用紙：青）

半径 $a$ の円柱の中心軸 O を通る平面で切断した半円柱を、切断面を水平下向きに固定し、長さ $2\pi a$、線密度 $\lambda$ のロープをかける。ロープの半分が半円柱いっぱいにかかり、残り半分が垂れ下がった速度 $0$ の初期状態から、ロープがすべり落ち始めた。以下の問いに答えなさい。ただし、重力加速度の大きさを $g$ とし、柱面上のロープは柱面の接線方向にのみ運動できるよう拘束されており、ロープと柱面の間の摩擦はないものとする。また、ロープは伸び縮みせず、自由に曲がり、太さは無視できるものとする。

(1) 初期状態において、ロープのうち柱面に接している部分の重心の切断面からの高さを求めなさい。

(2) 図のようにロープが $a\theta$ すべったときのロープ先端の速さを求めなさい。ただし、$0<\theta<\pi$ とする。

(3) 小問 (2) において、ロープ先端の加速度の大きさを求めなさい。

(4) 小問 (2) において、ロープが柱面から離れる点 A でのロープの張力の大きさを求めなさい。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_3_original_figure_1.png)

### 题目描述

问题3（使用蓝色答题纸）

将半径为 $a$ 的圆柱沿过中心轴 O 的平面切成半圆柱，使切面水平朝下并固定。其上搭有一根长度为 $2\pi a$、线密度为 $\lambda$ 的绳。初始时绳的一半覆盖整个半圆柱面，另一半竖直垂下，速度为 $0$；此后绳开始下滑。重力加速度大小为 $g$，柱面上的绳受到约束，只能沿柱面切线方向运动；绳与柱面无摩擦。绳不可伸缩、可自由弯曲，粗细可以忽略。回答下列问题。

(1) 初始状态下，求接触柱面的那部分绳的质心相对于切面的高度。

(2) 当绳如图滑过距离 $a\theta$ 时，求绳端的速率。其中 $0<\theta<\pi$。

(3) 在 (2) 中，求绳端加速度的大小。

(4) 在 (2) 中，求绳离开柱面的 A 点处的张力大小。

## **Kai**

### (1)

切断面から上向きに高さを測る。半円弧の角を $\phi\in[0,\pi]$ とすると、高さは $a\sin\phi$、質量要素は $\lambda a\,d\phi$。従って

$$
\boxed{h_G=\frac{\int_0^\pi a\sin\phi\,\lambda a\,d\phi}
{\lambda\pi a}=\frac{2a}{\pi}}.
$$

### (2)

ロープは伸縮しないので、どの部分も同じ速さ $v$ を持つ。滑った後、柱面上の長さは $a(\pi-\theta)$、鉛直部分の長さは $a(\pi+\theta)$ である。切断面を位置エネルギーの基準にすると

$$
\begin{aligned}
U(\theta)
&=\lambda ga^2\int_\theta^\pi\sin\phi\,d\phi
-\lambda g\int_0^{a(\pi+\theta)}z\,dz\\
&=\lambda ga^2\left[1+\cos\theta-\frac{(\pi+\theta)^2}{2}\right].
\end{aligned}
$$

初期状態の運動エネルギーは $0$ であり、全質量は $2\pi a\lambda$。従って

$$
\frac12(2\pi a\lambda)v^2=U(0)-U(\theta),
$$

$$
\boxed{v=\sqrt{\frac{ag}{\pi}
\left(1-\cos\theta+\pi\theta+\frac{\theta^2}{2}\right)}}.
$$

### (3)

滑った距離を $s=a\theta$ とすると、$v=\dot s$ より

$$
\ddot s=\frac12\frac{d(v^2)}{ds}
=\frac1{2a}\frac{d(v^2)}{d\theta}.
$$

従って、先端は鉛直下向きに

$$
\boxed{\ddot s=\frac{g}{2\pi}(\sin\theta+\pi+\theta)}
$$

の加速度で運動する。

### (4)

鉛直部分の全ての微小要素の加速度は下向きに $\ddot s$ であり、自由端の張力は $0$。微小要素の運動方程式を鉛直部分全体にわたって足し合わせると、A での張力 $T_A$ は

$$
\lambda a(\pi+\theta)\ddot s
=\lambda a(\pi+\theta)g-T_A.
$$

(3) を代入して

$$
\boxed{T_A=\frac{\lambda ag}{2\pi}
(\pi+\theta)(\pi-\theta-\sin\theta)}.
$$

$0<\theta<\pi$ では $\sin\theta<\pi-\theta$ なので $T_A>0$。$\theta\to\pi$ では $T_A\to0$ となる。
