---
sidebar_label: "2022年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2022年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の確率密度関数 (probability density function) を考える。

$$
f(x) = \begin{cases}
\frac{x}{2} & 0 < x < 2 \\
0 & \text{上記以外}
\end{cases}
$$

この確率分布 (probability distribution) に従う確率変数 (random variable) $X$ の期待値 (expectation) $E(X)$ と分散 (variance) $V(X)$ を求めよ。

### 题目描述

概率密度函数为

$$
f(x)=
\begin{cases}
\dfrac{x}{2},&0<x<2,\\
0,&\text{其他情形}.
\end{cases}
$$

若随机变量 $X$ 服从该分布，求期望 $E(X)$ 和方差 $V(X)$。

## **Kai**

まず、期待値 $E(X)$ を求めます。

$$
E(X) = \int_{-\infty}^{\infty} x f(x) dx = \int_{0}^{2} x \cdot \frac{x}{2} dx = \frac{1}{2} \int_{0}^{2} x^2 dx = \frac{1}{2} \left[ \frac{x^3}{3} \right]_0^2 = \frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}
$$

次に、 $E(X^2)$ を求めます。

$$
E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) dx = \int_{0}^{2} x^2 \cdot \frac{x}{2} dx = \frac{1}{2} \int_{0}^{2} x^3 dx = \frac{1}{2} \left[ \frac{x^4}{4} \right]_0^2 = \frac{1}{2} \cdot \frac{16}{4} = 2
$$

最後に、分散 $V(X)$ を求めます。

$$
V(X) = E(X^2) - (E(X))^2 = 2 - \left( \frac{4}{3} \right)^2 = 2 - \frac{16}{9} = \frac{18 - 16}{9} = \frac{2}{9}
$$

したがって、
$E(X) = \frac{4}{3}$ 、
$V(X) = \frac{2}{9}$ 。
