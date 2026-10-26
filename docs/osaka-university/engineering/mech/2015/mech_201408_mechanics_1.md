---
sidebar_label: "2014年8月実施 力学 問題1"
tags:
  - Osaka-University
  - Physics.Mechanics.Friction
  - Physics.Mechanics.Simple-Harmonic-Motion
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 力学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題1（解答用紙：赤）

図のように、傾斜角 $\theta$（$0<\theta<\pi/2$）の粗い斜面において、質量が無視できるばね定数 $k$ のばねの下端を固定し、質量 $m$ の物体 A をばねの上端にとりつけた。はじめ、ばねを自然長から長さ $\delta$（$\delta>0$）のばした位置に物体 A を固定し、物体 A に接触するように、質量 $m$ の物体 B を斜面にのせた。つぎに、物体 A を静かに放した。斜面と物体 A および B との間の静止摩擦係数を $\mu_s$、動摩擦係数を $\mu_d$ とし、重力加速度の大きさを $g$ とする。以下の問いに答えなさい。

(1) 物体 A が滑りだしたとき、物体 B も同時に滑りだすための角度 $\theta$ の条件を不等式で示しなさい。

(2) $\theta$ が小問 (1) の条件を満足するとき、物体 A および B が斜面に沿って滑り落ちていった。物体 A および B が同時に滑りだす時刻 $t$ を $t=0$ とし、物体 B が物体 A とはじめて衝突するまでの物体 B の運動について考える。$t=0$ から任意の時刻 $t$ までに物体 B が斜面に沿って滑り落ちる距離を求めなさい。

(3) $\theta$ が小問 (1) の条件を満足するとき、物体 B が物体 A とはじめて衝突したのは、物体 A が滑りだしてから最初に物体 A の速度が $0$ となる時刻であった。このときの $\delta$ を求めなさい。

(4) 小問 (3) の $\delta$ を $\delta_0$ とする。$\theta$ が小問 (1) の条件を満足して、$\delta>\delta_0$ ときを考える。このとき、物体 A が滑りだして、速度が最初に $0$ となる位置まで滑り落ちた後、物体 A が再び斜面に沿って上向きに滑りだすための、角度 $\theta$ の条件を不等式で示しなさい。

![原題の図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_mechanics_1_original_figure_1.png)

### 题目描述

问题1（使用红色答题纸）

如图，在倾角为 $\theta$（$0<\theta<\pi/2$）的粗糙斜面上，固定一根质量可忽略、弹簧常数为 $k$ 的弹簧下端，在其上端安装质量为 $m$ 的物体 A。初始时，将弹簧从自然长度拉长 $\delta$（$\delta>0$），并固定 A，再将质量同为 $m$ 的物体 B 放在斜面上，使其与 A 接触。随后将 A 静止释放。A、B 与斜面间的静摩擦系数为 $\mu_s$、动摩擦系数为 $\mu_d$，重力加速度大小为 $g$。回答下列问题。

(1) 用不等式给出 A 开始滑动时 B 也同时开始滑动的倾角 $\theta$ 条件。

(2) 当 $\theta$ 满足 (1) 时，A、B 沿斜面下滑。以两者同时开始滑动的时刻为 $t=0$，考虑 B 首次与 A 相撞前的运动。求 B 从 $t=0$ 至任意时刻 $t$ 沿斜面下滑的距离。

(3) 当 $\theta$ 满足 (1) 时，B 首次与 A 相撞恰好发生在 A 开始滑动后速度首次为 $0$ 的时刻。求此时的 $\delta$。

(4) 将 (3) 所得的 $\delta$ 记为 $\delta_0$。考虑 $\theta$ 满足 (1) 且 $\delta>\delta_0$ 的情形。A 开始下滑并到达速度首次为 $0$ 的位置后，要使 A 再次沿斜面向上滑动，用不等式给出倾角 $\theta$ 应满足的条件。

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
\begin{gathered}
x_A(t)=\left(\delta+\frac{ma}{k}\right)(1-\cos\omega t),\\
\dot x_A(t)=\omega\left(\delta+\frac{ma}{k}\right)\sin\omega t.
\end{gathered}
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
