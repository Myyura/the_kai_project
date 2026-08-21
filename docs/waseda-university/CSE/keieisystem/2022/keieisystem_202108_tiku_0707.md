---
sidebar_label: "2021年8月実施 线性代数"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列(matrix) $A = \begin{pmatrix} 2 & 3 \\ 2 & 1 \end{pmatrix}$ を対角化(diagonalization)する正則行列(non-singular matrix) $P$ を求めよ。

### 题目描述

求一个将矩阵

$$
A=\begin{pmatrix}
2&3\\
2&1
\end{pmatrix}
$$

对角化的可逆矩阵 $P$。

## **Kai**

特征多项式为:

$$
\det(A - \lambda I) = \begin{vmatrix} 2 - \lambda & 3 \\ 2 & 1 - \lambda \end{vmatrix} = (2 - \lambda)(1 - \lambda) - 6 = \lambda^2 - 3\lambda - 4 = (\lambda - 4)(\lambda + 1)
$$

特征值为 $\lambda_1 = 4, \lambda_2 = -1$ .

当 $\lambda_1 = 4$ 时，解 $(A - 4I)x = 0$ :

$$
\begin{pmatrix} -2 & 3 \\ 2 & -3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$-2x_1 + 3x_2 = 0$ ，解得 $x = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$ 为一个特征向量。

当 $\lambda_2 = -1$ 时，解 $(A + I)x = 0$ :

$$
\begin{pmatrix} 3 & 3 \\ 2 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$x_1 + x_2 = 0$ ，解得 $x = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ 为一个特征向量。

所以 $P = \begin{pmatrix} 3 & 1 \\ 2 & -1 \end{pmatrix}$ ，则 $P^{-1}AP = \begin{pmatrix} 4 & 0 \\ 0 & -1 \end{pmatrix}$
