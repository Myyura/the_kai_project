---
sidebar_label: "2017年8月実施 専門科目 [10]"
tags:
  - Kyushu-University
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Uniform-Endpoint-Estimation
  - Probability-Statistics.Probability-Basics.Order-Statistics
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Unbiased-Estimation
---
# 九州大学 数理学府 数理学コース 2017年8月実施 専門科目 \[10\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

原 Description 未录入文字；由现有解答可确认：$X_1,\ldots,X_n$ 相互独立且均服从区间 $[0,\theta]$ 上的均匀分布，并令

$$
\bar X=\frac1n\sum_{i=1}^nX_i,
\qquad
Z_n=\max(X_1,\ldots,X_n).
$$

1. 证明 $2\bar X$ 是 $\theta$ 的无偏估计量。
2. 求 $Z_2$ 的概率密度。
3. 求一般 $Z_n$ 的概率密度。
4. 由 $Z_n$ 构造 $\theta$ 的无偏估计量。

#### 考点

- **均匀分布端点估计**：利用 $E(X_i)=\theta/2$ 构造基于样本均值的无偏估计。
- **次序统计量**：先求样本最大值的分布函数 $P(Z_n\le z)$，再求导得到密度。
- **无偏估计**：计算 $E(Z_n)$，对最大值作比例校正以消除端点估计偏差。

## **Kai**
### (1)
$i=1,2, \cdots, n$ について、

$$
  \begin{aligned}
  E(X_i)
  &=
  \int_0^\theta x \cdot \frac{1}{\theta} dx
  \\
  &=
  \frac{1}{\theta} \left[ \frac{x^2}{2} \right]_0^\theta
  \\
  &=
  \frac{\theta}{2}
  \end{aligned}
$$

であり、

$$
  \begin{aligned}
  E(2 \bar{X})
  &=
  E \left( \frac{2}{n} \sum_{i=1}^n X_i \right)
  \\
  &=
  \frac{2}{n} \sum_{i=1}^n E(X_i)
  \\
  &=
  \frac{2}{n} \cdot n \cdot \frac{\theta}{2}
  \\
  &=
  \theta
  \end{aligned}
$$

であるから、 $2 \bar{X}$ は $\theta$ の不偏推定量である。

### (2)
$0 \leq z \lt \theta$ について、

$$
  \begin{aligned}
  P ( Z_2 \leq z )
  &=
  P ( X_1 \leq z \text{ and } X_2 \leq z )
  \\
  &=
  P ( X_1 \leq z ) P ( X_2 \leq z )
  \\
  &=
  \left( \int_0^z \frac{1}{\theta} dx \right)^2
  \\
  &=
  \left( \frac{z}{\theta} \right)^2
  \end{aligned}
$$

であるから、求める確率密度関数 $f(z)$ は、

$$
  \begin{aligned}
  f(z)
  &=
  \frac{d}{dz} P ( Z_2 \leq z )
  \\
  &=
  \frac{2z}{\theta^2}
  \end{aligned}
$$

である。
ただし、 $z \lt 0, z \gt \theta$ については、

$$
  \begin{aligned}
  f(z) = 0
  \end{aligned}
$$

である。

### (3)
$0 \leq z \lt \theta$ について、

$$
  \begin{aligned}
  P ( Z_n \leq z )
  &=
  P ( X_1 \leq z \text{ and } X_2 \leq z \text{ and } \cdots
  \text{ and } X_n \leq z )
  \\
  &=
  P ( X_1 \leq z ) P ( X_2 \leq z )
  \cdots P ( X_n \leq z )
  \\
  &=
  \left( \int_0^z \frac{1}{\theta} dx \right)^n
  \\
  &=
  \left( \frac{z}{\theta} \right)^n
  \end{aligned}
$$

であるから、求める確率密度関数 $g(z)$ は、

$$
  \begin{aligned}
  g(z)
  &=
  \frac{d}{dz} P ( Z_n \leq z )
  \\
  &=
  \frac{n z^{n-1}}{\theta^n}
  \end{aligned}
$$

である。
ただし、 $z \lt 0, z \gt \theta$ については、

$$
\begin{aligned}
g(z) = 0
\end{aligned}
$$

である。

### (4)

$$
\begin{aligned}
E(Z_n)
&=
\int_{- \infty}^\infty z g(z) dz
\\
&=
\frac{n}{\theta^n} \int_0^\theta z^n dz
\\
&=
\frac{n}{n+1} \theta
\end{aligned}
$$

であるから、

$$
\begin{aligned}
E \left( \frac{n+1}{n} Z_n \right) &= \theta
\end{aligned}
$$

であり、 $\frac{n+1}{n} Z_n$ は
$\theta$ の不偏推定量である。
