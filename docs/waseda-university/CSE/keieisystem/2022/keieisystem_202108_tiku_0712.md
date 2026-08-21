---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数(random variable) $x$ の累積分布関数 $F(x)$ (cumulative distribution function) が次式であるとき, 確率密度関数 $f(x)$ (probability density function) を求めよ。

$$
F(x) = 1 - \exp(-5x) \quad (x > 0)
$$

### 题目描述

随机变量 $x$ 的累积分布函数在 $x>0$ 时为

$$
F(x)=1-\exp(-5x).
$$

求其概率密度函数 $f(x)$，并完整写出定义域各区间上的取值。

## **Kai**

The probability density function $f(x)$ is the derivative of the cumulative distribution function $F(x)$ with respect to $x$ .

$$
f(x) = \frac{d}{dx} F(x) = \frac{d}{dx} (1 - \exp(-5x))
$$

$$
f(x) = 0 - (\exp(-5x) \cdot (-5)) = 5\exp(-5x)
$$

Since $x > 0$ , $f(x) = 5e^{-5x}$ for $x > 0$ and $f(x) = 0$ for $x \leq 0$ .
Thus,

$$
f(x) = \begin{cases} 5e^{-5x}, & x > 0 \\ 0, & x \leq 0 \end{cases}
$$
