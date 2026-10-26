---
sidebar_label: 2025年8月実施 選択問題 確率・オペレーションズリサーチ
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Central-Limit-Theorem
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Operations-Research.Linear-Programming.Production-Planning
---
# 電気通信大学 情報理工学研究科 情報学専攻 2025年8月実施 選択問題 確率・オペレーションズリサーチ

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

この科目（確率・オペレーションズリサーチ）を受験する場合には、問 1 は必ず解答し、問 2 と問 3 はいずれか一方のみを選択して解答すること。

**問 1** 確率変数 $X_1,X_2,\ldots$ は互いに独立に、確率 0.5 で 1 をとり、確率 0.5 で $-1$ をとる。また、1 以上の自然数 $n$ に対して、$Y_n=\sum_{i=1}^nX_i$ と定める。このとき以下の問いに答えよ。

**問 1-1：** $X_1$ の期待値と標準偏差を求めよ。

**問 1-2：** $Y_n$ の期待値と標準偏差を求めよ。

**問 1-3：** $Y_{10000}>300$ となる確率を、中心極限定理を用いて近似的に求めよ。必要に応じて標準正規分布表を用いてもよい。

**問 1-4：** $Z_1=X_1,Z_2=\frac12Z_1+aX_2$ と定める。このとき、$Z_2$ と $Z_1-Z_2$ の相関係数が 0 になる $a$ の値を求めよ。ただし、$a>0$ とする。

**問 1-5：** 問 1-4 の相関係数が 0 になる場合において、$Z_2$ と $Z_1-Z_2$ は独立であるか、理由とともに答えよ。

Keywords：確率変数 random variable、互いに独立 mutually independent、確率 probability、自然数 natural number、期待値 expected value、標準偏差 standard deviation、中心極限定理 central limit theorem、近似 approximation、標準正規分布表 standard normal distribution table、相関係数 correlation coefficient、独立 independent、累積確率 cumulative probability。

![標準正規分布表（累積確率を記載）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/is/2026/is_202508_sentaku_2_figure_1.png)

**問 2** この問題を選択する場合には問 3 に解答してはいけない。

ある製品を使用開始してから故障するまでの時間 $X$ の確率分布が、以下の確率密度関数を持つとする。

$$
f(x)=\begin{cases}\lambda e^{-\lambda x}&(x>0),\\0&(x\le0).\end{cases}
$$

ここで $\lambda>0$ はパラメータであり、$e$ は自然対数の底である。

**問 2-1：** 確率変数 $X$ が従う分布の名称を以下から選び記号で答えよ。

A：正規分布、B：ベータ分布、C：ガンマ分布、D：指数分布、E：ポアソン分布

**問 2-2：** $X$ の期待値と分散を答えよ。この設問に限り結果のみでよい。

**問 2-3：** $X$ のモーメント母関数 $M_X(t)$ を求めよ。ただし、$t<\lambda$ とする。

**問 2-4：** $0<a<b$ とする。$a<X\le b$ となる確率を求めよ。

**問 2-5：** $0<a<b$ とする。「$X>a$ という条件のもとで、$X\le b$ となる条件付き確率」を $P_1$ とおき、「$0<X\le b-a$ となる確率」を $P_2$ とおく。$P_1$ と $P_2$ の大小を比較せよ。

Keywords：製品 product、故障 failure、確率分布 probability distribution、確率密度関数 probability density function、パラメータ parameter、自然対数の底 base of natural logarithm、確率変数 random variable、正規分布 normal distribution、ベータ分布 beta distribution、ガンマ分布 gamma distribution、指数分布 exponential distribution、ポアソン分布 Poisson distribution、期待値 expected value、分散 variance、モーメント母関数 moment generating function、確率 probability、条件 condition、条件付き確率 conditional probability、比較 compare。

**問 3** この問題を選択する場合には、問 2 に解答してはいけない。

10 万 $\mathrm{m^2}$ の土地でナス、トマト、ピーマンの 3 種類の作物を栽培することを検討している。過去の記録から、ナスは 90 トン、トマトは 140 トン、ピーマンは 120 トンまでしか売れないことがわかっている。栽培費用、売値、収穫高は表 1 のとおりである。

このとき、与えられた制約条件下で、ナス、トマト、ピーマンの栽培により得られる総利益 $z$ を最大化する生産計画問題を考える。以下の問に答えよ。

表 1　作物毎の栽培費用、売値、収穫高

