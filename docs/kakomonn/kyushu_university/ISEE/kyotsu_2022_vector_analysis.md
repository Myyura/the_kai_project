---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 ベクトル解析
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2022年度 ベクトル解析

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
$S_1$ 上の点は

$$
  \begin{align}
  \boldsymbol{i} \cos \varphi + y \boldsymbol{j} + \boldsymbol{k} \sin \varphi
  \ \ \ \ 
  (0 \leq \varphi \lt 2 \pi, \ \ 0 \leq y \leq 4)
  \end{align}
$$

と表せる。
$S_1$ の外向きの単位法線ベクトルを $\boldsymbol{n}$ とすると、

$$
  \begin{align}
  \boldsymbol{n}
  &= \boldsymbol{i} \cos \varphi + \boldsymbol{k} \sin \varphi
  \\
  \boldsymbol{F}
  &= \boldsymbol{i} \cos \varphi + 2y \boldsymbol{j}
  + 10 \boldsymbol{k} \sin \varphi
  \\
  \boldsymbol{F} \cdot \boldsymbol{n}
  &= \cos^2 \varphi + 10 \sin^2 \varphi
  \\
  &= \frac{11}{2} - \frac{9}{2} \cos 2 \varphi
  \end{align}
$$

なので、求める積分は

$$
  \begin{align}
  \int_{S_1} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  &= \int_0^{2 \pi} d \varphi \int_0^4 dy
  \left( \frac{11}{2} - \frac{9}{2} \cos 2 \varphi \right)
  \\
  &= 44 \pi
  \end{align}
$$

である。

### (2)
$S_2$ を次のように2つに分けて考える：

$$
  \begin{align}
  S_2' \ &: \ \ x^2 + z^2 = 1 \ \ (0 \leq y \leq 4, \ 0 \leq z)
  , \\
  S_2'' \ &: \ \ z=0 \ \ (-1 \leq x \leq 1, \ 0 \leq y \leq 4)
  .
  \end{align}
$$

$S_2'$ 上では (1) と同様に計算できる：

$$
  \begin{align}
  \int_{S_2'} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  &= \int_0^{\pi} d \varphi \int_0^4 dy
  \left( \frac{11}{2} - \frac{9}{2} \cos 2 \varphi \right)
  \\
  &= 22 \pi
  .
  \end{align}
$$

$S_2''$ 上では、外向き単位法線ベクトルは
$\boldsymbol{n} = - \boldsymbol{k}$ で、
$\boldsymbol{F} = x \boldsymbol{i} + 2y \boldsymbol{j}$ なので、
$\boldsymbol{F} \cdot \boldsymbol{n} = 0$ であり、
面積分は $0$ である。

よって、求める積分は

$$
  \begin{align}
  \int_{S_2} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  &= \int_{S_2'} dS \ \boldsymbol{F} \cdot \boldsymbol{n}
  \\
  &= 22 \pi
  \end{align}
$$

である。

### (3)
