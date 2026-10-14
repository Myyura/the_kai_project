---
sidebar_label: "2017年度 III-1（量子力学）"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.Creation-and-Annihilation-Operators
  - Physics.Quantum-Mechanics.Coherent-State-and-Number-Fluctuation
  - Physics.Quantum-Mechanics.Heisenberg-Uncertainty-and-Minimum-Uncertainty-Gaussian
  - Physics.Quantum-Mechanics.Quantum-State-Time-Evolution
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2017年度 問題III-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 $m$ の一次元量子粒子が $V_0(x)=m\omega^2x^2/2$ に束縛されている。$p=-i\hbar\partial_x$ とし、

$$
a=\sqrt{\frac{m\omega}{2\hbar}}x+i\sqrt{\frac1{2\hbar m\omega}}p,\qquad
a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}x-i\sqrt{\frac1{2\hbar m\omega}}p
$$

と定義する。

1. $a|0\rangle=0$ を用いて固有エネルギー $E_n=\hbar\omega(n+1/2)$ を導き、規格化された固有状態 $|n\rangle$ を $|0\rangle$ と $a^\dagger$ から構成せよ。

以下ではポテンシャルが

$$
V(x,t)=\frac{m\omega^2}{2}[x-\eta(t)]^2
$$

と変わる。$t<0$ では $\eta(t)=\eta_0$ で、系はこのポテンシャルの基底状態にある。$t=0$ 以降に $\eta(t)$ を動かす。

2. $\bar x(t)=\langle x\rangle$、$\bar p(t)=\langle p\rangle$ の微分方程式を求めよ。
3. $T>0$ とし、$0<t<T$ で $\eta(t)=\eta_0(1-t/T)$、$t\ge T$ で $\eta(t)=0$ とする。任意の $t>0$ の $\bar x,\bar p$ を求めよ。
4. (3) で $T$ が非常に大きい場合、$t>T$ に (1) の状態 $|n\rangle$ が観測される確率 $P_n$ を求めよ。
5. (3) で $T$ が非常に小さい場合について、同じ確率 $P_n$ を求めよ。
6. $\eta(0)=\eta_0$ を満たす一般の関数 $\eta(t)$ に対し、$\langle(x-\bar x)^2\rangle$ と $\langle(p-\bar p)^2\rangle$ を求め、不確定性関係を述べよ。

#### 题目描述

质量 $m$ 的一维量子粒子处于谐振子势 $m\omega^2x^2/2$ 中，产生、湮灭算符如上。

1. 用 $a|0\rangle=0$ 推导能级，并构造归一化的 $|n\rangle$。

随后势中心变为 $\eta(t)$，但曲率不变。$t<0$ 时中心固定在 $\eta_0$，粒子处于对应的基态。

2. 求位置与动量期望值满足的方程。
3. 势中心在时间 $T>0$ 内从 $\eta_0$ 匀速移至零，此后不动，求任意 $t>0$ 的两期望值。
4. 求绝热极限 $T\to\infty$ 下，移动结束后测得能级 $n$ 的概率。
5. 求突变极限 $T\to0$ 下的同一概率。
6. 对一般 $\eta(t)$（初值 $\eta_0$），求位置、动量的方差及不确定关系。

## **Kai**

### (1)

$[x,p]=i\hbar$ より $[a,a^\dagger]=1$、

$$
H_0=\hbar\omega\left(a^\dagger a+\frac12\right).
$$

したがって $E_0=\hbar\omega/2$。また $[H_0,a^\dagger]=\hbar\omega a^\dagger$、$\langle0|a^n(a^\dagger)^n|0\rangle=n!$ なので

$$
\boxed{|n\rangle=\frac{(a^\dagger)^n}{\sqrt{n!}}|0\rangle,\qquad
E_n=\hbar\omega\left(n+\frac12\right),\quad n=0,1,\ldots.}
$$

### (2)

エーレンフェストの定理から

$$
\boxed{\dot{\bar x}=\frac{\bar p}{m},\qquad
\dot{\bar p}=-m\omega^2[\bar x-\eta(t)].}
$$

初期条件は $\bar x(0)=\eta_0$、$\bar p(0)=0$。

### (3)

$0\le t\le T$ では

$$
\boxed{\bar x(t)=\eta_0\left(1-\frac tT\right)+\frac{\eta_0}{\omega T}\sin\omega t,\qquad
\bar p(t)=\frac{m\eta_0}{T}(\cos\omega t-1).}
$$

$t\ge T$ では $t=T$ での連続性を用いて

$$
\boxed{\bar x(t)=\frac{\eta_0}{\omega T}[\sin\omega t-\sin\omega(t-T)],}
$$

$$
\boxed{\bar p(t)=\frac{m\eta_0}{T}[\cos\omega t-\cos\omega(t-T)].}
$$

### (4)

準位間隔は常に $\hbar\omega>0$ である。$T\to\infty$ では断熱定理により系は瞬間的基底状態を保ち、終状態は位相因子を除いて $|0\rangle$。したがって

$$
\boxed{P_n=\delta_{n0}.}
$$

### (5)

$T\to0$ では状態ベクトルは瞬間的には変化しない。初期の変位した基底状態は、最終ポテンシャルの演算子 $a$ の固有状態であり、

$$
a|\psi(0)\rangle=\alpha_0|\psi(0)\rangle,\qquad
\alpha_0=\sqrt{\frac{m\omega}{2\hbar}}\eta_0.
$$

$|\psi(0)\rangle=\sum_nc_n|n\rangle$ とおけば $c_n=\alpha_0^nc_0/\sqrt{n!}$、規格化より $|c_0|^2=e^{-\alpha_0^2}$。ゆえに

$$
\boxed{P_n=e^{-\Lambda}\frac{\Lambda^n}{n!},\qquad
\Lambda=\frac{m\omega\eta_0^2}{2\hbar}.}
$$

### (6)

中心を差し引いたハイゼンベルク演算子 $\delta x=x-\bar x$、$\delta p=p-\bar p$ は、駆動項によらず

$$
\delta x(t)=\delta x(0)\cos\omega t+\frac{\delta p(0)}{m\omega}\sin\omega t,
$$

$$
\delta p(t)=\delta p(0)\cos\omega t-m\omega\delta x(0)\sin\omega t
$$

を満たす。初期基底状態では $\langle\delta x^2\rangle=\hbar/(2m\omega)$、$\langle\delta p^2\rangle=\hbar m\omega/2$、対称化共分散は零。よって任意の $\eta(t)$ について

$$
\boxed{(\Delta x)^2=\frac\hbar{2m\omega},\qquad
(\Delta p)^2=\frac{\hbar m\omega}{2},\qquad
\Delta x\Delta p=\frac\hbar2.}
$$

状態は位置・運動量を変位させたコヒーレント状態のままで、最小不確定性を保つ。

## **Reference**

- [京都大学公式問題（2017年度、PDF 16–17ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H29.pdf)
