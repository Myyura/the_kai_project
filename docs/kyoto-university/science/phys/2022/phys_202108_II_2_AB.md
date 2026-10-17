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

デルタ関数型の引力ポテンシャルがあるときの1次元シュレディンガー方程式を考える：

$$
H\varphi(x)\equiv\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}-\lambda\delta(x)\right]\varphi(x)=E\varphi(x)\quad(\lambda>0).\tag{A}
$$

ここで、$m$ は粒子の質量、$\hbar$ はプランク定数を $2\pi$ で割ったものである。

(1) 波動関数 $\varphi(x)$ は原点 $x=0$ で連続だが傾きは不連続になる。傾きの「とび」が次で与えられることを示せ：

$$
\lim_{\epsilon\to+0}\left[\varphi'(\epsilon)-\varphi'(-\epsilon)\right]=-\frac{2m\lambda}{\hbar^2}\varphi(0).\tag{B}
$$

**束縛状態（$E<0$）**

(2) 束縛状態のエネルギーを $E\,(<0)$ とするとき、対応する波動関数 $\varphi(x)$ の $x<0$、$x>0$ それぞれの領域での関数形を $\kappa\equiv\sqrt{-2mE/\hbar^2}$ を用いて表せ。なお、波動関数の規格化は行わなくてよい。

(3) 式(B)を用いて $\kappa$ を求め、束縛状態のエネルギーを求めよ。

**散乱状態（$E>0$）**

(4) $x<0$ の領域から入射した粒子の散乱状態を表す波動関数を

$$
\varphi(x)=\begin{cases}e^{ikx}+Ae^{-ikx}&(x<0),\\Be^{ikx}&(x>0)\end{cases}\tag{C}
$$

とするとき、エネルギー $E$ を波数の大きさ $k$ で表せ。

(5) $\varphi(x)$ の $x=0$ における連続性と傾きの「とび」から、$A$ と $B$ を $k$ の関数として求めよ。

(6) 散乱確率 $R=|A|^2$ と透過確率 $T=|B|^2$ を $k$ の実関数として求めよ。

### II-2B（実験）

ある物質から光子が等方的に放射される状況を考える。この光子数を検出器を用いて測定する。物質から放出される光子数は単位時間あたり $p_{\rm all}$ であり、時間によらない未知の定数とする。検出器はある立体角 $S$ に放射された光子のみを検出する。このとき、観測時間 $t$ で $k$ 個の光子が得られる確率は、検出器に入射する光子の単位時間当たりの数 $p=p_{\rm all}S/(4\pi)$ を用いて、ポアソン分布

$$
P(k,t)=e^{-pt}\frac{(pt)^k}{k!}\tag{A}
$$

で得られる。なお放出されてから検出器まで光は減衰しないものとする。以下の小問(1)–(5)に対して、導出も示して答えよ。また、必要なら $e^x=\sum_{k=0}^{\infty}x^k/k!$、$0!=1$ を用いよ。

(1) 測定時間 $t$ での光子数の期待値は $pt$ であることを式(A)を用いて確かめよ。

短い間隔で入射する光子を検出器が正しく検出できない場合を考える。その影響を簡単なモデルを立てて考えよう。具体的には、光子数検出器は光子数の正確な計測はできず、ある時間分解能 $\Delta t$ の間の光子数が0個または1個以上の2通りを区別できるとしよう（図1(a)）。光子数0個の場合は0カウント、1個以上の場合は1カウントという測定結果が得られる。さらに、全観測時間 $T$ に対し $N=T/\Delta t$ 回の独立した観測が行われるとする（図1(b)）。

![II-2B 図1：光子検出器と時間分解能](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2022/202108-II-2B-fig1.png)

(2) $N$ 回の測定結果を合計した全カウント数の期待値 $N_0$ を求めよ。

(3) $T$ が一定の条件で $N_0$ の $\Delta t\to0$ での極限を求めよ。

光子数検出器の上記の特性により、$\Delta t>0$ の場合は $N_0$ は実際に検出器に入射する光子数の期待値 $pT$ よりも少ない。そこで光源からの正しい単位時間あたりの光子放射数 $p$ を求めるために、検出器を光源から離し立体角を $S/2$ にして追加測定を行った。

(4) 検出器を離した時に検出器で全観測時間 $T$ に測定された全カウント数の期待値を $N_1$ とする。$N_0$、$N_1$ を $T$、$p$、$\Delta t$ を用いて求めよ。ただし、$p\Delta t$ は十分小さいものとして、$N_0$、$N_1$ は $\Delta t$ の1次まで評価せよ。

(5) 小問(4)の結果を用いて $p$、$\Delta t$ を $T$、$N_0$、$N_1$ を用いて求めよ。

#### 题目描述

**II-2A（量子力学）**

考虑存在 delta 函数型吸引势时的一维薛定谔方程：

