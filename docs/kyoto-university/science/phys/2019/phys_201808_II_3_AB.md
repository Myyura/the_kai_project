---
sidebar_label: "2018年8月実施 II-3-AB（物理数学・実験）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Physics.Electromagnetism.Lorentz-Force-and-Charged-Particle-Motion
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2018年8月実施 問題II-3-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A（物理数学）

1次元区間 $[0,L]$ で定義された温度場 $T(x,t)$ が拡散方程式

$$
\frac{\partial T}{\partial t}=D\frac{\partial^2T}{\partial x^2}\tag{B}
$$

に従うとし、境界条件

$$
\left.\frac{\partial T(x,t)}{\partial x}\right|_{x=0}
=\left.\frac{\partial T(x,t)}{\partial x}\right|_{x=L}=0\tag{C}
$$

を満たすとする。

(1) 1次元区間 $[0,L]$ において有界で連続な任意の関数 $T(x,t)$ に対して、適切な実関数の組 $\phi_n(x)$（$n=0,1,2,\ldots$）によって

$$
T(x,t)=\sum_{n=0}^\infty a_n(t)\phi_n(x)
$$

と表すことができる。$T(x,t)$ が式 (B) と境界条件 (C) を満たす温度場のとき、実関数の組 $\phi_n(x)$（$n=0,1,2,\ldots$）を適切に選ぶことにより、$a_n(t)$ の従う微分方程式が $a_m$（$m\ne n$）を含まないようにすることができる。そのような関数の組 $\phi_n(x)$ の具体例を書け。また、そのときの $a_n(t)$ に対する微分方程式を解いて、$a_n(t)$ を $a_n(0)$ を用いて表せ。

(2) $T_n(t)$ を

$$
T_n(t)=\int_0^Ldx\,\phi_n(x)T(x,t)
$$

で定義する。$a_n(0)\ne0$ の場合、$T_n(t)/a_n(0)$ を求めよ。ただし、結果は積分を含まない表現とせよ。

(3) 時刻 $t=0$ における温度場が

$$
T(x,0)=A\left[1-\left(\frac{2x}L-1\right)+\frac13\left(\frac{2x}L-1\right)^3\right]
$$

で与えられるとする。$A$ は定数である。任意の $t$ において、$\int_0^Ldx\,T(x,t)$ を求めよ。

### II-3B（実験）

荷電粒子の運動量を測定する方法について考える。図1のように、$0\le y\le L$ の領域 D に、磁束密度の大きさが $B$ で時間的に一定かつ空間的に一様な磁場が、$xy$ 平面に垂直に手前から奥への向きに印加されているとする。正の電荷 $e$ を持つ粒子が $y<0$ の領域から $y=0$ の面に垂直に入射し、領域 D で磁場の影響を受けて運動する場合を考える。ここで、粒子は磁場以外の影響は受けないものとする。また、相対論的な効果を考慮する必要はない。

![原題 図1：一様磁場中の粒子軌道と測定点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2019/201808-II-3B-fig1.png)

(1) 領域 D 内で入射粒子の軌跡は円の一部である円弧を描く。円の半径を $\rho$ として、粒子の運動量の大きさを $\rho$ を用いて表せ。

(2) $y=0$ および $y=L$ において、粒子の $x$ 方向の通過位置を測定したとする。$y=0,L$ での測定値をそれぞれ $x_1,x_2$ として、円の半径を求めよ。ただし運動量の大きさが十分大きい場合を考えるため、図1に示す偏向角は十分小さいとしてよい。

(3) 小問 (2) で述べた位置の測定値から得られる粒子の運動量の大きさを $p$ とする。測定値 $x_1,x_2$ の各々には、標準偏差 $\sigma_x$ の独立な測定誤差があるとする。誤差伝播を考慮して、$p$ の相対誤差 $\sigma_p/p$ を求めよ。ただし、$x_1,x_2$ の測定値以外に誤差の起源はなく、得られた相対誤差が十分に小さい場合を考えているものとする。

### 题目描述

**II-3A（物理数学）**

设定义在一维区间 $[0,L]$ 上的温度场 $T(x,t)$ 服从扩散方程

$$
\frac{\partial T}{\partial t}=D\frac{\partial^2T}{\partial x^2},\tag{B}
$$

并满足边界条件

$$
\left.\frac{\partial T(x,t)}{\partial x}\right|_{x=0}
=\left.\frac{\partial T(x,t)}{\partial x}\right|_{x=L}=0.\tag{C}
$$

