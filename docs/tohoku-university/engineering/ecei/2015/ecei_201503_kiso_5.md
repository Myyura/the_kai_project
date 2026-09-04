---
sidebar_label: 2015年3月実施 基礎科目 問題5 物理基礎1
tags:
  - Tohoku-University
  - Physics.Mechanics.Small-Angle-Pendulum
  - Mathematics.Calculus.Extrema
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 基礎科目 問題5 物理基礎1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 5 に示すように，半径 $a$，質量 $M$ の均質な円板からなる振り子を考える。振り子の回転軸は円板の面に垂直で，円板の中心 $O$ から $h$（$0<h<a$）だけ離れた円板上の点 $P$ にある。円板の厚みおよび回転軸の直径は無視することができる。また空気抵抗や振り子の回転軸での摩擦も無視することができる。重力加速度を $g$ とする。以下の問に答えよ。

(1) 円板の中心 $O$ を通り円板の面に垂直な軸まわりの慣性モーメントが $\frac12Ma^2$ で与えられることを示せ。

(2) 振り子の点 $P$ にある回転軸まわりの慣性モーメントを求めよ。

(3) 円板を回転軸のまわりに振動させたときの振り子の運動方程式と振り子の周期 $T$ を求めよ。ただし，直線 $PO$ と点 $P$ を通る鉛直軸のなす角を $\theta$ とする（Fig. 5 参照）。振動の振幅は十分小さく $\sin\theta\cong\theta$ とみなせる。

(4) 振り子の周期 $T$ を最小にするための $h$ を求めよ。また最小の周期 $T_{\min}$ を求めよ。

### 题目描述

均匀薄圆盘质量 $M$、半径 $a$，绕垂直圆盘平面、过盘内点 $P$ 的固定轴摆动。圆心为 $O$，$OP=h$，$0<h<a$。忽略空气阻力及轴摩擦，重力加速度为 $g$。

1. 证明圆盘绕圆心且垂直盘面的轴的转动惯量为 $Ma^2/2$。
2. 求绕 $P$ 轴的转动惯量。
3. 设 $\theta$ 为 $PO$ 与竖直向下方向的夹角，写出运动方程和小振幅周期 $T$，可用 $\sin\theta\simeq\theta$。
4. 求使周期最小的 $h$ 及最小周期。

## **Kai**

### (1)、(2)

面密度 $\sigma=M/(\pi a^2)$，故

$$
I_O=\int_0^a r^2\sigma\,2\pi r\,dr=\boxed{\frac12Ma^2}.
$$

由平行轴定理，

$$
\boxed{I_P=M\left(\frac{a^2}2+h^2\right)}.
$$

### (3)

重力回复力矩为 $-Mgh\sin\theta$，因此

$$
\boxed{\left(\frac{a^2}2+h^2\right)\ddot\theta+gh\sin\theta=0}.
$$

小振幅下为简谐振动，周期为

$$
\boxed{T=2\pi\sqrt{\frac{a^2/2+h^2}{gh}}}.
$$

### (4)

只需最小化 $h+a^2/(2h)$。由

$$
\frac d{dh}\left(h+\frac{a^2}{2h}\right)=1-\frac{a^2}{2h^2},
$$

最小值在 $\boxed{h=a/\sqrt2}$ 取得，且该点位于 $(0,a)$ 内。因此

$$
\boxed{T_{\min}=2\pi\sqrt{\frac{\sqrt2a}{g}}}.
$$
