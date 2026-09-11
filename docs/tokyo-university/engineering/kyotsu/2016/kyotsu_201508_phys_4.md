---
sidebar_label: '2015年8月実施 物理学 第4問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Damped-Harmonic-Motion
---

# 東京大学 工学系研究科 2015年8月実施 物理学 第4問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

質量 $m$ の質点が $x$ 軸上で周期的外力 $mf\cos\omega t$ を受け、次の運動方程式に従う。$f,\mu>0$、$\omega_0$ は固有角振動数である。

$$
m\ddot x+2m\mu\dot x+m\omega_0^2x=mf\cos\omega t.
$$

十分時間が経った後の定常解は、弾性振幅 $A_e$ と吸収振幅 $A_a$ を用いて

$$
x_s(t)=\frac{f\cos(\omega t-\alpha)}{\sqrt{(\omega_0^2-\omega^2)^2+4\mu^2\omega^2}}
=A_e\cos\omega t+A_a\sin\omega t,\qquad
\tan\alpha=\frac{2\mu\omega}{\omega_0^2-\omega^2}
$$

と表される。周期 $T=2\pi/\omega$ について、任意の $\tau$ から $\tau+T$ までの平均は $\langle\cos^2\omega t\rangle=\langle\sin^2\omega t\rangle=1/2$、$\langle\sin\omega t\cos\omega t\rangle=0$ を用いてよい。

### I

外力の仕事率を $p(t)$、力学的全エネルギーを $w(t)$、それぞれの周期平均を $P,W$ とする。

1. $A_e,A_a$ を $\omega,\omega_0,\mu,f$ で表せ。
2. $p(t)$ は外力と $\dot x$ の積であることから $P$ を $m,f,\omega,A_a$ で表し、供給・消費エネルギーの観点から意味を述べよ。
3. $W$ を $m,f,\omega,\omega_0,\mu$ で表せ。
4. $P$ は $\omega=\omega_0$ で最大値 $P_{\max}$ をとる。$P=P_{\max}/2$ となる二つの角振動数を $\omega_+>\omega_-$ とし、半値幅 $\Delta\omega=\omega_+-\omega_-$ を求めよ。

### II

過渡応答を含む解は

$$
x_t(t)=e^{-\mu t}(B_1\cos\omega_1t+B_2\sin\omega_1t)+x_s(t),\qquad
\omega_1=\sqrt{\omega_0^2-\mu^2}
$$

である。弱い減衰 $\omega_0>\omega_1\gg\mu$ を仮定し、$x_t(0)=\dot x_t(0)=0$ とする。

1. $B_1,B_2$ を $A_e,A_a,\mu,\omega,\omega_1$ で表せ。
2. $\omega=\omega_1$ の場合の近似解を求めよ。
3. $\omega\simeq0.1\omega_0$ の場合の近似解を求め、時間変化を図示せよ。

#### 题目描述

质量为 $m$ 的质点受到外力 $mf\cos\omega t$，满足 $m\ddot x+2m\mu\dot x+m\omega_0^2x=mf\cos\omega t$，其中 $f,\mu>0$，$\omega_0$ 为固有角频率。经过足够长时间后的定常解为

$$
x_s(t)=\frac{f\cos(\omega t-\alpha)}{\sqrt{(\omega_0^2-\omega^2)^2+4\mu^2\omega^2}}
=A_e\cos\omega t+A_a\sin\omega t,\qquad
\tan\alpha=\frac{2\mu\omega}{\omega_0^2-\omega^2}.
$$

$A_e,A_a$ 分别称为弹性振幅、吸收振幅。周期 $T=2\pi/\omega$；从任意 $\tau$ 到 $\tau+T$ 的周期平均满足 $\langle\cos^2\omega t\rangle=\langle\sin^2\omega t\rangle=1/2$、$\langle\sin\omega t\cos\omega t\rangle=0$，可以直接使用。

I. 设外力瞬时功率为 $p(t)$、总机械能为 $w(t)$，相应周期平均为 $P,W$。

