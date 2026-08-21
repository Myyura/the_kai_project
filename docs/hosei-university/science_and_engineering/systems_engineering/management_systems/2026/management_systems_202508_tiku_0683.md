---
sidebar_label: "2025年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2025年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数Xに対し、 $E[X^k] \equiv \mu_k < \infty (k = 1,2,\cdots)$ という条件の下で $E[(X-c)^2]$ を考える。このとき、以下の問いに答えよ。

(1) $E[(X-c)^2]$ を最小とする定数 $c$ を適切なモーメントを用いて表せ。

(2) (1)の結果を用いて $E[(X-c)^2]$ の最小値を適切なモーメントを用いて表せ。

### 题目描述

对随机变量 $X$，假设

$$
E[X^k]\equiv\mu_k<\infty
\qquad(k=1,2,\dots),
$$

并考虑 $E[(X-c)^2]$。回答下列问题。

（1）用适当的矩表示使 $E[(X-c)^2]$ 最小的常数 $c$。

（2）利用（1）的结果，用适当的矩表示 $E[(X-c)^2]$ 的最小值。

## **Kai**

(1)  To minimize $E[(X-c)^2]$ , we take the derivative with respect to $c$ and set it to zero.

$$
\frac{d}{dc} E[(X-c)^2] = E[\frac{d}{dc}(X-c)^2] = E[2(X-c)(-1)] = -2E[X-c] = -2(E[X] - c)
$$

Setting the derivative to zero:

$$
-2(E[X] - c) = 0
$$

$$
E[X] - c = 0
$$

$$
c = E[X]
$$

Since $E[X] = \mu_1$ , we have $c = \mu_1$ .

(2) Now we substitute $c = E[X] = \mu_1$ into $E[(X-c)^2]$ to find the minimum value:

$$
E[(X - E[X])^2] = E[(X - \mu_1)^2] = E[X^2 - 2X\mu_1 + \mu_1^2] = E[X^2] - 2\mu_1E[X] + \mu_1^2
$$

Since $E[X^2] = \mu_2$ and $E[X] = \mu_1$ , we have:

$$
E[(X - \mu_1)^2] = \mu_2 - 2\mu_1^2 + \mu_1^2 = \mu_2 - \mu_1^2
$$

Thus, the minimum value of $E[(X-c)^2]$ is $\mu_2 - \mu_1^2$ .
