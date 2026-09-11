---
sidebar_label: '2021年8月実施 物理学1'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Small-Angle-Pendulum
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
---

# 東京大学 工学系研究科 2021年8月実施 物理学1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

質量 $m$、長さ $L$ の一様な細い棒の一端 O を支点とし、鉛直面内で摩擦なく回転する剛体振り子を考える。他端を E、鉛直下向きと棒のなす角を $\theta$、重力加速度を $g$ とする。空気抵抗は無視する。

I. E を O と同じ高さまで持ち上げ、静かに放す。角速度、角加速度を $\dot\theta,\ddot\theta$ とする。

1. O まわりの慣性モーメント $I_O$ を求めよ。
2. $\theta$ の運動方程式を求めよ。
3. $\dot\theta^2$ を $\theta$ の関数として表せ。
4. 放した直後に支点 O から棒に働く力を求めよ。
5. E が最下点に達した瞬間に支点から棒に働く力を求めよ。

II. 棒と同じ質量 $m$ の点状物体 P を、O から距離 $x$（$0<x\le L$）の位置に固定する。

1. 最下位置の近くで微小振動する周期を求めよ。
2. 水平から静かに放したとき、E が初めて最下点に達する時間を最短にする $x$ を求めよ。

III. 棒だけが最下位置で静止している。質量 $m$ の点状物体 Q を棒に垂直に水平速度 $v$ で衝突させる。衝突点は O から距離 $y$（$0<y\le L$）にある。衝突後も運動は同じ鉛直面内に限る。

1. 衝突前後で全運動エネルギーが保存され、衝突後の Q が鉛直下向きに落下する場合の $y$ を求めよ。
2. Q が棒に付着する場合、E がちょうど O と同じ高さまで上がるための入射速度 $v_0$ を $y$ で表せ。
![一様な棒の剛体振り子、付加質点、および衝突](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2022/kyotsu_202108_phys_1_pendulum_audited.svg)

#### 题目描述

质量为 $m$、长度为 $L$ 的均匀细杆以端点 O 为支点，在竖直面内无摩擦转动。另一端为 E，杆与竖直向下方向的夹角为 $\theta$，重力加速度为 $g$，忽略空气阻力。

I. 将 E 抬至与 O 同高后由静止释放。角速度、角加速度记为 $\dot\theta,\ddot\theta$。

1. 求关于 O 的转动惯量 $I_O$。
2. 建立 $\theta$ 的运动方程。
3. 用 $\theta$ 表示 $\dot\theta^2$。
4. 求刚释放时支点对杆的力。
5. 求 E 到达最低点时支点对杆的力。

II. 在距 O 为 $x$（$0<x\le L$）处固定质量也为 $m$ 的质点 P。

1. 求最低位置附近的小振动周期。
2. 水平静止释放时，求使 E 首次到达最低点所需时间最短的 $x$。

III. 杆单独在最低位置静止。质量为 $m$ 的质点 Q 沿水平方向以速度 $v$ 垂直撞杆，撞击点距 O 为 $y$（$0<y\le L$）。碰后运动仍限制于同一竖直面内。

1. 若碰撞前后总动能守恒且碰后 Q 竖直向下掉落，求 $y$。
2. 若 Q 黏附在杆上，求 E 恰好升至与 O 同高所需的入射速度 $v_0(y)$。

## **Kai**

### I.

1. 一様な棒なので

$$
\boxed{I_O=\int_0^L\frac mL s^2\,ds=\frac13mL^2}.
$$

2. O まわりの運動方程式は

$$
\boxed{I_O\ddot\theta=-\frac{mgL}{2}\sin\theta},\qquad
\ddot\theta=-\frac{3g}{2L}\sin\theta.
$$

3. 水平位置を位置エネルギーの基準とすると

$$
\frac12I_O\dot\theta^2-\frac{mgL}{2}\cos\theta=0
\quad\Longrightarrow\quad
\boxed{\dot\theta^2=\frac{3g}{L}\cos\theta}.
$$

4. 放した直後の重心加速度は下向きに $(L/2)|\ddot\theta|=3g/4$。支点の力の上向き成分を $N$ とすると

$$
N-mg=-\frac34mg\quad\Longrightarrow\quad
\boxed{N=\frac14mg\quad\text{（鉛直上向き）}}.
$$

5. 最下点では重心の加速度は上向きに $(L/2)\dot\theta^2=3g/2$。よって

$$
N-mg=\frac32mg\quad\Longrightarrow\quad
\boxed{N=\frac52mg\quad\text{（鉛直上向き）}}.
$$

### II.

1. 全慣性モーメントは $I=m(L^2/3+x^2)$。微小振動では

$$
I\ddot\theta=-mg(L/2+x)\theta.
$$

したがって周期は

$$
\boxed{T=2\pi\sqrt{\frac{2(L^2+3x^2)}{3g(L+2x)}}}.
$$

2. エネルギー保存から $\dot\theta^2=3g(L+2x)\cos\theta/(L^2+3x^2)$ なので、最下点までの時間は

$$
t(x)=\sqrt{\frac{L^2+3x^2}{3g(L+2x)}}
\int_0^{\pi/2}\frac{d\theta}{\sqrt{\cos\theta}}.
$$

積分は $x$ に依存しない。$f(x)=(L^2+3x^2)/(L+2x)$ を最小にすればよく、

$$
f'(x)=\frac{2(3x^2+3Lx-L^2)}{(L+2x)^2}.
$$

正の根で微分の符号が負から正に変わるため

$$
\boxed{x=\frac{\sqrt{21}-3}{6}L}.
$$

### III.

1. 衝突直後の Q の水平速度は零。棒の角速度を $\Omega$ として、O まわりの角運動量保存とエネルギー保存から

$$
mvy=I_O\Omega,\qquad \frac12mv^2=\frac12I_O\Omega^2.
$$

したがって $my^2=I_O$、すなわち

$$
\boxed{y=\frac L{\sqrt3}}.
$$

2. 合成慣性モーメントを $I'=m(L^2/3+y^2)$ とすると、衝突中は $mv_0y=I'\Omega$。衝突後に水平までちょうど上がる条件は

$$
\frac12I'\Omega^2=mg\left(\frac L2+y\right).
$$

両式から

$$
\boxed{v_0=\sqrt{\frac{g(L+2y)(L^2+3y^2)}{3y^2}}}.
$$

