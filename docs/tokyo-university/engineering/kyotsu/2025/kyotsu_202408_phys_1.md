---
sidebar_label: '2024年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Collision-and-Coefficient-of-Restitution
---

# 東京大学 工学系研究科 2024年8月実施 物理学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

密度が一様な球（半径 $a$、質量 $M$）が水平な床の上に静止している。球の高さ $h$ の点に、紙面内で床に平行な方向の力積 $P$ をもつ撃力を与えると、球は床に対して滑らずに転がった。球の重心は紙面内のみを運動する。空気抵抗と転がり摩擦を無視し、重力加速度の大きさを $g$ とする。

![球への撃力、滑らかな斜面、段差](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2025/kyotsu_202408_phys_1_rolling_audited.svg)

### I

球の重心まわりの慣性モーメントを $a,M$ で表せ。

### II

撃力を与えた後の球の並進速度を $v$、重心まわりの回転角速度を $\omega_0$ とする。

1. 床に対して滑らない条件から、$v$ と $\omega_0$ の関係を示せ。
2. $h$ を $a$ で表せ。また、$v,\omega_0$ を $a,M,P$ の中から必要なものを用いて示せ。

### III

球が、なめらかに変化する高さ $H$ の斜面を上りきる場合を考える。球は弾まず、滑らずに転がるものとして、上りきるための $P$ の条件を求めよ。

### IV

球が高さ $H<a$ の段差に向かって転がり、段差のエッジに衝突すると、点 Q を中心に回転し、弾まずに段差を乗り越えるものとする。

1. エッジに衝突して段差を乗り越えるときのエネルギー変化を端的に説明せよ。
2. 衝突直後の Q まわりの角速度 $\omega_1$ を、$a,M,P,H$ の中から必要なものを用いて示せ。
3. 段差を乗り越えるための $P$ の条件を求めよ。

#### 题目描述

半径 $a$、质量 $M$ 的均匀实心球静止在水平地面上。在距地面高度 $h$ 的位置，沿图示平面内的水平方向施加大小为 $P$ 的冲量后，球立即无滑动滚动。球心只在图示平面内运动，忽略空气阻力和滚动摩擦，重力加速度大小为 $g$。

I. 用 $a,M$ 表示球绕重心的转动惯量。

II. 冲量作用后，球心平动速度为 $v$，绕重心的角速度为 $\omega_0$。

1. 写出无滑动条件给出的 $v,\omega_0$ 的关系。
2. 用 $a$ 表示施力高度 $h$，并用 $a,M,P$ 中必要的量表示 $v,\omega_0$。

III. 球沿轮廓平滑变化的斜面滚至高度 $H$，全过程不弹跳、不滑动。求能登上斜面的 $P$ 的条件。

IV. 球滚向高度 $H<a$ 的台阶，碰到台阶棱角 Q 后绕 Q 转动，不反弹地越过台阶。

1. 简述碰撞及越过台阶时的能量变化。
2. 求碰撞后瞬间绕 Q 的角速度 $\omega_1$。
3. 求越过台阶所需的 $P$ 的条件。

## **Kai**

### I

密度を $\rho_M=3M/(4\pi a^3)$ とすると、薄い球殻を積分して

$$
\boxed{I=\int_0^a\frac23r^2\,4\pi r^2\rho_M\,dr=\frac25Ma^2}.
$$

### II

#### II.1

接地点の速度が零なので

$$
\boxed{v=a\omega_0}.
$$

#### II.2

回転方向を時計回りに取る。撃力による運動量・角運動量の変化は

$$
Mv=P,
\qquad I\omega_0=P(h-a).
$$

$I=2Ma^2/5$ と無滑り条件から

$$
\boxed{h=\frac75a},
\qquad
\boxed{v=\frac PM},
\qquad
\boxed{\omega_0=\frac{P}{Ma}}.
$$

### III

静止摩擦は仕事をしないので、力学的エネルギーが保存される。高さ $H$ に達する条件は

$$
\frac12Mv^2+\frac12I\omega_0^2=\frac{7P^2}{10M}\ge MgH.
$$

したがって臨界値を含めると

$$
\boxed{P\ge M\sqrt{\frac{10gH}{7}}}.
$$

上端で正の速さを保って通過するには不等号を厳密にする。

### IV

#### IV.1

衝突時は Q まわりの角運動量が保存され、運動エネルギーの一部が失われる。衝突後は Q からの反力が仕事をしないので、残りの運動エネルギーが重力の位置エネルギーに変わる。

#### IV.2

Q まわりの慣性モーメントは $I_Q=I+Ma^2=7Ma^2/5$ である。衝突前後の角運動量保存より

$$
I\omega_0+Mv(a-H)=I_Q\omega_1.
$$

よって

$$
\boxed{\omega_1=\frac{P(7a-5H)}{7Ma^2}}.
$$

#### IV.3

重心が Q の真上に達するまでの上昇量は $H$ である。したがってエネルギーの臨界条件は

$$
\frac12I_Q\omega_1^2
=\frac{P^2(7a-5H)^2}{70Ma^2}\ge MgH.
$$

臨界力積を $P_c$ とすると

$$
\boxed{P_c=\frac{Ma\sqrt{70gH}}{7a-5H}}.
$$

等号では Q の真上に速さ零で漸近するため、有限時間で乗り越える条件は

$$
\boxed{P>P_c}.
$$

