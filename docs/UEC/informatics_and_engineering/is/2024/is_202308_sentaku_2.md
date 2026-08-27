---
sidebar_label: 2023年8月実施 選択問題 確率・オペレーションズリサーチ
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Operations-Research.Linear-Programming.Production-Planning
  - Operations-Research.Linear-Programming.Simplex-Method
---

# 電気通信大学 情報理工学研究科 情報学専攻 2023年8月実施 選択問題 確率・オペレーションズリサーチ

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

この科目では問1を必ず解き、問2と問3のいずれか一方を選ぶ。以下では両方を扱う。

### 問1

$X_1,X_2,X_3,X_4$ は互いに独立で、標準正規分布に従う。

1. $U=X_1+2X_2+3X_3+4X_4+5$ の分散を求めよ。
2. $Y=\sum_{i=1}^4X_i^2$ の分布名を答えよ。
3. $V[Y]$ を求めよ。
4. $Z=Y\sqrt{3^Y}$ とするとき、$E[1/Z]$ を求めよ。
5. $\bar X=\frac14\sum X_i$、$S^2=\frac13\sum(X_i-\bar X)^2$、$W=2\bar X/S$ とするとき、$V[W]$ を求めよ。

### 問2

#### A

$X$ の密度が

$$
f_X(x)=\frac12\sin x\quad(0\le x\le\pi)
$$

である。分布関数、期待値、モーメント母関数を求めよ。

#### B

$X\sim\operatorname{Poisson}(8)$ とし、$Y\mid X=x$ は平均 $x/4$ の指数分布に従う。$V[Y\mid X=2]$ と $\operatorname{Cov}(X,Y)$ を求めよ。

### 問3

製品 $P_1,P_2$ の生産量を $x_1,x_2$ とする。単位生産量当たりの材料 $M_1,M_2,M_3$ の必要量、使用可能量、および利益は次のとおりである。

| | $M_1$ | $M_2$ | $M_3$ | 利益 |
|---|---:|---:|---:|---:|
| $P_1$ | 2 | 3 | 1 | 40 |
| $P_2$ | 5 | 1 | 2 | 30 |
| 使用可能量 | 120 | 75 | 45 | |

線形計画問題を定式化し、スラック変数を導入せよ。シンプレックス法の初期表と最終表を示して最適生産量と利益を求めよ。さらに $P_1$ の利益を $40+\alpha$ としたとき、同じ基底が最適である範囲を求めよ。

### 题目描述

必答部分考查正态样本、卡方分布、$t$ 分布和期望方差；二选一部分分别考查连续分布、条件指数分布，或生产计划线性规划、单纯形法及目标系数灵敏度分析。这里给出两种选答方案的全部答案。

## **Kai**

### 問1

#### 1-1

独立性より

$$
V[U]=1^2+2^2+3^2+4^2=\boxed{30}.
$$

#### 1-2

$$
\boxed{Y\sim\chi^2(4)}
$$

すなわち自由度 $4$ のカイ二乗分布である。

#### 1-3

カイ二乗分布の分散は自由度の $2$ 倍なので

$$
\boxed{V[Y]=8}.
$$

#### 1-4

$\chi^2(4)$ の密度は $f_Y(y)=\frac y4e^{-y/2}$ である。したがって

$$
\begin{aligned}
E\!\left[\frac1Z\right]
&=\frac14\int_0^\infty
e^{-(1+\log3)y/2}\,dy\\
&=\boxed{\frac{1}{2(1+\log3)}}.
\end{aligned}
$$

#### 1-5

$$
W=\frac{\bar X}{S/\sqrt4}\sim t(3).
$$

自由度 $\nu>2$ の $t$ 分布の分散は $\nu/(\nu-2)$ であるから

$$
\boxed{V[W]=3}.
$$

### 問2

#### A：2-1

$$
\boxed{
F_X(x)=
\begin{cases}
0,&x<0,\\[2mm]
\dfrac{1-\cos x}{2},&0\le x\le\pi,\\[2mm]
1,&x>\pi.
\end{cases}}
$$

#### A：2-2

$$
E[X]=\frac12\int_0^\pi x\sin x\,dx
=\boxed{\frac\pi2}.
$$

#### A：2-3

$$
\begin{aligned}
M_X(t)
&=\frac12\int_0^\pi e^{tx}\sin x\,dx\\
&=\boxed{\frac{1+e^{\pi t}}{2(1+t^2)}}.
\end{aligned}
$$

#### B：2-4

指数分布では分散は平均の二乗である。$X=2$ のとき平均は $1/2$ なので

$$
\boxed{V[Y\mid X=2]=\frac14}.
$$

#### B：2-5

$$
E[Y\mid X]=\frac X4
$$

より

$$
\operatorname{Cov}(X,Y)
=\operatorname{Cov}\!\left(X,E[Y\mid X]\right)
=\frac14V[X]
=\boxed{2}.
$$

### 問3

#### 3-1

$$
\begin{array}{ll}
\text{maximize}&z=40x_1+30x_2,\\
\text{subject to}
&2x_1+5x_2\le120,\\
&3x_1+x_2\le75,\\
&x_1+2x_2\le45,\\
&x_1,x_2\ge0.
\end{array}
$$

#### 3-2

$$
\boxed{
\begin{aligned}
2x_1+5x_2+x_3&=120,\\
3x_1+x_2+x_4&=75,\\
x_1+2x_2+x_5&=45,\\
x_1,\ldots,x_5&\ge0.
\end{aligned}}
$$

#### 3-3

$\pi_j=\sum_i c_{B_i}a_{ij}$ とする。初期表は

| 基底 | $c_B$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $x_3$ | 0 | 2 | 5 | 1 | 0 | 0 | 120 |
| $x_4$ | 0 | 3 | 1 | 0 | 1 | 0 | 75 |
| $x_5$ | 0 | 1 | 2 | 0 | 0 | 1 | 45 |
| $\pi_j$ | | 0 | 0 | 0 | 0 | 0 | 0 |

である。ピボット操作後の最終表は

| 基底 | $c_B$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|
| $x_3$ | 0 | 0 | 0 | 1 | $1/5$ | $-13/5$ | 18 |
| $x_1$ | 40 | 1 | 0 | 0 | $2/5$ | $-1/5$ | 21 |
| $x_2$ | 30 | 0 | 1 | 0 | $-1/5$ | $3/5$ | 12 |
| $\pi_j$ | | 40 | 30 | 0 | 10 | 10 | 1200 |

となる。ゆえに

$$
\boxed{x_1^*=21,\qquad x_2^*=12,\qquad z^*=1200\text{ 万円}}.
$$

#### 3-4

$c_1=40+\alpha$ とすると、非基底変数 $x_4,x_5$ の $\pi_j$ は

$$
\boxed{(d)=10+\frac25\alpha,\qquad
(e)=10-\frac15\alpha}.
$$

最適性条件 $\pi_j-c_j\ge0$ より

$$
10+\frac25\alpha\ge0,\qquad
10-\frac15\alpha\ge0.
$$

したがって

$$
\boxed{-25\le\alpha\le50}
$$

すなわち $\boxed{L=-25, U=50}$ である。
