---
sidebar_label: "2019年度 数理科学 I [5]"
sidebar_position: 4
tags:
  - Osaka-University
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年度 数理科学 I \[5\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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