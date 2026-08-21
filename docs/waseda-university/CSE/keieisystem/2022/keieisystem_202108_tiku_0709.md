---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Matrix-Determinant
  - Mathematics.Linear-Algebra.Affine-Solution-Space-of-Linear-System
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

平面上の点のx座標がすべて異なるとき、2次曲線(quadratic curve) $y = a_0 + a_1x + a_2x^2$ (ただし、 $a_0, a_1, a_2$ は定数)でこれらの3点を通るものが1つであることを示せ。

### 题目描述

平面上给定三个点，且它们的 $x$ 坐标两两不同。证明存在唯一一条形如

$$
y=a_0+a_1x+a_2x^2
$$

的二次曲线通过这三个点，其中 $a_0,a_1,a_2$ 为常数。

## **Kai**

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
