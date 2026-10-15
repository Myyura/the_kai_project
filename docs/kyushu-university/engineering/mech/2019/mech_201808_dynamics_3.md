---
sidebar_label: "2019年度 問3（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.String-Vibration
  - Physics.Mechanics.Forced-Vibration
---

# 九州大学 工学府 機械系専攻 2019年度 機械力学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

長さ $l$、張力 $T$、線密度 $\rho$ の弦の両端が壁面に固定され、両壁面は $w=W\sin\Omega t$ で鉛直に振動する。$w=0$ のときの左端を原点 O、弦の長手方向を $x$ とする静止座標系 O–$xy$ と、左端を原点 O′ とする壁面固定の移動座標系 O′–$\xi\eta$ をとる。

静止系の鉛直変位を $u(x,t)$、移動系の鉛直変位を $v(\xi,t)$ とする。張力は一定、重力は無視し、$c=\sqrt{T/\rho}$ を用いてよい。（50 点）

![静止座標系と移動座標系（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/dynamics-3-original.png)

1. 静止系における運動方程式を導出せよ。
2. 静止系の定常振動解を $u(x,t)=U(x)\sin\Omega t$ として求めよ。
3. 移動系における運動方程式を導出せよ。
4. 移動系の定常振動解を $v(\xi,t)=V(\xi)\sin\Omega t$ として求めよ。
5. (4) から静止系での定常振動解を求めよ。

#### 题目描述

长 $l$、张力 $T$、线密度 $\rho$ 的弦两端随墙面同相上下振动 $W\sin\Omega t$。忽略重力，分别在静止坐标和随墙平动坐标中建立运动方程、求正弦稳态响应，并由随动解变换回静止解。两个坐标中的位移满足 $u=v+w$。

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
\boxed{U(x)=W\frac{\cos[q(x-l/2)]}{\cos(ql/2)},\qquad
u(x,t)=W\frac{\cos[q(x-l/2)]}{\cos(ql/2)}\sin\Omega t.}
$$

ここで $\cos(ql/2)\ne0$ とした。$ql=(2n+1)\pi$ では境界条件が両立せず、有界な調和定常解はない。$ql=2n\pi$（$n\ge1$）では上式に任意定数倍の $\sin(qx)$ を加えてもよく、上式は左右対称な特解である。

### (3)

$x=\xi$、$u=v+w$ であり、$\ddot w=-W\Omega^2\sin\Omega t$ だから

$$
\boxed{v_{tt}=c^2v_{\xi\xi}+W\Omega^2\sin\Omega t,\qquad
v(0,t)=v(l,t)=0.}
$$

右辺の強制項は移動座標系の慣性力に由来する。

### (4)

$$
V''+q^2V=-q^2W,\qquad V(0)=V(l)=0.
$$

特解 $-W$ と斉次解を合わせて

$$
\boxed{V(\xi)=W\left\{\frac{\cos[q(\xi-l/2)]}{\cos(ql/2)}-1\right\}.}
$$

共振・非一意性については (2) と同じである。

### (5)

$$
\boxed{u(x,t)=v(x,t)+W\sin\Omega t
=W\frac{\cos[q(x-l/2)]}{\cos(ql/2)}\sin\Omega t,}
$$

となり、(2) と一致する。
