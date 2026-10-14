---
sidebar_label: "2017年度 I-3-ABC（物理数学・統計力学・力学）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Transform-Solution-of-Heat-Equation
  - Physics.Thermodynamics.Canonical-Partition-Function
  - Physics.Mechanics.Angular-Momentum-Conservation-and-Areal-Velocity
  - Physics.Mechanics.Small-Angle-Pendulum
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2017年度 問題I-3-ABC

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-3A（物理数学）

拡散方程式

$$
\frac{\partial g}{\partial t}=\frac{\partial^2g}{\partial x^2},\qquad -\infty<x<\infty,\quad t>0
$$

を、$g(x,0)=\delta(x)$ の条件で解け。必要なら

$$
\int_0^\infty e^{-ax^2}\cos(bx)\,dx=\frac12\sqrt{\frac\pi a}\,e^{-b^2/(4a)},\qquad a>0
$$

を用いてよい。

### I-3B（統計力学）

非縮退のエネルギー準位 $0,\Delta$ を持つ独立な粒子 $N$ 個が、温度 $T$ で熱平衡にある。ボルツマン定数を $k$ とする。

1. 分配関数 $Z(T)$ を書け。
2. $Z(T)$ からヘルムホルツ自由エネルギー $F(T)$ を求めよ。
3. $F(T)$ からエントロピー $S(T)$ を求めよ。
4. $T\to\infty$ での $S$ とその物理的意味を、式を含めて簡潔に説明せよ。
5. $S$ を $T,F$、内部エネルギー $U$ だけで表せ。
6. $U(T)$ を求めよ。

### I-3C（力学）

質量 $m$ の質点が球面 $x^2+y^2+z^2=R^2$ 上に拘束され、球面を離れず滑らかに運動する。$z$ 軸を鉛直上向きとし、重力加速度は $-g\mathbf e_z$ とする。

1. 南極 $(0,0,-R)$ 付近で $y=0$ を保つ微小振動の周期を求めよ。
2. 高さ $z=-z_0$（$0<z_0<R$）の水平面で円運動する速さ $v_0$ を求めよ。
3. $(R,0,0)$ で $y$ 方向の初速度 $v_1$ を与えたとき、その後の高さの最小値 $z_1$ を求めよ。

#### 题目描述

**I-3A：** 在全实轴上解扩散方程 $g_t=g_{xx}$，初值为 $g(x,0)=\delta(x)$。可使用题给高斯余弦积分。

**I-3B：** $N$ 个独立粒子各有两个非简并能级 $0,\Delta$，温度为 $T$，玻尔兹曼常数为 $k$。依次求：(1) 分配函数；(2) 自由能；(3) 熵；(4) 高温熵极限及物理含义；(5) 用 $T,F,U$ 表示熵；(6) 内能。

**I-3C：** 质量 $m$ 的质点被约束在半径 $R$ 的球面上光滑运动且不脱离球面，$z$ 轴向上，重力向下。(1) 求保持 $y=0$、在南极附近微振动的周期；(2) 求在 $z=-z_0$（$0<z_0<R$）水平面作圆周运动的速率；(3) 从 $(R,0,0)$ 沿 $y$ 方向以速度 $v_1$ 出发，求最低高度 $z_1$。

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
