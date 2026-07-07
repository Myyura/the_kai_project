---
sidebar_label: "2018年7月実施 数理基礎 E"
tags:
  - Waseda-University
  - Probability-Statistics.Fundamentals.Uniform-Distribution
  - Probability-Statistics.Fundamentals.Normal-Distribution
  - Probability-Statistics.Fundamentals.Chi-Square-Distribution
  - Probability-Statistics.Statistical-Inference.Confidence-Interval
  - Probability-Statistics.Statistical-Inference.ANOVA
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2018年7月実施 数理基礎 E

## **Author**
祭音Myyura

## **Description**

1. $X\sim U(0,2)$ の分散を求めよ。
2. 部品重量 $X\sim N(300,\sigma^2)$ に対し、$P(X\leq306.58)=0.95$ となる $\sigma$ を求めよ。標準正規分布の上側5％点を $1.645$ とする。
3. 独立な $X_1,\ldots,X_n\sim N(\mu,\sigma^2)$ に対し、$S=\sum_i(X_i-\bar X)^2$ とする。$S/\sigma^2$ は自由度 $n-1$ のカイ二乗分布に従う。その下側2.5％点を $a$、上側2.5％点を $b$ として、$\sigma^2$ の95％信頼区間を求めよ。
4. 4水準、各水準5反復の一元配置実験において、因子 A と誤差の自由度を求めよ。

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
