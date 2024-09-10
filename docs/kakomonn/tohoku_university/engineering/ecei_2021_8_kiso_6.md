---
comments: false
title: 東北大学 工学研究科 電気・情報系 2021年8月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 電気・情報系 2021年8月実施 基礎科目 問題6 数学基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)

### (2)
#### (a)

$$
\begin{aligned}
a_0
&=
\frac{1}{\pi} \int_0^{2 \pi} x dx
\\
&=
\frac{1}{\pi} \left[ \frac{x^2}{2} \right]_0^{2 \pi}
\\
&= 2 \pi
\end{aligned}
$$

#### (b)

$$
\begin{aligned}
a_n
&=
\frac{1}{\pi} \int_0^{2 \pi} x \cos nx dx
\\
&=
\frac{1}{n \pi} \left[ x \sin nx \right]_0^{2 \pi}
- \frac{1}{n \pi} \int_0^{2 \pi} \sin nx dx
\\
&= 0
\\
b_n
&=
\frac{1}{\pi} \int_0^{2 \pi} x \sin nx dx
\\
&=
- \frac{1}{n \pi} \left[ x \cos nx \right]_0^{2 \pi}
+ \frac{1}{n \pi} \int_0^{2 \pi} \cos nx dx
\\
&=
- \frac{2}{n}
\end{aligned}
$$

#### (c)
(a), (b) より、 $0 \lt x \lt 2 \pi$ のとき、

$$
\begin{aligned}
x
&= \pi + \sum_{n=1}^\infty \left( - \frac{2}{n} \right) \sin nx
\\
&= \pi - 2 \sum_{n=1}^\infty \frac{\sin nx}{n}
\end{aligned}
$$

したがって、

$$
\begin{aligned}
\sum_{n=1}^\infty \frac{\sin nx}{n}
= \frac{\pi - x}{2}
\end{aligned}
$$

が成り立つことがわかる。