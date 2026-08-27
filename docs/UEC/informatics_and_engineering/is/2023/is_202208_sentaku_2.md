---
sidebar_label: 2022年8月実施 選択問題 確率・オペレーションズリサーチ
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Basics.Markov-and-Chebyshev-Inequalities
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Random-Variable-Transformation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Central-Limit-Theorem
  - Probability-Statistics.Stochastic-Processes.Stopping-Time
  - Operations-Research.Linear-Programming.Simplex-Method
---

# 電気通信大学 情報理工学研究科 情報学専攻 2022年8月実施 選択問題 確率・オペレーションズリサーチ

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

この科目では問1を必ず解き、問2と問3のいずれか一方を選ぶ。以下では両方を扱う。

### 問1

$X$ の密度を

$$
f_X(x)=\left(1-\frac{x}{2}\right)I(0\le x<2)
$$

とする。平均と分散を求めよ。また、$X$ と独立で
$P(Y=1)=P(Y=-1)=1/2$ である $Y$ に対し、$Z=XY$ の密度と分散を求めよ。

### 問2

1. 独立な $X_i\sim\operatorname{Poisson}(\lambda)$ の和
   $S_n=\sum_{i=1}^nX_i$ の確率関数を求め、$\lambda=5,n=20$ のとき
   $P(S_{20}>120)$ を求めよ。また、$S_n$ が初めて整数 $K$ を超える時刻 $N$ の確率関数を求めよ。
2. 正の確率変数 $X$ の平均を $\mu$ とする。$X\ge\mu+\delta$ のとき一回につき $a$ 枚のメダルを返すゲームについて、Markov・Chebyshev 型の評価を行え。

### 問3

次の線形計画問題を Simplex 法で解け。

$$
\begin{array}{ll}
\text{maximize}&5x_1+9x_2+7x_3,\\
\text{subject to}
&x_1+3x_2+2x_3\le10,\\
&3x_1+4x_2+2x_3\le12,\\
&2x_1+x_2+2x_3\le8,\\
&x_1,x_2,x_3\ge0.
\end{array}
$$

### 题目描述

必答部分考查连续分布及随机变量乘积；选答部分分别考查 Poisson 分布、停止时刻与概率不等式，或线性规划的单纯形法。这里给出全部答案。

## **Kai**

### 問1

#### 1-1, 1-2

$$
\begin{aligned}
E[X]
&=\int_0^2x\left(1-\frac{x}{2}\right)dx
=\frac23,\\
E[X^2]
&=\int_0^2x^2\left(1-\frac{x}{2}\right)dx
=\frac23.
\end{aligned}
$$

したがって、

$$
\boxed{E[X]=\frac23},\qquad
\boxed{V[X]=\frac23-\frac49=\frac29}.
$$

#### 1-3

$z>0$ では $Y=1$、$z<0$ では $Y=-1$ の場合を用いれば、

$$
\boxed{
f_Z(z)=
\begin{cases}
\dfrac12-\dfrac{|z|}{4},&|z|<2,\\[2mm]
0,&|z|\ge2.
\end{cases}}
$$

#### 1-4

$E[Y]=0$, $Y^2=1$ より

$$
E[Z]=0,\qquad E[Z^2]=E[X^2]E[Y^2]=\frac23.
$$

ゆえに、

$$
\boxed{V[Z]=\frac23}.
$$

### 問2 A

#### 2-1

Poisson 分布の再生性より $S_n\sim\operatorname{Poisson}(n\lambda)$ である。したがって、

$$
\boxed{
p_n(s)=P(S_n=s)
=e^{-n\lambda}\frac{(n\lambda)^s}{s!}
\quad(s=0,1,\ldots)}.
$$

#### 2-2

$S_{20}\sim\operatorname{Poisson}(100)$ なので、

$$
\boxed{
P(S_{20}>120)
=1-\sum_{s=0}^{120}e^{-100}\frac{100^s}{s!}
\simeq0.02267}.
$$

標準正規近似では

$$
P(S_{20}>120)\simeq1-\Phi(2)=0.0228
$$

となる。

#### 2-3

