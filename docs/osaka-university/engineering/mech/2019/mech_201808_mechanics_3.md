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

半径 $a$ の円柱を中心軸 O を含む平面で切断した半円柱を、切断面が水平で下向きとなるよう固定する。長さ $2\pi a$、線密度 $\lambda$ のロープを、半分が半円柱面にぴったり掛かり、残り半分が鉛直下方に垂れるように載せる。この静止状態からロープが滑り始める。

柱面上のロープは柱面の接線方向にのみ動くよう拘束され、柱面との摩擦はない。ロープは伸縮せず、自由に曲がり、太さを無視できる。重力加速度の大きさを $g$ とする。

1. 初期状態で柱面に接している部分の重心の、切断面からの高さを求めよ。
2. 図のようにロープが $a\theta$ だけ滑ったとき（$0<\theta<\pi$）、ロープ先端の速さを求めよ。
3. (2) のときの先端の加速度の大きさを求めよ。
4. (2) のとき、ロープが柱面から離れる点 A での張力の大きさを求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2019/mech_201808_mechanics_3-question-fig1.png)

#### 题目描述

将半径为 $a$ 的圆柱沿包含中心轴 O 的平面切成半圆柱，固定为剖面水平朝下。将长度为 $2\pi a$、线密度为 $\lambda$ 的绳子搭在柱面上，初始一半紧贴半圆柱面，另一半竖直悬垂，然后从静止开始滑动。

柱面上的绳子被约束为只能沿柱面切线运动，与柱面无摩擦。绳不可伸长，可自由弯曲，粗细忽略，重力加速度为 $g$。

1. 求初始接触柱面部分的重心高于剖面的高度。
2. 当绳滑过 $a\theta$（$0<\theta<\pi$）时，求绳端速率。
3. 求此时绳端加速度大小。
4. 求此时绳离开柱面的 A 点处的张力。

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
