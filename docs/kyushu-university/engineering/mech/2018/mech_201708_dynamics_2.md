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

質量 $3m$、長さ $2l$ の細い一様な剛体棒 1 が下端 P₁ で床に回転自由に支持され、質量 $9m$、長さ $2l$ の棒 2 が上端 P₂ で天井に回転自由に支持されている。両棒の中心間をばね定数 $k$ の水平ばねで結合する。棒 1 の上端と棒 2 の下端に、それぞれ右向きの外力 $F_1\cos\Omega t,F_2\cos\Omega t$ が作用する。

棒 1 の時計回り角を $\theta_1$、棒 2 の反時計回り角を $\theta_2$ とし、両角がゼロのときばねは自然長にある。角変位は微小、ばねは水平を保つとし、摩擦は無視する。重力加速度は $g$ である。（50 点）

![上向き・下向きの剛体棒の結合（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_dynamics-2-original.png)

1. 各支持端まわりの慣性モーメント $I_1,I_2$ を求めよ。
2. $\theta_1,\theta_2$ の運動方程式を求めよ。
3. $k=12mg/l$ のとき、(a) 1 次・2 次の固有角振動数と固有モード、(b) 2 次共振を生じさせない $F_2/F_1$ を求めよ。
4. $k=\alpha mg/l$（$\alpha>0$）、$F_1=F_2=0$ とする。解を $\boldsymbol\theta=\boldsymbol\Theta e^{\lambda t}$ とすると、$\alpha$ がある値より小さいと $\operatorname{Re}\lambda>0$ の根が現れる。安定性が変わる $\alpha$ を求めよ。

#### 题目描述

长均为 $2l$ 的两根均匀杆，左杆质量 $3m$、下端铰支，右杆质量 $9m$、上端铰支；中心用水平弹簧连接，自然状态两杆竖直。端点分别受水平简谐力，左角顺时针为正、右角逆时针为正。求转动惯量及线性方程；刚度 $12mg/l$ 时求固有频率、模态和不激发第二模态的力比；刚度为 $\alpha mg/l$ 时求失稳临界值。

## **Kai**

### (1)

$$
\boxed{I_1=\frac13(3m)(2l)^2=4ml^2,\qquad
I_2=\frac13(9m)(2l)^2=12ml^2.}
$$

### (2)

中心の水平変位はそれぞれ $l\theta_1,l\theta_2$。ばねの伸びは $l(\theta_2-\theta_1)$ であり、重力は棒 1 には不安定化、棒 2 には復元のモーメントを与える。

$$
\boxed{
\begin{pmatrix}4ml^2&0\\0&12ml^2\end{pmatrix}
\begin{pmatrix}\ddot\theta_1\\\ddot\theta_2\end{pmatrix}
+\begin{pmatrix}kl^2-3mgl&-kl^2\\-kl^2&kl^2+9mgl\end{pmatrix}
\begin{pmatrix}\theta_1\\\theta_2\end{pmatrix}
=2l\begin{pmatrix}F_1\\F_2\end{pmatrix}\cos\Omega t.}
$$

### (3)

#### (a)

$z=\omega^2l/g$ とすると、固有方程式は

$$
(9-4z)(21-12z)-144=3(4z-1)(4z-15)=0.
$$

したがって

$$
\boxed{\omega_1=\frac12\sqrt{\frac gl},\quad
\boldsymbol\phi_1\propto\begin{pmatrix}3\\2\end{pmatrix},\qquad
\omega_2=\frac{\sqrt{15}}2\sqrt{\frac gl},\quad
\boldsymbol\phi_2\propto\begin{pmatrix}2\\-1\end{pmatrix}.}
$$

#### (b)

2 次モードの一般化外力をゼロにすればよいので

$$
\boldsymbol\phi_2^T\begin{pmatrix}F_1\\F_2\end{pmatrix}
=2F_1-F_2=0,
\qquad\boxed{F_2/F_1=2.}
$$

### (4)

剛性行列の行列式は

$$
\det K=(mgl)^2\left[(\alpha-3)(\alpha+9)-\alpha^2\right]
=(mgl)^2(6\alpha-27).
$$

質量行列は正定値であり、$\alpha>9/2$ では剛性行列も正定値となる。$0<\alpha<9/2$ では一つの固有剛性が負となり、正の実数 $\lambda$ が現れる。よって

$$
\boxed{\alpha_{\mathrm{cr}}=\frac92.}
$$
