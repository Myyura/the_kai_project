---
sidebar_label: "2014年8月実施 力学 問題3"
tags:
  - Osaka-University
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 力学 問題3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$x,y$ 軸が定義された水平で滑らかな平面上に、$y$ 軸に沿う壁がある。質量 $M$、半径 $a$ の一様な円板が、中心軸のまわりに角速度 $\omega_0$ で回転しながら速さ $v_0$ で進み、壁に垂直に衝突する。角速度は反時計回りを正とする。衝突中には壁から撃力と、回転を妨げる摩擦力を受ける。円板は衝突後、元の進路の逆向きから反時計回りに測った角度 $\theta$ の方向へ、速さ $v$、角速度 $\omega$ で進む。

円板と壁の反発係数を $1$ とし、壁から離れる直前に接触点は壁に対して滑らないものとする。

1. 円板の中心軸まわりの慣性モーメントを求めよ。
2. 衝突時に円板が $y$ 軸方向に受ける力積を $a,M,\omega_0,\omega$ で表せ。
3. 衝突前後の $y$ 軸方向の運動量変化を $M,v_0,\theta$ で表せ。
4. 衝突後の進行角が $\theta$（$-\pi/2<\theta<\pi/2$）となるための $\omega_0$ の条件を $a,v_0,\theta$ で表せ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_mechanics_3-question-fig1.png)

#### 题目描述

光滑水平面上沿 $y$ 轴设置一面墙。质量为 $M$、半径为 $a$ 的均匀圆盘，以速度 $v_0$ 垂直撞向墙，同时以角速度 $\omega_0$ 绕中心转动；逆时针为角速度正方向。碰撞时墙对圆盘施加冲量和阻碍转动的摩擦力。碰撞后圆盘速度为 $v$、角速度为 $\omega$，前进方向相对于原来进路的反向转过逆时针角 $\theta$。

法向恢复系数为 $1$，圆盘即将离墙时接触点相对于墙无滑动。

1. 求圆盘绕中心轴的转动惯量。
2. 用 $a,M,\omega_0,\omega$ 表示沿 $y$ 方向的冲量。
3. 用 $M,v_0,\theta$ 表示碰撞引起的 $y$ 方向动量变化。
4. 求使碰撞后沿 $\theta\in(-\pi/2,\pi/2)$ 方向运动的初始角速度条件。

## **Kai**

### (1)

面密度は $M/(\pi a^2)$ だから

$$
\boxed{I=\int_0^a r^2\frac{M}{\pi a^2}2\pi r\,dr
=\frac12Ma^2}.
$$

### (2)

$+y$ 向きの力積を $J_y$ とする。接触点は円板中心から $-x$ 方向に距離 $a$ の位置にあるので、中心まわりの角力積は $-aJ_y$。従って

$$
I(\omega-\omega_0)=-aJ_y,
\qquad
\boxed{J_y=\frac12Ma(\omega_0-\omega)}.
$$

### (3)

法線方向の反発係数が $1$ であるため、衝突後の $x$ 方向速度は $v_0$ である。したがって

$$
v\cos\theta=v_0,
\qquad v_y=v\sin\theta=v_0\tan\theta.
$$

衝突前の $y$ 方向運動量は $0$ なので

$$
\boxed{\Delta P_y=Mv_0\tan\theta}.
$$

### (4)

離れる直前に接触点が壁に対して滑らないという条件は

$$
v_y-a\omega=0.
$$

(2)、(3) より

$$
\frac12Ma(\omega_0-\omega)=Mv_y.
$$

$\omega=v_y/a$ を代入すると $a\omega_0=3v_y$。ゆえに

$$
\boxed{\omega_0=\frac{3v_0}{a}\tan\theta}.
$$

このとき $\omega=\omega_0/3$ である。摩擦を伴う衝突なので、並進と回転を合わせた力学的エネルギーの保存は用いない。
