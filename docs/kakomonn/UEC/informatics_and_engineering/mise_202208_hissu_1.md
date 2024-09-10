---
comments: false
title: 電気通信大学 情報理工学研究科 機械知能システム学専攻 2022年8月実施 必須問題（数学）問1
tags:
  - University-of-Electro-Communications 
---
# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2022年8月実施 必須問題（数学）問1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)
$x = r \cos \theta, y = r \sin \theta$ とおくと、

$$
  \begin{aligned}
  \frac{dx}{d \theta}
  &= \frac{dr}{d \theta} \cos \theta - r \sin \theta
  \\
  &= a \cos \theta - r \sin \theta
  \\
  \frac{dy}{d \theta}
  &= \frac{dr}{d \theta} \sin \theta + r \cos \theta
  \\
  &= a \sin \theta + r \cos \theta
  \end{aligned}
$$

であり、$\theta = \pi/2$ のとき

$$
  \begin{aligned}
  r &= \frac{\pi a}{2}
  \\
  \frac{dx}{d \theta} &= - \frac{\pi a}{2}
  \\
  \frac{dy}{d \theta} &= a
  \\
  \frac{dy}{dx} &= \frac{\frac{dy}{d \theta}}{\frac{dy}{d \theta}} = - \frac{2}{\pi}
  \end{aligned}
$$

である。よって、求める接線の傾きは $-2/\pi$ である。

### (2)

$$
  \begin{aligned}
  \iint_D x e^{y^3} dx dy
  &= \int_0^1 dy e^{y^3} \int_0^y dx x
  \\
  &= \frac{1}{2} \int_0^1 dy e^{y^3} y^2
  \\
  &= \frac{1}{6} \int_0^1 dz e^z
  \ \ \ \ \ \ \ \ (z = y^3)
  \\
  &= \frac{1}{6} \left[ e^z \right]_0^1
  \\
  &= \frac{e-1}{6}
  \end{aligned}
$$

### (3)
まず、

$$
  \begin{align}
  \frac{d^2 y}{dx^2} - 4 \frac{dy}{dx} + 4y = 0
  \tag{a} \label{a}
  \end{align}
$$

に $y=e^{\lambda x}$ （ $\lambda$ は $x$ によらない定数）を代入すると、

$$
  \begin{aligned}
  (\lambda-2)^2 &= 0
  \\
  \therefore \ \ 
  \lambda &= 2
  \end{aligned}
$$

となるので、微分方程式 ($\ref{a}$) の一般解は

$$
  \begin{aligned}
  y = Ae^{2x} + Bxe^{2x}
  \ \ \ \ \ \ \ \ \text{($A,B$ は任意定数)}
  \end{aligned}
$$

である。

また、与えられた微分方程式に $y=C x^2 e^{2x}$ （ $C$ は $x$ によらない定数）を代入すると、
$C=1/2$ を得るので、 $y=(1/2)x^2e^{2x}$ は特殊解である。
以上より、与えられた微分方程式の一般解は

$$
  \begin{aligned}
  y = Ae^{2x} + Bxe^{2x} + \frac{1}{2} x^2 e^{2x}
  \ \ \ \ \ \ \ \ \text{($A,B$ は任意定数)}
  \end{aligned}
$$

である。