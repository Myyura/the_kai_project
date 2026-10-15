---
sidebar_label: "2015年度 力学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Friction
  - Physics.Mechanics.Simple-Harmonic-Motion
---

# 大阪大学 工学研究科 機械工学専攻 2015年度 力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

傾斜角 $\theta$（$0<\theta<\pi/2$）の粗い斜面に、質量を無視できるばね定数 $k$ のばねの下端を固定し、上端に質量 $m$ の物体 A を取り付ける。ばねを自然長から $\delta>0$ だけ伸ばした位置に A を固定し、A に接するように質量 $m$ の物体 B を斜面に載せる。その後、A を静かに放す。両物体と斜面の間の静止摩擦係数を $\mu_s$、動摩擦係数を $\mu_d$、重力加速度の大きさを $g$ とする。

1. A が滑り出したとき、B も同時に滑り出すための $\theta$ の条件を不等式で示せ。
2. (1) の条件の下で、両物体が同時に滑り出す時刻を $t=0$ とする。B が A と初めて衝突するまでに、時刻 $t$ まで B が斜面に沿って滑り落ちる距離を求めよ。
3. (1) の条件の下で、B が A と初めて衝突する時刻が、A の速度が初めて $0$ になる時刻であった。このときの $\delta$ を求めよ。
4. (3) の $\delta$ を $\delta_0$ とする。(1) の条件を満たし、$\delta>\delta_0$ とする。A が滑り落ちて速度が初めて $0$ になった後、再び斜面上向きに滑り出すための $\theta$ の条件を不等式で示せ。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2015/mech_201408_mechanics_1-question-fig1.png)

#### 题目描述

倾角为 $\theta$（$0<\theta<\pi/2$）的粗糙斜面上，质量可忽略、劲度系数为 $k$ 的弹簧下端固定，上端连接质量为 $m$ 的物体 A。先将弹簧拉长 $\delta>0$ 并固定 A，再将同质量的 B 放在斜面上，使其与 A 接触，随后静止释放 A。两物体与斜面间的静、动摩擦系数分别为 $\mu_s,\mu_d$，重力加速度为 $g$。

1. 求 A 开始下滑时 B 同时下滑的倾角条件。
2. 满足上述条件并以同时开始下滑为 $t=0$，求 B 第一次与 A 相撞前，在时刻 $t$ 已滑过的距离。
3. 若第一次碰撞恰发生在 A 速度第一次变为零时，求 $\delta$。
4. 将上一问结果记为 $\delta_0$。在 (1) 的条件及 $\delta>\delta_0$ 下，求 A 第一次停止后重新向斜面上方滑动的倾角条件。

## **Kai**

### (1)

B が斜面下向きに滑り出す条件は、重力の斜面方向成分が最大静止摩擦力を上回ることである。したがって

$$
mg\sin\theta>\mu_smg\cos\theta,
\qquad \boxed{\tan\theta>\mu_s}.
$$

### (2)

斜面下向きを正とし、滑り始めてからの移動距離を $x_A,x_B$ とする。B には接触力が働かないので

$$
\ddot x_B=g(\sin\theta-\mu_d\cos\theta).
$$

初期条件 $x_B(0)=\dot x_B(0)=0$ から

$$
\boxed{x_B(t)=\frac g2(\sin\theta-\mu_d\cos\theta)t^2}.
$$

### (3)

$\omega=\sqrt{k/m}$、$a=g(\sin\theta-\mu_d\cos\theta)>0$ とおく。A の運動方程式と初期条件は

$$
m\ddot x_A=k(\delta-x_A)+ma,
\qquad x_A(0)=\dot x_A(0)=0.
$$

よって

$$
x_A(t)=\left(\delta+\frac{ma}{k}\right)(1-\cos\omega t),
\qquad
\dot x_A(t)=\omega\left(\delta+\frac{ma}{k}\right)\sin\omega t.
$$

初めて停止する時刻は $t_*=\pi/\omega$ である。この時刻に $x_A=x_B$ となるので

$$
2\left(\delta_0+\frac{ma}{k}\right)
=\frac{a\pi^2}{2\omega^2},
$$

$$
\boxed{\delta_0=\frac{mg}{k}
\left(\frac{\pi^2}{4}-1\right)
(\sin\theta-\mu_d\cos\theta)}.
$$

$0<\omega t<\pi$ では $\sin(\omega t/2)>\omega t/\pi$ であり、この $\delta_0$ に対して $x_A>x_B$ となる。したがって、それ以前の衝突はない。

### (4)

$\delta>\delta_0$ では、時刻 $t_*$ に B はまだ A に接していない。このとき

$$
x_A(t_*)=2\left(\delta+\frac{ma}{k}\right).
$$

ばねの自然長からの圧縮量は $x_A(t_*)-\delta=\delta+2ma/k$ である。A が上向きに動き始めるには、上向きのばね力から重力の斜面方向成分を引いた力が最大静止摩擦力を上回ればよい。ゆえに

$$
k\delta+2mg(\sin\theta-\mu_d\cos\theta)-mg\sin\theta
>\mu_smg\cos\theta.
$$

求める条件は、(1) の条件と併せて

$$
\boxed{\sin\theta-(\mu_s+2\mu_d)\cos\theta
> -\frac{k\delta}{mg}}.
$$
