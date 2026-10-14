---
sidebar_label: "2017年度 III-2-ABC（計測統計・統計力学・線形回路）"
tags:
  - Kyoto-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Central-Limit-Theorem
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cauchy-Distribution
  - Physics.Thermodynamics.Entropic-Elasticity
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Damping
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2017年度 問題III-2-ABC

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### III-2A（計測と統計）

データ $x_1,\ldots,x_N$ は同じ分布から独立に得られる。

1. $x_i$ が $[-\sqrt3,\sqrt3]$ の一様分布に従う場合を考える。(a) $N=2$ の標本平均 $\bar x=(x_1+x_2)/2$ の分布を求め、図示せよ。必要なら

   $$
   p(\bar x)=\frac1{12}\int_{-\sqrt3}^{\sqrt3}dx_1\int_{-\sqrt3}^{\sqrt3}dx_2\,
   \delta\left(\bar x-\frac{x_1+x_2}{2}\right)
   $$

   を計算せよ。(b) 大きな $N$ で $\bar x=N^{-1}\sum_i x_i$ が従う分布の平均・分散・種類と、その背景にある定理を述べよ。
2. $x_i$ が平均 $0$、分散 $1$ の正規分布に従う場合を考える。(a) $N=2$ の $\bar x$ の分布を求め、図示せよ。(b) 不偏分散 $s^2=(x_1-x_2)^2/2$ を用いる量

   $$
   t=\frac{\bar x}{s/\sqrt2}=\frac{x_1+x_2}{|x_1-x_2|}
   $$

   の分布を求め、図示せよ。

### III-2B（統計力学）

図のように、長さ $a$、質量 $m$ の要素 $N$ 個をつないだ一次元鎖を考える。各要素は左右どちらかを向き、折れ曲がり角は $0^\circ$ または $180^\circ$ のみである。鎖の両端間の距離を $x$ とする。

![長さaの要素からなる一次元鎖と両端間距離x（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2017-III-2B-fig.png)

1. $x$ が与えられたときのエントロピーを求めよ。
2. 温度 $T$ の熱浴との平衡時に、両端に加わる力 $f$ を $x/(Na)$ の関数として求めよ。$N$ は十分大きく、$\ln N!\simeq N\ln N-N$ を用いてよい。
3. $x/(Na)\ll1$ での力を求め、温度と要素の質量への依存性を述べよ。

### III-2C（線形回路）

図のように、インダクタンス $L$ のコイル、抵抗 $R$、容量 $C$ のコンデンサ、スイッチからなる回路を考える。コンデンサに電荷 $Q_0$ を蓄え、$t=0$ でスイッチを入れる。電流 $I(t)$ は図の矢印の向きを正とする。$R^2-4L/C<0$ とする。

![スイッチ付きRLC回路と電荷・電流の正方向（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2017-III-2C-fig.png)

1. 各素子の電位差の和が零であることから、電荷 $Q(t)$ の線形微分方程式を立てよ。
2. $Q=Ae^{\lambda t}$ として $\lambda$ を求めよ。
3. $Q(0)=Q_0,I(0)=0$ を満たす $Q(t),I(t)$ を求めよ。

#### 题目描述

**III-2A：** $x_1,\ldots,x_N$ 为同分布独立样本。(1) 母分布为 $[-\sqrt3,\sqrt3]$ 上均匀分布，求两样本均值的密度并作图；再说明大样本均值的均值、方差、近似分布及所用定理。(2) 母分布为标准正态分布，求两样本均值的密度，以及 $t=(x_1+x_2)/|x_1-x_2|$ 的密度，并作图；这里 $s^2=(x_1-x_2)^2/2$。

**III-2B：** 如该小题原图所示，一维链由 $N$ 个长度 $a$、质量 $m$ 的链节构成，每节只能向左或向右，折角只能为 $0^\circ$ 或 $180^\circ$。两端距离为 $x$。(1) 求给定 $x$ 的熵；(2) 在温度 $T$ 下求维持伸长所需外力，可用斯特林近似；(3) 求弱伸长极限并说明温度、质量依赖。

**III-2C：** 回路连接、电荷符号及电流正方向见该小题原图。初始电容电荷为 $Q_0$，$t=0$ 合闸。$R^2<4L/C$。(1) 写出 $Q(t)$ 的微分方程；(2) 求指数解的特征根；(3) 用 $Q(0)=Q_0,I(0)=0$ 求完整电荷与电流。

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

![標本平均と標準化統計量の確率密度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2017-III-2-distributions.svg)

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
L\lambda^2+R\lambda+C^{-1}=0,\qquad
\boxed{\lambda=-\frac R{2L}\pm i\Omega,\quad
\Omega=\sqrt{\frac1{LC}-\frac{R^2}{4L^2}}.}
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
