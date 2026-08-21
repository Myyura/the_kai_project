---
sidebar_label: "2020年8月実施 线性代数"
tags:
  - Meiji-University
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Linear-Algebra.Matrix-Inverse
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2020年8月実施 线性代数

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

行列 $A$ を

$$
A = \begin{pmatrix}
1 & 2 & 1 \\
0 & 2 & 0 \\
0 & -1 & 3
\end{pmatrix}
$$

で定義する。以下の問いに答えよ。

(a) $A$ の固有値をすべて求め、それぞれに対応する固有ベクトルを示せ。

(b) $A$ に逆行列が存在するかどうかを理由と共に述べよ。

(c) $A^n$ を求めよ。

### 题目描述

定义矩阵

$$
A=\begin{pmatrix}
1&2&1\\
0&2&0\\
0&-1&3
\end{pmatrix}.
$$

回答下列问题。

(a) 求 $A$ 的全部特征值，并给出分别对应于各特征值的特征向量。

(b) 说明 $A$ 是否存在逆矩阵，并给出理由。

(c) 求 $A^n$。

## **Kai**

(a) まず固有値を求める。固有方程式は $|A - \lambda I| = 0$ より

$$
\begin{vmatrix} 1-\lambda & 2 & 1 \\ 0 & 2-\lambda & 0 \\ 0 & -1 & 3-\lambda \end{vmatrix} = (1-\lambda)(2-\lambda)(3-\lambda) = 0
$$

よって、固有値は $\lambda_1 = 1, \lambda_2 = 2, \lambda_3 = 3$ である。

次に固有ベクトルを求める。

$\lambda_1 = 1$ のとき、 $(A - I)v = 0$ を解く。

$$
\begin{pmatrix} 0 & 2 & 1 \\ 0 & 1 & 0 \\ 0 & -1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$y = 0$ であり、 $z = 0$ である。 $x$ は任意。
よって、固有ベクトルは $v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ のスカラー倍。

$\lambda_2 = 2$ のとき、 $(A - 2I)v = 0$ を解く。

$$
\begin{pmatrix} -1 & 2 & 1 \\ 0 & 0 & 0 \\ 0 & -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$-x + 2y + z = 0$ かつ $-y + z = 0$ より、 $z = y$ かつ $x = 3y$ 。
よって、固有ベクトルは $v_2 = \begin{pmatrix} 3 \\ 1 \\ 1 \end{pmatrix}$ のスカラー倍。

$\lambda_3 = 3$ のとき、 $(A - 3I)v = 0$ を解く。

$$
\begin{pmatrix} -2 & 2 & 1 \\ 0 & -1 & 0 \\ 0 & -1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

$y = 0$ であり、 $-2x + z = 0$ より $z = 2x$ 。
よって、固有ベクトルは $v_3 = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$ のスカラー倍。

(b) $A$ の行列式は $\det(A) = 1 \times 2 \times 3 = 6 \neq 0$ であるから、 $A$ に逆行列が存在する。

(c) $P = \begin{pmatrix} 1 & 3 & 1 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ とすると、 $A = PDP^{-1}$ と対角化できる。ただし、 $D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ である。
$A^n = PD^nP^{-1}$ である。 $D^n = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2^n & 0 \\ 0 & 0 & 3^n \end{pmatrix}$ である。
$P^{-1} = \begin{pmatrix} 1 & -5/2 & -1/2 \\ 0 & 1 & 0 \\ 0 & -1/2 & 1/2 \end{pmatrix}$
よって、

$$
A^n=
\begin{pmatrix}
1&-\frac52+3\cdot2^n-\frac{3^n}{2}&\frac{3^n-1}{2}\\
0&2^n&0\\
0&2^n-3^n&3^n
\end{pmatrix}.
$$
