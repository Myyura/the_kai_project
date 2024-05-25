---
comments: false
title: 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年度 数理基礎
tags:
  - Waseda-University
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2023年度 数理基礎

## **Author**
Miyake

## **Description**

## **Kai**
### \[A\]
#### \[小問 A1\]
$x \gt 0$ のとき $f(x) \gt 0$ であり、次のように計算できる：

$$
  \begin{aligned}
  f(x) &= \left( \frac{1}{2x} \right)^x
  \\
  \log f(x) &= - x \log 2x
  \\
  \frac{f'(x)}{f(x)} &= - \log 2x - 1
  \\
  \therefore \ \ 
  f'(x) &= - f(x) \left( \log 2x + 1 \right)
  \\
  &= - \left( \frac{1}{2x} \right)^x \left( \log 2x + 1 \right)
  \end{aligned}
$$

#### \[小問 A2\]

$$
  \begin{aligned}
  \int_2^3 \frac{\log x}{(x-1)^2} dx
  &= \left[ - \frac{\log x}{x-1} \right]_2^3 + \int_2^3 \frac{1}{x(x-1)} dx
  \\
  &= - \frac{\log 3}{2} + \log 2
  + \int_2^3 \left( \frac{1}{x-1} - \frac{1}{x} \right) dx
  \\
  &= - \frac{\log 3}{2} + \log 2 + \left[ \log (x-1) - \log x \right]_2^3
  \\
  &= - \frac{3}{2} \log 3 + 3 \log 2
  \end{aligned}
$$

#### \[小問 A3\]
極座標 $(r, \theta)$ を導入して、

$$
  \begin{aligned}
  x = r \cos \theta, \ y = r \sin \theta
  \ \ \ \ (r \geq 0, 0 \leq \theta \lt 2 \pi)
  \end{aligned}
$$

と書く。$x^2 + xy + y^2 = 3$ は、

$$
  \begin{aligned}
  r^2 + \frac{1}{2} r^2 \sin 2 \theta &= 3
  \\
  \therefore \ \ 
  r^2 &= \frac{6}{\sin 2 \theta + 2}
  \end{aligned}
$$

と書けるので、求める最短距離は $\sqrt{2}$ 、最長距離は $\sqrt{6}$ である。

### \[B\]

### \[C\]