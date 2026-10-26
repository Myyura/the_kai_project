---
sidebar_label: "2011年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 九州大学 工学府 機械系専攻 2011年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$、長さ $2l$ の一様な棒があり、棒の両端の点 A、B には質量の無視できるローラーが取り付けてある。点 A および B は、それぞれ鉛直方向および水平方向のみに移動できるようにガイドによってなめらかに拘束されており、棒は鉛直平面内で運動する。点 A はばね定数 $2k$、点 B はばね定数 $k$ のばねでそれぞれ鉛直方向、水平方向に支持されており、$k$ は $mg/(8l)<k<mg/(4l)$ を満たすとする。棒の鉛直軸からの傾きを $\theta$ とすると、$\theta=0$ で2つのばねはともに自然長である。棒の重心まわりの慣性モーメントは $I_G=ml^2/3$ である。（50点）

**(1)** この系には $0\le\theta\le\pi/2$ の範囲で2つの静的平衡状態が存在する。仮想仕事の原理を用いて静的平衡状態を表す $\theta_1,\theta_2$（$\theta_1<\theta_2$）を求めよ。

**(2)** 系の運動エネルギー $T$ とポテンシャルエネルギー $U$ を示し、ラグランジュの運動方程式を求めよ。

**(3)** (2) で求めた運動方程式を、2つの静的平衡点 $\theta_1,\theta_2$ 近傍の微小角変位 $\phi$ について線形化し、静的平衡点 $\theta_1,\theta_2$ の安定性を議論せよ。

![原題の直交ガイドに拘束された棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2012/mech_201108_dynamics-2-original.png)

### 题目描述

有一质量为 $m$、长度为 $2l$ 的均匀杆，两端 A、B 装有质量可忽略的滚轮。A、B 分别受到光滑导轨约束，只能沿竖直方向和水平方向移动，杆在竖直平面内运动。A 点由弹簧常数 $2k$ 的弹簧沿竖直方向支承，B 点由弹簧常数 $k$ 的弹簧沿水平方向支承，且 $mg/(8l)<k<mg/(4l)$。设杆相对竖直轴的倾角为 $\theta$，在 $\theta=0$ 时两根弹簧均为原长。杆绕重心的转动惯量为 $I_G=ml^2/3$。（50分）

**(1)** 系统在 $0\le\theta\le\pi/2$ 范围内有两个静平衡状态。利用虚功原理，求表示这两个状态的角度 $\theta_1,\theta_2$，其中 $\theta_1<\theta_2$。

**(2)** 写出系统的动能 $T$ 和势能 $U$，并求拉格朗日运动方程。

**(3)** 将 (2) 得到的运动方程分别在两个静平衡点 $\theta_1,\theta_2$ 附近，关于微小角位移 $\phi$ 线性化，并讨论两个静平衡点的稳定性。

## **Kai**

### (1)

$A=(0,2l\cos\theta)$、$B=(2l\sin\theta,0)$、$G=(l\sin\theta,l\cos\theta)$。仮想仕事は

$$
\begin{gathered}
\delta W=-[8kl^2(1-\cos\theta)+4kl^2\cos\theta-mgl]
\sin\theta\,\delta\theta\\
=0.
\end{gathered}
$$

よって

$$
\boxed{\theta_1=0,\qquad
\theta_2=\arccos\left(2-\frac{mg}{4kl}\right).}
$$

与えられた $k$ の範囲では余弦の値が $0$ と $1$ の間にある。

### (2)

重心速度の二乗は $l^2\dot\theta^2$。したがって

$$
\boxed{T=\frac23ml^2\dot\theta^2,}
$$

$$
\boxed{U=4kl^2(1-\cos\theta)^2+2kl^2\sin^2\theta+mgl\cos\theta.}
$$

Lagrange 方程式から

$$
\boxed{\frac43ml^2\ddot\theta+
\sin\theta(8kl^2-4kl^2\cos\theta-mgl)=0.}
$$

### (3)

$J=4ml^2/3$ とすると、平衡点まわりでは $J\ddot\varphi+U''(\theta_i)\varphi=0$。

$\theta_1=0$ では

$$
J\ddot\varphi+(4kl^2-mgl)\varphi=0.
$$

$k<mg/(4l)$ より係数は負なので、$\boxed{\theta_1\text{ は不安定}}$。

$\theta_2$ では平衡条件を使って

$$
J\ddot\varphi+4kl^2\sin^2\theta_2\,\varphi=0.
$$

したがって $\boxed{\theta_2\text{ は安定}}$ で、その微小振動の固有角振動数は $\boxed{\omega_2=\sqrt{3k/m}\sin\theta_2}$。
