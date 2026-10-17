---
sidebar_label: "2017年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2017年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

点 $\mathrm P_1$ において下端を回転自由の状態で床に支持された質量 $3m$、長さ $2l$ の細い一様な剛体棒 1 と、点 $\mathrm P_2$ において上端を回転自由の状態で天井に支持された質量 $9m$、長さ $2l$ の細い一様な剛体棒 2 があり、両剛体棒の中心間がばね定数 $k$ の水平なばねで互いに結合されている。剛体棒 1 の上端に $F_1\cos\Omega t$ の外力、剛体棒 2 の下端に $F_2\cos\Omega t$ の外力が水平方向に作用している。図のように、剛体棒 1 の回転角を $\theta_1$（時計回りを正）、剛体棒 2 の回転角を $\theta_2$（反時計回りを正）とし、ばねは $\theta_1=\theta_2=0$ のとき自然長にあるものとする。剛体棒の回転角 $\theta_1$ および $\theta_2$ は微小であり、ばねは常に水平を保つと考えてよい。重力加速度を $g$ として以下の問いに答えよ。摩擦は無視してよい。（50点）

**(1)** 剛体棒 1 の下端まわりの慣性モーメント $I_1$ および剛体棒 2 の上端まわりの慣性モーメント $I_2$ を求めよ。

**(2)** $\theta_1$ および $\theta_2$ の運動を表す運動方程式を求めよ。

**(3)** $k=12mg/l$ のとき、以下の問い (a) および (b) に答えよ。

- (a) 1 次および 2 次の固有角振動数 $\omega_1$ および $\omega_2$ を求めよ。さらに、1 次および 2 次の固有モードを求めよ。
- (b) 2 次の共振が生じないような $F_1$ と $F_2$ の比 $F_2/F_1$ を求めよ。

**(4)** $k=\alpha mg/l$ とおく（$\alpha>0$）。外力の作用しない $F_1=F_2=0$ のとき、解を

$$
\begin{bmatrix}\theta_1\\\theta_2\end{bmatrix}
=\begin{bmatrix}\Theta_1\\\Theta_2\end{bmatrix}e^{\lambda t}
$$

とすれば、$\alpha$ がある値よりも小さくなると $\lambda$ の中に実部が正のものが現れ、静的平衡状態が不安定となる。このような安定性の変化が生じるときの $\alpha$ を求めよ。

![上向き・下向きの剛体棒の結合の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_dynamics-2-original.png)

#### 题目描述

细长均匀刚性杆 1 的质量为 $3m$、长度为 $2l$，下端在 $\mathrm P_1$ 点可自由转动地支承于地板；杆 2 的质量为 $9m$、长度为 $2l$，上端在 $\mathrm P_2$ 点可自由转动地支承于天花板。两杆中心之间用弹簧常数为 $k$ 的水平弹簧连接。杆 1 上端受到水平外力 $F_1\cos\Omega t$，杆 2 下端受到水平外力 $F_2\cos\Omega t$。如图，杆 1 转角为 $\theta_1$，顺时针为正；杆 2 转角为 $\theta_2$，逆时针为正。$\theta_1=\theta_2=0$ 时弹簧为自然长度。两转角微小，可认为弹簧始终保持水平。重力加速度为 $g$，忽略摩擦，回答下列问题。（50分）

**(1)** 求杆 1 绕下端的转动惯量 $I_1$ 和杆 2 绕上端的转动惯量 $I_2$。

**(2)** 求描述 $\theta_1,\theta_2$ 运动的运动方程。

**(3)** 当 $k=12mg/l$ 时，回答 (a)、(b)。

- (a) 求一阶、二阶固有角频率 $\omega_1,\omega_2$，并求相应固有振型。
- (b) 求使二阶共振不发生的外力比 $F_2/F_1$。

**(4)** 令 $k=\alpha mg/l$，其中 $\alpha>0$。无外力，即 $F_1=F_2=0$ 时，设解为

$$
\begin{bmatrix}\theta_1\\\theta_2\end{bmatrix}
=\begin{bmatrix}\Theta_1\\\Theta_2\end{bmatrix}e^{\lambda t}.
$$

当 $\alpha$ 小于某个值时，$\lambda$ 中出现实部为正的值，静平衡状态变为不稳定。求发生这种稳定性变化时的 $\alpha$。

## **Kai**

### (1)

$$
\boxed{\begin{gathered}
I_1=\frac13(3m)(2l)^2=4ml^2,\\
I_2=\frac13(9m)(2l)^2=12ml^2.
\end{gathered}}
$$

### (2)

中心の水平変位はそれぞれ $l\theta_1,l\theta_2$。ばねの伸びは $l(\theta_2-\theta_1)$ であり、重力は棒 1 には不安定化、棒 2 には復元のモーメントを与える。

$$
\boxed{\begin{gathered}
\begin{pmatrix}4ml^2&0\\0&12ml^2\end{pmatrix}
\begin{pmatrix}\ddot\theta_1\\\ddot\theta_2\end{pmatrix}\\
+\begin{pmatrix}kl^2-3mgl&-kl^2\\-kl^2&kl^2+9mgl\end{pmatrix}
\begin{pmatrix}\theta_1\\\theta_2\end{pmatrix}\\
=2l\begin{pmatrix}F_1\\F_2\end{pmatrix}\cos\Omega t.
\end{gathered}}
$$

### (3)

#### (a)

$z=\omega^2l/g$ とすると、固有方程式は

$$
\begin{gathered}
(9-4z)(21-12z)-144=3(4z-1)(4z-15)\\
=0.
\end{gathered}
$$

したがって

$$
\boxed{\begin{gathered}
\omega_1=\frac12\sqrt{\frac gl},\\
\boldsymbol\phi_1\propto\begin{pmatrix}3\\2\end{pmatrix},\\
\omega_2=\frac{\sqrt{15}}2\sqrt{\frac gl},\\
\boldsymbol\phi_2\propto\begin{pmatrix}2\\-1\end{pmatrix}.
\end{gathered}}
$$

#### (b)

2 次モードの一般化外力をゼロにすればよいので

$$
\begin{gathered}
\boldsymbol\phi_2^T\begin{pmatrix}F_1\\F_2\end{pmatrix}
=2F_1-F_2=0,\\
\boxed{F_2/F_1=2.}
\end{gathered}
$$

### (4)

剛性行列の行列式は

$$
\begin{gathered}
\det K=(mgl)^2\left[(\alpha-3)(\alpha+9)-\alpha^2\right]\\
=(mgl)^2(6\alpha-27).
\end{gathered}
$$

質量行列は正定値であり、$\alpha>9/2$ では剛性行列も正定値となる。$0<\alpha<9/2$ では一つの固有剛性が負となり、正の実数 $\lambda$ が現れる。よって

$$
\boxed{\alpha_{\mathrm{cr}}=\frac92.}
$$
