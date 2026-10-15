---
sidebar_label: "2012年度 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 九州大学 工学府 機械系専攻 2012年度 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$、長さ $2l$ の一様な棒の両端 A、B に軽いローラーがある。A は鉛直方向、B は水平方向にのみ動くよう滑らかに拘束され、A はばね定数 $2k$、B は $k$ のばねで支持される。$mg/(8l)<k<mg/(4l)$ とし、棒の鉛直からの傾きが $\theta=0$ のとき両ばねは自然長である。重心慣性モーメントは $I_G=ml^2/3$。（50 点）

![直交ガイドに拘束された棒（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2012/dynamics-2-original.png)

1. 仮想仕事の原理から、$0\le\theta\le\pi/2$ にある二つの平衡角 $\theta_1<\theta_2$ を求めよ。
2. 運動エネルギー、ポテンシャルエネルギーと Lagrange 方程式を求めよ。
3. 各平衡点まわりの微小角変位 $\varphi$ で線形化し、安定性を論ぜよ。

#### 题目描述

均匀杆两端分别受竖直、水平导轨约束，端点弹簧刚度分别为 $2k,k$，杆竖直时均自然长。刚度介于 $mg/(8l)$ 和 $mg/(4l)$。用虚功求两平衡角，再求能量、运动方程及各平衡点的线性稳定性。

## **Kai**

### (1)

$A=(0,2l\cos\theta)$、$B=(2l\sin\theta,0)$、$G=(l\sin\theta,l\cos\theta)$。仮想仕事は

$$
\delta W=-[8kl^2(1-\cos\theta)+4kl^2\cos\theta-mgl]
\sin\theta\,\delta\theta=0.
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
