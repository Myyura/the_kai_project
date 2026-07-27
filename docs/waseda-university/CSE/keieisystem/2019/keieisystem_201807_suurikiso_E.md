---
sidebar_label: "2018年7月実施 数理基礎 E"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Uniform-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Chi-Square-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Analysis-of-Variance
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 数理基礎 E

## **Author**
祭音Myyura

## **Description**

1. $X\sim U(0,2)$ の分散を求めよ。
2. 部品重量 $X\sim N(300,\sigma^2)$ に対し、$P(X\leq306.58)=0.95$ となる $\sigma$ を求めよ。標準正規分布の上側5％点を $1.645$ とする。
3. 独立な $X_1,\ldots,X_n\sim N(\mu,\sigma^2)$ に対し、$S=\sum_i(X_i-\bar X)^2$ とする。$S/\sigma^2$ は自由度 $n-1$ のカイ二乗分布に従う。その下側2.5％点を $a$、上側2.5％点を $b$ として、$\sigma^2$ の95％信頼区間を求めよ。
4. 4水準、各水準5反復の一元配置実験において、因子 A と誤差の自由度を求めよ。

### 题目描述

1. 随机变量 $X\sim U(0,2)$，求其方差。
2. 零件重量服从 $X\sim N(300,\sigma^2)$，且满足 $P(X\leq306.58)=0.95$。已知标准正态分布的上侧 $5\%$ 分位点为 $1.645$，求 $\sigma$。
3. 设 $X_1,\ldots,X_n$ 相互独立且均服从 $N(\mu,\sigma^2)$，并令

   $$
   S=\sum_i(X_i-\bar X)^2.
   $$

   已知 $S/\sigma^2$ 服从自由度为 $n-1$ 的卡方分布。若该分布的下侧 $2.5\%$ 分位点为 $a$、上侧 $2.5\%$ 分位点为 $b$，求 $\sigma^2$ 的 $95\%$ 置信区间。
4. 在单因素试验中，因素有 4 个水平，每个水平重复 5 次；求因素 A 与误差各自的自由度。

#### 考点

- **均匀分布**：需要由区间端点计算 $U(0,2)$ 的方差。
- **正态分布**：需要把给定重量概率标准化，并利用指定的标准正态分位点反求标准差。
- **卡方分布**：需要使用正态总体样本方差对应的卡方枢轴量及其两个尾部分位点。
- **置信区间**：需要把关于 $S/\sigma^2$ 的概率不等式转换为总体方差 $\sigma^2$ 的区间。
- **方差分析**：需要根据单因素试验的水平数、重复数和总观测数确定因素与误差自由度。

## **Kai**

### [小問 1]

区間 $(l,u)$ 上の一様分布の分散は $(u-l)^2/12$ なので

$$
\boxed{\operatorname{Var}(X)=\frac{(2-0)^2}{12}=\frac13}.
$$

### [小問 2]

標準化すると

$$
P\left(Z\leq\frac{306.58-300}{\sigma}\right)=0.95.
$$

したがって

$$
\frac{6.58}{\sigma}=1.645
$$

であり、

$$
\boxed{\sigma=4}.
$$

### [小問 3]

$$
P\left(a\leq\frac{S}{\sigma^2}\leq b\right)=0.95
$$

を $\sigma^2$ について解けば

$$
\boxed{
\frac{S}{b}\leq\sigma^2\leq\frac{S}{a}
}.
$$

したがって95％信頼区間は $[S/b,S/a]$ である。

### [小問 4]

水準数を $k=4$、全観測数を $N=4\times5=20$ とすると

$$
\boxed{\operatorname{df}(A)=k-1=3},\qquad
\boxed{\operatorname{df}(E)=N-k=16}.
$$
