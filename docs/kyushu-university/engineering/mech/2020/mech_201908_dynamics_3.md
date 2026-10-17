---
sidebar_label: "2019年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Wave-Equation
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2019年8月実施 機械力学 問3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

図のように、左端および右端にそれぞれ長手方向の外力 $F_1(t)$ および $F_2(t)$ が作用する長さ $l$、密度 $\rho$、ヤング率 $E$、断面積 $A$ の一様な棒の定常振動を考える。棒の左端の位置を原点 O として棒の長手方向に $x$ 軸をとり、時刻 $t$ における棒の長手方向変位を $u(x,t)$ で表す。振動は微小であり、重力の影響はないものとして、以下の問いに答えよ。（50点）

**(1)** 棒の縦振動を表す運動方程式（波動方程式）を導出せよ。

**(2)** $F_1(t)=0,\ F_2(t)=F\cos\Omega t$ のときの定常振動解を $u(x,t)=U(x)\cos\Omega t$ とする。$U(x)$ を求めよ。

**(3)** $F_1(t)=F\sin\Omega t,\ F_2(t)=F\cos\Omega t$ のときの定常振動解を求めよ。

**(4)** $F_1(t)=F\sin\Omega t,\ F_2(t)=F\cos\Omega t$ のときの定常振動について、外力の 1 周期の間に外力 $F_1(t)$ および $F_2(t)$ がなす仕事を求めよ。

![棒の両端に作用する外力の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_dynamics_3_figure_1.png)

#### 题目描述

如图，长度为 $l$、密度为 $\rho$、杨氏模量为 $E$、截面积为 $A$ 的均匀杆，其左、右端分别受到沿长度方向的外力 $F_1(t),F_2(t)$。考虑杆的稳态振动。以杆左端为原点 O，沿长度方向取 $x$ 轴，用 $u(x,t)$ 表示时刻 $t$ 杆的纵向位移。振动微小，不计重力影响。回答下列问题。（50分）

**(1)** 推导描述杆纵向振动的运动方程（波动方程）。

**(2)** 当 $F_1(t)=0,\ F_2(t)=F\cos\Omega t$ 时，设稳态振动解为 $u(x,t)=U(x)\cos\Omega t$，求 $U(x)$。

**(3)** 当 $F_1(t)=F\sin\Omega t,\ F_2(t)=F\cos\Omega t$ 时，求稳态振动解。

**(4)** 对 $F_1(t)=F\sin\Omega t,\ F_2(t)=F\cos\Omega t$ 时的稳态振动，求一个外力周期内 $F_1(t)$ 和 $F_2(t)$ 所做的功。

## **Kai**

### (1)

軸力 $N=EAu_x$ であるから、微小部分 $dx$ に対して

$$
\begin{gathered}
\rho A\,dx\,u_{tt}=N(x+dx,t)-N(x,t)\\
=EAu_{xx}\,dx.
\end{gathered}
$$

したがって

$$
\boxed{u_{tt}=c^2u_{xx}},\qquad c=\sqrt{E/\rho}.
$$

端面の法線の向きを考慮すると境界条件は $EAu_x(0,t)=F_1(t)$、$EAu_x(l,t)=F_2(t)$ である。

### (2)

$\beta=\Omega/c$ とする。$U''+\beta^2U=0$ なので $U=C\cos\beta x+D\sin\beta x$。$EAU'(0)=0$ より $D=0$、$EAU'(l)=F$ より

$$
\boxed{U(x)=-\frac{F\cos\beta x}{EA\beta\sin\beta l}}.
$$

以下は $\Omega>0$、$\sin\beta l\ne0$ の非共振の場合である。共振点では一般にこの有界な定常解は存在しない。

### (3)

左端の正弦加振に対する解を (2) に重ね合わせると

$$
\boxed{u(x,t)=\frac{F}{EA\beta\sin\beta l}
\{\cos\beta(l-x)\sin\Omega t-\cos\beta x\cos\Omega t\}}.
$$

微分すれば両端の境界条件を満たす。

### (4)

$K=F/(EA\beta\sin\beta l)$ とおく。左端の力は $-x$ 向きであるから

$$
\begin{gathered}
W_1=\int_0^{2\pi/\Omega}[-F\sin\Omega t]u_t(0,t)\,dt\\
=-\pi FK,
\end{gathered}
$$

$$
W_2=\int_0^{2\pi/\Omega}[F\cos\Omega t]u_t(l,t)\,dt
=\pi FK.
$$

よって

$$
\boxed{\begin{gathered}
W_1=-\frac{\pi F^2}{EA\beta\sin\beta l},\\
W_2=\frac{\pi F^2}{EA\beta\sin\beta l}
\end{gathered}}.
$$

$W_1+W_2=0$ は、減衰のない定常振動の一周期でエネルギーが元に戻ることと一致する。

## **Reference**

- [九州大学 2020年度 機械力学 公式問題（PDF 3ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-dynamics.pdf)
