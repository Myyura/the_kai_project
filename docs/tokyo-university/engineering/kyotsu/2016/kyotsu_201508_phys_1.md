---
sidebar_label: '2015年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
---

# 東京大学 工学系研究科 2015年8月実施 物理学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

半径 $r$、質量 $m$ の一様な中実球 S1、半径 $r$、質量 $3m$ の一様な中実球 S2、および半径 $r$、質量 $m$ で厚さを無視できる一様な球殻 S3 を考える。図のように、水平面となす角が $\theta$ の粗い斜面上の点 A にいずれかの球を置き、静かに放す。重力加速度を $g$ とする。重力は球の中心 O に、垂直抗力 $N$ と摩擦力 $F$ は接点 P に作用する。O のまわりの角速度を $\omega$ とし、反時計回りを正とする。

![斜面上を転がる球と作用する力](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2016/kyotsu_201508_phys_1_rolling_audited.svg)

### I

S1 と S3 の中心を通る軸のまわりの慣性モーメント $I_1,I_3$ を、導出過程とともに求めよ。

### II

S1 が滑らずに斜面を転がる場合を考える。静止摩擦係数を $\mu_0$ とする。

1. 重心の運動方程式、斜面に垂直な方向の力のつり合い、および重心のまわりの回転の運動方程式を書け。
2. 重心の加速度を求め、滑らずに転がるための $\mu_0$ と $\theta$ の関係を求めよ。

### III

S1 を A から静かに放した直後から滑りながら転がる場合を考える。動摩擦係数を $\mu\ (<\mu_0)$ とし、$F=\mu N$ が成り立つ。放した時刻を $t=0$ として、接点 P における球の斜面に対する相対滑り速度 $q(t)$ を求めよ。

### IV

滑りが生じない条件で S1、S2、S3 をそれぞれ A から静かに放す。A から斜面に沿って距離 $l$ だけ下方にある点 B までに要する時間を $T_1,T_2,T_3$ とするとき、$T_2/T_1$ と $T_3/T_1$ を求めよ。

#### 题目描述

考虑半径 $r$、质量 $m$ 的均匀实心球 S1，半径 $r$、质量 $3m$ 的均匀实心球 S2，以及半径 $r$、质量 $m$、厚度可忽略且面密度均匀的球壳 S3。将其中任一球置于与水平面夹角为 $\theta$ 的粗糙斜面上的 A 点，静止释放。重力加速度为 $g$；重力作用于球心 O，支持力 $N$ 和摩擦力 $F$ 作用于接触点 P。绕 O 的角速度为 $\omega$，逆时针为正。

I. 求 S1、S3 绕过球心的轴的转动惯量 $I_1,I_3$，写出推导过程。

II. S1 无滑动滚下，静摩擦系数为 $\mu_0$。

1. 写出质心运动方程、垂直于斜面的力平衡方程和绕质心的转动方程。
2. 求质心加速度及无滑动条件下 $\mu_0$ 与 $\theta$ 的关系。

III. S1 从 A 点静止释放后立即边滑边滚。动摩擦系数 $\mu<\mu_0$，且 $F=\mu N$。以释放时刻为 $t=0$，求球在 P 点相对于斜面的滑动速度 $q(t)$。

IV. 在无滑动条件下分别从 A 点静止释放三球。B 点位于沿斜面向下距离 $l$ 处，三球到达 B 的时间分别为 $T_1,T_2,T_3$。求 $T_2/T_1,T_3/T_1$。

## **Kai**

### I

中実球の密度を $\rho=3m/(4\pi r^3)$ とする。回転軸方向の座標を $z$ とし、厚さ $dz$ の円板に分ければ、

$$
I_1=\int_{-r}^{r}\frac12\rho\pi(r^2-z^2)^2\,dz
=\boxed{\frac25mr^2}.
$$

球殻の面密度は $\sigma=m/(4\pi r^2)$ である。極角 $\varphi$ の帯を用いると、

$$
I_3=\int_0^\pi(r\sin\varphi)^2\sigma\,2\pi r^2\sin\varphi\,d\varphi
=\boxed{\frac23mr^2}.
$$

### II

斜面下向きを $x$ の正方向とし、$F$ は斜面上向きの摩擦力の大きさとする。

$$
m\ddot x=mg\sin\theta-F,\qquad N=mg\cos\theta,\qquad
I_1\dot\omega=rF.
$$

非滑り条件 $\dot x=r\omega$ より、

$$
\boxed{\ddot x=\frac57g\sin\theta},\qquad
F=\frac27mg\sin\theta.
$$

$F\le\mu_0N$ であるから、

$$
\boxed{\mu_0\ge\frac27\tan\theta}.
$$

### III

初速度と初角速度はいずれも零なので、

$$
\dot x=g(\sin\theta-\mu\cos\theta)t,\qquad
\omega=\frac{5\mu g\cos\theta}{2r}t.
$$

したがって、斜面下向きを正とする滑り速度は

$$
\boxed{q(t)=\dot x-r\omega
=g\left(\sin\theta-\frac72\mu\cos\theta\right)t}.
$$

滑り出す条件 $\tan\theta>7\mu_0/2>7\mu/2$ により $q(t)>0$ となり、摩擦の向きとも整合する。

### IV

質量 $M$、慣性モーメント $I$ の球の加速度は

$$
a=\frac{g\sin\theta}{1+I/(Mr^2)},\qquad T=\sqrt{\frac{2l}{a}}.
$$

S1、S2 では $I/(Mr^2)=2/5$、S3 では $2/3$ だから、

$$
\boxed{\frac{T_2}{T_1}=1},\qquad
\boxed{\frac{T_3}{T_1}=\sqrt{\frac{25}{21}}=\frac5{\sqrt{21}}}.
$$