(1) 对一维区间 $[0,L]$ 上任意有界连续函数 $T(x,t)$，可用适当的一组实函数 $\phi_n(x)$（$n=0,1,2,\ldots$）表示为

$$
T(x,t)=\sum_{n=0}^\infty a_n(t)\phi_n(x).
$$

当 $T(x,t)$ 是满足式 (B) 和边界条件 (C) 的温度场时，适当选择实函数组 $\phi_n(x)$，可使 $a_n(t)$ 满足的微分方程不包含 $a_m$（$m\ne n$）。给出这样一组函数 $\phi_n(x)$ 的具体例子。并求解此时 $a_n(t)$ 满足的微分方程，用 $a_n(0)$ 表示 $a_n(t)$。

(2) 定义

$$
T_n(t)=\int_0^Ldx\,\phi_n(x)T(x,t).
$$

在 $a_n(0)\ne0$ 时求 $T_n(t)/a_n(0)$，结果不得包含积分。

(3) 设 $t=0$ 时的温度场为

$$
T(x,0)=A\left[1-\left(\frac{2x}L-1\right)+\frac13\left(\frac{2x}L-1\right)^3\right],
$$

其中 $A$ 为常数。求任意 $t$ 时的 $\int_0^Ldx\,T(x,t)$。

**II-3B（实验）**

考虑测量带电粒子动量的方法。如图1，在区域 D（$0\le y\le L$）内施加磁通密度大小为 $B$、不随时间变化且空间均匀的磁场，方向垂直于 $xy$ 平面并从前方指向后方。带正电荷 $e$ 的粒子从 $y<0$ 区域垂直入射 $y=0$ 平面，并在区域 D 中受到磁场作用而运动。粒子不受磁场以外的影响，也不必考虑相对论效应。

(1) 入射粒子在区域 D 内沿一段圆弧运动。设圆半径为 $\rho$，用 $\rho$ 表示粒子动量的大小。

(2) 在 $y=0$ 和 $y=L$ 处测量粒子通过位置的 $x$ 坐标，测量值分别为 $x_1,x_2$，求圆的半径。考虑动量充分大的情况，因此可认为图1中的偏转角充分小。

(3) 将由第 (2) 问位置测量值求得的粒子动量大小记为 $p$。测量值 $x_1,x_2$ 各有标准差为 $\sigma_x$ 的独立测量误差。考虑误差传播，求 $p$ 的相对误差 $\sigma_p/p$。除 $x_1,x_2$ 的测量误差外没有其他误差来源，并且只考虑所得相对误差充分小的情况。

## **Kai**

### II-3A

(1) $\phi_0=1$、$\phi_n=\cos(n\pi x/L)$ ($n\geq1$) と選ぶ。境界条件を満たし、$\phi_n''=-(n\pi/L)^2\phi_n$ なので

$$
\boxed{\dot a_n=-D(n\pi/L)^2a_n,\qquad
 a_n(t)=a_n(0)e^{-D(n\pi/L)^2t}.}
$$

(2) 余弦の直交性より

$$
\boxed{\frac{T_n(t)}{a_n(0)}=
\begin{cases}L &(n=0),\\(L/2)e^{-D(n\pi/L)^2t}&(n\geq1).
\end{cases}}
$$

(3) 熱方程式を積分すると $d\int_0^LTdx/dt=D[T_x]_0^L=0$。初期値の奇数べきの項は $x=L/2$ に関して反対称なので積分がゼロとなる。したがって

$$
\boxed{\int_0^LT(x,t)dx=AL.}
$$

### II-3B

(1) ローレンツ力と向心力から $pv/\rho=evB$、したがって $\boxed{p=eB\rho}$。

(2) 正電荷は左へ曲がるので $d=x_1-x_2>0$。円の幾何から $L^2+(\rho-d)^2=\rho^2$、すなわち $\rho=(L^2+d^2)/(2d)$。小偏向 $d\ll L$ では

$$
\boxed{\rho\simeq\frac{L^2}{2(x_1-x_2)},\qquad
p\simeq\frac{eBL^2}{2(x_1-x_2)}.}
$$

(3) 独立な位置誤差から $\sigma_d^2=2\sigma_x^2$。$p\propto d^{-1}$ より

$$
\boxed{\frac{\sigma_p}{p}\simeq\frac{\sqrt2\sigma_x}{|x_1-x_2|}.}
$$

この一次の誤差伝播には $\sigma_x\ll|x_1-x_2|$ を要する。

## **Reference**

- [京都大学公式原題（2019年度、PDF 13–14ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
