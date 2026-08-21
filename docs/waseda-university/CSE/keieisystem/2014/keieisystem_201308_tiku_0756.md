---
sidebar_label: "2013年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

正規分布 $N(\mu, \sigma^2)$ ( $\mu$ も $\sigma$ も未知) の母集団 (population) から 5 個のデータをランダムに採取した結果、次のような値となった。

データ: 2, 3, 3, 3, 4

このデータに基づいて、母分散 (population variance) に関する検定 (test) を行う。帰無仮説 (null hypothesis) を $H_0: \sigma^2 = 4^2$ と設定するとき、検定統計量 (test statistics) の値を求めよ。

### 题目描述

从均值 $\mu$、方差 $\sigma^2$ 均未知的正态总体 $N(\mu,\sigma^2)$ 中随机抽取 $5$ 个数据：

$$
2,\ 3,\ 3,\ 3,\ 4.
$$

现根据这些数据检验总体方差，并设原假设为

$$
H_0:\sigma^2=4^2.
$$

求该检验的检验统计量值。

## **Kai**

まず、データの平均 $\bar{x}$ を計算します。

$$
\bar{x} = \frac{2+3+3+3+4}{5} = \frac{15}{5} = 3
$$

次に、標本分散 $s^2$ を計算します。

$$
s^2 = \frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1} = \frac{(2-3)^2 + (3-3)^2 + (3-3)^2 + (3-3)^2 + (4-3)^2}{5-1} = \frac{(-1)^2 + 0^2 + 0^2 + 0^2 + 1^2}{4} = \frac{1+0+0+0+1}{4} = \frac{2}{4} = 0.5
$$

次に、検定統計量を計算します。帰無仮説 $H_0: \sigma^2 = 4^2 = 16$ の下で、検定統計量はカイ二乗分布に従います。

$$
\chi^2 = \frac{(n-1)s^2}{\sigma_0^2} = \frac{(5-1) \times 0.5}{16} = \frac{4 \times 0.5}{16} = \frac{2}{16} = \frac{1}{8} = 0.125
$$

したがって、検定統計量の値は 0.125 です。
