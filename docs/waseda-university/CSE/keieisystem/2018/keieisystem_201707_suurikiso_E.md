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