| 作物 | 栽培費用［万円／万 $\mathrm{m^2}$］ | 売値［万円／トン］ | 収穫高［トン／万 $\mathrm{m^2}$］ |
|---|---:|---:|---:|
| ナス | 400 | 40 | 25 |
| トマト | 900 | 35 | 40 |
| ピーマン | 800 | 60 | 30 |

**問 3-1** ナス、トマト、ピーマンの作付面積を、それぞれ $x_1,x_2,x_3$［万 $\mathrm{m^2}$］とする（$x_1,x_2,x_3$ は共に非負）。このとき、総利益 $z$ を最大にする生産計画問題を線形計画問題として定式化せよ。なお、制約条件はすべて不等式制約の形で記述すること。

**問 3-2** 問 3-1 で定式化した不等式制約を、スラック変数 $x_4,x_5,x_6,x_7$ を用いて等式制約に変換せよ。

**問 3-3** 問 3-1 で定式化した線形計画問題におけるナス、トマト、ピーマンの最適作付面積を、それぞれ $x_1^*,x_2^*,x_3^*$［万 $\mathrm{m^2}$］とする。この線形計画問題の最適作付面積 $x_1^*,x_2^*,x_3^*$ とそのときの総利益 $z^*$ をシンプレックス法により求めることを考える。このとき、解答欄にしたがってシンプレックス表を完成させ、最適作付面積 $x_1^*,x_2^*,x_3^*$ と総利益 $z^*$ を求めよ。シンプレックス表は、初期表から 4 回目の更新までの表を用意しているが、すべてを埋める必要があるとは限らない。なお、解答欄のシンプレックス表中の $\pi_i$ の行の各値は、「基底変数の係数」の列と、対応する $x_1\sim x_7$ および「定数項」の列の各要素の積の和で求められる。

Keywords：ナス eggplant、トマト tomato、ピーマン bell pepper、作物 crop、栽培 cultivate、費用 cost、売値 price、収穫高 harvest、制約条件 constraints、総利益 total profit、最大化 maximize、生産計画問題 production planning problem、作付面積 crop acreage、非負 non-negative、線形計画問題 linear programming problem、定式化 formulate、不等式制約 inequality constraints、記述 describe、スラック変数 slack variable、等式制約 equality constraints、最適 optimal、シンプレックス法 simplex method、求める obtain、完成 complete、初期 initial、更新 update、定数項 constant term、要素 element、積 product、和 sum。

### 题目描述

本科目“概率与运筹学”中，问题 1 必答，问题 2、3 只选其中一题作答。

**问 1** 随机变量 $X_1,X_2,\ldots$ 相互独立，各以概率 0.5 取 1、以概率 0.5 取 $-1$。对自然数 $n\ge1$，定义 $Y_n=\sum_{i=1}^nX_i$。回答：

**问 1-1：** 求 $X_1$ 的期望与标准差。

**问 1-2：** 求 $Y_n$ 的期望与标准差。

**问 1-3：** 用中心极限定理近似计算 $Y_{10000}>300$ 的概率。需要时可使用上方给出的标准正态分布累积概率表。

**问 1-4：** 定义 $Z_1=X_1,Z_2=\frac12Z_1+aX_2$。求使 $Z_2$ 与 $Z_1-Z_2$ 的相关系数为 0 的 $a$，其中 $a>0$。

**问 1-5：** 在问 1-4 中相关系数为 0 的情况下，$Z_2$ 与 $Z_1-Z_2$ 是否独立？说明理由。

**问 2** 选择本题时不得回答问 3。

某产品从开始使用到故障的时间 $X$ 具有概率密度

$$
f(x)=\begin{cases}\lambda e^{-\lambda x}&(x>0),\\0&(x\le0),\end{cases}
$$

其中 $\lambda>0$ 为参数，$e$ 为自然对数的底。

**问 2-1：** 从以下选项选择 $X$ 所服从的分布名称，回答字母。

A：正态分布；B：贝塔分布；C：伽马分布；D：指数分布；E：泊松分布。

**问 2-2：** 求 $X$ 的期望和方差。仅此小问可以只写结果。

**问 2-3：** 求 $X$ 的矩母函数 $M_X(t)$，其中 $t<\lambda$。

**问 2-4：** 设 $0<a<b$，求 $a<X\le b$ 的概率。

