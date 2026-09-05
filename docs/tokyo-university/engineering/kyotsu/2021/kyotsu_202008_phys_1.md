---
sidebar_label: '2020年8月実施 物理学1'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年8月実施 物理学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/pdf/2021_P_1.pdf)

$x$ 軸上の物体 A（質量 $m$）が速度 $v>0$ で、静止した物体 B（質量 $M$）に衝突する。B はばね定数 $k$ のばねで右側の壁につながれている。衝突時刻を $t=0$、B の初期位置を $x=0$ とし、物体の大きさや摩擦等を無視する。B は壁に衝突しない。

I. 衝突後に A と B が結合して動く場合、(1) B の位置 $x(t)$、(2) 初めて $x=0$ に戻る時刻と速度を求める。

II. 完全弾性衝突の場合、(1) 衝突直後の A、B の速度を求める。(2) $M=m$ のとき、衝突後の両物体の位置を時間の関数としてグラフに描く。

III. 反発係数 $0<e<1$、$M=2m$ とし、二回目の衝突時刻が $t_2=(7\sqrt2\pi/6)\sqrt{m/k}$ である。(1) その直前の両物体の速度を $e$ を用いて表し、(2) $e$ を求める。

![Spring-collision model and equal-mass elastic trajectories](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2021/tokyo-kyotsu-202008-collision.svg)

### 题目描述

质量 $m$ 的物体 A 沿 $x$ 轴以速度 $v>0$ 撞向静止的物体 B（质量 $M$）；B 通过劲度系数 $k$ 的弹簧连接右侧墙壁。取第一次碰撞时刻为 $t=0$，B 的初始位置为 $x=0$，忽略物体大小、摩擦等，B 不会撞到墙壁。

1. 碰撞后 A、B 黏合，共同运动。由动量守恒求碰后速度，写出 B 的位置 $x(t)$，再求第一次回到 $x=0$ 的时刻及速度。
2. 完全弹性碰撞时，求碰后两物体速度。再取 $M=m$，画出两物体碰撞后位置随时间的变化图。
3. 取 $M=2m$、恢复系数 $0<e<1$，给定第二次碰撞时刻 $t_2=(7\sqrt2\pi/6)\sqrt{m/k}$。求第二次碰撞前两物体速度关于 $e$ 的表达式，并求 $e$。

## **Kai**
### I.
#### 1.
衝突直後の B （および A）の速度を $V$ とすると、運動量保存則より、

$$
\begin{aligned}
mv &= (m+M)V
\\
\therefore \ \ 
V &= \frac{m}{m+M} v
\end{aligned}
$$

である。
$x$ の速度および加速度をそれぞれ $\dot{x}, \ddot{x}$ と書く。
衝突後の A および B の運動方程式は、

$$
\begin{aligned}
(m+M) \ddot{x} = -kx
\end{aligned}
$$

であるから、 角振動数を $\omega = \sqrt{k/(m+M)}$ として、
$t=0$ で $x=0, \dot{x}=V$ であることを考慮して、

$$
\begin{aligned}
x(t)
&= \frac{V}{\omega} \sin \omega t
\\
&= \frac{mv}{\sqrt{(m+M)k}} \sin \left( \sqrt{\frac{k}{m+M}} t \right)
\end{aligned}
$$

を得る。

解説:
位置$x$を時刻$t$の関数として求めるので，運動方程式を解きます．衝突時間を無視できるため、その間のばねの力積を無視して運動量保存則を使い，初期条件の速度$\dot{x}$を求めます．
振幅$A$は力学的エネルギー保存則
$$\boxed{\frac{1}{2}(m+M)V^2=\frac{1}{2}kA^2}$$
から求めることもできます．

#### 2.
求める時刻は $\pi / \omega = \pi \sqrt{(m+M)/k}$ である。
また、このときの速度はエネルギー保存則より $-V = -mv/(m+M)$ である。

### II.
#### 1.
衝突直後の A, B の速度をそれぞれ $v_A, v_B$ とする。
運動量保存則より、

$$
mv = mv_A + Mv_B
$$

が成り立つ。
また、完全弾性衝突なので、エネルギー保存則

$$
\begin{aligned}
\frac{1}{2} mv^2 = \frac{1}{2} mv_A^2 + \frac{1}{2} Mv_B^2
\end{aligned}
$$

が成り立つ。
この連立方程式には2通りの解があるが、
$v_A = v, v_B = 0$ は衝突せずに通り過ぎるということなので、
求める解は、

$$
\begin{aligned}
v_A &= \frac{m-M}{m+M} v
\\
v_B &= \frac{2m}{m+M} v
\end{aligned}
$$

である。

#### 2.
時刻 $t$ における A, B の位置をそれぞれ $x_A(t), x_B(t)$ とする。
上の 1. で得た式は $M=m$ のとき、$v_A = 0, v_B = v$ となるので、
$\omega_0 = \sqrt{k/m}, t_0 = \pi / \omega_0 = \pi \sqrt{m/k}$ として、

$$
\begin{aligned}
x_A (t) &=
\begin{cases}
  0 & 0 \leq t \leq t_0 \\
-v(t-t_0) & t_0 \lt t
\end{cases}
\\
x_B (t) &=
\begin{cases}
\frac{v}{\omega_0} \sin \omega_0 t & 0 \leq t \leq t_0 \\
0 & t_0 \lt t
\end{cases}
\end{aligned}
$$

がわかる。

### III.
#### 1.
時刻 $t$ における A, B の位置をそれぞれ $x_A(t), x_B(t)$ とする。

1回目の衝突直後の A, B の速度をそれぞれ $v_A, v_B$ とすると、
運動量保存則

$$
\begin{aligned}
mv = mv_A + 2mv_B
\end{aligned}
$$

および
反発係数が $e$ であること

$$
\begin{aligned}
e = \frac{v_B - v_A}{v}
\end{aligned}
$$

から、

$$
\begin{aligned}
v_A &= \frac{1-2e}{3} v
\\
v_B &= \frac{1+e}{3} v
\end{aligned}
$$

がわかる。

2回目の衝突の時刻を $t_2 = (7 \sqrt{2} \pi / 6) \sqrt{m/k}$ とする。

時刻 $0 \lt t \lt t_2$ において、
B の角振動数は $\omega_2 = \sqrt{k/(2m)}$ であるから、

$$
\begin{aligned}
x_A(t) &= v_A t
\\
x_B(t) &= \frac{v_B}{\omega_2} \sin \omega_2 t
\end{aligned}
$$

であり、 $x_B(t)$ の $t$ による微分は、

$$
\begin{aligned}
\dot{x}_B(t) &= v_B \cos \omega_2 t
\end{aligned}
$$

である。
よって、2回目の衝突の直前の A, B の速度をそれぞれ $V_A, V_B$ とすると、

$$
\begin{aligned}
V_A
&= v_A
\\
&= \frac{1-2e}{3} v
\\
V_B
&= \dot{x}_B(t_2)
\\
&= v_B \cos \omega_2 t_2
\\
&= - \frac{1+e}{2 \sqrt{3}} v
\end{aligned}
$$

である。

#### 2.
$x_A(t_2) = x_B(t_2)$ から、

$$
\begin{aligned}
e = \frac{7 \pi + 3}{14 \pi - 3}
\end{aligned}
$$

を得る。
