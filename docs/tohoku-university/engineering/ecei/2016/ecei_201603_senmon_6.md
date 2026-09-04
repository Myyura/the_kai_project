---
sidebar_label: 2016年3月実施 専門科目 問題6 物理専門1
tags:
  - Tohoku-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Physics.Quantum-Mechanics.Wavefunction-Matching-at-Potential-Steps
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 専門科目 問題6 物理専門1

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$x$ 軸上のポテンシャル
$$
V(x)=\begin{cases}\infty&(x<0)\\0&(0\le x\le L)\\V_0&(x>L)\end{cases}
$$
の中の質量 $m$ の粒子の量子状態を考える。ここで，$L$ および $V_0$ は正の定数であり，粒子はエネルギー $E$（$0<E<V_0$）の定常状態にある。以下の問に答えよ。ただし，$\hbar=h/(2\pi)$（$h$ はプランク定数），$i$ は虚数単位とする。

(1) $0\le x\le L$ の領域における定常状態の波動関数，すなわち時間に独立なシュレーディンガー方程式の解を $\psi_1(x)$ とする。$\psi_1(x)$ は一般に
$$
\psi_1(x)=Ae^{ikx}+Be^{-ikx}
$$
と書ける。ここで，$A$ および $B$ は複素数の定数，$k$ は正の定数である。$k$ を $m,E,\hbar$ を用いて表せ。

(2) $x=0$ で $\psi_1(x)$ が満たすべき条件を考慮し，$B/A$ を求めよ。

(3) $x>L$ の領域における定常状態の波動関数を $\psi_2(x)$ とする。$\psi_2(x)$ が $x\to\infty$ において $0$ に収束するとき，
$$
\psi_2(x)=Ce^{-\kappa x}
$$
である。ここで，$C$ は複素数の定数，$\kappa$ は正の定数である。$\kappa$ を $m,E,\hbar,V_0$ を用いて表せ。

(4) 問 (2) の結果とともに $x=L$ で $\psi_1(x)$ および $\psi_2(x)$ が満たすべき条件を考慮し，$A$ と $C$ との関係を表す方程式を $2$ つ求めよ。

(5) $0<E<V_0$ を満たす定常状態が少なくとも $1$ つ存在するための $L$ の下限を求めよ。

### 题目描述

质量 $m$ 的粒子处于一维势

$$
V(x)=\begin{cases}\infty,&x<0,\\0,&0\le x\le L,\\V_0,&x>L,\end{cases}\qquad L,V_0>0.
$$

考虑 $0<E<V_0$ 的定态，$\hbar=h/(2\pi)$。

1. 在 $0\le x\le L$，波函数为 $\psi_1(x)=Ae^{ikx}+Be^{-ikx}$，求 $k$。
2. 用 $x=0$ 的边界条件求 $B/A$。
3. 在 $x>L$，满足 $\psi_2(x)\to0\ (x\to\infty)$ 的波函数为 $Ce^{-\kappa x}$，求 $\kappa$。
4. 结合 $x=L$ 的条件和 (2)，推导两个关于 $A,C$ 的关系式。
5. 求至少存在一个 $0<E<V_0$ 定态所需的 $L$ 下界。

## **Kai**

### (1)–(3)

定态薛定谔方程为 $-\hbar^2\psi''/(2m)+V\psi=E\psi$，故

$$
\boxed{k=\frac{\sqrt{2mE}}\hbar,\qquad\kappa=\frac{\sqrt{2m(V_0-E)}}\hbar.}
$$

无限高势壁要求 $\psi_1(0)=0$，即 $A+B=0$，所以 $\boxed{B/A=-1}$。

### (4)

于是 $\psi_1=2iA\sin kx$。在有限势阶跃处，$\psi$ 和 $\psi'$ 连续，故

$$
\boxed{2iA\sin(kL)=Ce^{-\kappa L},\qquad 2ikA\cos(kL)=-\kappa Ce^{-\kappa L}.}
$$

相除得到量子化条件 $\boxed{k\cot(kL)=-\kappa}$。

### (5)

令 $u=kL$、$v=\kappa L$、$\rho=L\sqrt{2mV_0}/\hbar$。条件为

$$
u\cot u=-v,\qquad u^2+v^2=\rho^2,\quad u,v>0.
$$

最低解须满足 $\pi/2<u<\pi$。存在解的充要条件为 $\rho>\pi/2$：在 $u=\pi/2$ 处右侧对应的 $v>0$；到该分支另一端时连续交叉。故

$$
\boxed{L>\frac{\pi\hbar}{2\sqrt{2mV_0}}.}
$$

等号仅给出 $E=V_0,\kappa=0$ 的阈值，波函数不再平方可积，因此不能取等号。
