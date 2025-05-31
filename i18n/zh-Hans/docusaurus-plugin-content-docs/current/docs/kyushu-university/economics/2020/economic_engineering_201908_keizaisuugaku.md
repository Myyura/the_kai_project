---
sidebar_label: "2019年8月実施 経済数学"
tags:
  - Kyushu-University
---
# 九州大学 経済学府 経済工学専攻 2019年8月実施 経済数学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

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

##### (\(c\))

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

##### (\(c\))
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

である。