---
sidebar_label: "2015年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数(random variable) $X$ の確率密度関数 (probability density function) が次式であるとき、期待値(expectation) $E(X)$ を求めよ.

$$
f(x) = \begin{cases} \frac{1}{8}x & (0 \leq x \leq 4 \text{のとき}) \\ 0 & (\text{上記以外のとき}) \end{cases}
$$

### 题目描述

随机变量 $X$ 的概率密度函数为

$$
f(x)=
\begin{cases}
\dfrac18x,&0\leq x\leq4,\\
0,&\text{其他情形}.
\end{cases}
$$

求期望 $E(X)$。

## **Kai**

期待値 $E(X)$ は確率密度関数 $f(x)$ を用いて次のように計算できます。

$$
E(X) = \int_{-\infty}^{\infty} x f(x) dx
$$

この場合、 $f(x)$ は $0 \leq x \leq 4$ でのみ $\frac{1}{8}x$ であり、それ以外では 0 であるため、積分範囲は $0$ から $4$ になります。

$$
E(X) = \int_{0}^{4} x \cdot \frac{1}{8}x dx = \frac{1}{8} \int_{0}^{4} x^2 dx
$$

$$
= \frac{1}{8} \left[ \frac{1}{3}x^3 \right]_{0}^{4} = \frac{1}{8} \left( \frac{1}{3}(4^3) - \frac{1}{3}(0^3) \right)
$$

$$
= \frac{1}{8} \cdot \frac{64}{3} = \frac{8}{3}
$$

したがって、 $E(X) = \frac{8}{3}$