**问 2-5：** 设 $0<a<b$。令 $P_1$ 为条件 $X>a$ 下 $X\le b$ 的条件概率，$P_2$ 为 $0<X\le b-a$ 的概率，比较 $P_1,P_2$ 的大小。

**问 3** 选择本题时不得回答问 2。

考虑在 10 万 $\mathrm{m^2}$ 土地上种植茄子、西红柿、青椒三种作物。历史记录表明，它们最多分别可售出 90、140、120 吨。种植费用、售价、产量见表 1：茄子分别为每万平方米 400 万日元、每吨 40 万日元、每万平方米 25 吨；西红柿分别为 900、35、40；青椒分别为 800、60、30，单位与茄子相同。

考虑在给定约束下，使种植三种作物所得总利润 $z$ 最大的生产计划。回答：

**问 3-1** 设茄子、西红柿、青椒的种植面积依次为非负的 $x_1,x_2,x_3$［万 $\mathrm{m^2}$］，将总利润 $z$ 最大化的生产计划写为线性规划问题。全部约束须写为不等式。

**问 3-2** 用松弛变量 $x_4,x_5,x_6,x_7$ 将问 3-1 的不等式约束转化为等式约束。

**问 3-3** 设问 3-1 中三种作物的最优种植面积为 $x_1^*,x_2^*,x_3^*$［万 $\mathrm{m^2}$］。用单纯形法求最优面积和相应总利润 $z^*$。按答题栏完成单纯形表，并求这些值。答题栏提供从初始表至第 4 次更新的表，但不一定需要全部填写。表中 $\pi_i$ 行的各项，由“基变量系数”列与相应的 $x_1\sim x_7$ 列或“常数项”列的各元素乘积之和求得。

## **Kai**

### 問1

#### (1)

$$
E[X_1]=0,\qquad V[X_1]=1.
$$

よって

$$
\boxed{\text{期待値 }0,\quad\text{標準偏差 }1}.
$$

#### (2)

独立性より

$$
E[Y_n]=0,\qquad V[Y_n]=n.
$$

したがって

$$
\boxed{\text{期待値 }0,\quad\text{標準偏差 }\sqrt n}.
$$

#### (3)

中心極限定理より $Y_{10000}/100\simeq N(0,1)$ なので、

$$
\begin{gathered}
P(Y_{10000}>300)\simeq P(N(0,1)>3)
=1-\Phi(3)\\
=\boxed{0.00135}.
\end{gathered}
$$

#### (4)

$$
\begin{gathered}
Z_2=\frac12X_1+aX_2,\\
Z_1-Z_2=\frac12X_1-aX_2.
\end{gathered}
$$

$X_1,X_2$ は独立で分散が 1 だから、

$$
\operatorname{Cov}(Z_2,Z_1-Z_2)=\frac14-a^2.
$$

$a>0$ より

$$
\boxed{a=\frac12}.
$$

#### (5)

独立ではない。$a=1/2$ のとき、$Z_2=1$ なら
$X_1=X_2=1$ なので必ず $Z_1-Z_2=0$ である。
一方、$Z_2=0$ なら $X_1=-X_2$ なので $Z_1-Z_2=\pm1$ となる。
したがって条件付き分布が異なる。

### 問2

#### (1)

$$
\boxed{\text{指数分布}}
$$

#### (2)

$$
\boxed{E[X]=\frac1\lambda,\qquad V[X]=\frac1{\lambda^2}}.
$$

#### (3)

$$
\begin{gathered}
M_X(t)=\int_0^\infty e^{tx}\lambda e^{-\lambda x}\,dx
=\boxed{\frac{\lambda}{\lambda-t}}\\
(t<\lambda).
\end{gathered}
$$

#### (4)

$$
\boxed{P(a<X\le b)=e^{-\lambda a}-e^{-\lambda b}}.
$$

#### (5)

$$
P_1=\frac{e^{-\lambda a}-e^{-\lambda b}}{e^{-\lambda a}}
=1-e^{-\lambda(b-a)}=P_2.
$$

よって

$$
\boxed{P_1=P_2}.
$$

### 問3

#### (1)

1 単位面積当たりの利益はそれぞれ
$25\cdot40-400=600$、$40\cdot35-900=500$、
$30\cdot60-800=1000$ 万円である。したがって

