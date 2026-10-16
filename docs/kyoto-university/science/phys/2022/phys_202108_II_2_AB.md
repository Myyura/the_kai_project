---
sidebar_label: "2021年8月実施 II-2-AB（量子力学・実験）"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.Delta-Function-Potential
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-Distribution
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2021年8月実施 II-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-2A（量子力学）

$\lambda>0$ の一次元引力デルタポテンシャル

$$
\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}-\lambda\delta(x)\right]\phi=E\phi
$$

を考える。

1. $\phi$ は原点で連続であるとして、傾きの跳びが $\phi'(0^+)-\phi'(0^-)=-2m\lambda\phi(0)/\hbar^2$ であることを示せ。
2. $E<0$ の束縛状態について、$\kappa=\sqrt{-2mE/\hbar^2}$ を用いて $x<0,x>0$ の波動関数を書け。規格化は不要。
3. $\kappa$ と束縛エネルギーを求めよ。
4. $E>0$ の左からの入射で、$\phi=e^{ikx}+Ae^{-ikx}$（$x<0$）、$\phi=Be^{ikx}$（$x>0$）とする。$E$ を $k$ で表せ。
5. 接続条件から $A,B$ を求めよ。
6. 反射確率 $R=|A|^2$、透過確率 $T=|B|^2$ を $k$ の実関数で表せ。

### II-2B（実験）

光源は単位時間あたり $p_{\rm all}$ 個の光子を等方的に放出する。減衰はなく、立体角 $S$ の検出器への入射率は $p=p_{\rm all}S/(4\pi)$。時間 $t$ に入射する光子数 $k$ は

$$
P(k,t)=e^{-pt}(pt)^k/k!
$$

に従う。各問は導出も示せ。

1. 期待値が $pt$ となることを示せ。
2. 図1(a) の検出器で、図1(b) のように時間分解能 $\Delta t$ ごとに光子の有無を測定する。全時間 $T$ で $N=T/\Delta t$ 回の独立測定を行うとき、総カウント数の期待値 $N_0$ を求めよ。
3. $T$ 一定で $\Delta t\to0$ の $N_0$ を求めよ。
4. 検出器を遠ざけ、立体角を $S/2$ にした測定の期待値を $N_1$ とする。$p\Delta t\ll1$ として、$N_0,N_1$ を $\Delta t$ の一次まで求めよ。
5. その結果から $p,\Delta t$ を $T,N_0,N_1$ で表せ。

![II-2B 図1：光子検出器と時間分解能](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2022/202108-II-2B-fig1.png)

#### 题目描述

II-2A：一维势 $-\lambda\delta(x)$（$\lambda>0$）。

1. 对原点附近积分，导出波函数导数跳跃条件。
2. 用 $\kappa=\sqrt{-2mE/\hbar^2}$ 写出负能束缚态在左右两侧的波函数。
3. 求衰减常数与束缚能量。
4. 正能散射态为左侧 $e^{ikx}+Ae^{-ikx}$、右侧 $Be^{ikx}$，求能量与 $k$ 的关系。
5. 求反射、透射振幅。
6. 求反射、透射概率。

II-2B：各向同性光源的总发射率为 $p_{\rm all}$，探测器张立体角 $S$、入射率 $p=p_{\rm all}S/(4\pi)$，无传播衰减，计数服从均值 $pt$ 的泊松分布。

1. 从分布求平均光子数。
2. 按上图1(a)(b) 的计数规则和时间分辨率 $\Delta t$，进行 $T/\Delta t$ 次独立测量，求总计数期望。
3. 求固定 $T$ 下 $\Delta t\to0$ 的极限。
4. 将立体角减半进行同样观测，分别求原计数期望 $N_0$ 和新计数期望 $N_1$ 到 $\Delta t$ 一阶。
5. 用 $T,N_0,N_1$ 反解 $p,\Delta t$。

## **Kai**

### II-2A

#### (1)

$[-\eta,\eta]$ で積分し $\eta\downarrow0$ とすると、有限な $E\phi$ の積分は消え

$$
-\frac{\hbar^2}{2m}[\phi'(0^+)-\phi'(0^-)]-\lambda\phi(0)=0.
$$

これを整理すれば題意の跳びを得る。

#### (2)

無限遠での減衰と原点での連続性より $\boxed{\phi(x)=C e^{-\kappa|x|}}$。

#### (3)

$-2\kappa C=-2m\lambda C/\hbar^2$ なので

$$
\boxed{\kappa=\frac{m\lambda}{\hbar^2},\qquad E=-\frac{m\lambda^2}{2\hbar^2}.}
$$

#### (4)

原点外で自由粒子なので $\boxed{E=\hbar^2k^2/(2m)}$（$k>0$）。

#### (5)

$\gamma=m\lambda/\hbar^2>0$ とおく。$1+A=B$、$ikB-ik(1-A)=-2\gamma B$ より

$$
\boxed{A=-\frac{\gamma}{\gamma+ik}=\frac{i\gamma}{k-i\gamma},\qquad
B=\frac{ik}{\gamma+ik}=\frac{k}{k-i\gamma}.}
$$

#### (6)

左右で群速度の大きさが同じなので

$$
\boxed{R=\frac{\gamma^2}{k^2+\gamma^2},\qquad T=\frac{k^2}{k^2+\gamma^2},\qquad R+T=1.}
$$

### II-2B

#### (1)

$$
\langle k\rangle=e^{-pt}\sum_{k=1}^\infty\frac{k(pt)^k}{k!}
=pt\,e^{-pt}\sum_{j=0}^\infty\frac{(pt)^j}{j!}=\boxed{pt}.
$$

#### (2)

一回の検出確率は $1-P(0,\Delta t)=1-e^{-p\Delta t}$。従って

$$
\boxed{N_0=\frac T{\Delta t}(1-e^{-p\Delta t}).}
$$

#### (3)

$1-e^{-p\Delta t}=p\Delta t+O(\Delta t^2)$ より $\boxed{\lim_{\Delta t\to0}N_0=pT}$。

#### (4)

立体角を半分にすると入射率も $p/2$ となる。

$$
\boxed{N_0=pT-\frac12p^2T\Delta t+O(\Delta t^2),\qquad
N_1=\frac12pT-\frac18p^2T\Delta t+O(\Delta t^2).}
$$

#### (5)

一次近似で $4N_1-N_0=pT$、$2N_1-N_0=p^2T\Delta t/4$。従って

$$
\boxed{p\simeq\frac{4N_1-N_0}{T},\qquad
\Delta t\simeq\frac{4T(2N_1-N_0)}{(4N_1-N_0)^2}.}
$$

これらは期待値に対する一次近似の反演式である。$p>0$ の場合を考え、$4N_1>N_0$、$2N_1\ge N_0$、得られた $p\Delta t\ll1$ を満たす領域で用いる。全放射率が必要なら $p_{\rm all}=4\pi p/S$。

## **Reference**

- [京都大学公式問題（2022年度、PDF 15・17–18ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R4.pdf)
