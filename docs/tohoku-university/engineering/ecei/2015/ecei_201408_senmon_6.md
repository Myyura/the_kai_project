---
sidebar_label: 2014年8月実施 専門科目 問題6 物理専門1
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Wavefunction-Matching-at-Potential-Steps
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 専門科目 問題6 物理専門1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

一次元ポテンシャル井戸

$$
V(x)=\begin{cases}0,&x<0,\\-V_0,&0\le x\le a,\\0,&x>a\end{cases}\tag{6A}
$$

を考える（Fig. 6(a)）。質量 $m$，エネルギー $E$（$>0$）の粒子が $x<0$ の領域からこの井戸に入射する。以下の問に答えよ。粒子の波動関数を $\varphi(x)$ とせよ。必要に応じて $\hbar=h/(2\pi)$ を用いよ。ここに $h$ はプランク定数である。

(1) 領域 $x<0$ における，時間に依存しないシュレーディンガー方程式を書け。

(2) 領域 $0\le x\le a$ における，時間に依存しないシュレーディンガー方程式を書け。

(3) 領域 $x>a$ における，時間に依存しないシュレーディンガー方程式を書け。

(4) 領域 $x<0,0\le x\le a,x>a$ における $\varphi(x)$ をそれぞれ

$$
\varphi(x)=\begin{cases}Ae^{ikx}+Be^{-ikx},&x<0,\\De^{ik'x}+Fe^{-ik'x},&0\le x\le a,\\Ce^{ikx},&x>a\end{cases}\tag{6B}
$$

とおく。$k$ と $k'$ を求めよ。

(5) 式(6B)に与えられる $\varphi(x)$ の表式を用い，$x=0$ および $x=a$ における $\varphi(x)$ およびその空間微分 $\varphi'(x)$ の境界条件を全て求めよ。

(6) 問(5)で得られた境界条件から，入射粒子が井戸の上を通り抜ける透過確率 $T$ は

$$
T=\left|\frac CA\right|^2=\left[1+\frac{V_0^2\sin^2k'a}{4E(E+V_0)}\right]^{-1}\tag{6C}
$$

と与えられる。$T$ はエネルギー $E$ に対して Fig. 6(b)に示されるような振動的な振舞いを見せる。$T$ が極大となる一群の $E$ の値を求め，この結果の物理的意味を論ぜよ。

### 题目描述

一维方势阱为

$$
V(x)=\begin{cases}0,&x<0,\\-V_0,&0\le x\le a,\\0,&x>a,\end{cases}\qquad V_0>0.
$$

质量 $m$、能量 $E>0$ 的粒子从左侧入射，$\hbar=h/(2\pi)$。

1. 写出 $x<0$ 区域的定态 Schrödinger 方程。
2. 写出 $0\le x\le a$ 区域的方程。
3. 写出 $x>a$ 区域的方程。
4. 波函数写为

$$
\varphi(x)=\begin{cases}Ae^{ikx}+Be^{-ikx},&x<0,\\De^{ik'x}+Fe^{-ik'x},&0\le x\le a,\\Ce^{ikx},&x>a,\end{cases}
$$

求 $k,k'$。
5. 写出 $x=0,a$ 处波函数和导数的全部边界条件。
6. 给定透射率

$$
T=\left|\frac CA\right|^2=\left[1+\frac{V_0^2\sin^2(k'a)}{4E(E+V_0)}\right]^{-1},
$$

求 $T$ 达到最大值时的能量序列，并解释其意义。

## **Kai**

### (1)—(4)

定态方程为 $-\hbar^2\varphi''/(2m)+V\varphi=E\varphi$，因此

$$
\begin{cases}\varphi''+\dfrac{2mE}{\hbar^2}\varphi=0,&x<0\text{ 或 }x>a,\\[2mm]
\varphi''+\dfrac{2m(E+V_0)}{\hbar^2}\varphi=0,&0<x<a.
\end{cases}
$$

故

$$
\boxed{k=\frac{\sqrt{2mE}}\hbar,\qquad k'=\frac{\sqrt{2m(E+V_0)}}\hbar}.
$$

### (5)

有限势能跳变处，$\varphi,\varphi'$ 连续：

$$
\boxed{\begin{aligned}
A+B&=D+F,\\k(A-B)&=k'(D-F),\\
De^{ik'a}+Fe^{-ik'a}&=Ce^{ika},\\
k'(De^{ik'a}-Fe^{-ik'a})&=kCe^{ika}.
\end{aligned}}
$$

### (6)

$T\le1$，当 $k'a=n\pi$ 时取到 $1$，故

$$
\boxed{E_n=\frac{n^2\pi^2\hbar^2}{2ma^2}-V_0>0,\qquad n\in\mathbb N}.
$$

此时阱宽为阱内波长的整数个半波长。两界面间多次反射发生共振，使总反射振幅抵消，粒子完全透射。
