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

水平方向に移動できる質量 $M$ の台車上で、質量 $m$ の質点がばね定数 $k$ のばねと粘性減衰係数 $c$ の減衰器により、台車と同じ方向に支持されている。静止座標系における台車位置を $x$、ばねの静的平衡状態からの伸びを $\xi$ とし、これらを一般化座標とする。（50 点）

![台車と内部のばね・減衰器（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_dynamics-1-original.png)

1. 運動エネルギー $T$ とポテンシャルエネルギー $U$ を求めよ。
2. 非保存力による一般化力 $Q_x^{\mathrm{nc}},Q_\xi^{\mathrm{nc}}$ を求めよ。
3. Lagrange の運動方程式を求めよ。
4. $t=0$ で $\xi=\xi_0,\dot\xi=0,x=\dot x=0$ のとき、$\xi,x$ を時間の関数として求めよ。次の記号を用い、$0<\zeta<1$ とする。

$$
\omega_n=\sqrt{\frac kM+\frac km},\qquad
\zeta=\frac c2\sqrt{\frac1k\left(\frac1M+\frac1m\right)}.
$$

#### 题目描述

质量 $M$ 的自由小车内有质量 $m$ 的物体，通过刚度 $k$ 的弹簧和阻尼 $c$ 与车相连。小车绝对位移为 $x$、内部物体相对平衡位置的位移为 $\xi$。求能量、非保守广义力、Lagrange 方程，并在相对初位移 $\xi_0$、小车初位移及两初速度均为零时求欠阻尼响应。$\omega_n,\zeta$ 按题给定义。

## **Kai**

### (1)

質点の絶対速度は $\dot x+\dot\xi$ なので

$$
\boxed{T=\frac12M\dot x^2+\frac12m(\dot x+\dot\xi)^2,\qquad
U=\frac12k\xi^2.}
$$

### (2)

減衰力は内部の相対速度によって生じ、仮想仕事は $\delta W_{\mathrm{nc}}=-c\dot\xi\,\delta\xi$ である。よって

$$
\boxed{Q_x^{\mathrm{nc}}=0,\qquad Q_\xi^{\mathrm{nc}}=-c\dot\xi.}
$$

### (3)

$$
\boxed{(M+m)\ddot x+m\ddot\xi=0,\qquad
m(\ddot x+\ddot\xi)+c\dot\xi+k\xi=0.}
$$

### (4)

第 1 式を初期条件のもとで積分すると

$$
(M+m)x+m\xi=m\xi_0.
$$

また $x$ を消去すれば

$$
\frac{Mm}{M+m}\ddot\xi+c\dot\xi+k\xi=0,
\qquad\ddot\xi+2\zeta\omega_n\dot\xi+\omega_n^2\xi=0.
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
