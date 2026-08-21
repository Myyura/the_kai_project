---
sidebar_label: "2022年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2022年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

母集団分布 (population distribution) は正規分布 (normal distribution) $N(\mu, 2^2)$ であるとする。この母集団からランダムに4個のデータを採取したところ、次のようになった。

5, 7, 9, 11

母平均 (population mean) $\mu$ を信頼率 (confidence coefficient) 95\% で区間推定 (interval estimation) せよ。なお、標準正規分布 (standard normal distribution) の両側 5% 点は $\pm 1.96$ である。

### 题目描述

设总体服从正态分布

$$
N(\mu,2^2).
$$

从中随机抽取 $4$ 个数据：

$$
5,\ 7,\ 9,\ 11.
$$

以 $95\%$ 的置信水平对总体均值 $\mu$ 作区间估计。标准正态分布的双侧 $5\%$ 临界值为 $\pm1.96$。

## **Kai**

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
