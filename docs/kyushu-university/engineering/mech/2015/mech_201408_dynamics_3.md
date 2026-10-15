---
sidebar_label: "2015年度 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Longitudinal-Vibration
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2015年度 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

密度 $\rho$、縦弾性係数 $E$、断面積 $A$、長さ $l$ の一様な弾性棒の縦振動を考える。左端を壁に固定し、右端に $f(t)=f_0\cos\Omega t$ を加える。左端を原点とする軸方向座標を $x$、変位を $u(x,t)$ とし、$c=\sqrt{E/\rho}$ を用いてよい。（50 点）

![問題の装置（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2015/dynamics-3-original.png)

1. $f(t)=0$ のとき、棒の縦振動の運動方程式を導出せよ。
2. 強制振動解を $u(x,t)=U(x)\cos\Omega t$ と仮定し、境界条件を考慮して $U(x)$ を求めよ。
3. 右端変位の振幅 $X$ と左端の壁にかかる力の振幅 $F$ を求めよ。
4. 棒の右端にばね定数 $k$ のばねと質量 $m$ からなる振動体を取り付ける。このときの壁にかかる力の振幅 $F'$ を求め、一定の $\Omega$ に対して $F'$ をなるべく小さくする $m,k$ の条件を求めよ。

#### 题目描述

匀质弹性杆密度 $\rho$、弹性模量 $E$、截面积 $A$、长度 $l$，左端固定，右端受轴向简谐力 $f_0\cos\Omega t$。以左端为原点、轴向位移为 $u(x,t)$，求纵振动方程及简谐强迫解，再求杆右端位移和左端墙面受力的振幅。随后在杆右端连接刚度 $k$ 的弹簧与质量 $m$，求墙面受力振幅，并确定固定激振频率下的减振条件。

## **Kai**

### (1)

断面軸力は $N=EAu_x$。長さ $\mathrm dx$ の微小要素について

$$
\rho A\,\mathrm dx\,u_{tt}=N(x+\mathrm dx,t)-N(x,t)
=EAu_{xx}\,\mathrm dx+o(\mathrm dx).
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
\boxed{X=|U(l)|=\left|\frac{f_0}{EAq}\tan(ql)\right|,\qquad
F=|EAU'(0)|=\left|\frac{f_0}{\cos(ql)}\right|.}
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
