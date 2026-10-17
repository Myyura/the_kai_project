---
sidebar_label: "2011年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Forced-Vibration
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2011年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、ばね定数 $k$ の2つのばねで左右両側を支持された質量 $m$ の直方体が滑らかな水平面上を運動する。直方体には点 O まわりに回転できる物理振り子が取り付けられている。物理振り子の質量を $M$、重心 G まわりの慣性モーメントを $I$、点 O から重心 G までの距離を $L$ とする。左側の支持部は $u(t)=A\sin\Omega t$ で変位加振され、右側の支持部は固定されている。水平方向に $x$ 座標、鉛直方向に $y$ 座標をとり、OG が鉛直方向となす角度を $\theta$ とする。点 O の座標を $(x,0)$ とし、$u=0,x=0,\theta=0$ のときに平衡状態にあるものとする。以下の設問に答えよ。（50点）

**(1)** 系の運動エネルギー $T$、およびポテンシャルエネルギー $U$ を求めよ。

**(2)** $x$ および $\theta$ に関して線形化したラグランジュの運動方程式を求めよ。

**(3)** $x$ および $\theta$ の定常解を求めよ。

**(4)** 物理振り子がない場合に直方体とばねの1自由度系が共振状態にあるとき、物理振り子を取り付けることによって直方体の振動を抑えたい。物理振り子をどのように設計するべきか。

![原題のばね支持直方体と物理振り子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_dynamics-1-original.png)

#### 题目描述

如图，质量为 $m$ 的长方体左右两侧由两根弹簧常数均为 $k$ 的弹簧支承，在光滑水平面上运动。长方体上安装有可绕 O 点转动的物理摆。摆的质量为 $M$，绕重心 G 的转动惯量为 $I$，O 点至 G 点的距离为 $L$。左侧支承以位移 $u(t)=A\sin\Omega t$ 激振，右侧支承固定。取水平方向坐标 $x$ 和竖直方向坐标 $y$，OG 与竖直方向的夹角为 $\theta$。O 点坐标为 $(x,0)$，在 $u=0,x=0,\theta=0$ 时系统处于平衡状态。坐标正方向如图。回答下列问题。（50分）

**(1)** 求系统的动能 $T$ 和势能 $U$。

**(2)** 求关于 $x,\theta$ 线性化的拉格朗日运动方程。

**(3)** 求 $x,\theta$ 的稳态解。

**(4)** 未安装物理摆时，长方体与弹簧组成的单自由度系统处于共振状态。若希望通过安装物理摆抑制长方体振动，应如何设计物理摆？

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
\boxed{\begin{gathered}
(m+M)\ddot x+ML\ddot\theta+2kx=kA\sin\Omega t,\\
ML\ddot x+J\ddot\theta+MgL\theta=0.
\end{gathered}}
$$

### (3)

$$
D(\Omega)=[2k-(m+M)\Omega^2](MgL-J\Omega^2)-M^2L^2\Omega^4
$$

と定義する。$D\ne0$ の場合、$x=X\sin\Omega t$、$\theta=\Theta\sin\Omega t$ を代入して

$$
\boxed{\begin{gathered}
x(t)=\frac{kA(MgL-J\Omega^2)}{D(\Omega)}\sin\Omega t,\\
\theta(t)=\frac{kAML\Omega^2}{D(\Omega)}\sin\Omega t.
\end{gathered}}
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
