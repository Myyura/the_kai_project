---
sidebar_label: "2021年8月実施 推進工学（午前）"
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 推進工学（午前）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午前）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022am.pdf)。図の条件は以下に文章で明記する。

半径 $a$、質量 $m$、一様密度の軸対称剛体を水平面上に静止させる。中心 $O$ より高さ $h$ 上の点に、時刻 $t=0$ に右向きの水平撃力（力積）$P$ を加える。作用点は重心と同じ鉛直面内にある。重心の右向き速度を $u(t)$、時計回りの角速度を $\omega(t)$ とする。

**第1問** 撃力直後から滑らずに転がるための $h$ を、次の各形状について求めよ。

1. 円板。
2. 球。
3. 薄い球殻。

以下では任意の $0\le h<a$ を考える。動摩擦係数を $\mu$、重力加速度を $g$、回転軸まわりの慣性モーメントを $I$ とする。

**第2問** 撃力を加えた後の $u(t),\omega(t)$ を時間の関数として求めよ。

**第3問** 進行方向に高さ $0\le H<a$ の段差がある。段差へ到達するまでに滑らない転がりになっており、その後の剛体と水平面の摩擦はない。また段差の角では滑りも跳ね返りもしない。段差を乗り越えるための $P$ の条件を求めよ。

#### 题目描述

半径 $a$、质量 $m$、密度均匀的轴对称刚体静置于水平面。$t=0$ 时，在质心上方高度 $h$、与质心同一竖直面内施加向右的水平冲量 $P$。质心向右速度为 $u$，顺时针角速度为 $\omega$。

第1问：分别对圆盘、实心球、薄球壳，求冲量后立即纯滚动所需的 $h$。

第2问：对于任意 $0\le h<a$，动摩擦系数为 $\mu$，重力加速度为 $g$，转动惯量为 $I$，求 $u(t),\omega(t)$，包括滑动结束后的运动。

第3问：前方有高度 $0\le H<a$ 的台阶。物体在到达台阶前已纯滚动，此后水平面无摩擦；与台阶角接触时无滑动、无反弹。求越过台阶所需的冲量条件。

## **Kai**

### 第1問

並進・回転の力積から $u(0^+)=P/m,\ \omega(0^+)=Ph/I$。純転がり条件 $u=a\omega$ より $h=I/(ma)$。したがって

$$
\boxed{h_{\rm disk}=\frac a2,\qquad h_{\rm sphere}=\frac{2a}5,\qquad h_{\rm shell}=\frac{2a}3}.
$$

### 第2問

$I\ne mah$ のとき $s=\operatorname{sgn}(I-mah)$ とおく。接触点の初速度は $P(I-mah)/(mI)$ なので、滑り中の摩擦力は $-s\mu mg$。したがって

$$
\boxed{u(t)=\frac Pm-s\mu gt,\qquad
\omega(t)=\frac{Ph}{I}+s\frac{\mu mga}{I}t\quad(0\le t\le t_1)}.
$$

$u(t_1)=a\omega(t_1)$ より

$$
\boxed{t_1=\frac{P|I-mah|}{\mu mg(I+ma^2)}}.
$$

その後は一定速度の純転がりとなり、

$$
\boxed{u_f=\frac{Pa(a+h)}{I+ma^2},\qquad\omega_f=\frac{P(a+h)}{I+ma^2}\quad(t\ge t_1)}.
$$

$I=mah$ の場合は $t_1=0$ で、最初からこの純転がり状態である。

### 第3問

段差の角を $Q$ とする。衝突中の $Q$ まわりの角運動量を保存すると、衝突直後の角速度 $\Omega$ は

$$
(I+ma^2)\Omega=I\omega_f+m u_f(a-H),
$$

すなわち

$$
\Omega=\frac{P(a+h)[I+ma(a-H)]}{(I+ma^2)^2}.
$$

角を中心に回転して重心が真上へ来るまでに位置エネルギーは $mgH$ 増える。問題の接触条件の下で、乗り越えるには

$$
\frac12(I+ma^2)\Omega^2>mgH.
$$

よって

$$
\boxed{P>\frac{(I+ma^2)^{3/2}\sqrt{2mgH}}{(a+h)[I+ma(a-H)]}}.
$$

等号は重心が角の真上に来るとき速度がゼロになる限界値である。
