---
sidebar_label: "2014年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Longitudinal-Vibration
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2014年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、密度 $\rho$、縦弾性係数 $E$、断面積 $A$、長さ $l$ の一様な弾性棒における縦振動を考える。左端は壁に固定されており、右端には $f(t)=f_0\cos\Omega t$ の力がかかる。左端を原点とし弾性棒の長手方向に座標 $x$ をとり、座標 $x$、時刻 $t$ における弾性棒の長手方向変位を $u(x,t)$ とする。弾性棒内の音速 $c=\sqrt{E/\rho}$ を使用してよい。以下の問いに答えよ。（50点）

**(1)** $f(t)=0$ のとき、棒の縦振動の運動方程式を導出せよ。

**(2)** 棒の強制振動解を $u(x,t)=U(x)\cos\Omega t$ と仮定し、境界条件を考慮して $U(x)$ を求めよ。

**(3)** 右端の変位の振幅 $X$ と左端の壁にかかる力の振幅 $F$ を求めよ。

**(4)** 棒の右端に質量 $m$、ばね定数 $k$ の振動体を取り付ける。このとき、左端の壁にかかる力の振幅 $F'$ を求めよ。また、$\Omega$ が一定のとき、$F'$ をなるべく小さくするための $m$ と $k$ の条件を求めよ。

![原題の弾性棒・加振力・付加振動体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_dynamics-3-original.png)

### 题目描述

如图，考虑密度为 $\rho$、纵向弹性模量为 $E$、截面积为 $A$、长度为 $l$ 的均匀弹性杆的纵振动。左端固定于墙壁，右端受力 $f(t)=f_0\cos\Omega t$。以左端为原点，沿杆长取坐标 $x$，坐标 $x$、时刻 $t$ 处的轴向位移为 $u(x,t)$。可使用杆内声速 $c=\sqrt{E/\rho}$。回答下列问题。（50分）

**(1)** 当 $f(t)=0$ 时，推导杆纵振动的运动方程。

**(2)** 假设杆的受迫振动解为 $u(x,t)=U(x)\cos\Omega t$，考虑边界条件，求 $U(x)$。

**(3)** 求右端位移振幅 $X$ 和作用于左端墙壁的力的振幅 $F$。

**(4)** 在杆右端安装质量为 $m$、弹簧常数为 $k$ 的振动体。求此时作用于左端墙壁的力的振幅 $F'$。当 $\Omega$ 固定时，求使 $F'$ 尽可能小的 $m,k$ 条件。

## **Kai**

### (1)

断面軸力は $N=EAu_x$。長さ $\mathrm dx$ の微小要素について

$$
\begin{gathered}
\rho A\,\mathrm dx\,u_{tt}=N(x+\mathrm dx,t)-N(x,t)\\
=EAu_{xx}\,\mathrm dx+o(\mathrm dx).
\end{gathered}
$$

ゆえに

$$
\boxed{u_{tt}=c^2u_{xx},\qquad c=\sqrt{E/\rho}.}
$$

自由端の場合の境界条件は $u(0,t)=0,\ u_x(l,t)=0$。

### (2)

$q=\Omega/c$ とおく。$U''+q^2U=0$ と $U(0)=0$ から $U=B\sin qx$。右端では $EAU'(l)=f_0$ なので

$$
\boxed{U(x)=\frac{f_0\sin(qx)}{EAq\cos(ql)}.}
$$

ここでは $\Omega>0$、$\cos(ql)\ne0$ とする。$\cos(ql)=0$ は無減衰系の共振であり、有限振幅の定常調和解は存在しない。

### (3)

振幅を非負の値とすると

$$
\boxed{\begin{gathered}
X=|U(l)|=\left|\frac{f_0}{EAq}\tan(ql)\right|,\\
F=|EAU'(0)|=\left|\frac{f_0}{\cos(ql)}\right|.
\end{gathered}}
$$

### (4)

付加質量の変位を $v(t)=Y\cos\Omega t$、棒の変位を $u=B\sin(qx)\cos\Omega t$ とする。付加質量の運動方程式と棒端の力のつり合いは

$$
(k-m\Omega^2)Y=kB\sin(ql),
$$

$$
EAqB\cos(ql)=f_0+k\{Y-B\sin(ql)\}.
$$

この2式を連立して

$$
B=\frac{f_0(k-m\Omega^2)}{
EAq(k-m\Omega^2)\cos(ql)-km\Omega^2\sin(ql)}.
$$

したがって、分母がゼロでないとき

$$
\boxed{F'=\left|\frac{EAq f_0(k-m\Omega^2)}{
EAq(k-m\Omega^2)\cos(ql)-km\Omega^2\sin(ql)}\right|.}
$$

通常の $\sin(ql)\ne0$ の場合、付加振動体の固有角振動数を加振周波数に合わせれば

$$
\boxed{\frac{k}{m}=\Omega^2\quad\Longrightarrow\quad B=0,\quad F'=0.}
$$

このとき $Y=-f_0/k$ で、ばね力が外力を打ち消す。$k$ を単に大きくする条件ではなく、$k/m$ を調整する条件である。

ただし $\sin(ql)=0$ と上記の同調条件が同時に成立する退化点では、連立式の行列式もゼロになる。$B=0$ の調和解は存在するが、同じ周波数の自由振動を重ねられるため壁反力は一意に定まらない。上のゼロ振幅の結論は、この退化点を除く定常強制応答についてのものである。
