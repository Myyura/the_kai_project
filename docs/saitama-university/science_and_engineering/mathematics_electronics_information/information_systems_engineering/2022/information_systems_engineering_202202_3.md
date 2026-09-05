---
sidebar_label: "2022年2月実施 専門基礎科目 第3問"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報工学PG 2022年2月実施 専門基礎科目 第3問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3. 以下の問に答えよ. [Solve the following problems. ]

(a) 2個の公平なサイコロを振り、出た目をそれぞれ離散確率変数 $I$ と $J$ とする。 $I$ と $J$ のうち大きな方の値を $X$ 、同じか小さな方の値を $Y$ とする ( $X \geq Y$ ). [Two fair dice are rolled, and the two numbers are written by discrete random variables $I$ and $J$ , respectively. Let $X$ be the larger value of $I$ and $J$ , and let $Y$ be the same or the smaller value ( $X \geq Y$ ). ]

(1) $I$ と $J$ が $k$ 以下である確率 $\Pr(I \leq k, J \leq k)$ を求めよ ( $k = 1,..., 6$ ). [Find the probability $\Pr(I \leq k, J \leq k)$ that $I$ and $J$ are less than or equal to $k$ where $k = 1,..., 6$ .]

(2) 確率 $\Pr(X = k) = \Pr(I \leq k, J \leq k) - \Pr(I \leq k - 1, J \leq k - 1)$ を求めよ ( $k=2,..., 6$ ). [Find the probability $\Pr(X = k) = \Pr(I\leq k, J\leq k) - \Pr(I \leq k-1, J \leq k-1)$ where $k = 2,..., 6$ .]

(3) 確率 $\Pr(Y = k) = \Pr(I \geq k, J \geq k) - \Pr(I \geq k+1, J \geq k+1)$ を求めよ ( $k=1,...,5$ ). [Find the probability $\Pr(Y= k) = \Pr(I\geq k, J\geq k) - \Pr(I \geq k+1, J\geq k+1)$ where $k = 1,..., 5$ .]

(4) 期待値 $E[X]$ と $E[Y]$ を求めよ. [Find the expectation values $E[X]$ and $E[Y]$ .]

(5) $X$ と $Y$ は独立かどうか答えよ。理由も説明せよ. [Answer whether $X$ and $Y$ are independent or not. Give the reason.]

(6) 共分散 $\text{Cov}[I,J] = E[IJ]-E[I]E[J]$ を求めよ. [Find the co-variance Cov[ $I, J$ ] = $E[IJ] - E[I]E[J]$ .]

(7) 共分散 $\text{Cov}[X, Y] = E[XY]-E[X]E[Y]$ を求めよ. [Find the co-variance Cov[ $X, Y$ ] = $E[XY] - E[X]E[Y]$ .]

(b) 公平なコインを $n$ 回投げて、表が出た回数を $X$ とし $\hat{p} = X/n$ とする。 $\hat{p}$ が $0.5 \pm 0.01$ の範囲に存在する確率を $0.95$ 以上にするための最小の $n$ を求めよ。なお、標準正規分布にしたがう確率変数 $Z$ に対して、確率 $\Pr(Z \geq 1.96) \approx 0.025$ となることを用いて良い。[A fair coin is tossed $n$ times. Let $X$ be the number of times head occurs, and $\hat{p} = X/n$ . Find the lower bound of $n$ to make the probability that $\hat{p}$ is in the range of $0.5 \pm 0.01$ greater than $0.95$ . Here, you can use the probability of $\Pr(Z \geq 1.96) \approx 0.025$ , where a random variable $Z$ has the standard normal distribution.]

### 题目描述

3. 回答下列问题。

(a) 投掷两枚公平的骰子，分别以离散随机变量 $I,J$ 表示所得点数。令 $X$ 为 $I,J$ 中较大的值，$Y$ 为两者相等时的共同值或两者中较小的值，即

$$
X\geq Y.
$$

(1) 对 $k=1,\dots,6$，求两枚骰子的点数均不超过 $k$ 的概率

$$
\Pr(I\leq k,\ J\leq k).
$$

(2) 对 $k=2,\dots,6$，求

$$
\Pr(X=k)
=\Pr(I\leq k,\ J\leq k)
-\Pr(I\leq k-1,\ J\leq k-1).
$$

(3) 对 $k=1,\dots,5$，求

$$
\Pr(Y=k)
=\Pr(I\geq k,\ J\geq k)
-\Pr(I\geq k+1,\ J\geq k+1).
$$

(4) 求期望 $E[X]$ 与 $E[Y]$。

(5) 判断 $X,Y$ 是否相互独立，并说明理由。

(6) 求协方差

$$
\operatorname{Cov}[I,J]=E[IJ]-E[I]E[J].
$$

(7) 求协方差

$$
\operatorname{Cov}[X,Y]=E[XY]-E[X]E[Y].
$$

(b) 将一枚公平硬币投掷 $n$ 次，以 $X$ 表示正面出现次数，并令

$$
\widehat p=\frac Xn.
$$

求使 $\widehat p$ 落在 $0.5\pm0.01$ 范围内的概率不低于 $0.95$ 时，$n$ 的最小值。可以使用：若随机变量 $Z$ 服从标准正态分布，则

$$
\Pr(Z\geq1.96)\approx0.025.
$$

## **Kai**

