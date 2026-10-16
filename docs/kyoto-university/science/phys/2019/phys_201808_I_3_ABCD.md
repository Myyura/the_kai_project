---
sidebar_label: "2018年8月実施 I-3-ABCD（力学・誤差統計・量子力学・物理数学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Rocket-Equation-and-Attitude-Stability
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Physics.Quantum-Mechanics.Identical-Fermions-Spin-and-Spatial-Symmetry
  - Mathematics.Calculus.Gaussian-Integral
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2018年8月実施 問題I-3-ABCD

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### I-3A

鉛直下向きに一定の重力加速度 $g$ が働く。初期質量 $M_0$ のロケットを時刻 $t=0$ に静止状態から鉛直上向きに打ち上げる。燃料はロケットに対して一定の速さ $u$ で後方へ噴出し、時刻 $t$ の質量 $M(t)$ は与えられる。上向きを正として、運動方程式と速度 $v(t)$ を求めよ。

### I-3B

ポアソン分布 $P_\lambda(k)=e^{-\lambda}\lambda^k/k!$、$k=0,1,\ldots$ を考える。

1. 平均と分散を求めよ。
2. 放出粒子の検出数がポアソン分布に従う。標準偏差を平均の $1\%$ 以下にするために必要な粒子数を求めよ。

### I-3C

一次元に束縛された同種のスピン $1/2$ 粒子2個のハミルトニアンが

$$
H=-\frac{\hbar^2}{2m}(\partial_{x_1}^2+\partial_{x_2}^2)+\lambda|x_1-x_2|,\qquad \lambda>0
$$

である。重心系の基底状態と第一励起状態の全スピンの大きさを答え、理由を述べよ。

### I-3D

$\boldsymbol r\in\mathbb R^3$ が密度 $f(\boldsymbol r)=A e^{-\beta|\boldsymbol r|^2}$ に従う。規格化条件 $\int d^3r\,f=1$ から $A$ を決め、$\langle|\boldsymbol r|^2\rangle$ を求めよ。必要なら $\int_0^\infty s^2e^{-as^2}ds=\sqrt\pi/(4a^{3/2})$ を用いてよい。

#### 题目描述

A：火箭由静止竖直发射，初始质量 $M_0$，已知质量函数 $M(t)$，向后喷气相对速率 $u$，重力加速度 $g$。取向上为正，求运动方程与速度。

B：求参数 $\lambda$ 的泊松分布的均值和方差，以及粒子计数的相对标准差不超过 $1\%$ 所需计数。

C：两个相同的自旋 $1/2$ 粒子在一维中由 $\lambda|x_1-x_2|$ 束缚，动能如上式。求质心系基态与第一激发态的总自旋并说明交换对称性。

D：把三维高斯密度 $Ae^{-\beta r^2}$ 归一化，并求 $\langle r^2\rangle$。

## **Kai**

### I-3A

時間 $dt$ に放出された質量 $-dM$ の速度は $v-u$ である。運動量収支を一次まで取ると

$$
M\,dv=-Mg\,dt-u\,dM.
$$

$M(0)=M_0,v(0)=0$ から

$$
\boxed{M\dot v=-Mg-u\dot M,\qquad v(t)=u\log\frac{M_0}{M(t)}-gt.}
$$

### I-3B

(1) 級数の添字をずらせば $\langle k\rangle=\lambda$、$\langle k(k-1)\rangle=\lambda^2$。したがって

$$
\boxed{\langle k\rangle=\lambda,\qquad \operatorname{Var}(k)=\lambda.}
$$

(2) $\sqrt\lambda/\lambda\leq0.01$ より $\boxed{\lambda\geq10^4}$。平均して少なくとも $10^4$ 個の検出が必要である。

### I-3C

$X=(x_1+x_2)/2$、$x=x_1-x_2$ とすると

$$
H=-\frac{\hbar^2}{4m}\partial_X^2-\frac{\hbar^2}{m}\partial_x^2+\lambda|x|.
$$

重心運動を除く一次元の偶対称ポテンシャルでは、基底状態は節を持たない偶関数、第一励起状態は一つの節を持つ奇関数である。同種フェルミ粒子の全状態は交換反対称なので、基底状態のスピンは反対称な一重項、第一励起状態は対称な三重項となる。

$$
\boxed{S_{\mathrm{ground}}=0,\qquad S_{\mathrm{first}}=1.}
$$

角運動量の大きさとしては、それぞれ $0,\sqrt2\hbar$ である。

### I-3D

規格化可能であるために $\beta>0$ を要する。三つのガウス積分から

$$
1=A\left(\frac\pi\beta\right)^{3/2},\qquad
\langle r^2\rangle=-\partial_\beta\log\left(\frac\pi\beta\right)^{3/2}.
$$

よって

$$
\boxed{A=(\beta/\pi)^{3/2},\qquad\langle r^2\rangle=3/(2\beta).}
$$

## **Reference**

- [京都大学公式原題（2019年度、PDF 6–7ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
