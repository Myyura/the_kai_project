---
sidebar_label: "2022年7月実施 数理基礎 問題C"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2022年7月実施 数理基礎 問題C

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問C1

次の確率密度関数 (probability density function) を考える。

$$
f(x) = \begin{cases}
\frac{x}{2} & 0 < x < 2 \\
0 & \text{上記以外}
\end{cases}
$$

この確率分布 (probability distribution) に従う確率変数 (random variable) $X$ の期待値 (expectation) $E(X)$ と分散 (variance) $V(X)$ を求めよ。

#### 小問C2

母集団分布 (population distribution) は正規分布 (normal distribution) $N(\mu, 2^2)$ であるとする。この母集団からランダムに4個のデータを採取したところ、次のようになった。

5, 7, 9, 11

母平均 (population mean) $\mu$ を信頼率 (confidence coefficient) 95\% で区間推定 (interval estimation) せよ。なお、標準正規分布 (standard normal distribution) の両側 5% 点は $\pm 1.96$ である。

#### 小問C3

3水準の一元配置実験 (one-way layout experiment) を行った。各水準の繰り返し数 (number of replication) は5である。各水準において得られたデータの合計は10, 20, 30となった。このとき, 水準間の平方和 (sum of squares) と自由度 (degrees of freedom) を求めよ。

#### 小問C4

ポアソン分布 (Poisson distribution) について説明せよ。

### 题目描述

#### 小问C1

概率密度函数为

$$
f(x)=
\begin{cases}
\dfrac{x}{2},&0<x<2,\\
0,&\text{其他情形}.
\end{cases}
$$

若随机变量 $X$ 服从该分布，求期望 $E(X)$ 和方差 $V(X)$。

#### 小问C2

设总体服从正态分布

$$
N(\mu,2^2).
$$

从中随机抽取 $4$ 个数据：

$$
5,\ 7,\ 9,\ 11.
$$

以 $95\%$ 的置信水平对总体均值 $\mu$ 作区间估计。标准正态分布的双侧 $5\%$ 临界值为 $\pm1.96$。

#### 小问C3

进行一个含 $3$ 个水平的单因素配置实验，每个水平重复 $5$ 次。三个水平下所得数据的总和分别为

$$
10,\ 20,\ 30.
$$

求水平间平方和及其自由度。

#### 小问C4

说明泊松分布，包括其概率质量函数、参数含义、主要数字特征以及适用的随机计数情形。

## **Kai**

### 小問C1

まず、期待値 $E(X)$ を求めます。

$$
E(X) = \int_{-\infty}^{\infty} x f(x) dx = \int_{0}^{2} x \cdot \frac{x}{2} dx = \frac{1}{2} \int_{0}^{2} x^2 dx = \frac{1}{2} \left[ \frac{x^3}{3} \right]_0^2 = \frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}
$$

次に、 $E(X^2)$ を求めます。

$$
E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx = \int_{0}^{2} x^2 \cdot \frac{x}{2} dx = \frac{1}{2} \int_{0}^{2} x^3 dx = \frac{1}{2} \left[ \frac{x^4}{4} \right]_0^2 = \frac{1}{2} \cdot \frac{16}{4} = 2
$$

最後に、分散 $V(X)$ を求めます。

$$
V(X) = E(X^2) - (E(X))^2 = 2 - \left( \frac{4}{3} \right)^2 = 2 - \frac{16}{9} = \frac{18 - 16}{9} = \frac{2}{9}
$$

したがって、
$E(X) = \frac{4}{3}$ 、
$V(X) = \frac{2}{9}$ 。

### 小問C2

まず、標本平均 $\bar{x}$ を計算する。

$$
\bar{x} = \frac{5 + 7 + 9 + 11}{4} = \frac{32}{4} = 8
$$

次に、母分散 $\sigma^2 = 2^2 = 4$ より、標準偏差 $\sigma = 2$ である。

