---
sidebar_label: 2017年8月実施 専門科目 問題6 物理専門
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Wavefunction-Matching-at-Potential-Steps
  - Mathematics.Differential-Equations.Boundary-Value-Problem
---

# 東北大学 工学研究科 電気・情報系 2017年8月実施 専門科目 問題6 物理専門

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

$x$ 軸上のポテンシャル

$$
V(x)=\begin{cases}-V_0&(x\le0)\\0&(x>0)\end{cases}\tag{6A}
$$

の中の質量 $m$ の粒子の量子状態を考える。ここで、$V_0$ は正の定数であり、粒子はエネルギー $\varepsilon$ の定常状態にある。以下の問に答えよ。ただし、$\hbar=h/(2\pi)$（$h$ はプランク定数）、$i$ は虚数単位、$A,B,C,D$ は複素数とする。

(1) $-V_0<\varepsilon<0$ のときの定常状態の波動関数、すなわち時間に依存しないシュレーディンガー方程式の解を $\psi_1(x)$ とする。$\psi_1(x)$ は一般に

$$
\psi_1(x)=\begin{cases}Ae^{ikx}+Be^{-ikx}&(x\le0)\\Ce^{\kappa x}+De^{-\kappa x}&(x>0)\end{cases}\tag{6B}
$$

と書ける。ただし、$k$ および $\kappa$ は正の実数である。ここで、$x\to+\infty$ で $\psi_1(x)$ が有限であるために、$C=0$ とする。

(a) $k$ および $\kappa$ を $m,\varepsilon,V_0,\hbar$ を用いて表せ。

(b) $x=0$ で $\psi_1(x)$ が満たすべき条件を考慮して、$B/A$ を求めよ。

(2) $\varepsilon>0$ のときの定常状態の波動関数、すなわち時間に依存しないシュレーディンガー方程式の解を $\psi_2(x)$ とする。$\psi_2(x)$ は一般に

$$
\psi_2(x)=\begin{cases}Ae^{ik_1x}+Be^{-ik_1x}&(x\le0)\\Ce^{ik_2x}+De^{-ik_2x}&(x>0)\end{cases}\tag{6C}
$$

と書ける。ただし、$k_1$ および $k_2$ は正の実数である。ここで、粒子が領域 $x\le0$ から領域 $x>0$ に透過する場合を考え、$D=0$ とする。透過確率 $1-|B/A|^2$ を求め、$|C/A|^2$ と比較することによりその物理的意味を論ぜよ。

(3) $B/A=Re^{2i\phi}$ とする。ただし、$R$ および $\phi$ は実数である。問 (1)、問 (2) の結果から、$\varepsilon$ の関数として $R$ および $\tan2\phi$ のグラフを描け。

### 题目描述

质量 $m$ 的粒子位于一维势阶

$$
V(x)=\begin{cases}-V_0,&x\le0,\\0,&x>0,\end{cases}\qquad V_0>0.
$$

$\hbar$ 为 Planck 常量除以 $2\pi$，$\varepsilon$ 表示能量。

1. 当 $-V_0<\varepsilon<0$，定态波函数为
   

$$
\psi_1(x)=\begin{cases}Ae^{ikx}+Be^{-ikx},&x\le0,\\Ce^{\kappa x}+De^{-\kappa x},&x>0,\end{cases}
$$

   其中 $k,\kappa>0$，为使 $x\to+\infty$ 时有限，取 $C=0$。求 $k,\kappa$，并由 $x=0$ 的连接条件求 $B/A$。
2. 当 $\varepsilon>0$，
   

$$
\psi_2(x)=\begin{cases}Ae^{ik_1x}+Be^{-ik_1x},&x\le0,\\Ce^{ik_2x}+De^{-ik_2x},&x>0,\end{cases}
$$

   $k_1,k_2>0$，取从左侧入射、右侧无入射波，即 $D=0$。求透射概率 $1-|B/A|^2$，与 $|C/A|^2$ 比较并解释。
3. 写 $B/A=Re^{2i\phi}$，$R,\phi$ 为实数，取 $R\ge0$。画出 $R$ 及 $\tan2\phi$ 随 $\varepsilon$ 的变化图。

## **Kai**

### (1)

由定态 Schrödinger 方程，

$$
\boxed{k=\frac{\sqrt{2m(\varepsilon+V_0)}}\hbar,\qquad
\kappa=\frac{\sqrt{-2m\varepsilon}}\hbar}.
$$

有限势阶处 $\psi,\psi'$ 连续：

$$
A+B=D,\qquad ik(A-B)=-\kappa D.
$$

消去 $D$ 得

$$
\boxed{\frac BA=\frac{k-i\kappa}{k+i\kappa}},\qquad \left|\frac BA\right|^2=1.
$$

### (2)

$$
k_1=\frac{\sqrt{2m(\varepsilon+V_0)}}\hbar,\qquad k_2=\frac{\sqrt{2m\varepsilon}}\hbar.
$$

由 $A+B=C,k_1(A-B)=k_2C$ 得

$$
\frac BA=\frac{k_1-k_2}{k_1+k_2},\qquad \frac CA=\frac{2k_1}{k_1+k_2}.
$$

所以

$$
\boxed{\mathcal T=1-\left|\frac BA\right|^2=\frac{4k_1k_2}{(k_1+k_2)^2}
=\frac{k_2}{k_1}\left|\frac CA\right|^2}.
$$

平面波的概率流为 $j=(\hbar k/m)|A|^2$，两侧速度不同，故透射概率须以概率流之比计算。

### (3)

$$
\boxed{R(\varepsilon)=\begin{cases}
1,&-V_0<\varepsilon\le0,\\
\dfrac{\sqrt{\varepsilon+V_0}-\sqrt\varepsilon}{\sqrt{\varepsilon+V_0}+\sqrt\varepsilon},&\varepsilon>0,
\end{cases}}
$$

$$
\boxed{\tan2\phi=\begin{cases}
-\dfrac{2\sqrt{-\varepsilon(\varepsilon+V_0)}}{2\varepsilon+V_0},&-V_0<\varepsilon<0,\ \varepsilon\ne-V_0/2,\\
0,&\varepsilon\ge0.
\end{cases}}
$$

$R$ 在负能区恒为 $1$，正能区单调下降至 $0$。$\tan2\phi$ 在 $-V_0/2$ 处有竖直渐近线：左极限 $+\infty$，右极限 $-\infty$，在 $-V_0$ 与 $0$ 处分别趋于 $0^+$ 与 $0^-$。

![反射振幅与相位正切随能量变化](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201708_senmon_6_reflection.svg)
