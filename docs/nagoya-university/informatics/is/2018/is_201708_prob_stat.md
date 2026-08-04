---
sidebar_label: "2017年8月実施 確率・統計"
tags:
  - Nagoya-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Poisson-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Normal-Distribution
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2017年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原文的题目描述缺失，无法从当前文件完整还原全部题干。根据现有解答，可确认的问题范围如下。

1. 某事件在 10 分钟内的发生次数服从均值为 $5$ 的泊松分布，求其恰好发生 3 次的概率。
2. 第 \[2\] 题的题干与解答均缺失，现有资料不足以还原。
3. 设 $X$ 服从正态分布 $N(\mu,\sigma^2)$：
   1. 求 $X$ 的矩母函数 $M_X(t)$；
   2. 对与 $X$ 独立且同分布的随机变量 $Y$，令 $Z=X+Y$，利用矩母函数求 $Z$ 的分布。

## **Kai**
### \[1\]
10分間でその事象が発生する確率の確率分布は、平均5のポアソン分布である。
よって、3回発生する確率は、

$$
  \begin{aligned}
  \frac{5^3 e^{-5}}{3!}
  &\approx
  0.14
  \end{aligned}
$$

である。

### \[2\]

### \[3\]
#### (1)
求めるモーメント母関数 $M_X(t)$ は、

$$
\begin{aligned}
M_X(t)
&=
E \left[ e^{tX} \right]
\\
&=
\frac{1}{\sqrt{2 \pi} \sigma}
\int_{- \infty}^\infty e^{tx} e^{- \frac{(x - \mu)^2}{2 \sigma^2}} dx
\\
&=
\frac{1}{\sqrt{2 \pi} \sigma}
\int_{- \infty}^\infty
e^{ - \frac{x^2 - 2 ( \mu + \sigma^2 t ) x + \mu^2}{2 \sigma^2}}
dx
\\
&=
e^{\mu t + \frac{\sigma^2 t^2}{2}} \cdot
\frac{1}{\sqrt{2 \pi} \sigma}
\int_{- \infty}^\infty
e^{- \frac{(x - (\mu + \sigma^2 t))^2}{2 \sigma^2}} dx
\\
&=
e^{\mu t + \frac{\sigma^2 t^2}{2}}
\end{aligned}
$$

となる。

#### (2)
求めるモーメント母関数 $M_Z(t)$ は、

$$
\begin{aligned}
M_Z(t)
&=
E \left[ e^{tZ} \right]
\\
&=
E \left[ e^{t(X+Y)} \right]
\\
&=
E \left[ e^{tX} \right] E \left[ e^{tY} \right]
\\
&=
e^{\mu t + \frac{\sigma^2 t^2}{2}}
\cdot
e^{\mu t + \frac{\sigma^2 t^2}{2}}
\\
&=
e^{2 \mu t + \sigma^2 t^2}
\end{aligned}
$$

となる。
したがって、
$Z$ は正規分布 $N(2 \mu, 2 \sigma^2)$ に従うことがわかる。
