---
comments: false
title: 九州大学 数理学府 数理学コース 2018年度 専門科目 [10]
tags:
  - Kyushu-University
---
# 九州大学 数理学府 数理学コース 2018年度 専門科目 \[10\]

## **Author**
Miyake

## **Description**

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