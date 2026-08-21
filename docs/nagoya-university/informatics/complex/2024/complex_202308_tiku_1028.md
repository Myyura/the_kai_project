---
sidebar_label: "2023年8月実施 线性代数"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2023年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列

$$
N = \begin{bmatrix} 2 & 4 \\ 3 & -5 \end{bmatrix}
$$

は正定値行列ではない。 $x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$ として $x^TNx$ を計算することでこのことを示せ。

### 题目描述

矩阵

$$
N=\begin{bmatrix}2&4\\3&-5\end{bmatrix}
$$

不是正定矩阵。令

$$
\boldsymbol x=\begin{bmatrix}x_1\\x_2\end{bmatrix}.
$$

通过计算 $\boldsymbol x^{\mathsf T}N\boldsymbol x$ 证明这一结论。

## **Kai**

正定値行列とは、任意のベクトル $x \neq 0$ に対して $x^T A x > 0$ を満たす行列Aのことである。

$$
x^TNx = \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} 2 & 4 \\ 3 & -5 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}
$$

$$
= \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} 2x_1 + 4x_2 \\ 3x_1 - 5x_2 \end{bmatrix}
$$

$$
= x_1(2x_1 + 4x_2) + x_2(3x_1 - 5x_2)
$$

$$
= 2x_1^2 + 4x_1x_2 + 3x_1x_2 - 5x_2^2
$$

$$
= 2x_1^2 + 7x_1x_2 - 5x_2^2
$$

正定値行列であるためには、常に $2x_1^2 + 7x_1x_2 - 5x_2^2 > 0$ である必要がある。しかし、これは成り立たないことを示すために、特定の $x_1$ と $x_2$ の値を選んで計算する。

例えば、 $x_1 = 1$ , $x_2 = 2$ のとき

$$
2(1)^2 + 7(1)(2) - 5(2)^2 = 2 + 14 - 20 = -4 < 0
$$

したがって、 $N$ は正定値行列ではない。
