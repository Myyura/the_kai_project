---
sidebar_label: "2018年度 力学 問題3"
tags:
  - Osaka-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Work-and-Mechanical-Energy
---

# 大阪大学 工学研究科 機械工学専攻 2018年度 力学 問題3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$、長さ $\ell$ の一様な棒の両端が、滑らかな鉛直壁と水平床に接している。壁と床の交点を O、床に沿う右向きを $x$ 軸、壁に沿う上向きを $y$ 軸とする。壁から棒上端への抗力は $+x$ 向きに $N_x$、床から下端への抗力は $+y$ 向きに $N_y$ である。重心 G の座標を $(x_G,y_G)$、棒の角を鉛直下向きから測って $\theta$ とする。

時刻 $0$ に棒は $\theta=\theta_0$（$0<\theta_0<\pi/2$）で静止しており、そこから静かに放す。棒が動き始めてから上端が壁を離れるまでを考える。棒の太さを無視し、重心まわりの慣性モーメントを $I_G$、重力加速度の大きさを $g$ とする。

1. 棒の並進および G まわりの回転の運動方程式を、$m,I_G,x_G,y_G,\theta,N_x,N_y$ で表せ。
2. $I_G$ を $m,\ell$ で表せ。
3. (1)、(2) から $N_x,N_y$ を消去し、$\ddot\theta$ を求めよ。
4. エネルギー保存則から $\dot\theta$ を求めよ。
5. 上端が壁から離れる瞬間の $\cos\theta$ を求めよ。
6. 下端が床から離れないことを示せ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2018/mech_201708_mechanics_3-question-fig1.png)

#### 题目描述

质量为 $m$、长度为 $\ell$ 的均匀细杆，两端分别接触光滑竖直墙和水平地面。以墙角为原点，向右为 $x$ 正方向、向上为 $y$ 正方向。墙面对上端的支持力为 $N_x$，地面对下端的支持力为 $N_y$。质心坐标为 $(x_G,y_G)$，杆相对于竖直向下的夹角为 $\theta$。

从静止角度 $\theta_0\in(0,\pi/2)$ 释放，研究开始运动至上端离墙的阶段。忽略杆的粗细，记质心转动惯量为 $I_G$，重力加速度为 $g$。

1. 写出质心平动和绕质心转动的方程。
2. 求 $I_G$。
3. 消去支持力，求角加速度。
4. 用能量守恒求角速度。
5. 求上端离墙时的 $\cos\theta$。
6. 证明下端不会离开地面。

## **Kai**

### (1)

並進と重心まわりの回転の運動方程式は

$$
\boxed{m\ddot x_G=N_x},\qquad
\boxed{m\ddot y_G=N_y-mg},
$$

$$
\boxed{I_G\ddot\theta
=\frac\ell2(N_y\sin\theta-N_x\cos\theta)}.
$$

### (2)

線密度 $m/\ell$ より

$$
\boxed{I_G=\frac m\ell\int_{-\ell/2}^{\ell/2}s^2\,ds
=\frac1{12}m\ell^2}.
$$

### (3)

両端が壁と床に接している間は

$$
x_G=\frac\ell2\sin\theta,\qquad y_G=\frac\ell2\cos\theta.
$$

従って

$$
\ddot x_G=\frac\ell2(\ddot\theta\cos\theta-\dot\theta^2\sin\theta),
\qquad
\ddot y_G=-\frac\ell2(\ddot\theta\sin\theta+\dot\theta^2\cos\theta).
$$

これらと $N_x=m\ddot x_G,N_y=m(\ddot y_G+g)$ を回転の式に代入すると

$$
\frac1{12}m\ell^2\ddot\theta
=-\frac14m\ell^2\ddot\theta+\frac12mg\ell\sin\theta.
$$

よって

$$
\boxed{\ddot\theta=\frac{3g}{2\ell}\sin\theta}.
$$

### (4)

抗力は仕事をしない。$\dot x_G^2+\dot y_G^2=\ell^2\dot\theta^2/4$ とエネルギー保存から

$$
\frac{mg\ell}{2}\cos\theta_0
=\frac{mg\ell}{2}\cos\theta
+\frac12m\frac{\ell^2}{4}\dot\theta^2
+\frac12\frac{m\ell^2}{12}\dot\theta^2.
$$

$\theta$ は増加するので

$$
\boxed{\dot\theta=\sqrt{\frac{3g}{\ell}(\cos\theta_0-\cos\theta)}}.
$$

### (5)

(3)、(4) を水平抗力の式に入れると

$$
N_x=\frac{3mg}{4}\sin\theta(3\cos\theta-2\cos\theta_0).
$$

$\sin\theta>0$ であり、上端が壁を離れるとき $N_x=0$ だから

$$
\boxed{\cos\theta=\frac23\cos\theta_0}.
$$

### (6)

鉛直抗力は

$$
\begin{aligned}
N_y&=mg-\frac{m\ell}{2}
(\ddot\theta\sin\theta+\dot\theta^2\cos\theta)\\
&=mg\left[\frac94\cos^2\theta
-\frac32\cos\theta_0\cos\theta+\frac14\right]\\
&=\frac{mg}{4}\left[
9\left(\cos\theta-\frac13\cos\theta_0\right)^2
+\sin^2\theta_0\right]>0.
\end{aligned}
$$

$0<\theta_0<\pi/2$ より右辺は正であり、対象としている運動中に下端は床から離れない。
