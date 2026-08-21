---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[3] 確率密度関数 $f_X(x)$ が

$$
f_X(x) = \beta x^{\beta-1} \quad (0 < x < 1)
$$

で与えられている確率分布からの無作為標本を $(X_1, \dots, X_n)$ とする。ただし、 $0 < \beta < \infty$ である。
このとき、以下の問いに答えよ。

(1) $E[\ln(X)]$ を $\beta$ を用いて表せ。

(2) $\theta = \frac{1}{\beta}$ としたとき、 $\theta$ の最尤推定量 $\hat{\theta}$ を示せ。

(3) $\hat{\theta}$ が $\theta$ の不偏推定量となるか否か示せ。

### 题目描述

【3】设 $(X_1,\dots,X_n)$ 是来自下列概率分布的随机样本：

$$
f_X(x)=\beta x^{\beta-1}\qquad(0<x<1),
$$

其中 $0<\beta<\infty$。回答下列问题。

（1）用 $\beta$ 表示 $E[\ln(X)]$。

（2）令

$$
\theta=\frac1\beta.
$$

求 $\theta$ 的最大似然估计量 $\hat{\theta}$。

（3）判断并说明 $\hat{\theta}$ 是否为 $\theta$ 的无偏估计量。

## **Kai**

(1)

$$
E[\ln(X)] = \int_0^1 \ln(x) f_X(x) dx = \int_0^1 \ln(x) \beta x^{\beta - 1} dx
$$

令 $u = \ln(x)$ , $dv = \beta x^{\beta - 1} dx$ , 则 $du = \frac{1}{x} dx$ , $v = x^{\beta}$ .
所以，

$$
E[\ln(X)] = [\ln(x) x^{\beta}]_0^1 - \int_0^1 x^{\beta} \frac{1}{x} dx = [\ln(x) x^{\beta}]_0^1 - \int_0^1 x^{\beta - 1} dx
$$

$$
= (\ln(1) \cdot 1^{\beta} - \lim_{x \to 0} \ln(x) x^{\beta}) - [\frac{x^{\beta}}{\beta}]_0^1
$$

$$
= 0 - 0 - (\frac{1}{\beta} - 0) = -\frac{1}{\beta}
$$

因此， $E[\ln(X)] = -\frac{1}{\beta}$ .

(2) 似然函数为:

$$
L(\beta) = \prod_{i=1}^n f_X(x_i) = \prod_{i=1}^n \beta x_i^{\beta - 1} = \beta^n (\prod_{i=1}^n x_i)^{\beta - 1}
$$

取对数:

$$
\ln L(\beta) = n \ln(\beta) + (\beta - 1) \sum_{i=1}^n \ln(x_i)
$$

对 $\beta$ 求导数:

$$
\frac{\partial \ln L(\beta)}{\partial \beta} = \frac{n}{\beta} + \sum_{i=1}^n \ln(x_i) = 0
$$

因此，

$$
\frac{n}{\beta} = -\sum_{i=1}^n \ln(x_i) \implies \hat{\beta} = -\frac{n}{\sum_{i=1}^n \ln(x_i)}
$$

因为 $\theta = \frac{1}{\beta}$ , 所以

$$
\hat{\theta} = \frac{1}{\hat{\beta}} = -\frac{\sum_{i=1}^n \ln(x_i)}{n} = -\frac{1}{n} \sum_{i=1}^n \ln(x_i)
$$

(3)

$$
E[\hat{\theta}] = E[-\frac{1}{n} \sum_{i=1}^n \ln(X_i)] = -\frac{1}{n} \sum_{i=1}^n E[\ln(X_i)] = -\frac{1}{n} \sum_{i=1}^n (-\frac{1}{\beta}) = \frac{1}{n} \frac{n}{\beta} = \frac{1}{\beta} = \theta
$$

所以 $\hat{\theta}$ 是 $\theta$ 的不偏推定量.
