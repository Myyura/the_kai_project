---
sidebar_label: "2024年8月実施 数1 [1]"
tags:
  - Nagoya-University
  - Mathematics.Linear-Algebra.Positive-Definite-Matrix
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2024年8月実施 数1 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

行列 $X$ を $n\times n$ の実行列とする。行列 $Y$ に対して $Y^T$ はその転置行列を表す。零ベクトルではない任意の $n$ 次元実ベクトル $x$ に対して $x^T Xx>0$ を満たす行列 $X$ を正定値行列と呼ぶ。以下の問いにすべて答えよ。

#### (1)

行列 $M = \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}$ は正定値行列である。 $x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$ として $x^T M x$ を計算することでこのことを示せ。

#### (2)

行列

$$
N = \begin{bmatrix} 2 & 4 \\ 3 & -5 \end{bmatrix}
$$

は正定値行列ではない。 $x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$ として $x^TNx$ を計算することでこのことを示せ。

#### (3)

$X = X^T$ となる行列 $X$ を対称行列と呼ぶ。行列 $X$ が正定値かつ対称であるとき, その固有値は常に正の実数であることを証明せよ。なお、対称行列の固有値・固有ベクトルがそれぞれ実数・実ベクトルであることは既知としてよい。

### 题目描述

设 $X$ 为 $n\times n$ 实矩阵，$Y^{\mathsf T}$ 表示矩阵 $Y$ 的转置。若对每个非零实向量 $x$ 都有 $x^{\mathsf T}Xx>0$，则称 $X$ 为正定矩阵。回答下列全部问题。

#### (1)

矩阵

$$
M=\begin{bmatrix}2&0\\0&1\end{bmatrix}
$$

是正定矩阵。令

$$
\boldsymbol x=\begin{bmatrix}x_1\\x_2\end{bmatrix}.
$$

通过计算 $\boldsymbol x^{\mathsf T}M\boldsymbol x$ 证明 $M$ 的正定性。

#### (2)

矩阵

$$
N=\begin{bmatrix}2&4\\3&-5\end{bmatrix}
$$

不是正定矩阵。令

$$
\boldsymbol x=\begin{bmatrix}x_1\\x_2\end{bmatrix}.
$$

通过计算 $\boldsymbol x^{\mathsf T}N\boldsymbol x$ 证明这一结论。

#### (3)

满足 $X=X^{\mathsf T}$ 的矩阵 $X$ 称为对称矩阵。证明：若矩阵 $X$ 同时为正定矩阵和对称矩阵，则 $X$ 的每个特征值都是正实数。

可以直接使用以下已知事实：实对称矩阵的特征值均为实数，并且可取相应的实特征向量。

## **Kai**

### (1)

正定値行列であることの証明は、 $x^T M x > 0$ for all $x \neq 0$ を示すことである。

$x^T M x = \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} 2x_1 \\ x_2 \end{bmatrix} = 2x_1^2 + x_2^2$

$2x_1^2 + x_2^2$ は、 $x_1$ と $x_2$ が同時に 0 でない限り常に正である。つまり、 $x \neq 0$ ならば $x^T M x > 0$ である。したがって、行列 $M$ は正定値行列である。

### (2)

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

### (3)

【証明】

$X$ を正定値対称行列とする。このとき、 $X$ の固有値を $\lambda$ 、対応する固有ベクトルを $v$ とすると、

$$
Xv = \lambda v
$$

$X$ が対称行列であることと、既知の事実から、 $v$ は実ベクトルである。また、 $v \neq 0$ である。

両辺に $v^T$ を左から掛けると、

$$
v^T Xv = \lambda v^T v
$$

したがって、

$$
\lambda = \frac{v^T Xv}{v^T v}
$$

ここで、 $v^T v = ||v||^2 > 0$ である（ $v \neq 0$ より）。

また、 $X$ が正定値行列であることから、 $x^T Xx > 0$ for all $x \neq 0$ . 特に $v \neq 0$ なので、 $v^T Xv > 0$ である。

したがって、

$$
\lambda = \frac{v^T Xv}{v^T v} > 0
$$

よって、 $X$ の固有値 $\lambda$ は常に正の実数である。

（証明終わり）
