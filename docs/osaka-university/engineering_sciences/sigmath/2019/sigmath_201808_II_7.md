---
sidebar_label: "2018年8月実施 数理科学 II [7]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Minimum-of-Independent-Exponentials
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Maximum-Likelihood-Estimation
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Constrained-Maximum-Likelihood-Estimation
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2018年8月実施 数理科学 II \[7\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 参考問題

独立な確率変数 $X,Y$ が $x,y\ge0$ において密度

$$
f_X(x\mid\lambda)=\lambda e^{-\lambda x},\qquad
f_Y(y\mid\lambda)=\lambda^{-1}e^{-y/\lambda}
$$

を持つ場合を考える。$\lambda\ge1$ とし、$Z=\min(X,Y)$、$\mu=\lambda+\lambda^{-1}$ と置く。

1. $Z$ の密度、期待値、分散を求める。
2. $Z$ の独立な観測値 $z_1,\ldots,z_n$ とその平均 $\bar z$ から、$\mu$ の最尤推定量を求める。
3. $\lambda\ge1$ の下での $\lambda$ の最尤推定量を求め、$\bar z\le1/2$ と $\bar z>1/2$ に分けて考える。

### 题目描述

设 $X,Y$ 相互独立，且

$$
f_X(x\mid\lambda)=\lambda e^{-\lambda x},\qquad
f_Y(y\mid\lambda)=\lambda^{-1}e^{-y/\lambda}
$$

对 $x,y\ge0$ 成立；参数满足 $\lambda\ge1$。令

$$
Z=\min(X,Y).
$$

1. 求 $Z$ 的概率密度、期望与方差。可令

   $$
   \mu=\lambda+\lambda^{-1}.
   $$

2. 给定 $Z$ 的独立观测 $z_1,\ldots,z_n$，用样本均值 $\bar z$ 表示 $\mu$ 的最大似然估计。
3. 在约束 $\lambda\ge1$ 下求 $\lambda$ 的最大似然估计，并分别讨论 $\bar z\le1/2$ 与 $\bar z>1/2$。

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

である。$\bar z>0$ とすると、制約を課さない最大点は $1/\bar z$ である。また、$\lambda\ge1$ より $\mu=\lambda+\lambda^{-1}\ge2$ なので、$\mu$ の最尤推定量 $\hat{\mu}$ は、

$$
  \begin{aligned}
  \hat{\mu} = \max\left\{2,\frac{1}{\bar{z}}\right\}
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

ただし、これは $0<\bar{z} \leq 1/2$ のときであり、
$\bar{z} \gt 1/2$ のときは、

$$
  \begin{aligned}
  \hat{\lambda} = 1
  \end{aligned}
$$

である。

なお、$\bar z=0$（観測値がすべて $0$）の場合は、尤度が $\mu^n$ となり、$\mu\to\infty$ で際限なく増加する。そのため有限の $\hat\mu,\hat\lambda$ は存在しない。この例外は、ここでの連続分布の下では確率 $0$ である。
