---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数Xがポアソン分布に従うとする。ポアソン分布の確率関数は次の通りである。

$$
p(x) = \frac{\lambda^x}{x!} \exp(-\lambda)
$$

このとき、期待値 $E[X(X-1)]$ を求めよ。

### 题目描述

设随机变量 $X$ 服从泊松分布，其概率质量函数为

$$
p(x)=\frac{\lambda^x}{x!}\exp(-\lambda),
\qquad x=0,1,2,\ldots.
$$

求阶乘矩

$$
E[X(X-1)].
$$

## **Kai**

解：

$$
E[X(X-1)] = \sum_{x=0}^{\infty} x(x-1) p(x)
$$

$$
= \sum_{x=0}^{\infty} x(x-1) \frac{\lambda^x}{x!} e^{-\lambda}
$$

注意： $x=0$ と $x=1$ の時、 $x(x-1)=0$ 。だから、和は $x=2$ から始まる。

$$
= \sum_{x=2}^{\infty} x(x-1) \frac{\lambda^x}{x!} e^{-\lambda}
$$

$$
= e^{-\lambda} \sum_{x=2}^{\infty} \frac{x(x-1) \lambda^x}{x(x-1)(x-2)!}
$$

$$
= e^{-\lambda} \sum_{x=2}^{\infty} \frac{\lambda^x}{(x-2)!}
$$

$$
= e^{-\lambda} \lambda^2 \sum_{x=2}^{\infty} \frac{\lambda^{x-2}}{(x-2)!}
$$

$y=x-2$ とおくと、 $x=2$ の時、 $y=0$ 。だから、和は $y=0$ から始まる。

$$
= e^{-\lambda} \lambda^2 \sum_{y=0}^{\infty} \frac{\lambda^y}{y!}
$$

$$
= e^{-\lambda} \lambda^2 e^{\lambda}
$$

$$
= \lambda^2
$$

したがって、

$$
E[X(X-1)] = \lambda^2
$$