$N=n$ は $S_{n-1}\le K<S_n$ と同値である。したがって $n\ge1$ に対し、

$$
\begin{aligned}
P(N=n)
&=P(S_{n-1}\le K)-P(S_n\le K)\\
&=\boxed{\sum_{s=0}^{K}\{p_{n-1}(s)-p_n(s)\}}.
\end{aligned}
$$

### 問2 B

#### 2-4

Markov の不等式より、

$$
\boxed{
P(X\ge\mu+\delta)\le\frac{\mu}{\mu+\delta}}.
$$

#### 2-5

$\mu=\delta=2$ では一回の当選確率は $1/2$ 以下である。よって、10 回で返るメダル数の期待値は

$$
\boxed{10a\cdot\frac12=5a\text{ 以下}}.
$$

#### 2-6

Chebyshev の不等式より、

$$
\begin{aligned}
P(X\ge\mu+\delta)
&\le P(|X-\mu|\ge\delta)\\
&\le\boxed{\frac{\sigma^2}{\delta^2}}.
\end{aligned}
$$

#### 2-7

$\mu=\delta=2,\sigma=1$ では当選確率は $1/4$ 以下である。したがって、

$$
\boxed{10a\cdot\frac14=\frac{5a}{2}\text{ 以下}}.
$$

### 問3

#### 3-1

スラック変数 $x_4,x_5,x_6$ を導入する。最初の実行基底解は

$$
\boxed{(x_1,x_2,x_3,x_4,x_5,x_6)=(0,0,0,10,12,8)}.
$$

#### 3-2

0 回目の Simplex 表は次のとおりである。

| 基底 | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $x_4$ | 1 | 3 | 2 | 1 | 0 | 0 | 10 |
| $x_5$ | 3 | 4 | 2 | 0 | 1 | 0 | 12 |
| $x_6$ | 2 | 1 | 2 | 0 | 0 | 1 | 8 |
| $c_j-z_j$ | 5 | 9 | 7 | 0 | 0 | 0 | 0 |

$x_2$ を入れ、最小比 $12/4=3$ を与える $x_5$ を出す。

#### 3-3

1 回目の表は

| 基底 | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $x_4$ | $-5/4$ | 0 | $1/2$ | 1 | $-3/4$ | 0 | 1 |
| $x_2$ | $3/4$ | 1 | $1/2$ | 0 | $1/4$ | 0 | 3 |
| $x_6$ | $5/4$ | 0 | $3/2$ | 0 | $-1/4$ | 1 | 5 |
| $c_j-z_j$ | $-7/4$ | 0 | $5/2$ | 0 | $-9/4$ | 0 | 27 |

である。2 回目では $x_3$ が入り $x_4$ が出る。更新された実行基底解は

$$
\boxed{(x_1,x_2,x_3,x_4,x_5,x_6)=(0,2,2,0,0,2)}.
$$

#### 3-4

2 回目の表は

| 基底 | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $x_3$ | $-5/2$ | 0 | 1 | 2 | $-3/2$ | 0 | 2 |
| $x_2$ | 2 | 1 | 0 | $-1$ | 1 | 0 | 2 |
| $x_6$ | 5 | 0 | 0 | $-3$ | 2 | 1 | 2 |
| $c_j-z_j$ | $9/2$ | 0 | 0 | $-5$ | $3/2$ | 0 | 32 |

である。$x_1$ を入れ、$x_6$ を出すと、3 回目の表は

| 基底 | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $x_3$ | 0 | 0 | 1 | $1/2$ | $-1/2$ | $1/2$ | 3 |
| $x_2$ | 0 | 1 | 0 | $1/5$ | $1/5$ | $-2/5$ | $6/5$ |
| $x_1$ | 1 | 0 | 0 | $-3/5$ | $2/5$ | $1/5$ | $2/5$ |
| $c_j-z_j$ | 0 | 0 | 0 | $-23/10$ | $-3/10$ | $-9/10$ | $169/5$ |

となる。すべての被約費用が非正なので最適であり、

$$
\boxed{
(x_1,x_2,x_3)=\left(\frac25,\frac65,3\right),
\qquad z_{\max}=\frac{169}{5}}.
$$
