---
sidebar_label: "2016年8月実施 確率・統計 [3]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2016年8月実施 確率・統計 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$(X_1, X_2, ..., X_n)$ を、母平均 $\mu$ 、母分散 $\sigma^2$ の母集団における大きさ $n$ の標本変量とする。ここで次の統計量を作る。

標本平均:

$$
\overline{X} = \frac{1}{n} \sum_{i=1}^n X_i
$$

不偏分散:

$$
U^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \overline{X})^2
$$

このとき、以下の問いに答えなさい。

(1) 母集団の母数を標本変量の関数値（つまり統計量）と考えることを点推定といい、この関数値を推定量という。そして、推定量に関する性質に一致性と不偏性がある。この2つを説明しなさい。

(2) 上記の $\overline{X}$ , $U^2$ はそれぞれ $\mu$ , $\sigma^2$ の不偏推定量であることを示しなさい。

### 题目描述

设 $(X_1,X_2,\ldots,X_n)$ 是从总体均值为 $\mu$、总体方差为 $\sigma^2$ 的总体中取得的容量为 $n$ 的样本变量，并定义

$$
\overline X=\frac1n\sum_{i=1}^nX_i,
\qquad
U^2=\frac1{n-1}\sum_{i=1}^n(X_i-\overline X)^2.
$$

其中 $\overline X$ 为样本均值，$U^2$ 为无偏方差。

1. 用样本变量的函数值，即统计量，估计总体参数称为点估计，该函数称为估计量。说明估计量的“一致性”和“无偏性”；
2. 证明 $\overline X$ 是 $\mu$ 的无偏估计量，并证明 $U^2$ 是 $\sigma^2$ 的无偏估计量。

## **Kai**

(1)
一致性: 推定量が、サンプルサイズを大きくするにつれて、真の値に確率収束する性質。

$$
\lim_{n \to \infty} P(|\hat{\theta_n} - \theta| < \epsilon) = 1
$$

for any $\epsilon > 0$ .

不偏性: 推定量の期待値が、推定したい母数に一致する性質。すなわち、

$$
E[\hat{\theta}] = \theta
$$

(2)
まず、 $\overline{X}$ が $\mu$ の不偏推定量であることを示す。

$$
E[\overline{X}] = E[\frac{1}{n} \sum_{i=1}^n X_i] = \frac{1}{n} \sum_{i=1}^n E[X_i] = \frac{1}{n} \sum_{i=1}^n \mu = \frac{1}{n} n\mu = \mu
$$

したがって、 $\overline{X}$ は $\mu$ の不偏推定量である。

次に、 $U^2$ が $\sigma^2$ の不偏推定量であることを示す。

$$
E[U^2] = E[\frac{1}{n-1} \sum_{i=1}^n (X_i - \overline{X})^2]
$$

$$
= \frac{1}{n-1} E[\sum_{i=1}^n (X_i - \overline{X})^2]
$$

ここで、 $\sum_{i=1}^n (X_i - \overline{X})^2 = \sum_{i=1}^n X_i^2 - n\overline{X}^2$ であることを用いる。

$$
E[\sum_{i=1}^n (X_i - \overline{X})^2] = E[\sum_{i=1}^n X_i^2 - n\overline{X}^2] = \sum_{i=1}^n E[X_i^2] - nE[\overline{X}^2]
$$

$Var(X_i) = E[X_i^2] - (E[X_i])^2$ より、 $E[X_i^2] = Var(X_i) + (E[X_i])^2 = \sigma^2 + \mu^2$ 。

また、 $Var(\overline{X}) = E[\overline{X}^2] - (E[\overline{X}])^2 = \frac{\sigma^2}{n}$ より、 $E[\overline{X}^2] = Var(\overline{X}) + (E[\overline{X}])^2 = \frac{\sigma^2}{n} + \mu^2$ 。

したがって、

$$
E[\sum_{i=1}^n (X_i - \overline{X})^2] = \sum_{i=1}^n (\sigma^2 + \mu^2) - n(\frac{\sigma^2}{n} + \mu^2) = n\sigma^2 + n\mu^2 - \sigma^2 - n\mu^2 = (n-1)\sigma^2
$$

よって、

$$
E[U^2] = \frac{1}{n-1} E[\sum_{i=1}^n (X_i - \overline{X})^2] = \frac{1}{n-1} (n-1)\sigma^2 = \sigma^2
$$

したがって、 $U^2$ は $\sigma^2$ の不偏推定量である。
