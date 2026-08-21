---
sidebar_label: "2015年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数(random variable) $X$ は正規分布(normal distribution) $N(20, 2^2)$ に従い、確率変数 $Y$ は正規分布 $N(50, 3^2)$ に従い、確率変数 $Z$ は正規分布 $N(5, 1^2)$ に従う。また、これらは互いに独立である。このとき、 $W = 2X + Y - Z$ はどのような確率分布(probability distribution)に従うか(証明は不要).

### 题目描述

随机变量

$$
X\sim N(20,2^2),\qquad
Y\sim N(50,3^2),\qquad
Z\sim N(5,1^2)
$$

且三者相互独立。求

$$
W=2X+Y-Z
$$

服从什么概率分布，无需证明。

## **Kai**

Since $X$ , $Y$ , and $Z$ are independent normal random variables, $W = 2X + Y - Z$ is also a normal random variable.

The mean of $W$ is:

$$
E[W] = E[2X + Y - Z] = 2E[X] + E[Y] - E[Z] = 2(20) + 50 - 5 = 40 + 50 - 5 = 85
$$

The variance of $W$ is:

$$
Var[W] = Var[2X + Y - Z] = 2^2Var[X] + Var[Y] + (-1)^2Var[Z] = 4Var[X] + Var[Y] + Var[Z] = 4(2^2) + 3^2 + 1^2 = 4(4) + 9 + 1 = 16 + 9 + 1 = 26
$$

Therefore, $W$ follows a normal distribution with mean 85 and variance 26, i.e., $W \sim N(85, 26)$ .  Since the problem statement expects the variance in squared form, we can write it as  $N(85, (\sqrt{26})^2)$ .
