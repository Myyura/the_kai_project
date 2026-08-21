---
sidebar_label: "2013年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2013年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数(random variable) $x$ が下記の確率密度関数(probability density function)をもつとき、 $x$ の期待値 (expectation) $E(x)$ を求めよ.

$$
f(x) = \begin{cases} 3e^{-3x} & x \geq 0 \text{ のとき} \\ 0 & x < 0 \text{ のとき} \end{cases}
$$

### 题目描述

随机变量 $x$ 的概率密度函数为

$$
f(x)=
\begin{cases}
3e^{-3x},&x\geq0,\\
0,&x<0.
\end{cases}
$$

求 $x$ 的期望 $E(x)$。

## **Kai**

期待値 $E(x)$ は、確率密度関数 $f(x)$ を用いて次のように計算できます。

$$
E(x) = \int_{-\infty}^{\infty} x f(x) dx
$$

今回の問題では、 $f(x)$ が区分的に定義されているため、積分範囲を分けて計算します。

$$
E(x) = \int_{-\infty}^{0} x \cdot 0 dx + \int_{0}^{\infty} x \cdot 3e^{-3x} dx
$$

最初の積分は0なので、

$$
E(x) = \int_{0}^{\infty} 3xe^{-3x} dx = 3\int_{0}^{\infty} xe^{-3x} dx
$$

部分積分を用いて、 $\int xe^{-3x} dx$ を計算します。
$u = x$ , $dv = e^{-3x}dx$ とすると、 $du = dx$ , $v = -\frac{1}{3}e^{-3x}$ となります。

$$
\int xe^{-3x} dx = x(-\frac{1}{3}e^{-3x}) - \int (-\frac{1}{3}e^{-3x})dx = -\frac{1}{3}xe^{-3x} + \frac{1}{3}\int e^{-3x} dx = -\frac{1}{3}xe^{-3x} - \frac{1}{9}e^{-3x} + C
$$

したがって、

$$
\int_{0}^{\infty} xe^{-3x} dx = \lim_{t \to \infty} [-\frac{1}{3}xe^{-3x} - \frac{1}{9}e^{-3x}]_0^t = \lim_{t \to \infty} [-\frac{1}{3}te^{-3t} - \frac{1}{9}e^{-3t} - (0 - \frac{1}{9})] = 0 - 0 + \frac{1}{9} = \frac{1}{9}
$$

（ここで $\lim_{t \to \infty} te^{-3t} = 0$ であることを利用しました。）

よって、

$$
E(x) = 3 \int_{0}^{\infty} xe^{-3x} dx = 3 \cdot \frac{1}{9} = \frac{1}{3}
$$

したがって、 $E(x) = \frac{1}{3}$
