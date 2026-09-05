---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Simple-Linear-Regression
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

既知の入力 $x_i$ ( $i=1,\dots,n$ ) に対して未知の出力 $Y_i$ ( $i = 1,\dots,n$ )が観測されるという状況の下、

$$
Y_i = \alpha + \beta x_i + \epsilon_i
$$

という単回帰モデルを考える。ただし、 $\epsilon_i \sim N(0,\sigma^2)$ とする。このとき、以下の問いに答えよ.

(1) $E[Y_i]$ を求めよ.

(2) ある推定量 $B$ が

$$
B = \frac{\sum_{i=1}^n (x_i - \bar{x})Y_i}{\sum_{i=1}^n x_i^2 - n\bar{x}^2}
$$

で与えられるとき、推定量 $B$ が $\beta$ の不偏推定量となることを示せ。

(3) ある推定量 $A$ が(2)の推定量 $B$ を用いて

$$
A = \sum_{i=1}^n \frac{Y_i}{n} - B\bar{x}
$$

のように表されるとき,推定量 $A$ が $\alpha$ の不偏推定量となることを示せ。

### 题目描述

在已知输入 $x_i\ (i=1,\dots,n)$、观测未知输出 $Y_i\ (i=1,\dots,n)$ 的情形下，考虑简单线性回归模型

$$
Y_i=\alpha+\beta x_i+\epsilon_i,
$$

其中 $\epsilon_i\sim N(0,\sigma^2)$。回答下列问题。

（1）求 $E[Y_i]$。

（2）给定估计量

$$
B=
\frac{\sum_{i=1}^n(x_i-\bar{x})Y_i}
{\sum_{i=1}^nx_i^2-n\bar{x}^2},
$$

证明 $B$ 是 $\beta$ 的无偏估计量。

（3）使用（2）的估计量 $B$ 定义

$$
A=\sum_{i=1}^n\frac{Y_i}{n}-B\bar{x}.
$$

证明 $A$ 是 $\alpha$ 的无偏估计量。

## **Kai**

以下の (2), (3) では $S_{xx}=\sum_{i=1}^n(x_i-\bar{x})^2>0$、すなわち $x_i$ がすべて同じ値ではないことを仮定する。 $S_{xx}=0$ では、提示された $B$ は分母が $0$ となり定義できない。

(1)

$$
\begin{aligned}
E[Y_i] &= E[\alpha + \beta x_i + \epsilon_i] \\
&= E[\alpha] + E[\beta x_i] + E[\epsilon_i] \\
&= \alpha + \beta x_i + 0 \\
&= \alpha + \beta x_i
\end{aligned}
$$

(2)

$$
\begin{aligned}
E[B] &= E\left[\frac{\sum_{i=1}^n (x_i - \bar{x})Y_i}{\sum_{i=1}^n x_i^2 - n\bar{x}^2}\right] \\
&= \frac{\sum_{i=1}^n (x_i - \bar{x})E[Y_i]}{\sum_{i=1}^n x_i^2 - n\bar{x}^2} \\
&= \frac{\sum_{i=1}^n (x_i - \bar{x})(\alpha + \beta x_i)}{\sum_{i=1}^n x_i^2 - n\bar{x}^2} \\
&= \frac{\alpha \sum_{i=1}^n (x_i - \bar{x}) + \beta \sum_{i=1}^n (x_i - \bar{x})x_i}{\sum_{i=1}^n x_i^2 - n\bar{x}^2} \\
&= \frac{0 + \beta \sum_{i=1}^n (x_i - \bar{x})x_i}{\sum_{i=1}^n x_i^2 - n\bar{x}^2} \\
&= \frac{\beta \sum_{i=1}^n (x_i^2 - \bar{x}x_i)}{\sum_{i=1}^n x_i^2 - n\bar{x}^2} \\
&= \frac{\beta (\sum_{i=1}^n x_i^2 - \bar{x} \sum_{i=1}^n x_i)}{\sum_{i=1}^n x_i^2 - n\bar{x}^2} \\
&= \frac{\beta (\sum_{i=1}^n x_i^2 - n\bar{x}^2)}{\sum_{i=1}^n x_i^2 - n\bar{x}^2} \\
&= \beta
\end{aligned}
$$

よって、 $B$ は $\beta$ の不偏推定量である。

(3)

$$
\begin{aligned}
E[A] &= E\left[\sum_{i=1}^n \frac{Y_i}{n} - B\bar{x}\right] \\
&= \frac{1}{n} \sum_{i=1}^n E[Y_i] - E[B]\bar{x} \\
&= \frac{1}{n} \sum_{i=1}^n (\alpha + \beta x_i) - \beta\bar{x} \\
&= \frac{1}{n} (n\alpha + \beta \sum_{i=1}^n x_i) - \beta\bar{x} \\
&= \alpha + \beta \bar{x} - \beta\bar{x} \\
&= \alpha
\end{aligned}
$$

よって、 $A$ は $\alpha$ の不偏推定量である。
