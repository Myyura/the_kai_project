---
sidebar_label: "2022年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2022年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3水準の一元配置実験 (one-way layout experiment) を行った。各水準の繰り返し数 (number of replication) は5である。各水準において得られたデータの合計は10, 20, 30となった。このとき, 水準間の平方和 (sum of squares) と自由度 (degrees of freedom) を求めよ。

### 题目描述

进行一个含 $3$ 个水平的单因素配置实验，每个水平重复 $5$ 次。三个水平下所得数据的总和分别为

$$
10,\ 20,\ 30.
$$

求水平间平方和及其自由度。

## **Kai**

Let $n$ be the number of levels, and $r$ be the number of replications.
Here, $n = 3$ and $r = 5$ .
Let $T_i$ be the sum of the data at level $i$ .
Given $T_1 = 10, T_2 = 20, T_3 = 30$ .
The total number of observations is $N = nr = 3 \times 5 = 15$ .
The grand total is $G = T_1 + T_2 + T_3 = 10 + 20 + 30 = 60$ .
The correction factor (CF) is given by

$$
CF = \frac{G^2}{N} = \frac{60^2}{15} = \frac{3600}{15} = 240
$$

The sum of squares between levels (SSB) is given by

$$
SSB = \sum_{i=1}^n \frac{T_i^2}{r} - CF = \frac{T_1^2}{r} + \frac{T_2^2}{r} + \frac{T_3^2}{r} - CF
$$

$$
SSB = \frac{10^2}{5} + \frac{20^2}{5} + \frac{30^2}{5} - 240 = \frac{100}{5} + \frac{400}{5} + \frac{900}{5} - 240 = 20 + 80 + 180 - 240 = 280 - 240 = 40
$$

The degrees of freedom between levels (dfB) is given by

$$
dfB = n - 1 = 3 - 1 = 2
$$

Therefore, the sum of squares between levels is 40, and the degrees of freedom between levels is 2.

Answer:
水準間の平方和 (Sum of Squares) = 40
自由度 (Degrees of Freedom) = 2
