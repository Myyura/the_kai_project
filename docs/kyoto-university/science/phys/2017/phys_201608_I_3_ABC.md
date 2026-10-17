---
sidebar_label: "2016年8月実施 I-3-ABC（物理数学・統計力学・力学）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Transform-Solution-of-Heat-Equation
  - Physics.Thermodynamics.Canonical-Partition-Function
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
  - Physics.Mechanics.Small-Angle-Pendulum
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年8月実施 問題I-3-ABC

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-3A（物理数学）

$g=g(x,t)$ に関する拡散型偏微分方程式

$$
\frac{\partial g}{\partial t}=\frac{\partial^2g}{\partial x^2}\qquad(-\infty<x<\infty,\ 0\le t)\tag{A}
$$

を、$g(x,t=0)=\delta(x)$ なる条件のもとに解け。必要なら、積分公式

$$
\int_0^\infty\exp(-a\lambda^2)\cos(b\lambda)\,d\lambda
=\frac12\sqrt{\frac\pi a}\exp\left(-\frac{b^2}{4a}\right)\tag{B}
$$

を使ってもよい。

### I-3B（統計力学）

二つの縮退していないエネルギー準位 $0,\Delta$ をもつ独立な粒子 $N$ 個からなる系が、温度 $T$ で熱平衡にある。

(1) この系の分配関数 $Z(T)$ を書き下せ。ただし、ボルツマン定数は $k$ とする。

(2) $Z(T)$ を用いて、この系のヘルムホルツの自由エネルギー $F(T)$ を求めよ。

(3) $F(T)$ を用いて、この系のエントロピー $S(T)$ を求めよ。

(4) $T\to\infty$ での $S$ の値を求めよ。また、その物理的意味について式を含めて簡潔に説明せよ。

(5) エントロピーは $T,F$ と内部エネルギー $U$ だけを使って表現できる。その表式を書き下せ。

(6) $U(T)$ を求めよ。

### I-3C（力学）

半径 $R$ の球面 $x^2+y^2+z^2=R^2$ の中に質量 $m$ の質点が置かれている。ここで鉛直方向上向きに $z$ 座標をとる。質点には鉛直方向下向きに重力（加速度 $g$）が働いており、質点は球面から離れずに滑らかに運動するとする。この時、次の問いに答えよ。

(1) 質点を、球面の南極 $(x,y,z)=(0,0,-R)$ 付近で、$y=0$ を保ちながら微小振動をさせた時の振動の周期 $T$ を求めよ。

(2) 質点が高さ $z=-z_0$（$z_0>0$）の水平面上で円運動する場合の速度 $v_0$ を求めよ。

(3) $(x,y,z)=(R,0,0)$ に置かれた質点に $y$ 方向の速度 $v_1$ を与えたとする。その後、質点は球面上を運動し、その高さ $z$ も時間変動する。高さの最小値 $z_1$ を求めよ。

#### 题目描述

**I-3A（物理数学）**

求解关于 $g=g(x,t)$ 的扩散型偏微分方程

$$
\frac{\partial g}{\partial t}=\frac{\partial^2g}{\partial x^2}\qquad(-\infty<x<\infty,\ 0\le t),\tag{A}
$$

条件为 $g(x,t=0)=\delta(x)$。必要时可以使用积分公式

$$
\int_0^\infty\exp(-a\lambda^2)\cos(b\lambda)\,d\lambda
=\frac12\sqrt{\frac\pi a}\exp\left(-\frac{b^2}{4a}\right).\tag{B}
$$

**I-3B（统计力学）**

由 $N$ 个相互独立、各有两个非简并能级 $0,\Delta$ 的粒子组成的系统，在温度 $T$ 下处于热平衡。

(1) 写出系统的配分函数 $Z(T)$，玻尔兹曼常数记为 $k$。

(2) 使用 $Z(T)$，求系统的亥姆霍兹自由能 $F(T)$。

(3) 使用 $F(T)$，求系统的熵 $S(T)$。

(4) 求 $T\to\infty$ 时 $S$ 的值，并结合公式简要说明其物理意义。

(5) 熵可以只用 $T,F$ 和内能 $U$ 表示。写出这一表达式。

