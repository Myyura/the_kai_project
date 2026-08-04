---
sidebar_label: "社会工学学位プログラム 2022年8月実施 数学I"
tags:
  - Tsukuba-University
  - Mathematics.Calculus.Gamma-Function
---
# 筑波大学 理工情報生命学術院 システム情報工学研究群 社会工学学位プログラム 2022年8月実施 数学I

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

当前文件的原始题目描述为空，无法从现有内容中完整复原各小问的具体条件与要求。根据文件标签及下方解答可以确认，本题包含与伽马函数有关的微积分问题；解答中使用了伽马函数的积分定义

$$
\Gamma(s)=\int_0^\infty x^{s-1}e^{-x}\,dx
$$

并对 $\Gamma\!\left(\frac12\right)$ 作变量代换，将其化为高斯积分。作答时应以原试卷给出的各小问为准，说明广义积分的变换过程、收敛性及所需的伽马函数性质。

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
