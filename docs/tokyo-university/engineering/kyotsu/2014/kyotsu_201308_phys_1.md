---
sidebar_label: '2013年8月実施 物理学1'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 東京大学 工学系研究科 2013年8月実施 物理学1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

面密度が一様で厚さと変形を無視できる、半径 $a$、質量 $M$ の球殻を考える。中心 O を通る軸 $l$ と、中心からの半径がなす角を $\varphi$ とする。

1. 角度 $\varphi$ と $\varphi+d\varphi$（$d\varphi\ll1$）に挟まれた微小円輪の質量 $dM$ を、$a,\varphi,d\varphi$、面密度 $\sigma$ で表せ。
2. 軸 $l$ まわりの慣性モーメントが $I=2Ma^2/3$ であることを示せ。

### II

水平を $x$、鉛直上向きを $y$ とする。球殻 A（質量 $M$、半径 $a$）の中心を固定し、$xy$ 面に垂直な中心軸まわりに自由に回転できるようにする。静止した A の頂上に球殻 B（質量 $m<M$、半径 $b<a$）を置き、静かに右へ転がす。B は静止から運動を始め、最後に A から離れる。離れるまで接点で滑らず、両中心は常に $xy$ 面内にあり、B の回転軸も同面に垂直である。両球殻は一様で、厚さと変形を無視する。

両中心を結ぶ線と鉛直線のなす角を $\theta$ とし、A、B の自転角速度はともに時計回りを正として $\omega_A,\omega_B$ とする。B の中心の公転角速度・角加速度を $\dot\theta,\ddot\theta$ とすると、非滑り条件は

$$
a\omega_A=(a+b)\dot\theta-b\omega_B. \tag{1}
$$

垂直抗力を $R$、摩擦力の大きさを $F$、重力加速度を $g$ とする。図の $x'$ は接線に沿う下り方向、$y'$ は A の中心から外向きの法線方向である。

1. A、B 各々の重心まわりの回転運動方程式を書け。
2. B の重心の並進運動方程式を $x',y'$ 方向について書け。
3. $\omega_A,\omega_B$ を $M,m,a,b,\dot\theta$ で表せ。
4. $\dot\theta>0$ を $g,M,m,a,b,\theta$ で表せ。
5. B が A から離れる角度 $\theta_c$ を $M,m$ で表せ。

![球殻の微小円輪と滑らず転がる二つの球殻](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2014/kyotsu_201308_phys_1_shells_audited.svg)

#### 题目描述

### I

考虑面密度均匀、厚度与形变可忽略的球壳，半径为 $a$、质量为 $M$。轴 $l$ 通过球心 O，球面半径与该轴夹角为 $\varphi$。

1. 求夹在 $\varphi$ 与 $\varphi+d\varphi$（$d\varphi\ll1$）之间的微小圆环质量 $dM$，用 $a,\varphi,d\varphi$ 及面密度 $\sigma$ 表示。
2. 证明绕轴 $l$ 的转动惯量为 $I=2Ma^2/3$。

### II

取 $x$ 水平向右、$y$ 竖直向上。固定球壳 A（质量 $M$、半径 $a$）的球心，使其可绕垂直于 $xy$ 平面的中心轴自由转动。在静止的 A 顶部放置球壳 B（质量 $m<M$、半径 $b<a$），从静止轻轻向右滚下，直到 B 脱离 A。脱离前接触处始终不滑动，两球心始终位于 $xy$ 平面，B 的自转轴也垂直于该平面。两球壳均匀，厚度、形变均忽略。

球心连线与竖直方向的夹角为 $\theta$；A、B 的自转角速度 $\omega_A,\omega_B$ 均以顺时针为正，B 球心的公转角速度、角加速度为 $\dot\theta,\ddot\theta$。无滑动条件为

$$
a\omega_A=(a+b)\dot\theta-b\omega_B.
$$

接触处法向力为 $R$，摩擦力大小为 $F$，重力加速度为 $g$。$x'$ 沿切线下坡方向，$y'$ 沿两球心连线向外。

1. 分别写出 A、B 绕各自质心的转动方程。
2. 写出 B 质心沿 $x',y'$ 的平动方程。
3. 用 $M,m,a,b,\dot\theta$ 表示 $\omega_A,\omega_B$。
4. 用 $g,M,m,a,b,\theta$ 表示正值 $\dot\theta$。
5. 用 $M,m$ 表示脱离角 $\theta_c$。

## **Kai**

### I

**1.** 円輪の周長は $2\pi a\sin\varphi$、幅は $a\,d\varphi$ より、

$$
\boxed{dM=2\pi\sigma a^2\sin\varphi\,d\varphi.}
$$

**2.** $M=4\pi a^2\sigma$ なので、

$$
I=\int_0^\pi(a\sin\varphi)^2dM
=2\pi\sigma a^4\int_0^\pi\sin^3\varphi\,d\varphi
=\frac{8\pi\sigma a^4}{3}
=\boxed{\frac23Ma^2.}
$$

### II

**1.** B に働く摩擦力は斜面を上る向きである。時計回りを正とすると、

$$
\boxed{\frac23Ma^2\dot\omega_A=aF,\qquad
\frac23mb^2\dot\omega_B=bF.}
$$

**2.** $d=a+b$ とおくと、

$$
\boxed{md\ddot\theta=mg\sin\theta-F,\qquad
-md\dot\theta^2=R-mg\cos\theta.}
$$

**3.** 回転方程式と初期条件より $Ma\omega_A=mb\omega_B$。これと (1) を連立して、

$$
\boxed{\omega_A=\frac{m(a+b)}{(M+m)a}\dot\theta,\qquad
\omega_B=\frac{M(a+b)}{(M+m)b}\dot\theta.}
$$

**4.** 固定軸は仕事をせず、静止摩擦による両球殻の仕事の和も零である。エネルギー保存より、

$$
mgd(1-\cos\theta)
=\frac12md^2\dot\theta^2+\frac13Ma^2\omega_A^2+\frac13mb^2\omega_B^2
=\frac{m(5M+3m)}{6(M+m)}d^2\dot\theta^2.
$$

したがって、

$$
\boxed{\dot\theta=\sqrt{\frac{6(M+m)g(1-\cos\theta)}{(5M+3m)(a+b)}}.}
$$

**5.** 離れる瞬間は $R=0$ であるから、$d\dot\theta_c^2=g\cos\theta_c$。よって、

$$
\boxed{\theta_c=\cos^{-1}\!\left(\frac{6(M+m)}{11M+9m}\right).}
$$

