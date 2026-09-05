---
sidebar_label: "2021年7月実施 数理基礎 問題D"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Transformation
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Affine-Solution-Space-of-Linear-System
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Basis-and-Dimension
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年7月実施 数理基礎 問題D

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問D1

$R$ を実数集合 (set of real numbers) とし、

$$
A = \begin{bmatrix} 1 & 1 & 2 \\ 2 & -1 & 1 \\ 3 & 1 & 3 \\ 2 & -1 & 0 \end{bmatrix}
$$

とし、線形写像 (linear transformation) $f: R^3 \to R^4$ が

$$
f(\mathbf{x}) = A\mathbf{x}, \quad \mathbf{x} \in R^3
$$

と表せるとする。このとき、 $f(\mathbf{x}) = f(\mathbf{y})$ ならば $\mathbf{x} = \mathbf{y}$ であることを示せ。

#### 小問D2

平面上の点のx座標がすべて異なるとき、2次曲線(quadratic curve) $y = a_0 + a_1x + a_2x^2$ (ただし、 $a_0, a_1, a_2$ は定数)でこれらの3点を通るものが1つであることを示せ。

#### 小問D3

$A$ を任意の $n$ 次正方行列 (n-dimension matrix) とし、 $B$ を $n$ 次の正則行列 (non-singular matrix) とするとき、 $A$ の固有値 (eigenvalue) と $B^{-1}AB$ の固有値は一致することを示せ。

### 题目描述

#### 小问D1

记实数集为 $\mathbb R$，令

$$
A=\begin{bmatrix}
1&1&2\\
2&-1&1\\
3&1&3\\
2&-1&0
\end{bmatrix},
$$

并定义线性映射

$$
f:\mathbb R^3\to\mathbb R^4,\qquad
f(\mathbf x)=A\mathbf x\quad(\mathbf x\in\mathbb R^3).
$$

证明：若 $f(\mathbf x)=f(\mathbf y)$，则 $\mathbf x=\mathbf y$。

#### 小问D2

平面上给定三个点，且它们的 $x$ 坐标两两不同。证明存在唯一一条形如

$$
y=a_0+a_1x+a_2x^2
$$

的二次曲线通过这三个点，其中 $a_0,a_1,a_2$ 为常数。

#### 小问D3

设 $A$ 为任意 $n$ 阶方阵，$B$ 为 $n$ 阶可逆矩阵。证明 $A$ 与

$$
B^{-1}AB
$$

的特征值相同。

## **Kai**

### 小問D1

We want to show that if $f(\mathbf{x}) = f(\mathbf{y})$ , then $\mathbf{x} = \mathbf{y}$ . This is equivalent to showing that $f(\mathbf{x}) = A\mathbf{x}$ is injective (one-to-one).

If $f(\mathbf{x}) = f(\mathbf{y})$ , then $A\mathbf{x} = A\mathbf{y}$ .
Thus, $A\mathbf{x} - A\mathbf{y} = \mathbf{0}$ , which means $A(\mathbf{x} - \mathbf{y}) = \mathbf{0}$ .
Let $\mathbf{z} = \mathbf{x} - \mathbf{y}$ . We want to show that $A\mathbf{z} = \mathbf{0}$ implies $\mathbf{z} = \mathbf{0}$ .

In other words, we want to show that the kernel (null space) of $A$ is only the zero vector.  We can determine this by row reducing $A$ .

$$
A = \begin{bmatrix} 1 & 1 & 2 \\ 2 & -1 & 1 \\ 3 & 1 & 3 \\ 2 & -1 & 0 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & -3 & -3 \\ 0 & -2 & -3 \\ 0 & -3 & -4 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & -2 & -3 \\ 0 & -3 & -4 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & -1 \\ 0 & 0 & -1 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \sim \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}
$$

Since the row reduced echelon form of $A$ has rank 3, which is the number of columns, the kernel of $A$ is $\{\mathbf{0}\}$ . Thus, $A\mathbf{z} = \mathbf{0}$ implies $\mathbf{z} = \mathbf{0}$ .  Since $\mathbf{z} = \mathbf{x} - \mathbf{y}$ , we have $\mathbf{x} - \mathbf{y} = \mathbf{0}$ , so $\mathbf{x} = \mathbf{y}$ .

### 小問D2

Here the polynomial has degree at most two: $a_2$ may be zero. If the three points are collinear, the unique interpolant is a line, so a polynomial of degree exactly two need not exist.

Let the three points be $(x_1, y_1), (x_2, y_2), (x_3, y_3)$ . Since $x_1, x_2, x_3$ are all distinct, we want to show that there exists a unique set of constants $a_0, a_1, a_2$ such that the quadratic curve $y = a_0 + a_1x + a_2x^2$ passes through these three points.  This means we have the following system of equations:

$$
\begin{cases}
y_1 = a_0 + a_1x_1 + a_2x_1^2 \\
y_2 = a_0 + a_1x_2 + a_2x_2^2 \\
y_3 = a_0 + a_1x_3 + a_2x_3^2
\end{cases}
$$

This is a linear system of equations in the unknowns $a_0, a_1, a_2$ .  We can represent this as a matrix equation $Ax = b$ , where

$$
A = \begin{pmatrix} 1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2 \end{pmatrix}, \quad x = \begin{pmatrix} a_0 \\ a_1 \\ a_2 \end{pmatrix}, \quad b = \begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}
$$

The matrix $A$ is a Vandermonde matrix.  The determinant of $A$ is given by

$$
\det(A) = (x_2 - x_1)(x_3 - x_1)(x_3 - x_2)
$$

Since $x_1, x_2, x_3$ are all distinct, $\det(A) \neq 0$ .  Thus, the matrix $A$ is invertible, and there is a unique solution for $x = A^{-1}b$ .  This means there is a unique set of constants $a_0, a_1, a_2$ such that the quadratic curve $y = a_0 + a_1x + a_2x^2$ passes through the three points $(x_1, y_1), (x_2, y_2), (x_3, y_3)$ .

### 小問D3

Let $\lambda$ be an eigenvalue of $A$ , and let $v$ be the corresponding eigenvector. Then $Av = \lambda v$ .
We want to show that $\lambda$ is also an eigenvalue of $B^{-1}AB$ .
Let $w = B^{-1}v$ . Since $B$ is invertible, $B^{-1}v \neq 0$ if $v\neq 0$ .  Thus $w$ is a non-zero vector.
Then

$$
(B^{-1}AB)w
=B^{-1}AB(B^{-1}v)
=B^{-1}Av
=\lambda B^{-1}v
=\lambda w.
$$

This shows that $\lambda$ is an eigenvalue of $B^{-1}AB$ .
Suppose $\lambda$ is an eigenvalue of $B^{-1}AB$ . Then there exists $v \neq 0$ such that $B^{-1}ABv = \lambda v$ .
Multiply both sides by $B$ from the left. $B(B^{-1}ABv) = B(\lambda v)$ , so $ABv = \lambda Bv$ .
Let $w = Bv$ . Since $B$ is invertible and $v \neq 0$ , $Bv \neq 0$ . Thus, $w \neq 0$ . Therefore $Aw = \lambda w$ . This means $\lambda$ is an eigenvalue of $A$ .
Therefore, the eigenvalues of $A$ and $B^{-1}AB$ are the same.
