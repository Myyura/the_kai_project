---
sidebar_label: 2019年3月実施 専門科目 問題6 物理専門
tags:
  - Tohoku-University
  - Mathematics.Differential-Equations.Boundary-Value-Problem
  - Physics.Quantum-Mechanics
---
# 東北大学 工学研究科 電気・情報系 2019年3月実施 専門科目 問題6 物理専門

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$x$ 軸上のポテンシャル $V(x)$ の中の質量 $m$ の粒子の量子状態を考える。ここで、粒子はエネルギー $\varepsilon$ の定常状態にあるものとする。以下の問に答えよ。以下において、$i$ は虚数単位、$a,k,\alpha,\kappa$ は正の実数、$A,B,C,D,F$ は複素数とする。$\delta(x)$ はディラックのデルタ関数であり、$\hbar=\frac h{2\pi}$（$h$ はプランク定数）である。

(1) ポテンシャル

$$
V(x)=-\alpha\delta(x)\tag{6A}
$$

を考える。

(a) $x=0$ において、定常状態の波動関数 $\psi(x)$ は連続であるが、その導関数 $\frac{d\psi}{dx}$ は不連続である。$x=0$ の近傍で時間に依存しないシュレーディンガー方程式を積分することにより、次の関係を導出せよ。

$$
\left.\frac{d\psi}{dx}\right|_{x=+0}-\left.\frac{d\psi}{dx}\right|_{x=-0}=-\frac{2m\alpha}{\hbar^2}\psi(0).\tag{6B}
$$

(b) 一般に、$\varepsilon>0$ のときの定常状態の波動関数 $\psi_1(x)$ は

$$
\psi_1(x)=\begin{cases}Ae^{ikx}+Be^{-ikx}&(x\le0)\\Ce^{ikx}+De^{-ikx}&(x>0)\end{cases}\tag{6C}
$$

と書ける。ここで、粒子が領域 $x<0$ から領域 $x>0$ に透過する場合を考え、$D=0$ とする。$\frac BA$ と $\frac CA$ を $i,k,m,\alpha,\hbar$ を用いて表せ。

(2) ポテンシャル

$$
V(x)=-\alpha[\delta(x+a)+\delta(x-a)]\tag{6D}
$$

を考える。$\varepsilon<0$ のときの定常状態の波動関数 $\psi_2(x)$（束縛解）は

$$
\psi_2(x)=\begin{cases}Ae^{\kappa x}&(x\le-a)\\Ce^{\kappa x}+De^{-\kappa x}&(-a<x<a)\\Fe^{-\kappa x}&(x\ge a)\end{cases}\tag{6E}
$$

と書ける。

(a) $C$ と $D$ の関係を導出せよ。

(b) $2$ つの束縛解が存在するための条件を $a,m,\alpha,\hbar$ を用いて表せ。

### 题目描述

一维定态 Schrödinger 方程描述质量 $m$、能量 $\varepsilon$ 的粒子。$a,k,\alpha,\kappa>0$，$\hbar=h/(2\pi)$。

(1) 势为 $V(x)=-\alpha\delta(x)$。

(a) 波函数在 $0$ 连续。对方程在 $0$ 附近积分，证明

$$
\psi'(0^+)-\psi'(0^-)=-\frac{2m\alpha}{\hbar^2}\psi(0).
$$

(b) 当 $\varepsilon>0$，$k=\sqrt{2m\varepsilon}/\hbar$，设

$$
\psi_1(x)=\begin{cases}Ae^{ikx}+Be^{-ikx},&x\le0,\\Ce^{ikx}+De^{-ikx},&x>0.\end{cases}
$$

粒子从左入射，取 $D=0$，求 $B/A,C/A$。

(2) 势为 $V(x)=-\alpha[\delta(x+a)+\delta(x-a)]$。负能束缚态取

$$
\psi_2(x)=\begin{cases}Ae^{\kappa x},&x\le-a,\\Ce^{\kappa x}+De^{-\kappa x},&-a<x<a,\\Fe^{-\kappa x},&x\ge a,\end{cases}\qquad \kappa=\sqrt{-2m\varepsilon}/\hbar.
$$

(a) 求 $C,D$ 的关系；(b) 求有两个束缚态的条件。

## **Kai**

### (1)

(a) 将 $-\hbar^2\psi''/(2m)-\alpha\delta(x)\psi=\varepsilon\psi$ 在 $[-\eta,\eta]$ 上积分并令 $\eta\to0^+$：

$$
-\frac{\hbar^2}{2m}[\psi'(0^+)-\psi'(0^-)]-\alpha\psi(0)=0,
$$

即得所证。

(b) 记 $g=m\alpha/\hbar^2$。连续性与导数跳跃条件为

$$
A+B=C,\qquad ikC-ik(A-B)=-2gC.
$$

因此

$$
\boxed{\frac BA=-\frac g{g+ik}=\frac{ig}{k-ig},\qquad \frac CA=\frac{ik}{g+ik}=\frac k{k-ig}}.
$$

### (2)

(a) 在 $x=\pm a$ 分别应用连续及跳跃条件，消去 $A,F$，得到

$$
\boxed{(\kappa-g)C=ge^{-2\kappa a}D,\qquad(\kappa-g)D=ge^{-2\kappa a}C}.
$$

非零解要求

$$
\kappa=g(1\pm e^{-2\kappa a}).
$$

正号对应 $C=D$ 的偶态，负号对应 $C=-D$ 的奇态。

(b) 偶态方程右端从 $2g$ 严格下降至 $g$，故总有唯一正根。奇态方程为

$$
\kappa=g(1-e^{-2\kappa a}).
$$

右端严格凹，在原点斜率为 $2ag$；存在非零正根当且仅当 $2ag>1$。故两个束缚态存在的条件为

$$
\boxed{\frac{2am\alpha}{\hbar^2}>1}.
$$

等号时仅出现 $\kappa=0$，对应波函数不可归一化，不能计为束缚态。
