---
sidebar_label: "2016年7月実施 数理基礎 E"
tags:
  - Waseda-University
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Simple-Linear-Regression
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2016年7月実施 数理基礎 E

## **Author**
祭音Myyura

## **Description**

### [小問 E1]

単回帰モデル

$$
y_i=\beta_0+\beta_1x_i+\varepsilon_i
$$

を仮定する。誤差は互いに独立に $N(0,\sigma^2)$ に従う。データ

| $i$ | 1 | 2 | 3 |
| --- | ---: | ---: | ---: |
| $x_i$ | -1 | 0 | 1 |
| $y_i$ | -2 | -1 | 3 |

から $\beta_0,\beta_1$ を推定せよ。

### [小問 E2]

部品Qの横の長さが $N(20,2^2)$ に従う。独立に $9$ 個選び、横につないで作るユニットの横の長さの分布を求めよ。

### [小問 E3]

統計的仮説検定における第1種の誤りと第2種の誤りを説明せよ。

## **Kai**

### [小問 E1]

$\bar x=0,\ \bar y=0$ なので、最小二乗推定量は

$$
\begin{aligned}
\hat\beta_1
&=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}
{\sum_i(x_i-\bar x)^2}\\
&=\frac{(-1)(-2)+0(-1)+1(3)}{(-1)^2+0^2+1^2}
=\frac52,\\
\hat\beta_0
&=\bar y-\hat\beta_1\bar x=0.
\end{aligned}
$$

したがって

$$
\boxed{\hat\beta_0=0,\qquad \hat\beta_1=\frac52}.
$$

### [小問 E2]

各部品の長さを $X_i$ とすると、独立な正規確率変数の和も正規分布に従う。よって

$$
\sum_{i=1}^9X_i
\sim N\left(9\cdot20,\ 9\cdot2^2\right)
=\boxed{N(180,6^2)}.
$$

### [小問 E3]

- 第1種の誤り：帰無仮説 $H_0$ が真であるのに、$H_0$ を棄却する誤り。その確率を有意水準 $\alpha$ として制御する。
- 第2種の誤り：帰無仮説 $H_0$ が偽であるのに、$H_0$ を棄却しない誤り。その確率を $\beta$ といい、$1-\beta$ は検出力である。
