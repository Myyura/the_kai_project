---
sidebar_label: "2024年8月実施 数学A 2"
tags:
  - Tohoku-University
  - Linear-Algebra
---
# 東北大学 工学研究科 機械系 2024年8月実施 数学A 2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
行列 $A$ が

$$
A = \begin{pmatrix}
  a & 1- a \\ 1+a & -a
\end{pmatrix}
$$

により与えられる。ただし、$a$ は定数である。$n$ を正の整数とするとき、以下の問いに答えよ。

(1) 行列 $A$ の固有値と固有ベクトルを求めよ。

(2) $A^n$ を求めよ。

(3) 次の $4 \times 4$ 行列のランクを求めよ。

## **Kai**
### (1)
$A$ の固有値を $\lambda$ とすると、

$$
  \begin{aligned}
  0
  &= \det \begin{pmatrix} a - \lambda & 1-a \\ 1+a & -a - \lambda \end{pmatrix}
  \\
  &= ( \lambda + 1 )( \lambda - 1 )
  \\
  \therefore \ \ \lambda &= \pm 1
  \end{aligned}
$$

となる。

固有値 $-1$ に属する固有ベクトルを求めるため

$$
  \begin{aligned}
  \begin{pmatrix} a+1 & 1-a \\ 1+a & -a+1 \end{pmatrix}
  \begin{pmatrix} u \\ v \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $(a+1)u=(a-1)v$ を得るので、固有ベクトルとして、例えば

$$
  \begin{aligned}
  \begin{pmatrix} a-1 \\ a+1 \end{pmatrix}
  \end{aligned}
$$

がある。

固有値 $1$ に属する固有ベクトルを求めるため

$$
  \begin{aligned}
  \begin{pmatrix} a-1 & 1-a \\ 1+a & -a-1 \end{pmatrix}
  \begin{pmatrix} u \\ v \end{pmatrix}
  =
  \begin{pmatrix} 0 \\ 0 \end{pmatrix}
  \end{aligned}
$$

とおくと、 $u=v$ を得るので、固有ベクトルとして、例えば

$$
  \begin{aligned}
  \begin{pmatrix} 1 \\ 1 \end{pmatrix}
  \end{aligned}
$$

がある。

### (2)

$$
\begin{aligned}
  A^2
  = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
\end{aligned}
$$

なので、 $n$ が奇数のときは

$$
  \begin{aligned}
  A^n
  = A
  = \begin{pmatrix} a & 1-a \\ 1+a & -a \end{pmatrix}
  \end{aligned}
$$

であり、 $n$ が偶数のときは

$$
  \begin{aligned}
  A^n
  = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
  \end{aligned}
$$

である。

### (3)

$$
  \begin{aligned}
  \begin{pmatrix} A^{2n} & A^{2n+1} \\ A^{2n+1} & A^{2n} \end{pmatrix}
  &=
  \begin{pmatrix}
    a & 1-a &   1 & 0   \\
  1+a &  -a &   0 & 1   \\
    1 &   0 &   a & 1-a \\
    0 &   1 & 1+a &  -a
  \end{pmatrix}
  &\left( =
  \begin{pmatrix}
  \boldsymbol{a} & \boldsymbol{b} &
  \boldsymbol{c} & \boldsymbol{d}
  \end{pmatrix}
  \text{ とおく } \right)
  \end{aligned}
$$

$\boldsymbol{a},\boldsymbol{b}$ が1次独立であるのは明らかであり、

$$
  \begin{aligned}
  \boldsymbol{c} &= a \boldsymbol{a} + (1+a) \boldsymbol{b}
  ,\\
  \boldsymbol{d} &= (1-a) \boldsymbol{a} - a \boldsymbol{b}
  \end{aligned}
$$

であるから、求めるランクは $2$ である。