---
sidebar_label: "2018年8月実施 数理科学 I [5]"
tags:
  - Osaka-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Minimum-Variance-Estimator-with-Equicorrelated-Samples
  - Mathematics.Calculus.Constrained-Optimization
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2018年8月実施 数理科学 I \[5\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文题干缺失。设随机变量 $X_1,\ldots,X_n$ 满足
$$
E[X_i]=\mu,\qquad V[X_i]=\sigma^2,\qquad
\operatorname{Cov}(X_i,X_j)=\theta\quad(i\ne j).
$$
对系数向量 $\alpha=(\alpha_1,\ldots,\alpha_n)$，定义线性统计量
$$T(\alpha)=\sum_{i=1}^n\alpha_iX_i.$$

1. 求 $E[T(\alpha)]$ 以及
   $\operatorname{Cov}(T(\alpha),T(\beta))$。
2. 求 $V[T(\alpha)]$。
3. 在 $T(\alpha)$ 是 $\mu$ 的无偏估计量的约束下，求使方差最小的 $\alpha$，并给出最小方差。

#### 考点

- **线性统计量的矩**：利用期望线性性和协方差双线性展开。
- **等相关模型**：分离对角方差项与非对角协方差项。
- **无偏估计**：由系数和等于 1 得到约束。
- **最小方差线性无偏估计**：用 Lagrange 乘数法证明等权样本均值最优。

## **Kai**
### (1)

$$
  \begin{aligned}
  E [ T(\alpha) ]
  &= \sum_{i=1}^n \alpha_i E[X_i]
  \\
  &= \mu \sum_{i=1}^n \alpha_i
  \\
  \text{Cov} [ T(\alpha), T(\beta) ]
  &= \sum_{i=1}^n \sum_{j=1}^n \alpha_i \beta_j \text{Cov} [X_i, X_j]
  \\
  &= \sum_{i=1}^n \alpha_i \beta_i V [X_i]
  + \sum_{i \neq j} \alpha_i \beta_j \text{Cov} [X_i, X_j]
  \\
  &= \sigma^2 \sum_{i=1}^n \alpha_i \beta_i
  + \theta \sum_{i \neq j} \alpha_i \beta_j
  \\
  &= \left( \sigma^2 - \theta \right) \sum_{i=1}^n \alpha_i \beta_i
  + \theta \sum_{i=1}^n \sum_{j=1}^n \alpha_i \beta_j
  \\
  &= \left( \sigma^2 - \theta \right) \sum_{i=1}^n \alpha_i \beta_i
  + \theta \sum_{i=1}^n \alpha_i \sum_{j=1}^n \beta_j
  \end{aligned}
$$

### (2)

$$
  \begin{aligned}
  V[T(\alpha)]
  &= \text{Cov} [ T(\alpha), T(\alpha) ]
  \\
  &= \left( \sigma^2 - \theta \right) \sum_{i=1}^n \alpha_i^2
  + \theta \sum_{i=1}^n \alpha_i \sum_{j=1}^n \alpha_j
  \\
  &= \left( \sigma^2 - \theta \right) \sum_{i=1}^n \alpha_i^2
  + \theta \left\{ \sum_{i=1}^n \alpha_i \right\}^2
  \end{aligned}
$$

### (3)
$T(\alpha)$ が $\mu$ の不偏推定量であるための条件は、(1) より、

$$
  \begin{aligned}
  \sum_{i=1}^n \alpha_i = 1
  \end{aligned}
$$

であり、このとき、

$$
  \begin{aligned}
  V[T(\alpha)]
  = \left( \sigma^2 - \theta \right) \sum_{i=1}^n \alpha_i^2
  + \theta
  \end{aligned}
$$

となる。

これを最小化するために、
ラグランジュの未定乗数 $\lambda$ を導入して、

$$
  \begin{aligned}
  f(\alpha)
  = \sum_{i=1}^n \alpha_i^2 - \lambda \sum_{i=1}^n \alpha_i
  \end{aligned}
$$

を考えると、

$$
  \begin{aligned}
  \frac{\partial f}{\partial \alpha_i}
  = 2 \alpha_i - \lambda
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \alpha_1 = \alpha_2 = \cdots = \alpha_n = \frac{1}{n}
  , \ \ 
  \lambda = \frac{2}{n}
  \end{aligned}
$$

のとき、 $f(\alpha)$ したがって $V[T(\alpha)]$ が最小になる。

このとき、

$$
  \begin{aligned}
  V[T(\alpha)]
  &= \left( \sigma^2 - \theta \right) \cdot \frac{1}{n} + \theta
  \\
  &= \frac{\sigma^2 + (n-1) \theta}{n}
  \end{aligned}
$$

である。
