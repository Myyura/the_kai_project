---
sidebar_label: "2017年8月実施 確率・統計"
sidebar_position: 11
tags:
  - Nagoya-University
---
# 名古屋大学 情報学研究科 情報システム学専攻・知能システム学専攻 2017年8月実施 確率・統計

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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