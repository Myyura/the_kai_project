---
sidebar_label: "2024年8月実施 数学A 1"
tags:
  - Tohoku-University
---
# 東北大学 工学研究科 機械系 2024年8月実施 数学A 1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
以下の問いに答えよ。

(1) 次の極限値を求めよ。

$$
\lim_{x \to 0} \frac{e^x - \cos x}{2 \tan x}
$$

(2) 次の積分を求めよ。

$$
\int_{0}^{\infty} xe^{-2x}dx
$$

(3) $x^2 + 2y^2 - 1 = 0$ のとき $x - 2y$ の極値を求めよ。

## **Kai**
### (1)

$$
  \begin{aligned}
  \lim_{x \to 0} \frac{e^x - \cos x}{2 \tan x}
  &=
  \frac{1}{2} \lim_{x \to 0} \frac{e^x + \sin x}{\frac{1}{\cos^2 x}}
  \\
  &=
  \frac{1}{2}
  \end{aligned}
$$

### (2)

$$
  \begin{aligned}
  \int_0^\infty x e^{-2x} \ dx
  &= 
  - \frac{1}{2} \left[ x e^{-2x} \right]_0^\infty
  + \frac{1}{2} \int_0^\infty e^{-2x} \ dx
  \\
  &= 
  - \frac{1}{4} \left[ e^{-2x} \right]_0^\infty
  \\
  &= 
  \frac{1}{4}
  \end{aligned}
$$

### (3)
$x^2+2y^2-1=0$ より

$$
  \begin{aligned}
  x = \cos \theta, \ \ y = \frac{1}{\sqrt{2}} \sin \theta
  \ \ \ \ ( 0 \leq \theta \lt 2 \pi )
  \end{aligned}
$$

と書けるので、$f=x-2y$ は

$$
  \begin{aligned}
  f
  &= x - 2y
  \\
  &= \cos \theta - \sqrt{2} \sin \theta
  \\
  &= \sqrt{3} \sin (\theta + \alpha)
  &( 0 \leq \alpha \lt 2 \pi )
  \end{aligned}
$$

と書ける。

よって、 $f=x-2y$ の極小値は $- \sqrt{3}$ で極大値は $\sqrt{3}$ である。