---
sidebar_label: "2019年8月実施 経済数学"
tags:
  - Kyushu-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Gram-Matrix
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Moment-Generating-Function
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Binomial-to-Poisson-Convergence-via-Moment-Generating-Function
---
# 九州大学 経済学府 経済工学専攻 2019年8月実施 経済数学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

### 题目描述

本文件原 Description 为空，现有解答又缺少第 1 题 (2) 和第 2 题 (1)，且没有原题图片或链接，因此无法无虚构地恢复这两小问。其余可确认题意如下。

**第 1 题 (1)**：给定三个依赖实参数 $t$ 的三维向量 $\boldsymbol x_1,\boldsymbol x_2,\boldsymbol x_3$，以它们为列组成矩阵 $X$（原向量各分量未保存在文件中，解答仅给出 $\det X=-9t$）。

1. 求三向量线性无关时 $t$ 的条件。
2. 对 $\boldsymbol c=(a,b,c)^\top$，利用

   $$
   X^\top X\boldsymbol c
   =\begin{pmatrix}
   \boldsymbol x_1^\top(X\boldsymbol c)\\
   \boldsymbol x_2^\top(X\boldsymbol c)\\
   \boldsymbol x_3^\top(X\boldsymbol c)
   \end{pmatrix}
   $$

   说明 $X^\top X\boldsymbol c=\boldsymbol0$ 与 $X\boldsymbol c=\boldsymbol0$ 的关系。
3. 求 Gram 矩阵 $X^\top X$ 可逆时 $t$ 的条件。

**第 2 题 (2)**：

1. 对 $X\sim\operatorname{Bin}(n,p)$，求矩母函数 $E(e^{tX})$。
2. 对 $Y\sim\operatorname{Poisson}(\lambda)$，求矩母函数 $E(e^{tY})$。
3. 令 $Z_n\sim\operatorname{Bin}(n,\lambda/n)$，求 $E(e^{tZ_n})$ 的 $n\to\infty$ 极限，并由此说明二项分布向参数为 $\lambda$ 的 Poisson 分布收敛。

## **Kai**
### 問 1
#### (1)
##### (a)
$\det X = -9t$ なので、
$\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3$ が1次独立になるのは、
$t \ne 0$ のときである。

##### (b)

$$
\begin{aligned}
\boldsymbol{c} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}
\end{aligned}
$$

とすると、

$$
\begin{aligned}
X \boldsymbol{c} = a \boldsymbol{x}_1 + b \boldsymbol{x}_2 + c \boldsymbol{x}_3
\end{aligned}
$$

なので、 $X \boldsymbol{c}$ は
$\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3$ の1次結合で表される。

また、

$$
\begin{aligned}
X^T X \boldsymbol{c}
= \begin{pmatrix} \boldsymbol{x}_1^T (X \boldsymbol{c}) \\
\boldsymbol{x}_2^T (X \boldsymbol{c}) \\ \boldsymbol{x}_3^T (X \boldsymbol{c}) \end{pmatrix}
\end{aligned}
$$

と表されるので、 $X^T X \boldsymbol{c} = \boldsymbol{0}_3$ は、
$X \boldsymbol{c}$ が $\boldsymbol{x}_1, \boldsymbol{x}_2, \boldsymbol{x}_3$
のいずれとの内積も $0$ であることを意味する。

したがって、 $X^T X \boldsymbol{c} = \boldsymbol{0}_3$ ならば、
$X \boldsymbol{c} = \boldsymbol{0}_3$ である。

##### ($c$)

$$
  \begin{aligned}
  \det \left( X^T X \right)
  &= \left( \det X^T \right) \left( \det X \right)
  \\
  &= \left( \det X \right)^2
  \\
  &= 81t^2
  \end{aligned}
$$

なので、 $X^T X$ が正則なのは $t \ne 0$ のときである。

#### (2)

### 問 2
#### (1)

#### (2)
##### (a)

$$
  \begin{aligned}
  E \left[ \exp (tX) \right]
  &= \sum_{x=0}^n \exp(tx) \cdot {}_n C_x p^x (1-p)^{n-x}
  \\
  &= \sum_{x=0}^n \ {}_n C_x \left( p e^t \right)^x (1-p)^{n-x}
  \\
  &= \left( 1 - p + p e^t \right)^n
  \end{aligned}
$$

##### (b)

$$
  \begin{aligned}
  E \left[ \exp (tY) \right]
  &= \sum_{y=0}^\infty \exp(ty) \cdot \exp(- \lambda) \frac{\lambda^y}{y!}
  \\
  &= \exp(- \lambda) \sum_{y=0}^\infty \frac{\left( \lambda e^t \right)^y}{y!}
  \\
  &= \exp(- \lambda) \cdot \exp \left( \lambda e^t \right)
  \\
  &= \exp \left( \lambda \left( e^t - 1 \right) \right)
  \end{aligned}
$$

##### ($c$)
(a) より、

$$
\begin{aligned}
E \left[ \exp \left( tZ_n \right) \right]
&= \left( 1 + \frac{\lambda \left( e^t - 1 \right)}{n} \right)^n
\end{aligned}
$$

なので、

$$
\begin{aligned}
\lim_{n \to \infty} E \left[ \exp \left( tZ_n \right) \right]
&= \exp \left( \lambda \left( e^t - 1 \right) \right)
\end{aligned}
$$

である。右辺は $\operatorname{Poisson}(\lambda)$ の積率母関数であり、$t=0$ の近傍で一致するので、$Z_n$ は $\operatorname{Poisson}(\lambda)$ に分布収束する。
