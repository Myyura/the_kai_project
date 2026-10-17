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

### I-3A（力学）

一様な重力加速度 $g$ が鉛直下向きにはたらいている環境下で、初期質量 $M_0$ のロケットを初速0で鉛直上向きに打ち上げる。燃料は、ロケットに対して一定の速さ $u$ で後方に噴出される。ロケットの質量は燃料の噴出にともない減少する。打ち上げ時刻を $t=0$ とし、時刻 $t$ でのロケットの質量が $M(t)$ と与えられているとする。ロケットの運動方程式を導出し、ロケットの速度 $v(t)$ を求めよ。ただし、鉛直上向きを正とせよ。

### I-3B（誤差統計）

確率変数 $k$ の確率分布が、$P_\lambda(k)=e^{-\lambda}\lambda^k/k!$（ただし、$k=0,1,2,\ldots$）に従うとき、これをパラメータ $\lambda$ のポアソン分布と言う。

(1) パラメータ $\lambda$ のポアソン分布の平均と分散を求めよ。

(2) ある物体から放出される粒子を検出する測定を考える。検出される粒子の数はポアソン分布に従うとする。検出される粒子の数の標準偏差が平均値の1%以下になるようにしたい。どれだけの粒子数を検出する必要があるか。

### I-3C（量子力学）

ハミルトニアンが

$$
H=-\frac{\hbar^2}{2m}\left(\frac{\partial^2}{\partial x_1^2}+\frac{\partial^2}{\partial x_2^2}\right)+\lambda|x_1-x_2|
$$

で与えられる、1次元方向に束縛されたスピン $1/2$ の2つの同種粒子からなる量子力学系を考える。ここで、$x_1,x_2\in\mathbb R$ は2つの粒子の位置座標、$m$ は粒子の質量、$\hbar$ はプランク定数を $2\pi$ で割ったもの、$\lambda$ は正の定数である。重心系での基底状態と第一励起状態における全スピンの大きさをそれぞれ答え、その理由を簡潔に述べよ。

### I-3D（物理数学）

ベクトル量 $\vec r=(x,y,z)$ が、ガウス分布 $f(\vec r)=A\exp(-\beta|\vec r|^2)$ に従い分布しているとする。$f(\vec r)$ が規格化条件

$$
\int d^3\vec r\,f(\vec r)=1
$$

を満たすように係数 $A$ を決定せよ。ここで、積分公式

$$
\int_0^\infty s^2e^{-as^2}\,ds=\frac{\sqrt\pi}{4a^{3/2}}
$$

を用いてよい。また、$|\vec r|$ の二乗平均 $\langle|\vec r|^2\rangle$ を求めよ。

#### 题目描述

**I-3A（力学）**

在均匀重力加速度 $g$ 竖直向下作用的环境中，将初始质量为 $M_0$ 的火箭以初速度0竖直向上发射。燃料相对于火箭以恒定速率 $u$ 向后喷出，火箭的质量随燃料喷出而减少。发射时刻为 $t=0$，已知时刻 $t$ 的火箭质量为 $M(t)$。导出火箭的运动方程，并求火箭速度 $v(t)$。以竖直向上为正方向。

**I-3B（误差统计）**

若随机变量 $k$ 的概率分布满足 $P_\lambda(k)=e^{-\lambda}\lambda^k/k!$，其中 $k=0,1,2,\ldots$，则称其服从参数为 $\lambda$ 的泊松分布。

(1) 求参数为 $\lambda$ 的泊松分布的均值和方差。

(2) 考虑探测某物体发射的粒子的测量，设探测到的粒子数服从泊松分布。希望探测粒子数的标准差不超过均值的1%，需要探测多少个粒子？

**I-3C（量子力学）**

考虑由两个束缚在一维方向、具有自旋 $1/2$ 的同种粒子组成的量子系统，哈密顿量为

$$
H=-\frac{\hbar^2}{2m}\left(\frac{\partial^2}{\partial x_1^2}+\frac{\partial^2}{\partial x_2^2}\right)+\lambda|x_1-x_2|.
$$

其中 $x_1,x_2\in\mathbb R$ 是两粒子的位置坐标，$m$ 是粒子质量，$\hbar$ 为普朗克常数除以 $2\pi$，$\lambda$ 为正常数。分别给出质心系中基态和第一激发态的总自旋大小，并简要说明理由。

**I-3D（物理数学）**

设矢量 $\vec r=(x,y,z)$ 服从高斯分布 $f(\vec r)=A\exp(-\beta|\vec r|^2)$。确定系数 $A$，使 $f(\vec r)$ 满足归一化条件

$$
\int d^3\vec r\,f(\vec r)=1.
$$

可以使用积分公式

$$
\int_0^\infty s^2e^{-as^2}\,ds=\frac{\sqrt\pi}{4a^{3/2}}.
$$

并求 $|\vec r|$ 的均方值 $\langle|\vec r|^2\rangle$。

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
