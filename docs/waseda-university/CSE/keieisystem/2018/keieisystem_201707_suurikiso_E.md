---
sidebar_label: "2017年7月実施 数理基礎 E"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Correlation-Coefficient
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Confidence-Interval
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 数理基礎 E

## **Author**
祭音Myyura

## **Description**

1. $x=(1,2,2,3)$、$y=(1,1,2,2)$ の相関係数を求めよ。
2. $x\sim N(5,2^2)$、$y\sim N(10,3^2)$、$\operatorname{Cov}(x,y)=1$ とする。$z=x+y$ の分散を求めよ。
3. 母分散が $3^2$ の正規母集団から大きさ9の標本を得て、標本平均が12であった。母平均の95％信頼区間を求めよ。ただし標準正規分布の両側5％点には $1.96$ を用いよ。

### 题目描述

1. 给定数据

   $$
   x=(1,2,2,3),\qquad y=(1,1,2,2),
   $$

   求 $x$ 与 $y$ 的相关系数。
2. 设

   $$
   x\sim N(5,2^2),\qquad
   y\sim N(10,3^2),\qquad
   \operatorname{Cov}(x,y)=1.
   $$

   令 $z=x+y$，求 $\operatorname{Var}(z)$。
3. 从总体方差为 $3^2$ 的正态总体中抽取容量为 9 的样本，所得样本均值为 12。求总体均值的 $95\%$ 置信区间；标准正态分布双侧 $5\%$ 临界值取 $1.96$。

#### 考点

- **相关系数**：需要根据两组各含四个观测的数据计算均值、离均差平方和与离均差乘积和，从而求皮尔逊相关系数。
- **正态分布**：需要使用给定两个正态变量的方差及协方差，计算其和 $z=x+y$ 的方差；并在已知正态总体方差时处理样本均值。
- **置信区间**：需要利用已知总体标准差、样本容量、样本均值和指定的标准正态临界值构造总体均值的双侧 $95\%$ 置信区间。

## **Kai**

### [小問 1]

$\bar x=2$、$\bar y=3/2$ であり、偏差平方和と偏差積和は

$$
\sum_i(x_i-\bar x)^2=2,\qquad
\sum_i(y_i-\bar y)^2=1,\qquad
\sum_i(x_i-\bar x)(y_i-\bar y)=1.
$$

したがって相関係数は

$$
r=\frac{1}{\sqrt{2\cdot1}}
=\boxed{\frac1{\sqrt2}}.
$$

### [小問 2]

$$
\begin{aligned}
\operatorname{Var}(z)
&=\operatorname{Var}(x)+\operatorname{Var}(y)
+2\operatorname{Cov}(x,y)\\
&=4+9+2=\boxed{15}.
\end{aligned}
$$

### [小問 3]

母標準偏差が既知なので、信頼区間は

$$
\bar x\pm1.96\frac{\sigma}{\sqrt n}
=12\pm1.96\frac3{3}
=12\pm1.96.
$$

よって95％信頼区間は

$$
\boxed{[10.04,\ 13.96]}.
$$
