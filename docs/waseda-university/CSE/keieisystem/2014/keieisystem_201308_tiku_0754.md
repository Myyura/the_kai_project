---
sidebar_label: "2013年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数(random variable) $u$ が標準正規分布(standard normal distribution) $N(0,1^2)$ に従うとき、 $u$ が $1.645$ 以上になる確率は $0.05$ である。このことを用いて、確率変数 $x$ が正規分布 $N(5,10^2)$ に従うとき、 $x$ が $a$ 以上になる確率が $0.05$ となる $a$ の値を求めよ。

### 题目描述

已知标准正态随机变量 $u\sim N(0,1^2)$ 满足

$$
P(u\geq1.645)=0.05.
$$

随机变量 $x\sim N(5,10^2)$。求使

$$
P(x\geq a)=0.05
$$

成立的 $a$。

## **Kai**

確率変数 $x$ が $N(5, 10^2)$ に従うとき、 $z = \frac{x - 5}{10}$ は標準正規分布 $N(0, 1^2)$ に従います。

問題文より、 $P(u \geq 1.645) = 0.05$ であるから、 $P(x \geq a) = 0.05$ となる $a$ を求めます。

$P(x \geq a) = P(\frac{x - 5}{10} \geq \frac{a - 5}{10}) = P(z \geq \frac{a - 5}{10}) = 0.05$ より、

$\frac{a - 5}{10} = 1.645$ となります。

したがって、 $a - 5 = 1.645 \times 10 = 16.45$ なので、 $a = 5 + 16.45 = 21.45$ です。

よって、 $a = 21.45$ が求める値です。
