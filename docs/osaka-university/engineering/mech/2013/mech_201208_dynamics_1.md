---
sidebar_label: "2012年8月実施 機械力学・機構学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Lagrangian-Mechanics
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 大阪大学 工学研究科 機械工学専攻 2012年8月実施 機械力学・機構学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、質量 $m$、長さ $\ell$ の一様な棒の上端に、左右からばね定数 $k/2$ の水平ばねを取り付け、各ばねの他端を固定する。棒の上端は摩擦なく水平方向にのみ移動でき、棒は上端のまわりに鉛直面内で自由に回転できる。重力加速度を $g$ とする。棒の重心を通り紙面に垂直な軸に関する慣性モーメントは $m\ell^2/12$ である。

上端のつり合い位置からの水平変位を $x$、棒の鉛直下向きからの傾きを $\theta$ とする。図のように右向き変位と右側への傾きを正とする。つり合い時の重心を原点とし、右向きに $X$、上向きに $Y$ をとる。

1. 棒の重心の位置 $(X,Y)$ と速度 $(\dot X,\dot Y)$ を $x,\theta$ を用いて表せ。
2. 系の運動エネルギーとポテンシャルエネルギーを $x,\theta$ を用いて表せ。
3. 微小運動を仮定し、ラグランジアンを求めよ。
4. 微小運動の運動方程式を求めよ。
5. $k/m=g/\ell=\omega_0^2$ のとき、2 つの固有角振動数 $\omega_1,\omega_2$（$\omega_1<\omega_2$）と、低い固有角振動数で振動するときの $x$ と $\theta$ の振幅比を求めよ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2013/mech_201208_dynamics_1-question-fig1.png)

#### 题目描述

如图，质量为 $m$、长为 $\ell$ 的均匀杆，上端分别连接左右两根水平弹簧，每根刚度为 $k/2$，另一端固定。杆上端可无摩擦地沿水平方向移动，杆可绕上端在竖直面内自由转动。重力加速度为 $g$，杆绕质心且垂直图面的轴的转动惯量为 $m\ell^2/12$。

上端相对平衡位置的水平位移为 $x$，杆相对竖直向下方向的倾角为 $\theta$，向右位移及向右倾斜为正。以平衡时杆质心为原点，$X$ 向右、$Y$ 向上。

1. 用 $x,\theta$ 表示质心位置和速度。
2. 求系统的动能和势能。
3. 在小振动近似下求拉格朗日量。
4. 求小振动方程。
5. 当 $k/m=g/\ell=\omega_0^2$ 时，求固有角频率 $\omega_1<\omega_2$ 及低频模态下 $x$ 与 $\theta$ 的振幅比。

## **Kai**

### (1)

重心は上端から棒に沿って $\ell/2$ の位置にある。したがって

$$
\boxed{X=x+\frac\ell2\sin\theta},\qquad
\boxed{Y=\frac\ell2(1-\cos\theta)},
$$

$$
\boxed{\dot X=\dot x+\frac\ell2\cos\theta\,\dot\theta},\qquad
\boxed{\dot Y=\frac\ell2\sin\theta\,\dot\theta}.
$$

### (2)

重心の並進と重心まわりの回転を加えると

$$
\begin{aligned}
T&=\frac m2(\dot X^2+\dot Y^2)
+\frac12\frac{m\ell^2}{12}\dot\theta^2\\
&=\boxed{\frac m2\dot x^2
+\frac{m\ell}{2}\cos\theta\,\dot x\dot\theta
+\frac{m\ell^2}{6}\dot\theta^2}.
\end{aligned}
$$

つり合い位置を位置エネルギーの基準に選ぶ。左右のばねのエネルギーを加えれば

$$
\boxed{U=\frac k2x^2+\frac{mg\ell}{2}(1-\cos\theta)}.
$$

### (3)

変位・速度の二次まで残すと

$$
\boxed{\mathcal L=
\frac m2\dot x^2+\frac{m\ell}{2}\dot x\dot\theta
+\frac{m\ell^2}{6}\dot\theta^2
-\frac k2x^2-\frac{mg\ell}{4}\theta^2}.
$$

### (4)

Euler–Lagrange 方程式より

$$
\boxed{m\ddot x+\frac{m\ell}{2}\ddot\theta+kx=0},
$$

$$
\boxed{\frac{m\ell}{2}\ddot x+\frac{m\ell^2}{3}\ddot\theta
+\frac{mg\ell}{2}\theta=0}.
$$

### (5)

$x=X_0\cos\omega t$、$\theta=\Theta_0\cos\omega t$ とおく。固有値条件は

$$
\det\begin{pmatrix}
k-m\omega^2&-m\ell\omega^2/2\\
-m\ell\omega^2/2&mg\ell/2-m\ell^2\omega^2/3
\end{pmatrix}=0.
$$

$k/m=g/\ell=\omega_0^2$ を用いて整理すると

$$
\omega^4-10\omega_0^2\omega^2+6\omega_0^4=0.
$$

よって

$$
\boxed{\omega_1=\omega_0\sqrt{5-\sqrt{19}}},\qquad
\boxed{\omega_2=\omega_0\sqrt{5+\sqrt{19}}}.
$$

低い方のモードについて第1行から

$$
\frac{X_0}{\Theta_0}
=\frac{\ell\omega_1^2}{2(\omega_0^2-\omega_1^2)}
=\boxed{\frac{1+\sqrt{19}}{6}\ell}.
$$

比は正なので、$x$ と $\theta$ は同位相で振動する。