$$
H\varphi(x)\equiv\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}-\lambda\delta(x)\right]\varphi(x)=E\varphi(x)\quad(\lambda>0).\qquad\text{(A)}
$$

其中 $m$ 为粒子质量，$\hbar$ 为普朗克常数除以 $2\pi$。

(1) 波函数 $\varphi(x)$ 在原点 $x=0$ 连续，但斜率不连续。证明斜率的跳跃满足

$$
\lim_{\epsilon\to+0}\left[\varphi'(\epsilon)-\varphi'(-\epsilon)\right]=-\frac{2m\lambda}{\hbar^2}\varphi(0).\qquad\text{(B)}
$$

**束缚态（$E<0$）**

(2) 当束缚态能量为 $E\,(<0)$ 时，用 $\kappa\equiv\sqrt{-2mE/\hbar^2}$ 表示对应波函数 $\varphi(x)$ 在 $x<0$、$x>0$ 各区域的函数形式。无需对波函数归一化。

(3) 利用式(B)求 $\kappa$，并求束缚态能量。

**散射态（$E>0$）**

(4) 从 $x<0$ 区域入射的粒子的散射态波函数为

$$
\varphi(x)=\begin{cases}e^{ikx}+Ae^{-ikx}&(x<0),\\Be^{ikx}&(x>0).
\end{cases}\qquad\text{(C)}
$$

用波数的大小 $k$ 表示能量 $E$。

(5) 由 $\varphi(x)$ 在 $x=0$ 处的连续性与斜率跳跃，求作为 $k$ 的函数的 $A$、$B$。

(6) 求作为 $k$ 的实函数的散射概率 $R=|A|^2$ 和透射概率 $T=|B|^2$。

**II-2B（实验）**

考虑某物质各向同性地发射光子，用探测器测量光子数。物质每单位时间发射的光子数 $p_{\rm all}$ 为不随时间变化的未知常数。探测器只检测向某一立体角 $S$ 内发射的光子。记每单位时间入射到探测器的光子数为 $p=p_{\rm all}S/(4\pi)$，则观测时间 $t$ 内获得 $k$ 个光子的概率由泊松分布给出：

$$
P(k,t)=e^{-pt}\frac{(pt)^k}{k!}.\qquad\text{(A)}
$$

假定光从发射到到达探测器的过程中不衰减。回答以下小问(1)–(5)，并给出推导。必要时可使用 $e^x=\sum_{k=0}^{\infty}x^k/k!$、$0!=1$。

(1) 用式(A)确认测量时间 $t$ 内的光子数期望值为 $pt$。

考虑探测器无法正确检测短时间间隔内入射的光子的情况，建立简单模型讨论其影响。具体而言，光子数探测器无法精确测量光子数，只能区分某时间分辨率 $\Delta t$ 内的光子数为0或至少1这两种情况（图1(a)）。光子数为0时得到0计数，至少1个时得到1计数。对总观测时间 $T$，进行 $N=T/\Delta t$ 次独立观测（图1(b)）。

(2) 求将 $N$ 次测量结果相加得到的总计数的期望值 $N_0$。

(3) 在 $T$ 固定的条件下，求 $\Delta t\to0$ 时 $N_0$ 的极限。

由于探测器的上述特性，当 $\Delta t>0$ 时，$N_0$ 小于实际入射光子数的期望值 $pT$。为求正确的每单位时间光子数 $p$，将探测器移远，使立体角变为 $S/2$，再进行一次测量。

(4) 移远探测器后，在总观测时间 $T$ 内测得的总计数期望值记为 $N_1$。用 $T$、$p$、$\Delta t$ 求 $N_0$、$N_1$。假定 $p\Delta t$ 足够小，计算到 $\Delta t$ 的一阶。

(5) 利用小问(4)的结果，用 $T$、$N_0$、$N_1$ 求 $p$ 与 $\Delta t$。

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
\boxed{\begin{aligned}
A&=-\frac{\gamma}{\gamma+ik}=\frac{i\gamma}{k-i\gamma},\\
B&=\frac{ik}{\gamma+ik}=\frac{k}{k-i\gamma}.
\end{aligned}}
$$

#### (6)

左右で群速度の大きさが同じなので

$$
\boxed{R=\frac{\gamma^2}{k^2+\gamma^2},\qquad T=\frac{k^2}{k^2+\gamma^2},\qquad R+T=1.}
$$

### II-2B

#### (1)

$$
\begin{aligned}
\langle k\rangle&=e^{-pt}\sum_{k=1}^\infty\frac{k(pt)^k}{k!}\\
&=pt\,e^{-pt}\sum_{j=0}^\infty\frac{(pt)^j}{j!}=\boxed{pt}.
\end{aligned}
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
\boxed{\begin{aligned}
N_0&=pT-\frac12p^2T\Delta t+O(\Delta t^2),\\
N_1&=\frac12pT-\frac18p^2T\Delta t+O(\Delta t^2).
\end{aligned}}
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
