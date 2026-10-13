---
sidebar_label: "2020年度 問3（機械力学）"
tags:
  - Kyushu-University
  - Mathematics.Differential-Equations.Wave-Equation
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2020年度 機械力学 問3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

長さ $l$、断面積 $A$、密度 $\rho$、縦弾性係数 $E$ の一様な棒が $x$ 軸に沿って置かれている。左端を $x=0$、右端を $x=l$ とし、位置 $x$ における $+x$ 方向変位を $u(x,t)$ とする。棒の左端には左向きに $F_1$、右端には右向きに $F_2$ が作用する。重力の影響を無視し、微小な縦振動を考える。

1. 棒の微小部分の運動方程式から、$u(x,t)$ の偏微分方程式を導け。
2. $F_1=0$、$F_2=F\cos\Omega t$ のとき、定常振動を $u(x,t)=U(x)\cos\Omega t$ として $U(x)$ を求めよ。
3. $F_1=F\sin\Omega t$、$F_2=F\cos\Omega t$ のとき、定常振動 $u(x,t)$ を求めよ。
4. (3) の定常振動で、一周期に $F_1,F_2$ がそれぞれ棒になす仕事を求めよ。

#### 题目描述

均匀直棒长 $l$、截面积 $A$、密度 $\rho$、杨氏模量 $E$，轴向坐标从左端 $0$ 到右端 $l$，位移 $u$ 向右为正。左端力 $F_1$ 向左，右端力 $F_2$ 向右，忽略重力并考虑微小纵振。① 从微元运动方程推导偏微分方程。② 当 $F_1=0,F_2=F\cos\Omega t$ 时求稳态振幅 $U(x)$。③ 当 $F_1=F\sin\Omega t,F_2=F\cos\Omega t$ 时求稳态响应。④ 求两端外力各自在一个周期内的功。

## **Kai**

### (1)

軸力 $N=EAu_x$ であるから、微小部分 $dx$ に対して

$$
\rho A\,dx\,u_{tt}=N(x+dx,t)-N(x,t)=EAu_{xx}\,dx.
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
W_1=\int_0^{2\pi/\Omega}[-F\sin\Omega t]u_t(0,t)\,dt
=-\pi FK,
$$

$$
W_2=\int_0^{2\pi/\Omega}[F\cos\Omega t]u_t(l,t)\,dt
=\pi FK.
$$

よって

$$
\boxed{W_1=-\frac{\pi F^2}{EA\beta\sin\beta l},\qquad
W_2=\frac{\pi F^2}{EA\beta\sin\beta l}}.
$$

$W_1+W_2=0$ は、減衰のない定常振動の一周期でエネルギーが元に戻ることと一致する。

## **Reference**

- [九州大学 2020年度 機械力学 公式問題（PDF 3ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-dynamics.pdf)
