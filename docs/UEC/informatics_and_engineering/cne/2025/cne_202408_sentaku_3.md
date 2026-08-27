---
sidebar_label: 2024年8月実施 選択問題 確率統計
tags:
  - University-of-Electro-Communications
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Mixed-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2024年8月実施 選択問題 確率統計

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

確率変数 $X$ の密度関数を

$$
f_X(x)=
\frac{w_1}{\sqrt{2\pi}}
\exp\left\{-\frac{(x-\mu)^2}{2}\right\}
+\frac{w_2}{\sqrt{2\pi}\sigma}
\exp\left\{-\frac{x^2}{2\sigma^2}\right\}
$$

とする。ただし $\sigma>0$, $w_1,w_2\ge0$, $w_1+w_2=1$ である。積率母関数、期待値、分散、一次変換の期待値と分散を求めよ。さらに $\mu=1$ のとき重みを動かして分散を最大化し、$w_1=0,w_2=1$ のとき $\sigma$ の最尤推定量を求め、独立同分布な $X_1,\ldots,X_n$ の和の積率母関数を求めよ。

### 题目描述

给定两个正态分布的混合密度，求矩生成函数、均值和方差；研究混合权重变化时的最大方差，求正态尺度参数的极大似然估计，并求独立同分布随机变量之和的矩生成函数。

## **Kai**

### (1)

$X$ は確率 $w_1$ で $N(\mu,1)$、確率 $w_2$ で $N(0,\sigma^2)$ に従う。したがって、

$$
\boxed{
M_X(t)=w_1e^{\mu t+t^2/2}
+w_2e^{\sigma^2t^2/2}
}.
$$

### (2)

$$
\boxed{E[X]=M_X'(0)=w_1\mu}.
$$

### (3)

$$
E[X^2]=M_X''(0)=w_1(1+\mu^2)+w_2\sigma^2.
$$

よって、

$$
\boxed{
V[X]=w_1+w_2\sigma^2+w_1w_2\mu^2
}.
$$

### (4)

$$
\boxed{E[5X+7]=5w_1\mu+7},
$$

$$
\boxed{
V[5X+7]
=25\left(w_1+w_2\sigma^2+w_1w_2\mu^2\right)
}.
$$

### (5)

$\mu=1$, $p=w_1$, $w_2=1-p$ とおくと、

$$
V[X]=\sigma^2+(2-\sigma^2)p-p^2
$$

である。したがって、

$$
\boxed{
\begin{array}{c|c|c|c}
\text{条件}&w_1&w_2&\max V[X]\\ \hline
0<\sigma\le\sqrt2
&1-\dfrac{\sigma^2}{2}
&\dfrac{\sigma^2}{2}
&1+\dfrac{\sigma^4}{4}\\[6pt]
\sigma>\sqrt2
&0&1&\sigma^2
\end{array}}
$$

を得る。

### (6)

$w_1=0,w_2=1$ のとき、

$$
\ell(\sigma)
=-n\log\sigma-\frac{1}{2\sigma^2}
\sum_{i=1}^nX_i^2+\text{const.}
$$

である。$\ell'(\sigma)=0$ より、

$$
\boxed{
\widehat{\sigma}
=\sqrt{\frac1n\sum_{i=1}^nX_i^2}
}.
$$

### (7)

$Y=\sum_{i=1}^nX_i$ とすると、独立性より

$$
\boxed{
M_Y(t)
=\left(
w_1e^{\mu t+t^2/2}
+w_2e^{\sigma^2t^2/2}
\right)^n
}.
$$
