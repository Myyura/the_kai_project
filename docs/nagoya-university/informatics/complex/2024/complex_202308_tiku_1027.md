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

行列 $M = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}$ は正定値行列である。 $x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$ として $x^T M x$ を計算することでこのことを示せ。

### 题目描述

矩阵

$$
M=\begin{bmatrix}2&0\\0&1\end{bmatrix}
$$

是正定矩阵。令

$$
\boldsymbol x=\begin{bmatrix}x_1\\x_2\end{bmatrix}.
$$

通过计算 $\boldsymbol x^{\mathsf T}M\boldsymbol x$ 证明 $M$ 的正定性。

## **Kai**

正定値行列であることの証明は、 $x^T M x > 0$ for all $x \neq 0$ を示すことである。

$x^T M x = \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} 2x_1 \\ x_2 \end{bmatrix} = 2x_1^2 + x_2^2$

$2x_1^2 + x_2^2$ は、 $x_1$ と $x_2$ が同時に 0 でない限り常に正である。つまり、 $x \neq 0$ ならば $x^T M x > 0$ である。したがって、行列 $M$ は正定値行列である。
