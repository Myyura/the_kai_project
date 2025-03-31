---
sidebar_label: "2020年度 数学 (3)"
sidebar_position: 3
tags:
  - Osaka-University
---
# 大阪大学 工学研究科 環境・エネルギー工学科 2020年度 数学 (3)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (a)
#### (i)
$\bar{X}$ の標準偏差は、

$$
\begin{aligned}
\frac{\sigma_x}{\sqrt{16}} = \frac{\sigma_x}{4}
\end{aligned}
$$

なので、 $\sigma_x$ の0.5倍以上ずれるということは、
標準偏差の2倍以上ずれるということであり、
その確率は約0.02である。

#### (ii)
標本数を増やすと、 $\bar{X}$ の標準偏差が減少するから。

#### (iii)
$\bar{X}$ の期待値は $X$ で分散は $\sigma_x^2 / M $ であり、
$\bar{Y}$ の期待値は $Y$ で分散は $\sigma_y^2 / N $ であり、
$\bar{X}$ と $\bar{Y}$ は独立である。
よって、 $\bar{X} \bar{Y}$ の分散は、

$$
\begin{aligned}
V \left( \bar{X} \bar{Y} \right)
&=
E \left( \bar{X}^2 \bar{Y}^2 \right)
- E \left( \bar{X} \bar{Y} \right)^2
\\
&=
E \left( \bar{X}^2 \right) E \left( \bar{Y}^2 \right)
- E \left( \bar{X} \right)^2 E \left(\bar{Y} \right)^2
\\
&=
\left( \sigma_x^2 + X^2 \right) \left( \sigma_y^2 + Y^2 \right)
- X^2 Y^2
\\
&=
\sigma_x^2 \sigma_y^2 + \sigma_x^2 Y^2 + \sigma_y^2 X^2
\end{aligned}
$$

であり、標準偏差は、

$$
\begin{aligned}
\sqrt{\sigma_x^2 \sigma_y^2 + \sigma_x^2 Y^2 + \sigma_y^2 X^2}
\end{aligned}
$$

である。

### (b)

### (\(c\))
#### (i)

$$
\begin{aligned}
P ( A \mid H_k )
=
\frac{P(A \cap H_k)}{P(H_k)}
\end{aligned}
$$

#### (ii)

$$
\begin{aligned}
P(A)
&=
\sum_{k=1}^K P ( A \cap H_k )
\\
&=
\sum_{k=1}^K P ( A \mid H_k ) P(H_k)
\end{aligned}
$$

#### (iii)

$$
\begin{aligned}
P ( H_k \mid A )
&=
\frac{P(A \cap H_k)}{P(A)}
\\
&=
\frac{P ( A \mid H_k ) P(H_k)}
{\sum_{l=1}^K P ( A \mid H_l ) P(H_l)}
\end{aligned}
$$