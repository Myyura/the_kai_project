---
sidebar_label: "2015年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

正規分布(normal distribution) $N(\mu, \sigma^2)$ ( $\mu$ も $\sigma$ も未知)の母集団(population)から $n=4$ 個のデータをランダムに採取した結果、次のような値となった。

$1, 4, 4, 7$

これらのデータに基づいて、母平均(population mean)についての検定(test)を行う。帰無仮説(null hypothesis)を $H_0: \mu = 2.0$ , 対立仮説(alternative hypothesis)を $H_1: \mu > 2.0$ と設定するとき、自由度(degrees of freedom) $n-1$ の $t$ 分布 ( $t$ distribution) に従う検定統計量(test statistic) $t_0$ の値を計算せよ。平方根はそのまま残してよい。

### 题目描述

从均值 $\mu$、方差 $\sigma^2$ 均未知的正态总体 $N(\mu,\sigma^2)$ 中随机抽取 $n=4$ 个数据：

$$
1,\ 4,\ 4,\ 7.
$$

根据这些数据检验总体均值，设

$$
H_0:\mu=2.0,\qquad H_1:\mu>2.0.
$$

计算服从自由度 $n-1$ 的 $t$ 分布的检验统计量 $t_0$；结果中的平方根可以保留。

## **Kai**

まず、標本平均 $\bar{x}$ を計算する。

$$
\bar{x} = \frac{1 + 4 + 4 + 7}{4} = \frac{16}{4} = 4
$$

次に、不偏分散 $s^2$ を計算する。

$$
s^2 = \frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1} = \frac{(1-4)^2 + (4-4)^2 + (4-4)^2 + (7-4)^2}{4-1} = \frac{(-3)^2 + 0^2 + 0^2 + 3^2}{3} = \frac{9 + 0 + 0 + 9}{3} = \frac{18}{3} = 6
$$

標本標準偏差 $s$ は $s = \sqrt{s^2} = \sqrt{6}$ となる。

次に、検定統計量 $t_0$ を計算する。

$$
t_0 = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{4 - 2}{\sqrt{6} / \sqrt{4}} = \frac{2}{\sqrt{6} / 2} = \frac{4}{\sqrt{6}} = \frac{4\sqrt{6}}{6} = \frac{2\sqrt{6}}{3}
$$

したがって、検定統計量 $t_0$ の値は $\frac{2\sqrt{6}}{3}$ である。
