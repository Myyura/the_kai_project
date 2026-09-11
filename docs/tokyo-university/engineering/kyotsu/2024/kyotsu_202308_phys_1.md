---
sidebar_label: '2023年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
  - Physics.Mechanics.Simple-Harmonic-Motion
---

# 東京大学 工学系研究科 2023年8月実施 物理学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

一様な密度をもつ質量 $M$、半径 $R$ の厚みが無視できる円板が、角度 $30^\circ$ の斜面に置かれている。円周側面の点 P に糸をつなぎ、その反対側を、斜面から距離 $2R$ の位置に固定されたバネ定数 $K$ のバネにつなぐ。バネと円板は接触しない。円板は紙面内で運動し、その中心は斜面と平行に移動する。空気抵抗、糸とバネの質量を無視し、重力加速度を $g$ とする。

斜面を下る向きに $x$ 軸を取り、円板の中心位置を $x$ とする。バネが自然長で、糸が巻き付かず、点 P と円板中心を結ぶ直線が斜面に垂直になる位置を $x=0$ とする。円板は斜面上を滑らずに転がり、糸を巻き付けながら自転する。

![円板、糸、バネと障害物の配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/kyotsu_202308_phys_1_setup_audited.svg)

### I

円板の中心軸まわりの慣性モーメントを導出せよ。

### II

原点から円板を準静的に回転させながら斜面に沿って下ろし、釣り合いの位置で止める。その $x$ 座標 $x_0$ を求めよ。

### III

円板を原点に戻し、$t=0$ に静止状態から運動を開始させる。

1. 円板中心の位置 $x$ と時刻 $t$ の関係を表す微分方程式を求めよ。
2. 微分方程式を解き、$x$ を $t$ の関数として図示せよ。
3. 斜面と円板の間の静止摩擦係数を $\mu$ とする。滑りが生じないために $\mu$ が満たすべき条件を求めよ。

### IV

III の運動を始める前に、円板が $x=x_0$ に達したとき接触する障害物を斜面に固定する。障害物の尖った先端は斜面から距離 $h$ にある。円板と先端との間に滑りは生じず、接触時には先端まわりの角運動量が保存される。

円板を原点に置き、静止状態から運動させる。障害物との接触後に円板が斜面から離れるために、$h$ が満たすべき条件を求めよ。

#### 题目描述

质量为 $M$、半径为 $R$、厚度可忽略的均匀圆盘放在倾角 $30^\circ$ 的斜面上。圆周上的点 P 连接轻绳，绳的另一端连接弹簧常数为 $K$ 的弹簧；弹簧的固定位置距斜面 $2R$，且弹簧不接触圆盘。圆盘只在图示平面内运动，圆心轨迹平行于斜面。忽略空气阻力以及绳和弹簧的质量，重力加速度为 $g$。

沿斜面向下取 $x$ 轴，以圆心位置为 $x$。弹簧处于自然长度、绳尚未绕上圆盘且 P 与圆心的连线垂直斜面时，定义 $x=0$。此后圆盘无滑动滚动，并把绳绕在圆周上。

I. 推导圆盘绕中心轴的转动惯量。

II. 从原点准静态地转动圆盘使其沿斜面下降，在平衡位置停止。求该位置 $x_0$。

III. 把圆盘放回原点，于 $t=0$ 从静止释放。

1. 求圆心位置 $x$ 关于时间 $t$ 的微分方程。
2. 解方程，并画出 $x(t)$。
3. 设圆盘与斜面的静摩擦系数为 $\mu$，求全过程不发生滑动的条件。

IV. 预先在斜面上固定障碍物，使圆盘在 $x=x_0$ 时接触距斜面 $h$ 的尖端。圆盘与尖端接触处不滑动，碰撞时关于尖端的角动量守恒。仍从原点静止释放圆盘，求碰撞后圆盘脱离斜面所需的 $h$ 的条件。

## **Kai**

### I

面密度は $M/(\pi R^2)$ であるから、

$$
\boxed{I=\int_0^R r^2\frac{M}{\pi R^2}\,2\pi r\,dr=\frac12MR^2}.
$$

### II

滑りなし条件より回転角は $x/R$、糸の巻き取り長さは $x$ となる。したがってバネの伸びは $2x$、張力は $T=2Kx$ である。位置エネルギーは

$$
U(x)=\frac12K(2x)^2-Mgx\sin30^\circ
=2Kx^2-\frac{Mg}{2}x.
$$

$U'(x_0)=0$ より

$$
\boxed{x_0=\frac{Mg}{8K}}.
$$

### III

#### III.1

運動エネルギーは $\frac12M\dot x^2+\frac12I(\dot x/R)^2=\frac34M\dot x^2$ なので、

$$
\boxed{\frac32M\ddot x=\frac{Mg}{2}-4Kx},
\qquad
\boxed{\ddot x+\frac{8K}{3M}x=\frac g3}.
$$

#### III.2

$\Omega=\sqrt{8K/(3M)}$ と置く。$x(0)=\dot x(0)=0$ より

$$
\boxed{x(t)=x_0(1-\cos\Omega t)}.
$$

$x_0$ を中心に振幅 $x_0$、周期 $\tau=2\pi/\Omega$ で振動する。

![円板中心の位置と時刻の関係](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/kyotsu_202308_phys_1_oscillation_audited.svg)

#### III.3

斜面上向きの摩擦力を $f$ とすると、並進・回転の運動方程式は

$$
M\ddot x=\frac{Mg}{2}-2Kx-f,
\qquad
\frac12M\ddot x=f-2Kx.
$$

したがって

$$
f=\frac{Mg}{6}+\frac{2Kx}{3},
\qquad
N=Mg\cos30^\circ=\frac{\sqrt3}{2}Mg.
$$

$0\le x\le2x_0$ で $\max|f|=Mg/3$ である。よって

$$
\boxed{\mu\ge\frac{2}{3\sqrt3}}.
$$

### IV

衝突直前の速さを $v$ とすると、$x=x_0$ で

$$
v=\Omega x_0=g\sqrt{\frac{M}{24K}}.
$$

障害物先端を Q、Q から円板中心までの斜面方向の距離を $s=\sqrt{2Rh-h^2}$ とする。衝突後の角速度 $\omega$ は衝突前の回転方向を正に取る。Q まわりの角運動量保存より

$$
I\frac vR+Mv(R-h)=(I+MR^2)\omega,
\qquad
\omega=\frac{v(3R-2h)}{3R^2}.
$$

Q で滑らないので、中心の斜面から離れる向きの速度は

$$
v_\perp=\omega s
=\frac{v(3R-2h)}{3R^2}\sqrt{2Rh-h^2}.
$$

接触可能な $0<h<2R$ の範囲で $v_\perp>0$ となる条件は

$$
\boxed{0<h<\frac32R}.
$$

