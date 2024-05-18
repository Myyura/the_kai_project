---
comments: false
title: 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年度 数理科学 II [7]
tags:
  - Osaka-University
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年度 数理科学 II \[7\]

## **Author**
Miyake

## **Description**

## **Kai**
### (1)
まず、確率を $P$ で表すと、

$$
  \begin{aligned}
  P(a \leq X \leq b)
  &= \int_a^b f(x|\lambda) dx
  \\
  &= \lambda \int_a^b \exp ( -\lambda x) dx
  \\
  &= \exp(-\lambda a) - \exp(-\lambda b)
  \\
  P(a \leq Y \leq b)
  &= \exp \left( - \frac{a}{\lambda} \right)
  - \exp \left( -\frac{b}{\lambda} \right)
  \end{aligned}
$$

である。

そこで、 $Z$ の確率分布関数を $G(z)$ とすると、

$$
  \begin{aligned}
  G(z)
  &= P(Z \leq z)
  \\
  &= P(X \leq z \text{ and } Y \leq z)
  + P(X \leq z \leq Y) + P(Y \leq z \leq X)
  \\
  &= P(X \leq z) P(Y \leq z)
  + P(X \leq z) P(z \leq Y) + P(Y \leq z) P(z \leq X)
  \\
  &=
  \left( 1 - \exp (- \lambda z) \right)
  \left( 1 - \exp \left(- \frac{z}{\lambda} \right) \right)
  +
  \left( 1 - \exp (- \lambda z) \right)
  \exp \left(- \frac{z}{\lambda} \right)
  +
  \left( 1 - \exp \left(- \frac{z}{\lambda} \right) \right)
  \exp (- \lambda z)
  \end{aligned}
$$

となるから、 $Z$ の確率密度関数 $g(z)$ は、

$$
  \begin{aligned}
  g(z)
  &=
  \frac{d G(z)}{dz}
  \\
  &= \left( \lambda + \lambda^{-1} \right)
  \exp \left( - \left( \lambda + \lambda^{-1} \right) z \right)
  \\
  &= \mu \exp \left( - \mu z \right)
  \end{aligned}
$$

となる。ここで、 $\mu = \lambda + \lambda^{-1}$ とした。

よって、平均を $E$, 分散を $V$ で表すと、

$$
  \begin{aligned}
  E[Z]
  &= \int_0^\infty z g(z) dz
  \\
  &= \mu \int_0^\infty z \exp \left( - \mu z \right) dz
  \\
  &= \frac{1}{\mu}
  = \frac{1}{\lambda + \lambda^{-1}}
  \\
  E[Z^2]
  &= \int_0^\infty z^2 g(z) dz
  \\
  &= \mu \int_0^\infty z^2 \exp \left( - \mu z \right) dz
  \\
  &= \frac{2}{\mu^2}
  = \frac{2}{\left( \lambda + \lambda^{-1} \right)^2}
  \\
  V[Z]
  &= E[Z^2] - E[Z]^2
  \\
  &= \frac{1}{\mu^2}
  = \frac{1}{\left( \lambda + \lambda^{-1} \right)^2}
  \end{aligned}
$$

を得る。

### (2)
$Z$ の観測値を $z_1, z_2, \cdots, z_n$ とし、
その平均を

$$
  \begin{aligned}
  \bar{z} = \frac{1}{n} \sum_{i=1}^n z_i
  \end{aligned}
$$

とする。

対数尤度関数 $l$ は、

$$
  \begin{aligned}
  l
  &=
  \sum_{i=1}^n \log g(z_i)
  \\
  &=
  \sum_{i=1}^n
  \log \left( \mu \exp \left( - \mu z_i \right) \right)
  \\
  &=
  n \log \mu - \mu \sum_{i=1}^n z_i
  \\
  &=
  n \log \mu - \mu n \bar{z}
  \\
  \therefore \ \ 
  \frac{dl}{d \mu}
  &=
  \frac{n}{\mu} - n \bar{z}
  \end{aligned}
$$

であるから、
$\mu$ の最尤推定量 $\hat{\mu}$ は、

$$
  \begin{aligned}
  \hat{\mu} = \frac{1}{\bar{z}}
  \end{aligned}
$$

であることがわかる。

### (3)

$$
  \begin{aligned}
  \frac{d \mu}{d \lambda}
  &= 1 - \frac{1}{\lambda^2}
  \end{aligned}
$$

であるから、 $\lambda \gt 1$ において、
$\mu$ は $\lambda$ の単調増加関数である。
よって、 $\lambda$ の最尤推定量 $\hat{\lambda}$ は、

$$
  \begin{aligned}
  \hat{\lambda} + \frac{1}{\hat{\lambda}} = \hat{\mu}
  \end{aligned}
$$

を満たし、

$$
  \begin{aligned}
  \hat{\lambda}
  &= \frac{1}{2} \left( \hat{\mu} + \sqrt{\hat{\mu}^2 - 4} \right)
  \\
  &= \frac{1}{2} \left(
  \frac{1}{\bar{z}} + \sqrt{\frac{1}{\bar{z}^2} - 4} \right)
  \end{aligned}
$$

を得る。

ただし、これは $\bar{z} \leq 1/2$ のときであり、
$\bar{z} \gt 1/2$ のときは、

$$
  \begin{aligned}
  \hat{\lambda} = 1
  \end{aligned}
$$

である。