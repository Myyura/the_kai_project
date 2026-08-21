---
sidebar_label: "2014年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2014年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

ある光源から発する光の強さ $X$ は正規分布 (normal distribution) $N(100, 4^2)$ に従っている.
光の強さを $0.5$ 倍にするフィルタがある. このフィルタを光源に付けるとフィルタを透過したあとの光の強さはどのような確率分布 (probability distribution) に従うか.

### 题目描述

某光源发出的光强 $X$ 服从正态分布

$$
X\sim N(100,4^2).
$$

现给光源安装一个使光强变为原来 $0.5$ 倍的滤光片。求光线透过滤光片后的光强所服从的概率分布。

## **Kai**

Let $X$ be the intensity of light from the source. $X$ follows a normal distribution $N(100, 4^2)$ .  This means $X \sim N(\mu = 100, \sigma^2 = 16)$ .

Let $Y$ be the intensity of light after passing through the filter. The filter reduces the intensity by a factor of $0.5$ , so $Y = 0.5X$ .

If $X \sim N(\mu, \sigma^2)$ , then $aX \sim N(a\mu, a^2\sigma^2)$ for any constant $a$ .

Therefore, $Y = 0.5X \sim N(0.5 \times 100, 0.5^2 \times 16) = N(50, 0.25 \times 16) = N(50, 4)$ .

So, the intensity of light after passing through the filter follows a normal distribution with mean 50 and variance 4, i.e., $Y \sim N(50, 2^2)$ .
