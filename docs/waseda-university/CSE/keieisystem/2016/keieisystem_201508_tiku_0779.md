---
sidebar_label: "2015年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の行列 $A$ のすべての固有値を求めよ。行列 $A$ は正則(nonsingular)行列によって対角化(diagonalize)可能か。対角化可能ならば、対角化せよ。

$$
A = \begin{bmatrix} 1 & -3 & 3 \\ 3 & -5 & 3 \\ 6 & -6 & 4 \end{bmatrix}
$$

### 题目描述

求矩阵

$$
A=
\begin{bmatrix}
1&-3&3\\
3&-5&3\\
6&-6&4
\end{bmatrix}
$$

的全部特征值，并判断 $A$ 能否通过可逆矩阵对角化；若能，请给出其对角化。

## **Kai**

まず、固有値を求めるために、特性方程式 $|A - \lambda I| = 0$ を解きます。

$$
|A - \lambda I| = \begin{vmatrix} 1 - \lambda & -3 & 3 \\ 3 & -5 - \lambda & 3 \\ 6 & -6 & 4 - \lambda \end{vmatrix} = 0
$$

行列式を計算します。

$$
(1-\lambda)[(-5-\lambda)(4-\lambda) - (-6)(3)] - (-3)[3(4-\lambda) - (6)(3)] + 3[3(-6) - 6(-5-\lambda)] = 0
$$

$$
(1-\lambda)[-20 + 5\lambda - 4\lambda + \lambda^2 + 18] + 3[12 - 3\lambda - 18] + 3[-18 + 30 + 6\lambda] = 0
$$

$$
(1-\lambda)[\lambda^2 + \lambda - 2] + 3[-6 - 3\lambda] + 3[12 + 6\lambda] = 0
$$

$$
\lambda^2 + \lambda - 2 - \lambda^3 - \lambda^2 + 2\lambda - 18 - 9\lambda + 36 + 18\lambda = 0
$$

$$
-\lambda^3 + 12\lambda + 16 = 0
$$

$$
\lambda^3 - 12\lambda - 16 = 0
$$

$(\lambda + 2)(\lambda^2 - 2\lambda - 8) = 0$

$(\lambda + 2)(\lambda - 4)(\lambda + 2) = 0$

よって、固有値は $\lambda_1 = -2$ , $\lambda_2 = -2$ , $\lambda_3 = 4$ です。

$\lambda = -2$ の固有ベクトルを求めます。

$$
(A - (-2)I)v = 0
$$

$$
\begin{bmatrix} 3 & -3 & 3 \\ 3 & -3 & 3 \\ 6 & -6 & 6 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}
$$

$$
3x - 3y + 3z = 0
$$

$$
x - y + z = 0
$$

$$
x = y - z
$$

$$
v_1 = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}, v_2 = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}
$$

$\lambda = 4$ の固有ベクトルを求めます。

$(A - 4I)v = 0$

$$
\begin{bmatrix} -3 & -3 & 3 \\ 3 & -9 & 3 \\ 6 & -6 & 0 \end{bmatrix}
\begin{bmatrix} x \\ y \\ z \end{bmatrix} =
\begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}
$$

$-3x - 3y + 3z = 0$

$3x - 9y + 3z = 0$

$6x - 6y = 0$

$x + y - z = 0$

$x - 3y + z = 0$

$x = y$

$2x - z = 0, z = 2x$

$$
v_3 = \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix}
$$

固有ベクトルは線形独立なので、行列 $A$ は対角化可能です。

$$
P = \begin{bmatrix} 1 & -1 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 2 \end{bmatrix}
$$

$$
D = \begin{bmatrix} -2 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & 4 \end{bmatrix}
$$

$P^{-1}AP = D$