(a)
(1) $\Pr(I \leq k, J \leq k) = \Pr(I \leq k) \Pr(J \leq k) = (k/6)(k/6) = k^2/36$ for $k = 1, 2, 3, 4, 5, 6$ .

(2) $\Pr(X = k) = \Pr(I = k, J \leq k) + \Pr(I \leq k, J = k) - \Pr(I = k, J = k) = \Pr(I = k)\Pr(J \leq k) + \Pr(I \leq k)\Pr(J = k) - \Pr(I = k)\Pr(J=k) = (1/6)(k/6) + (k/6)(1/6) - (1/6)(1/6) = (2k-1)/36$ for $k = 2, 3, 4, 5, 6$ .
Alternately: $\Pr(X=k) = \Pr(I \leq k, J \leq k) - \Pr(I \leq k-1, J \leq k-1) = k^2/36 - (k-1)^2/36 = (k^2 - (k^2 - 2k + 1))/36 = (2k-1)/36$ for $k = 2, 3, 4, 5, 6$ .

(3) $\Pr(Y = k) = \Pr(I \geq k, J \geq k) - \Pr(I \geq k+1, J \geq k+1) = (7-k)^2/36 - (6-k)^2/36 = ((49 - 14k + k^2) - (36 - 12k + k^2))/36 = (13 - 2k)/36$ for $k = 1, 2, 3, 4, 5$ .
$\Pr(Y = k)$ can also be derived by considering the cases where $Y = k$:
$\Pr(Y=k) = \Pr(I=k, J>k) + \Pr(I>k, J=k) + \Pr(I=k, J=k)$ . The number of pairs $(i,j)$ such that $\min(i,j)=k$ is $13-2k$ .

(4) $E[X] = \sum_{k=1}^6 k \Pr(X = k) = \sum_{k=1}^6 k (2k-1)/36$ .
$E[X] = \sum_{k=1}^6 k (2k-1)/36 = \frac{1}{36} \sum_{k=1}^6 (2k^2 - k) = \frac{1}{36} (2 \frac{6(6+1)(2(6)+1)}{6} - \frac{6(6+1)}{2}) = \frac{1}{36}(2 \frac{6(7)(13)}{6} - \frac{6(7)}{2}) = \frac{1}{36}(182 - 21) = \frac{161}{36} \approx 4.472$ .
$E[Y]$ must also include $\Pr(Y=6)=1/36$ :

$$
E[Y]
=\sum_{k=1}^{6}k\Pr(Y=k)
=\frac{85}{36}+\frac{6}{36}
=\frac{91}{36}
\approx2.528.
$$

(5) $X$ and $Y$ are not independent, because $\Pr(X = k, Y = k) \neq \Pr(X = k) \Pr(Y = k)$ . For example, $\Pr(X = 1, Y = 1) = 1/36$ , but $\Pr(X = 1) = 1/36$ and $\Pr(Y = 1) = 11/36$ so $\Pr(X=1,Y=1) \neq \Pr(X=1)\Pr(Y=1)$ .

(6) $\text{Cov}[I,J] = E[IJ] - E[I]E[J]$ .
$E[I] = E[J] = (1+2+3+4+5+6)/6 = 3.5$ .  $E[IJ] = \sum_{i=1}^6 \sum_{j=1}^6 ij P(I=i, J=j) = \sum_{i=1}^6 \sum_{j=1}^6 ij (1/36) = (1/36) \sum_{i=1}^6 i \sum_{j=1}^6 j = (1/36) (21)(21) = 441/36 = 12.25$ .  $\text{Cov}[I,J] = 441/36 - (7/2)(7/2) = 0$ .
Because I and J are independent, E[IJ] = E[I]E[J]. Hence E[IJ] - E[I]E[J] = 0.

(7) Since $\{X,Y\}=\{I,J\}$ for every outcome, $XY=IJ$ . Therefore,

$$
E[XY]=E[IJ]=\frac{49}{4}.
$$

Using the expectations from (4),

$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=E[XY]-E[X]E[Y]\\
&=\frac{49}{4}-\frac{161}{36}\frac{91}{36}\\
&=\frac{1225}{1296}.
\end{aligned}
$$

(b)  $\Pr(|\hat{p} - 0.5| \leq 0.01) \geq 0.95$ is equivalent to $\Pr(|\hat{p} - 0.5| > 0.01) \leq 0.05$ . Since $\hat{p} = X/n$ where $X$ follows a binomial distribution with parameters $n$ and $p=0.5$ , by the Central Limit Theorem we can approximate $\hat{p}$ by a normal distribution with mean $0.5$ and variance $(0.5)(0.5)/n = 0.25/n$ .
Then $Z = (\hat{p} - 0.5) / \sqrt{0.25/n}$ approximately follows a standard normal distribution. The central 95% condition is

$$
\frac{0.01}{\sqrt{0.25/n}}=0.02\sqrt n\geq1.96.
$$

Thus $\sqrt n\geq98$ , or $n\geq9604$ . Therefore, under the normal approximation, the smallest integer is

$$
n=9604.
$$

For the exact binomial model, the condition is

$$
2^{-n}\sum_{k=\lceil49n/100\rceil}^{\lfloor51n/100\rfloor}\binom nk\geq0.95.
$$

The smallest integer satisfying this inequality is $n=9551$, for which

$$
\Pr(0.49\leq\hat p\leq0.51)
=2^{-9551}\sum_{k=4680}^{4871}\binom{9551}{k}
\approx0.9505465.
$$
