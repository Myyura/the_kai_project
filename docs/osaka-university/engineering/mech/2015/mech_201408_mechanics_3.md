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

問題3（解答用紙：青）

図のように $x$ 軸、$y$ 軸が定義される水平でなめらかな平面上に、$y$ 軸に沿って壁がある。この平面上で、質量 $M$、半径 $a$ の一様な円板が、中心軸に対して角速度 $\omega_0$（反時計回りを正とする）で回転しながら速さ $v_0$ で進み、壁面に対して垂直に衝突したときの円板の運動を考える。衝突の瞬間、円板は壁から撃力を受けると同時に、回転に対する摩擦力が働く。このことにより、衝突後の円板は、円板が来た方向と角度 $\theta$（反時計回りを正とする）をなして跳ね返り、角速度 $\omega$ で回転しながら速さ $v$ で進む。円板と壁の衝突における反発係数を $1$ とし、衝突した円板が壁から離れる直前において円板は壁に対して滑らないものとする。以下の問いに答えなさい。

(1) 円板の中心軸回りの慣性モーメントを求めなさい。

(2) 衝突時に円板が $y$ 軸方向に受ける力積を $a,M,\omega_0,\omega$ を用いて表しなさい。

(3) 衝突前後における $y$ 軸方向の運動量変化を $M,v_0,\theta$ を用いて表しなさい。

(4) 円板が壁で跳ね返った後、角度 $\theta$（$-\pi/2<\theta<\pi/2$）をなす方向へ進ませるために、$\omega_0$ が満たす条件を、$a,v_0,\theta$ を用いて表しなさい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_mechanics_3_original_figure_1.png)

#### 题目描述

问题3（使用蓝色答题纸）

如图，在定义了 $x$、$y$ 轴的光滑水平面上，沿 $y$ 轴设置一面墙。质量为 $M$、半径为 $a$ 的均匀圆盘绕中心轴以角速度 $\omega_0$ 旋转（逆时针为正），同时以速率 $v_0$ 运动，并垂直撞击墙面。碰撞瞬间，圆盘受到墙的冲击力，同时受到阻碍转动的摩擦力。碰撞后，圆盘沿与其来向成 $\theta$ 角的方向反弹（逆时针为正），以角速度 $\omega$ 旋转并以速率 $v$ 运动。圆盘与墙的恢复系数为 $1$，且在圆盘即将离墙的瞬间，圆盘相对于墙不滑动。回答下列问题。

(1) 求圆盘绕中心轴的转动惯量。

(2) 用 $a,M,\omega_0,\omega$ 表示圆盘在碰撞时受到的 $y$ 方向冲量。

(3) 用 $M,v_0,\theta$ 表示碰撞前后 $y$ 方向的动量变化。

(4) 为使圆盘反弹后沿 $\theta$（$-\pi/2<\theta<\pi/2$）所表示的方向运动，用 $a,v_0,\theta$ 表示 $\omega_0$ 应满足的条件。

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
