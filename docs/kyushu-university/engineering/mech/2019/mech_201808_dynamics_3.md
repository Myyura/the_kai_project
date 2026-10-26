---
sidebar_label: "2018年8月実施 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2018年8月実施 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、長さ $l$、張力 $T$、線密度 $\rho$ の弦があり、両端は壁面に固定されている。壁面は $w=W\sin\Omega t$ で鉛直方向に振動している。$w=0$ のときの弦の左端を原点 O として弦の長手方向に座標 $x$ をとった静止座標系 O–$xy$ と、弦の左端を原点 $\mathrm O'$ として壁面に固定した移動座標系 $\mathrm O'$–$\xi\eta$ をとる。静止座標系における弦の $y$ 方向変位を $u(x,t)$、移動座標系における弦の $\eta$ 方向変位を $v(\xi,t)$ とする。張力 $T$ は常に一定とし、重力の影響は無視する。$c=\sqrt{T/\rho}$ を使用してよい。（50点）

**(1)** 静止座標系における弦の運動方程式を導出せよ。

**(2)** 静止座標系において、定常振動解を $u(x,t)=U(x)\sin\Omega t$ として求めよ。

**(3)** 移動座標系から見た弦の運動方程式を導出せよ。

**(4)** 移動座標系における定常振動解を $v(\xi,t)=V(\xi)\sin\Omega t$ として求めよ。

**(5)** (4) の結果より静止座標系から見た弦の定常振動解 $u(x,t)$ を求めよ。

![静止座標系と移動座標系の原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2019/mech_201808_dynamics-3-original.png)

### 题目描述

如图，长度为 $l$、张力为 $T$、线密度为 $\rho$ 的弦两端固定于墙面。墙面沿竖直方向按 $w=W\sin\Omega t$ 振动。取 $w=0$ 时弦左端为原点 O，沿弦长度方向取 $x$，建立静止坐标系 O–$xy$；以弦左端为原点 $\mathrm O'$，建立固定于墙面的移动坐标系 $\mathrm O'$–$\xi\eta$。静止坐标系中弦沿 $y$ 方向的位移为 $u(x,t)$，移动坐标系中沿 $\eta$ 方向的位移为 $v(\xi,t)$。张力 $T$ 始终恒定，忽略重力影响。可使用 $c=\sqrt{T/\rho}$。（50分）

**(1)** 推导静止坐标系中弦的运动方程。

**(2)** 在静止坐标系中，设稳态振动解为 $u(x,t)=U(x)\sin\Omega t$，求出该解。

**(3)** 推导从移动坐标系观察的弦运动方程。

**(4)** 在移动坐标系中，设稳态振动解为 $v(\xi,t)=V(\xi)\sin\Omega t$，求出该解。

**(5)** 根据 (4) 的结果，求从静止坐标系观察的弦稳态振动解 $u(x,t)$。

## **Kai**

### (1)

微小要素の鉛直方向の力は $T[u_x(x+dx,t)-u_x(x,t)]$ なので

$$
\rho\,dx\,u_{tt}=T u_{xx}\,dx,
\qquad\boxed{u_{tt}=c^2u_{xx}.}
$$

境界条件は $u(0,t)=u(l,t)=W\sin\Omega t$ である。

### (2)

$q=\Omega/c$ とすると、$U''+q^2U=0$、$U(0)=U(l)=W$。両端条件に対称な形を選べば

$$
\boxed{\begin{gathered}
U(x)=W\frac{\cos[q(x-l/2)]}{\cos(ql/2)},\\
u(x,t)=W\frac{\cos[q(x-l/2)]}{\cos(ql/2)}\sin\Omega t.
\end{gathered}}
$$

ここで $\cos(ql/2)\ne0$ とした。$ql=(2n+1)\pi$ では境界条件が両立せず、有界な調和定常解はない。$ql=2n\pi$（$n\ge1$）では上式に任意定数倍の $\sin(qx)$ を加えてもよく、上式は左右対称な特解である。

### (3)

$x=\xi$、$u=v+w$ であり、$\ddot w=-W\Omega^2\sin\Omega t$ だから

$$
\boxed{\begin{gathered}
v_{tt}=c^2v_{\xi\xi}+W\Omega^2\sin\Omega t,\\
v(0,t)=v(l,t)=0.
\end{gathered}}
$$

右辺の強制項は移動座標系の慣性力に由来する。

### (4)

$$
\begin{gathered}
V''+q^2V=-q^2W,\\
V(0)=V(l)=0.
\end{gathered}
$$

特解 $-W$ と斉次解を合わせて

$$
\boxed{V(\xi)=W\left\{\frac{\cos[q(\xi-l/2)]}{\cos(ql/2)}-1\right\}.}
$$

共振・非一意性については (2) と同じである。

### (5)

$$
\boxed{\begin{gathered}
u(x,t)=v(x,t)+W\sin\Omega t\\
=W\frac{\cos[q(x-l/2)]}{\cos(ql/2)}\sin\Omega t,
\end{gathered}}
$$

となり、(2) と一致する。
