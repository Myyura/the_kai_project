---
comments: false
description: 東京大学 大学院 工学系研究科 2020年度 数学 第1問
keywords: Tokyo-University, 2020-8
---

## Source
[東京大学 大学院 工学系研究科 2020年度 数学 第1問](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## Description

## Kai
### I.

### II.
$y=x^2-1$ として、

$$
\begin{align}
I
&= \int_1^\infty x^5 e^{-x^4+2x^2-1} dx
\\
&= \int_1^\infty x^5 e^{-(x^2-1)^2} dx
\\
&= \int_0^\infty (y+1)^2 e^{-y^2} \frac{dy}{2}
\\
&= \frac{1}{2} \int_0^\infty (y^2+2y+1) e^{-y^2} dy
\end{align}
$$

ここで、

$$
\begin{align}
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
\end{align}
$$

なので、

$$
\begin{align}
I = \frac{4+3\pi}{8}
\end{align}
$$

### III.