(6) 求 $U(T)$。

**I-3C（力学）**

半径为 $R$ 的球面 $x^2+y^2+z^2=R^2$ 内放置一个质量为 $m$ 的质点。取竖直向上为 $z$ 坐标正方向。质点受到竖直向下的重力（加速度 $g$），并且不离开球面，沿球面光滑运动。回答以下问题。

(1) 使质点在球面南极 $(x,y,z)=(0,0,-R)$ 附近保持 $y=0$ 做微小振动，求振动周期 $T$。

(2) 质点在高度 $z=-z_0$（$z_0>0$）的水平面内做圆周运动，求其速度 $v_0$。

(3) 对位于 $(x,y,z)=(R,0,0)$ 的质点施加 $y$ 方向的初速度 $v_1$。此后质点沿球面运动，其高度 $z$ 也随时间变化。求高度的最小值 $z_1$。

## **Kai**

### I-3A

$\widetilde g(k,t)=\int g(x,t)e^{-ikx}\,dx$ とすると

$$
\partial_t\widetilde g=-k^2\widetilde g,\quad \widetilde g(k,0)=1,
\quad \widetilde g=e^{-k^2t}.
$$

逆変換により

$$
\boxed{g(x,t)=\frac1{\sqrt{4\pi t}}\exp\!\left(-\frac{x^2}{4t}\right),\qquad t>0.}
$$

積分は常に $1$ であり、$t\downarrow0$ でデルタ関数に分布の意味で収束する。

### I-3B

#### (1)

粒子一個の分配関数は $1+e^{-\Delta/(kT)}$ だから

$$
\boxed{Z=(1+e^{-\Delta/(kT)})^N.}
$$

#### (2)

$$
\boxed{F=-kT\ln Z=-NkT\ln(1+e^{-\Delta/(kT)}).}
$$

#### (3)

$$
\boxed{S=-\frac{\partial F}{\partial T}
=Nk\ln(1+e^{-\Delta/(kT)})+\frac{N\Delta/T}{1+e^{\Delta/(kT)}}.}
$$

#### (4)

$$
\boxed{S\longrightarrow Nk\ln2=k\ln(2^N).}
$$

二準位の占有確率がともに $1/2$ に近づき、全 $2^N$ 状態が等確率になる。

#### (5)

$F=U-TS$ より $\boxed{S=(U-F)/T}$。

#### (6)

$$
\boxed{U=F+TS=\frac{N\Delta}{1+e^{\Delta/(kT)}}.}
$$

これは励起準位の占有確率に $N\Delta$ を掛けた結果とも一致する。

### I-3C

#### (1)

鉛直下向きからの角度を $\theta$ とすれば

$$
L=\frac12mR^2\dot\theta^2+mgR\cos\theta,
\qquad \ddot\theta+\frac gR\theta\simeq0.
$$

よって $\boxed{T=2\pi\sqrt{R/g}}$。

#### (2)

軌道半径は $\rho=\sqrt{R^2-z_0^2}$。拘束力の鉛直成分が重力を支え、水平成分が向心力となるので

$$
\frac{mv_0^2/\rho}{mg}=\frac\rho{z_0},\qquad
\boxed{v_0=\sqrt{\frac{g(R^2-z_0^2)}{z_0}}.}
$$

#### (3)

エネルギーと $z$ 軸周りの角運動量が保存し、

$$
\frac12m v^2+mgz=\frac12mv_1^2,\qquad
m\rho v_\varphi=mRv_1.
$$

最低点では $\dot z=0$ なので速度は方位角方向のみであり、$\rho^2=R^2-z_1^2$。したがって

$$
v_1^2-2gz_1=\frac{R^2v_1^2}{R^2-z_1^2},\qquad
z_1(2gz_1^2-v_1^2z_1-2gR^2)=0.
$$

負の折返し点を選び、

$$
\boxed{z_1=\frac{v_1^2-\sqrt{v_1^4+16g^2R^2}}{4g}.}
$$

$v_1=0$ の場合も極限として $z_1=-R$ となる。

## **Reference**

- [京都大学公式問題（2017年度、PDF 6–7ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H29.pdf)
