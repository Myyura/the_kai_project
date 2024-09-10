---
comments: false
title: 東京大学 工学系研究科 2020年度 数学 第1問
tags:
  - Tokyo-University
---
# 東京大学 工学系研究科 2020年度 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### I.

### II.
$y=x^2-1$ として、

$$
\begin{aligned}
I
&= \int_1^\infty x^5 e^{-x^4+2x^2-1} dx
\\
&= \int_1^\infty x^5 e^{-(x^2-1)^2} dx
\\
&= \int_0^\infty (y+1)^2 e^{-y^2} \frac{dy}{2}
\\
&= \frac{1}{2} \int_0^\infty (y^2+2y+1) e^{-y^2} dy
\end{aligned}
$$

ここで、

$$
\begin{aligned}
\int_0^\infty e^{-y^2} dy &= \frac{1}{2} \sqrt{\pi}
\\
\int_0^\infty y e^{-y^2} dy
&= - \frac{1}{2} \left[ e^{-y^2} \right]_0^\infty
= \frac{1}{2}
\\
\int_0^\infty y^2 e^{-y^2} dy
&= - \frac{1}{2} \int_0^\infty y \left( e^{-y^2} \right)' dy
= - \frac{1}{2} \left[ y e^{-y^2} \right]_0^\infty
+ \frac{1}{2} \int_0^\infty e^{-y^2} dy
= \frac{1}{4} \sqrt{\pi}
\end{aligned}
$$

なので、

$$
\begin{aligned}
I = \frac{4+3\pi}{8}
\end{aligned}
$$

### III.