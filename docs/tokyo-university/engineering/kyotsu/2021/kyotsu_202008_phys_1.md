---
sidebar_label: '2020年8月実施 物理学1'
tags:
  - Tokyo-University
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
---

# 東京大学 工学系研究科 2020年8月実施 物理学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

$x$ 軸に沿って運動する質量 $m$ の物体 A と質量 $M$ の物体 B を考える。A は一定速度 $v>0$ で運動し、B はばね定数 $k$ のばねの一端につながれて静止している。ばねの他端は右側の壁に固定されている。A が B に衝突する時刻を $t=0$、B の初期位置を $x=0$ とする。B は壁には衝突しない。物体の大きさ、摩擦などの外力を無視する。

I. 衝突時に A、B が結合し、その後一体となって運動する。

1. B の位置 $x(t)$ を求めよ。
2. B が初めて初期位置に戻る時刻と、そのときの速度を求めよ。

II. A、B が完全弾性衝突する。

1. 衝突直後の A、B の速度を求めよ。
2. $M=m$ の場合、衝突後の A、B の位置を時刻の関数としてグラフに描け。

III. 反発係数が $0<e<1$、$M=2m$ の場合、二回目の衝突が

$$
t_2=\frac{7\sqrt2\pi}{6}\sqrt{\frac{m}{k}}
$$

に起こった。

1. 二回目の衝突直前の A、B の速度を $e$ を用いて表せ。
2. $e$ を求めよ。
![ばねにつながれた物体との衝突と等質量の場合の位置グラフ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2021/kyotsu_202008_phys_1_collision_audited.svg)

#### 题目描述

质量为 $m$ 的物体 A 沿 $x$ 轴以速度 $v>0$ 运动，质量为 $M$ 的 B 静止，并通过劲度系数为 $k$ 的弹簧连接右侧墙壁。A 在 $t=0$ 与 B 碰撞，取 B 的初始位置为 $x=0$。B 不会撞墙，忽略物体大小及摩擦等外力。

I. 碰撞后 A、B 黏合并共同运动。

1. 求 B 的位置 $x(t)$。
2. 求 B 首次回到初始位置的时刻及此时速度。

II. A、B 完全弹性碰撞。

1. 求碰撞后的两物体速度。
2. 当 $M=m$ 时，画出碰撞后两物体的位置随时间变化的图像。

III. 恢复系数 $0<e<1$、$M=2m$，第二次碰撞发生在 $t_2=\frac{7\sqrt2\pi}{6}\sqrt{m/k}$。

1. 用 $e$ 表示第二次碰撞前两物体的速度。
2. 求 $e$。

## **Kai**

### I.

1. 衝突中の運動量保存より $V=mv/(m+M)$。衝突後は $(m+M)\ddot x=-kx$、$x(0)=0$、$\dot x(0)=V$ だから

$$
\boxed{x(t)=\frac{mv}{\sqrt{k(m+M)}}\sin\left(\sqrt{\frac{k}{m+M}}\,t\right)}.
$$

2. 最初に正弦が再び零となる時刻と、そのときの速度は

$$
\boxed{t_1=\pi\sqrt{\frac{m+M}{k}},\qquad
\dot x(t_1)=-\frac{mv}{m+M}}.
$$

### II.

1. 運動量保存と相対速度の反転より

$$
mv=mv_A+Mv_B,\qquad v_B-v_A=v.
$$

したがって

$$
\boxed{v_A=\frac{m-M}{m+M}v,\qquad v_B=\frac{2m}{m+M}v}.
$$

2. $M=m$ では最初の衝突後 $v_A=0,v_B=v$。$\omega_0=\sqrt{k/m}$、$t_0=\pi/\omega_0$ とすると、B が原点に戻ったとき再衝突して両者の速度が交換される。よって

$$
\boxed{\begin{aligned}
x_A(t)&=\begin{cases}0,&0\le t\le t_0,\\-v(t-t_0),&t>t_0,\end{cases}\\
x_B(t)&=\begin{cases}\dfrac{v}{\omega_0}\sin\omega_0t,&0\le t\le t_0,\\0,&t>t_0.\end{cases}
\end{aligned}}
$$

図の位置グラフはこの二式を示している。

### III.

1. 初回の衝突について $v=v_A+2v_B$、$v_B-v_A=ev$ なので

$$
v_A=\frac{1-2e}{3}v,\qquad v_B=\frac{1+e}{3}v.
$$

次の衝突までは、$\omega_2=\sqrt{k/(2m)}$ として

$$
x_A=v_At,\qquad x_B=\frac{v_B}{\omega_2}\sin\omega_2t.
$$

$\omega_2t_2=7\pi/6$ より、衝突直前の速度は

$$
\boxed{V_A=\frac{1-2e}{3}v,\qquad
V_B=-\frac{\sqrt3(1+e)}6v}.
$$

2. 位置が一致する条件 $x_A(t_2)=x_B(t_2)$ から

$$
(1-2e)\frac{7\pi}{6}=-(1+e)\frac12
\quad\Longrightarrow\quad
\boxed{e=\frac{7\pi+3}{14\pi-3}}.
$$

