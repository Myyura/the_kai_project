---
sidebar_label: "2022年8月実施 数学 I"
sidebar_position: 1
tags:
  - Tsukuba-University
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 社会工学学位プログラム 2022年8月実施 数学 I

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[1\]

### \[2\]
#### (2.1)

$$
  \begin{aligned}
  \Gamma \left( \frac{1}{2} \right)
  &= \int_0^\infty x^{-\frac{1}{2}} e^{-x} dx
  \\
  &= \int_0^\infty t^{-1} e^{-t^2} 2tdt
  \ \ \ \ \ \ \ \ (t=\sqrt{x})
  \\
  &= 2 \int_0^\infty e^{-t^2} dt
  \\
  &= \sqrt{\pi}
  \end{aligned}
$$

#### (2.2)

$$
  \begin{aligned}
  \Gamma \left( s+1 \right)
  &= \int_0^\infty x^s e^{-x} dx
  \\
  &= - \left[ x^s e^{-x} \right]_0^\infty + s \int_0^\infty x^{s-1} e^{-x} dx
  \\
  &= s \Gamma (s)
  \end{aligned}
$$

#### (2.3)
(2.1), (2.2) から

$$
  \begin{aligned}
  \Gamma \left( 1 + \frac{1}{2} \right)
  &= \frac{1}{2} \Gamma \left( \frac{1}{2} \right)
  \\
  &= \frac{1}{2} \sqrt{\pi}
  \\
  \Gamma \left( 2 + \frac{1}{2} \right)
  &= \frac{3}{2} \Gamma \left( \frac{3}{2} \right)
  \\
  &= \frac{3}{2} \cdot \frac{1}{2} \sqrt{\pi}
  \\
  \Gamma \left( 3 + \frac{1}{2} \right)
  &= \frac{5}{2} \Gamma \left( \frac{5}{2} \right)
  \\
  &= \frac{5}{2} \cdot \frac{3}{2} \cdot \frac{1}{2} \sqrt{\pi}
  \end{aligned}
$$

がわかり、自然数 $n$ について

$$
  \begin{aligned}
  \Gamma \left( n + \frac{1}{2} \right)
  &= \frac{\prod_{k=1}^n (2k-1)}{2^n} \sqrt{\pi}
  \end{aligned}
$$

が成り立つことがわかる。