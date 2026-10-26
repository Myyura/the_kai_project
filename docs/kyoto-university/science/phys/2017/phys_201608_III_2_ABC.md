---
sidebar_label: "2016年8月実施 III-2-ABC（計測統計・統計力学・線形回路）"
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Central-Limit-Theorem
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cauchy-Distribution
  - Physics.Thermodynamics.Entropic-Elasticity
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Damping
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年8月実施 問題III-2-ABC

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### III-2A（計測と統計）

実数データ $\{x_1,x_2,\ldots,x_N\}$ の各々が、同一の分布から独立に取り出されたとして以下の問いに答えよ。

(1) データ $x_i$ が区間 $[-\sqrt3,\sqrt3]$ の一様分布に従う場合、

(a) $N=2$ のサンプル平均 $\bar x\equiv(x_1+x_2)/2$ の従う分布を求め、図示せよ。（ヒント）次式を計算すればよい。

$$
p(\bar x)=\frac1{12}\int_{-\sqrt3}^{\sqrt3}dx_1\int_{-\sqrt3}^{\sqrt3}dx_2\,
\delta\left(\bar x-\frac{x_1+x_2}{2}\right)
$$

(b) $N$ が大きい極限で、サンプル平均 $\bar x\equiv(x_1+x_2+\cdots+x_N)/N$ の従う分布関数は、平均 $\boxed{\mathrm A}$、分散 $\boxed{\mathrm B}$ の $\boxed{\mathrm C}$ 分布である。これら A、B、C を記せ。また、解答の背景にある定理は何かを述べよ。

(2) データ $x_i$ が平均0、分散1の正規分布に従う場合、

(a) $N=2$ のサンプル平均 $\bar x\equiv(x_1+x_2)/2$ の従う分布を求め、図示せよ。

(b) $N=2$ のサンプル平均を不偏分散 $s^2=(x_1-x_2)^2/2$ の平方根を使って定義される量

$$
t\equiv\frac{\bar x}{s/\sqrt2}=\frac{x_1+x_2}{|x_1-x_2|}
$$

の従う分布を求め、図示せよ。

### III-2B（統計力学）

図のように、$N$ 個の要素からなる鎖が一次元上に置かれている。要素の長さは $a$ で、折れ曲がりの角度は $0^\circ$ または $180^\circ$ であるとする。また、要素の質量は $m$ とする。

![長さaの要素からなる一次元鎖と両端間距離x（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2017/201608-III-2B-fig.png)

(1) 鎖の両端が置かれた位置の間の距離 $x$ が与えられたときの、系のエントロピーを求めよ。

(2) この鎖が温度 $T$ の熱浴に接して平衡状態にあるとき、両端に加わる力 $f$ を $x/(Na)$ の関数として求めよ。ただし、$N$ が大きいとき、$\log N!\simeq N\log N-N$ を使ってよい。

(3) $|x/(Na)|$ が十分小さいときの力 $f$ を求めよ。この力は温度、要素の質量にどう依存するかを述べよ。

### III-2C（線形回路）

図のように、インダクタンス $L$ のコイル、抵抗 $R$、容量 $C$ のコンデンサ、スイッチからなる回路がある。コンデンサに電荷 $Q_0$ が帯電した状態で、$t=0$ にスイッチを入れる。以下では、$R^2-4L/C<0$ の場合を考える。

![スイッチ付きRLC回路と電荷・電流の正方向（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2017/201608-III-2C-fig.png)

(1) コイル、抵抗、コンデンサの電位差の和が0になることを用いて、コンデンサに蓄えられる電荷 $Q(t)$ に対する微分方程式を立てよ。

(2) 問 (1) で立てた方程式に、$Q(t)=Ae^{\lambda t}$ を代入し、$\lambda$ を求めよ。ただし、$A$ は定数とする。

(3) コンデンサに蓄えられる電荷 $Q(t)$、および回路に流れる電流 $I(t)$ を求めよ。ただし、$Q(t=0)=Q_0$、$I(t=0)=0$、$I(t)$ は図の矢印の向きを正とする。

### 题目描述

**III-2A（测量与统计）**

设实数数据 $\{x_1,x_2,\ldots,x_N\}$ 中的每一个都是从同一分布中独立抽取的，回答以下问题。

(1) 当数据 $x_i$ 服从区间 $[-\sqrt3,\sqrt3]$ 上的均匀分布时：

(a) 求 $N=2$ 的样本均值 $\bar x\equiv(x_1+x_2)/2$ 所服从的分布，并作图。提示：计算下式即可。

$$
p(\bar x)=\frac1{12}\int_{-\sqrt3}^{\sqrt3}dx_1\int_{-\sqrt3}^{\sqrt3}dx_2\,
\delta\left(\bar x-\frac{x_1+x_2}{2}\right)
$$

(b) 在 $N$ 很大的极限下，样本均值 $\bar x\equiv(x_1+x_2+\cdots+x_N)/N$ 服从均值为 $\boxed{\mathrm A}$、方差为 $\boxed{\mathrm B}$ 的 $\boxed{\mathrm C}$ 分布。填写 A、B、C，并说明答案所依据的定理。

(2) 当数据 $x_i$ 服从均值为0、方差为1的正态分布时：

(a) 求 $N=2$ 的样本均值 $\bar x\equiv(x_1+x_2)/2$ 所服从的分布，并作图。

(b) 使用无偏方差 $s^2=(x_1-x_2)^2/2$ 的平方根，将 $N=2$ 的样本均值标准化，定义

$$
t\equiv\frac{\bar x}{s/\sqrt2}=\frac{x_1+x_2}{|x_1-x_2|}.
$$

求该量所服从的分布，并作图。

