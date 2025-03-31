---
sidebar_label: "2020年度 数理科学 I [6]"
sidebar_position: 1
tags:
  - Osaka-University
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2020年度 数理科学 I \[6\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)
まず、

$$
  \begin{aligned}
  \Gamma(1)
  = \int_0^\infty e^{-x} dx
  = - \left[ e^{-x} \right]_0^\infty
  = 1
  \end{aligned}
$$

  であるから、 $n \Gamma(n) = \Gamma(n+1)$ と合わせて、

$$
  \begin{aligned}
  \Gamma(n) = (n-1)!
  \end{aligned}
$$

がわかる。

そこで、次のように計算できる：

$$
  \begin{aligned}
  P(X=x)
  &=
  \int_0^\infty P(X=x | Y=y) f(y) dy
  \\
  &=
  \int_0^\infty \frac{y^x}{x!} e^{-y}
  \frac{1}{(n-1)!} \beta^n y^{n-1} e^{- \beta y} dy
  \\
  &=
  \frac{\beta^n}{x! (n-1)!}
  \int_0^\infty y^{x+n-1} e^{- (\beta + 1) y} dy
  \\
  &=
  \frac{1}{x! (n-1)!} \left( \frac{1-p}{p} \right)^n
  \int_0^\infty y^{x+n-1} e^{- y/p} dy
  \\
  &=
  \frac{1}{x! (n-1)!} \left( \frac{1-p}{p} \right)^n p^{x+n}
  \int_0^\infty z^{x+n-1} e^{- z} dz
  \ \ \ \ \ \ \ \ (z = y/p)
  \\
  &=
  \frac{(x+n-1)!}{x! (n-1)!} p^x (1-p)^n
  \\
  &=
  \begin{pmatrix} x+n-1 \\ x \end{pmatrix} p^x (1-p)^n
  .
  \end{aligned}
$$

### (2)
$X$ の期待値 $E(X)$ は次のように計算できる：

$$
  \begin{aligned}
  E(X)
  &=
  \sum_{x=0}^\infty x P(X=x)
  \\
  &=
  \sum_{x=0}^\infty x
  \frac{(x+n-1)!}{x! (n-1)!} p^x (1-p)^n
  \\
  &=
  \sum_{x=1}^\infty
  \frac{(x+n-1)!}{(x-1)! (n-1)!} p^x (1-p)^n
  \\
  &=
  \sum_{z=0}^\infty
  \frac{(z+n)!}{z! (n-1)!} p^{z+1} (1-p)^n
  \ \ \ \ \ \ \ \ (z=x-1)
  \\
  &=
  \frac{np}{1-p} \sum_{z=0}^\infty
  \frac{(z+n)!}{z! \ n!} p^z (1-p)^{n+1}
  \\
  &=
  \frac{np}{1-p}
  .
  \end{aligned}
$$

### (3)
求める条件付き期待値 $E(Y|X=x)$ は次のように計算できる：

$$
  \begin{aligned}
  E(Y|X=x)
  &=
  \int_0^\infty y \frac{P(X=x | Y=y) f(y)}{P(X=x)} dy
  \\
  &=
  \int_0^\infty y
  \frac{\frac{y^x}{x!} e^{-y} \frac{1}{(n-1)!}
  \beta^n y^{n-1} e^{- \beta y}}
  {\frac{(x+n-1)!}{x!(n-1)!} p^x (1-p)^n}
  dy
  \\
  &=
  \frac{\beta^n}{(x+n-1)! \ p^x (1-p)^n}
  \int_0^\infty y^{x+n} e^{-y/p} dy
  \\
  &=
  \frac{\beta^n p^{x+n+1}}{(x+n-1)! \ p^x (1-p)^n}
  \int_0^\infty z^{x+n} e^{-z} dz
  \ \ \ \ \ \ \ \ (z=y/p)
  \\
  &=
  \frac{p^{x+n+1}}{(x+n-1)! \ p^x (1-p)^n}
  \left( \frac{1-p}{p} \right)^n
  (x+n)!
  \\
  &=
  (x+n) p
  .
  \end{aligned}
$$