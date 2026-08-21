---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Simple-Linear-Regression
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2次元のデータ $(x_i, y_i)$ $(i = 1, 2, \dots, n)$ に対して、次の回帰モデルを仮定する。

$$
y_i = \beta x_i^2 + \epsilon_i, \quad \epsilon_i \sim N(0, \sigma^2)
$$

このとき, $\beta$ の最小二乗推定量を導け。

### 题目描述

对二维数据 $(x_i,y_i)$（$i=1,2,\ldots,n$），假设回归模型

$$
y_i=\beta x_i^2+\epsilon_i,
\qquad
\epsilon_i\sim N(0,\sigma^2).
$$

推导 $\beta$ 的最小二乘估计量。

## **Kai**

最小二乗推定量(Least Squares Estimator, LSE)を求める。
残差二乗和(Residual Sum of Squares, RSS)を最小化する $\beta$ を求める。

$$
RSS(\beta) = \sum_{i=1}^n (y_i - \beta x_i^2)^2
$$

$\beta$ で微分して0とおく。

$$
\frac{dRSS}{d\beta} = \sum_{i=1}^n 2(y_i - \beta x_i^2)(-x_i^2) = 0
$$

$$
\sum_{i=1}^n (y_i - \beta x_i^2)x_i^2 = 0
$$

$$
\sum_{i=1}^n y_i x_i^2 - \beta \sum_{i=1}^n x_i^4 = 0
$$

$$
\beta \sum_{i=1}^n x_i^4 = \sum_{i=1}^n y_i x_i^2
$$

$$
\hat{\beta} = \frac{\sum_{i=1}^n y_i x_i^2}{\sum_{i=1}^n x_i^4}
$$

ただし、この一意な推定量が存在するためには

$$
\sum_{i=1}^n x_i^4>0
$$

すなわち、少なくとも1つの $x_i$ が0でないことが必要である。すべての $x_i=0$ の場合、 $RSS(\beta)=\sum_i y_i^2$ は $\beta$ に依存しないため、任意の $\beta$ が最小化し、 $\beta$ は識別できない。

よって, $\sum_i x_i^4>0$ の条件下で $\beta$ の最小二乗推定量は

$$
\hat{\beta} = \frac{\sum_{i=1}^n y_i x_i^2}{\sum_{i=1}^n x_i^4}
$$
