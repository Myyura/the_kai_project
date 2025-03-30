---
sidebar_label: "情報理工学コース 2022年8月実施 専門科目1 問3 (確率・統計)"
sidebar_position: 1
tags:
  - Hokkaido-University
---
# 北海道大学 情報科学院 情報科学専攻 情報理工学コース 2022年8月実施 専門科目1 問3 (確率・統計)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[1\]
#### (1)
$x=2$ における $F(x)$ の連続性より、

$$
\begin{aligned}
k \cdot 2^3 &= 1
\\
\therefore \ \ 
k &= \frac{1}{8}
\end{aligned}
$$

がわかる。

#### (2)

$$
  \begin{aligned}
  P \left( 0 \lt X \leq 1 \right)
  &= F(1) - F(0)
  \\
  &= \frac{1}{8}
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  f(x)
  &= \frac{d}{dx} F(x)
  \\
  &= \begin{cases} 0 &(x \lt 0) \\
  \frac{3}{8} x^2 &(0 \leq x \lt 2) \\
  0 &(2 \leq 2) \end{cases}
  \end{aligned}
$$

#### (4)

#### (5)

$$
  \begin{aligned}
  \mathrm{E} \left[ X \right]
  &= \int_{-\infty}^\infty x f(x) dx
  \\
  &= \frac{3}{8} \int_0^2 x^3 dx
  \\
  &= \frac{3}{8} \left[ \frac{x^4}{4} \right]_0^2
  \\
  &= \frac{3}{2}
  \\
  \mathrm{E} \left[ X^2 \right]
  &= \int_{-\infty}^\infty x^2 f(x) dx
  \ \ \ \ \ \ \ \ \left( X^2 \text{ の期待値 } \right)
  \\
  &= \frac{3}{8} \int_0^2 x^4 dx
  \\
  &= \frac{3}{8} \left[ \frac{x^5}{5} \right]_0^2
  \\
  &= \frac{12}{5}
  \\
  \mathrm{Var} \left[ X \right]
  &= \mathrm{E} \left[ X^2 \right] - \mathrm{E} \left[ X \right]^2
  \\
  &= \frac{3}{20}
  \end{aligned}
$$

### \[2\]
$X_1, X_2, \cdots, X_n$ は独立であり、

$$
  \begin{aligned}
  \mathrm{E} \left[ X_i \right] = \mu
  , \ \ 
  \mathrm{E} \left[ X_i^2 \right] = \sigma^2 + \mu^2
  \ \ \ \ \ \ \ \ (i = 1, 2, \cdots, n)
  \end{aligned}
$$

である。

#### (1)

$$
  \begin{aligned}
  \mathrm{E} \left[ \bar{X} \right]
  &= \frac{1}{n} \sum_{i=1}^n \mathrm{E} \left[ X_i \right]
  \\
  &= \mu
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \mathrm{E} \left[ \left( \bar{X} \right)^2 \right]
  &= \frac{1}{n^2} \sum_{i=1}^n \sum_{j=1}^n \mathrm{E} \left[ X_i X_j \right]
  \\
  &= \frac{1}{n^2} \left( \sum_{i=1}^n \mathrm{E} \left[ X_i^2 \right]
  + \sum_{i,j \ (i \ne j)} \mathrm{E} \left[ X_i X_j \right] \right)
  \\
  &= \frac{1}{n^2} \left( \sum_{i=1}^n \mathrm{E} \left[ X_i^2 \right]
  + \sum_{i,j \ (i \ne j)} \mathrm{E} \left[ X_i \right]
  \mathrm{E} \left[ X_j \right] \right)
  \\
  &= \frac{1}{n^2} \left( n \left( \sigma^2 + \mu^2 \right)
  + \left( n^2 - n \right) \mu^2 \right)
  \\
  &= \frac{\sigma^2}{n} + \mu^2
  \end{aligned}
$$

#### (3)

$$
  \begin{aligned}
  T_1
  &= \frac{1}{n-1} \sum_{i=1}^n \left( X_i - \bar{X} \right)^2
  \\
  &= \frac{1}{n-1} \sum_{i=1}^n
  \left( X_i^2 - 2 \bar{X} X_i + \left( \bar{X} \right)^2 \right)
  \\
  &= \frac{1}{n-1}
  \left( \sum_{i=1}^n X_i^2 - n \left( \bar{X} \right)^2 \right)
  \\
  &= \frac{1}{n-1} \sum_{i=1}^n X_i^2
  - \frac{n}{n-1} \left( \bar{X} \right)^2
  \\
  \therefore \ \ 
  \mathrm{E} \left[ T_1 \right]
  &= \frac{1}{n-1} \sum_{i=1}^n \mathrm{E} \left[ X_i^2 \right]
  - \frac{n}{n-1} \mathrm{E} \left[ \left( \bar{X} \right)^2 \right]
  \\
  &= \frac{n}{n-1} \left( \sigma^2 + \mu^2 \right)
  - \frac{n}{n-1} \left( \frac{\sigma^2}{n} + \mu^2 \right)
  \\
  &= \sigma^2
  \end{aligned}
$$

#### (4)

$$
  \begin{aligned}
  T_2
  &= \left( \bar{X} \right)^2 - \frac{1}{n} T_1
  \\
  \therefore \ \ 
  \mathrm{E} \left[ T_2 \right]
  &= \mathrm{E} \left[ \left( \bar{X} \right)^2 \right]
  - \frac{1}{n} \mathrm{E} \left[ T_1 \right]
  \\
  &= \frac{\sigma^2}{n} + \mu^2 - \frac{1}{n} \sigma^2
  \\
  &= \mu^2
  \end{aligned}
$$

#### (5)
