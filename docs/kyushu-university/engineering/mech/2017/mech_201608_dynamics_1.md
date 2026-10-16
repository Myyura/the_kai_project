---
sidebar_label: "2016年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Damped-Harmonic-Motion
---

# 九州大学 工学府 機械系専攻 2016年8月実施 機械力学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$、長さ $2l$ の細い一様な剛体棒が O で自由に回転できるよう支持され、重心 G の慣性モーメントは $I_G=ml^2/3$ である。図 (a) では O と G が一致し、棒の右端はばね定数 $k$ のばねと粘性減衰係数 $c$ の減衰器で棒に垂直に支持される。ばねが自然長のとき棒は水平である。微小回転における右端の上向き変位を $x$、重力加速度を $g$ とする。（50 点）

![支持位置を変える剛体棒（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_dynamics-1-original.png)

1. Newton の第二法則から $x$ の運動方程式を示し、無減衰固有角振動数 $\omega_n$ と臨界粘性減衰係数 $c_c$ を求めよ。
2. $c=0$、$x(0)=x_0,\dot x(0)=0$ のとき、O の支持部から棒が受ける力 $F(t)$ を求めよ。
3. 図 (b) では O を G から左へ $l/3$ 移し、静的平衡で棒が水平となるようばねをあらかじめ $\delta$ 伸ばした。$\delta$ と、静的平衡からの右端上向き変位 $x$ の運動方程式を求めよ。
4. 図 (b) について (2) と同じ問いに答えよ。

#### 题目描述

质量 $m$、长 $2l$ 的均匀杆先在中心铰支，右端有竖直弹簧和阻尼器，弹簧自然长时杆水平。求运动方程、固有频率、临界阻尼，以及无阻尼初位移激励下支点反力。再把支点向左移 $l/3$，预拉弹簧使杆在静态平衡时水平，求预伸长、相对平衡位置的运动方程和相同初始条件下的支点反力。

## **Kai**

支持力は上向きを正とし、微小変位の一次までを扱う。

### (1)

$x=l\theta$ とすると、O まわりのモーメント式は

$$
I_G\ddot\theta=-klx-cl\dot x,
\qquad\boxed{\frac m3\ddot x+c\dot x+kx=0.}
$$

したがって

$$
\boxed{\omega_n=\sqrt{\frac{3k}{m}},\qquad c_c=2\sqrt{\frac{mk}{3}}.}
$$

### (2)

$$
x(t)=x_0\cos\left(\sqrt{\frac{3k}{m}}t\right).
$$

G は固定されるので、鉛直方向の力のつり合いは $F-mg-kx=0$。よって

$$
\boxed{F(t)=mg+kx_0\cos\left(\sqrt{\frac{3k}{m}}t\right).}
$$

### (3)

O から G まで $l/3$、右端まで $4l/3$ である。静的つり合いから

$$
k\delta\frac{4l}{3}=mg\frac l3,
\qquad\boxed{\delta=\frac{mg}{4k}.}
$$

$I_O=I_G+m(l/3)^2=4ml^2/9$、$x=(4l/3)\theta$ であり、平衡位置まわりでは重力とばねの初期張力の定常モーメントが相殺される。したがって

$$
\boxed{\frac m4\ddot x+c\dot x+kx=0.}
$$

### (4)

$c=0$ では

$$
x(t)=x_0\cos\left(2\sqrt{\frac km}t\right),\qquad
 y_G=\frac x4.
$$

鉛直方向の運動方程式は

$$
\frac m4\ddot x=F+k(\delta-x)-mg.
$$

$\ddot x=-4kx/m$ と $k\delta=mg/4$ を代入すると、変動項が相殺されて

$$
\boxed{F(t)=\frac34mg.}
$$
