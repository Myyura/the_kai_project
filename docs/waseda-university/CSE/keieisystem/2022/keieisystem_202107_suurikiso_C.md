---
sidebar_label: "2021年7月実施 数理基礎 問題C"
tags:
  - Waseda-University
  - Mathematics.Linear-Algebra.Linear-Independence
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Diagonalization
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年7月実施 数理基礎 問題C

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問C1

ベクトル $\mathbf{e}_1$ , $\mathbf{e}_2$ が線形独立 (linearly independent) で、ベクトル $\mathbf{a}_1$ , $\mathbf{a}_2$ が次のように表されるとする。

$$
\mathbf{a}_1 = 5\mathbf{e}_1 + 3\mathbf{e}_2
$$

$$
\mathbf{a}_2 = 2\mathbf{e}_1 + \mathbf{e}_2
$$

このとき、 $\mathbf{a}_1$ , $\mathbf{a}_2$ も線形独立であることを示せ。

#### 小問C3

行列(matrix) $A = \begin{pmatrix} 2 & 3 \\ 2 & 1 \end{pmatrix}$ を対角化(diagonalization)する正則行列(non-singular matrix) $P$ を求めよ。

### 题目描述

#### 小问C1

设向量 $\mathbf e_1,\mathbf e_2$ 线性无关，并定义

$$
\mathbf a_1=5\mathbf e_1+3\mathbf e_2,
\qquad
\mathbf a_2=2\mathbf e_1+\mathbf e_2.
$$

证明 $\mathbf a_1,\mathbf a_2$ 也线性无关。

#### 小问C3

求一个将矩阵

$$
A=\begin{pmatrix}
2&3\\
2&1
\end{pmatrix}
$$

对角化的可逆矩阵 $P$。

## **Kai**

### 小問C1

線形独立を示すためには、 $c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 = \mathbf{0}$ が成り立つとき、 $c_1 = c_2 = 0$ であることを示せばよい。

$c_1 \mathbf{a}_1 + c_2 \mathbf{a}_2 = \mathbf{0}$ より、

$$
c_1(5\mathbf{e}_1 + 3\mathbf{e}_2) + c_2(2\mathbf{e}_1 + \mathbf{e}_2) = \mathbf{0}
$$

$$
(5c_1 + 2c_2)\mathbf{e}_1 + (3c_1 + c_2)\mathbf{e}_2 = \mathbf{0}
$$

$\mathbf{e}_1$ と $\mathbf{e}_2$ は線形独立なので、

$$
5c_1 + 2c_2 = 0
$$

$$
3c_1 + c_2 = 0
$$

この連立方程式を解く。
2番目の式より、 $c_2 = -3c_1$ 。これを1番目の式に代入すると、

$$
5c_1 + 2(-3c_1) = 0
$$

$$
5c_1 - 6c_1 = 0
$$

$$
-c_1 = 0
$$

$$
c_1 = 0
$$

$c_1 = 0$ を $c_2 = -3c_1$ に代入すると、 $c_2 = -3(0) = 0$ 。

したがって、 $c_1 = c_2 = 0$ となるため、 $\mathbf{a}_1$ と $\mathbf{a}_2$ は線形独立である。

### 小問C3

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
