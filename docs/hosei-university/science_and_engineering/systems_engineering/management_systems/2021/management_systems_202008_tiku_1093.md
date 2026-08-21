---
sidebar_label: "2020年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$(X_1, \dots, X_n)$ は正規母集団からの無作為標本で、平均は同じだが分散が異なる。 $i=1, \dots, n$ に対し $X_i \sim N(\mu, \sigma_i^2)$ で分散を既知としたとき、以下の問いに答えよ。

(1) $\mu$ の最尤推定量 $\hat{\mu}$ が

$$
\hat{\mu} = \frac{1}{\sum_{i=1}^n \sigma_i^{-2}} \sum_{i=1}^n \frac{X_i}{\sigma_i^2}
$$

で表されることを示せ。

(2) 前問で求めた最尤推定量が不偏性を満たすか否か示せ。

### 题目描述

$(X_1,\dots,X_n)$ 是取自正态总体的随机样本，各变量均值相同而方差不同。对 $i=1,\dots,n$，设

$$
X_i\sim N(\mu,\sigma_i^2),
$$

其中各方差 $\sigma_i^2$ 已知。回答下列问题。

（1）证明 $\mu$ 的最大似然估计量 $\hat\mu$ 可表示为

$$
\hat\mu
=\frac{1}{\sum_{i=1}^n\sigma_i^{-2}}
\sum_{i=1}^n\frac{X_i}{\sigma_i^2}.
$$

（2）说明上一问所得最大似然估计量是否具有无偏性。

## **Kai**

(1) 尤度関数は

$$
L(\mu) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma_i^2}} \exp \left( -\frac{(X_i - \mu)^2}{2\sigma_i^2} \right)
$$

対数尤度関数は

$$
\log L(\mu) = \sum_{i=1}^n \left[ -\frac{1}{2} \log(2\pi\sigma_i^2) - \frac{(X_i - \mu)^2}{2\sigma_i^2} \right]
$$

$\mu$ で微分して0とおくと、

$$
\frac{\partial \log L(\mu)}{\partial \mu} = \sum_{i=1}^n \frac{X_i - \mu}{\sigma_i^2} = 0
$$

$$
\sum_{i=1}^n \frac{X_i}{\sigma_i^2} - \mu \sum_{i=1}^n \frac{1}{\sigma_i^2} = 0
$$

$$
\hat{\mu} = \frac{\sum_{i=1}^n \frac{X_i}{\sigma_i^2}}{\sum_{i=1}^n \frac{1}{\sigma_i^2}} = \frac{1}{\sum_{i=1}^n \sigma_i^{-2}} \sum_{i=1}^n \frac{X_i}{\sigma_i^2}
$$

(2) 不偏性について

$$
E[\hat{\mu}] = E\left[ \frac{1}{\sum_{i=1}^n \sigma_i^{-2}} \sum_{i=1}^n \frac{X_i}{\sigma_i^2} \right]
$$

$$
= \frac{1}{\sum_{i=1}^n \sigma_i^{-2}} \sum_{i=1}^n \frac{E[X_i]}{\sigma_i^2}
$$

$$
= \frac{1}{\sum_{i=1}^n \sigma_i^{-2}} \sum_{i=1}^n \frac{\mu}{\sigma_i^2}
$$

$$
= \mu \frac{\sum_{i=1}^n \sigma_i^{-2}}{\sum_{i=1}^n \sigma_i^{-2}} = \mu
$$

よって、 $\hat{\mu}$ は $\mu$ の不偏推定量である。