1. 用 $\omega,\omega_0,\mu,f$ 求 $A_e,A_a$。
2. 利用功率等于力乘速度，以 $m,f,\omega,A_a$ 表示 $P$，并从输入和耗散能量解释其意义。
3. 用 $m,f,\omega,\omega_0,\mu$ 表示 $W$。
4. 已知 $P$ 在 $\omega=\omega_0$ 最大。求半高处两角频率之差 $\Delta\omega=\omega_+-\omega_-$。

II. 含瞬态的解为 $x_t=e^{-\mu t}(B_1\cos\omega_1t+B_2\sin\omega_1t)+x_s$，其中 $\omega_1=\sqrt{\omega_0^2-\mu^2}$。假设 $\omega_0>\omega_1\gg\mu$，初始位移、速度均为零。

1. 用 $A_e,A_a,\mu,\omega,\omega_1$ 求 $B_1,B_2$。
2. 求 $\omega=\omega_1$ 时的近似解。
3. 求 $\omega\simeq0.1\omega_0$ 时的近似解并画出时间变化。

## **Kai**

### I

#### I.1

$D=(\omega_0^2-\omega^2)^2+4\mu^2\omega^2$ とおく。定常解を運動方程式に代入して係数を比較すると

$$
\boxed{A_e=\frac{f(\omega_0^2-\omega^2)}{D}},\qquad
\boxed{A_a=\frac{2f\mu\omega}{D}}.
$$

#### I.2

$$
\boxed{P=\langle mf\cos\omega t\,\dot x_s\rangle
=\frac12mf\omega A_a=\frac{mf^2\mu\omega^2}{D}}.
$$

また $2m\mu\langle\dot x_s^2\rangle=m\mu\omega^2(A_e^2+A_a^2)=P$。定常状態では、外力が一周期に供給するエネルギーが抵抗で失われるエネルギーに等しい。

#### I.3

$$
\boxed{W=\left\langle\frac m2\dot x_s^2+\frac{m\omega_0^2}{2}x_s^2\right\rangle
=\frac{mf^2(\omega^2+\omega_0^2)}{4D}}.
$$

#### I.4

$P_{\max}=mf^2/(4\mu)$ より、半値条件は $(\omega_0^2-\omega^2)^2=4\mu^2\omega^2$。したがって

$$
\omega_\pm=\sqrt{\omega_0^2+\mu^2}\pm\mu,\qquad
\boxed{\Delta\omega=2\mu}.
$$

### II

#### II.1

初期条件は $B_1+A_e=0$、$-\mu B_1+\omega_1B_2+\omega A_a=0$ である。よって

$$
\boxed{B_1=-A_e,\qquad B_2=-\frac{\mu A_e+\omega A_a}{\omega_1}}.
$$

#### II.2

$\omega=\omega_1$ では $A_e/A_a=\mu/(2\omega_1)\ll1$、$A_a\simeq f/(2\mu\omega_1)$ である。主要項を残すと

$$
\boxed{x_t(t)\simeq\frac{f}{2\mu\omega_1}(1-e^{-\mu t})\sin\omega_1t}.
$$

振幅包絡線は $\pm f(1-e^{-\mu t})/(2\mu\omega_1)$ であり、時定数 $1/\mu$ で定常振幅に近づく。

#### II.3

$\omega\simeq0.1\omega_0$ では $A_a\ll A_e\simeq f/(\omega_0^2-\omega^2)$ である。$\mu/\omega_1$ の高次項を省けば

$$
\boxed{x_t(t)\simeq\frac{f}{\omega_0^2-\omega^2}
\left(\cos\omega t-e^{-\mu t}\cos\omega_1t\right)}.
$$

ゆっくりした定常振動に固有角振動数に近い過渡振動が重なり、後者のみが減衰する。

![共鳴付近と低い駆動周波数での過渡応答](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2016/kyotsu_201508_phys_4_diagram_audited.svg)

