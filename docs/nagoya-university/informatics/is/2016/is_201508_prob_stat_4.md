---
sidebar_label: "2015年8月実施 確率・統計 [4]"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2015年8月実施 確率・統計 [4]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ある町で収穫されたリンゴの重さの母平均 $\mu$ [g] を推定したい、但し、母標準偏差は 50 [g] であるとわかっている。また、標準正規分布を $f(x)$ としたとき、

$$
\int_{-1.96}^{1.96} f(x) dx = 0.95
$$

とする。これについて、以下の問いに答えよ。

(1) 無作為に抽出した 100 個の標本の重さの平均は 350 [g] であった。 $\mu$ の 95\% の信頼区間を示せ。

(2) 95\% の信頼区間の幅が 7 [g] 以下になるように $\mu$ を推定するには、何個以上の標本を抽出する必要があるか答えよ。

### 题目描述

拟估计某城镇所产苹果重量的总体均值 $\mu$（单位：g），已知总体标准差为 $50$ g。设 $f(x)$ 为标准正态分布的概率密度函数，并给定

$$
\int_{-1.96}^{1.96}f(x)\,dx=0.95.
$$

1. 随机抽取 $100$ 个苹果，样本平均重量为 $350$ g。求 $\mu$ 的 $95\%$ 置信区间；
2. 若要求 $\mu$ 的 $95\%$ 置信区间宽度不超过 $7$ g，至少需要抽取多少个样本？

## **Kai**

(1) 95%の信頼区間は、標本平均 $\bar{x}$ を用いて、

$$
\bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}}
$$

で与えられる。ここで、 $\bar{x} = 350$ , $\sigma = 50$ , $n = 100$ , $z_{\alpha/2} = 1.96$ (95%信頼区間なので).

したがって、

$$
350 \pm 1.96 \times \frac{50}{\sqrt{100}} = 350 \pm 1.96 \times 5 = 350 \pm 9.8
$$

95%信頼区間は [340.2, 359.8] [g] である。

(2) 信頼区間の幅は

$$
2 \times z_{\alpha/2} \frac{\sigma}{\sqrt{n}}
$$

で与えられる。これが 7 [g] 以下になるように $n$ を決定する。

$$
2 \times 1.96 \times \frac{50}{\sqrt{n}} \leq 7
$$

$$
\sqrt{n} \geq \frac{2 \times 1.96 \times 50}{7} = \frac{196}{7} = 28
$$

$$
n \geq 28^2 = 784
$$

したがって、784個以上の標本を抽出する必要がある。
