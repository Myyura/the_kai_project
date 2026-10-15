---
sidebar_label: "2012年度 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Forced-Vibration
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2012年度 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$ の直方体が、左右のばね定数 $k$ のばねで支持され、滑らかな水平面上を動く。直方体の点 O には、質量 $M$、重心 G まわりの慣性モーメント $I$、OG 間距離 $L$ の物理振り子が取り付けられている。左支持部を $u(t)=A\sin\Omega t$ で加振し、右支持部は固定する。O の座標を $(x,0)$、下向き鉛直からの振り子角を $\theta$ とし、$u=x=\theta=0$ が平衡である。（50 点）

![物理振り子を取り付けたばね支持物体（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2012/dynamics-1-original.png)

1. 運動エネルギー $T$、ポテンシャルエネルギー $U$ を求めよ。
2. $x,\theta$ に関する線形化した Lagrange 方程式を求めよ。
3. $x,\theta$ の定常解を求めよ。
4. 振り子がない 1 自由度系が共振しているとき、振り子を付けて直方体の振動を抑えたい。振り子の設計条件を示せ。

#### 题目描述

左右各一根刚度 $k$ 的弹簧支承质量 $m$ 的物体，左支点作正弦运动。物体上铰接质量 $M$、重心惯量 $I$、支点至重心距离 $L$ 的物理摆。求能量、线性运动方程和谐波稳态响应；再求把摆用作动力吸振器、抑制原物体共振的设计条件。

## **Kai**

### (1)

$G=(x+L\sin\theta,L\cos\theta)$ とし、鉛直下向きを正とする。

$$
\boxed{T=\frac12(m+M)\dot x^2+ML\dot x\dot\theta\cos\theta
+\frac12(I+ML^2)\dot\theta^2,}
$$

$$
\boxed{U=\frac k2(x-u)^2+\frac k2x^2-MgL\cos\theta.}
$$

### (2)

$J=I+ML^2$ とおく。微小振動の方程式は

$$
\boxed{(m+M)\ddot x+ML\ddot\theta+2kx=kA\sin\Omega t,\qquad
ML\ddot x+J\ddot\theta+MgL\theta=0.}
$$

### (3)

$$
D(\Omega)=[2k-(m+M)\Omega^2](MgL-J\Omega^2)-M^2L^2\Omega^4
$$

と定義する。$D\ne0$ の場合、$x=X\sin\Omega t$、$\theta=\Theta\sin\Omega t$ を代入して

$$
\boxed{x(t)=\frac{kA(MgL-J\Omega^2)}{D(\Omega)}\sin\Omega t,\qquad
\theta(t)=\frac{kAML\Omega^2}{D(\Omega)}\sin\Omega t.}
$$

共振点 $D=0$ では、一般に有界な調和定常解は存在しない。

### (4)

振り子がない系の共振は $\Omega^2=2k/m$。この周波数で $X=0$ とするには

$$
\boxed{\frac{MgL}{I+ML^2}=\frac{2k}{m}.}
$$

すなわち振り子単体の固有角振動数を加振角振動数に一致させる。等価振り子長で書けば

$$
\boxed{L+\frac I{ML}=\frac{mg}{2k}.}
$$

このとき $D=-M^2L^2\Omega^4\ne0$ で、直方体は静止し、振り子は $\Theta=-kA/(ML\Omega^2)$ の振幅で外力を打ち消す。
