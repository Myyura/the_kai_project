---
sidebar_label: "2017年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Damped-Harmonic-Motion
---

# 九州大学 工学府 機械系専攻 2017年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

水平方向に移動できる質量 $M$ の台車の上に、質量 $m$ の質点がばね定数 $k$ のばねと粘性減衰係数 $c$ の減衰器で、台車の移動と同一方向に支持されている。静止座標系における台車の位置を $x$、ばねの静的平衡状態からの伸びを $\xi$ とする。$x,\xi$ を一般化座標とする。（50点）

**(1)** 系の運動エネルギー $T$ とポテンシャルエネルギー $U$ を求めよ。

**(2)** 一般化力としての非保存力 $Q_x^{nc},Q_\xi^{nc}$ を求めよ。

**(3)** ラグランジュの運動方程式を求めよ。

**(4)** 時間 $t=0$ で $\xi=\xi_0,\ \dot\xi=0,\ x=\dot x=0$ の初期条件のもと、$\xi,x$ を時間の関数として求めよ。

$$
\begin{aligned}
\omega_n&=\sqrt{\frac{k}{M}+\frac{k}{m}},\\
\zeta&=\frac{c}{2}\sqrt{\frac1k\left(\frac1M+\frac1m\right)}
\end{aligned}
$$

として解答せよ。$0<\zeta<1$ とする。

![台車と内部のばね・減衰器の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_dynamics-1-original.png)

### 题目描述

在可沿水平方向移动的质量为 $M$ 的小车上，质量为 $m$ 的质点由弹簧常数为 $k$ 的弹簧和黏性阻尼系数为 $c$ 的阻尼器沿小车移动方向支承。静止坐标系中小车的位置为 $x$，弹簧相对静平衡状态的伸长量为 $\xi$。取 $x,\xi$ 为广义坐标。（50分）

**(1)** 求系统的动能 $T$ 和势能 $U$。

**(2)** 求作为广义力的非保守力 $Q_x^{nc},Q_\xi^{nc}$。

**(3)** 求拉格朗日运动方程。

**(4)** 在 $t=0$ 时初始条件为 $\xi=\xi_0,\ \dot\xi=0,\ x=\dot x=0$，求 $\xi,x$ 随时间的函数。使用

$$
\begin{aligned}
\omega_n&=\sqrt{\frac{k}{M}+\frac{k}{m}},\\
\zeta&=\frac{c}{2}\sqrt{\frac1k\left(\frac1M+\frac1m\right)}
\end{aligned}
$$

作答，并设 $0<\zeta<1$。

## **Kai**

### (1)

質点の絶対速度は $\dot x+\dot\xi$ なので

$$
\boxed{\begin{gathered}
T=\frac12M\dot x^2+\frac12m(\dot x+\dot\xi)^2,\\
U=\frac12k\xi^2.
\end{gathered}}
$$

### (2)

減衰力は内部の相対速度によって生じ、仮想仕事は $\delta W_{\mathrm{nc}}=-c\dot\xi\,\delta\xi$ である。よって

$$
\boxed{Q_x^{\mathrm{nc}}=0,\qquad Q_\xi^{\mathrm{nc}}=-c\dot\xi.}
$$

### (3)

$$
\boxed{\begin{gathered}
(M+m)\ddot x+m\ddot\xi=0,\\
m(\ddot x+\ddot\xi)+c\dot\xi+k\xi=0.
\end{gathered}}
$$

### (4)

第 1 式を初期条件のもとで積分すると

$$
(M+m)x+m\xi=m\xi_0.
$$

また $x$ を消去すれば

$$
\begin{gathered}
\frac{Mm}{M+m}\ddot\xi+c\dot\xi+k\xi=0,\\
\ddot\xi+2\zeta\omega_n\dot\xi+\omega_n^2\xi=0.
\end{gathered}
$$

$\omega_d=\omega_n\sqrt{1-\zeta^2}$ とおくと、両初期条件を満たす解は

$$
\boxed{\xi(t)=\xi_0e^{-\zeta\omega_nt}
\left(\cos\omega_dt+\frac{\zeta}{\sqrt{1-\zeta^2}}\sin\omega_dt\right),}
$$

$$
\boxed{x(t)=\frac{m}{M+m}[\xi_0-\xi(t)].}
$$

長時間後は $\xi\to0$、$x\to m\xi_0/(M+m)$ となり、系全体の重心位置は変わらない。
