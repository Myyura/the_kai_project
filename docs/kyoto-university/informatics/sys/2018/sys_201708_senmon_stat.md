---
sidebar_label: 2017年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Minimum-Variance-Linear-Unbiased-Combination
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Geometric-Distribution
  - Probability-Statistics.Probability-Basics.Coupon-Collector-Problem
---
# 京都大学 情報学研究科 システム科学専攻 2017年8月実施 専門科目 確率統計

## **Author**
[uogxtc](https://zhuanlan.zhihu.com/p/697551899), 祭音Myyura

## **Description**

### 問題1
確率変数 $X_1, \ldots, X_n, Y_1, \ldots, Y_m$ は独立に正規分布に従い、 $X_i \sim N(a\theta, \sigma^2)$, $Y_j \sim N(b\theta, \sigma^2)$, $i = 1, \ldots, n$, $j = 1, \ldots, m$ とする。
ただし、 $N(\mu, \sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布を表す。
ここで $n, m$ は正の整数、 $a, b$ は正の定数で既知とし、 $\theta, \sigma^2$ は未知パラメータである。このとき以下の設問に答えなさい。

(1) $\theta, \sigma^2$ について、 $X_1, \ldots, X_n, Y_1, \ldots, Y_m$ をすべて用いた最尤推定量を求めなさい。

(2) 定数 $\alpha, \beta$ を用いて $\tilde{\theta} = \alpha \bar{X} + \beta \bar{Y}$ と定義する。ただし $\bar{X} = (X_1 + \cdots + X_n)/n$, $\bar{Y} = (Y_1 + \cdots + Y_m)/m$ である。
$\tilde{\theta}$ の期待値 $E(\tilde{\theta})$ と分散 $V(\tilde{\theta})$ を求めなさい。

(3) $\tilde{\theta}$ が $\theta$ の不偏推定量となるために $\alpha, \beta$ が満たす条件を求めなさい。
また、不偏推定量となる $\tilde{\theta}$ が $V(\tilde{\theta})$ を最小にするときの $\alpha, \beta$ の値を求めなさい。

### 問題2
あるコインを投げると、確率 $p \ (0 < p < 1)$ で表、確率 $q \ (= 1 - p)$ で裏が出る。
このコインを表が出るまで連続して投げ続ける。
ただし、毎回のコイン投げは独立な試行である。
初めて表が出るまでに投げた回数（表が出た試行を含む）を確率変数 $T$ で表す。
以下の設問に答えなさい。

(1) $T = n$ ($n = 1, 2, \ldots$) となる確率 $P(T = n)$ を求めなさい。ただし、 $P(\cdot)$ は確率を表す。

(2) 確率変数 $T$ の期待値（平均）と分散を求めなさい。

あるスロットマシン（窓は一つとする）を引くと、 $m$ 種類（$m = 1, 2, \ldots$）の異なる図柄が等確率で出る。
便宜上、 $m$ 種類の図柄のそれぞれに $\{1, 2, \ldots, m\}$ の異なる番号を付ける。
このスロットマシンを連続して引くことを考え、 $n$ 回目（$n = 1, 2, \ldots$）に引いた際に出た図柄の番号を確率変数 $X_n$ $\in \{1, 2, \ldots, m\}$ で表す。
ただし、スロットマシンを引く試行は独立である。この時、 $m$ 種類の図柄のうち異なる図柄が初めて $i$ 種類（$i = 1, 2, \ldots, m$）になるまでスロットマシンを引いた回数を $T_{m,i}$ と表すと、

$$
T_{m,i} = \begin{cases}
1 & (i = 1) \\
\min \{ n > T_{m,i-1} \mid X_n \neq X_j; j = 1, \ldots, n-1 \} & (i = 2, \ldots, m)
\end{cases}
$$

と再帰的に定義できる。以下の設問に答えなさい。

(3) 確率変数 $U_{m,i}$ ($i = 2, \ldots, m$) として、

$$
U_{m,i} \equiv T_{m,i} - T_{m,i-1}
$$

とする。
$U_{m,i} = k$ ($k = 1, 2, \ldots$) となる確率 $P(U_{m,i} = k)$ を求めなさい。

(4) すべての図柄が初めて出るまでスロットマシンを引いた回数 $T_{m,m}$ に対し、その期待値（平均）が以下の式で与えられることを示しなさい。

$$
1 + m \sum_{j=1}^{m-1} \frac{1}{j}
$$

#### 题目描述

1. 随机变量 $X_1,\ldots,X_n,Y_1,\ldots,Y_m$ 相互独立，并满足

$$
   X_i\sim N(a\theta,\sigma^2)\quad(i=1,\ldots,n),\qquad
   Y_j\sim N(b\theta,\sigma^2)\quad(j=1,\ldots,m),
$$

   其中 $N(\mu,\sigma^2)$ 表示均值为 $\mu$、方差为 $\sigma^2$ 的正态分布；$n,m$ 为正整数，$a,b$ 为已知正常数，$\theta,\sigma^2$ 为未知参数。

   （1）使用全部 $X_1,\ldots,X_n,Y_1,\ldots,Y_m$，求 $\theta$ 与 $\sigma^2$ 的最大似然估计量。

   （2）对常数 $\alpha,\beta$，定义

$$
   \widetilde\theta=\alpha\bar X+\beta\bar Y,\qquad
   \bar X=\frac{X_1+\cdots+X_n}{n},\qquad
   \bar Y=\frac{Y_1+\cdots+Y_m}{m}.
$$

   求 $E(\widetilde\theta)$ 与 $V(\widetilde\theta)$。

   （3）求使 $\widetilde\theta$ 成为 $\theta$ 的无偏估计量时 $\alpha,\beta$ 必须满足的条件；再求在所有此类无偏估计量中使 $V(\widetilde\theta)$ 最小的 $\alpha,\beta$。

2. 抛掷一枚硬币，每次以概率 $p$ 出现正面、以概率 $q=1-p$ 出现反面，其中 $0<p<1$，各次试验相互独立。连续抛掷直到首次出现正面，令 $T$ 表示包括该次正面在内的抛掷次数。

   （1）对 $n=1,2,\ldots$，求 $P(T=n)$。

   （2）求 $T$ 的期望与方差。

   另有一台单窗口老虎机，每次等概率出现 $m$ 种不同图案中的一种，其中 $m=1,2,\ldots$。把图案编号为 $\{1,2,\ldots,m\}$，连续且独立地操作机器，令第 $n$ 次出现的图案编号为

$$
   X_n\in\{1,2,\ldots,m\}.
$$

   令 $T_{m,i}$ 表示首次收集到 $i$ 种不同图案所需的操作次数，递归定义为

$$
   T_{m,i}=
   \begin{cases}
   1 & (i=1),\\
   \min\{n>T_{m,i-1}\mid X_n\ne X_j,\ j=1,\ldots,n-1\}
   & (i=2,\ldots,m).
   \end{cases}
$$

   （3）对 $i=2,\ldots,m$ 定义

$$
   U_{m,i}=T_{m,i}-T_{m,i-1}.
$$

   对 $k=1,2,\ldots$，求 $P(U_{m,i}=k)$。

   （4）证明首次集齐全部图案所需次数 $T_{m,m}$ 的期望为

$$
   1+m\sum_{j=1}^{m-1}\frac1j.
$$


## **Kai**

### 問題1

(1) $D=na^2+mb^2$ とおく。対数尤度は定数を除いて

$$
\ell=-\frac{n+m}{2}\log\sigma^2
-\frac1{2\sigma^2}\left\{\sum_{i=1}^n(X_i-a\theta)^2+\sum_{j=1}^m(Y_j-b\theta)^2\right\}.
$$

各パラメータで微分して

$$
\boxed{\widehat\theta=\frac{a\sum_iX_i+b\sum_jY_j}{D}},\qquad
\boxed{\widehat{\sigma^2}=\frac{\sum_i(X_i-a\widehat\theta)^2+\sum_j(Y_j-b\widehat\theta)^2}{n+m}}.
$$

残差平方和は確率1で正であり、このとき尤度は上式で最大となる。残差平方和が $0$ の例外的標本では、$\sigma^2\downarrow0$ で尤度が発散する。

(2) 独立性より

$$
\boxed{E[\widetilde\theta]=(a\alpha+b\beta)\theta,\quad
\operatorname{Var}(\widetilde\theta)=\left(\frac{\alpha^2}{n}+\frac{\beta^2}{m}\right)\sigma^2}.
$$

(3) 不偏条件は $a\alpha+b\beta=1$。Cauchy–Schwarz の不等式から

$$
1=(a\alpha+b\beta)^2\le(na^2+mb^2)\left(\frac{\alpha^2}{n}+\frac{\beta^2}{m}\right).
$$

等号成立条件を不偏条件と合わせると

$$
\boxed{\alpha=\frac{na}{D},\qquad\beta=\frac{mb}{D}},\qquad
\min\operatorname{Var}(\widetilde\theta)=\frac{\sigma^2}{D}.
$$

### 問題2

(1) $n-1$ 回裏が続いた後に表が出るので $\boxed{P(T=n)=q^{n-1}p}$。

(2) 確率母関数は $G(s)=ps/(1-qs)$ であり、

$$
E[T]=G'(1)=\boxed{\frac1p},\qquad
\operatorname{Var}(T)=G''(1)+G'(1)-G'(1)^2=\boxed{\frac q{p^2}}.
$$

(3) 既に $i-1$ 種類あるとき、新しい図柄が出る確率は $(m-i+1)/m$ なので

$$
\boxed{P(U_{m,i}=k)=\left(\frac{i-1}{m}\right)^{k-1}\frac{m-i+1}{m}}.
$$

(4) $T_{m,m}=1+\sum_{i=2}^mU_{m,i}$ と $E[U_{m,i}]=m/(m-i+1)$ より

$$
\boxed{E[T_{m,m}]=1+\sum_{i=2}^m\frac{m}{m-i+1}
=1+m\sum_{j=1}^{m-1}\frac1j}.
$$

