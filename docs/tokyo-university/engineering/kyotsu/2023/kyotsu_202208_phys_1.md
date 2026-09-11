---
sidebar_label: '2022年8月実施 物理学1'
tags:
  - Tokyo-University
  - Physics.Mechanics.Small-Angle-Pendulum
  - Physics.Mechanics.Spring-Pendulum-Coupled-Normal-Modes
  - Physics.Mechanics.Time-Dependent-Harmonic-Oscillator
---

# 東京大学 工学系研究科 2022年8月実施 物理学1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

質量と太さを無視できる長さ $l$ の剛体棒の下端に、質量 $m$ の点状のおもりを付けた単振り子がある。水平方向に $x$ 軸、鉛直下向きに $y$ 軸をとる。棒の上端は蝶番で支持され、振り子は $xy$ 面内を摩擦なく回転する。棒と $y$ 軸のなす角を $\theta$、時刻を $t$ とし、$\dot\theta=d\theta/dt$、$\ddot\theta=d^2\theta/dt^2$ とする。重力加速度を $g$ とし、空気抵抗を無視する。

I. 蝶番を原点 O に固定する。

1. おもりの $x,y$ 方向の運動方程式から、$\theta$ の微分方程式を導け。
2. $|\theta|\ll1$ とし、$\sin\theta\simeq\theta$、$\cos\theta\simeq1$ の近似を用いる。おもりが $(x,y)=(0,l)$ で静止した状態から、$t=0$ に $+x$ 方向へ初速 $u_1$ を与える。$t\ge0$ の $\theta(t)$ を求めよ。

II. 蝶番を水平方向にのみ伸縮するばねの先端に固定する。ばね定数を $k$ とし、ばねと蝶番の質量を無視する。蝶番の $x$ 座標を $\delta$ とし、ばねの自然長で $\delta=0$ とする。$\theta,\sqrt{l/g}\dot\theta,(l/g)\ddot\theta$ はすべて微小で、これらの二次以上の項を無視できる。

1. おもりの $y$ 方向の運動方程式から棒の張力を求めよ。
2. 蝶番に働く $x$ 方向の力がつり合うことから、$\delta$ と $\theta$ の関係を求めよ。
3. この関係を用い、おもりの $x$ 方向の運動方程式から $\theta$ の微分方程式を導け。
4. 蝶番が O、おもりが $(0,l)$ に静止していた状態から、$t=0$ におもりを $+x$ 方向へ初速 $u_2$ で打ち出す。$\theta(t)$ を求めよ。

III. $t=0$ から蝶番を水平方向に $\xi=A\sin\omega t$ で強制的に動かす。$A,\omega$ は実定数で、$\omega\ne\sqrt{g/l}$ とする。$t<0$ では蝶番は O、おもりは $(0,l)$ で静止していた。I.2 の微小角近似のもとで、$t\ge0$ の $\theta(t)$ を求めよ。
![固定支点、ばね付き支点、強制的に動く支点の単振り子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2023/kyotsu_202208_phys_1_pendulum_audited.svg)

#### 题目描述

质量及粗细可忽略、长为 $l$ 的刚杆下端连接质量为 $m$ 的质点，组成单摆。取水平向右为 $x$、竖直向下为 $y$。杆上端由铰链支撑，摆在 $xy$ 平面内无摩擦转动。杆与 $y$ 轴的夹角为 $\theta$，角速度、角加速度为 $\dot\theta,\ddot\theta$，重力加速度为 $g$，忽略空气阻力。

I. 铰链固定于原点 O。

1. 从质点在 $x,y$ 方向的运动方程推导 $\theta$ 的微分方程。
2. 采用 $|\theta|\ll1$、$\sin\theta\simeq\theta$、$\cos\theta\simeq1$。质点先静止于 $(0,l)$，在 $t=0$ 获得沿 $+x$ 的初速度 $u_1$。求 $\theta(t)$。

