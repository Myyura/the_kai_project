---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[1] 確率密度関数 $f_X(x)$ を持つ非負の確率変数 $X$ に対し, $0 < p < 1$ なる実数 $p$ が与えられたとき、

$$
p = \int_0^{x_p} f_X(x) dx
$$

を満たす値 $x_p$ を考える. このとき、

$$
x_p \leq \frac{1}{1-p} E[X]
$$

が成り立つことを示せ.

### 题目描述

【1】设非负随机变量 $X$ 的概率密度函数为 $f_X(x)$。给定实数 $p$，其中 $0<p<1$，考虑满足

$$
p=\int_0^{x_p}f_X(x)\,dx
$$

的值 $x_p$。证明

$$
x_p\le\frac{1}{1-p}E[X].
$$

## **Kai**

証明:

$X$ は非負の確率変数であるため， $x f_X(x) \geq 0$ を満たす.

$E[X] = \int_0^{\infty} x f_X(x) dx$ と表せる.

ここで, $\int_{x_p}^{\infty} f_X(x) dx = 1 - \int_0^{x_p} f_X(x) dx = 1 - p$ である.

よって, $E[X] = \int_0^{x_p} x f_X(x) dx + \int_{x_p}^{\infty} x f_X(x) dx$ である.

$\int_0^{x_p} x f_X(x) dx \geq 0$ なので, $E[X] \geq \int_{x_p}^{\infty} x f_X(x) dx$

また, $x \geq x_p$ に対して, $\int_{x_p}^{\infty} x f_X(x) dx \geq \int_{x_p}^{\infty} x_p f_X(x) dx = x_p \int_{x_p}^{\infty} f_X(x) dx = x_p (1-p)$

したがって, $E[X] \geq x_p (1-p)$

$1-p > 0$ なので, $x_p \leq \frac{E[X]}{1-p}$ が成り立つ.

以上より,

$$
x_p \leq \frac{1}{1-p} E[X]
$$

が成り立つ.
