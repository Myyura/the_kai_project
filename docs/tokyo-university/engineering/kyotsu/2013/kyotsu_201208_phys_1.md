---
sidebar_label: '2012年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
---

# 東京大学 工学系研究科 2012年8月実施 物理学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

半径 $a$、質量 $M$ の一様な球の運動を考える。球と床は変形しない剛体とする。水平右向きに $x$ 軸、鉛直上向きに $y$ 軸を取り、重力加速度の大きさを $g$ とする。力積は球の重心 G を通る鉛直な $xy$ 面内で働く。

![滑らかな床から粗い床へ進む球と、段差への衝突](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2013/kyotsu_201208_phys_1_sphere_audited.svg)

### I

球の重心を通る軸まわりの慣性モーメント $I_G$ を $a,M$ で表し、導出過程も記せ。

### II

摩擦のない水平な床 1 上で静止する球の、高さ $h$ の点に $+x$ 方向の力積 $P$ を加える。球が滑らずに転がるための高さ $h=h_0$ を求めよ。

### III

同じ球に高さ $h=3a/2$ で $+x$ 方向の力積 $P$ を加える。球が動き出した後、$t=0$ に球と床の接触点が水平な床 2 に移り、$t=t_1$ に重心が等速運動に移った。床 2 との動摩擦係数を $\mu$ として、$t_1$ とそのときの重心速度 $v_1$ を求めよ。

### IV

摩擦のない床 1 上の球に、高さ $h=a/2$ で $+x$ 方向の力積 $P$ を加える。この球は、ある高さ $H\ge H_m$ の段差を上ることができない。角運動量保存則を用いて $H_m$ を求めよ。また、高さ $H$ の段差を上るために必要な力積の最小値 $P_m$ を求めよ。

球は段差上の角点 A で接触し、段差を上るまで A から離れず、滑らないものとする。床 1 との摩擦はない。

#### 题目描述

半径 $a$、质量 $M$ 的均匀球与地面都视为不变形的刚体。向右、向上分别取 $x,y$ 轴，重力加速度大小为 $g$。冲量在通过球心 G 的竖直平面内作用。

I. 推导球绕重心轴的转动惯量 $I_G$，用 $a,M$ 表示。

II. 球静止在光滑水平地面 1 上，在高度 $h$ 处施加 $+x$ 方向冲量 $P$。求球无滑动滚动所需的高度 $h_0$。

III. 改在高度 $h=3a/2$ 处施加相同方向的冲量。球运动后，在 $t=0$ 时接地点进入粗糙水平地面 2，并于 $t=t_1$ 开始匀速运动。地面 2 的动摩擦系数为 $\mu$。求 $t_1$ 和此时球心速度 $v_1$。

IV. 在光滑地面 1 上的球的高度 $h=a/2$ 处施加冲量 $P$。存在高度上界 $H_m$，使 $H\ge H_m$ 的台阶无法登上。利用角动量守恒求 $H_m$；再求登上高度 $H$ 台阶的最小冲量 $P_m$。球在台阶棱角 A 处接触，此后直至登上台阶既不离开 A，也不在 A 处滑动；球与地面 1 无摩擦。

## **Kai**

### I

密度を $\rho_M=3M/(4\pi a^3)$ とすると、

$$
\boxed{I_G=\int_0^a\frac23r^2\,4\pi r^2\rho_M\,dr=\frac25Ma^2}.
$$

### II

時計回りを角速度の正方向とする。撃力直後の速さ $v_0$、角速度 $\omega_0$ は

$$
Mv_0=P,
\qquad I_G\omega_0=P(h-a).
$$

無滑り条件 $v_0=a\omega_0$ を用いて

$$
\boxed{h_0=a+\frac{I_G}{Ma}=\frac75a}.
$$

### III

床 2 に入る直前は

$$
v_0=\frac PM,
\qquad\omega_0=\frac{5P}{4Ma},
\qquad v_0-a\omega_0=-\frac{P}{4M}<0.
$$

接地点は床に対して左向きに滑るので、摩擦は球に右向きに働く。滑っている間は

$$
v(t)=\frac PM+\mu gt,
\qquad
\omega(t)=\frac{5P}{4Ma}-\frac{5\mu g}{2a}t.
$$

$v(t_1)=a\omega(t_1)$ を解くと

$$
\boxed{t_1=\frac{P}{14\mu Mg}},
\qquad
\boxed{v_1=\frac{15P}{14M}}.
$$

その後は摩擦を必要としない等速の純転がりとなる。

### IV

$h=a/2$ では $v_0=P/M$、$I_G\omega_0=-Pa/2$ である。A まわりの衝突前の角運動量は

$$
L_A=Mv_0(a-H)+I_G\omega_0=P\left(\frac a2-H\right).
$$

段差を上る向きの回転が必要なので $L_A>0$、したがって

$$
\boxed{H_m=\frac a2}.
$$

$0<H<a/2$ に対して $I_A=I_G+Ma^2=7Ma^2/5$ とすると、衝突後の運動エネルギーは $L_A^2/(2I_A)$ である。重心の上昇量は $H$ なので、臨界条件から

$$
\frac{P_m^2(a/2-H)^2}{2(7Ma^2/5)}=MgH,
\qquad
\boxed{P_m=\frac{Ma\sqrt{14gH/5}}{a/2-H}}.
$$

$P_m$ はエネルギー上の臨界値であり、有限時間で段差を越えるには $P>P_m$ が必要である。