II. 铰链连接在只能水平伸缩的弹簧末端，弹簧劲度系数为 $k$，弹簧和铰链质量忽略。铰链横坐标为 $\delta$，弹簧原长时 $\delta=0$。$\theta,\sqrt{l/g}\dot\theta,(l/g)\ddot\theta$ 均为小量，舍去二阶及以上项。

1. 从竖直运动方程求杆的张力。
2. 从无质量铰链的水平力平衡求 $\delta,\theta$ 的关系。
3. 据此从质点的水平运动方程推导 $\theta$ 的方程。
4. 铰链在 O、质点在 $(0,l)$ 静止后，于 $t=0$ 给质点沿 $+x$ 的初速度 $u_2$。求 $\theta(t)$。

III. 从 $t=0$ 起，铰链按水平位移 $\xi=A\sin\omega t$ 强制运动，$A,\omega$ 为实常数，$\omega\ne\sqrt{g/l}$。此前铰链在 O、质点在 $(0,l)$ 静止。使用 I.2 的小角近似，求 $t\ge0$ 的 $\theta(t)$。

## **Kai**

### I.

1. 棒の張力を $T$ とする。$x=l\sin\theta,y=l\cos\theta$ より

$$
\begin{aligned}
ml(\ddot\theta\cos\theta-\dot\theta^2\sin\theta)&=-T\sin\theta,\\
-ml(\ddot\theta\sin\theta+\dot\theta^2\cos\theta)&=mg-T\cos\theta.
\end{aligned}
$$

第一式に $\cos\theta$、第二式に $-\sin\theta$ を掛けて加えると

$$
\boxed{\ddot\theta+\frac gl\sin\theta=0}.
$$

2. $\omega_0=\sqrt{g/l}$ とおく。線形化した式は $\ddot\theta+\omega_0^2\theta=0$。$\theta(0)=0,\dot\theta(0)=u_1/l$ より

$$
\boxed{\theta(t)=\frac{u_1}{l\omega_0}\sin\omega_0t}.
$$

### II.

1. $y=l\cos\theta$ の加速度は二次の微小量なので、$0=mg-T$。よって $\boxed{T=mg}$。
2. 質量のない蝶番の力のつり合いより $-k\delta+T\sin\theta=0$。一次まで残すと

$$
\boxed{\delta=\frac{mg}{k}\theta}.
$$

3. $x\simeq\delta+l\theta$ と $m\ddot x=-mg\theta$ より

$$
\boxed{\left(l+\frac{mg}{k}\right)\ddot\theta+g\theta=0}.
$$

4. $\ell_{\rm eff}=l+mg/k$、$\Omega=\sqrt{g/\ell_{\rm eff}}$ とおく。初期速度はおもりの速度であり、$u_2=\dot x(0)=\ell_{\rm eff}\dot\theta(0)$ なので

$$
\boxed{\theta(t)=\frac{u_2}{\ell_{\rm eff}\Omega}\sin\Omega t
=\frac{u_2\sqrt{k}}{\sqrt{g(kl+mg)}}\sin\left(\sqrt{\frac{gk}{kl+mg}}\,t\right)}.
$$

### III.

$x\simeq\xi+l\theta$ の運動方程式は

$$
\ddot\theta+\omega_0^2\theta=-\frac{\ddot\xi}{l}
=\frac{A\omega^2}{l}\sin\omega t\qquad(t>0).
$$

駆動開始直後、鉛直な棒はおもりに水平の力積を与えないため $\dot x(0+)=0$。したがって

$$
\theta(0)=0,\qquad
\dot\theta(0+)=-\frac{\dot\xi(0+)}l=-\frac{A\omega}{l}.
$$

一般解にこれらを代入すると

$$
\boxed{\theta(t)=\frac{A\omega}{l(\omega_0^2-\omega^2)}
\left(\omega\sin\omega t-\omega_0\sin\omega_0t\right)}.
$$