標本数 $n = 4$ なので、標準誤差は

$$
\frac{\sigma}{\sqrt{n}} = \frac{2}{\sqrt{4}} = \frac{2}{2} = 1
$$

信頼率 95% の時の $z$ 値は 1.96 であるから、信頼区間は

$$
\bar{x} \pm z \frac{\sigma}{\sqrt{n}} = 8 \pm 1.96 \times 1 = 8 \pm 1.96
$$

したがって、信頼区間は $(8 - 1.96, 8 + 1.96) = (6.04, 9.96)$ である。

答え：(6.04, 9.96)

### 小問C3

Let $n$ be the number of levels, and $r$ be the number of replications.
Here, $n = 3$ and $r = 5$ .
Let $T_i$ be the sum of the data at level $i$ .
Given $T_1 = 10, T_2 = 20, T_3 = 30$ .
The total number of observations is $N = nr = 3 \times 5 = 15$ .
The grand total is $G = T_1 + T_2 + T_3 = 10 + 20 + 30 = 60$ .
The correction factor (CF) is given by

$$
CF = \frac{G^2}{N} = \frac{60^2}{15} = \frac{3600}{15} = 240
$$

The sum of squares between levels (SSB) is given by

$$
SSB = \sum_{i=1}^n \frac{T_i^2}{r} - CF = \frac{T_1^2}{r} + \frac{T_2^2}{r} + \frac{T_3^2}{r} - CF
$$

$$
SSB = \frac{10^2}{5} + \frac{20^2}{5} + \frac{30^2}{5} - 240 = \frac{100}{5} + \frac{400}{5} + \frac{900}{5} - 240 = 20 + 80 + 180 - 240 = 280 - 240 = 40
$$

The degrees of freedom between levels (dfB) is given by

$$
dfB = n - 1 = 3 - 1 = 2
$$

Therefore, the sum of squares between levels is 40, and the degrees of freedom between levels is 2.

Answer:
水準間の平方和 (Sum of Squares) = 40
自由度 (Degrees of Freedom) = 2

### 小問C4

ポアソン分布は、指定された期間または場所において、イベントが発生する回数をモデル化する離散確率分布です。

**定義**
ポアソン分布は、パラメータ $\lambda > 0$ によって特徴付けられます。これは、指定された区間でのイベントの平均回数を表します。単位時間あたりの一定レートを $\nu$、区間の長さを $T$ とすると $\lambda=\nu T$ です。確率変数 $X$ がポアソン分布に従う場合、 $X$ が値 $k$ （ $k$ は非負整数）を取る確率は次の式で与えられます。

$$
P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}
$$

ここで:
*   $e$ はネイピア数 ( $e \approx 2.71828$ )
*   $k!$ は $k$ の階乗

**特性**
*   **平均 (Mean):**  $\mu = \lambda$
*   **分散 (Variance):** $\sigma^2 = \lambda$
*   **標準偏差 (Standard Deviation):** $\sigma = \sqrt{\lambda}$

**利用可能なケース**
ポアソン分布は、イベントが次の特性を持つ場合に適切です。
1.  イベントはランダムかつ独立して発生します。
2.  イベントが発生する平均レートは既知であり、一定です。
3.  イベントが同時に2回以上発生する確率は無視できます。

**例**
*   1時間あたりにウェブサイトにアクセスするユーザー数
*   1分あたりにかかってくる電話の数
*   1ページに含まれる印刷上の誤りの数
*   一定時間内に発生する事故の数
*   単位面積あたりに生息する植物の数

**導出の背景**
二項分布において、試行回数 $n$ が非常に大きく、各試行が成功する確率 $p$ が非常に小さい場合、すなわち、 $n \to \infty$、$p \to 0$、$np \to\lambda$（有限の一定値）のとき、二項分布はポアソン分布で近似できます。ここで、 $\lambda = np$ となります。