**III-2B（统计力学）**

如上方原图，一条由 $N$ 个单元组成的链置于一维空间中。每个单元长为 $a$，弯折角只能为 $0^\circ$ 或 $180^\circ$，单元质量为 $m$。

(1) 给定链的两端所在位置之间的距离 $x$，求系统的熵。

(2) 该链与温度为 $T$ 的热浴接触并处于平衡时，将两端所受的力 $f$ 表示为 $x/(Na)$ 的函数。可以使用 $N$ 很大时的近似 $\log N!\simeq N\log N-N$。

(3) 求 $|x/(Na)|$ 充分小时的力 $f$，说明它如何依赖于温度和单元质量。

**III-2C（线性电路）**

如上方原图，电路由电感为 $L$ 的线圈、电阻 $R$、电容为 $C$ 的电容器和开关组成。电容器带有电荷 $Q_0$，在 $t=0$ 时闭合开关。以下考虑 $R^2-4L/C<0$ 的情况。

(1) 利用线圈、电阻、电容器的电势差之和为0，建立电容器所储存电荷 $Q(t)$ 的微分方程。

(2) 将 $Q(t)=Ae^{\lambda t}$ 代入第 (1) 问的方程，求 $\lambda$，其中 $A$ 为常数。

(3) 求电容器所储存的电荷 $Q(t)$ 和电路中的电流 $I(t)$。初始条件为 $Q(t=0)=Q_0$、$I(t=0)=0$，$I(t)$ 以图中箭头方向为正。

## **Kai**

### III-2A

#### (1)(a)

$a=\sqrt3$ とおく。二つの一様分布の和は三角分布となり、変数変換 $\bar x=(x_1+x_2)/2$ のヤコビアンを含めると

$$
\boxed{p(\bar x)=\begin{cases}\dfrac{a-|\bar x|}{a^2}&|\bar x|\le a,\\0&|\bar x|>a.\end{cases}}
$$

頂点は $(0,1/\sqrt3)$、両端は $\bar x=\pm\sqrt3$ である。

#### (1)(b)

元の分布の平均は $0$、分散は $a^2/3=1$。独立性と中心極限定理から

$$
\boxed{\mathbb E[\bar x]=0,\qquad \operatorname{Var}(\bar x)=\frac1N,\qquad
\sqrt N\,\bar x\ \xrightarrow{d}\ \mathcal N(0,1).}
$$

したがって大きい有限 $N$ での近似分布は $\mathcal N(0,1/N)$ である。

#### (2)(a)

正規変数の独立な和も正規分布なので $\bar x\sim\mathcal N(0,1/2)$。よって

$$
\boxed{p(\bar x)=\frac1{\sqrt\pi}e^{-\bar x^2}.}
$$

#### (2)(b)

$U=(x_1+x_2)/\sqrt2$、$V=(x_1-x_2)/\sqrt2$ は独立な標準正規変数で、$t=U/|V|$。したがって

$$
q(t)=\int_0^\infty\frac1\pi v\exp\!\left[-\frac{1+t^2}{2}v^2\right]dv
=\boxed{\frac1{\pi(1+t^2)}}.
$$

これは自由度 $1$ の $t$ 分布、すなわち標準コーシー分布である。

![標本平均と標準化統計量の確率密度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2017/201608-III-2-distributions.svg)

### III-2B

#### (1)

右向き・左向きの要素数を $N_+,N_-$ とすると

$$
N_++N_-=N,\qquad N_+-N_-=\frac xa,\qquad
N_\pm=\frac12\left(N\pm\frac xa\right).
$$

$x$ はこれらが非負整数となる離散値を取る。配置数 $W=N!/(N_+!N_-!)$ から

$$
\boxed{S(x)=k_B\ln\frac{N!}{[\frac12(N+x/a)]!\,[\frac12(N-x/a)]!}.}
$$

#### (2)

$u=x/(Na)$ とし、スターリング近似で

$$
S=-Nk_B\left[\frac{1+u}{2}\ln\frac{1+u}{2}+\frac{1-u}{2}\ln\frac{1-u}{2}\right].
$$

内部エネルギーは配置によらず、張力は $f=(\partial F/\partial x)_T=-T(\partial S/\partial x)$ だから

$$
\boxed{f=\frac{k_BT}{2a}\ln\frac{1+u}{1-u},\qquad |u|<1.}
$$

鎖自体の復元力はこの外力と逆向きである。

#### (3)

$\ln[(1+u)/(1-u)]=2u+O(u^3)$ より

$$
\boxed{f\simeq\frac{k_BT}{Na^2}x.}
$$

固定した伸びでは温度に比例し、要素の質量 $m$ には依存しない。

### III-2C

#### (1)

$I=-\dot Q$、$L\dot I+RI=Q/C$ より

$$
\boxed{L\ddot Q+R\dot Q+\frac QC=0.}
$$

#### (2)

$$
\begin{gathered}
L\lambda^2+R\lambda+C^{-1}=0,\\
\boxed{\lambda=-\frac R{2L}\pm i\Omega,\quad
\Omega=\sqrt{\frac1{LC}-\frac{R^2}{4L^2}}.}
\end{gathered}
$$

#### (3)

$\gamma=R/(2L)$ とおけば初期条件から

$$
\boxed{Q(t)=Q_0e^{-\gamma t}\left(\cos\Omega t+\frac\gamma\Omega\sin\Omega t\right),}
$$

$$
\boxed{I(t)=-\dot Q(t)=\frac{Q_0}{LC\Omega}e^{-\gamma t}\sin\Omega t.}
$$

## **Reference**

- [京都大学公式問題（2017年度、PDF 18–19ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H29.pdf)