$$
\begin{aligned}
&\text{maximize}\\
&z=600x_1+500x_2+1000x_3,\\
&\text{subject to}\\
&x_1+x_2+x_3\le10,\\
&25x_1\le90,\quad40x_2\le140,\quad30x_3\le120,\\
&x_1,x_2,x_3\ge0.
\end{aligned}
$$

#### (2)

$$
\begin{cases}
x_1+x_2+x_3+x_4=10,\\
25x_1+x_5=90,\\
40x_2+x_6=140,\\
30x_3+x_7=120,\\
x_i\ge0\quad(i=1,\ldots,7).
\end{cases}
$$

#### (3)

目的係数は $c=(600,500,1000,0,0,0,0)$、$\pi_j=\sum_i c_{B_i}a_{ij}$ とする。初期表は

| 基底 | $c_B$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $x_4$ | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 10 |
| $x_5$ | 0 | 25 | 0 | 0 | 0 | 1 | 0 | 0 | 90 |
| $x_6$ | 0 | 0 | 40 | 0 | 0 | 0 | 1 | 0 | 140 |
| $x_7$ | 0 | 0 | 0 | 30 | 0 | 0 | 0 | 1 | 120 |
| $\pi_j$ | | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| $c_j-\pi_j$ | | 600 | 500 | 1000 | 0 | 0 | 0 | 0 | |

である。順に

$$
x_3\leftrightarrow x_7,\qquad
x_1\leftrightarrow x_5,\qquad
x_2\leftrightarrow x_4
$$

と基底を交換する。1 回目の更新後は

| 基底 | $c_B$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $x_4$ | 0 | 1 | 1 | 0 | 1 | 0 | 0 | $-1/30$ | 6 |
| $x_5$ | 0 | 25 | 0 | 0 | 0 | 1 | 0 | 0 | 90 |
| $x_6$ | 0 | 0 | 40 | 0 | 0 | 0 | 1 | 0 | 140 |
| $x_3$ | 1000 | 0 | 0 | 1 | 0 | 0 | 0 | $1/30$ | 4 |
| $\pi_j$ | | 0 | 0 | 1000 | 0 | 0 | 0 | $100/3$ | 4000 |
| $c_j-\pi_j$ | | 600 | 500 | 0 | 0 | 0 | 0 | $-100/3$ | |

2 回目の更新後は

| 基底 | $c_B$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $x_4$ | 0 | 0 | 1 | 0 | 1 | $-1/25$ | 0 | $-1/30$ | $12/5$ |
| $x_1$ | 600 | 1 | 0 | 0 | 0 | $1/25$ | 0 | 0 | $18/5$ |
| $x_6$ | 0 | 0 | 40 | 0 | 0 | 0 | 1 | 0 | 140 |
| $x_3$ | 1000 | 0 | 0 | 1 | 0 | 0 | 0 | $1/30$ | 4 |
| $\pi_j$ | | 600 | 0 | 1000 | 0 | 24 | 0 | $100/3$ | 6160 |
| $c_j-\pi_j$ | | 0 | 500 | 0 | 0 | -24 | 0 | $-100/3$ | |

3 回目の更新後は

| 基底 | $c_B$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ | 定数項 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $x_2$ | 500 | 0 | 1 | 0 | 1 | $-1/25$ | 0 | $-1/30$ | $12/5$ |
| $x_1$ | 600 | 1 | 0 | 0 | 0 | $1/25$ | 0 | 0 | $18/5$ |
| $x_6$ | 0 | 0 | 0 | 0 | -40 | $8/5$ | 1 | $4/3$ | 44 |
| $x_3$ | 1000 | 0 | 0 | 1 | 0 | 0 | 0 | $1/30$ | 4 |
| $\pi_j$ | | 600 | 500 | 1000 | 500 | 4 | 0 | $50/3$ | 7360 |
| $c_j-\pi_j$ | | 0 | 0 | 0 | -500 | -4 | 0 | $-50/3$ | |

である。すべての被約費用が非正なので最適であり、

$$
\boxed{(x_1^*,x_2^*,x_3^*)=\left(\frac{18}{5},\frac{12}{5},4\right)}
$$

であり、最大総利益は

$$
\boxed{\begin{gathered}
z^*=600\cdot\frac{18}{5}+500\cdot\frac{12}{5}+1000\cdot4\\
=7360\text{ 万円}
\end{gathered}}
$$

である。

## **Reference**

- [大学公表の原題](https://www.uec.ac.jp/education/graduate/admission/pdf/kako_2_j_choice202508.pdf)
